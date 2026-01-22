import React from "react";

import bananabot from '../assets/images/projects/bananabot.jpg'
import elementary from '../assets/images/projects/elementary.png'
import honeybee from '../assets/images/projects/honeybee.jpg'
import sumobot from '../assets/images/projects/sumobot_2.jpg'
import puzzlebot from '../assets/images/projects/puzzlebot.jpg'
import kidnapped from '../assets/images/projects/kidnapped.jpg'
import biped from '../assets/images/projects/bolt_rw.jpg'
import mit from '../assets/images/projects/peltier.jpg'

import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Portfolio</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://rexlab.ri.cmu.edu/" target="_blank" rel="noreferrer"><img src={biped} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://rexlab.ri.cmu.edu/" target="_blank" rel="noreferrer"><h2>Bipedal Robot</h2></a>
                <p>Designed, machined, and built a reaction wheel actuation system for a bipedal robot that controlled the pitch angle of the biped 
                    to allow it to recover from perturbations and perform dynamic motions. 
                    Wrote a controller in Python and C++ using linearized dynamics of the system to obtain a linear discrete-time optimization problem that could be solved as a quadratic program for real-time control.</p>
            </div>
            <div className="project">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><h2>In-situ Lunar Regolith Drill</h2></a>
                <p>Supported redesign, validation, and testing of RESOURCE, an in-situ sampling system for lunar regolith. 
                    Sensors for in-situ sampling included a near-infrared spectrometer, a neutron spectrometer, and a dielectric spectroscopy probe.
                    Designed drill body to bit subsystem, sourced a custom optics system, and built testing setup for in-house evaluation.
                    Resulted in an increase from TRL 1 to TRL 6 with environmental testing at NASA Ames.</p>
            </div>
            <div className="project">
                <a href="https://www.cs.cmu.edu/~hgeyer/Teaching_16-711.html" target="_blank" rel="noreferrer"><img src={bananabot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cs.cmu.edu/~hgeyer/Teaching_16-711.html" target="_blank" rel="noreferrer"><h2>Bananabot</h2></a>
                <p>Made a 6DOF arm play Bananagrams with a custom end effector.
                    This involved making a custom end effector with a flexible suction cup and a vacuum pump that could pick up and put down pieces, redesigning a previously 3D printed arm with aluminum parts, and writing a solver to find the best word given possible tiles. 
                    Wrote an inverse kinematics solver in Python for end effector position and attitude.
                </p>
            </div>
            <div className="project">
                <a href="https://me72.caltech.edu/me72/2022" target="_blank" rel="noreferrer"><img src={sumobot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://me72.caltech.edu/me72/2022" target="_blank" rel="noreferrer"><h2>Sumobot</h2></a>
                <p>Designed, machined, built, and programmed a "sumo robot" for the mechanical engineering capstone design course at Caltech. 
                    Our final design had over 220 pounds of downforce from neodynium magnets and was completely machined by myself and one other team member after extensive design and testing cycles. 
                    Team won final competition at the end of class against four other teams undefeated.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ME-134" target="_blank" rel="noreferrer"><img src={puzzlebot} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ME-134" target="_blank" rel="noreferrer"><h2>Puzzlebot</h2></a>
                <p>Built and programmed a 5DOF robot arm to solve a jigsaw puzzle. 
                    Featured a custom vacuum pump and suction cup end-effector that allowed for easy pickup of puzzle pieces.
                    Wrote inverse kinematics solver for end-effector position and attitude in Python to find which puzzle pieces to pick up and where to place them to align puzzle pieces.</p>
            </div>
            <div className="project">
                <a href="https://www.cms.caltech.edu/academics/courses/mecsee-169" target="_blank" rel="noreferrer"><img src={kidnapped} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cms.caltech.edu/academics/courses/mecsee-169" target="_blank" rel="noreferrer"><h2>Monte Carlo Localization</h2></a>
                <p>The final project for Caltch CS/EE/ME 169 addressed the "kidnapped robot" problem, where a robot is set in a new location in a known map. 
                    We solved this problem by using Monte Carlo localization with 20 potential frames evaluated against the robot's depth camera data using multithreading in Python.</p>
            </div>
            <div className="project">
                <a href="https://bioinstrumentation.mit.edu/" target="_blank" rel="noreferrer"><img src={mit} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://bioinstrumentation.mit.edu/" target="_blank" rel="noreferrer"><h2>Thermal Haptic System</h2></a>
                <p>Designed thermal haptic system using Peltier devices. Wrote and tuned a PD controller in Python regulating voltage with thermocouple feedback for temperature control.</p>
            </div>
            <div className="project">
                <a href="https://www.elementaryml.com/" target="_blank" rel="noreferrer"><img src={elementary} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.elementaryml.com/" target="_blank" rel="noreferrer"><h2>Dynamometer</h2></a>
                <p>Designed, prototyped, and tested a motor dynamometer using C++ and Python in order to get accurate estimations on how a standard brushless motor would perform using Elementary’s custom firmware.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;