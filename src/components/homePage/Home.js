import React from 'react'
import {useNavigate}  from "react-router-dom";
import logo from './images/logo.svg';
import './Home.css'

export default function Home() {
  const Navigate = useNavigate();
  const handleHomeUpdateButton=()=>{
     Navigate('/settings')
  }
  
  return (
    <div>
      <div className="titleLogo">
              <img className='logo'alt ="logo" src={logo}></img>
          </div>
      <div className='homeContainer'>
          <div className="updateHomeButtonDiv">
            <button className='updateHomeButton' onClick={handleHomeUpdateButton}>Update App ID
            </button>
          </div>    
      </div>
    </div>
  )
}
