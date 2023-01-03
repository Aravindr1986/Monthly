import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Head from 'next/head'
const inter = Inter({ subsets: ['latin'] })

export default   function  Aggregate({data}) {
  const router = useRouter()
  /* const handleSubmit = async (event) => {
    event.preventDefault();
    var bodyData={};
    bodyData.expenseType=event.target.expensetype.value
    bodyData.expenseDate=event.target.edate.value
    bodyData.amount=event.target.amount.value
    bodyData.comments=event.target.comments.value

    const endpoint = '/api/expense'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bodyData),
    }

    // Get verification that the user email id is valid and registered.
    const response = await fetch(endpoint, options)
    let data = await response.json()
    console.log(data)
    if(response.status==200){
      router.push("./dashboard")
    }
  };
  */
  return (
    <div>
      <Head>
        <title>Monthly</title>
      </Head>
      <main className={styles.main}>
       <div className={styles.description}>
    
    <div >
  
      <table border="1px">
      <tbody>
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
export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3000/api/aggregate`)
  var body=await res.json()
  console.log('body:',body);

  // Pass data to the page via props
  return { props: { data:body} }
    
  }