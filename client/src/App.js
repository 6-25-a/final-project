import React, { Component } from 'react';
import{ BrowserRouter as Router, Route, Switch  } from 'react-router-dom'; 
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setLoggedInUser, logoutUser } from './actions/authActions';
import { clearCurrentProvider } from './actions/providerActions';
import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Signup from './components/auth/Signup';
import Dashboard from './components/dashboard/Dashboard';
import CreateProvider from './components/add-provider-profile/CreateProvider';

import './App.css';


if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);

  const decoded = jwt_decode(localStorage.jwtToken);

  store.dispatch(setLoggedInUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());

    store.dispatch(clearCurrentProvider());

    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Router>
          <div className="App">
          <Navbar />
            <Route exact path='/' component={ Landing } />
          <div className="container">
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/signup" component={ Signup } />
            <Switch>
            <PrivateRoute exact path="/dashbaord" component={ Dashboard } />
            </Switch>
            <Switch>
            <PrivateRoute exact path="/add-provider-profile" component={ CreateProvider } />
            </Switch>
          </div>
          <Footer />  
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
