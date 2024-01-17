import Image from "next/image";
import { styled } from "styled-components";

export const HeadlineContainer = styled.section`
    display: flex;
    background-color: #01408f;
    justify-content: center;
    @media(max-width: 800px){
        flex-wrap: wrap;
    }
`

export const Content = styled.div`
   max-width: 600px;
`

export const Title = styled.h1`
    color: #6ef2b8;
    font-size: 64px;
    font-weight: 900;
`

export const Description = styled.h3`
    color: #fff;
    font-weight: 600;
    font-size: 22px;
`

export const TextDestack = styled.p`
    background-color: #6ef2b8;
    color: #04244d;
    font-size: 14px;
    padding: 2px;
    margin-top: 30px;
    margin-bottom: 10px;
`

export const InputText = styled.input`
    border-radius: 3px;
    height: 30px;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 10px;
`

export const ButtonHeadline = styled.a`
    background-color: #6ef2b8;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-right: 7px;
    padding-left: 7px;
    margin-top: 10px;
    border-radius: 6px;
    cursor: pointer;
    color: #04244d;
    border: 1px solid #6ef2b8;
    transition: 0.2s linear;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
        color: #6ef2b8;
        background-color: transparent;
    }
`

export const ImgHeadline = styled(Image)`
    @media(max-width: 800px){
        width: 100%;
    }
`

export const InputBox = styled.div`
    padding-bottom: 20px;
    // margin-bottom: 40px;
`