import React from 'react';
import styles from './cart-icon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import {connect} from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';


const CartIcon = ({toggleCartHidden , itemsCount}) => {
    return (
    <div className={styles['cart-icon']} onClick={toggleCartHidden}>
        <ShoppingIcon className={styles['shopping-icon']} />
        <span className={styles['item-count']}> {itemsCount} </span>
    </div>)
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = ({cart: {cartItems}}) => ({
    itemsCount: cartItems.reduce((total, cartItem) => total+cartItem.quantity, 0)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);