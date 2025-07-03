import { FaRocket, FaLaptopCode, FaUsers, FaBrain, FaGithub } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";

function Goals() {
  const goals = [
    {
      icon: <FaRocket />,
      title: "Level Up Skills",
      description: "Consistently improve my dev skills in frontend and backend."
    },
    {
      icon: <FaLaptopCode />,
      title: "Build Real Projects",
      description: "Develop modern, responsive websites and apps."
    },
    {
      icon: <FaGithub />,
      title: "Open Source",
      description: "Contribute to open-source projects on GitHub."
    },
    {
      icon: <FaBrain />,
      title: "Learn New Tech",
      description: "Master Next.js, ASP.NET, and explore AI tools."
    },
    {
      icon: <FaUsers />,
      title: "Networking",
      description: "Collaborate with other devs and grow my profile."
    },
    {
      icon: <SiFiverr />,
      title: "Grow Fiverr Profile",
      description: "Expand my Fiverr freelancing profile and get more clients."
    },
  ];

  return (
    <section id="goals" className="container py-5 my-5">
      <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">My Goals</h2>
      <div className="row">
        {goals.map((goal, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos="zoom-in" data-aos-delay={index * 100}>
            <div className="card text-center shadow-sm h-100 p-4">
              <div className="fs-1 mb-3">{goal.icon}</div>
              <h5>{goal.title}</h5>
              <p className="text-muted">{goal.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Goals;
