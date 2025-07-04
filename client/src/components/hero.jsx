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
            Passionate Front-End Developer skilled in HTML, CSS, Bootstrap, Tailwind CSS, and JavaScript.
            I specialize in crafting responsive and user-friendly websites that combine clean code with modern design.
            Eager to contribute innovative ideas and grow as a web developer.
          </p>
          <a
            href="/assets/zunoon-resume.pdf"
            className="btn btn-outline-secondary btn-light text-secondary me-2 hero-vd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-file-alt me-1"></i> View & <i className="fas fa-download me-1"></i> Download Resume
          </a>

          <a
            href="https://www.linkedin.com/in/zunoon-ali-377929253/"
            className="btn btn-primary hero-lkn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin me-1"></i> Connect on LinkedIn
          </a>
        </div>

        {/* Right Side: Image */}
        <div className="col-md-6 text-center " data-aos="fade-left">
          <img
            src="../assets/zunoon-ali.jpg"
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