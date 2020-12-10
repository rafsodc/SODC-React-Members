import React from "react";
import Aux from "../../hoc/Aux";
import HeaderNavbar from "../Navbars/HeaderNavbar";
import FooterNavbar from "../Navbars/FooterNavbar";
import Banner from "../Banner/Banner"

const layout = ( props ) => (
  <Aux>
    <header className={"bg-app-primary"}>
    <HeaderNavbar />
    <Banner />
    </header>
    <main>
      {props.children}
    </main>
    <FooterNavbar />
  </Aux>
);

export default layout;