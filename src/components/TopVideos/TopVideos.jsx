import React from 'react';
import { useEffect, useState } from "react";  
import { MdPlayArrow } from "react-icons/md";
import './topvideos.css'


const TopVideos = () => {
    const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
    return (
        <div className="topVideos">
      <h6 className="subTitle fw-bold">
        {" "}
        <MdPlayArrow className="topVideosIcon" /> Top Videos
      </h6>
      <div className="container">
        <div className="row">
            { 
                datas && datas.map(data => {
                    const {id, title, img, author, views, hour} = data; 
                    return(
                        <div key={id} className="col-lg-3">
                            <div className="singleItems">
                                <img src={img} className="img-fluid card-img-top" alt="" />
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
    );
};

export default TopVideos;