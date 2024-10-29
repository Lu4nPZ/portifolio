import styled from 'styled-components'

const Section = styled.section`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 1rem;

    h1{
        color: #fff;
        font-size: 2.5rem;
    }

    p{
        color: #fff;
        font-size: 1.3rem;
        margin-bottom: 3rem;
    }
`

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    flex-wrap: wrap;
    margin: 0 20rem;
`

const Card = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #7f7f7f;
    width: 20rem;
    padding: 2rem;
    border-radius: 0.8rem;
    gap: 2rem;

    h2{
        color: #fff;
    }

    img{
        width: 15rem;
    }

    p{
        max-height: 8rem;
        overflow-y: scroll;
        font-size: 1rem;
        padding-right: rem;
        text-align: center;
        margin: 0;
    }

    *::-webkit-scrollbar {
        width: 0.7rem;
    }

    *::-webkit-scrollbar-track {
        background: #f1e9e9;
        border-radius: 1rem;
    }

    *::-webkit-scrollbar-thumb {
        background-color: #4caf50;
        border-radius: 1rem;
        border: 0.2rem solid #ffffff;
        cursor: pointer;
    }
`

export { Section, Div, Card }