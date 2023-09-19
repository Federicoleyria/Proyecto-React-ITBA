import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Twitter from '../../images/twitter.png';
import WhatsApp from '../../images/whatsapp.png';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div>
                <ul className="footer-list">
                    <li> <Link to='/terminos-y-condiciones' >Términos y condiciones</Link> </li>
                    <li> <Link to='/politica-de-privacidad'>Politicas de privacidad</Link> </li>
                    <li> <Link to='/contacto'>Contacto</Link> </li>
                </ul>
            </div>
            <div className="footer-icons">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={Facebook} alt="Logo de Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={Instagram} alt="Logo de Instagram" />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src={Twitter} alt="Logo de Twitter" />
                </a>
                <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                    <img src={WhatsApp} alt="Logo de WhatsApp" />
                </a>
            </div>
        </>
    );
}

export default Footer;