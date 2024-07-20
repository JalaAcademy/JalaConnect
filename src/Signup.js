import React from 'react';
import image from './googleimage.png';
import Navbar from './Navbar';
import { useState } from 'react';

const Signup = () => {

 const [signupdata,setSignupdata] = useState({
  name: '',
  phone:'',
  email: '',
  password: '',
 })

 const changeHandler=(e)=>{
  setSignupdata({...signupdata,[e.target.name]:e.target.value});
 }

  return (
    <div>
       <div style={{width:'100%',}}>
        <Navbar/>
      </div>

      <div className='half'>
        <div className='innerlogin'>
              <h2>Create an account</h2>
              <span>Name</span><br></br>
              <input type='text' placeholder='Enter your name' onChange={changeHandler} required/><br></br><br></br>
              <span>Phone Number</span>
              <input type='number' placeholder='+91 xxxxxxxxxx' onChange={changeHandler} required></input><br></br><br></br>
              <span>Email</span><br/>
              <input type="email" placeholder='example@gmail.com' onChange={changeHandler} required></input><br/><br/>
              <span>Password</span> 
              <input type='password' placeholder='Enter your password' onChange={changeHandler}required></input><br/><br/>
              <input className='submitbtn' type='submit' value='Create account'/><br></br><br></br>
              <div id='googlesignup'>
                  <button className='btn'><img src={image} alt='google-image'></img>&nbsp;&nbsp;&nbsp;Continue with google</button>
              </div><br></br>

              <span>Already havea an account ?   <a href='/' style={{textDecoration:"none"}}>Log in</a></span><br></br><br></br>
        </div>
      </div>
    
    </div>
  )
}

export default Signup