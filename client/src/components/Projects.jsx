import React from 'react';

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
      image: "../assets/netflix.png",
      link: "https://lets-chill-together.netlify.app/",
    },
    {
      title: "Bootstrap 5 Project Model",
      description: "HTML, Bootstrap 5, CSS, JavaScript — hosted on Netlify, Responsive landing page built with Bootstrap 5 components like grid, cards, modals, and navbar, showcasing a modern layout and clean design",
      image: "../assets/showcase.png",
      link: "https://bootstrap5-project-model.netlify.app/",
    },
    {
      title: "Fun With X | Interactive Mini Project with Tailwind CSS",
      description: "TML, CSS, JavaScript , Tailwind CSS — hosted on Netlify, A simple interactive website that performs a fun operation or mini-game based on user input, with dynamic results and a responsive design",
      image: "../assets/x.jpg",
      link: "https://fun-with-x.netlify.app/",
    },

    {
      title: "GSAP Desktop Animation — Kove Landing",
      description: "HTML, CSS, JavaScript, GSAP — hosted on Netlify. A visually engaging landing page with advanced GSAP animations, smooth scroll effects, and a modern layout designed for desktop experience.",
      image: "../assets/kovee.png",
      link: "https://kove-gsap-desktop-prev.netlify.app/",
    },
    {
      title: "TaskFlow — Productivity App UI Clone",
      description: "React, Tailwind CSS — hosted on Netlify. A pixel-perfect clone of a task management app, featuring responsive full-page layout, sticky sidebar, animations, and optimized performance across devices.",
      image: "../assets/taskflow.jpg",
      link: "https://taskflow-clone.netlify.app/",
    },
    {
      title: "FocusList Tracker",
      description: "React, Tailwind CSS — hosted on Netlify. A to-do productivity app with a minimalist design, state-based logic, and scrollable task list. Ideal for learning React fundamentals.",
      image: "../assets/focusList.png",
      link: "https://focuslist-track.netlify.app/",
    },
    {
      title: "TaskFlow Offer Landing",
      description: "HTML, CSS, Tailwind CSS — hosted on Netlify. A static promotional landing page styled with Tailwind CSS showcasing a fictional SaaS offer with clean layout and CTA sections.",
      image: "../assets/tf.png",
      link: "https://taskflow-offer.netlify.app/",
    }
    , {
      title: " Nova Gaming Hub",
      description: "Nova Gaming Hub is a dynamic and responsive web app developed with React, styled by Tailwind CSS, and animated using GSAP. Hosted on Netlify, it showcases interactive UI and modern web development practices",
      image: "../assets/nova-hub.webp",
      link: "https://nova-gamiing-hub.netlify.app/"
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
            className="col-md-4 mb-4 shadow-md gap-4"
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
