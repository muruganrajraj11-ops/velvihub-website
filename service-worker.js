const CACHE_NAME = "velvihub-v1";

const urlsToCache = [

"/",
"/index.html",

"/vao-general-tamil.html",
"/vao-history.html",
"/vao-geography.html",
"/vao-polity.html",
"/vao-economy.html",
"/vao-science.html",
"/vao-current-affairs.html",
"/vao-aptitude.html",
"/vao-patta-chitta.html",
"/vao-government-schemes.html",

"/vao-grand-test-1.html",
"/vao-grand-test-2.html",
"/vao-grand-test-3.html",
"/vao-grand-test-4.html",
"/vao-grand-test-5.html",

"/vao-final-mega-test.html",

"/vao-dashboard.html",
"/vao-user-profile.html",
"/vao-settings.html",

"/vao-about.html",
"/vao-help-support.html",

"/offline.html",

"/icons/icon-192.png",
"/icons/icon-512.png"

];


// INSTALL

self.addEventListener("install", event => {

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache => {

console.log("Cache Opened");

return cache.addAll(urlsToCache);

})

);

self.skipWaiting();

});


// ACTIVATE

self.addEventListener("activate", event => {

event.waitUntil(

caches.keys()
.then(cacheNames => {

return Promise.all(

cacheNames.map(cache => {

if(cache !== CACHE_NAME){

console.log(
"Old Cache Deleted:",
cache
);

return caches.delete(cache);

}

})

);

})

);

self.clients.claim();

});


// FETCH

self.addEventListener("fetch", event => {

event.respondWith(

caches.match(event.request)

.then(response => {

if(response){

return response;

}

return fetch(event.request)

.then(networkResponse => {

return caches.open(CACHE_NAME)

.then(cache => {

cache.put(
event.request,
networkResponse.clone()
);

return networkResponse;

});

})

.catch(() => {

if(
event.request.mode === "navigate"
){

return caches.match(
"/offline.html"
);

}

});

})

);

});


// BACKGROUND SYNC

self.addEventListener(
"sync",
event => {

if(
event.tag ===
"velvihub-sync"
){

event.waitUntil(

console.log(
"Background Sync Running"
)

);

}

}
);


// PUSH NOTIFICATION

self.addEventListener(
"push",
event => {

const options = {

body:
"New VAO Content Available!",

icon:
"/icons/icon-192.png",

badge:
"/icons/icon-192.png",

vibrate:
[200,100,200],

data:{

url:
"/index.html"

}

};

event.waitUntil(

self.registration
.showNotification(

"VelviHub",

options

)

);

}
);


// NOTIFICATION CLICK

self.addEventListener(
"notificationclick",
event => {

event.notification.close();

event.waitUntil(

clients.openWindow(
event.notification.data.url
)

);

}
);
