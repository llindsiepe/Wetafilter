import * as React from "react";
import { styled } from "@mui/system";

export const Cards = styled("div")({
  width: 300,
  height: 380,
  borderRadius: 9,
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  marginLeft: "2%",
  marginBottom: "15%",
});

export const TextCard = styled("div")({
  textAlign: "justify",
  marginLeft: "10%",
  marginTop: "10%",
  marginRight: "10%",
});

export const TextName = styled("h3")({
  textAlign: "center",
});

export const Texth6 = styled("h6")({
  marginTop: "10%",
});

export const ImageCard = styled("div")({
  textAlign: "center",
  marginTop: "20%",
});
