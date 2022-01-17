import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import { useAppSelector } from '../store/store';
type IsPrivateRoute = {
    children: any;
    path: string;
    exact: boolean;
    redirectPath?: string;
    push?: boolean;
}
function PrivateRoute({ children, ...rest }: IsPrivateRoute) {
    const isAuth = useAppSelector(state => state.auth.isAuth);
    return (<Route {...rest} render={() => (isAuth ? (children) : <Redirect to="/" />)} />)
}

export default PrivateRoute
