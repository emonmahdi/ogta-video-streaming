import React from 'react';
import * as MIcons from "react-icons/md";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import {Link} from 'react-router-dom';

import './adminSidebar.css'
import { useState } from 'react';
import sidebarItems from '../../data/sidebarItems.json'

const AdminSidebar = () => {
    const [open, setOpen] = useState(false);
   

    return (
        <div className='adminSidebar'>
            <ul>
               <div  className={open ? 'sidebar-item open' : 'sidebar-item'} style={{textDecoration: 'none', color: '#fff'}}> 
            { sidebarItems.map((sidebarItem,index) =>  {
                const {id, title, icon,path, childrens} = sidebarItem;
                console.log(index)
                if(childrens){
                    return( 
                    <>
                    <li key={index} className='sidebar-title' onClick={() => setOpen(!open)}>
                        <span>
                            {icon && <i className={icon}></i> }
                            {title}    
                        </span> 
                        <MIcons.MdOutlineKeyboardArrowDown  className='dropdownIcon' />
                    </li> 
                        <div className="sidebar-content">
                        { childrens.map((child, index) => {
                            const {title, icon, path} = child;
                            return(
                                <li key={index}> {title}</li>
                            )
                        } ) }
                        </div> 
                        </>           
                    )
            }else{
                return (
                    <Link to={path} className='withoutDropdownItem'>
                                    <li>
                            <span>
                                {icon && <i className={icon}></i> }
                                {title}    
                            </span> 
                            </li>
                        </Link>
                    )
                } 
                
            } ) }
                

                {/* sidebar item */}
                
                {/* sidebar item */}
                {/* <div className={open ? 'sidebar-item open' : 'sidebar-item'} style={{textDecoration: 'none', color: '#fff'}}> 
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
                </div>  */}
               
                 <hr />
               </div> 
            </ul>
        </div>
    );
};

export default AdminSidebar;