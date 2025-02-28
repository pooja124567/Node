import express from 'express';
import UserRoute from "./router/UserRoute.js"
import { db } from "./database/db.js";
import AuthRoute from "./router/AuthRoute.js"
import fileRouter from "./router/fileRouter.js"
import cors from "cors";


const app = express();
app.use(express.json());
const port = 5705;
app.use(cors());


app.use(cors());

app.use("/api", UserRoute);
app.use("/log", AuthRoute);
app.use("/file", fileRouter);

// app.get("/getMessage",(req, res) => {
//     res.send("I am from backend getMessage");

// })

app.listen(port, ()=>{
    console.log(port);
    
})

