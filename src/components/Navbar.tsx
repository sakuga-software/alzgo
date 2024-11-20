import * as React from "react";
import navbarData from "../data/json";
import logoNav from "../assets/navbar/logo-navbar.jpg";
import truck from "../assets/navbar/icon-truck.png";

type navbarData = {
  id: string;
  label: string | number | boolean;
  to: string;
  children: string[];
};

const Navbar: React.FC = () => {
  console.log(navbarData.children[0].children);
  return (
    <>
      <nav className="flex-col w-100 bg-indigo-900">
        <div className="flex">
          <img src={logoNav} />

          <form id="search-form" className=" rounded-lg border-indigo-900 p-4">
            <input type="search" id="search-input" placeholder="Search..." />
            <button id="search-btn">
              <img src="loop" />
            </button>
          </form>

          <div>
            <ul className="flex list-none">
              <li className=" flex-col">
                <img src={truck} />
                Connexion
              </li>
              <li className=" flex-col">
                <img src={truck} /> Mes favoris
              </li>
              <li className=" flex-col">
                <img src={truck} /> Panier
              </li>
              <li className=" flex-col">
                <img src={truck} /> Langues
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="flex list-none space-x-4">
            {navbarData.children.map((menu, i) => (
              <li key={i} className="relative group">
                <div className="text-black hover:text-indigo-900">
                  {menu.label}
                </div>
                <ul className="absolute left-0 mt-2 hidden w-48 bg-white text-black shadow-lg opacity-0 transform scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block transition-all duration-200">
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
