// dashboard.js
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Expense from './components/expense'; // Import the Expense component
import Aggregate from './components/aggregate'; // Import the Aggregate component
import styles from '../styles/dashboard.module.css';

export default function Dashboard() {
  const [showComponent, setShowComponent] = useState(null);

  const handleClick = (component) => {
    setShowComponent(component);
  };

  return (
    <div>
      <Head>
        <title>Monthly App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>Welcome to the Monthly App</div>
          <br />
          <div className={styles.tilesContainer}>
            <div className={styles.tile} onClick={() => { handleClick('expense'); }}>
              <a className={styles.links}>Add an expense</a>
            </div>
            <div className={styles.tile} onClick={() => { handleClick('aggregate'); }}>
              <a className={styles.links}>View monthly summary</a>
            </div>
          </div>
        </div>
        {/* Conditionally render the component based on state */}
        {showComponent === 'expense' && <Expense />}
        {showComponent === 'aggregate' && <Aggregate />}
      </main>
    </div>
  );
}
