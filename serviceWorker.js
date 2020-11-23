// installation when changes occur and at first call of page
addEventListener('install',(e)=>{
console.log("ServiceWorker installed");
});

// activate service worker - activates when no other serviceworker is activated
// delete every data of the old service worker when page closed
addEventListener('activate',(e)=>{

    console.log("service worker has been activated");
});

addEventListener('fetch',(e)=>{
    console.log("fetch event",e);

});