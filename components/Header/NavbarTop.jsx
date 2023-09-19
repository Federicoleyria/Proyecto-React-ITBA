import { Link } from "react-router-dom";

function Header() {
    return (
        <>
        <nav className="navbar-top"> 
            <div className="logo">
                <p>BANCO</p>
                <p>BARRO</p>
                <img src="images/logobanco.png" alt="Logo" />
            </div>
            <div className="links-nav">
                <Link to='/'>INICIO</Link>
                <Link to='/ingresar'>MI CUENTA</Link>
            </div>
            </nav>
        </>
    );
}

export default Header;