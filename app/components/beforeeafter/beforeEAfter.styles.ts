import Image from "next/image";
import styled from "styled-components";
import Button from "../global/Button";

export const BeforeEAfterContainer = styled.section`
    background-color: #043c84;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const ShapeTop = styled(Image)`
    display: flex;
    width: 100%;
`

export const ImgTitle = styled(Image)`
    position: relative;
    right: 189.5px;
    @media(max-width: 800px){
        right: 0px;
    }
`

export const ResultsBlock = styled.div<{direction: string}>`
    padding-top: 25px;
    display: flex; 
    flex-direction: ${props => props.direction};

    @media(max-width: 800px){
        flex-direction: column-reverse;
        padding-top: 0px;
        align-items: center;
        padding-top: 40px;
    }
`

export const ResultsNumbers = styled.div`

`

export const ResultsNumbersImg = styled(Image)`
    position: relative;
    top: 90px;
    @media(max-width: 800px){
        top: 0px;
        border-radius: 34px;
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
        padding-bottom: 25px;
    }
`

export const ButtonResults = styled.a`
    position: relative;
    top: 60px;
    background-color: #72faba;
    font-size: 28px;
    color: #0c4a87;
    font-weight: 700;
    border-bottom: 4px solid #4ab888;
    border-radius: 70px;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 12px;
    padding-bottom: 12px;
`