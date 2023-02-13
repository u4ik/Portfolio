import React from 'react'
import AOS from 'aos';
import { Item } from '../../components'
import 'aos/dist/aos.css';
import './Project.css';

const Projects = () => {
    const projects = [
        {
            header: 'SysRsrc',
            image: 'https://i.ibb.co/kxbDf0k/Sys-Rsrc-Demo.png',
            description: 'A node CLI application for viewing system resources',
            additional: 'JavaScript Terminal App',
            gitHub: "",
            npm: {
                link: "https://www.npmjs.com/package/sysrsrc",
                img1: "https://img.shields.io/npm/dt/sysrsrc.svg?style=flat",
                img2: "https://img.shields.io/npm/v/sysrsrc.svg?style=flat"
            }
        },
        {
            header: 'useDate',
            image: 'https://i.ibb.co/HzHsR53/usedate.png',
            description: 'A CLI application for viewing system resources',
            additional: 'JavaScript Node Module',
            gitHub: "",
            npm: {
                link: "https://www.npmjs.com/package/usedate",
                img1: "https://img.shields.io/npm/dt/usedate.svg?style=flat",
                img2: "https://img.shields.io/npm/v/usedate.svg?style=flat"
            }
        },
        {
            header: 'ProGrader',
            image: 'https://i.ibb.co/TgRBN6Z/black.png',
            description: 'A grading tool to batch clone git repos, and log express endpoints.',
            additional: 'JavaScript Terminal App',
            gitHub: "",
            npm: {
                link: "https://www.npmjs.com/package/pro_grader",
                img1: "https://img.shields.io/npm/dt/pro_grader.svg?style=flat",
                img2: "https://img.shields.io/npm/v/pro_grader.svg?style=flat'"
            }
        },


    ]

    return (
        // <div className="animation" style={{ color: 'white', display: 'flex', height: '100vh' }} data-aos="fade-up" data-aos-anchor-placement="top-bottom">
        <div style={{ height: '100vh', overflowY: 'auto' }}>

            <div className="project-container">
                {
                    projects.map((p, idx) => {
                        return <Item key={idx} npm={p.npm} image={p.image} header={p.header} description={p.description} additional={p.additional} />
                    })
                }
            </div>
            {/* // </div> */}
        </div>
    )
}

export default Projects