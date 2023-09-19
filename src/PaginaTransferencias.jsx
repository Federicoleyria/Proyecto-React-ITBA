import Header from "../components/Header/NavbarTop";
import Footer from "../components/Footer/Footer";
import Transferencias from "../components/Transferencias";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function PaginaTransferencias() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Transferencias/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaTransferencias;