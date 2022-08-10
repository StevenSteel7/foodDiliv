import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const PizzaCard = ({pizza}) => {
  return (
    <Link href={`/product/${pizza._id}`}>
    <div className=" p-5 justify-center  border-2 rounded-xl drop-shadow-lg hover:cursor-pointer">
    <Image src= {pizza.img} alt='' width='300' height='300'/>
    <h1 className="font-bold text-xl text-red-500">{pizza.title}</h1>
    <h2>{pizza.prices[0]} Rs</h2>
    <p className=" text-center text-zinc-600">{pizza.desc}</p>
    </div>
    </Link>
  )
}

export default PizzaCard
