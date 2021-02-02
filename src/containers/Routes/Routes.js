import React, {useEffect} from "react";
import {NavLink, Route, Switch} from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import TitleComponent from "../../helpers/TitleComponent/TitleComponent";
import Aux from "../../helpers/hoc/Aux";
import Page404 from "../../UI/Page404/Page404";
import * as actionTypes from "../../store/actions";
import {useDispatch} from "react-redux";

/**
 *  Functions to render routers and children
 *  Taken from https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
 */

const RenderRoutes = React.memo (
  /**
   *
   * @param {PropsWithChildren} props
   * @returns {JSX.Element}
   */
  (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
      const cleanup = () => {
        dispatch({type: actionTypes.ALERT_CLOSE_UNSTICKY});
      };
      return cleanup();
    });

    const page404 = props.handle404 ? <Route render={() => <Page404 />} /> : null;

    return (
      <Switch>
        {props.routes.map((route, i) => {
          return <RouteWithSubRoutes key={route.key} {...route} handle404={props.handle404} />;
        })}
        {page404}
      </Switch>
    );
  }
);

/**
 * Render a route with potential sub routes
 * https://reacttraining.com/react-router/web/example/route-config
 */
const RouteWithSubRoutes = React.memo(
  /**
   *
   * @param {PropsWithChildren} route
   * @returns {JSX.Element}
   */
  (route) => {
    // Return the title and a route to the path, whether it's exact, and render the component specified.
    return (
      <Aux>
        {/* Only render the TitleComponent if route.title is set */}
        <TitleComponent title={route.title} show={route.title}/>
        <Route
          path={route.path}
          exact={route.exact}
          render={props => <route.component {...props} {...route.props} routes={route.routes} handle404={route.handle404}/>}
        />
      </Aux>
    );
  }
);

const DisplayRouteNav = React.memo(
  /**
   *
   * @param {PropsWithChildren} props
   * @returns {*}
   */
  (props) => {

    function renderRoute(route) {
      if (route.menu_dropdown) {
        return <NavDropdown title={route.title} id="basic-nav-dropdown"
                            to={route.path} key={route.key}><DisplayRouteNav routes={route.routes} /></NavDropdown>;
      }
      else if (route.menu_child) {
        return <NavDropdown.Item as={NavLink} to={route.path} {...route.exact} key={route.key}>{route.title}</NavDropdown.Item>
      }
      else {
        return <Nav.Link as={NavLink} to={route.path} {...route.exact} key={route.key}>{route.title}</Nav.Link>
      }
    }

    return (
      props.routes.map(route => {
        return renderRoute(route);
      })
    );
  }
);


export default RenderRoutes;
export { DisplayRouteNav };
