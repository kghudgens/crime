import "./Navbar.css";
import React from "react";
import Login from "../SignIn/Login";

const Navbar = () => {
  const displayLogin = () => {
    <Login />;
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
      <a className="navbar-brand" href="#">
        Crime Ward
      </a>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Posts
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={displayLogin}>
              Log In
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
