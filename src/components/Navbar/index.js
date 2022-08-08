import React from "react";
import Logotipo from "../../imagens/Logotipo.png";
import profile from "../../imagens/profile.png";
import { Main, LogotipoImage, Menu, Entrar } from "./styles.js";
import OptionMenu from "../OptionMenu/index.js";
import Button from "../Button/index.js";
import { Grid } from "@mui/material";

export default function Navbar() {
  return (
    <>
      <Main>
        <Grid container justifyContent={"space-around"} >
          <Grid item >
            <LogotipoImage>
              <img src={Logotipo} width="152" height="61" />
            </LogotipoImage>
          </Grid>
          <Grid item >
            <Menu style={{ display: "flex" }}>
              <OptionMenu title={"Home"} url={"/"} />
              <OptionMenu title={"Sobre"} url={"/sobre"} />
              <OptionMenu title={"Nossos produtos"} url={"/produtos"} />
              <OptionMenu title={"Contato"} url={"/contato"} />
            </Menu>
          </Grid>
          <Grid item>
            <Entrar>
              <a
                href="https://api.whatsapp.com/send?phone=551124043880&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es"
                target="_blank"
              >
                <Button title={"ATENDIMENTO"} />
              </a>
            </Entrar>
          </Grid>
        </Grid>
      </Main>
    </>
  );
}
