import Image from "next/image";
import styled from "styled-components";

export const TestimonialsContainer = styled.section`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
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

`

export const Video = styled(Image)`
    
`