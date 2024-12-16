import express from 'express'
const router = express.Router()
import ProductSchema from '../models/Product.js' 

const app = express();





//API
router.get('/product', async(req,res) => {
    try{
           const usrobj = await ProductSchema.find()
           res.json(usrobj)

    }catch(err){
        res.send('Error ' + err)
    }
})


/* router.get('/:id', async(req,res) => {
    try{

         await  ProductSchema.findByID(res.params.id) 
         .then(result =>{
            res.status(200).json({ji:result})
         })
      
    }catch(err){
        res.send('Error ' + err)
    }
})
 */


router.post('/post', async(req,res) => {
    try{                                        /* req.body will simply give us our object from our body */
        const product = await ProductSchema.create(req.body); /* Product is our schema the we converted before to mongoose product model */
        res.status(201).json(product) // This is our response the new product that we created along wit an id
   
    }
    catch(err){
        res.status(500).json(err);
    }
   }
   )


 router.get('/fetch/:id', async(req,res) => {
    try{
        
           const alien = await ProductSchema.findById(req.params.id)

           console.log(alien)
            res.json(alien)
    }catch(err){
        res.send('Error ' + err)
    }
})
 
                 
/* router.post('/', async(req,res) => {
    const alien = new ProductSchema({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })

    try{
        const a1 =  await alien.save() 
        res.json(a1)
    }
    catch(err){
        res.send('Error')
    }
}) */







export default  router

/* later import Router from routes/router  in index.js*/