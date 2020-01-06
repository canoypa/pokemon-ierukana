const CACHE_NAME = "pokemon-ierukana/cache@v1.1.5";
const FILES_TO_CACHE = ["/pokemon-ierukana/", "/pokemon-ierukana/index.html", "/pokemon-ierukana/index.js", "/pokemon-ierukana/index.css"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log("Opened cache");
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) return response;

      const fetchRequest = event.request.clone();

      return fetch(fetchRequest).then(response => {
        if (!response || response.status !== 200 || response.type !== "basic") return response;

        const responseToCache = response.clone();

        caches.open(CACHE_NAME).then(cache => cache.put(event.request, responseToCache));

        return response;
      });
    })
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});
