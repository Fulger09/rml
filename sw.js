importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c82fe2fbfc259c94c64.js",
    "revision": "1e91bf0a12c1f3d6f34a3479be9fe71e"
  },
  {
    "url": "/_nuxt/3e0446e614e61af97634.js",
    "revision": "c2db63638e6e101aec799727abba75cd"
  },
  {
    "url": "/_nuxt/4e070a473f0b062dc366.js",
    "revision": "de805e49c6981b678daf372c0be68c34"
  },
  {
    "url": "/_nuxt/4e65774dd59ada2597f5.js",
    "revision": "dcc4a15d3937ade11d03b1f81b1b7a57"
  },
  {
    "url": "/_nuxt/544841630146d7a7b5dd.js",
    "revision": "0fc40e641657217d0faa3124d3b18e63"
  },
  {
    "url": "/_nuxt/624d2d925f8b8632257b.js",
    "revision": "1d6352fb87f6ed4d788b75bc1c15dcfe"
  },
  {
    "url": "/_nuxt/70a7708360d9a32bd7d0.js",
    "revision": "8741e790d5e7c26f8fec4c224d1445d7"
  },
  {
    "url": "/_nuxt/84afbe03a87fb164f681.js",
    "revision": "18a071922e6580d272714d6bcff772c3"
  },
  {
    "url": "/_nuxt/b8f9528f7d458da1d136.js",
    "revision": "7b37f8195feee60c60f308e88fa742a4"
  },
  {
    "url": "/_nuxt/cb4b3f5eb6557d5d7e98.js",
    "revision": "988c7ef6ca030b53c61386822cd4e5f0"
  },
  {
    "url": "/_nuxt/cc0a646aca8768384669.js",
    "revision": "a234b2f0619f4a885c05016944f67ced"
  },
  {
    "url": "/_nuxt/d72cd68b23802469aeeb.js",
    "revision": "fa681269aff2d305675611bc632b8134"
  },
  {
    "url": "/_nuxt/e3680c7c9ba0982c6dd4.js",
    "revision": "aa72b51fe5c440fe6ebdaedcbe21749f"
  }
], {
  "cacheId": "nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
