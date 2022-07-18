import React from 'react';
import * as MIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";
import Trending from '../Trending/Trending';


import subsImg from '../../Assets/img/avatar.png'
import './homeBanner.css'


// https://i.ibb.co/BPZFRSh/banner.jpg

const HomeBanner = () => {
    return (
        <div className='homeBanner'>
            <div className="container">
                <div className="row ">
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
                             <button className='play-btn'> <FaIcons.FaPlay /> Play</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="subscribe-card">
                            <div className="subs-img-and-btn d-flex justify-content-around align-items-center">
                                <div className="subs-img">
                                    <img src={subsImg} className='' alt="" />
                                </div>
                                <div className='subs-btn'>
                                    <h5>Deen Doughouz </h5>
                                    <button className='btn btn-info'>Subscribe</button>
                                    <br />
                                    <span>12,304</span>
                                </div>
                            </div>
                            <hr />
                            <h4 className='text-light'>Battlefield 2042 Official Reveal Trailer (ft. 2WEI)</h4>
                            <span>Play Battlefield 2042 starting October 22, 2021</span>
                            <p>Battlefield 2042 is a first-person shoo</p>
                            <div className="subs-share-icons d-flex align-items-center justify-content-around">
                                <button className='share-btn'> <BsIcons.BsShare /> Share</button>
                                <div className="subs-icons">
                                    <span><FaIcons.FaFacebookF /></span>
                                    <span><FaIcons.FaTwitter /></span>
                                    <span><FaIcons.FaLinkedinIn /></span>
                                    <span><FaIcons.FaPinterestP /></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                <div className="homeBanner-overlay">
                </div> 
            </div>  
        </div>
    );
};

export default HomeBanner;