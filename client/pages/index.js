import Head from 'next/head'
import axios from 'axios'
import Featured from '../components/Featured'
import Footer from '../components/Footer'
import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'

export default function Home({pizzaList}) {
  return (
    <div className={styles.container}>
      
      
      <Head>
        <title>Yeh pizza aayiyo ji</title>
        <meta name="description" content="Best Pizza in town" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <PizzaList pizzaList ={pizzaList}/>
     
    </div>
  )
}
export const getServerSideProps = async () =>{
  const res = await axios.get('http://localhost:7000/product');
  return {
    props:{
      pizzaList:res.data,

    }
  };
};