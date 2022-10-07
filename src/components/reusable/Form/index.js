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
// import ImageUpload from "../ImageUpload";
import { useNavigate } from "react-router";

export default function TaskModal({ handleClose }) {
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  // const [image, setImage] = useState("");
  const [isEdit, seIsEdit] = useState(false);
  const [color, setColor] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { notesData } = useSelector((state) => state.notesReducers);

  const { editNotesData } = useSelector((state) => state.notesReducers);

  useEffect(() => {
    setTitle(editNotesData?.todo);
    setDesc(editNotesData?.description);
    setColor(editNotesData?.color || "blue");
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
      createdAt: !isEdit ? myDate : editNotesData?.createdAt,
      updatedAt: myDate,
      color,
    };

    if (!title) {
      return;
    }
    if (!description) {
      return;
    }

    if (isEdit) {
      let getEditabaleNotes = notesData?.filter(
        (flt) => flt.id === editNotesData.id
      )[0];

      getEditabaleNotes.todo = title;
      getEditabaleNotes.updatedAt = myDate;
      getEditabaleNotes.description = description;
      getEditabaleNotes.color = color;

      dispatch(finalEditNotesAction(notesData));
      navigate("/");
    } else {
      dispatch(createNotesAction(data));
    }

    handleClose && handleClose();
  };

  return (
    <Form>
      <InputTextField
        label="Enter title"
        placeholder="Enter yout title"
        setVal={setTitle}
        val={title}
      />

      <InputTextField
        label="Enter description"
        multiline={true}
        placeholder="Enter yout description"
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
              {item?.code?.toUpperCase()}{" "}
            </option>
          );
        })}
      </select>

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

const colors = [
  {
    code: "red",
  },
  {
    code: "green",
  },
  {
    code: "pink",
  },

  {
    code: "blue",
  },
  {
    code: "yellow",
  },
  {
    code: "aliceblue",
  },
  {
    code: "black",
  },
  {
    code: "purple",
  },
  {
    code: "gray",
  },
  {
    code: "brown",
  },
  {
    code: "orange",
  },
];
