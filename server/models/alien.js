import mongoose from 'mongoose';



const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    tech: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})
                                //name of the collention and it changes to plural 
const userSchem =  mongoose.model('sex',userSchema)
export default  userSchem