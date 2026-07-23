import { useState } from 'react'

import style from './style.module.css'

type checkboxProps = {
    text: string
}

export function InputCheckbox({text}:checkboxProps){

const [checkboxEvent, setCheckboxEvent] = useState(false)

    return (
        
        <label className={style.containerChackbox} htmlFor="">
        <input 
            type='checkbox' 
            checked={checkboxEvent}
            onChange={(event) => setCheckboxEvent(event.currentTarget.checked)} />
       {text}
        </label>
        
    )
    
}

