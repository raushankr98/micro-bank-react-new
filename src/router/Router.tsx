import React from 'react'
import Dashboard from '../features/dashboard/container/dashboard/Dashboard'
import { Route, Switch } from 'react-router-dom'
import Login from '../features/auth/components/login/Login'
import Register from '../features/auth/components/register/Register'
import PrivateRoute from './PrivateRoute'
import EditProfile from '../features/profile/container/editProfile'

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

                <PrivateRoute exact path="/editProfile">
                    <EditProfile />
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
