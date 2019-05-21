export const UPDATE_USER_TYPE = 'UPDATE_USER';
export const UPDATE_SUBMISSIONS_TYPE = 'UPDATE_SUBMISSIONS_TYPE';

export const signOutUser = () => ({
    type: UPDATE_USER_TYPE,
    payload: undefined,
});

export const signInUser = (user) => ({
    type: UPDATE_USER_TYPE,
    payload: user,
});

export const updateSubmissions = (submissions) => ({
    type: UPDATE_SUBMISSIONS_TYPE,
    payload: submissions,
});
