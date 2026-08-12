import style from './style.module.css'
import { demoDialog } from '../Dialog/Handler'
import { InputPassword } from '../InputPassword'
import { Input } from '../Input'
export function EditEmployee() {
  return (
    <div className={style.container}>
      <h1>Confirme esta ação?</h1>
      <div className={style.InformationsArea}>
        <div className={style.name}>Lucas Henrique da Silva</div>
        
        <div className={style.dataCredentials}>
            <div className={style.registration}>32154</div>
            <Input value={'qwer@2345'} /> 
        </div>    
        <InputPassword value={12345678}/>
      </div>
      <div className={style.containerButton}>
        <button>Salvar</button>
        <button onClick={() => { demoDialog.close() }}>Cancelar</button>
      </div>
    </div>
  )

}