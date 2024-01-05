import React from "react";
import { useState } from "react";

function Login(props) {
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(email);

    }

    return (
        <div className="all-container">
            <div className="auth-form-container">
                <h2>Login</h2>
    <form className="login-form" onSubmit={handleSumbit}>
      <label htmlFor="email">email</label>
      <input
        type="email"
        placeholder="Enter ur email"
        id="email"
        name="email"
        value={email}
      />

      <label htmlFor="password">password</label>
      <input
        type="password"
        placeholder="**********"
        id="password"
        name="password"
        value={password}
      />

      <button type="sumbit">Log In</button>
            </form>
            <button className="link-btn" onClick={ () => props.onFormSwitch('register')}>don't have an account? Register here.</button>
            </div>

            </div>
  );
}
export default Login;
