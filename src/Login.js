import React, { useState } from 'react';
import './App.css';
import Navbar from './Navbar';

const Login = () => {
     
  const [login,setLogin] = useState({
    username:'',
    password:''
  });
  
  const changeHandler=(e)=>{
     setLogin({...login,[e.target.name]:e.target.value})
  }

  return (
    <div>
      <div style={{width:'100%',}}>
        <Navbar/>
      </div>
        <div className='half'>
          <div className='innerlogin' style={{height:'350px'}}>
                  <h2>Login to your account</h2>
                  <span>Email</span><br/>
                  <input type="email" placeholder='example@gmail.com' onChange={changeHandler} required></input><br/><br/>
                  <span>Password</span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <a href='#' style={{textDecoration:"none"}}>Forgot ?</a><br/>
                  <input type='password' placeholder='Enter your password' onChange={changeHandler} required></input><br/><br/>
                  <input className='submitbtn' type='submit' value='Login now'/><br></br><br></br>
                  <span>Don't have an account?   <a href='/signup' style={{textDecoration:"none"}}>Sign Up</a></span>    
            </div> 
        </div>
      </div>
  )
}

export default Login