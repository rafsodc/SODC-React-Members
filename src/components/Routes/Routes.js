import React from "react";
import Page from "../../containers/Page/Page";
import Banner from "../Banner/Banner"
import {NavLink, Route, Switch} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";

/**
 *  Taken from https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
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
]

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      exact={route.exact}
      render={props => <route.component {...props} {...route.props} routes={route.routes}/>}
    />
  );
}

/**
 * Use this component for any new section of routes (any config object that has a "routes" property)
 */
function RenderRoutes({ routes, error = true }) {

  let pageNotFound = error ? <Route component={() => <h1>Not Found!</h1>} /> : "";

  return (
    <Switch>
      {routes.map((route, i) => {
        return <RouteWithSubRoutes key={route.key} {...route} />;
      })}
      {pageNotFound}

    </Switch>
  );
}

function DisplayRouteNav(routes) {

  function renderRoute(route) {
    if (route.menu_dropdown) {
      return <NavDropdown title={route.title} id="basic-nav-dropdown"
                          to={route.path} key={route.key}>{DisplayRouteNav(route.routes)}</NavDropdown>;
    }
    else if (route.menu_child) {
      return <NavDropdown.Item as={NavLink} to={route.path} {...route.exact} key={route.key}>{route.title}</NavDropdown.Item>
    }
    else {
      return <Nav.Link as={NavLink} to={route.path} {...route.exact} key={route.key}>{route.title}</Nav.Link>
    }
    return null;
  }

  return (
    routes.map(route => {
      return renderRoute(route);
    })
  );

}


export { routes, bannerRoutes, headerRoutes, footerRoutes, RenderRoutes, DisplayRouteNav };
