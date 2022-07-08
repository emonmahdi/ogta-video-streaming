import React, { useEffect, useState } from 'react';
import * as MIcons from "react-icons/md";
import Sidebar from '../../components/Sidebar/Sidebar';
import './history.css'


const HistoryRoute = () => {
    const [datas, setDatas] = useState("");

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => setDatas(data));
  }, []);
    return (
        <div className='historyRoute'>
            <Sidebar />
            <div className="historyContent">
                <h2 className='titleHistory'> <MIcons.MdOutlineHistory className='icon' /> History </h2>
                <hr />
                <div className="container">
                    <div className="row">
                        { 
                            datas && datas.map(data => {
                                const {id, title, img, author, views, hour} = data; 
                                return(
                                    <div key={id} className="col-lg-4">
                                        <div className="singleItem"> 
                                            <img src={img} className="img-fluid card-img-top" alt="" /> 
                                            <div className="single-content-overlay">
                                                <div className="playIcon">
                                                    <MIcons.MdPlayCircleOutline className='iconPlay' />
                                                </div>
                                                <div className="content-overlay">
                                                    <h4>{title}</h4> 
                                                    
                                                    <div className="icon-overlay text-end">
                                                        <MIcons.MdDelete className='iconDelete' />
                                                    </div>
                                                </div>
                                                
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        } 
                    </div>
      </div>
            </div>
        </div>
    );
};

export default HistoryRoute;