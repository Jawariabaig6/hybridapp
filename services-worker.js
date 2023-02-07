var cacheName = "petstore-v1";
var cacheFiles = [
  "homepage.html",
  "product.js",
  "petstore.webmanifest",
  "images/dog-1.png",
  "images/store.png",
];

self.addEventListener("install", (e) => {
  console.log("[Service Worker] Install");
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("[Service Worker] Caching all the files");
      return cache.addAll(cacheFiles);
    })
  );
});
