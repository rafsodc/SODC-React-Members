import React from 'react'
import {NavLink} from 'react-router-dom';


const AuthLink = (props) => {

    const {route, userRoles} = props;
    const authed = route.roles.some(r => userRoles.includes(r));

    return (
        authed ? <p><NavLink to={route.path}>{route.title}</NavLink></p> : ""
    )
}

export default AuthLink