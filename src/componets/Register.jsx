import React from "react";
import { useState } from "react";

function Register(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState('')

    const handleSumbit = (e) => {
        e.preventDefault();
        console.log(email);

    }
    
    return (
        <div className="auth-form-container">
                            <h2>Register</h2>

            <form className="register-form" onSubmit={handleSumbit}>
                <label>Full name</label>
                <input value={name} name="name" id="name" placeholder="Full Name" />
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
              <button onClick={ () => props.onFormSwitch('login')}>Already have an account? Register here.</button>
              </div>
    );
}
export default Register;
