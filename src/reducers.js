import { UPDATE_USER_TYPE, UPDATE_SUBMISSIONS_TYPE } from "./actions";

export const userReducer = (state = {}, action) => {
  const {
    payload,
    type,
  } = action;
  switch (type) {
    case UPDATE_USER_TYPE:
      return {
        ...state,
        user: payload,
      };
    case UPDATE_SUBMISSIONS_TYPE:
      return {
        ...state,
        submissions: payload,
      };
    default:
      return state
  }
}
