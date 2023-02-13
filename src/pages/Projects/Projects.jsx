import React from 'react'
import AOS from 'aos';
import { Item } from '../../components'
import 'aos/dist/aos.css';
import './Project.css';
import projects from './Project_List'

const Projects = () => {
    return (
        // <div className="animation" style={{ color: 'white', display: 'flex', height: '100vh' }} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div style={{ height: '100vh', overflowY: 'auto' }}>

            <div className="project-container">
                {
                    projects.map((p, idx) => {
                        return <Item key={idx} github={p.gitHub} npm={p.npm} image={p.image} header={p.header} description={p.description} additional={p.additional} viewLink={p.viewLink} />
                    })
                }
            </div>
            {/* // </div> */}
        </div>
    )
}

export default Projects