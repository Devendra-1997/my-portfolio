import aboutImg from "../assets/dev.png";
const AboutMe = () => {
  return (
    <section id="about" className="about">
      <h2 className="title">
        <span>About Me</span>
      </h2>
      <div className="container flex about-content">
        <div className="myImg flex">
          <img src={aboutImg} alt="prems speaking" />
        </div>
        <div className="my-bio container">
          <h2>Devendra Dhakal</h2>
          <p>
            🎓 Bachelor's Degree from Federation University | 💻 Master of
            Technology in Software Engineering | 🎧 Avid Tech Enthusiast | ⚽
            Sports & Movie Lover
          </p>
          📌 About: Hi! I'm Devendra, a Federation University graduate with a
          Bachelor's degree of Information Technology, now pursuing a Master's
          in Software Engineering.
          <p></p>
          <p>Sydney, Australia</p>
          <div>
            <div className="tag">Interest</div>
            <div className="flex">
              <span>Coding</span>
              <span>Football</span>
              <span>Travelling</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
