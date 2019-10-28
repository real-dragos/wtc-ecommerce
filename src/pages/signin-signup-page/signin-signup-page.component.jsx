import React from 'react';
import styles from './signin-signup-page.module.scss';
import SignInForm from '../../components/signin-form/signin-form.component';

const SignInSignUpPage = () => {
    return (
    <div className={styles['signin-signup-page']}>
        <SignInForm />
    </div>)
}

export default SignInSignUpPage;