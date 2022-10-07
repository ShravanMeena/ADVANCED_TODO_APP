/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { errorAction } from "../../../redux/action/errorActions";
import Absolute from "../Absolute";

export default function Alert({ children }) {
  const dispatch = useDispatch();

  const closeError = () => {
    dispatch(errorAction(null));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(errorAction(null));
    }, 4000);
  }, []);

  return (
    <AlertMain>
      <Content>
        <MSG>{children}</MSG>

        <Absolute onClick={closeError}>
          <Close>X</Close>
        </Absolute>
      </Content>
    </AlertMain>
  );
}

const AlertMain = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const MSG = styled.p`
  font-size: 18px;
  color: white;
  font-weight: 200;
  width: 80%;
`;

const Close = styled.p`
  color: red;
`;

const Content = styled.div`
  background-color: black;
  border-radius: 4px;
  position: relative;
  padding: 10px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
