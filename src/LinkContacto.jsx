import Contacto from "../components/Footer/Contacto";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function LinkContacto() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <Contacto/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default LinkContacto;