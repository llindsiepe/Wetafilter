import React from "react";
import {
  Main,
  Container,
  Info,
  Redes,
  AboutUs,
  Navegue,
  Law,
} from "./styles.js";

import Logotipo from "../../imagens/Logotipo.png";
import WhatsAppC from "../../imagens/WhatsappC.png";
import FacebookC from "../../imagens/FacebookC.png";
import InstagramC from "../../imagens/InstagramC.png";

import { Grid } from "@mui/material";

export default function Card() {
  return (
    <>
      <Main>
        <Grid container justifyContent={"space-around"}>
          <Grid item xs={12} md={4}>
            <Info>
              <img src={Logotipo} style={{ marginBottom: "10%" }} />
              <Redes>
                <a
                  href="https://www.facebook.com/wetafilter"
                  style={{ marginRight: "5%" }}
                >
                  <img src={FacebookC} />
                </a>
                <a
                  href="https://www.instagram.com/wetafilter_filtros/"
                  style={{ marginRight: "5%" }}
                >
                  <img src={InstagramC} style={{ marginRight: "5%" }} />
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=551124043880&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es"
                  style={{ marginRight: "5%" }}
                >
                  <img src={WhatsAppC} width="50rem" height="50rem" />
                </a>
              </Redes>
            </Info>
          </Grid>
          <Grid item xs={12} md={4}>
            <AboutUs>
              <h5>
                <b>Sobre nós</b>
                <br />
                <br />
                R. Luíz Moreira, 91 - Jardim Monte Carmelo - Guarulhos - SP |
                CEP 07195-270 <br />
                <br />
                (11) 2404-3880 <br />
                <br />
                (11) 4969-8410
              </h5>
            </AboutUs>
          </Grid>
          <Grid item xs={12} md={4}>
            <Navegue>
              <h5>
                <b>Navegue pelo site</b>
                <br />
                <br />
                Home <br />
                <br />
                Sobre <br />
                <br />
                Nossos produtos <br />
                <br />
                Contato
              </h5>
            </Navegue>
          </Grid>
        </Grid>
        <Law>© 2022 Wetafilter. Todos os direitos reservados</Law>
      </Main>
    </>
  );
}
