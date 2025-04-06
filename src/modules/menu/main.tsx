import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';
import { MENU_ROOT_ID, MENU_SELECTOR } from '../../utils/env';
import { enhanceMenuWithCustomKeys } from '../../utils/compute-menu-items';
import parseMenu from '../../utils/dom-parser';
import NavItem from './nav-item';

function Main() {
  const [, setRendered] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.DEV) {
      setRendered(true);
    }
  }, []);

  const menuEl = document.querySelector(MENU_SELECTOR);

  const menuJSON = parseMenu(menuEl?.outerHTML || '');
  const navbarItems = enhanceMenuWithCustomKeys(menuJSON);

  if (menuEl) {
    // eslint-disable-next-line no-console
    console.log(`Loading navbar from ${MENU_SELECTOR}, with ${navbarItems.length} items`);
  } else {
    // eslint-disable-next-line no-console
    console.warn(`Navbar not found at ${MENU_SELECTOR}`);
  }

  return (
    <nav
      className="font-host hidden h-16 w-full bg-blue-950 lg:!flex lg:rounded-b-2xl"
      ref={() => {
        document.querySelector(MENU_SELECTOR)?.classList.add('lg:hidden');
      }}
    >
      <ul className="flex w-full items-center justify-center gap-4">
        {navbarItems?.map((item) => <NavItem key={item.id} item={item} />) || null}
      </ul>
    </nav>
  );
}

/**
 * This is a workaround to import the default HTML content of the navbar in development mode.
 * We don't want to have this content in the production bundle.
 * So when we build the app, we will replace this import with an empty string.
 */
const navbarDefaultHTML = import.meta.env.DEV ? await import('./mock.html?raw') : { default: '' };

createRoot(document.getElementById(MENU_ROOT_ID || 'root')!).render(
  <React.StrictMode>
    {import.meta.env.DEV && (
      <div className="hidden" dangerouslySetInnerHTML={{ __html: navbarDefaultHTML.default || '' }} />
    )}
    <Main />
  </React.StrictMode>
);
