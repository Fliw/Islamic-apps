
const cacheName = 'my-cache';
const filesToCache = [
  '/*'
];
self.addEventListener('activate', e => self.clients.claim());
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName)
    .then(cache => cache.addAll(filesToCache))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(response => response ? response : fetch(e.request))
  )
});