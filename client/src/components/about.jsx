// About.jsx
import { FaUser, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section id="about" className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Left side: Text */}
        <div className="col-md-6 mb-4 mb-md-0" data-aos="fade-right">
          <h2 className="fw-bold mb-3">
            <FaUser className="me-2" />
            About Me
          </h2>
          <p className="mb-3">
            Hi! I’m <strong>Zunoon Ali</strong>, a dedicated Front-End Developer based in Karachi.
            I’m passionate about creating responsive and modern user interfaces using
            <strong> HTML</strong>, <strong>CSS</strong>, <strong>Bootstrap</strong>,
            <strong>Tailwind</strong>, <strong>JavaScript</strong>, and <strong>React</strong>.
            I enjoy bringing designs to life with clean code and smooth animations.
          </p>

          <h3 className="fw-bold mt-4">
            <FaBriefcase className="me-2" />
            Experience
          </h3>
          <p className="mb-2">
            I worked as a <strong>PHP Laravel Intern</strong> at <strong>Fossphorus Software House</strong>
            from June 2023 to September 2023. This was my first opportunity to collaborate with
            a professional development team. During this time, I strengthened my backend skills,
            contributed to real-world projects, and learned the importance of clean, maintainable code.
          </p>
          <p className="mb-2">
            Additionally, I have hands-on experience converting Figma/PSD designs into pixel-perfect,
            responsive websites. I love working with teams, tackling new challenges, and expanding my skill set.
          </p>
          <p className="mb-2">
            I also work as a freelance Front-End Developer on <strong>Fiverr</strong>, delivering quality
            web design and development services to clients worldwide.
            You can check out my Fiverr profile
            <a href="https://www.fiverr.com/zunoonali2006?public_mode=true" target="_blank" rel="noopener noreferrer">
              {" Fiveer Gig "}here.
            </a>
          </p>

          <p className="mb-0">
            I’m always eager to learn new technologies, improve my craft, and collaborate on
            exciting projects. Let’s build something amazing together!
          </p>
        </div>

        {/* Right side: Illustration */}
        <div className="col-md-6 text-center" data-aos="fade-left">
          <img
            src="../assets/programmer.gif"
            alt="Zunoon Ali - Front-End Developer"
            className="img-fluid rounded-4"
          />
        </div>

      </div>
    </section>
  );
}

export default About;
