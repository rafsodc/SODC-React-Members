import React from "react";
import {useSelector} from "react-redux";
import HeaderNavbar from "../../containers/Navbars/HeaderNavbar";
import RenderRoutes from "../../containers/Routes/Routes";
import {bannerRoutes} from "../../containers/Routes/RouteDefs";
import apiPaths from "../../store/paths";

const Header = () => {

  const auth = useSelector(state => state.authenticationReducer);

  const user = auth.token_data === null ?  "" : auth.token_data.email

  return (
    <header className={"bg-app-primary"} >
      <HeaderNavbar authenticated={auth.authenticated} user={user}/>
      {/* Render the banner by using routes */}
      <RenderRoutes routes={bannerRoutes}/>
    </header>
  );
}

export default Header;