import "./Login.css";
import React from "react";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title"> Please Log In</h4>
        </div>
        <div className="modal-body">
          <LoginForm />
        </div>
        <div>
          <button className="button">Close</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
