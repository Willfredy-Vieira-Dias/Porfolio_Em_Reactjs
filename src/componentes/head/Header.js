import React, { useState } from "react";
import "../head/Header.css";

const Header = () => {
  window.addEventListener("scroll", function() {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", window.scrolly > 100);
  });

  const [Mobile, setMobile] = useState(false);

  return (
    <>
      <header className="header">
        <div className="container d_flex">
          <div className="logo">
          </div>

          <div className="navlink">
            <ul
              className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"}
              onClick={() => setMobile(false)}
            >
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#sobre">sobre mim</a>
              </li>
              <li>
                <a href="#projectos">projectos</a>
              </li>
              <li>
                <a href="#resume">Habilidades</a>
              </li>
              <li>
                <a href="#clients">Redes Sociais</a>
              </li>
              <li>
                <a href="#blog">Contacte-me</a>
              </li>
              <li>
                <a href="#contact">Ajuda</a>
              </li>
              <li>
                <button className="home-btn">SEJA BEM-VINDO</button>
              </li>
            </ul>

            <button className="toggle" onClick={() => setMobile(!Mobile)}>
              {Mobile ? (
                <i className="fas fa-times close home-btn"></i>
              ) : (
                <i className="fas fa-bars open"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
