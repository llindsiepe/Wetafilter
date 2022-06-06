import React from "react";

import Phone from "../../imagens/phone.png";

import Navbar from "../../components/Navbar";
import BannerInferior from "../../components/BannerInferior";
import Rodape from "../../components/Rodape";

import { Contact, ImageContact, TextContact, TextH1 } from "./styles";

function Sobre() {
  return (
    <>
      <Navbar />

      <Contact>
        <ImageContact>
          <img src={Phone} />
        </ImageContact>
        <TextContact>
          <TextH1>
            CONVERSE CONOSCO{" "}
            <span style={{ color: "#00923F" }}>
              <b>& </b>
            </span>{" "}
            <b>SIGA NOS NAS REDES.</b>
          </TextH1>
        </TextContact>
      </Contact>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
