import React from 'react';
import styles from './collection-item.module.scss';

const CollectionItem = ({name, price, imageUrl}) => {
    const style = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={styles['collection-item']}>
            <div className={styles['background-image']} style={style}/>
            <div className={styles['collection-footer']}>
                <span className={styles['name']}>{name}</span>
                <span className={styles['price']}>{price}</span>
            </div>
        </div>)
}

export default CollectionItem;