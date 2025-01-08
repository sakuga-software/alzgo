import { NavbarItem } from '../../type';
function CoreNavbarDesktopTrigger({ data }: { data: NavbarItem }) {
  if (!data.children || data.children.length === 0) {
    return null;
  }

  return (
    <div className="absolute hidden group-hover:block">
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
        <div className="flex w-full justify-center gap-4 bg-white px-[10px] py-2" key={child.id}>
          <img src={child?.img} className="w-16" />
          <p className="cursor-pointer text-black">{child.label}</p>
          <div>
            {child.children?.map((grandchild) => (
              <div key={grandchild.id}>
                <a href={grandchild.to}>{grandchild.label}</a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoreNavbarDesktopTrigger;
