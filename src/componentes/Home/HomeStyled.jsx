import styled from 'styled-components'

const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 5rem 5rem;
    }
`

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 2rem 5rem;
    border: 0.1rem solid #666;
    border-radius: 0 0 1rem 1rem;
    background-color: #000;
    width: 90rem;

    h2 a{
        font-size: 1.5rem;
        text-transform: uppercase;
        color: #fff;
    }
`

const Menu = styled.menu`
    display: flex;

    li{
        height: 2rem;
        
        a{
            font-size: 1.0rem;
            color: #fff;
            padding: 2.8rem 2.0rem;
            transition: 0.2s ease-in-out;
        }

        a:hover{
            border-bottom: 0.2rem solid #4caf50;
            color: #4caf50;
        }
    }
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
        text-align: center;
    }
`

const Img = styled.div`
    img{
    width: 30rem;
        border-radius: 50%;
    }
`

export { Main, Header, Menu, Info, Img }