import { HomeScreen, Dashboard } from "../styles/HomeScreen";
import Footer from "../components/Footer";
import Logout from "../components/Logout";

export default function Schedule() {
    return (
        <HomeScreen>
            <Dashboard>
                <h1>Suas atividades agendadas estão aqui! (Em breve)</h1>
                <Logout />
                <Footer />
            </Dashboard>
        </HomeScreen>

    )
}