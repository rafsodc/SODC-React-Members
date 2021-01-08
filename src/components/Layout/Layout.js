import React from "react";
import Aux from "../../hoc/Aux";
import HeaderNavbar from "../Navbars/HeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import { routes, RenderRoutes, bannerRoutes} from "../Routes/Routes";

const layout = ( props ) => (
  <Aux>
    <header className={"bg-app-primary"}>
    <HeaderNavbar />
    {/* Render the banner by using routes */}
      <RenderRoutes routes={bannerRoutes} error={false}/>
    </header>
    <main>
      {/* Render the content using routes */}
      <RenderRoutes routes={routes}/>
    </main>
    <FooterNavbar />
  </Aux>
);

export default layout;