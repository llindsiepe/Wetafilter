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
          <ButtonClean title={"ATENDIMENTO"} />
        </ButtonBannerInf>
      </Main>
    </>
  );
}
