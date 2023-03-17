import React from "react";
import styles from './Login.module.scss';
import { Link } from 'react-router-dom';


const Login = () => {
  return (
    <section class="">
      <div class="container-fluid h-custom row d-flex justify-content-center align-items-center h-100">
        <form class="bg-light m-4 p-3 rounded shadow" action="" method="post" onsubmit="" id="">
          <div class="form-outline mb-2">
            <input type="email" id="" class="form-control form-control-lg" placeholder="Phone Number" />
          </div>
          <div class="form-outline mb-4">
            <input type="password" id="" class="form-control form-control-lg" placeholder="Passcode" />
          </div>
          <button type="submit" class="btn btn-success btn-block mb-2 w-100 fs-4">Log in</button>
          <a href="" class="text-body login-forgot fs-6 mb-3 text-decoration-none">Forgotten Password?</a>
          <div class="login-divide"></div>
          <Link to='/createaccount' class="btn btn-warning btn-block m-2 fs-5"> Create new Account </Link>
        </form>
      </div>
    </section>
  );
};

export default Login;

