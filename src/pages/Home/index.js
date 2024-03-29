import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ImageAbout from "../../imagens/ImageAbout.png";
import Avaliação from "../../imagens/Avaliação.png";
import FiltroBag from "../../imagens/bag.png";
import FiltroMulti from "../../imagens/FiltroMulti.png";
import FiltroCesto from "../../imagens/FiltroCesto.png";

import Logo1 from "../../imagens/Logo1.png";
import Logo2 from "../../imagens/Logo2.png";
import Logo3 from "../../imagens/Logo3.png";
import Logo4 from "../../imagens/Logo4.png";
import Logo5 from "../../imagens/Logo5.png";
import Logo6 from "../../imagens/Logo6.png";
import Logo7 from "../../imagens/Logo7.png";
import Logo8 from "../../imagens/Logo8.png";
import Logo9 from "../../imagens/Logo9.png";


import Navbar from "../../components/Navbar";
import Rodape from "../../components/Rodape";
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
  Qualities,
  QualitiesTitle,
  QualitiesData,
  TextProduct,
} from "./styles.js";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Icons } from "./styled"

function Home() {
  const history = useHistory();
  const [xs, setXs] = useState(
    useMediaQuery((theme) => theme.breakpoints.up("xs"))
  );
  const [sm, setSm] = useState(
    useMediaQuery((theme) => theme.breakpoints.up("sm"))
  );
  const md = useMediaQuery((theme) => theme.breakpoints.up("md"));
  const lg = useMediaQuery((theme) => theme.breakpoints.up("lg"));

  function handleClick() {
    history.push("/sobre");
  }

  console.log(xs, sm, md, lg);

  return (
    <>
      <Navbar />
      <Banner style={{ width: xs ? "150%" : md ? "100%" : "100%" }}>
        <TextBanner>
          <TextBannerH1>
            <b>
              EXCELÊNCIA, TECNOLOGIA <br />
              <span style={{ color: "#ED3237" }}>& </span> SEGURANÇA.
            </b>
          </TextBannerH1>
          <OptionsBanner>
            <ButtonClean
              title="Nossos produtos"
              onClick={handleClick}
              url={"/Produtos"}
            />
            <About>
              <b>+ CONHEÇA-NOS</b>
            </About>
          </OptionsBanner>
        </TextBanner>
      </Banner>
      <AboutUs>
        <ImageAboutUs>
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <img src={ImageAbout} width="70%" />
          </Box>
        </ImageAboutUs>
        <TextAboutUs>
          <Box display={{ xs: "none", sm: "none", md: "block" }}>
            <img src={Avaliação} />
          </Box>
          <TextAboutUsH1>
            <b>Conheça</b> quem entende do assunto
          </TextAboutUsH1>
          <TextAboutUsH6>
            Fundada em 2006, a Wetafilter é uma empresa especializada em filtros
            industriais com profissionais com mais de 40 anos no ramo.
          </TextAboutUsH6>
          <Qualities>
            <QualitiesTitle>
              <h2 class="style">
                <b>Experiência</b>
              </h2>
              <h2 class="style">
                <b>Compromisso</b>
              </h2>
              <h2 class="style">
                <b>Investimento</b>
              </h2>
            </QualitiesTitle>
            <QualitiesData>
              <h1>
                <b>+40 anos</b>
              </h1>
              <h5>Atuando no ramo</h5>
              <h1>
                <b>+500</b>
              </h1>
              <h5>Clientes satisfeitos</h5>
              <h1>
                <b>+10.000</b>
              </h1>
              <h5>Itens fabricados</h5>
            </QualitiesData>
          </Qualities>
        </TextAboutUs>
      </AboutUs>

      <BannerInferior sm={sm} />
      <Grid container direction="row" spacing={3}>
        <Grid item xs={12} md={3} xl={3}>
          <Products>
            <TextProducts>
              <h2>
                Nossos produtos
                <br /> <span style={{ color: "#ED3237" }}>& </span>{" "}
                <b>catálogo</b>
              </h2>
              <TextProductsH6>
                Seguindo as normas (DIN, ASTM, ASME e ISO), contamos com
                profissionais especializados, com intuito de fornecer produtos
                com novas tecnologias e elevado custo benefício aos clientes
              </TextProductsH6>
              <h5 style={{ color: "#30456E", fontWeight: "bold" }}>
                Confira o catálogo completo
              </h5>
            </TextProducts>
          </Products>
        </Grid>

        <Grid item xs={12} md={3} xl={3}>
          <CardProduct
            name="Filtro Bag"
            image={FiltroBag}
            text="Devido à sua grande versatilidade de aplicações, os filtros tipo bag, projetado para filtragem de produtos líquidos nos segmentos alimentícios, farmacêuticos, químicos, refinarias, usinas, água, tinta entre outros."
          />
        </Grid>
        <Grid item xs={12} md={3} xl={3}>
          <CardProduct
            name="Filtro Multi Bag"
            image={FiltroMulti}
            text="Carcaça Filtro tipo Multi Bag, projetado para filtragem de produtos líquidos nos segmentos alimentícios, farmacêuticos, químicos, refinarias, usinas, água, tinta entre outros."
          />
        </Grid>
        <Grid item xs={12} md={3} xl={3}>
          <CardProduct
            name="Filtro Cesto"
            image={FiltroCesto}
            text="Carcaça Filtro tipo Cesto, dispensam o uso de quaisquer ferramentas para sua manutenção além de possuírem uma construção bastante simples e robusta. "
          />
        </Grid>
      </Grid>

      <Grid container direction="row" spacing={3}>
          <Grid item xs={12} md={6} xl={12}>
                <TextProduct>
                  <h2>Conheça alguns de nossos clientes</h2>
                </TextProduct>
                <Icons>
                  <img src={Logo1} />
                  <img src={Logo2} />
                  <img src={Logo3} />
                  <img src={Logo4} />
                </Icons>
                <Icons>
                  <img src={Logo5} />
                  <img src={Logo6} />
                  <img src={Logo8} />
                  <img src={Logo9} />
                </Icons>
          </Grid>
        </Grid>

      <Rodape />
    </>
  );
}

export default Home;
