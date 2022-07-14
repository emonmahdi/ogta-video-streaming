import React from 'react';
import * as MIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import {Link} from 'react-router-dom';

import './adminSidebar.css'
import { useState } from 'react';

const AdminSidebar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className='adminSidebar'>
            <ul>
                <Link to='/' style={{textDecoration: 'none', color: '#fff'}}> 
                <li>
                    <MIcons.MdHome className='icon' />
                    <span>Dashboard</span> 
                </li> 
                </Link>

                {/* sidebar item */}
                <div className={open ? 'sidebar-item open' : 'sidebar-item'} style={{textDecoration: 'none', color: '#fff'}}> 
                    <li className='sidebar-title' onClick={() => setOpen(!open)}>
                        <MIcons.MdOutlineHistory className='icon' />
                        <span>Settings</span>
                        <MIcons.MdOutlineKeyboardArrowDown  className='dropdownIcon' />
                    </li> 
                    <div className="sidebar-content">
                        <span>General Configuration</span>
                        <span>Website Information</span>
                        <span>Social Login System</span>
                        <span>Setup Live Streaming</span>
                    </div>
                </div>
                {/* sidebar item */}
                <div className={open ? 'sidebar-item open' : 'sidebar-item'} style={{textDecoration: 'none', color: '#fff'}}> 
                    <li className='sidebar-title' onClick={() => setOpen(!open)}>
                        <FaIcons.FaCommentDollar className='icon' />
                        <span>Payment and Ads</span>
                        <MIcons.MdOutlineKeyboardArrowDown  className='dropdownIcon' />
                    </li> 
                    <div className="sidebar-content">
                        <span>Payment Configuration</span>
                        <span>Advertisement Settings</span>
                        <span>Manage Bank Receipts</span>
                        <span>Manage Video Ads</span>
                    </div>
                </div> 
                <Link to='/articles' style={{textDecoration: 'none', color: '#fff'}}>
                    <li>
                        <MIcons.MdOutlineArticle className='icon' />
                        <span>Language</span>
                    </li> 
                </Link>
                <hr />
                <Link to='/latestvideo' style={{textDecoration: 'none', color: '#fff'}}> 
                    <li>
                        <MIcons.MdOndemandVideo className='icon' />
                        <span>Users</span>
                    </li> 
                </Link>
                <Link to='/trending' style={{textDecoration: 'none', color: '#fff'}}>  
                <li>
                    <FaIcons.FaChartLine className='icon' />
                    <span>Videos</span>
                </li> 
                </Link>
                <Link to='/topvideos' style={{textDecoration: 'none', color: '#fff'}}> 
                    <li>
                        <BiIcons.BiBarChartAlt className='icon' />
                        <span>Movies</span>
                    </li> 
                </Link>
                <Link to='/movies' style={{textDecoration: 'none', color: '#fff'}}> 
                    <li>
                        <MIcons.MdLocalMovies className='icon' />
                        <span>Articles</span>
                    </li> 
                </Link>
                <li>
                    <MIcons.MdVideoSettings className='icon' />
                    <span>Categories</span>
                </li> 
                <li>
                     <MIcons.MdOutlineStar className='icon' />
                    <span>Tools </span>
                </li> 
                <li>
                     <MIcons.MdOutlineVideoLibrary className='icon' />
                    <span>Pages</span>
                </li> 
                <hr />
                <p>Explore More</p>
                <li>
                    <span>Help</span>
                </li>
                <hr />
            </ul>
        </div>
    );
};

export default AdminSidebar;