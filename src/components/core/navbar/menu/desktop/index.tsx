import { cn } from '../../../../../utils/cn';
import { NavbarItem } from '../../type';
import { useState } from 'react';

function CoreNavbarMenuDesktop({ data }: { data: NavbarItem }) {
  const [hoveredParent, setHoveredParent] = useState<string | null>(null);
  return (
    <>
      <nav className="hidden w-full flex-col font-host laptop:flex">
        <div
          className={`h-12 w-full bg-dark_blue transition-transform duration-200 laptop:absolute laptop:flex laptop:rounded-b-2xl`}
        >
          <ul className={`w-full laptop:flex laptop:justify-center`}>
            {data.children?.map((parent, i: number) => (
              <li
                className="laptop:group laptop:relative"
                key={i}
                onMouseEnter={() => setHoveredParent(parent.id)}
                onMouseLeave={() => setHoveredParent(null)}
              >
                <div className="ml-7 mr-7 flex w-full p-2 font-medium text-white hover:text-second_blue">
                  <a href={parent.to} key={parent.id}>
                    {parent.label}
                  </a>
                </div>
                <div className="grid">
                  {hoveredParent === parent.id && parent.children && parent.children?.length > 0 && (
                    <ul className="fixed left-[10%] w-[80%] grid-cols-4 grid-rows-3 gap-8 bg-white p-8 laptop:grid">
                      {parent.children?.map((child) => (
                        <li
                          key={child.id}
                          className={cn(
                            `text-base`,
                            child.id === 'products-cabin' || child.id === 'products-engine'
                              ? 'row-span-2'
                              : 'row-span-1'
                          )}
                        >
                          <img src={child.img} className="laptop:w-20" />
                          <div className="mb-2 mt-2 font-medium text-black">{child.label}</div>
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
                      ))}
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

export default CoreNavbarMenuDesktop;
