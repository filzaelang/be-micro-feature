import { AppDataSource } from "./data-source"
import * as express from "express"
import router from "./route"
import * as cors from "cors"
import "dotenv/config"

AppDataSource.initialize()
    .then(async () => {
        const app = express()

        //cors
        app.use(cors({
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE'],
            allowedHeaders: ['Content-Type', 'Authorization']
        }))
        app.use(express.json())
        app.use("/data", router)

        console.log("PORT:", process.env.PORT);
        app.listen(process.env.PORT, () => console.log(`server running`))


    }).catch(error => console.log(error))
