import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import '../styles/globals.css'

import store from '../redux/store'
import {Provider} from "react-redux"
      //Comes with redux

function MyApp({ Component, pageProps }) {
  
  return(
    <Provider store = {store}>
    <Navbar/>
    <Component {...pageProps} />
    <Footer/>
    </Provider>
  );
}

export default MyApp
