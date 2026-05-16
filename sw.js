
const CACHE_NAME = 'turbo-resgate-v1';
const urlsToCache = [
  '/',
  '/manifest.json'
];

self.addEventListener('install', (event) =&gt; {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) =&gt; cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', (event) =&gt; {
  event.respondWith(
    caches.match(event.request)
      .then((response) =&gt; response || fetch(event.request))
  );
});
