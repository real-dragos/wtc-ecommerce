import React from 'react';
import styles from './collection-preview.module.scss';
import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className={styles['collection-preview']}>
            <h1 className={styles['title']}>{title.toUpperCase()}</h1>
            <div className={styles['preview']}>
                {items
                    .filter((item, idx) => idx < 4)
                    .map(({ id, ...otherItemProps }) => <CollectionItem key={id} {...otherItemProps} />)}
            </div>
        </div>
    )
}

export default CollectionPreview;