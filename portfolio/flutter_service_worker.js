'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "04293e55354b577759af94293cc60a64",
"assets/AssetManifest.json": "c938df53eb1659f06924da0593ddec64",
"assets/assets/fonts/Nunito-Bold.ttf": "91019ffb3b1df640e444b34e5a73dfc3",
"assets/assets/fonts/Nunito-Regular.ttf": "0c890be2af0d241a2387ad2c4c16af2c",
"assets/assets/images/deme-micro-service-img.png": "d02a7d8fcd7e61bd5286bbfa0988c2c6",
"assets/assets/images/deme_img.png": "c2bfe1d397fe0a281a0952645ebeb1fb",
"assets/assets/images/gsb-frais.png": "6cd08121c9fa313d0e1ec93ef8075e4a",
"assets/assets/images/gsb-rv-dr.png": "9cae33c5226005d87431d9389233a2fb",
"assets/assets/images/gsb-rv-visiteur-serveur.png": "aa279e9a72f05f8041d4259f1ffbc640",
"assets/assets/images/learnflow-api.png": "106bf340d0676bdcccdc17c8c29e4d6f",
"assets/assets/images/learnflow-backoffice.png": "2aafdd0e7748d2cd630f2fefc1724361",
"assets/assets/images/logo.png": "ec4e40868695ea191ece5a171600c7bf",
"assets/assets/images/logo.svg": "56df167d29755c7b0d4052d9c53bb623",
"assets/assets/images/masjid.png": "a57a556094d98c2b8b7868ba4cc1fead",
"assets/assets/images/mockups-1.png": "629d1a69fbbd6017e4fbfce4bef4f747",
"assets/assets/images/mockups-1.svg": "58d28775ecad1843a9eec045cf79e54f",
"assets/assets/images/mockups-2.png": "d2b7d48432631120ad45ac42c584958a",
"assets/assets/images/mockups-2.svg": "87241a9fe48bb04fecabcbf28196b46f",
"assets/assets/images/openclass.png": "4cc90c01fbdaa20d12adab2c70afd022",
"assets/assets/images/portfolio.png": "77a58b35cdeafc34a8f06fa5c8a14598",
"assets/assets/images/spinner-dark.apng": "d7f6e0cca2ae052bdb7973799975027a",
"assets/assets/images/spinner-light.apng": "0aa2c9bee051117e80ffaafb604e9258",
"assets/assets/images/sugu.png": "774fe1b4ea650a113a32e81e21a5c75a",
"assets/assets/translations/en.json": "724233ffce77c33fd980f1abeec0d563",
"assets/assets/translations/fr.json": "1c122e90a92ff499b9345f14d6e13a5d",
"assets/FontManifest.json": "3ddd9b2ab1c2ae162d46e3cc7b78ba88",
"assets/fonts/MaterialIcons-Regular.otf": "ec0317741faec991cb6a3e113f81c2de",
"assets/NOTICES": "be97312da2b2c1fb09f87f1de65be239",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f3766730b95d0576589c30a9842d3b25",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4e5361518873c4816ed55dbde2462592",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "950d2be022f83489ebc9df49f90f1c6b",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "e1df774ef8747a91653e1b9d295d3d23",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"icons/Icon-maskable-192.png": "2707bbfaa290337dd4e2320cc49b7a58",
"icons/Icon-maskable-512.png": "3f51793bd9d85e1f165390a2a9e28256",
"index.html": "a450df5804f2807e8eb60e9385918628",
"/": "a450df5804f2807e8eb60e9385918628",
"main.dart.js": "d61b7c762bb3ca6bdf672b8d4d7e95e4",
"manifest.json": "ef85578c29305d1f1a034f8051df9667",
"splash/img/dark-1x.png": "225589a01421c21310fdd2e539b8d84a",
"splash/img/dark-2x.png": "e1e618009f200dbbf2d972cfbe22499f",
"splash/img/dark-3x.png": "e978c93bc1698685bae734d89f186e79",
"splash/img/dark-4x.png": "7a08e8e8c5e8efbd817575f489ec69e3",
"splash/img/light-1x.png": "7c30af472ff42aefab92cfb9b43d8a27",
"splash/img/light-2x.png": "0a3ff24e24e8342ea317a0c039b946d6",
"splash/img/light-3x.png": "6235edea04ec2d7a921551691a015fdd",
"splash/img/light-4x.png": "211a30d09cccdcc2cc6a0d1fd48f0844",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
