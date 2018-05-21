var CACHE_NAME = 'andall10KB';
var urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/?utm_source=icon',
];

self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  console.log(event.request.url);
  event.respondWith(
  caches.match(event.request).then(function(response) {
  return response || fetch(event.request);
  })
  );
  });