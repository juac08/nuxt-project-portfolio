importScripts("https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js");
firebase.initializeApp({
  apiKey: "AIzaSyDigVamFN3f0QTMBsxZcgtcZ_AYk2OvKVU",
  authDomain: "futureworks-testing.firebaseapp.com",
  projectId: "futureworks-testing",
  storageBucket: "futureworks-testing.appspot.com",
  messagingSenderId: "1016994484935",
  appId: "1:1016994484935:web:930f54f968da076cb7e4e2"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

// Setup event listeners for actions provided in the config:
self.addEventListener("notificationclick", function(e) {
  const actions = [
    {
      action: "goToLupasGithub",
      url: "https:\u002F\u002Fgithub.com\u002Flupas"
    },
    {
      action: "goToModuleGithub",
      url:
        "https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Ffirebase-module"
    }
  ];
  const action = actions.find(x => x.action === e.action);
  const notification = e.notification;

  if (!action) return;

  if (action.url) {
    clients.openWindow(action.url);
    notification.close();
  }
});
