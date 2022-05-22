'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "0.png": "5dcef449791fa27946b3d35ad8803796",
"assets/AssetManifest.json": "6dfa7dec2b26a9142ee2cb24f21c6839",
"assets/assets/images/A3-1.png": "1889e32e088f2046dd4ad0fa9c02a212",
"assets/assets/images/A33.png": "48416bbc3d8f8472286bca2590c21f63",
"assets/assets/images/BG1.png": "65aafdb5d1215a0d9d1d67125f016705",
"assets/assets/images/BG2.png": "6e7c6220ff211e8d22820c503ce250b8",
"assets/assets/images/BG22.png": "37c0b736a0153f154657a69b20282f4e",
"assets/assets/images/BG3.png": "eaf3905f05376004b875f1b008d46e94",
"assets/assets/images/BG4.png": "deed47e27fc6acff5b7d1f0960600176",
"assets/assets/images/blob_ash.png": "09fa85ed27c02c145e8c57b28f85f754",
"assets/assets/images/blob_ash00.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bd529b5aa06c71b07f1c935aa11172ce",
"assets/assets/images/blob_bean_ash00.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "45efaa122cd3f17d70e79e0d271000d2",
"assets/assets/images/blob_black00.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "d02fe0c65fef4b616e03270de62d8deb",
"assets/assets/images/blob_small_bean_ash00.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blog_01.png": "3487ff70ed9d9f6b05e48452ded8116d",
"assets/assets/images/blog_02.png": "3576881f804a79f2d7444decd2d4f383",
"assets/assets/images/blog_03.png": "55aadbfcab383b6fe4d14610ce1dee62",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "c1e29cba889be3426862aa40bab297dd",
"assets/assets/images/dev_aboutme.png": "39207289ae97d330b72ed651c29fa412",
"assets/assets/images/dev_award.png": "1553dc4d62e71ee0a3b7171196201c7e",
"assets/assets/images/dev_header.png": "737b8ff90c5bbda8bda1f501345fcc60",
"assets/assets/images/dots_globe_grey.png": "0589f8b0d07189e548796fd3ebdc0920",
"assets/assets/images/dots_globe_yellow.png": "991371fc16ab6baefcd8b36d1d71bdc1",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/India.png": "f06b15a59dfb704f9d20958cf2d339dc",
"assets/assets/images/logo_dark.png": "67231eb0f49475b098648e7b06747c7d",
"assets/assets/images/logo_light.png": "3747561af26fd8ede7c04a98a76a1d9e",
"assets/assets/images/portfolio_01.png": "ef715602f31ba0d34ad93b1896175e95",
"assets/assets/images/portfolio_02.png": "ea2c88d1f7da90f2800285f0e72ca300",
"assets/assets/images/portfolio_03.png": "689c9448f265c7a718d7e00812deb6ff",
"assets/assets/images/portfolio_04.png": "b6fdb8c2e9c91ae155c4f4a7f28a4cc3",
"assets/assets/images/portfolio_05.png": "611069bd239b2cf0e27f3bdb2aa49c19",
"assets/assets/images/portfolio_06.png": "c6442ef4cdfdb9c51ebf38a79da73ede",
"assets/FontManifest.json": "cab905cb3aac16cd8f8b52a8d504c382",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "a496dbd43dd7bd0d8fe090ec48b81c6d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "7a658ee7acbe439b210d9fed985f1e24",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "2ced1c1aad71bda4e9d2d14bf8c0058d",
"icons/Icon-512.png": "812d437c51adfce08c534c8eea9000df",
"icons/Icon-maskable-192.png": "2ced1c1aad71bda4e9d2d14bf8c0058d",
"icons/Icon-maskable-512.png": "812d437c51adfce08c534c8eea9000df",
"index.html": "c2943e3cf7805735c228def634bc8010",
"/": "c2943e3cf7805735c228def634bc8010",
"main.dart.js": "a812efa622fdc71fd06b3d2c53e92add",
"manifest.json": "e5f02078c3974e4e3fd6971367c06d98",
"version.json": "9cd87fbe1b65727ae41b505d1c3ddbdd"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
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
