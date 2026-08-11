import { Input } from "../Input";
import { Button } from "../Button";
import { Selector } from "../Selector";

import { useForm } from 'react-hook-form'
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import style from "./style.module.css";


const registerSchema = z.object({
  date: z.string(),
  cpf: z.string(),
  name: z.string(),
  contact: z.string(),
  neighborhood: z.string(),
})

type RegisterSchemaProps = z.infer< typeof registerSchema>

export function Register() {   
    const {register, handleSubmit} = useForm<RegisterSchemaProps>({
      resolver:zodResolver(registerSchema)
    })

    function handleSubmitForm(data:RegisterSchemaProps ){
      const agora = new Date();

      console.log(`${data} ${agora}`)
    // aquie esta a data que pega do form
    }

  return (
    <>
      <main className={style.container}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <h2>Informações de registro</h2>
          <div>
            <Input placeholder={"Informe o CPF"} {...register('cpf')} />
            <Input placeholder={"Nome do Paciente"} {...register('name')}/>
            <Input placeholder={"Telefone para contato"} {...register('contact')}/>
            <Input placeholder={"Bairro de residencia"} {...register('neighborhood')}/>
            <Selector />
          </div>
          <Button types={'submit'} content={'Entrar'}/>
        </form>
      </main>
    </>
  );
}
