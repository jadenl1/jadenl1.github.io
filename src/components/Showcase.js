import React from 'react';

import '../css/Home.css'

const Showcase = (props) => {
    return(
        <div id="showcase">
            <h3 id = 'category' className = 'text-2'>
                {props.category}
            </h3>

            <h1 id = 'title'>
                {props.title}
            </h1>

            <h3 id = 'subtext' className = 'text-2'>
                {props.subtext}
            </h3>
            <h3 id = 'subtext2' className = 'text-2'>
                {props.subtext2}
            </h3>

        </div>
    );
};

export default Showcase;
