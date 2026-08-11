import type { InputHTMLAttributes } from "react";

import style from './style.module.css'

type checkboxProps = InputHTMLAttributes<HTMLInputElement> & {
    text: string
}

export function InputCheckbox({ text, ...props }: checkboxProps) {



    return (

        <label className={style.containerChackbox} htmlFor="">
            <input type='checkbox' {...props}/>
            {text}
        </label>

    )

}

