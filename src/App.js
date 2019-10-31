import React from 'react';
import styles from './App.module.scss';
import HomePage from './pages/homepage/homepage.component';
import {connect} from 'react-redux';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { homeUrl, shopUrl, signUpSignInUrl } from './utils/scripts/constants';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup-page/signin-signup-page.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount(){
    const{setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          })
        })
      }
      else{
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={styles["App"]}>
        <Header/>
        <Switch>
          <Route exact path={homeUrl} component={HomePage} />
          <Route exact path={shopUrl} component={ShopPage} />
          <Route exact path={signUpSignInUrl} render={() => this.props.currentUser ? (<Redirect to={homeUrl} />) : (<SignInSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
