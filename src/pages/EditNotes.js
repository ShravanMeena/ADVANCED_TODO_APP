import React from "react";
import styled from "styled-components";
import Form from "../components/reusable/Form";
import Title from "../components/reusable/Title";
export default function EditNotes() {
  return (
    <Main>
      <Container>
        <Title>Edit Your Note</Title>
        <Form />
      </Container>
    </Main>
  );
}

const Main = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
