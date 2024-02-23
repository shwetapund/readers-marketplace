import { Schema, model} from "mongoose";

const bookSchema = new Schema({
    cover:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    genre:{
        type:String,
        required:true
    },
    publishDate:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    tags:{
        type:String,
        required:true
    }
},
{
    timestamps:true
})

const Book = model('Book',bookSchema);

export {Book}