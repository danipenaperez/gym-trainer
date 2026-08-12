// Service worker: permite instalar la app y usarla sin conexión.
// Estrategia "red primero": si hay conexión, siempre ves la última versión;
// sin conexión, tira de la copia cacheada.
var CACHE_VERSION = "gym-trainer-v7";

var ASSETS = [
  "./",
  "index.html",
  "styles.css",
  "app.js",
  "routine.js",
  "manifest.webmanifest",
  "icons/icon.svg",
  "icons/icon-maskable.svg",
];

self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(function (cache) {
      return cache.addAll(ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys.filter(function (k) { return k !== CACHE_VERSION; })
            .map(function (k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  event.respondWith(
    // Red primero: trae lo último y actualiza la caché.
    fetch(event.request)
      .then(function (response) {
        var copy = response.clone();
        caches.open(CACHE_VERSION).then(function (cache) {
          cache.put(event.request, copy);
        });
        return response;
      })
      .catch(function () {
        // Sin conexión: usa la copia cacheada; para navegaciones, la app.
        return caches.match(event.request).then(function (cached) {
          return cached || caches.match("index.html");
        });
      })
  );
});
