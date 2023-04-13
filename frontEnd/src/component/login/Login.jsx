import React from "react";
// import styles from './Login.module.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <section class="">
      <div class="container-fluid h-custom row d-flex justify-content-center align-items-center h-100">
        <form class="bg-light m-4 p-3 rounded shadow" action="" method="post" onsubmit={handleSubmit}>
          <div class="form-outline mb-2">
            <input
              type="email"
              value={inputs.email || ''}
              onChange={handleChange}
              class="form-control form-control-lg"
              placeholder="Email Address"
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="password"
              value={inputs.passcode || ''}
              onChange={handleChange}
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

