import React from "react";
import styled from "styled-components";

export default function ImageUpload({ setVal, label }) {
  return (
    <>
      <Label>{label}</Label>
      <Input
        type="file"
        onChange={(e) => {
          setVal(e.target.files[0]);
        }}
      />
    </>
  );
}

const Input = styled.input`
  outline: none;
  border: 1px solid aliceblue;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
`;

const Label = styled.label`
  margin-top: 20px;
`;
