import { useEffect, useState } from "react";
import * as FaIcon from "react-icons/fa";

import Img from "../../Assets/img/tranding-1.jpeg";
import "./trending.css";

const Trending = () => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));  
  }, []);
    
  return (
    <div className="trending">
      <h5 className="subTitle">     
        {" "}
        <FaIcon.FaChartLine className="subTitleIcon" /> Trending
      </h5>
      <div className="container">
        <div className="row">
            {
                datas && datas.map(data => {
                    const {id, title, img, author, views, hour} = data; 
                    return(
                        <div key={id} className="col-lg-3">
                            <div className="singleItem">
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

export default Trending;
