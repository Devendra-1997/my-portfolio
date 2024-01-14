import projectImage from "../assets/dev.png";
const ProjectSection = () => {
  return (
    <section id="projects" className="projects container">
      <h2 className="title">
        <span>My Recent Work</span>
      </h2>

      <div className="grid project-container">
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="portfolio" />
          </div>

          <div className="bottom container">
            <h3>Personal Portfolio</h3>
            <p>Techstack: HTML, CSS, JS</p>
            <div>
              <a href="">
                <div className="fa-brands fa-github"></div>
              </a>
              <a href="">
                <div className="fa-brands fa-chrome"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="portfolio" />
          </div>

          <div className="bottom container">
            <h3>Personal Portfolio</h3>
            <p>Techstack: HTML, CSS, JS</p>
            <div>
              <a href="">
                <div className="fa-brands fa-github"></div>
              </a>
              <a href="">
                <div className="fa-brands fa-chrome"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="portfolio" />
          </div>

          <div className="bottom container">
            <h3>Personal Portfolio</h3>
            <p>Techstack: HTML, CSS, JS</p>
            <div>
              <a href="">
                <div className="fa-brands fa-github"></div>
              </a>
              <a href="">
                <div className="fa-brands fa-chrome"></div>
              </a>
            </div>
          </div>
        </div>
        <div className="project-card">
          <div className="top">
            <img src={projectImage} alt="portfolio" />
          </div>

          <div className="bottom container">
            <h3>Personal Portfolio</h3>
            <p>Techstack: HTML, CSS, JS</p>
            <div>
              <a href="">
                <div className="fa-brands fa-github"></div>
              </a>
              <a href="">
                <div className="fa-brands fa-chrome"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ProjectSection;
