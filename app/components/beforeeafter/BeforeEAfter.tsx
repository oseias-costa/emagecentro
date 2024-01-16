"use client";
import { BeforeEAfterContainer, ButtonResults, ImgTitle, ResultsBlock, ResultsNumbers, ResultsNumbersImg, ShapeTop, TitleResult } from "./beforeEAfter.styles";
import ShapeTopOne from '@/public/beforeeafter/shape.png'
import ShapeBottom from '@/public/beforeeafter/shapebottom.png'
import Title from '@/public/beforeeafter/antesedepois.png'
import { results } from "./resultsData";
import Image from "next/image";

export default function BeforeEAfter(){
    const resultsItems = results.map(item => {
        return(
            <ResultsBlock key={item.id} direction={item.direction}>
                <Image src={item.image} alt="" />
                <ResultsNumbers>
                    <TitleResult fontSize={item.fontSize}>{item.name}</TitleResult>
                    <ResultsNumbersImg src={item.results} alt="" />
                </ResultsNumbers>
            </ResultsBlock>
        )
    })

    return(
        <BeforeEAfterContainer>
            <ShapeTop src={ShapeTopOne} alt="" />
            <ImgTitle src={Title} alt="" />
            {resultsItems}
            <ButtonResults>Quero ter esses resultados</ButtonResults>
            <ShapeTop src={ShapeBottom} alt="" />
        </BeforeEAfterContainer>
    )
}