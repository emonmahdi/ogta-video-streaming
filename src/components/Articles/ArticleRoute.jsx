import { useEffect, useState } from "react";
import { MdOutlineArticle } from "react-icons/md";
import Sidebar from "../Sidebar/Sidebar";

import "./articles.css";

const ArticleRoute = () => {
  const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./articles.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
  return (
    <div className="articleRoute">
      <Sidebar />
      <h6 className="subTitle fw-bold">
        {" "}
        <MdOutlineArticle className="articlesIcon" /> Articles Route
      </h6>
      <div className="container">
        <div className="row">
          {datas &&
            datas.map((data) => {
              const { id, title, img, author, desc, authorImg } = data;

              return (
                <div key={id} className="col-lg-3">
                  <div className="singleItem">
                    <img src={img} className="img-fluid card-img-top" alt="" />
                    <div className="single-content">
                      <h4>{title}</h4>
                      <p>{desc}</p>
                      <div className="postBy d-flex align-items-center">
                        <div className="d-flex align-items-center">
                          <img
                            src={authorImg}
                            className="authImg me-2"
                            alt=""
                          />
                          <span>28 June 2022</span>
                        </div>
                        <div>
                          <button className="articleBtn">Read More</button>
                        </div>
                      </div>
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

export default ArticleRoute;
