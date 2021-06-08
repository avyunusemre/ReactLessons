import React from "react";
import { Container, Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid
        className="bg-dark p-3 justify-content-center"
      >
        <p className="text-light text-center">©Copyright 2021</p>
      </Navbar>
    </div>
  );
}

export default Footer;
