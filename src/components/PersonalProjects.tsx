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
                <p>Programmed a train tracker for the Seattle transit system. Designed a PCB </p>
            </div>
            <div className="fun">
                <a href="https://www.xbotrobotics.org/" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>FRC mentoring</p>
            </div>
            <div className="fun">
                <a href="https://venerable.caltech.edu/" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>OPI</p>
            </div>
        </div>
    </div>
    );
}

export default PersonalProjects;