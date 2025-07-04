// Projects.jsx

function Projects() {
  const projectList = [
    {
      title: "Frethos Landing Page",
      description: "A stylish multi-section landing page built with React, Bootstrap 5, and AOS animations. Smooth scroll and responsive design.",
      image: "../assets/frethos_logo.png",
      link: "https://frethos-karachi.netlify.app/",  
    },
    {
      title: "Spotify Clone",
      description: "A basic Spotify front-end clone using HTML, CSS, JavaScript, and Bootstrap.",
      image: "../assets/spotify.jpg",
      link: "https://my-playlist-sung.netlify.app",
    },
    {
      title: "Netflix Landing Page",
      description: "Responsive Netflix landing page using Bootstrap 5 and custom CSS animations.",
      image: "../assets/netflix_logo.png",
      link: "https://lets-chill-together.netlify.app/",
    },
    {
      title: "Bootstrap 5 Project Model",
      description: "Responsive Netflix landing page using Bootstrap 5 and custom CSS animations.",
      image: "../assets/bootstrap.jpg",
      link: "https://bootstrap5-project-model.netlify.app/",
    },
    {
      title: "Twitter Clone landing page",
      description: "Responsive Netflix landing page using Bootstrap 5 and custom CSS animations.",
      image: "../assets/x.jpg",
      link: "https://fun-with-x.netlify.app/",
    },
    
    {
      title: "Github Profile Card",
      description: "Responsive Netflix landing page using Bootstrap 5 and custom CSS animations.",
      image: "../assets/github.jpg",
      link: "https://github.com/Zunoon-Ali",
    },
    {
      title: "Fiver Profile Card",
      description: "Responsive Netflix landing page using Bootstrap 5 and custom CSS animations.",
      image: "../assets/Fiverr-featured-image.webp",
      link: "https://www.fiverr.com/zunoonali2006?public_mode=true",
    }
  ];

  return (
    <section id="projects" className="container py-5 my-5">
      <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">
        My Projects
      </h2>
      <div className="row">
        {projectList.map((project, index) => (
          <div
            className="col-md-4 mb-4"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="card h-100 shadow-sm project-card">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
