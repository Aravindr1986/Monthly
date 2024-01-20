import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import Cookies from 'js-cookie';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const endpoint = '/api/login?q=' + event.target.username.value
    const options = {
      method: 'GET',
    }
    try{

              // Get verification that the user email id is valid and registered.
              const response = await fetch(endpoint, options)
              let data = await response.json()
              console.log(data)
              Cookies.set('token', data.token);
        
              if(response.status==200){
                router.push("./dashboard")
              } else {
                setError('Invalid credentials'); 
              }
      
            }catch (error) {
              console.error('Error during login:', error);
              setError('An error occurred during login');
            }
   
  };
 
  return (
    <div>
      <Head>
        <title>Monthly App</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
        <div>         
              
              <form onSubmit={handleSubmit} >
              Welcome to Monthly!
                  <table>
                    <tbody>
                          <tr>
                            <th>Username/emailId :</th>
                            <th><input type="text" id="username" name="username"  required /></th>
                          </tr>
                          <tr>
                            <th>Password: </th>
                            <td><input type="password" id="password" name="password"  required /></td>
                          </tr>
                          <tr>
                            <td><input type="submit" name="login"  value="login" /></td>
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
