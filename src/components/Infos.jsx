import styled from "styled-components"

export default function Infos() {
    return (
        <Container>
            <Box>
                <h2>Atividades feitas</h2>
                <h3>0</h3>
            </Box>
            <Box>
                <h2>Atividades criadas</h2>
                <h3>0</h3>
            </Box>
            <Box>
                <h2>Atividade preferida</h2>
                <h4>Basquete</h4>
            </Box>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Box = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding-left: 15px;
    width: 470px;
    height: 120px;
    border-radius: 5px;
    border: solid;
    border-color: gray;
    border-width: 1px;
    margin-top: 30px;
    margin-left: 30px;
    h2{
        font-size: 30px;
        margin-right: 200px;
    }
    h3{
        font-size: 25px;
    }
    h4{
        font-size: 30px;
        margin-right: 10px;
    }
`