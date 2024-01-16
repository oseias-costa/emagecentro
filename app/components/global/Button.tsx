import styled from "styled-components"

export default function Button({text}:{text: string}){
    return <Container>{text}</Container>
}

const Container = styled.a`
    background-color: #72faba;
    font-size: 28px;
    color: #0c4a87;
    font-weight: 700;
    border-bottom: 4px solid #4ab888;
    border-radius: 70px;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 12px;
    padding-bottom: 12px;
`