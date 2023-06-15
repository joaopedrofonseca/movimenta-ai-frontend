import Screen from "../components/Screen";
import { Link } from "react-router-dom";


export default function SignUp() {
    return (
        <Screen>
            <h1>Movimenta Aí</h1>
            <form>
                <input placeholder="Nome" type="text" required></input>
                <input placeholder="E-mail" type="email" required ></input>
                <input placeholder="Senha" type="password" required></input>
                <input placeholder="Confirme a senha" type="password" required ></input>
                <button type="submit">Cadastrar</button>
            </form>

            <Link to="/" style={{ textDecoration: 'none' }}>
                <h2>Já tem uma conta? Entre agora!</h2>
            </Link>
        </Screen>
    )
}