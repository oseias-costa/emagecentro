"use client";
import { BenefitsContainer, ButtonHeader, Icon, IconBox, Link, Logo, Menu, Nav, SocialMidia } from "./header.styles";
import LogoImage from "@/public/assets/logo.png"
import Instagram from "@/public/header/instagram.svg"
import Whatsapp from "@/public/header/whatsapp.svg"

export default function Header(){
    return(
        <BenefitsContainer>
            <Logo src={LogoImage} alt="Logo Emagecentro - Centro Especializado em Emagrecimento e Saúde" />
            <Menu>
                <Nav>
                    <Link>Depoimentos</Link>
                    <Link>Inovação</Link>
                    <Link>sobre nós</Link>
                    <Link>resultados</Link>
                    <Link>endereço</Link>
                </Nav>
                <ButtonHeader>Agendar avaliação</ButtonHeader>
                <SocialMidia>
                    <IconBox>
                        <Icon src={Instagram} alt="Instagram Emagrecentro" />
                    </IconBox>
                    <IconBox>
                        <Icon src={Whatsapp} alt="Whatsapp Emagrecentro" />
                    </IconBox>
                </SocialMidia>
            </Menu>
        </BenefitsContainer>
    )
}