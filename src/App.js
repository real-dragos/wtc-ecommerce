import React from 'react';
import styles from './App.module.scss';
import HomePage from './pages/homepage/homepage.component';

function App() {
  return (
    <div className={styles["App"]}>
      <HomePage />
    </div>
  );
}

export default App;
