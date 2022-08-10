import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxlength: 60
    },
    
    img:{ /* after uploading a file.. we'll recieve a string url */
        type: String,
        required: true,

        
    },
    desc:{
        type: String,
        required: true,
        maxlength: 60
    },
    prices:{
        type: [Number],
        required: true,
       
    },
    extraOptions:{
                    type:[ /* type is an array and we send object inside array which have certian fields  */
                            {
                                text:{type: String , required:true}, /* Fields of objects inside the Array */
                                price :{type: Number , required:true}, 
                            },
                         ],
                },
    },            
    {timestamps : true} /* we will have a creation date */
    
)  

export default  mongoose.model("Product", ProductSchema);
