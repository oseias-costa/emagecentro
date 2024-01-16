"use client";
import { TestimonialsContainer, TestimonialsIcon, TitleBody, Video, VideoBox } from "./testimonials.styles";
import Icon from "@/public/testimonials/testimonials.png"
import VideoImg from "@/public/testimonials/video.png"

export default function Testimonials(){
    return(
        <TestimonialsContainer>
            <TitleBody>
                <TestimonialsIcon src={Icon} alt="Testimonials" />
                <h2>Depoimentos</h2>
                <p>essas pessoas mudaram de vida depois de conhecerem o nosso método 4 fases!</p>
            </TitleBody>
            <VideoBox>
                <Video src={VideoImg} alt="" />
                <Video src={VideoImg} alt="" />
                <Video src={VideoImg} alt="" />
                <Video src={VideoImg} alt="" />
            </VideoBox>
        </TestimonialsContainer>
    )
}