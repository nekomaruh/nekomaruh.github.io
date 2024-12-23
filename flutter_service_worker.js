'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "ee52fe6303308b527968ae97c40424ef",
"version.json": "98dabced84086834badd0ed42cbce9f3",
"splash/img/dark-1x.gif": "5c2684b4fd10217b6f30913a4c4d3449",
"splash/img/light-1x.gif": "5c2684b4fd10217b6f30913a4c4d3449",
"splash/img/light-2x.gif": "29e1aa540fb501d945fc112326e7a7cb",
"splash/img/dark-4x.gif": "4bf25c572c88748bf8dc64c1c999d855",
"splash/img/light-3x.gif": "17d53efc71de9acc2e063bb83ab666ce",
"splash/img/dark-3x.gif": "17d53efc71de9acc2e063bb83ab666ce",
"splash/img/light-background.gif": "799192af96611ee067b9614c91fca303",
"splash/img/light-4x.gif": "4bf25c572c88748bf8dc64c1c999d855",
"splash/img/dark-2x.gif": "29e1aa540fb501d945fc112326e7a7cb",
"favicon.ico": "42338363849c95bd6c0ec5e119f0ab43",
"index.html": "dc83b2818818d7ce30ca542eec581bc1",
"/": "dc83b2818818d7ce30ca542eec581bc1",
"main.dart.js": "ffb7f638d1055f565b450d6b8504024f",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"main.dart.wasm.map": "29cf2d85c7ba69eaf9fa0b304460814d",
"main.dart.mjs": "5f36bf3434429e6edb22cbd83ada5f8f",
"icons/Icon-192.png": "9401ffdbd334368ea735591595e90435",
"icons/Icon-maskable-192.png": "9401ffdbd334368ea735591595e90435",
"icons/Icon-maskable-512.png": "57caa5212c9e988a65d27d8fa4464468",
"icons/Icon-512.png": "57caa5212c9e988a65d27d8fa4464468",
"manifest.json": "dec15ed0ccf84e9fdfb11e1e9c26140a",
"main.dart.wasm": "b968b1ad55aade92630bc4f805e1b443",
"assets/AssetManifest.json": "2e82806b7635f45b31b3740ca4be181d",
"assets/NOTICES": "21283f71486668a385b9ab8ba1a5881d",
"assets/FontManifest.json": "f4f1b60f062b0c8231d2b290482a94e1",
"assets/AssetManifest.bin.json": "2fb9a9339e5975aac65f743f5f408b14",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "a20126c4a4ecb0f011799331181b2fac",
"assets/fonts/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/fonts/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/fonts/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/fonts/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/fonts/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/fonts/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/fonts/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/fonts/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/fonts/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/fonts/MaterialIcons-Regular.otf": "de1a30cbafee5343999eb2c7a624840f",
"assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/fonts/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/fonts/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/fonts/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"assets/assets/python.webp": "4a5546d26b447514893c97ac718abbec",
"assets/assets/kotlin.webp": "e0cfdbda386278831b9acdfd4bfb2020",
"assets/assets/git.webp": "5cd4a9b21bddfbb87011d70bb372bdb1",
"assets/assets/figma.webp": "f39f6bb1ccbc19d31b1cc8368dbe72be",
"assets/assets/supabase.webp": "0374690fa9d43162e4e2b3a5b8442c52",
"assets/assets/swipe_up.gif": "4e2d52b9efc89efaa30acd987253a499",
"assets/assets/google-play.png": "663df5a2730bd145ec00ee5b197d0c2e",
"assets/assets/javascript.webp": "21037fe8177dfd568fd2eefc421fe7e2",
"assets/assets/dart.webp": "9b197edec1d8a99911d9bc89ef875209",
"assets/assets/firebase.webp": "fdc7404493cf941986e23ebc10068ed4",
"assets/assets/android-studio.webp": "7d89c5e4d7d67c2e8c0119800ce56eb3",
"assets/assets/react.webp": "5ce341189a683351efebae9edef8bfee",
"assets/assets/dash.riv": "9bb8fa5eb406053bb58d9045f2603747",
"assets/assets/vscode.webp": "8d042f94f940413982b121a9065830f5",
"assets/assets/sql.webp": "8a2ace833e97f7708f77ab794b448f36",
"assets/assets/loading.gif": "6afbd1f6ebcdcdbb19019e47e2e59e7d",
"assets/assets/google_loading.riv": "d23a0bd28f90df436916fd9140940679",
"assets/assets/kubernetes.webp": "86d7175785851bee03308025f3ea57f1",
"assets/assets/grafana.webp": "764020e9a207648385b347de5dfd8ade",
"assets/assets/profile.png": "bc711cffb30eaccd288ce29ec88988bd",
"assets/assets/powerbi.webp": "23997cf5c0dd9924fa177d40b1e0f3bb",
"assets/assets/square-loading.gif": "dba838beb046378964fe8027028f96da",
"assets/assets/flutter.webp": "288953e4f109353dc46855929b0f4ad1",
"assets/assets/smile_meemoji.webp": "5da6d548e632f04f9a6ad597507e833a",
"assets/assets/cpp.webp": "689dae2cff063d2f492569efb886aba3",
"assets/assets/developer.riv": "547f370023fa93a1afb5dd33653c331d",
"assets/assets/java.webp": "117a1e1de6885a247779e2fdf5f974be",
"assets/assets/swift.webp": "4a23172bd1bf599bc10a68c1d873b629",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
