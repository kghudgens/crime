import "./LoginForm.css";
import React from "react";

const LoginForm = () => {
  return (
    <div>
      <form>
        <div>
          <label>Username</label>
          <input type="text" />
        </div>
        <div>
          <label>Password</label>
          <input type="text" />
        </div>
        <div>
          <button>Sign In</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
