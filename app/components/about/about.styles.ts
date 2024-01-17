import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    background-color: #003577;
    color: #fff;
    justify-content: center;
    align-items: center;
    @media(max-width: 800px){
        flex-wrap: wrap;
    }
`

export const AboutImg = styled(Image)`

`

export const AbountContent = styled.div`
    padding-top: 40px;
    max-width: 500px;

    h2 {
        font-size: 48px;
    }

    p {
        padding-top: 30px;
        font-size: 19px;
    }
`