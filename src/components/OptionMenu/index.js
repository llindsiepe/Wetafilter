import React from "react";
import { Container } from "./styles.js";

export default function Button({ title }) {
  return (
    <>
      <Container>{title}</Container>
    </>
  );
}
