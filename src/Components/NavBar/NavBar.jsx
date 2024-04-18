import React from 'react'
import './NavBar.css'
import navlogo from '../../assets/nav-logo.svg'
import narProfile from '../../assets/nav-profile.svg'
// import { Link } from "gats

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className="nav-logo" />
        <img src={narProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default NavBar