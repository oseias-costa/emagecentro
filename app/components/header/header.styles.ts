import Image from "next/image";
import { styled } from "styled-components";

export const BenefitsContainer = styled.header`
    display: flex;
    background-color: #01408f;
    align-items: center;
    justify-content: center;
`

export const Logo = styled(Image)`
    
`

export const Menu = styled.div`
    display: flex;
    align-items: center;
`

export const Nav = styled.nav`

`

export const Link = styled.a`
    text-transform: uppercase;
    color: #fff;
    cursor: pointer;
    padding: 10px;
    font-size: 14px;
`

export const ButtonHeader = styled.a`
    text-transform: uppercase;
    font-size: 14px;
    background-color: #6ef2b8;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    color: #04244d;
    border: 1px solid #6ef2b8;
    transition: 0.2s linear;

    &:hover {
        color: #6ef2b8;
        background-color: transparent;
    }
`

export const SocialMidia = styled.div`
    display: flex;
`

export const Icon = styled(Image)`

` 
export const IconBox = styled.div`
    border-radius: 120px;
    background-color: #04244d;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`