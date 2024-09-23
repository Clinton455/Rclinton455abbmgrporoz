'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "14f0644b418f960b5d7b05a39d77aa15",
"assets/AssetManifest.bin.json": "e89426f1a29751c5aacd5a4a0c6e9f95",
"assets/AssetManifest.json": "948d9354251dfdbe7944b5abc7d7ef5e",
"assets/assets/fonts/Montserrat-Bold.ttf": "ed86af2ed5bbaf879e9f2ec2e2eac929",
"assets/assets/fonts/Montserrat-BoldItalic.ttf": "a49032b6a945b021303f16b664f87e6c",
"assets/assets/fonts/Montserrat-Italic.ttf": "cc53ad8bb1c801746c831bb7ce493f74",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/icons/back_arrow.svg": "c35b3f97779bff7b669938acb7b7ad93",
"assets/assets/icons/flower.svg": "46f699fab9e4cc4bd9f942ea53d73de3",
"assets/assets/icons/heart-icon.svg": "3ed69ef95480946fc2aa43a17722ec79",
"assets/assets/icons/icon_2.svg": "b74115c161dd696370af47f48c1ef148",
"assets/assets/icons/icon_3.svg": "cddbcb223ffa19a4d1faf8ba0aabef6a",
"assets/assets/icons/icon_4.svg": "4c78bde50054255c1c981a2c3aaaec04",
"assets/assets/icons/mall_icon.svg.svg": "04b5b066259b76806f5b5c839d4cefd2",
"assets/assets/icons/menu.svg": "0dd3549af7ee5b368ebcb0d8e0deb904",
"assets/assets/icons/more.svg": "a4a9ee0bf291be1d95f79949ad88b498",
"assets/assets/icons/search.svg": "dfc7db1dfd5bb8b26916d9226bc02bac",
"assets/assets/icons/sun.svg": "de21a25e2878fb1b62579a0d2cf4444a",
"assets/assets/icons/user-icon.svg": "76536891a2f21ae4a44ffe82f1f0f6d0",
"assets/assets/images/bottom_img_1.png": "9f62a10df50dbac13dfe4ef6911053e3",
"assets/assets/images/bottom_img_2.png": "048ef6167b9d28ddf6f3c8be98d4bdfd",
"assets/assets/images/image_1.png": "4e100c6056ca67572abb11a23626773a",
"assets/assets/images/image_2.png": "ac500e92f625b5cceabcefaec670da59",
"assets/assets/images/image_3.png": "b1a6125791100a2c73d57b1ee4937a8e",
"assets/assets/images/img.png": "d0dfb918c39695889777b347b2080a6e",
"assets/assets/images/img_main.png": "3777e97bd18084e42016641d40c3a30d",
"assets/assets/images/legends2.jpg": "c04d29c5bf79ae198ccf5ba979578ffe",
"assets/assets/images/legends3.jpg": "82e714f16fda3ce1e0ccec9f09bdbdce",
"assets/assets/images/legends4.jpg": "fcb813fae513aa33a696847ba6629ee7",
"assets/assets/images/legends5.jpg": "9c8a887b9013fdbfbb565bf2448e5544",
"assets/assets/images/logo.png": "86d4dc5cbadc8459349e2e75e8c3000a",
"assets/assets/images/mall.jpg": "25ee61edb3bce889e97a5c2057007831",
"assets/assets/images/mall.png": "fe9bddda03af7fc603fab8ca7704d624",
"assets/assets/images/mall1.jpg": "f29d0cf6a90dc688ee9b5d6cf2f8bf30",
"assets/assets/images/mall2.jpg": "39d362611dbbcd456a74dd8708196e20",
"assets/assets/images/mall3.jpg": "736166221d05fd6ef0fa041f253c9a0a",
"assets/assets/images/mall4.jpg": "f72a8c05c302716459b87906823e6eb0",
"assets/assets/images/mall5.jpg": "25c11a1599c858c210e4442b2e2ef8f4",
"assets/assets/images/mall6.jpg": "6c75a7f28f2e285dce4db3374d230555",
"assets/assets/images/p1.jpg": "3cbc9cca3b70082d4740a1338cd16359",
"assets/assets/images/p2.jpg": "3cbc9cca3b70082d4740a1338cd16359",
"assets/assets/images/p2.png": "044cc52b8d8cb7873b394021467d897e",
"assets/assets/images/p3.jpg": "4ac55090cdd5659f2bacc7e02c9c7902",
"assets/assets/images/p3.png": "59d52beee897443c8694f01b61c0e939",
"assets/assets/images/p4.png": "ed707f283ce5acfc04ff519e248170ec",
"assets/assets/images/p5.png": "ddbeff821fd1743ffe5aa0e9c20484c9",
"assets/assets/images/p5h.png": "3e0b328789dc0da1eaa87e16299e1c89",
"assets/assets/images/p5h2.PNG": "f2b8be389939e5af615a6e60630cbec9",
"assets/assets/images/p5h3.png": "32835da3cf70f128c277a08fef4659fc",
"assets/assets/images/p6.png": "9e5162f59cb554709cd1fb11fb8731df",
"assets/assets/images/p7.png": "cb82e667b1957b1df848a2c533e1825f",
"assets/assets/images/p8.png": "f8afb9be3ba4590573bd76003cf4b15d",
"assets/assets/images/p9.png": "53e1d7e2b62b5e734d90e01d9faa4ae8",
"assets/FontManifest.json": "b164f7dfe38a8462efc6f5b77879934b",
"assets/fonts/MaterialIcons-Regular.otf": "9488723b2c69bafed7db7364fb405b5c",
"assets/NOTICES": "61c853f81408379050083c20060fec7d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "dbe9474c60b50fa6c9af9fa80462f184",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "5fda3f1af7d6433d53b24083e2219fa0",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "87325e67bf77a9b483250e1fb1b54677",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "9fa2ffe90a40d062dd2343c7b84caf01",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f31737fb005cd3a3c6bd9355efd33061",
"flutter_bootstrap.js": "28ed9803eb35f9f96c7360e4160cf16e",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "66212038d224af454cdc25ca3bffc946",
"/": "66212038d224af454cdc25ca3bffc946",
"main.dart.js": "c34bbeaab618295b018709b8f3ad9ce6",
"manifest.json": "ca7f5cc19e7202c6ee30561930620ec1",
"version.json": "3067a3da8a33af4252697998df102ad6"};
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
