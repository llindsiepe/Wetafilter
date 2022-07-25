import React from "react";
import { Cards, TextCard, ImageCard, Download, Texth6 } from "./styles.js";

import ImageMockup from "../../imagens/ImageMockup.png";
import Avaliação from "../../imagens/avaliacao.png";

import Button from "../Button/index.js";

export default function CardProduct({ name, text, image }) {
  return (
    <>
      <Cards>
        <ImageCard>
          <img src={image} width="100%" />
        </ImageCard>
        <TextCard>
          <h3>{name}</h3>
          <Texth6>{text}</Texth6>
        </TextCard>
        {/* <Download>
          <Button title="Download" />
        </Download> */}
      </Cards>
    </>
  );
}
