var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        }
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  LiveReload
} from "@remix-run/react";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// app/styles/app.css
var app_default = "/build/_assets/app-MX63WX37.css";

// app/root.jsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var firebaseConfig = {
  apiKey: "AIzaSyDFTyOJTIdPl-KFZP8l2rm3uOd-cNVFV00",
  authDomain: "futbolymaspod.firebaseapp.com",
  projectId: "futbolymaspod",
  storageBucket: "futbolymaspod.appspot.com",
  messagingSenderId: "171488147332",
  appId: "1:171488147332:web:248043023c7d7198460fd1",
  measurementId: "G-KJDVY3Z3PS"
}, app = initializeApp(firebaseConfig), db = getFirestore(app);
function links() {
  return [
    { rel: "stylesheet", href: app_default }
  ];
}
function App() {
  return /* @__PURE__ */ jsxs("html", { children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx2(
        "link",
        {
          rel: "icon",
          href: "data:image/x-icon;base64,AA"
        }
      ),
      /* @__PURE__ */ jsx2("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx2("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: !0 }),
      /* @__PURE__ */ jsx2(Meta, {}),
      /* @__PURE__ */ jsx2(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx2(Outlet, {}),
      /* @__PURE__ */ jsx2(Scripts, {}),
      /* @__PURE__ */ jsx2(LiveReload, {})
    ] })
  ] });
}

// app/routes/dashboard.jsx
var dashboard_exports = {};
__export(dashboard_exports, {
  default: () => Dashboard,
  links: () => links2
});
import "@remix-run/react";

// app/styles/dashboard.css
var dashboard_default = "/build/_assets/dashboard-MPT3KIH6.css";

// app/routes/dashboard.jsx
import { Fragment, jsx as jsx3 } from "react/jsx-runtime";
function links2() {
  return [
    { rel: "stylesheet", href: dashboard_default }
  ];
}
function Dashboard() {
  return /* @__PURE__ */ jsx3(Fragment, { children: /* @__PURE__ */ jsx3("h1", { className: "testing", children: "Dashboard" }) });
}

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => Home,
  links: () => links3,
  loader: () => loader
});
import {
  Link as Link2
} from "@remix-run/react";
import "@remix-run/node";
import "@remix-run/node";

// app/styles/index.css
var styles_default = "/build/_assets/index-F3EW2FSI.css";

// app/img/youtube_icon.png
var youtube_icon_default = "/build/_assets/youtube_icon-XJRFWDM5.png";

// app/img/tiktok_icon.png
var tiktok_icon_default = "/build/_assets/tiktok_icon-Y7GWVKTW.png";

// app/img/insta_icon.png
var insta_icon_default = "/build/_assets/insta_icon-KA2WVD4W.png";

// app/img/email_icon.png
var email_icon_default = "/build/_assets/email_icon-CWIHSHTI.png";

// app/routes/_index.jsx
import { motion } from "framer-motion";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
async function loader(request) {
  let data = await (await fetch("https://api-football-v1.p.rapidapi.com/v3/timezone", {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "79b54bab6emshde13d0564984fbap15c837jsn1ca4f5d2837c",
      "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com"
    }
  })).json();
  return console.log(data), data;
}
function links3() {
  return [
    { rel: "stylesheet", href: styles_default },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Abel&family=Acme&family=DM+Sans:opsz,wght@9..40,100;9..40,300&family=DM+Serif+Display:ital@0;1&family=Oswald:wght@300&family=Permanent+Marker&family=Rowdies:wght@300;400;700&family=Russo+One&family=Urbanist:ital,wght@0,200;1,100&family=Yanone+Kaffeesatz:wght@200;400;700&display=swap" }
  ];
}
function Home() {
  let iconDiv = {
    visible: { opacity: 1 },
    hidden: { opacity: 1 }
  }, iconText = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };
  return /* @__PURE__ */ jsxs2("div", { className: "index", children: [
    /* @__PURE__ */ jsxs2("div", { className: "mainTitleDiv", children: [
      /* @__PURE__ */ jsxs2("div", { className: "mainTitleIconsDiv", children: [
        /* @__PURE__ */ jsxs2(motion.div, { initial: "hidden", whileHover: "visible", variants: iconDiv, className: "iconsDiv", children: [
          /* @__PURE__ */ jsx4("img", { className: "icons", src: youtube_icon_default }),
          /* @__PURE__ */ jsx4("a", { className: "iconLink", href: "https://www.youtube.com/@Futbolymaspodcast/about", children: /* @__PURE__ */ jsx4(motion.p, { variants: iconText, className: "iconText", children: "Youtube" }) })
        ] }),
        /* @__PURE__ */ jsxs2(motion.div, { initial: "hidden", whileHover: "visible", variants: iconDiv, className: "iconsDiv", children: [
          /* @__PURE__ */ jsx4("img", { className: "icons", src: tiktok_icon_default }),
          /* @__PURE__ */ jsx4("a", { className: "iconLink", href: "https://www.youtube.com/@Futbolymaspodcast/about", children: /* @__PURE__ */ jsx4(motion.p, { variants: iconText, className: "iconText", children: "Tik Tok" }) })
        ] }),
        /* @__PURE__ */ jsxs2(motion.div, { initial: "hidden", whileHover: "visible", variants: iconDiv, className: "iconsDiv", children: [
          /* @__PURE__ */ jsx4("img", { className: "icons", src: insta_icon_default }),
          /* @__PURE__ */ jsx4("a", { className: "iconLink", href: "https://www.youtube.com/@Futbolymaspodcast/about", children: /* @__PURE__ */ jsx4(motion.p, { variants: iconText, className: "iconText", children: "Instagram" }) })
        ] }),
        /* @__PURE__ */ jsxs2(motion.div, { initial: "hidden", whileHover: "visible", variants: iconDiv, className: "iconsDiv", children: [
          /* @__PURE__ */ jsx4("img", { className: "icons", src: email_icon_default }),
          /* @__PURE__ */ jsx4("a", { className: "iconLink", href: "https://www.youtube.com/@Futbolymaspodcast/about", children: /* @__PURE__ */ jsx4(motion.p, { variants: iconText, className: "iconText", children: "Email Us" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2("div", { className: "mainTitleText", children: [
        /* @__PURE__ */ jsx4("h1", { className: "mainTitleH1", children: "F\xFAtbol Y M\xE1s" }),
        /* @__PURE__ */ jsx4("h1", { className: "mainTitleH2", children: "El Podcast" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs2("div", { className: "cardsDiv", children: [
      /* @__PURE__ */ jsxs2(motion.div, { whileHover: { scale: 1.025 }, className: "estadisticasDiv card", children: [
        /* @__PURE__ */ jsx4("div", { className: "estadisticasTitleDiv", children: /* @__PURE__ */ jsx4("h1", { className: "estadisticasTitle cardTitle", children: "Estad\xEDsticas" }) }),
        /* @__PURE__ */ jsx4("div", { className: "estadisticasSubtitleDiv cardSubtitleDiv", children: /* @__PURE__ */ jsx4("h2", { className: "estadisticasSubtitle cardSubtitle", children: "Goleadores" }) }),
        /* @__PURE__ */ jsxs2("div", { className: "estadisticasContent", children: [
          /* @__PURE__ */ jsx4("div", { className: "estadisticasTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "estadisticasText", children: "Serhou Guirassy - Stuttgart" }) }),
          /* @__PURE__ */ jsx4("div", { className: "estadisticasTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "estadisticasText", children: "Lautaro Martinez - Inter" }) }),
          /* @__PURE__ */ jsx4("div", { className: "estadisticasTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "estadisticasText", children: "Erling Haaland - Manchester City" }) }),
          /* @__PURE__ */ jsx4("div", { className: "estadisticasTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "estadisticasText", children: "Harry Kane - Bayern Munich" }) }),
          /* @__PURE__ */ jsx4("div", { className: "estadisticasTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "estadisticasText", children: "Jude Bellingham - Real Madrid" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2(motion.div, { whileHover: { scale: 1.025 }, className: "episodesDiv card", children: [
        /* @__PURE__ */ jsx4("div", { className: "episodesTitleDiv", children: /* @__PURE__ */ jsx4("h1", { className: "episodesTitle cardTitle", children: "Episodios Recientes" }) }),
        /* @__PURE__ */ jsxs2("div", { className: "episodesContent", children: [
          /* @__PURE__ */ jsx4("iframe", { className: "episodeIFrame", src: "https://www.youtube.com/embed/fl9AD-HwByQ?si=kzxmUmMOX6doeG7Z", title: "YouTube video player", frameborder: "0", allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share", allowfullscreen: !0 }),
          /* @__PURE__ */ jsx4("iframe", { className: "episodeIFrame", src: "https://open.spotify.com/embed/episode/0xHqwzuu2Yce5X7MyA5AZw?utm_source=generator", frameBorder: "0", allowfullscreen: "", allow: "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture", loading: "lazy" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2(motion.div, { whileHover: { scale: 1.025 }, className: "upcomingDiv card", children: [
        /* @__PURE__ */ jsx4("div", { className: "upcomingTitleDiv", children: /* @__PURE__ */ jsx4("h1", { className: "upcomingTitle cardTitle", children: "Pr\xF3ximamente" }) }),
        /* @__PURE__ */ jsx4("div", { className: "upcomingSubtitleDiv cardSubtitleDiv", children: /* @__PURE__ */ jsx4("h2", { className: "upcomingSubtitle cardSubtitle", children: "UEFA Champions League" }) }),
        /* @__PURE__ */ jsxs2("div", { className: "upcomingContent", children: [
          /* @__PURE__ */ jsx4("div", { className: "upcomingTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "upcomingText", children: "Galatasaray vs Bayern Munich" }) }),
          /* @__PURE__ */ jsx4("div", { className: "upcomingTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "upcomingText", children: "Sevilla vs Arsenal" }) }),
          /* @__PURE__ */ jsx4("div", { className: "upcomingTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "upcomingText", children: "PSG vs Milan" }) }),
          /* @__PURE__ */ jsx4("div", { className: "upcomingTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "upcomingText", children: "Newcastle vs B. Dortmund" }) }),
          /* @__PURE__ */ jsx4("div", { className: "upcomingTextDiv", children: /* @__PURE__ */ jsx4("p", { className: "upcomingText", children: "Feyenoord vs Lazio" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs2(motion.div, { whileHover: { scale: 1.025 }, className: "preguntaDiv card", children: [
        /* @__PURE__ */ jsx4("div", { className: "preguntaTitleDiv", children: /* @__PURE__ */ jsx4("h1", { className: "preguntaTitle cardTitle", children: "Preguntas de la semana" }) }),
        /* @__PURE__ */ jsxs2("div", { className: "preguntaSubtitleDiv cardSubtitleDiv", children: [
          /* @__PURE__ */ jsx4("h2", { className: "preguntaSubtitle cardSubtitle", children: "1) Que jugador fue mejor t\xE9cnico?" }),
          /* @__PURE__ */ jsx4("h2", { className: "preguntaSubtitle cardSubtitle", children: "2) Que t\xE9cnico fue mejor jugador?" }),
          /* @__PURE__ */ jsx4("h2", { className: "preguntaSubtitle cardSubtitle", children: "(Se discutir\xE1n en el pr\xF3ximo episodio)" })
        ] }),
        /* @__PURE__ */ jsxs2("div", { className: "preguntaContent", children: [
          /* @__PURE__ */ jsx4("div", { className: "preguntaInputDiv", children: /* @__PURE__ */ jsx4("input", { className: "preguntaInput" }) }),
          /* @__PURE__ */ jsxs2("div", { className: "preguntaButtonsDiv", children: [
            /* @__PURE__ */ jsx4("button", { className: "buttons clearButtons", children: "Clear" }),
            /* @__PURE__ */ jsx4("button", { className: "buttons submitButtons", children: "Submit" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx4(Link2, { to: "/dashboard", children: "Dashboard" })
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-G4ECJWYE.js", imports: ["/build/_shared/chunk-EFSXAKN2.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TQALM23Q.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-5BCPNDA7.js", imports: void 0, hasAction: !1, hasLoader: !0, hasErrorBoundary: !1 }, "routes/dashboard": { id: "routes/dashboard", parentId: "root", path: "dashboard", index: void 0, caseSensitive: void 0, module: "/build/routes/dashboard-J23VKC5A.js", imports: void 0, hasAction: !1, hasLoader: !1, hasErrorBoundary: !1 } }, version: "06772bbd", hmr: void 0, url: "/build/manifest-06772BBD.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "public\\build", future = {}, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/dashboard": {
    id: "routes/dashboard",
    parentId: "root",
    path: "dashboard",
    index: void 0,
    caseSensitive: void 0,
    module: dashboard_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
