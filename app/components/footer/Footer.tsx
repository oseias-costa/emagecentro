"use client";
import * as S from "./footer.styles";
import Logo from "@/public/assets/logo.png";

export default function Footer(){
    return(
        <S.FooterContainer>
            <S.LogoFooter src={Logo} alt='Emagrecentro Tubarão - Logo' />
            <S.Adress>
                <h3>Endereço</h3>
                <p>Av. Marcolino Martins Cabral, 1285 </p>
                <p>Sala 01, Centro - Tubarão/SC</p>
            </S.Adress>
            <S.Phone>
                <h3>Telefone</h3>
                <p>(48)9 9190-8925</p>
            </S.Phone>
        </S.FooterContainer>
    )
}