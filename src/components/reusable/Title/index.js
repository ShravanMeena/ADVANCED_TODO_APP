import React from "react";
import styled from "styled-components";

export default function Title({ children }) {
  return <H1>{children}</H1>;
}

const H1 = styled.h1`
  line-height: 1;
  font-size: 20px;
  color: #2c234d;
`;
