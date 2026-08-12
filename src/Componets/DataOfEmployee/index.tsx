import { Button } from "../Button";
import { ListOfEmployee } from "../ListOfEmployee";
import { FilterEmployee } from "../Filters";

import style from "./style.module.css";
import { DialogUI } from "../Dialog";
import { Trigger } from "../Dialog/Trigger";

type RegistersProps = {
  registration: string;
  name: string;
  loging: string;
  password: string;
};

export function DataOfEmployee() {

  return (
    <>
      <div className={style.containerTitle}>
        <h1 className={style.container}>
          Lista de funcionarios
        </h1>
        <DialogUI/>
        <Button url="/Cadastrar-novo-funcionario"  types={'button'} content={'Novo Funcionario'} />
      </div>
      <div className={style.containerTable}>
        <table className={style.registersList}>
          <thead>
            <tr>
              {FilterEmployee.map((filter) => (
                <th key={filter}>
                  {filter}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ListOfEmployee.map(
              ({ registration, name, loging }: RegistersProps) => (
                <tr key={registration}>
                  <td>{registration}</td>
                  <td>{name}</td>
                  <td>{loging}</td>
                  <td className={style.buttons} >
                   <Trigger/>
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
