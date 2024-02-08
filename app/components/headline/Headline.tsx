"use client";
import { ButtonHeadline, Content, Description, DivTitle, HeadlineContainer, Img, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headline.styles";
import Photo from '@/public/assets/headline.png'
import Background from '@/public/assets/1_-BG.webp'
import { ImgBackground } from "../about/about.styles";

export default function Headline(){
    return(
        <HeadlineContainer>
            <ImgBackground
                src={Background}
                alt="Emagrecentro"
                fill={true}
                style={{ 
                    objectFit: "cover"
                }}
            />
            <Content>
                <DivTitle>
                    <Title>Mude seu corpo em 5 semanas</Title>
                </DivTitle>
                <Description>Elimine de 5% a 10% do seu peso já nas primeiras 5 semanas de maneira saudável e consistente com nosso método exclusivo de 4 fases.</Description>
                <TextDestack>Preencha o formulário abaixo e garanta um super desconto no método</TextDestack>
                <InputBox>
                    <InputText placeholder="Seu primeiro nome" /><br />
                    <InputText placeholder="Seu whatsapp" /><br />
                    <InputText placeholder="Quantos Quilos você quer eliminar?" />
                </InputBox>
                <ButtonHeadline>Enviar</ButtonHeadline>
            </Content>
            <ImgHeadline src={Photo} alt="" />
        </HeadlineContainer>
    )
}