                        importScripts("/assets/js/workbox-v3.6.3/workbox-sw.js");
            workbox.setConfig({modulePathPrefix: "/assets/js/workbox-v3.6.3"});

            self.__precacheManifest = [{"url":"/2022/01/18/monthly-wechaty-puppet-walnut-report/","revision":"cfda0ecbbe4f76870b9f498e5f14a7c7"},{"url":"/2022/01/16/wechaty-assistant-bot-opensource/","revision":"3cc4cfbf7c93e55c8b067fca3906a360"},{"url":"/2022/01/11/upgrade-to-wechaty-puppet-1.0/","revision":"fd5cc45c64cb1b1716ca10be8e8a873c"},{"url":"/2022/01/06/angular-tensorflow-js/","revision":"3a50dcff0a056fb5785a9fba691bc8bc"},{"url":"/2022/01/04/wechaty-with-node-server/","revision":"3e96a9d096c1e50538fb1494e21ce1d6"}];
            // set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'Wechaty',
    suffix: 'v1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `networkFirst` strategy for `*.html`, like all my posts
workbox.routing.registerRoute(
    /\.html$/,
    workbox.strategies.networkFirst()
);

// use `cacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|icons)/,
    workbox.strategies.cacheFirst()
);

// third party files
workbox.routing.registerRoute(
    /^https?:\/\/cdn.staticfile.org/,
    workbox.strategies.staleWhileRevalidate()
);
