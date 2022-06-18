import { Button, Container } from "react-bootstrap";
import "./skills.css";
import logo_1 from "../../img/logo_1.png";
import logo_2 from "../../img/logo_2.png";
import logo_3 from "../../img/logo_3.png";
import logo_4 from "../../img/logo_4.png";
import logo_5 from "../../img/logo_5.png";
import logo_6 from "../../img/logo_6.png";
import logo_7 from "../../img/logo_7.png";
import logo_8 from "../../img/logo_8.png";
import logo_9 from "../../img/logo_9.png";
import logo_10 from "../../img/logo_10.png";
import logo_11 from "../../img/logo_11.png";

const skills = [
  logo_1,
  logo_2,
  logo_3,
  logo_4,
  logo_5,
  logo_6,
  logo_7,
  logo_8,
  logo_9,
  logo_10,
  logo_11,
];

const Skills = () => {
  return (
    <Container className="skillSection">
      <div className="row text-light align-items-center">
        <div className="col-lg-6  text-center text-md-start">
          <h5 className="text-primary outline">MY SKILLS</h5>
          <h3 className="mt-4">What My Programing skills included?</h3>
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
        <div className="col-lg-6">
          <div className="row justify-content-center">
            {skills.map((skill, index) => {
              return (
                <div className="col-2 skillLogos" key={index}>
                  <img src={skill} alt="" className="logos" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Skills;
