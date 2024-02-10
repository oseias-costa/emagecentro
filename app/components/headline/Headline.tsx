"use client";
import { ButtonHeadline, Content, Description, DivTitle, HeadlineContainer, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headline.styles";
import Photo from '@/public/assets/headline.png'
import Background from '@/public/assets/1_-BG.webp'
import Image from "next/image";
import { useState } from "react";

export default function Headline(){
    const [state, setState] = useState({
        name: "",
        kg: 0,
        wpp: 0
    })
    const message = `Olá, vim do contato do site. Meu nome é ${state.name} e meu número é ${state.wpp}. Gostaria de eliminar ${state.kg} kilos.`

    //55 48 9190-8925

    return(
        <HeadlineContainer>
            <Image
                src={Background}
                alt="Emagrecentro"
                fill={true}
                style={{
                    objectFit: "cover",
                    backgroundSize: "100%"
                }}
            />
            <Content>
                <DivTitle>
                    <Title>Mude seu corpo em 5 semanas</Title>
                </DivTitle>
                <Description>Elimine de 5% a 10% do seu peso já nas primeiras 5 semanas de maneira saudável e consistente com nosso método exclusivo de 4 fases.</Description>
                <TextDestack>Preencha o formulário abaixo e garanta um super desconto no método</TextDestack>
                <InputBox>
                    <InputText onChange={(e) => setState({...state, name: e.target.value})} placeholder="Seu primeiro nome" /><br />
                    <InputText onChange={(e) => setState({...state, wpp: Number(e.target.value)})} placeholder="Seu whatsapp" /><br />
                    <InputText onChange={(e) => setState({...state, kg: Number(e.target.value)})} placeholder="Quantos Quilos você quer eliminar?" />
                </InputBox>
                <ButtonHeadline target="_blank" href={`https://api.whatsapp.com/send?phone=554891908925&text=${message}`}>Enviar</ButtonHeadline>
            </Content>
            <ImgHeadline src={Photo} alt="" />
        </HeadlineContainer>
    )
}
