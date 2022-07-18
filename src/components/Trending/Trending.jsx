import { useEffect, useState } from "react";
import * as FaIcon from "react-icons/fa";
import Slider from "react-slick";

import Img from "../../Assets/img/tranding-1.jpeg";
import "./trending.css";

const Trending = () => {
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
    <div className="trending">
      <h5 className="subTitle">     
        {" "}
        <FaIcon.FaChartLine className="subTitleIcon" /> Trending
      </h5>
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
                                <div className="single-content">
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

export default Trending;
