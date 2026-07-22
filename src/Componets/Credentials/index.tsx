import style from './style.module.css'

export function Credentials () {
    return(
        <main className= {style.container}>
             
            <section className={style.containerForm}>
               <div>
               <h1>CAPIO</h1>
               <h3>SECRETARIA DE SAÚDE</h3>
               </div>
             
            <form className={style.credentialsForm} action="">
                <input className={style.inputLogin} type="text"  placeholder='Usuário'/>
                <input className={style.inputLogin}  type="text" placeholder='Senha'/>
                <label htmlFor="">
                <input type="text" />
                Manter conectado
                </label>
            </form>
                <button>Entrar</button>
            </section>
        </main>
    )
}