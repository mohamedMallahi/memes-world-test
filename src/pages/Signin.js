import React, { useState } from 'react';
import './Signin.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch('https://memes-app-api.herokuapp.com/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem('auth-token', JSON.stringify(data.token));
    }
  };

  return (
    <div className="form-signin">
      <form onSubmit={submitHandler} method="get">
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating mb-2">
          <input
            type="tel"
            className="form-control"
            placeholder="Email Address"
            name="emailAddress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="emailAddress">Email Address</label>
        </div>

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="password">Password</label>
        </div>

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Sign in
        </button>
        <p className="mt-2">
          Don't have an account? <a href="/signup">Signup</a>
        </p>
      </form>
    </div>
  );
};

export default Signin;
