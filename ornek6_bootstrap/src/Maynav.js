import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

import logo from "./img/logo.png";

function Maynav() {
  return (
    <div>
      <Navbar className="p-4" bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Dersler</Nav.Link>
            <NavDropdown title="Kurslar" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action/3.1">Web Dev</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Java Dev</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">DevOps</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Maynav;
