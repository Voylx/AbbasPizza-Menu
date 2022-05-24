import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const logo =
  "https://media.discordapp.net/attachments/942083276322000959/974323672619823124/ABBASPIZZA2.png?width=666&height=663";

export const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" expand="md">
      <Container fluid>
        <Navbar.Brand as={Link} to="/home">
          <Image src={logo} width="35" className="mx-2" />
          Abbas Pizza
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-narbar-nav"></Navbar.Toggle>
        <Navbar.Collapse id="responsive-narbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
