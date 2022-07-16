import { useState } from "react";
import { Container, Nav, Navbar, Button, Modal, NavDropdown } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";
import * as MdIcons from "react-icons/md"; 
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import logoImg from '../../Assets/img/logo3.png';

import avatarImg from '../../Assets/img/avatar.png'

import { AuthUser } from "../../Pages/Auth/AuthUser/AuthUser";
import "./topnav.css";

const TopNav = () => {

  const {user, token, logout} = AuthUser();
  // console.log(user)

  
 

  return (
    <div className="topNav"> 
      <Navbar collapseOnSelect expand="lg"  className='ogtaNavbar' fixed="top" variant="dark">
        <Container fluid>
          <div className="left-nav-item">
            <span className="menu-toggle-icon">
              {" "}
              <TbGridDots />
            </span>
            <Link to='/' style={{textDecoration:'none'}}> 
              <Navbar.Brand href="#home" className="logo"> 
                <img src={logoImg} width='30px' height='30px' className='img-fluid' alt="" />
                <span className="ms-1">OGTA</span>
              </Navbar.Brand>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="">
              <div className="input-group searchBar">
                <div className="form-outline">
                  <input
                    type="search"
                    id="form1"
                    placeholder="Search for videos"
                    className=""
                  />
                  <button type="button" className="searchBtn">
                    <FaIcons.FaSistrix />
                  </button>
                </div>
              </div>
            </Nav>
            <Nav className="">
              <Nav.Link  href="#">
                <div className="createVideo icons">
                  <span>
                    {" "}
                    <MdIcons.MdVideocam /> Create{" "} 
                  </span>
                  <span> 
                     <BiIcons.BiMessageDots />
                  </span>
                  <span>
                   
                     <MdIcons.MdNotifications />
                  </span>
                </div>
              </Nav.Link> 
                  {
                    user?.email ? (

                    <NavDropdown title={ user?.user_name} className='userProfileDropdown' id="collasible-nav-dropdown">
                      <NavDropdown.Item href="#action/3.4">
                        Profile
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/pricing">
                        Pricing
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/admin-panel">
                        Admin Panel
                      </NavDropdown.Item>
                      <NavDropdown.Item as={Link} to="/settings">
                        Settings
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item onClick={logout} href="#">Logout</NavDropdown.Item>
                   </NavDropdown> 
                      ) : (
                        <Link to='/login' style={{textDecoration:'none',color:'#fff',marginTop:'8px', marginLeft:"120px", fontWeight:"bold"}}>Login</Link>
                      )
              }
   
              
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
