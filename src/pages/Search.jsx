import { HomeScreen, Dashboard } from "../styles/HomeScreen";
import Footer from "../components/Footer";
import Logout from "../components/Logout";
import styled from "styled-components";


export default function Search() {
    return (
        <HomeScreen>
            <Dashboard>
                <h1>Procure uma atividade em grupo!</h1>
                <Container>
                    <Box>
                        <h1>Basquete</h1>
                        <h2>Horário: 21:00</h2>
                        <h2>Local: Praça</h2>
                        <h2>Integrantes: 6/10</h2>
                        <Button>
                            Entrar na atividade
                        </Button>
                    </Box>
                    <Box>
                        <h1>Basquete</h1>
                        <h2>Horário: 21:00</h2>
                        <h2>Local: Praça</h2>
                        <h2>Integrantes: 6/10</h2>
                        <Button>
                            Entrar na atividade
                        </Button>
                    </Box>                    <Box>
                        <h1>Basquete</h1>
                        <h2>Horário: 21:00</h2>
                        <h2>Local: Praça</h2>
                        <h2>Integrantes: 6/10</h2>
                        <Button>
                            Entrar na atividade
                        </Button>
                    </Box>                    <Box>
                        <h1>Basquete</h1>
                        <h2>Horário: 21:00</h2>
                        <h2>Local: Praça</h2>
                        <h2>Integrantes: 6/10</h2>
                        <Button>
                            Entrar na atividade
                        </Button>
                    </Box>

                </Container>
                <Logout />
                <Footer />
            </Dashboard>
        </HomeScreen>
    )
}

const Container = styled.div`
    margin-top: 60px;
    display: flex;
    width: 95%;
    box-sizing: border-box;
    padding-right: 10px;
    overflow-x: scroll;
    margin-left: 10px;
`;

const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
    width: 400px;
    height: 280px;
    border-radius: 5px;
    border: solid;
    border-color: gray;
    border-width: 1px;
    margin-top: 30px;
    margin-left: 30px;
    h2{
        font-size: 20px;
        color: gray;
        margin-left: 30px;
        margin-top: 10px;
    }
`

const Button = styled.div`
    margin-top: 20px;
    cursor: pointer;
    width: 250px;
    margin-right: 15px;
    height: 70px;
    border-radius: 5px;
    background-color: orange;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
`