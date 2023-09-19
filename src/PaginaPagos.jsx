import Footer from "../components/Footer/Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";
import Pagos from "../components/Pagos";

function PaginaPagos() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Pagos/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaPagos;