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
<<<<<<< HEAD
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
=======
        width: calc(100% - 40px);    
    }
`

export const ResultsBlock = styled.div<{direction: string}>`
    padding-top: 25px;
    display: flex; 
    flex-direction: ${props => props.direction};

    @media(max-width: 800px){
        flex-direction: column-reverse;
        align-items: center;
        padding-top: 40px;
        padding: 0px;
        padding-left: 20px;
        padding-right: 20px;
    }
`

export const ResultsNumbers = styled.div`
    @media(max-width: 800px){
        padding-top: 40px;
    }
`

export const ResultsNumbersImg = styled(Image)`
    position: relative;
    top: 90px;
    @media(max-width: 800px){
        top: 0px;
        border-radius: 48px;
        width: 100%;
>>>>>>> ce9b714f7a812ca37fb092f656058b4d3a0a0e3b
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
<<<<<<< HEAD
`

export const Shape = styled(Image)`
    width: 100%;
    display: flex;
    height: 100px;

    @media(max-width: 800px){
        height: 40px;
=======
    text-align: center;

    @media(max-width: 800px){
        padding-left: 40px;
        padding-right: 40px;
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const ImageResult = styled(Image)`
    @media(max-width: 800px){
        width: 100%;
        height: auto;
>>>>>>> ce9b714f7a812ca37fb092f656058b4d3a0a0e3b
    }
`