import React from "react";
import styled from "styled-components";

export default function Center({ children, height, style }) {
  return <Flex style={{ height, ...style }}>{children}</Flex>;
}

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
