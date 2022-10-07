import React from "react";
import styled from "styled-components";

export default function Absolute({ children, postion, onClick }) {
  return (
    <DIV onClick={onClick} postion={postion}>
      {children}
    </DIV>
  );
}
const DIV = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;
