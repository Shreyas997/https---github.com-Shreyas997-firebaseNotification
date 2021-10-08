import firebase from "firebase/app";
import "firebase/messaging";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWoxN6Nz6uorsasiULSi1GBiyPH9JwdDY",

  authDomain: "ariya-notifications-poc.firebaseapp.com",

  databaseURL: "https://ariya-notifications-poc-default-rtdb.firebaseio.com",

  projectId: "ariya-notifications-poc",

  storageBucket: "ariya-notifications-poc.appspot.com",

  messagingSenderId: "947349318604",

  appId: "1:947349318604:web:183b349d0eeeb85999cb69"
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

// const publicKey = "BJLN6pbNqWcwGMVLXkZ7YHv_0aXeOGkSpJy_wyggY2OPs7vi4YR3wpDqSVRaLGDeLFWPaXJGH-89tRmawR6HbtE";
const publicKey = "BKKNdC9HdMFYmpKQBpZUYj3kv0sKseG5pqbom_uyB_mapBV0fckhmQBjP7PUzgcucmsT_uiV2D2UxB-p7laQLk8";

export const getToken = async (setTokenFound) => {
  let currentToken = "";

  try {
    currentToken = await messaging.getToken({ vapidKey: publicKey });
    console.log("token",currentToken);
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log("An error occurred while retrieving token. ", error);
  }

  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });
