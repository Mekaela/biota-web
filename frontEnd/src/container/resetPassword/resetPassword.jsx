import React, { Component } from 'react';
import PasswordReset from '../../component/passwordReset/PasswordReset';

class ResetPassword extends Component {
    render() {
        return (
            <div class="App-header">
                <h2 class='display-4 text-secondary'>Password Reset</h2>
                <PasswordReset />
            </div>
        );
    }
}

export default ResetPassword;
