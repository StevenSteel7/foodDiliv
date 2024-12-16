import mongoose from "mongoose"


const Connection =async () =>
{

const URl ='mongodb+srv://soggsteven92:ou0vHDmlOWCetUXC@test1.gbdve.mongodb.net/?retryWrites=true&w=majority '


try {
    await mongoose.connect(URl, {useNewUrlParser:true});
     console.log("DB connection started")   
        }
catch  (err){console.log(err)}
}

export default Connection;