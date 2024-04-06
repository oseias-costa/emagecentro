"use client";
import { Error, ButtonHeadline, Content, Description, DivTitle, HeadlineContainer, ImgHeadline, InputBox, InputText, TextDestack, Title } from "./headline.styles";
import Photo from '@/public/assets/headline.png'
import Background from '@/public/assets/1_-BG.webp'
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Headline(){
    const [state, setState] = useState({
        name: "",
        kg: 0,
        wpp: 0
    })
    const [ error, setError ] = useState({
        type: "",
        message: ""
    })
    
    const message = `Olá, vim do contato do site. Meu nome é ${state.name} e meu número é ${state.wpp}. Gostaria de eliminar ${state.kg} kilos.`

    function removerCaracteresEspeciais(string: string) {
        return string.replace(/[^a-zA-Z0-9]/g, "");
    }

    const handleSend = () => {
        const phoneRegex = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)(?:((?:9\s?\d|[2-9])\d{3})\-?(\d{4}))$/
        const phoneVerify = String(state.wpp).match(phoneRegex)
    
        if(state.name === ""){
            return setError({
                type: "name",
                message: "Preencha seu nome"
            })
        }
        if(state.name.length <= 3){
            return setError({
                type: "name",
                message: "O nome precisa ter no mínimo 3 caracteres"
            })
        }

        
        if(state.wpp === 0){
            return setError({
                type: "phone",
                message: "O número de telefone não é válido"
            })
        }

        
        if(!phoneVerify){
            return setError({
                type: "phone",
                message: "O número de telefone não é válido"
            })
        }
        if(state.kg < 30){
            return setError({
                type: "weight",
                message: "O peso é inválido"
            })
        }
    
        return window.open(`https://api.whatsapp.com/send?phone=554891908925&text=${message}`, '_blank')
    }

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
                    <InputText 
                        onChange={(e) => { 
                            setError({type:"", message: ""})
                            setState({...state, name: removerCaracteresEspeciais(e.target.value)})
                        }} 
                        placeholder="Seu primeiro nome" /><br />

                    <InputText 
                        type="number"
                        onChange={(e) => {
                            setError({type:"", message: ""})
                            setState({...state, wpp: Number(e.target.value)})
                        }} 
                        placeholder="Seu whatsapp" /><br />
                    <InputText 
                        type="number"
                        onChange={(e) => {
                            setError({type:"", message: ""})
                            setState({...state, kg: Number(e.target.value)})
                        }} 
                        placeholder="Quantos Quilos você quer eliminar?" />
                </InputBox>
                <Error>{error.message ? error.message : ""}</Error>
                <ButtonHeadline onClick={handleSend}>Enviar</ButtonHeadline>
            </Content>
            <ImgHeadline src={Photo} alt="" />
        </HeadlineContainer>
    )
}
