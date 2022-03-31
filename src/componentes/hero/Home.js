import React from "react";
import "./Home.css";
import hero from "../img/willfredyimg.png";
import { Typewriter } from "react-simple-typewriter";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>Olá, eu sou</h3>
            <h1>
              <span>Willfredy Vieira Dias</span>
            </h1>
            <h2>
              <span>
                <Typewriter
                  words={[
                    " Programador Intermédio.",
                    " Desenhista.",
                    " Aspirante a Escritor.",
                    " Amante de Computadores.",
                    " Pensador e Observador.",
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>

            <p>
              Um jovem amante de Artes, Desenhista, Aspirante a Escritor, Gamer,
              Nerd, Geek e Criativo. Gosto de assistir animes e jogar vídeo
              jogos. Quando tenho um pouco de tempo livre, gosto de ler bandas
              desenhadas.
            </p>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>VEJA AS MINHAS REDES SOCIAIS:</h4>
                <div className="button">
                  <a href="https://www.facebook.com/Willfredy.Vieira.Dias">
                    <button className="btn_shadow">
                      <i class="fab fa-facebook-f"></i>
                    </button>
                  </a>
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Finvites%2Fcontact%2F%3Fi%3D1psrapedlald4%26utm_content%3D3ydbbub%26fbclid%3DIwAR1PYPLaqR2kjsWXbSEEtNiV40YIMwgz7DTlklhBjvx04BgGJXYG4LexsDM&h=AT2jvGGj6t3c2XikGBk4vJTij3CtoztI9xphRPBwmyKKTubTQfXyXvkQpZYY_eWWFa2x1IoHnw9-mCMMN-Kc6pxeVQwJFdAiWR5teMXa4UXbh99a1Gdb-9m4oaUurCL0h6qftA">
                    <button className="btn_shadow">
                      <i class="fab fa-instagram"></i>
                    </button>
                  </a>
                  <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2FWillfredyD%3Ft%3DuKgnQyS-nvJLvSqxkmALdQ%26s%3D09%26fbclid%3DIwAR1QvAMg4wyafUEohfREm3S89iWFX5vyY5N8qrD7qrk3DAxNvK1OU7-9CfM&h=AT2jvGGj6t3c2XikGBk4vJTij3CtoztI9xphRPBwmyKKTubTQfXyXvkQpZYY_eWWFa2x1IoHnw9-mCMMN-Kc6pxeVQwJFdAiWR5teMXa4UXbh99a1Gdb-9m4oaUurCL0h6qftA">
                    <button className="btn_shadow">
                      <i class="fa-brands fa-twitter"></i>
                    </button>
                  </a>
                </div>
              </div>
              <div className="col_1">
                <h4>MELHORES HABILIDADES EM:</h4>
                <button className="btn_shadow">
                  <i class="fab fa-html5"></i>
                </button>
                <button className="btn_shadow">
                  <i class="fa-brands fa-js-square"></i>
                </button>
                <button className="btn_shadow">
                  <i class="fa-solid fa-c"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
