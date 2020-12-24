'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "1f754c2e8bd64cee3179128e969e0b8e",
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
".git/index": "75bed8096935b02dfcd27b9560392e8b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "20d9fda38c3dd350a0b70d79614b6348",
".git/logs/refs/heads/master": "20d9fda38c3dd350a0b70d79614b6348",
".git/logs/refs/remotes/origin/master": "c8b67eb880b9a644383895c9b1d6fc94",
".git/objects/01/3b461caea6aec28c244ef35df4ddc623ba01df": "e5f580216b92c2cf2f09cd570762db8c",
".git/objects/01/4197a7ffe62fb2bf0ea17b745f28998cdf02bb": "f04624808a4dd4014233afb2ffac9a41",
".git/objects/02/20533beccfb93832bca3c5c8ead108e92ecf7d": "eff640f1e50ca83b9e11084c54d5b770",
".git/objects/04/7e1668622ae9aef1be4474469e74bdf6498386": "bb5350e655cfb08b88786c376546e4ae",
".git/objects/04/cbaf9c83e867aa3ba769d50b8c532c18d656b1": "bc7d27ba60cf1dddeb0634dfd94d5f53",
".git/objects/07/07067c987f1901e6a1287e7fdecd86ebd3111c": "8c980501146a0c32118de19d247efa25",
".git/objects/0f/ad90492814d3e0d7e45b94875ed6c7bd8ee767": "3fb9abc7e0287c3d23beb394bda1c755",
".git/objects/0f/ba2a9e5a044a01fba598120512eb7f389eda9f": "0ee36558ea6ebdd8bb89f666b89aa76b",
".git/objects/11/f5b31d25f0438b6b6a254082f08321bd952eaf": "3543dd60225f3f58febce9085229b206",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/14/e627de4592aab0e0f5087d4b0973a9ed817807": "9ed4c646fd3a39e074b94c50e83a80de",
".git/objects/25/3df70ede67e765fa89caed768b8a21570f4187": "3d025e8603ce91807b66d8ce079ccb4e",
".git/objects/25/453df39f7cb7344054d4396b1257545de0d5d4": "0693f75e63f6d001d47a1a28c6df3864",
".git/objects/2a/78958b01dbf02666b1d7bf9cb09e96856451de": "4c95404c01b05322f9b758f0f7f63ad6",
".git/objects/3a/51663d5305e5593e4307155e8db7060bc2d47e": "a36c49157c1c5dde61e64c0ef695ca0f",
".git/objects/3b/4b47e9e0423faa2344f7cdbda20c5f8268b725": "2ad350b8c412b9f7447aaa99c6e02e16",
".git/objects/3d/587d490231de2a6e50265c8b63ef9c602e2ef4": "7230534a5febef91f551586a1150d796",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b00fd06f5ed1a5afaa5c7c4caf6a8d91e33c2": "3b43aa210fb752f041588b3d33e96764",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4c/9ef32836add96591f00304a1563f86aeb27ffe": "04db6ee6277a8726991e4b5fafe52c49",
".git/objects/59/9c8ccd4f80f4edd158a0b18d125abfed495d2a": "7adea0a909df026eb79908ad710fc8f6",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/5c/b362422fc7a2a7cb8f2e8059402ab0d6e609df": "65921e12b39ad23391a8222710c1c68f",
".git/objects/69/6abcc231cff7204cfd869512290f6ac38b3d1f": "dc65377285e90c7f18362ef3d2b35309",
".git/objects/76/2d5aa96ce21f130ca21453ab31c5fb66600ec2": "f31958d3fddb547fc0a688a9d356320f",
".git/objects/84/0dc61393851a31c8af2c50e03cafffdc255247": "df67fd0e40cac032b7395f8716595ba1",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8c/2240436cad829c779ad4eae135a6b087b63a5c": "68818221efd04c74fa96b9b7d989e26f",
".git/objects/8e/ba56bc0e266bab1900a87ceebcacf1e7e69d8a": "701ae814f9aa83b3e8c2e0bb7c0de6ff",
".git/objects/9d/a4bf6c89e7321a55143eb14cf2a12b349e8977": "5e2546c13119dae50a1efa1af5a818ea",
".git/objects/9d/f5cf14d2883094bb6444145e6e3bad5b5e37b2": "4ac0b625ddf86f8130b3ce1fee5c63f3",
".git/objects/9e/aa7dfb63ab2c2496c0d333ce5fe2c769acb192": "b60277107b28a6f4d27f1c836d50b63f",
".git/objects/a1/4f94f5483214bb2e71587adb75cbad58ac6404": "24de222ee157c8d56dd1cd299ef9be36",
".git/objects/a4/3173c3842fa837801eb75a329a60a751039e4d": "9666d2ea0f13a6d23719f8f124b0424c",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a9/518b3b589f5aeb6cccbee9cf9fc6abc8a6c20a": "9fb1f9e7ec5531ed9240b429b457c3aa",
".git/objects/af/11ff0b53f95086e377c2696527081237b375e0": "4b24484a106b196c704f4dabf5ff7874",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b4/2d5dc3dea9bd0cc2ceea8349fb901d2f773361": "fbb364789bff5e775bf64afff40af502",
".git/objects/bd/5ca977876c4085ccb9b291af7273d2212764a8": "4bf150fc5bd6774044a5349edf1be456",
".git/objects/c7/631817becfdb5f8c11092590dfd158beee375d": "ebab609bf8c839552e7fb269ec6a6b06",
".git/objects/cd/0b3fa4048f463283f5b00c908556a820e11c23": "98db8894a42f18d1894dd2e481a1cde6",
".git/objects/de/a749cecefa693bdf007820791c3f362cd09234": "d50a3a61a34000c113ba9bf7b47a917f",
".git/objects/e5/91775fb9275031ff1fb99209ea5efec3e0542c": "886a180997acdeb52180a862cec990f2",
".git/objects/f1/3ac568496094e43b43038972391d2d1b611ab2": "23652d459ce95bce5614fd345a1012d1",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f3/5ead0c4684894aa0f3c64819bf4bb4187fa3cc": "27c6151b92486281ea2654ee9f29533d",
".git/objects/f4/8ffd6048c181ea7592ac37bb001fc80f1e3bdf": "17fb41b3eedda4752fffc2f0175e0d05",
".git/objects/f4/f8fab2d438b0e000713af9ae11d20b34495ef3": "7edf884344597dac77fdf3fc5839387b",
".git/objects/f6/9e4e7eb7b3ca205300f0062e090e63e29f2bb1": "487d20319f7df7e36eb3202365b182af",
".git/objects/f7/637be2c1ca77306f0f81b3642a135fd582088a": "6f207e6fac95ab30200a65cc9f0f3053",
".git/objects/fb/9fcda5e34401aece9eee4fd7c5e1c159cdf3c0": "1d271ce66e815ac65d309e4cc8baf3f4",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/ff/c03207fb27de85599623ca44726e2a71d2a588": "8580d83ca9981aa9b739d697ecf19c70",
".git/refs/heads/master": "b0a43e9e15c0d7e09cde1d34a3eb560f",
".git/refs/remotes/origin/master": "b0a43e9e15c0d7e09cde1d34a3eb560f",
"assets/AssetManifest.json": "8e5bff3a9acddc6c660a950e766d57ca",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/lib/assets/icons/github.png": "d3c974f05804e0b1e6eb7ff2564944e8",
"assets/lib/assets/icons/instagram.webp": "db3b8a20e33156662c1f3dd546e80c23",
"assets/lib/assets/images/icon_pokedex.png": "f66517e913ed5a17616c1fef1bfdb829",
"assets/lib/assets/images/profilepic.jpg": "e41a7ac85c55f7fc7eb67efd4bc7b704",
"assets/NOTICES": "625e3cfd2a3e554a015007a0ca26401a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"favicon.png": "ca57c478f9869fe3619ea4c77e16d6cd",
"icons/Icon-192.png": "b5c5a441f099485c22a64677226d3d10",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "f2467e51e0028626e7f6fd2180856acf",
"/": "f2467e51e0028626e7f6fd2180856acf",
"main.dart.js": "8261e214d6012f0eca9d80be4d094b49",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "e28a1e5b3e8f3ebecb591ee3d4268429"
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
