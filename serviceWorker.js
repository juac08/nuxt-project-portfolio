self.addEventListener("push", function(e) {
  data = e.data.json();
  var options = {
    body: "Futureworks",
    icon:
      "https://resources-live.sketch.cloud/files/aea485a0-06c5-4fc8-947d-a4efd1b5bcf6.png?Expires=1634680800&Signature=VvPYVA8ToNHDpZEef559MRtFmcagoXdumt5Q5BaL8VJWaFIE11aRQrdslSsX~FsxqjYoR3ou4d1D7TSWj-~hwrvyEVkfe5XLzH3PLRwfiaIFBLny8QzPexdsPZpSqGXb5i9FquKzcygQYSVMbX2uBxBfCD0IoR3o-PLUMwsR92k_&Key-Pair-Id=APKAJOITMW3RWOLNNPYA",
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: "2"
    }
  };
});

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function(registration) {
      console.log("Service Worker Registered");
      messaging.useServiceWorker(registration);
    });
}
