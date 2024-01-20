import connectBD from "./db/index.js";

import dotenv from "dotenv"
import {app} from "./app.js";


dotenv.config({
    path: './env'
})


connectBD()
    .then(() => {
        app.listen(process.env.PORT || 8000)
        console.log(`Server is running at port ${process.env.PORT}`);
    })

    .catch((error) => {
        console.log("MONGO DB connection failed", error)

    })