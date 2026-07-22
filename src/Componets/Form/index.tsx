import { Input } from '../Input'
import { InputPassword } from '../InputPassword'
import { InputCheckbox} from '../InputCheckbox'
import style from './style.module.css'
export function Form() {
    
    
    return(
        <form className={style.credentialsForm} action="">
        
        <Input type={'text'} placeholder={'Nome'}/>
        <InputPassword placeholder={'senha'} />
        <InputCheckbox text={'Manter conectado'}/>
        
    </form>
    )
}

