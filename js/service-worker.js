const CACHE_NAME = 'kill-roaches-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/bootstrap.min.css',
  '/css/all.min.css',
  '/js/game.js',
  '/js/mute.js',
  '/js/reset.js',
  '/js/sound.js',
  '/js/timer.js',
  '/js/install-pwa.js',
  '/js/cursor.js',
  '/js/network.js',
  '/images/cockroach.png',
  '/images/cockroach-dead.png',
  '/images/slipper-cursor.png',
  '/images/blood-splat.png',
  '/assets/sounds/squish.mp3',
  '/assets/sounds/background-music.mp3'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => {
        if (event.request.mode === 'navigate') {
          return caches.match('/index.html');
        }
      })
  );
});
