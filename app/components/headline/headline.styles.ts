import Image from "next/image";
import { styled } from "styled-components";

export const HeadlineContainer = styled.section`
    display: flex;
    padding-top: 104.44px;
    justify-content: center;
    position: relative;

    @media(max-width: 800px){
        flex-direction: column-reverse;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const Content = styled.div`
   max-width: 600px;
   position: relative;

   @media(max-width: 800px){
    position: relative;
    bottom: 100px;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
   }
`

export const DivTitle = styled.div`
    background: rgb(0,42,103);
    background: linear-gradient(0deg, rgba(0,42,103,0.9566160520607375) 57%, rgba(0,42,103,0.6919739696312364) 81%, rgba(0,42,103,0) 100%);
`

export const Title = styled.h1`
    color: #fff;
    font-size: 64px;
    font-weight: 900;
    padding-bottom: 20px;

    @media(max-width: 800px){
        text-align: center;
        font-size: 52px;
    }
`

export const Description = styled.h3`
    color: #fff;
    font-weight: 600;
    font-size: 22px;

    @media(max-width: 800px){
        text-align: center;
        font-size: 20px;
    }
`

export const TextDestack = styled.p`
    background-color: #04244d;
    color: #fff;
    font-size: 14px;
    padding: 2px;
    margin-top: 30px;
    margin-bottom: 10px;

    @media(max-width: 800px){
        text-align: center;
    }
`

export const InputText = styled.input`
    border-radius: 3px;
    height: 40px;
    width: 300px;
    margin-bottom: 10px;
    padding-left: 10px;
    font-size: 16px;
`

export const ButtonHeadline = styled.a`
    background-color:  #04244d;
    width: 300px;
    display: block;
    padding-top: 10px;
    text-align: center;
    padding-bottom: 10px;
    padding-right: 7px;
    padding-left: 7px;
    border-radius: 6px;
    cursor: pointer;
    color: #fff;
    border: 1px solid #fff;
    transition: 0.2s linear;
    font-weight: 600;
    text-transform: uppercase;

    &:hover {
        background-color: transparent;
    }
`

export const ImgHeadline = styled(Image)`
    width: 500px;
    height: auto;
    position: relative;

    @media(max-width: 800px){
        width: 100%;
        height: auto;
    }
`

export const InputBox = styled.div`
    padding-bottom: 20px;
    // margin-bottom: 40px;
`

export const Img = styled(Image)`
  background-size: 100%;
  height: auto;
`;