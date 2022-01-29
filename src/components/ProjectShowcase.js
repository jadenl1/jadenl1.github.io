import React from 'react';

import { BiAward } from "react-icons/bi";

import '../css/Projects.css'

const ProjectShowcase = (props) => {
    return (
        <>
            <div id = 'proj-title-container'>

                {props.award && (
                    <div id = 'award'>    
                        <BiAward id = 'award-icon'/>
                        <p id = 'award-text'>{props.award}</p>
                    </div>
                )}

                <h1 id = 'proj-title'>
                    {props.title}
                </h1>
            </div>
            <h3 id = 'proj-sub'>
                {props.sub}
            </h3>
        </>
    );
};

export default ProjectShowcase;
