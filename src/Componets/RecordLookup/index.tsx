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

export function RecordLookup() {
  const [registers, setRegisters] = useState(ListOfRegisters);
  const [order, setOrder] = useState<"asc" | "desc">("asc");
  
  function parseDate(date: string) {
    const [datePart, timePart] = date.split(" - ");
  
    const [day, month, year] = datePart.split("/");
    const [hour, minute] = timePart.split(":");
  
    return new Date(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute)
    ).getTime();
  }

  function sortRegisters(selector: string) {
    const sortedRegisters = [...registers];
  
    switch (selector) {
      case "Data - Hora":
        sortedRegisters.sort((a, b) => {
          const dateA = parseDate(a.data);
          const dateB = parseDate(b.data);
  
          return order === "asc"
            ? dateA - dateB
            : dateB - dateA;
        });
        break;
  
      case "Nome do paciente atendido":
        sortedRegisters.sort((a, b) =>
          order === "asc"
            ? a.name.localeCompare(b.name, "pt-BR")
            : b.name.localeCompare(a.name, "pt-BR")
        );
        break;
  
      case "Documento":
        sortedRegisters.sort((a, b) =>
          order === "asc"
            ? a.document.localeCompare(b.document, "pt-BR")
            : b.document.localeCompare(a.document, "pt-BR")
        );
        break;
  
      case "Bairro":
        sortedRegisters.sort((a, b) =>
          order === "asc"
            ? a.address.localeCompare(b.address, "pt-BR")
            : b.address.localeCompare(a.address, "pt-BR")
        );
        break;
  
      case "Setor":
        sortedRegisters.sort((a, b) =>
          order === "asc"
            ? a.sector.localeCompare(b.sector, "pt-BR")
            : b.sector.localeCompare(a.sector, "pt-BR")
        );
        break;
  
      default:
        return;
    }
  
    setRegisters(sortedRegisters);
  
    setOrder((currentOrder) =>
      currentOrder === "asc" ? "desc" : "asc"
    );
  }
  
  return (
    <>
      <div className={style.container}>
        <section className={style.containerLis}>
          <h1>Lista de funcionarios</h1>
          <table className={style.registersList}>
            <thead>
            <tr>
            {FilterRegisters.map((filter) => (
                <th
                  key={filter}
                  onClick={() => {
                    sortRegisters(filter);
                  }}
                >
                  {filter}
                  <i className="ph ph-caret-down"></i>
                </th>
              ))}
            </tr>
            </thead>
            <tbody>
              {registers.map(
                ({ data, name, document, address, sector }: RegistersProps) => (
                  <tr key={document}>
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
