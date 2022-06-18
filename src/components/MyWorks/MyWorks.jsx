import { Container } from "react-bootstrap";
import work_1 from "../../img/work_1.jpg";
import "./mywork.css";

const MyWorks = () => {
  return (
    <Container className="text-light text-center">
      <h5 className="text-primary outline">MY WORKS</h5>
      <h3 className="mt-2">Featured Works</h3>

      <div className="row justify-content-center section">
        <div className="col text-start">
          <div className="text-center">
            <img src={work_1} alt="" className="img" />
            <h3>CryptoCop</h3>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MyWorks;
