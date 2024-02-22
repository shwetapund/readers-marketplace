import {Regi} from "./../model/Registration.js";

const signupApi = async (req,res)=>{
    const {name, email, mobile, password} = req.body;

    const signup = new Regi({
        name,
        email,
        password,
        mobile
    })

    const savedUser = await signup.save();
    
    res.json({
        success:true,
        data:savedUser,
        message:"Signup Successfully"
    })
}

const loginApi = async (req,res)=>{
    const {email,password} = req.body;

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