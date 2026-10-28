// Keeps the game working with no internet, while always loading the newest
// game when the iPad is online.
// Change VERSION whenever you update the files so iPads refresh their offline copy.
const VERSION = "takes-a-team-v8";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];
const OPTIONAL = ["./qr-iphone.png", "./qr-android.png"];  // saved for offline if they exist

self.addEventListener("install", e => {
  // cache: "reload" skips the browser's own cache, so a fresh copy is saved
  e.waitUntil(caches.open(VERSION).then(c => Promise.all([
    c.addAll(FILES.map(u => new Request(u, { cache: "reload" }))),
    ...OPTIONAL.map(u => c.add(new Request(u, { cache: "reload" })).catch(() => {}))
  ])));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;

  // The game page itself: try the internet first, fall back to the saved copy offline.
  if (req.mode === "navigate" || new URL(req.url).pathname.endsWith("/index.html")) {
    e.respondWith(
      fetch(req, { cache: "no-store" })
        .then(res => {
          const copy = res.clone();
          caches.open(VERSION).then(c => c.put("./index.html", copy));
          return res;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  // Icons, QR images and other files: newest copy when online (and save it), saved copy offline.
  e.respondWith(
    fetch(req, { cache: "no-store" })
      .then(res => {
        if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
