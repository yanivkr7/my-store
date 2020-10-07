import React, { Component } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

export class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    handleSubmit = async event => {
        event.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
        } catch (error) {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            if (errorCode.includes('auth')) {
                alert(errorMessage);
            } else {
                alert(errorMessage);
            }
            console.log(error);
        }
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have account</h2>
                <span>Sign up with your email and password</span>
                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        name='displayName'
                        type='text'
                        handleChange={this.handleChange}
                        label='Display Name'
                        value={displayName}
                    />

                    <FormInput
                        name='email'
                        type='email'
                        handleChange={this.handleChange}
                        label='Email'
                        value={email}
                    />

                    <FormInput
                        name='password'
                        type='password'
                        handleChange={this.handleChange}
                        label='Password'
                        value={password}
                    />
                    <FormInput
                        name='confirmPassword'
                        type='password'
                        handleChange={this.handleChange}
                        label='Confirm Password'
                        value={confirmPassword}
                    />
                    <CustomButton>Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;
