import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default   function  Aggregate({data}) {
  const router = useRouter()
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  
  return (
    <div>
      <Head>
        <title>Monthly</title>
      </Head>
      <main className={styles.main}>
       <div className={styles.description}>
      
    <div >
    <h1>Summary of expenses</h1><br></br>
      <table border="1px">
      <tbody>
        <tr><th>Item</th><th>Total</th></tr>
      {data.map((totals) => {
            return (
          <tr key={totals._id}><td>{totals._id}</td><td>{totals.total}</td></tr>
          )})}
      </tbody>
      </table>
    </div>
    </div>
      </main>
    </div>
  )
}
export async function getServerSideProps() {  //Why are you doing this like this?????
  const res = await fetch(`http://localhost:3000/api/aggregate`)
  var body=await res.json()
  return { props: { data:body} }
    
  }