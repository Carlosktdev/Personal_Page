import { Container } from "react-bootstrap";
import "./banner.css";
import avatar from "../../img/avatar.png";
import CardComponent from "./CardComponent";
import expIcon from "../../img/expIcon.png";
import compIcon from "../../img/compIcon.png";
import clientIcon from "../../img/clientIcon.png";

const Banner = () => {
  return (
    <section className="bannerSection">
      <Container>
        <div className="text-center my-5 py-3">
          <h3 className="text-light">
            Hi, I Am{" "}
            <span className="text-primary underline text-decoration-underline">
              Carlos Fernandez
            </span>
          </h3>
          <h2 className="text-light my-4">Mobile and MERN stack developer</h2>
          <h6 className="text-light">I code beautiful mobile and web apps.</h6>
          <img src={avatar} alt="" className="my-2" />
        </div>
        {/* CARD SECTION */}
        <div className="row text-light text-center py-3">
          <div className="col-lg-4">
            <CardComponent
              cardName="1+"
              cardText="Years of Experience"
              cardIcon={expIcon}
            />
          </div>
          <div className="col-lg-4">
            <CardComponent
              cardName="5+"
              cardText="Completed Projects"
              cardIcon={compIcon}
            />
          </div>
          <div className="col-lg-4">
            <CardComponent
              cardName="5+"
              cardText="Happy Clients"
              cardIcon={clientIcon}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
