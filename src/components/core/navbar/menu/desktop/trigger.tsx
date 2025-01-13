import { NavbarItem } from '../../type';
import { cn } from '../../../../../utils/cn';

function CoreNavbarDesktopTrigger({ data }: { data: NavbarItem }) {
  if (!data.children || data.children.length === 0) {
    return null;
  }

  return (
    <div className="hidden group-hover:block laptop:absolute">
      {data.children?.map((child) => (
        //<ul className="laptop:grid bg-white fixed left-[10%] hidden grid-rows-3 grid-cols-4 gap-8 w-[80%] p-8">
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
        <div className="w-full flex-col justify-center gap-4 bg-white px-[10px] py-2 align-middle" key={child.id}>
          <img src={child?.img} className="w-16" />
          <p className="cursor-pointer font-normal text-black">{child.label}</p>
          <div className="w-[80%] bg-white p-8 laptop:grid">
            {child.children?.map((grandchild) => (
              <div className="text-sm" key={grandchild.id}>
                <a className="font-normal text-black hover:text-second_blue" key={grandchild.id} href={grandchild.to}>
                  {grandchild.label}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default CoreNavbarDesktopTrigger;
