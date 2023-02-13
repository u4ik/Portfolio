
import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Divider, Container, Transition } from 'semantic-ui-react'
import Cloud from '../../assets/cloud.png';
import Background from '../../assets/landscapegrey.png';
import skills from './Skills_List'
import { Badge } from '../../components'
import aboutText from './About_Text'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import './Header.css'

const Header = () => {
    const [showBackground, setShowBackground] = useState(false);

    const [showCloud, setShowCloud] = useState(false);
    const { scrollY, scrollYProgress } = useScroll();


    useEffect(() => {
        AOS.init({ duration: 2000 })
        setTimeout(() => {
            setShowBackground(true)
        }, 300)
        setTimeout(() => {
            setShowCloud(true)
        }, 500)

    }, [])
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Page scroll: ", latest)
    })

    return (
        <div data-aos="fade" data-aos-easing='ease-in-out' >

            <div className="wrapper"

            >
                <header style={{ display: 'flex', flexDirection: 'column' }} >
                    {/* Background */}
                    <CSSTransition
                        in={showBackground}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit>
                        <img style={{ opacity: scrollYProgress }} src={Background} alt="" className='background' />
                    </CSSTransition >
                    {/* Cloud */}
                    <CSSTransition
                        in={showCloud}
                        timeout={300}
                        classNames="fade"
                        unmountOnExit>
                        <img src={Cloud} alt="" className='foreground' />
                    </CSSTransition>
                    {/* NAME + TITLE */}
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                            duration: 0.25,
                            delay: 0.5
                        }}
                    >
                        <div className="name-title_wrapper">

                            <h1 className="name" style={{ marginInline: '.3em' }} data-aos="fade" data-aos-easing='ease-in-out' data-aos-delay="50" data-aos-once="false">Amit Mangat</h1>


                            <p className="title" style={{ margin: '0' }} data-aos="fade" data-aos-easing='ease-in-out'
                                data-aos-delay="500" data-aos-once="false">Web Developer</p>

                        </div>
                    </motion.div>
                </header >
                <div className="about_skills-overlay">
                    <div className="about_skills-container"   >
                        <div className="about-wrapper">
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{
                                    duration: 0.25,
                                    delay: 0.5
                                }}
                            >
                                <h1 className="about-headings" >About</h1>
                                <p className="about-text">
                                    {aboutText}
                                </p>
                            </motion.div>
                        </div>
                        <Divider >_______________________________________</Divider>
                        <div className="skills-wrapper"
                        //  data-aos="fade" 
                        // data-aos-easing='ease-in-out'
                        //  data-aos-offset="-490"
                        >
                            <motion.div
                                whileInView={{ opacity: 1 }}
                                initial={{ opacity: 0 }}
                                transition={{
                                    duration: 0.25,
                                    delay: 0.5
                                }}
                            >
                                <h1 className="about-headings" >Skills</h1>

                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: '', gap: '.5em' }}>

                                    <div className='col'>
                                        {
                                            skills.map((i, idx) => {
                                                return <Badge key={idx} color={i.color} label={i.label} link={i.link} />
                                            })
                                        }
                                    </div>
                                    {/* <div className='col'>
                                        <Badge color="green" label="Node" />
                                        <Badge color="white" label="JavaScript" />
                                        <Badge color="blue" label="TypeScript" />
                                        <Badge color="olive" label="C#" />
                                        <Badge color="yellow" label="Python" />
                                    </div> */}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header