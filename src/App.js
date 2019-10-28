import React from 'react';
import styles from './App.module.scss';
import HomePage from './pages/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { homeUrl, shopUrl, signUpSignInUrl } from './utils/scripts/constants';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signin-signup-page/signin-signup-page.component';
import { auth } from './firebase/firebase.utils';

class App extends React.Component {

  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className={styles["App"]}>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path={homeUrl} component={HomePage} />
          <Route exact path={shopUrl} component={ShopPage} />
          <Route exact path={signUpSignInUrl} component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
