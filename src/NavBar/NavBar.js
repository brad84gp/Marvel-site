import React, { useState } from 'react';
import './NavBar.css'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row,
  Col
} from 'reactstrap';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        
        <Col md={1} lg={2}></Col>
            <Col xs={12} md={10} lg={8} style={{margin : ' 2em auto', textAlign : 'center'}}>

                <Row style={{borderBottom : '5px solid red'}}> 
                    <Col md={1} lg={2}></Col>
                    <Col xs={12} md={10} lg={8}>
                    <NavbarBrand href="/" style={{fontSize : '35px'}}>Marveling at Marvel</NavbarBrand>
                    </Col>
                    <Col md={1} lg={2}></Col>
                </Row>

                <Row>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                    <Nav navbar style={{margin : 'auto', fontSize : '20px'}} >
                        <NavItem>
                            <NavLink href="/characters" id="navitem-item">Characters</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/" id="navitem-item">Home</NavLink>
                        </NavItem>
                    </Nav>
                    </Collapse>
                </Row>
            </Col>
        <Col md={1} lg={2}></Col>
      </Navbar>
    </div>
  );
}

export default NavBar