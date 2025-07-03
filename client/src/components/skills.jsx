// src/components/Skills.jsx

import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare, FaReact,
  FaNodeJs, FaPhp, FaLaravel, FaGitAlt, FaFigma
} from 'react-icons/fa';
import {
  SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiDotnet
} from 'react-icons/si';

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 color="#E44D26" size={32} />, level: 95 },
    { name: "CSS3", icon: <FaCss3Alt color="#1572B6" size={32} />, level: 90 },
    { name: "Bootstrap", icon: <FaBootstrap color="#7952B3" size={32} />, level: 90 },
    { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" size={32} />, level: 80 },
    { name: "JavaScript", icon: <FaJsSquare color="#F7DF1E" size={32} />, level: 85 },
    { name: "React", icon: <FaReact color="#61DBFB" size={32} />, level: 85 },
    { name: "Node.js", icon: <FaNodeJs color="#339933" size={32} />, level: 80 },
    { name: "Express.js", icon: <SiExpress color="#000000" size={32} />, level: 75 },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={32} />, level: 70 },
    { name: "MySQL", icon: <SiMysql color="#4479A1" size={32} />, level: 70 },
    { name: "PHP", icon: <FaPhp color="#777BB4" size={32} />, level: 80 },
    { name: "Laravel", icon: <FaLaravel color="#FF2D20" size={32} />, level: 75 },
    { name: "ASP.NET", icon: <SiDotnet color="#512BD4" size={32} />, level: 70 },
    { name: "GitHub", icon: <FaGitAlt color="#F05032" size={32} />, level: 85 },
    { name: "Figma", icon: <FaFigma color="#F24E1E" size={32} />, level: 60 },
  ];

  return (
    <section id="skills" className="container py-5 my-5">
      <h2 className="fw-bold mb-5 text-center" data-aos="fade-up">
        My Skills
      </h2>
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div
            className="col-6 col-md-3 mb-4 text-center"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <div style={{ width: 120, height: 120, margin: '0 auto' }}>
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  pathColor: '#0d6efd',
                  textColor: '#000',
                  trailColor: '#eee',
                })}
              />
            </div>
            <div className="mt-2">
              <div>{skill.icon}</div>
              <h6 className="mt-2">{skill.name}</h6>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
