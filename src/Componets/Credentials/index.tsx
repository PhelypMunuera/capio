import { Button } from '../Button'
import { Form } from '../Form'
import style from './style.module.css'



export function Credentials () {

    

    return(
        <main className= {style.container}>
            <section className={style.containerInfo}>
               <div>
               <h1>CAPIO</h1>
               <h3>SECRETARIA DE SAÚDE</h3>
               </div>
               <Form />
               <Button />
            </section>
        </main>
    )
}

