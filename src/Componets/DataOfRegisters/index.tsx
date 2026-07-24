import { useState } from "react";
import { ListOfRegisters } from "../ListOfRegisters";
import { FilterRegisters } from "../FilterRegister";

import style from "./style.module.css";

type RegistersProps = {
  data: string;
  name: string;
  document: string;
  address: string;
  sector: string;
};

export function DataOfRegisters() {
  const [registers, setRegisters] = useState(ListOfRegisters);
  
  function sortRegisters(selector: string) {
    let sortedRegisters = [...registers];

    switch (selector) {
      case "Nome do paciente atendido":
        sortedRegisters.sort((a, b) => a.name.localeCompare(b.name, "pt-BR"));
        setRegisters(sortedRegisters);
        break;

      case "Documento":
        sortedRegisters.sort((a, b) => a.document.localeCompare(b.document, "pt-BR"));
        setRegisters(sortedRegisters);
        break;

      case "Bairro":
        sortedRegisters.sort((a, b) => a.address.localeCompare(b.address, "pt-BR"));
        setRegisters(sortedRegisters);
        break;

      case "Setor":
        sortedRegisters.sort((a, b) => a.sector.localeCompare(b.sector, "pt-BR"));
        setRegisters(sortedRegisters);
        break;

      default:
        break;
    }
  }
  return (
    <>
      <div className={style.container}>
        <section className={style.containerLis}>
          <h1>Lista de funcionarios</h1>
          <table className={style.registersList}>
            <thead>
              {FilterRegisters.map((filter) => (
                <th
                  onClick={() => {
                    sortRegisters(filter);
                  }}
                >
                  {filter}
                  <i className="ph ph-caret-down"></i>
                </th>
              ))}
            </thead>
            <tbody>
              {registers.map(
                ({ data, name, document, address, sector }: RegistersProps) => (
                  <tr>
                    <td>{data}</td>
                    <td>{name}</td>
                    <td>{document}</td>
                    <td>{address}</td>
                    <td>{sector}</td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
