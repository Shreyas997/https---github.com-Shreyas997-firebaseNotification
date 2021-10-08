// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDWoxN6Nz6uorsasiULSi1GBiyPH9JwdDY",

  authDomain: "ariya-notifications-poc.firebaseapp.com",

  databaseURL: "https://ariya-notifications-poc-default-rtdb.firebaseio.com",

  projectId: "ariya-notifications-poc",

  storageBucket: "ariya-notifications-poc.appspot.com",

  messagingSenderId: "947349318604",

  appId: "1:947349318604:web:183b349d0eeeb85999cb69"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
