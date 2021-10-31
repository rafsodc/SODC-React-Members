import React from "react";
import {useSelector} from "react-redux";
import HeaderNavbar from "../../containers/Navbars/HeaderNavbar";
import RenderRoutes from "../../containers/Routes/Routes";
import {bannerRoutes} from "../../containers/Routes/RouteDefs";
import apiPaths from "../../store/paths";

const Header = (props) => {

  const auth = useSelector(state => state.authenticationReducer);

  return (
    <header className={"bg-app-primary"} >
      <HeaderNavbar authenticated={auth.authenticated} user={props.user} />
      {/* Render the banner by using routes */}
      <RenderRoutes routes={bannerRoutes} user={props.user}/>
    </header>
  );
}

export default Header;