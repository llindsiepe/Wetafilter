import React from "react";
import { Option, Text } from "./styles.js";

export default function Button({ title }) {
  return (
    <>
      <Option>
        <Text>{title}</Text>
      </Option>
    </>
  );
}
