import React, { useEffect } from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Nav from 'react-bootstrap/Nav'
import TitleComponent from '../../hoc/TitleComponent'
import Aux from '../../hoc/Aux'
import Page404 from '../../ReactUI/Page404/Page404'
import * as actionTypes from '../../store/actions/actionsTypes'
import { useDispatch } from 'react-redux'
import Authenticator from '../Authentication/Authenticator'
import { accessByRole } from '../../services/funcs/funcs'

/**
 *  Functions to render routers and children
 *  Taken from https://medium.com/better-programming/react-router-architecture-thats-simple-scalable-and-protected-da896827f946
 */

const RenderRoutes = React.memo(
  /**
   *
   * @param {PropsWithChildren} props
   * @returns {JSX.Element}
   */
  (props) => {

    const dispatch = useDispatch()

    useEffect(() => {
      const cleanup = () => {
        dispatch({ type: actionTypes.CLEAR_UNSTICKY_ALERTS })
      }
      return cleanup()
    })

    const page404 = props.handle404 ? <Route render={() => <Page404/>}/> : null

    return (
      <Switch>
        {props.routes.map((route) => {
          return <RouteWithSubRoutes key={route.key} {...route} handle404={props.handle404} user={props.user}/>
        })}
        {page404}
      </Switch>
    )
  }
)

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
  (props) => {

    let routeComponent = <Route
      path={props.path}
      exact={props.exact}
      render={rprops => <props.component {...rprops} {...props.props} routes={props.routes} user={props.user}
                                         handle404={props.handle404}/>}
    />

    //routeComponent = route.auth ? <Authenticator>{routeComponent}</Authenticator> : routeComponent;
    routeComponent = <Authenticator access={accessByRole(props, props.user.roles)}>{routeComponent}</Authenticator>
    return (
      <Aux>
        {/* Only render the TitleComponent if route.title is set */}
        <TitleComponent title={props.title} show={props.title}/>
        {routeComponent}
      </Aux>
    )
  }
)

const DisplayRouteNav = React.memo(
  /**
   *
   * @param {PropsWithChildren} props
   * @returns {*}
   */
  (props) => {

    function renderRoute (route) {
      if (route.menu_dropdown) {
        return <NavDropdown title={route.title} id="basic-nav-dropdown"
                            to={route.path} key={route.key}><DisplayRouteNav routes={route.routes}/></NavDropdown>
      } else if (route.menu_child) {
        return <NavDropdown.Item as={NavLink} to={route.path} {...route.exact}
                                 key={route.key}>{route.title}</NavDropdown.Item>
      } else {
        return <Nav.Link as={NavLink} to={route.path} {...route.exact} key={route.key}>{route.title}</Nav.Link>
      }
    }

    return (
      props.routes.map(route => {
        return renderRoute(route)
      })
    )
  }
)

export default RenderRoutes
export { DisplayRouteNav }
