"use client";
import { ButtonLocation, LocationContainer, TitleLocation } from "./location.styles";

export default function Location(){
    return(
        <LocationContainer>
            <TitleLocation>
                <h2>Venha nos visitar e faça uma </h2><h2>avaliação grátis!</h2>
            </TitleLocation>
            <p>Av. Marcolino Martins Cabral, 1285 - Sala 01, Centro - Tubarão/SC</p>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.941881447169!2d-49.00728522450467!3d-28.481296875747688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952143a0bb161499%3A0x99050b2e242edb0d!2sEmagrecentro%20%7C%20Cl%C3%ADnica%20de%20Emagrecimento%20e%20Est%C3%A9tica%20em%20Tubar%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1705503132264!5m2!1spt-BR!2sbr" loading="lazy"></iframe>
            <ButtonLocation>Garantir desconto no método 4 fases</ButtonLocation>
        </LocationContainer>
    )
}