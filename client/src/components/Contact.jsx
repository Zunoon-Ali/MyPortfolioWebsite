import ContactForm from "./ContactForm";


function Contact() {
  return (
    <section id="contact" className="container-fluid py-5 my-5 bg-grey-white-gradient">
      <h2 className="fw-bold mb-5 text-center text-white" data-aos="fade-up">
        Contact Me
      </h2>
      <div className="row justify-content-center">
        <div className="col-md-4" data-aos="fade-up" data-aos-delay="100">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
