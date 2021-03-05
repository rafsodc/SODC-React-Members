import Banner from "../../ReactUI/Banner/Banner";
import RenderRoutes from "./Routes";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";

/**
 *  Return constant objects for routing.  @Todo In time this will be replaced with api request
 */

const headerRoutes = [
  {
    path: "/",
    key: "APP_HOME",
    title: "Home",
    exact: true,
    component: Landing
  },
  {
    path: "/login",
    key: "APP_LOGIN",
    title: "Login",
    exact: true,
    component: Login,
  },
];

const footerRoutes = [

];

const routes = [
  {
    path: "/",
    key: "APP_ROOT",
    component: RenderRoutes,
    routes: headerRoutes.concat(footerRoutes),
  }
];

const bannerRoutes = [
];

export default routes
export {bannerRoutes, headerRoutes, footerRoutes}