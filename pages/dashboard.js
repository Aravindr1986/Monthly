// dashboard.js
import Head from 'next/head';
import styles from '../styles/dashboard.module.css';

export default function dashboard() {
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
                    <a className={styles.links} href="http://localhost:3000/expense">Add an expense</a>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a className={styles.links}  href="http://localhost:3000/aggregate">View monthly summary</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
