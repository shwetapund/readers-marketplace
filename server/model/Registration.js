import { Schema, model} from "mongoose";

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        unique:true
    },
    mobile:{
        type:String,
        required:true
    },
    role: {
        type:Boolean, 
        default: false
    },
    

},
{
    timestamps:true
})

const Regi = model('Regi',UserSchema);

export {Regi} 
