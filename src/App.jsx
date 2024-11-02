import { Home } from './componentes/Home/Home'
import { createGlobalStyle } from 'styled-components'
import { Projetos } from './componentes/Projetos/Projetos'
import { Tecnologias } from './componentes/Tecnologias/Tecnologias'
import { Footer } from './AppStyled'

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62,5%;
    background-color: #0f0f0f;
    scroll-behavior: smooth;
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

  li{
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
      <Footer>
        <p>Site produzido por Luan Pablo</p>
      </Footer>
    </>
  )
}

export default App
