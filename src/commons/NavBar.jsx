import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { useRef } from "react";

const NavBar = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const portfolio = useRef(null);
  const contact = useRef(null);

  const links = [
    {
      linkName: "About",
      linkDir: about,
    },
    {
      linkName: "Skills",
      linkDir: skills,
    },
    {
      linkName: "Portfolio",
      linkDir: portfolio,
    },
    {
      linkName: "Contact",
      linkDir: contact,
    },
  ];

  const scrollToSection = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="text-primary">CF</h1>
          </Navbar.Brand>
          <Button className="d-none d-lg-block fw-bold">Hire Me!</Button>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
