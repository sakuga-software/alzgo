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
          {navbarData.children.map((menu, i) => (
            <li className="laptop:relative laptop:group" key={i}>
              <div className="laptop:flex  text-white laptop:p-2 w-full hover:text-second_blue">
                {menu.label}
              </div>

              <div
                className={`w-full bg-white transition-transform duration-300 ${
                  isOpen ? "translate-x-0" : "-translate-x-full"
                } z-2`}
              >
                {
                  <ul className="laptop:relative laptop:left-0 w-100  laptop:bg-white text-dark_blue laptop:opacity-0 transform laptop:scale-95 laptop:group-hover:opacity-100 laptop:group-hover:scale-100 laptop:group-hover:block transition-all duration-200">
                    {menu.children.map((option, idx) => (
                      <li
                        key={idx}
                        className="laptop:px-4 laptop:py-2laptop:hover:text-indigo-900 text-black"
                      >
                        {option.label}
                      </li>
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
