import { HomeScreen, Dashboard } from "../styles/HomeScreen";
import Footer from "../components/Footer";
import Logout from "../components/Logout";

export default function Home() {
    return (
        <>
            <HomeScreen>
                <Dashboard>
                    <h1>Seu Perfil: Em breve!</h1>
                    <Logout />
                    <Footer />
                </Dashboard>
            </HomeScreen>

        </>

    )
}