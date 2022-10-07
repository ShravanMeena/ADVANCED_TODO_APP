import React, { useState } from "react";
import styled from "styled-components";

import {
  deleteNotesAction,
  editNotesAction,
} from "../redux/action/notesAction";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Button from "../components/reusable/Button";
import Title from "../components/reusable/Title";
import TaskModal from "../components/reusable/TaskModal";
import Description from "../components/reusable/Description";
import Absolute from "../components/reusable/Absolute";

import { FiEdit2 } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import Center from "../components/reusable/Center";
import SubTitle from "../components/reusable/SubTitle";
import Span from "../components/reusable/Span";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export default function Notes() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notesData } = useSelector((state) => state.notesReducers);

  const [isOpen, setIsOpen] = useState(false);

  const redirectToEdit = (_item_values) => {
    dispatch(editNotesAction(_item_values));
    navigate(`${_item_values.id}/edit`);
  };

  const deleteNotesHandler = (_item_values) => {
    const remainData = notesData?.filter(
      (flt) => flt.todo !== _item_values.todo
    );
    dispatch(deleteNotesAction(remainData));
  };

  const addNotesHandler = () => {
    dispatch(editNotesAction(null));
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Main>
      {isOpen && <TaskModal handleClose={handleClose} />}

      <Flex justifyContent="space-between">
        <Title>
          Your <Span style={{ color: "red" }}>SMART</Span> notes
        </Title>
        <Button onClick={addNotesHandler}>
          <Title>+ NEW TASK</Title>
        </Button>
      </Flex>

      <Flex mt={30}>
        {notesData.length === 0 && (
          <Center height="60vh">
            <Title>No notes created by you</Title>
            <Button onClick={addNotesHandler}>
              <Title>+ CREATE NOW</Title>
            </Button>
          </Center>
        )}

        {notesData.map((item, index) => {
          return (
            <Box color={item.color} key={index}>
              <div>
                <Title>{capitalizeFirstLetter(item.todo)}</Title>
                <Description>{item.description}</Description>
              </div>
              <Flex justifyContent="space-between">
                <SubTitle>Created At :{item.createdAt}</SubTitle>
                <SubTitle>Updated At :{item.updatedAt}</SubTitle>
              </Flex>
              <Absolute postion="topRight">
                <FiEdit2 onClick={() => redirectToEdit(item)} />
                <AiOutlineDelete onClick={() => deleteNotesHandler(item)} />
              </Absolute>
            </Box>
          );
        })}
      </Flex>
    </Main>
  );
}

const Main = styled.div``;

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  margin-top: ${({ mt }) => (mt ? mt + "px" : "0px")};
`;

const Box = styled.div`
  margin-left: 10px;
  margin-bottom: 10px;
  border: 1px solid ${({ color }) => (color ? color : "red")};
  border-left: 5px solid ${({ color }) => (color ? color : "red")};
  /* background-color: aliceblue; */
  border-radius: 10px;
  padding: 20px;
  min-height: 150px;
  width: 24%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
