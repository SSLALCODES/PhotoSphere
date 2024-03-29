import React from 'react'

import { Link } from 'react-router-dom'
import image1 from '../assets/icons/home.svg'
import image2 from '../assets/icons/save.svg'
import image3 from '../assets/icons/profile.jpeg'
import image4 from '../assets/icons/explore.svg'
import image5 from '../assets/icons/plus.svg'




export default function Header() {

  


  return (
    <header style={{"height":'50px'}}>
      <div className='header_container'>
        <div className="branding">
            <Link to="/home">
            <h1 className='brand-logo-header'>PhotoSphere</h1>
            </Link>
        </div>
        <div className='searchbar'>
            <input className='search' placeholder='Search' type="text"  />

        
       
        </div>
        <div className="iconbar">
            <Link to="/home"><img className='icon_1' src={image1} alt=""/></Link>
            <Link to="/explore"><img className='icon_1' src={image4} alt=""/></Link>
            <Link to="/createPosts"><img className='icon_1' src={image5} alt=""/></Link>
           
            

            <button className='logoutbtn' type='submit'>Logout</button>
        </div>
      </div>

    </header>
  )
}