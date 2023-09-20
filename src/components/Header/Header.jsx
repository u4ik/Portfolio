import React, { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import {
  Divider,
  Container,
  Transition,
  List,
  Icon,
  Button,
} from "semantic-ui-react";
import Cloud from "../../assets/cloud.png";
import Background from "../../assets/landscapegrey.png";
import skills from "./Skills_List";
import { Badge, FadeInOnScroll } from "../../components";
import aboutText from "./About_Text";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

import "./Header.css";

const Header = () => {
  const myRef = useRef(null);

  const [showBackground, setShowBackground] = useState(false);
  const [showCloud, setShowCloud] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useEffect(() => {
    AOS.init({ duration: 2000 });
    const showBack = setTimeout(() => {
      setShowBackground(true);
    }, 300);
    const showCl = setTimeout(() => {
      setShowCloud(true);
    }, 500);
    return () => {
      clearTimeout(showBack);
      clearTimeout(showCl);
    };
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // console.log("Page scroll: ", latest);
  });

  const scrollToBottom = () => {
    myRef.current?.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  return (
    <div data-aos="fade" data-aos-easing="ease-in-out">
      <div className="wrapper">
        <header style={{ display: "flex", flexDirection: "column" }}>
          {/* Background */}
          <CSSTransition
            in={showBackground}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <img
              style={{ opacity: scrollYProgress }}
              src={Background}
              alt="background image"
              className="background"
            />
          </CSSTransition>

          {/* Cloud */}
          <CSSTransition
            in={showCloud}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <img src={Cloud} alt="" className="foreground" />
          </CSSTransition>

          {/* NAME + TITLE */}
          <FadeInOnScroll>
            <div className="name-title_wrapper">
              <div className="mask">
                <h1
                  className="name"
                  style={{ marginInline: ".3em" }}
                  data-aos="fade"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="50"
                  data-aos-once="false"
                >
                  Amit Mangat
                </h1>

                <p
                  className="title"
                  style={{ margin: "0" }}
                  data-aos="fade"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="500"
                  data-aos-once="false"
                >
                  Web Developer
                </p>
                <div className="name-title_scroll-button">
                  <Icon
                    className="name-title_scroll-icon "
                    size="large"
                    name="arrow alternate circle down outline"
                    onClick={scrollToBottom}
                  />
                </div>
              </div>
            </div>
          </FadeInOnScroll>
        </header>

        <div ref={myRef} className="about_skills-overlay">
          <div className="about_skills-container">
            <div className="about-wrapper">
              <FadeInOnScroll>
                {/* <h1 className="about-headings" >About</h1> */}
                <p>{/* {aboutText.introText} */}</p>
                <h3 className="about-headings">{aboutText.about.header}</h3>
                <p>{aboutText.about.text}</p>
                <h3 className="about-headings">{aboutText.approach.header}</h3>
                <p>{aboutText.approach.text}</p>
                <h3 className="about-headings">{aboutText.skills.header}</h3>
                <p>{aboutText.skills.text}</p>
                <h3 className="about-headings">{aboutText.projects.header}</h3>
                <p>{aboutText.projects.text}.</p>
                {/* <p className="about-text">
                                    {aboutText}
                                </p> */}
              </FadeInOnScroll>
              {/* <Divider >_______________________________________</Divider> */}
            </div>
            <div className="skills-wrapper">
              <FadeInOnScroll>
                <h1 className="about-headings">Skills</h1>
                <div className="">
                  <Divider>_______________________________________</Divider>
                </div>
                <div className="col">
                  <List verticalAlign="middle">
                    {skills.map((i, idx) => {
                      return (
                        <List.Item key={idx}>
                          <List.Content>
                            <Badge
                              size={"large"}
                              icon={i.icon}
                              color={i.color}
                              label={i.label}
                              link={i.link}
                            />
                          </List.Content>
                        </List.Item>
                      );
                    })}
                  </List>
                </div>
                {/* </div> */}
                <div className="hide" style={{ marginTop: "2em" }}>
                  <Divider>_______________________________________</Divider>
                </div>
              </FadeInOnScroll>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
