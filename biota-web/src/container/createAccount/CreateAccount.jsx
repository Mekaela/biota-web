import React, { Component, useState } from 'react';

class CreateAccount extends Component {
    render() {
        return (
            <section class="">
                <div class="container p-3 my-3 border w-50 text-center shadow h-100 mt-5">
                    <h4>Enjoy a 30 day trial for your farms. </h4>
                    <div class="lead">If you love Biota, pay $20 per month from the second month onward</div>
                    <form onSubmit='{handleSubmit}'>
                        <div class="input-group input-group-sm mt-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Company Name</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="input-group input-group-sm mt-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Name</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="input-group input-group-sm mt-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Mobile Number</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                            />
                        </div>
                        <div class="input-group input-group-sm mt-3 ">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm">Farm Address</span>
                            </div>
                            <input
                                type="text"
                                class="form-control"
                                // value={}
                                onChange='{handleChange}'
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

            </section>
        );
    }
}

export default CreateAccount;
