import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InputTextField from "../InputTextField";
import Button from "../Button";
import Title from "../Title";
import Center from "../Center";
import { useDispatch, useSelector } from "react-redux";
import {
  createNotesAction,
  finalEditNotesAction,
} from "../../../redux/action/notesAction";
import { errorAction } from "../../../redux/action/errorActions";
import { useNavigate } from "react-router";
import Alert from "../Alert";
import { colors } from "../../../data";

export default function TaskModal({ handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  // const [image, setImage] = useState("");
  const [isEdit, seIsEdit] = useState(false);
  const [color, setColor] = useState("");
  const [checked, setChecked] = React.useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { notesData } = useSelector((state) => state.notesReducers);

  const { editNotesData } = useSelector((state) => state.notesReducers);

  useEffect(() => {
    setTitle(editNotesData?.todo);
    setDesc(editNotesData?.description);
    setColor(editNotesData?.color || "red");
    setChecked(editNotesData?.completed);

    if (editNotesData?.id) {
      seIsEdit(true);
    }
  }, [editNotesData]);

  const submitFormHandler = () => {
    var id = "id" + Math.random().toString(16).slice(2);

    let myDate = new Date().toLocaleString().replace(",", "");

    let data = {
      id: id + notesData?.length + 10,
      todo: title,
      description,
      completed: false,
      // image,
      createdAt: myDate,
      updatedAt: myDate,
      color,
    };

    let isAlreadyTitleExist = [];

    if (isEdit) {
      let withoutEditableData = notesData?.filter(
        (flt) => flt.id !== editNotesData.id
      );
      isAlreadyTitleExist = withoutEditableData?.filter(
        (flt) => flt.todo?.toLowerCase() === title?.toLowerCase()
      );
    } else {
      isAlreadyTitleExist = notesData?.filter(
        (flt) => flt.todo?.toLowerCase() === title?.toLowerCase()
      );
    }

    if (isAlreadyTitleExist?.length > 0) {
      dispatch(errorAction("Title should not be same as existing title"));
      return;
    }

    if (!title) {
      dispatch(errorAction("Title is mandatory"));
      return;
    }
    if (title.length < 10 && !description) {
      dispatch(errorAction("Description is mandatory"));
      return;
    }

    if (isEdit) {
      let getEditabaleNotes = notesData?.filter(
        (flt) => flt.id === editNotesData.id
      )[0];

      getEditabaleNotes.todo = title;
      getEditabaleNotes.updatedAt = myDate;
      getEditabaleNotes.description = description;
      getEditabaleNotes.completed = checked;
      getEditabaleNotes.color = color;

      dispatch(finalEditNotesAction(notesData));
      dispatch(errorAction("Succesfully notes updated"));

      navigate("/");
    } else {
      dispatch(createNotesAction(data));
      dispatch(errorAction("Succesfully notes added"));
    }

    handleClose && handleClose();
  };

  return (
    <Form>
      <Alert />
      <InputTextField
        label="Enter title"
        placeholder="Enter your title"
        setVal={setTitle}
        val={title}
      />
      <InputTextField
        label="Enter description"
        multiline={true}
        placeholder="Enter your description"
        setVal={setDesc}
        val={description}
      />

      {/* <ImageUpload
        label="Enter description"
        multiline={true}
        placeholder="Enter yout description"
        setVal={setImage}
        val={image}
      />
      {image && (
        <img
          src={URL.createObjectURL(image)}
          alt="imageasdasd"
          style={{ width: 50, height: 50 }}
        />
      )} */}

      <select
        style={{
          width: "100%",
          height: 40,
          outline: "none",
        }}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value={color}>SELECT A COLOR FOR BETTER EXPERIENCE</option>
        {colors.map((item, index) => {
          return (
            <option value={item.code} key={index}>
              {item?.code?.toUpperCase()}
            </option>
          );
        })}
      </select>

      {isEdit && (
        <div style={{ marginTop: 10 }}>
          <label>
            <input
              type="checkbox"
              defaultChecked={checked}
              onChange={() => setChecked(!checked)}
            />
            Do you complete this note
          </label>
        </div>
      )}
      <Center style={{ margin: 10 }} fullHeight={false}>
        <Button onClick={submitFormHandler}>
          <Title>{isEdit ? "EDIT" : "SUBMIT"}</Title>
        </Button>
      </Center>
    </Form>
  );
}

const Form = styled.div`
  margin-top: 30px;
`;

// const ColorBox = styled.div`
//   width: 40px;
//   height: 40px;
// `;
