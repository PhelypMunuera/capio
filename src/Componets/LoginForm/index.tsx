import { useForm } from 'react-hook-form'
import { Input } from '../Input'
import { InputPassword } from '../InputPassword'
import { InputCheckbox } from '../InputCheckbox'
import z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '../Button'
import style from './style.module.css'

const loginSchema = z.object({
    name: z.string(),
    password: z.string(),
    checkbox: z.boolean(),
})

type LoginSchema = z.infer<typeof loginSchema>

export function Login() {
    const { register, handleSubmit } = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema)
    })

    function handleLogin(data: LoginSchema) {
        console.log(`${data}`);
    


    }

    return (
        <form onSubmit={handleSubmit(handleLogin)} className={style.credentialsForm} action="">

            <Input type={'text'} placeholder={'Nome'} {...register('name')} />
            <InputPassword placeholder={'senha'} {...register('password')} />
            <InputCheckbox text={'Manter conectado'} {...register('checkbox')} />
            <Button url="/Registrar" types={'submit'} content={'Entrar'}/>
        </form>
    )
}

