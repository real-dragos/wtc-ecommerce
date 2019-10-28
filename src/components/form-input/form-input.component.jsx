import React from 'react';
import styles from './form-input.module.scss';

const FormInput = ({changeHandler, label, ...otherProps}) => {
    return (<div className={styles['group']}>
        <input className={styles['form-input']} onChange={changeHandler} {...otherProps} />
        {
            label
                ? <label className={`${otherProps.value.length ? styles['shrink'] : ''} ${styles['form-input-label']}`}>
                    {label}
                </label>
                : null
        }
    </div>)
}

export default FormInput;