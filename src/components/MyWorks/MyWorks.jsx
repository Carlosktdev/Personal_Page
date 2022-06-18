import { Container } from "react-bootstrap";
import work_1 from "../../img/work_1.jpg";
import work_2 from "../../img/work_2.jpg";
import "./mywork.css";

const MyWorks = () => {
  return (
    <Container className="text-light text-center">
      <h5 className="text-primary outline">MY WORKS</h5>
      <h3 className="mt-2">Featured Works</h3>
      <div className="row justify-content-center section">
        <div className="col text-start work">
          <a
            href="https://crypto-cop.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center">
              <img src={work_1} alt="" className="img" />
              <h3 className="mt-2">CryptoCop</h3>
            </div>
          </a>
        </div>
        <div className="col work">
          <a
            href="https://movie-bud.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="text-center">
              <img src={work_2} alt="" className="img" />
              <h3 className="mt-2">MovieBud</h3>
            </div>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default MyWorks;
