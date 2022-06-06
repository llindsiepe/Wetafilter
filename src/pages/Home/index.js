import React from "react";

import ImageAbout from "../../imagens/ImageAbout.png";
import Avaliação from "../../imagens/Avaliação.png";

import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
import Qualities from "../../components/Qualities";
import ButtonClean from "../../components/ButtonClean";
import BannerInferior from "../../components/BannerInferior";
import CardProduct from "../../components/CardProduct";

import {
  Banner,
  TextBanner,
  OptionsBanner,
  About,
  AboutUs,
  ImageAboutUs,
  TextAboutUs,
  Products,
  TextProducts,
  TextProductsH6,
  Cards,
  DivProducts,
  TextBannerH1,
  TextAboutUsH1,
  TextAboutUsH6,
} from "./styles.js";

function Home() {
  return (
    <>
      <Navbar />
      <Banner>
        <TextBanner>
          <TextBannerH1 style={{ marginBottom: "8%" }}>
            <b>
              EXCELÊNCIA, TECNOLOGIA <br />
              <span style={{ color: "#ED3237" }}>& </span> SEGURANÇA.
            </b>
          </TextBannerH1>
          <OptionsBanner>
            <ButtonClean title="Nossos produtos" />
            <About>
              <b>+ CONHEÇA-NOS</b>
            </About>
          </OptionsBanner>
        </TextBanner>
      </Banner>
      <AboutUs>
        <ImageAboutUs>
          <img src={ImageAbout} />
        </ImageAboutUs>
        <TextAboutUs>
          <img src={Avaliação} />
          <TextAboutUsH1>
            <b>Conheça</b> quem entende do assunto
          </TextAboutUsH1>
          <TextAboutUsH6>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet in
            non diam, orci velit. Tristique dui ullamcorper quis fermentum,
            tempus, dui ipsum lorem.
          </TextAboutUsH6>
          <Qualities
            title="Experiência"
            text="+40 anos"
            description="Atuando no ramo"
          />
          <Qualities
            title="Compromisso"
            text="+1.000"
            description="Clientes satisfeitos"
          />
          <Qualities
            title="Investimento"
            text="+1.200"
            description="Produtos diferentes"
          />
        </TextAboutUs>
      </AboutUs>

      <BannerInferior />
      <DivProducts>
        <Products>
          <TextProducts>
            <h2>
              Nossos produtos
              <br /> <span style={{ color: "#ED3237" }}>& </span>{" "}
              <b>catálogo</b>
            </h2>
            <TextProductsH6>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend
              pellentesque pulvinar platea ultricies porttitor quis laoreet
              imperdiet.
            </TextProductsH6>
          </TextProducts>
        </Products>
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
        </Cards>
      </DivProducts>

      <Rodape />
    </>
  );
}

export default Home;
