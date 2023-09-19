import ConversorDolar from "../components/ConversorDolar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";
import axios from "axios";



function PaginaConversorDolar() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <ConversorDolar/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default PaginaConversorDolar;