import { useState } from "react";
import { Container, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { MdVideocam } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { Link } from "react-router-dom";
import logoImg from '../../Assets/img/logo3.png';

import avatarImg from '../../Assets/img/avatar.png'

import { AuthUser } from "../../Pages/Auth/AuthUser/AuthUser";
import "./topnav.css";

const TopNav = () => {

  const {user, token, logout} = AuthUser();
  // console.log(user)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
 

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
                  {/* <span>
                    {" "}
                    <MdVideocam /> Create{" "} 
                  </span> */}
                  {/* <span>
                    
                     <BiMessageDots />
                  </span>
                  <span>
                   
                     <MdNotifications />
                  </span> */}
                </div>
              </Nav.Link>  
 
              <Link to='/pricing' style={{textDecoration:'none',color:'#fff',marginTop:'8px', marginLeft:"20px", fontWeight:"bold"}}>Pricing</Link>
              {
                !user?.email ?
                <Link to='/login' style={{textDecoration:'none',color:'#fff',marginTop:'8px', marginLeft:"250px", fontWeight:"bold"}}>Login</Link>
                : 
                <> 
                {/* <Nav.Link as={Link}  to="/admin-panel">  */}
                  <div className="profile pt-2" onClick={handleShow}>
                    { user?.user_name}<FaIcons.FaUserCircle /> <BsThreeDotsVertical  />
                  </div> 
                {/* </Nav.Link> */}
                
                </>
              }    
                {/*modal  */} 

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}> 
              <Modal.Header closeButton >
                 <div className="d-flex align-items-center ">
                    <img src={avatarImg} height='50px' width='50px' className="rounded-3 me-3" alt="" />
                    <h5>{user?.user_name}</h5>
                 </div>
              </Modal.Header>
              <Modal.Body>
                 <li>Mode</li>
                 <li> <Link to='/admin-panel'>Admin Panel</Link> </li>
                 <li><Link to='/settings'>Settings</Link> </li>
                 <hr />
                 <li><button onClick={logout} className='btn btn-text'>logout</button></li>
              </Modal.Body> 
            </Modal>   
               
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
