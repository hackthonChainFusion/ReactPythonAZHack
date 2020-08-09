import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LoginForm from './Component/login/loginform';
import DashboardHome from './Component/dashboard/dashboardHome'
function App(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = {LoginForm} {...props}/>
        <Route path="/dashboard" component = {DashboardHome} {...props}/>
      </Switch>
    </Router>
  );
}

export default App;
