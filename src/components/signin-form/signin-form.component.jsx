import React from 'react';
import styles from './signin-form.module.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from '../../firebase/firebase.utils';

class SignInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    submitHandler = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: '',
                password: ''
            })
        } catch(error) {
            console.log(error.message)
        }
    }

    changeHandler = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {

        const { email, password } = this.state;

        return (
            <div className={styles['signin-form']}>
                <h2 className={styles['title']}>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.submitHandler}>
                    <FormInput
                        changeHandler={this.changeHandler} label='Email'
                        name='email'
                        type='email'
                        value={email}
                        autoComplete='current-email'
                        required
                    />
                    <FormInput
                        changeHandler={this.changeHandler} label='Password'
                        name='password'
                        type='password'
                        value={password}
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