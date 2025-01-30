import express from 'express';
import UserRoute from"./router/UserRoute.js";
const app = express();
const port = 5000;

app.use("/", UserRoute);
app.get ("/getMessages", (req, res) => {
    res.send("I am from get message...");
});

app.listen(port,() =>{
    console.log("Server running on port:", port);
});