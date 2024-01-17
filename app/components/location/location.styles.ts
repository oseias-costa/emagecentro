import styled from "styled-components";
import Button from "../global/Button";

export const LocationContainer = styled.section`
    background-color: #003577;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 80px;
    padding-bottom: 80px;
    padding-left: 20px;
    padding-right: 20px;

    p {
        color: #04244d;
        background-color: #72faba;
        font-size: 20px;
        margin-top: 40px;
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 3px;
        padding-bottom: 3px;
        text-align: center;
    }

    iframe {
        width: 900px;
        height: 350px;
        padding-top: 25px;
        margin-bottom: 40px;
        border-radius: 55px;

        @media(max-width: 900px){
            width: 100%;
            height: 350px;
        }
    }

    @media(max-width: 800px){
    }

`

export const TitleLocation = styled.div`
    max-width: 500px;
    text-align: center;

    h2 {
        color: #fff;
        display: inline;
        font-size: 40px;
    }
    
    & h2:nth-child(2){
        background-color: #04244d;
    }
`

export const ButtonLocation = styled.a`
    text-align: center;
    background-color: #72faba;
    font-size: 28px;
    color: #04244d;
    font-weight: 700;
    border-bottom: 4px solid #4ab888;
    border-radius: 70px;
    padding-left: 80px;
    padding-right: 80px;
    padding-top: 12px;
    padding-bottom: 12px;

    @media(max-width: 800px){
        font-size: 24px;
        padding-left: 40px;
        padding-right: 40px;
    }
`