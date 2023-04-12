import React, { Component } from 'react';
import { useState } from 'react';


const PasswordReset = () => {
    // const [email, setEmail] = useState('');
    // const [passcode, setPasscode] = useState('');

    return (
        <div>
            <div class="container-fluid h-custom row d-flex justify-content-center align-items-center h-100">
                <form class="bg-light m-4 p-3 rounded shadow" action="" method="post" onsubmit="" id="">
                    <div class="form-outline mb-4">
                        <input type="email" id="" class="form-control form-control-lg" placeholder="Email" />
                    </div>
                    <div class="form-outline mb-2">
                        <input type="newPassword" id="" class="form-control form-control-lg" placeholder="New Password" />
                    </div>
                    <div class="form-outline mb-4">
                        <input type="newPassword2" id="" class="form-control form-control-lg" placeholder="Repeat New Password" />
                    </div>
                    <button type="passwordReset" class="btn btn-success btn-block mb-2 w-100 fs-4">Reset Password</button>

                </form>
            </div>
        </div>
    );
}

export default PasswordReset;
