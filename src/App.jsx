// import './App.css'
import { Home } from './componentes/Home/Home'
import { createGlobalStyle } from 'styled-components'

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
      <Home />
    </>
  )
}

export default App
