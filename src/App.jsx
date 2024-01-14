import "./App.css";
import Footer from "./components/Footer";
import AboutMe from "./components/aboutme";
import FooterBottom from "./components/footer-bottom";
import GetInTouch from "./components/get-in-touch";
import HeroSection from "./components/herosection";
import SkillSection from "./components/skillsection";
import Navbar from "./components/navbar";
import Banner from "./components/bannner";
import ProjectSection from "./components/projectsection";
function App() {
  return (
    <>
      {/* <!-- dark mode toggler  -->k */}
      <input type="checkbox" id="darkMode" />
      <div className="wrapper">
        <label htmlFor="darkMode" className="dark-mode-toggle">
          <div className="fa-solid fa-circle-half-stroke"></div>
        </label>

        {/* <!-- navbar  --> */}
        <Navbar />

        {/* <!-- hero section  --> */}

        <HeroSection />

        {/* <!-- banner  --> */}

        <Banner />

        {/* <!-- skills section --> */}

        <SkillSection />

        {/* <!-- Projects section --> */}

        <ProjectSection />

        {/* <!-- About Me section --> */}

        <AboutMe />

        {/* <!-- Get in touch section --> */}
        <GetInTouch />

        {/* <!-- Footer section --> */}
        <Footer />
        <FooterBottom />

        <a href="#home">
          <div className="go-up flex">
            <div className="fa-solid fa-angle-up"></div>
          </div>
        </a>
      </div>
    </>
  );
}

export default App;
