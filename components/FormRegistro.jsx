import { Link } from "react-router-dom";

function FormRegistro() {
    return (
        <>
        <div className="container2"> 
        <h1>Registro</h1>
            <form className="form" action="">
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" value={FormData.Nombre} required />
                <label htmlFor="dni">D.N.I:</label>
                <input type="number" id="dni" value={FormData.Dni} required />
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={FormData.Email} required />
                <label htmlFor="birth">Fecha de nacimiento</label>
                <input type="date" id="birth" value={FormData.Birth} ></input>
                <label htmlFor="user"> Cree un usuario</label>
                <input type="text" id="user" value={FormData.User} />
                <label htmlFor="password">Cree una contraseña</label>
                <input type="password" id="password" value={FormData.Password} />
                <label htmlFor="passwordc">Cree una contraseña</label>
                <input type="password" id="passwordc" value={FormData.Passwordc} />
            </form>
            <div class="link">
                <p>¡Ya tenes cuenta? </p>
                <Link to="/ingresar">Inicia sesión aca.</Link>
            </div>
        </div>
        </>
    );
}

export default FormRegistro;
