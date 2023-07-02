import React from 'react'
import { useSelector } from 'react-redux'
import AuthLink from "../../components/Links/AuthLink";
import {APP_EVENT_ADD, APP_USERS_APPROVE} from "../../components/Routes/RouteDefs";

const Admin = () => {

    const authState = useSelector(state => state.authenticationReducer)

    return (
        <>
            <h2>Website Admin</h2>
            <AuthLink route={APP_EVENT_ADD} userRoles={authState.token_data.roles}/>
            {/* <AuthLink route={APP_USERS_APPROVE} userRoles={authState.token_data.roles}/> */}
        </>
    )
}

export default Admin
