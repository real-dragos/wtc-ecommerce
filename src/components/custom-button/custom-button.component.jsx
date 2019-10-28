import React from 'react';
import styles from './custom-button.module.scss';

const CustomButton = ({children, isGoogleButton, ...otherProps}) => {
    return (
        <button className={`${isGoogleButton ? styles['google-button'] : ''} ${styles['custom-button']}`}{...otherProps}>
            {children}
        </button>
    )
}   

export default CustomButton;