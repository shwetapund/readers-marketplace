import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from "./../../components/Navbar/Navbar";
import "./Signup.css";
import signupImg from "./../../assets/signup.jpg";
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('false')

  const signup = async () => {
    if (!name) {
      alert("Name is require");
      return;
    }
    if (!mobile) {
      alert("Mobile is required");
      return;
    }
    if (!email) {
      alert("Email is required");
      return;
    }
    if (!password) {
      alert("Password is required");
      return;
    }
  
    const response = await axios.post('/api/v1/signup', {
      name: name,
      mobile: mobile,
      email: email,
      password: password,
      role: role
    })

    if (response?.data?.success) {
      alert(response?.data?.message);
      window.location.href = "/login";
    } else {
      alert(response?.data?.message);
    }
  }
  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user") || '{}');

    if (storageUser?.email) {
      alert("You are already logged in!");
      window.location.href = "/";
    }
  }, [])

  return (<>
  <div className=''>
    <Navbar />
    <div className='signup-container'>
      <div>
        <img src={signupImg} className='signup-img' />
      </div>

      <form className='form-conatainer'>

        <h1 className='text-center title font-bold'>Books Gallary</h1>
        <div className='form-sub-container'>
          <div className=''>
            <div className=''>
              <label htmlFor='name' className="label-margin">Name : </label>
              <input
                type='text'
                id='name'
                className='form-control'
                placeholder='enter your Name'
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>

            <div>
              <label htmlFor='mobile' className="label-margin">Mobile : </label>
              <input
                type='text'
                id='mobile'
                className='form-control'
                placeholder='enter your Mobile'
                value={mobile}
                onChange={(e) => {
                  setMobile(e.target.value);
                }}
              />
            </div>

            
          </div>

          <div>
          <div className='ms-5'>
              <label htmlFor='email' className="label-margin">Email : </label>
              <input
                type='email'
                id='email'
                className='form-control'
                placeholder='enter your Email'
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            
            <div className='ms-5'>
              <label htmlFor='password' className="label-margin">Password : </label>
              <input
                type='text'
                id='password'
                className='form-control'
                placeholder='enter your Password'
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>

            <div>
            <label className="label-margin">Author</label>
            <input 
            type='checkbox'
            className='margin-checkbox'
            value={role}
            onClick={(e)=>{
              setRole(e.target.value)
            }}
            />

          </div>
          </div>
        
        </div>
        
        <button type="button" className='btn signup-btn'
              onClick={signup}>Sign up</button>
          
            <p className='text-center'>
            You have already account ?
              <Link to="/login" className='link-text'>Login</Link></p>
      </form>

    </div>
    </div>
  </>
  )
}

export default SignUp
