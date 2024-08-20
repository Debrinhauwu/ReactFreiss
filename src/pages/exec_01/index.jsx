
import "./index.scss";
import Cabecalho from "../../components/cabecalho";
import TituloEnunciado from "../../components/tituloEnunciado";
import { useState } from "react";

function Exec01() {

  const [valorPedido, setValorPedido] = useState(0);
  const [valorCupom, setValorCupom] = useState(0);
  const [valorTotal, setValorTotal] = useState(0);

  function calculo(){
    let calculo = valorPedido - valorCupom

    setValorTotal(calculo)
  }




  return (
    <div className="pagina-exec01">
      <Cabecalho />

    <TituloEnunciado descExec={'01 - Cupom de desconto'} textoEnunciado={'Implementar um programa em Javascript para calcular o valor final de uma compra a partir do valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.'} corLinha={'#FFCE37'}/>

    <div className="Exercicio">


    <div className="exercicio">
        <h3>Informe o valor do pedido</h3>
        <input type="text" placeholder="0" onChange={e => setValorPedido(e.target.value)}/>
        <h3>Informe o valor do cupom</h3>
        <input type="text" placeholder="0" onChange={e => setValorCupom(e.target.value)}/>

        <button onClick={calculo}>Executar</button>
    </div>
    <h3>Resultado: O total é R$ {valorTotal}</h3>

    </div>

    </div>
  );
}

export default Exec01;
