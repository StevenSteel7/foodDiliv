import express from 'express'
import mongoose from 'mongoose'
import Connection from './database/db.js'

import Router from '../server/routes/productRoute.js'



const app = express();

app.use(express.json())


const PORT = 7000

app.listen(PORT, () => {
    console.log(`Express Server started on port ${PORT}`)
})
        //endpoint
app.use(Router)
//mongoose connection
Connection();





