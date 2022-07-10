import React from "react";

import Peças from "../../imagens/imagepack.png";
import Avaliação from "../../imagens/avaliacao.png";

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
          text="Devido á sua grande versatilidade de aplicações, os filtros tipo bag, projetado para filtragem de produtos líquidos nos seguimentos alimentícios, farmacêuticos, químicos, químicos, refinarias, usinas, água, tinta entre outros."
        />
        <CardProduct
          name="Filtro Multi Bag"
          text="Carcaça Filtro tipo Multi Bag, projetado para filtragem de produtos líquidos nos seguimentos alimentícios, farmacêuticos, químicos, químicos, refinarias, usinas, água, tinta entre outros."
        />
        <CardProduct
          name="Filtro Cesto"
          text="Carcaça Filtro tipo Cesto, dispensam o uso de quaisquer ferramentas para sua manutenção além de possuírem uma construção bastante simples e robusta. Desenvolvidos segundo a norma ASME Seção VIII, divisão I."
        />
        <CardProduct
          name="Filtro Cesto Automático"
          text="Projetado para operar na remoção de particulados sólidos dos líquidos. Seu projeto inovador permite filtração contínua mesmo durante a operação de autolimpeza."
        />
      </Cards>
      <Cards>
        <CardProduct
          name="Filtro Cartucho"
          text="Carcaça Filtro Multi cartuchos são utilizados em diversos setores industriais com a finalidade de assegurar a qualidade de fabricação dos produtos finais. Desenvolvidos segundo a norma ASME Seção VIII, divisão I."
        />
        <CardProduct
          name="Filtro Cartucho Automático"
          text="Filtro Cartucho Automático, foi projetado para operar na remoção de particulados sólidos dos líquidos. Seu projeto inovador permite filtração contínua mesmo durante a operação de autolimpeza."
        />
        <CardProduct
          name="Carcaça Plástica"
          text="As carcaças de polipropileno, são utilizadas para filtração de água e líquidos em geral. Pressão máxima 7Kgf/cm2. As carcaças de polipropileno Big Blue, são utilizadas para filtração de água e líquidos em geral. Pressão máxima 7Kgf/cm2."
        />
        <CardProduct
          name="Elementos Filtrantes"
          text="Nossos elementos filtrantes, atendem as mais críticas condições de aplicação, adequados a cada sistema de operação. Atendendo a necessidade do cliente e nacionalizando produtos com economia e tecnologia."
        />
      </Cards>

      <BannerInferior />

      <Rodape />
    </>
  );
}

export default Sobre;
