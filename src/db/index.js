// require('dotenv').config({path: './env'})

import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectBD = async () =>{
    try{
     const connectionInstance =   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`
 Database Connected! DB HOST: ${connectionInstance.connection.host}`);
    }catch (error){
        console.log("MongoBD connection Error");
        process.exit(1)
    }
}

export default connectBD