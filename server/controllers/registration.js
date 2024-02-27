import {Regi} from "./../model/Registration.js";
import bcrypt from "bcrypt";

const signupApi = async (req,res)=>{
    const {name, email, mobile, password,role} = req.body;
    
    const signup = new Regi({
        role,
        name,
        email,
        password:Regi.passwordHash,
        mobile
    })
   //import bcrypt from "bcrypt";
    const savedUser = await signup.save();
    
    res.json({
        success:true,
        data:savedUser,
        message:"Signup Successfully"
    })
}

const loginApi = async (req,res)=>{
    const {email,password} = req.body;

        const match = await bcrypt.compare(password, Regi.passwordHash);
        //login hash password
    if(!email || !password){
        res.json({
            success:false,
            message:"enter valid email or password !"
        })
    }
    const findUser = await Regi.findOne({
        email:email,
        password:password
    }).select('name email mobile')

    if(!findUser){
        res.json({
            success: false,
            message:"user not found"
        })
    }

    const savelogin = await findUser.save();

    res.json({
        success:true,
        data:savelogin,
        message:"login successfully"
    })
}

export {signupApi, loginApi}