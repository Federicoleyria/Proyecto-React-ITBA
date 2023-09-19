import Footer from "../components/Footer/Footer";
import TyC from "../components/Footer/TyC";
import Header from "../components/Header/NavbarTop";
import NavbarLateral from "../components/NavbarLateral/NavbarLateral";

function LinkTyc() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <NavbarLateral/>
            <TyC/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default LinkTyc;