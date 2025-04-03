import * as React from 'react';

import { enhanceMenuWithCustomKeys } from '../utils/compute-menu-items';
import parseMenu from '../utils/dom-parser';
import { NAV_SELECTOR } from '../utils/env';
import DesktopNavItem from './desktop';
// import NavbarMobile from './mobile';

function Navbar() {
  const [, setRendered] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.DEV) {
      setRendered(true);
    }
  }, []);

  const menuEl = document.querySelector(NAV_SELECTOR);

  const menuJSON = parseMenu(menuEl?.outerHTML || '');
  const navbarItems = enhanceMenuWithCustomKeys(menuJSON);

  if (menuEl) {
    // eslint-disable-next-line no-console
    console.log(`Loading navbar from ${NAV_SELECTOR}, with ${navbarItems.length} items`);
  } else {
    // eslint-disable-next-line no-console
    console.warn(`Navbar not found at ${NAV_SELECTOR}`);
  }

  return (
    <>
      <nav
        className="hidden h-16 w-full bg-dark_blue font-host lg:flex lg:rounded-b-2xl"
        ref={() => {
          document.querySelector(NAV_SELECTOR)?.classList.add('lg:hidden');
        }}
      >
        <ul className="flex w-full items-center justify-center gap-4">
          {navbarItems?.map((item) => <DesktopNavItem key={item.id} item={item} />) || null}
        </ul>
      </nav>
      {/* <ul className="block lg:hidden">
        <NavbarMobile items={navbarItems} />
      </ul> */}
    </>
  );
}

export default Navbar;
