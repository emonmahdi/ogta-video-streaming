import React from 'react';
import { useEffect, useState } from "react";  
import { MdPlayArrow } from "react-icons/md";
import * as MIcons from "react-icons/md";
import * as RiFaIcons from "react-icons/ri";

import Sidebar from '../Sidebar/Sidebar';
import './topvideos.css'

const TopVideosRoute = () => {
    const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
    return (
        <div className='topVideosRoute'>
            <Sidebar />
            <div className="topVideosRouteContent">
                <h6><MdPlayArrow className="topVideosIcon" /> Top Videos</h6>
                <hr />

                <div className="topvideos-menu">
                    <ul>
                        <li>
                            <MIcons.MdVideocam />
                            <br />
                             Videos
                        </li>
                        <li> 
                            <MIcons.MdLocalMovies /> 
                            <br />
                            Movies
                        </li>
                        <li> 
                            <MIcons.MdOutlineLocalMovies /> 
                            <br />
                             Recent Movies
                        </li>
                        <li> 
                            <MIcons.MdPlayCircleFilled /> 
                            <br /> 
                            Recent Videos
                        </li>
                    </ul>
                </div>

                <div className="container">
                    <div className="row">
                        { 
                            datas && datas.map(data => {
                                const {id, title, img, author, views, hour} = data; 
                                return(
                                    <div key={id} className="col-lg-3">
                                        <div className="singleItem">
                                            <img src={img} className="img-fluid card-img-top" alt="" />
                                            <div className="overlay-video">
                                                <RiFaIcons.RiPlayFill className='videoIcon' />
                                            </div>
                                            <div className="single-content p-3">
                                                <h4>{title}</h4>
                                                <span>{author}</span>
                                                <p> {views} views  {hour}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    <hr />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default TopVideosRoute;