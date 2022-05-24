import React from 'react';
import images from '../images/index.js';
import "../App.css"
import {Navbar,NavbarBrand,NavbarToggler,Collapse, Nav, NavItem,NavLink,UncontrolledDropdown,DropdownItem,DropdownMenu,DropdownToggle} from 'reactstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {

  return (
    <div>

    <div className="main-header">
      
    <Navbar
      color="light"
      expand="md"
    >
      <NavbarBrand href="/">
      <img className="logo" src={images.logo} onClick={()=>window.location.href="/"} style={{cursor: 'pointer'}} alt="Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck(){}} />
      <Collapse navbar>
        <Nav
          className="me-auto"
          navbar
        >
          <NavItem>
            <NavLink href="/aboutus">
              Hakkımızda
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">
              Bize Ulaşın
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/cart">
              Cart
            </NavLink>
          </NavItem>
          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                Option 1
              </DropdownItem>
              <DropdownItem>
                Option 2
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                Reset
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
       
      </Collapse>
    </Navbar>
  </div>
    </div>

  )
}

export default Header;