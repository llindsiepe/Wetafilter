import * as React from "react";
import { styled } from "@mui/system";

import Image from "../../imagens/Banner.png";

export const Banner = styled("div")({
  backgroundImage: `url(${Image})`,
  marginBottom: "5%",
  width: "100%",
  height: "55rem",
});

export const OptionsBanner = styled("div")({
  display: "flex",
});

export const About = styled("button")({
  marginLeft: "2%",
  marginTop: "auto",
  marginBottom: "auto",
  color: "white",
  border: "none",
  background: "none",
});

export const TextBanner = styled("div")({
  marginLeft: "10%",
  paddingTop: "8%",
});

export const TextBannerH1 = styled("h1")({
  fontSize: "5rem",
  width: "30%",
  color: "white",
});

export const AboutUs = styled("div")({
  display: "flex",
  marginBottom: "10%",
});

export const ImageAboutUs = styled("div")({
  marginRight: "1%",
});

export const TextAboutUs = styled("div")({
  marginTop: "8rem",
});

export const TextAboutUsH1 = styled("h1")({
  color: "#30456E",
});

export const TextAboutUsH6 = styled("h5")({
  maxWidth: '80%'
});

export const Products = styled("div")({
  display: "flex",
});

export const TextProducts = styled("div")({
  marginLeft: "20%",
  marginTop: "20%",
});

export const TextProductsH6 = styled("h6")({
  width: "60%",
  marginTop: "2%",
  textAlign: "justify",
  marginBottom: "5%",
});

export const Cards = styled("div")({
  display: "flex",
  marginTop: "10%",
  marginRight: "5%",
});

export const DivProducts = styled("div")({
  display: "flex",
});

export const Qualities = styled("div")({
  display: "flex",
  marginTop: "2rem",
});

export const QualitiesTitle = styled("div")({
  h2: {
    marginBottom: "5.5rem",
    marginRight: "3rem",
    color: "#30456E",
  },
});

export const QualitiesData = styled("div")({
  textAlign: "center",
  color: "#30456E",
});
