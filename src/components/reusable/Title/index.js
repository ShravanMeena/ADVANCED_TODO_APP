import React from "react";
import styled from "styled-components";

export default function Title(props) {
  return <H1 {...props}>{props.children}</H1>;
}

const H1 = styled.h1`
  line-height: 1;
  font-size: 20px;
  color: #2c234d;
`;
