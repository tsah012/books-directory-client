import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from '../Login'
import AppBar from '../AppBar'
import Home from '../Home'
import Library from '../Library';
import Error from '../Error'


function AppRouter() {
    return (
        <Router>
            <AppBar />
            <Switch>
                <Route exact path='/login'>
                    <Login />
                </Route>
                <Route exact path='/library'>
                    <Library />
                </Route>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter
