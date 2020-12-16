'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "dc1e1c681c70783b77da317ca3e0dde4",
".git/config": "bceca5209e7e520dbc88d3a75a16d589",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "c97a79c4ee7dbd9e99b2f5b5e796606d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "da78671d08ffb92a047722993ef2e11e",
".git/logs/refs/heads/master": "da78671d08ffb92a047722993ef2e11e",
".git/logs/refs/remotes/origin/master": "08e27ef2202aa2cdfe605a48bbd4c71a",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/04/7e1668622ae9aef1be4474469e74bdf6498386": "bb5350e655cfb08b88786c376546e4ae",
".git/objects/04/cbaf9c83e867aa3ba769d50b8c532c18d656b1": "bc7d27ba60cf1dddeb0634dfd94d5f53",
".git/objects/11/f5b31d25f0438b6b6a254082f08321bd952eaf": "3543dd60225f3f58febce9085229b206",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/e627de4592aab0e0f5087d4b0973a9ed817807": "9ed4c646fd3a39e074b94c50e83a80de",
".git/objects/25/3df70ede67e765fa89caed768b8a21570f4187": "3d025e8603ce91807b66d8ce079ccb4e",
".git/objects/3a/51663d5305e5593e4307155e8db7060bc2d47e": "a36c49157c1c5dde61e64c0ef695ca0f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b00fd06f5ed1a5afaa5c7c4caf6a8d91e33c2": "3b43aa210fb752f041588b3d33e96764",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4c/9ef32836add96591f00304a1563f86aeb27ffe": "04db6ee6277a8726991e4b5fafe52c49",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/69/6abcc231cff7204cfd869512290f6ac38b3d1f": "dc65377285e90c7f18362ef3d2b35309",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/2240436cad829c779ad4eae135a6b087b63a5c": "68818221efd04c74fa96b9b7d989e26f",
".git/objects/8e/ba56bc0e266bab1900a87ceebcacf1e7e69d8a": "701ae814f9aa83b3e8c2e0bb7c0de6ff",
".git/objects/9d/a4bf6c89e7321a55143eb14cf2a12b349e8977": "5e2546c13119dae50a1efa1af5a818ea",
".git/objects/9e/aa7dfb63ab2c2496c0d333ce5fe2c769acb192": "b60277107b28a6f4d27f1c836d50b63f",
".git/objects/a1/4f94f5483214bb2e71587adb75cbad58ac6404": "24de222ee157c8d56dd1cd299ef9be36",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/2d5dc3dea9bd0cc2ceea8349fb901d2f773361": "fbb364789bff5e775bf64afff40af502",
".git/objects/de/a749cecefa693bdf007820791c3f362cd09234": "d50a3a61a34000c113ba9bf7b47a917f",
".git/objects/f1/3ac568496094e43b43038972391d2d1b611ab2": "23652d459ce95bce5614fd345a1012d1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f4/f8fab2d438b0e000713af9ae11d20b34495ef3": "7edf884344597dac77fdf3fc5839387b",
".git/objects/f6/9e4e7eb7b3ca205300f0062e090e63e29f2bb1": "487d20319f7df7e36eb3202365b182af",
".git/objects/f7/637be2c1ca77306f0f81b3642a135fd582088a": "6f207e6fac95ab30200a65cc9f0f3053",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/refs/heads/master": "cc6bcbe35ec0b2ffa43530eba3c5f33c",
".git/refs/remotes/origin/master": "cc6bcbe35ec0b2ffa43530eba3c5f33c",
"assets/AssetManifest.json": "f7573e16b0e3a46cffd2c247d35f499e",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/assets/icons/github.png": "d3c974f05804e0b1e6eb7ff2564944e8",
"assets/lib/assets/icons/instagram.webp": "db3b8a20e33156662c1f3dd546e80c23",
"assets/lib/assets/images/icon_pokedex.png": "f66517e913ed5a17616c1fef1bfdb829",
"assets/lib/assets/images/profilepic.jpg": "e41a7ac85c55f7fc7eb67efd4bc7b704",
"assets/NOTICES": "5276a7e55c2ca5f3bb44a5b02fbc6a2d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "ca57c478f9869fe3619ea4c77e16d6cd",
"icons/Icon-192.png": "b5c5a441f099485c22a64677226d3d10",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "35ffbb44ac9c60145307c1e255c3504c",
"/": "35ffbb44ac9c60145307c1e255c3504c",
"main.dart.js": "2bf0cc39395a24e8ce7e20b2c82fcdcf",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
