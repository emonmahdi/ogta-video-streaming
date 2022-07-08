import React from 'react';
import * as MIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import {Link} from 'react-router-dom';

import './adminSidebar.css'

const AdminSidebar = () => {
    return (
        <div className='adminSidebar'>
            <ul>
                <Link to='/' style={{textDecoration: 'none', color: '#fff'}}> 
                <li>
                    <MIcons.MdHome className='icon' />
                    <span>Dashboard</span> 
                </li> 
                </Link>
                <Link to='/history' style={{textDecoration: 'none', color: '#fff'}}> 
                    <li>
                        <MIcons.MdOutlineHistory className='icon' />
                        <span>Settings</span>
                    </li> 
                </Link>
                <Link to='/purchases' style={{textDecoration: 'none', color: '#fff'}}> 
                    <li>
                        <FaIcons.FaCommentDollar className='icon' />
                        <span>Payment and Ads </span>
                    </li> 
                </Link>
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