import { useState } from "react";

import style from './style.module.css'

export function Selector() {
  const [sector, setSector] = useState("");

  return (
    <>
      <div className={style.containerSelector}>
        <select
          id="sector"
          value={sector}
          onChange={(event) => setSector(event.currentTarget.value)}
        >
          <option value="" disabled>
            Selecione um setor
          </option>
          <option value="regulação" >
            Regulçao de Saúde
          </option>
          <option value="transporte" >
            Trasporte Sanitário
          </option>
          <option value="vigilancia" >
            Vigilancia Epidemiológica
          </option>
          <option value="ouvidoria" >
            Ouvidoria de Saude
          </option>
        </select>
      </div>
    </>
  );
}
