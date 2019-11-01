import React from 'react';
import styles from './custom-button.module.scss';

const CustomButton = ({children, isGoogleButton, inverted, ...otherProps}) => {
    return (
        <button className={`${inverted ? styles['inverted'] : ''} ${isGoogleButton ? styles['google-button'] : ''} ${styles['custom-button']}`}{...otherProps}>
            {children}
        </button>
    )
}   

export default CustomButton;