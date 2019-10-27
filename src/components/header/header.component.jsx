import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { homeUrl, shopUrl, contactUrl } from '../../utils/scripts/constants';


const Header = () => {
    return (
        <div className={styles['header']}>
            <Link className={styles['logo-container']} to={homeUrl}>
                <Logo className={styles['logo']} />
            </Link>
            <div className={styles['options']}>
                <Link className={styles['option']} to={shopUrl}>
                    SHOP
                </Link>
                <Link className={styles['option']} to={contactUrl}>
                    CONTACT
                </Link>
            </div>
        </div>
    )
}

export default Header;