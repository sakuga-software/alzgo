import navbarData from "../../../data/json";
import CoreNavbarHeader from "./header";
import CoreNavbarMenu from "./menu";

export default function CoreNavbar() {
  return (
    <nav className="flex-col w-full select-none">
      <CoreNavbarHeader />
      <CoreNavbarMenu data={navbarData} />
    </nav>
  );
}
