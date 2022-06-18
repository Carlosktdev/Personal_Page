import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";

const links = [
  {
    linkName: "Home",
    linkDir: "#",
  },
  {
    linkName: "About",
    linkDir: "#",
  },
  {
    linkName: "Skills",
    linkDir: "#",
  },
  {
    linkName: "Portfolio",
    linkDir: "#",
  },
  {
    linkName: "Contact",
    linkDir: "#",
  },
];

const NavBar = () => {
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="text-light">CF</h1>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="navbar-dark"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {links.map((link) => {
                return (
                  <Nav.Link
                    key={link.linkName}
                    href={link.linkDir}
                    className="text-light fw-bold mx-3 hoverLink"
                  >
                    {link.linkName}
                  </Nav.Link>
                );
              })}
            </Nav>
            <Button className="d-lg-none">Hire Me!</Button>
          </Navbar.Collapse>
          <Button className="d-none d-lg-block fw-bold">Hire Me!</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
