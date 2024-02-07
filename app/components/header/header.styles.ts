import Image from "next/image";
import { styled } from "styled-components";

export const BenefitsContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px;
    position: absolute;
    z-index: 2; 

    @media(max-width: 800px){
        margin: 0 auto;
    }
`

export const Logo = styled(Image)`
<<<<<<< HEAD
    width: 300px;
    height: auto;
    margin-right: 20px;

    @media(max-width: 800px){
        margin-right: 0px;
=======
    @media(max-width: 800px){
        width: 100%;
>>>>>>> ce9b714f7a812ca37fb092f656058b4d3a0a0e3b
    }
`

export const Menu = styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 800px){
        display: none;
    }
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
    background-color: #04244d;
    padding: 10px;
    border-radius: 6px;
    cursor: pointer;
    margin-left: 20px;
    margin-right: 20px;
    color: #fff;
    border: 3px solid #04244d;
    transition: 0.2s linear;
    text-align: center;

    &:hover {
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