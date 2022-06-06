import React from "react";
import Logotipo from "../../imagens/Logotipo.png";
import profile from "../../imagens/profile.png";
import { Main, LogotipoImage, Menu, Entrar } from "./styles.js";
import OptionMenu from "../OptionMenu/index.js";
import Button from "../Button/index.js";

export default function Navbar() {
  return (
    <>
      <Main>
        <LogotipoImage>
          <img src={Logotipo} width="152" height="61" />
        </LogotipoImage>

        <Menu style={{ display: "flex" }}>
          <OptionMenu title={"Home"} />
          <OptionMenu title={"Sobre"} />
          <OptionMenu title={"Nossos produtos"} />
          <OptionMenu title={"Contato"} />
        </Menu>

        <Entrar>
          <Button title={"ATENDIMENTO"} />
        </Entrar>
      </Main>
    </>
  );
}
