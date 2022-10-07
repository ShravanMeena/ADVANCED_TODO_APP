import React from "react";
import styled from "styled-components";

export default function InputTextField({
  placeholder,
  setVal,
  val,
  label,
  multiline,
}) {
  return (
    <>
      <Label>{label}</Label>
      {multiline ? (
        <TextInput
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      ) : (
        <Input
          placeholder={placeholder}
          onChange={(e) => setVal(e.target.value)}
          value={val}
        />
      )}
    </>
  );
}

const Input = styled.input`
  outline: none;
  border: 1px solid #bbb;
  border-radius: 4px;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
`;

const TextInput = styled.textarea`
  outline: none;
  border: 1px solid #bbb;
  height: 100px;
  width: 100%;
  padding: 0px 10px;
  border-radius: 4px;
`;

const Label = styled.label`
  margin-top: 20px;
`;
