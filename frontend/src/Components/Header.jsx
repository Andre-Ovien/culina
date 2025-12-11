import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import logo from '../assets/IMG-20251204-WA0007-removebg-preview.png'
import { CgProfile } from "@react-icons/all-files/cg/CgProfile";
import { IoCartOutline } from "@react-icons/all-files/io5/IoCartOutline";

const Header = () => {
    const navigate = useNavigate()
    const handleClick =()=>{
        navigate('/cart')
    }
    const hand =()=>{
        navigate('/login')
    }
  return (
    <div className='Header'>
        <div className='head'>
            <img src= {logo} alt='logo' loading='lazy'/>
        </div>
        <div className='list'>
            <ul>
                <li>
                    <Link to='/' >Home</Link>
                    t9
                </li>
                <li>
                    <Link to='/category' >Menu</Link>
                    
                </li>
                <li>
                    <Link to='/' >About Us</Link>
                    
                </li>
                <li>
                    <Link to='/' >Contact</Link>
                </li>
            </ul>
        </div>
        <div className='ic'>
            <CgProfile className='icon'  onClick={hand}/>
            <IoCartOutline className='icon' onClick={handleClick} />
        </div>
        <hr/>

      
    </div>
  )
}

export default Header;
