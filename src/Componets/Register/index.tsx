import { Input } from "../Input";
import { Button } from "../Button";
import { Selector } from "../Selector";

import style from "./style.module.css";

export function Register() {
  return (
    <>
      <main className={style.container}>
        <form>
          <h2>Informações de registro</h2>
          <div>
            <Input placeholder={"Informe o CPF"} />
            <Input placeholder={"Nome do Paciente"} />
            <Input placeholder={"Telefone para contato"} />
            <Input placeholder={"Bairro de residencia"} />
            <Selector />
          </div>
          <Button />
        </form>
      </main>
    </>
  );
}
