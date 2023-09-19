import { Link } from "react-router-dom";

function ConversorEuro() {
    return (
        <>
            <div className="container">
                <h1 className="textoPesoDolar">Convertidor de Moneda:</h1>
                <h2>Peso argentino/Euro</h2>
                <label>Ingresa la cantidad:</label>
                <br />
                <input type="number" id="cantidadEuro" />
                <label>Selecciona la moneda:</label>
                <select id="monedaEuro">
                    <option value="pesoArgEuro">PESO ARG</option>
                    <option value="euro">EURO</option>
                </select>
                <br />
                <button className="button" onclick="convertirEuro()">Convertir</button>
                <p id="resultadoEuro"></p>
                <Link to='/conversor-dolar'>Convertír peso argentino/dolar.</Link>
                
            </div>
        </>
    );
}

export default ConversorEuro;