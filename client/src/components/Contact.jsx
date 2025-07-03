import ContactForm from "./contactForm";


function Contact() {
  return (
    <section id="contact" className="container py-5 my-5">
      <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">
        Contact Me
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-8" data-aos="fade-up" data-aos-delay="100">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
