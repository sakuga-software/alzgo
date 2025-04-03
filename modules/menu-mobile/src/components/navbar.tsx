import * as React from 'react';
import { NavbarItem } from '../types/navbar-item';
import { cn } from '../utils/cn';
import Icon from './icon';
import { BASE_URL } from '../utils/env';

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

function NavbarMobile({ items }: { items: NavbarItem[] }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [openGrandchildren, setOpenGrandchildren] = React.useState<Record<string, boolean>>({});
  const [cartAmount, setCartAmount] = React.useState('0,00 €');
  const [isLogged, setIsLogged] = React.useState(false);

  React.useEffect(() => {
    if (window.prestashop && window.prestashop.customer) {
      setIsLogged(Boolean(window.prestashop.customer.is_logged));
    }

    if (window.prestashop && window.prestashop.cart) {
      const total = window.prestashop.cart.totals?.total;
      if (total) {
        setCartAmount(total);
      }
    }

    const handleCartUpdate = (event: CartUpdateEvent): void => {
      if (event && event.reason && event.reason.cart) {
        const total = event.reason.cart.totals?.total;
        if (total) {
          setCartAmount(total);
        }
      }
    };

    if (window.prestashop) {
      window.prestashop.on('updateCart', handleCartUpdate);
    }

    return () => {
      if (window.prestashop) {
        window.prestashop.off('updateCart', handleCartUpdate);
      }
    };
  }, []);

  const toggleGrandchildren = (childId: string) => {
    setOpenGrandchildren((prev) => ({
      ...prev,
      [childId]: !prev[childId],
    }));
  };

  const openCart = () => {
    if (
      window.prestashop &&
      window.prestashop.blockcart &&
      typeof window.prestashop.blockcart.showModal === 'function'
    ) {
      window.prestashop.blockcart.showModal();
    }
  };

  const login = () => {
    if (window.prestashop && window.prestashop.urls) {
      return `${window.prestashop.urls.pages.authentication}`;
    }
    return `${BASE_URL}/connexion?back=my-account`;
  };

  const acountConnected = () => {
    if (window.prestashop && window.prestashop.urls) {
      return `${window.prestashop.urls.pages.my_account}`;
    }
    return `${BASE_URL}/mon-compte`;
  };

  return (
    <nav className="relative w-full flex-col">
      <div className="flex h-16 w-full items-center justify-between bg-dark_blue px-6">
        <a href={isLogged ? acountConnected() : login()} className="flex items-center text-white">
          <Icon name="user" className="size-8 text-second_blue" />
        </a>
        <button
          onClick={openCart}
          className="flex items-center justify-center rounded-full border border-second_blue px-4 py-1 text-white"
          type="button"
        >
          <Icon name="cart" className="mr-1 size-6 text-second_blue" />
          <span className="m-2 text-sm text-second_blue">{cartAmount}</span>
        </button>

        <button className="flex scale-125 flex-col gap-1" onClick={() => setIsOpen((prev) => !prev)} type="button">
          <span
            className={cn(`block h-0.5 w-6 bg-second_blue transition-transform`, isOpen && 'translate-y-1.5 rotate-45')}
          />
          <span className={cn(`block h-0.5 w-6 bg-second_blue transition-opacity`, isOpen && 'opacity-0')} />
          <span
            className={cn(
              `block h-0.5 w-6 bg-second_blue transition-transform`,
              isOpen && '-translate-y-1.5 -rotate-45'
            )}
          />
        </button>
      </div>

      <ul
        className="absolute left-0 top-full max-h-[calc(100vh-4rem)] w-full overflow-auto transition-all data-[open=false]:h-0 data-[open=false]:-translate-x-4 data-[open=false]:overflow-hidden data-[open=false]:opacity-0"
        data-open={Boolean(isOpen)}
      >
        {items?.map(
          (item) =>
            item.children &&
            item.children.length > 0 && (
              <li key={item.id} className="w-full bg-white transition-transform duration-300">
                <ul className="transform text-dark_blue transition-all duration-200">
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
              </li>
            )
        )}
      </ul>
    </nav>
  );
}

export default NavbarMobile;
