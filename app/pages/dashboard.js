// dashboard.js
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Expense from './expense'; // Import the Expense component
import Aggregate from './aggregate'; // Import the Aggregate component
import styles from '../styles/dashboard.module.css';

export default function Dashboard() {
  const [showComponent, setShowComponent] = useState(null);
  const router = useRouter();

  const handleClick = (component) => {
    setShowComponent(component);
  };

  const navigate = (path) => {
    router.push(path);
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
          <div>
            <table className={styles.tab1}>
              <tbody>
                <tr>
                  <td>
                    {/* Handle navigation programmatically */}
                    <a className={styles.links} onClick={() => { handleClick('expense'); navigate('/expense'); }}>Add an expense</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    {/* Handle navigation programmatically */}
                    <a className={styles.links} onClick={() => { handleClick('aggregate'); navigate('/aggregate'); }}>View monthly summary</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {/* Conditionally render the component based on state */}
        {showComponent === 'expense' && <Expense />}
        {showComponent === 'aggregate' && <Aggregate />}
      </main>
    </div>
  );
}
