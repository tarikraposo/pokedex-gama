import styled from "styled-components";

export const Title = styled.h1 `
    font-weight: 700;
    font-size: 48px;
    line-height: 62px;
    color: #17171B;
    margin: 160px 0px 80px ;

`

export const List = styled.div`

    display: grid;
    grid-template-columns: repeat(3,1fr);
    column-gap: 30px;
    row-gap: 50px;

    @media only screen and (max-width: 1024px) {
        grid-template-columns: repeat(2,1fr);
    }

    @media only screen and (max-width: 700px) {
        grid-template-columns: repeat(1,1fr);
    }

    @media only screen and (max-width: 400px) {
        font-size: 32px;
        line-height: 40px;
        margin: 100px 0 80px;
    }

`

export const Input = styled.input `

    width: 100%;
    font-size: 1.2rem;
    color: #17171b;
    padding: 0.5rem 1rem;
    margin-bottom: 80px;

`