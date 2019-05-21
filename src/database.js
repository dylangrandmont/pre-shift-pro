import { database } from 'firebase';
import { store, dispatch } from './store';
import { updateSubmissions } from './actions';

export const readSubmissions = () => {
  database().ref('submissions/').on('value', (snapshot) => {
    const submissions = snapshot.val();
    dispatch(updateSubmissions(submissions));
  });
}

export const writeSubmission = () => {
  const userState = store.getState().user;
  const userUid = userState ? userState.uid : '';
  const submissionId = database().ref('submissions').child('posts').push().key;
  database().ref(`submissions/${submissionId}`).set({
    company: 'some company',
    operatorName: 'name',
  });

  database().ref(`users/${userUid}/submissions/`).update({
    [submissionId]: true,
  });
}
