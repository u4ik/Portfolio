import React from 'react'
import AOS from 'aos';
import { Item, FadeInOnScroll } from '../../components'
import 'aos/dist/aos.css';
import './Project.css';
import projects from './Project_List'


const Projects = () => {
    return (

        <div style={{ height: '90vh', overflowX: 'hidden', paddingBottom: '0', minWidth: '100vw', width: '100%', scrollPaddingRight: '0' }}>

            <div className="project-container">
                {
                    projects.map((p, idx) => {
                        return (
                            <FadeInOnScroll key={idx}>
                                <Item github={p.gitHub} npm={p.npm} image={p.image} header={p.header} description={p.description} additional={p.additional} viewLink={p.viewLink} />
                            </FadeInOnScroll>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Projects