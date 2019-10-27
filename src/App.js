import React from 'react';
import styles from './App.module.scss';
import HomePage from './pages/homepage/homepage.component';
import {Route, Switch} from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import { homeUrl, shopUrl } from './utils/scripts/constants';
import Header from './components/header/header.component';

function App() {
  return (
    <div className={styles["App"]}>
      <Header />
      <Switch>
          <Route exact path={homeUrl} component={HomePage}/>
          <Route exact path={shopUrl} component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
