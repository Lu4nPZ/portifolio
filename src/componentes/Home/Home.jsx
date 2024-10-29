import { Main, Header, Menu, Info, Img } from './HomeStyled'
import FotoDePerfil from '../../images/foto-de-perfil.jpg'
import PropTypes from 'prop-types'

const Home = ({ id })=>{
    return(
        <Main id={id}>
        <Header>
            <h2><a href="#">Luan Pablo</a></h2>
            <nav>
                <Menu>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#projetos">Projetos</a>
                    </li>
                    <li>
                        <a href="#tecnologias">Tecnologias</a>
                    </li>
                    <li>
                        <a href="">Contatos</a>
                    </li>
                </Menu>
            </nav>
        </Header>
        <div>
            <Info>
                <h1>Luan Pablo</h1>
                <h2>Web Developer</h2>
                <p>Me chamo Luan Pablo Fonseca De Novaes Batista, sou programador front-end com sólida experiência em HTML, CSS, JavaScript e React. Sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias, atualmente estou cursando Análise e Desenvolvimento de Sistemas. Tenho um grande interesse em soluções inovadoras e em criar interfaces web dinâmicas e intuitivas que proporcionem a melhor experiência ao usuário. Estou constantemente evoluindo e procurando novas oportunidades para expandir meus conhecimentos no desenvolvimento front-end.</p>
            </Info>
            <Img>
                <img src={FotoDePerfil} alt="foto-portfolio" />
            </Img>
        </div>
        </Main>
    )
}

Home.propTypes = {
    id: PropTypes.string.isRequired
}

export { Home }