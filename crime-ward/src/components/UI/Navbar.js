import "./Navbar.css";
import React from "react";
import Login from "../SignIn/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          Crime Ward
        </a>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Posts
              </a>
            </li>
            <li class="nav-item">
              <Link to="/login">Login</Link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Sign Up
              </a>
            </li>
          </ul>
        </div>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </nav>
    </Router>
  );
};

export default Navbar;
