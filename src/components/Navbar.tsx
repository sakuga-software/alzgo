import * as React from "react";
import navbarData from "../data/json";

type navbarData = {
  id: string;
  label: string;
  to: string;
  children: string[];
};

const Navbar: React.FC = () => {
  console.log(navbarData.children[0].children);
  return (
    <>
      <div>
        <ul>
          {navbarData.children[0].children.map(
            (list: string | number | boolean, i: number) => (
              <li key={i}>{list.label}</li>
            )
          )}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
