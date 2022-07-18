import React from "react";
import {
  Main,
  ImageBannerInf,
  TextBannerInf,
  ButtonBannerInf,
} from "./styles.js";

import ButtonClean from "../ButtonClean";

import Send from "../../imagens/send.png";

export default function BannerInferior() {
  return (
    <>
      <Main>
        <ImageBannerInf>
          <img src={Send} />
        </ImageBannerInf>
        <TextBannerInf>
          <h4>ENTRE EM CONTATO CONOSCO</h4>
          <h5>
            SIMPLES, FÁCIL <b>& SEGURO.</b>
          </h5>
        </TextBannerInf>
        <ButtonBannerInf>
          <a
            href="https://api.whatsapp.com/send?phone=5511972041202&text=Ol%C3%A1%2C+gostaria+de+mais+informa%C3%A7%C3%B5es"
            target="_blank"
          >
            <ButtonClean title={"ATENDIMENTO"} />
          </a>
        </ButtonBannerInf>
      </Main>
    </>
  );
}
