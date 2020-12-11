const staticCacheName = 'site-static';
// ressource we want to cache
const assets = [
    //"/",
    "indexEvents.html",
    "assets/css/font-awesome.min.css",
    "assets/css/main.css",
    "assets/js/index.js",
    //"images/" every file of image folder needs to be added
]

// installation when changes occur and at first call of page
self.addEventListener('install', function (e) {
    console.log("ServiceWorker installed");
//asynchrounos task returning promise
    e.waitUntil(caches.open(staticCacheName)
        .then(function (cache) {
            console.log("Cache set up");
            //getFiles(); tried to make function that adds all files in images to array
            //cache.add("indexEvents.html"); // for one single ressource
            return cache.addAll(assets);// for array of assets to add
        }));
});

// activate service worker - activates when no other serviceworker is activated
// delete every data of the old service worker when page closed
self.addEventListener('activate', (e) => {

    console.log("service worker has been activated");
});

self.addEventListener('fetch', (e) => {
    console.log("fetch event", e);
    e.respondWith(
        caches.match(e.request)
            .then(cacheResponse => {
                // return cacheResponse if not empty else fetch request
                return cacheResponse || fetch(e.request);
            })
    );
});
