import profilePicture from "../assets/dev.png";
import resume from "../assets/resume.pdf";
const HeroSection = () => {
  return (
    <section id="home" className="hero-section container">
      <div className="grid hero">
        <div className="left flex">
          <div>
            Hi i'm <span>Devendra Dhakal</span>
          </div>
          <div className="tag">Full Stack Developer</div>
          <p>I love coding and teach others what i know</p>

          <a
            href={resume}
            download="name-resume"
            target="_blank"
            rel="nonreferrer"
          >
            <button>
              Download CV <div className="fa-solid fa-download"></div>
            </button>
          </a>
        </div>
        <div className="right flex">
          <img src={profilePicture} alt="my photo" />
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
