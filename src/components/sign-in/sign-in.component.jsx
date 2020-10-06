import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email: '', password: '' });
    };

    handleChange = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    };

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        id='email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='Email'
                        onChange={this.handleChange}
                        required
                    />

                    <FormInput
                        id='password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='Password'
                        onChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>Sign In</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignIn;
