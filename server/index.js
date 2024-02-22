import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

const connectMongoDB = async() =>{
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    if(connection){
        console.log("mongoDB iis connect 💖")
    }
}
connectMongoDB();


app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})