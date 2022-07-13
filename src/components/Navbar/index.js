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
        <Grid container justifyContent={'space-around'} spacing={8}>
          <Grid item xs={12} md={4} xl={3}>
            <LogotipoImage>
              <img src={Logotipo} width="152" height="61" />
            </LogotipoImage>
          </Grid>
          <Grid item xs={12} sm ={12} md={4} xl={3}>
            <Menu style={{ display: "flex" }}>
              <OptionMenu title={"Home"} />
              <OptionMenu title={"Sobre"} />
              <OptionMenu title={"Nossos produtos"} />
              <OptionMenu title={"Contato"} />
            </Menu>
          </Grid>
          <Grid item xs={12} md={4} xl={3}>
            <Entrar>
              <Button title={"ATENDIMENTO"} />
            </Entrar>
          </Grid>
        </Grid>
      </Main>
    </>
  );
}
