import React from 'react'
import { Redirect, Route } from 'react-router-dom';
type IsPrivateRoute = {
    children: any;
    path: string;
    exact: boolean;
    redirectPath?: string;
    push?: boolean;
}
function PrivateRoute({ children, ...rest }: IsPrivateRoute) {
    return (<Route {...rest} render={() => (localStorage.getItem('profileId') ? (children) : <Redirect to="/" />)} />)
}

export default PrivateRoute
