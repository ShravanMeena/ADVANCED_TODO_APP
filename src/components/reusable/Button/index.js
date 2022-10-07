import React from "react";
import styled from "styled-components";

export default function Button(props) {
  return <BTN {...props}>{props.children}</BTN>;
}

const BTN = styled.button`
  outline: none;
  border: 1px solid #bbb;
  background-color: transparent;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`;
