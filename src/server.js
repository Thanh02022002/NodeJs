import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoute from "./route/web";
import connectDB from "./config/connectDB";
import cors from "cors";

require('dotenv').config();

let app = express();
app.use(cors({ origin:true }));

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

viewEngine(app);
initWebRoute(app);

connectDB();

let port = process.env.PORT;

app.listen(port, ()=> {
    //callback
    console.log("Backend nodejs is running on the port:" + port);
})
