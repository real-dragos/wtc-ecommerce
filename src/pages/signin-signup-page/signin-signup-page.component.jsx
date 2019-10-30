import React from 'react';
import styles from './signin-signup-page.module.scss';
import SignInForm from '../../components/signin-form/signin-form.component';
import SignUpForm from '../../components/signup-form/signup-form.component';

const SignInSignUpPage = () => {
    return (
    <div className={styles['signin-signup-page']}>
        <SignInForm />
        <SignUpForm />
    </div>)
}

export default SignInSignUpPage;