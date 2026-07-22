import style from './style.module.css'

type checkboxProps = {
    text: string
}

export function InputCheckbox({text}:checkboxProps){

    
    return (
        <label className={style.containerChackbox} htmlFor="">
        <input type='checkbox' />
       {text}
        </label>
    )
}

