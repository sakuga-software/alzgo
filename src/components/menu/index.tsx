import { NavbarItem } from '../../types/navbar-item';
import CoreNavbarMenuMobile from './mobile';
import CoreNavbarMenuDesktop from './desktop';

export default function CoreNavbarMenu({ data }: { data: NavbarItem }) {
  return (
    <>
      <CoreNavbarMenuDesktop data={data} />
      <CoreNavbarMenuMobile data={data} />
    </>
  );
}
