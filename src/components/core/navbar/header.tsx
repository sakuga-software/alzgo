import logoNav from "../../../assets/navbar/logo-nav.png";
import loupe from "../../../assets/navbar/loupe.png";
import account from "../../../assets/navbar/account-nav.png";
import favoris from "../../../assets/navbar/favoris-nav.png";
import shop from "../../../assets/navbar/shopping-nav.png";
import logoMobile from "../../../assets/navbar/logo-nav-mobile.png";
import logoMobileText from "../../../assets/navbar/title-logo-mobile.png";

export default function CoreNavbarHeader() {
  return (
    <div className="laptop:p-4 laptop:justify-between laptop:pl-12 laptop:pr-12 laptop:flex-row flex-col flex items-center ">
      <img className="w-20 hidden laptop:flex" src={logoNav} />
      <div className=" flex items-center laptop:hidden">
        <img className="h-16" src={logoMobile} />
        <img className="w-28" src={logoMobileText} />
      </div>
      <div>
        <form
          id="search-form"
          className=" rounded-full border-dark_blue border-[1px] flex"
        >
          <input
            className=" m-4 ml-6 w-64 laptop:w-96 "
            type="search"
            id="search-input"
            placeholder="Recherche une pièce"
          />
          <button
            className="border-l-[1px] h-100 bg-second_blue rounded-r-full p-3"
            id="search-btn"
          >
            <img src={loupe} className="w-6" />
          </button>
        </form>
      </div>
      <div className="laptop:m-0 m-4">
        <ul className="flex list-none space-x-4">
          <li className=" flex-col text-center cursor-pointer">
            <img className="laptop:w-6 w-8" src={shop} />
          </li>
          <li className="laptop:flex hidden flex-col text-center cursor-pointer">
            <img className="w-6" src={favoris} />
          </li>
          <li className=" flex-col text-center cursor-pointer">
            <img className="laptop:w-6 w-8" src={account} />
          </li>
        </ul>
      </div>
    </div>
  );
}
