const build = [
  "/twitch-follower/_app/start-8015c79e.js",
  "/twitch-follower/_app/pages/__layout.svelte-3cfaf41b.js",
  "/twitch-follower/_app/assets/pages/__layout.svelte-67ad537e.css",
  "/twitch-follower/_app/error.svelte-9403e6fc.js",
  "/twitch-follower/_app/pages/index.svelte-09b81e6e.js",
  "/twitch-follower/_app/pages/recent-videos.svelte-0c824004.js",
  "/twitch-follower/_app/assets/pages/recent-videos.svelte-fc0820dc.css",
  "/twitch-follower/_app/pages/settings.svelte-a1e04181.js",
  "/twitch-follower/_app/pages/follows/_uid_-_uname_.svelte-198694c7.js",
  "/twitch-follower/_app/pages/streams/_uid_-_uname_.svelte-5425e65b.js",
  "/twitch-follower/_app/pages/videos/_uid_-_uname_.svelte-c5023600.js",
  "/twitch-follower/_app/pages/games.svelte-057ba8f9.js",
  "/twitch-follower/_app/assets/pages/games.svelte-6b3e0479.css",
  "/twitch-follower/_app/pages/test.svelte-261230c0.js",
  "/twitch-follower/_app/chunks/vendor-611aba13.js",
  "/twitch-follower/_app/chunks/singletons-d1fb5791.js",
  "/twitch-follower/_app/chunks/stores-dbe2d455.js",
  "/twitch-follower/_app/chunks/navigation-076a75e1.js",
  "/twitch-follower/_app/chunks/stores-76a0209b.js",
  "/twitch-follower/_app/chunks/util-b72d8139.js",
  "/twitch-follower/_app/chunks/Follows-9efa8606.js",
  "/twitch-follower/_app/chunks/Refresh-58a37abd.js",
  "/twitch-follower/_app/chunks/Videos-d8590486.js",
  "/twitch-follower/_app/chunks/StreamsSelect-a13bdacf.js"
];
const files = [
  "/twitch-follower/.nojekyll",
  "/twitch-follower/404.html",
  "/twitch-follower/favicon.png",
  "/twitch-follower/mainifest.json"
];
const version = "1651602750589";
function noop() {
}
function safe_not_equal(a, b) {
  return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
}
function subscribe(store, ...callbacks) {
  if (store == null) {
    return noop;
  }
  const unsub = store.subscribe(...callbacks);
  return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
}
function get_store_value(store) {
  let value;
  subscribe(store, (_) => value = _)();
  return value;
}
Promise.resolve();
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
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
let localStore = (key, initial) => {
};
const initLocalStore = () => {
  localStore = (key, initial) => {
    if (!localStorage)
      return;
    const toString = (value) => JSON.stringify(value, null, 2);
    if (localStorage.getItem(key) === null) {
      localStorage.setItem(key, toString(initial));
    }
    const saved = JSON.parse(localStorage.getItem(key));
    const { subscribe: subscribe2, set, update } = writable(saved);
    return {
      subscribe: subscribe2,
      set: (value) => {
        localStorage.setItem(key, toString(value));
        return set(value);
      },
      update
    };
  };
};
let dark = null;
const initDark = () => {
  try {
    dark = localStore("dark", prefersDark());
    dark.subscribe((val) => {
      localStorage.setItem("dark", JSON.stringify(val));
      setThemeDark(val);
    });
  } catch (e) {
    console.error("initDark", e);
  }
};
const toggleDark = () => {
  dark.update((existing) => {
    return !existing;
  });
};
const getDark = () => get_store_value(dark);
let user = writable(null);
const prefersDark = () => {
  try {
    return window && window.matchMedia("(prefers-color-scheme: dark)").matches;
  } catch {
    return false;
  }
};
const setThemeDark = (dark2) => {
  if (!document)
    return;
  let dataTheme = document.documentElement.attributes["data-theme"];
  dataTheme.value = dark2 ? "dark" : "light";
};
let settings = writable(null);
const storesInit = () => {
  initLocalStore();
  settings = localStore("settings", {
    external_program: {
      exec_server_url: "http://localhost:9000/exec",
      program: "runstreamlink.sh"
    },
    twitch_proxy_api: {
      url: "http://localhost:9000/api/twitch"
    }
  });
  initDark();
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  mql.addEventListener("change", () => {
    toggleDark();
    setThemeDark(getDark());
  });
  user.set(JSON.parse(localStorage.getItem("user")));
  user.subscribe((val) => {
    localStorage.user = JSON.stringify(val);
  });
};
const fetchJson = async (url) => {
  const _settings = get_store_value(settings);
  if (!_settings) {
    storesInit();
  }
  const res = await fetch(`${_settings.twitch_proxy_api.url}?url=${encodeURIComponent(url)}`);
  return await res.json();
};
try {
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
        let videos = await fetchJson(`https://api.twitch.tv/helix/videos?first=100&user_id=${uid}&type=archive`);
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
