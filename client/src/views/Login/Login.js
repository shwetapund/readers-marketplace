import React, { useEffect, useState } from 'react'
import axios from "axios";
import './Login.css';
import Navbar from './../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import loginImg from "./../../assets/login.jpg";

function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async () => {
    try {
      const response = await axios.post('/api/v1/login', {
        email: email,
        password: password
      })

      alert(response?.data?.message);
      if (response?.data?.success) {
        localStorage.setItem('user', JSON.stringify(response?.data?.data))
        window.location.href = "/"
      }
    } catch (err) {
      console.log(err.message)
    }
  }



  return (
    <>
      <div className=''>
        <Navbar />
        <div className='main-login-container'>
          <div>
            <img src={loginImg} className='signup-img' />
          </div>
          <div>
            <form className='login-container'>
              <h1 className='text-center title font-bold mb-5'>MPSC katta</h1>

              <div className=''>
                  <label htmlFor='email' className='margin-1st-label label-margin'>Email : </label>
      
                <input
                  type='email'
                  id='email'
                  className='form-control-login margin'
                  placeholder='enter your Email'
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
  
               
              </div>

              <div className=''>
                <label htmlFor='password' className='label-margin'>Password : </label>
                <input
                  type='password'
                  id='password'
                  className='form-control-login'
                  placeholder='enter your Password'
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </div>

              <button
                type='button'
                className='button login-btn'
                onClick={login}
              >Login</button>

              <p className='text-center'>
              create a new account ? 
                <Link to="/signup" className='link-text'>
                   SignUp
                 </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
