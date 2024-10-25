import styled from 'styled-components'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 10rem;
    border-bottom: 0.1rem solid #666;

    h2{
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #fff;
    }
`

const Menu = styled.menu`
    display: flex;
    gap: 2rem;

    li{
        height: 2rem;
        
        a{
            font-size: 1.2rem;
            color: #fff;
            padding: 2.7rem;
            transition: 0.2s ease-in-out;
        }

        a:hover{
            border-bottom: 0.1rem solid #fff;
            color: #666;
        }
    }
`

const Main = styled.main`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10rem 10rem;
`

const Info = styled.div`
    width: 50rem;
    display: flex;
    gap: 1rem;
    flex-direction: column;

    h1{
        color: #fff;
        font-size: 5.0rem;
    }

    h2{
        color: #fff;
        font-size: 2rem;
    }

    p{
        color: #fff;
        line-height: 1.5;
    }
`

const Img = styled.div`
    img{
    width: 30rem;
        border-radius: 50%;
    }
`

export { Header, Menu, Main, Info, Img }