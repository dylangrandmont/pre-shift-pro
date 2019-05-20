import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from "firebase";
import { Provider } from 'react-redux'
import { store } from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const firebaseConfig = {
    apiKey: "AIzaSyCkeS4J1JK6HdRV1yAkF2ynsg3YEDQfAg4",
    authDomain: "pre-shift-pro.firebaseapp.com",
    databaseURL: "https://pre-shift-pro.firebaseio.com",
    projectId: "pre-shift-pro",
    storageBucket: "pre-shift-pro.appspot.com",
    messagingSenderId: "168411796234",
    appId: "1:168411796234:web:7e90ccb61b759d49"
};

firebase.initializeApp(firebaseConfig);

firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        const {
            email,
        } = user;
        const stateUser = {
            email,
        };
        store.dispatch({ type: 'UPDATE_USER', payload: stateUser });
    } else {
        store.dispatch({ type: 'UPDATE_USER', payload: undefined });
    }
  });
