import styled from "styled-components";

export const GoalContainer = styled.section`
    display: flex;
    background-color: #fff;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;
    @media(max-width: 800px){
        flex-direction: column;
    }
`

export const GoalContent = styled.div`
    width: 600px;
    color: #043c84;
    display: flex;
    flex-direction: column;
    align-items: end;
    text-align: right;

    h2 {
        padding-bottom: 20px;
        font-size: 42px;
    }

    p {
        padding-bottom: 40px;
        font-size: 22px;
    }
    @media(max-width: 800px){
        width: 100%;
        align-items: center;
        text-align: center;
    }
`

export const Empty = styled.div`
    width: 400px;
`