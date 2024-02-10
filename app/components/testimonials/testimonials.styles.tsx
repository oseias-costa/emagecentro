import Image from "next/image";
import styled from "styled-components";

export const TestimonialsContainer = styled.section`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 150px;
`

export const TitleBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 35px;

    h2 {
        padding-top: 20px;
        padding-bottom: 15px;
        color: #01408f;
        font-size: 42px;
        font-weight: 700;
    }

    p {
        color: #01408f;
        font-size: 24px;
        max-width: 500px;
        text-align: center;
    }
`

export const TestimonialsIcon = styled(Image)`

`

export const VideoBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;  
    width: 900px;

    @media(max-width: 800px){
        width: auto;
        padding-left: 20px;
        padding-right: 20px;
        padding-bottom: 20px;
    }  
`

export const Video = styled.video`
  margin: 10px;
  position: relative;
  z-index: 2;
  width: auto;
  height: 500px;
  border-radius: 6px;
  position: relative;
  top: 5px;

  @media(max-width: 800px){
    width: 320px;
    height: 580px;
  }
`;