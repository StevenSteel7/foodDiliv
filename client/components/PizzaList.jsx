import React from 'react'
import PizzaCard from './PizzaCard'
const PizzaList = ({pizzaList}) => {
  return (
    <div className=" items-center text-center text-lg w-screen ">
      <h1 className="font-bold text-3xl py-5">BEST PIZZA IN THE CITY!!</h1>
      <p className="w-[70%] text-xl ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
        Unde assumenda minima amet! Cumque, autem minus. Unde sapiente vero ex enim perspiciatis cum. 
        Dolorum itaque quas eveniet.
      </p>

      <div className=" grid md:grid-cols-4 sm:grid-cols-2 w-screen  ">
        {pizzaList.map((pizza) => (
          <PizzaCard key = {pizza._id} pizza ={ pizza}/>
        ))}
        
  
        
      </div>
    </div>
  )
}

export default PizzaList
