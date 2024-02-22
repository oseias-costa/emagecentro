"use client";
import { TestimonialsContainer, TestimonialsIcon, TitleBody, Video, VideoBox } from "./testimonials.styles";
import Icon from "@/public/testimonials/testimonials.png"
import Button from "../global/Button";

export default function Testimonials(){
    return(
        <TestimonialsContainer id="depoimentos">
            <TitleBody>
                <TestimonialsIcon src={Icon} alt="Testimonials" />
                <h2>Depoimentos</h2>
                <p>essas pessoas mudaram de vida depois de conhecerem o nosso método 4 fases!</p>
            </TitleBody>
            <VideoBox>
            <Video
                controls
                src="https://www.emagrecentrotubarao.com.br/assets/1.mp4"
            ></Video>
                <Video 
                    controls
                    src="https://www.emagrecentrotubarao.com.br/assets/2.mp4" />
                <Video controls src="https://www.emagrecentrotubarao.com.br/assets/3.mp4" />
                <Video controls src="https://www.emagrecentrotubarao.com.br/assets/4.mp4" />
            </VideoBox>
            <Button text="Quero mudar de vida" />
        </TestimonialsContainer>
    )
}