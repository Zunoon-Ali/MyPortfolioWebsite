function Education() {
  return (
    <section id="education" className="container py-5 my-5">
      <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">Education</h2>
      
      <div className="row align-items-center">
        {/* Left: Timeline */}
        <div className="col-md-6">
          <div className="timeline">
            <div className="timeline-item mb-4" data-aos="fade-right">
              <h5>BS Computer Science</h5>
              <p className="text-muted mb-1">SZABIST Karachi</p>
              <p className="mb-0">2023 – 2027</p>
            </div>
            <div className="timeline-item mb-4" data-aos="fade-right">
              <h5>Intermediate (Pre-Engineering)</h5>
              <p className="text-muted mb-1">TCF College Qayyumabad</p>
              <p className="mb-0">2021 – 2023 (B Grade)</p>
            </div>
            <div className="timeline-item mb-4" data-aos="fade-right">
              <h5>Matriculation (Science)</h5>
              <p className="text-muted mb-1">The Citizens Foundation School</p>
              <p className="mb-0">2019 – 2021 (A Grade)</p>
            </div>
          </div>
        </div>

        {/* Right: GIF */}
        <div className="col-md-6 text-center" data-aos="fade-left">
          <img 
            src="./src/assets/reading.jpg" 
            alt="Education Illustration" 
            className="img-fluid" 
            style={{ maxWidth: '400px' }} 
          />
        </div>
      </div>
    </section>
  );
}

export default Education;
