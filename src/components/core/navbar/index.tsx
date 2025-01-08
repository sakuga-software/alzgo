import navbarData from '../../../data/json';
import CoreNavbarHeader from './header';
import CoreNavbarMenu from './menu';

export default function CoreNavbar() {
  return (
    <nav className="w-full select-none flex-col">
      <CoreNavbarHeader />
      <CoreNavbarMenu data={navbarData} />
    </nav>
  );
}
