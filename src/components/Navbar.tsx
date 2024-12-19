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

type navbarData = {
  id: string;
  label: string | number | boolean;
  to: string;
  children: string[];
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          className={`laptop:flex laptop:rounded-b-2xl absolute w-full bg-dark_blue  transition-transform duration-200 ${
            isOpen ? "h-full" : "h-12 translate-y-0"
          }`}
        >
          <button
            className="laptop:hidden flex flex-col gap-1 fixed right-1 m-4"
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

          <ul
            className={`laptop:flex laptop:justify-center laptop:w-full left-0 w-80 transition-transform duration-100 ${
              isOpen
                ? "translate-x-0 laptop:translate-x-full"
                : "-translate-x-full "
            } z-4`}
          >
            {navbarData.children.map((menu, i) => (
              <li className="laptop:relative laptop:group" key={i}>
                <div className="text-white pl-6 p-2 w-auto laptop:w- hover:text-second_blue">
                  {menu.label}
                </div>
                {
                  <ul className="hidden laptop:relative absolute left-0 w-48 bg-white text-black shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block transition-all duration-200">
                    {menu.children.map((option, idx) => (
                      <li key={idx} className="px-4 py-2 hover:text-indigo-900">
                        {option.label}
                      </li>
                    ))}
                  </ul>
                }
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
