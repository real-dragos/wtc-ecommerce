import React from 'react';
import styles from './App.module.scss';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className={styles["App"]}>
      <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
