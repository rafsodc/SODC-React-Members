import Banner from "../../ReactUI/Banner/Banner";
import RenderRoutes from "./Routes";
import Landing from "../Landing/Landing";
import Login from "../Authentication/Login";
import EventPage from "../Event/EventPage";
import Booking from "../Booking/Booking";
import Page from "../Page/Page"
import Contact from "../Contact/Contact"
import Logout from "../Authentication/Logout";
import PasswordResetRequest from "../Authentication/PasswordResetRequest";

/**
 *  Return constant objects for routing.  @Todo In time this will be replaced with api request
 */

const headerRoutes = [
  {
    path: "/",
    key: "APP_HOME",
    title: "Home",
    exact: true,
    component: Page,
    auth: false,
    props:
      {
        apiUrl: "pages/2"
      },
  },
  {
    path: "/about",
    key: "APP_ABOUT",
    title: "About",
    exact: true,
    component: Page,
    auth: false,
    props:
      {
        apiUrl: "pages/1"
      },
  },
  {
    path: "/contact",
    key: "APP_CONTACT",
    title: "Contact",
    exact: true,
    component: Contact,
    auth: false,
  },
  
  
];

const footerRoutes = [
  {
    path: "/terms",
    key: "APP_TERMS",
    title: "Terms and Conditions",
    exact: true,
    component: Page,
    auth: false,
    props:
      {
        apiUrl: "pages/2"
      },
  },
  {
    path: "/privacy",
    key: "APP_PRIVACY",
    title: "Privacy Notice",
    exact: true,
    component: Page,
    auth: false,
    props:
      {
        apiUrl: "pages/2"
      },
  },
  {
    path: "/members",
    key: "APP_MEMBERS",
    title: "Members' Login",
    exact: true,
    component: Landing,
    auth: true,
  },
];

const otherRoutes = [
  {
    path: "/events/:id",
    key: "APP_EVENT_ID",
    title: "Event",
    component: EventPage,
    auth: true,
  },
  {
    path: "/logout",
    key: "APP_LOGOUT",
    title: "Log Out",
    exact: true,
    component: Logout,
  },
  {
    path: "/forgot-password",
    key: "APP_FORGOT_PASSWORD",
    title: "Password Reset",
    exact: true,
    component: PasswordResetRequest
  },
  // {
  //   path: "/forgot-password/:id",
  //   key: "APP_FORGOT_PASSWORD_ID",
  //   title: "Password Reset",
  //   exact: true,
  //   component: PasswordResetRequestSubmit
  // }
  // {
  //   path: "/booking/:id",
  //   key: "APP_BOOKING_ID",
  //   title: "Home",
  //   component: Booking
  // },
]

const routes = [
  {
    path: "/",
    key: "APP_ROOT",
    component: RenderRoutes,
    routes: headerRoutes.concat(footerRoutes).concat(otherRoutes),
    auth: false,
  },

];

const bannerRoutes = [
  {
    path: "/",
    key: "APP_ROOT",
    exact: true,
    component: Banner,
    auth: false,
  }
];

export default routes
export {bannerRoutes, headerRoutes, footerRoutes}