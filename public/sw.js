if (!self.define) {
    const e = e => {
            "require" !== e && (e += ".js");
            let i = Promise.resolve();
            return c[e] || (i = new Promise(async i => {
                if ("document" in self) {
                    const c = document.createElement("script");
                    c.src = e, document.head.appendChild(c), c.onload = i
                } else importScripts(e), i()
            })), i.then(() => {
                if (!c[e]) throw new Error(`Module ${e} didn’t register its module`);
                return c[e]
            })
        },
        i = (i, c) => {
            Promise.all(i.map(e)).then(e => c(1 === e.length ? e[0] : e))
        },
        c = {
            require: Promise.resolve(i)
        };
    self.define = (i, r, s) => {
        c[i] || (c[i] = Promise.resolve().then(() => {
            let c = {};
            const o = {
                uri: location.origin + i.slice(1)
            };
            return Promise.all(r.map(i => {
                switch (i) {
                    case "exports":
                        return c;
                    case "module":
                        return o;
                    default:
                        return e(i)
                }
            })).then(e => {
                const i = s(...e);
                return c.default || (c.default = i), c
            })
        }))
    }
}
define("./sw.js", ["./workbox-2a625d4c"], (function(e) {
    "use strict";
    self.addEventListener("message", e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    }), e.precacheAndRoute([{
        url: "assets/arrow.svg",
        revision: "a3a55127cb463af05654273b42d0f38f"
    }, {
        url: "assets/arrowDown.svg",
        revision: "cb1d705f8b108be487918450b0e8e823"
    }, {
        url: "assets/arrowUp.svg",
        revision: "29c32a458b32766c0413ba573c32fd29"
    }, {
        url: "assets/bg.svg",
        revision: "ff8e02806e66c646a2cb92e1bd6230a1"
    }, {
        url: "assets/logo.png",
        revision: "82b9c7a5a3f405032b1db71a25f67021"
    }, {
        url: "favicon.ico",
        revision: "1ba2ae710d927f13d483fd5d1e548c9b"
    }, {
        url: "img/1.svg",
        revision: "28af043a2e336bfad849cb480350ce55"
    }, {
        url: "img/clean.svg",
        revision: "e2614bc48de5cda466f953bd0d6c3d43"
    }, {
        url: "img/clean1.svg",
        revision: "7378dcc2324248bab25dbdd6e0013ede"
    }, {
        url: "img/coverm.svg",
        revision: "c271aa0d0bb8d2bb4584bb57c84039a3"
    }, {
        url: "img/covermB.svg",
        revision: "69d7accec8c7b7a6f21d94abc93979ff"
    }, {
        url: "img/icons/android-chrome-192x192.png",
        revision: "fde0a359de586c5a5b0f5bef5b669862"
    }, {
        url: "img/icons/android-chrome-512x512.png",
        revision: "47bf85fd318b51c2e1f1574834780f86"
    }, {
        url: "img/icons/android-chrome-maskable-192x192.png",
        revision: "fde0a359de586c5a5b0f5bef5b669862"
    }, {
        url: "img/icons/android-chrome-maskable-512x512.png",
        revision: "47bf85fd318b51c2e1f1574834780f86"
    }, {
        url: "img/icons/apple-touch-icon-120x120.png",
        revision: "34ef1b10056b87f320cd9dc0c731cf1c"
    }, {
        url: "img/icons/apple-touch-icon-152x152.png",
        revision: "257651757660c7095cca1d7934c10cb0"
    }, {
        url: "img/icons/apple-touch-icon-180x180.png",
        revision: "48f1a346635bc0e756b29ad2efb95724"
    }, {
        url: "img/icons/apple-touch-icon-60x60.png",
        revision: "cc7d1949b34687d531959d801ac817f7"
    }, {
        url: "img/icons/apple-touch-icon-76x76.png",
        revision: "3fd9988a45dcafab75400a2360255806"
    }, {
        url: "img/icons/apple-touch-icon.png",
        revision: "47bf85fd318b51c2e1f1574834780f86"
    }, {
        url: "img/icons/favicon-16x16.png",
        revision: "defb22b3d240abd40c1f156d73d8fe8d"
    }, {
        url: "img/icons/favicon-32x32.png",
        revision: "c00066a217138d565270d417a00eb4e0"
    }, {
        url: "img/icons/msapplication-icon-144x144.png",
        revision: "ab287943b6adf86e2731918f90f9adf5"
    }, {
        url: "img/keepdes.svg",
        revision: "3321d3d1a5b4d572ccc03d0e4fb0ae3d"
    }, {
        url: "img/logo-corona.svg",
        revision: "9a361b2b830fd1a84f83a71e213e3ccf"
    }, {
        url: "img/spreads.png",
        revision: "7d3c15b9e282ea98f9465869ba749f5a"
    }, {
        url: "img/spreads.svg",
        revision: "2d04c3ae1bbfedb63ed25482ca73d735"
    }, {
        url: "img/wash.svg",
        revision: "bce0e595b9b024e96f37252a9db5c8fc"
    }, {
        url: "index.html",
        revision: "8801a17e21b72dbe0ab329f17dc80b61"
    }, {
        url: "robots.txt",
        revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"
    }], {})
}));
//# sourceMappingURL=sw.js.map