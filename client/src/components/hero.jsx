function Hero() {
  return (
    <section id="hero" className="container py-5">
      <div className="row align-items-center justify-content-center">
        {/* Left Side: Text */}
        <div className="col-md-6" data-aos="fade-right">
          <h1 className="display-4 fw-bold mb-3">
            Hi, I'm Zunoon Ali
          </h1>
          <h2 className="h4 mb-3 text-muted">
            Front-End Developer
          </h2>
          <p className="mb-4">
            I create modern, responsive websites with HTML, CSS, JavaScript, Bootstrap, and React.
          </p>
          <a
            href="./src/assets/zunoon-resume.pdf"
            className="btn btn-primary me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            View CV
          </a>
          <a
            href="./src/assets/zunoon-resume.pdf"
            download
            className="btn btn-outline-secondary"
          >
            Download CV
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center " data-aos="fade-left">
          <img
            src="./src/assets/zunoon-ali.jpg"
            alt="Zunoon Ali"
            className="img-fluid rounded-circle"
            style={{ maxWidth: '300px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;