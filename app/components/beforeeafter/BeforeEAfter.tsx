"use client";
<<<<<<< HEAD
import { BeforeEAfterContainer, ButtonResults, Img, ImgDesk, ImgMobile, ImgTitle, Shape } from "./beforeEAfter.styles";
import NilceiaDesk from '@/public/assets/nilceia-desk.png'
import MarcioDesk from '@/public/assets/marcio.png'
import Gisele from '@/public/assets/gisele.png'
import Title from '@/public/assets/antes-e-depois.png'
import GiseleMobile from '@/public/assets/gisele-mobile.png'
import MarcioMobile from '@/public/assets/marcio-mobile.png'
import ShapeTop from '@/public/assets/shape-after-and-before-top.jpg'
import ShapeBottom from '@/public/assets/shape-after-and-before-bottom.jpg'
import NilceiaMobile from '@/public/assets/nilceia-mobile.png'
import Background from "@/public/assets/backgroun3.jpg";
import Image from "next/image";

export default function BeforeEAfter(){
=======
import { BeforeEAfterContainer, ButtonResults, ImageResult, ImgTitle, ResultsBlock, ResultsNumbers, ResultsNumbersImg, ShapeTop, TitleResult } from "./beforeEAfter.styles";
import ShapeTopOne from '@/public/beforeeafter/shape.png'
import ShapeBottom from '@/public/beforeeafter/shapebottom.png'
import Title from '@/public/beforeeafter/antesedepois.png'
import { results } from "./resultsData";
import Image from "next/image";

export default function BeforeEAfter(){
    const resultsItems = results.map(item => {
        return(
            <ResultsBlock key={item.id} direction={item.direction}>
                <ImageResult src={item.image} alt="" />
                <ResultsNumbers>
                    <TitleResult fontSize={item.fontSize}>{item.name}</TitleResult>
                    <ResultsNumbersImg src={item.results} alt="" />
                </ResultsNumbers>
            </ResultsBlock>
        )
    })

>>>>>>> ce9b714f7a812ca37fb092f656058b4d3a0a0e3b
    return(
        <>
        <Shape 
            src={ShapeTop}  
            alt="Emagrecentro Tubarão SC"
        />
        <BeforeEAfterContainer>
            <Img src={Background} 
                alt="Emagrecentro"
                fill={true}
                style={{ objectFit: "cover" }}
            />
            <ImgTitle src={Title} alt="" />
            <ImgDesk src={NilceiaDesk} alt="Emagrecentro Resultado Nilceia" />
            <ImgDesk src={MarcioDesk} alt="Emagrecentro Resultado Marcio" />
            <ImgDesk src={Gisele} alt="Emagrecentro Resultado Gisele" />
            <ImgMobile src={GiseleMobile} alt="Emagrecentro Resultado Nilceia" />
            <ImgMobile src={MarcioMobile} alt="Emagrecentro Resultado Marcio" />
            <ImgMobile src={NilceiaMobile} alt="Emagrecentro Resultado Gisele" />
            <ButtonResults>Quero ter esses resultados</ButtonResults>
        </BeforeEAfterContainer>
            <Shape 
                src={ShapeBottom} 
                alt="" 
            />
        </>
    )
}