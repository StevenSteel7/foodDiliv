import mongoose from "mongoose"


const Connection =async () =>
{

const URl ='mongodb+srv://user:pass@cluster0.roxlw3y.mongodb.net/?retryWrites=true&w=majority '


try {
    await mongoose.connect(URl, {useNewUrlParser:true});
     console.log("DB connection started")   
        }
catch  (err){console.log(err)}
}

export default Connection;