import React from 'react'
import { Link } from 'react-router-dom';
import { Popup, Button, Icon } from 'semantic-ui-react'

import './Navbar.css'

const Navbar = () => {
    const style = {
        borderRadius: 1,
        // opacity: 0.8,
        padding: '1em',
    }

    return (
        <nav>
            <Popup
                on='click'
                inverted
                hideOnScroll
                trigger={
                    <div style={{ width: '100%', backgroundColor: 'red', fontWeight: '300', paddingBottom: '', cursor: 'pointer', fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif" }}><b><p>
                        Site is currently under construction 🛠️ (Click for more info!)
                    </p>
                    </b>
                    </div>}
                style={style}
                content={'Currently importing my projects and redeploying 🛠️... \n Certain parts of the my site may not be available. \n Projects are currently being prioritized.'}
                size='mini'
                position='bottom center'
                wide />
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
                        trigger={<Link to="/resume"><i className={`icon download green small`} style={{ scale: '', marginRight: '' }}></i>Resume </Link>}
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