import * as React from "react";
import { styled } from "@mui/system";

export const Cards = styled("div")({
  width: 300,
  height: 440,
  borderRadius: 9,
  backgroundColor: "#ffffff",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
  marginLeft: "5%",
  marginBottom: "8%",
});

export const TextCard = styled("div")({
  textAlign: "justify",
  marginLeft: "10%",
  marginTop: "10%",
  marginRight: "10%",

  h3: {
    textAlign: "left",
  },
});

export const Texth6 = styled("h6")({
  marginTop: "10%",
});

export const ImageCard = styled("div")({
  width: "100%",
  textAlign: "center",
});

export const Download = styled("div")({
  marginLeft: "14%",
  marginTop: "8%",
  marginRight: "14%",
});
