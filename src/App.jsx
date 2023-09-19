import { BrowserRouter as Router, Routes, Route, } from "react-router-dom"
import './App.css'
import Inicio from "./Inicio"
import PaginaTransferencias from "./PaginaTransferencias"
import PaginaPagos from "./PaginaPagos"
import PaginaInversiones from "./PaginaInversiones"
import PaginaAyuda from "./PaginaAyuda"
import LinkPoliticas from "./LinkPoliticas"
import LinkTyc from "./LinkTyc"
import LinkContacto from "./LinkContacto"
import Ingreso from "./Ingreso"
import Registro from "./Registro"
import PaginaConversorEuro from "./PaginaConversorEuro"
import PaginaConversorDolar from "./PaginaConversorDolar"


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/transferencias" element={<PaginaTransferencias/>}/>
        <Route path="/pagos" element={<PaginaPagos/>}/>
        <Route path="/conversor-dolar" element={<PaginaConversorDolar/>}/>
        <Route path="/conversor-euro" element={<PaginaConversorEuro/>}/>
        <Route path="/inversiones" element={<PaginaInversiones/>}/>
        <Route path="/ayuda" element={<PaginaAyuda/>}/>
        <Route path="/politica-de-privacidad" element={<LinkPoliticas/>}/>
        <Route path="/terminos-y-condiciones" element={<LinkTyc/>}/>
        <Route path="/contacto" element={<LinkContacto/>}/>
        <Route path="/ingresar" element={<Ingreso/>}/>
        <Route path="/registrarse" element={<Registro/>}/>

      </Routes>
    </Router>
    </>
  )
}

export default App
