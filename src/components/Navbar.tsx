import * as React from "react";
import { useState } from "react";
import navbarData from "../data/json";
import logoNav from "../assets/navbar/logo-nav.png";
import loupe from "../assets/navbar/loupe.png";
import account from "../assets/navbar/account-nav.png";
import favoris from "../assets/navbar/favoris-nav.png";
import shop from "../assets/navbar/shopping-nav.png";
import logoMobile from "../assets/navbar/logo-nav-mobile.png";
import logoMobileText from "../assets/navbar/title-logo-mobile.png";
import arrowRight from "../assets/navbar/menu/arrowRight.png";

type navbarDataGrandchildren = {
  id: string;
  label: string | number | boolean;
  to: string;
};

type navbarDataChildren = {
  id: string;
  label: string | number | boolean;
  to: string;
  img?: string;
  children?: navbarDataGrandchildren[];
};

type navbarData = {
  id: string;
  label: string | number | boolean;
  to: string;
  children: navbarDataChildren[];
};

const Navbar: React.FC = () => {
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
    <>
      <nav className="flex-col w-full ">
        <div className="laptop:p-4 laptop:justify-between laptop:pl-12 laptop:pr-12 laptop:flex-row flex-col flex items-center ">
          <img className="w-20 hidden laptop:flex" src={logoNav} />
          <div className=" flex items-center laptop:hidden">
            <img className="h-16" src={logoMobile} />
            <img className="w-28" src={logoMobileText} />
          </div>
          <div>
            <form
              id="search-form"
              className=" rounded-full border-dark_blue border-[1px] flex"
            >
              <input
                className=" m-4 ml-6 w-64 laptop:w-96 "
                type="search"
                id="search-input"
                placeholder="Recherche une pièce"
              />
              <button
                className="border-l-[1px] h-100 bg-second_blue rounded-r-full p-3"
                id="search-btn"
              >
                <img src={loupe} className="w-6" />
              </button>
            </form>
          </div>
          <div className="laptop:m-0 m-4">
            <ul className="flex list-none space-x-4">
              <li className=" flex-col text-center">
                <img className="laptop:w-6 w-8" src={shop} />
              </li>
              <li className="laptop:flex hidden flex-col text-center">
                <img className="w-6" src={favoris} />
              </li>
              <li className=" flex-col text-center">
                <img className="laptop:w-6 w-8" src={account} />
              </li>
            </ul>
          </div>
        </div>
        <div
          className={`laptop:flex laptop:rounded-b-2xl absolute h-12 w-full bg-dark_blue  transition-transform duration-200`}
        >
          <button
            className="laptop:hidden absolute flex flex-col gap-1 right-1 m-4"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`block w-6 h-0.5 bg-second_blue transition-transform ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-second_blue transition-opacity ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-second_blue transition-transform ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>
        </div>
        <ul
          className={`laptop:flex laptop:justify-center laptop:w-full w-full`}
        >
          {navbarData.children.map((parent, i) => (
            <li className="laptop:relative laptop:group" key={i}>
              <div className="laptop:flex  text-white laptop:p-2 w-full hover:text-second_blue">
                {parent.label}
              </div>

              <div
                className={`w-full bg-white transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } z-2`}
              >
                {
                  <ul className="laptop:relative laptop:left-0 w-100  laptop:bg-white text-dark_blue laptop:opacity-0 transform laptop:scale-95 laptop:group-hover:opacity-100 laptop:group-hover:scale-100 laptop:group-hover:block transition-all duration-200">
                    {parent.children.map((child, idx) => (
                      <>
                        <li
                          key={idx}
                          className="laptop:px-4 laptop:py-2 text-black m-6"
                        >
                          <div
                            className="flex justify-between group w-full"
                            onClick={() => toggleGrandchildren(child.id)}
                          >
                            <img src={child?.img} />
                            <h3>{child.label}</h3>
                            <img
                              src={arrowRight}
                              alt="grandChildArrow"
                              className={`laptop:hidden transition duration-200 ${
                                openGrandchildren[child.id]
                                  ? "rotate-0"
                                  : "rotate-180"
                              }`}
                            />
                          </div>
                          <hr className="border-black w-100" />

                          {openGrandchildren[child.id] && (
                            <ul>
                              {child.children?.map(
                                (
                                  grandchild: {
                                    label: string | number | boolean;
                                  },
                                  idx: number
                                ) => (
                                  <>
                                    <li key={idx}>{grandchild.label}</li>
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
    </>
  );
};

export default Navbar;
