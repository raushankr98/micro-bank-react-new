import React from 'react'
import Dashboard from '../features/dashboard/Dashboard'
import { Route, Switch } from 'react-router-dom'
import Login from '../core/component/login/Login'
import Register from '../core/component/register/Register'
import PrivateRoute from './PrivateRoute'

function Router() {
    return (
        <>
            <Switch>
                {/* login page Route */}
                <Route exact path="/">
                    <Login />
                </Route>

                {/* Register page Route */}
                <Route exact path="/register">
                    <Register />
                </Route>
                
                {/* Dashboard page Route */}
                <PrivateRoute exact path="/dashboard">
                    <Dashboard />
                </PrivateRoute>

                {/* Page not found */}
                <Route>
                    <h1 style={{ textAlign: "center" }}>PAGE NOT FOUND</h1>
                </Route>
            </Switch>
        </>
    )
}

export default Router
