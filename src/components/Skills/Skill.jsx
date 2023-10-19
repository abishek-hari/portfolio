import React from "react";
import "./Skill.css";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaReact, FaCss3 } from "react-icons/fa";
import {
  SiRedux,
  SiTailwindcss,
  SiDaisyui,
  SiJavascript,
  SiStyledcomponents,
} from "react-icons/si";
import { AiOutlineHtml5 } from "react-icons/ai";

const Skill = () => {
  return (
    <section className='section container skill__container'>
      <h2 className='skill__title'>
        My <span> Skills</span>
      </h2>
      <p className='skill__desc'>
        Through my studies, I've gained solid understanding of computer science
        and web development concepts, and have dedicated a lot of my free time
        to apply these concepts to real-world scenarios and applications
      </p>
      <div className='skill-row'>
        <div className='skill-left'>
          <ul className='skill__box'>
            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <SiJavascript className='skill-icon js' />
              <li className='skills'>Javascript</li>
            </div>
            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <FaReact className='skill-icon' />
              <li className='skills'>react</li>
            </div>
            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <SiRedux className='skill-icon' />
              <li className='skills'>Redux toolkit</li>
            </div>

            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <SiTailwindcss className='skill-icon' />
              <li className='skills'>Tailwind css</li>
            </div>
            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <SiStyledcomponents className='skill-icon' />
              <li className='skills'>styled Componets</li>
            </div>

            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <AiOutlineHtml5 className='skill-icon' />
              <li className='skills'>Html</li>
            </div>

            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <FaCss3 className='skill-icon' />
              <li className='skills'>css</li>
            </div>
            <div className='skills__check'>
              {/* <AiOutlineCheckCircle /> */}
              <li className='skills'>Git</li>
            </div>
          </ul>
        </div>
        {/* <div className='skill-right'>
          <div className='icon-left'>
            <FaReact className='skill-icon' />
            <SiRedux className='skill-icon' />
            <SiTailwindcss className='skill-icon' />
            <SiDaisyui className='skill-icon' />
          </div>
          <div className='icon-right'>
            <AiOutlineHtml5 className='skill-icon' />
            <FaCss3 className='skill-icon' />
            <SiJavascript className='skill-icon' />
            <SiStyledcomponents className='skill-icon' />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Skill;
