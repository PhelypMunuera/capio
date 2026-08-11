import { useNavigate } from 'react-router-dom';
import style from './style.module.css'

type ButtonProps = {
    types: "submit" | "reset" | "button";
    content: string;
    AttClass?: string
    url?: string;
    
  };

export function Button({ types, content, url }: ButtonProps) {

    const navigate = useNavigate();
   
    return(
        <button onClick={() => (url ? navigate(url) : null)}  type={types} className={style.buttonHome}>{content}</button>
    )
}