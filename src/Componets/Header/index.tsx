import style from './style.module.css'

/*
type headerProps={
    name: string
}

{name}:headerProps*/

export function Header() {
     return(
      <header className={style.containerHeader}>
          <nav>
            <ul>
                <li>
                    <a href="">
                        <i className="ph ph-plus"></i>
                        Novo registro
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="ph ph-clipboard-text"></i>
                        Lista de registros
                    </a>
                </li>
                <li>
                    <a href="">
                        <i className="ph ph-users"></i>
                        Gerenciar funcionários
                    </a>
                </li>
            </ul>
            </nav>
            <section className={style.containerUser}>
                <button>Phelyp Munuera</button>
                <div className={style.divLine}></div>
                <button><i className="ph ph-sign-out"></i></button>
            </section>
      </header>       
     )
} 