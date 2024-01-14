const SkillSection = () => {
  return (
    <section id="skills" className="skills">
      <h2 className="title">
        <span>Skills</span>
      </h2>

      <div className="container flex skills-container">
        <div>
          <div className="fa-brands fa-html5"></div>
          <span>HTML</span>
        </div>
        <div>
          <div className="fa-brands fa-css3-alt"></div>
          <span>CSS</span>
        </div>
        <div>
          <div className="fa-brands fa-square-js"></div>
          <span>JAVASCRIPT</span>
        </div>
        <div>
          <div className="fa-brands fa-square-github"></div>
          <span>GITHUB</span>
        </div>
        <div>
          <div className="fa-brands fa-figma"></div>
          <span>FIGMA</span>
        </div>
      </div>
    </section>
  );
};
export default SkillSection;
