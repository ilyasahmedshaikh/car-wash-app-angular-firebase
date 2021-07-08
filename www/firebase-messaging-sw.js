importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.6.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyAYUFDgdmW0NUlf1Na4zXY0_eH-K5jVDxI",
    authDomain: "dirt2clean-c1824.firebaseapp.com",
    databaseURL: "https://dirt2clean-c1824.firebaseio.com",
    projectId: "dirt2clean-c1824",
    storageBucket: "dirt2clean-c1824.appspot.com",
    messagingSenderId: "371657639796",
    appId: "1:371657639796:web:ac1b778f3aea8a72454e21",
    measurementId: "G-5TXK0NBR9E"
});

const messaging = firebase.messaging();