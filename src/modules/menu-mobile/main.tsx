import * as React from 'react';
import { createRoot } from 'react-dom/client';
import '../../index.css';
import { MENU_MOBILE_SELECTOR, MENU_MOBILE_ROOT_ID } from '../../utils/env';
import { enhanceMenuWithCustomKeys } from '../../utils/compute-menu-items';
import parseMenu from '../../utils/dom-parser';
import Navbar from './navbar';

/**
 * This is a workaround to import the default HTML content of the navbar in development mode.
 * We don't want to have this content in the production bundle.
 * So when we build the app, we will replace this import with an empty string.
 */
const navbarDefaultHTML = import.meta.env.DEV ? await import('./mock.html?raw') : { default: '' };

function Main() {
  const [, setRendered] = React.useState(false);

  React.useEffect(() => {
    if (import.meta.env.DEV) {
      setRendered(true);
    }
  }, []);

  const menuEl = document.querySelector(MENU_MOBILE_SELECTOR);

  const menuJSON = parseMenu(menuEl?.outerHTML || '');
  const navbarItems = enhanceMenuWithCustomKeys(menuJSON);

  if (menuEl) {
    // eslint-disable-next-line no-console
    console.log(`Loading mobile navbar from ${MENU_MOBILE_SELECTOR}, with ${navbarItems.length} items`);
  } else {
    // eslint-disable-next-line no-console
    console.warn(`Mobile navbar not found at ${MENU_MOBILE_SELECTOR}`);
  }

  return (
    <>
      <ul
        className="block lg:hidden tw-reset"
        ref={() => {
          document.querySelector(MENU_MOBILE_SELECTOR)?.classList.add('hidden');
        }}
      >
        <Navbar items={navbarItems} />
      </ul>
    </>
  );
}

createRoot(document.getElementById(MENU_MOBILE_ROOT_ID || 'root')!).render(
  <React.StrictMode>
    {import.meta.env.DEV && (
      <div className="hidden" dangerouslySetInnerHTML={{ __html: navbarDefaultHTML.default || '' }} />
    )}
    <Main />
  </React.StrictMode>
);
