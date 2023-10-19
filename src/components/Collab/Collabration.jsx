import React from "react";
import "./Collabration.css";
import classImg from "../../assets/class.jpg";
import PhoneImg from "../../assets/phone.jpg";
import roadImg from "../../assets/road.jpg";

const Collabration = () => {
  return (
    <section className='collab__container container section'>
      <div className='collab__info'>
        <h2 className='collab__title'>
          Let's build something <span>together</span>
        </h2>
        <p className='collab__desc'>
          Feel free to reach out if you're looking for a developer,have a
          question,or just want to connect
        </p>
        <a
          href='https://www.linkedin.com/in/abishekhari09/'
          className='collab__mail'
        >
          @AbishekHari
        </a>
      </div>
      {/* <div className='img__grid'>
        <img src={classImg} alt='' className='grid' />
        <div className='row'>
          <img src={PhoneImg} alt='' className='grid' />
          <img src={roadImg} alt='' className='grid' />
        </div>
        <img src={PhoneImg} alt='' className='grid' />
      </div> */}
    </section>
  );
};

export default Collabration;
