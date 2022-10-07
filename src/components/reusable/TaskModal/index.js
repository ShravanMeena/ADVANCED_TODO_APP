import React from "react";
import styled from "styled-components";
import Absolute from "../Absolute";
import { GrClose } from "react-icons/gr";
import Form from "../Form";

export default function TaskModal({ handleClose }) {
  return (
    <Modal>
      <Content>
        <Absolute onClick={handleClose}>
          <GrClose />
        </Absolute>

        <Form handleClose={handleClose} />
      </Content>
    </Modal>
  );
}

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  background-color: white;
  border-radius: 4px;
  position: relative;
  padding: 10px;
  width: 400px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
