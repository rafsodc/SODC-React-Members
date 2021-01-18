import Page from "../Page/Page";
import Banner from "../../UI/Banner/Banner";
import RenderRoutes from "./Routes";

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
    props:
      {
        api: "pages/8"
      },
  },
  {
    path: "/about",
    key: "APP_ABOUT",
    title: "About Us",
    menu_dropdown: true,
    component: RenderRoutes,
    routes: [
      {
        path: "/about/club",
        key: "APP_ABOUT_CLUB",
        title: "The Club",
        exact: true,
        menu_child: true,
        component: Page,
        props:
          {
            api: "pages/7"
          },
      },
      {
        path: "/about/committee",
        key: "APP_ABOUT_COMMITTEE",
        title: "The Committee",
        exact: true,
        menu_child: true,
        component: Page,
        props:
          {
            api: "pages/7"
          },
      },
      {
        path: "/about/dinners",
        key: "APP_ABOUT_DINNERS",
        title: "Past Dinners",
        exact: true,
        menu_child: true,
        component: Page,
        props:
          {
            api: "pages/7"
          },
      },
    ],
  },
  {
    path: "/contact",
    key: "APP_CONTACT",
    title: "Contact Us",
    exact: true,
    component: Page,
    props:
      {
        api: "pages/8"
      },
  },
];

const footerRoutes = [
  {
    path: "/terms",
    key: "APP_TERMS",
    title: "Terms and Conditions",
    exact: true,
    component: Page,
    props:
      {
        api: "pages/8"
      },
  },
  {
    path: "/privacy",
    key: "APP_PRIVACY",
    title: "Privacy Notice",
    exact: true,
    component: Page,
    props:
      {
        api: "pages/8"
      },
  },
  {
    path: "/members",
    key: "APP_MEMBERS",
    title: "Members' Login",
    exact: true,
    component: Page,
    props:
      {
        api: "pages/8"
      },
  },
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
  {
    path: "/",
    key: "APP_ROOT",
    exact: true,
    component: Banner
  }
];

export default routes
export { bannerRoutes, headerRoutes, footerRoutes }