import React from "react";

import Peças from "../../imagens/imagepack.png";
import Avaliação from "../../imagens/avaliacao.png";
import rastreamento from "../../imagens/rastreamento.png";
import boxgroup from "../../imagens/boxgroup.png";
import security from "../../imagens/security.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import BannerInferior from "../../components/BannerInferior";
import CardProduct from "../../components/CardProduct";

import { Banner, TextBanner, Cards } from "./styles";

function Sobre() {
  return (
    <>
      <Navbar />
      <Banner>
        <div>
          <img src={Peças} />
        </div>
        <TextBanner>
          <img src={Avaliação} />
          <h1>
            Nossos produtos
            <br />
            <span style={{ color: "#ED3237" }}>& </span> <b>catálogo</b>
          </h1>
          <h5>Conheça alguns de nossos produtos</h5>
        </TextBanner>
      </Banner>

      <Cards>
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
      </Cards>
      <Cards>
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
        <CardProduct
          name="Filtro Bag"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
        />
      </Cards>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
