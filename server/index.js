import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {signupApi, loginApi} from "./controllers/registration.js";
import {bookApi, updateBooksApi} from "./controllers/books.js";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000

const connectMongoDB = async() =>{
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    if(connection){
        console.log("mongoDB is connect 💖")
    }
}
connectMongoDB();

app.post('/api/v1/signup',signupApi) //signup
app.post('/api/v1/login',loginApi) //login
app.post('/api/v1/books',bookApi) //books added 
app.put('/api/v1/books/:_id',updateBooksApi) //books update

// app.get('/admin', (req, res) => {
//     if (req.user.role === 'admin') {
//       res.send('Welcome Admin!');
//     } else {
//       res.status(403).send('Permission Denied.');
//     }
//   });

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})