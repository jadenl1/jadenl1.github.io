import React from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

import '../css/Photos.css'

const Photos = () => {

    return (
        <html>
            <NavBar/>
            <video id = 'photos-bg' src = {require('../assets/leojaden-video-background.mp4')} muted loop autoPlay/>
            
            <div id="photos-title-center">
                <h3 className='text-2'>Jaden Leonard's</h3>
                <h1 id = 'photos-title'>DARKROOM</h1>
                <a className='jl-btn-1' onClick={()=>{
                    document.getElementById('image-1').scrollIntoView({behavior: "smooth", block: "center"});
                }}>Begin Tour</a>
            </div>

            <hr id = 'photos-divider' color='#454545'/>

            <div id="photos-container">
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography1.JPG')} id = 'image-1'/>
                    <h3 className='text-2'>Los Angeles, CA</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography2.JPG')}/>
                    <h3 className='text-2'>San Francisco, CA</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography3.jpg')}/>
                    <h3 className='text-2'>Karjat, India</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography4.jpg')}/>
                    <h3 className='text-2'>Great Falls, VA</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography5.JPG')}/>
                    <h3 className='text-2'>Velankanni, India</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography6.jpg')}/>
                    <h3 className='text-2'>Rome, Italy</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography7.jpg')}/>
                    <h3 className='text-2'>Rome, Italy</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography8.jpg')}/>
                    <h3 className='text-2'>Annapolis, MD</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography9.jpg')}/>
                    <h3 className='text-2'>Rome, Italy</h3>
                </div>
                <div id = 'photo-frame'>
                    <img src = {require('../assets/Photography10.JPG')}/>
                    <h3 className='text-2'>San Francisco, CA</h3>
                </div>

                <a id = 'scroll-to-top' className='jl-btn-1' onClick={()=>{
                    document.getElementById('photos-title').scrollIntoView({behavior: "smooth", block: "center"});
                }}>Scroll To Top</a>
            </div>

            <Footer/>

        </html>
    );
};

export default Photos;
