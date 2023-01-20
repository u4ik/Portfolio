import React from 'react'
import { Link } from 'react-router-dom';
import { Popup, Button } from 'semantic-ui-react'

import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/"><i className={`icon home blue small`} style={{ marginRight: '' }}></i>Home</Link>
                </li>
                <li>
                    <Link to="/contact"><i className={`icon envelope orange small`} style={{ scale: '', marginRight: '' }}></i>Contact</Link>
                </li>
                <li>
                    <Link to="/projects"><i className={`icon folder open brown small`} style={{ scale: '', marginRight: '' }}></i>Projects</Link>
                </li>
                <li>
                    <Popup
                        trigger={<Link to="/resume"><i className={`icon download green small`} style={{ scale: '', marginRight: '' }}></i>  Resume </Link>}
                        content='Download Resume'
                        inverted
                        size='mini'
                    />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar