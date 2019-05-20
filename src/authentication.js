import { dispatch } from './store'
import { auth, initializeApp } from 'firebase';
import { signInUser, signOutUser } from './actions';

const firebaseConfig = {
  apiKey: "AIzaSyCkeS4J1JK6HdRV1yAkF2ynsg3YEDQfAg4",
  authDomain: "pre-shift-pro.firebaseapp.com",
  databaseURL: "https://pre-shift-pro.firebaseio.com",
  projectId: "pre-shift-pro",
  storageBucket: "pre-shift-pro.appspot.com",
  messagingSenderId: "168411796234",
  appId: "1:168411796234:web:7e90ccb61b759d49"
};

export const initializeAuthentication = () => {
  initializeApp(firebaseConfig);

  auth().onAuthStateChanged(function(user) {
    if (user) {
        const {
            email,
        } = user;
        const stateUser = {
            email,
        };
  
        dispatch(signInUser(stateUser));
    } else {
        dispatch(signOutUser());
    }
  }); 
}
