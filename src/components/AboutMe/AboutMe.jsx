import { Button, Container } from "react-bootstrap";
import "./aboutMe.css";
import thinker from "../../img/thinker.png";

const AboutMe = () => {
  return (
    <Container className="aboutme">
      <div className="row text-light align-items-center">
        <div className="col text-center d-none d-lg-block">
          <img src={thinker} alt="" className="thinker" />
        </div>
        <div className="col text-center text-md-start">
          <h5 className="text-primary outline">WHO I AM</h5>
          <h3 className="mt-4">About Me</h3>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            excepturi numquam eveniet possimus optio, quos odit laborum
            voluptatum ducimus aperiam porro eos voluptate commodi recusandae
            accusamus doloremque blanditiis qui cupiditate aliquid officia magni
            ad est aliquam. Deserunt sit dolorum id nemo ullam, alias
            consequuntur perferendis hic vitae adipisci quod rerum?
          </p>
          <Button className="d-none d-lg-block fw-bold">Hire Me!</Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
