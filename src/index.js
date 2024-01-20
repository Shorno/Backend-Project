
import connectBD from "./db/index.js";

import dotenv from "dotenv"

dotenv.config({
    path: './env'
})


connectBD()



// const e = require("express");
//
// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error)=>{
//             console.log("Error...");
//             throw error
//         })
//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listing to port ${process.env.PORT}}`)
//         })
//     }catch (error){
//         console.error("ERROR  : Fuck you, fix it", error)
//         throw error
//     }
// } ) ()