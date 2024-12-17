import * as React from "react";
import navbarData from "../data/json";
import logoNav from "../assets/navbar/logo-nav.png";
import loupe from "../assets/navbar/loupe.png";
import account from "../assets/navbar/account-nav.png";
import favoris from "../assets/navbar/favoris-nav.png";
import shop from "../assets/navbar/shopping-nav.png";

type navbarData = {
  id: string;
  label: string | number | boolean;
  to: string;
  children: string[];
};

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="flex-col w-full ">
        <div className="flex justify-between items-center p-4 pl-12 pr-12">
          <img className="w-20" src={logoNav} />

          <div>
            <form
              id="search-form"
              className=" rounded-full border-dark_blue border-[1px] flex"
            >
              <input
                className="ml-5 p-2 pr-16"
                type="search"
                id="search-input"
                placeholder="Recherche une pièce"
              />
              <button
                className="border-l-[1px] h-100 bg-second_blue rounded-r-full p-2"
                id="search-btn"
              >
                <img src={loupe} className="w-8" />
              </button>
            </form>
          </div>
          <div>
            <ul className="flex list-none space-x-4">
              <li className=" flex-col text-center">
                <img className="w-6" src={shop} />
              </li>
              <li className=" flex-col text-center">
                <img className="w-6" src={favoris} />
              </li>
              <li className=" flex-col text-center">
                <img className="w-6" src={account} />
              </li>
            </ul>
          </div>
        </div>
        <div className="w-100 bg-dark_blue rounded-b-2xl">
          <ul className="flex justify-center space-x-16 list-none">
            {navbarData.children.map((menu, i) => (
              <li key={i} className="relative group">
                <div className="text-white p-2 w-100% hover:text-second_blue">
                  {menu.label}
                </div>
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
