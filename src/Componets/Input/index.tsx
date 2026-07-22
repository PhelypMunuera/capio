import type { InputHTMLAttributes } from "react";
import style from './style.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> 

export function Input({type, placeholder, ...props}: InputProps) {
 
    return( <>
       
        <div className={style.inputText}>
            <input type={type} placeholder={placeholder} {...props}/>
        </div>
        </>
    )
}