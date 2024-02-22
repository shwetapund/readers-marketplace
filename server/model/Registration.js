import { Schema, model} from "mongoose";

const UserSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    }
})

const Regi = model('Regi',UserSchema);

export {Regi} 
