const GetInTouch = () => {
  return (
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
  );
};
export default GetInTouch;
