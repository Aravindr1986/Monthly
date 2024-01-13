import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Expense() {
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    var bodyData={};
    bodyData.expenseType=event.target.expensetype.value
    bodyData.expenseDate=event.target.edate.value
    bodyData.Amount=event.target.amount.value
    bodyData.comments=event.target.comments.value
    bodyData.category=event.target.category.value

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
 
  return (
    <div>
      <Head>
        <title>Monthly</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        <div>         
              
              <form onSubmit={handleSubmit} >
              Enter your expense
                  <table>
                    <tbody>
                          <tr>
                            <th>Expense Type :</th>
                            <th><input type="text" id="expensetyoe" name="expensetype"  required /></th>
                          </tr>
                          <tr>
                            <th>Expense Date: </th>
                            <td><input type="text" id="edate" name="edate"  required /></td>
                          </tr>
                          <tr>
                            <th>Amount: </th>
                            <td><input type="text" id="amount" name="amount"  required /></td>
                          </tr>
                          <tr>
                            <th>Category: </th>
                            <td><input type="text" id="category" name="category"  required /></td>
                          </tr>
                          <tr>
                            <th>Comments: </th>
                            <td><input type="text" id="comments" name="comments"  required /></td>
                          </tr>

                          <tr>
                            <td><center><input type="submit" name="Add"  value="Add" /></center></td>
                          </tr>
                    </tbody>
                  </table>   
                </form>
        
          
                  </div> 
        </div>
      </main>
    </div>
  )
}
