import React from "react";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";

import WhatsappC from "../../imagens/WhatsappC.png";
import EmailC from "../../imagens/EmailC.png";
import FacebookC from "../../imagens/FacebookC.png";
import InstagramC from "../../imagens/InstagramC.png";

import {
  Title,
  Container,
  CardContact,
  ButtonSend,
  InfoContact,
  Icons,
  Line,
  Redes,
} from "./styles";

import { Grid } from "@mui/material";

function Sobre() {
  return (
    <>
      <Navbar />

      <Title>
        <h2>
          <b>Entre em contato conosco!</b>
        </h2>
        <h5>Tire suas dúvidas, solicite orçamentos e muito mais</h5>
      </Title>

      <Grid container >
        <Grid item xs={8} spacing={5}>
          <CardContact>
            <h3>
              <b>Cadastre-se</b> e entraremos em contato
            </h3>
            <ButtonSend>Enviar</ButtonSend>
          </CardContact>
        </Grid>
        <Grid item>
          <InfoContact>
            <Icons>
              <img src={WhatsappC} width="70rem" height="70rem" />
              <h3>
                <b>WhatsApp</b>
                <br />
                (11)00000-0000
              </h3>
            </Icons>
            <Icons>
              <img src={EmailC} width="70rem" height="70rem" />
              <h3>
                <b>E-mail</b>
                <br />
                wetafilter@wetafilter.com.br
              </h3>
            </Icons>
            <Line />
            <Redes>
              <h3>Siga-nos nas redes sociais</h3>
              <img src={FacebookC} style={{ marginRight: "4%" }} />
              <img src={InstagramC} />
            </Redes>
          </InfoContact>
        </Grid>
      </Grid>

      <Rodape />
    </>
  );
}

export default Sobre;
