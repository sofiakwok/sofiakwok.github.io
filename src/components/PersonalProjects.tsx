import React from "react";

import honeybee from '../assets/images/projects/honeybee.jpg'

import '../assets/styles/PersonalProjects.scss';

function PersonalProjects() {
    return(
    <div className="fun-container" id="personal_projects">
        <h1>Personal Projects</h1>
        <div className="fun-grid">
            <div className="fun">
                <a href="https://github.com/sofiakwok/link_tracker" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Programmed a train tracker for the Seattle transit system. Wrote an API scraper that pulls SoundTransit data for how far away trains are from a given stop.</p>
            </div>
            <div className="fun">
                <a href="https://www.xbotrobotics.org/" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Volunteering as a mentor for FIRST Robotics, a team-based youth robotics competition that focuses on providing hands-on STEM education. 
                    Mentoring high schoolers on Team 488 (Team XBOT) in assembly design, CAD, and GD&T.</p>
            </div>
            <div className="fun">
                <a href="https://venerable.caltech.edu/" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>OPI is a party thrown every year that is completely designed, built, and painted by Caltech undergraduates. 
                    As a construction lead, I worked on ensuring the structural integrity of the dance platforms, as well as leading the party assembly and working with administration. </p>
            </div>
        </div>
    </div>
    );
}

export default PersonalProjects;