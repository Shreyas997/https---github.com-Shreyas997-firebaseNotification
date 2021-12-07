// Scripts for firebase and firebase messaging
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js");
// eslint-disable-next-line no-undef
importScripts("https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js");

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyCseXOvJQJ9-CjOplcfPyAFrdw0Dktmxu8",
  authDomain: "ariya-firebase-notification.firebaseapp.com",
  projectId: "ariya-firebase-notification",
  storageBucket: "ariya-firebase-notification.appspot.com",
  messagingSenderId: "105490642634",
  appId: "1:105490642634:web:2ed8d10ec37688a1fea633"
};

// eslint-disable-next-line no-undef
firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
// eslint-disable-next-line no-undef
const messaging = firebase.messaging();
console.log("meessaging",messaging)
messaging.onBackgroundMessage(function(payload) {
  console.log("Received background message ", payload);
  window.alert("Received background message",payload)
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
