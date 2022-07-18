import React from 'react';
import { useEffect, useState } from "react"; 
import Slider from "react-slick"; 
import { MdPlayArrow } from "react-icons/md";
import './topvideos.css'


const TopVideos = () => {
    const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);


   // ====================
   const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


    return (
        <div className="topVideos">
      <h6 className="subTitle fw-bold">
        {" "}
        <MdPlayArrow className="topVideosIcon" /> Top Videos
      </h6>
      <div className="container">
        <div className="row">
        <Slider {...settings} >
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
            </Slider>
          <hr />
        </div>
      </div>
    </div>
    );
};

export default TopVideos;