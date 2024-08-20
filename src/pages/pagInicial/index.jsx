import { Link } from "react-router-dom";
import "./index.scss";
import Cabecalho from "../../components/cabecalho";

function Inicio() {
  return (
    <div className="pagina-inicio">

      <Cabecalho />

      <div className="container-treino">
        <h1>Escolha um treino...</h1>

        <div className="subcontainer-treino">

    <Link to='/exec01'>

          <div className="caixinha-exercicio">
            <div className="amarelo">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 01</p>
          </div>
    </Link>


    <Link to='/exec02'>
          <div className="caixinha-exercicio">
            <div className="verde">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 02</p>
          </div>
    </Link>

          <div className="caixinha-exercicio">
            <div className="ciano">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 03</p>
          </div>


          <div className="caixinha-exercicio">
            <div className="azul">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 04</p>
          </div>


          <div className="caixinha-exercicio">
            <div className="roxo">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 05</p>
          </div>



          <div className="caixinha-exercicio">
            <div className="laranja">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 06</p>
          </div>

          <div className="caixinha-exercicio">
            <div className="verde-ciano">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 07</p>
          </div>


          <div className="caixinha-exercicio">
            <div className="preto">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 08</p>
          </div>


          <div className="caixinha-exercicio">
            <div className="cinza">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 09</p>
          </div>


          <div className="caixinha-exercicio">
            <div className="marrom">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 10</p>
          </div>


          <div className="caixinha-exercicio">
            <div className="roxo-escuro">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 11</p>
          </div>

          <div className="caixinha-exercicio">
            <div className="amarelo">&nbsp;</div>
            <h3>Cupom de desconto</h3>
            <p>Exercício 12</p>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Inicio;
