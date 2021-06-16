import React, { useState, useEffect } from "react";
import { Card, Navbar, Button } from "react-bootstrap";

const Kart = () => {
  const img = "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png";
  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>REACT</Card.Title>
          <Card.Text>React'ı öğrenmek biraz zormuş.</Card.Text>
          <Button variant="danger">Detaylar</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

const Footer = () => {
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
};

function ConditionalRender() {
  const [goster, setGoster] = useState(false);

  function gosterGizle() {
    setGoster(!goster);
  }

  return (
    <div className="text-center">
      <button onClick={gosterGizle} className="btn btn-warning m-4 p-3">
        Göster / Gizle
      </button>
      {/* //* shortcut yöntemi */}
      {goster && <Kart />}
      {/* {!goster && <Footer />} */}

      {/* 1. degisken false ise 2.'yi calıstırır */}
      {goster || <Footer />}

      {/* Ternary Yöntemi */}
      {goster ? (
        <>
          <h1>Kart modülü görünüyor</h1>
          <Kart />
        </>
      ) : (
        <div>
          <h1>Footer Modülü görünüyor</h1>
          <Footer />
        </div>
      )}
    </div>
  );
}

export default ConditionalRender;
