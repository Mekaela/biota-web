import React from "react";
import { useState } from "react";

const PasswordReset = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <div>
      <div class="container-fluid h-custom row d-flex justify-content-center align-items-center h-100">
        <form
          class="bg-light m-4 p-3 rounded shadow"
          action=""
          method="post"
          onsubmit={handleSubmit}
          id=""
        >
          <div class="form-outline mb-4">
            <input
              type="email"
              value={inputs.email || ''}
              onChange={handleChange}
              class="form-control form-control-lg"
              placeholder="Email"
            />
          </div>
          <div class="form-outline mb-2">
            <input
              type="newPassword"
              value={inputs.newPassword || ''}
              onChange={handleChange}
              class="form-control form-control-lg"
              placeholder="New Password"
            />
          </div>
          <div class="form-outline mb-4">
            <input
              type="newPassword2"
              value={inputs.newPassword2 || ''}
              onChange={handleChange}
              class="form-control form-control-lg"
              placeholder="Repeat New Password"
            />
          </div>
          <button
            type="submit"
            class="btn btn-success btn-block mb-2 w-100 fs-4"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;
