import ContactForm from "./ContactForm";

function Contact() {
  return (
    <section
      id="contact"
      className="container-fluid py-5 my-5 bg-grey-white-gradient"
    >
      {/* Section Heading: Use H2 for section title, SEO-friendly */}
      <h2
        className="fw-bold mb-5 text-center text-white pb-3"
        data-aos="fade-up"
      >
        Contact Me
      </h2>

      <div className="row justify-content-center">
        {/* Contact Details */}
        <div
          className="col-md-5 mb-4 mb-md-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h3 className="mb-3">Get in Touch</h3>
          <p>
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
          <p>
            You can contact me via email at{" "}
            <a href="mailto:zunnoon2006@gmail.com">
              zunnoon2006@gmail.com
            </a>{" "}
            or use the contact form below.
          </p>
          <p>Alternatively, connect with me on:</p>
          <ul className="list-unstyled">
            <li>
              <a
                href="https://www.linkedin.com/in/zunoon-ali-1bb8a8230/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://github.com/zunoonali"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/zunoon_pirzada/"
                target="_blank"
                rel="noopener noreferrer"
              >Instagram</a>
            </li>

          </ul>
        </div>

        {/* Contact Form */}
        <div className="col-md-5" data-aos="fade-up" data-aos-delay="200">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
