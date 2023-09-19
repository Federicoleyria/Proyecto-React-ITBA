import Ayuda from "../components/Ayuda";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function PaginaAyuda() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Ayuda/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaAyuda;