import React from 'react';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { homeUrl, shopUrl, contactUrl, signUpSignInUrl } from '../../utils/scripts/constants';
import { auth } from '../../firebase/firebase.utils';


const Header = ({currentUser}) => {
    return (
        <div className={styles['header']}>
            <Link className={styles['logo-container']} to={homeUrl}>
                <Logo className={styles['logo']} />
            </Link>
            <div className={styles['options']}>
                <Link className={styles['option']} to={shopUrl}>
                    shop
                </Link>
                <Link className={styles['option']} to={contactUrl}>
                    contact
                </Link>
                {
                    currentUser
                        ?
                        <div className={styles['option']} onClick={() => auth.signOut()}>
                            sign out
                    </div>
                        :
                        <Link className={styles['option']} to={signUpSignInUrl}>
                            sign in
                    </Link>
                }
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);