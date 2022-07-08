import React from "react";
import { useEffect, useState } from "react";
// import * as MdIcon from "react-icons/md";
import { MdPlayCircleFilled } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";
import "./latestVideo.css";

const LatestVideo = () => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="latestVideo">
      <Sidebar /> 
      <h6 className="subTitle fw-bold">
        {" "}
        <MdPlayCircleFilled className="latestVideoIcon" /> Latest Video
      </h6>
      <div className="container">
        <div className="row">
          {datas &&
            datas.map((data) => {
              const { id, title, img, author, views, hour } = data;
              return (
                <div key={id} className="col-lg-3">
                  <div className="singleItem">
                    <img src={img} className="img-fluid card-img-top" alt="" />
                    <div className="single-content p-3">
                      <h4>{title}</h4>
                      <span>{author}</span>
                      <p>
                        {" "}
                        {views} views {hour}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          <hr />
        </div>
      </div>
    </div>
  );
};

export default LatestVideo;
