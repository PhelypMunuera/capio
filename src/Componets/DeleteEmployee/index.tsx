import style from './style.module.css'
import { demoDialog } from '../Dialog/Handler'
export function DeleteEmployee() {
  return (
    <div className={style.container}>
      <h1>Confirme esta ação?</h1>
      <div className={style.InformationsArea}>
        <p>Confirma a exclusão dos dados de acesso
        do funcionário <strong>Phelyp Munuera da Silva</strong>,
        matrícula <strong>4905-7</strong>?</p>

        <span>Esta ação removerá o acesso do funcionário ao sistema.</span>
      </div>
      <div className={style.containerButton}>
        <button>Confirmar</button>
        <button onClick={() => { demoDialog.close() }}>Cancelar</button>
      </div>
    </div>
  )

}