import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import AuthContext from './AuthContext';
import Header from './components/Header';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Agents from './components/Agents';
import AddAgent from './components/AddAgent';
import EditAgent from './components/EditAgent';
import DeleteAgent from './components/DeleteAgent';
import NotFound from './components/NotFound';
function App() {
  const [user, setUser] = useState(null);

  const login = (token) => {


    console.log(token);

    // store the token away to persist the user's login
    // localStorage.setItem(token);

    // example of token payload:

    // {
    //   "iss": "dev10-users-api",
    //   "sub": "john@smith.com",
    //   "id": "983f1224-af4f-11eb-8368-0242ac110002",
    //   "roles": "ADMIN",
    //   "exp": 1620495306
    // }

    // decode the token string into a JavaScript object
    const tokenObj = jwt_decode(token);
    console.log(tokenObj);

    // long form...
    // const id = tokenObj.id;
    // const username = tokenObj.sub;
    // const rolesString = tokenObj.roles;

    // short form using destructuring...
    const { id, sub: username, roles: rolesString } = jwt_decode(token);

    // Split the roles string into an array of roles.
    const roles = rolesString.split(',');

    // create the "user" object
    const user = {
      id,
      username,
      roles,
      token,
      hasRole(role) {
        return this.roles.includes(role);
      }
    };

    console.log(user);

    // update the user state
    setUser(user);

    return user;
  }

  const logout = () => {
    setUser(null)
  }

  const auth = {
    user: user ? { ...user } : null,
    login,
    logout
  };

  return (
    <AuthContext.Provider value={auth}>
      <Router>

        <Header />
        <NavBar />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route exact path="/agents">
            {user ? (
              <Agents />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
          <Route path="/agents/add">
            {user ? (
              <AddAgent />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
          <Route path="/agents/edit/:id">
            {user ? (
              <EditAgent />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
          <Route path="/agents/delete/:id">
            {user ? (
              <DeleteAgent />
            ) : (
              <Redirect to='/login' />
            )}
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

      </Router>
    </AuthContext.Provider>


  );
}

export default App;
