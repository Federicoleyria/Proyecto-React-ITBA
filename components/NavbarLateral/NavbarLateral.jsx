import { Link } from "react-router-dom";

function NavbarLateral() {
    return (
        <> 
            <div className="cont-menu active" id="menu">
                <ul>       
                    <li> <Link to='/transferencias'>Transferencias</Link> </li>
                    <li> <Link to='/pagos'> Pagos</Link> </li>
                    <li> <Link to='/conversor-dolar'>Conversor</Link> </li>
                    <li> <Link to='/inversiones'>Inversiones</Link> </li>
                    <li>  <Link to='/ayuda'>Ayuda</Link> </li>
                </ul>
            </div>
        </>
    );
}

export default NavbarLateral;