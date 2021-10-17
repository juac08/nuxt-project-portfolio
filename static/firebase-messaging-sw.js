
importScripts(
  'https://www.gstatic.com/firebasejs/8.6.5/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/8.6.5/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyDigVamFN3f0QTMBsxZcgtcZ_AYk2OvKVU","authDomain":"futureworks-testing.firebaseapp.com","projectId":"futureworks-testing","storageBucket":"futureworks-testing.appspot.com","messagingSenderId":"1016994484935","appId":"1:1016994484935:web:930f54f968da076cb7e4e2"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"randomName","url":"randomUrl"}]
  const action = actions.find(x => x.action === e.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})

function showNotification() {
  Notification.requestPermission(function(result) {
    if (result === "granted") {
      {
        registration.showNotification("Vibration Sample", {
          body: "Buzz! Buzz!",
          icon:
            "https://resources-live.sketch.cloud/files/aea485a0-06c5-4fc8-947d-a4efd1b5bcf6.png?Expires=1634680800&Signature=VvPYVA8ToNHDpZEef559MRtFmcagoXdumt5Q5BaL8VJWaFIE11aRQrdslSsX~FsxqjYoR3ou4d1D7TSWj-~hwrvyEVkfe5XLzH3PLRwfiaIFBLny8QzPexdsPZpSqGXb5i9FquKzcygQYSVMbX2uBxBfCD0IoR3o-PLUMwsR92k_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
          vibrate: [200, 100, 200, 100, 200, 100, 200],
          tag: "vibration-sample"
        });
      }
    }
  });
}
