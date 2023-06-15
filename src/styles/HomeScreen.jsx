import styled from "styled-components";


export const HomeScreen = styled.div`
    background-color:  #FF8C00;
    width: 100vw;
    height: 100vh;
    min-height: 667px;
    min-width: 520px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
`

export const Dashboard = styled.div`
        background-color: white;
        width: 75vw;
        height: 85vh;
        min-width: 500px;
        box-sizing: border-box;
        border-radius: 5px;
        position:relative;
        box-shadow: 0 0 5em gold;
        h1{
            margin-top: 25px;
            margin-left: 20px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 34px;
            line-height: 40px;
            color: #000000;
        }
`