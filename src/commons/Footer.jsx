import { Button, Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer py-1">
      <Container className="text-light text-center">
        <h2 className="text-primary mt-2">Carlos Fernandez</h2>
        <div className="row bg-primary pt-5 pb-5 mt-3 mb-5 text-dark align-items-center footerBorder">
          <div className="col">
            <h1 className="fw-bold">Start a project</h1>
          </div>
          <div className="col">
            <h5>
              Interested in working together? We should queue up a chat. I’ll
              buy the coffee.
            </h5>
          </div>
          <div className="col">
            <Button variant="outline-dark btn-lg">Let's do this!</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
