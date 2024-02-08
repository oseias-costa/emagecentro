"use client";
import Image from "next/image";
import { AbountContent, AboutContainer, AboutImg } from "./about.styles";
import Sheila from "@/public/assets/sheila.png"
import Background from '@/public/assets/4_-BG.webp'

export default function About(){
    return(
        <AboutContainer>
            <Image 
                src={Background}
                alt="Emagrecentro"
                fill={true}
                style={{
                    backgroundSize: "100%",
                    objectFit: "cover"
                }}
            />
            <AbountContent>
                <h2>Sobre nós</h2>
                <p>Uma empresa pioneira no mercado brasileiro que investe em pesquisa,
                    inovação e tecnologia, guiando-se sempre pelos pilares da ciência e da ética,
                    para oferecer excelência em seus serviços, produtos e tratamentos de estética, saúde e bem-estar.
                </p>
                <p>Fundada há 37 anos, atualmente somos a maior rede de clínicas de emagrecimento e estética das Amérias,
                    com 294 unidades, estamos presentes em todos os estados do Brasil. 
                </p>
                <p>A unidade Emagrecentro em Tubarão/SC foi inaugurada em 2019 e conta com profissionais
                    especializados que vão proporcionar a você o melhor atendimento e resultado.
                </p>
                <p>Conte com a Emagrecentro para atingir seus objetivos!

                </p>
            </AbountContent>
            <AboutImg src={Sheila} alt="" />
        </AboutContainer>
    )
}