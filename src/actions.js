export const UPDATE_USER_TYPE = 'UPDATE_USER';

export const signOutUser = () => ({
    type: UPDATE_USER_TYPE,
    payload: undefined,
});

export const signInUser = (user) => ({
    type: UPDATE_USER_TYPE,
    payload: user,
});
