import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

type headerProps={
    name: string
}

export function Header({name}:headerProps) {
    const navigate = useNavigate()

     return(
      <header className={style.containerHeader}>
          <nav>
            <ul>
                <li>
                    <a href="/Registrar">
                        <i className="ph ph-plus"></i>
                        Novo registro
                    </a>
                </li>
                <li>
                    <a href="/Lista-de-registros">
                        <i className="ph ph-clipboard-text"></i>
                        Lista de registros
                    </a>
                </li>
                <li>
                    <a href="/Dados-dos-funcionarios">
                        <i className="ph ph-users"></i>
                        Gerenciar funcionários
                    </a>
                </li>
            </ul>
            </nav>
            <section className={style.containerUser}>
                <button>{name}</button>
                <div className={style.divLine}></div>
                <button onClick={() => navigate('/')}><i className="ph ph-sign-out"></i></button>
            </section>
      </header>       
     )
} 