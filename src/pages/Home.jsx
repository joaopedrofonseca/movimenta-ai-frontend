import { HomeScreen, Dashboard } from "../styles/HomeScreen";
import Footer from "../components/Footer";
import Logout from "../components/Logout";
import Infos from "../components/Infos";

export default function Home() {
    return (
        <>
            <HomeScreen>
                <Dashboard>
                    <h1>Seu Perfil: Fulano da Silva</h1>
                    <Logout />
                    <Infos/>
                    <Footer />
                </Dashboard>
            </HomeScreen>

        </>

    )
}