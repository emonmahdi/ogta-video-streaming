import { Container, Nav, Navbar } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import { MdVideocam } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";

import { Link } from "react-router-dom";
import logoImg from '../../Assets/img/logo3.png';
import "./topnav.css";

const TopNav = () => {
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
              <Nav.Link as={Link} to="/">
                <div className="createVideo icons">
                  <span>
                    {" "}
                    <MdVideocam /> Create{" "} 
                  </span>
                  {/* <span>
                    
                     <BiMessageDots />
                  </span>
                  <span>
                   
                     <MdNotifications />
                  </span> */}
                </div>
              </Nav.Link> 
              <Link to='/register' style={{textDecoration:'none',color:'#fff',marginTop:'8px', marginRight:'9px'}}>Register</Link> 

              <Link to='/login' style={{textDecoration:'none',color:'#fff',marginTop:'8px'}}>Login</Link>

              <Nav.Link as={Link} to="/admin-panel">
                <div className="profile">
                  My Accounts <FaIcons.FaUserCircle /> <BsThreeDotsVertical />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default TopNav;
