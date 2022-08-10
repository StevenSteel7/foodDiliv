import React from 'react'
import Image from 'next/image'
import { useState } from "react";
import styles from "../../styles/Product.module.css";
import axios from 'axios'
import { useDispatch } from 'react-redux';
          // redux funtion to send data

import {addProduct} from '../../redux/cartSlice'
        // slice that we created


const Product = ({pizza}) => {
  const [sizeofPizza ,setSizeofPizza] = useState(0)
  const [price ,setPrice] = useState(pizza.prices[0])

     // 0 for small
const changePrice = (number ) =>{
  setPrice(price+number)
}

   const handleSize = (sizeIndex) =>{
    const diffrence = pizza.prices[sizeIndex] - pizza.prices[sizeofPizza] //current size
    setSizeofPizza(sizeIndex)
    changePrice(diffrence )
   }

   const handleChange = (e,option) =>{
    const checked  = e.target.checked
    if(checked){
      changePrice(option.price)
      setExtras(/* (prev)=> [...prev,option] OR*/ 
      ...extras ,option
      )
    }
      
    else changePrice(-option.price)  /* filter function takes array and return takes a  condition matching array  and it returns the array that matches those conditions*/
    setExtras(extras.filter((extras) => extras._id !== option._id))
   }

  const [extras , setExtras] = useState([]) // To send these to cart

  const [quantity,setQuantity] = useState(1)






  // For adding to cart using react redux
  const dispatch = useDispatch();
  const handleClick = () => {
                            
    
                            //pass as an object
    dispatch(addProduct({...pizza,extras,price,quantity}))
  }           // simply the fuction in cart slice
     // we are passing this payload for the next page..finalCheckout         
  
  
  
  
  
  return (
    <div className='h-screen flex px-20'>
    
      <div className='left flex-col flex-1 h-[100%] justify-center items-center '>
      
        <div className='h-[60%] w-[50%] relative '>
          <Image src={pizza.img} objectFit="contain" layout="fill" alt="" />
        </div>

      </div>

      <div className ='right flex-1 space-y-5 py-20 pr-20'>
        <h1 className='text-2xl font-bold'>{pizza.title}</h1>
        <span>{price} Rs.</span>
        <p className='text-zinc-600'>{pizza.desc}</p>
        <h3 className=''>Kitna Bada Hei? </h3>
        <div className='sizes.. flex-col w-[60%] font-bold text-xl text-white text-center pr-12 '>

          <button className='rounded-md px-3 mr-5' onClick={()=>handleSize(0)}>Small</button>
          <button className='rounded-md px-3 mr-5' onClick={()=>handleSize(1)}>Meduim</button>
          <button className='rounded-md px-4 mr-5' onClick={()=>handleSize(2)}>Large</button>
  
        </div>

        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>

          {pizza.extraOptions.map((option)=>(
            <div className={styles.option} key = {option._id}>{/* //key of the div */}
               <input
              type="checkbox"
              id={option.text}
              name={option.text}
              className={styles.checkbox}
              onChange = {(e)=>handleChange(e,option)}
            />
            <label htmlFor="double">{option.text}</label>
            </div>
          ))}





          
        </div>
        <div className='flex space-x-10' >                         
            <input type="number" defaultValue={1} min={1} className='border w-[10%]'  onChange={(e) => setQuantity(e.target.value)}/>
            <button className='rounded-lg px-2 ' onClick={handleClick}>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}

export default Product


export const getServerSideProps = async ({params}) =>{

  
  const res = await axios.get(`http://localhost:7000/fetch/${params.id}`);
  return {
    props:{
      pizza:res.data

      
    }
    
  };
  
};
