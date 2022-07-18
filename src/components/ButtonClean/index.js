import React from "react";
import { useHistory } from "react-router-dom";
import { Option } from "./styles.js";

export default function ButtonClean({ title, url }) {
  const history = useHistory();
  return (
    <>
      <Option onClick={() => history.push(url)}>
        <h5>
          <b>{title}</b>
        </h5>
      </Option>
    </>
  );
}
