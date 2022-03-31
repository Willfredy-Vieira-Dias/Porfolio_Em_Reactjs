import React from 'react'
import "./about.css"
import imagem from '../img/willfredyimg2color.jpg'

const about = () => {
  return (
    <>
        <section class="about">
        <div class="custom-shape-divider-top-1648715584">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
		<div class="main">
			<img src={imagem} alt=''/>
			<div class="about-text">
				<h2>Sobre Mim</h2>
				<h5>Programador <span>e Desenhista</span></h5>
				<p>Olá, O meu nome é <span>willfredy Eliúde Pinto Vieira Dias</span>. Sou desenvolvedor de <span>nível intermédio</span>, <span>desenhista</span> e <span>aspirante a escritor</span>. Comecei a me interessar por <span>informática</span> aos 8 anos porque eu via o meu tio consertando computadores. Então, aos 15 anos, eu decidi que iria me formar em <span>Robótica</span>. Fiz infórmatica no médio e, hoje, estou na universidade seguindo o mesmo curso. <span>Farei grandes coisas no futuro</span>, por isso, fique atento ao meu <span>portfólio</span>.</p>
			</div>
		</div>
        <div class="custom-shape-divider-bottom-1648724401">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
        </section>
    </>
  )
}

export default about