import React from "react";
import { Main, Info } from "./styles.js";

export default function Qualities({ title, text, description }) {
  return (
    <>
      <Main>
        <h3>{title}</h3>
        <Info>
          <h2>{text}</h2>
          <h5>{description}</h5>
        </Info>
      </Main>
    </>
  );
}
