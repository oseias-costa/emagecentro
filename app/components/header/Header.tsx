"use client";
import { BenefitsContainer, ButtonHeader, Icon, IconBox, Link, Logo, Menu, Nav, SocialMidia } from "./header.styles";
import LogoImage from "@/public/assets/logo.png"
import Instagram from "@/public/assets/instagram.svg"
import Whatsapp from "@/public/assets/whatsapp.svg"
import { message } from "../beforeeafter/BeforeEAfter";

export default function Header(){
    return(
        <BenefitsContainer>
            <Logo src={LogoImage} alt="Logo Emagecentro - Centro Especializado em Emagrecimento e Saúde" />
            <Menu>
                <Nav>
                    <Link href="#depoimentos">Depoimentos</Link>
                    <Link href="#inovacao">Inovação</Link>
                    <Link href="#sobre-nos">sobre nós</Link>
                    <Link href="#resultados">resultados</Link>
                    <Link href="#endereco">endereço</Link>
                </Nav>
                <ButtonHeader   
                    target="_blank"  
                    href={`https://api.whatsapp.com/send?phone=554891908925&text=${message}`}
            >Agendar avaliação</ButtonHeader>
                <SocialMidia>
                    <a href="https://www.instagram.com/emagrecentro.tubarao/"  target="_blank">
                    <IconBox>
                        <Icon src={Instagram} alt="Instagram Emagrecentro" />
                    </IconBox>
                    </a>
                    <a href={`https://api.whatsapp.com/send?phone=554891908925&text=${message}`} target="_blank">
                    <IconBox>
                        <Icon src={Whatsapp} alt="Whatsapp Emagrecentro" />
                    </IconBox>
                    </a>
                </SocialMidia>
            </Menu>
        </BenefitsContainer>
    )
}