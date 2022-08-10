import styles from '../styles/Featured.module.css'
import React from 'react'
import Image from 'next/image'
import { useState } from "react";

const Featured = () => {
    const [index, setIndex] = useState(0);
  const images = [
    "/img/featured1.png",
    "/img/featured2.png",
  
  ];

  const handleArrow = (direction) =>{
      if(direction==="l"){
          setIndex(index !== 0 ? index-1 : 2)
      }
      if(direction==="r"){
          setIndex(index !== 2 ? index+1 : 0)
      }
  }
  return (
    <div className='bg-orange-700 h-[70vh] drop-shadow-lg'>
                                                      {/* //on left side */}
 {/*     <div className={styles.arrowContainer} style={{ left: 0 }} onClick={()=>handleArrow("l")}>
        <Image src="/img/arrowl.png" alt="" layout="fill" objectFit="contain"/>
      </div>  */}
      <div className='grid grid-cols-2  '>
        <div>
          <h1 className='text-7xl text-white font-bold px-20 py-10'>Save Upto 90%!!! </h1>
          <h1 className='text-7xl text-white font-bold px-20 '>Order Now </h1>
          <h2 className='text-xl px-20 py-10 text-white font-bold max-w-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit eligendi ducimus nemo sequi sit necessitatibus facilis distinctio animi magni cumque voluptate aliquam et, totam, ut obcaecati quaerat placeat sed cupiditate fuga quia qui! Rem, aliquid consequatur.</h2>
        </div>

        <div className="absolute w-[50%] h-[50%] py-10 top-40 bottom-0 " style={{ right: 0 }} >
        <Image src="/img/featured1.png" alt="" layout="fill" objectFit="contain"/>
        </div> 
      </div>
      
    



      {/* <div className={styles.arrowContainer} style={{ right: 0 }} onClick={()=>handleArrow("r")}>
        <Image src="/img/arrowr.png" layout="fill" alt="" objectFit="contain"/>
      </div> */}
    </div>
  );
};
export default Featured
