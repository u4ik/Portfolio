
import React, { useState, useEffect, useRef } from 'react'
import { CSSTransition } from 'react-transition-group';
import { Image, Reveal, Step, Visibility, Divider, Container, Transition } from 'semantic-ui-react'
import Cloud from '../../assets/cloud.png';
import Background from '../../assets/landscapegrey.png';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Badge } from '../../components'
import AOS from 'aos';
import 'aos/dist/aos.css';


import './Header.css'

const Header = () => {
    const [showBackground, setShowBackground] = useState(false);
    const [showName, setShowName] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showCloud, setShowCloud] = useState(false);

    const [showAboutSkills, setShowAboutSkills] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [calculations, setCalculations] = useState({
        direction: 'none',
        height: 0,
        width: 0,
        topPassed: false,
        bottomPassed: false,
        pixelsPassed: 0,
        percentagePassed: 0,
        topVisible: false,
        bottomVisible: false,
        fits: false,
        passing: false,
        onScreen: false,
        offScreen: false,
    });
    const ref = useRef(null);
    useEffect(() => {
        AOS.init({ duration: 2000 })
        setTimeout(() => {
            setShowBackground(true)
        }, 300)
        setTimeout(() => {
            setShowCloud(true)
        }, 500)
        setTimeout(() => {
            setShowName(true)
        }, 700)
        setTimeout(() => {
            setShowTitle(true)
        }, 1000)
    }, [])
    const handleUpdate = (e, { calculations }) => {
        setCalculations({ calculations })
    }
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
                        <img src={Background} alt="" className='background' />
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
                    <div className="name-title_wrapper">

                        <h1 className="name" style={{ marginInline: '.3em' }} data-aos="fade" data-aos-easing='ease-in-out' data-aos-delay="50" data-aos-once="false">Amit Mangat</h1>


                        <p className="title" style={{ margin: '0' }} data-aos="fade" data-aos-easing='ease-in-out' data-aos-delay="500" data-aos-once="false">Web Developer</p>

                    </div>
                </header >

                <div className="about_skills-container"   >
                    <div className="about-wrapper" >
                        <h1 className="about-headings" >About</h1>
                        <p className="about-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia laudantium, ex facilis culpa nihil doloribus voluptatem architecto et? Unde dolor, aliquid iste facere veniam reiciendis dolorem perferendis vero. Rerum numquam voluptatibus possimus incidunt, placeat
                        </p>
                    </div>
                    <Divider >_______________________________________</Divider>



                    <div className="skills-wrapper" >
                        <h1 className="about-headings" >Skills</h1>

                        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: '', gap: '.5em' }}>
                            <div className='col'>
                                <Badge color="green" label="Node" />
                                <Badge color="white" label="JavaScript" />
                                <Badge color="blue" label="TypeScript" />
                                <Badge color="olive" label="C#" />
                                <Badge color="yellow" label="Python" />
                            </div>
                            <div className='col'>
                                <Badge color="green" label="Node" />
                                <Badge color="white" label="JavaScript" />
                                <Badge color="blue" label="TypeScript" />
                                <Badge color="olive" label="C#" />
                                <Badge color="yellow" label="Python" />
                            </div>
                        </div>
                    </div>


                </div>







            </div >


        </div >
    )
}

export default Header