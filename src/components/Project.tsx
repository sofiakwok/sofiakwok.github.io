import React from "react";

import bananabot from '../assets/images/projects/bananabot.jpg'
import elementary from '../assets/images/projects/elementary.png'
import honeybee from '../assets/images/projects/honeybee.jpg'
import sumobot from '../assets/images/projects/sumobot_2.jpg'
import puzzlebot from '../assets/images/projects/puzzlebot.jpg'
import kidnapped from '../assets/images/projects/kidnapped.jpg'
import biped from '../assets/images/projects/bolt_rw.jpg'

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://rexlab.ri.cmu.edu/" target="_blank" rel="noreferrer"><img src={biped} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rexlab.ri.cmu.edu/" target="_blank" rel="noreferrer"><h2>Biped</h2></a>
                <p>Built and programmed a controller for </p>
            </div>
            <div className="project">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><h2>Honeybee Robotics</h2></a>
                <p>Supported redesign, validation, and testing of RESOURCE, an in-situ sampling system for lunar regolith. This drill is able to do in-situ sampling by integrating all of the instruments into the drill bit. Resulted in an increase to TRL 4 from TRL 1 with testing at NASA Ames.</p>
            </div>
            <div className="project">
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><img src={bananabot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.filmate.club/" target="_blank" rel="noreferrer"><h2>Bananabot</h2></a>
                <p>Made a 6DOF arm play Bananagrams with a custom end effector.</p>
            </div>
            <div className="project">
                <a href="https://me72.caltech.edu/me72/2022" target="_blank" rel="noreferrer"><img src={sumobot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://me72.caltech.edu/me72/2022" target="_blank" rel="noreferrer"><h2>Sumobot</h2></a>
                <p>Designed, built, and programmed a "sumo robot" for the capstone design course. Our final design had over 220 pounds of downforce from neodynium magnets and was completely machined by myself and one other team member. Team won final competition undefeated.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ME-134" target="_blank" rel="noreferrer"><img src={puzzlebot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ME-134" target="_blank" rel="noreferrer"><h2>Puzzlebot</h2></a>
                <p>Built and programmed a 5DOF robot arm to solve a jigsaw puzzle. Featured a custom vacuum pump and suction cup end-effector that allowed for easy pickup of puzzle pieces.</p>
            </div>
            <div className="project">
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><img src={kidnapped} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.datumlearn.com/" target="_blank" rel="noreferrer"><h2>Kidnapped Robot Problem</h2></a>
                <p>Caltech ME/CS/EE 169 Kidnapped robot</p>
            </div>
            <div className="project">
                <a href="https://bioinstrumentation.mit.edu/" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bioinstrumentation.mit.edu/" target="_blank" rel="noreferrer"><h2>MIT Bioinstrumentation Lab</h2></a>
                <p>Designed thermal haptic system using Peltier devices. Wrote a PD controller for temperature control.</p>
            </div>
            <div className="project">
                <a href="https://www.elementaryml.com/" target="_blank" rel="noreferrer"><img src={elementary} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.elementaryml.com/" target="_blank" rel="noreferrer"><h2>Elementary Robotics</h2></a>
                <p>Designed, prototyped, and tested a motor dynamometer in order to get accurate estimations on how a standard brushless motor would perform using Elementary’s custom firmware.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;