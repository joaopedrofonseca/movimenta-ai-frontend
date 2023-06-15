import { ExitOutline } from 'react-ionicons'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function Logout() {
    return (
        <Link to="/" style={{color: 'black'}}>
        <StyleDiv>
            <ExitOutline color={'#00000'} height="30px" width="30px" />
            Sair
        </StyleDiv>
        </Link>
    )
}

const StyleDiv = styled.div`
    position: absolute;
    right: 20px;
    top: 17px;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    cursor: pointer;
`