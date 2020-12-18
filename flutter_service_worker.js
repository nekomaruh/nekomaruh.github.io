'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "42f5fcbd3ce35513b3f9d3f9b6f06b4e",
"index.html": "3e09b8faab3adaa5d73f6e072cca135e",
"/": "3e09b8faab3adaa5d73f6e072cca135e",
"main.dart.js": "65d6e98fc039fff3b0d392be8d94c532",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "913431296e30396ab61e0c3b7c33964c",
"assets/AssetManifest.json": "4ed06c28eca975c1508f1bdbd576fe5a",
"assets/NOTICES": "a0f4f5fcb3f99523c1658b6db52ec83d",
"assets/img/pandas_logo.png": "3e24eae8fad8a41694ab1cd447fb2bb2",
"assets/img/patreon_logo.png": "9067975c2a4224cafd185dd21202882d",
"assets/img/javascript_logo.png": "f00708cb380288f97a3fbfa72862ce1b",
"assets/img/objc_logo.png": "3323922442bf7e652d2a5a8678bf9d8a",
"assets/img/android_studio_logo.png": "483c3a0b31470e70b3756fb072437dc6",
"assets/img/postgresql_logo.png": "50156c71fb2cf47d5cfe134231975922",
"assets/img/flutter.png": "e0a0cbd84c943bcf5f44e251db9a1301",
"assets/img/banner.jpg": "88e7274586516315271776783603b220",
"assets/img/swift_logo.png": "1d45b6cee96ec31748de8c1c63987108",
"assets/img/vs_logo.png": "cee72a0b0bdec36aad307d1ae918fe53",
"assets/img/projects/movies.jpg": "47af7f4f5249d9d7f7b4a6c61f000678",
"assets/img/projects/catalog.png": "b3f54494036788c79bb44231f7ebee59",
"assets/img/projects/find_me.jpg": "fafdd2b1513e3da9be92662d0423ade2",
"assets/img/projects/movies_1.jpg": "da11791807212636ebff85555c5665a6",
"assets/img/projects/etl.png": "d6a9bf8156bb9dccc917cb019a772650",
"assets/img/projects/printer.jpeg": "7a1c40c35476ff65e48f578a77642c83",
"assets/img/projects/music.jpg": "1136daa9c1423eb1bcb9ff49ed697733",
"assets/img/projects/pedrenevid.jpg": "3d2bc3e6e2004642636f917ffbe56f9b",
"assets/img/projects/pedrenevid.png": "f9fce3c6bfa8f31d664bdb68a0b6f9b2",
"assets/img/projects/nanny.png": "3c7b189f27889b760e114902ea7ae9bf",
"assets/img/projects/regression.png": "d475c820cbc792426ba24a2119867cd2",
"assets/img/angular_logo.png": "84c42cef879b2573b10743374dd8825e",
"assets/img/github_logo.png": "1fbf1eeb622038a1ea2e62036d33788a",
"assets/img/jira_logo.png": "89e8531b45edce1ad9656d21504e9c76",
"assets/img/bootstrap_logo.png": "2811f772920aaf21e504a9e8e6bb32a6",
"assets/img/vscode_logo.png": "45658568f2499cbe84199e22c86144c6",
"assets/img/dart_logo.png": "c979b430b2da155059ebc0a22b0a26ac",
"assets/img/vb_logo.png": "9417646e51f2ee4864720a322cd8d38a",
"assets/img/kotlin_logo.png": "e8c4671b1cca100eed3c9cfed1f28b05",
"assets/img/python_logo.png": "b9bbb1d722d3ef6ebf7d573703b5925e",
"assets/img/powerbi_logo.png": "ed1e96ea5e37f9f0f0fe2ed7f21217fa",
"assets/img/cpp_logo.png": "8f42e018a9340b6e4e20161b06525308",
"assets/img/java_logo.png": "b855d7da2db5d7f73fd3eb7c9a961660",
"assets/FontManifest.json": "7aaf3996738086bbd796613e14ef9e45",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b14fcf3ee94e3ace300b192e9e7c8c5d",
"assets/packages/flutter_icons/fonts/Octicons.ttf": "73b8cff012825060b308d2162f31dbb2",
"assets/packages/flutter_icons/fonts/Feather.ttf": "6beba7e6834963f7f171d3bdd075c915",
"assets/packages/flutter_icons/fonts/Entypo.ttf": "744ce60078c17d86006dd0edabcd59a7",
"assets/packages/flutter_icons/fonts/FontAwesome5_Brands.ttf": "c39278f7abfc798a241551194f55e29f",
"assets/packages/flutter_icons/fonts/MaterialCommunityIcons.ttf": "3c851d60ad5ef3f2fe43ebd263490d78",
"assets/packages/flutter_icons/fonts/AntDesign.ttf": "3a2ba31570920eeb9b1d217cabe58315",
"assets/packages/flutter_icons/fonts/Foundation.ttf": "e20945d7c929279ef7a6f1db184a4470",
"assets/packages/flutter_icons/fonts/weathericons.ttf": "4618f0de2a818e7ad3fe880e0b74d04a",
"assets/packages/flutter_icons/fonts/Ionicons.ttf": "b2e0fc821c6886fb3940f85a3320003e",
"assets/packages/flutter_icons/fonts/FontAwesome5_Solid.ttf": "b70cea0339374107969eb53e5b1f603f",
"assets/packages/flutter_icons/fonts/FontAwesome5_Regular.ttf": "f6c6f6c8cb7784254ad00056f6fbd74e",
"assets/packages/flutter_icons/fonts/FontAwesome.ttf": "b06871f281fee6b241d60582ae9369b9",
"assets/packages/flutter_icons/fonts/Zocial.ttf": "5cdf883b18a5651a29a4d1ef276d2457",
"assets/packages/flutter_icons/fonts/EvilIcons.ttf": "140c53a7643ea949007aa9a282153849",
"assets/packages/flutter_icons/fonts/SimpleLineIcons.ttf": "d2285965fe34b05465047401b8595dd0",
"assets/packages/flutter_icons/fonts/MaterialIcons.ttf": "a37b0c01c0baf1888ca812cc0508f6e2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
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
