import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import {signupApi, loginApi} from "./controllers/registration.js";
import {bookApi, updateBooksApi, getBooksApi, searchBooks, booksFetchApi} from "./controllers/books.js";
import path from 'path';
const __dirname = path.resolve();

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
app.get('/api/v1/books/:_id',getBooksApi) //bookd fetch
app.get('/api/v1/booksSearch', searchBooks) //search books by title
app.get('api/v1/books',booksFetchApi) //fetch All books

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));
  
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
    });
  }

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`)
})