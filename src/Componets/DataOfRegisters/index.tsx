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

  function sortRegisters() {
    const sortedRegisters = [...registers].sort((a, b) =>
      a.name.localeCompare(b.name, "pt-BR"),
    );

    setRegisters(sortedRegisters);
  }

  return (
    <>
      <div className={style.container}>
        <section className={style.containerLis}>
          <h1>Lista de funcionarios</h1>
          <table className={style.registersList}>
            <thead>
              {FilterRegisters.map((filter) => (
                <th onClick={sortRegisters}>{filter}</th>
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

{
  /* <i className="ph ph-caret-down"></i> */
}
