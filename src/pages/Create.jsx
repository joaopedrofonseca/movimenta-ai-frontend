import { HomeScreen, Dashboard } from "../styles/HomeScreen";
import Footer from "../components/Footer";
import Logout from "../components/Logout";
import styled from "styled-components";

export default function Create() {

    return (
        <HomeScreen>
            <Dashboard>
                <h1>Crie uma atividade em grupo!</h1>
                <Logout />
                <Container>
                    <input placeholder="Nome da atividade" required></input>
                    <input placeholder="Horário" required></input>
                    <input placeholder="Local" required></input>
                    <input placeholder="Integrantes" required></input>
                    <button type="submit">Criar</button>
                </Container>
                <Footer />
            </Dashboard>
        </HomeScreen>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 400px;
    margin-top: 70px;
    margin-left: 180px;
    box-sizing: border-box;
    padding: 20px;
    input{
        width: 326px;
        height: 58px;
        border-radius: 5px;
        border: solid;
        border-width: 1px;
        margin-bottom: 13px;
        box-sizing: border-box;
        padding: 15px 18px;
        font-family: 'Raleway';
            color: black;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;

        ::placeholder{
            font-family: 'Raleway';
            color: darkgrey;
            font-weight: 400;
            font-size: 20px;
            line-height: 23px;
        }
    }
    button{
        width: 326px;
        height: 46px;
        border: none;
        border-radius: 5px;
        background-color: #FFA500;
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 700;
        font-size: 20px;
        line-height: 23px;
        color: #FFFFFF;
        cursor: pointer;
    }

`;
