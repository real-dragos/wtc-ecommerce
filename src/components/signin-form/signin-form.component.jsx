import React from 'react';
import styles from './signin-form.module.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle } from '../../firebase/firebase.utils';
class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = (event) => {
        event.preventDefault();

        this.setState({
            email: '',
            password: ''
        })
    }

    changeHandler = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div className={styles['signin-form']}>
                <h2 className={styles['title']}>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput
                        changeHandler={this.changeHandler} label='Email'
                        name='email'
                        type='email'
                        value={this.state.email}
                        autoComplete='current-email'
                        required
                    />
                    <FormInput
                        changeHandler={this.changeHandler} label='Password'
                        name='password'
                        type='password'
                        value={this.state.password}
                        autoComplete='current-password'
                        required
                    />
                    <div className={styles['buttons']}>
                        <CustomButton type='submit'>
                            Sign In
                    </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleButton>
                            Sign In With Google
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignInForm;