// About.jsx

function About() {
  return (
    <section id="about" className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Left side: Text */}
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <h2 className="fw-bold mb-3">About Me</h2>
          <p className="mb-3">
            I'm Zunoon Ali, a passionate Front-End Developer focused on building
            clean and responsive user interfaces.
          </p>
          <p className="mb-3">
            I love working with HTML, CSS, JavaScript, Bootstrap, React and
            adding smooth animations for a modern look.
          </p>
          <p>
            When I'm not coding, I'm learning new tools and practicing best
            design practices!
          </p>
        </div>

        {/* Right side: Image or Graphic */}
        <div className="col-md-6 text-center" data-aos="fade-left">
          <img
            src="../assets/programmer.gif" // Or any relevant graphic!
            alt="About Illustration"
            className="img-fluid rounded-4"
            style={{ maxWidth: '400px' }}
          />
        </div>
      </div>
    </section>
  );
}

export default About;
