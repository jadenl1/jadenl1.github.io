import { React, useState } from 'react';
import { Link } from 'react-router-dom';

import "../css/NavBar.css"
import "animate.css"

import { MdMenu, MdClear, MdAlternateEmail } from "react-icons/md";
import { FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const NavBar = () => {
    
    const [menu, setMenu] = useState(false);

    const toggleMenu = () => setMenu(!menu);
    
    return (
        <header>
            <Link to = '/'>
                <img src = {require('../assets/JNRLogo.png')} id = 'logo'/>
            </Link>
            
            {!menu && (
                <MdMenu id = 'hamburger' onClick={toggleMenu}/>
            )}

            {menu && (
                <div id = 'menu'>
                    <MdClear id = 'menu-x' onClick={toggleMenu}/>

                    <div id="menu-links" className='noselect'>
                        <Link to = '/'><h2>ABOUT</h2></Link>
                        <Link to = '/'><h2>CONTACT</h2></Link>
                        <Link to = '/'><h2>RESUME</h2></Link>
                    </div>

                    <div id="social-links" className='noselect'>
                        <a href=""><FaTwitter id='social-icon'/></a>
                        <a href=""><FaInstagram id='social-icon'/></a>
                        <a href=""><FaLinkedinIn id='social-icon'/></a>
                        <a href=""><FaGithub id='social-icon'/></a>
                        <a href=""><MdAlternateEmail id='social-icon'/></a>
                    </div>

                </div>
            )}
            
        </header>
    );
};

export default NavBar;
