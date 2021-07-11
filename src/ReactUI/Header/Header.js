import React from "react";
import {useSelector} from "react-redux";
import HeaderNavbar from "../../containers/Navbars/HeaderNavbar";
import RenderRoutes from "../../containers/Routes/Routes";
import {bannerRoutes} from "../../containers/Routes/RouteDefs";

const Header = () => {

  const auth = useSelector(state => state.authenticationReducer.auth);

  return (
    <header className={"bg-app-primary"} >
      <HeaderNavbar authenticated={auth.authenticated}/>
      {/* Render the banner by using routes */}
      <RenderRoutes routes={bannerRoutes}/>
    </header>
  );
}

export default Header;