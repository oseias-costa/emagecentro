"use client";
import Image from "next/image"
import styled from "styled-components"
import Background from '@/public/assets/5_-BG.webp'
import GoalPhoto from '@/public/assets/goal.png'
import Button from "../global/Button";

export default function Results(){
    return(
        <Container>
            <Img 
                src={Background}
                alt="Emagrecentro"
                fill={true}
            />
                   <GoalContainer>
            <Icon 
                src={GoalPhoto}  
                alt="Emagrecentro - Alcance seus " 
                />
            <GoalContent>
                <h2>Alcance seus Resultados</h2>
                <p><strong>Perca de 5% a 10% do seu peso já nas primeiras semanas</strong>
                    e alcance seu objetivo final comprometendo com nosso método
                    exclusivo de 4 fases. <strong>Nosso método 4 fases possui certificado
                    de comprovação científica internacional.</strong>
                </p>
                <Button text="Agendar avaliação gratuita" />
            </GoalContent>
        </GoalContainer>
        </Container>
    )
}

const Container = styled.section`
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    position: relative;
`

const Img = styled(Image)`
  background-size: 100%;
  object-fit: cover;
`;

const Icon = styled(Image)`
  width: 400px;
  height: auto;
  margin-right: 30px;

  @media(max-width: 800px) {
    width: 150px;
    margin-right: 0px;
    margin-bottom: 40px;
  }
`;

export const GoalContainer = styled.section`
    display: flex;
    position: relative;
    justify-content: center;

    @media(max-width: 800px){
        flex-direction: column;
        align-items: center;
    }
`

export const GoalContent = styled.div`
    width: 600px;
    color: #043c84;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;
    position: relative;

    h2 {
        padding-bottom: 20px;
        font-size: 42px;
    }

    p {
        padding-bottom: 40px;
        font-size: 22px;
    }
    @media(max-width: 800px){
        width: 100%;
        align-items: center;
        text-align: center;
    }
`

export const Empty = styled.div`
    width: 400px;
`