import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'

const app = express();

app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGO_URL;

mongoose.connect(MONGOURL).then(()=>{
    console.log('Database connection is successful.')
    app.listen(PORT, ()=> {
        console.log(`Server is running on PORT ${PORT}`)
    });
}).catch((error)=> console.log(error));