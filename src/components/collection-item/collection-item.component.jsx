import React from 'react';
import {connect} from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import styles from './collection-item.module.scss';
import { addCartItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item , addItem }) => {
    const {name, price, imageUrl} = item;
    
    const style = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={styles['collection-item']}>
            <div className={styles['background-image']} style={style} />
            <div className={styles['collection-footer']}>
                <span className={styles['name']}>{name}</span>
                <span className={styles['price']}>{price}</span>
            </div>
            <div className={styles['custom-button']}>
                <CustomButton inverted onClick={()=>addItem(item)}> Add to cart</CustomButton>
            </div>
        </div>)
}

const mapDisaptchToProps = dispatch => ({
    addItem: item => dispatch(addCartItem(item))
})

export default connect(null, mapDisaptchToProps)(CollectionItem);