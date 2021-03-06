import React from "react";
import { Navbar } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar
        fixed="bottom"
        fluid
        className="bg-secondary p-2 justify-content-center"
      >
        <p className="text-light text-center">┬ęCopyright 2021</p>
      </Navbar>
    </div>
  );
}

export default Footer;
