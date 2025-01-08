import { cn } from '../../../../../utils/cn';
import { NavbarItem } from '../../type';
// import CoreNavbarDesktopTrigger from "./trigger";

function CoreNavbarMenuDesktop({ data }: { data: NavbarItem }) {
  return (
    <>
      <nav className="hidden w-full flex-col font-host laptop:flex">
        {/* <div className="flex justify-center w-full bg-dark_blue px-[10px] py-2 gap-4">
          {data.children?.map((item) => (
            <div className="group">
              <p className="text-white cursor-pointer">{item.label}</p>
              <CoreNavbarDesktopTrigger data={item} />
            </div>
          ))}
        </div> */}
        <div
          className={`h-12 w-full bg-dark_blue transition-transform duration-200 laptop:absolute laptop:flex laptop:rounded-b-2xl`}
        >
          <ul className={`w-full laptop:flex laptop:justify-center`}>
            {data.children?.map((parent) => (
              <li className="laptop:group group laptop:relative" key={parent.id}>
                <div className="ml-7 mr-7 flex w-full p-2 font-medium text-white hover:text-second_blue">
                  <a key={parent.id}>{parent.label}</a>
                </div>
                <div className="grid">
                  <ul className="fixed left-[10%] hidden w-[80%] grid-cols-4 grid-rows-3 gap-8 bg-white p-8 group-hover:laptop:grid">
                    {parent.children?.map((child) => (
                      <li
                        key={child.id}
                        className={cn(`text-base`, child.id === 'products-cabin' ? 'row-span-2' : 'row-span-1')}
                      >
                        <img src={child.img} className="laptop:w-16" />
                        <div className="mb-2 mt-2 font-medium text-black">{child.label}</div>
                        <ul>
                          {child.children?.map((grandChild) => (
                            <li className="text-sm" key={grandChild.id}>
                              <a className="font-normal text-black hover:text-second_blue" href={grandChild.to} key={grandChild.id}>
                                {grandChild.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
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
