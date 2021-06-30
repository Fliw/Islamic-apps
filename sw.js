<<<<<<< HEAD

const cacheName = 'my-cache';
const filesToCache = [
  '/*'
=======
const cacheName = 'my-cache';
const filesToCache = [
  '/fpwebgabut/',
  '/fpwebgabut/index.html',
  '/fpwebgabut/asmaul-husna/index.html',
  '/fpwebgabut/auth/index.html',
  '/fpwebgabut/ceramah-ustad/index.html',
  '/fpwebgabut/daily-pray/index.html',
  '/fpwebgabut/extra/index.html',
  '/fpwebgabut/fonts/archi.ttf',
  '/fpwebgabut/hadith-layout/index.html',
  '/fpwebgabut/nabi-layout/index.html',
  '/fpwebgabut/niat-sholat/index.html',
  '/fpwebgabut/register/index.html',
  '/fpwebgabut/script/asmaul.js',
  '/fpwebgabut/script/auth.js',
  '/fpwebgabut/script/ceramah.js',
  '/fpwebgabut/script/extra.js',
  '/fpwebgabut/script/hadith.js',
  '/fpwebgabut/script/main-script.js',
  '/fpwebgabut/script/nabi.js',
  '/fpwebgabut/script/niat.js',
  '/fpwebgabut/script/pray.js',
  '/fpwebgabut/script/register.js',
  '/fpwebgabut/script/third-party/aos.js',
  '/fpwebgabut/img/account.png',
  '/fpwebgabut/img/bg.jpg',
  '/fpwebgabut/css/asmaul.css',
  '/fpwebgabut/css/auth.css',
  '/fpwebgabut/css/ceramah.css',
  '/fpwebgabut/css/extra.css',
  '/fpwebgabut/css/hadith.css',
  '/fpwebgabut/css/main.css',
  '/fpwebgabut/css/nabi.css',
  '/fpwebgabut/css/niat.css',
  '/fpwebgabut/css/pray.css',
  '/fpwebgabut/css/register.css',
  '/fpwebgabut/css/third-party/aos.css',
>>>>>>> 35741ae6ebdb2b4322224801dd77fcf8a482419c
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