import React from 'react'
import Navbar from './Navbar'
import './App.css';
import react from './reactjs.jpeg';
import { useState } from 'react';
import hatlogo from './hatlogo.png';
import facebook from './facebook.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png'
import copyright from './copyright.png'


const Progress = () => {
  const progresstextstyle={
    textAlign:'center',
    paddingTop:'1%'
  }

  const [progress,setProgress] = useState([]);

  const fillerStyle = {
    width: '150px',
    backgroundColor: progress < 100 ? '#3b5998' : '#4caf50',
    transition: 'width 0.2s ease-in-out'
};

const labelStyle = {
    padding: '5px',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
};

  return (
    <div className='progressmaincomponent'>
      <div>
           <Navbar/>
      </div>

      <h1 style={progresstextstyle}>Compare My Progress</h1>
        <div className='courses'>
          {
            progress.map((post)=>
              <div className='course'>
                <img className={post.urlname} src={react} alt={post.imagename}></img><br></br>
                <p>{`${post.coursename}`}</p>
                <div style={fillerStyle}>
                   <span style={labelStyle}>{`${post.Progress}%`}</span>
                </div>
              </div>
              
          )}

        </div>
        <div className='progressfooter'>
          <div id='footersection'>
              <div style={{gap:'2%'}}>
                  <img className='hatlogo' src={hatlogo} alt='hat-image'></img>
                  <span>JALA Academy</span>
              </div>
              <div style={{display:'block'}}>
                    <p>Let's Get Social</p>
                    <a href='https://www.facebook.com/groups/417261270176416/?ref=share' target='_blank'><img className='socialmedia' src={facebook} alt='facebooklogo'/></a>
                    <a href='https://www.instagram.com/jalaacademy/?igshid=MzRlODBiNWFlZA%3D%3D' target='_blank'><img className='socialmedia' src={instagram} alt='instagram'/></a>
                    <a href='https://www.linkedin.com/company/jala-academy/' target='_blank'><img className='socialmedia' src={linkedin} alt='linkedin'/></a>
              </div>
              <div>
                <div style={{gap:'2%',paddingLeft:'9%'}}>
                    <img className='hatlogo' src={copyright} alt='copyright-image' style={{width:'10px',height:'10px'}}></img>
                    <span>copyright</span>
                </div>
              </div>
          </div>
          
          <div>
            <strong>My Account</strong>
            <p>Sign In</p>
            <p>Dashboard</p>
            <p>Monitor Progress</p>
            <p>Compare Success</p>
            <p>My Topics</p>
          </div>

          <div>
            <strong>About Jala</strong>
            <p>Company Information</p>
            <p>Resources</p>
            <p>Our Success</p>
            <p>Meet the Experts</p>
          </div>

          <div>
            <strong>Support</strong>
            <p>Contact Us</p>
            <strong>Newsletter</strong>
            <p>Join our mailing list to stay up to datewith world</p>
          </div>
        </div>
    </div>
  )
}

export default Progress