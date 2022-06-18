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
            I am a self-taught developer who loves making beautiful webs and
            android applications , I know how to use kotlin,html,css,javascript
            with multiple external libraries, databases, api calls, xml, jetpack
            compose, ReactJS, a bit of everything. I also love working in a team
            and I am very good at communicating ideas and strategies.
            <br></br>
            <br></br>I love learning new things and I am a person who is very
            dedicated to work.
          </p>
          <Button className="d-none d-lg-block fw-bold">Hire Me!</Button>
        </div>
      </div>
    </Container>
  );
};

export default AboutMe;
