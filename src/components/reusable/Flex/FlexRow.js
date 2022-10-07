import React from "react";
import styled from "styled-components";

export default function FlexRow({ children, bg }) {
  return <FlexLocal bg={bg}>{children}</FlexLocal>;
}

const FlexLocal = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${(bg) => (bg ? "red" : "transparent")};
`;
