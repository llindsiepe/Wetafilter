import React from "react";

import Peças from "../../imagens/imagepack.png";
import Avaliação from "../../imagens/avaliacao.png";
import rastreamento from "../../imagens/rastreamento.png";
import boxgroup from "../../imagens/boxgroup.png";
import security from "../../imagens/security.png";
import ImageAbout from "../../imagens/aboutImage.png";

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
          Fundada em 2006, a Wetafilter é uma empresa especializada em filtros
          industriais com profissionais com mais de 40 anos no ramo. Seguindo as
          normas (DIN, ASTM, ASME e ISO), contamos com profissionais
          especializados, com intuito de fornecer produtos com novas tecnologias
          e elevado custo benefício aos clientes, desde a avaliação e
          especificações técnica, até o fornecimento. Atendemos diversos
          segmentos da indústria, Alimentícia, Metalúrgica, Usinas e Refinarias,
          Farmacêutica, Indústria automobilística entre outras.
        </p>{" "}
        <span style={{ color: "#30456E" }}>
          <b>Missão:</b>
        </span>{" "}
        Fornecer produtos com novas tecnologias e custo benefício aos seus
        clientes, desde á avaliação e especificações técnica, fornecimento e pós
        vendas.
        <br />
        <span style={{ color: "#30456E" }}>
          <b>Valores:</b>
        </span>{" "}
        Satisfação do cliente, Valorizar e respeitar às pessoas, Ética e
        Transparência com nossos colaboradores.
        <br />
        <span style={{ color: "#30456E" }}>
          <b>Visão:</b>
        </span>{" "}
        Aprimorar nossos produtos e ser referência no ramo de filtração.
      </TextAbout>

      <DivPolitica>
        <Politica>
          <TextPolitica>
            <h1>
              Política de <br />
              <b>qualidade</b>
            </h1>
            <TextPoliticaH6>
              Nossa política de qualidade reforça a posição de referência
              alcançada no mercado fabricando produtos inovadores, com alto
              desempenho e qualidade.
            </TextPoliticaH6>
          </TextPolitica>
        </Politica>
        <Cards>
          <CardPolitica name="Segurança" src={security} />
          <CardPolitica name="Avaliação" src={boxgroup} />
          <CardPolitica name="Rastreamento" src={rastreamento} />
        </Cards>
      </DivPolitica>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
