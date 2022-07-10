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

export default function Card() {
  return (
    <>
      <Main>
        <Container>
          <Info>
            <img src={Logotipo} style={{ marginBottom: "10%" }} />
            <Redes>
              <img src={FacebookC} style={{ marginRight: "5%" }} />
              <img src={InstagramC} style={{ marginRight: "5%" }} />
              <img src={WhatsAppC} width="50rem" height="50rem" />
            </Redes>
          </Info>
          <AboutUs>
            <h5>
              <b>Sobre nós</b>
              <br />
              <br />
              R. Luíz Moreira, 91 - Jardim Monte Carmelo - Guarulhos - SP | CEP
              07195-270 <br />
              <br />
              (11) 2404-3880 <br />
              <br />
              (11) 4969-8410
            </h5>
          </AboutUs>
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
        </Container>
        <Law>© 2022 Wetafilter. Todos os direitos reservados</Law>
      </Main>
    </>
  );
}
