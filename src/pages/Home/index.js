import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import ImageAbout from "../../imagens/ImageAbout.png";
import Avaliação from "../../imagens/Avaliação.png";

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
} from "./styles.js";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import useMediaQuery from "@mui/material/useMediaQuery";

function Home() {
  const history = useHistory();
  const [xs, setXs] = useState(
    useMediaQuery((theme) => theme.breakpoints.up("xs"))
  );
  const sm = useMediaQuery((theme) => theme.breakpoints.up("sm"));
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
            <img src={ImageAbout} width="450" height="550" />
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

      <BannerInferior xs={xs} />
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
            text="Devido á sua grande versatilidade de aplicações, os filtros tipo bag, projetado para filtragem de produtos líquidos nos seguimentos alimentícios, farmacêuticos, químicos, químicos, refinarias, usinas, água, tinta entre outros."
          />
        </Grid>
        <Grid item xs={12} md={3} xl={3}>
          <CardProduct
            name="Filtro Multi Bag"
            text="Carcaça Filtro tipo Multi Bag, projetado para filtragem de produtos líquidos nos seguimentos alimentícios, farmacêuticos, químicos, químicos, refinarias, usinas, água, tinta entre outros."
          />
        </Grid>
        <Grid item xs={12} md={3} xl={3}>
          <CardProduct
            name="Filtro Cesto"
            text="Carcaça Filtro tipo Cesto, dispensam o uso de quaisquer ferramentas para sua manutenção além de possuírem uma construção bastante simples e robusta. "
          />
        </Grid>
      </Grid>

      <Rodape />
    </>
  );
}

export default Home;
