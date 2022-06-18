import { Container, Nav } from "react-bootstrap";
import Footer from "./commons/Footer";
import NavBar from "./commons/NavBar";
import AboutMe from "./components/AboutMe/AboutMe";
import Banner from "./components/Banner/Banner";
import MyWorks from "./components/MyWorks/MyWorks";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <AboutMe />
      <Skills />
      <MyWorks />
      <Footer />
    </div>
  );
}

export default App;
