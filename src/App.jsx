// import './App.css'
import { Home } from './componentes/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { Projetos } from './componentes/Projetos/Projetos'
import { Tecnologias } from './componentes/Tecnologias/Tecnologias'

const GlobalStyle = createGlobalStyle`
  html{
  font-size: 62,5%;
  background-color: #0f0f0f;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Oxanium", sans-serif;
  }

  a{
    text-decoration: none;
    color: #000;
  }

  Menu{
    list-style: none;
  }
`
function App() {

  return (
    <>
      <GlobalStyle />
      <Home id='home'/>
      <Projetos id='projetos'/>
      <Tecnologias id='tecnologias'/>
    </>
  )
}

export default App
