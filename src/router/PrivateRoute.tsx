import React, { useContext } from 'react'
import { Redirect, Route } from 'react-router-dom';
import { AuthContext } from '../features/auth/AuthContextProvider'
type IsPrivateRoute = {
    children: any;
    path: string;
    exact: boolean;
    redirectPath?: string;
    push?: boolean;
}
function PrivateRoute({ children, ...rest }: IsPrivateRoute) {
    const { isAuth } = useContext(AuthContext)
    return (<Route {...rest} render={() => (isAuth ? (children) : <Redirect to="/" />)} />)
}

export default PrivateRoute
