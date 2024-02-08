import Image from "next/image";
import styled from "styled-components";

export const AboutContainer = styled.section`
    display: flex;
    color: #fff;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 80px;
    padding-bottom: 80px;
    position: relative;   

    @media(max-width: 800px){
        flex-wrap: wrap-reverse;
        padding-top: 40px;
        padding-bottom: 40px; 
    }
`

export const AboutImg = styled(Image)`
    position: relative;
    width: 400px;
    height: auto;

    @media(max-width: 800px){
        width: 80%;
        height: auto;
        margin-top: 40px;    
    }
`

export const AbountContent = styled.div`
    padding-top: 40px;
    max-width: 500px;
    position: relative;

    h2 {
        font-size: 48px;
    }

    p {
        padding-top: 30px;
        font-size: 19px;
    }

    @media(max-width: 800px){
        text-align: center;
    }
`

export const ImgBackground = styled(Image)`
  background-size: 100%;
  height: auto;
`;