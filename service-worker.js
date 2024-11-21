self.addEventListener('install', (event) => {
    console.log('Service Worker installé.');
});

self.addEventListener('fetch', (event) => {
    // Vous pouvez ajouter des stratégies de cache ici
    console.log('Fetch intercepté pour', event.request.url);
});
