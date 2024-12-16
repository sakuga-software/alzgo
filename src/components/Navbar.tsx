import * as React from "react";
import navbarData from "../data/json";
import logoNav from "../assets/navbar/logo-navbar.jpg";
import truck from "../assets/navbar/icon-truck.png";
import loupe from "../assets/navbar/loupe.png";

type navbarData = {
  id: string;
  label: string | number | boolean;
  to: string;
  children: string[];
};

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex-col w-100 ">
        <div className="flex justify-between items-center m-[3rem]">
          <img className="" src={logoNav} />

          <div>
            <form
              id="search-form"
              className=" rounded-lg border-blue-900 border-[1px] flex"
            >
              <input
                className="ml-[8px]"
                type="search"
                id="search-input"
                placeholder="Search..."
              />
              <button
                className="border-l-[1px] h-100 border-blue-900"
                id="search-btn"
              >
                <img src={loupe} className="w-[2rem]" />
              </button>
            </form>
          </div>
          <div className="w-[35vw]">
            <ul className="flex list-none">
              <li className=" flex-col text-center">
                <img className="w-[6em]" src={truck} />
                Connexion
              </li>
              <li className=" flex-col text-center">
                <img className="w-[6em]" src={truck} /> Mes favoris
              </li>
              <li className=" flex-col text-center">
                <img className="w-[6em]" src={truck} /> Panier
              </li>
              <li className=" flex-col text-center">
                <img className="w-[6em]" src={truck} /> Langues
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 border-t-[1px] border-black">
          <ul className="flex justify-around list-none">
            {navbarData.children.map((menu, i) => (
              <li key={i} className="relative group">
                <div className="text-black p-[4px] w-100%">{menu.label}</div>
                <ul className="absolute left-0 hidden w-48 bg-white text-black shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block transition-all duration-200">
                  {menu.children.map((option, idx) => (
                    <li key={idx} className="px-4 py-2 hover:text-indigo-900">
                      {option.label}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
