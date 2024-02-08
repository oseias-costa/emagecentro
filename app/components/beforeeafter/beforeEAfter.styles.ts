import Image from "next/image";
import styled from "styled-components";

export const BeforeEAfterContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-bottom: 100px;

    @media(max-width: 900px){
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Img = styled(Image)`
    background-size: 100%;
    height: auto;
`

export const ShapeTop = styled(Image)`
    display: flex;
    width: 100%;
`

export const ImgTitle = styled(Image)`
    width: 300px;
    height: auto;
    position: relative;
    right: 150px;
    margin-top: 60px;
    
    @media(max-width: 800px){
        right: 0px;
        width: 250px;
    }
`

export const ImgDesk = styled(Image)`
    width: 900px;
    height: auto;
    position: relative;
    margin-top: 40px;

    @media(max-width: 900px){
        display: none;
    }
`

export const ImgMobile = styled(Image)`
    display: none;
    position: relative;

    @media(max-width: 900px){
        width: 100%;
        position: relative;
        height: auto;
        margin-top: 80px;
        display: block;
    }
`

export const TitleResult = styled.h3<{fontSize: string}>`
    font-size: ${props => props.fontSize};
    color: #fff;
    position: relative;
    top: 60px;
    padding-left: 25px;
    @media(max-width: 800px){
        top: 0px;
        text-align: center;
    }
`

export const ButtonResults = styled.a`
    position: relative;
    top: 60px;
    background-color: #002966;
    font-size: 28px;
    color: #FEFEFE;
    font-weight: 700;
    border-bottom: 4px solid #0048A6;
    border-radius: 70px;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 12px;
    padding-bottom: 12px;
    transition: .2s linear;
    cursor: pointer;
    text-align: center;

    &:hover {
        background-color: #FEFEFE;
        color: #002966;
    }

    @media(max-width: 800px){
        font-size: 20px;
        padding-left: 40px;
        padding-right: 40px;
    }
`

export const Shape = styled(Image)`
    width: 100%;
    display: flex;
    height: 100px;

    @media(max-width: 800px){
        height: 40px;
    }
`