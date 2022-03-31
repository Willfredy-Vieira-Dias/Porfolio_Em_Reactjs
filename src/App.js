 import React from 'react'
 import Header from './componentes/head/Header'
 import Home from "./componentes/hero/Home"
 import Sobremim from "./componentes/sobremim/about"
 import Projectos from "./componentes/projectos/project"
 import Habilidades from "./componentes/habilidades/hability"
 import "./App.css" 
 
 const App = () => {
   return (
     <>
     <Header/>
     <Home/>
     <Sobremim/>
     <Projectos/>
     <Habilidades/>
     </>
   )
 }
 
 export default App