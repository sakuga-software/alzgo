import { enhanceMenuWithCustomKeys } from '../utils/compute-menu-items';
import parseMenu from '../utils/dom-parser';
import { NAV_SELECTOR } from '../utils/env';
import CoreNavbarMenu from './menu';

export default function CoreNavbar() {
  const menuEl = document.querySelector(NAV_SELECTOR);

  if (!menuEl) {
    return null;
  }

  const menuJSON = parseMenu(menuEl.outerHTML);
  const navbarData = enhanceMenuWithCustomKeys(menuJSON);

  const data = {
    id: 'home',
    label: 'Accueil',
    to: '/',
    children: navbarData,
  };

  return (
    <nav className="w-full select-none flex-col">
      {/* <CoreNavbarHeader /> */}
      <CoreNavbarMenu data={data} />
    </nav>
  );
}
