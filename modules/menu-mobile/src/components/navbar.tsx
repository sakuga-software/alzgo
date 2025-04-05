import * as React from 'react';
import { NavbarItem } from '../types/navbar-item';
import { cn } from '../utils/cn';
import Icon from './icon';
import { createPortal } from 'react-dom';

interface CartTotal {
  total?: string;
}
interface Cart {
  totals?: CartTotal;
}
interface CartUpdateReason {
  cart: Cart;
}
interface CartUpdateEvent {
  reason?: CartUpdateReason;
}
interface Prestashop {
  customer?: {
    is_logged?: boolean;
  };
  cart?: {
    totals?: {
      total?: string;
    };
  };
  blockcart?: {
    showModal?: () => void;
  };

  urls?: {
    pages: {
      authentication: string;
      my_account: string;
    };
  };
  on: (event: string, callback: (event: CartUpdateEvent) => void) => void;
  off: (event: string, callback: (event: CartUpdateEvent) => void) => void;
}
declare global {
  interface Window {
    prestashop?: Prestashop;
  }
}

const CategoryItem = ({ child, onClick, isOpen }: { child: NavbarItem; onClick: () => void; isOpen: boolean }) => {
  return (
    <li className="group text-black" data-open={Boolean(isOpen)}>
      <button
        type="button"
        className="flex w-full items-center gap-8 border-b border-black px-4 py-2"
        onClick={onClick}
      >
        <img src={child?.img} key={child.id} className="size-20" />
        <p className="font-semibold">{child.label}</p>
        <Icon
          name="chevron-right"
          className="ml-auto size-10 rotate-0 text-second_blue transition duration-200 group-data-[open=true]:rotate-90"
        />
      </button>

      <ul className="transition-all group-data-[open=true]:m-8 group-data-[open=false]:h-0 group-data-[open=false]:overflow-hidden">
        {child.children?.map((grandchild) => (
          <li key={grandchild.id} className="mb-3 text-base">
            <a href={grandchild.to}>{grandchild.label}</a>
          </li>
        ))}
      </ul>
    </li>
  );
};

function Navbar({ items }: { items: NavbarItem[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openGrandchildren, setOpenGrandchildren] = React.useState<Record<string, boolean>>({});

  const toggleGrandchildren = (childId: string) => {
    setOpenGrandchildren((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  return (
    <>
      <button className="m-auto flex flex-col gap-1" onClick={() => setIsOpen((prev) => !prev)} type="button">
        <span
          className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && 'translate-y-1.5 rotate-45')}
        />
        <span className={cn(`block h-0.5 w-6 bg-second_blue transition-opacity`, isOpen && 'opacity-0')} />
        <span
          className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && '-translate-y-1.5 -rotate-45')}
        />
      </button>

      {createPortal(
        <div
          className="group/menu absolute left-0 top-[18.5rem] max-h-dvh w-full bg-white transition-all data-[open=false]:max-h-0 data-[open=false]:-translate-x-4 data-[open=false]:overflow-hidden data-[open=false]:opacity-0"
          data-open={Boolean(isOpen)}
        >
          <ul className="relative h-full">
            {items?.map((item) => (
              <React.Fragment key={item.id}>
                <li className="group/item h-20 text-black" data-open={Boolean(openGrandchildren[item.id])}>
                  <a
                    onClick={item.children && item.children.length > 0 ? () => toggleGrandchildren(item.id) : undefined}
                    href={item.children && item.children.length > 0 ? undefined : item.to}
                    className="flex h-full w-full items-center gap-8 border-b border-black px-4 py-2"
                  >
                    <p className="font-semibold">{item.label}</p>
                    {item.children && item.children.length > 0 && (
                      <Icon
                        name="chevron-right"
                        className="ml-auto size-10 text-second_blue transition duration-200 group-data-[open=true]/item:rotate-180"
                      />
                    )}
                  </a>
                </li>

                {item.children && item.children.length > 0 && (
                  <div
                    className="group/item _data-[open=false]:h-0 _data-[open=false]:overflow-hidden absolute left-0 top-0 z-10 w-full transform bg-white text-dark_blue transition-all duration-200 data-[open=false]:w-0 data-[open=false]:-translate-x-16 data-[open=false]:opacity-0"
                    data-open={Boolean(openGrandchildren[item.id])}
                  >
                    <a
                      onClick={() => {
                        if (item.children && item.children.length > 0) {
                          toggleGrandchildren(item.id);
                        }
                      }}
                      type="button"
                      className="flex h-20 w-full items-center gap-8 border-b border-black px-4 py-2"
                    >
                      <Icon
                        name="chevron-right"
                        className="size-10 text-second_blue transition duration-200 group-data-[open=true]/item:rotate-180"
                      />
                      <p className="font-semibold">{item.label}</p>
                    </a>

                    <ul className="h-full">
                      {item.children?.map(
                        (child) =>
                          child.children &&
                          child.children.length > 0 && (
                            <CategoryItem
                              key={`${item.id}-${child.id}`}
                              child={child}
                              onClick={() => toggleGrandchildren(child.id)}
                              isOpen={openGrandchildren[child.id]}
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
