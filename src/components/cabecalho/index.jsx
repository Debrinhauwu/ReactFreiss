import "./index.scss";
import { Link } from "react-router-dom";




export default function Cabecalho() {
  return (
    <header className="comp-cabecalho">
        <div>
          <img src="/assets/images/logo.svg" alt="" />
          <h1>React FreiS</h1>
        </div>

        <div>
          <Link to='/'>Inicio</Link>
          <Link to='/sobre'>Sobre</Link>
        </div>
      </header>
  );
}
