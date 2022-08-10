import React from 'react'
import Link from 'next/link'
import {
  PhoneIcon,
  ShoppingCartIcon,
  PaperAirship,
  ServerIcon,
}from '@heroicons/react/solid'

      //  comes with react redux .. used to trnfer data in front end
import {useSelector} from "react-redux"




const Navbar = () => {

  const Cartquantity = useSelector((state) =>  state.cart.cartIconQuantity);
  // Also whem we click on add to cart .. we will dispact addProduct action

  return (
    <div>
      <div className="w-screen h-[80px] z-10 bg-orange-700 fixed drop-shadow-lg items-center pb-10 ">


        
        <div className= ' flex items-center'>
                <div className = 'grid grid-cols-2 pl-[20px] '>
                  <div>
                    <PhoneIcon className='h-10 text-white'/>
                  </div>  
                  <div>
                    <div className='flex-row '>
                      <h3 className='font-bold text-white text-xs'>Order Now!</h3>
                      <h3 className='font-bold text-white text-lg'>12345</h3>
                    </div>
                  </div>
                </div>
          <ul className='flex items-center py-6 space-x-11 mx-auto'>
            <Link href='/'><li className="text-white hover:cursor-pointer ">Homepage</li></Link>
            <Link href='/'><li className="text-white hover:cursor-pointer">Products</li></Link>
            < Link href='/'><li className="text-white hover:cursor-pointer">Menu</li></Link>
            <li className="text-white hover:cursor-pointer font-sex font-hi text-3xl ">Steve </li>
            <Link href='/'><li className="text-white hover:cursor-pointer">Events</li></Link>
            <Link href='/'><li className="text-white hover:cursor-pointer">Blog</li></Link>
            <Link href='/'><li className="text-white hover:cursor-pointer">Contact</li></Link>
          </ul>
          <Link href ='/cart'><div>
          <ShoppingCartIcon className='h-10 text-white pr-7'/> 
          <h3 className= 'absolute top-3 px-2 border-b-2 border-orange-700 rounded-3xl bg-white text-orange-700'>{Cartquantity}</h3>
          </div>
          
          </Link>
        </div>
        
      </div> 
      <div className='py-10'></div>
       
     
   
    </div>

  )
}

export default Navbar
