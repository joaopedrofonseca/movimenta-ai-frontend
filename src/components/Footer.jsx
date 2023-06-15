import NavBar from "../styles/NavBar";
import { AddCircleOutline } from 'react-ionicons'
import { SearchOutline } from 'react-ionicons'
import { CalendarOutline } from 'react-ionicons'
import { AccessibilityOutline } from 'react-ionicons'
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <NavBar>
            <Link to="/home" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                <div>
                    <AccessibilityOutline color={'#00000'} height="30px" width="30px" />
                    Perfil
                </div>
            </Link>
            <Link to="/search" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                <div>
                    <SearchOutline color={'#00000'} height="30px" width="30px" />
                    Procurar
                </div>
            </Link>
            <Link to="/create" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                <div>
                    <AddCircleOutline color={'#00000'} height="30px" width="30px" />
                    Criar
                </div>
            </Link>
            <Link to="/schedule" style={{ textDecoration: 'none', color: 'black', width: '100%', height: '100%' }}>
                <div>
                    <CalendarOutline color={'#00000'} height="30px" width="30px" />
                    Agendados
                </div>
            </Link>
        </NavBar>
    )
}