// Keeps the arcade and its games working with no internet, while always loading the newest
// version when the iPad is online.
// Change VERSION whenever you update the files so iPads refresh their offline copy.
const VERSION = "mhm-arcade-v14";
const PAGES = ["./index.html", "./team.html", "./welcome.html"];
const FILES = ["./", ...PAGES, "./manifest.webmanifest", "./icon-180.png", "./icon-512.png"];
// QR images, saved for offline if they exist (PNG or JPEG)
const OPTIONAL = ["png", "jpg", "jpeg"].flatMap(x => [`./qr-iphone.${x}`, `./qr-android.${x}`]);

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

  const path = new URL(req.url).pathname;
  // Which saved page answers this request: the arcade home or one of the games
  const page = path.endsWith("/") || path.endsWith("/index.html") ? "./index.html"
    : path.endsWith("/team.html") ? "./team.html"
    : path.endsWith("/welcome.html") ? "./welcome.html" : null;
  if (req.mode === "navigate" && !page) return;   // other pages (sent.html, reader.html) go straight to the network

  // Arcade and game pages: try the internet first, fall back to the saved copy offline.
  if (page) {
    e.respondWith(
      fetch(req, { cache: "no-store" })
        .then(res => {
          if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(page, copy)); }
          return res;
        })
        .catch(() => caches.match(page))
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
