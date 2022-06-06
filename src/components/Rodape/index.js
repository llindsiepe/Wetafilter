import React from "react";
import {
  Main,
  Info,
  ImageInfo,
  TextInfo,
  Redes,
  ImageRedes,
} from "./styles.js";

import Logotipo from "../../imagens/Logotipo.png";
import WhatsApp from "../../imagens/WhatsApp.png";
import Facebook from "../../imagens/Facebook.png";

export default function Card() {
  return (
    <>
      <Main>
        <Info>
          <ImageInfo>
            <img src={Logotipo} />
          </ImageInfo>
          <TextInfo>
            <h6>
              <b>MATRIZ: </b>
              R. Ibirajuba, 138 - Jardim Monte Carmelo, Guarulhos - SP,
              07194-000
            </h6>
            <h6>
              <b>TELEFONE:</b> (11) 7940-8307
            </h6>
            <h6>
              <b>E-MAIL:</b> renato@progressivatransportes.com.br,
              marcos@progressivatransportes.com.br,
              rodrigo@progressivatransportes.com.br
            </h6>
          </TextInfo>
        </Info>
        <Redes>
          <h4>
            <b>SIGA-NOS</b> NAS REDES
          </h4>
          <ImageRedes>
            <img src={WhatsApp} />
            <img src={Facebook} />
          </ImageRedes>
        </Redes>
      </Main>
    </>
  );
}
