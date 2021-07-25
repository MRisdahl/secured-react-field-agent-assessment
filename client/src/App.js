import { useState } from 'react';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

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

function App() {
  const [user, setUser] = useState(null);

  const login = (username) => {
    setUser({
      username
    });
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
          <Route path="/agents">
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
        </Switch>

      </Router>
    </AuthContext.Provider>


  );
}

export default App;
