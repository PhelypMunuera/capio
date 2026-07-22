import type { InputHTMLAttributes } from "react";
import { useState } from 'react'

import style from './style.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> 

export function InputPassword({placeholder, ...props}: InputProps) {
 
    const [viewPassword, setViewPassword] = useState(false)

    return( <>
       
        <div className={style.inputPassword }>
            <input  type={viewPassword ? 'text' : 'password'} placeholder={placeholder} {...props}/>
            <button type="button"
            onClick={() => setViewPassword((value) => !value)}  
            className={style.eyeButton}
            >
                <i className={viewPassword ? 'ph ph-eye' : 'ph ph-eye-slash' }></i>
            </button>
        </div>
        </>
    )
}
