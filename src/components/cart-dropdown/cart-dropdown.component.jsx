import React from 'react';
import styles from './cart-dropdown.module.scss';
import CustomButton from '../custom-button/custom-button.component';


const CartDropdown = () => {
    return (
    <div className={styles['cart-dropdown']}>
        <div className={styles['cart-items']}/>
        <CustomButton>go to checkout</CustomButton>
    </div>)
}

export default CartDropdown;