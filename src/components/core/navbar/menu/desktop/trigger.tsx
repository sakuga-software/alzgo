import { NavbarItem } from "../../type";
export default function CoreNavbarDesktopTrigger({
  data,
}: {
  data: NavbarItem;
}) {
  return (
    <>
      {data.children && data.children.length > 0 && (
        <div className="hidden group-hover:block absolute">
          {data.children?.map((child) => (
            //           <ul className="laptop:grid bg-white fixed left-[10%] hidden grid-rows-3 grid-cols-4 gap-8 w-[80%] p-8">
            // {parent.children?.map(
            //   (child: NavbarItem, idx: number) => (
            //     <>
            //       <li
            //         key={child.id}
            //         className={`text-base ${
            //           child.id === "products-cabin"
            //             ? "row-span-2"
            //             : "row-span-1"
            //         }`}
            //       >
            //         <img
            //           src={child.img}
            //           key={idx}
            //           className="laptop:w-16"
            //         />
            //         <div className="mb-2">{child.label}</div>
            //         <ul>
            <div className="flex justify-center w-full bg-white px-[10px] py-2 gap-4">
              <img src={child?.img} className="w-16" />
              <p className="text-black  cursor-pointer">{child.label}</p>
              <div>
                {child.children?.map((grandchild) => {
                  return (
                    <div>
                      <a href={grandchild.to}>{grandchild.label}</a>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
