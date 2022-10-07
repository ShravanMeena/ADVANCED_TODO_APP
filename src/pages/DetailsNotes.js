import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Description from "../components/reusable/Description";
import SubTitle from "../components/reusable/SubTitle";
import Title from "../components/reusable/Title";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function DetailsNotes() {
  const { editNotesData } = useSelector((state) => state.notesReducers);

  return (
    <Main>
      <Container>
        <h1>Notes Details: </h1>
        <br />
        <Title>{capitalizeFirstLetter(editNotesData.todo)} </Title>
        <br />
        <Description>{editNotesData.description}</Description>

        <br />
        <SubTitle>Created At :{editNotesData.createdAt}</SubTitle>
        <SubTitle>Updated At :{editNotesData.updatedAt}</SubTitle>
        <br />
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
