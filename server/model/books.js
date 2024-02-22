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
        type:true,
        required:true
    },
    publishDate:{
        type:true,
        required:true
    },
    price:{
        type:Number,
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

const Books = model('bookSchema',Books);

export {Books}