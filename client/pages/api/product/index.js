// here our request methods can be post , get , put , doi
import dbConnect from '../../../utils/mongo'
import Product from '../../../models/Product'

export default async function handler(req, res) { /*  we cant know that how long will CRUD willl take.. therfore it's async*/
   const {method} =req;
   
   
   if(method ==="GET"){
    try{                            /* we can calso pass a condition here {title:"pizza1"} */
    const products = await Product.find({})
    res.status(200).json(products);
    }
    catch(err){
       res.status(500).json(err);
    }
   }


   if(method ==="POST"){
    try{                                        /* req.body will simply give us our object from our body */
    const product = await Product.create(req.body); /* Product is our schema the we converted before to mongoose product model */
    res.status(201).json(product); // This is our response the new product that we created along wit an id
   
    }
    catch(err){
        res.status(500).json(err);
    }
   }

  }
  