import {
  CREATE_NOTES,
  DELETE_NOTES,
  EDIT_NOTES,
  FINAL_EDIT_NOTES,
} from "./types";

export const createNotesAction = (payload) => ({
  type: CREATE_NOTES,
  payload,
});

export const deleteNotesAction = (payload) => ({
  type: DELETE_NOTES,
  payload,
});

export const editNotesAction = (payload) => ({
  type: EDIT_NOTES,
  payload,
});

export const finalEditNotesAction = (payload) => ({
  type: FINAL_EDIT_NOTES,
  payload,
});
