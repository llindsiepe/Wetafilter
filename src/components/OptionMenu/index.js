import React from "react";
import { Container } from "./styles.js";

import { useHistory } from "react-router-dom";

export default function Button({ title, url }) {
  const history = useHistory()
  return (
    <>
      <Container onClick={() => { history.push(url) }} >{title}</Container>
    </>
  );
}
