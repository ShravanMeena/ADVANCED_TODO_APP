import React from "react";
import styled from "styled-components";

export default function Description({ children }) {
  return <P>{children}</P>;
}
const P = styled.p`
  line-height: 1.2;
  font-weight: 400;
`;
