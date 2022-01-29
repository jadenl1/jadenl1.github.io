import React, { useState } from 'react';

import '../css/Home.css'

import { Link } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

import { MdFingerprint, MdCode, MdAdsClick, MdVisibility, MdOutlineCamera, MdOutlineShoppingBag } from 'react-icons/md'
import Showcase from '../components/Showcase';

const Home = () => {

    /*  TAB INDEXES
        0 - Home
        1 - Projects
        2 - UI/UX Gallery
        3 - Graphic Design
        4 - Photography
        5 - Marketplace
    */
    const [tab, setTab] = useState(0);
    const [tabClass, setTabClass] = useState(['s','u','u','u','u','u']);

    function changePage(direction){
        if (direction==='left') {
            if(tab > 0){
                updateTab(tab-1);
            }
        } else {
            if(tab < 5){
                updateTab(tab+1);
            }
        };
    }
    
    const updateTab = (tabNum) => {

        setTab(tabNum);

        var newTabClass = ['u','u','u','u','u','u'];
        newTabClass[tabNum] = 's';

        setTabClass(newTabClass);
    }


    return (
        <html>
            <NavBar/>
            <video id = 'home-bg' src = {require('../assets/leojaden-video-bg-2.mp4')} muted loop autoPlay/>
            
            <div id="showcase-center">
                
                {/* slides */}
                {(tab === 0) && (
                    <div id = 'project-showcase'>
                        <Showcase
                            category = 'i. Introduction'
                            title = 'JADEN LEONARD'
                            subtext = 'Full Stack Developer + UI/UX Designer'
                            subtext2 = 'Learn About Me Here'
                        />

                        <div id="project-btns">
                                <a className = 'jl-btn-1' onClick={()=>{changePage('right')}}>Start Here &#8594;</a>
                        </div>
                    </div>
                )}

                {(tab === 1) && (
                    <div id = 'project-showcase'>
                        <Showcase
                            category = 'ii. Personal Works'
                            title = 'PROJECTS'
                            subtext = 'Further understand my wide range of'
                            subtext2 = 'development skills'
                        />

                        <div id="project-btns">
                            <Link to="/projects" className = 'jl-btn-1'>View Projects</Link>
                        </div>

                    </div>
                )}

                {(tab === 2) && (
                    <div id = 'project-showcase'>
                        <Showcase
                            category = 'iii. Personal Works'
                            title = 'UI.UX GALLERY'
                            subtext = 'My Creative Process'
                            subtext2 = '+ Affection'
                        />

                        <div id="project-btns">
                            <Link to="/" className = 'jl-btn-1'>View Gallery</Link>
                        </div>
                    </div>
                )}

                {(tab === 3) && (
                    <div id = 'project-showcase'>
                        <Showcase
                            category = 'iv. Personal Works'
                            title = 'GRAPHIC DESIGN'
                            subtext = 'My Digital Art + Designs'
                            subtext2 = 'thx.Adobe Creative Suite'
                        />

                        <div id="project-btns">
                            <Link to="/" className = 'jl-btn-1'>View Designs</Link>
                        </div>
                    </div>
                )}

                {(tab === 4) && (
                    <div id = 'project-showcase'>
                        <Showcase
                            category = 'v. Personal Works'
                            title = 'PHOTOS'
                            subtext = 'My Personal Photography'
                            subtext2 = "You'll Love It"
                        />

                        <div id="project-btns">
                            <Link to="/photos" className = 'jl-btn-1'>Enter Dark Room</Link>
                        </div>
                    </div>
                )}

                {(tab === 5) && (
                    <div id = 'project-showcase'>
                        <Showcase
                            category = 'vi. For You'
                            title = 'MARKET PLACE'
                            subtext = 'What I Can Do For You'
                            subtext2 = "Affordable Prices + Great Results"
                        />

                        <div id="project-btns">
                            <Link to="/" className = 'jl-btn-1'>View Pricing</Link>
                        </div>
                    </div>
                )}

                <div id='home-bottom' class = 'noselect'>
                    <p onClick={()=>{changePage('left')}}>&#8592;</p>
                        <div id="tabs">
                            <MdFingerprint className = {tabClass[0]} id = 'tab' onClick={()=>{updateTab(0);}}/>
                            <MdCode className = {tabClass[1]} id = 'tab' onClick={()=>{updateTab(1);}}/>
                            <MdAdsClick className = {tabClass[2]} id = 'tab' onClick={()=>{updateTab(2);}}/>
                            <MdVisibility className = {tabClass[3]} id = 'tab' onClick={()=>{updateTab(3);}}/>
                            <MdOutlineCamera className = {tabClass[4]} id = 'tab' onClick={()=>{updateTab(4);}}/>
                            <MdOutlineShoppingBag className = {tabClass[5]} id = 'tab' onClick={()=>{updateTab(5);}}/>
                        </div>
                    <p onClick={()=>{changePage('right')}}>&#8594;</p>
                </div>

            </div>

            <Footer/>
        </html>
    );
};

export default Home;
