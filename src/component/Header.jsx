import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import {FaBars,FaTimes} from  'react-icons/fa'

const Header = () => {
  const [click,setClick]=useState(false)

  window.addEventListener("scroll", function(){
const header=document.querySelector(".header")
header.classList.toggle("active",this.window.scrollY > 200)
  })
  return (
    <>
     <div className="header">
        <div className="logo">
            <h1>TRA<span>VLER</span></h1>
        </div>

        <div>
            <ul className={click ? 'nav-links' : 'nav'} onClick={()=>setClick(false)}  >
                <li><Link to="/">Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/tour' >TourPackage</Link></li>
            </ul>
            <button className="toggle" onClick={()=>setClick(!click)}>{click ? <FaTimes/>:<FaBars/>}</button>
        </div>
        </div> 
    </>
  )
}

export default Header
