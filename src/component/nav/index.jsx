import React, { useState } from 'react'
import { FaBars, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './style.scss'
const data = [
    { label: "HOME", to: '/' },
    { label: "ABOUT", to: '/about' },
    { label: "PORTFOLIO", to: '/portfolio' },
    { label: "RESUME", to: '/resume' },
    { label: "SKILLS", to: '/skills' },
    { label: "CONTACT", to: '/contact' }
];


const Nav = () => {
    const [toggleicon , settoggle] = useState(false)

    const HandleToggle =()=>{
        settoggle(!toggleicon)
    }

    
    return (
        <div >
            <nav className='navbar'>
                <div className='navbar_container'>
                    <Link to={'/'} className="navbar_container_logo">
                        <FaReact size={30} />
                    </Link>
                </div>
            
            <ul className={`navbar_container_menu ${toggleicon ? "active" : " " }`}>
                {
                    data.map((item,key)=> (
                        <li key={key} className='navbar_container_menu_item'> 
                        <Link className='navbar_container_menu_item_link' to={item.to}></Link>
                        {item.label}
                         </li>
                       
                    ))
                }

            </ul>
            <div className='navbar_baricons' onClick={HandleToggle}>
                {
                    toggleicon ? <HiX/> : <FaBars/>
                }
            </div>
            </nav>
        </div>
    )

}

export default Nav;

