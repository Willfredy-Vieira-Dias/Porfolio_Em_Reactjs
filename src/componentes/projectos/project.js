import React from "react";
import "./project.css";

const project = () => {
  return (
    <>
      <section className="projectos">
        <h1 className="titulo">Os meus projectos</h1>
        <div className="grid-container">
          <a href="https://github.com/Willfredy-Vieira-Dias/calculadorajs">
            <button className="grid-item">
              <i class="fa-solid fa-calculator"></i>
              <h1 className="titulo-item">Calculadora</h1>
            </button>
          </a>
          <a href="https://github.com/Willfredy-Vieira-Dias/Porfolio_Em_Reactjs">
            <button className="grid-item">
              <i class="fa-solid fa-address-card"></i>
              <h1 className="titulo-item">Portfólio</h1>
            </button>
          </a>
          <a href="https://github.com/Willfredy-Vieira-Dias/jogo_do_galo">
            <button className="grid-item">
              <i class="fa-solid fa-gamepad"></i>
              <h1 className="titulo-item">Jogo do Galo</h1>
            </button>
          </a>
          <a href="https://github.com/Willfredy-Vieira-Dias/reactapp">
            <button className="grid-item">
              <i class="fa-brands fa-react"></i>
              <h1 className="titulo-item">Primeiro projecto React.Js</h1>
            </button>
          </a>
        </div>
      </section>
      <div class="custom-shape-divider-top-1648760620">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </>
  );
};

export default project;
