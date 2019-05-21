import { database } from 'firebase';
import { store } from './store';

export const readUserData = () => {
  const users = database().ref('users/');
  users.on('value', function(snapshot) {
    console.log(snapshot.val())
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
