import { NavbarItem } from "../../type";
import { useState } from "react";

export default function CoreNavbarMenuDesktop({ data }: { data: NavbarItem }) {
  const [hoveredParent, setHoveredParent] = useState<string | null>(null);
  return (
    <>
      <nav className="flex-col w-full hidden laptop:flex">
        {/* <div className="flex justify-center w-full bg-dark_blue px-[10px] py-2 gap-4">
          {data.children?.map((item) => (
            <div className="group">
              <p className="text-white cursor-pointer">{item.label}</p>

               In another file 
              {item.children && item.children.length > 0 && (
                <div className="hidden group-hover:block absolute">
                  {item.children?.map((child) => (
                    <div className="flex justify-center w-full bg-dark_blue px-[10px] py-2 gap-4">
                      <p className="text-white cursor-pointer">{child.label}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div> */}

        <div
          className={`laptop:flex laptop:rounded-b-2xl h-12 w-full bg-dark_blue laptop:absolute transition-transform duration-200`}
        >
          <ul className={`laptop:flex laptop:justify-center w-full`}>
            {data.children?.map((parent: NavbarItem, i: number) => (
              <li
                className="laptop:relative laptop:group"
                key={i}
                onMouseEnter={() => setHoveredParent(parent.id)}
                onMouseLeave={() => setHoveredParent(null)}
              >
                <div className="flex  text-white p-2 ml-4 mr-4 w-full hover:text-second_blue">
                  <a href={parent.to} key={parent.id}>
                    {parent.label}
                  </a>
                </div>
                <div className="grid">
                  {hoveredParent === parent.id &&
                    parent.children?.length > 0 && (
                      <ul className="laptop:grid bg-white fixed left-[10%] hidden grid-rows-3 grid-cols-4 gap-8 w-[80%] p-8">
                        {parent.children?.map(
                          (child: NavbarItem, idx: number) => (
                            <>
                              <li
                                className={`text-base ${
                                  child.id === "products-cabin"
                                    ? "row-span-2"
                                    : "row-span-1"
                                }`}
                              >
                                <img
                                  src={child.img}
                                  key={idx}
                                  className="laptop:w-16"
                                />
                                <div className="mb-2">{child.label}</div>
                                <ul>
                                  {child.children?.map(
                                    (grandChild: NavbarItem, idx: number) => (
                                      <>
                                        <li className="text-sm" key={idx}>
                                          <a
                                            href={grandChild.to}
                                            key={grandChild.id}
                                          >
                                            {grandChild.label}
                                          </a>
                                        </li>
                                      </>
                                    )
                                  )}
                                </ul>
                              </li>
                            </>
                          )
                        )}
                      </ul>
                    )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}
