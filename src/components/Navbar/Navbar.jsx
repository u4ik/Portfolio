import React from 'react'
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"><i className={`icon home `} style={{ scale: '.7', marginRight:'' }}></i>Home</Link>
                </li>
                <li>
                    <Link to="/contact"><i className={`icon envelope `} style={{ scale: '.7', marginRight:'' }}></i>Contact</Link>
                </li>
                <li>
                    <Link to="/projects"><i className={`icon folder open  `} style={{ scale: '.7', marginRight:'' }}></i>Projects</Link>
                </li>
                <li>
                    <Link to="/resume"><i className={`icon download `} style={{ scale: '.7', marginRight:'' }}></i>Resume </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar