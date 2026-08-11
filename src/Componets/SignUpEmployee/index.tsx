import { Input } from "../Input";
import { Button } from "../Button";
import { useForm } from 'react-hook-form'
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import style from "./style.module.css";
import { InputPassword } from "../InputPassword";

const signUpSchema = z.object({
  id: z.string(),
  name: z.string(),
  position: z.string(),
  password: z.string(),
})

type SignUpSchemaProps = z.infer<typeof signUpSchema>


export function SignUpEmployee() {
  const { register, handleSubmit } = useForm<SignUpSchemaProps>({
    resolver: zodResolver(signUpSchema)
  })

  function handleSubmitForm(data: SignUpSchemaProps) {
    console.log({ data })
  }

  return (
    <>
      <main className={style.containerSingUp}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <h2>Cadastrar novo funcionario</h2>
          <div>
            <Input placeholder={"Informe a Matricula"} {...register('id')} />
            <Input placeholder={"Nome do Funcionario"} {...register('name')} />
            <Input placeholder={"Função do funcionario"} {...register('position')} />
            <Input placeholder={"Loging de acesso"} {...register('position')} />
            
            <InputPassword placeholder={"Digite uma senha"} {...register('password')}/>
          </div>
          <Button types={'submit'} content={'Confirmar cadastro'} />
        </form>
      </main>
    </>
  );
}
