import { Link } from "react-router-dom";
import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import TituloEnunciado from "../../components/tituloEnunciado";

function Sobre() {
  return (
    <div className="pagina-sobre">
      <Cabecalho />

    <TituloEnunciado />


    <div className="exercicio">
        <h3>Informe o valor do pedido</h3>
        <input type="text" placeholder="0" />
        <h3>Informe o valor do cupom</h3>
        <input type="text" placeholder="0"/>

        <button>Executar</button>
    </div>

    </div>
  );
}

export default Sobre;
