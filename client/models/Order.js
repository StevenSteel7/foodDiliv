import mongoose from 'mongoose';
/* For order page */

const OrderSchema = new mongoose.Schema({
    /* OrderID:{
        type: Number,
        required: true,
        maxlength: 60
    }, */
    customerName:{
        type: String,
        required: true,
        maxlength: 60
    },
    address:{ /* after uploading a file.. we'll recieve a string url */
        type: String,
        required: true,
        
    },
    Total:{
        type: Number,
        required: true,
       
    },
    status:{
        type: Number,
        default:0 /* initial state 1 prep, 2 final*/
       
    },
    mathod:{
        type: Number, /*  pay with cash 0 ,1 pay with card */
        required: true
       
    },
    },            
    {timestamps : true} /* we will have a creation date */
    
)  

export default mongoose.model("Order", OrderSchema);