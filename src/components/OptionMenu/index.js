import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles.js";

export default function Button({ title, url }) {
  const history = useHistory();

  return (
    <>
      <Container onClick={() => history.push(url)}>{title}</Container>
    </>
  );
}
