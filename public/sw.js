const CACHE_NAME = "ryo-higashionna-portfolio-v1";
// キャッシュ対象URLの定義
const URLS_TO_CACHE = [
  "/",
  "/manifest.json",
  // 静的アセット
  "/vite.svg",
  "/icon-192.svg",
  "/icon-512.svg",
  // 動的に追加される各種アセット
];

// Service Worker インストール
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("キャッシュを開いています");
      return cache.addAll(URLS_TO_CACHE);
    })
  );
});

// Service Worker アクティベート
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("古いキャッシュを削除:", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// ネットワークリクエストをキャッシュから処理
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // キャッシュにある場合はそれを返す
      if (response) {
        return response;
      }

      // ネットワークからフェッチ
      return fetch(event.request).then((response) => {
        // レスポンスが有効でない場合はそのまま返す
        if (!response || response.status !== 200 || response.type !== "basic") {
          return response;
        }

        // レスポンスをクローンしてキャッシュに保存
        const responseToCache = response.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return response;
      });
    })
  );
});
