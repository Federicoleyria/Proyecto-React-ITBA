import Footer from "../components/Footer/Footer";
import FormRegistro from "../components/FormRegistro";
import Header from "../components/Header/NavbarTop";


function Registro() {
    return ( 
        <>
        <header>
            <Header/>
        </header>
        <main>
            <FormRegistro/>
        </main>
        <footer>
            <Footer/>
        </footer>
        </>
     );
}

export default Registro;