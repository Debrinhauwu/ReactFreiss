import './index.scss'
import { Link } from 'react-router-dom'

export default function TituloEnunciado({corLinha, textoEnunciado, descExec}) {
  const Linha = {
    border: '0',
    backgroundColor: corLinha || '#000'
  }

    return(
        <div className="comp-TituloEnunciado">
        <div className="subcontainer-titulo">
          <Link to='/'>
          <i class="fa fa-arrow-circle-left" aria-hidden="true"></i>
          </Link>
          <h2>Exercício {descExec || 'ARRUMA'}</h2>
        </div>
        <hr  style={Linha}/>

        <div className="subcontainer-enunciado">
            <p>
              {textoEnunciado || 'vazio, ARRUME'} 
            </p>
        </div>
      </div>
    )
}