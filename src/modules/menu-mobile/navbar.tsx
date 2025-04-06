import * as React from 'react';
import { NavbarItem } from '../../types';
import { cn } from '../../utils/cn';
import Icon from './icon';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../utils/use-outside-click';

const CategoryItem = ({ child, onClick, isOpen }: { child: NavbarItem; onClick: () => void; isOpen: boolean }) => {
  return (
    <li className="group text-black" data-open={Boolean(isOpen)}>
      <button
        type="button"
        className="flex w-full items-center gap-8 border-b border-black !px-4 !py-2"
        onClick={onClick}
      >
        <img src={child?.img} key={child.id} className="size-20" />
        <p className="!m-0 !p-0 font-semibold">{child.label}</p>
        <Icon
          name="chevron-right"
          className="ml-auto size-10 rotate-0 text-blue-500 transition duration-200 group-data-[open=true]:rotate-90"
        />
      </button>

      <ul className="transition-all group-data-[open=false]:h-0 group-data-[open=false]:overflow-hidden group-data-[open=true]:!m-8">
        {child.children?.map((grandchild) => (
          <li key={grandchild.id} className="mb-3 text-base">
            <a className="!text-black" href={grandchild.to}>
              {grandchild.label}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
};

function Navbar({ items }: { items: NavbarItem[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openOpenItems, setOpenOpenItems] = React.useState<Record<string, boolean>>({});

  const toggleOpenItems = (childId: string) => setOpenOpenItems((prev) => ({ ...prev, [childId]: !prev[childId] }));

  const triggerRef = React.useRef<HTMLButtonElement>(null!);
  const menuRef = React.useRef<HTMLDivElement>(null!);

  useOutsideClick(
    menuRef,
    (event) => {
      if (isOpen && !triggerRef.current?.contains(event?.target as Node)) {
        setIsOpen(false);
      }
      setOpenOpenItems({});
    },
    isOpen
  );

  return (
    <>
      <button
        className="m-auto flex scale-150 flex-col gap-1"
        onClick={() => setIsOpen((prev) => !prev)}
        ref={triggerRef}
        type="button"
      >
        <span className={cn(`block h-1 w-6 bg-blue-500 transition-transform`, isOpen && 'translate-y-2 rotate-45')} />
        <span className={cn(`block h-1 w-6 bg-blue-500 transition-opacity`, isOpen && 'opacity-0')} />
        <span className={cn(`block h-1 w-6 bg-blue-500 transition-transform`, isOpen && '-translate-y-2 -rotate-45')} />
      </button>

      {createPortal(
        <div
          className="group/menu absolute top-[18.5rem] left-0 max-h-dvh w-full bg-white transition-all data-[open=false]:max-h-0 data-[open=false]:-translate-x-4 data-[open=false]:overflow-hidden data-[open=false]:opacity-0"
          data-open={Boolean(isOpen)}
          ref={menuRef}
        >
          <ul className="relative h-full">
            {items?.map((item) => (
              <React.Fragment key={item.id}>
                <li className="group/item h-20 !text-black" data-open={Boolean(openOpenItems[item.id])}>
                  <a
                    onClick={item.children && item.children.length > 0 ? () => toggleOpenItems(item.id) : undefined}
                    href={item.children && item.children.length > 0 ? undefined : item.to}
                    className="flex h-full w-full items-center gap-8 border-b border-black !px-4 !py-2"
                  >
                    <p className="m-0 p-0 font-semibold">{item.label}</p>
                    {item.children && item.children.length > 0 && (
                      <Icon
                        name="chevron-right"
                        className="ml-auto size-10 text-blue-500 transition duration-200 group-data-[open=true]/item:rotate-180"
                      />
                    )}
                  </a>
                </li>

                {item.children && item.children.length > 0 && (
                  <div
                    className="group/item _data-[open=false]:h-0 _data-[open=false]:overflow-hidden absolute top-0 left-0 z-10 w-full transform bg-white text-blue-950 transition-all duration-200 data-[open=false]:w-0 data-[open=false]:-translate-x-16 data-[open=false]:opacity-0"
                    data-open={Boolean(openOpenItems[item.id])}
                  >
                    <a
                      onClick={() => {
                        if (item.children && item.children.length > 0) {
                          toggleOpenItems(item.id);
                        }
                      }}
                      type="button"
                      className="!flex h-20 w-full items-center gap-8 border-b border-black !px-4 !py-2"
                    >
                      <Icon
                        name="chevron-right"
                        className="size-10 text-blue-500 transition duration-200 group-data-[open=true]/item:rotate-180"
                      />
                      <p className="!m-0 !p-0 font-semibold">{item.label}</p>
                    </a>

                    <ul className="h-full">
                      {item.children?.map(
                        (child) =>
                          child.children &&
                          child.children.length > 0 && (
                            <CategoryItem
                              key={`${item.id}-${child.id}`}
                              child={child}
                              onClick={() => toggleOpenItems(child.id)}
                              isOpen={openOpenItems[child.id]}
                            />
                          )
                      )}
                    </ul>
                  </div>
                )}
              </React.Fragment>
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
}

export default Navbar;
