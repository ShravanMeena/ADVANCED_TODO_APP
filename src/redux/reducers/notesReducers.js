import {
  ALL_NOTES,
  CREATE_NOTES,
  DELETE_NOTES,
  EDIT_NOTES,
  FINAL_EDIT_NOTES,
} from "../action/types";

const initState = {
  test: null,
  editNotesData: {},
  notesData: [
    {
      id: 1,
      todo: "About this app",
      description: "This is a great app with great functionality",
      completed: false,
    },
  ],
};

const notesReducers = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case CREATE_NOTES:
      return {
        ...state,
        notesData: [payload, ...state.notesData],
      };
    case DELETE_NOTES:
      return {
        ...state,
        notesData: payload,
      };
    case EDIT_NOTES:
      return {
        ...state,
        editNotesData: payload,
      };
    case FINAL_EDIT_NOTES:
      return {
        ...state,
        notesData: payload,
      };
    case ALL_NOTES:
      return {
        ...state,
        notesData: payload,
      };
    default:
      return state;
  }
};

export default notesReducers;
