import { Alert, Button, Container, Form } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Footer = () => {
  const [isSent, setIsSent] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_q3i8gpk",
        "template_d92onai",
        e.target,
        "NUFviSBZYQaUIhnKO"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    e.target.reset();
    setIsSent(true);
  };

  return (
    <div className="footer py-1">
      <Container className="text-light text-center">
        <h2 className="text-primary mt-2">Carlos Fernandez</h2>
        <div className="bg-primary px-5 dflex flex-column footerBorde">
          <div className="row pt-5 pb-5 mt-3 mb-5 text-dark align-items-center">
            <div className="col-6">
              <h1 className="fw-bold">Start a project</h1>
            </div>
            <div className="col-6">
              <h5 className="text">
                Interested in working together? We should queue up a chat. I’ll
                buy the coffee.
              </h5>
            </div>
            <div className="form-container mx-auto mt-5">
              <Form onSubmit={sendEmail}>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Full name:</Form.Label>
                  <Form.Control
                    name="name"
                    type="name"
                    placeholder="Carlos Fernandez"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address:</Form.Label>
                  <Form.Control
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3 text-start"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Message:</Form.Label>
                  <Form.Control
                    name="message"
                    type="message"
                    as="textarea"
                    rows={4}
                  />
                </Form.Group>
                <Button variant="secondary" type="submit" className="px-4">
                  Submit
                </Button>
                {isSent ? (
                  <Alert variant="light" className="mt-3">
                    <Alert.Heading>Message sent correctly</Alert.Heading>
                    <p>
                      Your message has been sent correctly i will be in touch
                    </p>
                  </Alert>
                ) : null}
              </Form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
