importScripts('https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/9.1.1/firebase-messaging.js');
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDWoxN6Nz6uorsasiULSi1GBiyPH9JwdDY",
  authDomain: "ariya-notifications-poc.firebaseapp.com",
  projectId: "ariya-notifications-poc",
  storageBucket: "ariya-notifications-poc.appspot.com",
  messagingSenderId: "947349318604",
  appId: "1:947349318604:web:183b349d0eeeb85999cb69",
  measurementId: "G-BHZVFW7WX1"  
};

  firebase.initializeApp(firebaseConfig);

  const messaging = firebase.messaging();

  messaging.onBackgroundMessage(function (payload) {
    console.log("Received background message ", payload);
  
    const notificationTitle = payload.notification.title;
     
    const notificationOptions = {
        body: payload.notification.body,
        icon: "/logo192.png",
    };
  
    return self.registration.showNotification(
      notificationTitle,
      notificationOptions
    );
  });