import arrowRight from "../../../../../assets/navbar/menu/arrowRight.png";
import CoreNavbarMenuMobileTrigger from "./trigger";
import { NavbarItem } from "../../type";
import { useState } from "react";

export default function CoreNavbarMenuMobile({ data }: { data: NavbarItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const [openGrandchildren, setOpenGrandchildren] = useState<
    Record<string, boolean>
  >({});

  const toggleGrandchildren = (childId: string) => {
    setOpenGrandchildren((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  return (
    <nav className="flex-col w-full laptop:hidden">
      <div
        className={`laptop:flex laptop:rounded-b-2xl h-12 w-full bg-dark_blue laptop:absolute transition-transform duration-200`}
      >
        <CoreNavbarMenuMobileTrigger
          onClick={() => setIsOpen(!isOpen)}
          isOpen={isOpen}
        />
      </div>
      <ul className={`laptop:flex laptop:justify-center w-full`}>
        {data.children?.map((parent: NavbarItem, i: number) => (
          <li className="laptop:relative laptop:group" key={i}>
            <div className="laptop:flex hidden text-white laptop:p-2 w-full hover:text-second_blue">
              <a href={parent.to} key={parent.id}>
                {parent.label}
              </a>
            </div>
            <div
              className={`laptop:hidden w-full bg-white transition-transform duration-300 ${
                isOpen ? "translate-x-0" : "-translate-x-full"
              } z-2`}
            >
              {
                <ul className="w-100 text-dark_blue transform  transition-all duration-200 ">
                  {parent.children?.map((child: NavbarItem, idx: number) => (
                    <>
                      <li key={idx} className=" text-black">
                        <div
                          className=" flex justify-between items-center group w-full p-4 pl-6 pr-6"
                          onClick={() => toggleGrandchildren(child.id)}
                        >
                          <img
                            src={child?.img}
                            key={child.id}
                            className="w-16"
                          />
                          <h3>{child.label}</h3>
                          <img
                            src={arrowRight}
                            alt="grandChildArrow"
                            className={`w-auto h-8 transition duration-200 ${
                              openGrandchildren[child.id]
                                ? "rotate-0"
                                : "rotate-180"
                            }`}
                          />
                        </div>
                        <hr className="border-black w-100" />
                        {openGrandchildren[child.id] && (
                          <ul className="m-8">
                            {child.children?.map(
                              (grandchild: NavbarItem, idx: number) => (
                                <>
                                  <li key={idx} className="text-base mb-3">
                                    <a href={child.to} key={child.id}>
                                      {grandchild.label}
                                    </a>
                                  </li>
                                </>
                              )
                            )}
                          </ul>
                        )}
                      </li>
                    </>
                  ))}
                </ul>
              }
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
