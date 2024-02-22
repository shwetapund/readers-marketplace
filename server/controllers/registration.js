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
export {signupApi}