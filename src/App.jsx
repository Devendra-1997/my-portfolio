import "./App.css";

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
        <header>
          <div className="flex header container">
            <div className="flex logo">
              <div>Devendra</div>
              <div className="line">Full Stack Developer</div>
            </div>
            <label htmlFor="hamburgerMenu">
              <div className="fa-solid fa-bars"></div>
            </label>
            <input type="checkbox" name="" id="hamburgerMenu" />

            <div className="menu">
              <ul className="flex navigation">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#projects">Projects</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </header>

        {/* <!-- hero section  --> */}

        <section id="home" className="hero-section container">
          <div className="grid hero">
            <div className="left flex">
              <div>
                Hi i'm <span>Devendra Dhakal</span>
              </div>
              <div className="tag">Full Stack Developer</div>
              <p>I love coding and teach others what i know</p>

              <div>
                <button>
                  Download CV <div className="fa-solid fa-download"></div>
                </button>
              </div>
            </div>
            <div className="right flex">
              <img
                src="./assets/IMG_8739-removebg-preview (1).png"
                alt="my photo"
              />
            </div>
          </div>
        </section>

        {/* <!-- banner  --> */}

        <div className="flex banner container">
          <div className="info-content flex">
            <div className="icon-container flex">
              <div className="fa-solid fa-award"></div>
            </div>
            <div>
              <span>IT</span>
              <p>Graduated</p>
            </div>
          </div>
          <div className="info-divider"></div>

          <div className="info-content flex">
            <div className="icon-container flex">
              <div className="fa-solid fa-award"></div>
            </div>
            <div>
              <span>5+ Projects</span>
              <p>Completed</p>
            </div>
          </div>
          <div className="info-divider"></div>

          <div className="info-content flex">
            <div className="icon-container flex">
              <div className="fa-solid fa-award"></div>
            </div>
            <div>
              <span>1 year</span>
              <p>Experience</p>
            </div>
          </div>
        </div>

        {/* <!-- skills section --> */}

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

        {/* <!-- Projects section --> */}

        <section id="projects" className="projects container">
          <h2 className="title">
            <span>My Recent Work</span>
          </h2>

          <div className="grid project-container">
            <div className="project-card">
              <div className="top">
                <img
                  src="./assets/IMG_8739-removebg-preview (1).png"
                  alt="portfolio"
                />
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
                <img
                  src="./assets/IMG_8739-removebg-preview (1).png"
                  alt="portfolio"
                />
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
                <img
                  src="./assets/IMG_8739-removebg-preview (1).png"
                  alt="portfolio"
                />
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
                <img
                  src="./assets/IMG_8739-removebg-preview (1).png"
                  alt="portfolio"
                />
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

        {/* <!-- About Me section --> */}

        <section id="about" className="about">
          <h2 className="title">
            <span>About Me</span>
          </h2>
          <div className="container flex about-content">
            <div className="myImg flex">
              <img
                src="./assets/IMG_8739-removebg-preview (1).png"
                alt="prems speaking"
              />
            </div>
            <div className="my-bio container">
              <h2>Devendra Dhakal</h2>
              <p>
                🎓 Bachelor's Degree from Federation University | 💻 Master of
                Technology in Software Engineering | 🎧 Avid Tech Enthusiast |
                ⚽ Sports & Movie Lover
              </p>
              📌 About: Hi! I'm Devendra, a Federation University graduate with
              a Bachelor's degree of Information Technology, now pursuing a
              Master's in Software Engineering.
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

        {/* <!-- Get in touch section --> */}
        <section id="contact" className="container contact">
          <h2 className="title">
            <span>Contact</span>
          </h2>

          <div className="social flex">
            <a href="http://linkedin profile link" target="_blank">
              <div className="fa-brands fa-linkedin"></div>
            </a>
            <a href="">
              <div className="fa-brands fa-square-github"></div>
            </a>

            <a href="">
              <div className="fa-brands fa-youtube"></div>
            </a>

            <a href="tel:0481602867">
              <div className="fa-solid fa-mobile"></div>
            </a>
          </div>
          <h3>OR</h3>

          <a href="mailto:yourEmail@email.com">
            <div className="email-section flex">
              <div className="email flex">
                <span>yourEmail@email.com</span>
                <div className="send flex">
                  <div className="fa-solid fa-paper-plane"></div>
                </div>
              </div>
            </div>
          </a>
        </section>

        {/* <!-- Footer section --> */}
        <footer className="footer">
          <div className="container">
            <div className="top flex">
              <div className="links">
                <h2>Links</h2>
                <ul>
                  <li>
                    <a href="">Home</a>
                  </li>
                  <li>
                    <a href="">Skills</a>
                  </li>
                  <li>
                    <a href="">Projects</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                </ul>
              </div>

              <div className="socials">
                <h2>Social Links</h2>
                <ul>
                  <li>
                    <a href="">linkedin</a>
                  </li>
                  <li>
                    <a href="">Facebook</a>
                  </li>
                  <li>
                    <a href="">GITHUB</a>
                  </li>
                  <li>
                    <a href="">Youtube</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer-bottom">
          &copy; All right reserved. Made by me with 🚀
        </div>

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
