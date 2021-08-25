import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBTXU7mYztBMCnTGIYfK3CTs9f-GxVrH2c",
  authDomain: "react-chat-app-ddef5.firebaseapp.com",
  projectId: "react-chat-app-ddef5",
  storageBucket: "react-chat-app-ddef5.appspot.com",
  messagingSenderId: "237257825935",
  appId: "1:237257825935:web:5e2724362cb2f66e82dafa",
  measurementId: "G-MDJC2FTST1"
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
