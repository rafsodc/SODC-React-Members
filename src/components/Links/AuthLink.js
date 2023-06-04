import React from 'react'
import {NavLink} from 'react-router-dom';


const AuthLink = (props) => {

    const {route, userRoles} = props;
    const authed = route.roles.some(r => userRoles.includes(r));

    return (
        authed ? <NavLink to={route.path}>{route.title}</NavLink> : ""
    )
}

export default AuthLink