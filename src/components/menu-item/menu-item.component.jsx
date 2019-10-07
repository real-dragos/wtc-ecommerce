import React from 'react';

import styles from './menu-item.module.scss';

const MenuItem = ({title, imageUrl, size}) => {
    const style = {
        backgroundImage: `url(${imageUrl})`
    }

    return (
        <div className={[styles['menu-item'], styles[`${size}`]].join(' ')}>
            <div className={styles['background-image']} style={style}/>
            <div className={styles['content']}>
                <h1 className={styles['title']}>{title.toUpperCase()}</h1>
                <span className={styles['subtitle']}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default MenuItem;