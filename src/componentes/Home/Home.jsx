import { Header, Menu, Main, Info, Img } from './HomeStyled'
import FotoDePerfil from '../../images/foto-de-perfil.jpg'

const Home = ()=>{
    return(
        <>
        <Header>
            <h2>Luan Pablo</h2>
            <nav>
                <Menu>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Portfólio</a>
                    </li>
                    <li>
                        <a href="">Trabalhos</a>
                    </li>
                    <li>
                        <a href="">Contatos</a>
                    </li>
                </Menu>
            </nav>
        </Header>
        <Main>
            <Info>
                <h1>Luan Pablo</h1>
                <h2>Web Developer</h2>
                <p>Me chamo Luan Pablo Fonseca De Novaes Batista, sou programador front-end com sólida experiência em HTML, CSS, JavaScript e React. Sempre em busca de aprimorar minhas habilidades e aprender novas tecnologias, atualmente estou cursando Análise e Desenvolvimento de Sistemas. Tenho um grande interesse em soluções inovadoras e em criar interfaces web dinâmicas e intuitivas que proporcionem a melhor experiência ao usuário. Estou constantemente evoluindo e procurando novas oportunidades para expandir meus conhecimentos no desenvolvimento front-end.</p>
            </Info>
            <Img>
                <img src={FotoDePerfil} alt="foto-portfolio" />
            </Img>
        </Main>
        </>
    )
}

export { Home }