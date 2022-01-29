import React from 'react';
import NavBar from '../components/NavBar';
import ProjectShowcase from '../components/ProjectShowcase';

import { MdCode } from 'react-icons/md';

import '../css/Projects.css';
import Footer from '../components/Footer';

const Projects = () => {
    return (
        <html>
            <NavBar/>
            <video id = 'projects-bg' src = {require('../assets/leojaden-video-bg-2.mp4')} muted loop autoPlay/>

            <div id = 'projects-container'>

                <div id='projects-header-title'>
                    <MdCode id = 'code-icon'/>
                    <h1 id = 'header-title'>MY PROJECTS</h1>
                </div>

                <div id = 'project'>
                    <ProjectShowcase
                        title='CRYPTO CURRENCY PUBLIC CONNOTATION AI'
                        sub='Python, TwitterAPI, TweePy, NLP Processing'
                        award='HackUMBC2021, 1st Place Winner | Data Science '
                    />

                    <div id = 'project-btns'>    
                        <a className = 'jl-btn-1' id = 'project-btn'>View GitHub</a>
                        <a className = 'jl-btn-1' id = 'project-btn'>View DevPost</a>
                    </div>
                </div>

                <div id = 'project'>
                    <ProjectShowcase
                        title='TECHTIONARY.COM'
                        sub='ReactJS, Firebase'
                    />

                    <div id = 'project-btns'>    
                        <a className = 'jl-btn-1' id = 'project-btn'>View GitHub</a>
                        <a className = 'jl-btn-1' id = 'project-btn'>Visit Site</a>
                    </div>
                </div>

            </div>

            <Footer/>
        </html>
    );
};

export default Projects;
