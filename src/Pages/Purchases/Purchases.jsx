import React from 'react';
import * as MIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";

import Sidebar from '../../components/Sidebar/Sidebar';

import './purchases.css'

const Purchases = () => {
    return (
        <div className='purchases'>
            <Sidebar />
            <div className="purchasesContent">
                <h2 className='titleHistory'> <FaIcons.FaCommentDollar className='icon' /> Purchases 
                </h2>
                <hr />
                <div className="purchases-menu">
                    <ul>
                        <li><MIcons.MdVideocam /> Videos</li>
                        <li> <MIcons.MdLocalMovies /> Movies</li>
                        <li> <MIcons.MdOutlineLocalMovies /> Recent Movies</li>
                        <li> <MIcons.MdPlayCircleFilled /> Recent Videos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Purchases;