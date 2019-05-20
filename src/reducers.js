import { UPDATE_USER_TYPE } from "./actions";

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
        default:
          return state
    }
}
