"use client";
import { ButtonHeadline, Content, Description, HeadlineContainer, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headline.styles";
import Img from '@/public/headline/photo.png'

export default function Headline(){
    return(
        <HeadlineContainer>
            <Content>
                <Title>Mude seu corpo em 5 semanas</Title>
                <Description>Elimine de 5% a 10% do seu peso já nas primeiras 5 semanas de maneira saudável e consistente com nosso método exclusivo de 4 fases.</Description>
                <TextDestack>Preencha o formulário abaixo e garanta um super desconto no método 4 fases</TextDestack>
                <InputBox>
                    <InputText placeholder="Seu primeiro nome" /><br />
                    <InputText placeholder="Seu whatsapp" /><br />
                </InputBox>
                <ButtonHeadline>Agendar Avaliação</ButtonHeadline>
            </Content>
            <ImgHeadline src={Img} alt="" />
        </HeadlineContainer>
    )
}