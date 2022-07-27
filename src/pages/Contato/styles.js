import * as React from "react";
import { styled } from "@mui/system";

export const Title = styled("div")({
  textAlign: "center",
  marginTop: "5%",
  marginBottom: "5%",
  color: "#30456E",
});

export const Container = styled("div")({
  display: "flex",
  marginBottom: "10%",
});

export const CardContact = styled("div")({
  background: "#EFEFEF",
  borderRadius: "20px",
  minWidth: "50%",
  minHeight: "45rem",
  height: '100%',
  padding: 15,

  h3: {
    width: "60%",
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: "8%",
    marginBottom: "3rem",
    color: "#30456E",
  },

  input: {
    width: "100%",
    border: "none",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
  },

  textarea: {
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    border: "none",
    padding: "1rem",
    marginBottom: "1rem",
    borderRadius: "0.5rem",
    resize: 'vertical'
  },
});

export const ButtonSend = styled("button")({
  paddingTop: "1%",
  marginLeft: "auto",
  marginRight: "auto",
  border: "none",
  textAlign: "center",
  width: "100%",
  height: 40,
  borderRadius: 5,
  backgroundColor: "#30456e",
  color: "white",

});

export const InfoContact = styled("div")({

});

export const Icons = styled("div")({
  display: "flex",
  alignItems: "center",
  marginBottom: "6%",

  h3: {
    marginLeft: "5%",
  },
});

export const Line = styled("div")({
  border: "0.5px solid #000000",
  marginTop: "10%",
});

export const Redes = styled("div")({
  textAlign: 'center',
  h3: { color: "#30456e", marginBottom: "5%" },
});
