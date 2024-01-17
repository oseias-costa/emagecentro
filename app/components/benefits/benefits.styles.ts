import Image from "next/image";
import { styled } from "styled-components";

export const BenefitsContainer = styled.section`
    padding-top: 80px;
    background-color: #fff;
    text-align: center;
    p {
        color: #043c84;
        font-size: 30px;
        @media(max-width: 800px){
            font-size: 22px;
        }
    }
`

export const BenefitsTitle = styled.h2`
    color: #043c84;
    font-size: 62px;
`

export const BenefitsBlock = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 40px;
`

export const BenefitsItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 280px;
    padding: 30px;
`

export const BenefitIcon = styled(Image)`
    @media(max-width: 800px){
        width: 96px;
    }
`

export const BenefitsText = styled.h3<{fontSize: number}>`
    font-size: ${props => String(props.fontSize) + "px"};
    font-weight: 700;
    padding-top: 8px;
    color: #043c84;
    @media(max-width: 800px){
        width: 96px;
        font-size: ${props => String(props.fontSize - 5) + "px"};
    }
`