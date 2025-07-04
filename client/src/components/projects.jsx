// Projects.jsx

function Projects() {
  const projectList = [
    {
      title: "Frethos Karachi",
      description: "HTML, CSS, JavaScript — hosted on Netlify,  Static responsive website with modern layout, navigation links, and smooth scrolling for an engaging café brand presentation",
      image: "../assets/frethos.png",
      link: "https://frethos-karachi.netlify.app/",  
    },
    {
      title: "Spotify Clone",
      description: "HTML, CSS, JavaScript — hosted on Netlify , A simple responsive music playlist website with custom audio player, play/pause, next/previous controls, and smooth user experience",
      image: "../assets/spotify.jpg",
      link: "https://my-playlist-sung.netlify.app",
    },
    {
      title: "Netflix Landing Page",
      description: "HTML, CSS, JavaScript — hosted on Netlify, Static responsive website with a clean landing page design showcasing activities or community events, with smooth scrolling and interactive sections",
      image: "../assets/netflix_logo.png",
      link: "https://lets-chill-together.netlify.app/",
    },
    {
      title: "Bootstrap 5 Project Model",
      description: "HTML, Bootstrap 5, CSS, JavaScript — hosted on Netlify, Responsive landing page built with Bootstrap 5 components like grid, cards, modals, and navbar, showcasing a modern layout and clean design",
      image: "../assets/bootstrap.jpg",
      link: "https://bootstrap5-project-model.netlify.app/",
    },
    {
      title: "Fun With X | Interactive Mini Project with Tailwind CSS",
      description: "TML, CSS, JavaScript , Tailwind CSS — hosted on Netlify, A simple interactive website that performs a fun operation or mini-game based on user input, with dynamic results and a responsive design",
      image: "../assets/x.jpg",
      link: "https://fun-with-x.netlify.app/",
    },
    
    {
      title: "Github Profile",
      description: "Explore my open-source projects on GitHub — from responsive landing pages and static websites to basic JavaScript apps. Hosted code, real deployments, and experiments with HTML, CSS, Bootstrap, Tailwind, and JavaScript.",
      image: "../assets/github.jpg",
      link: "https://github.com/Zunoon-Ali",
    },
    {
      title: "Fiverr Profile",
      description: "Check out my Fiverr profile where I offer professional web development services — from converting Figma/PSD designs to clean, responsive HTML/CSS websites to creating landing pages using Bootstrap, Tailwind, and JavaScript.",
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
            className="col-md-3 mb-4 shadow-md "
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div className="card h-100 shadow-sm project-card ">
              <img
                src={project.image}
                className="card-img-top w-20"
                alt={project.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title text-black">{project.title}</h5>
                <p className="card-text text-black">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary btn-light font-weight-bold mt-auto"
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
