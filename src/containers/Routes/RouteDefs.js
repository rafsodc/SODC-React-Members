import Banner from "../Banner/Banner";
import RenderRoutes from "./Routes";
import Landing from "../Landing/Landing";
import Login from "../Authentication/Login";
import EventPage from "../Event/EventPage";
import UserEdit from "../User/UserEdit";
import Page from "../Page/Page"
import Contact from "../Contact/Contact"
import Logout from "../Authentication/Logout";
import UserRegister from "../User/UserRegister"
import PasswordResetRequest from "../Authentication/PasswordResetRequest";
import PasswordResetSubmit from "../Authentication/PasswordResetSubmit";
import AttendeeList from "../Admin/AttendeeList";
import Agenda from "../Agenda/Agenda"

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
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
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
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
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
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
  },
  {
    path: "/register",
    key: "APP_REGISTER",
    title: "Register",
    exact: true,
    component: UserRegister,
    auth: false,
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY'],
  },
  {
    path: "/admin/event/2",
    key: "APP_ADMIN",
    title: "Event Admin",
    exact: true,
    component: AttendeeList,
    roles: ['ROLE_ADMIN'],
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
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
    props:
      {
        apiUrl: "pages/3"
      },
  },
  {
    path: "/privacy",
    key: "APP_PRIVACY",
    title: "Privacy Notice",
    exact: true,
    component: Page,
    auth: false,
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
    props:
      {
        apiUrl: "pages/4"
      },
  },
  {
    path: "/members",
    key: "APP_MEMBERS",
    title: "Members' Login",
    exact: true,
    component: Landing,
    roles: ['ROLE_USER'],
    forceLink: true,
    auth: true
  },
];

const otherRoutes = [
  {
    path: "/events/:id",
    key: "APP_EVENT_ID",
    title: "Event",
    component: EventPage,
    auth: true,
    roles: ['ROLE_USER'],
    exact: true
  },
  {
    path: "/events/:id/agenda",
    key: "APP_EVENT_ID_AGENDA",
    title: "Event Agenda",
    component: Agenda,
    auth: true,
    roles: ['ROLE_USER']
  },
  {
    path: "/logout",
    key: "APP_LOGOUT",
    title: "Log Out",
    exact: true,
    component: Logout,
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
  },
  {
    path: "/forgot-password",
    key: "APP_FORGOT_PASSWORD",
    title: "Password Reset",
    exact: true,
    component: PasswordResetRequest,
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY'],
  },
  {
    path: "/forgot-password/:token",
    key: "APP_FORGOT_PASSWORD_SUBMIT",
    title: "Password Reset",
    exact: true,
    component: PasswordResetSubmit,
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY'],
  },
  {
    path: "/myaccount/",
    key: "APP_USER",
    title: "User Details",
    component: UserEdit,
    exact: true,
    auth: true,
    roles: ['ROLE_USER']
  },
  // {
  //   path: "/users/:id",
  //   key: "APP_USER_ID",
  //   title: "User Details",
  //   component: UserEdit,
  //   auth: true,
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
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
  },

];

const bannerRoutes = [
  {
    path: "/",
    key: "APP_ROOT",
    exact: true,
    component: Banner,
    auth: false,
    roles: ['IS_AUTHENTICATED_ANONYMOUSLY', 'ROLE_USER'],
  }
];

export default routes
export {bannerRoutes, headerRoutes, footerRoutes}