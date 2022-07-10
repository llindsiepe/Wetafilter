import React from "react";
import { Cards, TextCard, ImageCard, TextName, Texth6 } from "./styles.js";

import ImageMockup from "../../imagens/ImageMockup.png";
import Avaliação from "../../imagens/avaliacao.png";

import Button from "../Button/index.js";

export default function CardProduct({ name, src }) {
  return (
    <>
      <Cards>
        <ImageCard>
          <img src={src} />
        </ImageCard>
        <TextCard>
          <TextName>{name}</TextName>
        </TextCard>
      </Cards>
    </>
  );
}
