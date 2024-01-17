"use client";

import Button from "../global/Button";
import { Empty, GoalContainer, GoalContent } from "./goalStyles";

export default function Goal(){
    return(
        <GoalContainer>
            <Empty />
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
    )
}