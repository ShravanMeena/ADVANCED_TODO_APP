import React from "react";
import styled from "styled-components";
import Logo from "./reusable/Logo";

export default function Header() {
  return (
    <FlexRow>
      <Logo />
    </FlexRow>
  );
}

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  padding: 10px 20px;
`;
