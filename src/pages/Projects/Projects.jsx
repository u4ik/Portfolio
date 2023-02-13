import React from 'react'
import AOS from 'aos';
import { Item } from '../../components'
import 'aos/dist/aos.css';
import './Project.css';

const Projects = () => {
    const projects = [
        {
            header: 'ProGrader',
            image: 'https://i.ibb.co/TgRBN6Z/black.png',
            description: 'A grading tool to batch clone git repos, and log express endpoints.',
            additional: 'JavaScript Terminal App',
            gitHub: "https://github.com/u4ik/pro_grader",
            npm: {
                link: "https://www.npmjs.com/package/pro_grader",
                img1: "https://img.shields.io/npm/dt/pro_grader.svg?style=flat",
                img2: "https://img.shields.io/npm/v/pro_grader.svg?style=flat"
            },
            viewLink: ""
        },
        {
            header: 'SysRsrc',
            image: 'https://i.ibb.co/kxbDf0k/Sys-Rsrc-Demo.png',
            description: 'A node CLI application for viewing system resources',
            additional: 'JavaScript Terminal App',
            gitHub: "https://github.com/u4ik/SysRsrc",
            npm: {
                link: "https://www.npmjs.com/package/sysrsrc",
                img1: "https://img.shields.io/npm/dt/sysrsrc.svg?style=flat",
                img2: "https://img.shields.io/npm/v/sysrsrc.svg?style=flat"
            }
        },
        {
            header: 'useDate',
            image: 'https://i.ibb.co/HzHsR53/usedate.png',
            description: 'A node module for simple date formatting',
            additional: 'JavaScript Node Module',
            gitHub: "https://github.com/u4ik/useDate",
            npm: {
                link: "https://www.npmjs.com/package/usedate",
                img1: "https://img.shields.io/npm/dt/usedate.svg?style=flat",
                img2: "https://img.shields.io/npm/v/usedate.svg?style=flat"
            }
        },

        {
            header: 'AskAI',
            image: 'https://i.ibb.co/TmgDrm3/Ask-AI-demo2.png',
            description: "CLI application to interact with OpenAI's chatgpt",
            additional: 'JavaScript Terminal App',
            gitHub: "https://github.com/u4ik/AskAICLI",
            npm: {
                link: "https://www.npmjs.com/package/open-ai-cli-prompt",
                img1: "https://img.shields.io/npm/dt/open-ai-cli-prompt.svg?style=flat",
                img2: "https://img.shields.io/npm/v/open-ai-cli-prompt.svg?style=flat"
            }
        },
        {
            header: 'Lottery',
            image: 'https://i.ibb.co/7Sty091/lottery.png',
            description: "Megamillions winning number checker, along with the date a number has won in a specific position. ",
            additional: 'React Application',
            gitHub: "https://github.com/u4ik/lottery",
            npm: "",
            viewLink: "https://u4ik.github.io/lottery/"
        },


    ]

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