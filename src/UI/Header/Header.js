import React from "react";
import HeaderNavbar from "../Navbars/HeaderNavbar";
import RenderRoutes from "../../containers/Routes/Routes";
import {bannerRoutes} from "../../containers/Routes/RouteDefs";

const Header = () => {
  return (
    <header className={"bg-app-primary"}>
      <HeaderNavbar />
      {/* Render the banner by using routes */}
      <RenderRoutes routes={bannerRoutes} />
    </header>
  );
}

export default Header;