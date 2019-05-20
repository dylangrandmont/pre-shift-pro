export const userReducer = (state = {}, action) => {
    const {
        payload,
        type,
    } = action;
    switch (type) {
        case 'UPDATE_USER':
          return {
              ...state,
              user: payload,
          };
        default:
          return state
    }
}
