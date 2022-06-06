import React from "react";

import Peças from "../../imagens/imagepack.png";
import Avaliação from "../../imagens/avaliacao.png";
import rastreamento from "../../imagens/rastreamento.png";
import boxgroup from "../../imagens/boxgroup.png";
import security from "../../imagens/security.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import BannerInferior from "../../components/BannerInferior";
import CardPolitica from "../../components/CardPolitica";

import {
  Banner,
  TextBanner,
  TextAbout,
  DivPolitica,
  Politica,
  TextPolitica,
  TextPoliticaH6,
  Cards,
} from "./styles";

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
            <b>Quem</b> somos
          </h1>
          <h4>
            A solução que você precisa, com o custo benefício que sua{" "}
            <b>empresa merece.</b>
          </h4>
          <h5>Conheça nossa história</h5>
        </TextBanner>
      </Banner>

      <TextAbout>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Augue sit
          tortor, donec nisi. Ipsum morbi enim diam auctor blandit libero. Velit
          et integer adipiscing massa cras. Eu velit venenatis pellentesque
          nisl. Pretium suscipit integer fringilla risus enim quis. Aliquam
          gravida ornare neque varius erat libero. Phasellus quam tellus vitae
          ultricies vel mattis massa velit diam. Nam tristique pellentesque
          tortor pellentesque duis amet. Elit, ornare odio euismod habitant
          sapien, aliquam.
        </p>{" "}
        Vestibulum massa interdum nisl sed sed dui. Ultrices pulvinar nullam
        luctus nunc, mi, sollicitudin. Purus amet ut gravida fringilla erat in
        at lectus sit. Turpis libero nec in integer cum magna mauris viverra.
        Morbi sed at ut pulvinar mi. Aenean amet, risus quis non bibendum.
        Faucibus nibh pharetra justo, cras nisl. Urna, at purus nibh
        pellentesque pellentesque ultricies vestibulum nisi sed. Sit tristique
        rhoncus fames metus montes, elit morbi posuere tincidunt. Viverra ipsum
        pellentesque in euismod. Porta lobortis aenean magna tellus tellus eget
        magna.
      </TextAbout>

      <DivPolitica>
        <Politica>
          <TextPolitica>
            <h1>
              Política de <br />
              <b>qualidade</b>
            </h1>
            <TextPoliticaH6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              pellentesque pulvinar platea ultricies porttitor quis laoreet
              imperdiet.
            </TextPoliticaH6>
          </TextPolitica>
        </Politica>
        <Cards>
          <CardPolitica
            name="Segurança"
            src={security}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
          />
          <CardPolitica
            name="Avaliação"
            src={boxgroup}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
          />
          <CardPolitica
            name="Rastreamento"
            src={rastreamento}
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend pellentesque pulvinar platea ultricies porttitor quis laoreet imperdiet."
          />
        </Cards>
      </DivPolitica>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
