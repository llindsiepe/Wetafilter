import React from "react";
import { Option } from "./styles.js";

export default function ButtonClean({ title }) {
  return (
    <>
      <Option>
        <h5>
          <b>{title}</b>
        </h5>
      </Option>
    </>
  );
}
