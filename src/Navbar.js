import React, { useState } from 'react'
import './App.css'
import hatlogo from './hatlogo.png'
import searchbutton from './searchbutton.png'
import { Link } from 'react-router-dom'


const Navbar = () => {

  const searchhandler=()=>{
       var clss =  document.getElementById('toggleButton');
       clss.classList.toggle('hidden');
  }


  return ( 
    <div className='navbarcomponent'>
            <div style={{gap:'1%'}}>
                <img className='hatlogo' src={hatlogo} alt='hat-image'></img>
                <span>JALA  Academy</span>
            </div>
            <div>
                <a href='/home' style={{textDecoration:"none"}}>Home</a>
                <a href='/aboutwork' style={{textDecoration:"none"}}>How it works</a>
                <div>
                  <input type='text' id='toggleButton' placeholder='Enter....' />
                  <img src={searchbutton} style={{width:'30px',height:'30px'}} onClick={searchhandler} alt='search-logo'></img>
                </div>
                <Link to='/'><button style={{width:"85px",height:"30px",border:"2px solid",borderRadius:"5px"}}>Login</button></Link>
            </div>   
         </div>
  )
}

export default Navbar