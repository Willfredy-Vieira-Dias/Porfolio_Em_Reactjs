 import React from 'react'
 import Header from './componentes/head/Header'
 import Home from "./componentes/hero/Home"
 import Sobremim from "./componentes/sobremim/about"
 import Projectos from "./componentes/projectos/project"
 import Habilidades from "./componentes/habilidades/hability"
 import Redessociais from "./componentes/redes/sociais"
 import "./App.css" 
 
 const App = () => {
   return (
     <>
     <Header/>
     <Home/>
     <Sobremim/>
     <Projectos/>
     <Habilidades/>
     <Redessociais/>
     </>
   )
 }
 
 export default App