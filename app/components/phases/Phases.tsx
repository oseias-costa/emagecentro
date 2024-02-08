import Image from "next/image"
import styled from "styled-components"
import Detox from '@/public/assets/detox.png'
import Eliminacao from '@/public/assets/eliminacao-de-peso.png'
import Reeducacao from '@/public/assets/educacao-alimentar.png'
import Manutencao from '@/public/assets/manutencao.png'

export default function Phases(){
    return(
        <Container>
            <h2>Quais são as 4 fases do método</h2>
            <div className="items">
                <Item>
                    <Image src={Detox} alt="Método Emagrecentro Tubarão" />
                    <h3>Detox</h3>
                    <p>Duração de 1 semana: fase de desentoxicação onde o cliente emagrece em média 3% do seu peso corporal</p>
                </Item>
                <Item>
                    <Image src={Eliminacao} alt="Método Emagrecentro Tubarão" />
                    <h3>Eliminação de Peso</h3>
                    <p>Duração de 4 semanas: fase de emagrecimento rápido onde o cliente elimina em média 5% à 7% de seu peso corporal</p>
                </Item>
                <Item>
                    <Image src={Reeducacao} alt="Método Emagrecentro Tubarão" />
                    <h3>Reeducação Alimentar</h3>
                    <p>Duração de 3 semanas: fase de reeducação alimentar para reentroduzir carboidratos de baixo índices glicêmicos</p>
                </Item>
                <Item>
                    <Image src={Manutencao} alt="Método Emagrecentro Tubarão" />
                    <h3>Manutenção</h3>
                    <p>Duração de 16 semanas: fase de Equilíbrio para o cliente manter uma alimentação saudável e evitar o efeito sanfona</p>
                </Item>
            </div>
        </Container>
    )
}

const Container = styled.section`

`

const Item = styled.div`

`