import Footer from "../components/Footer/Footer";
import Politicas from "../components/Footer/Politicas";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function LinkPoliticas() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Politicas/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default LinkPoliticas;