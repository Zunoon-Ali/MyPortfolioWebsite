// Footer.jsx

import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row align-items-center mb-3">
          {/* Left: Branding */}
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-0 fw-bold">Zunoon Ali</h5>
            <small className="text-muted">Front-End Developer Portfolio</small>
            
          </div>

          {/* Right: Social Icons */}
          <div className="col-md-6 text-md-end footer-social">
            {/* <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 fs-5"
            >
              <FaFacebookF />
            </a> */}
            <a
              href="https://www.linkedin.com/in/zunoon-ali-377929253/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 fs-5"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Zunoon-Ali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light me-3 fs-5"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/zunoon_pirzada/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-light fs-5"
            >
              <FaInstagram />
            </a>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center small">
          &copy; {new Date().getFullYear()} Zunoon Ali. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
