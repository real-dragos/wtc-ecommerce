import React from 'react';
import styles from './cart-icon.module.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';


const CartIcon = ({ toggleCartHidden, itemCount }) => {
    return (
        <div className={styles['cart-icon']} onClick={toggleCartHidden}>
            <ShoppingIcon className={styles['shopping-icon']} />
            <span className={styles['item-count']}> {itemCount} </span>
        </div>)
}

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = (state) => ({
    itemCount: selectCartItemsCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
