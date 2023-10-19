import React from "react";
import "./Work.css";
import { Link } from "react-router-dom";
import { projects } from "../../data";
import { FaAngleDoubleRight } from "react-icons/fa";

const Work = () => {
  return (
    <div className='container section work__container'>
      <h2 className='work__title'>
        What I've been <span>working on </span>
      </h2>
      <p className='work__desc'>
        I like to stay busy and always have a project in the works.take a look
        at some of the applications I've dedicated my time to.
      </p>
      <div className='work__box'>
        {projects.map((project) => {
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
  );
};

export default Work;
