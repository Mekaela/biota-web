import React from "react";
// import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The email you entered was: ${email}`)
  }

  return (
    <section class="">
      <div class="container-fluid h-custom row d-flex justify-content-center align-items-center h-100">
        <form class="bg-light m-4 p-3 rounded shadow" action="" method="post" onsubmit={handleSubmit}>
          <div class="form-outline mb-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              class="form-control form-control-lg"
              placeholder="Email Address"
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              class="form-control form-control-lg"
              placeholder="Passcode"
            />
          </div>
          <button type="submit" class="btn btn-success btn-block mb-2 w-100 fs-4">Log in</button>
          <div>
            <Link to='/resetpassword' class="text-body login-forgot fs-6 mb-3 text-decoration-none">Forgotten Password?</Link>
          </div>
          <div>
            <Link to='/createaccount' class="btn btn-warning btn-block m-2 fs-5"> Create new Account </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;

