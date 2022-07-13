import * as React from "react";
import { styled } from "@mui/system";

export const Main = styled("div")({
  width: "100%",
  minHeight: "30rem",
  height: '100%',
  backgroundColor: "#f1f1f1",
});

export const Container = styled("div")({
  display: "flex",
  justifyContent: "space-between",
});

export const Law = styled("h6")({
  color: "#30456E",
  marginTop: "3%",
  textAlign: "center",
});

export const Info = styled("div")({
  paddingTop: "5%",
  paddingRight: "5%",
  marginLeft: "5%",
});

export const Redes = styled("div")({
  marginTop: "3%",
  display: "flex",
});

export const AboutUs = styled("div")({
  color: "#30456E",
  marginTop: "4%",
  marginBottom: "auto",

  h5: { width: "50%", textAlign: "justify" },
});

export const Navegue = styled("div")({
  color: "#30456E",
  marginTop: "4%",
  marginBottom: "auto",
  marginRight: "10%",

  h5: { width: "100%", textAlign: "justify" },
});
