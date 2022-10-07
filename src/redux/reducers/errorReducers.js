import { ERROR } from "../action/types";

const initState = {
  error: null,
};

const errorReducers = (state = initState, action) => {
  const { payload } = action;

  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};

export default errorReducers;
