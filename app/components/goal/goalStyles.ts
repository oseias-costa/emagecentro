import styled from "styled-components";

export const GoalContainer = styled.section`
    display: flex;
    background-color: #fff;
    padding-top: 80px;
    padding-bottom: 80px;
`

export const GoalContent = styled.div`
    width: 600px;
    color: #043c84;
    display: flex;
    flex-direction: column;
    align-items: end;

    h2 {
        padding-bottom: 20px;
        font-size: 42px;
        text-align: right;
    }

    p {
        padding-bottom: 40px;
        font-size: 22px;
        text-align: right;
    }
`

export const Empty = styled.div`
    width: 400px;
`