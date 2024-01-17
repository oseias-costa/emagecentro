"use client";
import { benefitsData } from "./benefits-data";
import { BenefitIcon, BenefitsBlock, BenefitsContainer, BenefitsItem, BenefitsText, BenefitsTitle } from "./benefits.styles";

export default function Benefits(){
    const benefits = benefitsData.map(item => {
        return (
        <BenefitsItem key={item.id}>
            <BenefitIcon src={item.icon} alt={item.text} />
            <BenefitsText fontSize={item.fontSize}>{item.text}</BenefitsText>    
        </BenefitsItem> )       
    })

    return(
        <BenefitsContainer>
            <BenefitsTitle>Inovação</BenefitsTitle>
            <p>Aqui você perde peso de forma natural e saudável!</p>
            <BenefitsBlock>{benefits}</BenefitsBlock>
        </BenefitsContainer>
    )
}