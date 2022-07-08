import React from 'react';
import * as MIcons from "react-icons/md";
import Trending from '../Trending/Trending';

import './homeBanner.css'


// https://i.ibb.co/BPZFRSh/banner.jpg

const HomeBanner = () => {
    return (
        <div className='homeBanner'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-text">
                            <div className="fetured-video">
                                <p><MIcons.MdOutlineSlowMotionVideo className='fIcon' /> Featured Video </p>
                            </div>
                            <h1 className='topTitle'>Assassin's 
                                <br />
                             Creed Valhalla 
                             </h1>
                             <p>15 Aug 2021·Film  &amp; Animation·00:04:01</p>
                        </div>
                    </div>
                    <div className="col-lg-6"></div>
                </div>  
            </div>
           
        </div>
    );
};

export default HomeBanner;