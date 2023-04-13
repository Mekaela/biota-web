import React from 'react';
import { useState } from 'react';

const SignUp = () => {
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
        <div class="container p-3 border w-50 text-center shadow h-100 bg-light text-dark rounded">
            <h4>Enjoy a 30 day trial for your farms. </h4>
            <div class="lead">If you love Biota, pay $20 per month from the second month onward</div>
            <form onSubmit={handleSubmit}>
                <div class="input-group input-group-sm mt-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Company Name</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        value={inputs.companyName || ''}
                        onChange={handleChange}
                    />
                </div>
                <div class="input-group input-group-sm mt-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        value={inputs.name || ''}
                        onChange={handleChange}
                    />
                </div>
                <div class="input-group input-group-sm mt-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        value={inputs.email || ''}
                        onChange={handleChange}
                    />
                </div>
                <div class="input-group input-group-sm mt-3 ">
                    <div class="input-group-prepend">
                        <span class="input-group-text" id="inputGroup-sizing-sm">Farm Address</span>
                    </div>
                    <input
                        type="text"
                        class="form-control"
                        value={inputs.farmAddress || ''}
                        onChange={handleChange}
                    />
                    <small class="">Add your primary farm address, you can add more farms after sign up</small>

                </div>
                <button
                    type="submit"
                    class='btn btn-outline-success w-100 p-2 mt-3'
                    label='Sign up'
                >Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
