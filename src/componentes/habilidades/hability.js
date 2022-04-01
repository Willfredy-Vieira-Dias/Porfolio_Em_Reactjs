import React from "react";
import "./hability.css";

const hability = () => {
  return (
    <>
      <section className="habilitys">
        <h1 className="title">As minhas habilidades</h1>
        <div className="suporte">
          <div className="habilidades">
            <div className="base">
              <div className="nome">
                <i class="fa-brands fa-html5"></i> HTML
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento1" per="73%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-brands fa-js-square"></i> JavaScript
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento2" per="36%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-brands fa-css3-alt"></i> CSS
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento3" per="30%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                Linguagem <i class="fa-solid fa-c"></i>
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento4" per="80%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-brands fa-java"></i> Java
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento5" per="43%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-brands fa-python"></i> Python
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento6" per="15%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-brands fa-react"></i> React.js
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento7" per="23%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-solid fa-chess"></i> Lógica
              </div>
              <div className="barra-progresso">
                <div className="percentagem porcento8" per="90%"></div>
              </div>
            </div>

            <div className="base">
              <div className="nome">
                <i class="fa-solid fa-graduation-cap"></i> Aprender novas
                habilidades
              </div>
              <div className="barra-progresso">
                <div className="percentagem 9" per="100%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1648772710">
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
      </section>
    </>
  );
};

export default hability;
