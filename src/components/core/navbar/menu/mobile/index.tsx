import arrowRight from '../../../../../assets/navbar/menu/arrowRight.png';
import CoreNavbarMenuMobileTrigger from './trigger';
import { NavbarItem } from '../../type';
import * as React from 'react';
import { cn } from '../../../../../utils/cn';

function CoreNavbarMenuMobile({ data }: { data: NavbarItem }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openGrandchildren, setOpenGrandchildren] = React.useState<Record<string, boolean>>({});

  const toggleGrandchildren = (childId: string) => {
    setOpenGrandchildren((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  return (
    <nav className="w-full flex-col laptop:hidden">
      <div
        className={`h-12 w-full bg-dark_blue transition-transform duration-200 laptop:absolute laptop:flex laptop:rounded-b-2xl`}
      >
        <CoreNavbarMenuMobileTrigger onClick={() => setIsOpen(!isOpen)} isOpen={isOpen} />
      </div>
      <ul className={`w-full laptop:flex laptop:justify-center`}>
        {data.children?.map((parent) => (
          <li className="laptop:group laptop:relative" key={parent.id}>
            <div className="hidden w-full text-white hover:text-second_blue laptop:flex laptop:p-2">
              <a href={parent.to} key={parent.id}>
                {parent.label}
              </a>
            </div>
            <div
              className={cn(
                `z-2 w-full bg-white transition-transform duration-300 laptop:hidden`,
                isOpen ? 'translate-x-0' : '-translate-x-full'
              )}
            >
              {
                <ul className="w-100 transform text-dark_blue transition-all duration-200">
                  {parent.children?.map((child: NavbarItem) => (
                    <li key={child.id} className="text-black">
                      <div
                        className="group flex w-full items-center justify-between p-4 pl-6 pr-6"
                        onClick={() => toggleGrandchildren(child.id)}
                      >
                        <img src={child?.img} key={child.id} className="w-16" />
                        <h3>{child.label}</h3>
                        <img
                          src={arrowRight}
                          alt="grandChildArrow"
                          className={cn(
                            `h-8 w-auto transition duration-200`,
                            openGrandchildren[child.id] ? 'rotate-0' : 'rotate-180'
                          )}
                        />
                      </div>
                      <hr className="w-100 border-black" />
                      {openGrandchildren[child.id] && (
                        <ul className="m-8">
                          {child.children?.map((grandchild) => (
                            <li key={grandchild.id} className="mb-3 text-base">
                              <a href={child.to} key={child.id}>
                                {grandchild.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
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

export default CoreNavbarMenuMobile;
