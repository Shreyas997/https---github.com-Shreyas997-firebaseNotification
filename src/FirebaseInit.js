import * as firebase from 'firebase/app';
import * as Messaging from 'firebase/messaging';

const firebaseConfig = {
  apiKey: "AIzaSyDWoxN6Nz6uorsasiULSi1GBiyPH9JwdDY",
  authDomain: "ariya-notifications-poc.firebaseapp.com",
  projectId: "ariya-notifications-poc",
  storageBucket: "ariya-notifications-poc.appspot.com",
  messagingSenderId: "947349318604",
  appId: "1:947349318604:web:183b349d0eeeb85999cb69",
  measurementId: "G-BHZVFW7WX1"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

// const messaging = Messaging.getMessaging();
const publicKey = "BKKNdC9HdMFYmpKQBpZUYj3kv0sKseG5pqbom_uyB_mapBV0fckhmQBjP7PUzgcucmsT_uiV2D2UxB-p7laQLk8";

export const getToken = async (setTokenFound) => {
  let currentToken = '';
  try {
    currentToken = await Messaging.getToken({VapidKey: publicKey});
    if (currentToken) {
      setTokenFound(true);
    } else {
      setTokenFound(false);
    }
  } catch (error) {
    console.log('An error occurred while retrieving token.', error);
  }
  return currentToken;
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    Messaging.onMessage((payload) => {
      resolve(payload);
    });
  });