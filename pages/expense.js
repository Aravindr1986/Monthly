import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';
import axios from 'axios';
const inter = Inter({ subsets: ['latin'] })
import DatePicker from 'react-datepicker';
export default function Expense() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedExpenseType, setSelectedExpenseType] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const handleSubmit = async (event) => {
    event.preventDefault();
    var bodyData={};
    bodyData.expenseType=event.target.expensetype.value
    bodyData.expenseDate=selectedDate
    bodyData.Amount=event.target.amount.value
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
      router.reload()
      //router.push("./dashboard")
    }
  };
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/category');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  },[])
 
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
                            <td>
                      <select
                        id="expensetype"
                        name="expensetype"
                        onChange={(e) => setSelectedExpenseType(e.target.value)}
                        value={selectedExpenseType}
                        required
                      >
                        <option value="" disabled>Select an Expense Type</option>
                        {data.map((expenseType) => (

                          <option key={expenseType.Name} value={expenseType.Name}>
                            {expenseType.Name}
                          </option>
                        ))}
                      </select>
                    </td>
                          </tr>
                          <tr>
                            <th>Expense Date: </th>
                            <td><DatePicker       selected={selectedDate}  onChange={(date) => setSelectedDate(date)}
                              dateFormat="yyyy-MM-dd"    placeholderText=""
                              required     /></td>
                          </tr>
                          <tr>
                            <th>Amount: </th>
                            <td><input type="text" id="amount" name="amount"  required /></td>
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
