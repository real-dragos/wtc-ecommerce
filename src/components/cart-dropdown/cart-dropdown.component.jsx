import React from 'react';
import { connect } from 'react-redux';


import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import styles from './cart-dropdown.module.scss';



const CartDropdown = ({ cartItems }) => {
    return (
        <div className={styles['cart-dropdown']}>
            <div className={styles['cart-items']}>
                {
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                }
            </div>
            <CustomButton inverted>go to checkout</CustomButton>
        </div>)
}

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);