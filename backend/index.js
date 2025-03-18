import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser";
import studentRouter from "./Routes/studentRoutes.js";

const app = express();
app.use(bodyParser.json());

let mongoUrl = "mongodb+srv://DaniruPunsith:123@cluster1.fsm1a.mongodb.net/CRUDPRC?retryWrites=true&w=majority&appName=Cluster1"

mongoose.connect(mongoUrl)

let connection = mongoose.connection

connection.once("open", ()=>{
    console.log("Mongodb connection successfully")
})

app.use("/student",studentRouter)


app.listen(3000, ()=>{
    console.log("Server is Running port 3000")
})