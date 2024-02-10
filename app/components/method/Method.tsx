"use client";
import styled from "styled-components"
import { message } from "../beforeeafter/BeforeEAfter";

export default function Method(){
    return(
        <Container>
            <h2>Conheça o Método 4 fases Emagrecentro e elimine até 10% do seu peso em 5 semanas</h2>
            <iframe src="https://www.youtube.com/embed/D9jv_B6iAKQ?si=dPtVirJO6YChxmvk" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            <ButtonResults  
                target="_blank"  
                href={`https://api.whatsapp.com/send?phone=554891908925&text=${message}`}
            >Quero Eliminar peso em 5 semanas</ButtonResults>
        </Container>
    )
}

const Container = styled.section`
    background-color: #fff;
    padding-top: 60px;
    padding-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        color: #002966;
        max-width: 700px;
        text-align: center;
        margin: 0 auto;
        font-size: 28px;
    }

    iframe {
        margin-top: 40px;
        width: 560px;
        height: 315px;
    }

    @media(max-width: 800px) {
        padding-left: 20px;
        padding-right: 20px;

        iframe {
            width: 100%;
        }

        h2 {
            font-size: 22px;    
        }
    }
`

export const ButtonResults = styled.a`
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