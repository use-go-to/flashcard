const cacheName = 'flashcard-app-v1';
const assets = [
    '/',
    '/index.html',
    '/styles.css',
    '/manifest.json',
    '/register-sw.js',
    '/install.js',
    '/service-worker.js',
    '/128.png',
    '/512.png'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(assets);
        })
    );
    console.log('Service Worker installé.');
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
