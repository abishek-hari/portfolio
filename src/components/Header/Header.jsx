import React from "react";
import "./Header.css";
import { links } from "../../data";

const Header = () => {
  return (
    <header className='header'>
      <div className='container header__nav'>
        <h2 className='header__logo'>Abi_.</h2>
        {/* <div className='header__links'>
          {links.map((link) => {
            const { text, id } = link;
            return (
              <a key={id} className='header__link'>
                {text}
              </a>
            );
          })}
        </div> */}
        <a href='#' className='herader__link'>
          Collab
        </a>
      </div>
    </header>
  );
};

export default Header;
