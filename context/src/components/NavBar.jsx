import React, {useState} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/NavBar.css"


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="danger" dark expand="md" sticky="top">
        <NavbarBrand>Widgets</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink name="home"  href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink name="weather" href="/weather">Weather</NavLink>
            </NavItem>
            <NavItem>
              <NavLink name="clock" href="/clock">Clock</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar