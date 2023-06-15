import Screen from "../components/Screen"
import { Link } from "react-router-dom"

export default function Login() {

    return (
        <Screen>
            <h1>Movimenta Aí</h1>
            <form>
                <input placeholder="E-mail" type="email" required></input>
                <input placeholder="Senha" type="password" required></input>
                <button type="submit">Entrar</button>
            </form>
            <Link to="/cadastro" style={{ textDecoration: 'none' }}>
                <h2>Primeira vez? Cadastre-se!</h2>
            </Link>
        </Screen>
    )
}