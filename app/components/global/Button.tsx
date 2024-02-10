import styled from "styled-components"

export default function Button({text}:{text: string}){
    return <Container>{text}</Container>
}

const Container = styled.a`
    position: relative;
    top: 60px;
    background-color: #002966;
    font-size: 28px;
    color: #FEFEFE;
    font-weight: 700;
    border-bottom: 4px solid #0048A6;
    border-radius: 70px;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 12px;
    padding-bottom: 12px;
    transition: .2s linear;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #FEFEFE;
        color: #002966;
    }

    @media(max-width: 800px){
        font-size: 20px;
        padding-left: 40px;
        padding-right: 40px;
    }
`