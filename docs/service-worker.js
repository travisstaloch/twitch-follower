const build = [
  "/twitch-follower/_app/start-4779dbc0.js",
  "/twitch-follower/_app/pages/__layout.svelte-b3a9e9b7.js",
  "/twitch-follower/_app/assets/pages/__layout.svelte-5b1db7d5.css",
  "/twitch-follower/_app/error.svelte-396e4bac.js",
  "/twitch-follower/_app/pages/index.svelte-0c3cc659.js",
  "/twitch-follower/_app/pages/recent-videos.svelte-a61ee2d6.js",
  "/twitch-follower/_app/assets/pages/recent-videos.svelte-fc0820dc.css",
  "/twitch-follower/_app/pages/settings.svelte-fdd3f010.js",
  "/twitch-follower/_app/pages/follows/_uid_-_uname_.svelte-2806fd44.js",
  "/twitch-follower/_app/pages/streams/_uid_-_uname_.svelte-3b708d6a.js",
  "/twitch-follower/_app/pages/videos/_uid_-_uname_.svelte-b157ebaf.js",
  "/twitch-follower/_app/pages/games.svelte-b994ee24.js",
  "/twitch-follower/_app/assets/pages/games.svelte-6b3e0479.css",
  "/twitch-follower/_app/pages/test.svelte-edc5935d.js",
  "/twitch-follower/_app/chunks/vendor-d20115e3.js",
  "/twitch-follower/_app/chunks/singletons-d1fb5791.js",
  "/twitch-follower/_app/chunks/navigation-076a75e1.js",
  "/twitch-follower/_app/chunks/stores-7645a550.js",
  "/twitch-follower/_app/chunks/stores-cf2b4674.js",
  "/twitch-follower/_app/chunks/Follows-b233456b.js",
  "/twitch-follower/_app/chunks/Videos-f1bbc380.js",
  "/twitch-follower/_app/chunks/StreamsSelect-eb208caf.js"
];
const files = [
  "/twitch-follower/.nojekyll",
  "/twitch-follower/404.html",
  "/twitch-follower/favicon.png",
  "/twitch-follower/mainifest.json"
];
const version = "1647307500425";
Promise.resolve();
const fetchJson = async (url, headers) => {
  const res = await fetch(url, { headers });
  return await res.json();
};
const recentVideosProgressSegments = 10;
function indexFor(element, array, comparer, start, end) {
  if (array.length === 0)
    return -1;
  start = start || 0;
  end = end || array.length;
  var pivot = start + end >> 1;
  var c = comparer(element, array[pivot]);
  if (end - start <= 1)
    return c == -1 ? pivot - 1 : pivot;
  switch (c) {
    case -1:
      return indexFor(element, array, comparer, start, pivot);
    case 0:
      return pivot;
    case 1:
      return indexFor(element, array, comparer, pivot, end);
    default:
      throw Error("comparer returned invalid code " + c);
  }
}
function numberCompare(a, b) {
  return Math.sign(a - b);
}
const env = {
  oauth: "9qgyh0cztae6970iaelbq3i810fbj0",
  clientid: "eav60ifvqn9bzeuwucm522ddp6czja"
};
try {
  const headers = {
    Authorization: "Bearer " + env.oauth,
    "Client-Id": env.clientid
  };
  const log = (...args) => {
    const show_debug = true;
    if (show_debug)
      console.log(...args);
  };
  let messagePort;
  self.addEventListener("message", async (event) => {
    try {
      let follows = null;
      if (event.data && event.data.type === "INIT_PORT") {
        messagePort = event.ports[0];
        return;
      } else if (event.data && event.data.type == "FOLLOWS") {
        follows = event.data.payload;
      } else {
        log("Error: Worker message event unhandled ", event.data);
        return;
      }
      if (!follows)
        log("Error: Worker: follows not set");
      let n = follows.data.length;
      let allFollows = follows;
      let recent_videos = [];
      const max_recent_videos = 50;
      const progressInterval = Math.floor(allFollows.data.length / recentVideosProgressSegments);
      let follow_i = 0;
      for (const follow of allFollows.data) {
        const uid = follow.to_id;
        let videos = await fetchJson(`https://api.twitch.tv/helix/videos?first=100&user_id=${uid}&type=archive`, headers);
        for (const video of videos.data) {
          let date = new Date(video.created_at);
          let index = indexFor({ date, video }, recent_videos, (b, a) => numberCompare(a.date ? a.date.valueOf() : 0, b.date ? b.date.valueOf() : 0));
          if (recent_videos.length < max_recent_videos) {
            recent_videos.splice(index + 1, 0, { date, video });
          } else if (index < max_recent_videos) {
            recent_videos.pop();
            recent_videos.splice(index + 1, 0, { date, video });
          } else {
            log("too old");
          }
          if (follow_i % progressInterval === 0) {
            messagePort.postMessage({
              type: "recentVideosProgress",
              payload: Math.floor(follow_i / progressInterval) + 1
            });
          }
        }
        follow_i += 1;
      }
      messagePort.postMessage({ type: "recentVideos", payload: recent_videos });
    } catch (e) {
      log("error: worker.message caught", e);
    }
  });
  const ASSETS = `cache${version}`;
  const to_cache = build.concat(files);
  const staticAssets = new Set(to_cache);
  self.addEventListener("install", (event) => {
    log("service worker install");
    event.waitUntil(caches.open(ASSETS).then((cache) => cache.addAll(to_cache)).then(() => {
      self.skipWaiting();
    }));
  });
  self.addEventListener("activate", (event) => {
    log("service worker activate");
    event.waitUntil(caches.keys().then(async (keys) => {
      for (const key of keys) {
        if (key !== ASSETS)
          await caches.delete(key);
      }
      self.clients.claim();
    }));
  });
  async function fetchAndCache(request) {
    const cache = await caches.open(`offline${version}`);
    try {
      const response = await fetch(request);
      cache.put(request, response.clone());
      return response;
    } catch (err) {
      const response = await cache.match(request);
      if (response)
        return response;
      throw err;
    }
  }
  self.addEventListener("fetch", (event) => {
    if (event.request.method !== "GET" || event.request.headers.has("range"))
      return;
    const url = new URL(event.request.url);
    const isHttp = url.protocol.startsWith("http");
    const isDevServerRequest = url.hostname === self.location.hostname && url.port !== self.location.port;
    const isStaticAsset = url.host === self.location.host && staticAssets.has(url.pathname);
    const skipBecauseUncached = event.request.cache === "only-if-cached" && !isStaticAsset;
    if (isHttp && !isDevServerRequest && !skipBecauseUncached) {
      event.respondWith((async () => {
        const cachedAsset = isStaticAsset && await caches.match(event.request);
        return cachedAsset || fetchAndCache(event.request);
      })());
    }
  });
} catch (e) {
  console.log("error: service-worker", e);
}
