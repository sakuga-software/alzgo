import { cn } from '../../../utils/cn';
import { NavbarItem } from '../../../types/navbar-item';
import * as React from 'react';

interface ChildMenuListProps {
  children: NavbarItem[];
}

function ChildMenuList({ children }: ChildMenuListProps) {
  return (
    <ul className="fixed left-1/2 max-h-[80vh] w-4/5 -translate-x-1/2 grid-cols-4 grid-rows-[repeat(minmax(1fr,150px),3)] gap-8 overflow-auto bg-white p-8 laptop:grid">
      {children?.map(
        (child) =>
          child.children &&
          child.children.length > 0 && (
            <li key={child.id} className={cn(`text-base`)}>
              <img src={child.img} className="laptop:w-20" />

              <p className="mb-2 mt-4 font-semibold text-black">{child.label}</p>

              <ul>
                {child.children?.map((grandChild) => (
                  <li className="text-sm" key={grandChild.id}>
                    <a
                      className="font-normal text-black hover:text-second_blue"
                      href={grandChild.to}
                      key={grandChild.id}
                    >
                      {grandChild.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          )
      )}
    </ul>
  );
}

interface ParentMenuItemProps {
  parent: NavbarItem;
  hoveredParent: string | null;
  setHoveredParent: React.Dispatch<React.SetStateAction<string | null>>;
}

function ParentMenuItem({ parent, hoveredParent, setHoveredParent }: ParentMenuItemProps) {
  return (
    <li
      className="laptop:group laptop:relative"
      onMouseEnter={() => setHoveredParent(parent.id)}
      onMouseLeave={() => setHoveredParent(null)}
    >
      <div className="ml-7 mr-7 flex w-full p-2 font-medium text-white hover:text-second_blue">
        <a href={parent.to} key={parent.id} className="font-semibold">
          {parent.label}
        </a>
      </div>
      <div className="grid">
        {hoveredParent === parent.id && parent.children && parent.children?.length > 0 && (
          <ChildMenuList children={parent.children} />
        )}
      </div>
    </li>
  );
}

function CoreNavbarMenuDesktop({ data }: { data: NavbarItem }) {
  const [hoveredParent, setHoveredParent] = React.useState<string | null>(null);
  return (
    <>
      <nav className="hidden w-full flex-col font-host laptop:flex">
        <div
          className={`h-12 w-full bg-dark_blue transition-transform duration-200 laptop:absolute laptop:flex laptop:rounded-b-2xl`}
        >
          <ul className={`w-full laptop:flex laptop:justify-center`}>
            {data.children?.map((parent) => (
              <ParentMenuItem
                key={parent.id}
                parent={parent}
                hoveredParent={hoveredParent}
                setHoveredParent={setHoveredParent}
              />
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}

export default CoreNavbarMenuDesktop;
