"use client";

import Image from "next/image";
import Button from "../global/Button";
import { Empty, GoalContainer, GoalContent, Img } from "./goalStyles";
import Background from '@/public/assets/5_-BG.webp'
import GoalPhoto from '@/public/assets/goal.png'
import { ImgBackground } from "../about/about.styles";

export default function Goal(){
    return(
        <>
        
        <GoalContainer>
        <Img src={Background} fill={true} alt="Resultados Emagrecentro" />
            <Image 
                src={GoalPhoto}  
                alt="Emagrecentro - Alcance seus " 
                style={{
                    width: 400,
                    height: "auto"
                }}
            />
            <GoalContent>
                <h2>Alcance seu Resultados</h2>
                <p><strong>Perca de 5% a 10% do seu peso já nas primeiras semanas</strong>
                    e alcance seu objetivo final comprometendo com nosso método
                    exclusivo de 4 fases. <strong>Nosso método 4 fases possui certificado
                    de comprovação científica internacional.</strong>
                </p>
                <Button text="Agendar avaliação gratuita" />
            </GoalContent>
        </GoalContainer>
        </>
    )
}