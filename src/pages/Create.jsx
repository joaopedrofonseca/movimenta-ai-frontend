import { HomeScreen, Dashboard } from "../styles/HomeScreen";
import Footer from "../components/Footer";
import Logout from "../components/Logout";

export default function Create() {

    return (
        <HomeScreen>
            <Dashboard>
                <h1>Crie uma atividade em grupo! (Em breve)</h1>
                <Logout />
                <Footer />
            </Dashboard>
        </HomeScreen>
    )
}