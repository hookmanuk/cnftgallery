self.addEventListener('fetch', function(event) {
    event.respondWith(fetch(event.request).catch((e) => {
        //do nothing
    }));
});
