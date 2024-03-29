'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "25a7af9a9422b15298efe2ea6e3b2fc4",
"splash/img/light-2x.png": "a960c7219b994f01f8d962c151c590aa",
"splash/img/dark-1x.gif": "5e9ed0aca2cb35bbaaa39b74db6b28bb",
"splash/img/dark-4x.png": "723766ca2057397a5f0032649c2ffa65",
"splash/img/light-3x.png": "b5165a4221778b5d4a39428fc7256d05",
"splash/img/dark-3x.png": "b5165a4221778b5d4a39428fc7256d05",
"splash/img/light-4x.png": "723766ca2057397a5f0032649c2ffa65",
"splash/img/light-1x.gif": "5e9ed0aca2cb35bbaaa39b74db6b28bb",
"splash/img/dark-2x.png": "a960c7219b994f01f8d962c151c590aa",
"splash/img/light-2x.gif": "dba82f1894f4ec8827f2a14862aff29e",
"splash/img/dark-1x.png": "8225a9b226e12184f76c2b6adc014bcf",
"splash/img/dark-4x.gif": "b0a13c4ccbcfdfc0177f286d77f3501b",
"splash/img/light-3x.gif": "0f6fe6c52a656648edcb3261b3f23039",
"splash/img/dark-3x.gif": "0f6fe6c52a656648edcb3261b3f23039",
"splash/img/light-4x.gif": "b0a13c4ccbcfdfc0177f286d77f3501b",
"splash/img/light-1x.png": "8225a9b226e12184f76c2b6adc014bcf",
"splash/img/dark-2x.gif": "dba82f1894f4ec8827f2a14862aff29e",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "4d05da65b5164c57a674719ba2654104",
"index.html": "1e1fb1f921b305ecefbb3ed517d8c40f",
"/": "1e1fb1f921b305ecefbb3ed517d8c40f",
"main.dart.js": "9c4964914f790ab6c05cdaa73b41d509",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "79d74f36061a0abafff20413fe2cec7c",
"icons/Icon-192.png": "bcd64f70e101239dee8db542500d064d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "b1f88fe632489b8e7e50605d44e7fa4d",
"manifest.json": "ce508b669b77ccf47fadafca55e0190e",
"assets/AssetManifest.json": "84567621754305a88a7d80bbe18d291a",
"assets/NOTICES": "87c86c74ca8b5b4426146db478feaaf2",
"assets/FontManifest.json": "3ee9f0ca9fc3f340d8986145d82ea462",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "84c7bd136590da0a6ed2c21df180c354",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "059c19cf0571dff717439bcf678ea350",
"assets/fonts/MaterialIcons-Regular.otf": "5d5c3acfe626bee5fa29b04ec3e32511",
"assets/assets/images/load_cat.gif": "368ac4c0e13002202e44d9cacd82cff4",
"assets/assets/images/smile_meemoji.png": "b1f88fe632489b8e7e50605d44e7fa4d",
"assets/assets/images/load.gif": "9168203b5cba9f5b1d7c6a7165a00018",
"assets/assets/images/smile_meemoji.webp": "5da6d548e632f04f9a6ad597507e833a",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "1165572f59d51e963a5bf9bdda61e39b",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "19d8b35640d13140fe4e6f3b8d450f04",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
  for (var resourceKey of Object.keys(RESOURCES)) {
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
