import Head from 'next/head'
import styles from './dashboard.module.css'
export default    function dashboard() { 
    return (
      <div>
      <Head>
        <title>Monthly App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <div>         
              Welcome to the Monthly App
          </div>
          <br></br> 
          <div>
          <table>  
            <tbody>
              <tr><td><a href="http://localhost:3000/expense">Add an expense</a></td></tr>
              <tr><td><a href="http://localhost:3000/aggregate">View monthly summary</a></td></tr>
            </tbody>
          </table>
        </div>
        </div>
        
      </main>
    </div>
    )
  }