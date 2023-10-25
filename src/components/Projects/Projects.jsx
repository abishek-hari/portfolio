import React, { useEffect } from "react";
import "./Projects.css";
import PhoneImg from "../../assets/phone.jpg";
import classImg from "../../assets/class.jpg";
import { projects, singleProject } from "../../data";
import { useParams, Link } from "react-router-dom";
import { FaReact, FaAngleDoubleRight } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Projects = () => {
  const { id } = useParams();
  const project = singleProject.find((p) => p.id === Number(id));

  const filteredProject = projects.filter(
    (project) => project.id !== Number(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return <div>Project not found</div>;
  }

  const {
    title,
    img,
    description,
    project__goal_title,
    project__goal_desc,
    project__lesson_desc,
    project__lesson_title,
    project__webstack__desc,
    project__webstack__title,
  } = project;

  return (
    <div className='container section'>
      <div className='project__summary project-section'>
        <h2 className='project__title'>{title}</h2>
        <p className='project__description'>{description}</p>
        <div className='project__stack'>
          <div className='project__preview'>
            <button className='project__stack-btn'>
              <AiFillGithub className='project__icon' />
              <a href='#' className='project__icon-name'>
                github
              </a>
            </button>
            <button className='project__stack-btn'>
              <AiFillGithub className='project__icon' />
              <a href='#' className='project__icon-name'>
                View Site
              </a>
            </button>
          </div>
          <h3 className='tech__stack'>
            stack :
            <p className='stack-name'>React, Redux toolkit and tailwind</p>
          </h3>
        </div>
      </div>
      <div className='project__img-box project-section'>
        <img src={img} alt={title} className='project__main-img' />
      </div>
      <div className='project__purpose-section project-section'>
        <h2 className='project__purpose-title'>{project__goal_title}</h2>
        <p className='project__purpose-desc'>{project__goal_desc}</p>
      </div>
      <div className='project__webstack-section project-section'>
        <div className='webstack__icons'>
          <FaReact className='web__icons' />
          <SiRedux className='web__icons' />
          <SiTailwindcss className='web__icons' />
        </div>
        <div className='webstack__info'>
          <h2 className='project__webstack-title'>
            {project__webstack__title}
          </h2>
          <p className='project__webstack-desc'>{project__webstack__desc}</p>
        </div>
      </div>
      <div className='project__img-grid project-section'>
        <img src={PhoneImg} alt='' className='grid__first' />
        <img src={classImg} alt='' className='grid__second' />
      </div>
      <div className='project__lessons-section project-section'>
        <h2 className='project__lesson-title'>{project__lesson_title}</h2>
        <p className='project__lesson-desc'>{project__lesson_desc}</p>
      </div>
      <div className='other__projects-section project-section'>
        <h2 className='other__projects-title'>Other projects</h2>
        <div className='work__box'>
          {filteredProject.map((project) => {
            const { id, img, title, desc } = project;
            return (
              <div className='work__card' key={id}>
                <img src={img} alt={title} className='work__img' />
                <div className='work__info'>
                  <h2 className='work__info-title'>{title}</h2>
                  <p className='work__info-desc'>{desc}</p>
                  <Link to={`/project/${id}`} className='work__btn'>
                    view project <FaAngleDoubleRight className='fa__arrow' />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
