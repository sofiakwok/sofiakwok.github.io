import React from "react";

import honeybee from '../assets/images/projects/honeybee.jpg'

import '../assets/styles/PersonalProjects.scss';

function PersonalProjects() {
    return(
    <div className="fun-container" id="personal_projects">
        <h1>Personal Projects</h1>
        <div className="fun-grid">
            <div className="fun">
                <a href="https://rexlab.ri.cmu.edu/" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Programmed a train tracker for the Seattle transit system. Designed a PCB </p>
            </div>
            <div className="fun">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Coffee Table</p>
            </div>
            <div className="fun">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>FRC Robotics mentoring</p>
            </div>
            <div className="fun">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Tea Shelf</p>
            </div>
            <div className="fun">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>Stained Glass</p>
            </div>
            <div className="fun">
                <a href="https://ascelibrary.org/doi/10.1061/9780784484470.039" target="_blank" rel="noreferrer"><img src={honeybee} className="zoom" alt="thumbnail" width="100%"/></a>
                <p>OPI</p>
            </div>
        </div>
    </div>
    );
}

export default PersonalProjects;