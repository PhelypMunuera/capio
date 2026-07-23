import logo from "../../assets/logo.png";

import style from './style.module.css'

export function Footer() {
  return (
    <footer className={style.containerFooter}>
      <img src={logo} alt="Logo prefeitura de São Sebastião" />
      <p>
        Sistema de Credenciamento e Apoio ao Paciente Ingressante para
        Orientação
      </p>
    </footer>
  );
}
