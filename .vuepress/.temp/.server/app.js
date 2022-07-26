"use strict";
Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: "Module" } });
var core = require("@vueuse/core");
var vue = require("vue");
var vueRouter = require("vue-router");
require("@vue/devtools-api");
var shared = require("@vuepress/shared");
var serverRenderer = require("vue/server-renderer");
function _interopNamespace(e2) {
  if (e2 && e2.__esModule)
    return e2;
  var n2 = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e2) {
    Object.keys(e2).forEach(function(k) {
      if (k !== "default") {
        var d2 = Object.getOwnPropertyDescriptor(e2, k);
        Object.defineProperty(n2, k, d2.get ? d2 : {
          enumerable: true,
          get: function() {
            return e2[k];
          }
        });
      }
    });
  }
  n2["default"] = e2;
  return Object.freeze(n2);
}
const pagesData$1 = {
  "v-79fdd481": () => Promise.resolve().then(function() {
    return home_html$2;
  }).then(({ data: data2 }) => data2),
  "v-184f4da6": () => Promise.resolve().then(function() {
    return intro_html$2;
  }).then(({ data: data2 }) => data2),
  "v-8daa1a0e": () => Promise.resolve().then(function() {
    return index_html$1y;
  }).then(({ data: data2 }) => data2),
  "v-0e503981": () => Promise.resolve().then(function() {
    return slide_html$2;
  }).then(({ data: data2 }) => data2),
  "v-4c863446": () => Promise.resolve().then(function() {
    return disable_html$2;
  }).then(({ data: data2 }) => data2),
  "v-bf720700": () => Promise.resolve().then(function() {
    return encrypt_html$2;
  }).then(({ data: data2 }) => data2),
  "v-0978b044": () => Promise.resolve().then(function() {
    return markdown_html$2;
  }).then(({ data: data2 }) => data2),
  "v-4eaf9f84": () => Promise.resolve().then(function() {
    return page_html$2;
  }).then(({ data: data2 }) => data2),
  "v-fffb8e28": () => Promise.resolve().then(function() {
    return index_html$1x;
  }).then(({ data: data2 }) => data2),
  "v-c0291160": () => Promise.resolve().then(function() {
    return _______1_D2__html$2;
  }).then(({ data: data2 }) => data2),
  "v-3e3fb02a": () => Promise.resolve().then(function() {
    return _______1_JS__html$2;
  }).then(({ data: data2 }) => data2),
  "v-65e0cd62": () => Promise.resolve().then(function() {
    return _______2_html$2;
  }).then(({ data: data2 }) => data2),
  "v-6d19ebae": () => Promise.resolve().then(function() {
    return _______3_JS__html$2;
  }).then(({ data: data2 }) => data2),
  "v-ed41da8c": () => Promise.resolve().then(function() {
    return _______3_pwa__html$2;
  }).then(({ data: data2 }) => data2),
  "v-694a7ea0": () => Promise.resolve().then(function() {
    return _______4_html$2;
  }).then(({ data: data2 }) => data2),
  "v-e1203d06": () => Promise.resolve().then(function() {
    return _1__jQuery_______html$2;
  }).then(({ data: data2 }) => data2),
  "v-ba33a14a": () => Promise.resolve().then(function() {
    return _2_______________________html$2;
  }).then(({ data: data2 }) => data2),
  "v-71978c0a": () => Promise.resolve().then(function() {
    return _3__jQuery_______________html$2;
  }).then(({ data: data2 }) => data2),
  "v-18558afe": () => Promise.resolve().then(function() {
    return _4_______________html$2;
  }).then(({ data: data2 }) => data2),
  "v-73115d7a": () => Promise.resolve().then(function() {
    return Vuejs_3___Reivew_html$2;
  }).then(({ data: data2 }) => data2),
  "v-7318da4a": () => Promise.resolve().then(function() {
    return Vue_____html$2;
  }).then(({ data: data2 }) => data2),
  "v-3706649a": () => Promise.resolve().then(function() {
    return _404_html$2;
  }).then(({ data: data2 }) => data2),
  "v-5bc93818": () => Promise.resolve().then(function() {
    return index_html$1w;
  }).then(({ data: data2 }) => data2),
  "v-744d024e": () => Promise.resolve().then(function() {
    return index_html$1v;
  }).then(({ data: data2 }) => data2),
  "v-e52c881c": () => Promise.resolve().then(function() {
    return index_html$1u;
  }).then(({ data: data2 }) => data2),
  "v-75ed4ea4": () => Promise.resolve().then(function() {
    return index_html$1t;
  }).then(({ data: data2 }) => data2),
  "v-d804e652": () => Promise.resolve().then(function() {
    return index_html$1s;
  }).then(({ data: data2 }) => data2),
  "v-154dc4c4": () => Promise.resolve().then(function() {
    return index_html$1r;
  }).then(({ data: data2 }) => data2),
  "v-01560935": () => Promise.resolve().then(function() {
    return index_html$1q;
  }).then(({ data: data2 }) => data2),
  "v-ac0c2a6a": () => Promise.resolve().then(function() {
    return index_html$1p;
  }).then(({ data: data2 }) => data2),
  "v-c5a9e2d6": () => Promise.resolve().then(function() {
    return index_html$1o;
  }).then(({ data: data2 }) => data2),
  "v-54d7ff21": () => Promise.resolve().then(function() {
    return index_html$1n;
  }).then(({ data: data2 }) => data2),
  "v-1ad78213": () => Promise.resolve().then(function() {
    return index_html$1m;
  }).then(({ data: data2 }) => data2),
  "v-5b30cfc6": () => Promise.resolve().then(function() {
    return index_html$1l;
  }).then(({ data: data2 }) => data2),
  "v-2c3ee7f5": () => Promise.resolve().then(function() {
    return index_html$1k;
  }).then(({ data: data2 }) => data2),
  "v-27b02be6": () => Promise.resolve().then(function() {
    return index_html$1j;
  }).then(({ data: data2 }) => data2),
  "v-e2bac56c": () => Promise.resolve().then(function() {
    return index_html$1i;
  }).then(({ data: data2 }) => data2),
  "v-cbedfc04": () => Promise.resolve().then(function() {
    return index_html$1h;
  }).then(({ data: data2 }) => data2),
  "v-83291cc4": () => Promise.resolve().then(function() {
    return index_html$1g;
  }).then(({ data: data2 }) => data2),
  "v-484552dc": () => Promise.resolve().then(function() {
    return index_html$1f;
  }).then(({ data: data2 }) => data2),
  "v-2dcc8639": () => Promise.resolve().then(function() {
    return index_html$1e;
  }).then(({ data: data2 }) => data2),
  "v-26f8293d": () => Promise.resolve().then(function() {
    return index_html$1d;
  }).then(({ data: data2 }) => data2),
  "v-65f6d381": () => Promise.resolve().then(function() {
    return index_html$1c;
  }).then(({ data: data2 }) => data2),
  "v-30e296fe": () => Promise.resolve().then(function() {
    return index_html$1b;
  }).then(({ data: data2 }) => data2),
  "v-7ed81e82": () => Promise.resolve().then(function() {
    return index_html$1a;
  }).then(({ data: data2 }) => data2),
  "v-56cabb00": () => Promise.resolve().then(function() {
    return index_html$19;
  }).then(({ data: data2 }) => data2),
  "v-fbb94a6e": () => Promise.resolve().then(function() {
    return index_html$18;
  }).then(({ data: data2 }) => data2),
  "v-b30840fa": () => Promise.resolve().then(function() {
    return index_html$17;
  }).then(({ data: data2 }) => data2),
  "v-ba5e197a": () => Promise.resolve().then(function() {
    return index_html$16;
  }).then(({ data: data2 }) => data2),
  "v-35985dc9": () => Promise.resolve().then(function() {
    return index_html$15;
  }).then(({ data: data2 }) => data2),
  "v-b302da92": () => Promise.resolve().then(function() {
    return index_html$14;
  }).then(({ data: data2 }) => data2),
  "v-07ff8958": () => Promise.resolve().then(function() {
    return index_html$13;
  }).then(({ data: data2 }) => data2),
  "v-540234fd": () => Promise.resolve().then(function() {
    return index_html$12;
  }).then(({ data: data2 }) => data2)
};
const siteData$1 = JSON.parse('{"base":"/","lang":"en-US","title":"","description":"","head":[],"locales":{"/":{"lang":"en-US","title":"Theme Demo","description":"A demo for vuepress-theme-hope"},"/zh/":{"lang":"zh-CN","title":"\u4E3B\u9898\u6F14\u793A","description":"vuepress-theme-hope \u7684\u6F14\u793A"}}}');
const pagesComponents = {
  "v-79fdd481": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return home_html$1;
  })),
  "v-184f4da6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return intro_html$1;
  })),
  "v-8daa1a0e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$11;
  })),
  "v-0e503981": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return slide_html$1;
  })),
  "v-4c863446": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return disable_html$1;
  })),
  "v-bf720700": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return encrypt_html$1;
  })),
  "v-0978b044": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return markdown_html$1;
  })),
  "v-4eaf9f84": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return page_html$1;
  })),
  "v-fffb8e28": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$$;
  })),
  "v-c0291160": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______1_D2__html$1;
  })),
  "v-3e3fb02a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______1_JS__html$1;
  })),
  "v-65e0cd62": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______2_html$1;
  })),
  "v-6d19ebae": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______3_JS__html$1;
  })),
  "v-ed41da8c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______3_pwa__html$1;
  })),
  "v-694a7ea0": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _______4_html$1;
  })),
  "v-e1203d06": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _1__jQuery_______html$1;
  })),
  "v-ba33a14a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _2_______________________html$1;
  })),
  "v-71978c0a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _3__jQuery_______________html$1;
  })),
  "v-18558afe": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _4_______________html$1;
  })),
  "v-73115d7a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Vuejs_3___Reivew_html$1;
  })),
  "v-7318da4a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Vue_____html$1;
  })),
  "v-3706649a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404_html$1;
  })),
  "v-5bc93818": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$Z;
  })),
  "v-744d024e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$X;
  })),
  "v-e52c881c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$V;
  })),
  "v-75ed4ea4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$T;
  })),
  "v-d804e652": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$R;
  })),
  "v-154dc4c4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$P;
  })),
  "v-01560935": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$N;
  })),
  "v-ac0c2a6a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$L;
  })),
  "v-c5a9e2d6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$J;
  })),
  "v-54d7ff21": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$H;
  })),
  "v-1ad78213": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$F;
  })),
  "v-5b30cfc6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$D;
  })),
  "v-2c3ee7f5": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$B;
  })),
  "v-27b02be6": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$z;
  })),
  "v-e2bac56c": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$x;
  })),
  "v-cbedfc04": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$v;
  })),
  "v-83291cc4": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$t;
  })),
  "v-484552dc": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$r;
  })),
  "v-2dcc8639": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$p;
  })),
  "v-26f8293d": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$n;
  })),
  "v-65f6d381": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$l;
  })),
  "v-30e296fe": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$j;
  })),
  "v-7ed81e82": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$h;
  })),
  "v-56cabb00": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$f;
  })),
  "v-fbb94a6e": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$d;
  })),
  "v-b30840fa": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$b;
  })),
  "v-ba5e197a": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$9;
  })),
  "v-35985dc9": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$7;
  })),
  "v-b302da92": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$5;
  })),
  "v-07ff8958": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$3;
  })),
  "v-540234fd": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return index_html$1;
  }))
};
const layoutComponents = {
  "404": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return _404$1;
  })),
  "Layout": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Layout$1;
  })),
  "Slide": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Slide$1;
  })),
  "Blog": vue.defineAsyncComponent(() => Promise.resolve().then(function() {
    return Blog$1;
  }))
};
var pagesData = vue.ref(pagesData$1);
var pageDataEmpty = vue.readonly({
  key: "",
  path: "",
  title: "",
  lang: "",
  frontmatter: {},
  excerpt: "",
  headers: []
});
var pageData = vue.ref(pageDataEmpty);
var usePageData = () => pageData;
if (false) {
  __VUE_HMR_RUNTIME__.updatePageData = (data2) => {
    pagesData.value[data2.key] = () => Promise.resolve(data2);
    if (data2.key === pageData.value.key) {
      pageData.value = data2;
    }
  };
}
var pageFrontmatterSymbol = Symbol("");
var usePageFrontmatter = () => {
  const pageFrontmatter = vue.inject(pageFrontmatterSymbol);
  if (!pageFrontmatter) {
    throw new Error("usePageFrontmatter() is called without provider.");
  }
  return pageFrontmatter;
};
var pageHeadSymbol = Symbol("");
var usePageHead = () => {
  const pageHead = vue.inject(pageHeadSymbol);
  if (!pageHead) {
    throw new Error("usePageHead() is called without provider.");
  }
  return pageHead;
};
var pageHeadTitleSymbol = Symbol("");
var usePageHeadTitle = () => {
  const pageHeadTitle = vue.inject(pageHeadTitleSymbol);
  if (!pageHeadTitle) {
    throw new Error("usePageHeadTitle() is called without provider.");
  }
  return pageHeadTitle;
};
var pageLangSymbol = Symbol("");
var usePageLang = () => {
  const pageLang = vue.inject(pageLangSymbol);
  if (!pageLang) {
    throw new Error("usePageLang() is called without provider.");
  }
  return pageLang;
};
var routeLocaleSymbol = Symbol("");
var useRouteLocale = () => {
  const routeLocale = vue.inject(routeLocaleSymbol);
  if (!routeLocale) {
    throw new Error("useRouteLocale() is called without provider.");
  }
  return routeLocale;
};
var siteData = vue.ref(siteData$1);
var useSiteData = () => siteData;
if (false) {
  __VUE_HMR_RUNTIME__.updateSiteData = (data2) => {
    siteData.value = data2;
  };
}
var siteLocaleDataSymbol = Symbol("");
var useSiteLocaleData = () => {
  const siteLocaleData = vue.inject(siteLocaleDataSymbol);
  if (!siteLocaleData) {
    throw new Error("useSiteLocaleData() is called without provider.");
  }
  return siteLocaleData;
};
var resolvers = vue.reactive({
  resolvePageData: async (pageKey) => {
    const pageDataResolver = pagesData.value[pageKey];
    const pageData2 = await (pageDataResolver == null ? void 0 : pageDataResolver());
    return pageData2 != null ? pageData2 : pageDataEmpty;
  },
  resolvePageFrontmatter: (pageData2) => pageData2.frontmatter,
  resolvePageHead: (headTitle, frontmatter, siteLocale) => {
    const description = shared.isString(frontmatter.description) ? frontmatter.description : siteLocale.description;
    const head = [
      ...shared.isArray(frontmatter.head) ? frontmatter.head : [],
      ...siteLocale.head,
      ["title", {}, headTitle],
      ["meta", { name: "description", content: description }]
    ];
    return shared.dedupeHead(head);
  },
  resolvePageHeadTitle: (page2, siteLocale) => `${page2.title ? `${page2.title} | ` : ``}${siteLocale.title}`,
  resolvePageLang: (pageData2) => pageData2.lang || "en",
  resolveRouteLocale: (locales2, routePath) => shared.resolveLocalePath(locales2, routePath),
  resolveSiteLocaleData: (site, routeLocale) => ({
    ...site,
    ...site.locales[routeLocale]
  })
});
var ClientOnly = vue.defineComponent({
  name: "ClientOnly",
  setup(_2, ctx) {
    const isMounted = vue.ref(false);
    vue.onMounted(() => {
      isMounted.value = true;
    });
    return () => {
      var _a, _b;
      return isMounted.value ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
    };
  }
});
var Content$1 = vue.defineComponent({
  name: "Content",
  props: {
    pageKey: {
      type: String,
      required: false,
      default: ""
    }
  },
  setup(props) {
    const page2 = usePageData();
    const pageComponent = vue.computed(() => pagesComponents[props.pageKey || page2.value.key]);
    return () => pageComponent.value ? vue.h(pageComponent.value) : vue.h("div", "404 Not Found");
  }
});
var Vuepress = vue.defineComponent({
  name: "Vuepress",
  setup() {
    const page2 = usePageData();
    const layoutComponent = vue.computed(() => {
      let layoutName;
      if (page2.value.path) {
        const frontmatterLayout = page2.value.frontmatter.layout;
        if (shared.isString(frontmatterLayout)) {
          layoutName = frontmatterLayout;
        } else {
          layoutName = "Layout";
        }
      } else {
        layoutName = "404";
      }
      return layoutComponents[layoutName] || vue.resolveComponent(layoutName, false);
    });
    return () => vue.h(layoutComponent.value);
  }
});
var withBase = (url) => {
  if (shared.isLinkHttp(url))
    return url;
  const base = useSiteData().value.base;
  return `${base}${shared.removeLeadingSlash(url)}`;
};
var hopeInject = "";
var clientConfig0 = {};
var defineClientConfig = (clientConfig) => clientConfig;
var badge = "";
const e$2 = ({ type: e2 = "info", text: s2 = "", vertical: a2 = "top", color: o2 }, { slots: l2 }) => {
  var _a;
  return vue.h("span", { class: ["badge", e2, { diy: o2 }], style: { verticalAlign: a2, ...o2 ? { backgroundColor: o2 } : {} } }, s2 || ((_a = l2.default) == null ? void 0 : _a.call(l2)));
};
e$2.displayName = "Badge";
const s$7 = ({ icon: s2 = "", color: l2, size: n2 }) => s2 ? vue.h("span", { class: ["icon", `${"iconfont icon-"}${s2}`], ...l2 || n2 ? { style: { ...l2 ? { color: l2 } : {}, ...n2 ? { "font-size": `${n2}px` } : {} } } : {} }) : null;
s$7.displayName = "FontIcon";
var message = "";
const a$5 = ({ name: e2 = "", color: n2 = "currentColor" }, { slots: r2 }) => {
  var _a;
  return vue.h("svg", { xmlns: "http://www.w3.org/2000/svg", class: ["icon", `${e2}-icon`], viewBox: "0 0 1024 1024", fill: n2, "aria-label": `${e2} icon` }, (_a = r2.default) == null ? void 0 : _a.call(r2));
};
a$5.displayName = "IconBase";
const u$7 = (t2, { slots: e2 }) => {
  var _a;
  return ((_a = e2.default) == null ? void 0 : _a.call(e2)) || null;
}, c$5 = (t2) => {
  const i2 = vue.getCurrentInstance();
  return "object" == typeof (i2 == null ? void 0 : i2.appContext.components) && (t2 in i2.appContext.components || vue.camelize(t2) in i2.appContext.components || vue.capitalize(vue.camelize(t2)) in i2.appContext.components);
}, f$2 = (t2) => {
  const e2 = useRouteLocale();
  return vue.computed(() => t2[e2.value]);
}, D = (t2, e2) => {
  let n2 = 1;
  for (let e3 = 0; e3 < t2.length; e3++)
    n2 += t2.charCodeAt(e3), n2 += n2 << 10, n2 ^= n2 >> 6;
  return n2 += n2 << 3, n2 ^= n2 >> 11, n2 % e2;
}, _ = /#.*$/u, Y = (t2) => {
  const e2 = _.exec(t2);
  return e2 ? e2[0] : "";
}, w$1 = (t2) => decodeURI(t2).replace(_, "").replace(/(index)?\.(md|html)$/, ""), S = (t2, e2) => {
  if (void 0 === e2)
    return false;
  const n2 = w$1(t2.path), r2 = w$1(e2), i2 = Y(e2);
  return i2 ? i2 === t2.hash && (!r2 || n2 === r2) : n2 === r2;
};
class b {
  constructor() {
    const t2 = "message-container", e2 = document.getElementById(t2);
    e2 ? this.containerElement = e2 : (this.containerElement = document.createElement("div"), this.containerElement.id = t2, document.body.appendChild(this.containerElement));
  }
  pop(t2, e2 = 2e3) {
    const n2 = document.createElement("div");
    n2.className = "message move-in", n2.innerHTML = t2, this.containerElement.appendChild(n2), e2 > 0 && setTimeout(() => {
      this.close(n2);
    }, e2);
  }
  close(t2) {
    t2.className = t2.className.replace("move-in", ""), t2.className += "move-out", t2.addEventListener("animationend", () => {
      t2.remove();
    });
  }
}
"production" === process.env.NODE_ENV || Object.freeze({}), "production" === process.env.NODE_ENV || Object.freeze([]);
const x = (t2, ...e2) => {
  const n2 = t2.resolve(...e2), r2 = n2.matched[n2.matched.length - 1];
  if (!(r2 == null ? void 0 : r2.redirect))
    return n2;
  const { redirect: i2 } = r2, s2 = "function" == typeof i2 ? i2(n2) : i2;
  const o2 = ((t3) => "string" == typeof t3)(s2) ? { path: s2 } : s2;
  return x(t2, { hash: n2.hash, query: n2.query, params: n2.params, ...o2 });
};
var T, H = function() {
  var t2 = 1e3, e2 = 6e4, n2 = 36e5, r2 = "millisecond", i2 = "second", s2 = "minute", o2 = "hour", a2 = "day", u2 = "week", c2 = "month", f2 = "quarter", d2 = "year", h2 = "date", l2 = "Invalid Date", m2 = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, $ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p2 = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, v2 = function(t3, e3, n3) {
    var r3 = String(t3);
    return !r3 || r3.length >= e3 ? t3 : "" + Array(e3 + 1 - r3.length).join(n3) + t3;
  }, y2 = { s: v2, z: function(t3) {
    var e3 = -t3.utcOffset(), n3 = Math.abs(e3), r3 = Math.floor(n3 / 60), i3 = n3 % 60;
    return (e3 <= 0 ? "+" : "-") + v2(r3, 2, "0") + ":" + v2(i3, 2, "0");
  }, m: function t3(e3, n3) {
    if (e3.date() < n3.date())
      return -t3(n3, e3);
    var r3 = 12 * (n3.year() - e3.year()) + (n3.month() - e3.month()), i3 = e3.clone().add(r3, c2), s3 = n3 - i3 < 0, o3 = e3.clone().add(r3 + (s3 ? -1 : 1), c2);
    return +(-(r3 + (n3 - i3) / (s3 ? i3 - o3 : o3 - i3)) || 0);
  }, a: function(t3) {
    return t3 < 0 ? Math.ceil(t3) || 0 : Math.floor(t3);
  }, p: function(t3) {
    return { M: c2, y: d2, w: u2, d: a2, D: h2, h: o2, m: s2, s: i2, ms: r2, Q: f2 }[t3] || String(t3 || "").toLowerCase().replace(/s$/, "");
  }, u: function(t3) {
    return void 0 === t3;
  } }, g = "en", M = {};
  M[g] = p2;
  var D2 = function(t3) {
    return t3 instanceof S2;
  }, _2 = function t3(e3, n3, r3) {
    var i3;
    if (!e3)
      return g;
    if ("string" == typeof e3) {
      var s3 = e3.toLowerCase();
      M[s3] && (i3 = s3), n3 && (M[s3] = n3, i3 = s3);
      var o3 = e3.split("-");
      if (!i3 && o3.length > 1)
        return t3(o3[0]);
    } else {
      var a3 = e3.name;
      M[a3] = e3, i3 = a3;
    }
    return !r3 && i3 && (g = i3), i3 || !r3 && g;
  }, Y2 = function(t3, e3) {
    if (D2(t3))
      return t3.clone();
    var n3 = "object" == typeof e3 ? e3 : {};
    return n3.date = t3, n3.args = arguments, new S2(n3);
  }, w2 = y2;
  w2.l = _2, w2.i = D2, w2.w = function(t3, e3) {
    return Y2(t3, { locale: e3.$L, utc: e3.$u, x: e3.$x, $offset: e3.$offset });
  };
  var S2 = function() {
    function p3(t3) {
      this.$L = _2(t3.locale, null, true), this.parse(t3);
    }
    var v3 = p3.prototype;
    return v3.parse = function(t3) {
      this.$d = function(t4) {
        var e3 = t4.date, n3 = t4.utc;
        if (null === e3)
          return new Date(NaN);
        if (w2.u(e3))
          return new Date();
        if (e3 instanceof Date)
          return new Date(e3);
        if ("string" == typeof e3 && !/Z$/i.test(e3)) {
          var r3 = e3.match(m2);
          if (r3) {
            var i3 = r3[2] - 1 || 0, s3 = (r3[7] || "0").substring(0, 3);
            return n3 ? new Date(Date.UTC(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3)) : new Date(r3[1], i3, r3[3] || 1, r3[4] || 0, r3[5] || 0, r3[6] || 0, s3);
          }
        }
        return new Date(e3);
      }(t3), this.$x = t3.x || {}, this.init();
    }, v3.init = function() {
      var t3 = this.$d;
      this.$y = t3.getFullYear(), this.$M = t3.getMonth(), this.$D = t3.getDate(), this.$W = t3.getDay(), this.$H = t3.getHours(), this.$m = t3.getMinutes(), this.$s = t3.getSeconds(), this.$ms = t3.getMilliseconds();
    }, v3.$utils = function() {
      return w2;
    }, v3.isValid = function() {
      return !(this.$d.toString() === l2);
    }, v3.isSame = function(t3, e3) {
      var n3 = Y2(t3);
      return this.startOf(e3) <= n3 && n3 <= this.endOf(e3);
    }, v3.isAfter = function(t3, e3) {
      return Y2(t3) < this.startOf(e3);
    }, v3.isBefore = function(t3, e3) {
      return this.endOf(e3) < Y2(t3);
    }, v3.$g = function(t3, e3, n3) {
      return w2.u(t3) ? this[e3] : this.set(n3, t3);
    }, v3.unix = function() {
      return Math.floor(this.valueOf() / 1e3);
    }, v3.valueOf = function() {
      return this.$d.getTime();
    }, v3.startOf = function(t3, e3) {
      var n3 = this, r3 = !!w2.u(e3) || e3, f3 = w2.p(t3), l3 = function(t4, e4) {
        var i3 = w2.w(n3.$u ? Date.UTC(n3.$y, e4, t4) : new Date(n3.$y, e4, t4), n3);
        return r3 ? i3 : i3.endOf(a2);
      }, m3 = function(t4, e4) {
        return w2.w(n3.toDate()[t4].apply(n3.toDate("s"), (r3 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e4)), n3);
      }, $2 = this.$W, p4 = this.$M, v4 = this.$D, y3 = "set" + (this.$u ? "UTC" : "");
      switch (f3) {
        case d2:
          return r3 ? l3(1, 0) : l3(31, 11);
        case c2:
          return r3 ? l3(1, p4) : l3(0, p4 + 1);
        case u2:
          var g2 = this.$locale().weekStart || 0, M2 = ($2 < g2 ? $2 + 7 : $2) - g2;
          return l3(r3 ? v4 - M2 : v4 + (6 - M2), p4);
        case a2:
        case h2:
          return m3(y3 + "Hours", 0);
        case o2:
          return m3(y3 + "Minutes", 1);
        case s2:
          return m3(y3 + "Seconds", 2);
        case i2:
          return m3(y3 + "Milliseconds", 3);
        default:
          return this.clone();
      }
    }, v3.endOf = function(t3) {
      return this.startOf(t3, false);
    }, v3.$set = function(t3, e3) {
      var n3, u3 = w2.p(t3), f3 = "set" + (this.$u ? "UTC" : ""), l3 = (n3 = {}, n3[a2] = f3 + "Date", n3[h2] = f3 + "Date", n3[c2] = f3 + "Month", n3[d2] = f3 + "FullYear", n3[o2] = f3 + "Hours", n3[s2] = f3 + "Minutes", n3[i2] = f3 + "Seconds", n3[r2] = f3 + "Milliseconds", n3)[u3], m3 = u3 === a2 ? this.$D + (e3 - this.$W) : e3;
      if (u3 === c2 || u3 === d2) {
        var $2 = this.clone().set(h2, 1);
        $2.$d[l3](m3), $2.init(), this.$d = $2.set(h2, Math.min(this.$D, $2.daysInMonth())).$d;
      } else
        l3 && this.$d[l3](m3);
      return this.init(), this;
    }, v3.set = function(t3, e3) {
      return this.clone().$set(t3, e3);
    }, v3.get = function(t3) {
      return this[w2.p(t3)]();
    }, v3.add = function(r3, f3) {
      var h3, l3 = this;
      r3 = Number(r3);
      var m3 = w2.p(f3), $2 = function(t3) {
        var e3 = Y2(l3);
        return w2.w(e3.date(e3.date() + Math.round(t3 * r3)), l3);
      };
      if (m3 === c2)
        return this.set(c2, this.$M + r3);
      if (m3 === d2)
        return this.set(d2, this.$y + r3);
      if (m3 === a2)
        return $2(1);
      if (m3 === u2)
        return $2(7);
      var p4 = (h3 = {}, h3[s2] = e2, h3[o2] = n2, h3[i2] = t2, h3)[m3] || 1, v4 = this.$d.getTime() + r3 * p4;
      return w2.w(v4, this);
    }, v3.subtract = function(t3, e3) {
      return this.add(-1 * t3, e3);
    }, v3.format = function(t3) {
      var e3 = this, n3 = this.$locale();
      if (!this.isValid())
        return n3.invalidDate || l2;
      var r3 = t3 || "YYYY-MM-DDTHH:mm:ssZ", i3 = w2.z(this), s3 = this.$H, o3 = this.$m, a3 = this.$M, u3 = n3.weekdays, c3 = n3.months, f3 = function(t4, n4, i4, s4) {
        return t4 && (t4[n4] || t4(e3, r3)) || i4[n4].slice(0, s4);
      }, d3 = function(t4) {
        return w2.s(s3 % 12 || 12, t4, "0");
      }, h3 = n3.meridiem || function(t4, e4, n4) {
        var r4 = t4 < 12 ? "AM" : "PM";
        return n4 ? r4.toLowerCase() : r4;
      }, m3 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a3 + 1, MM: w2.s(a3 + 1, 2, "0"), MMM: f3(n3.monthsShort, a3, c3, 3), MMMM: f3(c3, a3), D: this.$D, DD: w2.s(this.$D, 2, "0"), d: String(this.$W), dd: f3(n3.weekdaysMin, this.$W, u3, 2), ddd: f3(n3.weekdaysShort, this.$W, u3, 3), dddd: u3[this.$W], H: String(s3), HH: w2.s(s3, 2, "0"), h: d3(1), hh: d3(2), a: h3(s3, o3, true), A: h3(s3, o3, false), m: String(o3), mm: w2.s(o3, 2, "0"), s: String(this.$s), ss: w2.s(this.$s, 2, "0"), SSS: w2.s(this.$ms, 3, "0"), Z: i3 };
      return r3.replace($, function(t4, e4) {
        return e4 || m3[t4] || i3.replace(":", "");
      });
    }, v3.utcOffset = function() {
      return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
    }, v3.diff = function(r3, h3, l3) {
      var m3, $2 = w2.p(h3), p4 = Y2(r3), v4 = (p4.utcOffset() - this.utcOffset()) * e2, y3 = this - p4, g2 = w2.m(this, p4);
      return g2 = (m3 = {}, m3[d2] = g2 / 12, m3[c2] = g2, m3[f2] = g2 / 3, m3[u2] = (y3 - v4) / 6048e5, m3[a2] = (y3 - v4) / 864e5, m3[o2] = y3 / n2, m3[s2] = y3 / e2, m3[i2] = y3 / t2, m3)[$2] || y3, l3 ? g2 : w2.a(g2);
    }, v3.daysInMonth = function() {
      return this.endOf(c2).$D;
    }, v3.$locale = function() {
      return M[this.$L];
    }, v3.locale = function(t3, e3) {
      if (!t3)
        return this.$L;
      var n3 = this.clone(), r3 = _2(t3, e3, true);
      return r3 && (n3.$L = r3), n3;
    }, v3.clone = function() {
      return w2.w(this.$d, this);
    }, v3.toDate = function() {
      return new Date(this.valueOf());
    }, v3.toJSON = function() {
      return this.isValid() ? this.toISOString() : null;
    }, v3.toISOString = function() {
      return this.$d.toISOString();
    }, v3.toString = function() {
      return this.$d.toUTCString();
    }, p3;
  }(), b2 = S2.prototype;
  return Y2.prototype = b2, [["$ms", r2], ["$s", i2], ["$m", s2], ["$H", o2], ["$W", a2], ["$M", c2], ["$y", d2], ["$D", h2]].forEach(function(t3) {
    b2[t3[1]] = function(e3) {
      return this.$g(e3, t3[0], t3[1]);
    };
  }), Y2.extend = function(t3, e3) {
    return t3.$i || (t3(e3, S2, Y2), t3.$i = true), Y2;
  }, Y2.locale = _2, Y2.isDayjs = D2, Y2.unix = function(t3) {
    return Y2(1e3 * t3);
  }, Y2.en = M[g], Y2.Ls = M, Y2.p = {}, Y2;
}(), A = (T = { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, function(t2, e2, n2) {
  var r2 = e2.prototype, i2 = r2.format;
  n2.en.formats = T, r2.format = function(t3) {
    void 0 === t3 && (t3 = "YYYY-MM-DDTHH:mm:ssZ");
    var e3 = this.$locale().formats, n3 = function(t4, e4) {
      return t4.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, function(t5, n4, r3) {
        var i3 = r3 && r3.toUpperCase();
        return n4 || e4[r3] || T[r3] || e4[i3].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(t6, e5, n5) {
          return e5 || n5.slice(1);
        });
      });
    }(t3, void 0 === e3 ? {} : e3);
    return i2.call(this, n3);
  };
}), E = function(t2, e2, n2) {
  var r2 = e2.prototype, i2 = function(t3) {
    var e3, i3 = t3.date, s3 = t3.utc, o3 = {};
    if (!((e3 = i3) instanceof Date) && !(e3 instanceof Array) && e3 instanceof Object) {
      if (!Object.keys(i3).length)
        return new Date();
      var a3 = s3 ? n2.utc() : n2();
      Object.keys(i3).forEach(function(t4) {
        var e4, n3;
        o3[e4 = t4, n3 = r2.$utils().p(e4), "date" === n3 ? "day" : n3] = i3[t4];
      });
      var u3 = o3.day || (o3.year || o3.month >= 0 ? 1 : a3.date()), c2 = o3.year || a3.year(), f2 = o3.month >= 0 ? o3.month : o3.year || o3.day ? 0 : a3.month(), d2 = o3.hour || 0, h2 = o3.minute || 0, l2 = o3.second || 0, m2 = o3.millisecond || 0;
      return s3 ? new Date(Date.UTC(c2, f2, u3, d2, h2, l2, m2)) : new Date(c2, f2, u3, d2, h2, l2, m2);
    }
    return i3;
  }, s2 = r2.parse;
  r2.parse = function(t3) {
    t3.date = i2.bind(this)(t3), s2.bind(this)(t3);
  };
  var o2 = r2.set, a2 = r2.add, u2 = function(t3, e3, n3, r3) {
    if (void 0 === r3 && (r3 = 1), e3 instanceof Object) {
      var i3 = Object.keys(e3), s3 = this;
      return i3.forEach(function(n4) {
        s3 = t3.bind(s3)(e3[n4] * r3, n4);
      }), s3;
    }
    return t3.bind(this)(e3 * r3, n3);
  };
  r2.set = function(t3, e3) {
    return e3 = void 0 === e3 ? t3 : e3, u2.bind(this)(function(t4, e4) {
      return o2.bind(this)(e4, t4);
    }, e3, t3);
  }, r2.add = function(t3, e3) {
    return u2.bind(this)(a2, t3, e3);
  }, r2.subtract = function(t3, e3) {
    return u2.bind(this)(a2, t3, e3, -1);
  };
}, U = function() {
  var t2 = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 }, e2 = {};
  return function(n2, r2, i2) {
    var s2, o2 = function(t3, n3, r3) {
      void 0 === r3 && (r3 = {});
      var i3 = new Date(t3), s3 = function(t4, n4) {
        void 0 === n4 && (n4 = {});
        var r4 = n4.timeZoneName || "short", i4 = t4 + "|" + r4, s4 = e2[i4];
        return s4 || (s4 = new Intl.DateTimeFormat("en-US", { hour12: false, timeZone: t4, year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: r4 }), e2[i4] = s4), s4;
      }(n3, r3);
      return s3.formatToParts(i3);
    }, a2 = function(e3, n3) {
      for (var r3 = o2(e3, n3), s3 = [], a3 = 0; a3 < r3.length; a3 += 1) {
        var u3 = r3[a3], c3 = u3.type, f2 = u3.value, d2 = t2[c3];
        d2 >= 0 && (s3[d2] = parseInt(f2, 10));
      }
      var h2 = s3[3], l2 = 24 === h2 ? 0 : h2, m2 = s3[0] + "-" + s3[1] + "-" + s3[2] + " " + l2 + ":" + s3[4] + ":" + s3[5] + ":000", $ = +e3;
      return (i2.utc(m2).valueOf() - ($ -= $ % 1e3)) / 6e4;
    }, u2 = r2.prototype;
    u2.tz = function(t3, e3) {
      void 0 === t3 && (t3 = s2);
      var n3 = this.utcOffset(), r3 = this.toDate(), o3 = r3.toLocaleString("en-US", { timeZone: t3 }), a3 = Math.round((r3 - new Date(o3)) / 1e3 / 60), u3 = i2(o3).$set("millisecond", this.$ms).utcOffset(15 * -Math.round(r3.getTimezoneOffset() / 15) - a3, true);
      if (e3) {
        var c3 = u3.utcOffset();
        u3 = u3.add(n3 - c3, "minute");
      }
      return u3.$x.$timezone = t3, u3;
    }, u2.offsetName = function(t3) {
      var e3 = this.$x.$timezone || i2.tz.guess(), n3 = o2(this.valueOf(), e3, { timeZoneName: t3 }).find(function(t4) {
        return "timezonename" === t4.type.toLowerCase();
      });
      return n3 && n3.value;
    };
    var c2 = u2.startOf;
    u2.startOf = function(t3, e3) {
      if (!this.$x || !this.$x.$timezone)
        return c2.call(this, t3, e3);
      var n3 = i2(this.format("YYYY-MM-DD HH:mm:ss:SSS"));
      return c2.call(n3, t3, e3).tz(this.$x.$timezone, true);
    }, i2.tz = function(t3, e3, n3) {
      var r3 = n3 && e3, o3 = n3 || e3 || s2, u3 = a2(+i2(), o3);
      if ("string" != typeof t3)
        return i2(t3).tz(o3);
      var c3 = function(t4, e4, n4) {
        var r4 = t4 - 60 * e4 * 1e3, i3 = a2(r4, n4);
        if (e4 === i3)
          return [r4, e4];
        var s3 = a2(r4 -= 60 * (i3 - e4) * 1e3, n4);
        return i3 === s3 ? [r4, i3] : [t4 - 60 * Math.min(i3, s3) * 1e3, Math.max(i3, s3)];
      }(i2.utc(t3, r3).valueOf(), u3, o3), f2 = c3[0], d2 = c3[1], h2 = i2(f2).utcOffset(d2);
      return h2.$x.$timezone = o3, h2;
    }, i2.tz.guess = function() {
      return Intl.DateTimeFormat().resolvedOptions().timeZone;
    }, i2.tz.setDefault = function(t3) {
      s2 = t3;
    };
  };
}(), I = function() {
  var t2 = "minute", e2 = /[+-]\d\d(?::?\d\d)?/g, n2 = /([+-]|\d\d)/g;
  return function(r2, i2, s2) {
    var o2 = i2.prototype;
    s2.utc = function(t3) {
      return new i2({ date: t3, utc: true, args: arguments });
    }, o2.utc = function(e3) {
      var n3 = s2(this.toDate(), { locale: this.$L, utc: true });
      return e3 ? n3.add(this.utcOffset(), t2) : n3;
    }, o2.local = function() {
      return s2(this.toDate(), { locale: this.$L, utc: false });
    };
    var a2 = o2.parse;
    o2.parse = function(t3) {
      t3.utc && (this.$u = true), this.$utils().u(t3.$offset) || (this.$offset = t3.$offset), a2.call(this, t3);
    };
    var u2 = o2.init;
    o2.init = function() {
      if (this.$u) {
        var t3 = this.$d;
        this.$y = t3.getUTCFullYear(), this.$M = t3.getUTCMonth(), this.$D = t3.getUTCDate(), this.$W = t3.getUTCDay(), this.$H = t3.getUTCHours(), this.$m = t3.getUTCMinutes(), this.$s = t3.getUTCSeconds(), this.$ms = t3.getUTCMilliseconds();
      } else
        u2.call(this);
    };
    var c2 = o2.utcOffset;
    o2.utcOffset = function(r3, i3) {
      var s3 = this.$utils().u;
      if (s3(r3))
        return this.$u ? 0 : s3(this.$offset) ? c2.call(this) : this.$offset;
      if ("string" == typeof r3 && (r3 = function(t3) {
        void 0 === t3 && (t3 = "");
        var r4 = t3.match(e2);
        if (!r4)
          return null;
        var i4 = ("" + r4[0]).match(n2) || ["-", 0, 0], s4 = i4[0], o4 = 60 * +i4[1] + +i4[2];
        return 0 === o4 ? 0 : "+" === s4 ? o4 : -o4;
      }(r3), null === r3))
        return this;
      var o3 = Math.abs(r3) <= 16 ? 60 * r3 : r3, a3 = this;
      if (i3)
        return a3.$offset = o3, a3.$u = 0 === r3, a3;
      if (0 !== r3) {
        var u3 = this.$u ? this.toDate().getTimezoneOffset() : -1 * this.utcOffset();
        (a3 = this.local().add(o3 + u3, t2)).$offset = o3, a3.$x.$localOffset = u3;
      } else
        a3 = this.utc();
      return a3;
    };
    var f2 = o2.format;
    o2.format = function(t3) {
      var e3 = t3 || (this.$u ? "YYYY-MM-DDTHH:mm:ss[Z]" : "");
      return f2.call(this, e3);
    }, o2.valueOf = function() {
      var t3 = this.$utils().u(this.$offset) ? 0 : this.$offset + (this.$x.$localOffset || this.$d.getTimezoneOffset());
      return this.$d.valueOf() - 6e4 * t3;
    }, o2.isUTC = function() {
      return !!this.$u;
    }, o2.toISOString = function() {
      return this.toDate().toISOString();
    }, o2.toString = function() {
      return this.toDate().toUTCString();
    };
    var d2 = o2.toDate;
    o2.toDate = function(t3) {
      return "s" === t3 && this.$offset ? s2(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate() : d2.call(this);
    };
    var h2 = o2.diff;
    o2.diff = function(t3, e3, n3) {
      if (t3 && this.$u === t3.$u)
        return h2.call(this, t3, e3, n3);
      var r3 = this.local(), i3 = s2(t3).local();
      return h2.call(r3, i3, e3, n3);
    };
  };
}();
H.extend(A), H.extend(E), H.extend(I), H.extend(U);
const W = { name: "zh-cn", weekdays: "\u661F\u671F\u65E5_\u661F\u671F\u4E00_\u661F\u671F\u4E8C_\u661F\u671F\u4E09_\u661F\u671F\u56DB_\u661F\u671F\u4E94_\u661F\u671F\u516D".split("_"), weekdaysShort: "\u5468\u65E5_\u5468\u4E00_\u5468\u4E8C_\u5468\u4E09_\u5468\u56DB_\u5468\u4E94_\u5468\u516D".split("_"), weekdaysMin: "\u65E5_\u4E00_\u4E8C_\u4E09_\u56DB_\u4E94_\u516D".split("_"), months: "\u4E00\u6708_\u4E8C\u6708_\u4E09\u6708_\u56DB\u6708_\u4E94\u6708_\u516D\u6708_\u4E03\u6708_\u516B\u6708_\u4E5D\u6708_\u5341\u6708_\u5341\u4E00\u6708_\u5341\u4E8C\u6708".split("_"), monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"), ordinal: (t2, e2) => "W" === e2 ? `${t2}\u5468` : `${t2}\u65E5`, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY\u5E74M\u6708D\u65E5", LLL: "YYYY\u5E74M\u6708D\u65E5Ah\u70B9mm\u5206", LLLL: "YYYY\u5E74M\u6708D\u65E5ddddAh\u70B9mm\u5206", l: "YYYY/M/D", ll: "YYYY\u5E74M\u6708D\u65E5", lll: "YYYY\u5E74M\u6708D\u65E5 HH:mm", llll: "YYYY\u5E74M\u6708D\u65E5dddd HH:mm" }, relativeTime: { future: "%s\u5185", past: "%s\u524D", s: "\u51E0\u79D2", m: "1 \u5206\u949F", mm: "%d \u5206\u949F", h: "1 \u5C0F\u65F6", hh: "%d \u5C0F\u65F6", d: "1 \u5929", dd: "%d \u5929", M: "1 \u4E2A\u6708", MM: "%d \u4E2A\u6708", y: "1 \u5E74", yy: "%d \u5E74" }, meridiem: (t2, e2) => {
  const n2 = 100 * t2 + e2;
  return n2 < 600 ? "\u51CC\u6668" : n2 < 900 ? "\u65E9\u4E0A" : n2 < 1100 ? "\u4E0A\u5348" : n2 < 1300 ? "\u4E2D\u5348" : n2 < 1800 ? "\u4E0B\u5348" : "\u665A\u4E0A";
} }, j = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") };
H.locale("zh", W), H.locale("en", j), H.extend(E), H.extend(I), H.extend(U);
const Z = (t2, e2) => {
  if (t2) {
    if (H(t2 instanceof Date ? t2 : t2.trim()).isValid()) {
      const n3 = e2 ? H(t2).tz(e2) : H(t2), r2 = n3.year(), i2 = n3.month() + 1, s2 = n3.date(), o2 = n3.hour(), a2 = n3.minute(), u2 = n3.second(), c2 = n3.millisecond(), f2 = 0 === o2 && 0 === a2 && 0 === u2 && 0 === c2;
      return { value: n3.toDate(), info: { year: r2, month: i2, day: s2, ...f2 ? {} : { hour: o2, minute: a2, second: u2 } }, type: f2 ? "date" : "full" };
    }
    const n2 = /(?:(\d{2,4})[/-](\d{1,2})[/-](\d{1,2}))?\s*(?:(\d{1,2}):(\d{1,2})(?::(\d{1,2}))?)?/u.exec(t2.trim());
    if (n2) {
      const [, t3, e3, r2, i2, s2, o2] = n2, a2 = (t4) => void 0 === t4 ? void 0 : Number(t4), u2 = (t4) => i2 && s2 && !o2 ? 0 : t4, c2 = { year: ((t4) => t4 && t4 < 100 ? t4 + 2e3 : t4)(a2(t3)), month: a2(e3), day: a2(r2), hour: a2(i2), minute: a2(s2), second: u2(a2(o2)) }, f2 = void 0 === t3 && void 0 === e3 && void 0 === r2, d2 = void 0 === i2 && void 0 === s2 && void 0 === o2, h2 = H({ ...c2, month: c2.month - 1 }).toDate();
      return { value: f2 ? void 0 : h2, info: d2 ? { year: c2.year, month: c2.month, day: c2.day } : f2 ? { hour: c2.hour, minute: c2.minute, second: c2.second } : c2, type: f2 ? "time" : d2 ? "date" : "full" };
    }
  }
  return null;
}, J = (t2, e2 = false) => t2 ? Array.isArray(t2) ? t2.map((t3) => "string" == typeof t3 ? { name: t3 } : t3) : "string" == typeof t2 ? [{ name: t2 }] : "object" == typeof t2 && t2.name ? [t2] : (console.error(`Expect 'author' to be \`AuthorInfo[] | AuthorInfo | string[] | string ${e2 ? "" : "| false"} | undefined\`, but got`, t2), []) : [], V = (t2) => {
  if (t2) {
    if (Array.isArray(t2))
      return t2;
    if ("string" == typeof t2)
      return [t2];
    console.error("Expect 'category' to be `string[] | string | undefined`, but got", t2);
  }
  return [];
}, B = (t2) => {
  if (t2) {
    if (Array.isArray(t2))
      return t2;
    if ("string" == typeof t2)
      return [t2];
    console.error("Expect 'tag' to be `string[] | string | undefined`, but got", t2);
  }
  return [];
};
var backToTop = "";
const n$4 = () => vue.h(a$5, { name: "back-to-top" }, () => [vue.h("path", { d: "M512 843.2c-36.2 0-66.4-13.6-85.8-21.8-10.8-4.6-22.6 3.6-21.8 15.2l7 102c.4 6.2 7.6 9.4 12.6 5.6l29-22c3.6-2.8 9-1.8 11.4 2l41 64.2c3 4.8 10.2 4.8 13.2 0l41-64.2c2.4-3.8 7.8-4.8 11.4-2l29 22c5 3.8 12.2.6 12.6-5.6l7-102c.8-11.6-11-20-21.8-15.2-19.6 8.2-49.6 21.8-85.8 21.8z" }), vue.h("path", { d: "m795.4 586.2-96-98.2C699.4 172 513 32 513 32S324.8 172 324.8 488l-96 98.2c-3.6 3.6-5.2 9-4.4 14.2L261.2 824c1.8 11.4 14.2 17 23.6 10.8L419 744s41.4 40 94.2 40c52.8 0 92.2-40 92.2-40l134.2 90.8c9.2 6.2 21.6.6 23.6-10.8l37-223.8c.4-5.2-1.2-10.4-4.8-14zM513 384c-34 0-61.4-28.6-61.4-64s27.6-64 61.4-64c34 0 61.4 28.6 61.4 64S547 384 513 384z" })]);
n$4.displayName = "BacktoTopIcon";
var d$2 = vue.defineComponent({ name: "BackToTop", props: { threshold: { type: Number, default: 300 } }, setup(c2) {
  const u2 = usePageFrontmatter(), d2 = f$2({ "/zh/": { "backToTop": "\u8FD4\u56DE\u9876\u90E8" }, "/": { "backToTop": "Back to top" } }), i2 = vue.ref(0), v2 = vue.computed(() => false !== u2.value.backToTop && i2.value > c2.threshold), b2 = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  return vue.onMounted(() => {
    i2.value = b2();
  }), core.useEventListener("scroll", core.useDebounceFn(() => {
    i2.value = b2();
  }, 100)), () => vue.h(vue.Transition, { name: "fade" }, () => v2.value ? vue.h("button", { class: "back-to-top", "aria-label": d2.value.backToTop, "data-balloon-pos": "left", onClick: () => {
    window.scrollTo({ top: 0, behavior: "smooth" }), i2.value = 0;
  } }, vue.h(n$4)) : null);
} });
var clientConfig1 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("Badge", e$2);
    app.component("FontIcon", s$7);
  },
  setup: () => {
    core.useStyleTag(`@import url("//at.alicdn.com/t/font_2410206_a0xb9hku9iu.css");`, { id: "icon-assets" });
  },
  rootComponents: [
    () => vue.h(d$2, { threshold: 300 })
  ]
});
var clientConfig2 = defineClientConfig({
  setup() {
    return;
  }
});
var vars$1 = "";
var externalLinkIcon = "";
const svg = vue.h("svg", {
  "class": "external-link-icon",
  "xmlns": "http://www.w3.org/2000/svg",
  "aria-hidden": "true",
  "focusable": "false",
  "x": "0px",
  "y": "0px",
  "viewBox": "0 0 100 100",
  "width": "15",
  "height": "15"
}, [
  vue.h("path", {
    fill: "currentColor",
    d: "M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
  }),
  vue.h("polygon", {
    fill: "currentColor",
    points: "45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
  })
]);
const ExternalLinkIcon = vue.defineComponent({
  name: "ExternalLinkIcon",
  props: {
    locales: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup(props) {
    const routeLocale = useRouteLocale();
    const locale = vue.computed(() => {
      var _a;
      return (_a = props.locales[routeLocale.value]) != null ? _a : {
        openInNewWindow: "open in new window"
      };
    });
    return () => vue.h("span", [
      svg,
      vue.h("span", {
        class: "external-link-icon-sr-only"
      }, locale.value.openInNewWindow)
    ]);
  }
});
const locales = {};
var clientConfig3 = defineClientConfig({
  enhance({ app }) {
    app.component("ExternalLinkIcon", vue.h(ExternalLinkIcon, { locales }));
  }
});
/**
 * NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT
 */
const nprogress$1 = {
  settings: {
    minimum: 0.08,
    easing: "ease",
    speed: 200,
    trickle: true,
    trickleRate: 0.02,
    trickleSpeed: 800,
    barSelector: '[role="bar"]',
    parent: "body",
    template: '<div class="bar" role="bar"></div>'
  },
  status: null,
  set: (n2) => {
    const started = nprogress$1.isStarted();
    n2 = clamp$1(n2, nprogress$1.settings.minimum, 1);
    nprogress$1.status = n2 === 1 ? null : n2;
    const progress = nprogress$1.render(!started);
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const speed = nprogress$1.settings.speed;
    const ease = nprogress$1.settings.easing;
    progress.offsetWidth;
    queue((next) => {
      css(bar, {
        transform: "translate3d(" + toBarPerc(n2) + "%,0,0)",
        transition: "all " + speed + "ms " + ease
      });
      if (n2 === 1) {
        css(progress, {
          transition: "none",
          opacity: "1"
        });
        progress.offsetWidth;
        setTimeout(function() {
          css(progress, {
            transition: "all " + speed + "ms linear",
            opacity: "0"
          });
          setTimeout(function() {
            nprogress$1.remove();
            next();
          }, speed);
        }, speed);
      } else {
        setTimeout(() => next(), speed);
      }
    });
    return nprogress$1;
  },
  isStarted: () => typeof nprogress$1.status === "number",
  start: () => {
    if (!nprogress$1.status)
      nprogress$1.set(0);
    const work = () => {
      setTimeout(() => {
        if (!nprogress$1.status)
          return;
        nprogress$1.trickle();
        work();
      }, nprogress$1.settings.trickleSpeed);
    };
    if (nprogress$1.settings.trickle)
      work();
    return nprogress$1;
  },
  done: (force) => {
    if (!force && !nprogress$1.status)
      return nprogress$1;
    return nprogress$1.inc(0.3 + 0.5 * Math.random()).set(1);
  },
  inc: (amount) => {
    let n2 = nprogress$1.status;
    if (!n2) {
      return nprogress$1.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - n2) * clamp$1(Math.random() * n2, 0.1, 0.95);
    }
    n2 = clamp$1(n2 + amount, 0, 0.994);
    return nprogress$1.set(n2);
  },
  trickle: () => nprogress$1.inc(Math.random() * nprogress$1.settings.trickleRate),
  render: (fromStart) => {
    if (nprogress$1.isRendered()) {
      return document.getElementById("nprogress");
    }
    addClass(document.documentElement, "nprogress-busy");
    const progress = document.createElement("div");
    progress.id = "nprogress";
    progress.innerHTML = nprogress$1.settings.template;
    const bar = progress.querySelector(nprogress$1.settings.barSelector);
    const perc = fromStart ? "-100" : toBarPerc(nprogress$1.status || 0);
    const parent = document.querySelector(nprogress$1.settings.parent);
    css(bar, {
      transition: "all 0 linear",
      transform: "translate3d(" + perc + "%,0,0)"
    });
    if (parent !== document.body) {
      addClass(parent, "nprogress-custom-parent");
    }
    parent == null ? void 0 : parent.appendChild(progress);
    return progress;
  },
  remove: () => {
    removeClass(document.documentElement, "nprogress-busy");
    removeClass(document.querySelector(nprogress$1.settings.parent), "nprogress-custom-parent");
    const progress = document.getElementById("nprogress");
    progress && removeElement(progress);
  },
  isRendered: () => !!document.getElementById("nprogress")
};
const clamp$1 = (n2, min, max) => {
  if (n2 < min)
    return min;
  if (n2 > max)
    return max;
  return n2;
};
const toBarPerc = (n2) => (-1 + n2) * 100;
const queue = function() {
  const pending = [];
  function next() {
    const fn = pending.shift();
    if (fn) {
      fn(next);
    }
  }
  return function(fn) {
    pending.push(fn);
    if (pending.length === 1)
      next();
  };
}();
const css = function() {
  const cssPrefixes = ["Webkit", "O", "Moz", "ms"];
  const cssProps = {};
  function camelCase(string) {
    return string.replace(/^-ms-/, "ms-").replace(/-([\da-z])/gi, function(match, letter) {
      return letter.toUpperCase();
    });
  }
  function getVendorProp(name) {
    const style = document.body.style;
    if (name in style)
      return name;
    let i2 = cssPrefixes.length;
    const capName = name.charAt(0).toUpperCase() + name.slice(1);
    let vendorName;
    while (i2--) {
      vendorName = cssPrefixes[i2] + capName;
      if (vendorName in style)
        return vendorName;
    }
    return name;
  }
  function getStyleProp(name) {
    name = camelCase(name);
    return cssProps[name] || (cssProps[name] = getVendorProp(name));
  }
  function applyCss(element, prop, value) {
    prop = getStyleProp(prop);
    element.style[prop] = value;
  }
  return function(element, properties) {
    for (const prop in properties) {
      const value = properties[prop];
      if (value !== void 0 && Object.prototype.hasOwnProperty.call(properties, prop))
        applyCss(element, prop, value);
    }
  };
}();
const hasClass = (element, name) => {
  const list = typeof element === "string" ? element : classList(element);
  return list.indexOf(" " + name + " ") >= 0;
};
const addClass = (element, name) => {
  const oldList = classList(element);
  const newList = oldList + name;
  if (hasClass(oldList, name))
    return;
  element.className = newList.substring(1);
};
const removeClass = (element, name) => {
  const oldList = classList(element);
  if (!hasClass(element, name))
    return;
  const newList = oldList.replace(" " + name + " ", " ");
  element.className = newList.substring(1, newList.length - 1);
};
const classList = (element) => {
  return (" " + (element.className || "") + " ").replace(/\s+/gi, " ");
};
const removeElement = (element) => {
  element && element.parentNode && element.parentNode.removeChild(element);
};
var vars = "";
var nprogress = "";
const useNprogress = () => {
  vue.onMounted(() => {
    const router = vueRouter.useRouter();
    const loadedPages = /* @__PURE__ */ new Set();
    loadedPages.add(router.currentRoute.value.path);
    router.beforeEach((to) => {
      if (!loadedPages.has(to.path)) {
        nprogress$1.start();
      }
    });
    router.afterEach((to) => {
      loadedPages.add(to.path);
      nprogress$1.done();
    });
  });
};
var clientConfig4 = defineClientConfig({
  setup() {
    useNprogress();
  }
});
const themeData$1 = JSON.parse(`{"blog":{"medias":{"Email":"https://example.com","GitHub":"https://example.com","Bitbucket":"https://example.com","Gitlab":"https://example.com","Gmail":"https://example.com","Twitter":"https://example.com"}},"encrypt":{"config":{"/guide/encrypt.html":["$2a$10$9Uyh/Oc6D49Y7hEU2Yoz..TcDwEwRSRSI5kG5gK0tp7eHVVCQ54se"]}},"pure":false,"darkmode":"switch","themeColor":false,"fullscreen":false,"locales":{"/zh/":{"blog":{},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameonMobile":true,"sidebar":"structure","sidebarIcon":true,"headerDepth":2,"lang":"zh-CN","navbarLocales":{"langName":"\u7B80\u4F53\u4E2D\u6587","selectLangAriaLabel":"\u9009\u62E9\u8BED\u8A00"},"metaLocales":{"author":"\u4F5C\u8005","date":"\u5199\u4F5C\u65E5\u671F","origin":"\u539F\u521B","views":"\u8BBF\u95EE\u91CF","category":"\u5206\u7C7B","tag":"\u6807\u7B7E","readingTime":"\u9605\u8BFB\u65F6\u95F4","words":"\u5B57\u6570","toc":"\u6B64\u9875\u5185\u5BB9","prev":"\u4E0A\u4E00\u9875","next":"\u4E0B\u4E00\u9875","lastUpdated":"\u4E0A\u6B21\u7F16\u8F91\u4E8E","contributors":"\u8D21\u732E\u8005","editLink":"\u7F16\u8F91\u6B64\u9875"},"blogLocales":{"article":"\u6587\u7AE0","articleList":"\u6587\u7AE0\u5217\u8868","category":"\u5206\u7C7B","tag":"\u6807\u7B7E","timeline":"\u65F6\u95F4\u8F74","timelineTitle":"\u6628\u65E5\u4E0D\u5728","all":"\u5168\u90E8","intro":"\u4E2A\u4EBA\u4ECB\u7ECD","star":"\u6536\u85CF","slides":"\u5E7B\u706F\u7247","encrypt":"\u52A0\u5BC6"},"paginationLocales":{"prev":"\u4E0A\u4E00\u9875","next":"\u4E0B\u4E00\u9875","navigate":"\u8DF3\u8F6C\u5230","action":"\u524D\u5F80","errorText":"\u8BF7\u8F93\u5165 1 \u5230 $page \u4E4B\u524D\u7684\u9875\u7801\uFF01"},"outlookLocales":{"themeColor":"\u4E3B\u9898\u8272","darkmode":"\u5916\u89C2","fullscreen":"\u5168\u5C4F"},"encryptLocales":{"iconLabel":"\u6587\u7AE0\u5DF2\u52A0\u5BC6","placeholder":"\u8F93\u5165\u5BC6\u7801","remember":"\u8BB0\u4F4F\u5BC6\u7801","errorHint":"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u5BC6\u7801"},"routeLocales":{"404msg":["\u8FD9\u91CC\u4EC0\u4E48\u4E5F\u6CA1\u6709","\u6211\u4EEC\u662F\u600E\u4E48\u6765\u5230\u8FD9\u513F\u7684\uFF1F","\u8FD9 \u662F \u56DB \u96F6 \u56DB !","\u770B\u8D77\u6765\u4F60\u8BBF\u95EE\u4E86\u4E00\u4E2A\u5931\u6548\u7684\u94FE\u63A5"],"back":"\u8FD4\u56DE\u4E0A\u4E00\u9875","home":"\u5E26\u6211\u56DE\u5BB6","openInNewWindow":"Open in new window"}},"/":{"blog":{"description":"Developer who likes to do everything","intro":"/intro.html"},"repoDisplay":true,"navbarIcon":true,"navbarAutoHide":"mobile","hideSiteNameonMobile":true,"sidebar":{"/":["","home","slide",{"icon":"creative","text":"Guide","prefix":"guide/","link":"guide/","children":"structure"},{"text":"Team \uAD50\uC721","icon":"note","prefix":"posts/Education/","collapsable":true,"children":["\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(PWA)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4"]},{"text":"Vue","icon":"note","prefix":"posts/Vue/","collapsable":true,"children":["Vue\uAC15\uC758\uC815\uB9AC","Vuejs_3\uB808\uBCA8_Reivew"]}]},"sidebarIcon":true,"headerDepth":2,"lang":"en-US","navbarLocales":{"langName":"English","selectLangAriaLabel":"Select language"},"metaLocales":{"author":"Author","date":"Writing Date","origin":"Original","views":"Page views","category":"Category","tag":"Tag","readingTime":"Reading Time","words":"Words","toc":"On This Page","prev":"Prev","next":"Next","lastUpdated":"Last update","contributors":"Contributors","editLink":"Edit this page"},"blogLocales":{"article":"Articles","articleList":"Article List","category":"Category","tag":"Tag","timeline":"Timeline","timelineTitle":"Yesterday Once More!","all":"All","intro":"Personal Intro","star":"Star","slides":"Slides","encrypt":"Encrypted"},"paginationLocales":{"prev":"Prev","next":"Next","navigate":"Jump to","action":"Go","errorText":"Please enter a number between 1 and $page !"},"outlookLocales":{"themeColor":"Theme Color","darkmode":"Theme Mode","fullscreen":"Full Screen"},"encryptLocales":{"iconLabel":"Page Encrypted","placeholder":"Enter password","remember":"Remember password","errorHint":"Please enter the correct password!"},"routeLocales":{"404msg":["There\u2019s nothing here.","How did we get here?","That\u2019s a Four-Oh-Four.","Looks like we've got some broken links."],"back":"Go back","home":"Take me home","openInNewWindow":"Open in new window"},"author":{"name":"Young","url":"https://mrhope.site"},"logo":"/profile2.jpg","repo":"vuepress-theme-hope/vuepress-theme-hope","docsDir":"demo/src","pageInfo":["Author","Original","Date","Category","Tag","ReadingTime"],"navbar":["/","/home",{"text":"Guide","icon":"creative","link":"/guide/"},{"text":"Posts","icon":"edit","prefix":"/posts/","children":[{"text":"Team \uAD50\uC721","icon":"note","prefix":"Education/","children":["\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(PWA)","\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4"]}]},{"text":"Theme Docs","icon":"note","link":"https://vuepress-theme-hope.github.io/v2/"}],"footer":"Default footer","displayFooter":true}}}`);
const themeData = vue.ref(themeData$1);
const useThemeData$1 = () => themeData;
if (false) {
  __VUE_HMR_RUNTIME__.updateThemeData = (data2) => {
    themeData.value = data2;
  };
}
const themeLocaleDataSymbol = Symbol("");
const useThemeLocaleData$1 = () => {
  const themeLocaleData = vue.inject(themeLocaleDataSymbol);
  if (!themeLocaleData) {
    throw new Error("useThemeLocaleData() is called without provider.");
  }
  return themeLocaleData;
};
const resolveThemeLocaleData = (theme, routeLocale) => {
  var _a;
  return {
    ...theme,
    ...(_a = theme.locales) == null ? void 0 : _a[routeLocale]
  };
};
var clientConfig5 = defineClientConfig({
  enhance({ app }) {
    const themeData2 = useThemeData$1();
    const routeLocale = app._context.provides[routeLocaleSymbol];
    const themeLocaleData = vue.computed(() => resolveThemeLocaleData(themeData2.value, routeLocale.value));
    app.provide(themeLocaleDataSymbol, themeLocaleData);
    Object.defineProperties(app.config.globalProperties, {
      $theme: {
        get() {
          return themeData2.value;
        }
      },
      $themeLocale: {
        get() {
          return themeLocaleData.value;
        }
      }
    });
  }
});
var giscus = "";
const u$6 = { "provider": "Giscus", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" }, c$4 = Boolean(u$6.categoryId), l$5 = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "vi", "zh-CN", "zh-TW"];
var d$1 = vue.defineComponent({ name: "GiscusComment", props: { darkmode: Boolean }, setup(r2) {
  const d2 = usePageFrontmatter(), m2 = vueRouter.useRoute(), g = vue.ref(false), v2 = vue.computed(() => {
    const e2 = usePageLang().value;
    if (l$5.includes(e2))
      return e2;
    const o2 = e2.split("-")[0];
    return l$5.includes(o2) ? o2 : "en";
  }), y2 = vue.computed(() => {
    if (!c$4)
      return false;
    const e2 = false !== u$6.comment, t2 = d2.value.comment;
    return Boolean(t2) || false !== e2 && false !== t2;
  }), f2 = vue.computed(() => ({ repo: u$6.repo, repoId: u$6.repoId, category: u$6.category, categoryId: u$6.categoryId, lang: v2.value, theme: r2.darkmode ? "dark" : "light", mapping: u$6.mapping || "specific", term: withBase(m2.path), inputPosition: u$6.inputPosition || "top", reactionsEnabled: false !== u$6.reactionsEnabled ? "1" : "0", emitMetadata: "0" }));
  return vue.onMounted(() => {
    Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("giscus"));
    }).then(() => {
      g.value = true;
    });
  }), () => vue.h("div", { class: ["giscus-wrapper", { "input-top": "bottom" !== u$6.inputPosition }], style: { display: y2.value ? "block" : "none" } }, g.value ? vue.h("giscus-widget", f2.value) : vue.h("div", { style: "text-align:center" }, "Loading..."));
} });
const a$4 = { "provider": "Giscus", "repo": "vuepress-theme-hope/giscus-discussions", "repoId": "R_kgDOG_Pt2A", "category": "Announcements", "categoryId": "DIC_kwDOG_Pt2M4COD69" };
var p$4 = defineClientConfig({ enhance: ({ app: e2 }) => {
  const p2 = vue.defineComponent({ name: "CommentService", props: { darkmode: Boolean }, setup(e3) {
    const m2 = usePageFrontmatter(), p3 = vue.computed(() => m2.value.comment || false !== a$4 && false !== m2.value.comment);
    return () => vue.h(d$1, { darkmode: e3.darkmode, style: { display: p3.value ? "block" : "none" } });
  } });
  e2.component("CommentService", p2);
} });
var balloon = "";
var button = "";
const n$3 = { "selector": '.theme-hope-content div[class*="language-"] pre', "pure": false }, a$3 = () => !!navigator && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/iu.test(navigator.userAgent), l$4 = () => {
  const e2 = vueRouter.useRoute(), l2 = f$2({ "/zh/": { "copy": "\u590D\u5236\u6210\u529F", "hint": "\u590D\u5236\u4EE3\u7801" }, "/": { "copy": "Copied successfully", "hint": "Copy code" } });
  let i2;
  const p2 = (e3) => {
    if (!e3.hasAttribute("copy-code-registered")) {
      const t2 = document.createElement("button");
      t2.className = "copy-code-button", t2.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" class="icon-copy-code"><path fill="currentColor" d="M384 112v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h80c0-35.29 28.71-64 64-64s64 28.71 64 64h80c26.51 0 48 21.49 48 48zM192 40c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24m96 114v-20a6 6 0 00-6-6H102a6 6 0 00-6 6v20a6 6 0 006 6h180a6 6 0 006-6z" /></svg>', t2.addEventListener("click", () => {
        ((e4) => {
          const t3 = document.getSelection(), o2 = !!(t3 && t3.rangeCount > 0) && t3.getRangeAt(0), c2 = document.createElement("textarea");
          c2.value = e4, c2.setAttribute("readonly", ""), c2.style.position = "absolute", c2.style.top = "-9999px", document.body.appendChild(c2), c2.select(), document.execCommand("copy"), i2.pop(`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#06a35a"><path d="M822.812 824.618c-83.076 81.992-188.546 124.614-316.05 127.865-122.085-3.251-223.943-45.873-305.935-127.865S76.213 640.406 72.962 518.682c3.251-127.503 45.873-232.973 127.865-316.05 81.992-83.075 184.211-126.058 305.936-129.309 127.503 3.251 232.973 46.234 316.049 129.31 83.076 83.076 126.059 188.546 129.31 316.05-2.89 121.723-46.234 223.943-129.31 305.935zM432.717 684.111c3.973 3.974 8.307 5.78 13.364 6.14 5.057.362 9.753-1.444 13.365-5.417l292.57-287.515c3.974-3.973 5.78-8.307 5.78-13.364s-1.806-9.753-5.78-13.365l1.807 1.806c-3.973-3.973-8.669-5.779-14.087-6.14-5.418-.361-10.475 1.445-14.809 5.418L460.529 592.006c-3.973 3.25-8.669 4.695-14.448 4.695-5.78 0-10.836-1.445-15.531-3.973l-94.273-72.962c-4.335-3.251-9.392-4.335-14.448-3.973s-9.392 3.25-12.642 7.585l-2.89 3.973c-3.25 4.334-4.334 9.391-3.973 14.81.722 5.417 2.528 10.113 5.779 14.086L432.717 684.11z"/></svg><span>${l2.value.copy} \u{1F389}</span>`, n$3.duration), document.body.removeChild(c2), o2 && t3 && (t3.removeAllRanges(), t3.addRange(o2));
        })(e3.innerText);
      }), t2.setAttribute("aria-label", l2.value.hint), t2.setAttribute("data-balloon-pos", "left"), e3.parentElement && e3.parentElement.insertBefore(t2, e3), e3.setAttribute("copy-code-registered", "");
    }
  }, d2 = () => {
    const e3 = n$3.selector;
    setTimeout(() => {
      document.querySelectorAll(e3).forEach(p2);
    }, n$3.delay || 500);
  };
  vue.onMounted(() => {
    i2 = new b(), a$3() && !n$3.showInMobile || d2();
  }), vue.watch(() => e2.path, () => {
    a$3() && !n$3.showInMobile || d2();
  });
};
var i$4 = defineClientConfig({ setup: () => {
  l$4();
} });
var chart = "";
const LOADING_SVG$1 = '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>', parseChartConfig = (config, type) => {
  if ("json" === type)
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ChartJS = vue.defineComponent({ name: "ChartJS", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const t2 = vue.ref(null), i2 = vue.ref(null), n2 = vue.ref(true);
  return vue.onMounted(() => {
    Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("chart.js/auto"));
    }), new Promise((e3) => setTimeout(e3, 500))]).then(([{ default: t3 }]) => {
      var _a;
      t3.defaults.maintainAspectRatio = false;
      const r2 = parseChartConfig(decodeURIComponent(e2.config), e2.type), a2 = (_a = i2.value) == null ? void 0 : _a.getContext("2d");
      new t3(a2, r2), n2.value = false;
    });
  }), () => [e2.title ? vue.h("div", { class: "chart-title" }, decodeURIComponent(e2.title)) : null, n2.value ? vue.h("div", { class: "chart-loading-wrapper", innerHTML: LOADING_SVG$1 }) : null, vue.h("div", { ref: t2, class: "chart-wrapper", id: e2.id, style: { display: n2.value ? "none" : "block" } }, vue.h("canvas", { ref: i2, height: 400 }))];
} });
var echarts = "";
const LOADING_SVG = '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>', parseEChartsConfig = (config, type) => {
  if ("json" === type)
    return JSON.parse(config);
  const exports = {}, module = { exports };
  return eval(config), module.exports;
};
var ECharts = vue.defineComponent({ name: "ECharts", props: { config: { type: String, required: true }, id: { type: String, required: true }, title: { type: String, default: "" }, type: { type: String, default: "json" } }, setup(e2) {
  const t2 = vue.ref(null);
  let i2;
  const n2 = vue.ref(true);
  return vue.onMounted(() => {
    Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("echarts"));
    }), new Promise((e3) => setTimeout(e3, 500))]).then(([r2]) => {
      const s2 = parseEChartsConfig(decodeURIComponent(e2.config), e2.type);
      i2 = r2.init(t2.value), i2.showLoading(), i2.setOption(s2), i2.hideLoading(), n2.value = false;
    }), core.useEventListener("resize", core.useDebounceFn(() => i2 == null ? void 0 : i2.resize(), 100));
  }), vue.onBeforeUnmount(() => {
    i2 == null ? void 0 : i2.dispose();
  }), () => [e2.title ? vue.h("div", { class: "echarts-title" }, decodeURIComponent(e2.title)) : null, n2.value ? vue.h("div", { class: "echarts-loading-wrapper", innerHTML: LOADING_SVG }) : null, vue.h("div", { ref: t2, class: "echarts-wrapper", id: e2.id })];
} });
var codeDemo = "";
const n$2 = { "useBabel": false, "jsLib": [], "cssLib": [], "codepenLayout": "left", "codepenEditors": "101", "babel": "https://unpkg.com/@babel/standalone/babel.min.js", "vue": "https://unpkg.com/vue/dist/vue.global.prod.js", "react": "https://unpkg.com/react/umd/react.production.min.js", "reactDOM": "https://unpkg.com/react-dom/umd/react-dom.production.min.js" }, o$3 = { html: { types: ["html", "slim", "haml", "md", "markdown", "vue"], map: { html: "none", vue: "none", md: "markdown" } }, js: { types: ["js", "javascript", "coffee", "coffeescript", "ts", "typescript", "ls", "livescript"], map: { js: "none", javascript: "none", coffee: "coffeescript", ls: "livescript", ts: "typescript" } }, css: { types: ["css", "less", "sass", "scss", "stylus", "styl"], map: { css: "none", styl: "stylus" } } }, r$5 = (e2) => ({ ...n$2, ...e2, jsLib: Array.from(/* @__PURE__ */ new Set([...n$2.jsLib || [], ...e2.jsLib || []])), cssLib: Array.from(/* @__PURE__ */ new Set([...n$2.cssLib || [], ...e2.cssLib || []])) }), i$3 = (e2, t2) => {
  if (void 0 !== e2[t2])
    return e2[t2];
  const s2 = new Promise((e3) => {
    var _a;
    const s3 = document.createElement("script");
    s3.src = t2, (_a = document.querySelector("body")) == null ? void 0 : _a.appendChild(s3), s3.onload = () => {
      e3();
    };
  });
  return e2[t2] = s2, s2;
}, c$3 = (e2, t2) => {
  if (t2.css && Array.from(e2.childNodes).every((e3) => "STYLE" !== e3.nodeName)) {
    const s2 = ((e3, t3, s3) => {
      const a2 = document.createElement(e3);
      return t3 && Object.keys(t3).forEach((e4) => {
        if (e4.indexOf("data"))
          a2[e4] = t3[e4];
        else {
          const s4 = e4.replace("data", "");
          a2.dataset[s4] = t3[e4];
        }
      }), s3 && s3.forEach((e4) => {
        a2.appendChild(e4);
      }), a2;
    })("style", { innerHTML: t2.css });
    e2.appendChild(s2);
  }
}, p$3 = (e2) => e2.replace(/<br \/>/g, "<br>").replace(/<((\S+)[^<]*?)\s+\/>/g, "<$1></$2>"), d = (e2) => `<div id="app">
${p$3(e2)}
</div>`, u$5 = (e2) => `${e2.replace("export default ", "const $reactApp = ").replace(/App\.__style__(\s*)=(\s*)`([\s\S]*)?`/, "")};
ReactDOM.createRoot(document.getElementById("app")).render(React.createElement($reactApp))`, m$3 = (e2) => e2.replace(/export\s+default\s*\{(\n*[\s\S]*)\n*\}\s*;?$/u, "Vue.createApp({$1}).mount('#app')").replace(/export\s+default\s*define(Async)?Component\s*\(\s*\{(\n*[\s\S]*)\n*\}\s*\)\s*;?$/u, "Vue.createApp({$1}).mount('#app')").trim(), v = (e2) => `(function(exports){var module={};module.exports=exports;${e2};return module.exports.__esModule?module.exports.default:module.exports;})({})`, h$2 = {};
var y$1 = vue.defineComponent({ name: "CodeDemo", props: { id: { type: String, required: true }, type: { type: String, default: "normal" }, title: { type: String, default: "" }, config: { type: String, default: "" }, code: { type: String, required: true } }, setup(e2, { slots: n2 }) {
  const y2 = vue.ref(false), b2 = vue.ref(null), g = vue.ref(null), f2 = vue.ref("0"), w2 = vue.ref(false), j2 = vue.computed(() => JSON.parse(decodeURIComponent(e2.config || "{}"))), L = vue.computed(() => ((e3) => {
    const t2 = Object.keys(e3), s2 = { html: [], js: [], css: [], isLegal: false };
    return ["html", "js", "css"].forEach((a2) => {
      const l2 = t2.filter((e4) => o$3[a2].types.includes(e4));
      if (l2.length) {
        const t3 = l2[0];
        s2[a2] = [e3[t3].replace(/^\n|\n$/g, ""), o$3[a2].map[t3] || t3];
      }
    }), s2.isLegal = !(s2.html.length && "none" !== s2.html[1] || s2.js.length && "none" !== s2.js[1] || s2.css.length && "none" !== s2.css[1]), s2;
  })(JSON.parse(decodeURIComponent(e2.code || "{}")))), S2 = vue.computed(() => "react" === e2.type ? ((e3, t2) => {
    const s2 = r$5(t2);
    return { ...s2, html: d(""), js: u$5(e3.js[0] || ""), css: e3.css[0] || (e3.js[0] ? e3.js[0].replace(/App\.__style__(?:\s*)=(?:\s*)`([\s\S]*)?`/, "$1").trim() : ""), isLegal: e3.isLegal, jsLib: [s2.react, s2.reactDOM, ...s2.jsLib], jsx: true, getScript: () => {
      var _a, _b;
      const t3 = ((_b = (_a = window.Babel) == null ? void 0 : _a.transform(e3.js[0] || "", { presets: ["es2015", "react"] })) == null ? void 0 : _b.code) || "";
      return `window.ReactDOM.createRoot(document.firstElementChild).render(window.React.createElement(${v(t3)}))`;
    } };
  })(L.value, j2.value) : "vue" === e2.type ? ((e3, t2) => {
    const s2 = r$5(t2), a2 = e3.html[0] || "", l2 = /<template>([\s\S]+)<\/template>/u.exec(a2), n3 = /<script(\s*lang=(['"])(.*?)\2)?>([\s\S]+)<\/script>/u.exec(a2), o2 = /<style(\s*lang=(['"])(.*?)\2)?\s*(?:scoped)?>([\s\S]+)<\/style>/u.exec(a2), i2 = l2 ? l2[1].replace(/^\n|\n$/g, "") : "", [c2 = "", p2 = ""] = n3 ? [n3[4].replace(/^\n|\n$/g, ""), n3[3]] : [], [u2 = "", h2 = ""] = o2 ? [o2[4].replace(/^\n|\n$/g, ""), o2[3]] : [], y3 = "" === p2 && ("" === h2 || "css" === h2);
    return { ...s2, html: d(i2), js: m$3(c2), css: u2, isLegal: y3, jsLib: [s2.vue, ...s2.jsLib], getScript: () => {
      var _a, _b;
      const e4 = t2.useBabel ? ((_b = (_a = window.Babel) == null ? void 0 : _a.transform(c2, { presets: ["es2015"] })) == null ? void 0 : _b.code) || "" : c2.replace(/export\s+default/u, "return");
      return `const app=window.document.createElement('div');document.firstElementChild.appendChild(app);const appOptions=${v(e4)};appOptions.template=\`${i2.replace("`", '\\`"')}\`;window.Vue.createApp(appOptions).mount(app);`;
    } };
  })(L.value, j2.value) : ((e3, t2) => {
    const s2 = r$5(t2), a2 = e3.js[0] || "";
    return { ...s2, html: p$3(e3.html[0] || ""), js: a2, css: e3.css[0] || "", isLegal: e3.isLegal, getScript: () => {
      var _a;
      return s2.useBabel ? ((_a = window.Babel.transform(a2, { presets: ["es2015"] })) == null ? void 0 : _a.code) || "" : a2;
    } };
  })(L.value, j2.value)), x2 = vue.computed(() => S2.value.isLegal), C = (t2 = false) => {
    const s2 = b2.value.attachShadow({ mode: "open" }), a2 = document.createElement("div");
    a2.classList.add("code-demo-app"), s2.appendChild(a2), x2.value ? (t2 && (a2.innerHTML = S2.value.html), c$3(s2, S2.value), ((e3, t3, s3) => {
      const a3 = s3.getScript();
      if (a3 && Array.from(t3.childNodes).every((e4) => "SCRIPT" !== e4.nodeName)) {
        const s4 = document.createElement("script");
        s4.appendChild(document.createTextNode(`{const document=window.document.querySelector('#${e3} .code-demo-container').shadowRoot;
${a3}}`)), t3.appendChild(s4);
      }
    })(e2.id, s2, S2.value), f2.value = "0") : f2.value = "auto", w2.value = true;
  }, M = () => {
    switch (e2.type) {
      case "react":
        return ((e3) => Promise.all([i$3(h$2, e3.babel), i$3(h$2, e3.react), i$3(h$2, e3.reactDOM)]))(S2.value).then(() => C());
      case "vue":
        return ((e3) => {
          const t2 = [i$3(h$2, e3.vue)];
          return e3.useBabel && t2.push(i$3(h$2, e3.babel)), Promise.all(t2);
        })(S2.value).then(() => C());
      default:
        return ((e3) => e3.useBabel ? i$3(h$2, e3.babel) : Promise.resolve())(S2.value).then(() => C(true));
    }
  };
  return vue.onMounted(() => {
    setTimeout(() => {
      M();
    }, 500);
  }), () => {
    var _a;
    return vue.h("div", { class: "code-demo-wrapper", id: e2.id }, [w2.value ? null : vue.h("div", { class: ["loading"], innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>' }), vue.h("div", { class: "code-demo-header" }, [S2.value.isLegal ? vue.h("button", { class: ["toggle-button", y2.value ? "down" : "right"], onClick: () => {
      f2.value = y2.value ? "0" : `${g.value.clientHeight + 13.8}px`, y2.value = !y2.value;
    } }) : null, e2.title ? vue.h("span", { class: "title" }, decodeURIComponent(e2.title)) : null, S2.value.isLegal && false !== S2.value.jsfiddle ? vue.h("form", { class: "code-demo-jsfiddle", target: "_blank", action: "https://jsfiddle.net/api/post/library/pure/", method: "post" }, [vue.h("input", { type: "hidden", name: "html", value: S2.value.html }), vue.h("input", { type: "hidden", name: "js", value: S2.value.js }), vue.h("input", { type: "hidden", name: "css", value: S2.value.css }), vue.h("input", { type: "hidden", name: "wrap", value: "1" }), vue.h("input", { type: "hidden", name: "panel_js", value: "3" }), vue.h("input", { type: "hidden", name: "resources", value: [...S2.value.cssLib, ...S2.value.jsLib].join(",") }), vue.h("button", { type: "submit", class: "jsfiddle-button", innerHTML: '<svg class="jsfiddle-icon" viewBox="0 0 1170 1024" xmlns="http://www.w3.org/2000/svg" width="228.516" height="200"><path d="M1028.571 441.143q63.429 26.286 102.572 83.143t39.143 126.571q0 93.714-67.429 160.286T940 877.714q-2.286 0-6.571-.285t-6-.286H232q-97.143-5.714-164.571-71.714T0 645.143q0-62.857 31.429-116t84-84q-6.858-22.286-6.858-46.857 0-65.715 46.858-112T269.143 240q54.286 0 98.286 33.143 42.857-88 127.142-141.714t186.572-53.715q94.857 0 174.857 46t126.571 124.857 46.572 172q0 3.429-.286 10.286t-.286 10.286zm-761.142 152q0 69.714 48 110.286T434.286 744q78.285 0 137.143-56.571-9.143-11.429-27.143-32.286t-24.857-28.857q-38.286 37.143-82.286 37.143-31.429 0-53.429-19.143t-22-50q0-30.286 22-49.715T436 525.143q25.143 0 48.286 12T526 568.57t37.143 42.858 39.428 46.857 44 42.857T702 732.57t69.429 12q69.142 0 116.857-40.857T936 594.857q0-69.143-48-109.714T769.714 444.57Q688 444.571 632 500l53.143 61.714q37.714-36.571 81.143-36.571 29.714 0 52.571 18.857t22.857 48q0 32.571-21.143 52.286T766.857 664q-24.571 0-47.143-12t-41.143-31.429-37.428-42.857-39.714-46.857T557.143 488 502 456.571t-67.714-12q-69.715 0-118.286 40.286t-48.571 108.286z"/></svg>', "aria-label": "JSFiddle", "data-balloon-pos": "up" })]) : null, S2.value.isLegal && false === S2.value.codepen ? null : vue.h("form", { class: "code-demo-codepen", target: "_blank", action: "https://codepen.io/pen/define", method: "post" }, [vue.h("input", { type: "hidden", name: "data", value: JSON.stringify({ html: S2.value.html, js: S2.value.js, css: S2.value.css, js_external: S2.value.jsLib.join(";"), css_external: S2.value.cssLib.join(";"), layout: S2.value.codepenLayout, html_pre_processor: L.value ? L.value.html[1] : "none", js_pre_processor: L.value ? L.value.js[1] : S2.value.jsx ? "babel" : "none", css_pre_processor: L.value ? L.value.css[1] : "none", editors: S2.value.codepenEditors }) }), vue.h("button", { type: "submit", innerHTML: '<svg class="codepen-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="200" height="200"><path d="M123.429 668L468 897.714V692.571L277.143 565.143zM88 585.714L198.286 512 88 438.286v147.428zm468 312L900.571 668 746.857 565.143 556 692.57v205.143zM512 616l155.429-104L512 408 356.571 512zM277.143 458.857L468 331.43V126.286L123.429 356zM825.714 512L936 585.714V438.286zm-78.857-53.143L900.571 356 556 126.286v205.143zM1024 356v312q0 23.429-19.429 36.571l-468 312Q524.571 1024 512 1024t-24.571-7.429l-468-312Q0 691.43 0 668V356q0-23.429 19.429-36.571l468-312Q499.429 0 512 0t24.571 7.429l468 312Q1024 332.57 1024 356z"/></svg>', class: "codepen-button", "aria-label": "Codepen", "data-balloon-pos": "up" })])]), vue.h("div", { ref: b2, class: "code-demo-container", style: { display: x2.value && w2.value ? "block" : "none" } }), vue.h("div", { class: "code-demo-code-wrapper", style: { height: f2.value } }, vue.h("div", { ref: g, class: "code-demo-codes" }, (_a = n2.default) == null ? void 0 : _a.call(n2)))]);
  };
} });
var codeTabs = "";
const r$4 = core.useStorage("VUEPRESS_CODE_TAB_STORE", {});
var s$6 = vue.defineComponent({ name: "CodeTabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, tabId: { type: String, default: "" } }, setup(a2, { slots: t2 }) {
  const s2 = vue.ref((() => {
    if (a2.tabId) {
      const e2 = a2.data.findIndex(({ title: e3, value: t3 = e3 }) => r$4.value[a2.tabId] === t3);
      if (-1 !== e2)
        return e2;
    }
    return a2.active;
  })()), d2 = vue.ref([]), i2 = (e2, t3) => {
    if (" " === e2.key || "Enter" === e2.key ? (e2.preventDefault(), s2.value = t3) : "ArrowRight" === e2.key ? (e2.preventDefault(), ((e3 = s2.value) => {
      s2.value = e3 < d2.value.length - 1 ? e3 + 1 : 0, d2.value[s2.value].focus();
    })()) : "ArrowLeft" === e2.key && (e2.preventDefault(), ((e3 = s2.value) => {
      s2.value = e3 > 0 ? e3 - 1 : d2.value.length - 1, d2.value[s2.value].focus();
    })()), a2.tabId) {
      const { title: e3, value: t4 = e3 } = a2.data[s2.value];
      r$4.value[a2.tabId] = t4;
    }
  };
  return vue.watch(() => r$4.value[a2.tabId], (e2, t3) => {
    if (a2.tabId && e2 !== t3) {
      const t4 = a2.data.findIndex(({ title: a3, value: t5 = a3 }) => t5 === e2);
      -1 !== t4 && (s2.value = t4);
    }
  }), () => vue.h(ClientOnly, () => a2.data.length ? vue.h("div", { class: "code-tabs" }, [vue.h("div", { class: "code-tabs-nav" }, a2.data.map(({ title: e2 }, t3) => {
    const l2 = t3 === s2.value;
    return vue.h("button", { ref: (e3) => {
      e3 && (d2.value[t3] = e3);
    }, class: ["code-tabs-nav-tab", { active: l2 }], "aria-pressed": l2, "aria-expanded": l2, onClick: () => {
      s2.value = t3, (() => {
        if (a2.tabId) {
          const { title: e3, value: t4 = e3 } = a2.data[s2.value];
          r$4.value[a2.tabId] = t4;
        }
      })();
    }, onKeydown: (e3) => i2(e3, t3) }, e2);
  })), a2.data.map(({ title: e2, value: a3 = e2 }, l2) => {
    var _a;
    const u2 = l2 === s2.value;
    return vue.h("div", { class: ["code-tab", { active: u2 }], "aria-selected": u2 }, (_a = t2[`tab${l2}`]) == null ? void 0 : _a.call(t2, { title: e2, value: a3, isActive: u2 }));
  })]) : null);
} });
var flowchart = "";
var s$5 = { x: 0, y: 0, "line-width": 2, "line-length": 40, "text-margin": 8, "font-size": 14, "font-color": "#8DA1AC", "line-color": "#8DA1AC", "element-color": "black", fill: "white", "yes-text": "Yes", "no-text": "No", "arrow-end": "block", scale: 1 }, c$2 = { ...s$5, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#595959", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#FF485E", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FF485E", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#1890ff", "line-width": "0px" } } }, a$2 = { ...s$5, "line-width": 1, symbols: { start: { class: "start-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, end: { class: "end-element", fill: "#ccc", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, operation: { class: "operation-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, inputoutput: { class: "inputoutput-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, subroutine: { class: "subroutine-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, condition: { class: "condition-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" }, parallel: { class: "parallel-element", fill: "#f1f1f1", "line-width": "1px", "line-color": "#5c6ac4", "font-color": "#000" } } }, f$1 = { ant: c$2, vue: { ...s$5, symbols: { start: { class: "start-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, end: { class: "end-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" }, operation: { class: "operation-element", "font-color": "#fff", fill: "#00BC7D", "line-width": "0px" }, inputoutput: { class: "inputoutput-element", "font-color": "#fff", fill: "#EB4D5D", "line-width": "0px" }, subroutine: { class: "subroutine-element", "font-color": "#fff", fill: "#937AC4", "element-color": "#fff", "line-color": "red" }, condition: { class: "condition-element", "font-color": "#fff", fill: "#FFB500", "line-width": "0px" }, parallel: { class: "parallel-element", "font-color": "#fff", fill: "#2F495F", "line-width": "0px" } } }, pie: a$2 }, p$2 = vue.defineComponent({ name: "FlowChart", props: { code: { type: String, required: true }, id: { type: String, required: true }, preset: { type: String, default: "vue" } }, setup(t2) {
  let s2;
  const c2 = vue.ref(), a2 = vue.ref(true), p2 = vue.ref(1), d2 = vue.computed(() => {
    const e2 = f$1[t2.preset];
    return e2 || (console.warn(`[md-enhance:flowchart] Unknown preset: ${t2.preset}`), f$1.vue);
  }), u2 = (e2) => e2 < 419 ? 0.8 : e2 > 1280 ? 1 : 0.9;
  return vue.onMounted(() => {
    Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("flowchart.js"));
    }), new Promise((e2) => setTimeout(e2, 500))]).then(([i2]) => {
      const { parse: n2 } = i2;
      s2 = n2(decodeURIComponent(t2.code)), p2.value = u2(window.innerWidth), a2.value = false, s2.drawSVG(t2.id, { ...d2.value, scale: p2.value }), core.useEventListener("resize", core.useDebounceFn(() => {
        const e2 = u2(window.innerWidth);
        p2.value !== e2 && (p2.value = e2, s2.drawSVG(t2.id, { ...d2.value, scale: e2 }));
      }, 100));
    });
  }), () => [a2.value ? vue.h("div", { class: ["flowchart-loading-wrapper"], innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" class="loading-icon" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.3333333333333333s"/></circle><circle cx="50" cy="50" r="0" fill="none" stroke="currentColor" stroke-width="2"><animate attributeName="r" repeatCount="indefinite" dur="1s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/><animate attributeName="opacity" repeatCount="indefinite" dur="1s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.6666666666666666s"/></circle></svg>' }) : null, vue.h("div", { ref: c2, class: ["flowchart-wrapper", t2.preset], id: t2.id, style: { display: a2.value ? "none" : "block" } })];
} });
var mermaid = "";
const n$1 = () => vue.h(a$5, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((r2) => vue.h("circle", { cx: 50, cy: 50, r: 0, fill: "none", stroke: "currentColor", strokeWidth: "2" }, [vue.h("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: r2 }), vue.h("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: r2 })])));
var s$4 = vue.defineComponent({ name: "Mermaid", props: { id: { type: String, required: true }, code: { type: String, required: true } }, setup(r2) {
  const d2 = vue.ref(""), s2 = vue.ref(), f2 = vue.ref(false);
  let c2 = null;
  return vue.onMounted(() => {
    const e2 = document.querySelector("html"), t2 = decodeURIComponent(r2.code), o2 = () => e2.classList.contains("dark") || "dark" === e2.getAttribute("data-theme");
    f2.value = o2(), Promise.all([Promise.resolve().then(function() {
      return /* @__PURE__ */ _interopNamespace(require("mermaid"));
    }), new Promise((e3) => setTimeout(e3, 500))]).then(([i2]) => {
      const { initialize: n2, render: s3 } = i2.default, u2 = () => {
        const e3 = document.createElement("div");
        e3.style.position = "relative", e3.style.top = "-9999px";
        const o3 = (r3) => {
          d2.value = r3, document.body.removeChild(e3);
        };
        var a2;
        n2({ theme: "base", themeVariables: (a2 = f2.value, { dark: a2, background: a2 ? "#1e1e1e" : "#fff", primaryColor: a2 ? "#389d70" : "#4abf8a", primaryBorderColor: a2 ? "#389d70" : "#4abf8a", primaryTextColor: "#fff", secondaryColor: "#ffb500", secondaryBorderColor: a2 ? "#fff" : "#000", secondaryTextColor: a2 ? "#ddd" : "#333", tertiaryColor: a2 ? "#282828" : "#efeef4", tertiaryBorderColor: a2 ? "#bbb" : "#242424", tertiaryTextColor: a2 ? "#ddd" : "#333", noteBkgColor: a2 ? "#f6d365" : "#fff5ad", noteTextColor: "#242424", noteBorderColor: a2 ? "#f6d365" : "#333", lineColor: a2 ? "#d3d3d3" : "#333", textColor: a2 ? "#fff" : "#242424", mainBkg: a2 ? "#389d70" : "#4abf8a", errorBkgColor: "#eb4d5d", errorTextColor: "#fff", nodeBorder: a2 ? "#389d70" : "#4abf8a", nodeTextColor: a2 ? "#fff" : "#242424", signalTextColor: a2 ? "#9e9e9e" : "#242424", classText: "#fff", labelColor: "#fff", fillType0: a2 ? "#cf1322" : "#f1636e", fillType1: "#f39c12", fillType2: "#2ecc71", fillType3: "#fa541c", fillType4: "#25a55b", fillType5: "#13c2c2", fillType6: "#096dd9", fillType7: "#aa6fe9" }), flowchart: { useMaxWidth: false }, sequence: { useMaxWidth: false }, journey: { useMaxWidth: false }, gantt: { useMaxWidth: false }, er: { useMaxWidth: false }, pie: { useMaxWidth: false }, ...{}, startOnLoad: false }), d2.value = "", document.body.appendChild(e3), vue.nextTick(() => {
          s3(r2.id, t2, o3, e3);
        });
      };
      u2(), c2 = new MutationObserver(() => {
        f2.value = o2();
      }), c2.observe(e2, { attributeFilter: ["class", "data-theme"], attributes: true }), vue.watch(f2, u2);
    });
  }), vue.onBeforeUnmount(() => {
    c2 == null ? void 0 : c2.disconnect();
  }), () => vue.h("div", { ref: s2, class: ["md-enhance-mermaid", { loading: !d2.value }] }, d2.value ? vue.h("div", { class: "content", innerHTML: d2.value }) : vue.h(n$1));
} });
const e$1 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/highlight/highlight.esm.js"));
}), s$3 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/markdown/markdown.esm.js"));
}), m$2 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/math/math.esm.js"));
}), r$3 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/notes/notes.esm.js"));
}), i$2 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/dist/reveal.esm.js"));
}), o$2 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/search/search.esm.js"));
}), l$3 = () => Promise.resolve().then(function() {
  return /* @__PURE__ */ _interopNamespace(require("reveal.js/plugin/zoom/zoom.esm.js"));
});
const useReveal = () => [
  i$2(),
  s$3(),
  e$1(),
  m$2(),
  o$2(),
  r$3(),
  l$3()
];
var index$2 = "";
var leagueGothic = "";
var sourceSansPro = "";
const o$1 = () => vue.h(a$5, { name: "loading" }, () => ["0s", "-0.333s", "-0.667s"].map((e2) => vue.h("circle", { cx: 50, cy: 50, r: 0, fill: "none", stroke: "currentColor", strokeWidth: "2" }, [vue.h("animate", { attributeName: "r", repeatCount: "indefinite", dur: "1s", values: "0;40", keyTimes: "0;1", keySplines: "0 0.2 0.8 1", calcMode: "spline", begin: e2 }), vue.h("animate", { attributeName: "opacity", repeatCount: "indefinite", dur: "1s", values: "1;0", keyTimes: "0;1", keySplines: "0.2 0 0.8 1", calcMode: "spline", begin: e2 })])));
var u$4 = vue.defineComponent({ name: "Presentation", props: { id: { type: String, required: true }, theme: { type: String, default: "auto" } }, setup(a2) {
  const n2 = usePageFrontmatter(), u2 = vue.ref(""), d2 = vue.ref(false), c2 = vue.ref(), m2 = vue.ref();
  let p2;
  return vue.onMounted(() => {
    var _a;
    if (m2.value) {
      u2.value = decodeURIComponent(((_a = c2.value) == null ? void 0 : _a.dataset.code) || ""), m2.value.setAttribute("id", a2.id), m2.value.setAttribute("data-theme", a2.theme);
      const t2 = [new Promise((e2) => setTimeout(e2, 500)), ...useReveal()];
      Promise.all(t2).then(([, e2, ...t3]) => {
        p2 = new e2.default(m2.value, { plugins: t3.map((e3) => e3.default) }), p2.initialize({ backgroundTransition: "slide", hash: "Slide" === n2.value.layout, mouseWheel: "Slide" === n2.value.layout, transition: "slide", slideNumber: true, ...{}, ...n2.value.reveal || {}, embedded: "Slide" !== n2.value.layout }).then(() => {
          d2.value = false, p2.configure({ backgroundTransition: "slide" });
        });
      });
    }
  }), vue.onBeforeUnmount(() => {
    p2 == null ? void 0 : p2.destroy();
  }), () => vue.h("div", { ref: c2, class: { "md-enhance-presentation": true, loading: d2.value } }, [d2.value ? vue.h(o$1) : null, vue.h("div", { ref: m2, class: ["reveal", "reveal-viewport"] }, vue.h("div", { class: "slides", style: { display: d2.value ? "none" : "block" }, innerHTML: `<section data-markdown data-separator="^\\r?\\n---\\r?\\n$" data-separator-vertical="^\\r?\\n--\\r?\\n$"><script type="text/template">${u2.value}<\/script></section>` }))]);
} });
var index$1 = "";
var footnote = "";
var imageMark = "";
var tabs = "";
const r$2 = core.useStorage("VUEPRESS_TAB_STORE", {});
var s$2 = vue.defineComponent({ name: "Tabs", props: { active: { type: Number, default: 0 }, data: { type: Array, required: true }, tabId: { type: String, default: "" } }, setup(t2, { slots: a2 }) {
  const s2 = vue.ref((() => {
    if (t2.tabId) {
      const e2 = t2.data.findIndex(({ title: e3, value: a3 = e3 }) => r$2.value[t2.tabId] === a3);
      if (-1 !== e2)
        return e2;
    }
    return t2.active;
  })()), i2 = vue.ref([]), n2 = () => {
    if (t2.tabId) {
      const { title: e2, value: a3 = e2 } = t2.data[s2.value];
      r$2.value[t2.tabId] = a3;
    }
  }, d2 = (e2, t3) => {
    " " === e2.key || "Enter" === e2.key ? (e2.preventDefault(), s2.value = t3) : "ArrowRight" === e2.key ? (e2.preventDefault(), ((e3 = s2.value) => {
      s2.value = e3 < i2.value.length - 1 ? e3 + 1 : 0, i2.value[s2.value].focus();
    })()) : "ArrowLeft" === e2.key && (e2.preventDefault(), ((e3 = s2.value) => {
      s2.value = e3 > 0 ? e3 - 1 : i2.value.length - 1, i2.value[s2.value].focus();
    })()), n2();
  };
  return vue.watch(() => r$2.value[t2.tabId], (e2, a3) => {
    if (t2.tabId && e2 !== a3) {
      const a4 = t2.data.findIndex(({ title: t3, value: a5 = t3 }) => a5 === e2);
      -1 !== a4 && (s2.value = a4);
    }
  }), () => vue.h(ClientOnly, () => vue.h("div", { class: "tab-list" }, [vue.h("div", { class: "tab-list-nav" }, t2.data.map(({ title: e2 }, t3) => {
    const a3 = t3 === s2.value;
    return vue.h("button", { ref: (e3) => {
      e3 && (i2.value[t3] = e3);
    }, class: ["tab-list-nav-item", { active: a3 }], "aria-pressed": a3, "aria-expanded": a3, onClick: () => {
      s2.value = t3, n2();
    }, onKeydown: (e3) => d2(e3, t3) }, e2);
  })), t2.data.map(({ title: e2, value: t3 = e2 }, l2) => {
    var _a;
    const u2 = l2 === s2.value;
    return vue.h("div", { class: ["tab-item", { active: u2 }], "aria-selected": u2 }, (_a = a2[`tab${l2}`]) == null ? void 0 : _a.call(a2, { title: e2, value: t3, isActive: u2 }));
  })]));
} });
var tasklist = "";
var tex = "";
var clientConfig8 = defineClientConfig({
  enhance: ({ app }) => {
    app.component("ChartJS", ChartJS);
    app.component("ECharts", ECharts);
    app.component("CodeDemo", y$1);
    app.component("CodeTabs", s$6);
    app.component("FlowChart", p$2);
    app.component("Mermaid", s$4);
    app.component("Presentation", u$4);
    app.component("Tabs", s$2);
  }
});
var photoswipe = "";
const s$1 = ".theme-hope-content :not(a) > img", a$1 = { "/zh/": { "closeTitle": "\u5173\u95ED", "downloadTitle": "\u4E0B\u8F7D\u56FE\u7247", "fullscreenTitle": "\u5207\u6362\u5168\u5C4F", "zoomTitle": "\u7F29\u653E", "arrowPrevTitle": "\u4E0A\u4E00\u4E2A (\u5DE6\u7BAD\u5934)", "arrowNextTitle": "\u4E0B\u4E00\u4E2A (\u53F3\u7BAD\u5934)" }, "/": { "closeTitle": "Close", "downloadTitle": "Download Image", "fullscreenTitle": "Switch to full screen", "zoomTitle": "Zoom in/out", "arrowPrevTitle": "Prev (Arrow Left)", "arrowNextTitle": "Next (Arrow Right)" } }, l$2 = 500, m$1 = {}, p$1 = (e2) => ({ src: e2.src, width: e2.naturalWidth, height: e2.naturalHeight, alt: e2.alt }), u$3 = () => {
  const { isSupported: e2, toggle: u2 } = core.useFullscreen(), h2 = f$2(a$1), d2 = vueRouter.useRoute(), c2 = () => {
    Promise.all([Promise.resolve().then(function() {
      return photoswipe_esm;
    }), new Promise((e3) => setTimeout(e3, l$2)).then(() => ((e3) => {
      const t2 = Array.from(document.querySelectorAll(e3));
      return Promise.all(t2.map((e4) => new Promise((t3, o2) => {
        e4.complete ? t3(p$1(e4)) : (e4.onload = () => t3(p$1(e4)), e4.onerror = (e5) => o2(e5));
      }))).then((e4) => ({ elements: t2, infos: e4 }));
    })(s$1))]).then(([t2, o2]) => {
      o2.elements.forEach((r2, i2) => {
        r2.addEventListener("click", () => {
          const r3 = new t2.default({ dataSource: o2.infos, ...h2.value, ...m$1, index: i2 });
          r3.on("uiRegister", () => {
            e2 && r3.ui.registerElement({ name: "fullscreen", order: 7, isButton: true, html: '<svg class="pswp__icn" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M249.5 270.833H437v-75H212a37.5 37.5 0 0 0-37.5 37.5v225h75v-187.5zm-37.5 600h225v-75H249.5v-187.5h-75v225a37.5 37.5 0 0 0 37.5 37.5zm637.5-37.5v-225h-75v187.5H587v75h225a37.5 37.5 0 0 0 37.5-37.5zM587 270.833h187.5v187.5h75v-225a37.5 37.5 0 0 0-37.5-37.5H587v75z"/></svg>', onClick: () => {
              u2();
            } }), r3.ui.registerElement({ name: "download", order: 8, isButton: true, tagName: "a", html: { isCustomSVG: true, inner: '<path d="M20.5 14.3 17.1 18V10h-2.2v7.9l-3.4-3.6L10 16l6 6.1 6-6.1-1.5-1.6ZM23 23H9v2h14" id="pswp__icn-download"/>', outlineID: "pswp__icn-download" }, onInit: (e3, t3) => {
              e3.setAttribute("download", ""), e3.setAttribute("target", "_blank"), e3.setAttribute("rel", "noopener"), t3.on("change", () => {
                e3.href = t3.currSlide.data.src;
              });
            } });
          }), r3.init();
        });
      });
    });
  };
  vue.watch(() => d2.path, () => c2()), vue.onMounted(() => c2());
};
var h$1 = defineClientConfig({ setup: () => {
  u$3();
} });
const useThemeData = () => useThemeData$1();
const useThemeLocaleData = () => useThemeLocaleData$1();
const usePure = () => vue.computed(() => Boolean(useThemeData().value.pure));
const useMobile = () => {
  const themeData2 = useThemeData();
  const isMobile = vue.ref(false);
  const mobileHandler = () => {
    isMobile.value = window.innerWidth <= (themeData2.value.mobileBreakPoint || 719);
  };
  vue.onMounted(() => {
    mobileHandler();
    core.useEventListener("resize", mobileHandler, false);
    core.useEventListener("orientationchange", mobileHandler, false);
  });
  return isMobile;
};
const useNavigate = () => {
  const router = vueRouter.useRouter();
  const route = vueRouter.useRoute();
  return (url) => {
    if (url) {
      if (url.startsWith("/")) {
        if (route.path !== url)
          void router.push(url);
      } else if (url.startsWith("http://") || url.startsWith("https://") || url.startsWith("mailto:")) {
        if (window)
          window.open(url);
      } else {
        const base = route.path.slice(0, route.path.lastIndexOf("/"));
        void router.push(`${base}/${encodeURI(url)}`);
      }
    }
  };
};
const useAutoLink = (item, preferFull = false) => {
  const router = vueRouter.useRouter();
  const { fullPath, meta, name } = x(router, encodeURI(item));
  return {
    text: !preferFull && meta.shortTitle ? meta.shortTitle : meta.title || item,
    link: name === "404" ? item : fullPath,
    ...meta.icon ? { icon: meta.icon } : {}
  };
};
const usePageAuthor = () => {
  const themeLocale = useThemeLocaleData();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    const { author } = frontmatter.value;
    if (author)
      return J(author);
    if (author === false)
      return [];
    return J(themeLocale.value.author, false);
  });
};
const usePageCategory = () => {
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => V(frontmatter.value.category).map((name) => {
    var _a, _b;
    return {
      name,
      path: ((_b = (_a = vue.inject(Symbol.for("categoryMap"))) == null ? void 0 : _a.value.map[name]) == null ? void 0 : _b.path) || ""
    };
  }));
};
const usePageTag = () => {
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => B(frontmatter.value.tag).map((name) => {
    var _a, _b;
    return {
      name,
      path: ((_b = (_a = vue.inject(Symbol.for("tagMap"))) == null ? void 0 : _a.value.map[name]) == null ? void 0 : _b.path) || ""
    };
  }));
};
const usePageDate = () => {
  const frontmatter = usePageFrontmatter();
  const page2 = usePageData();
  return vue.computed(() => {
    const { date } = frontmatter.value;
    if (date)
      return Z(date);
    const { createdTime } = page2.value.git || {};
    if (createdTime)
      return Z(new Date(createdTime));
    return null;
  });
};
const usePageInfo = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  const author = usePageAuthor();
  const category2 = usePageCategory();
  const tag2 = usePageTag();
  const date = usePageDate();
  const config2 = vue.reactive({
    author: author.value,
    category: category2.value,
    date: date.value,
    localizedDate: page2.value.localizedDate,
    tag: tag2.value,
    isOriginal: frontmatter.value.isOriginal || false,
    readingTime: page2.value.readingTime,
    pageview: false
  });
  const items = vue.computed(() => "pageInfo" in frontmatter.value ? frontmatter.value.pageInfo : "pageInfo" in themeLocale.value ? themeLocale.value.pageInfo : null);
  return { config: config2, items };
};
let promise = null;
let promiseResolve = null;
const scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
const useScrollPromise = () => scrollPromise;
var footer = "";
var PageFooter = vue.defineComponent({
  name: "PageFooter",
  setup() {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const author = usePageAuthor();
    const enable = vue.computed(() => {
      const { copyright: copyright2, footer: footer2 } = frontmatter.value;
      return footer2 !== false && Boolean(copyright2 || footer2 || themeLocale.value.displayFooter);
    });
    const content = vue.computed(() => {
      const { footer: footer2 } = frontmatter.value;
      return footer2 === false ? false : typeof footer2 === "string" ? footer2 : themeLocale.value.footer || "";
    });
    const copyright = vue.computed(() => "copyright" in frontmatter.value ? frontmatter.value.copyright : "copyright" in themeLocale.value ? themeLocale.value.copyright : author.value.length ? `Copyright \xA9 ${new Date().getFullYear()} ${author.value[0].name}` : false);
    return () => enable.value ? vue.h("footer", { class: "footer-wrapper" }, [
      vue.h("div", { class: "footer", innerHTML: content.value }),
      copyright.value ? vue.h("div", {
        class: "copyright",
        innerHTML: copyright.value
      }) : null
    ]) : null;
  }
});
var AutoLink = vue.defineComponent({
  name: "AutoLink",
  inheritAttrs: false,
  props: {
    config: {
      type: Object,
      required: true
    },
    exact: Boolean,
    externalLinkIcon: {
      type: Boolean,
      default: true
    }
  },
  emits: ["focusout"],
  setup(props, { attrs, emit, slots }) {
    const route = vueRouter.useRoute();
    const site = useSiteData();
    const config2 = vue.toRef(props, "config");
    const hasHttpProtocol = vue.computed(() => shared.isLinkHttp(config2.value.link));
    const hasNonHttpProtocal = vue.computed(() => shared.isLinkMailto(config2.value.link) || shared.isLinkTel(config2.value.link));
    const linkTarget = vue.computed(() => hasNonHttpProtocal.value ? void 0 : config2.value.target || (hasHttpProtocol.value ? "_blank" : void 0));
    const isBlankTarget = vue.computed(() => linkTarget.value === "_blank");
    const renderRouterLink = vue.computed(() => !hasHttpProtocol.value && !hasNonHttpProtocal.value && !isBlankTarget.value);
    const anchorRel = vue.computed(() => hasNonHttpProtocal.value ? void 0 : config2.value.rel || (isBlankTarget.value ? "noopener noreferrer" : void 0));
    const linkAriaLabel = vue.computed(() => config2.value.ariaLabel || config2.value.text);
    const shouldBeActiveInSubpath = vue.computed(() => {
      if (props.exact)
        return false;
      const localeKeys = Object.keys(site.value.locales);
      return localeKeys.length ? localeKeys.every((key) => key !== config2.value.link) : config2.value.link !== "/";
    });
    const isActive = vue.computed(() => renderRouterLink.value ? config2.value.activeMatch ? new RegExp(config2.value.activeMatch).test(route.path) : !shouldBeActiveInSubpath.value ? route.path === config2.value.link : route.path.startsWith(config2.value.link) : false);
    return () => {
      var _a, _b, _c;
      const { text, icon, link } = config2.value;
      return renderRouterLink.value ? vue.h(vueRouter.RouterLink, {
        to: link,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        class: ["nav-link", { active: isActive.value }, attrs["class"]],
        onFocusout: () => emit("focusout")
      }, () => {
        var _a2, _b2, _c2;
        return ((_a2 = slots["default"]) == null ? void 0 : _a2.call(slots)) || [
          ((_b2 = slots["before"]) == null ? void 0 : _b2.call(slots)) || vue.h(vue.resolveComponent("FontIcon"), { icon }),
          text,
          (_c2 = slots["after"]) == null ? void 0 : _c2.call(slots)
        ];
      }) : vue.h("a", {
        href: link,
        rel: anchorRel.value,
        target: linkTarget.value,
        "aria-label": linkAriaLabel.value,
        ...attrs,
        class: ["nav-link", attrs["class"]],
        onFocusout: () => emit("focusout")
      }, ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || [
        ((_b = slots["before"]) == null ? void 0 : _b.call(slots)) || vue.h(vue.resolveComponent("FontIcon"), { icon }),
        text,
        props.externalLinkIcon ? vue.h(ExternalLinkIcon) : null,
        (_c = slots["after"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const isActiveSidebarItem = (route, item, exact = false) => {
  if ("activeMatch" in item)
    return new RegExp(item.activeMatch).test(route.path);
  if (S(route, item.link))
    return true;
  if (item.children && !exact)
    return item.children.some((child) => isActiveSidebarItem(route, child));
  return false;
};
const isMatchedSidebarItem = (route, item) => {
  if (item.type === "group")
    return item.children.some((child) => {
      if (child.type === "group")
        return isMatchedSidebarItem(route, child);
      return child.type === "page" && isActiveSidebarItem(route, child, true);
    }) || "prefix" in item && S(route, item.prefix);
  return false;
};
const renderItem = (config2, props) => config2.link ? vue.h(AutoLink, {
  ...props,
  config: config2
}) : vue.h("p", props, [
  vue.h(vue.resolveComponent("FontIcon"), { icon: config2.icon }),
  config2.text
]);
const renderChildren$1 = (children) => {
  const route = vueRouter.useRoute();
  if (!children)
    return null;
  return vue.h("ul", { class: "sidebar-sub-headers" }, children.map((child) => {
    const active = isActiveSidebarItem(route, child, true);
    return vue.h("li", { class: "sidebar-sub-header" }, [
      renderItem(child, {
        class: ["sidebar-link", "heading", { active }]
      }),
      renderChildren$1(child.children)
    ]);
  }));
};
const sidebarData = { "/zh/": [], "/guide/": ["page.md", "markdown.md", "disable.md", "encrypt.md"] };
const resolvePrefix = (prefix = "", path = "") => path.startsWith("/") ? path : `${shared.ensureEndingSlash(prefix)}${path}`;
const headerToSidebarItem = (header, headerDepth) => {
  const page2 = usePageData();
  return {
    type: "heading",
    text: header.title,
    link: `${page2.value.path}#${header.slug}`,
    children: headersToSidebarItemChildren(header.children, headerDepth)
  };
};
const headersToSidebarItemChildren = (headers, headerDepth) => headerDepth > 0 ? headers.map((header) => headerToSidebarItem(header, headerDepth - 1)) : [];
const resolveHeadingSidebarItems = (headerDepth) => {
  const page2 = usePageData();
  return headersToSidebarItemChildren(page2.value.headers, headerDepth);
};
const resolveArraySidebarItems = (sidebarConfig, headerDepth, prefix = "") => {
  const page2 = usePageData();
  const route = vueRouter.useRoute();
  const handleChildItem = (item, pathPrefix = prefix) => {
    var _a;
    const childItem = shared.isString(item) ? useAutoLink(resolvePrefix(pathPrefix, item)) : item.link ? {
      ...item,
      ...!shared.isLinkExternal(item.link) ? { link: useAutoLink(resolvePrefix(pathPrefix, item.link)).link } : {}
    } : item;
    if ("children" in childItem) {
      const prefix2 = resolvePrefix(pathPrefix, childItem.prefix);
      const children = childItem.children === "structure" ? sidebarData[prefix2] : childItem.children;
      return {
        type: "group",
        ...childItem,
        prefix: prefix2,
        children: children.map((item2) => handleChildItem(item2, prefix2))
      };
    }
    return {
      type: "page",
      ...childItem,
      children: childItem.link === route.path ? headersToSidebarItemChildren(((_a = page2.value.headers[0]) == null ? void 0 : _a.level) === 1 ? page2.value.headers[0].children : page2.value.headers, headerDepth) : []
    };
  };
  return sidebarConfig.map((item) => handleChildItem(item));
};
const resolveMultiSidebarItems = (sidebarConfig, headerDepth) => {
  const route = vueRouter.useRoute();
  const keys = Object.keys(sidebarConfig).sort((x2, y2) => y2.length - x2.length);
  for (const base of keys) {
    if (decodeURI(route.path).startsWith(base)) {
      const matchedConfig = sidebarConfig[base];
      return matchedConfig ? resolveArraySidebarItems(matchedConfig === "structure" ? sidebarData[base] : matchedConfig, headerDepth, base) : [];
    }
  }
  console.warn(`${route.path} do not have valid sidebar config`);
  return [];
};
const resolveSidebarItems = () => {
  var _a, _b, _c, _d;
  const routeLocale = useRouteLocale();
  const frontmatter = usePageFrontmatter();
  const themeLocale = useThemeLocaleData();
  const sidebarConfig = frontmatter.value.home ? false : (_b = (_a = frontmatter.value.sidebar) != null ? _a : themeLocale.value.sidebar) != null ? _b : "structure";
  const headerDepth = (_d = (_c = frontmatter.value.headerDepth) != null ? _c : themeLocale.value.headerDepth) != null ? _d : 2;
  return sidebarConfig === false ? [] : sidebarConfig === "heading" ? resolveHeadingSidebarItems(headerDepth) : sidebarConfig === "structure" ? resolveArraySidebarItems(sidebarData[routeLocale.value], headerDepth, routeLocale.value) : shared.isArray(sidebarConfig) ? resolveArraySidebarItems(sidebarConfig, headerDepth) : shared.isPlainObject(sidebarConfig) ? resolveMultiSidebarItems(sidebarConfig, headerDepth) : [];
};
const sidebarItemsSymbol = Symbol.for("sidebarItems");
const setupSidebarItems = () => {
  const sidebarItems = vue.computed(() => resolveSidebarItems());
  vue.provide(sidebarItemsSymbol, sidebarItems);
};
const useSidebarItems = () => {
  const sidebarItems = vue.inject(sidebarItemsSymbol);
  if (!sidebarItems) {
    throw new Error("useSidebarItems() is called without provider.");
  }
  return sidebarItems;
};
var common = "";
var CommonWrapper = vue.defineComponent({
  name: "CommonWrapper",
  props: {
    navbar: {
      type: Boolean,
      default: true
    },
    sidebar: {
      type: Boolean,
      default: true
    }
  },
  setup(props, { slots }) {
    const router = vueRouter.useRouter();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const isMobile = useMobile();
    const hideNavbar = vue.ref(false);
    const enableNavbar = vue.computed(() => {
      if (props.navbar === false)
        return false;
      if (frontmatter.value.navbar === false || themeLocale.value.navbar === false)
        return false;
      return Boolean(page2.value.title || themeLocale.value.logo || themeLocale.value.repo || themeLocale.value.navbar);
    });
    const sidebarItems = useSidebarItems();
    const enableSidebar = vue.computed(() => {
      if (props.sidebar === false)
        return false;
      return frontmatter.value.sidebar !== false && sidebarItems.value.length !== 0 && !frontmatter.value.home;
    });
    const isMobileSidebarOpen = vue.ref(false);
    const isDesktopSidebarCollapsed = vue.ref(false);
    const toggleMobileSidebar = (value) => {
      isMobileSidebarOpen.value = typeof value === "boolean" ? value : !isMobileSidebarOpen.value;
    };
    const toggleDesktopSidebar = (value) => {
      isDesktopSidebarCollapsed.value = typeof value === "boolean" ? value : !isDesktopSidebarCollapsed.value;
    };
    const touchStart = { x: 0, y: 0 };
    const onTouchStart = (e2) => {
      touchStart.x = e2.changedTouches[0].clientX;
      touchStart.y = e2.changedTouches[0].clientY;
    };
    const onTouchEnd = (e2) => {
      const dx = e2.changedTouches[0].clientX - touchStart.x;
      const dy = e2.changedTouches[0].clientY - touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) * 1.5 && Math.abs(dx) > 40) {
        if (dx > 0 && touchStart.x <= 80)
          toggleMobileSidebar(true);
        else
          toggleMobileSidebar(false);
      }
    };
    const enableToc = vue.computed(() => frontmatter.value.toc || themeLocale.value.toc !== false && frontmatter.value.toc !== false);
    const getScrollTop = () => window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let unregisterRouterHook;
    let lastDistance = 0;
    core.useEventListener("scroll", core.useThrottleFn(() => {
      const distance = getScrollTop();
      if (lastDistance < distance && distance > 58) {
        if (!isMobileSidebarOpen.value)
          hideNavbar.value = true;
      } else
        hideNavbar.value = false;
      lastDistance = distance;
    }, 300));
    vue.watch(isMobile, (value) => {
      if (!value)
        toggleMobileSidebar(false);
    });
    vue.onMounted(() => {
      unregisterRouterHook = router.afterEach(() => {
        toggleMobileSidebar(false);
      });
    });
    vue.onBeforeUnmount(() => {
      unregisterRouterHook();
    });
    return () => vue.h("div", {
      class: [
        "theme-container",
        {
          "no-navbar": !enableNavbar.value,
          "no-sidebar": !enableSidebar.value && !(slots["sidebar"] || slots["sidebarTop"] || slots["sidebarBottom"]),
          "has-toc": enableToc.value,
          "hide-navbar": hideNavbar.value,
          "sidebar-collapsed": !isMobile.value && isDesktopSidebarCollapsed.value,
          "sidebar-open": isMobile.value && isMobileSidebarOpen.value
        },
        frontmatter.value.containerClass || ""
      ],
      onTouchStart,
      onTouchEnd
    }, vue.h(c$5("GloablEncrypt") ? vue.resolveComponent("GloablEncrypt") : u$7, () => {
      var _a;
      return [
        enableNavbar.value ? vue.h(vue.resolveComponent("Navbar"), { onToggleSidebar: () => toggleMobileSidebar() }, {
          leftStart: () => {
            var _a2;
            return (_a2 = slots["navbarLeftStart"]) == null ? void 0 : _a2.call(slots);
          },
          leftEnd: () => {
            var _a2;
            return (_a2 = slots["navbarLeftEnd"]) == null ? void 0 : _a2.call(slots);
          },
          centerStart: () => {
            var _a2;
            return (_a2 = slots["navbarCenterStart"]) == null ? void 0 : _a2.call(slots);
          },
          centerEnd: () => {
            var _a2;
            return (_a2 = slots["navbarCenterEnd"]) == null ? void 0 : _a2.call(slots);
          },
          rightStart: () => {
            var _a2;
            return (_a2 = slots["navbarRightStart"]) == null ? void 0 : _a2.call(slots);
          },
          rightEnd: () => {
            var _a2;
            return (_a2 = slots["navbarRightEnd"]) == null ? void 0 : _a2.call(slots);
          },
          screenTop: () => {
            var _a2;
            return (_a2 = slots["navScreenTop"]) == null ? void 0 : _a2.call(slots);
          },
          screenBottom: () => {
            var _a2;
            return (_a2 = slots["navScreenBottom"]) == null ? void 0 : _a2.call(slots);
          }
        }) : null,
        vue.h(vue.Transition, { name: "fade" }, () => isMobileSidebarOpen.value ? vue.h("div", {
          class: "sidebar-mask",
          onClick: () => toggleMobileSidebar(false)
        }) : null),
        vue.h(vue.Transition, { name: "fade" }, () => isMobile.value ? null : vue.h("div", {
          class: "toggle-sidebar-wrapper",
          onClick: () => toggleDesktopSidebar()
        }, vue.h("span", {
          class: [
            "arrow",
            isDesktopSidebarCollapsed.value ? "right" : "left"
          ]
        }))),
        vue.h(vue.resolveComponent("Sidebar"), {}, {
          ...slots["sidebar"] ? { default: () => {
            var _a2;
            return (_a2 = slots["sidebar"]) == null ? void 0 : _a2.call(slots);
          } } : {},
          top: () => {
            var _a2;
            return (_a2 = slots["sidebarTop"]) == null ? void 0 : _a2.call(slots);
          },
          bottom: () => {
            var _a2;
            return (_a2 = slots["sidebarBottom"]) == null ? void 0 : _a2.call(slots);
          }
        }),
        (_a = slots["default"]) == null ? void 0 : _a.call(slots),
        vue.h(PageFooter)
      ];
    }));
  }
});
var DropTransition = vue.defineComponent({
  name: "DropTransition",
  components: {
    Transition: vue.Transition,
    TransitionGroup: vue.TransitionGroup
  },
  props: {
    type: { type: String, default: "single" },
    delay: { type: Number, default: 0 },
    duration: { type: Number, default: 0.25 },
    appear: Boolean
  },
  setup(props, { slots }) {
    const setStyle = (item) => {
      item.style.transition = `transform ${props.duration}s ease-in-out ${props.delay}s, opacity ${props.duration}s ease-in-out ${props.delay}s`;
      item.style.transform = "translateY(-20px)";
      item.style.opacity = "0";
    };
    const unsetStyle = (item) => {
      item.style.transform = "translateY(0)";
      item.style.opacity = "1";
    };
    return () => vue.h(props.type === "single" ? vue.Transition : vue.TransitionGroup, {
      name: "drop",
      appear: props.appear,
      onAppear: setStyle,
      onAfterAppear: unsetStyle,
      onEnter: setStyle,
      onAfterEnter: unsetStyle,
      onBeforeLeave: setStyle
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});
var HomeFeatures = vue.defineComponent({
  name: "HomeFeatures",
  setup() {
    const frontmatter = usePageFrontmatter();
    const features = vue.computed(() => {
      if (shared.isArray(frontmatter.value.features))
        return frontmatter.value.features;
      return [];
    });
    const getIcon = (icon = "") => {
      return shared.isLinkHttp(icon) ? vue.h("img", { class: "icon", src: icon }) : icon.startsWith("/") ? vue.h("img", { class: "icon", src: withBase(icon) }) : icon ? vue.h(vue.resolveComponent("FontIcon"), { icon }) : null;
    };
    return () => {
      var _a;
      return features.value.length ? vue.h("div", { class: "features" }, (_a = frontmatter.value.features) == null ? void 0 : _a.map((feature) => {
        const children = [
          getIcon(feature.icon),
          vue.h("h2", { innerHTML: feature.title }),
          vue.h("p", { innerHTML: feature.details })
        ];
        return feature.link ? shared.isLinkExternal(feature.link) ? vue.h("a", {
          class: "feature link",
          href: feature.link,
          role: "navigation",
          target: "_blank"
        }, children) : vue.h(vueRouter.RouterLink, {
          class: "feature link",
          to: feature.link,
          role: "navigation"
        }, () => children) : vue.h("div", { class: "feature" }, children);
      })) : null;
    };
  }
});
const MarkdownContent = ({ custom }) => vue.h(Content$1, { class: ["theme-hope-content", { custom }] });
MarkdownContent.displayName = "MarkdownContent";
MarkdownContent.props = {
  custom: Boolean
};
var MarkdownContent$1 = MarkdownContent;
var HomeHero = vue.defineComponent({
  name: "HomeHero",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const siteLocale = useSiteLocaleData();
    const heroText = vue.computed(() => {
      if (frontmatter.value.heroText === false)
        return false;
      return frontmatter.value.heroText || siteLocale.value.title || "Hello";
    });
    const tagline = vue.computed(() => {
      if (frontmatter.value.tagline === false)
        return false;
      return frontmatter.value.tagline || siteLocale.value.description || "Welcome to your VuePress site";
    });
    const heroImage = vue.computed(() => {
      if (!frontmatter.value.heroImage)
        return null;
      return withBase(frontmatter.value.heroImage);
    });
    const heroImageDark = vue.computed(() => {
      if (!frontmatter.value.heroImageDark)
        return null;
      return withBase(frontmatter.value.heroImageDark);
    });
    const heroAlt = vue.computed(() => frontmatter.value.heroAlt || heroText.value || "hero");
    const actions = vue.computed(() => shared.isArray(frontmatter.value.actions) ? frontmatter.value.actions : []);
    return () => {
      var _a, _b;
      return vue.h("header", { class: "hero" }, [
        ((_a = slots["heroImage"]) == null ? void 0 : _a.call(slots)) || vue.h(DropTransition, { appear: true, type: "group" }, () => [
          heroImage.value ? vue.h("img", {
            key: "light",
            class: { light: heroImageDark.value },
            src: heroImage.value,
            alt: heroAlt
          }) : null,
          heroImageDark.value ? vue.h("img", {
            key: "dark",
            class: "dark",
            src: heroImageDark.value,
            alt: heroAlt
          }) : null
        ]),
        ((_b = slots["heroInfo"]) == null ? void 0 : _b.call(slots)) || vue.h("div", { class: "hero-info" }, [
          heroText.value ? vue.h(DropTransition, { appear: true, delay: 0.04 }, () => vue.h("h1", { id: "main-title" }, heroText.value)) : null,
          tagline.value ? vue.h(DropTransition, { appear: true, delay: 0.08 }, () => vue.h("p", { class: "description" }, tagline.value)) : null,
          actions.value.length ? vue.h(DropTransition, { appear: true, delay: 0.12 }, () => vue.h("p", { class: "actions" }, actions.value.map((action) => vue.h(AutoLink, {
            class: ["action-button", action.type || "default"],
            config: action,
            externalLinkIcon: false
          })))) : null
        ])
      ]);
    };
  }
});
var homePage = "";
var HomePage = vue.defineComponent({
  name: "HopePage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    return () => {
      var _a, _b, _c;
      return vue.h("main", {
        class: "home project",
        id: "main-content",
        "aria-labelledby": frontmatter.value.heroText === null ? void 0 : "main-title"
      }, [
        (_a = slots["top"]) == null ? void 0 : _a.call(slots),
        vue.h(HomeHero),
        vue.h(DropTransition, { appear: true, delay: 0.16 }, () => vue.h(HomeFeatures)),
        (_b = slots["center"]) == null ? void 0 : _b.call(slots),
        vue.h(DropTransition, { appear: true, delay: 0.24 }, () => vue.h(MarkdownContent$1, { custom: true })),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
const getAncestorLinks = (route, routeLocale) => {
  const routePaths = route.path.replace(routeLocale, "/").split("/");
  const links = [];
  let link = shared.removeEndingSlash(routeLocale);
  routePaths.forEach((element, index2) => {
    if (index2 !== routePaths.length - 1) {
      link += `${element}/`;
      links.push(link);
    } else if (element !== "") {
      link += element;
      links.push(link);
    }
  });
  return links;
};
const resolveRepoType = (repo) => !shared.isLinkHttp(repo) || /github\.com/.test(repo) ? "GitHub" : /bitbucket\.org/.test(repo) ? "Bitbucket" : /gitlab\.com/.test(repo) ? "GitLab" : /gitee\.com/.test(repo) ? "Gitee" : null;
var breadcrumb = "";
var BreadCrumb = vue.defineComponent({
  name: "BreadCrumb",
  setup() {
    const router = vueRouter.useRouter();
    const route = vueRouter.useRoute();
    const routeLocale = useRouteLocale();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const config2 = vue.ref([]);
    const enable = vue.computed(() => {
      return (frontmatter.value.breadcrumb || frontmatter.value.breadcrumb !== false && themeLocale.value.breadcrumb !== false) && config2.value.length > 1;
    });
    const iconEnable = vue.computed(() => frontmatter.value.breadcrumbIcon || frontmatter.value.breadcrumbIcon !== false && themeLocale.value.breadcrumbIcon !== false);
    const getBreadCrumbConfig = () => {
      const routes = router.getRoutes();
      const breadcrumbConfig = getAncestorLinks(route, routeLocale.value).map((link) => {
        const route2 = routes.find((route3) => route3.path === link);
        if (route2) {
          const { meta, path } = x(router, route2.path);
          if (meta.shortTitle || meta.title)
            return {
              title: meta.shortTitle || meta.title,
              icon: meta.icon,
              path
            };
        }
        return null;
      }).filter((item) => item !== null);
      if (breadcrumbConfig.length > 1)
        config2.value = breadcrumbConfig;
    };
    vue.onMounted(() => {
      void getBreadCrumbConfig();
      vue.watch(() => route.path, getBreadCrumbConfig);
    });
    return () => vue.h("nav", { class: ["breadcrumb", { disable: !enable.value }] }, enable.value ? vue.h("ol", {
      vocab: "https://schema.org/",
      typeof: "BreadcrumbList"
    }, config2.value.map((item, index2) => vue.h("li", {
      class: { "is-active": config2.value.length - 1 === index2 },
      property: "itemListElement",
      typeof: "ListItem"
    }, [
      vue.h(vueRouter.RouterLink, {
        to: item.path,
        property: "item",
        typeof: "WebPage"
      }, () => [
        iconEnable.value ? vue.h(vue.resolveComponent("FontIcon"), { icon: item.icon }) : null,
        vue.h("span", { property: "name" }, item.title || "Unknown")
      ]),
      vue.h("meta", { property: "position", content: index2 + 1 })
    ]))) : []);
  }
});
var pageNav = "";
const resolveFromFrontmatterConfig = (conf) => {
  if (conf === false)
    return false;
  if (shared.isString(conf))
    return useAutoLink(conf, true);
  if (shared.isPlainObject(conf))
    return conf;
  return null;
};
const resolveFromSidebarItems = (sidebarItems, currentPath, offset) => {
  const index2 = sidebarItems.findIndex((item) => item.link === currentPath);
  if (index2 !== -1) {
    const targetItem = sidebarItems[index2 + offset];
    if (!(targetItem == null ? void 0 : targetItem.link))
      return null;
    return targetItem;
  }
  for (const item of sidebarItems)
    if (item.children) {
      const childResult = resolveFromSidebarItems(item.children, currentPath, offset);
      if (childResult)
        return childResult;
    }
  return null;
};
var PageNav = vue.defineComponent({
  name: "PageNav",
  setup() {
    const themeLocale = useThemeLocaleData();
    const frontmatter = usePageFrontmatter();
    const sidebarItems = useSidebarItems();
    const route = vueRouter.useRoute();
    const navigate = useNavigate();
    const prevNavLink = vue.computed(() => {
      const prevConfig = resolveFromFrontmatterConfig(frontmatter.value.prev);
      return prevConfig === false ? null : prevConfig || (themeLocale.value.prevLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, -1));
    });
    const nextNavLink = vue.computed(() => {
      const nextConfig = resolveFromFrontmatterConfig(frontmatter.value.next);
      return nextConfig === false ? null : nextConfig || (themeLocale.value.nextLink === false ? null : resolveFromSidebarItems(sidebarItems.value, route.path, 1));
    });
    core.useEventListener("keydown", (event) => {
      if (event.altKey) {
        if (event.key === "ArrowRight") {
          if (nextNavLink.value) {
            navigate(nextNavLink.value.link);
            event.preventDefault();
          }
        } else if (event.key === "ArrowLeft") {
          if (prevNavLink.value) {
            navigate(prevNavLink.value.link);
            event.preventDefault();
          }
        }
      }
    });
    return () => prevNavLink.value || nextNavLink.value ? vue.h("nav", { class: "page-nav" }, [
      prevNavLink.value ? vue.h(AutoLink, { class: "prev", config: prevNavLink.value }, () => {
        var _a, _b;
        return [
          vue.h("div", { class: "hint" }, [
            vue.h("span", { class: "arrow left" }),
            themeLocale.value.metaLocales.prev
          ]),
          vue.h("div", { class: "link" }, [
            vue.h(vue.resolveComponent("FontIcon"), {
              icon: (_a = prevNavLink.value) == null ? void 0 : _a.icon
            }),
            (_b = prevNavLink.value) == null ? void 0 : _b.text
          ])
        ];
      }) : null,
      nextNavLink.value ? vue.h(AutoLink, { class: "next", config: nextNavLink.value }, () => {
        var _a, _b;
        return [
          vue.h("div", { class: "hint" }, [
            themeLocale.value.metaLocales.next,
            vue.h("span", { class: "arrow right" })
          ]),
          vue.h("div", { class: "link" }, [
            (_a = nextNavLink.value) == null ? void 0 : _a.text,
            vue.h(vue.resolveComponent("FontIcon"), {
              icon: (_b = nextNavLink.value) == null ? void 0 : _b.icon
            })
          ])
        ];
      }) : null
    ]) : null;
  }
});
const AuthorIcon = () => vue.h(a$5, { name: "author" }, () => vue.h("path", {
  d: "M649.6 633.6c86.4-48 147.2-144 147.2-249.6 0-160-128-288-288-288s-288 128-288 288c0 108.8 57.6 201.6 147.2 249.6-121.6 48-214.4 153.6-240 288-3.2 9.6 0 19.2 6.4 25.6 3.2 9.6 12.8 12.8 22.4 12.8h704c9.6 0 19.2-3.2 25.6-12.8 6.4-6.4 9.6-16 6.4-25.6-25.6-134.4-121.6-240-243.2-288z"
}));
AuthorIcon.displayName = "AuthorIcon";
const CalendarIcon = () => vue.h(a$5, { name: "calendar" }, () => vue.h("path", {
  d: "M716.4 110.137c0-18.753-14.72-33.473-33.472-33.473-18.753 0-33.473 14.72-33.473 33.473v33.473h66.993v-33.473zm-334.87 0c0-18.753-14.72-33.473-33.473-33.473s-33.52 14.72-33.52 33.473v33.473h66.993v-33.473zm468.81 33.52H716.4v100.465c0 18.753-14.72 33.473-33.472 33.473a33.145 33.145 0 01-33.473-33.473V143.657H381.53v100.465c0 18.753-14.72 33.473-33.473 33.473a33.145 33.145 0 01-33.473-33.473V143.657H180.6A134.314 134.314 0 0046.66 277.595v535.756A134.314 134.314 0 00180.6 947.289h669.74a134.36 134.36 0 00133.94-133.938V277.595a134.314 134.314 0 00-133.94-133.938zm33.473 267.877H147.126a33.145 33.145 0 01-33.473-33.473c0-18.752 14.72-33.473 33.473-33.473h736.687c18.752 0 33.472 14.72 33.472 33.473a33.145 33.145 0 01-33.472 33.473z"
}));
CalendarIcon.displayName = "CalendarIcon";
const CategoryIcon$1 = () => vue.h(a$5, { name: "category" }, () => vue.h("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon$1.displayName = "CategoryIcon";
const EyeIcon = () => vue.h(a$5, { name: "eye" }, () => vue.h("path", {
  d: "M992 512.096c0-5.76-.992-10.592-1.28-11.136-.192-2.88-1.152-8.064-2.08-10.816-.256-.672-.544-1.376-.832-2.08-.48-1.568-1.024-3.104-1.6-4.32C897.664 290.112 707.104 160 512 160c-195.072 0-385.632 130.016-473.76 322.592-1.056 2.112-1.792 4.096-2.272 5.856a55.512 55.512 0 00-.64 1.6c-1.76 5.088-1.792 8.64-1.632 7.744-.832 3.744-1.568 11.168-1.568 11.168-.224 2.272-.224 4.032.032 6.304 0 0 .736 6.464 1.088 7.808.128 1.824.576 4.512 1.12 6.976h-.032c.448 2.08 1.12 4.096 1.984 6.08.48 1.536.992 2.976 1.472 4.032C126.432 733.856 316.992 864 512 864c195.136 0 385.696-130.048 473.216-321.696 1.376-2.496 2.24-4.832 2.848-6.912.256-.608.48-1.184.672-1.728 1.536-4.48 1.856-8.32 1.728-8.32l-.032.032c.608-3.104 1.568-7.744 1.568-13.28zM512 672c-88.224 0-160-71.776-160-160s71.776-160 160-160 160 71.776 160 160-71.776 160-160 160z"
}));
EyeIcon.displayName = "EyeIcon";
const FireIcon = () => vue.h(a$5, { name: "fire" }, () => vue.h("path", {
  d: "M726.4 201.6c-12.8-9.6-28.8-6.4-38.4 0-9.6 9.6-16 25.6-9.6 38.4 6.4 12.8 9.6 28.8 12.8 44.8C604.8 83.2 460.8 38.4 454.4 35.2c-9.6-3.2-22.4 0-28.8 6.4-9.6 6.4-12.8 19.2-9.6 28.8 12.8 86.4-25.6 188.8-115.2 310.4-6.4-25.6-16-51.2-32-80-9.6-9.6-22.4-16-35.2-12.8-16 3.2-25.6 12.8-25.6 28.8-3.2 48-25.6 92.8-51.2 140.8C134.4 499.2 112 544 102.4 592c-32 150.4 99.2 329.6 233.6 380.8 9.6 3.2 19.2 6.4 32 9.6-25.6-19.2-41.6-51.2-48-96C294.4 691.2 505.6 640 515.2 460.8c153.6 105.6 224 336 137.6 505.6 3.2 0 6.4-3.2 9.6-3.2 0 0 3.2 0 3.2-3.2 163.2-89.6 252.8-208 259.2-345.6 16-211.2-163.2-390.4-198.4-412.8z"
}));
FireIcon.displayName = "FireIcon";
const TagIcon$1 = () => vue.h(a$5, { name: "tag" }, () => vue.h("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon$1.displayName = "TagIcon";
const TimerIcon = () => vue.h(a$5, { name: "timer" }, () => vue.h("path", {
  d: "M799.387 122.15c4.402-2.978 7.38-7.897 7.38-13.463v-1.165c0-8.933-7.38-16.312-16.312-16.312H256.33c-8.933 0-16.311 7.38-16.311 16.312v1.165c0 5.825 2.977 10.874 7.637 13.592 4.143 194.44 97.22 354.963 220.201 392.763-122.204 37.542-214.893 196.511-220.2 389.397-4.661 5.049-7.638 11.651-7.638 19.03v5.825h566.49v-5.825c0-7.379-2.849-13.981-7.509-18.9-5.049-193.016-97.867-351.985-220.2-389.527 123.24-37.67 216.446-198.453 220.588-392.892zM531.16 450.445v352.632c117.674 1.553 211.787 40.778 211.787 88.676H304.097c0-48.286 95.149-87.382 213.728-88.676V450.445c-93.077-3.107-167.901-81.297-167.901-177.093 0-8.803 6.99-15.793 15.793-15.793 8.803 0 15.794 6.99 15.794 15.793 0 80.261 63.69 145.635 142.01 145.635s142.011-65.374 142.011-145.635c0-8.803 6.99-15.793 15.794-15.793s15.793 6.99 15.793 15.793c0 95.019-73.789 172.82-165.96 177.093z"
}));
TimerIcon.displayName = "TimerIcon";
const WordIcon = () => vue.h(a$5, { name: "word" }, () => [
  vue.h("path", {
    d: "M518.217 432.64V73.143A73.143 73.143 0 01603.43 1.097a512 512 0 01419.474 419.474 73.143 73.143 0 01-72.046 85.212H591.36a73.143 73.143 0 01-73.143-73.143z"
  }),
  vue.h("path", {
    d: "M493.714 566.857h340.297a73.143 73.143 0 0173.143 85.577A457.143 457.143 0 11371.566 117.76a73.143 73.143 0 0185.577 73.143v339.383a36.571 36.571 0 0036.571 36.571z"
  })
]);
WordIcon.displayName = "WordIcon";
const useMetaLocale = () => {
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => themeLocale.value.metaLocales);
};
const readingTimeLocales = { "/zh/": { "word": "\u7EA6 $word \u5B57", "less1Minute": "\u5C0F\u4E8E 1 \u5206\u949F", "time": "\u5927\u7EA6 $time \u5206\u949F" }, "/": { "word": "About $word words", "less1Minute": "Less than 1 minute", "time": "About $time min" } };
const editLinkPatterns = {
  GitHub: ":repo/edit/:branch/:path",
  GitLab: ":repo/-/edit/:branch/:path",
  Gitee: ":repo/edit/:branch/:path",
  Bitbucket: ":repo/src/:branch/:path?mode=edit&spa=0&at=:branch&fileviewer=file-view-default"
};
const resolveEditLink = ({ docsRepo, docsBranch, docsDir, filePathRelative, editLinkPattern }) => {
  if (!filePathRelative)
    return null;
  const repoType = resolveRepoType(docsRepo);
  let pattern;
  if (editLinkPattern)
    pattern = editLinkPattern;
  else if (repoType !== null)
    pattern = editLinkPatterns[repoType];
  if (!pattern)
    return null;
  return pattern.replace(/:repo/, shared.isLinkHttp(docsRepo) ? docsRepo : `https://github.com/${docsRepo}`).replace(/:branch/, docsBranch).replace(/:path/, shared.removeLeadingSlash(`${shared.removeEndingSlash(docsDir)}/${filePathRelative}`));
};
const useEditLink = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    var _a, _b;
    const { repo, docsRepo = repo, docsBranch = "main", docsDir = "", editLink, editLinkPattern = "" } = themeLocale.value;
    const showEditLink = (_b = (_a = frontmatter.value.editLink) != null ? _a : editLink) != null ? _b : true;
    if (!showEditLink)
      return null;
    if (!docsRepo)
      return null;
    const link = resolveEditLink({
      docsRepo,
      docsBranch,
      docsDir,
      editLinkPattern,
      filePathRelative: page2.value.filePathRelative
    });
    if (!link)
      return null;
    return {
      text: themeLocale.value.metaLocales.editLink,
      link
    };
  });
};
const useUpdateTime = () => {
  const siteLocale = useSiteLocaleData();
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    var _a, _b, _c, _d;
    const showLastUpdated = (_b = (_a = frontmatter.value.lastUpdated) != null ? _a : themeLocale.value.lastUpdated) != null ? _b : true;
    if (!showLastUpdated)
      return null;
    if (!((_c = page2.value.git) == null ? void 0 : _c.updatedTime))
      return null;
    const updatedDate = new Date((_d = page2.value.git) == null ? void 0 : _d.updatedTime);
    return updatedDate.toLocaleString(siteLocale.value.lang);
  });
};
const useContributors = () => {
  const themeLocale = useThemeLocaleData();
  const page2 = usePageData();
  const frontmatter = usePageFrontmatter();
  return vue.computed(() => {
    var _a, _b, _c, _d;
    const showContributors = (_b = (_a = frontmatter.value.contributors) != null ? _a : themeLocale.value.contributors) != null ? _b : true;
    if (!showContributors)
      return null;
    return (_d = (_c = page2.value.git) == null ? void 0 : _c.contributors) != null ? _d : null;
  });
};
var AuthorInfo = vue.defineComponent({
  name: "AuthorInfo",
  props: {
    author: {
      type: Array,
      required: true
    },
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.author.length ? vue.h("span", {
      class: "author-info",
      "aria-label": `${metaLocale.value.author}${props.pure ? "" : "\u{1F58A}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      vue.h(AuthorIcon),
      vue.h("span", props.author.map((item) => item.url ? vue.h("a", {
        class: "author-item",
        href: item.url,
        target: "_blank",
        rel: "noopener noreferrer"
      }, item.name) : vue.h("span", { class: "author-item" }, item.name))),
      vue.h("span", {
        property: "author",
        content: props.author.map((item) => item.name).join(", ")
      })
    ]) : null;
  }
});
var category = "";
var CategoryInfo = vue.defineComponent({
  name: "CategoryInfo",
  props: {
    category: {
      type: Array,
      required: true
    },
    pure: Boolean
  },
  setup(props) {
    const router = vueRouter.useRouter();
    const route = vueRouter.useRoute();
    const metaLocale = useMetaLocale();
    const navigate = (path = "") => {
      if (path && route.path !== path)
        void router.push(path);
    };
    return () => props.category.length ? vue.h("span", {
      class: "category-info",
      "aria-label": `${metaLocale.value.category}${props.pure ? "" : "\u{1F308}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      vue.h(CategoryIcon$1),
      vue.h("ul", { class: "categories-wrapper" }, [
        ...props.category.map(({ name, path }) => vue.h("li", {
          class: [
            "category",
            {
              [`category${D(name, 9)}`]: !props.pure,
              clickable: path
            }
          ],
          role: path ? "navigation" : "",
          onClick: () => navigate(path)
        }, name)),
        vue.h("meta", {
          property: "articleSection",
          content: props.category.map(({ name }) => name).join(",")
        })
      ])
    ]) : null;
  }
});
var DateInfo = vue.defineComponent({
  name: "DateInfo",
  props: {
    date: {
      type: Object,
      default: null
    },
    localizedDate: {
      type: String,
      default: ""
    },
    pure: Boolean
  },
  setup(props) {
    const lang = usePageLang();
    const metaLocale = useMetaLocale();
    return () => {
      var _a, _b, _c;
      return props.date ? vue.h("span", {
        class: "date-info",
        "aria-label": `${metaLocale.value.date}${props.pure ? "" : "\u{1F4C5}"}`,
        ...props.pure ? {} : { "data-balloon-pos": "down" }
      }, [
        vue.h(CalendarIcon),
        vue.h("span", props.localizedDate || ((_a = props.date.value) == null ? void 0 : _a.toLocaleDateString(lang.value))),
        vue.h("meta", {
          property: "datePublished",
          content: ((_c = (_b = props.date) == null ? void 0 : _b.value) == null ? void 0 : _c.toISOString()) || ""
        })
      ]) : null;
    };
  }
});
var PageViewInfo = vue.defineComponent({
  name: "PageViewInfo",
  props: {
    pageview: {
      type: [Boolean, String],
      default: false
    },
    pure: Boolean
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const metaLocale = useMetaLocale();
    const pageViews = vue.ref(0);
    const getCount = () => {
      const countElement = document.querySelector(".waline-pageview-count");
      if (countElement) {
        const count = countElement.textContent;
        if (count && !isNaN(Number(count)))
          pageViews.value = Number(count);
        else
          setTimeout(getCount, 500);
      }
    };
    vue.onMounted(() => {
      setTimeout(getCount, 1500);
    });
    vue.watch(() => route.path, (newValue, oldValue) => {
      if (newValue !== oldValue)
        setTimeout(getCount, 500);
    });
    return () => props.pageview ? vue.h("span", {
      class: "visitor-info",
      "aria-label": `${metaLocale.value.views}${props.pure ? "" : "\u{1F522}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      vue.h(pageViews.value < 1e3 ? EyeIcon : FireIcon),
      vue.h("span", {
        class: "waline-pageview-count",
        "data-path": typeof props.pageview === "string" ? props.pageview : withBase(route.path)
      }, "...")
    ]) : null;
  }
});
var ReadingTimeInfo = vue.defineComponent({
  name: "ReadingTimeInfo",
  props: {
    readingTime: {
      type: Object,
      default: () => null
    },
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = f$2(readingTimeLocales);
    const readingTime = vue.computed(() => {
      if (!props.readingTime)
        return null;
      const { minutes } = props.readingTime;
      return minutes < 1 ? { text: readingTimeLocale.value.less1Minute, time: "PT1M" } : {
        text: readingTimeLocale.value.time.replace("$time", Math.round(minutes).toString()),
        time: `PT${Math.round(minutes)}M`
      };
    });
    return () => readingTime.value ? vue.h("span", {
      class: "reading-time-info",
      "aria-label": `${metaLocale.value.readingTime}${props.pure ? "" : "\u231B"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      vue.h(TimerIcon),
      vue.h("span", readingTime.value.text),
      vue.h("meta", {
        property: "timeRequired",
        content: readingTime.value.time
      })
    ]) : null;
  }
});
var tag = "";
var TagInfo = vue.defineComponent({
  name: "TagInfo",
  props: {
    tag: {
      type: Array,
      default: () => []
    },
    pure: Boolean
  },
  setup(props) {
    const router = vueRouter.useRouter();
    const route = vueRouter.useRoute();
    const metaLocale = useMetaLocale();
    const navigate = (path = "") => {
      if (path && route.path !== path)
        void router.push(path);
    };
    return () => props.tag.length ? vue.h("span", {
      "aria-label": `${metaLocale.value.tag}${props.pure ? "" : "\u{1F3F7}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      vue.h(TagIcon$1),
      vue.h("ul", { class: "tags-wrapper" }, props.tag.map(({ name, path }) => vue.h("li", {
        class: [
          "tag",
          {
            [`tag${D(name, 9)}`]: !props.pure,
            clickable: path
          }
        ],
        role: path ? "navigation" : "",
        onClick: () => navigate(path)
      }, name))),
      vue.h("meta", {
        property: "keywords",
        content: props.tag.map(({ name }) => name).join(",")
      })
    ]) : null;
  }
});
var OriginalInfo = vue.defineComponent({
  name: "OriginalMark",
  props: {
    isOriginal: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    return () => props.isOriginal ? vue.h("span", { class: "origin" }, metaLocale.value.origin) : null;
  }
});
var WordInfo = vue.defineComponent({
  name: "ReadTimeInfo",
  props: {
    readingTime: {
      type: Object,
      default: () => null
    },
    pure: Boolean
  },
  setup(props) {
    const metaLocale = useMetaLocale();
    const readingTimeLocale = f$2(readingTimeLocales);
    const words = vue.computed(() => {
      var _a;
      return (_a = props.readingTime) == null ? void 0 : _a.words.toString();
    });
    const wordText = vue.computed(() => readingTimeLocale.value.word.replace("$word", words.value || ""));
    return () => words.value ? vue.h("span", {
      class: "words-info",
      "aria-label": `${metaLocale.value.words}${props.pure ? "" : "\u{1F520}"}`,
      ...props.pure ? {} : { "data-balloon-pos": "down" }
    }, [
      vue.h(WordIcon),
      vue.h("span", wordText.value),
      vue.h("meta", {
        property: "wordCount",
        content: words.value
      })
    ]) : null;
  }
});
var pageInfo = "";
var PageInfo = vue.defineComponent({
  name: "PageInfo",
  components: {
    AuthorInfo,
    CategoryInfo,
    DateInfo,
    OriginalInfo,
    PageViewInfo,
    ReadingTimeInfo,
    TagInfo,
    WordInfo
  },
  props: {
    items: {
      type: [Array, Boolean],
      default: () => [
        "Author",
        "Original",
        "Date",
        "Category",
        "Tag",
        "ReadingTime"
      ]
    },
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const pure = usePure();
    return () => props.items ? vue.h("div", { class: "page-info" }, props.items.map((item) => vue.h(vue.resolveComponent(`${item}Info`), {
      ...props.config,
      pure: pure.value
    }))) : null;
  }
});
var pageTitle = "";
var PageTitle = vue.defineComponent({
  name: "PageTitle",
  setup() {
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const { config: config2, items } = usePageInfo();
    return () => vue.h("div", { class: "page-title" }, [
      vue.h("h1", [
        themeLocale.value.titleIcon !== false ? vue.h(vue.resolveComponent("FontIcon"), { icon: frontmatter.value.icon }) : null,
        page2.value.title
      ]),
      vue.h(PageInfo, {
        config: vue.unref(config2),
        ...items.value === null ? {} : { items: items.value }
      }),
      vue.h("hr")
    ]);
  }
});
const EditIcon = () => vue.h(a$5, { name: "edit" }, () => [
  vue.h("path", {
    d: "M430.818 653.65a60.46 60.46 0 0 1-50.96-93.281l71.69-114.012 7.773-10.365L816.038 80.138A60.46 60.46 0 0 1 859.225 62a60.46 60.46 0 0 1 43.186 18.138l43.186 43.186a60.46 60.46 0 0 1 0 86.373L588.879 565.55l-8.637 8.637-117.466 68.234a60.46 60.46 0 0 1-31.958 11.229z"
  }),
  vue.h("path", {
    d: "M728.802 962H252.891A190.883 190.883 0 0 1 62.008 771.98V296.934a190.883 190.883 0 0 1 190.883-192.61h267.754a60.46 60.46 0 0 1 0 120.92H252.891a69.962 69.962 0 0 0-69.098 69.099V771.98a69.962 69.962 0 0 0 69.098 69.098h475.911A69.962 69.962 0 0 0 797.9 771.98V503.363a60.46 60.46 0 1 1 120.922 0V771.98A190.883 190.883 0 0 1 728.802 962z"
  })
]);
EditIcon.displayName = "EditIcon";
const Page404Icon = () => vue.h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  class: "page-404-icon",
  viewBox: "0 0 178 130",
  innerHTML: '<defs><linearGradient id="b" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e9e9e9"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="c" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dcdcdc"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="d" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#f1f1f1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="e" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#dedede"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="f" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#e8e8e8"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="g" x1=".213" y1="1.265" x2=".846" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#f5f5f5"/></linearGradient><linearGradient id="h" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#c5c5c5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><linearGradient id="i" x1=".5" x2=".5" y2="1" gradientUnits="objectBoundingBox"><stop offset="0" stop-color="#acacac"/><stop offset="1" stop-color="#f2f2f2" stop-opacity=".388"/></linearGradient><clipPath id="a"><path transform="translate(744 1111)" fill="none" d="M0 0h178v130H0z"/></clipPath></defs><g transform="translate(-744 -1111)" clip-path="url(#a)"><path d="M0 10.795 36.6 0v93.779L0 104.574z" transform="translate(772.466 1122.142)" fill="url(#b)"/><path d="M-8.492 10.642-26.361-.469v93.78l17.868 11.111z" transform="translate(780.958 1122.293)" fill="url(#c)"/><path d="M-8.5 5.55 28.106-5.3 10.228-16.437l-36.6 10.845z" transform="translate(780.963 1127.438)" fill="url(#d)"/><path d="M0 10.539 35.741 0v91.56L0 102.1z" transform="translate(870.158 1123.617)" fill="url(#d)"/><path d="M-8.913 10.38-26.361-.469v91.562l17.448 10.848z" transform="translate(879.071 1123.775)" fill="url(#e)"/><path d="m-8.918 5.032 35.741-10.59L9.366-16.437-26.375-5.848z" transform="translate(879.076 1129.175)" fill="url(#d)"/><path d="M0 9.137 30.839 0v79.381L0 88.519z" transform="translate(799.678 1151.579)" fill="url(#f)"/><path d="m-11.306 8.936-15.054-9.4v79.377l15.054 9.4z" transform="translate(810.985 1151.78)" fill="url(#c)"/><path d="M-11.313 2.087 19.526-7.05 4.464-16.437-26.375-7.3z" transform="translate(810.991 1158.63)" fill="url(#g)"/><path d="M178 53H0a51.361 51.361 0 0 1 10.453-20.952 74.532 74.532 0 0 1 19.742-16.811A103.3 103.3 0 0 1 57.089 4.058a127.515 127.515 0 0 1 63.823 0 103.3 103.3 0 0 1 26.894 11.179 74.532 74.532 0 0 1 19.741 16.811A51.363 51.363 0 0 1 178 53z" transform="translate(744 1187.549)" fill="url(#h)"/><path d="m814.529 1199.586-1.272 1.212h2.3l1.2-1.212zM816.725 1194.909l-1.272 1.212h2.3l1.263-1.212zM863.284 1199.585l-1.272 1.212h2.3l1.2-1.212zM865.519 1194.9l-1.272 1.212h2.3l1.263-1.212z" fill="#cbcbcb"/><path d="m799.527 1191.21 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#c6c6c6"/><path d="m798.306 1192.431 10.182-21.97h4.381l-9.931 21.719h14.876v3.941h-19.508zm13.081-9.493h4.152v17.859h-4.152zm20.728 18.151q-4.256 0-6.457-2.274a8.74 8.74 0 0 1-2.2-6.343v-13.791a8.708 8.708 0 0 1 2.21-6.353q2.212-2.264 6.447-2.264 4.256 0 6.457 2.253a8.726 8.726 0 0 1 2.2 6.363v13.792a8.708 8.708 0 0 1-2.21 6.349q-2.211 2.268-6.447 2.268zm0-4.048a4.29 4.29 0 0 0 3.328-1.178 4.862 4.862 0 0 0 1.074-3.39v-13.792a4.893 4.893 0 0 0-1.064-3.39 4.285 4.285 0 0 0-3.338-1.179 4.285 4.285 0 0 0-3.338 1.179 4.893 4.893 0 0 0-1.064 3.39v13.791a4.862 4.862 0 0 0 1.075 3.391 4.29 4.29 0 0 0 3.327 1.178zm14.928-4.61 10.181-21.97h4.381l-9.931 21.719h14.876v3.941h-19.507zm13.081-9.493h4.152v17.859h-4.152z" fill="#b2b2b2"/><path d="m-27.694-19.435 10.182 14.517h4.381l-9.931-14.352h14.876v-2.606h-19.508zm13.081 6.273h4.152v-11.8h-4.152zM6.115-25.156q-4.256 0-6.457 1.5a4.8 4.8 0 0 0-2.2 4.191v9.113a4.784 4.784 0 0 0 2.212 4.2 11.511 11.511 0 0 0 6.447 1.5q4.256 0 6.457-1.489a4.786 4.786 0 0 0 2.2-4.2v-9.113a4.784 4.784 0 0 0-2.212-4.2 11.511 11.511 0 0 0-6.447-1.502zm0 2.675a5.705 5.705 0 0 1 3.328.779 2.6 2.6 0 0 1 1.074 2.24v9.113a2.607 2.607 0 0 1-1.064 2.24 5.7 5.7 0 0 1-3.338.779 5.7 5.7 0 0 1-3.338-.779 2.607 2.607 0 0 1-1.064-2.24v-9.113A2.6 2.6 0 0 1 2.788-21.7a5.705 5.705 0 0 1 3.327-.782zm14.927 3.047L31.224-4.918h4.381l-9.931-14.351H40.55v-2.606H21.043zm13.081 6.273h4.152v-11.8h-4.151z" transform="translate(826 1226.245)" opacity=".32" fill="url(#i)"/><g fill="#e6e6e6"><path d="m858.428 1169.23-1.2 1.259h4.388l1.178-1.259zM802.944 1192.187l1.288-1.375h7.143v1.375zm8.415-9.25 1.273-1.234h4.15l-1.235 1.234zm-2.855-12.469 1.198-1.259h4.367l-1.178 1.259zM861.362 1181.678l-1.27 1.3h4.188l1.236-1.3zM865.519 1190.9l-1.27 1.3h2.3l1.162-1.3zM852.838 1190.791l-1.207 1.508h8.447v-1.508z"/></g></g>'
});
var pageMeta = "";
var PageMeta = vue.defineComponent({
  name: "PageMeta",
  setup() {
    const themeLocale = useThemeLocaleData();
    const editLink = useEditLink();
    const updateTime = useUpdateTime();
    const contributors = useContributors();
    return () => {
      const { metaLocales } = themeLocale.value;
      return vue.h("footer", { class: "page-meta" }, [
        editLink.value ? vue.h("div", { class: "meta-item edit-link" }, vue.h(AutoLink, { class: "label", config: editLink.value }, { before: () => vue.h(EditIcon) })) : null,
        updateTime.value ? vue.h("div", { class: "meta-item update-time" }, [
          vue.h("span", { class: "label" }, `${metaLocales.lastUpdated}: `),
          vue.h("span", { class: "info" }, updateTime.value)
        ]) : null,
        contributors.value && contributors.value.length ? vue.h("div", { class: "meta-item contributors" }, [
          vue.h("span", { class: "label" }, `${metaLocales.contributors}: `),
          contributors.value.map(({ email, name }, index2) => [
            vue.h("span", { class: "contributor", title: `email: ${email}` }, name),
            index2 !== contributors.value.length - 1 ? "," : ""
          ])
        ]) : null
      ]);
    };
  }
});
var toc = "";
const renderHeader = ({ title, level, slug }) => vue.h(vueRouter.RouterLink, {
  to: `#${slug}`,
  class: ["toc-link", `level${level}`]
}, () => title);
const renderChildren = (headers, headerDepth) => {
  const route = vueRouter.useRoute();
  return headers.length && headerDepth > 0 ? vue.h("ul", { class: "toc-list" }, headers.map((header) => [
    vue.h("li", {
      class: [
        "toc-item",
        { active: S(route, `#${header.slug}`) }
      ]
    }, renderHeader(header)),
    renderChildren(header.children, headerDepth - 1)
  ])) : null;
};
var TOC = vue.defineComponent({
  name: "TOC",
  props: {
    items: {
      type: Array,
      default: () => []
    },
    headerDepth: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const page2 = usePageData();
    const metaLocale = useMetaLocale();
    const toc2 = vue.ref(null);
    const scrollTo = (top) => {
      var _a;
      (_a = toc2.value) == null ? void 0 : _a.scrollTo({ top, behavior: "smooth" });
    };
    vue.onMounted(() => {
      vue.watch(() => route.hash, (hash) => {
        if (toc2.value) {
          const activeTocItem = document.querySelector(`#toc a.toc-link[href$="${hash}"]`);
          if (!activeTocItem)
            return;
          const { top: tocTop, height: tocHeight } = toc2.value.getBoundingClientRect();
          const { top: activeTocItemTop, height: activeTocItemHeight } = activeTocItem.getBoundingClientRect();
          if (activeTocItemTop < tocTop)
            scrollTo(toc2.value.scrollTop + activeTocItemTop - tocTop);
          else if (activeTocItemTop + activeTocItemHeight > tocTop + tocHeight)
            scrollTo(toc2.value.scrollTop + activeTocItemTop + activeTocItemHeight - tocTop - tocHeight);
        }
      });
    });
    return () => {
      const tocHeaders = props.items.length ? renderChildren(props.items, props.headerDepth) : page2.value.headers ? renderChildren(page2.value.headers, props.headerDepth) : null;
      return tocHeaders ? vue.h("div", { class: "toc-place-holder" }, [
        vue.h("aside", { id: "toc" }, [
          vue.h("div", { class: "toc-header" }, metaLocale.value.toc),
          vue.h("div", { class: "toc-wrapper", ref: toc2 }, [tocHeaders])
        ])
      ]) : null;
    };
  }
});
const darkModeSymbol = Symbol.for("darkMode");
const useDarkMode = () => {
  const darkmode = vue.inject(darkModeSymbol);
  if (!darkmode) {
    throw new Error("useDarkMode() is called without provider.");
  }
  return darkmode;
};
const injectDarkMode = (app) => {
  const themeData2 = useThemeData();
  const isDarkPreferred = core.usePreferredDark();
  const darkmodeStorage = core.useStorage("vuepress-theme-hope-scheme", "auto");
  const isDarkMode = vue.computed(() => {
    const { darkmode } = themeData2.value;
    return darkmode === "disable" ? false : darkmode === "enable" ? true : darkmode === "auto" ? isDarkPreferred.value : darkmode === "toggle" ? darkmodeStorage.value === "dark" : darkmodeStorage.value === "dark" || darkmodeStorage.value === "auto" && isDarkPreferred.value;
  });
  app.provide(darkModeSymbol, { isDarkMode, status: darkmodeStorage });
  Object.defineProperties(app.config.globalProperties, {
    $isDarkMode: { get: () => isDarkMode.value }
  });
};
const setupDarkMode = () => {
  const { isDarkMode } = useDarkMode();
  const updateDOM = (isDark = isDarkMode.value) => {
    const html = window == null ? void 0 : window.document.querySelector("html");
    html == null ? void 0 : html.setAttribute("data-theme", isDark ? "dark" : "light");
  };
  vue.onMounted(() => {
    vue.watch(isDarkMode, updateDOM, { immediate: true });
  });
};
var page$1 = "";
var NormalPage = vue.defineComponent({
  name: "NormalPage",
  setup(_props, { slots }) {
    const frontmatter = usePageFrontmatter();
    const { isDarkMode } = useDarkMode();
    const themeLocale = useThemeLocaleData();
    const tocEnable = vue.computed(() => frontmatter.value.toc || frontmatter.value.toc !== false && themeLocale.value.toc !== false);
    return () => vue.h("main", { class: "page", id: "main-content" }, vue.h(c$5("LocalEncrypt") ? vue.resolveComponent("LocalEncrypt") : u$7, () => {
      var _a, _b, _c, _d, _e, _f;
      return [
        (_a = slots["top"]) == null ? void 0 : _a.call(slots),
        vue.h(BreadCrumb),
        vue.h(PageTitle),
        tocEnable.value ? vue.h(TOC, {
          headerDepth: (_c = (_b = frontmatter.value.headerDepth) != null ? _b : themeLocale.value.headerDepth) != null ? _c : 2
        }) : null,
        (_d = slots["contentBefore"]) == null ? void 0 : _d.call(slots),
        vue.h(MarkdownContent$1),
        (_e = slots["contentAfter"]) == null ? void 0 : _e.call(slots),
        vue.h(PageMeta),
        vue.h(PageNav),
        c$5("CommentService") ? vue.h(vue.resolveComponent("CommentService"), {
          darkmode: isDarkMode.value
        }) : null,
        (_f = slots["bottom"]) == null ? void 0 : _f.call(slots)
      ];
    }));
  }
});
const I18nIcon = () => vue.h(a$5, { name: "i18n" }, () => [
  vue.h("path", {
    d: "M379.392 460.8 494.08 575.488l-42.496 102.4L307.2 532.48 138.24 701.44l-71.68-72.704L234.496 460.8l-45.056-45.056c-27.136-27.136-51.2-66.56-66.56-108.544h112.64c7.68 14.336 16.896 27.136 26.112 35.84l45.568 46.08 45.056-45.056C382.976 312.32 409.6 247.808 409.6 204.8H0V102.4h256V0h102.4v102.4h256v102.4H512c0 70.144-37.888 161.28-87.04 210.944L378.88 460.8zM576 870.4 512 1024H409.6l256-614.4H768l256 614.4H921.6l-64-153.6H576zM618.496 768h196.608L716.8 532.48 618.496 768z"
  })
]);
I18nIcon.displayName = "I18nIcon";
const GitHubIcon = () => vue.h(a$5, { name: "github" }, () => vue.h("path", {
  d: "M511.957 21.333C241.024 21.333 21.333 240.981 21.333 512c0 216.832 140.544 400.725 335.574 465.664 24.49 4.395 32.256-10.07 32.256-23.083 0-11.69.256-44.245 0-85.205-136.448 29.61-164.736-64.64-164.736-64.64-22.315-56.704-54.4-71.765-54.4-71.765-44.587-30.464 3.285-29.824 3.285-29.824 49.195 3.413 75.179 50.517 75.179 50.517 43.776 75.008 114.816 53.333 142.762 40.79 4.523-31.66 17.152-53.377 31.19-65.537-108.971-12.458-223.488-54.485-223.488-242.602 0-53.547 19.114-97.323 50.517-131.67-5.035-12.33-21.93-62.293 4.779-129.834 0 0 41.258-13.184 134.912 50.346a469.803 469.803 0 0 1 122.88-16.554c41.642.213 83.626 5.632 122.88 16.554 93.653-63.488 134.784-50.346 134.784-50.346 26.752 67.541 9.898 117.504 4.864 129.834 31.402 34.347 50.474 78.123 50.474 131.67 0 188.586-114.73 230.016-224.042 242.09 17.578 15.232 33.578 44.672 33.578 90.454v135.85c0 13.142 7.936 27.606 32.854 22.87C862.25 912.597 1002.667 728.747 1002.667 512c0-271.019-219.648-490.667-490.71-490.667z"
}));
GitHubIcon.displayName = "GitHubIcon";
const GitlabIcon = () => vue.h(a$5, { name: "gitlab" }, () => vue.h("path", {
  d: "M229.333 78.688C223.52 62 199.895 62 193.895 78.688L87.958 406.438h247.5c-.188 0-106.125-327.75-106.125-327.75zM33.77 571.438c-4.875 15 .563 31.687 13.313 41.25l464.812 345L87.77 406.438zm301.5-165 176.813 551.25 176.812-551.25zm655.125 165-54-165-424.312 551.25 464.812-345c12.938-9.563 18.188-26.25 13.5-41.25zM830.27 78.688c-5.812-16.688-29.437-16.688-35.437 0l-106.125 327.75h247.5z"
}));
GitlabIcon.displayName = "GitlabIcon";
const GiteeIcon = () => vue.h(a$5, { name: "gitee" }, () => vue.h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm242.97-533.34H482.39a23.7 23.7 0 0 0-23.7 23.7l-.03 59.28c0 13.08 10.59 23.7 23.7 23.7h165.96a23.7 23.7 0 0 1 23.7 23.7v11.85a71.1 71.1 0 0 1-71.1 71.1H375.71a23.7 23.7 0 0 1-23.7-23.7V423.11a71.1 71.1 0 0 1 71.1-71.1h331.8a23.7 23.7 0 0 0 23.7-23.7l.06-59.25a23.73 23.73 0 0 0-23.7-23.73H423.11a177.78 177.78 0 0 0-177.78 177.75v331.83c0 13.08 10.62 23.7 23.7 23.7h349.62a159.99 159.99 0 0 0 159.99-159.99V482.33a23.7 23.7 0 0 0-23.7-23.7z"
}));
GiteeIcon.displayName = "GiteeIcon";
const BitbucketIcon = () => vue.h(a$5, { name: "bitbucket" }, () => vue.h("path", {
  d: "M575.256 490.862c6.29 47.981-52.005 85.723-92.563 61.147-45.714-20.004-45.714-92.562-1.133-113.152 38.29-23.442 93.696 7.424 93.696 52.005zm63.451-11.996c-10.276-81.152-102.29-134.839-177.152-101.156-47.433 21.138-79.433 71.424-77.129 124.562 2.853 69.705 69.157 126.866 138.862 120.576S647.3 548.571 638.708 478.83zm136.558-309.723c-25.161-33.134-67.986-38.839-105.728-45.13-106.862-17.151-216.576-17.7-323.438 1.134-35.438 5.706-75.447 11.996-97.719 43.996 36.572 34.304 88.576 39.424 135.424 45.129 84.553 10.862 171.447 11.447 256 .585 47.433-5.705 99.987-10.276 135.424-45.714zm32.585 591.433c-16.018 55.99-6.839 131.438-66.304 163.986-102.29 56.576-226.304 62.867-338.87 42.862-59.43-10.862-129.135-29.696-161.72-85.723-14.3-54.858-23.442-110.848-32.585-166.84l3.438-9.142 10.276-5.157c170.277 112.567 408.576 112.567 579.438 0 26.844 8.01 6.84 40.558 6.29 60.014zm103.424-549.157c-19.42 125.148-41.728 249.71-63.415 374.272-6.29 36.572-41.728 57.162-71.424 72.558-106.862 53.724-231.424 62.866-348.562 50.286-79.433-8.558-160.585-29.696-225.134-79.433-30.28-23.443-30.28-63.415-35.986-97.134-20.005-117.138-42.862-234.277-57.161-352.585 6.839-51.42 64.585-73.728 107.447-89.71 57.16-21.138 118.272-30.866 178.87-36.571 129.134-12.58 261.157-8.01 386.304 28.562 44.581 13.13 92.563 31.415 122.844 69.705 13.714 17.7 9.143 40.01 6.29 60.014z"
}));
BitbucketIcon.displayName = "BitbucketIcon";
const SourceIcon = () => vue.h(a$5, { name: "source" }, () => vue.h("path", {
  d: "M601.92 475.2c0 76.428-8.91 83.754-28.512 99.594-14.652 11.88-43.956 14.058-78.012 16.434-18.81 1.386-40.392 2.97-62.172 6.534-18.612 2.97-36.432 9.306-53.064 17.424V299.772c37.818-21.978 63.36-62.766 63.36-109.692 0-69.894-56.826-126.72-126.72-126.72S190.08 120.186 190.08 190.08c0 46.926 25.542 87.714 63.36 109.692v414.216c-37.818 21.978-63.36 62.766-63.36 109.692 0 69.894 56.826 126.72 126.72 126.72s126.72-56.826 126.72-126.72c0-31.086-11.286-59.598-29.7-81.576 13.266-9.504 27.522-17.226 39.996-19.206 16.038-2.574 32.868-3.762 50.688-5.148 48.312-3.366 103.158-7.326 148.896-44.55 61.182-49.698 74.25-103.158 75.24-187.902V475.2h-126.72zM316.8 126.72c34.848 0 63.36 28.512 63.36 63.36s-28.512 63.36-63.36 63.36-63.36-28.512-63.36-63.36 28.512-63.36 63.36-63.36zm0 760.32c-34.848 0-63.36-28.512-63.36-63.36s28.512-63.36 63.36-63.36 63.36 28.512 63.36 63.36-28.512 63.36-63.36 63.36zM823.68 158.4h-95.04V63.36h-126.72v95.04h-95.04v126.72h95.04v95.04h126.72v-95.04h95.04z"
}));
SourceIcon.displayName = "SourceIcon";
var dropdownLink = "";
var DropdownLink = vue.defineComponent({
  name: "NavbarDropdownLink",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props, { slots }) {
    const route = vueRouter.useRoute();
    const config2 = vue.toRef(props, "config");
    const dropdownAriaLabel = vue.computed(() => config2.value.ariaLabel || config2.value.text);
    const open = vue.ref(false);
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const handleDropdown = (event) => {
      const isTriggerByTab = event.detail === 0;
      if (isTriggerByTab)
        open.value = !open.value;
    };
    return () => {
      var _a;
      return vue.h("div", { class: ["dropdown-wrapper", { open: open.value }] }, [
        vue.h("button", {
          class: "dropdown-title",
          type: "button",
          "aria-label": dropdownAriaLabel.value,
          onClick: handleDropdown
        }, [
          ((_a = slots["title"]) == null ? void 0 : _a.call(slots)) || vue.h("span", { class: "title" }, [
            vue.h(vue.resolveComponent("FontIcon"), { icon: config2.value.icon }),
            props.config.text
          ]),
          vue.h("span", { class: "arrow" }),
          vue.h("ul", { class: "nav-dropdown" }, config2.value.children.map((child, index2) => {
            const isLastChild = index2 === config2.value.children.length - 1;
            return vue.h("li", { class: "dropdown-item" }, "children" in child ? [
              vue.h("h4", { class: "dropdown-subtitle" }, child.link ? vue.h(AutoLink, {
                config: child,
                onFocusout: () => {
                  if (child.children.length === 0 && isLastChild)
                    open.value = false;
                }
              }) : vue.h("span", child.text)),
              vue.h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild, grandIndex) => vue.h("li", { class: "dropdown-subitem" }, vue.h(AutoLink, {
                config: grandchild,
                onFocusout: () => {
                  if (grandIndex === child.children.length - 1 && isLastChild)
                    open.value = false;
                }
              }))))
            ] : vue.h(AutoLink, {
              config: child,
              onFocusout: () => {
                if (isLastChild)
                  open.value = false;
              }
            }));
          }))
        ])
      ]);
    };
  }
});
const resolveNavbarItem = (item, prefix = "") => {
  if (shared.isString(item))
    return useAutoLink(`${prefix}${item}`);
  if ("children" in item)
    return {
      ...item,
      ...item.link && !shared.isLinkExternal(item.link) ? useAutoLink(`${prefix}${item.link}`) : {},
      children: item.children.map((child) => resolveNavbarItem(child, `${prefix}${item.prefix || ""}`))
    };
  return {
    ...item,
    link: shared.isLinkExternal(item.link) ? item.link : useAutoLink(`${prefix}${item.link}`).link
  };
};
const useNavbarConfig = () => vue.computed(() => (useThemeLocaleData().value.navbar || []).map((item) => resolveNavbarItem(item)));
const useNavbarLanguageDropdown = () => {
  const router = vueRouter.useRouter();
  const routeLocale = useRouteLocale();
  const siteLocale = useSiteLocaleData();
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => {
    const localePaths = Object.keys(siteLocale.value.locales);
    if (localePaths.length < 2)
      return null;
    const { path, hash } = router.currentRoute.value;
    const { navbarLocales } = themeLocale.value;
    const languageDropdown = {
      text: "",
      ariaLabel: navbarLocales == null ? void 0 : navbarLocales.selectLangAriaLabel,
      children: localePaths.map((targetLocalePath) => {
        var _a, _b, _c, _d, _e, _f, _g;
        const targetSiteLocale = (_b = (_a = siteLocale.value.locales) == null ? void 0 : _a[targetLocalePath]) != null ? _b : {};
        const targetThemeLocale = (_d = (_c = themeData2.value.locales) == null ? void 0 : _c[targetLocalePath]) != null ? _d : {};
        const targetLang = targetSiteLocale.lang || "";
        const text = (_f = (_e = targetThemeLocale.navbarLocales) == null ? void 0 : _e.langName) != null ? _f : targetLang;
        let link;
        if (targetLang === siteLocale.value.lang) {
          link = path;
        } else {
          const targetLocalePage = path.replace(routeLocale.value, targetLocalePath);
          link = router.getRoutes().some((item) => item.path === targetLocalePage) ? `${targetLocalePage}${hash}` : (_g = targetThemeLocale.home) != null ? _g : targetLocalePath;
        }
        return {
          text,
          link
        };
      })
    };
    return languageDropdown;
  });
};
const useNavbarRepo = () => {
  const themeLocale = useThemeLocaleData();
  const repo = vue.computed(() => themeLocale.value.repo || null);
  const repoType = vue.computed(() => repo.value ? resolveRepoType(repo.value) : null);
  const repoLink2 = vue.computed(() => repo.value && !shared.isLinkHttp(repo.value) ? `https://github.com/${repo.value}` : repo.value);
  const repoLabel = vue.computed(() => {
    var _a;
    return !repoLink2.value ? null : (_a = themeLocale.value.repoLabel) != null ? _a : repoType.value === null ? "Source" : repoType.value;
  });
  return vue.computed(() => {
    if (!repoLink2.value || !repoLabel.value || themeLocale.value.repoDisplay === false)
      return null;
    return {
      type: repoType.value || "Source",
      label: repoLabel.value,
      link: repoLink2.value
    };
  });
};
var LanguageDropdown = vue.defineComponent({
  name: "LanguageDropdown",
  setup() {
    const dropdown = useNavbarLanguageDropdown();
    return () => dropdown.value ? vue.h("div", { class: "nav-item" }, vue.h(DropdownLink, { class: "i18n-dropdown", config: dropdown.value }, {
      title: () => {
        var _a;
        return vue.h(I18nIcon, {
          "aria-label": (_a = dropdown.value) == null ? void 0 : _a.ariaLabel,
          style: {
            width: "1rem",
            height: "1rem",
            verticalAlign: "middle"
          }
        });
      }
    })) : null;
  }
});
var navbarBrand = "";
var NavbarBrand = vue.defineComponent({
  name: "NavbarBrand",
  setup() {
    const routeLocale = useRouteLocale();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const siteBrandLink = vue.computed(() => themeLocale.value.home || routeLocale.value);
    const siteBrandTitle = vue.computed(() => siteLocale.value.title);
    const siteBrandLogo = vue.computed(() => themeLocale.value.logo ? withBase(themeLocale.value.logo) : null);
    const siteBrandLogoDark = vue.computed(() => themeLocale.value.logoDark ? withBase(themeLocale.value.logoDark) : null);
    return () => vue.h(vueRouter.RouterLink, { to: siteBrandLink.value, class: "brand" }, () => [
      siteBrandLogo.value ? vue.h("img", {
        class: ["logo", { light: Boolean(siteBrandLogoDark.value) }],
        src: siteBrandLogo.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandLogoDark.value ? vue.h("img", {
        class: ["logo dark"],
        src: siteBrandLogoDark.value,
        alt: siteBrandTitle.value
      }) : null,
      siteBrandTitle.value ? vue.h("span", { class: ["site-name", { "hide-in-pad": siteBrandLogo.value }] }, siteBrandTitle.value) : null
    ]);
  }
});
var navbarLinks = "";
var NavbarLinks = vue.defineComponent({
  name: "NavbarLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? vue.h("nav", { class: "nav-links" }, [
      ...navbarConfig.value.map((config2) => vue.h("div", { class: "nav-item hide-in-mobile" }, "children" in config2 ? vue.h(DropdownLink, { config: config2 }) : vue.h(AutoLink, { config: config2 })))
    ]) : null;
  }
});
var navScreenDropdown = "";
var NavScreenDropdown = vue.defineComponent({
  name: "NavScreenDropdown",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const config2 = vue.toRef(props, "config");
    const dropdownAriaLabel = vue.computed(() => config2.value.ariaLabel || config2.value.text);
    const open = vue.ref(false);
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    const isLastItemOfArray = (item, arr) => arr[arr.length - 1] === item;
    return () => [
      vue.h("button", {
        class: ["nav-screen-dropdown-title", { active: open.value }],
        type: "button",
        "aria-label": dropdownAriaLabel.value,
        onClick: () => {
          open.value = !open.value;
        }
      }, [
        vue.h("span", { class: "title" }, [
          vue.h(vue.resolveComponent("FontIcon"), { icon: config2.value.icon }),
          props.config.text
        ]),
        vue.h("span", { class: ["arrow", open.value ? "down" : "right"] })
      ]),
      vue.h("ul", {
        class: ["nav-screen-dropdown", { hide: !open.value }]
      }, config2.value.children.map((child) => vue.h("li", { class: "dropdown-item" }, "children" in child ? [
        vue.h("h4", { class: "dropdown-subtitle" }, child.link ? vue.h(AutoLink, {
          config: child,
          onFocusout: () => {
            if (isLastItemOfArray(child, config2.value.children) && child.children.length === 0)
              open.value = false;
          }
        }) : vue.h("span", child.text)),
        vue.h("ul", { class: "dropdown-subitem-wrapper" }, child.children.map((grandchild) => vue.h("li", { class: "dropdown-subitem" }, vue.h(AutoLink, {
          config: grandchild,
          onFocusout: () => {
            if (isLastItemOfArray(grandchild, child.children) && isLastItemOfArray(child, config2.value.children))
              open.value = false;
          }
        }))))
      ] : vue.h(AutoLink, {
        config: child,
        onFocusout: () => {
          if (isLastItemOfArray(child, config2.value.children))
            open.value = false;
        }
      }))))
    ];
  }
});
var navScreenLinks = "";
var NavScreenLinks = vue.defineComponent({
  name: "NavScreenLinks",
  setup() {
    const navbarConfig = useNavbarConfig();
    return () => navbarConfig.value.length ? vue.h("nav", { class: "nav-screen-links" }, navbarConfig.value.map((config2) => vue.h("div", { class: "navbar-links-item" }, "children" in config2 ? vue.h(NavScreenDropdown, { config: config2 }) : vue.h(AutoLink, { config: config2 })))) : null;
  }
});
const DarkIcon = () => vue.h(a$5, { name: "dark" }, () => vue.h("path", {
  d: "M524.8 938.667h-4.267a439.893 439.893 0 0 1-313.173-134.4 446.293 446.293 0 0 1-11.093-597.334A432.213 432.213 0 0 1 366.933 90.027a42.667 42.667 0 0 1 45.227 9.386 42.667 42.667 0 0 1 10.24 42.667 358.4 358.4 0 0 0 82.773 375.893 361.387 361.387 0 0 0 376.747 82.774 42.667 42.667 0 0 1 54.187 55.04 433.493 433.493 0 0 1-99.84 154.88 438.613 438.613 0 0 1-311.467 128z"
}));
DarkIcon.displayName = "DarkIcon";
const LightIcon = () => vue.h(a$5, { name: "light" }, () => vue.h("path", {
  d: "M952 552h-80a40 40 0 0 1 0-80h80a40 40 0 0 1 0 80zM801.88 280.08a41 41 0 0 1-57.96-57.96l57.96-58a41.04 41.04 0 0 1 58 58l-58 57.96zM512 752a240 240 0 1 1 0-480 240 240 0 0 1 0 480zm0-560a40 40 0 0 1-40-40V72a40 40 0 0 1 80 0v80a40 40 0 0 1-40 40zm-289.88 88.08-58-57.96a41.04 41.04 0 0 1 58-58l57.96 58a41 41 0 0 1-57.96 57.96zM192 512a40 40 0 0 1-40 40H72a40 40 0 0 1 0-80h80a40 40 0 0 1 40 40zm30.12 231.92a41 41 0 0 1 57.96 57.96l-57.96 58a41.04 41.04 0 0 1-58-58l58-57.96zM512 832a40 40 0 0 1 40 40v80a40 40 0 0 1-80 0v-80a40 40 0 0 1 40-40zm289.88-88.08 58 57.96a41.04 41.04 0 0 1-58 58l-57.96-58a41 41 0 0 1 57.96-57.96z"
}));
LightIcon.displayName = "LightIcon";
const AutoIcon = () => vue.h(a$5, { name: "auto" }, () => vue.h("path", {
  d: "M512 992C246.92 992 32 777.08 32 512S246.92 32 512 32s480 214.92 480 480-214.92 480-480 480zm0-840c-198.78 0-360 161.22-360 360 0 198.84 161.22 360 360 360s360-161.16 360-360c0-198.78-161.22-360-360-360zm0 660V212c165.72 0 300 134.34 300 300 0 165.72-134.28 300-300 300z"
}));
AutoIcon.displayName = "AutoIcon";
const EnterFullScreenIcon = () => vue.h(a$5, { name: "enter-fullscreen" }, () => vue.h("path", {
  d: "M762.773 90.24h-497.28c-96.106 0-174.4 78.293-174.4 174.4v497.28c0 96.107 78.294 174.4 174.4 174.4h497.28c96.107 0 175.04-78.293 174.4-174.4V264.64c0-96.213-78.186-174.4-174.4-174.4zm-387.2 761.173H215.04c-21.867 0-40.427-17.92-41.067-41.066V649.92c0-22.507 17.92-40.427 40.427-40.427 11.307 0 21.227 4.694 28.48 11.947 7.253 7.253 11.947 17.92 11.947 28.48v62.293l145.28-145.28c15.893-15.893 41.813-15.893 57.706 0 15.894 15.894 15.894 41.814 0 57.707l-145.28 145.28h62.294c22.506 0 40.426 17.92 40.426 40.427s-17.173 41.066-39.68 41.066zM650.24 165.76h160.427c21.866 0 40.426 17.92 41.066 41.067v160.426c0 22.507-17.92 40.427-40.426 40.427-11.307 0-21.227-4.693-28.48-11.947-7.254-7.253-11.947-17.92-11.947-28.48v-62.186L625.6 450.347c-15.893 15.893-41.813 15.893-57.707 0-15.893-15.894-15.893-41.814 0-57.707l145.28-145.28H650.88c-22.507 0-40.427-17.92-40.427-40.427s17.174-41.173 39.787-41.173z"
}));
EnterFullScreenIcon.displayName = "EnterFullScreenIcon";
const CancelFullScreenIcon = () => vue.h(a$5, { name: "cancel-fullscreen" }, () => vue.h("path", {
  d: "M778.468 78.62H247.922c-102.514 0-186.027 83.513-186.027 186.027V795.08c0 102.514 83.513 186.027 186.027 186.027h530.432c102.514 0 186.71-83.513 186.026-186.027V264.647C964.494 162.02 880.981 78.62 778.468 78.62zM250.88 574.35h171.122c23.324 0 43.122 19.115 43.804 43.805v171.121c0 24.008-19.114 43.122-43.122 43.122-12.06 0-22.641-5.006-30.378-12.743s-12.743-19.115-12.743-30.379V722.83L224.597 877.91c-16.953 16.952-44.6 16.952-61.553 0-16.953-16.954-16.953-44.602 0-61.554L318.009 661.39h-66.446c-24.007 0-43.122-19.114-43.122-43.122 0-24.12 18.432-43.918 42.439-43.918zm521.899-98.873H601.657c-23.325 0-43.122-19.114-43.805-43.804V260.55c0-24.007 19.115-43.122 43.122-43.122 12.06 0 22.642 5.007 30.379 12.743s12.743 19.115 12.743 30.38v66.445l154.965-154.965c16.953-16.953 44.601-16.953 61.554 0 16.953 16.953 16.953 44.6 0 61.554L705.536 388.55h66.446c24.007 0 43.122 19.115 43.122 43.122.114 24.007-18.318 43.804-42.325 43.804z"
}));
CancelFullScreenIcon.displayName = "CancelFullScreenIcon";
const OutlookIcon = () => vue.h(a$5, { name: "outlook" }, () => [
  vue.h("path", {
    d: "M224 800c0 9.6 3.2 44.8 6.4 54.4 6.4 48-48 76.8-48 76.8s80 41.6 147.2 0 134.4-134.4 38.4-195.2c-22.4-12.8-41.6-19.2-57.6-19.2C259.2 716.8 227.2 761.6 224 800zM560 675.2l-32 51.2c-51.2 51.2-83.2 32-83.2 32 25.6 67.2 0 112-12.8 128 25.6 6.4 51.2 9.6 80 9.6 54.4 0 102.4-9.6 150.4-32l0 0c3.2 0 3.2-3.2 3.2-3.2 22.4-16 12.8-35.2 6.4-44.8-9.6-12.8-12.8-25.6-12.8-41.6 0-54.4 60.8-99.2 137.6-99.2 6.4 0 12.8 0 22.4 0 12.8 0 38.4 9.6 48-25.6 0-3.2 0-3.2 3.2-6.4 0-3.2 3.2-6.4 3.2-6.4 6.4-16 6.4-16 6.4-19.2 9.6-35.2 16-73.6 16-115.2 0-105.6-41.6-198.4-108.8-268.8C704 396.8 560 675.2 560 675.2zM224 419.2c0-28.8 22.4-51.2 51.2-51.2 28.8 0 51.2 22.4 51.2 51.2 0 28.8-22.4 51.2-51.2 51.2C246.4 470.4 224 448 224 419.2zM320 284.8c0-22.4 19.2-41.6 41.6-41.6 22.4 0 41.6 19.2 41.6 41.6 0 22.4-19.2 41.6-41.6 41.6C339.2 326.4 320 307.2 320 284.8zM457.6 208c0-12.8 12.8-25.6 25.6-25.6 12.8 0 25.6 12.8 25.6 25.6 0 12.8-12.8 25.6-25.6 25.6C470.4 233.6 457.6 220.8 457.6 208zM128 505.6C128 592 153.6 672 201.6 736c28.8-60.8 112-60.8 124.8-60.8-16-51.2 16-99.2 16-99.2l316.8-422.4c-48-19.2-99.2-32-150.4-32C297.6 118.4 128 291.2 128 505.6zM764.8 86.4c-22.4 19.2-390.4 518.4-390.4 518.4-22.4 28.8-12.8 76.8 22.4 99.2l9.6 6.4c35.2 22.4 80 12.8 99.2-25.6 0 0 6.4-12.8 9.6-19.2 54.4-105.6 275.2-524.8 288-553.6 6.4-19.2-3.2-32-19.2-32C777.6 76.8 771.2 80 764.8 86.4z"
  })
]);
OutlookIcon.displayName = "OutlookIcon";
var appearanceSwitch = "";
var AppearanceSwitch = vue.defineComponent({
  name: "AppearanceSwitch",
  setup() {
    const themeData2 = useThemeData();
    const { status } = useDarkMode();
    const darkmode = vue.computed(() => themeData2.value.darkmode);
    const toggleDarkMode = () => {
      if (darkmode.value === "switch") {
        status.value = { light: "dark", dark: "auto", auto: "light" }[status.value];
      } else
        status.value = status.value === "light" ? "dark" : "light";
    };
    return () => vue.h("button", {
      id: "appearance-switch",
      onClick: () => toggleDarkMode()
    }, [
      vue.h(AutoIcon, {
        style: {
          display: status.value === "auto" ? "block" : "none"
        }
      }),
      vue.h(DarkIcon, {
        style: {
          display: status.value === "dark" ? "block" : "none"
        }
      }),
      vue.h(LightIcon, {
        style: {
          display: status.value === "light" ? "block" : "none"
        }
      })
    ]);
  }
});
var AppearanceMode = vue.defineComponent({
  name: "AppearanceMode",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = vue.computed(() => themeLocale.value.outlookLocales.darkmode);
    const darkmode = vue.computed(() => themeData2.value.darkmode);
    const enable = vue.computed(() => darkmode.value === "switch" || darkmode.value === "toggle");
    return () => enable.value ? vue.h("div", { class: "appearance-wrapper" }, [
      vue.h("label", { class: "appearance-title", for: "appearance-switch" }, locale.value),
      vue.h(AppearanceSwitch)
    ]) : null;
  }
});
var themeColorPicker = "";
var ThemeColorPicker = vue.defineComponent({
  name: "ThemeColorPicker",
  props: {
    themeColor: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const setThemeColor = (theme = "") => {
      const classes = document.documentElement.classList;
      const themes = Object.keys(props.themeColor).map((color) => `theme-${color}`);
      if (!theme) {
        localStorage.removeItem("theme");
        classes.remove(...themes);
        return;
      }
      classes.remove(...themes.filter((themeclass) => themeclass !== `theme-${theme}`));
      classes.add(`theme-${theme}`);
      localStorage.setItem("theme", theme);
    };
    vue.onMounted(() => {
      const theme = localStorage.getItem("theme");
      if (theme)
        setThemeColor(theme);
    });
    return () => vue.h("ul", { id: "themecolor-picker" }, [
      vue.h("li", vue.h("span", {
        class: "theme-color",
        onClick: () => setThemeColor()
      })),
      ...Object.entries(props.themeColor).map(([color, value]) => vue.h("li", vue.h("span", {
        style: { background: value },
        onClick: () => setThemeColor(color)
      })))
    ]);
  }
});
var ThemeColor = vue.defineComponent({
  name: "ThemeColor",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const locale = vue.computed(() => themeLocale.value.outlookLocales.themeColor);
    const themeColor = vue.computed(() => {
      const { themeColor: themeColor2 } = themeData2.value;
      return themeColor2 === false ? null : themeColor2;
    });
    return () => themeColor.value ? vue.h("div", { class: "themecolor-wrapper" }, [
      vue.h("label", { class: "themecolor-title", for: "theme-color-picker" }, locale.value),
      vue.h(ThemeColorPicker, { themeColor: themeColor.value })
    ]) : null;
  }
});
var toggleFullScreenButton = "";
var ToggleFullScreenButton = vue.defineComponent({
  name: "ToggleFullScreenButton",
  setup() {
    const themeLocale = useThemeLocaleData();
    const { isSupported, isFullscreen, toggle } = core.useFullscreen();
    const fullscreenLocale = vue.computed(() => themeLocale.value.outlookLocales.fullscreen);
    return () => isSupported ? vue.h("div", { class: "fullscreen-wrapper" }, [
      vue.h("label", { class: "full-screen-title", for: "full-screen-switch" }, fullscreenLocale.value),
      vue.h("button", {
        class: "full-screen",
        id: "full-screen-switch",
        ariaPressed: isFullscreen.value,
        onClick: () => toggle()
      }, isFullscreen.value ? vue.h(CancelFullScreenIcon) : vue.h(EnterFullScreenIcon))
    ]) : null;
  }
});
var OutlookSettings = vue.defineComponent({
  name: "OutlookSettings",
  setup() {
    const themeData2 = useThemeData();
    const pure = usePure();
    const enableDarkmode = vue.computed(() => themeData2.value.darkmode !== "disable" && themeData2.value.darkmode !== "enable");
    const enableThemeColor = vue.computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = vue.computed(() => !pure.value && themeData2.value.fullscreen);
    return () => vue.h(ClientOnly, () => [
      enableThemeColor.value ? vue.h(ThemeColor) : null,
      enableDarkmode.value ? vue.h(AppearanceMode) : null,
      enableFullScreen.value ? vue.h(ToggleFullScreenButton) : null
    ]);
  }
});
var navScreen = "";
var NavScreen = vue.defineComponent({
  name: "NavScreen",
  props: {
    active: Boolean
  },
  emits: ["close"],
  setup(props, { emit, slots }) {
    const route = vueRouter.useRoute();
    const isMobile = useMobile();
    const body = vue.ref();
    const isLocked = core.useScrollLock(body);
    vue.watch(isMobile, (value) => {
      if (!value && props.active)
        emit("close");
    });
    vue.watch(() => route.path, () => {
      isLocked.value = false;
      emit("close");
    });
    vue.onMounted(() => {
      body.value = document.body;
    });
    vue.onBeforeUnmount(() => {
      isLocked.value = false;
    });
    return () => vue.h(vue.Transition, {
      name: "fade",
      onEnter: () => {
        isLocked.value = true;
      },
      onAfterLeave: () => {
        isLocked.value = false;
      }
    }, () => {
      var _a, _b;
      return props.active ? vue.h("div", { id: "nav-screen" }, vue.h("div", { class: "container" }, [
        (_a = slots["before"]) == null ? void 0 : _a.call(slots),
        vue.h(NavScreenLinks),
        vue.h("div", { class: "outlook-wrapper" }, vue.h(OutlookSettings)),
        (_b = slots["after"]) == null ? void 0 : _b.call(slots)
      ])) : null;
    });
  }
});
var outlookButton = "";
var OutlookButton = vue.defineComponent({
  name: "OutlookButton",
  setup() {
    const { isSupported } = core.useFullscreen();
    const themeData2 = useThemeData();
    const pure = usePure();
    const route = vueRouter.useRoute();
    const open = vue.ref(false);
    const enableDarkmode = vue.computed(() => themeData2.value.darkmode !== "disable" && themeData2.value.darkmode !== "enable");
    const enableThemeColor = vue.computed(() => !pure.value && Boolean(themeData2.value.themeColor));
    const enableFullScreen = vue.computed(() => !pure.value && themeData2.value.fullscreen && isSupported);
    vue.watch(() => route.path, () => {
      open.value = false;
    });
    return () => enableDarkmode.value || enableFullScreen.value || enableThemeColor.value ? vue.h("div", { class: "nav-item hide-in-mobile" }, enableDarkmode.value && !enableFullScreen.value && !enableThemeColor.value ? vue.h(AppearanceSwitch) : enableFullScreen.value && !enableDarkmode.value && !enableThemeColor.value ? vue.h(ToggleFullScreenButton) : vue.h("button", {
      class: ["outlook-button", { open: open.value }],
      tabindex: "-1",
      ariaHidden: true
    }, [
      vue.h(OutlookIcon),
      vue.h("div", { class: "outlook-dropdown" }, vue.h(OutlookSettings))
    ])) : null;
  }
});
var toggleNavbarButton = "";
const ToggleNavbarButton = ({ active = false }, { emit }) => vue.h("button", {
  class: ["toggle-navbar-button", { "is-active": active }],
  "aria-label": "Toggle Navbar",
  "aria-expanded": active,
  "aria-controls": "nav-screen",
  onClick: () => emit("toggle")
}, vue.h("span", { class: "button-container" }, [
  vue.h("span", { class: "button-top" }),
  vue.h("span", { class: "button-middle" }),
  vue.h("span", { class: "button-bottom" })
]));
ToggleNavbarButton.displayName = "ToggleNavbarButton";
var toggleSidebarButton = "";
const ToggleSidebarButton = (_2, { emit }) => vue.h("button", {
  class: "toggle-sidebar-button",
  title: "Toggle Sidebar",
  onClick: () => emit("toggle")
}, vue.h("span", { class: "icon" }));
ToggleSidebarButton.displayName = "ToggleSidebarButton";
ToggleSidebarButton.emits = ["toggle"];
var repoLink = "";
var RepoLink = vue.defineComponent({
  name: "RepoLink",
  components: { BitbucketIcon, GiteeIcon, GitHubIcon, GitlabIcon, SourceIcon },
  setup() {
    const repo = useNavbarRepo();
    return () => repo.value ? vue.h("div", { class: "nav-item" }, vue.h("a", {
      class: "repo-link",
      href: repo.value.link,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": repo.value.label
    }, vue.h(vue.resolveComponent(`${repo.value.type}Icon`), {
      style: {
        width: "1.25rem",
        height: "1.25rem",
        verticalAlign: "middle"
      }
    }))) : null;
  }
});
var navbar = "";
var Navbar = vue.defineComponent({
  name: "NavBar",
  emits: ["toggle-sidebar"],
  setup(_props, { emit, slots }) {
    const themeLocale = useThemeLocaleData();
    const isMobile = useMobile();
    const showScreen = vue.ref(false);
    const autoHide = vue.computed(() => {
      const { navbarAutoHide } = themeLocale.value;
      return navbarAutoHide !== "none" && (navbarAutoHide === "always" || isMobile.value);
    });
    const navbarLayout = vue.computed(() => themeLocale.value.navbarLayout || {
      left: ["Brand"],
      center: ["Links"],
      right: ["Language", "Repo", "Outlook", "Search"]
    });
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const map = {
        Brand: vue.h(NavbarBrand),
        Language: vue.h(LanguageDropdown),
        Links: vue.h(NavbarLinks),
        Repo: vue.h(RepoLink),
        Outlook: vue.h(OutlookButton),
        Search: c$5("Docsearch") ? vue.h(vue.resolveComponent("Docsearch")) : c$5("SearchBox") ? vue.h(vue.resolveComponent("SearchBox")) : null
      };
      return [
        vue.h("header", {
          class: [
            "navbar",
            {
              "auto-hide": autoHide.value,
              "hide-icon": !themeLocale.value.navbarIcon
            }
          ]
        }, [
          vue.h("div", { class: "navbar-left" }, [
            vue.h(ToggleSidebarButton, {
              onToggle: () => {
                if (showScreen.value)
                  showScreen.value = false;
                emit("toggle-sidebar");
              }
            }),
            (_a = slots["left-start"]) == null ? void 0 : _a.call(slots),
            ...navbarLayout.value.left.map((item) => map[item]),
            (_b = slots["left-end"]) == null ? void 0 : _b.call(slots)
          ]),
          vue.h("div", { class: "navbar-center" }, [
            (_c = slots["center-start"]) == null ? void 0 : _c.call(slots),
            ...navbarLayout.value.center.map((item) => map[item]),
            (_d = slots["center-end"]) == null ? void 0 : _d.call(slots)
          ]),
          vue.h("div", { class: "navbar-right" }, [
            (_e = slots["right-start"]) == null ? void 0 : _e.call(slots),
            ...navbarLayout.value.right.map((item) => map[item]),
            (_f = slots["right-start"]) == null ? void 0 : _f.call(slots),
            vue.h(ToggleNavbarButton, {
              active: showScreen.value,
              onToggle: () => {
                showScreen.value = !showScreen.value;
              }
            })
          ])
        ]),
        vue.h(NavScreen, {
          active: showScreen.value,
          onClose: () => {
            showScreen.value = false;
          }
        }, {
          before: () => {
            var _a2;
            return (_a2 = slots["screenTop"]) == null ? void 0 : _a2.call(slots);
          },
          after: () => {
            var _a2;
            return (_a2 = slots["screenBottom"]) == null ? void 0 : _a2.call(slots);
          }
        })
      ];
    };
  }
});
var sidebarChild = "";
var SidebarChild = vue.defineComponent({
  name: "SidebarChild",
  props: {
    config: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    return () => [
      renderItem(props.config, {
        class: [
          "sidebar-link",
          `sidebar-${props.config.type}`,
          { active: isActiveSidebarItem(route, props.config, true) }
        ],
        exact: true
      }),
      renderChildren$1(props.config.children)
    ];
  }
});
var sidebarGroup = "";
var SidebarGroup = vue.defineComponent({
  name: "SidebarGroup",
  props: {
    config: {
      type: Object,
      required: true
    },
    open: { type: Boolean, required: true }
  },
  emits: ["toggle"],
  setup(props, { emit }) {
    const route = vueRouter.useRoute();
    const active = vue.computed(() => isActiveSidebarItem(route, props.config));
    const exact = vue.computed(() => isActiveSidebarItem(route, props.config, true));
    return () => {
      const { collapsable, children = [], icon, link, text } = props.config;
      return [
        vue.h("section", { class: "sidebar-group" }, [
          vue.h(collapsable ? "button" : "p", {
            class: [
              "sidebar-heading",
              {
                clickable: collapsable || link,
                exact: exact.value,
                active: active.value
              }
            ],
            ...collapsable ? {
              onClick: () => emit("toggle"),
              onKeydown: (event) => {
                if (event.key === "Enter")
                  emit("toggle");
              }
            } : {}
          }, [
            vue.h(vue.resolveComponent("FontIcon"), { icon }),
            link ? vue.h(vueRouter.RouterLink, { to: link, class: "title" }, () => text) : vue.h("span", { class: "title" }, text),
            collapsable ? vue.h("span", { class: ["arrow", props.open ? "down" : "right"] }) : null
          ]),
          vue.h(DropTransition, () => props.open || !collapsable ? vue.h(SidebarLinks, { config: children }) : null)
        ])
      ];
    };
  }
});
var sidebarLinks = "";
var SidebarLinks = vue.defineComponent({
  name: "SidebarLinks",
  props: {
    config: {
      type: Array,
      required: true
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const openGroupIndex = vue.ref(-1);
    const toggleGroup = (index2) => {
      openGroupIndex.value = index2 === openGroupIndex.value ? -1 : index2;
    };
    vue.watch(() => [route.path, props.config], () => {
      const index2 = props.config.findIndex((item) => isMatchedSidebarItem(route, item));
      openGroupIndex.value = index2;
    }, { immediate: true });
    return () => vue.h("ul", { class: "sidebar-links" }, props.config.map((config2, index2) => vue.h("li", config2.type === "group" ? vue.h(SidebarGroup, {
      config: config2,
      open: index2 === openGroupIndex.value,
      onToggle: () => toggleGroup(index2)
    }) : vue.h(SidebarChild, { config: config2 }))));
  }
});
var sidebar = "";
var Sidebar = vue.defineComponent({
  name: "SideBar",
  setup(_props, { slots }) {
    const route = vueRouter.useRoute();
    const themeLocale = useThemeLocaleData();
    const sidebarItems = useSidebarItems();
    const sidebar2 = vue.ref(null);
    vue.onMounted(() => {
      vue.watch(() => route.hash, (hash) => {
        const activeSidebarItem = document.querySelector(`.sidebar a.sidebar-link[href="${route.path}${hash}"]`);
        if (!activeSidebarItem)
          return;
        const { top: sidebarTop, height: sidebarHeight } = sidebar2.value.getBoundingClientRect();
        const { top: activeSidebarItemTop, height: activeSidebarItemHeight } = activeSidebarItem.getBoundingClientRect();
        if (activeSidebarItemTop < sidebarTop)
          activeSidebarItem.scrollIntoView(true);
        else if (activeSidebarItemTop + activeSidebarItemHeight > sidebarTop + sidebarHeight)
          activeSidebarItem.scrollIntoView(false);
      });
    });
    return () => {
      var _a, _b, _c;
      return vue.h("aside", {
        class: ["sidebar", { "hide-icon": !themeLocale.value.sidebarIcon }],
        ref: sidebar2
      }, [
        (_a = slots["top"]) == null ? void 0 : _a.call(slots),
        ((_b = slots["default"]) == null ? void 0 : _b.call(slots)) || vue.h(SidebarLinks, { config: sidebarItems.value }),
        (_c = slots["bottom"]) == null ? void 0 : _c.call(slots)
      ]);
    };
  }
});
var index = "";
const icons = { "Email": '<svg xmlns="http://www.w3.org/2000/svg" class="icon email-icon" viewBox="0 0 1024 1024" ariaLabelledby="email"><circle cx="512" cy="512" r="512" fill="#1384FF" />,<path d="M299.372 313.572H722.93c28.945 0 52.61 21.845 52.975 48.787L511.333 500.35 246.76 362.481c.182-27.003 23.666-48.97 52.611-48.97zm-52.671 101.702l-.243 244.121c0 27.186 23.848 49.395 52.914 49.395H722.93c29.127 0 52.975-22.21 52.975-49.395V415.152L517.522 546.71a13.957 13.957 0 01-12.682 0L246.7 415.274z" fill="#fff" /></svg>', "GitHub": '<svg xmlns="http://www.w3.org/2000/svg" class="icon github-icon" viewBox="0 0 1024 1024" ariaLabelledby="github"><circle cx="512" cy="512" r="512" fill="#171515" />,<path d="M509.423 146.442c-200.317 0-362.756 162.42-362.756 362.8 0 160.266 103.936 296.24 248.109 344.217 18.139 3.327 24.76-7.872 24.76-17.486 0-8.613-.313-31.427-.49-61.702-100.912 21.923-122.205-48.63-122.205-48.63-16.495-41.91-40.28-53.067-40.28-53.067-32.937-22.51 2.492-22.053 2.492-22.053 36.407 2.566 55.568 37.386 55.568 37.386 32.362 55.438 84.907 39.43 105.58 30.143 3.296-23.444 12.667-39.43 23.032-48.498-80.557-9.156-165.246-40.28-165.246-179.297 0-39.604 14.135-71.988 37.342-97.348-3.731-9.178-16.18-46.063 3.556-96.009 0 0 30.46-9.754 99.76 37.19 28.937-8.048 59.97-12.071 90.823-12.211 30.807.14 61.843 4.165 90.822 12.21 69.26-46.944 99.663-37.189 99.663-37.189 19.792 49.946 7.34 86.831 3.61 96.01 23.25 25.359 37.29 57.742 37.29 97.347 0 139.366-84.82 170.033-165.637 179.013 13.026 11.2 24.628 33.342 24.628 67.182 0 48.498-.445 87.627-.445 99.521 0 9.702 6.535 20.988 24.945 17.444 144.03-48.067 247.881-183.95 247.881-344.175 0-200.378-162.442-362.798-362.802-362.798z" fill="#fff" /></svg>', "Bitbucket": '<svg xmlns="http://www.w3.org/2000/svg" class="icon bitbucket-icon" viewBox="0 0 1024 1024" ariaLabelledby="bitbucket"><circle cx="512" cy="512" r="512" fill="#205081" />,<path d="M512 191.32v.01-.01c-152.76 0-277.805 41.114-277.805 92.166 0 13.443 33.353 206.247 46.577 282.708 5.932 34.285 94.508 84.563 231.126 84.563l.102-.407v.407c137.484 0 225.26-50.278 231.192-84.578 13.23-76.457 46.592-269.255 46.592-282.698.005-51.047-125.024-92.165-277.784-92.165zm0 397.493c-48.771 0-88.31-39.545-88.31-88.31 0-48.772 39.539-88.306 88.31-88.306s88.31 39.534 88.31 88.31c0 48.766-39.539 88.306-88.31 88.306zm-.05-276.842c-98.256-.153-177.885-17.232-177.855-38.14.036-20.912 79.72-37.731 177.976-37.568 98.256.153 177.884 17.22 177.849 38.139-.026 20.908-79.705 37.716-177.966 37.564z" fill="#fff" />,<path d="M711.668 642.814c-4.227 0-7.608 2.994-7.608 2.994S635.65 699.987 512 699.987s-192.06-54.18-192.06-54.18-3.386-2.988-7.608-2.988c-5.04 0-9.827 3.391-9.827 10.871 0 .79.076 1.579.224 2.353 10.617 56.826 18.382 97.206 19.736 103.347 9.268 41.805 91.045 73.411 189.525 73.411h.01c98.49 0 180.267-31.606 189.535-73.411 1.364-6.136 9.114-46.49 19.736-103.317.143-.779.224-1.578.224-2.368 0-7.485-4.786-10.881-9.827-10.881zM467.659 500.477a44.255 44.255 0 1 0 88.51 0 44.255 44.255 0 1 0-88.51 0z" fill="#fff" /></svg>', "Gitlab": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gitlab-icon" viewBox="0 0 1024 1024" ariaLabelledby="gitlab"><circle cx="512" cy="512" r="512" fill="#E8F0FF" />,<path d="m512 848.182 134.473-413.8H377.527L512 848.182z" fill="#E24329" />,<path d="m512 848.182-134.473-413.8h-188.36L512 848.182z" fill="#FC6D26" />,<path d="M189.167 434.382h188.36l-80.832-249.17c-4.202-12.854-22.247-12.854-26.45 0l-81.078 249.17z" fill="#E24329" />,<path d="m512 848.182 134.473-413.8h188.36L512 848.182z" fill="#FC6D26" />,<path d="m834.833 434.382 40.787 125.82a27.8 27.8 0 0 1-10.135 31.147L512 848.182l322.833-413.8z" fill="#FCA326" />,<path d="M834.833 434.382h-188.36l81.079-249.17c4.202-12.854 22.247-12.854 26.45 0l80.831 249.17z" fill="#E24329" /></svg>', "Gmail": '<svg xmlns="http://www.w3.org/2000/svg" class="icon gmail-icon" viewBox="0 0 1024 1024" ariaLabelledby="gmail"><circle cx="512" cy="512" r="512" fill="#DB4437" />,<path d="M277.48 285.567h465.767v441.362H277.48V285.567z" fill="#E67C73" />,<path d="M282.543 285.567h-10.645c-25.962 0-47.122 21.808-47.122 48.705v343.952c0 26.897 21.08 48.705 47.122 48.705h24.976V407.954l213.49 169.95 213.489-169.95V726.93h24.975c26.04 0 47.123-21.809 47.123-48.705V334.272c0-26.897-21.134-48.705-47.123-48.705h-10.644L510.364 480.44 282.542 285.567z" fill="#FFF" /></svg>', "Twitter": '<svg xmlns="http://www.w3.org/2000/svg" class="icon twitter-icon" viewBox="0 0 1024 1024" ariaLabelledby="twitter"><circle cx="512" cy="512" r="512" fill="#5EAADE" />,<path d="M749.737 364.631c-17.594 7.805-36.513 13.088-56.371 15.459 20.269-12.148 35.836-31.387 43.156-54.312A196.233 196.233 0 0 1 674.2 349.6c-17.894-19.083-43.406-30.997-71.636-30.997-54.2 0-98.137 43.944-98.137 98.157 0 7.695.861 15.19 2.544 22.373-81.57-4.092-153.876-43.174-202.284-102.558-8.443 14.498-13.285 31.356-13.285 49.348 0 34.05 17.326 64.096 43.656 81.697a97.69 97.69 0 0 1-44.447-12.277c-.01.41-.01.82-.01 1.24 0 47.558 33.822 87.23 78.72 96.249a98.285 98.285 0 0 1-25.852 3.448 97.491 97.491 0 0 1-18.465-1.768c12.483 39.002 48.725 67.38 91.672 68.17-33.582 26.334-75.897 42.024-121.884 42.024-7.924 0-15.736-.46-23.408-1.37 43.434 27.844 95.014 44.104 150.443 44.104 180.505 0 279.221-149.576 279.221-279.294 0-4.263-.09-8.494-.278-12.708 19.178-13.835 35.813-31.115 48.967-50.807z" fill="#fff" /></svg>' };
const categoryMap = { "category": { "/": { "path": "/category/", "map": { "Guide": { "path": "/category/guide/", "keys": ["v-4eaf9f84", "v-4c863446", "v-bf720700", "v-0978b044", "v-fffb8e28"] }, "JavaScript": { "path": "/category/javascript/", "keys": ["v-694a7ea0", "v-6d19ebae", "v-ed41da8c", "v-65e0cd62", "v-c0291160", "v-3e3fb02a"] }, "Study": { "path": "/category/study/", "keys": ["v-7318da4a", "v-694a7ea0", "v-6d19ebae", "v-ed41da8c", "v-65e0cd62", "v-c0291160", "v-3e3fb02a", "v-e1203d06", "v-ba33a14a", "v-71978c0a", "v-18558afe"] }, "jQuery": { "path": "/category/jquery/", "keys": ["v-e1203d06", "v-ba33a14a", "v-71978c0a", "v-18558afe"] }, "Vue": { "path": "/category/vue/", "keys": ["v-73115d7a", "v-7318da4a"] }, "Review": { "path": "/category/review/", "keys": ["v-73115d7a"] } } }, "/zh/": { "path": "/zh/category/", "map": {} } }, "tag": { "/": { "path": "/tag/", "map": { "disable": { "path": "/tag/disable/", "keys": ["v-4c863446"] }, "encryption": { "path": "/tag/encryption/", "keys": ["v-bf720700"] }, "Markdown": { "path": "/tag/markdown/", "keys": ["v-0978b044"] }, "Page config": { "path": "/tag/page-config/", "keys": ["v-4eaf9f84"] }, "Guide": { "path": "/tag/guide/", "keys": ["v-4eaf9f84"] }, "TeamLeader Education": { "path": "/tag/teamleader-education/", "keys": ["v-694a7ea0", "v-6d19ebae", "v-ed41da8c", "v-65e0cd62", "v-c0291160", "v-3e3fb02a"] }, "PWA": { "path": "/tag/pwa/", "keys": ["v-ed41da8c"] }, "jQuery": { "path": "/tag/jquery/", "keys": ["v-e1203d06", "v-ba33a14a", "v-71978c0a", "v-18558afe"] }, "Review": { "path": "/tag/review/", "keys": ["v-73115d7a"] }, "Vue": { "path": "/tag/vue/", "keys": ["v-73115d7a", "v-7318da4a"] }, "Study": { "path": "/tag/study/", "keys": ["v-7318da4a"] } } }, "/zh/": { "path": "/zh/tag/", "map": {} } } };
if (void 0) {
  (void 0).accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap);
  }
}
const typeMap = { "article": { "/": { "path": "/article/", "keys": ["v-4eaf9f84", "v-184f4da6", "v-0e503981", "v-4c863446", "v-bf720700", "v-0978b044", "v-fffb8e28", "v-73115d7a", "v-7318da4a", "v-694a7ea0", "v-6d19ebae", "v-ed41da8c", "v-65e0cd62", "v-c0291160", "v-3e3fb02a", "v-e1203d06", "v-ba33a14a", "v-71978c0a", "v-18558afe"] }, "/zh/": { "path": "/zh/article/", "keys": [] } }, "encrypted": { "/": { "path": "/encrypted/", "keys": ["v-bf720700"] }, "/zh/": { "path": "/zh/encrypted/", "keys": [] } }, "slide": { "/": { "path": "/slide/", "keys": ["v-0e503981"] }, "/zh/": { "path": "/zh/slide/", "keys": [] } }, "star": { "/": { "path": "/star/", "keys": ["v-4eaf9f84"] }, "/zh/": { "path": "/zh/star/", "keys": [] } }, "timeline": { "/": { "path": "/timeline/", "keys": ["v-184f4da6", "v-0e503981", "v-4c863446", "v-bf720700", "v-0978b044", "v-fffb8e28", "v-73115d7a", "v-7318da4a", "v-694a7ea0", "v-6d19ebae", "v-ed41da8c", "v-65e0cd62", "v-c0291160", "v-3e3fb02a", "v-e1203d06", "v-ba33a14a", "v-71978c0a", "v-18558afe", "v-4eaf9f84"] }, "/zh/": { "path": "/zh/timeline/", "keys": [] } } };
if (void 0) {
  (void 0).accept();
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap);
  }
}
const m = vue.ref(categoryMap), u$2 = (t2 = "") => {
  const a2 = vueRouter.useRouter(), s2 = vueRouter.useRoute(), u2 = useRouteLocale();
  return vue.computed(() => {
    var _a;
    const e2 = t2 || ((_a = usePageFrontmatter().value.blog) == null ? void 0 : _a.key) || "", n2 = a2.getRoutes();
    if (!m.value[e2])
      throw new Error("useBlogCategory: " + (t2 ? `key ${t2} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const p2 = m.value[e2][u2.value], r2 = { path: p2.path, map: {} };
    for (const t3 in p2.map) {
      const e3 = p2.map[t3];
      r2.map[t3] = { path: e3.path, items: [] };
      for (const o2 of e3.keys) {
        const e4 = n2.find(({ name: t4 }) => t4 === o2);
        if (e4) {
          const o3 = x(a2, e4.path);
          r2.map[t3].items.push({ path: o3.path, info: o3.meta });
        }
      }
      s2.path === e3.path && (r2.currentItems = r2.map[t3].items);
    }
    return r2;
  });
};
const l$1 = vue.ref(typeMap), c$1 = (t2 = "") => {
  const a2 = vueRouter.useRouter(), r2 = useRouteLocale();
  return vue.computed(() => {
    var _a;
    const e2 = t2 || ((_a = usePageFrontmatter().value.blog) == null ? void 0 : _a.key) || "";
    if (!l$1.value[e2])
      throw new Error("useBlogType: " + (t2 ? `key ${t2} is invalid` : "can not bind to an exisiting key on non blog pages"));
    const n2 = a2.getRoutes(), p2 = l$1.value[e2][r2.value], s2 = { path: p2.path, items: [] };
    for (const t3 of p2.keys) {
      const e3 = n2.find(({ name: e4 }) => e4 === t3);
      if (e3) {
        const t4 = x(a2, e3.path);
        s2.items.push({ path: t4.path, info: t4.meta });
      }
    }
    return s2;
  });
};
const categoryMapSymbol = Symbol.for("categoryMap");
const useCategoryMap = () => {
  const categoryMap2 = vue.inject(categoryMapSymbol);
  if (!categoryMap2) {
    throw new Error("useCategoryMap() is called without provider.");
  }
  return categoryMap2;
};
const setupCategoryMap = () => {
  const categoryMap2 = u$2("category");
  vue.provide(categoryMapSymbol, categoryMap2);
};
const useBlogOptions = () => {
  const themeData2 = useThemeData();
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => ({
    ...themeData2.value.blog,
    ...themeLocale.value.blog
  }));
};
const tagMapSymbol = Symbol.for("tagMap");
const useTagMap = () => {
  const tagMap = vue.inject(tagMapSymbol);
  if (!tagMap) {
    throw new Error("useTagMap() is called without provider.");
  }
  return tagMap;
};
const setupTagMap = () => {
  const tagMap = u$2("tag");
  vue.provide(tagMapSymbol, tagMap);
};
const useArticleAuthor = (info) => {
  const themeLocale = useThemeLocaleData();
  return vue.computed(() => {
    const { author } = info.value;
    if (author)
      return J(author);
    if (author === false)
      return [];
    return J(themeLocale.value.author, false);
  });
};
const useArticleCategory = (info) => {
  const categoryMap2 = useCategoryMap();
  return vue.computed(() => V(info.value.category).map((name) => ({
    name,
    path: categoryMap2.value.map[name].path
  })));
};
const useArticleTag = (info) => {
  const tagMap = useTagMap();
  return vue.computed(() => B(info.value.tag).map((name) => ({
    name,
    path: tagMap.value.map[name].path
  })));
};
const useArticleDate = (info) => vue.computed(() => {
  const { date } = info.value;
  return date ? Z(date) : null;
});
const useArticleInfo = (info) => {
  const blogOptions = useBlogOptions();
  const author = useArticleAuthor(info);
  const category2 = useArticleCategory(info);
  const tag2 = useArticleTag(info);
  const date = useArticleDate(info);
  const config2 = vue.reactive({
    author: author.value,
    category: category2.value,
    date: date.value,
    localizedDate: info.value.localizedDate || "",
    tag: tag2.value,
    isOriginal: info.value.isOriginal || false,
    readingTime: info.value.readingTime || null
  });
  const items = vue.computed(() => blogOptions.value.articleInfo);
  return { config: config2, items };
};
const articlesSymbol = Symbol.for("articles");
const useArticles = () => {
  const articles = vue.inject(articlesSymbol);
  if (!articles) {
    throw new Error("useArticles() is called without provider.");
  }
  return articles;
};
const setupArticles = () => {
  const articles = c$1("article");
  vue.provide(articlesSymbol, articles);
};
const encryptedArticlesSymbol = Symbol.for("encryptedArticles");
const useEncryptedArticles = () => {
  const encryptedArticles = vue.inject(encryptedArticlesSymbol);
  if (!encryptedArticles) {
    throw new Error("useEncryptedArticles() is called without provider.");
  }
  return encryptedArticles;
};
const setupEncryptedArticles = () => {
  const encryptedArticles = c$1("encrypted");
  vue.provide(encryptedArticlesSymbol, encryptedArticles);
};
const slidesSymbol = Symbol.for("slides");
const useSlides = () => {
  const slides = vue.inject(slidesSymbol);
  if (!slides) {
    throw new Error("useSlides() is called without provider.");
  }
  return slides;
};
const setupSlides = () => {
  const slides = c$1("slide");
  vue.provide(slidesSymbol, slides);
};
const starsSymbol = Symbol.for("stars");
const useStars = () => {
  const stars = vue.inject(starsSymbol);
  if (!stars) {
    throw new Error("useStars() is called without provider.");
  }
  return stars;
};
const setupStars = () => {
  const stars = c$1("star");
  vue.provide(starsSymbol, stars);
};
const timelinesSymbol = Symbol.for("timelines");
const useTimelines = () => {
  const timelines = vue.inject(timelinesSymbol);
  if (!timelines) {
    throw new Error("useTimelines() is called without provider.");
  }
  return timelines;
};
const setupTimelines = () => {
  const timelines = c$1("timeline");
  const timelineItems2 = vue.computed(() => {
    const timelineItems3 = [];
    timelines.value.items.forEach(({ info, path }) => {
      var _a;
      const { year, month, day } = ((_a = Z(info.date)) == null ? void 0 : _a.info) || {};
      if (year && month && day) {
        if (!timelineItems3[0] || timelineItems3[0].year !== year)
          timelineItems3.unshift({ year, items: [] });
        timelineItems3[0].items.push({
          date: `${month}/${day}`,
          info,
          path
        });
      }
    });
    return {
      ...timelines.value,
      config: timelineItems3.reverse()
    };
  });
  vue.provide(timelinesSymbol, timelineItems2);
};
const setupBlog = () => {
  setupArticles();
  setupCategoryMap();
  setupEncryptedArticles();
  setupSlides();
  setupStars();
  setupTagMap();
  setupTimelines();
};
var socialMedia = "";
var SocialMedia = vue.defineComponent({
  name: "SocialMedia",
  setup() {
    const blogOptions = useBlogOptions();
    const isPure = usePure();
    const mediaLinks = vue.computed(() => {
      const config2 = blogOptions.value.medias;
      if (config2)
        return Object.entries(config2).map(([media, url]) => ({
          name: media,
          icon: icons[media],
          url
        }));
      return [];
    });
    return () => mediaLinks.value.length ? vue.h("div", { class: "social-media-wrapper" }, mediaLinks.value.map(({ name, icon, url }) => vue.h("a", {
      class: "social-media",
      href: url,
      rel: "noopener noreferrer",
      target: "_blank",
      "aria-label": name,
      ...isPure.value ? {} : { "data-balloon-pos": "up" },
      innerHTML: icon
    }))) : null;
  }
});
var bloggerInfo = "";
var BloggerInfo = vue.defineComponent({
  name: "BloggerInfo",
  setup() {
    const blogOptions = useBlogOptions();
    const siteLocale = useSiteLocaleData();
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const tagMap = useTagMap();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const bloggerName = vue.computed(() => {
      var _a;
      return blogOptions.value.name || ((_a = J(themeLocale.value.author)[0]) == null ? void 0 : _a.name) || siteLocale.value.title;
    });
    const bloggerAvatar = vue.computed(() => blogOptions.value.avatar || themeLocale.value.logo);
    const locale = vue.computed(() => themeLocale.value.blogLocales);
    const intro = vue.computed(() => blogOptions.value.intro);
    return () => vue.h("div", {
      class: "blogger-info",
      vocab: "https://schema.org/",
      typeof: "Person"
    }, [
      vue.h("div", {
        class: "blogger",
        ...intro.value ? {
          style: { cursor: "pointer" },
          "aria-label": locale.value.intro,
          "data-balloon-pos": "down",
          role: "navigation",
          onClick: () => navigate(intro.value)
        } : {}
      }, [
        bloggerAvatar.value ? vue.h("img", {
          class: [
            "blogger-avatar",
            {
              round: blogOptions.value.roundAvatar
            }
          ],
          src: withBase(bloggerAvatar.value),
          property: "image",
          alt: "Blogger Avatar"
        }) : null,
        bloggerName.value ? vue.h("div", { class: "blogger-name", property: "name" }, bloggerName.value) : null,
        blogOptions.value.description ? vue.h("div", {
          class: "blogger-description",
          innerHTML: blogOptions.value.description
        }) : null,
        intro.value ? vue.h("meta", { property: "url", content: withBase(intro.value) }) : null
      ]),
      vue.h("div", { class: "num-wrapper" }, [
        vue.h("div", { onClick: () => navigate(articles.value.path) }, [
          vue.h("div", { class: "num" }, articles.value.items.length),
          vue.h("div", locale.value.article)
        ]),
        vue.h("div", { onClick: () => navigate(categoryMap2.value.path) }, [
          vue.h("div", { class: "num" }, Object.keys(categoryMap2.value.map).length),
          vue.h("div", locale.value.category)
        ]),
        vue.h("div", { onClick: () => navigate(tagMap.value.path) }, [
          vue.h("div", { class: "num" }, Object.keys(tagMap.value.map).length),
          vue.h("div", locale.value.tag)
        ]),
        vue.h("div", { onClick: () => navigate(timelines.value.path) }, [
          vue.h("div", { class: "num" }, timelines.value.items.length),
          vue.h("div", locale.value.timeline)
        ])
      ]),
      vue.h(SocialMedia)
    ]);
  }
});
const CategoryIcon = () => vue.h(a$5, { name: "category" }, () => vue.h("path", {
  d: "M148.41 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H148.41c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.311-40.31zM147.556 553.478H429.73c22.263 0 40.311 18.048 40.311 40.31v282.176c0 22.263-18.048 40.312-40.31 40.312H147.555c-22.263 0-40.311-18.049-40.311-40.312V593.79c0-22.263 18.048-40.311 40.31-40.311zM593.927 106.992h282.176c22.263 0 40.31 18.048 40.31 40.31V429.48c0 22.263-18.047 40.31-40.31 40.31H593.927c-22.263 0-40.311-18.047-40.311-40.31V147.302c0-22.263 18.048-40.31 40.31-40.31zM730.22 920.502H623.926c-40.925 0-74.22-33.388-74.22-74.425V623.992c0-41.038 33.387-74.424 74.425-74.424h222.085c41.038 0 74.424 33.226 74.424 74.067v114.233c0 10.244-8.304 18.548-18.547 18.548s-18.548-8.304-18.548-18.548V623.635c0-20.388-16.746-36.974-37.33-36.974H624.13c-20.585 0-37.331 16.747-37.331 37.33v222.086c0 20.585 16.654 37.331 37.126 37.331H730.22c10.243 0 18.547 8.304 18.547 18.547 0 10.244-8.304 18.547-18.547 18.547z"
}));
CategoryIcon.displayName = "CategoryIcon";
const TagIcon = () => vue.h(a$5, { name: "tag" }, () => vue.h("path", {
  d: "M939.902 458.563L910.17 144.567c-1.507-16.272-14.465-29.13-30.737-30.737L565.438 84.098h-.402c-3.215 0-5.726 1.005-7.634 2.913l-470.39 470.39a10.004 10.004 0 000 14.164l365.423 365.424c1.909 1.908 4.42 2.913 7.132 2.913s5.223-1.005 7.132-2.913l470.39-470.39c2.01-2.11 3.014-5.023 2.813-8.036zm-240.067-72.121c-35.458 0-64.286-28.828-64.286-64.286s28.828-64.285 64.286-64.285 64.286 28.828 64.286 64.285-28.829 64.286-64.286 64.286z"
}));
TagIcon.displayName = "TagIcon";
const TimelineIcon = () => vue.h(a$5, { name: "timeline" }, () => vue.h("path", {
  d: "M511.997 70.568c-243.797 0-441.429 197.633-441.429 441.435 0 243.797 197.632 441.429 441.43 441.429S953.431 755.8 953.431 512.002c0-243.796-197.637-441.434-441.435-441.434zm150.158 609.093-15.605 15.61c-8.621 8.615-22.596 8.615-31.215 0L472.197 552.126c-4.95-4.944-4.34-14.888-4.34-24.677V247.14c0-12.19 9.882-22.07 22.07-22.07h22.07c12.19 0 22.07 9.882 22.07 22.07v273.218l128.088 128.088c8.62 8.62 8.62 22.595 0 31.215zm0 0"
}));
TimelineIcon.displayName = "TimelineIcon";
const SlideIcon = () => vue.h(a$5, { name: "slides" }, () => vue.h("path", {
  d: "M896 170.667v426.666a85.333 85.333 0 0 1-85.333 85.334h-256v61.184l192.597 115.584-43.861 73.13-148.736-89.173v95.275h-85.334v-95.318l-148.736 89.216-43.861-73.13 192.597-115.627v-61.141h-256A85.333 85.333 0 0 1 128 597.333V170.667H85.333V85.333h853.334v85.334H896zm-682.667 0v426.666h597.334V170.667H213.333zM426.667 512h-85.334V341.333h85.334V512zm128 0h-85.334V256h85.334v256zm128 0h-85.334V384h85.334v128z"
}));
SlideIcon.displayName = "SlideIcon";
const StickyIcon = () => vue.h(a$5, { name: "sticky" }, () => [
  vue.h("path", {
    d: "m381.3 733.8l-161.9 118c-5.9 4.5-13.2 6.6-20.1 6.6-8.7 0-17.7-3.4-24.3-10-12.2-12.2-13.9-31.3-3.5-45.2l144.5-195.5-113.6-112.9c-11.1-11.1-13.2-28.4-5.5-42 5.5-8.7 52.1-76.4 155.5-51 1.8 0.3 3.5 0.3 5.6 0.7 4.2 0.3 9 0.7 14.2 1.7 21.9 3.5 60.8-13.9 94.5-42.7 32.3-27.5 53.1-59.4 53.1-81.6 0-5.2 0-10.8-0.3-16-0.7-20.8-2.1-52.8 21.5-76.4 28.1-28.1 72.9-30.6 103.9-5.2 0.6 0.3 1 1 1.7 1.7 16.7 16.3 187.5 187.2 189.3 188.9 14.5 14.6 22.9 34.4 22.9 55.3 0 20.8-8 40.2-22.9 54.8-23.7 23.6-56 22.6-77.1 21.6-4.9 0-10.5-0.4-15.7-0.4-20.8 0-45.8 14.6-70.5 41.3-34.3 37.5-55.5 85.8-53.8 107.7 0.7 6.9 2.1 19.1 2.4 20.8 25 101.4-42.7 147.6-50.7 152.8-13.9 8.4-31.6 6.3-42.7-4.8l-112.1-112.2z"
  })
]);
StickyIcon.displayName = "StickyIcon";
const ArticleIcon = () => vue.h(a$5, { name: "article" }, () => vue.h("path", {
  d: "M853.333 938.667H170.667A42.667 42.667 0 0 1 128 896V128a42.667 42.667 0 0 1 42.667-42.667h682.666A42.667 42.667 0 0 1 896 128v768a42.667 42.667 0 0 1-42.667 42.667zm-42.666-85.334V170.667H213.333v682.666h597.334zM298.667 256h170.666v170.667H298.667V256zm0 256h426.666v85.333H298.667V512zm0 170.667h426.666V768H298.667v-85.333zm256-384h170.666V384H554.667v-85.333z"
}));
ArticleIcon.displayName = "ArticleIcon";
const BookIcon = () => vue.h(a$5, { name: "book" }, () => vue.h("path", {
  d: "M256 853.333h426.667A85.333 85.333 0 0 0 768 768V256a85.333 85.333 0 0 0-85.333-85.333H469.333a42.667 42.667 0 0 1 0-85.334h213.334A170.667 170.667 0 0 1 853.333 256v512a170.667 170.667 0 0 1-170.666 170.667H213.333A42.667 42.667 0 0 1 170.667 896V128a42.667 42.667 0 0 1 42.666-42.667h128A42.667 42.667 0 0 1 384 128v304.256l61.653-41.088a42.667 42.667 0 0 1 47.36 0l61.654 41.045V256A42.667 42.667 0 0 1 640 256v256a42.667 42.667 0 0 1-66.347 35.499l-104.32-69.547-104.32 69.547A42.667 42.667 0 0 1 298.667 512V170.667H256v682.666z"
}));
BookIcon.displayName = "BookIcon";
const LinkIcon = () => vue.h(a$5, { name: "link" }, () => vue.h("path", {
  d: "M460.8 584.533c17.067 17.067 17.067 42.667 0 59.734-17.067 17.066-42.667 17.066-59.733 0-85.334-85.334-85.334-217.6 0-302.934L554.667 192C640 110.933 776.533 110.933 857.6 196.267c81.067 81.066 81.067 213.333 0 294.4l-68.267 64c0-34.134-4.266-68.267-17.066-102.4l21.333-21.334c51.2-46.933 55.467-128 4.267-179.2s-128-55.466-179.2-4.266c-4.267 0-4.267 4.266-4.267 4.266L465.067 401.067c-51.2 51.2-51.2 132.266-4.267 183.466m123.733-183.466C601.6 384 627.2 384 644.267 401.067c85.333 85.333 85.333 217.6 0 302.933l-153.6 149.333C405.333 934.4 268.8 934.4 187.733 849.067c-81.066-81.067-81.066-213.334 0-294.4l68.267-64c0 34.133 4.267 72.533 17.067 102.4L251.733 614.4C204.8 665.6 204.8 746.667 256 793.6c51.2 46.933 123.733 46.933 174.933 0l149.334-149.333c51.2-51.2 51.2-128 0-179.2-12.8-17.067-17.067-46.934 4.266-64z"
}));
LinkIcon.displayName = "LinkIcon";
const ProjectIcon = () => vue.h(a$5, { name: "project" }, () => vue.h("path", {
  d: "M987.456 425.152H864V295.296a36.48 36.48 0 0 0-36.544-36.544h-360l-134.08-128.256A9.344 9.344 0 0 0 327.04 128H36.48A36.48 36.48 0 0 0 0 164.544v676.608a36.48 36.48 0 0 0 36.544 36.544h797.76a36.672 36.672 0 0 0 33.92-22.848L1021.44 475.52a36.48 36.48 0 0 0-33.92-50.304zM82.304 210.304h215.424l136.64 130.752h347.328v84.096H198.848A36.672 36.672 0 0 0 164.928 448L82.304 652.8V210.304zM808.32 795.456H108.544l118.08-292.608h699.904L808.32 795.52z"
}));
ProjectIcon.displayName = "ProjectIcon";
const FriendIcon = () => vue.h(a$5, { name: "friend" }, () => vue.h("path", {
  d: "M860.16 213.333A268.373 268.373 0 0 0 512 186.027a267.52 267.52 0 0 0-348.16 404.48L428.8 855.893a118.613 118.613 0 0 0 166.4 0l264.96-265.386a267.52 267.52 0 0 0 0-377.174zM800 531.627l-264.96 264.96a32.427 32.427 0 0 1-46.08 0L224 530.347a183.04 183.04 0 0 1 0-256 182.187 182.187 0 0 1 256 0 42.667 42.667 0 0 0 60.587 0 182.187 182.187 0 0 1 256 0 183.04 183.04 0 0 1 3.413 256z"
}));
FriendIcon.displayName = "FriendIcon";
const SlideDownIcon = () => vue.h(a$5, { name: "slide-down" }, () => vue.h("path", {
  d: "M108.775 312.23c13.553 0 27.106 3.734 39.153 11.806l375.205 250.338 363.641-252.808c32.587-21.624 76.499-12.83 98.123 19.757 21.685 32.467 12.95 76.56-19.576 98.184l-402.854 278.89c-23.733 15.901-54.694 15.962-78.547.12L69.501 442.097c-32.647-21.685-41.441-65.777-19.817-98.304 13.734-20.54 36.201-31.563 59.09-31.563Z"
}));
SlideDownIcon.displayName = "SlideDownIcon";
var empty_icon = "";
const EmptyIcon = () => vue.h("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  class: "empty-icon",
  viewBox: "0 0 1024 1024",
  innerHTML: '<defs><linearGradient id="f" x1="512.342" y1="2266.13" x2="512.342" y2="666.063" gradientUnits="userSpaceOnUse"><stop offset=".919" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="g" x1="528.912" y1="774" x2="388.088" y2="612" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#e6e6e6" stop-opacity="0"/></linearGradient><linearGradient id="h" x1="213.219" y1="721.704" x2="251.313" y2="683.61" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#d7d7d7"/><stop offset=".485" stop-color="#fafafa"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="i" x1="724.813" y1="821.718" x2="768.656" y2="777.876" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fafafa"/></linearGradient><linearGradient id="a" x1="513.493" y1="714.594" x2="471.007" y2="544.188" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#999"/><stop offset="1" stop-color="#ccc"/></linearGradient><linearGradient id="b" x1="440.156" y1="564.031" x2="508.594" y2="495.594" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="l" x1="660.988" y1="754.156" x2="608.637" y2="544.188" xlink:href="#a"/><linearGradient id="m" x1="479.188" y1="774.219" x2="649.782" y2="603.625" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#b3b3b3"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="n" x1="447.121" y1="774.219" x2="394.661" y2="563.813" xlink:href="#a"/><linearGradient id="o" x1="494" y1="597" x2="628" y2="463" xlink:href="#b"/><linearGradient id="d" x1="610.485" y1="604.938" x2="697.298" y2="518.125" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff"/></linearGradient><linearGradient id="p" x1="457.438" y1="619.25" x2="353.469" y2="619.25" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6" stop-opacity="0"/><stop offset="1" stop-color="#e6e6e6"/></linearGradient><linearGradient id="q" x1="542.734" y1="674.25" x2="615.672" y2="601.313" xlink:href="#b"/><linearGradient id="c" x1="627.933" y1="358.938" x2="685.192" y2="422.531" gradientUnits="userSpaceOnUse"><stop offset=".4" stop-color="#e6e6e6" stop-opacity=".4"/><stop offset=".443" stop-color="#fff"/><stop offset=".6" stop-color="#ccc"/></linearGradient><linearGradient id="r" x1="618.547" y1="422.531" x2="681.547" y2="359.531" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#e6e6e6"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="s" x1="625" y1="441.5" x2="697" y2="369.5" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".761" stop-color="#fff"/><stop offset="1" stop-color="#f0f0f0"/></linearGradient><linearGradient id="t" x1="627.681" y1="361.438" x2="692.257" y2="433.156" xlink:href="#c"/><linearGradient id="u" x1="561.414" y1="735.438" x2="573.149" y2="688.375" xlink:href="#d"/><linearGradient id="v" x1="405" y1="485.875" x2="440" y2="450.875" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".702"/></linearGradient><linearGradient id="w" x1="404.61" y1="486.906" x2="441.86" y2="449.656" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ccc"/><stop offset=".495" stop-color="#ccc" stop-opacity=".702"/><stop offset=".498" stop-color="#ccc"/><stop offset="1" stop-color="#fff" stop-opacity=".302"/></linearGradient><radialGradient id="e" cx="329.297" cy="647.578" r="8.172" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fafafa"/><stop offset="1.2" stop-color="#e6e6e6"/></radialGradient><radialGradient id="j" cx="802.297" cy="673.578" r="8.172" xlink:href="#e"/><radialGradient id="k" cx="774.844" cy="642.75" r="5.531" xlink:href="#e"/></defs><path d="M512.33 666.07c441.828 0 800 358.18 800 800.03s-358.172 800.02-800 800.02-800-358.18-800-800.02 358.17-800.03 800-800.03z" style="fill:url(#f);fill-rule:evenodd"/><path d="m272 694 242-82 131 119-188 43z" style="fill:url(#g);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M232.391 723.534a2.4 2.4 0 0 1 2.4 2.4v17.725a2.4 2.4 0 0 1-4.8 0v-17.725a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M232.255 676.559c10.33 0 17.067 15.408 18.7 28.493 1.619 12.942-2.372 23.694-18.7 23.694-16.878 0-20.213-10.733-18.7-23.694 1.633-14.061 8.37-28.493 18.7-28.493z" style="fill:url(#h);fill-rule:evenodd"/><path fill="#b3b3b3" fill-rule="evenodd" d="M745.853 826h.938a2.4 2.4 0 0 1 2.4 2.4v22.238a2.4 2.4 0 0 1-2.4 2.4h-.938a2.4 2.4 0 0 1-2.4-2.4V828.4a2.4 2.4 0 0 1 2.4-2.4z"/><path d="M746.727 830.3c-19.438 0-23.278-9.326-21.541-20.59a34.467 34.467 0 0 1 3.289-10.369 16.628 16.628 0 0 1 0-9.112c2.889-12.327 12.059-20.911 18.356-20.911 6.56 0 15.468 9.1 18.356 20.911a14.589 14.589 0 0 1-.335 9.217 34.36 34.36 0 0 1 3.419 10.264c1.861 11.243-2.735 20.59-21.544 20.59z" style="fill:url(#i);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M328.841 654.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.109.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M328.383 653.73a6.567 6.567 0 0 0-5.2-5.027q-4.109-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#e);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M801.841 680.562a6.571 6.571 0 0 0-5.2-5.027q-4.107-.952-.034-2.045a6.571 6.571 0 0 0 5.027-5.2q.952-4.109 2.045-.035a6.569 6.569 0 0 0 5.2 5.027q4.108.954.035 2.045a6.569 6.569 0 0 0-5.027 5.2q-.955 4.108-2.046.035z"/><path d="M801.383 679.73a6.567 6.567 0 0 0-5.2-5.027q-4.108-.954-.035-2.045a6.568 6.568 0 0 0 5.027-5.2q.954-4.107 2.046-.034a6.568 6.568 0 0 0 5.2 5.027q4.107.952.035 2.045a6.568 6.568 0 0 0-5.027 5.2q-.954 4.104-2.046.034z" style="fill:url(#j);fill-rule:evenodd"/><path d="M774.21 646.9a4.446 4.446 0 0 0-3.517-3.4q-2.778-.643-.023-1.383a4.443 4.443 0 0 0 3.4-3.517q.645-2.778 1.383-.023a4.443 4.443 0 0 0 3.517 3.4q2.778.645.023 1.383a4.446 4.446 0 0 0-3.4 3.517q-.645 2.78-1.383.023z" style="fill:url(#k);fill-rule:evenodd"/><path d="m385.6 714.6.158-150.658L598.9 544.174l-.158 150.658z" style="fill:url(#a);fill-rule:evenodd"/><path d="m385.474 564.031 214.763-19.383-36.171-49.067-215.559 17.634z" style="fill:url(#b);fill-rule:evenodd"/><path d="m598.744 694.832.156-150.658 71.975 59.319-.158 150.658z" style="fill:url(#l);fill-rule:evenodd"/><path d="m457.064 774.209.158-150.658 214.691-19.914-.158 150.663z" style="fill:url(#m);fill-rule:evenodd"/><path d="m384.566 714.459.158-150.659 72.5 59.75-.158 150.658z" style="fill:url(#n);fill-rule:evenodd"/><path d="M494 640s75.357-58.4 42-83-38.887 1.663-37 14 53.847 12.465 54-26c.2-49.979 75-125 75-125" style="fill:none;stroke-width:3px;stroke-dasharray:12 6;stroke:url(#o);fill-rule:evenodd"/><path d="m670.275 604.939-72.041-59.9 38.476-26.909 72.86 58.159z" style="fill:url(#d);fill-rule:evenodd"/><path d="m425.5 674.383-72.042-59.9 31.109-50.347 72.86 58.16z" style="fill:url(#p);fill-rule:evenodd"/><path d="m487.918 674.235 214.482-22.57-31.1-50.346-215.309 20.833z" style="fill:url(#q);fill-rule:evenodd"/><path style="fill:#fff;fill-rule:evenodd" d="m697.363 358.927-69.58 62.511-12.035 1.082z"/><path d="m697.363 358.927-69.58 62.511-12.035 1.082z" style="fill:url(#c);fill-rule:evenodd"/><path d="M615.748 422.52 604 413l92.089-53.46" style="fill:url(#r);fill-rule:evenodd"/><path d="m625 432 12 18 60-89" style="fill:url(#s);fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:#fff;fill-rule:evenodd"/><path d="m626.98 421.335-2.471 11.828 70.918-71.735" style="fill:url(#t);fill-rule:evenodd"/><path d="m494.814 735.44 21.293-2.1v-6.613l-13.4 1.319v-6.965l10.977-1.08v-6.613l-10.977 1.08v-6.084l12.917-1.27v-6.525l-20.808 2.047v32.8zM521 732.863l7.054-.694v-11.241a106.361 106.361 0 0 0-1.014-11.274l.176-.017 2.645 7.586 4.453 11.553 4.32-.425 4.408-12.424 2.733-8.116.177-.018a111.811 111.811 0 0 0-1.014 11.474v11.241l7.185-.707V697l-8.552.841-5.025 14.646c-.618 1.956-1.147 4.08-1.808 6.173l-.22.022c-.617-1.968-1.146-3.987-1.808-5.818l-5.2-13.639-8.508.837v32.8zm37.213-3.661 7.891-.776v-10.889l3.835-.377c6.922-.681 12.961-4.714 12.961-12.517 0-8.111-5.951-10.082-13.181-9.371l-11.504 1.128v32.8zm7.891-17.881v-9.478l3.218-.316c3.792-.373 5.908.565 5.908 3.871 0 3.218-1.852 5.208-5.687 5.585zM594 725.682l7.891-.777v-26.274l8.905-.876v-6.524l-25.657 2.524v6.524l8.861-.871v26.274zm27.991-2.754 7.847-.772v-11.594l9.919-22.18-8.244.811-2.733 7.542c-.925 2.56-1.807 4.939-2.733 7.587l-.176.018c-.926-2.466-1.764-4.676-2.645-7.058l-2.734-7-8.375.824 9.874 20.233v11.594z" style="fill:url(#u);fill-rule:evenodd"/><path fill="#ccc" fill-rule="evenodd" d="M408.938 457.309a17.5 17.5 0 0 0 21.374 26.725 17.5 17.5 0 1 1-16.306-30.955 17.442 17.442 0 0 0-5.068 4.23z"/><circle cx="422.5" cy="468.375" r="17.5" style="fill:url(#v)"/><path fill="#ccc" fill-rule="evenodd" d="M391.76 451.5c-2.358 4.419 9.827 15.52 27.215 24.8 15.131 8.071 29.212 12.1 34.166 10.093-4.191 2.772-18.943-1.24-34.86-9.73-17.388-9.275-29.573-20.376-27.215-24.8a2.96 2.96 0 0 1 1.585-1.3 2.606 2.606 0 0 0-.891.937z"/><path d="M418.975 476.29c-17.388-9.275-29.573-20.376-27.215-24.8s18.363-.484 35.751 8.791 29.572 20.376 27.215 24.8-18.364.483-35.751-8.791zm31.634 5.732c1.824-3.42-8.789-12.642-23.7-20.6s-28.486-11.633-30.31-8.213 8.789 12.642 23.7 20.6 28.486 11.633 30.31 8.213zm-36.645-29.008-2.775 1.452.032 1.751 28.637 14.183.266-4.559z" style="fill:url(#w);fill-rule:evenodd"/><g class="people"><path style="fill:#f8cfad;fill-rule:evenodd" d="m612.131 676.5 1.362 3.532 3.255-2.324-1.361-3.532zM629.131 665.5l1.362 3.532 3.255-2.324-1.361-3.532z"/><path style="fill:#141a33;fill-rule:evenodd" d="m617.764 678.184-3.162-.078a11.028 11.028 0 0 0-1.034 3.454c-.258 2.006-1.177 5-.449 5.367 1.5 2.659 4.118-.215 4.118-.215s2.187-2.848 1.925-5.265c-.106-.973-1.181-1.869-1.398-3.263zM633.781 665.855l3.019.945a11.008 11.008 0 0 1-.137 3.6c-.4 1.981-.179 4.166-.986 4.277-2.283 2.03-3.827-1.533-3.827-1.533s-1.473-2.456-.444-4.659c.412-.88 1.718-1.385 2.375-2.63z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M599.935 592.534s10.293 9.761 11.95 7.564 3.536-3.463-6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M611.3 596.361c1.674-1.105 11.5 7.048 14.5 11.774s-12.705-4.36-14.632-6.776-1.54-3.893.132-4.998z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M621.815 607.988s1.809 2.549 2.433 1.756 2.475-1.064 2.449-1.138.1-.819 1.288-2.331-3.8-3.632-5.81-.494a2.556 2.556 0 0 0-.36 2.207z"/><path fill="#232c57" fill-rule="evenodd" d="M598 617s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s12.666 11.836 16 19c0 0-4.753-1.629-4 2 0 0-18.132-14.647-19-19s-9.148-18.716-12-31z"/><path d="M589 622s14.968-5.618 17 7a150.235 150.235 0 0 1 2 22s4.666 17.836 8 25c0 0-4.753-1.629-4 2 0 0-10.132-20.647-11-25s-9.148-18.716-12-31z" style="fill:#292966;fill-rule:evenodd"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M585.626 597.7s-10.292 9.761-11.95 7.563-3.536-3.463 6.758-13.65z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M574.259 601.529c-1.675-1.105-11.5 7.049-14.5 11.774s12.7-4.36 14.631-6.775 1.543-3.894-.131-4.999z"/><path style="fill:#f0c5a8;fill-rule:evenodd" d="M591.715 577.752s-.606 1.681 1.48 3.716-3.615 5.307-4.645 2.85-.48-2.716-.48-2.716z"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M583.527 574.123c-.839 1.043.491 3.873 1.453 5.449s2.749 2.833 3.364 2.428 4.088-2.657 4-4-.228-3.4-.228-3.4 2.562-1.641 2.154-2.916-2.916-.154-2.916-.154a15.853 15.853 0 0 0-.227-2.224c-.189-.929-6.887-1.445-7.827 2.6s.558 1.805.227 2.217z"/><path fill="#232c57" fill-rule="evenodd" d="M584.227 567.758c2.1-.885 7.2-3.684 10.125.318s.842 4.385.989 5.294-1.894 5.69-1.341 6.63-3.865.8-4.657-1.179-2.844-.539-2.227-1.224-1.3-4.456-2.916-2.154a9.252 9.252 0 0 0 .309-1.38c-.115.192.259-3.257-.673-1.32s-2.1 1.037-3.069.762-1.8-1.118-1.071-1.689c.023-.016 2.436-3.172 4.531-4.058z"/><path d="M589 585c-2.584-.47-10.055.362-13 13 0 0 1.9 3.349 5 4s6 21 6 21 24.016 11.06 27-3c-.07-13.826-8-21-8-21s5.829-3.2 5-6-8.016-10.153-11-10-6 0-6 0-2.416 2.47-5 2z" style="fill:#f6bb07;fill-rule:evenodd"/><path style="fill:#f8cfad;fill-rule:evenodd" d="M563.284 612.581s-.986 2.965-1.814 2.389-2.678-.3-2.675-.374-.333-.755-1.912-1.854 2.577-4.583 5.414-2.167a2.551 2.551 0 0 1 .987 2.006z"/></g>'
});
EmptyIcon.displayName = "EmptyIcon";
const LockIcon = () => vue.h(a$5, { name: "lock" }, () => vue.h("path", {
  d: "M787.168 952.268H236.832c-30.395 0-55.033-24.638-55.033-55.033V429.45c0-30.395 24.638-55.034 55.033-55.034h82.55V264.35c0-106.38 86.238-192.618 192.618-192.618S704.618 157.97 704.618 264.35v110.066h82.55c30.395 0 55.033 24.639 55.033 55.034v467.785c0 30.395-24.639 55.033-55.033 55.033zM484.483 672.046v115.122h55.034V672.046c31.99-11.373 55.033-41.605 55.033-77.496 0-45.592-36.958-82.55-82.55-82.55s-82.55 36.958-82.55 82.55c0 35.89 23.042 66.123 55.033 77.496zM622.067 264.35c0-60.788-49.28-110.067-110.067-110.067s-110.067 49.28-110.067 110.067v110.066h220.135V264.35z"
}));
LockIcon.displayName = "LockIcon";
var articleItem = "";
var ArticleItem = vue.defineComponent({
  name: "ArticleItem",
  props: {
    info: {
      type: Object,
      required: true
    },
    path: { type: String, required: true }
  },
  setup(props) {
    const info = vue.toRef(props, "info");
    const { config: config2, items } = useArticleInfo(info);
    return () => vue.h("article", {
      class: "article",
      vocab: "https://schema.org/",
      typeof: "Article"
    }, [
      info.value.sticky ? vue.h(StickyIcon) : null,
      vue.h("header", { class: "title" }, vue.h(vueRouter.RouterLink, {
        to: props.path
      }, () => [
        info.value.isEncrypted ? vue.h(LockIcon) : null,
        info.value.type === "slide" ? vue.h(SlideIcon) : null,
        vue.h("span", { property: "headline" }, info.value.title),
        info.value.cover ? vue.h("meta", {
          property: "image",
          content: withBase(info.value.cover)
        }) : null
      ])),
      info.value.excerpt ? vue.h("div", { class: "excerpt", innerHTML: info.value.excerpt }) : null,
      vue.h("hr", { class: "hr" }),
      vue.h(PageInfo, {
        config: vue.unref(config2),
        ...items.value ? { items: items.value } : {}
      })
    ]);
  }
});
var pagination = "";
var Pagination = vue.defineComponent({
  name: "Pagination",
  props: {
    total: { type: Number, default: 10 },
    perPage: { type: Number, default: 10 },
    currentPage: { type: Number, default: 1 }
  },
  emits: ["updateCurrentPage"],
  setup(props, { emit }) {
    const themeLocale = useThemeLocaleData();
    const input = vue.ref("");
    const locale = vue.computed(() => themeLocale.value.paginationLocales);
    const totalPages = vue.computed(() => Math.ceil(props.total / props.perPage));
    const enable = vue.computed(() => Boolean(totalPages.value) && totalPages.value !== 1);
    const displayLeftEllipsis = vue.computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.currentPage > 4;
    });
    const displayRightEllipsis = vue.computed(() => {
      if (totalPages.value < 7)
        return false;
      return props.currentPage < totalPages.value - 3;
    });
    const indexs = vue.computed(() => {
      const { currentPage } = props;
      let min = 1;
      let max = totalPages.value;
      const arr = [];
      if (totalPages.value >= 7) {
        if (currentPage <= 4 && currentPage < totalPages.value - 3) {
          min = 1;
          max = 5;
        } else if (currentPage > 4 && currentPage >= totalPages.value - 3) {
          max = totalPages.value;
          min = totalPages.value - 4;
        } else if (totalPages.value > 7) {
          min = currentPage - 2;
          max = currentPage + 2;
        }
      }
      for (let i2 = min; i2 <= max; i2++)
        arr.push(i2);
      return arr;
    });
    const navigate = (page2) => emit("updateCurrentPage", page2);
    const jumpPage = (index2) => {
      const pageNum = parseInt(index2);
      if (pageNum <= totalPages.value && pageNum > 0)
        navigate(pageNum);
      else
        alert(locale.value.errorText.replace(/\$page/g, totalPages.value.toString()));
    };
    return () => vue.h("div", { class: "pagination-wrapper" }, enable.value ? vue.h("div", { class: "pagination-list" }, [
      vue.h("div", { class: "page-number" }, [
        props.currentPage > 1 ? vue.h("div", {
          class: "prev",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.currentPage - 1)
        }, locale.value.prev) : null,
        ...displayLeftEllipsis.value ? [
          vue.h("div", {
            role: "navigation",
            onClick: () => navigate(1)
          }, 1),
          vue.h("div", { class: "ellipsis" }, "...")
        ] : [],
        ...indexs.value.map((num) => vue.h("div", {
          key: num,
          class: { active: props.currentPage === num },
          role: "navigation",
          onClick: () => navigate(num)
        }, num)),
        ...displayRightEllipsis.value ? [
          vue.h("div", { class: "ellipsis" }, "..."),
          vue.h("div", {
            role: "navigation",
            onClick: () => navigate(totalPages.value)
          }, totalPages.value)
        ] : [],
        props.currentPage < totalPages.value ? vue.h("div", {
          class: "next",
          role: "navigation",
          unselectable: "on",
          onClick: () => navigate(props.currentPage + 1)
        }, locale.value.next) : null
      ]),
      vue.h("div", { class: "navigate-wrapper" }, [
        vue.h("label", { for: "navigation-text" }, `${locale.value.navigate}: `),
        vue.h("input", {
          id: "navigation-text",
          value: input.value,
          onInput: ({ target }) => {
            input.value = target.value;
          },
          onKeydown: (event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              jumpPage(input.value);
            }
          }
        }),
        vue.h("button", {
          class: "navigate",
          role: "navigation",
          title: locale.value.action,
          onClick: () => jumpPage(input.value)
        }, locale.value.action)
      ])
    ]) : []);
  }
});
var articleList = "";
var ArticleList = vue.defineComponent({
  name: "ArticleList",
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const router = vueRouter.useRouter();
    const blogOptions = useBlogOptions();
    const currentPage = vue.ref(1);
    const articlePerPage = vue.computed(() => blogOptions.value.articlePerPage || 10);
    const currentArticles = vue.computed(() => props.items.slice((currentPage.value - 1) * articlePerPage.value, currentPage.value * articlePerPage.value));
    const updatePage = (page2) => {
      currentPage.value = page2;
      const query = { ...route.query };
      if (query["page"] === page2.toString() || page2 === 1 && !query["page"])
        return;
      if (page2 === 1)
        delete query["page"];
      else
        query["page"] = page2.toString();
      void router.push({ path: route.path, query });
    };
    vue.watch(currentPage, () => {
      const distance = document.querySelector("#article-list").getBoundingClientRect().top + window.scrollY;
      setTimeout(() => {
        window.scrollTo(0, distance);
      }, 100);
    });
    vue.onMounted(() => {
      const { page: page2 } = route.query;
      updatePage(page2 ? Number(page2) : 1);
    });
    return () => vue.h("div", { id: "article-list", class: "article-wrapper" }, currentArticles.value.length ? [
      ...currentArticles.value.map(({ info, path }, index2) => vue.h(DropTransition, { appear: true, delay: index2 * 0.04 }, () => vue.h(ArticleItem, { key: path, info, path }))),
      vue.h(Pagination, {
        currentPage: currentPage.value,
        perPage: articlePerPage.value,
        total: props.items.length,
        onUpdateCurrentPage: updatePage
      })
    ] : vue.h(EmptyIcon));
  }
});
var defaultHeroBgImagePath = "/assets/hero.197a9d2d.jpg";
var blogHero = "";
var BlogHero = vue.defineComponent({
  name: "BlogHero",
  setup(_props, { slots }) {
    const title = usePageHeadTitle();
    const frontmatter = usePageFrontmatter();
    const hero = vue.ref(null);
    const heroImage = vue.computed(() => frontmatter.value.heroImage || null);
    const isFullScreen = vue.computed(() => frontmatter.value.heroFullScreen || false);
    const heroImageStyle = vue.computed(() => {
      const defaultStyle = {
        maxHeight: "180px",
        margin: frontmatter.value.heroText === false ? "6rem auto 1.5rem" : "1rem auto"
      };
      return {
        ...defaultStyle,
        ...frontmatter.value.heroImageStyle
      };
    });
    const bgImage = vue.computed(() => {
      var _a;
      return frontmatter.value.bgImage ? withBase(frontmatter.value.bgImage) : (_a = frontmatter.value.bgImage) != null ? _a : defaultHeroBgImagePath;
    });
    const bgImageStyle = vue.computed(() => {
      const defaultStyle = {
        height: "350px",
        textAlign: "center",
        overflow: "hidden"
      };
      return {
        ...defaultStyle,
        ...frontmatter.value.bgImageStyle
      };
    });
    return () => {
      var _a;
      return frontmatter.value.hero !== false ? vue.h("div", {
        ref: hero,
        class: ["blog-hero", { fullscreen: isFullScreen.value }],
        style: bgImageStyle.value
      }, [
        bgImage.value ? vue.h("div", {
          class: "mask",
          style: {
            background: `url(${bgImage.value}) center/cover no-repeat`
          }
        }) : null,
        ((_a = slots["heroImage"]) == null ? void 0 : _a.call(slots)) || vue.h(DropTransition, { appear: true, delay: 0.04 }, () => heroImage.value ? vue.h("img", {
          class: "hero-image",
          style: heroImageStyle.value,
          src: withBase(heroImage.value),
          alt: frontmatter.value.heroAlt || "hero image"
        }) : null),
        vue.h(DropTransition, { appear: true, delay: 0.08 }, () => frontmatter.value.heroText !== false ? vue.h("h1", frontmatter.value.heroText || title.value) : null),
        vue.h(DropTransition, { appear: true, delay: 0.12 }, () => frontmatter.value.tagline ? vue.h("p", {
          class: "description",
          innerHTML: frontmatter.value.tagline
        }) : null),
        isFullScreen.value ? vue.h("button", {
          class: "slide-down-button",
          onClick: () => {
            window.scrollTo({
              top: hero.value.clientHeight,
              behavior: "smooth"
            });
          }
        }, [vue.h(SlideDownIcon), vue.h(SlideDownIcon)]) : null
      ]) : null;
    };
  }
});
var categoryList = "";
var CategoryList = vue.defineComponent({
  name: "CategoryList",
  setup() {
    const route = vueRouter.useRoute();
    const categoryMap2 = useCategoryMap();
    return () => vue.h("ul", { class: "category-list-wrapper" }, Object.entries(categoryMap2.value.map).map(([category2, { path, items }]) => vue.h("li", {
      class: [
        "category",
        `category${D(category2, 9)}`,
        { active: path === route.path }
      ]
    }, vue.h(vueRouter.RouterLink, { to: path }, () => [
      category2,
      vue.h("span", { class: "category-num" }, items.length)
    ]))));
  }
});
var tagList = "";
var TagList = vue.defineComponent({
  name: "TagList",
  setup() {
    const frontmatter = usePageFrontmatter();
    const tagMap = useTagMap();
    const tagList2 = vue.computed(() => Object.entries(tagMap.value.map).map(([name, { path }]) => ({
      name,
      path
    })));
    const isActive = (name) => {
      var _a;
      return name === ((_a = frontmatter.value.blog) == null ? void 0 : _a.name);
    };
    return () => vue.h("ul", { class: "tag-list-wrapper" }, tagList2.value.map(({ name, path }) => vue.h("li", {
      class: [
        "tag",
        `tag${D(name, 9)}`,
        { active: isActive(name) }
      ]
    }, vue.h(vueRouter.RouterLink, { to: path }, () => vue.h("div", { class: "tag-name" }, name)))));
  }
});
var timelineList = "";
var TimelineList = vue.defineComponent({
  name: "TimelineList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const navigate = useNavigate();
    const hint = vue.computed(() => themeLocale.value.blogLocales.timeline);
    return () => vue.h("div", { class: "timeline-list-wrapper" }, [
      vue.h("div", {
        class: "timeline-list-title",
        onClick: () => navigate(timelines.value.path)
      }, [
        vue.h(TimelineIcon),
        vue.h("span", { class: "num" }, timelines.value.items.length),
        hint.value
      ]),
      vue.h("hr"),
      vue.h("div", { class: "timeline-content" }, vue.h("ul", { class: "timeline-list" }, timelines.value.config.map(({ year, items }, index2) => vue.h(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => vue.h("li", [
        vue.h("h3", { class: "timeline-year" }, year),
        vue.h("ul", { class: "timeline-year-wrapper" }, items.map(({ date, info, path }) => vue.h("li", { class: "timeline-item" }, [
          vue.h("span", { class: "timeline-date" }, date),
          vue.h(vueRouter.RouterLink, {
            class: "timeline-title",
            to: path
          }, () => info.title)
        ])))
      ])))))
    ]);
  }
});
var infoList = "";
var InfoList = vue.defineComponent({
  name: "InfoList",
  setup() {
    const themeLocale = useThemeLocaleData();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const categoryNumber = vue.computed(() => Object.keys(categoryMap2.value.map).length);
    const stars = useStars();
    const tagMap = useTagMap();
    const tagNumber = vue.computed(() => Object.keys(tagMap.value.map).length);
    const navigate = useNavigate();
    const active = vue.ref("article");
    const locale = vue.computed(() => themeLocale.value.blogLocales);
    const buttons = [
      ["article", ArticleIcon],
      ["category", CategoryIcon],
      ["tag", TagIcon],
      ["timeline", TimelineIcon]
    ];
    return () => vue.h("div", { class: "blog-info-list" }, [
      vue.h("div", { class: "blog-type-wrapper" }, buttons.map(([key, icon]) => vue.h("button", {
        class: "blog-type-button",
        onClick: () => {
          active.value = key;
        }
      }, vue.h("div", {
        class: ["icon-wapper", { active: active.value === key }],
        "aria-label": locale.value[key],
        "data-balloon-pos": "up"
      }, vue.h(icon))))),
      active.value === "article" ? vue.h(DropTransition, () => [
        vue.h("div", { class: "sticky-article-wrapper" }, [
          vue.h("div", {
            class: "title",
            onClick: () => navigate(articles.value.path)
          }, [
            vue.h(ArticleIcon),
            vue.h("span", { class: "num" }, articles.value.items.length),
            locale.value.article
          ]),
          vue.h("hr"),
          vue.h("ul", { class: "sticky-article-list" }, stars.value.items.map(({ info, path }, index2) => vue.h(DropTransition, { appear: true, delay: 0.08 * (index2 + 1) }, () => vue.h("li", {
            class: "sticky-article",
            onClick: () => navigate(path)
          }, info.title))))
        ])
      ]) : null,
      active.value === "category" ? vue.h(DropTransition, () => [
        vue.h("div", { class: "category-wrapper" }, [
          categoryNumber.value ? vue.h("div", {
            class: "title",
            onClick: () => navigate(categoryMap2.value.path)
          }, [
            vue.h(CategoryIcon),
            vue.h("span", { class: "num" }, categoryNumber.value),
            locale.value.category
          ]) : null,
          vue.h("hr"),
          vue.h(DropTransition, { delay: 0.04 }, () => vue.h(CategoryList))
        ])
      ]) : null,
      active.value === "tag" ? vue.h(DropTransition, () => [
        vue.h("div", { class: "tag-wrapper" }, [
          tagNumber.value ? vue.h("div", {
            class: "title",
            onClick: () => navigate(tagMap.value.path)
          }, [
            vue.h(TagIcon),
            vue.h("span", { class: "num" }, tagNumber.value),
            locale.value.tag
          ]) : null,
          vue.h("hr"),
          vue.h(DropTransition, { delay: 0.04 }, () => vue.h(TagList))
        ])
      ]) : null,
      active.value === "timeline" ? vue.h(DropTransition, () => vue.h(TimelineList)) : null
    ]);
  }
});
var infoPanel = "";
const InfoPanel = () => vue.h("aside", { class: "blog-info-wrapper" }, [
  vue.h(DropTransition, () => vue.h(BloggerInfo)),
  vue.h(DropTransition, { delay: 0.04 }, () => vue.h(InfoList))
]);
InfoPanel.displayName = "InfoPanel";
var InfoPanel$1 = InfoPanel;
var projectPanel = "";
const AVAILABLE_PROJECT_TYPES = [
  "link",
  "article",
  "book",
  "project",
  "friend"
];
var ProjectPanel = vue.defineComponent({
  name: "ProjectPanel",
  components: { ArticleIcon, BookIcon, FriendIcon, LinkIcon, ProjectIcon },
  setup() {
    const frontmatter = usePageFrontmatter();
    const pure = usePure();
    const navigate = useNavigate();
    const renderIcon = (icon = "", alt = "icon") => {
      if (AVAILABLE_PROJECT_TYPES.includes(icon))
        return vue.h(vue.resolveComponent(`${icon}-icon`));
      if (icon.match(/^https?:\/\//))
        return vue.h("img", { src: icon, alt, class: "image" });
      if (icon.startsWith("/"))
        return vue.h("img", { src: withBase(icon), alt, class: "image" });
      return vue.h(vue.resolveComponent("FontIcon"), { icon });
    };
    return () => {
      var _a;
      return ((_a = frontmatter.value.projects) == null ? void 0 : _a.length) ? vue.h("div", { class: "project-panel" }, frontmatter.value.projects.map(({ icon, link, name, desc }, index2) => vue.h("div", {
        class: [
          "project",
          { [`project${index2 % 9}`]: !pure.value }
        ],
        onClick: () => navigate(link)
      }, [
        renderIcon(icon, name),
        vue.h("div", { class: "name" }, name),
        vue.h("div", { class: "desc" }, desc)
      ]))) : null;
    };
  }
});
var home = "";
var BlogHome = vue.defineComponent({
  name: "BlogHome",
  setup() {
    const articles = useArticles();
    return () => vue.h("div", { class: "page blog" }, [
      vue.h(BlogHero),
      vue.h("div", { class: "blog-page-wrapper" }, [
        vue.h("main", { class: "blog-home", id: "main-content" }, [
          vue.h(DropTransition, { appear: true, delay: 0.16 }, () => vue.h(ProjectPanel)),
          vue.h(DropTransition, { appear: true, delay: 0.24 }, () => vue.h(ArticleList, { items: articles.value.items }))
        ]),
        vue.h(DropTransition, { appear: true, delay: 0.16 }, () => vue.h(InfoPanel$1))
      ]),
      vue.h(DropTransition, { appear: true, delay: 0.28 }, () => vue.h(MarkdownContent$1))
    ]);
  }
});
var articleType = "";
var ArticleType = vue.defineComponent({
  name: "ArticleType",
  setup() {
    const themeLocale = useThemeLocaleData();
    const route = vueRouter.useRoute();
    const articles = useArticles();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const types = vue.computed(() => {
      const locale = themeLocale.value.blogLocales;
      return [
        {
          text: locale.all,
          path: articles.value.path
        },
        { text: locale.star, path: stars.value.path },
        { text: locale.slides, path: slides.value.path },
        { text: locale.encrypt, path: encryptedArticles.value.path }
      ];
    });
    return () => vue.h("ul", { class: "article-type-wrapper" }, types.value.map((type2) => vue.h("li", {
      class: ["article-type", { active: type2.path === route.path }]
    }, vue.h(vueRouter.RouterLink, { to: type2.path }, () => type2.text))));
  }
});
var timelineItems = "";
var TimelineItems = vue.defineComponent({
  name: "TimelineItems",
  setup() {
    const blogOptions = useBlogOptions();
    const themeLocale = useThemeLocaleData();
    const timelines = useTimelines();
    const hint = vue.computed(() => blogOptions.value.timeline || themeLocale.value.blogLocales.timelineTitle);
    const items = vue.computed(() => timelines.value.config.map(({ year }) => ({
      title: year.toString(),
      level: 2,
      slug: year.toString(),
      children: []
    })));
    return () => vue.h("div", { class: "timeline-wrapper" }, vue.h("ul", { class: "timeline-content" }, [
      vue.h(DropTransition, () => vue.h("li", { class: "motto" }, hint.value)),
      vue.h(TOC, { items: items.value }),
      ...timelines.value.config.map(({ year, items: items2 }, index2) => vue.h(DropTransition, { appear: true, delay: 0.08 * (index2 + 1), type: "group" }, () => [
        vue.h("h3", { key: "title", id: year, class: "timeline-year-title" }, vue.h("span", year)),
        vue.h("li", { key: "content", class: "timeline-year-list" }, [
          vue.h("ul", { class: "timeline-year-wrapper" }, items2.map(({ date, info, path }) => vue.h("li", { class: "timeline-item" }, [
            vue.h("span", { class: "timeline-date" }, date),
            vue.h(vueRouter.RouterLink, {
              class: "timeline-title",
              to: path
            }, () => info.title)
          ])))
        ])
      ]))
    ]));
  }
});
var page = "";
var BlogPage = vue.defineComponent({
  name: "BlogPage",
  components: {
    ArticleType,
    CategoryList,
    TagList
  },
  setup() {
    const frontmatter = usePageFrontmatter();
    const route = vueRouter.useRoute();
    const articles = useArticles();
    const categoryMap2 = useCategoryMap();
    const encryptedArticles = useEncryptedArticles();
    const slides = useSlides();
    const stars = useStars();
    const tagMap = useTagMap();
    const componentName = vue.computed(() => {
      const { key } = frontmatter.value.blog || {};
      return key === "category" ? "CategoryList" : key === "tag" ? "TagList" : key === "timeline" ? "" : "ArticleType";
    });
    const items = vue.computed(() => {
      const { name = "", key = "" } = frontmatter.value.blog || {};
      return key === "encrypted" ? encryptedArticles.value.items : key === "star" ? stars.value.items : key === "slide" ? slides.value.items : key === "timeline" ? [] : key === "category" ? name ? categoryMap2.value.map[name].items : [] : key === "tag" ? name ? tagMap.value.map[name].items : [] : articles.value.items;
    });
    return () => vue.h("main", { class: "blog-page" }, [
      vue.h(DropTransition, () => componentName.value ? vue.h(vue.resolveComponent(componentName.value)) : null),
      vue.h(DropTransition, { appear: true, delay: 0.24 }, () => {
        var _a;
        return ((_a = frontmatter.value.blog) == null ? void 0 : _a.key) === "timeline" ? vue.h(TimelineItems) : vue.h(ArticleList, { key: route.path, items: items.value });
      })
    ]);
  }
});
var layout$1 = "";
var passwordModal = "";
var PasswordModal = vue.defineComponent({
  name: "PasswordModal",
  props: {
    full: Boolean
  },
  emits: ["verify"],
  setup(props, { emit }) {
    const frontmatter = usePageFrontmatter();
    const themeLocale = useThemeLocaleData();
    const password = vue.ref("");
    const hasTried = vue.ref(false);
    const remember = vue.ref(false);
    const locale = vue.computed(() => themeLocale.value.encryptLocales);
    let hintHandler = null;
    const verify = () => {
      if (hintHandler)
        clearTimeout(hintHandler);
      hasTried.value = false;
      emit("verify", password.value, remember.value);
      void vue.nextTick().then(() => {
        hasTried.value = true;
        hintHandler = setTimeout(() => {
          hasTried.value = false;
        }, 1e3);
      });
    };
    return () => vue.h("div", {
      class: [
        "password-layer",
        { expand: props.full || frontmatter.value["home"] }
      ]
    }, vue.h("div", { class: "password-modal" }, [
      vue.h("div", { class: ["hint", { tried: hasTried.value }] }, hasTried.value ? locale.value.errorHint : vue.h(LockIcon, { "aria-label": locale.value.iconLabel })),
      vue.h("div", { class: "password" }, [
        vue.h("input", {
          type: "password",
          value: password.value,
          placeholder: locale.value.placeholder,
          onInput: ({ target }) => {
            password.value = target.value;
          },
          onKeydown: ({ key }) => {
            if (key === "Enter")
              verify();
          }
        })
      ]),
      vue.h("div", { class: "remember-password" }, [
        vue.h("input", {
          type: "checkbox",
          value: remember.value,
          onChange: () => remember.value = !remember.value
        }),
        vue.h("span", locale.value.remember)
      ]),
      vue.h("button", { class: "submit", onClick: () => verify() }, "OK")
    ]));
  }
});
const r$1 = "./ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), t = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 1, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, -1, -1, -1, -1, -1, -1, -1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, -1, -1, -1, -1, -1, -1, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, -1, -1, -1, -1, -1], e = [608135816, 2242054355, 320440878, 57701188, 2752067618, 698298832, 137296536, 3964562569, 1160258022, 953160567, 3193202383, 887688300, 3232508343, 3380367581, 1065670069, 3041331479, 2450970073, 2306472731], n = [3509652390, 2564797868, 805139163, 3491422135, 3101798381, 1780907670, 3128725573, 4046225305, 614570311, 3012652279, 134345442, 2240740374, 1667834072, 1901547113, 2757295779, 4103290238, 227898511, 1921955416, 1904987480, 2182433518, 2069144605, 3260701109, 2620446009, 720527379, 3318853667, 677414384, 3393288472, 3101374703, 2390351024, 1614419982, 1822297739, 2954791486, 3608508353, 3174124327, 2024746970, 1432378464, 3864339955, 2857741204, 1464375394, 1676153920, 1439316330, 715854006, 3033291828, 289532110, 2706671279, 2087905683, 3018724369, 1668267050, 732546397, 1947742710, 3462151702, 2609353502, 2950085171, 1814351708, 2050118529, 680887927, 999245976, 1800124847, 3300911131, 1713906067, 1641548236, 4213287313, 1216130144, 1575780402, 4018429277, 3917837745, 3693486850, 3949271944, 596196993, 3549867205, 258830323, 2213823033, 772490370, 2760122372, 1774776394, 2652871518, 566650946, 4142492826, 1728879713, 2882767088, 1783734482, 3629395816, 2517608232, 2874225571, 1861159788, 326777828, 3124490320, 2130389656, 2716951837, 967770486, 1724537150, 2185432712, 2364442137, 1164943284, 2105845187, 998989502, 3765401048, 2244026483, 1075463327, 1455516326, 1322494562, 910128902, 469688178, 1117454909, 936433444, 3490320968, 3675253459, 1240580251, 122909385, 2157517691, 634681816, 4142456567, 3825094682, 3061402683, 2540495037, 79693498, 3249098678, 1084186820, 1583128258, 426386531, 1761308591, 1047286709, 322548459, 995290223, 1845252383, 2603652396, 3431023940, 2942221577, 3202600964, 3727903485, 1712269319, 422464435, 3234572375, 1170764815, 3523960633, 3117677531, 1434042557, 442511882, 3600875718, 1076654713, 1738483198, 4213154764, 2393238008, 3677496056, 1014306527, 4251020053, 793779912, 2902807211, 842905082, 4246964064, 1395751752, 1040244610, 2656851899, 3396308128, 445077038, 3742853595, 3577915638, 679411651, 2892444358, 2354009459, 1767581616, 3150600392, 3791627101, 3102740896, 284835224, 4246832056, 1258075500, 768725851, 2589189241, 3069724005, 3532540348, 1274779536, 3789419226, 2764799539, 1660621633, 3471099624, 4011903706, 913787905, 3497959166, 737222580, 2514213453, 2928710040, 3937242737, 1804850592, 3499020752, 2949064160, 2386320175, 2390070455, 2415321851, 4061277028, 2290661394, 2416832540, 1336762016, 1754252060, 3520065937, 3014181293, 791618072, 3188594551, 3933548030, 2332172193, 3852520463, 3043980520, 413987798, 3465142937, 3030929376, 4245938359, 2093235073, 3534596313, 375366246, 2157278981, 2479649556, 555357303, 3870105701, 2008414854, 3344188149, 4221384143, 3956125452, 2067696032, 3594591187, 2921233993, 2428461, 544322398, 577241275, 1471733935, 610547355, 4027169054, 1432588573, 1507829418, 2025931657, 3646575487, 545086370, 48609733, 2200306550, 1653985193, 298326376, 1316178497, 3007786442, 2064951626, 458293330, 2589141269, 3591329599, 3164325604, 727753846, 2179363840, 146436021, 1461446943, 4069977195, 705550613, 3059967265, 3887724982, 4281599278, 3313849956, 1404054877, 2845806497, 146425753, 1854211946, 1266315497, 3048417604, 3681880366, 3289982499, 290971e4, 1235738493, 2632868024, 2414719590, 3970600049, 1771706367, 1449415276, 3266420449, 422970021, 1963543593, 2690192192, 3826793022, 1062508698, 1531092325, 1804592342, 2583117782, 2714934279, 4024971509, 1294809318, 4028980673, 1289560198, 2221992742, 1669523910, 35572830, 157838143, 1052438473, 1016535060, 1802137761, 1753167236, 1386275462, 3080475397, 2857371447, 1040679964, 2145300060, 2390574316, 1461121720, 2956646967, 4031777805, 4028374788, 33600511, 2920084762, 1018524850, 629373528, 3691585981, 3515945977, 2091462646, 2486323059, 586499841, 988145025, 935516892, 3367335476, 2599673255, 2839830854, 265290510, 3972581182, 2759138881, 3795373465, 1005194799, 847297441, 406762289, 1314163512, 1332590856, 1866599683, 4127851711, 750260880, 613907577, 1450815602, 3165620655, 3734664991, 3650291728, 3012275730, 3704569646, 1427272223, 778793252, 1343938022, 2676280711, 2052605720, 1946737175, 3164576444, 3914038668, 3967478842, 3682934266, 1661551462, 3294938066, 4011595847, 840292616, 3712170807, 616741398, 312560963, 711312465, 1351876610, 322626781, 1910503582, 271666773, 2175563734, 1594956187, 70604529, 3617834859, 1007753275, 1495573769, 4069517037, 2549218298, 2663038764, 504708206, 2263041392, 3941167025, 2249088522, 1514023603, 1998579484, 1312622330, 694541497, 2582060303, 2151582166, 1382467621, 776784248, 2618340202, 3323268794, 2497899128, 2784771155, 503983604, 4076293799, 907881277, 423175695, 432175456, 1378068232, 4145222326, 3954048622, 3938656102, 3820766613, 2793130115, 2977904593, 26017576, 3274890735, 3194772133, 1700274565, 1756076034, 4006520079, 3677328699, 720338349, 1533947780, 354530856, 688349552, 3973924725, 1637815568, 332179504, 3949051286, 53804574, 2852348879, 3044236432, 1282449977, 3583942155, 3416972820, 4006381244, 1617046695, 2628476075, 3002303598, 1686838959, 431878346, 2686675385, 1700445008, 1080580658, 1009431731, 832498133, 3223435511, 2605976345, 2271191193, 2516031870, 1648197032, 4164389018, 2548247927, 300782431, 375919233, 238389289, 3353747414, 2531188641, 2019080857, 1475708069, 455242339, 2609103871, 448939670, 3451063019, 1395535956, 2413381860, 1841049896, 1491858159, 885456874, 4264095073, 4001119347, 1565136089, 3898914787, 1108368660, 540939232, 1173283510, 2745871338, 3681308437, 4207628240, 3343053890, 4016749493, 1699691293, 1103962373, 3625875870, 2256883143, 3830138730, 1031889488, 3479347698, 1535977030, 4236805024, 3251091107, 2132092099, 1774941330, 1199868427, 1452454533, 157007616, 2904115357, 342012276, 595725824, 1480756522, 206960106, 497939518, 591360097, 863170706, 2375253569, 3596610801, 1814182875, 2094937945, 3421402208, 1082520231, 3463918190, 2785509508, 435703966, 3908032597, 1641649973, 2842273706, 3305899714, 1510255612, 2148256476, 2655287854, 3276092548, 4258621189, 236887753, 3681803219, 274041037, 1734335097, 3815195456, 3317970021, 1899903192, 1026095262, 4050517792, 356393447, 2410691914, 3873677099, 3682840055, 3913112168, 2491498743, 4132185628, 2489919796, 1091903735, 1979897079, 3170134830, 3567386728, 3557303409, 857797738, 1136121015, 1342202287, 507115054, 2535736646, 337727348, 3213592640, 1301675037, 2528481711, 1895095763, 1721773893, 3216771564, 62756741, 2142006736, 835421444, 2531993523, 1442658625, 3659876326, 2882144922, 676362277, 1392781812, 170690266, 3921047035, 1759253602, 3611846912, 1745797284, 664899054, 1329594018, 3901205900, 3045908486, 2062866102, 2865634940, 3543621612, 3464012697, 1080764994, 553557557, 3656615353, 3996768171, 991055499, 499776247, 1265440854, 648242737, 3940784050, 980351604, 3713745714, 1749149687, 3396870395, 4211799374, 3640570775, 1161844396, 3125318951, 1431517754, 545492359, 4268468663, 3499529547, 1437099964, 2702547544, 3433638243, 2581715763, 2787789398, 1060185593, 1593081372, 2418618748, 4260947970, 69676912, 2159744348, 86519011, 2512459080, 3838209314, 1220612927, 3339683548, 133810670, 1090789135, 1078426020, 1569222167, 845107691, 3583754449, 4072456591, 1091646820, 628848692, 1613405280, 3757631651, 526609435, 236106946, 48312990, 2942717905, 3402727701, 1797494240, 859738849, 992217954, 4005476642, 2243076622, 3870952857, 3732016268, 765654824, 3490871365, 2511836413, 1685915746, 3888969200, 1414112111, 2273134842, 3281911079, 4080962846, 172450625, 2569994100, 980381355, 4109958455, 2819808352, 2716589560, 2568741196, 3681446669, 3329971472, 1835478071, 660984891, 3704678404, 4045999559, 3422617507, 3040415634, 1762651403, 1719377915, 3470491036, 2693910283, 3642056355, 3138596744, 1364962596, 2073328063, 1983633131, 926494387, 3423689081, 2150032023, 4096667949, 1749200295, 3328846651, 309677260, 2016342300, 1779581495, 3079819751, 111262694, 1274766160, 443224088, 298511866, 1025883608, 3806446537, 1145181785, 168956806, 3641502830, 3584813610, 1689216846, 3666258015, 3200248200, 1692713982, 2646376535, 4042768518, 1618508792, 1610833997, 3523052358, 4130873264, 2001055236, 3610705100, 2202168115, 4028541809, 2961195399, 1006657119, 2006996926, 3186142756, 1430667929, 3210227297, 1314452623, 4074634658, 4101304120, 2273951170, 1399257539, 3367210612, 3027628629, 1190975929, 2062231137, 2333990788, 2221543033, 2438960610, 1181637006, 548689776, 2362791313, 3372408396, 3104550113, 3145860560, 296247880, 1970579870, 3078560182, 3769228297, 1714227617, 3291629107, 3898220290, 166772364, 1251581989, 493813264, 448347421, 195405023, 2709975567, 677966185, 3703036547, 1463355134, 2715995803, 1338867538, 1343315457, 2802222074, 2684532164, 233230375, 2599980071, 2000651841, 3277868038, 1638401717, 4028070440, 3237316320, 6314154, 819756386, 300326615, 590932579, 1405279636, 3267499572, 3150704214, 2428286686, 3959192993, 3461946742, 1862657033, 1266418056, 963775037, 2089974820, 2263052895, 1917689273, 448879540, 3550394620, 3981727096, 150775221, 3627908307, 1303187396, 508620638, 2975983352, 2726630617, 1817252668, 1876281319, 1457606340, 908771278, 3720792119, 3617206836, 2455994898, 1729034894, 1080033504, 976866871, 3556439503, 2881648439, 1522871579, 1555064734, 1336096578, 3548522304, 2579274686, 3574697629, 3205460757, 3593280638, 3338716283, 3079412587, 564236357, 2993598910, 1781952180, 1464380207, 3163844217, 3332601554, 1699332808, 1393555694, 1183702653, 3581086237, 1288719814, 691649499, 2847557200, 2895455976, 3193889540, 2717570544, 1781354906, 1676643554, 2592534050, 3230253752, 1126444790, 2770207658, 2633158820, 2210423226, 2615765581, 2414155088, 3127139286, 673620729, 2805611233, 1269405062, 4015350505, 3341807571, 4149409754, 1057255273, 2012875353, 2162469141, 2276492801, 2601117357, 993977747, 3918593370, 2654263191, 753973209, 36408145, 2530585658, 25011837, 3520020182, 2088578344, 530523599, 2918365339, 1524020338, 1518925132, 3760827505, 3759777254, 1202760957, 3985898139, 3906192525, 674977740, 4174734889, 2031300136, 2019492241, 3983892565, 4153806404, 3822280332, 352677332, 2297720250, 60907813, 90501309, 3286998549, 1016092578, 2535922412, 2839152426, 457141659, 509813237, 4120667899, 652014361, 1966332200, 2975202805, 55981186, 2327461051, 676427537, 3255491064, 2882294119, 3433927263, 1307055953, 942726286, 933058658, 2468411793, 3933900994, 4215176142, 1361170020, 2001714738, 2830558078, 3274259782, 1222529897, 1679025792, 2729314320, 3714953764, 1770335741, 151462246, 3013232138, 1682292957, 1483529935, 471910574, 1539241949, 458788160, 3436315007, 1807016891, 3718408830, 978976581, 1043663428, 3165965781, 1927990952, 4200891579, 2372276910, 3208408903, 3533431907, 1412390302, 2931980059, 4132332400, 1947078029, 3881505623, 4168226417, 2941484381, 1077988104, 1320477388, 886195818, 18198404, 3786409e3, 2509781533, 112762804, 3463356488, 1866414978, 891333506, 18488651, 661792760, 1628790961, 3885187036, 3141171499, 876946877, 2693282273, 1372485963, 791857591, 2686433993, 3759982718, 3167212022, 3472953795, 2716379847, 445679433, 3561995674, 3504004811, 3574258232, 54117162, 3331405415, 2381918588, 3769707343, 4154350007, 1140177722, 4074052095, 668550556, 3214352940, 367459370, 261225585, 2610173221, 4209349473, 3468074219, 3265815641, 314222801, 3066103646, 3808782860, 282218597, 3406013506, 3773591054, 379116347, 1285071038, 846784868, 2669647154, 3771962079, 3550491691, 2305946142, 453669953, 1268987020, 3317592352, 3279303384, 3744833421, 2610507566, 3859509063, 266596637, 3847019092, 517658769, 3462560207, 3443424879, 370717030, 4247526661, 2224018117, 4143653529, 4112773975, 2788324899, 2477274417, 1456262402, 2901442914, 1517677493, 1846949527, 2295493580, 3734397586, 2176403920, 1280348187, 1908823572, 3871786941, 846861322, 1172426758, 3287448474, 3383383037, 1655181056, 3139813346, 901632758, 1897031941, 2986607138, 3066810236, 3447102507, 1393639104, 373351379, 950779232, 625454576, 3124240540, 4148612726, 2007998917, 544563296, 2244738638, 2330496472, 2058025392, 1291430526, 424198748, 50039436, 29584100, 3605783033, 2429876329, 2791104160, 1057563949, 3255363231, 3075367218, 3463963227, 1469046755, 985887462], o = [1332899944, 1700884034, 1701343084, 1684370003, 1668446532, 1869963892], s = (t2, e2) => {
  if (e2 <= 0 || e2 > t2.length)
    throw Error(`Illegal len: ${e2}`);
  let n2, o2, s2 = 0;
  const l2 = [];
  for (; s2 < e2; ) {
    if (n2 = 255 & t2[s2++], l2.push(r$1[n2 >> 2 & 63]), n2 = (3 & n2) << 4, s2 >= e2) {
      l2.push(r$1[63 & n2]);
      break;
    }
    if (o2 = 255 & t2[s2++], n2 |= o2 >> 4 & 15, l2.push(r$1[63 & n2]), n2 = (15 & o2) << 2, s2 >= e2) {
      l2.push(r$1[63 & n2]);
      break;
    }
    o2 = 255 & t2[s2++], n2 |= o2 >> 6 & 3, l2.push(r$1[63 & n2]), l2.push(r$1[63 & o2]);
  }
  return l2.join("");
}, l = (r2, e2) => {
  if (e2 <= 0)
    throw Error(`Illegal len: ${e2}`);
  const n2 = r2.length;
  let o2, s2, l2, f2, i2, u2, h2 = 0, p2 = 0;
  const a2 = [];
  for (; h2 < n2 - 1 && p2 < e2 && (u2 = r2.charCodeAt(h2++), o2 = u2 < t.length ? t[u2] : -1, u2 = r2.charCodeAt(h2++), s2 = u2 < t.length ? t[u2] : -1, -1 != o2 && -1 != s2) && (i2 = o2 << 2 >>> 0, i2 |= (48 & s2) >> 4, a2.push(String.fromCharCode(i2)), !(++p2 >= e2 || h2 >= n2)) && (u2 = r2.charCodeAt(h2++), l2 = u2 < t.length ? t[u2] : -1, -1 != l2) && (i2 = (15 & s2) << 4 >>> 0, i2 |= (60 & l2) >> 2, a2.push(String.fromCharCode(i2)), !(++p2 >= e2 || h2 >= n2)); )
    u2 = r2.charCodeAt(h2++), f2 = u2 < t.length ? t[u2] : -1, i2 = (3 & l2) << 6 >>> 0, i2 |= f2, a2.push(String.fromCharCode(i2)), ++p2;
  return a2.map((r3) => r3.charCodeAt(0));
}, f = "undefined" != typeof process && process && "function" == typeof process.nextTick ? "function" == typeof setImmediate ? setImmediate : process.nextTick : setTimeout, i$1 = (r2, t2, e2, n2) => {
  let o2, s2 = r2[t2], l2 = r2[t2 + 1];
  return s2 ^= e2[0], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[1], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[2], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[3], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[4], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[5], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[6], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[7], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[8], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[9], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[10], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[11], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[12], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[13], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[14], o2 = n2[s2 >>> 24], o2 += n2[256 | s2 >> 16 & 255], o2 ^= n2[512 | s2 >> 8 & 255], o2 += n2[768 | 255 & s2], l2 ^= o2 ^ e2[15], o2 = n2[l2 >>> 24], o2 += n2[256 | l2 >> 16 & 255], o2 ^= n2[512 | l2 >> 8 & 255], o2 += n2[768 | 255 & l2], s2 ^= o2 ^ e2[16], r2[t2] = l2 ^ e2[17], r2[t2 + 1] = s2, r2;
}, u$1 = (r2, t2) => {
  let e2 = 0;
  for (let n2 = 0; n2 < 4; ++n2)
    e2 = e2 << 8 | 255 & r2[t2], t2 = (t2 + 1) % r2.length;
  return { key: e2, offp: t2 };
}, h = (r2, t2, e2) => {
  const n2 = t2.length, o2 = e2.length;
  let s2, l2 = 0, f2 = [0, 0];
  for (let e3 = 0; e3 < n2; e3++)
    s2 = u$1(r2, l2), l2 = s2.offp, t2[e3] = t2[e3] ^ s2.key;
  for (let r3 = 0; r3 < n2; r3 += 2)
    f2 = i$1(f2, 0, t2, e2), t2[r3] = f2[0], t2[r3 + 1] = f2[1];
  for (let r3 = 0; r3 < o2; r3 += 2)
    f2 = i$1(f2, 0, t2, e2), e2[r3] = f2[0], e2[r3 + 1] = f2[1];
}, p = (r2, t2, s2, l2, p2) => {
  const a2 = o.slice(), g = a2.length;
  if (s2 < 4 || s2 > 31) {
    const r3 = new Error(`Illegal number of rounds (4-31): ${s2}`);
    if (false === l2)
      return Promise.reject(r3);
    throw r3;
  }
  if (16 !== t2.length) {
    const r3 = new Error(`Illegal salt length: ${t2.length} != 16`);
    if (false === l2)
      return Promise.reject(r3);
    throw r3;
  }
  let c2, y2;
  s2 = 1 << s2 >>> 0;
  let m2, w2 = 0;
  Int32Array ? (c2 = new Int32Array(e), y2 = new Int32Array(n)) : (c2 = e.slice(), y2 = n.slice()), ((r3, t3, e2, n2) => {
    const o2 = e2.length, s3 = n2.length;
    let l3, f2 = 0, h2 = [0, 0];
    for (let r4 = 0; r4 < o2; r4++)
      l3 = u$1(t3, f2), f2 = l3.offp, e2[r4] = e2[r4] ^ l3.key;
    f2 = 0;
    for (let t4 = 0; t4 < o2; t4 += 2)
      l3 = u$1(r3, f2), f2 = l3.offp, h2[0] ^= l3.key, l3 = u$1(r3, f2), f2 = l3.offp, h2[1] ^= l3.key, h2 = i$1(h2, 0, e2, n2), e2[t4] = h2[0], e2[t4 + 1] = h2[1];
    for (let t4 = 0; t4 < s3; t4 += 2)
      l3 = u$1(r3, f2), f2 = l3.offp, h2[0] ^= l3.key, l3 = u$1(r3, f2), f2 = l3.offp, h2[1] ^= l3.key, h2 = i$1(h2, 0, e2, n2), n2[t4] = h2[0], n2[t4 + 1] = h2[1];
  })(t2, r2, c2, y2);
  const d2 = () => {
    if (p2 && p2(w2 / s2), !(w2 < s2)) {
      for (w2 = 0; w2 < 64; w2++)
        for (m2 = 0; m2 < g >> 1; m2++)
          i$1(a2, m2 << 1, c2, y2);
      const r3 = [];
      for (w2 = 0; w2 < g; w2++)
        r3.push((a2[w2] >> 24 & 255) >>> 0), r3.push((a2[w2] >> 16 & 255) >>> 0), r3.push((a2[w2] >> 8 & 255) >>> 0), r3.push((255 & a2[w2]) >>> 0);
      return false === l2 ? Promise.resolve(r3) : r3;
    }
    {
      const e2 = Date.now();
      for (; w2 < s2 && (w2 += 1, h(r2, c2, y2), h(t2, c2, y2), !(Date.now() - e2 > 100)); )
        ;
    }
    if (false === l2)
      return new Promise((r3) => f(() => {
        d2().then(r3);
      }));
  };
  if (false === l2)
    return d2();
  {
    let r3;
    for (; ; )
      if (void 0 !== (r3 = d2()))
        return r3 || [];
  }
}, a = (r2 = 10) => {
  if ("number" != typeof r2)
    throw Error("Illegal arguments: " + typeof r2);
  r2 < 4 ? r2 = 4 : r2 > 31 && (r2 = 31);
  const t2 = [];
  return t2.push("$2a$"), r2 < 10 && t2.push("0"), t2.push(r2.toString()), t2.push("$"), t2.push(s(((r3) => {
    if ("undefined" != typeof module && module && module.exports)
      try {
        return require("crypto").randomBytes(r3);
      } catch (r4) {
      }
    try {
      let t3;
      return (self.crypto || self.msCrypto).getRandomValues(t3 = new Uint32Array(r3)), Array.prototype.slice.call(t3);
    } catch (r4) {
    }
    throw Error("Neither WebCryptoAPI nor a crypto module is available. Use bcrypt.setRandomFallback to set an alternative");
  })(16), 16)), t2.join("");
};
function c(r2, t2, e2, n2) {
  if ("string" != typeof r2 || "string" != typeof t2) {
    const r3 = new Error("Invalid string / salt: Not a string");
    if (false === e2)
      return Promise.reject(r3);
    throw r3;
  }
  let f2, i2;
  if ("$" !== t2.charAt(0) || "2" !== t2.charAt(1)) {
    const r3 = new Error("Invalid salt version: " + t2.substring(0, 2));
    if (false === e2)
      return Promise.reject(r3);
    throw r3;
  }
  if ("$" === t2.charAt(2))
    f2 = String.fromCharCode(0), i2 = 3;
  else {
    if (f2 = t2.charAt(2), "a" !== f2 && "b" !== f2 && "y" !== f2 || "$" !== t2.charAt(3)) {
      const r3 = Error("Invalid salt revision: " + t2.substring(2, 4));
      if (false === e2)
        return Promise.reject(r3);
      throw r3;
    }
    i2 = 4;
  }
  if (t2.charAt(i2 + 2) > "$") {
    const r3 = new Error("Missing salt rounds");
    if (false === e2)
      return Promise.reject(r3);
    throw r3;
  }
  const u2 = 10 * parseInt(t2.substring(i2, i2 + 1), 10) + parseInt(t2.substring(i2 + 1, i2 + 2), 10), h2 = t2.substring(i2 + 3, i2 + 25), a2 = ((r3) => {
    const t3 = [];
    let e3 = 0;
    var n3;
    return n3 = (r4) => {
      t3.push(r4);
    }, ((r4, t4) => {
      let e4, n4 = null;
      for (; null !== (e4 = null !== n4 ? n4 : r4()); )
        e4 >= 55296 && e4 <= 57343 && null !== (n4 = r4()) && n4 >= 56320 && n4 <= 57343 ? (t4(1024 * (e4 - 55296) + n4 - 56320 + 65536), n4 = null) : t4(e4);
      null !== n4 && t4(n4);
    })(() => e3 >= r3.length ? null : r3.charCodeAt(e3++), function(r4) {
      ((r5, t4) => {
        let e4 = null;
        for ("number" == typeof r5 && (e4 = r5, r5 = () => null); null !== e4 || null !== (e4 = r5()); )
          e4 < 128 ? t4(127 & e4) : e4 < 2048 ? (t4(e4 >> 6 & 31 | 192), t4(63 & e4 | 128)) : e4 < 65536 ? (t4(e4 >> 12 & 15 | 224), t4(e4 >> 6 & 63 | 128), t4(63 & e4 | 128)) : (t4(e4 >> 18 & 7 | 240), t4(e4 >> 12 & 63 | 128), t4(e4 >> 6 & 63 | 128), t4(63 & e4 | 128)), e4 = null;
      })(r4, n3);
    }), t3;
  })(r2 += f2 >= "a" ? "\0" : ""), g = l(h2, 16), c2 = (r3) => {
    const t3 = [];
    return t3.push("$2"), f2 >= "a" && t3.push(f2), t3.push("$"), u2 < 10 && t3.push("0"), t3.push(u2.toString()), t3.push("$"), t3.push(s(g, g.length)), t3.push(s(r3, 4 * o.length - 1)), t3.join("");
  };
  return false === e2 ? p(a2, g, u2, false, n2).then((r3) => c2(r3)) : c2(p(a2, g, u2, true, n2));
}
const y = (r2, t2 = 10) => {
  if ("number" == typeof t2 && (t2 = a(t2)), "string" != typeof r2 || "string" != typeof t2)
    throw Error("Illegal arguments: " + typeof r2 + ", " + typeof t2);
  return c(r2, t2, true);
}, w = (r2, t2) => {
  if ("string" != typeof r2 || "string" != typeof t2)
    throw Error("Illegal arguments: " + typeof r2 + ", " + typeof t2);
  return 60 === t2.length && y(r2, t2.substring(0, t2.length - 31)) === t2;
};
const useEncryptData = () => {
  const themeData2 = useThemeData();
  return vue.computed(() => themeData2.value.encrypt || {});
};
const STORAGE_KEY$1 = "VUEPRESS_HOPE_GLOBAL_TOKEN";
const useGlobalEcrypt = () => {
  const encryptData = useEncryptData();
  const localToken = core.useStorage(STORAGE_KEY$1, "");
  const sessionToken = core.useSessionStorage(STORAGE_KEY$1, "");
  const isGlobalEncrypted = vue.computed(() => {
    if (encryptData.value.global && encryptData.value.admin) {
      if (localToken.value)
        return encryptData.value.admin.every((hash) => !w(localToken.value, hash));
      if (sessionToken.value)
        return encryptData.value.admin.every((hash) => !w(sessionToken.value, hash));
      return true;
    }
    return false;
  });
  const validateGlobalToken = (inputToken, keep = false) => {
    (keep ? localToken : sessionToken).value = inputToken;
  };
  return {
    isGlobalEncrypted,
    validateGlobalToken
  };
};
const checkToken = (token = "", hash) => Boolean(token) && w(token, hash);
const STORAGE_KEY = "VUEPRESS_HOPE_PATH_TOKEN";
const usePathEncrypt = () => {
  const route = vueRouter.useRoute();
  const encryptData = useEncryptData();
  const localToken = core.useStorage(STORAGE_KEY, {});
  const sessionToken = core.useSessionStorage(STORAGE_KEY, {});
  const getPathMatchedKeys = (path) => typeof encryptData.value.config === "object" ? Object.keys(encryptData.value.config).filter((key) => decodeURI(path).startsWith(key)).sort((a2, b2) => b2.length - a2.length) : [];
  const getPathEncryptStatus = (path) => {
    const matchedKeys = getPathMatchedKeys(path);
    if (matchedKeys.length !== 0) {
      const { config: config2 = {} } = encryptData.value;
      return !matchedKeys.some((key) => localToken.value[key] && config2[key].some((token) => checkToken(localToken.value[key], token)) || sessionToken.value[key] && config2[key].some((token) => checkToken(sessionToken.value[key], token)));
    }
    return false;
  };
  const isEncrypted = vue.computed(() => getPathEncryptStatus(route.path));
  const validateToken = (inputToken, keep = false) => {
    const { config: config2 = {} } = encryptData.value;
    const matchedKeys = getPathMatchedKeys(route.path);
    for (const hitKey of matchedKeys) {
      if (config2[hitKey].filter((token) => checkToken(inputToken, token))) {
        (keep ? localToken : sessionToken).value[hitKey] = inputToken;
        break;
      }
    }
  };
  return {
    isEncrypted,
    getPathEncryptStatus,
    validateToken
  };
};
var GloablEncrypt = vue.defineComponent({
  name: "GlobalEncrypt",
  setup(_props, { slots }) {
    const { isGlobalEncrypted, validateGlobalToken } = useGlobalEcrypt();
    return () => {
      var _a;
      return isGlobalEncrypted.value ? vue.h(PasswordModal, { full: true, onVerify: validateGlobalToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});
var LocalEncrypt = vue.defineComponent({
  name: "LocalEncrypt",
  setup(_props, { slots }) {
    const { isEncrypted, validateToken } = usePathEncrypt();
    return () => {
      var _a;
      return isEncrypted.value ? vue.h(PasswordModal, { full: true, onVerify: validateToken }) : ((_a = slots["default"]) == null ? void 0 : _a.call(slots)) || null;
    };
  }
});
var clientConfig10 = defineClientConfig({
  enhance: ({ app, router }) => {
    const { scrollBehavior } = router.options;
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait();
      return scrollBehavior(...args);
    };
    injectDarkMode(app);
    app.component("CommonWrapper", CommonWrapper);
    app.component("HomePage", HomePage);
    app.component("NormalPage", NormalPage);
    app.component("Navbar", Navbar);
    app.component("Sidebar", Sidebar);
    app.component("BloggerInfo", BloggerInfo);
    app.component("BlogHome", BlogHome);
    app.component("BlogPage", BlogPage);
    app.component("GloablEncrypt", GloablEncrypt);
    app.component("LocalEncrypt", LocalEncrypt);
  },
  setup: () => {
    setupDarkMode();
    setupSidebarItems();
    setupBlog();
  }
});
const clientConfigs = [
  clientConfig0,
  clientConfig1,
  clientConfig2,
  clientConfig3,
  clientConfig4,
  clientConfig5,
  p$4,
  i$4,
  clientConfig8,
  h$1,
  clientConfig10
];
const pagesRoutes = [
  ["v-79fdd481", "/home.html", { "title": "Project home", "icon": "home", "type": "home", "readingTime": { "minutes": 1.72, "words": 517 }, "excerpt": "This is an example of a project homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related descriptions of", "date": "2022-07-25T07:55:34.000Z" }, ["/home", "/home.md"]],
  ["v-184f4da6", "/intro.html", { "title": "Intro Page", "icon": "info", "type": "article", "readingTime": { "minutes": 0.03, "words": 10 }, "excerpt": "Intro Page Place your introducation and profile here.", "date": "2022-07-25T07:55:34.000Z" }, ["/intro", "/intro.md"]],
  ["v-8daa1a0e", "/", { "title": "Young's Blog", "icon": "home", "type": "home", "readingTime": { "minutes": 0.44, "words": 132 }, "excerpt": "This is a Young's Blog. I'm going to organize my project and the concepts I've learned here", "date": "2022-07-25T07:55:34.000Z" }, ["/index.html", "/README.md"]],
  ["v-0e503981", "/slide.html", { "title": "Slide page", "icon": "slides", "type": "slide", "readingTime": { "minutes": 3.24, "words": 972 }, "excerpt": '@slidestart Slide Demo A simple slide demo and useful hints. " By Mr.Hope. Please scroll mousewheel down to the next slide" --- Marking Slides \u{1F447} -- Marking Slides Use --- to mark ', "date": "2022-07-25T07:55:34.000Z" }, ["/slide", "/slide.md"]],
  ["v-4c863446", "/guide/disable.html", { "title": "Disabling layout and features", "icon": "config", "type": "article", "readingTime": { "minutes": 0.28, "words": 84 }, "excerpt": "<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\n", "date": "2022-07-25T07:55:34.000Z", "category": ["Guide"], "tag": ["disable"] }, ["/guide/disable", "/guide/disable.md"]],
  ["v-bf720700", "/guide/encrypt.html", { "title": "Encryption Article", "icon": "lock", "type": "article", "readingTime": { "minutes": 0.3, "words": 90 }, "excerpt": "", "date": "2022-07-25T07:55:34.000Z", "category": ["Guide"], "tag": ["encryption"], "isEncrypted": true }, ["/guide/encrypt", "/guide/encrypt.md"]],
  ["v-0978b044", "/guide/markdown.html", { "title": "Markdown Enhance", "icon": "markdown", "type": "article", "readingTime": { "minutes": 3.15, "words": 946 }, "excerpt": "<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\n", "date": "2022-07-25T07:55:34.000Z", "category": ["Guide"], "tag": ["Markdown"] }, ["/guide/markdown", "/guide/markdown.md"]],
  ["v-4eaf9f84", "/guide/page.html", { "title": "page config", "icon": "page", "type": "article", "readingTime": { "minutes": 1.02, "words": 306 }, "excerpt": "<p>Content before <code v-pre>more</code> comment is regarded as page excerpt.</p>\n", "author": "Ms.Hope", "date": "2020-01-01T00:00:00.000Z", "localizedDate": "January 1, 2020", "category": ["Guide"], "tag": ["Page config", "Guide"], "sticky": true, "star": true }, ["/guide/page", "/guide/page.md"]],
  ["v-fffb8e28", "/guide/", { "title": "Guides", "icon": "creative", "type": "article", "readingTime": { "minutes": 0.07, "words": 21 }, "excerpt": "Catalog Markdown Enhance; Page Config; Function Disable; Encryption Demo;", "date": "2022-07-25T07:55:34.000Z", "category": ["Guide"] }, ["/guide/index.html", "/guide/README.md"]],
  ["v-c0291160", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(D2).html", { "title": "\uAD50\uC721-1(D2Site Review)", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.59, "words": 178 }, "excerpt": "[D2 \uC0AC\uC774\uD2B8 \uB9AC\uBDF0] 1. 2015\uB144\uB3C4 \uAD6C\uAE00 \uB9F5\uC5D0\uC11C \uC4F0\uBA74\uC11C.. 05\uB144\uB3C4 ajax \uBD80\uD65C\uB428. .. \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4 v8 \uC5D4\uC9C4\uC774 \uB9CC\uB4E4\uC5B4\uC9D0 .. \uD575\uC2EC\uC740 \uBAA8\uB4C8\uD654 export, import \uB97C \uC4F0\uAE30 \uC2DC\uC791\uD568 vuejs, nodejs \uC5D0\uC11C \uB9CE\uC774 \uC500 import\uB97C \uC4F0\uB294 \uAC83\uB3C4 \uC788\uACE0, require \uB97C \uC4F0\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB294\uB370 \uC774\uAC8C \uC11C\uBC84\uC0AC\uC774\uB4DC,", "date": "2021-04-13T00:00:00.000Z", "localizedDate": "April 13, 2021", "category": ["JavaScript", "Study"], "tag": ["TeamLeader Education"] }, ["/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2).html", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(D2)", "/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2).md", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(D2).md"]],
  ["v-3e3fb02a", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(JS).html", { "title": "\uAD50\uC721-1", "icon": "edit", "type": "article", "readingTime": { "minutes": 1.93, "words": 579 }, "excerpt": "2021.04.13 javascript \uAE30\uBCF8 ECMA5 \uAC00 \uD604\uC7AC \uD45C\uC900\uC774\uACE0, ECMA6 \uB294 \uC544\uB2D8 \uADFC\uB370 \uC9C0\uAE08 \uACF5\uBD80\uD558\uB294 \uC0AC\uC774\uD2B8\uB294 \uBAA8\uB358 \uD658\uACBD\uC784. 1. JavaScript\uB294... ECMAscript\uAC00 \uC6D0\uB798 \uBA85\uCE6D \uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4\uC774 \uB3CC\uC544\uAC00\uC57C \uD568. (\uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uB2E4\uB984) \u203B ie\uB294 ecma6\uB97C \uC9C0\uC6D0\uC548\uD558\uACE0, \uB2E4 \uC9C0\uC6D0\uD568. ie\uB9CC \uC548\uC4F0\uBA74 \uB428. ", "date": "2021-04-13T00:00:00.000Z", "localizedDate": "April 13, 2021", "category": ["JavaScript", "Study"], "tag": ["TeamLeader Education"] }, ["/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS).html", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(JS)", "/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS).md", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(JS).md"]],
  ["v-65e0cd62", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-2.html", { "title": "\uAD50\uC721-2(JavaScript)", "icon": "edit", "type": "article", "readingTime": { "minutes": 1.16, "words": 349 }, "excerpt": '[\uAC1D\uCCB4:\uAE30\uBCF8 \uC774\uC5B4\uC11C] arrow function \uC774 \uB098\uC628 \uBC30\uACBD this\uB294 \uB7F0\uD0C0\uC784 \uC2DC \uACB0\uC815 \uB428 \uC0DD\uC131\uC790 \uD568\uC218\uC758 \uACBD\uC6B0 \uC774\uB77C\uACE0 \uD55C\uB2E4\uBA74 User("aaa") \uC774\uB7F0\uC2DD\uC73C\uB85C \uD558\uBA74 \uC548\uB418\uACE0 new User("aaa") new\uB97C \uBD99\uC5EC\uC918\uC57C \uD574\uB2F9 \uAC1D\uCCB4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C4\uB2E4. function(par, par2, ...) \uD544\uC218 \uD30C\uB77C\uBBF8\uD130\uB97C \uB118\uAE30\uACE0, \uADF8 \uC678\uC5D0\uB294', "date": "2021-04-14T00:00:00.000Z", "localizedDate": "April 14, 2021", "category": ["JavaScript", "Study"], "tag": ["TeamLeader Education"] }, ["/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2.html", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-2", "/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2.md", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-2.md"]],
  ["v-6d19ebae", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(JS).html", { "title": "\uAD50\uC721-3(JavaScript)", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.59, "words": 177 }, "excerpt": "\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uACF5\uBD80 [\uC774\uBCA4\uD2B8] mouseover, mouseout mouseenter, mouseleave \uC804\uC790\uB294 \uCEA1\uCC98\uB9C1, \uBC84\uBE14\uB9C1 \uC790\uB3D9 \uD6C4\uC790\uB294 jquery \uC774\uBCA4\uD2B8, \uBC84\uBE14\uB9C1 \uCEA1\uCC98\uB9C1 \uC548\uD568. keydown keyup \uC0AC\uC774 keypress \uB77C\uB294 \uC560\uAC00 \uC788\uC74C \uBB50\uAC00 \uB20C\uB838\uB294\uC9C0 \uBCFC \uB54C \uC0AC\uC6A9 \uC774\uBCA4\uD2B8, jquery\uC5D0\uC11C remove, remov", "date": "2021-04-15T00:00:00.000Z", "localizedDate": "April 15, 2021", "category": ["JavaScript", "Study"], "tag": ["TeamLeader Education"] }, ["/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS).html", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(JS)", "/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS).md", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(JS).md"]],
  ["v-ed41da8c", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(pwa).html", { "title": "\uAD50\uC721-3(PWA)", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.2, "words": 61 }, "excerpt": "21.04.15 PWA \r\uC6F91 - \uADF8\uB0E5 \uBCF4\uC5EC\uC8FC\uAE30 \uC2DD ; \r\uC6F92 - \uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638\uC791\uC6A9 ; \r\uC6F93 ; \uC571 > \uC6F9 > \uC6F9\uBDF0 (\uD558\uC774\uBE0C\uB9AC\uB4DC \uC6F9) : \r\uC6F9\uBDF0 : \uBAA8\uBC14\uC77C \uC6F9\uC758 \uB290\uB9B0\uAC78 \uADF8\uB300\uB85C \uAC00\uAC8C \uB428. \uB108\uBB34 \uB290\uB9AC\uB2C8\uAE4C \uACC4\uC18D \uACE0\uBBFC ; \rNative \uC5B8\uC5B4 : \uB124\uC774\uD2F0\uBE0C \uC571 \uD558\uB098\uB97C \uB9CC\uB4E4\uBA74 ios android\uC5D0\uC11C \uC9C0\uC6D0\uD574\uC8FC\uACA0\uB2E4. ; \r\uBAA8\uBC14\uC77C \uC571 ", "date": "2021-04-15T00:00:00.000Z", "localizedDate": "April 15, 2021", "category": ["JavaScript", "Study"], "tag": ["PWA", "TeamLeader Education"] }, ["/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(pwa).html", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(pwa)", "/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(pwa).md", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(pwa).md"]],
  ["v-694a7ea0", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-4.html", { "title": "\uAD50\uC721-4(jQuery)", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.89, "words": 268 }, "excerpt": "[jQuery \uAD50\uC721] 1. CORE jQuery = $ \uAC19\uC74C 2. Selector \uADF8\uB0E5 \uC0AC\uC6A9\uD558\uB2E4\uBCF4\uBA74 \uC54C\uAC8C \uB41C\uB2E4. : hide, visible, even, order \uBB50 \uC774\uB7F0 \uAC83\uB4E4 css selector\uB97C \uACF5\uBD80\uD558\uB294\uAC8C \uC624\uD788\uB824 \uB354 \uB098\uC744 \uC218 \uC788\uB2E4. . \uC740 \uD074\uB798\uC2A4 \uC120\uD0DD\uC790 # \uC740 \uC544\uC774\uB514 \uC120\uD0DD\uC790 attr \uADF8\uB8F9\uC120\uD0DD\uC790 A, B : A\uB610\uB294", "date": "2021-04-16T00:00:00.000Z", "localizedDate": "April 16, 2021", "category": ["JavaScript", "Study"], "tag": ["TeamLeader Education"] }, ["/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4.html", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-4", "/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4.md", "/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-4.md"]],
  ["v-e1203d06", "/posts/jQuery/1%EC%9E%A5%20jQuery%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0.html", { "title": "jQuery-1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.32, "words": 96 }, "excerpt": "1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70 1.3 jQuery \uAE30\uCD08 jQuery\uB294 HTML \uD398\uC774\uC9C0\uC758 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC870\uD68C\uD55C \uB2E4\uC74C \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294\uB370 \uC911\uC810\uC744 \uB454\uB2E4. 1.3.1 jQuery() \uD568\uC218 \uC140\uB809\uD130\uB294 \uC678\uBD80 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8 (css\uC640 \uAC19\uC740)\uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8 \uADF8\uB8F9\uC744 \uCC38\uC870\uD560 \uBC29\uBC95\uC774 \uD544\uC694\uD588\uAE30\uC5D0 \uB9CC\uB4E4\uC5B4\uC84C\uB2E4. jQuery", "date": "2021-04-12T00:00:00.000Z", "localizedDate": "April 12, 2021", "category": ["jQuery", "Study"], "tag": ["jQuery"] }, ["/posts/jQuery/1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70.html", "/posts/jQuery/1%EC%9E%A5%20jQuery%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0", "/posts/jQuery/1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70.md", "/posts/jQuery/1%EC%9E%A5%20jQuery%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0.md"]],
  ["v-ba33a14a", "/posts/jQuery/2%EC%9E%A5%20%EA%B8%B0%EB%8A%A5%EC%9D%B4%20%ED%99%95%EC%9E%A5%EB%90%9C%20%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%20%EC%A7%91%ED%95%A9%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.html", { "title": "jQuery-2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.", "icon": "edit", "type": "article", "readingTime": { "minutes": 1.34, "words": 402 }, "excerpt": '2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30. 2.1 \uC870\uC791\uD558\uB824\uB294 \uC5D8\uB9AC\uBA3C\uD2B8 \uC120\uD0DD\uD558\uAE30. \uC77C\uB2E8 \uC120\uD0DD\uD558\uB824\uBA74 \uD574\uB2F9 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC124\uBA85\uD560 \uC904 \uC54C\uC544\uC57C\uD55C\uB2E4 jQuery\uB294 \uADF8\uB7F0\uBA74\uC5D0\uC11C \uC5B4\uB5A4 \uC5D8\uB9AC\uBA3C\uD2B8\uB77C\uB3C4 \uC138\uB828,\uAC04\uACB0,\uC27D\uAC8C \uC124\uBA85\uD560 \uC218 \uC788\uB294 \uC140\uB809\uD130\uB97C \uB9CC\uB4E4\uC5C8\uB2E4. \uAE30\uBCF8\uC774 \uB418\uB294 \uAC83\uC740 "CSS\uBB38\uBC95"\uC774\uB2E4. 2.1.1 \uAE30\uBCF8 CSS \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30 \uC608\uC2DC\uB97C \uD1B5\uD574 \uBCF4', "date": "2021-04-12T00:00:00.000Z", "localizedDate": "April 12, 2021", "category": ["jQuery", "Study"], "tag": ["jQuery"] }, ["/posts/jQuery/2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.html", "/posts/jQuery/2%EC%9E%A5%20%EA%B8%B0%EB%8A%A5%EC%9D%B4%20%ED%99%95%EC%9E%A5%EB%90%9C%20%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%20%EC%A7%91%ED%95%A9%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0", "/posts/jQuery/2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.md", "/posts/jQuery/2%EC%9E%A5%20%EA%B8%B0%EB%8A%A5%EC%9D%B4%20%ED%99%95%EC%9E%A5%EB%90%9C%20%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%20%EC%A7%91%ED%95%A9%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.md"]],
  ["v-71978c0a", "/posts/jQuery/3%EC%9E%A5%20jQuery%EB%A1%9C%20%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%20%EC%83%9D%EB%AA%85%20%EB%B6%88%EC%96%B4%EB%84%A3%EA%B8%B0.html", { "title": "jQuery-3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30", "icon": "edit", "type": "article", "readingTime": { "minutes": 1.18, "words": 355 }, "excerpt": "3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30 DHTML : Dynamic HTML \uB3D9\uC801 HTML\uC774\uB780 \uB73B\uC774\uBA70 \uADF8\uB0E5 \uCEE8\uD150\uCE20\uB9CC \uCD9C\uB825\uD574\uC8FC\uB294 \uD398\uC774\uC9C0\uAC00 \uC544\uB2CC, \uC720\uC800\uB85C\uBD80\uD130 \uC815\uBCF4\uB97C \uBC1B\uC544\uC640\uC11C \uC815\uBCF4\uB97C \uAC00\uC9C0\uACE0 \uC591\uBC29\uD5A5 \uC0C1\uD638\uC791\uC6A9\uC744 \uD558\uB294 \uD398\uC774\uC9C0\uB97C \uC758\uBBF8\uD55C\uB2E4. HTML, CSS, javascript 3\uAC00\uC9C0 \uC5B8\uC5B4\uB85C \uAD6C\uC131\uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB418\uB294\uB370 3\uC7A5\uC5D0\uC11C\uB294 jQ", "date": "2021-04-12T00:00:00.000Z", "localizedDate": "April 12, 2021", "category": ["jQuery", "Study"], "tag": ["jQuery"] }, ["/posts/jQuery/3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30.html", "/posts/jQuery/3%EC%9E%A5%20jQuery%EB%A1%9C%20%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%20%EC%83%9D%EB%AA%85%20%EB%B6%88%EC%96%B4%EB%84%A3%EA%B8%B0", "/posts/jQuery/3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30.md", "/posts/jQuery/3%EC%9E%A5%20jQuery%EB%A1%9C%20%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%20%EC%83%9D%EB%AA%85%20%EB%B6%88%EC%96%B4%EB%84%A3%EA%B8%B0.md"]],
  ["v-18558afe", "/posts/jQuery/4%EC%9E%A5%20%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EB%AA%A8%EB%93%A0%20%EA%B2%83%EC%9D%98%20%EC%8B%9C%EC%9E%91.html", { "title": "jQuery-4\uC7A5 \uC774\uBCA4\uD2B8 \uBAA8\uB4E0\uAC83\uC758 \uC2DC\uC791", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.42, "words": 126 }, "excerpt": "4.1 \uBE0C\uB77C\uC6B0\uC800 \uC774\uBCA4\uD2B8 \uBAA8\uB378 \uC774\uD574\uD558\uAE30 \uBAA8\uC9C8\uB77C \uAE30\uBC18\uC758 \uBE0C\uB77C\uC6B0\uC800 : \uD30C\uC774\uC5B4\uD3ED\uC2A4, \uCE74\uBBF8\uB178 \uCD5C\uC2E0 \uD45C\uC900 \uC900\uC218\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800 : \uC0AC\uD30C\uB9AC, \uC624\uD398\uB77C \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC : \uC790\uCCB4 \uD45C\uC900\uC774 \uC788\uC73C\uBA70 \uC790\uC2E0\uB9CC\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9 \uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB2EC\uB77C \uBC1C\uC0DD\uD558\uB294 \uC791\uC5C5\uC744 \uC5B4\uB5BB\uAC8C \uCC98\uB9AC\uD574\uC904 \uAC83\uC774\uB0D0. 4.1.1 DOM \uB808\uBCA8 0 \uC774\uBCA4\uD2B8 \uBAA8\uB378 onmous", "date": "2021-04-12T00:00:00.000Z", "localizedDate": "April 12, 2021", "category": ["jQuery", "Study"], "tag": ["jQuery"] }, ["/posts/jQuery/4\uC7A5 \uC774\uBCA4\uD2B8_\uBAA8\uB4E0 \uAC83\uC758 \uC2DC\uC791.html", "/posts/jQuery/4%EC%9E%A5%20%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EB%AA%A8%EB%93%A0%20%EA%B2%83%EC%9D%98%20%EC%8B%9C%EC%9E%91", "/posts/jQuery/4\uC7A5 \uC774\uBCA4\uD2B8_\uBAA8\uB4E0 \uAC83\uC758 \uC2DC\uC791.md", "/posts/jQuery/4%EC%9E%A5%20%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EB%AA%A8%EB%93%A0%20%EA%B2%83%EC%9D%98%20%EC%8B%9C%EC%9E%91.md"]],
  ["v-73115d7a", "/posts/Vue/Vuejs_3%EB%A0%88%EB%B2%A8_Reivew.html", { "title": "Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8", "icon": "edit", "type": "article", "readingTime": { "minutes": 0.22, "words": 66 }, "excerpt": "Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8 \uAD50\uC721 \uC815\uBCF4 \r\uAD50\uC721\uBA85 : Vue.js \uC644\uBCBD\uAC00\uC774\uB4DC - \uC2E4\uC2B5\uACFC \uB9AC\uD329\uD1A0\uB9C1\uC73C\uB85C \uBC30\uC6B0\uB294 \uC2E4\uC804 \uAC1C\uB150; \r\uC2E0\uCCAD URL : https://inf.run/ptTX; \r\uBCF8 \uAC15\uC758\uB294 \uC778\uD504\uB7F0\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 Vue \uB85C\uB4DC\uB9F5\uC758 3\uBC88\uC9F8 \uC2DC\uB9AC\uC988\uC785\uB2C8\uB2E4. ; (\uCD1D 1~5 Level\uB85C \uB098\uB258\uC5B4\uC838 \uC788\uC73C\uB2C8 \uC790\uC2E0\uC758 \uB808\uBCA8\uC5D0 \uB9DE\uB294 \uAC15\uC758\uBD80\uD130 ", "date": "2022-07-21T00:00:00.000Z", "localizedDate": "July 21, 2022", "category": ["Vue", "Review"], "tag": ["Review", "Vue"] }, ["/posts/Vue/Vuejs_3\uB808\uBCA8_Reivew.html", "/posts/Vue/Vuejs_3%EB%A0%88%EB%B2%A8_Reivew", "/posts/Vue/Vuejs_3\uB808\uBCA8_Reivew.md", "/posts/Vue/Vuejs_3%EB%A0%88%EB%B2%A8_Reivew.md"]],
  ["v-7318da4a", "/posts/Vue/Vue%EA%B0%95%EC%9D%98%EC%A0%95%EB%A6%AC.html", { "title": "Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC", "icon": "edit", "type": "article", "readingTime": { "minutes": 4.08, "words": 1224 }, "excerpt": "Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC [router \uC124\uACC4 \uD544\uC694 ] news ask jobs \uC138\uAC1C\uC758 \uD398\uC774\uC9C0\uAC00 \uD544\uC694\uD558\uACE0 \uC774\uB97C url\uC5D0 \uB9DE\uAC8C \uBFCC\uB824\uC8FC\uBA74 \uB428. \uD2B9\uC815 \uC0C1\uC138 \uD398\uC774\uC9C0\uAC00 \uB530\uB85C \uC788\uC74C \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD398\uC774\uC9C0 (user view) [vue cli 2 vs vue cli 3]\r\uBA85\uB839\uC5B4; \r2.x : vue init '\uD504\uB85C\uC81D\uD2B8 \uD15C\uD50C\uB9BF \uC774\uB984' '\uD30C\uC77C ", "date": "2022-02-12T00:00:00.000Z", "localizedDate": "February 12, 2022", "category": ["Vue", "Study"], "tag": ["Study", "Vue"] }, ["/posts/Vue/Vue\uAC15\uC758\uC815\uB9AC.html", "/posts/Vue/Vue%EA%B0%95%EC%9D%98%EC%A0%95%EB%A6%AC", "/posts/Vue/Vue\uAC15\uC758\uC815\uB9AC.md", "/posts/Vue/Vue%EA%B0%95%EC%9D%98%EC%A0%95%EB%A6%AC.md"]],
  ["v-3706649a", "/404.html", { "title": "", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/404"]],
  ["v-5bc93818", "/category/", { "title": "Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/index.html"]],
  ["v-744d024e", "/tag/", { "title": "Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/index.html"]],
  ["v-e52c881c", "/article/", { "title": "Articles", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/article/index.html"]],
  ["v-75ed4ea4", "/encrypted/", { "title": "Encrypted", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/encrypted/index.html"]],
  ["v-d804e652", "/slide/", { "title": "Slides", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/slide/index.html"]],
  ["v-154dc4c4", "/star/", { "title": "Star", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/star/index.html"]],
  ["v-01560935", "/timeline/", { "title": "Timeline", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/timeline/index.html"]],
  ["v-ac0c2a6a", "/category/guide/", { "title": "Guide Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/guide/index.html"]],
  ["v-c5a9e2d6", "/tag/disable/", { "title": "disable Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/disable/index.html"]],
  ["v-54d7ff21", "/zh/article/", { "title": "\u6587\u7AE0", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/article/index.html"]],
  ["v-1ad78213", "/zh/encrypted/", { "title": "\u52A0\u5BC6", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/encrypted/index.html"]],
  ["v-5b30cfc6", "/zh/slide/", { "title": "\u5E7B\u706F\u7247", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/slide/index.html"]],
  ["v-2c3ee7f5", "/zh/star/", { "title": "\u6536\u85CF", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/star/index.html"]],
  ["v-27b02be6", "/zh/timeline/", { "title": "\u65F6\u95F4\u8F74", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/timeline/index.html"]],
  ["v-e2bac56c", "/category/javascript/", { "title": "JavaScript Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/javascript/index.html"]],
  ["v-cbedfc04", "/tag/encryption/", { "title": "encryption Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/encryption/index.html"]],
  ["v-83291cc4", "/category/study/", { "title": "Study Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/study/index.html"]],
  ["v-484552dc", "/tag/markdown/", { "title": "Markdown Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/markdown/index.html"]],
  ["v-2dcc8639", "/category/jquery/", { "title": "jQuery Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/jquery/index.html"]],
  ["v-26f8293d", "/tag/page-config/", { "title": "Page config Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/page-config/index.html"]],
  ["v-65f6d381", "/category/vue/", { "title": "Vue Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/vue/index.html"]],
  ["v-30e296fe", "/tag/guide/", { "title": "Guide Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/guide/index.html"]],
  ["v-7ed81e82", "/category/review/", { "title": "Review Category", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/category/review/index.html"]],
  ["v-56cabb00", "/tag/teamleader-education/", { "title": "TeamLeader Education Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/teamleader-education/index.html"]],
  ["v-fbb94a6e", "/zh/category/", { "title": "\u5206\u7C7B", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/category/index.html"]],
  ["v-b30840fa", "/tag/pwa/", { "title": "PWA Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/pwa/index.html"]],
  ["v-ba5e197a", "/tag/jquery/", { "title": "jQuery Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/jquery/index.html"]],
  ["v-35985dc9", "/tag/review/", { "title": "Review Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/review/index.html"]],
  ["v-b302da92", "/tag/vue/", { "title": "Vue Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/vue/index.html"]],
  ["v-07ff8958", "/tag/study/", { "title": "Study Tag", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/tag/study/index.html"]],
  ["v-540234fd", "/zh/tag/", { "title": "\u6807\u7B7E", "type": "page", "readingTime": { "minutes": 0, "words": 0 }, "excerpt": "" }, ["/zh/tag/index.html"]]
];
var createRoutes = () => pagesRoutes.reduce((result, [name, path, meta, redirects]) => {
  result.push({
    name,
    path,
    component: Vuepress,
    meta
  }, ...redirects.map((item) => ({
    path: item,
    redirect: path
  })));
  return result;
}, [
  {
    name: "404",
    path: "/:catchAll(.*)",
    component: Vuepress
  }
]);
var historyCreator = vueRouter.createMemoryHistory;
var createVueRouter = () => {
  const router = vueRouter.createRouter({
    history: historyCreator(shared.removeEndingSlash(siteData.value.base)),
    routes: createRoutes(),
    scrollBehavior: (to, from, savedPosition) => {
      if (savedPosition)
        return savedPosition;
      if (to.hash)
        return { el: to.hash };
      return { top: 0 };
    }
  });
  router.beforeResolve(async (to, from) => {
    var _a;
    if (to.path !== from.path || from === vueRouter.START_LOCATION) {
      [pageData.value] = await Promise.all([
        resolvers.resolvePageData(to.name),
        (_a = pagesComponents[to.name]) == null ? void 0 : _a.__asyncLoader()
      ]);
    }
  });
  return router;
};
var setupGlobalComponents = (app) => {
  app.component("ClientOnly", ClientOnly);
  app.component("Content", Content$1);
};
var setupGlobalComputed = (app, router) => {
  const routeLocale = vue.computed(() => resolvers.resolveRouteLocale(siteData.value.locales, router.currentRoute.value.path));
  const siteLocaleData = vue.computed(() => resolvers.resolveSiteLocaleData(siteData.value, routeLocale.value));
  const pageFrontmatter = vue.computed(() => resolvers.resolvePageFrontmatter(pageData.value));
  const pageHeadTitle = vue.computed(() => resolvers.resolvePageHeadTitle(pageData.value, siteLocaleData.value));
  const pageHead = vue.computed(() => resolvers.resolvePageHead(pageHeadTitle.value, pageFrontmatter.value, siteLocaleData.value));
  const pageLang = vue.computed(() => resolvers.resolvePageLang(pageData.value));
  app.provide(routeLocaleSymbol, routeLocale);
  app.provide(siteLocaleDataSymbol, siteLocaleData);
  app.provide(pageFrontmatterSymbol, pageFrontmatter);
  app.provide(pageHeadTitleSymbol, pageHeadTitle);
  app.provide(pageHeadSymbol, pageHead);
  app.provide(pageLangSymbol, pageLang);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: { get: () => pageFrontmatter.value },
    $head: { get: () => pageHead.value },
    $headTitle: { get: () => pageHeadTitle.value },
    $lang: { get: () => pageLang.value },
    $page: { get: () => pageData.value },
    $routeLocale: { get: () => routeLocale.value },
    $site: { get: () => siteData.value },
    $siteLocale: { get: () => siteLocaleData.value },
    $withBase: { get: () => withBase }
  });
  return {
    pageData,
    pageFrontmatter,
    pageHead,
    pageHeadTitle,
    pageLang,
    routeLocale,
    siteData,
    siteLocaleData
  };
};
var setupUpdateHead = () => {
  vueRouter.useRoute();
  const head = usePageHead();
  const lang = usePageLang();
  {
    const ssrContext = vue.useSSRContext();
    if (ssrContext) {
      ssrContext.head = head.value;
      ssrContext.lang = lang.value;
    }
    return;
  }
};
var appCreator = vue.createSSRApp;
var createVueApp = async () => {
  var _a;
  const app = appCreator({
    name: "VuepressApp",
    setup() {
      var _a2;
      setupUpdateHead();
      for (const clientConfig of clientConfigs) {
        (_a2 = clientConfig.setup) == null ? void 0 : _a2.call(clientConfig);
      }
      return () => [
        vue.h(vueRouter.RouterView),
        ...clientConfigs.flatMap(({ rootComponents = [] }) => rootComponents.map((component) => vue.h(component)))
      ];
    }
  });
  const router = createVueRouter();
  setupGlobalComponents(app);
  setupGlobalComputed(app, router);
  for (const clientConfig of clientConfigs) {
    await ((_a = clientConfig.enhance) == null ? void 0 : _a.call(clientConfig, { app, router, siteData }));
  }
  app.use(router);
  return {
    app,
    router
  };
};
const data$Q = JSON.parse('{"key":"v-79fdd481","path":"/home.html","title":"Project home","lang":"en-US","frontmatter":{"home":true,"icon":"home","title":"Project home","heroImage":"/logo.svg","heroText":"Project name","tagline":"You can place the description of the project here.","actions":[{"text":"How to Use \u{1F4A1}","link":"/guide/","type":"primary"},{"text":"Blog homepage \u{1F3E0}","link":"/"}],"features":[{"title":"Markdown Enhance","icon":"markdown","details":"Add align, sup/sub script, footnote, tasklist, tex, flowchart, diagram, mark and presentation support in markdown","link":"https://vuepress-theme-hope.github.io/v2/guide/markdown/"},{"title":"Slide page","icon":"slides","details":"Adding slide pages to display things you like","link":"https://vuepress-theme-hope.github.io/v2/guide/layout/slides"},{"title":"Layout enhancement","icon":"layout","details":"Adding breadcrumb, footer, improved navbar, improved page nav and etc.","link":"https://vuepress-theme-hope.github.io/v2/guide/layout/"},{"title":"Pageviews and comments","icon":"comment","details":"Start pageview statistics and comment support with Waline","link":"https://vuepress-theme-hope.github.io/v2/guide/feature/comment.html"},{"title":"Article information","icon":"info","details":"Add author, writing date, reading time, word count and other information to your article","link":"https://vuepress-theme-hope.github.io/v2/guide/feature/page-info.html"},{"title":"Blog support","icon":"blog","details":"Listing your articles with their dates, tags and categories with some awesome layouts","link":"https://vuepress-theme-hope.github.io/v2/guide/blog/"},{"title":"Custom theme color","icon":"palette","details":"Supports custom theme colors and allows users to switch between preset theme colors","link":"https://vuepress-theme-hope.github.io/v2/guide/interface/theme-color.html"},{"title":"Dark Mode","icon":"contrast","details":"Switch between light and dark modes freely","link":"https://vuepress-theme-hope.github.io/v2/guide/interface/darkmode.html"},{"title":"Full A11y support","icon":"support","details":"Full support of accessibility in your site","link":"https://vuepress-theme-hope.github.io/v2/guide/interface/accessibility.html"},{"title":"Article Encryption","icon":"lock","details":"Encrypt you articles based on page links, so that only the one you want could see them","link":"https://vuepress-theme-hope.github.io/v2/guide/feature/encrypt.html"},{"title":"Copy button","icon":"copy","details":"Copy codes with one click in code blocks","link":"https://vuepress-theme-hope.github.io/v2/guide/feature/copy-code.html"},{"title":"Image preview","icon":"pic","details":"Support viewing, zooming, sharing your page images like a gallery","link":"https://vuepress-theme-hope.github.io/v2/guide/feature/photo-swipe.html"},{"title":"SEO enhancement","icon":"config","details":"Optimize pages for search engines","link":"https://vuepress-theme-hope.github.io/v2/guide/advanced/seo.html"},{"title":"Sitemap","icon":"sitemap","details":"Generate a Sitemap for your site","link":"https://vuepress-theme-hope.github.io/v2/guide/advanced/sitemap.html"},{"title":"Feed support","icon":"rss","details":"Generate feed to allow users to subscribe it","link":"https://vuepress-theme-hope.github.io/v2/guide/advanced/feed.html"},{"title":"PWA support","icon":"mobile","details":"Make your site more like an APP","link":"https://vuepress-theme-hope.github.io/v2/guide/advanced/pwa.html"},{"title":"More new features","icon":"more","details":"Including icon support, fullscreen button, etc.","link":"https://vuepress-theme-hope.github.io/v2/guide/feature/"}],"copyright":false,"footer":"MIT Licensed | Copyright \xA9 2019-present Mr.Hope","summary":"This is an example of a project homepage. You can place your main content here. To use this layout, you need to set home: true in the page front matter. For related descriptions of","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/home.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Project home"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":1.72,"words":517},"filePathRelative":"home.md","localizedDate":"July 25, 2022"}');
var home_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$Q
}, Symbol.toStringTag, { value: "Module" }));
const data$P = JSON.parse('{"key":"v-184f4da6","path":"/intro.html","title":"Intro Page","lang":"en-US","frontmatter":{"icon":"info","summary":"Intro Page Place your introducation and profile here.","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/intro.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Intro Page"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.03,"words":10},"filePathRelative":"intro.md","localizedDate":"July 25, 2022"}');
var intro_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$P
}, Symbol.toStringTag, { value: "Module" }));
const data$O = JSON.parse(`{"key":"v-8daa1a0e","path":"/","title":"Young's Blog","lang":"en-US","frontmatter":{"home":true,"layout":"Blog","icon":"home","title":"Young's Blog","heroImage":"/wild-dog.jpg","heroText":"Young's Blog","tagline":"Let's develop like wild dogs","heroFullScreen":false,"projects":[{"icon":"project","name":"project name","desc":"project detailed description","link":"https://your.project.link"},{"icon":"link","name":"link name","desc":"link detailed description","link":"https://link.address"},{"icon":"book","name":"book name","desc":"Detailed description of the book","link":"https://link.to.your.book"},{"icon":"article","name":"article name","desc":"Detailed description of the article","link":"https://link.to.your.article"},{"icon":"friend","name":"friend name","desc":"Detailed description of friend","link":"https://link.to.your.friend"},{"icon":"/logo.svg","name":"custom item","desc":"Detailed description of this custom item","link":"https://link.to.your.friend"}],"footer":"customize your footer text","summary":"This is a Young's Blog. I'm going to organize my project and the concepts I've learned here","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Young's Blog"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.44,"words":132},"filePathRelative":"README.md","localizedDate":"July 25, 2022"}`);
var index_html$1y = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$O
}, Symbol.toStringTag, { value: "Module" }));
const data$N = JSON.parse('{"key":"v-0e503981","path":"/slide.html","title":"Slide page","lang":"en-US","frontmatter":{"title":"Slide page","icon":"slides","layout":"Slide","summary":"@slidestart Slide Demo A simple slide demo and useful hints. \\" By Mr.Hope. Please scroll mousewheel down to the next slide\\" --- Marking Slides \u{1F447} -- Marking Slides Use --- to mark ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/slide.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Slide page"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":3.24,"words":972},"filePathRelative":"slide.md","localizedDate":"July 25, 2022"}');
var slide_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$N
}, Symbol.toStringTag, { value: "Module" }));
const data$M = JSON.parse('{"key":"v-4c863446","path":"/guide/disable.html","title":"Disabling layout and features","lang":"en-US","frontmatter":{"title":"Disabling layout and features","icon":"config","order":3,"category":["Guide"],"tag":["disable"],"navbar":false,"sidebar":false,"breadcrumb":false,"pageInfo":false,"contributors":false,"editLink":false,"lastUpdated":false,"prev":false,"next":false,"comment":false,"footer":false,"backtotop":false,"summary":"You can disable some function and layout on the page by setting the Frontmatter of the page.\\n","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/guide/disable.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Disabling layout and features"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"disable"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"<p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p>\\n","headers":[],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.28,"words":84},"filePathRelative":"guide/disable.md","localizedDate":"July 25, 2022"}');
var disable_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$M
}, Symbol.toStringTag, { value: "Module" }));
const data$L = JSON.parse('{"key":"v-bf720700","path":"/guide/encrypt.html","title":"Encryption Article","lang":"en-US","frontmatter":{"icon":"lock","category":["Guide"],"tag":["encryption"],"summary":"Encryption Article The actual article content. Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 te","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/guide/encrypt.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Encryption Article"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"encryption"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.3,"words":90},"filePathRelative":"guide/encrypt.md","localizedDate":"July 25, 2022"}');
var encrypt_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$L
}, Symbol.toStringTag, { value: "Module" }));
const data$K = JSON.parse('{"key":"v-0978b044","path":"/guide/markdown.html","title":"Markdown Enhance","lang":"en-US","frontmatter":{"title":"Markdown Enhance","icon":"markdown","order":2,"category":["Guide"],"tag":["Markdown"],"summary":"VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.\\nYou should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.\\n","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/guide/markdown.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Markdown Enhance"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Markdown"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"<p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p>\\n<p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p>\\n","headers":[{"level":2,"title":"Markdown Introduction","slug":"markdown-introduction","children":[]},{"level":2,"title":"Markdown Config","slug":"markdown-config","children":[]},{"level":2,"title":"Markdown Extension","slug":"markdown-extension","children":[{"level":3,"title":"VuePress Enhancement","slug":"vuepress-enhancement","children":[]},{"level":3,"title":"Theme Enhancement","slug":"theme-enhancement","children":[]},{"level":3,"title":"Tabs","slug":"tabs","children":[]},{"level":3,"title":"Include files","slug":"include-files","children":[]}]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":3.15,"words":946},"filePathRelative":"guide/markdown.md","localizedDate":"July 25, 2022"}');
var markdown_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$K
}, Symbol.toStringTag, { value: "Module" }));
const data$J = JSON.parse('{"key":"v-4eaf9f84","path":"/guide/page.html","title":"page config","lang":"en-US","frontmatter":{"title":"page config","icon":"page","order":1,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true,"footer":"Footer content for test","copyright":"No Copyright","summary":"Content before more comment is regarded as page excerpt.\\n","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/guide/page.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"page config"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"Page config"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"<p>Content before <code v-pre>more</code> comment is regarded as page excerpt.</p>\\n","headers":[{"level":2,"title":"Page Information","slug":"page-information","children":[]},{"level":2,"title":"Page Content","slug":"page-content","children":[]},{"level":2,"title":"Page Structure","slug":"page-structure","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":1.02,"words":306},"filePathRelative":"guide/page.md","localizedDate":"January 1, 2020"}');
var page_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$J
}, Symbol.toStringTag, { value: "Module" }));
const data$I = JSON.parse('{"key":"v-fffb8e28","path":"/guide/","title":"Guides","lang":"en-US","frontmatter":{"title":"Guides","index":false,"icon":"creative","category":["Guide"],"summary":"Catalog Markdown Enhance; Page Config; Function Disable; Encryption Demo;","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/guide/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Guides"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Catalog","slug":"catalog","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.07,"words":21},"filePathRelative":"guide/README.md","localizedDate":"July 25, 2022"}');
var index_html$1x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$I
}, Symbol.toStringTag, { value: "Module" }));
const data$H = JSON.parse('{"key":"v-c0291160","path":"/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(D2).html","title":"\uAD50\uC721-1(D2Site Review)","lang":"en-US","frontmatter":{"icon":"edit","title":"\uAD50\uC721-1(D2Site Review)","date":"2021-04-13T00:00:00.000Z","category":["JavaScript","Study"],"tag":["TeamLeader Education"],"summary":"[D2 \uC0AC\uC774\uD2B8 \uB9AC\uBDF0] 1. 2015\uB144\uB3C4 \uAD6C\uAE00 \uB9F5\uC5D0\uC11C \uC4F0\uBA74\uC11C.. 05\uB144\uB3C4 ajax \uBD80\uD65C\uB428. .. \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4 v8 \uC5D4\uC9C4\uC774 \uB9CC\uB4E4\uC5B4\uC9D0 .. \uD575\uC2EC\uC740 \uBAA8\uB4C8\uD654 export, import \uB97C \uC4F0\uAE30 \uC2DC\uC791\uD568 vuejs, nodejs \uC5D0\uC11C \uB9CE\uC774 \uC500 import\uB97C \uC4F0\uB294 \uAC83\uB3C4 \uC788\uACE0, require \uB97C \uC4F0\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB294\uB370 \uC774\uAC8C \uC11C\uBC84\uC0AC\uC774\uB4DC,","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(D2).html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\uAD50\uC721-1(D2Site Review)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"TeamLeader Education"}],["meta",{"property":"article:published_time","content":"2021-04-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. 2015\uB144\uB3C4","slug":"_1-2015\u1102\u1167\u11AB\u1103\u1169","children":[]},{"level":2,"title":"2. 2016\uB144\uB3C4","slug":"_2-2016\u1102\u1167\u11AB\u1103\u1169","children":[]},{"level":2,"title":"3. 2017\uB144","slug":"_3-2017\u1102\u1167\u11AB","children":[]},{"level":2,"title":"4. 2018\uB144","slug":"_4-2018\u1102\u1167\u11AB","children":[]},{"level":2,"title":"5. 2019\uB144","slug":"_5-2019\u1102\u1167\u11AB","children":[]},{"level":2,"title":"6. 2020\uB144","slug":"_6-2020\u1102\u1167\u11AB","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2).md","localizedDate":"April 13, 2021"}');
var _______1_D2__html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$H
}, Symbol.toStringTag, { value: "Module" }));
const data$G = JSON.parse('{"key":"v-3e3fb02a","path":"/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(JS).html","title":"\uAD50\uC721-1","lang":"en-US","frontmatter":{"icon":"edit","title":"\uAD50\uC721-1","date":"2021-04-13T00:00:00.000Z","category":["JavaScript","Study"],"tag":["TeamLeader Education"],"summary":"2021.04.13 javascript \uAE30\uBCF8 ECMA5 \uAC00 \uD604\uC7AC \uD45C\uC900\uC774\uACE0, ECMA6 \uB294 \uC544\uB2D8 \uADFC\uB370 \uC9C0\uAE08 \uACF5\uBD80\uD558\uB294 \uC0AC\uC774\uD2B8\uB294 \uBAA8\uB358 \uD658\uACBD\uC784. 1. JavaScript\uB294... ECMAscript\uAC00 \uC6D0\uB798 \uBA85\uCE6D \uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4\uC774 \uB3CC\uC544\uAC00\uC57C \uD568. (\uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uB2E4\uB984) \u203B ie\uB294 ecma6\uB97C \uC9C0\uC6D0\uC548\uD558\uACE0, \uB2E4 \uC9C0\uC6D0\uD568. ie\uB9CC \uC548\uC4F0\uBA74 \uB428. ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-1(JS).html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\uAD50\uC721-1"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"TeamLeader Education"}],["meta",{"property":"article:published_time","content":"2021-04-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. JavaScript\uB294...","slug":"_1-javascript\u1102\u1173\u11AB","children":[{"level":3,"title":"\uC5D4\uC9C4\uC758 \uC885\uB958","slug":"\u110B\u1166\u11AB\u110C\u1175\u11AB\u110B\u1174-\u110C\u1169\u11BC\u1105\u1172","children":[]},{"level":3,"title":"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C transipile \uB420 \uC218 \uC788\uB294 \uC5B8\uC5B4\uB4E4.","slug":"\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173\u1105\u1169-transipile-\u1103\u116C\u11AF-\u1109\u116E-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u110B\u1165\u11AB\u110B\u1165\u1103\u1173\u11AF","children":[]}]},{"level":2,"title":"2. \uB9E4\uB274\uC5BC\uACFC \uBA85\uC138\uC11C","slug":"_2-\u1106\u1162\u1102\u1172\u110B\u1165\u11AF\u1100\u116A-\u1106\u1167\u11BC\u1109\u1166\u1109\u1165","children":[]},{"level":2,"title":"3. \uCF54\uB4DC \uC5D0\uB514\uD130","slug":"_3-\u110F\u1169\u1103\u1173-\u110B\u1166\u1103\u1175\u1110\u1165","children":[]},{"level":2,"title":"4. \uC6F9\uD45C\uC900,","slug":"_4-\u110B\u1170\u11B8\u1111\u116D\u110C\u116E\u11AB","children":[]},{"level":2,"title":"5. \uCF54\uB4DC \uAD6C\uC870","slug":"_5-\u110F\u1169\u1103\u1173-\u1100\u116E\u110C\u1169","children":[]},{"level":2,"title":"6. \uBCC0\uC218\uC640 \uC0C1\uC218","slug":"_6-\u1107\u1167\u11AB\u1109\u116E\u110B\u116A-\u1109\u1161\u11BC\u1109\u116E","children":[]},{"level":2,"title":"1. hoisting","slug":"_1-hoisting","children":[]},{"level":2,"title":"2. Execution Context","slug":"_2-execution-context","children":[]},{"level":2,"title":"3. closure","slug":"_3-closure","children":[]},{"level":2,"title":"4. object, array, function","slug":"_4-object-array-function","children":[]},{"level":2,"title":"6. \uC790\uB8CC\uD615","slug":"_6-\u110C\u1161\u1105\u116D\u1112\u1167\u11BC","children":[]},{"level":2,"title":"7. getter\uC640 setter","slug":"_7-getter\u110B\u116A-setter","children":[]},{"level":2,"title":"8. alert, prompt, confirm","slug":"_8-alert-prompt-confirm","children":[]},{"level":2,"title":"9. \uD615\uBCC0\uD658","slug":"_9-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB","children":[]},{"level":2,"title":"10. \uAE30\uBCF8\uC5F0\uC0B0\uC790","slug":"_10-\u1100\u1175\u1107\u1169\u11AB\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161","children":[]},{"level":2,"title":"11. \uBE44\uAD50\uC5F0\uC0B0\uC790","slug":"_11-\u1107\u1175\u1100\u116D\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161","children":[]},{"level":2,"title":"12. if\uBB38 ? \uC870\uAC74\uCC98\uB9AC.","slug":"_12-if\u1106\u116E\u11AB-\u110C\u1169\u1100\u1165\u11AB\u110E\u1165\u1105\u1175","children":[]},{"level":2,"title":"13. \uB17C\uB9AC \uC5F0\uC0B0\uC790","slug":"_13-\u1102\u1169\u11AB\u1105\u1175-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161","children":[]},{"level":2,"title":"14. null \uBCD1\uD569 \uC5F0\uC0B0\uC790","slug":"_14-null-\u1107\u1167\u11BC\u1112\u1161\u11B8-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161","children":[]},{"level":2,"title":"15. while, for \uAD6C\uBB38","slug":"_15-while-for-\u1100\u116E\u1106\u116E\u11AB","children":[]},{"level":2,"title":"16. switch \uBB38","slug":"_16-switch-\u1106\u116E\u11AB","children":[]},{"level":2,"title":"17. \uD568\uC218","slug":"_17-\u1112\u1161\u11B7\u1109\u116E","children":[]},{"level":2,"title":"18. arrow function","slug":"_18-arrow-function","children":[]},{"level":2,"title":"1. \uD06C\uB86C\uC73C\uB85C \uB514\uBC84\uAE45\uD558\uAE30","slug":"_1-\u110F\u1173\u1105\u1169\u11B7\u110B\u1173\u1105\u1169-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":2,"title":"2. \uCF54\uB529 \uC2A4\uD0C0\uC77C","slug":"_2-\u110F\u1169\u1103\u1175\u11BC-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF","children":[]},{"level":2,"title":"3. \uC8FC\uC11D","slug":"_3-\u110C\u116E\u1109\u1165\u11A8","children":[]},{"level":2,"title":"4. \uD14C\uC2A4\uD2B8 \uC790\uB3D9\uD654 mocha","slug":"_4-\u1110\u1166\u1109\u1173\u1110\u1173-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A-mocha","children":[]},{"level":2,"title":"5. \uD3F4\uB9AC\uD544","slug":"_5-\u1111\u1169\u11AF\u1105\u1175\u1111\u1175\u11AF","children":[]},{"level":2,"title":"1. \uAC1D\uCCB4","slug":"_1-\u1100\u1162\u11A8\u110E\u1166","children":[]},{"level":2,"title":"2. \uCC38\uC870\uC5D0 \uC758\uD55C \uAC1D\uCCB4 \uBCF5\uC0AC","slug":"_2-\u110E\u1161\u11B7\u110C\u1169\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1107\u1169\u11A8\u1109\u1161","children":[]},{"level":2,"title":"3. \uAC00\uBE44\uC9C0 \uCEEC\uB809\uC158","slug":"_3-\u1100\u1161\u1107\u1175\u110C\u1175-\u110F\u1165\u11AF\u1105\u1166\u11A8\u1109\u1167\u11AB","children":[]},{"level":2,"title":"4. \uBA54\uC11C\uB4DC\uC640 \\"this\\" (*\uC911\uC694)","slug":"_4-\u1106\u1166\u1109\u1165\u1103\u1173\u110B\u116A-this-\u110C\u116E\u11BC\u110B\u116D","children":[]},{"level":2,"title":"\uC6D0\uC11C \uC811\uC218 \uC0DD\uC131\uD234\uC5D0\uB294..","slug":"\u110B\u116F\u11AB\u1109\u1165-\u110C\u1165\u11B8\u1109\u116E-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1110\u116E\u11AF\u110B\u1166\u1102\u1173\u11AB","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":1.93,"words":579},"filePathRelative":"posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS).md","localizedDate":"April 13, 2021"}');
var _______1_JS__html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$G
}, Symbol.toStringTag, { value: "Module" }));
const data$F = JSON.parse('{"key":"v-65e0cd62","path":"/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-2.html","title":"\uAD50\uC721-2(JavaScript)","lang":"en-US","frontmatter":{"icon":"edit","title":"\uAD50\uC721-2(JavaScript)","date":"2021-04-14T00:00:00.000Z","category":["JavaScript","Study"],"tag":["TeamLeader Education"],"summary":"[\uAC1D\uCCB4:\uAE30\uBCF8 \uC774\uC5B4\uC11C] arrow function \uC774 \uB098\uC628 \uBC30\uACBD this\uB294 \uB7F0\uD0C0\uC784 \uC2DC \uACB0\uC815 \uB428 \uC0DD\uC131\uC790 \uD568\uC218\uC758 \uACBD\uC6B0 \uC774\uB77C\uACE0 \uD55C\uB2E4\uBA74 User(\\"aaa\\") \uC774\uB7F0\uC2DD\uC73C\uB85C \uD558\uBA74 \uC548\uB418\uACE0 new User(\\"aaa\\") new\uB97C \uBD99\uC5EC\uC918\uC57C \uD574\uB2F9 \uAC1D\uCCB4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C4\uB2E4. function(par, par2, ...) \uD544\uC218 \uD30C\uB77C\uBBF8\uD130\uB97C \uB118\uAE30\uACE0, \uADF8 \uC678\uC5D0\uB294","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-2.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\uAD50\uC721-2(JavaScript)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"TeamLeader Education"}],["meta",{"property":"article:published_time","content":"2021-04-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"[\uC790\uB8CC\uAD6C\uC870, \uC790\uB8CC\uD615]","slug":"\u110C\u1161\u1105\u116D\u1100\u116E\u110C\u1169-\u110C\u1161\u1105\u116D\u1112\u1167\u11BC","children":[]},{"level":2,"title":"[\uAC1D\uCCB4 \uD504\uB85C\uD37C\uD2F0 \uC124\uC815]","slug":"\u1100\u1162\u11A8\u110E\u1166-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC","children":[]},{"level":2,"title":"[\uD074\uB798\uC2A4]","slug":"\u110F\u1173\u11AF\u1105\u1162\u1109\u1173","children":[]},{"level":2,"title":"[\uC5D0\uB7EC \uD578\uB4E4\uB9C1]","slug":"\u110B\u1166\u1105\u1165-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1175\u11BC","children":[]},{"level":2,"title":"[\uD504\uB77C\uBBF8\uC2A4 async, await]","slug":"\u1111\u1173\u1105\u1161\u1106\u1175\u1109\u1173-async-await","children":[]},{"level":2,"title":"[\uC81C\uB108\uB808\uC774\uD130\uC640 \uBE44\uB3D9\uAE30 \uC774\uD130\uB808\uC774\uD130]","slug":"\u110C\u1166\u1102\u1165\u1105\u1166\u110B\u1175\u1110\u1165\u110B\u116A-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u110B\u1175\u1110\u1165\u1105\u1166\u110B\u1175\u1110\u1165","children":[]},{"level":2,"title":"[\uBAA8\uB4C8]","slug":"\u1106\u1169\u1103\u1172\u11AF","children":[]},{"level":2,"title":"[\uAE30\uD0C0]","slug":"\u1100\u1175\u1110\u1161","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":1.16,"words":349},"filePathRelative":"posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2.md","localizedDate":"April 14, 2021"}');
var _______2_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$F
}, Symbol.toStringTag, { value: "Module" }));
const data$E = JSON.parse('{"key":"v-6d19ebae","path":"/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(JS).html","title":"\uAD50\uC721-3(JavaScript)","lang":"en-US","frontmatter":{"icon":"edit","title":"\uAD50\uC721-3(JavaScript)","date":"2021-04-15T00:00:00.000Z","category":["JavaScript","Study"],"tag":["TeamLeader Education"],"summary":"\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uACF5\uBD80 [\uC774\uBCA4\uD2B8] mouseover, mouseout mouseenter, mouseleave \uC804\uC790\uB294 \uCEA1\uCC98\uB9C1, \uBC84\uBE14\uB9C1 \uC790\uB3D9 \uD6C4\uC790\uB294 jquery \uC774\uBCA4\uD2B8, \uBC84\uBE14\uB9C1 \uCEA1\uCC98\uB9C1 \uC548\uD568. keydown keyup \uC0AC\uC774 keypress \uB77C\uB294 \uC560\uAC00 \uC788\uC74C \uBB50\uAC00 \uB20C\uB838\uB294\uC9C0 \uBCFC \uB54C \uC0AC\uC6A9 \uC774\uBCA4\uD2B8, jquery\uC5D0\uC11C remove, remov","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(JS).html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\uAD50\uC721-3(JavaScript)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"TeamLeader Education"}],["meta",{"property":"article:published_time","content":"2021-04-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"[\uC774\uBCA4\uD2B8]","slug":"\u110B\u1175\u1107\u1166\u11AB\u1110\u1173","children":[]},{"level":2,"title":"[\uBB38\uC11C\uC640 \uB9AC\uC18C\uC2A4 \uB85C\uB529]","slug":"\u1106\u116E\u11AB\u1109\u1165\u110B\u116A-\u1105\u1175\u1109\u1169\u1109\u1173-\u1105\u1169\u1103\u1175\u11BC","children":[]},{"level":2,"title":"[\uAE30\uD0C0]","slug":"\u1100\u1175\u1110\u1161","children":[]},{"level":2,"title":"[VUE]","slug":"vue","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.59,"words":177},"filePathRelative":"posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS).md","localizedDate":"April 15, 2021"}');
var _______3_JS__html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$E
}, Symbol.toStringTag, { value: "Module" }));
const data$D = JSON.parse('{"key":"v-ed41da8c","path":"/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(pwa).html","title":"\uAD50\uC721-3(PWA)","lang":"en-US","frontmatter":{"icon":"edit","title":"\uAD50\uC721-3(PWA)","date":"2021-04-15T00:00:00.000Z","category":["JavaScript","Study"],"tag":["PWA","TeamLeader Education"],"summary":"21.04.15 PWA \\r\uC6F91 - \uADF8\uB0E5 \uBCF4\uC5EC\uC8FC\uAE30 \uC2DD ; \\r\uC6F92 - \uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638\uC791\uC6A9 ; \\r\uC6F93 ; \uC571 > \uC6F9 > \uC6F9\uBDF0 (\uD558\uC774\uBE0C\uB9AC\uB4DC \uC6F9) : \\r\uC6F9\uBDF0 : \uBAA8\uBC14\uC77C \uC6F9\uC758 \uB290\uB9B0\uAC78 \uADF8\uB300\uB85C \uAC00\uAC8C \uB428. \uB108\uBB34 \uB290\uB9AC\uB2C8\uAE4C \uACC4\uC18D \uACE0\uBBFC ; \\rNative \uC5B8\uC5B4 : \uB124\uC774\uD2F0\uBE0C \uC571 \uD558\uB098\uB97C \uB9CC\uB4E4\uBA74 ios android\uC5D0\uC11C \uC9C0\uC6D0\uD574\uC8FC\uACA0\uB2E4. ; \\r\uBAA8\uBC14\uC77C \uC571 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-3(pwa).html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\uAD50\uC721-3(PWA)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"PWA"}],["meta",{"property":"article:tag","content":"TeamLeader Education"}],["meta",{"property":"article:published_time","content":"2021-04-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"PWA","slug":"pwa","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.2,"words":61},"filePathRelative":"posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(pwa).md","localizedDate":"April 15, 2021"}');
var _______3_pwa__html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$D
}, Symbol.toStringTag, { value: "Module" }));
const data$C = JSON.parse('{"key":"v-694a7ea0","path":"/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-4.html","title":"\uAD50\uC721-4(jQuery)","lang":"en-US","frontmatter":{"icon":"edit","title":"\uAD50\uC721-4(jQuery)","date":"2021-04-16T00:00:00.000Z","category":["JavaScript","Study"],"tag":["TeamLeader Education"],"summary":"[jQuery \uAD50\uC721] 1. CORE jQuery = $ \uAC19\uC74C 2. Selector \uADF8\uB0E5 \uC0AC\uC6A9\uD558\uB2E4\uBCF4\uBA74 \uC54C\uAC8C \uB41C\uB2E4. : hide, visible, even, order \uBB50 \uC774\uB7F0 \uAC83\uB4E4 css selector\uB97C \uACF5\uBD80\uD558\uB294\uAC8C \uC624\uD788\uB824 \uB354 \uB098\uC744 \uC218 \uC788\uB2E4. . \uC740 \uD074\uB798\uC2A4 \uC120\uD0DD\uC790 # \uC740 \uC544\uC774\uB514 \uC120\uD0DD\uC790 attr \uADF8\uB8F9\uC120\uD0DD\uC790 A, B : A\uB610\uB294","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Education/%ED%8C%8C%ED%8A%B8%EC%9E%A5%EB%8B%98%20%EA%B5%90%EC%9C%A1-4.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\uAD50\uC721-4(jQuery)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T07:55:34.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"TeamLeader Education"}],["meta",{"property":"article:published_time","content":"2021-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T07:55:34.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1. CORE","slug":"_1-core","children":[]},{"level":2,"title":"2. Selector","slug":"_2-selector","children":[]},{"level":2,"title":"3. Trversing (\uC120\uD0DD\uD55C \uC560\uB97C \uAC00\uC9C0\uACE0 \uC704\uC544\uB798\uB85C \uC62E\uAE30\uAC70\uB098 \uBB50 \uADF8\uB7F0\uAC70)","slug":"_3-trversing-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u11AB-\u110B\u1162\u1105\u1173\u11AF-\u1100\u1161\u110C\u1175\u1100\u1169-\u110B\u1171\u110B\u1161\u1105\u1162\u1105\u1169-\u110B\u1169\u11B1\u1100\u1175\u1100\u1165\u1102\u1161-\u1106\u116F-\u1100\u1173\u1105\u1165\u11AB\u1100\u1165","children":[]},{"level":2,"title":"4. Manipulation (\uC870\uC791) \uC120\uD0DD\uD55C \uC560\uB97C \uAC00\uC9C0\uACE0 \uC870\uC791\uD558\uB294 \uAC83","slug":"_4-manipulation-\u110C\u1169\u110C\u1161\u11A8-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u11AB-\u110B\u1162\u1105\u1173\u11AF-\u1100\u1161\u110C\u1175\u1100\u1169-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA","children":[]},{"level":2,"title":"5. Event","slug":"_5-event","children":[]},{"level":2,"title":"6. Effects","slug":"_6-effects","children":[]},{"level":2,"title":"7. \uAE30\uD0C0","slug":"_7-\u1100\u1175\u1110\u1161","children":[]},{"level":2,"title":"8. utitlities","slug":"_8-utitlities","children":[]}],"git":{"createdTime":1658735734000,"updatedTime":1658735734000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.89,"words":268},"filePathRelative":"posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4.md","localizedDate":"April 16, 2021"}');
var _______4_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$C
}, Symbol.toStringTag, { value: "Module" }));
const data$B = JSON.parse('{"key":"v-e1203d06","path":"/posts/jQuery/1%EC%9E%A5%20jQuery%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0.html","title":"jQuery-1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70","lang":"en-US","frontmatter":{"icon":"edit","title":"jQuery-1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70","date":"2021-04-12T00:00:00.000Z","category":["jQuery","Study"],"tag":["jQuery"],"summary":"1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70 1.3 jQuery \uAE30\uCD08 jQuery\uB294 HTML \uD398\uC774\uC9C0\uC758 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC870\uD68C\uD55C \uB2E4\uC74C \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294\uB370 \uC911\uC810\uC744 \uB454\uB2E4. 1.3.1 jQuery() \uD568\uC218 \uC140\uB809\uD130\uB294 \uC678\uBD80 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8 (css\uC640 \uAC19\uC740)\uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8 \uADF8\uB8F9\uC744 \uCC38\uC870\uD560 \uBC29\uBC95\uC774 \uD544\uC694\uD588\uAE30\uC5D0 \uB9CC\uB4E4\uC5B4\uC84C\uB2E4. jQuery","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/jQuery/1%EC%9E%A5%20jQuery%EB%A5%BC%20%EC%8B%9C%EC%9E%91%ED%95%98%EB%A9%B0.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"jQuery-1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T09:03:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"jQuery"}],["meta",{"property":"article:published_time","content":"2021-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T09:03:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"1.3 jQuery \uAE30\uCD08","slug":"_1-3-jquery-\u1100\u1175\u110E\u1169","children":[{"level":3,"title":"1.3.1 jQuery() \uD568\uC218","slug":"_1-3-1-jquery-\u1112\u1161\u11B7\u1109\u116E","children":[]},{"level":3,"title":"1.3.2 \uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218","slug":"_1-3-2-\u110B\u1172\u1110\u1175\u11AF\u1105\u1175\u1110\u1175-\u1112\u1161\u11B7\u1109\u116E","children":[]},{"level":3,"title":"1.3.3 \uBB38\uC11C\uC900\uBE44\uD578\uB4E4\uB7EC","slug":"_1-3-3-\u1106\u116E\u11AB\u1109\u1165\u110C\u116E\u11AB\u1107\u1175\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1165","children":[]},{"level":3,"title":"1.3.4 DOM \uC5D8\uB9AC\uBA3C\uD2B8 \uC0DD\uC131\uD558\uAE30","slug":"_1-3-4-dom-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175","children":[]}]},{"level":2,"title":"1.4 \uC694\uC57D","slug":"_1-4-\u110B\u116D\u110B\u1163\u11A8","children":[]}],"git":{"createdTime":1658739798000,"updatedTime":1658739798000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.32,"words":96},"filePathRelative":"posts/jQuery/1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70.md","localizedDate":"April 12, 2021"}');
var _1__jQuery_______html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$B
}, Symbol.toStringTag, { value: "Module" }));
const data$A = JSON.parse('{"key":"v-ba33a14a","path":"/posts/jQuery/2%EC%9E%A5%20%EA%B8%B0%EB%8A%A5%EC%9D%B4%20%ED%99%95%EC%9E%A5%EB%90%9C%20%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%20%EC%A7%91%ED%95%A9%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.html","title":"jQuery-2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.","lang":"en-US","frontmatter":{"icon":"edit","title":"jQuery-2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.","date":"2021-04-12T00:00:00.000Z","category":["jQuery","Study"],"tag":["jQuery"],"summary":"2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30. 2.1 \uC870\uC791\uD558\uB824\uB294 \uC5D8\uB9AC\uBA3C\uD2B8 \uC120\uD0DD\uD558\uAE30. \uC77C\uB2E8 \uC120\uD0DD\uD558\uB824\uBA74 \uD574\uB2F9 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC124\uBA85\uD560 \uC904 \uC54C\uC544\uC57C\uD55C\uB2E4 jQuery\uB294 \uADF8\uB7F0\uBA74\uC5D0\uC11C \uC5B4\uB5A4 \uC5D8\uB9AC\uBA3C\uD2B8\uB77C\uB3C4 \uC138\uB828,\uAC04\uACB0,\uC27D\uAC8C \uC124\uBA85\uD560 \uC218 \uC788\uB294 \uC140\uB809\uD130\uB97C \uB9CC\uB4E4\uC5C8\uB2E4. \uAE30\uBCF8\uC774 \uB418\uB294 \uAC83\uC740 \\"CSS\uBB38\uBC95\\"\uC774\uB2E4. 2.1.1 \uAE30\uBCF8 CSS \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30 \uC608\uC2DC\uB97C \uD1B5\uD574 \uBCF4","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/jQuery/2%EC%9E%A5%20%EA%B8%B0%EB%8A%A5%EC%9D%B4%20%ED%99%95%EC%9E%A5%EB%90%9C%20%EC%97%98%EB%A6%AC%EB%A8%BC%ED%8A%B8%20%EC%A7%91%ED%95%A9%20%EC%83%9D%EC%84%B1%ED%95%98%EA%B8%B0.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"jQuery-2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T09:03:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"jQuery"}],["meta",{"property":"article:published_time","content":"2021-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T09:03:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"2.1 \uC870\uC791\uD558\uB824\uB294 \uC5D8\uB9AC\uBA3C\uD2B8 \uC120\uD0DD\uD558\uAE30.","slug":"_2-1-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1105\u1167\u1102\u1173\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175","children":[{"level":3,"title":"2.1.1 \uAE30\uBCF8 CSS \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30","slug":"_2-1-1-\u1100\u1175\u1107\u1169\u11AB-css-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"2.1.2 \uC790\uC2DD \uC140\uB809\uD130, \uCEE8\uD14C\uC774\uB108 \uC140\uB809\uD130, \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30","slug":"_2-1-2-\u110C\u1161\u1109\u1175\u11A8-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"2.1.3 \uC704\uCE58\uB85C \uC120\uD0DD\uD558\uAE30","slug":"_2-1-3-\u110B\u1171\u110E\u1175\u1105\u1169-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"2.1.4 jQuery \uC815\uC758 \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30","slug":"_2-1-4-jquery-\u110C\u1165\u11BC\u110B\u1174-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175","children":[]}]},{"level":2,"title":"2.2 \uC0C8\uB85C\uC6B4 HTML \uC0DD\uC131\uD558\uAE30","slug":"_2-2-\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-html-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":2,"title":"2.3 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uAD00\uB9AC\uD558\uAE30","slug":"_2-3-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1100\u1175","children":[{"level":3,"title":"2.3.1 \uD655\uC7A5\uB41C \uC9D1\uD569\uC758 \uD06C\uAE30 \uACB0\uC815\uD558\uAE30","slug":"_2-3-1-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1174-\u110F\u1173\u1100\u1175-\u1100\u1167\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"2.3.2 \uD655\uC7A5 \uC9D1\uD569\uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8 \uD68D\uB4DD\uD558\uAE30","slug":"_2-3-2-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1166\u1109\u1165-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1112\u116C\u11A8\u1103\u1173\u11A8\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"2.3.3 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC7AC\uD3B8\uC131\uD558\uAE30","slug":"_2-3-3-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110C\u1162\u1111\u1167\u11AB\u1109\u1165\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"2.3.6 jQuery \uCCB4\uC778 \uAD00\uB9AC\uD558\uAE30","slug":"_2-3-6-jquery-\u110E\u1166\u110B\u1175\u11AB-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1100\u1175","children":[]}]}],"git":{"createdTime":1658739798000,"updatedTime":1658739798000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":1.34,"words":402},"filePathRelative":"posts/jQuery/2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.md","localizedDate":"April 12, 2021"}');
var _2_______________________html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$A
}, Symbol.toStringTag, { value: "Module" }));
const data$z = JSON.parse('{"key":"v-71978c0a","path":"/posts/jQuery/3%EC%9E%A5%20jQuery%EB%A1%9C%20%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%20%EC%83%9D%EB%AA%85%20%EB%B6%88%EC%96%B4%EB%84%A3%EA%B8%B0.html","title":"jQuery-3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30","lang":"en-US","frontmatter":{"icon":"edit","title":"jQuery-3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30","date":"2021-04-12T00:00:00.000Z","category":["jQuery","Study"],"tag":["jQuery"],"summary":"3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30 DHTML : Dynamic HTML \uB3D9\uC801 HTML\uC774\uB780 \uB73B\uC774\uBA70 \uADF8\uB0E5 \uCEE8\uD150\uCE20\uB9CC \uCD9C\uB825\uD574\uC8FC\uB294 \uD398\uC774\uC9C0\uAC00 \uC544\uB2CC, \uC720\uC800\uB85C\uBD80\uD130 \uC815\uBCF4\uB97C \uBC1B\uC544\uC640\uC11C \uC815\uBCF4\uB97C \uAC00\uC9C0\uACE0 \uC591\uBC29\uD5A5 \uC0C1\uD638\uC791\uC6A9\uC744 \uD558\uB294 \uD398\uC774\uC9C0\uB97C \uC758\uBBF8\uD55C\uB2E4. HTML, CSS, javascript 3\uAC00\uC9C0 \uC5B8\uC5B4\uB85C \uAD6C\uC131\uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB418\uB294\uB370 3\uC7A5\uC5D0\uC11C\uB294 jQ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/jQuery/3%EC%9E%A5%20jQuery%EB%A1%9C%20%ED%8E%98%EC%9D%B4%EC%A7%80%EC%97%90%20%EC%83%9D%EB%AA%85%20%EB%B6%88%EC%96%B4%EB%84%A3%EA%B8%B0.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"jQuery-3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T09:03:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"jQuery"}],["meta",{"property":"article:published_time","content":"2021-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T09:03:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"3.1 \uC5D8\uB9AC\uBA3C\uD2B8 \uD504\uB85C\uD37C\uD2F0\uC640 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC870\uC791\uD558\uAE30","slug":"_3-1-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175\u110B\u116A-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1100\u1175","children":[{"level":3,"title":"3.1.1 \uC5D8\uB9AC\uBA3C\uD2B8 \uD504\uB85C\uD37C\uD2F0 \uC870\uC791\uD558\uAE30","slug":"_3-1-1-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.1.2 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC12 \uAC00\uC838\uC624\uAE30","slug":"_3-1-2-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u11B9-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175","children":[]},{"level":3,"title":"3.1.4 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC81C\uAC70\uD558\uAE30","slug":"_3-1-4-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.1.5 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC00\uC9C0\uACE0 \uB180\uAE30","slug":"_3-1-5-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u110C\u1175\u1100\u1169-\u1102\u1169\u11AF\u1100\u1175","children":[]}]},{"level":2,"title":"3.2 \uC5D8\uB9AC\uBA3C\uD2B8 \uC2A4\uD0C0\uC77C \uBCC0\uACBD\uD558\uAE30","slug":"_3-2-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1112\u1161\u1100\u1175","children":[{"level":3,"title":"3.2.1 \uD074\uB798\uC2A4 \uCD94\uAC00\uD558\uACE0 \uC81C\uAC70\uD558\uAE30","slug":"_3-2-1-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1169-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.2.2 \uC2A4\uD0C0\uC77C \uC5BB\uACE0 \uC124\uC815\uD558\uAE30","slug":"_3-2-2-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110B\u1165\u11AE\u1100\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.2.3 \uC2A4\uD0C0\uC77C\uACFC \uAD00\uB828\uB41C \uC720\uC6A9\uD55C \uCEE4\uB9E8\uB4DC","slug":"_3-2-3-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1100\u116A-\u1100\u116A\u11AB\u1105\u1167\u11AB\u1103\u116C\u11AB-\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173","children":[]}]},{"level":2,"title":"3.3 \uC5D8\uB9AC\uBA3C\uD2B8 \uCF58\uD150\uCE20 \uC124\uC815\uD558\uAE30","slug":"_3-3-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175","children":[{"level":3,"title":"3.3.1 HTML\uACFC \uD14D\uC2A4\uD2B8 \uCF58\uD150\uCE20 \uB300\uCCB4\uD558\uAE30","slug":"_3-3-1-html\u1100\u116A-\u1110\u1166\u11A8\u1109\u1173\u1110\u1173-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u1103\u1162\u110E\u1166\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.3.2 \uC5D8\uB9AC\uBA3C\uD2B8 \uBCF5\uC0AC\uD558\uAE30\uC640 \uC774\uB3D9\uD558\uAE30","slug":"_3-3-2-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175\u110B\u116A-\u110B\u1175\u1103\u1169\u11BC\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.3.3 \uC5D8\uB9AC\uBA3C\uD2B8 \uAC10\uC2F8\uAE30","slug":"_3-3-3-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1100\u1161\u11B7\u110A\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.3.4 \uC5D8\uB9AC\uBA3C\uD2B8 \uC81C\uAC70\uD558\uAE30","slug":"_3-3-4-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175","children":[]},{"level":3,"title":"3.3.5 \uC5D8\uB9AC\uBA3C\uD2B8 \uBCF5\uC0AC\uD558\uAE30","slug":"_3-3-5-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175","children":[]}]},{"level":2,"title":"3.4 \uD3FC \uC5D8\uB9AC\uBA3C\uD2B8 \uAC12 \uB2E4\uB8E8\uAE30","slug":"_3-4-\u1111\u1169\u11B7-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1100\u1161\u11B9-\u1103\u1161\u1105\u116E\u1100\u1175","children":[]}],"git":{"createdTime":1658739798000,"updatedTime":1658739798000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":1.18,"words":355},"filePathRelative":"posts/jQuery/3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30.md","localizedDate":"April 12, 2021"}');
var _3__jQuery_______________html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$z
}, Symbol.toStringTag, { value: "Module" }));
const data$y = JSON.parse('{"key":"v-18558afe","path":"/posts/jQuery/4%EC%9E%A5%20%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EB%AA%A8%EB%93%A0%20%EA%B2%83%EC%9D%98%20%EC%8B%9C%EC%9E%91.html","title":"jQuery-4\uC7A5 \uC774\uBCA4\uD2B8 \uBAA8\uB4E0\uAC83\uC758 \uC2DC\uC791","lang":"en-US","frontmatter":{"icon":"edit","title":"jQuery-4\uC7A5 \uC774\uBCA4\uD2B8 \uBAA8\uB4E0\uAC83\uC758 \uC2DC\uC791","date":"2021-04-12T00:00:00.000Z","category":["jQuery","Study"],"tag":["jQuery"],"summary":"4.1 \uBE0C\uB77C\uC6B0\uC800 \uC774\uBCA4\uD2B8 \uBAA8\uB378 \uC774\uD574\uD558\uAE30 \uBAA8\uC9C8\uB77C \uAE30\uBC18\uC758 \uBE0C\uB77C\uC6B0\uC800 : \uD30C\uC774\uC5B4\uD3ED\uC2A4, \uCE74\uBBF8\uB178 \uCD5C\uC2E0 \uD45C\uC900 \uC900\uC218\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800 : \uC0AC\uD30C\uB9AC, \uC624\uD398\uB77C \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC : \uC790\uCCB4 \uD45C\uC900\uC774 \uC788\uC73C\uBA70 \uC790\uC2E0\uB9CC\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9 \uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB2EC\uB77C \uBC1C\uC0DD\uD558\uB294 \uC791\uC5C5\uC744 \uC5B4\uB5BB\uAC8C \uCC98\uB9AC\uD574\uC904 \uAC83\uC774\uB0D0. 4.1.1 DOM \uB808\uBCA8 0 \uC774\uBCA4\uD2B8 \uBAA8\uB378 onmous","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/jQuery/4%EC%9E%A5%20%EC%9D%B4%EB%B2%A4%ED%8A%B8_%EB%AA%A8%EB%93%A0%20%EA%B2%83%EC%9D%98%20%EC%8B%9C%EC%9E%91.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"jQuery-4\uC7A5 \uC774\uBCA4\uD2B8 \uBAA8\uB4E0\uAC83\uC758 \uC2DC\uC791"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T09:03:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"jQuery"}],["meta",{"property":"article:published_time","content":"2021-04-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T09:03:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"4.1 \uBE0C\uB77C\uC6B0\uC800 \uC774\uBCA4\uD2B8 \uBAA8\uB378 \uC774\uD574\uD558\uAE30","slug":"_4-1-\u1107\u1173\u1105\u1161\u110B\u116E\u110C\u1165-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175","children":[{"level":3,"title":"4.1.1 DOM \uB808\uBCA8 0 \uC774\uBCA4\uD2B8 \uBAA8\uB378","slug":"_4-1-1-dom-\u1105\u1166\u1107\u1166\u11AF-0-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF","children":[]},{"level":3,"title":"4.1.2 DOM \uB808\uBCA8 2 \uC774\uBCA4\uD2B8 \uBAA8\uB378","slug":"_4-1-2-dom-\u1105\u1166\u1107\u1166\u11AF-2-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF","children":[]},{"level":3,"title":"4.1.3 \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC \uC774\uBCA4\uD2B8 \uBAA8\uB378","slug":"_4-1-3-\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA-\u110B\u1175\u11A8\u1109\u1173\u1111\u1173\u11AF\u1105\u1169\u1105\u1165-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF","children":[]}]},{"level":2,"title":"4.2 jQuery \uC774\uBCA4\uD2B8 \uBAA8\uB378","slug":"_4-2-jquery-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF","children":[]}],"git":{"createdTime":1658739798000,"updatedTime":1658739798000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.42,"words":126},"filePathRelative":"posts/jQuery/4\uC7A5 \uC774\uBCA4\uD2B8_\uBAA8\uB4E0 \uAC83\uC758 \uC2DC\uC791.md","localizedDate":"April 12, 2021"}');
var _4_______________html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$y
}, Symbol.toStringTag, { value: "Module" }));
const data$x = JSON.parse('{"key":"v-73115d7a","path":"/posts/Vue/Vuejs_3%EB%A0%88%EB%B2%A8_Reivew.html","title":"Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8","lang":"en-US","frontmatter":{"icon":"edit","title":"Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8","date":"2022-07-21T00:00:00.000Z","category":["Vue","Review"],"tag":["Review","Vue"],"summary":"Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8 \uAD50\uC721 \uC815\uBCF4 \\r\uAD50\uC721\uBA85 : Vue.js \uC644\uBCBD\uAC00\uC774\uB4DC - \uC2E4\uC2B5\uACFC \uB9AC\uD329\uD1A0\uB9C1\uC73C\uB85C \uBC30\uC6B0\uB294 \uC2E4\uC804 \uAC1C\uB150; \\r\uC2E0\uCCAD URL : https://inf.run/ptTX; \\r\uBCF8 \uAC15\uC758\uB294 \uC778\uD504\uB7F0\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 Vue \uB85C\uB4DC\uB9F5\uC758 3\uBC88\uC9F8 \uC2DC\uB9AC\uC988\uC785\uB2C8\uB2E4. ; (\uCD1D 1~5 Level\uB85C \uB098\uB258\uC5B4\uC838 \uC788\uC73C\uB2C8 \uC790\uC2E0\uC758 \uB808\uBCA8\uC5D0 \uB9DE\uB294 \uAC15\uC758\uBD80\uD130 ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Vue/Vuejs_3%EB%A0%88%EB%B2%A8_Reivew.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T09:03:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Review"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2022-07-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T09:03:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"\uAD50\uC721 \uC815\uBCF4","slug":"\u1100\u116D\u110B\u1172\u11A8-\u110C\u1165\u11BC\u1107\u1169","children":[]},{"level":2,"title":"\uAC15\uC758 \uB0B4\uC6A9\uC815\uB9AC","slug":"\u1100\u1161\u11BC\u110B\u1174-\u1102\u1162\u110B\u116D\u11BC\u110C\u1165\u11BC\u1105\u1175","children":[]},{"level":2,"title":"1) \uAD50\uC721\uC740 \uC5B4\uB560\uB098\uC694?","slug":"_1-\u1100\u116D\u110B\u1172\u11A8\u110B\u1173\u11AB-\u110B\u1165\u1104\u1162\u11BB\u1102\u1161\u110B\u116D","children":[]},{"level":2,"title":"2) \uC5B4\uB5A4 \uBD84\uB4E4\uAED8 \uCD94\uCC9C\uD558\uB294\uC9C0?","slug":"_2-\u110B\u1165\u1104\u1165\u11AB-\u1107\u116E\u11AB\u1103\u1173\u11AF\u1101\u1166-\u110E\u116E\u110E\u1165\u11AB\u1112\u1161\u1102\u1173\u11AB\u110C\u1175","children":[]}],"git":{"createdTime":1658739798000,"updatedTime":1658739798000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":0.22,"words":66},"filePathRelative":"posts/Vue/Vuejs_3\uB808\uBCA8_Reivew.md","localizedDate":"July 21, 2022"}');
var Vuejs_3___Reivew_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$x
}, Symbol.toStringTag, { value: "Module" }));
const data$w = JSON.parse(`{"key":"v-7318da4a","path":"/posts/Vue/Vue%EA%B0%95%EC%9D%98%EC%A0%95%EB%A6%AC.html","title":"Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC","lang":"en-US","frontmatter":{"icon":"edit","title":"Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC","date":"2022-02-12T00:00:00.000Z","category":["Vue","Study"],"tag":["Study","Vue"],"summary":"Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC [router \uC124\uACC4 \uD544\uC694 ] news ask jobs \uC138\uAC1C\uC758 \uD398\uC774\uC9C0\uAC00 \uD544\uC694\uD558\uACE0 \uC774\uB97C url\uC5D0 \uB9DE\uAC8C \uBFCC\uB824\uC8FC\uBA74 \uB428. \uD2B9\uC815 \uC0C1\uC138 \uD398\uC774\uC9C0\uAC00 \uB530\uB85C \uC788\uC74C \uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD398\uC774\uC9C0 (user view) [vue cli 2 vs vue cli 3]\\r\uBA85\uB839\uC5B4; \\r2.x : vue init '\uD504\uB85C\uC81D\uD2B8 \uD15C\uD50C\uB9BF \uC774\uB984' '\uD30C\uC77C ","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/posts/Vue/Vue%EA%B0%95%EC%9D%98%EC%A0%95%EB%A6%AC.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-07-25T09:03:18.000Z"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"article:tag","content":"Study"}],["meta",{"property":"article:tag","content":"Vue"}],["meta",{"property":"article:published_time","content":"2022-02-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2022-07-25T09:03:18.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"[router \uC124\uACC4 \uD544\uC694 ]","slug":"router-\u1109\u1165\u11AF\u1100\u1168-\u1111\u1175\u11AF\u110B\u116D","children":[]},{"level":2,"title":"[vue cli 2 vs vue cli 3]","slug":"vue-cli-2-vs-vue-cli-3","children":[]},{"level":2,"title":"[ES lint \uD574\uC81C\uD558\uB294 \uBC29\uBC95]","slug":"es-lint-\u1112\u1162\u110C\u1166\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8","children":[]},{"level":2,"title":"[vue\uC758 \uD504\uB85C\uC81D\uD2B8 \uC21C\uC11C]","slug":"vue\u110B\u1174-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u116E\u11AB\u1109\u1165","children":[]},{"level":2,"title":"[\uD0DC\uADF8 \uC0C8\uB86D\uAC8C \uB4F1\uB85D]","slug":"\u1110\u1162\u1100\u1173-\u1109\u1162\u1105\u1169\u11B8\u1100\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8","children":[]},{"level":2,"title":"[router-link to='url']","slug":"router-link-to-url","children":[]},{"level":2,"title":"[api]","slug":"api","children":[]},{"level":2,"title":"[this]","slug":"this","children":[]},{"level":2,"title":"[created]","slug":"created","children":[]},{"level":2,"title":"[\uBE44\uB3D9\uAE30\uCC98\uB9AC, callback, promise]","slug":"\u1107\u1175\u1103\u1169\u11BC\u1100\u1175\u110E\u1165\u1105\u1175-callback-promise","children":[]},{"level":2,"title":"Vuex \uAC04\uB2E8\uD55C \uAD6C\uC870\uB3C4","slug":"vuex-\u1100\u1161\u11AB\u1103\u1161\u11AB\u1112\u1161\u11AB-\u1100\u116E\u110C\u1169\u1103\u1169","children":[]},{"level":2,"title":"Destructuring (\uAD6C\uC870 \uBD84\uD574 \uBB38\uBC95)","slug":"destructuring-\u1100\u116E\u110C\u1169-\u1107\u116E\u11AB\u1112\u1162-\u1106\u116E\u11AB\u1107\u1165\u11B8","children":[]},{"level":2,"title":"vuejs map \uD5EC\uD37C\uC5D0 \uB300\uD558\uC5EC...","slug":"vuejs-map-\u1112\u1166\u11AF\u1111\u1165\u110B\u1166-\u1103\u1162\u1112\u1161\u110B\u1167","children":[{"level":3,"title":"1 \uD568\uC218\uB97C \uC0AC\uC6A9\uD568.","slug":"_1-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11B7","children":[]},{"level":3,"title":"2 \uC774\uC81C\uBD80\uD130\uB294 vuex \uB9F5\uD5EC\uD37C \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC00\uC838\uC62C \uAC83\uC774\uB2E4.","slug":"_2-\u110B\u1175\u110C\u1166\u1107\u116E\u1110\u1165\u1102\u1173\u11AB-vuex-\u1106\u1162\u11B8\u1112\u1166\u11AF\u1111\u1165-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u1100\u1161\u110C\u1167\u110B\u1169\u11AF-\u1100\u1165\u11BA\u110B\u1175\u1103\u1161","children":[]}]},{"level":2,"title":"Dynamic Route matching (\uB3D9\uC801 \uB77C\uC6B0\uD2B8 \uB9E4\uCE6D)","slug":"dynamic-route-matching-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173-\u1106\u1162\u110E\u1175\u11BC","children":[]},{"level":2,"title":"\uB77C\uC6B0\uD130 \uD2B8\uB79C\uC9C0\uC158","slug":"\u1105\u1161\u110B\u116E\u1110\u1165-\u1110\u1173\u1105\u1162\u11AB\u110C\u1175\u1109\u1167\u11AB","children":[]},{"level":2,"title":"\uB9AC\uD329\uD1A0\uB9C1","slug":"\u1105\u1175\u1111\u1162\u11A8\u1110\u1169\u1105\u1175\u11BC","children":[]},{"level":2,"title":"\uC0AC\uC6A9\uC790 \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130 \uD750\uB984","slug":"\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7","children":[]},{"level":2,"title":"slot \uC758 \uC0AC\uC6A9","slug":"slot-\u110B\u1174-\u1109\u1161\u110B\u116D\u11BC","children":[]},{"level":2,"title":"spinner","slug":"spinner","children":[]},{"level":2,"title":"\uD558\uC774\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8 (HOC)","slug":"\u1112\u1161\u110B\u1175\u110B\u1169\u1103\u1165-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-hoc","children":[]},{"level":2,"title":"Mixin","slug":"mixin","children":[]},{"level":2,"title":"\uB370\uC774\uD130 \uD638\uCD9C \uC2DC\uC810","slug":"\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1169\u110E\u116E\u11AF-\u1109\u1175\u110C\u1165\u11B7","children":[{"level":3,"title":"1. \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uD504 \uC0AC\uC774\uD074 \uD6C5","slug":"_1-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1161\u110B\u1175\u1111\u1173-\u1109\u1161\u110B\u1175\u110F\u1173\u11AF-\u1112\u116E\u11A8","children":[]},{"level":3,"title":"2. \uB77C\uC6B0\uD130 \uB124\uBE44\uAC8C\uC774\uC158 \uAC00\uB4DC.","slug":"_2-\u1105\u1161\u110B\u116E\u1110\u1165-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1161\u1103\u1173","children":[]}]},{"level":2,"title":"\uB77C\uC6B0\uD130 \uB124\uBE44\uAC8C\uC774\uC158 \uAC00\uB4DC \uC0AC\uC6A9\uBC95","slug":"\u1105\u1161\u110B\u116E\u1110\u1165-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1161\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8","children":[]},{"level":2,"title":"async await","slug":"async-await","children":[]},{"level":2,"title":"\uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4C8\uD654","slug":"\u110B\u116C\u1107\u116E-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1106\u1169\u1103\u1172\u11AF\u1112\u116A","children":[]},{"level":2,"title":"\uCEF4\uD3EC\uB10C\uD2B8 \uB514\uC790\uC778 \uD328\uD134","slug":"\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1111\u1162\u1110\u1165\u11AB","children":[{"level":3,"title":"1) Common (\uC9C0\uAE08\uAE4C\uC9C0 \uC0B4\uD3B4\uBD24\uB358 \uBC29\uC2DD\uACFC \uAC19\uC74C)","slug":"_1-common-\u110C\u1175\u1100\u1173\u11B7\u1101\u1161\u110C\u1175-\u1109\u1161\u11AF\u1111\u1167\u1107\u116A\u11BB\u1103\u1165\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8\u1100\u116A-\u1100\u1161\u11C0\u110B\u1173\u11B7","children":[]},{"level":3,"title":"2) slots","slug":"_2-slots","children":[]}]},{"level":2,"title":"CLI \uB97C \uD1B5\uD55C \uBC30\uD3EC","slug":"cli-\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1107\u1162\u1111\u1169","children":[]},{"level":2,"title":"Netlify \uC744 \uC774\uC6A9\uD55C \uBC30\uD3EC","slug":"netlify-\u110B\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1162\u1111\u1169","children":[]},{"level":2,"title":"env \uD30C\uC77C","slug":"env-\u1111\u1161\u110B\u1175\u11AF","children":[]}],"git":{"createdTime":1658739798000,"updatedTime":1658739798000,"contributors":[{"name":"YoungH","email":"navskh@jinhakapply.com","commits":1}]},"readingTime":{"minutes":4.08,"words":1224},"filePathRelative":"posts/Vue/Vue\uAC15\uC758\uC815\uB9AC.md","localizedDate":"February 12, 2022"}`);
var Vue_____html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$w
}, Symbol.toStringTag, { value: "Module" }));
const data$v = JSON.parse('{"key":"v-3706649a","path":"/404.html","title":"","lang":"en-US","frontmatter":{"layout":"404","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/404.html"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var _404_html$2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$v
}, Symbol.toStringTag, { value: "Module" }));
const data$u = JSON.parse('{"key":"v-5bc93818","path":"/category/","title":"Category","lang":"en-US","frontmatter":{"title":"Category","blog":{"type":"category","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1w = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$u
}, Symbol.toStringTag, { value: "Module" }));
const data$t = JSON.parse('{"key":"v-744d024e","path":"/tag/","title":"Tag","lang":"en-US","frontmatter":{"title":"Tag","blog":{"type":"category","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$t
}, Symbol.toStringTag, { value: "Module" }));
const data$s = JSON.parse('{"key":"v-e52c881c","path":"/article/","title":"Articles","lang":"en-US","frontmatter":{"title":"Articles","blog":{"type":"type","key":"article"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/article/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Articles"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1u = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$s
}, Symbol.toStringTag, { value: "Module" }));
const data$r = JSON.parse('{"key":"v-75ed4ea4","path":"/encrypted/","title":"Encrypted","lang":"en-US","frontmatter":{"title":"Encrypted","blog":{"type":"type","key":"encrypted"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/encrypted/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Encrypted"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$r
}, Symbol.toStringTag, { value: "Module" }));
const data$q = JSON.parse('{"key":"v-d804e652","path":"/slide/","title":"Slides","lang":"en-US","frontmatter":{"title":"Slides","blog":{"type":"type","key":"slide"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/slide/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Slides"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1s = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$q
}, Symbol.toStringTag, { value: "Module" }));
const data$p = JSON.parse('{"key":"v-154dc4c4","path":"/star/","title":"Star","lang":"en-US","frontmatter":{"title":"Star","blog":{"type":"type","key":"star"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/star/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Star"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$p
}, Symbol.toStringTag, { value: "Module" }));
const data$o = JSON.parse('{"key":"v-01560935","path":"/timeline/","title":"Timeline","lang":"en-US","frontmatter":{"title":"Timeline","blog":{"type":"type","key":"timeline"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/timeline/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Timeline"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1q = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$o
}, Symbol.toStringTag, { value: "Module" }));
const data$n = JSON.parse('{"key":"v-ac0c2a6a","path":"/category/guide/","title":"Guide Category","lang":"en-US","frontmatter":{"title":"Guide Category","blog":{"type":"category","name":"Guide","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/guide/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Guide Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$n
}, Symbol.toStringTag, { value: "Module" }));
const data$m = JSON.parse('{"key":"v-c5a9e2d6","path":"/tag/disable/","title":"disable Tag","lang":"en-US","frontmatter":{"title":"disable Tag","blog":{"type":"category","name":"disable","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/disable/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"disable Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1o = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$m
}, Symbol.toStringTag, { value: "Module" }));
const data$l = JSON.parse('{"key":"v-54d7ff21","path":"/zh/article/","title":"\u6587\u7AE0","lang":"en-US","frontmatter":{"title":"\u6587\u7AE0","blog":{"type":"type","key":"article"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/article/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u6587\u7AE0"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$l
}, Symbol.toStringTag, { value: "Module" }));
const data$k = JSON.parse('{"key":"v-1ad78213","path":"/zh/encrypted/","title":"\u52A0\u5BC6","lang":"en-US","frontmatter":{"title":"\u52A0\u5BC6","blog":{"type":"type","key":"encrypted"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/encrypted/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u52A0\u5BC6"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1m = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$k
}, Symbol.toStringTag, { value: "Module" }));
const data$j = JSON.parse('{"key":"v-5b30cfc6","path":"/zh/slide/","title":"\u5E7B\u706F\u7247","lang":"en-US","frontmatter":{"title":"\u5E7B\u706F\u7247","blog":{"type":"type","key":"slide"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/slide/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u5E7B\u706F\u7247"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$j
}, Symbol.toStringTag, { value: "Module" }));
const data$i = JSON.parse('{"key":"v-2c3ee7f5","path":"/zh/star/","title":"\u6536\u85CF","lang":"en-US","frontmatter":{"title":"\u6536\u85CF","blog":{"type":"type","key":"star"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/star/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u6536\u85CF"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1k = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$i
}, Symbol.toStringTag, { value: "Module" }));
const data$h = JSON.parse('{"key":"v-27b02be6","path":"/zh/timeline/","title":"\u65F6\u95F4\u8F74","lang":"en-US","frontmatter":{"title":"\u65F6\u95F4\u8F74","blog":{"type":"type","key":"timeline"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/timeline/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u65F6\u95F4\u8F74"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$h
}, Symbol.toStringTag, { value: "Module" }));
const data$g = JSON.parse('{"key":"v-e2bac56c","path":"/category/javascript/","title":"JavaScript Category","lang":"en-US","frontmatter":{"title":"JavaScript Category","blog":{"type":"category","name":"JavaScript","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/javascript/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"JavaScript Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1i = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$g
}, Symbol.toStringTag, { value: "Module" }));
const data$f = JSON.parse('{"key":"v-cbedfc04","path":"/tag/encryption/","title":"encryption Tag","lang":"en-US","frontmatter":{"title":"encryption Tag","blog":{"type":"category","name":"encryption","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/encryption/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"encryption Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$f
}, Symbol.toStringTag, { value: "Module" }));
const data$e = JSON.parse('{"key":"v-83291cc4","path":"/category/study/","title":"Study Category","lang":"en-US","frontmatter":{"title":"Study Category","blog":{"type":"category","name":"Study","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/study/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Study Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1g = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$e
}, Symbol.toStringTag, { value: "Module" }));
const data$d = JSON.parse('{"key":"v-484552dc","path":"/tag/markdown/","title":"Markdown Tag","lang":"en-US","frontmatter":{"title":"Markdown Tag","blog":{"type":"category","name":"Markdown","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/markdown/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Markdown Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$d
}, Symbol.toStringTag, { value: "Module" }));
const data$c = JSON.parse('{"key":"v-2dcc8639","path":"/category/jquery/","title":"jQuery Category","lang":"en-US","frontmatter":{"title":"jQuery Category","blog":{"type":"category","name":"jQuery","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/jquery/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"jQuery Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1e = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$c
}, Symbol.toStringTag, { value: "Module" }));
const data$b = JSON.parse('{"key":"v-26f8293d","path":"/tag/page-config/","title":"Page config Tag","lang":"en-US","frontmatter":{"title":"Page config Tag","blog":{"type":"category","name":"Page config","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/page-config/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Page config Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$b
}, Symbol.toStringTag, { value: "Module" }));
const data$a = JSON.parse('{"key":"v-65f6d381","path":"/category/vue/","title":"Vue Category","lang":"en-US","frontmatter":{"title":"Vue Category","blog":{"type":"category","name":"Vue","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/vue/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Vue Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1c = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$a
}, Symbol.toStringTag, { value: "Module" }));
const data$9 = JSON.parse('{"key":"v-30e296fe","path":"/tag/guide/","title":"Guide Tag","lang":"en-US","frontmatter":{"title":"Guide Tag","blog":{"type":"category","name":"Guide","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/guide/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Guide Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$9
}, Symbol.toStringTag, { value: "Module" }));
const data$8 = JSON.parse('{"key":"v-7ed81e82","path":"/category/review/","title":"Review Category","lang":"en-US","frontmatter":{"title":"Review Category","blog":{"type":"category","name":"Review","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/category/review/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Review Category"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$1a = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$8
}, Symbol.toStringTag, { value: "Module" }));
const data$7 = JSON.parse('{"key":"v-56cabb00","path":"/tag/teamleader-education/","title":"TeamLeader Education Tag","lang":"en-US","frontmatter":{"title":"TeamLeader Education Tag","blog":{"type":"category","name":"TeamLeader Education","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/teamleader-education/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"TeamLeader Education Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$19 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$7
}, Symbol.toStringTag, { value: "Module" }));
const data$6 = JSON.parse('{"key":"v-fbb94a6e","path":"/zh/category/","title":"\u5206\u7C7B","lang":"en-US","frontmatter":{"title":"\u5206\u7C7B","blog":{"type":"category","key":"category"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/category/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u5206\u7C7B"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$18 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$6
}, Symbol.toStringTag, { value: "Module" }));
const data$5 = JSON.parse('{"key":"v-b30840fa","path":"/tag/pwa/","title":"PWA Tag","lang":"en-US","frontmatter":{"title":"PWA Tag","blog":{"type":"category","name":"PWA","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/pwa/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"PWA Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$17 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$5
}, Symbol.toStringTag, { value: "Module" }));
const data$4 = JSON.parse('{"key":"v-ba5e197a","path":"/tag/jquery/","title":"jQuery Tag","lang":"en-US","frontmatter":{"title":"jQuery Tag","blog":{"type":"category","name":"jQuery","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/jquery/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"jQuery Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$16 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$4
}, Symbol.toStringTag, { value: "Module" }));
const data$3 = JSON.parse('{"key":"v-35985dc9","path":"/tag/review/","title":"Review Tag","lang":"en-US","frontmatter":{"title":"Review Tag","blog":{"type":"category","name":"Review","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/review/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Review Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$15 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$3
}, Symbol.toStringTag, { value: "Module" }));
const data$2 = JSON.parse('{"key":"v-b302da92","path":"/tag/vue/","title":"Vue Tag","lang":"en-US","frontmatter":{"title":"Vue Tag","blog":{"type":"category","name":"Vue","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/vue/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Vue Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$14 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$2
}, Symbol.toStringTag, { value: "Module" }));
const data$1 = JSON.parse('{"key":"v-07ff8958","path":"/tag/study/","title":"Study Tag","lang":"en-US","frontmatter":{"title":"Study Tag","blog":{"type":"category","name":"Study","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/tag/study/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"Study Tag"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$13 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data: data$1
}, Symbol.toStringTag, { value: "Module" }));
const data = JSON.parse('{"key":"v-540234fd","path":"/zh/tag/","title":"\u6807\u7B7E","lang":"en-US","frontmatter":{"title":"\u6807\u7B7E","blog":{"type":"category","key":"tag"},"layout":"Blog","summary":"","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-v2-demo.mrhope.site/zh/tag/"}],["meta",{"property":"og:site_name","content":"Theme Demo"}],["meta",{"property":"og:title","content":"\u6807\u7B7E"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}]]},"excerpt":"","headers":[],"git":{},"readingTime":{"minutes":0,"words":0},"filePathRelative":null}');
var index_html$12 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$Q = {};
function _sfc_ssrRender$Q(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>This is an example of a project homepage. You can place your main content here.</p><p>To use this layout, you need to set <code>home: true</code> in the page front matter.</p><p>For related descriptions of configuration items, please see <a href="https://vuepress-theme-hope.github.io/v2/guide/layout/home/" target="_blank" rel="noopener noreferrer">Project HomePage Layout Config`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>.</p></div>`);
}
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/home.html.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
var home_html = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["ssrRender", _sfc_ssrRender$Q], ["__file", "home.html.vue"]]);
var home_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": home_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$P = {};
function _sfc_ssrRender$P(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="intro-page" tabindex="-1"><a class="header-anchor" href="#intro-page" aria-hidden="true">#</a> Intro Page</h1><p>Place your introducation and profile here.</p></div>`);
}
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/intro.html.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
var intro_html = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["ssrRender", _sfc_ssrRender$P], ["__file", "intro.html.vue"]]);
var intro_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": intro_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$O = {};
function _sfc_ssrRender$O(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>This is a Young&#39;s Blog.</p><p>I&#39;m going to organize my project and the concepts I&#39;ve learned here</p></div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/index.html.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
var index_html$10 = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$O], ["__file", "index.html.vue"]]);
var index_html$11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$10
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$N = {};
function _sfc_ssrRender$N(_ctx, _push, _parent, _attrs) {
  const _component_Presentation = vue.resolveComponent("Presentation");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
  _push(serverRenderer.ssrRenderComponent(_component_Presentation, {
    id: "presentation-1a96284b",
    "data-code": "%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20--%3E%0A%0A%23%23%20Slide%20Demo%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0AA%20simple%20slide%20demo%20and%20useful%20hints.%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%3E%20By%20Mr.Hope.%20Please%20scroll%20mousewheel%20down%20to%20the%20next%20slide%0A%0A---%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Marking%20Slides%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%5B%F0%9F%91%87%5D(%23%2F1%2F1)%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Marking%20Slides%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0AUse%20%60---%60%20to%20mark%20horizontal%20slides%0A%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in%22%20--%3E%0A%0AUse%20%60--%60%20to%20sperate%20vertical%20slides%20in%20a%20horizontal%20slide.%0A%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in%22%20--%3E%0A%0AUse%20%60%3C!--%20.slide%3A%20...%20--%3E%60%20to%20add%20attributes%20to%20slide%0A%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in%22%20--%3E%0A%0AUse%20%60%3C!--%20.element%3A%20...%20--%3E%60%20to%20add%20attributes%20to%20the%20previous%20html%20element%0A%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in%22%20--%3E%0A%0A---%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Markdown%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0AYou%20can%20use%20all%20kinds%20of%20markup%20in%20slides.%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Markdown%0A%0AYou%20can%20use%20all%20kinds%20of%20markup%20in%20slides.%0A%0A%23%23%23%20This%20is%20a%20H3%0A%0AHeadings%20will%20transform%20to%20UPPERCASE%20by%20default.%0A%0AHere%20is%20paragraph%20with%20some%20**bold**%2C%20_italic_%2C%20~~strikethrough~~%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%2C%20and%20it%20can%20auto%20break%20itself%20so%20you%20don%E2%80%99t%20need%20to%20worry%20the%20length.%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Markdown%0A%0AYou%20can%20use%20all%20kinds%20of%20markup%20in%20slides.%0A%0AList%20is%20%60inline-block%60%20by%20default.%0A%0A-%20Item%0A-%20Item%0A-%20Item%0A%0A1.%20Item%201%0A1.%20Item%202%0A1.%20Item%203%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Markdown%0A%0AYou%20can%20use%20all%20kinds%20of%20markup%20in%20slides.%0A%0ACode%20block%20will%20get%20auto%20highlight%20if%20you%20enable%20%60highlight%60%20plugin.%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Markdown%0A%0AYou%20can%20use%20all%20kinds%20of%20markup%20in%20slides.%0A%0AYou%20can%20also%20write%20math%20equation%20using%20tex%20syntax%20if%20you%20enable%20%60math%60%20plugin.%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Markdown%0A%0AYou%20can%20use%20all%20kinds%20of%20markup%20in%20slides.%0A%0A%E2%9A%A0**Note**%3A%20Table%2C%20hr%20and%20other%20nonstandard%20Markdown%20syntax%20is%20not%20supported.%0A%0A---%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Layout%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20%20--%3E%0A%0A%23%23%20Layout%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%F0%9F%91%86%20The%20%60r-fit-text%60%20class%20makes%20text%20as%20large%20as%20possible%20without%20overflowing%20the%20slide.%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20%20--%3E%0A%0A%23%23%20Layout%0A%0A!%5BLogo%5D(%2Flogo.svg)%0A%0A%3C!--%20.element%3A%20class%3D%22r-stretch%22%20--%3E%0A%0A%F0%9F%91%86%20The%20%60r-stretch%60%20class%20helper%20lets%20you%20resize%20an%20element%2C%20like%20an%20image%20or%20video%2C%20to%20cover%20the%20remaining%20vertical%20space%20in%20a%20slide.%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20data-background-color%3D%22rgb(70%2C%2070%2C%20255)%22%20--%3E%0A%0A%23%23%20Layout%0A%0A%23%23%23%20Background%0A%0ACutom%20background%20by%20adding%20%60data-background%60%20attribute%20to%20slide.%0A%0A---%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Fragment%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Fragment%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0AFragments%20are%20used%20to%20highlight%20or%20incrementally%20reveal%20individual%20elements%20on%20a%20slide.%0A%0AAdd%20%60fragment%60%20and%20animation%20class%20to%20element.%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Fragment%0A%0A%23%23%23%20Animation%20class%0A%0A-%20%60fade-in%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in%22%20--%3E%0A%0A-%20%60fade-out%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-out%22%20--%3E%0A%0A-%20%60fade-up%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-up%22%20--%3E%0A%0A%3C!--%20list%20break%20--%3E%0A%0A-%20%60fade-down%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-down%22%20--%3E%0A%0A-%20%60fade-left%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-left%22%20--%3E%0A%0A-%20%60fade-right%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-right%22%20--%3E%0A%0A%3C!--%20list%20break%20--%3E%0A%0A-%20%60fade-in-then-out%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in-then-out%22%20--%3E%0A%0A-%20%60fade-in-then-semi-out%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20fade-in-then-semi-out%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Fragment%0A%0A%23%23%23%20Animation%20class%0A%0A-%20%60grow%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20grow%22%20--%3E%0A%0A-%20%60shrink%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20shrink%22%20--%3E%0A%0A-%20%60strike%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20strike%22%20--%3E%0A%0A%3C!--%20list%20break%20--%3E%0A%0A-%20%60highlight-red%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20highlight-red%22%20--%3E%0A%0A-%20%60highlight-green%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20highlight-green%22%20--%3E%0A%0A-%20%60highlight-blue%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20highlight-blue%22%20--%3E%0A%0A%3C!--%20list%20break%20--%3E%0A%0A-%20%60highlight-current-red%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20highlight-current-red%22%20--%3E%0A%0A-%20%60highlight-current-green%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20highlight-current-green%22%20--%3E%0A%0A-%20%60highlight-current-blue%60%0A%3C!--%20.element%3A%20class%3D%22fragment%20highlight-current-blue%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Fragment%0A%0A%23%23%23%20Mutiple%20fragments%0A%0AMultiple%20fragments%20can%20be%20applied%20to%20the%20same%20element%20sequentially%20by%20wrapping%20it%0A%0A%3Cspan%20class%3D%22fragment%20fade-in%22%3E%0A%20%20%3Cspan%20class%3D%22fragment%20highlight-red%22%3E%0A%20%20%20%20%3Cspan%20class%3D%22fragment%20fade-out%22%3E%0A%20%20%20%20%20%20Fade%20in%20%3E%20Turn%20red%20%3E%20Fade%20out%0A%20%20%20%20%3C%2Fspan%3E%0A%20%20%3C%2Fspan%3E%0A%3C%2Fspan%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Fragment%0A%0A%23%23%23%20Order%0A%0AOrder%20can%20be%20changed%20using%20the%20%60data-fragment-index%60%20attribute.%0A%0AMultiple%20elements%20can%20appear%20at%20the%20same%20index.%0A%0A-%20Appears%20last%0A%3C!--%20.element%3A%20class%3D%22fragment%22%20data-fragment-index%3D%223%22--%3E%0A%0A-%20Appears%20second%0A%3C!--%20.element%3A%20class%3D%22fragment%22%20data-fragment-index%3D%222%22--%3E%0A%0A%3C!--%20list%20break%20--%3E%0A%0A-%20Appears%20first%0A%3C!--%20.element%3A%20class%3D%22fragment%22%20data-fragment-index%3D%221%22--%3E%0A%0A-%20Appears%20second%0A%3C!--%20.element%3A%20class%3D%22fragment%22%20data-fragment-index%3D%222%22--%3E%0A%0A---%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Transition%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Transition%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0ATransition%20can%20be%20changed%20by%20setting%20the%20%60transition%60%20config%20option%20globally%20or%20%60data-transition%60%20attribute%20on%20specific%20slide.%0A%0APossible%20values%3A%0A%0A-%20none%0A-%20fade%0A-%20slide%0A%0A%3C!--%20list%20break%20--%3E%0A%0A-%20convex%0A-%20concave%0A-%20zoom%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-auto-animate%20--%3E%0A%0A%23%23%20Transition%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%23%23%23%20Auto%20animate%0A%0A%60data-auto-animate%60%20can%20be%20added%20on%20nearby%20slides%20to%20make%20an%20animation%20on%20unchanged%20elements.%0A%0A---%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Functions%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Functions%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%23%23%23%20Code%0A%0ABy%20enabling%20%60highlight%60%20plugin%2C%20you%20can%20highlight%20code%20blocks.%0A%0AYou%20can%20use%20%60%5Ba-b%7Cc-d%5D%60%20syntax%20to%20highlight%20lines%20by%20steps.%0A%0A%60%60%60js%20%5B1-2%7C3%7C4%5D%0Alet%20a%20%3D%201%3B%0Alet%20b%20%3D%202%3B%0Alet%20c%20%3D%20(x)%20%3D%3E%201%20%2B%202%20%2B%20x%3B%0Ac(3)%3B%0A%60%60%60%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Functions%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%23%23%23%20Overview%0A%0APress%20%60Esc%60%20or%20%60O%60%20to%20enter%20overview%20mode%20when%20the%20presentation%20is%20active%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Functions%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%23%23%23%20Full%20Screen%0A%0APress%20%60F%60%20or%20%60F11%60%20to%20enter%20fullscreen%20when%20the%20presentation%20is%20active%0A%0A--%0A%0A%3C!--%20.slide%3A%20data-transition%3D%22slide%22%20data-auto-animate%20--%3E%0A%0A%23%23%20Functions%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%23%23%23%20Zoom%0A%0AHold%20down%20the%20%60alt%60%20key%20(%60ctrl%60%20in%20Linux)%20and%20click%20on%20any%20element%20to%20zoom%20towards%20it.%0A%0AClick%20again%20to%20zoom%20back%20out.%0A%0A---%0A%0A%3C!--%20.element%3A%20class%3D%22r-fit-text%22%20--%3E%0A%0A%23%23%20The%20End%0A",
    theme: "auto"
  }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/slide.html.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
var slide_html = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["ssrRender", _sfc_ssrRender$N], ["__file", "slide.html.vue"]]);
var slide_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": slide_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$M = {};
function _sfc_ssrRender$M(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>You can disable some function and layout on the page by setting the Frontmatter of the page.</p><p>This page is an demo that disables the following features:</p><ul><li>Navbar</li><li>Sidebar</li><li>Breadcrumb</li><li>Page information</li><li>Contributors</li><li>Edit link</li><li>Update time</li><li>Prev/Next link</li><li>Comment</li><li>Footer</li><li>Back to top button</li></ul></div>`);
}
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/disable.html.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
var disable_html = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["ssrRender", _sfc_ssrRender$M], ["__file", "disable.html.vue"]]);
var disable_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": disable_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$L = {};
function _sfc_ssrRender$L(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="encryption-article" tabindex="-1"><a class="header-anchor" href="#encryption-article" aria-hidden="true">#</a> Encryption Article</h1><p>The actual article content.</p><p>Paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text paragraph 1 text.</p><p>Paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text paragraph 2 text.</p></div>`);
}
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/encrypt.html.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
var encrypt_html = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["ssrRender", _sfc_ssrRender$L], ["__file", "encrypt.html.vue"]]);
var encrypt_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": encrypt_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$K = {};
function _sfc_ssrRender$K(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  const _component_CodeTabs = vue.resolveComponent("CodeTabs");
  const _component_Tabs = vue.resolveComponent("Tabs");
  const _component_ChartJS = vue.resolveComponent("ChartJS");
  const _component_ECharts = vue.resolveComponent("ECharts");
  const _component_FlowChart = vue.resolveComponent("FlowChart");
  const _component_Mermaid = vue.resolveComponent("Mermaid");
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  const _component_CodeDemo = vue.resolveComponent("CodeDemo");
  const _component_Presentation = vue.resolveComponent("Presentation");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>VuePress basically generate pages from Markdown files. So you can use it to generate documentation or blog sites easily.</p><p>You should create and write Markdown files, so that VuePress can convert them to different pages according to file structure.</p><h2 id="markdown-introduction" tabindex="-1"><a class="header-anchor" href="#markdown-introduction" aria-hidden="true">#</a> Markdown Introduction</h2><p>If you are a new learner and don\u2019t know how to write Markdown, please read <a href="https://vuepress-theme-hope.github.io/v2/cookbook/markdown/" target="_blank" rel="noopener noreferrer">Markdown Intro`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> and <a href="https://vuepress-theme-hope.github.io/v2/cookbook/markdown/demo.html" target="_blank" rel="noopener noreferrer">Markdown Demo`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>.</p><h2 id="markdown-config" tabindex="-1"><a class="header-anchor" href="#markdown-config" aria-hidden="true">#</a> Markdown Config</h2><p>VuePress introduce configuration for each markdown page using Frontmatter.</p><div class="custom-container info"><p class="custom-container-title">Info</p><p>Frontmatter is a important concept in VuePress. If you don\u2019t know it, you need to read <a href="https://vuepress-theme-hope.github.io/v2/cookbook/vuepress/page.html#front-matter" target="_blank" rel="noopener noreferrer">Frontmatter Introduction`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>.</p></div><h2 id="markdown-extension" tabindex="-1"><a class="header-anchor" href="#markdown-extension" aria-hidden="true">#</a> Markdown Extension</h2><p>The Markdown content in VuePress will be parsed by <a href="https://github.com/markdown-it/markdown-it" target="_blank" rel="noopener noreferrer">markdown-it`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, which supports <a href="https://github.com/markdown-it/markdown-it#syntax-extensions" target="_blank" rel="noopener noreferrer">syntax extensions`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> via markdown-it plugins.</p><h3 id="vuepress-enhancement" tabindex="-1"><a class="header-anchor" href="#vuepress-enhancement" aria-hidden="true">#</a> VuePress Enhancement</h3><p>To enrich document writing, VuePress has extended Markdown syntax.</p><p>For these extensions, please read <a href="https://vuepress-theme-hope.github.io/v2/basic/vuepress/markdown.html" target="_blank" rel="noopener noreferrer">Markdown extensions in VuePress`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>.</p><h3 id="theme-enhancement" tabindex="-1"><a class="header-anchor" href="#theme-enhancement" aria-hidden="true">#</a> Theme Enhancement</h3><p>By using <a href="https://vuepress-theme-hope.github.io/v2/md-enhance/" target="_blank" rel="noopener noreferrer"><code>vuepress-plugin-md-enhance</code>`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>, the theme extends more Markdown syntax and provides richer writing functions.</p><div class="custom-container tip"><p class="custom-container-title">Enable all</p><p>You can set <code>plugins.mdEnhance.enableAll: true</code> in theme options to enable all features of the <a href="https://vuepress-theme-hope.github.io/v2/md-enhance/" target="_blank" rel="noopener noreferrer">md-enhance`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> plugin.</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeTabs, {
    data: [{ "title": "TS" }, { "title": "JS" }],
    "tab-id": "language"
  }, {
    tab0: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-typescript ext-ts line-numbers-mode"${_scopeId}><pre class="language-typescript"${_scopeId}><code${_scopeId}><span class="token keyword"${_scopeId}>import</span> <span class="token punctuation"${_scopeId}>{</span> hopeTheme <span class="token punctuation"${_scopeId}>}</span> <span class="token keyword"${_scopeId}>from</span> <span class="token string"${_scopeId}>&quot;vuepress-theme-hope&quot;</span><span class="token punctuation"${_scopeId}>;</span>

<span class="token keyword"${_scopeId}>export</span> <span class="token keyword"${_scopeId}>default</span> <span class="token punctuation"${_scopeId}>{</span>
  theme<span class="token operator"${_scopeId}>:</span> <span class="token function"${_scopeId}>hopeTheme</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>{</span>
    plugins<span class="token operator"${_scopeId}>:</span> <span class="token punctuation"${_scopeId}>{</span>
      mdEnhance<span class="token operator"${_scopeId}>:</span> <span class="token punctuation"${_scopeId}>{</span>
        enableAll<span class="token operator"${_scopeId}>:</span> <span class="token boolean"${_scopeId}>true</span><span class="token punctuation"${_scopeId}>,</span>
      <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
    <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
  <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span>
<span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "language-typescript ext-ts line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-typescript" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token keyword" }, "import"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode(" hopeTheme "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token keyword" }, "from"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token string" }, '"vuepress-theme-hope"'),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n\n"),
                vue.createVNode("span", { class: "token keyword" }, "export"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token keyword" }, "default"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n  theme"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token function" }, "hopeTheme"),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n    plugins"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n      mdEnhance"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n        enableAll"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token boolean" }, "true"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n      "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n    "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n  "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n"),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab1: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-javascript ext-js line-numbers-mode"${_scopeId}><pre class="language-javascript"${_scopeId}><code${_scopeId}><span class="token keyword"${_scopeId}>const</span> <span class="token punctuation"${_scopeId}>{</span> hopeTheme <span class="token punctuation"${_scopeId}>}</span> <span class="token operator"${_scopeId}>=</span> <span class="token function"${_scopeId}>require</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;vuepress-theme-hope&quot;</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>

module<span class="token punctuation"${_scopeId}>.</span>exports <span class="token operator"${_scopeId}>=</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token literal-property property"${_scopeId}>theme</span><span class="token operator"${_scopeId}>:</span> <span class="token function"${_scopeId}>hopeTheme</span><span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>{</span>
    <span class="token literal-property property"${_scopeId}>plugins</span><span class="token operator"${_scopeId}>:</span> <span class="token punctuation"${_scopeId}>{</span>
      <span class="token literal-property property"${_scopeId}>mdEnhance</span><span class="token operator"${_scopeId}>:</span> <span class="token punctuation"${_scopeId}>{</span>
        <span class="token literal-property property"${_scopeId}>enableAll</span><span class="token operator"${_scopeId}>:</span> <span class="token boolean"${_scopeId}>true</span><span class="token punctuation"${_scopeId}>,</span>
      <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
    <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>,</span>
  <span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>,</span>
<span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-javascript" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token keyword" }, "const"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode(" hopeTheme "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token operator" }, "="),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token function" }, "require"),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token string" }, '"vuepress-theme-hope"'),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n\nmodule"),
                vue.createVNode("span", { class: "token punctuation" }, "."),
                vue.createTextVNode("exports "),
                vue.createVNode("span", { class: "token operator" }, "="),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n  "),
                vue.createVNode("span", { class: "token literal-property property" }, "theme"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token function" }, "hopeTheme"),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n    "),
                vue.createVNode("span", { class: "token literal-property property" }, "plugins"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n      "),
                vue.createVNode("span", { class: "token literal-property property" }, "mdEnhance"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n        "),
                vue.createVNode("span", { class: "token literal-property property" }, "enableAll"),
                vue.createVNode("span", { class: "token operator" }, ":"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token boolean" }, "true"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n      "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n    "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n  "),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode("\n"),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><h4 id="custom-container" tabindex="-1"><a class="header-anchor" href="#custom-container" aria-hidden="true">#</a> Custom Container</h4><div><p>Safely use {{ variable }} in Markdown.</p></div><div class="custom-container info"><p class="custom-container-title">Custom Title</p><p>A custom information container with <code>code</code>, <a href="#markdown">link</a>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><div class="custom-container tip"><p class="custom-container-title">Custom Title</p><p>A custom tip container</p></div><div class="custom-container warning"><p class="custom-container-title">Custom Title</p><p>A custom warning container</p></div><div class="custom-container danger"><p class="custom-container-title">Custom Title</p><p>A custom danger container</p></div><details class="custom-container details"><summary>Custom Title</summary><p>A custom details container</p></details><details class="custom-container details"><summary>Code</summary><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code>::: v-pre

Safely use {{ variable }} in Markdown.

:::

::: info Custom Title

A custom information container

:::

::: tip Custom Title

A custom tip container

:::

::: warning Custom Title

A custom warning container

:::

::: danger Custom Title

A custom danger container

:::

::: details Custom Title

A custom details container

:::
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h3 id="tabs" tabindex="-1"><a class="header-anchor" href="#tabs" aria-hidden="true">#</a> Tabs</h3>`);
  _push(serverRenderer.ssrRenderComponent(_component_Tabs, {
    data: [{ "title": "apple" }, { "title": "banana" }, { "title": "orange" }],
    "tab-id": "fruit"
  }, {
    tab0: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Apple</p>`);
      } else {
        return [
          vue.createVNode("p", null, "Apple")
        ];
      }
    }),
    tab1: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Banana</p>`);
      } else {
        return [
          vue.createVNode("p", null, "Banana")
        ];
      }
    }),
    tab2: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<p${_scopeId}>Orange</p>`);
      } else {
        return [
          vue.createVNode("p", null, "Orange")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="code-tabs" tabindex="-1"><a class="header-anchor" href="#code-tabs" aria-hidden="true">#</a> Code Tabs</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeTabs, {
    data: [{ "title": "pnpm" }, { "title": "yarn" }, { "title": "npm" }],
    active: 2
  }, {
    tab0: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash ext-sh line-numbers-mode"${_scopeId}><pre class="language-bash"${_scopeId}><code${_scopeId}><span class="token function"${_scopeId}>pnpm</span> <span class="token function"${_scopeId}>add</span> -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "language-bash ext-sh line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-bash" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token function" }, "pnpm"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token function" }, "add"),
                vue.createTextVNode(" -D vuepress-theme-hope\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab1: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash ext-sh line-numbers-mode"${_scopeId}><pre class="language-bash"${_scopeId}><code${_scopeId}><span class="token function"${_scopeId}>yarn</span> <span class="token function"${_scopeId}>add</span> -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "language-bash ext-sh line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-bash" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token function" }, "yarn"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token function" }, "add"),
                vue.createTextVNode(" -D vuepress-theme-hope\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    tab2: vue.withCtx(({ title, value, isActive }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-bash ext-sh line-numbers-mode"${_scopeId}><pre class="language-bash"${_scopeId}><code${_scopeId}><span class="token function"${_scopeId}>npm</span> i -D vuepress-theme-hope
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "language-bash ext-sh line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-bash" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token function" }, "npm"),
                vue.createTextVNode(" i -D vuepress-theme-hope\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/code-tabs.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="superscript-and-subscript" tabindex="-1"><a class="header-anchor" href="#superscript-and-subscript" aria-hidden="true">#</a> Superscript and Subscript</h4><p>19<sup>th</sup> H<sub>2</sub>O</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/sup-sub.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="align" tabindex="-1"><a class="header-anchor" href="#align" aria-hidden="true">#</a> Align</h4><div style="${serverRenderer.ssrRenderStyle({ "text-align": "center" })}"><p>I am center</p></div><div style="${serverRenderer.ssrRenderStyle({ "text-align": "right" })}"><p>I am right align</p></div><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="footnote" tabindex="-1"><a class="header-anchor" href="#footnote" aria-hidden="true">#</a> Footnote</h4><p>This text has footnote<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup>.</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="mark" tabindex="-1"><a class="header-anchor" href="#mark" aria-hidden="true">#</a> Mark</h4><p>You can mark <mark>important words</mark> .</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="tasklist" tabindex="-1"><a class="header-anchor" href="#tasklist" aria-hidden="true">#</a> Tasklist</h4><ul class="task-list-container"><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> Plan A</label></p></li><li class="task-list-item"><p><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> Plan B</label></p></li><li><p><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tasklist.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><h4 id="image-enhancement" tabindex="-1"><a class="header-anchor" href="#image-enhancement" aria-hidden="true">#</a> Image Enhancement</h4><p>Support setting color scheme and size</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/image.md" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="chart" tabindex="-1"><a class="header-anchor" href="#chart" aria-hidden="true">#</a> Chart</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_ChartJS, {
    id: "chart-64a56866",
    config: "%7B%0A%20%20%22type%22%3A%20%22scatter%22%2C%0A%20%20%22data%22%3A%20%7B%0A%20%20%20%20%22datasets%22%3A%20%5B%0A%20%20%20%20%20%20%7B%0A%20%20%20%20%20%20%20%20%22label%22%3A%20%22Scatter%20Dataset%22%2C%0A%20%20%20%20%20%20%20%20%22data%22%3A%20%5B%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%20-10%2C%20%22y%22%3A%200%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200%2C%20%22y%22%3A%2010%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%2010%2C%20%22y%22%3A%205%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%7B%20%22x%22%3A%200.5%2C%20%22y%22%3A%205.5%20%7D%0A%20%20%20%20%20%20%20%20%5D%2C%0A%20%20%20%20%20%20%20%20%22backgroundColor%22%3A%20%22rgb(255%2C%2099%2C%20132)%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%5D%0A%20%20%7D%2C%0A%20%20%22options%22%3A%20%7B%0A%20%20%20%20%22scales%22%3A%20%7B%0A%20%20%20%20%20%20%22x%22%3A%20%7B%0A%20%20%20%20%20%20%20%20%22type%22%3A%20%22linear%22%2C%0A%20%20%20%20%20%20%20%20%22position%22%3A%20%22bottom%22%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A",
    title: "A%20Scatter%20Chart",
    type: "json"
  }, null, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="echarts" tabindex="-1"><a class="header-anchor" href="#echarts" aria-hidden="true">#</a> Echarts</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_ECharts, {
    id: "echarts-64a56822",
    config: "%7B%0A%20%20%22xAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22category%22%2C%0A%20%20%20%20%22data%22%3A%20%5B%22Mon%22%2C%20%22Tue%22%2C%20%22Wed%22%2C%20%22Thu%22%2C%20%22Fri%22%2C%20%22Sat%22%2C%20%22Sun%22%5D%0A%20%20%7D%2C%0A%20%20%22yAxis%22%3A%20%7B%0A%20%20%20%20%22type%22%3A%20%22value%22%0A%20%20%7D%2C%0A%20%20%22series%22%3A%20%5B%0A%20%20%20%20%7B%0A%20%20%20%20%20%20%22data%22%3A%20%5B150%2C%20230%2C%20224%2C%20218%2C%20135%2C%20147%2C%20260%5D%2C%0A%20%20%20%20%20%20%22type%22%3A%20%22line%22%0A%20%20%20%20%7D%0A%20%20%5D%0A%7D%0A",
    title: "A%20line%20chart",
    type: "json"
  }, null, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="flowchart" tabindex="-1"><a class="header-anchor" href="#flowchart" aria-hidden="true">#</a> Flowchart</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_FlowChart, {
    id: "flowchart-64a567b4",
    code: "cond%3D%3Econdition%3A%20Process%3F%0Aprocess%3D%3Eoperation%3A%20Process%0Ae%3D%3Eend%3A%20End%0A%0Acond(yes)-%3Eprocess-%3Ee%0Acond(no)-%3Ee%0A",
    preset: "vue"
  }, null, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/flowchart.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="mermaid" tabindex="-1"><a class="header-anchor" href="#mermaid" aria-hidden="true">#</a> Mermaid</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_Mermaid, {
    id: "mermaid-64a56774",
    code: "flowchart%20TB%0A%20%20%20%20c1--%3Ea2%0A%20%20%20%20subgraph%20one%0A%20%20%20%20a1--%3Ea2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20two%0A%20%20%20%20b1--%3Eb2%0A%20%20%20%20end%0A%20%20%20%20subgraph%20three%0A%20%20%20%20c1--%3Ec2%0A%20%20%20%20end%0A%20%20%20%20one%20--%3E%20two%0A%20%20%20%20three%20--%3E%20two%0A%20%20%20%20two%20--%3E%20c2%0A"
  }, null, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/mermaid.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="tex" tabindex="-1"><a class="header-anchor" href="#tex" aria-hidden="true">#</a> Tex</h4><p class="katex-block"><span class="katex-display"><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML" display="block"><semantics><mrow><mfrac><msup><mi mathvariant="normal">\u2202</mi><mi>r</mi></msup><mrow><mi mathvariant="normal">\u2202</mi><msup><mi>\u03C9</mi><mi>r</mi></msup></mrow></mfrac><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>\u03C9</mi></msup><mi>\u03C9</mi></mfrac><mo fence="true">)</mo></mrow><mo>=</mo><mrow><mo fence="true">(</mo><mfrac><msup><mi>y</mi><mi>\u03C9</mi></msup><mi>\u03C9</mi></mfrac><mo fence="true">)</mo></mrow><mrow><mo fence="true">{</mo><mo stretchy="false">(</mo><mi>log</mi><mo>\u2061</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mi>r</mi></msup><mo>+</mo><munderover><mo>\u2211</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>r</mi></munderover><mfrac><mrow><mo stretchy="false">(</mo><mo>\u2212</mo><mn>1</mn><msup><mo stretchy="false">)</mo><mi>i</mi></msup><mi>r</mi><mo>\u22EF</mo><mo stretchy="false">(</mo><mi>r</mi><mo>\u2212</mo><mi>i</mi><mo>+</mo><mn>1</mn><mo stretchy="false">)</mo><mo stretchy="false">(</mo><mi>log</mi><mo>\u2061</mo><mi>y</mi><msup><mo stretchy="false">)</mo><mrow><mi>r</mi><mo>\u2212</mo><mi>i</mi></mrow></msup></mrow><msup><mi>\u03C9</mi><mi>i</mi></msup></mfrac><mo fence="true">}</mo></mrow></mrow><annotation encoding="application/x-tex">\\frac {\\partial^r} {\\partial \\omega^r} \\left(\\frac {y^{\\omega}} {\\omega}\\right) = \\left(\\frac {y^{\\omega}} {\\omega}\\right) \\left\\{(\\log y)^r + \\sum_{i=1}^r \\frac {(-1)^i r \\cdots (r-i+1) (\\log y)^{r-i}} {\\omega^i} \\right\\} </annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="${serverRenderer.ssrRenderStyle({ "height": "2.4em", "vertical-align": "-0.95em" })}"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "1.3714em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.05556em" })}">\u2202</span><span class="mord"><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">\u03C9</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.5904em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-2.989em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${serverRenderer.ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.05556em" })}">\u2202</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.6644em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${serverRenderer.ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "1.3414em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">\u03C9</span></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${serverRenderer.ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.6644em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">\u03C9</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${serverRenderer.ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2778em" })}"></span><span class="mrel">=</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2778em" })}"></span></span><span class="base"><span class="strut" style="${serverRenderer.ssrRenderStyle({ "height": "3.0277em", "vertical-align": "-1.2777em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${serverRenderer.ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">(</span></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "1.3414em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">\u03C9</span></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${serverRenderer.ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.6644em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">\u03C9</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${serverRenderer.ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size3">)</span></span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner"><span class="mopen delimcenter" style="${serverRenderer.ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size4">{</span></span><span class="mopen">(</span><span class="mop">lo<span style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.01389em" })}">g</span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.7144em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.113em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span></span></span></span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">+</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mop op-limits"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "1.6514em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-1.8723em", "margin-left": "0em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3.05em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight">i</span><span class="mrel mtight">=</span><span class="mord mtight">1</span></span></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3.05em" })}"></span><span><span class="mop op-symbol large-op">\u2211</span></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-4.3em", "margin-left": "0em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3.05em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "1.2777em" })}"><span></span></span></span></span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "1.5017em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-2.314em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mord"><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">\u03C9</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.7507em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-2.989em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.23em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="frac-line" style="${serverRenderer.ssrRenderStyle({ "border-bottom-width": "0.04em" })}"></span></span><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.677em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "3em" })}"></span><span class="mord"><span class="mopen">(</span><span class="mord">\u2212</span><span class="mord">1</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.8247em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="minner">\u22EF</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mopen">(</span><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">\u2212</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mord mathnormal">i</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mbin">+</span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.2222em" })}"></span><span class="mord">1</span><span class="mclose">)</span><span class="mopen">(</span><span class="mop">lo<span style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.01389em" })}">g</span></span><span class="mspace" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.1667em" })}"></span><span class="mord mathnormal" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.03588em" })}">y</span><span class="mclose"><span class="mclose">)</span><span class="msupsub"><span class="vlist-t"><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.8247em" })}"><span style="${serverRenderer.ssrRenderStyle({ "top": "-3.063em", "margin-right": "0.05em" })}"><span class="pstrut" style="${serverRenderer.ssrRenderStyle({ "height": "2.7em" })}"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mathnormal mtight" style="${serverRenderer.ssrRenderStyle({ "margin-right": "0.02778em" })}">r</span><span class="mbin mtight">\u2212</span><span class="mord mathnormal mtight">i</span></span></span></span></span></span></span></span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="${serverRenderer.ssrRenderStyle({ "height": "0.686em" })}"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mclose delimcenter" style="${serverRenderer.ssrRenderStyle({ "top": "0em" })}"><span class="delimsizing size4">}</span></span></span></span></span></span></span></p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/tex.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h3 id="include-files" tabindex="-1"><a class="header-anchor" href="#include-files" aria-hidden="true">#</a> Include files</h3><ul><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/markdown.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Markdown Enhance`);
      } else {
        return [
          vue.createTextVNode("Markdown Enhance")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/page.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Page Config`);
      } else {
        return [
          vue.createTextVNode("Page Config")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/disable.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Function Disable`);
      } else {
        return [
          vue.createTextVNode("Function Disable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/encrypt.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Encryption Demo`);
      } else {
        return [
          vue.createTextVNode("Encryption Demo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/include.md" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p></li></ul><h4 id="code-demo" tabindex="-1"><a class="header-anchor" href="#code-demo" aria-hidden="true">#</a> Code Demo</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_CodeDemo, {
    id: "code-demo-531a6052",
    type: "normal",
    title: "A%20normal%20demo",
    code: "%7B%22html%22%3A%22%3Ch1%3EVuePress%20Theme%20Hope%3C%2Fh1%3E%5Cn%3Cp%3EIs%20%3Cspan%20id%3D%5C%22very%5C%22%3Every%3C%2Fspan%3E%20powerful!%3C%2Fp%3E%5Cn%22%2C%22js%22%3A%22document.querySelector(%5C%22%23very%5C%22).addEventListener(%5C%22click%5C%22%2C%20()%20%3D%3E%20%7B%5Cn%20%20alert(%5C%22Very%20powerful!%5C%22)%3B%5Cn%7D)%3B%5Cn%22%2C%22css%22%3A%22span%20%7B%5Cn%20%20color%3A%20red%3B%5Cn%7D%5Cn%22%7D"
  }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="language-html ext-html line-numbers-mode"${_scopeId}><pre class="language-html"${_scopeId}><code${_scopeId}><span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>h1</span><span class="token punctuation"${_scopeId}>&gt;</span></span>VuePress Theme Hope<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>h1</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>p</span><span class="token punctuation"${_scopeId}>&gt;</span></span>Is <span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;</span>span</span> <span class="token attr-name"${_scopeId}>id</span><span class="token attr-value"${_scopeId}><span class="token punctuation attr-equals"${_scopeId}>=</span><span class="token punctuation"${_scopeId}>&quot;</span>very<span class="token punctuation"${_scopeId}>&quot;</span></span><span class="token punctuation"${_scopeId}>&gt;</span></span>very<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>span</span><span class="token punctuation"${_scopeId}>&gt;</span></span> powerful!<span class="token tag"${_scopeId}><span class="token tag"${_scopeId}><span class="token punctuation"${_scopeId}>&lt;/</span>p</span><span class="token punctuation"${_scopeId}>&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div><div class="language-javascript ext-js line-numbers-mode"${_scopeId}><pre class="language-javascript"${_scopeId}><code${_scopeId}>document<span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>querySelector</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;#very&quot;</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>.</span><span class="token function"${_scopeId}>addEventListener</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;click&quot;</span><span class="token punctuation"${_scopeId}>,</span> <span class="token punctuation"${_scopeId}>(</span><span class="token punctuation"${_scopeId}>)</span> <span class="token operator"${_scopeId}>=&gt;</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token function"${_scopeId}>alert</span><span class="token punctuation"${_scopeId}>(</span><span class="token string"${_scopeId}>&quot;Very powerful!&quot;</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span><span class="token punctuation"${_scopeId}>)</span><span class="token punctuation"${_scopeId}>;</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div><div class="language-css ext-css line-numbers-mode"${_scopeId}><pre class="language-css"${_scopeId}><code${_scopeId}><span class="token selector"${_scopeId}>span</span> <span class="token punctuation"${_scopeId}>{</span>
  <span class="token property"${_scopeId}>color</span><span class="token punctuation"${_scopeId}>:</span> red<span class="token punctuation"${_scopeId}>;</span>
<span class="token punctuation"${_scopeId}>}</span>
</code></pre><div class="line-numbers" aria-hidden="true"${_scopeId}><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div><div class="line-number"${_scopeId}></div></div></div>`);
      } else {
        return [
          vue.createVNode("div", { class: "language-html ext-html line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-html" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token tag" }, [
                  vue.createVNode("span", { class: "token tag" }, [
                    vue.createVNode("span", { class: "token punctuation" }, "<"),
                    vue.createTextVNode("h1")
                  ]),
                  vue.createVNode("span", { class: "token punctuation" }, ">")
                ]),
                vue.createTextVNode("VuePress Theme Hope"),
                vue.createVNode("span", { class: "token tag" }, [
                  vue.createVNode("span", { class: "token tag" }, [
                    vue.createVNode("span", { class: "token punctuation" }, "</"),
                    vue.createTextVNode("h1")
                  ]),
                  vue.createVNode("span", { class: "token punctuation" }, ">")
                ]),
                vue.createTextVNode("\n"),
                vue.createVNode("span", { class: "token tag" }, [
                  vue.createVNode("span", { class: "token tag" }, [
                    vue.createVNode("span", { class: "token punctuation" }, "<"),
                    vue.createTextVNode("p")
                  ]),
                  vue.createVNode("span", { class: "token punctuation" }, ">")
                ]),
                vue.createTextVNode("Is "),
                vue.createVNode("span", { class: "token tag" }, [
                  vue.createVNode("span", { class: "token tag" }, [
                    vue.createVNode("span", { class: "token punctuation" }, "<"),
                    vue.createTextVNode("span")
                  ]),
                  vue.createTextVNode(),
                  vue.createVNode("span", { class: "token attr-name" }, "id"),
                  vue.createVNode("span", { class: "token attr-value" }, [
                    vue.createVNode("span", { class: "token punctuation attr-equals" }, "="),
                    vue.createVNode("span", { class: "token punctuation" }, '"'),
                    vue.createTextVNode("very"),
                    vue.createVNode("span", { class: "token punctuation" }, '"')
                  ]),
                  vue.createVNode("span", { class: "token punctuation" }, ">")
                ]),
                vue.createTextVNode("very"),
                vue.createVNode("span", { class: "token tag" }, [
                  vue.createVNode("span", { class: "token tag" }, [
                    vue.createVNode("span", { class: "token punctuation" }, "</"),
                    vue.createTextVNode("span")
                  ]),
                  vue.createVNode("span", { class: "token punctuation" }, ">")
                ]),
                vue.createTextVNode(" powerful!"),
                vue.createVNode("span", { class: "token tag" }, [
                  vue.createVNode("span", { class: "token tag" }, [
                    vue.createVNode("span", { class: "token punctuation" }, "</"),
                    vue.createTextVNode("p")
                  ]),
                  vue.createVNode("span", { class: "token punctuation" }, ">")
                ]),
                vue.createTextVNode("\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" })
            ])
          ]),
          vue.createVNode("div", { class: "language-javascript ext-js line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-javascript" }, [
              vue.createVNode("code", null, [
                vue.createTextVNode("document"),
                vue.createVNode("span", { class: "token punctuation" }, "."),
                vue.createVNode("span", { class: "token function" }, "querySelector"),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token string" }, '"#very"'),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createVNode("span", { class: "token punctuation" }, "."),
                vue.createVNode("span", { class: "token function" }, "addEventListener"),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token string" }, '"click"'),
                vue.createVNode("span", { class: "token punctuation" }, ","),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token operator" }, "=>"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n  "),
                vue.createVNode("span", { class: "token function" }, "alert"),
                vue.createVNode("span", { class: "token punctuation" }, "("),
                vue.createVNode("span", { class: "token string" }, '"Very powerful!"'),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n"),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createVNode("span", { class: "token punctuation" }, ")"),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" })
            ])
          ]),
          vue.createVNode("div", { class: "language-css ext-css line-numbers-mode" }, [
            vue.createVNode("pre", { class: "language-css" }, [
              vue.createVNode("code", null, [
                vue.createVNode("span", { class: "token selector" }, "span"),
                vue.createTextVNode(),
                vue.createVNode("span", { class: "token punctuation" }, "{"),
                vue.createTextVNode("\n  "),
                vue.createVNode("span", { class: "token property" }, "color"),
                vue.createVNode("span", { class: "token punctuation" }, ":"),
                vue.createTextVNode(" red"),
                vue.createVNode("span", { class: "token punctuation" }, ";"),
                vue.createTextVNode("\n"),
                vue.createVNode("span", { class: "token punctuation" }, "}"),
                vue.createTextVNode("\n")
              ])
            ]),
            vue.createVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" }),
              vue.createVNode("div", { class: "line-number" })
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/demo.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="stylize" tabindex="-1"><a class="header-anchor" href="#stylize" aria-hidden="true">#</a> Stylize</h4><p>Setting this to a invalid stytax <span style="${serverRenderer.ssrRenderStyle({ "color": "red" })}">doesn&#39;t</span> have any effect.</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.md" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><h4 id="presentation" tabindex="-1"><a class="header-anchor" href="#presentation" aria-hidden="true">#</a> Presentation</h4>`);
  _push(serverRenderer.ssrRenderComponent(_component_Presentation, {
    id: "presentation-64a5606a",
    "data-code": "%0A%23%23%20Slide%201%0A%0AA%20paragraph%20with%20some%20text%20and%20a%20%5Blink%5D(https%3A%2F%2Fmrhope.site)%0A%0A---%0A%0A%23%23%20Slide%202%0A%0A-%20Item%201%0A-%20Item%202%0A%0A---%0A%0A%23%23%20Slide%203.1%0A%0A%60%60%60js%0Aconst%20a%20%3D%201%3B%0A%60%60%60%0A%0A--%0A%0A%23%23%20Slide%203.2%0A%0A%24%24%0AJ(%5Ctheta_0%2C%5Ctheta_1)%20%3D%20%5Csum_%7Bi%3D0%7D%0A%24%24%0A",
    theme: "auto"
  }, null, _parent));
  _push(`<ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html" target="_blank" rel="noopener noreferrer">View Detail`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li></ul><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>This is footnote content <a href="#footnote-ref1" class="footnote-backref">\u21A9\uFE0E</a></p></li></ol></section></div>`);
}
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/markdown.html.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
var markdown_html = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["ssrRender", _sfc_ssrRender$K], ["__file", "markdown.html.vue"]]);
var markdown_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": markdown_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$J = {};
function _sfc_ssrRender$J(_ctx, _push, _parent, _attrs) {
  const _component_Badge = vue.resolveComponent("Badge");
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>Content before <code>more</code> comment is regarded as page excerpt.</p><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information" aria-hidden="true">#</a> Page Information</h2><p>You can set page information in Markdown\u2019s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content" aria-hidden="true">#</a> Page Content</h2><p>You are free to write your Markdown here.</p><div class="custom-container tip"><p class="custom-container-title">Assets</p><ul><li><p>You can place images besides your markdown files, but you should use <strong>relative links</strong> (i.e.: starting with <code>./</code>) for them.</p></li><li><p>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: startingwith <code>/</code>) for them.</p></li></ul></div><p>The theme contains a custom badge:</p><blockquote><p>A dark blue badge text badge at the end of line. `);
  _push(serverRenderer.ssrRenderComponent(_component_Badge, {
    text: "Badge text",
    color: "#242378"
  }, null, _parent));
  _push(`</p></blockquote><h2 id="page-structure" tabindex="-1"><a class="header-anchor" href="#page-structure" aria-hidden="true">#</a> Page Structure</h2><p>This page should contain:</p><ul><li><a href="https://vuepress-theme-hope.github.io/v2/guide/layout/breadcrumb.html" target="_blank" rel="noopener noreferrer">BreadCrumb`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/feature/page-info.html" target="_blank" rel="noopener noreferrer">Title and infomation`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/layout/page.html#header-list" target="_blank" rel="noopener noreferrer">TOC (Table of Contents)`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/feature/meta.html" target="_blank" rel="noopener noreferrer">Meta infomation including update time and contributors`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/feature/comment.html" target="_blank" rel="noopener noreferrer">Comments`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/layout/navbar.html" target="_blank" rel="noopener noreferrer">Navbar`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/layout/sidebar.html" target="_blank" rel="noopener noreferrer">Sidebar`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li><a href="https://vuepress-theme-hope.github.io/v2/guide/layout/footer.html" target="_blank" rel="noopener noreferrer">Footer`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>Back to top button</li></ul><p>You can customize them in theme options and page frontmatter.</p></div>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/page.html.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
var page_html = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender$J], ["__file", "page.html.vue"]]);
var page_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": page_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$I = {};
function _sfc_ssrRender$I(_ctx, _push, _parent, _attrs) {
  const _component_RouterLink = vue.resolveComponent("RouterLink");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2 id="catalog" tabindex="-1"><a class="header-anchor" href="#catalog" aria-hidden="true">#</a> Catalog</h2><ul><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/markdown.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Markdown Enhance`);
      } else {
        return [
          vue.createTextVNode("Markdown Enhance")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/page.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Page Config`);
      } else {
        return [
          vue.createTextVNode("Page Config")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/disable.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Function Disable`);
      } else {
        return [
          vue.createTextVNode("Function Disable")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li><li><p>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/guide/encrypt.html" }, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Encryption Demo`);
      } else {
        return [
          vue.createTextVNode("Encryption Demo")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</p></li></ul></div>`);
}
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/guide/index.html.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
var index_html$_ = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["ssrRender", _sfc_ssrRender$I], ["__file", "index.html.vue"]]);
var index_html$$ = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$_
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$H = {};
function _sfc_ssrRender$H(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="d2-\u1109\u1161\u110B\u1175\u1110\u1173-\u1105\u1175\u1107\u1172" tabindex="-1"><a class="header-anchor" href="#d2-\u1109\u1161\u110B\u1175\u1110\u1173-\u1105\u1175\u1107\u1172" aria-hidden="true">#</a> [D2 \uC0AC\uC774\uD2B8 \uB9AC\uBDF0]</h1><h2 id="_1-2015\u1102\u1167\u11AB\u1103\u1169" tabindex="-1"><a class="header-anchor" href="#_1-2015\u1102\u1167\u11AB\u1103\u1169" aria-hidden="true">#</a> 1. 2015\uB144\uB3C4</h2><p>\uAD6C\uAE00 \uB9F5\uC5D0\uC11C \uC4F0\uBA74\uC11C.. 05\uB144\uB3C4 ajax \uBD80\uD65C\uB428.<br> ..<br> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4 v8 \uC5D4\uC9C4\uC774 \uB9CC\uB4E4\uC5B4\uC9D0<br> ..<br> \uD575\uC2EC\uC740 \uBAA8\uB4C8\uD654<br> export, import \uB97C \uC4F0\uAE30 \uC2DC\uC791\uD568<br> vuejs, nodejs \uC5D0\uC11C \uB9CE\uC774 \uC500<br> import\uB97C \uC4F0\uB294 \uAC83\uB3C4 \uC788\uACE0, require \uB97C \uC4F0\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB294\uB370<br> \uC774\uAC8C \uC11C\uBC84\uC0AC\uC774\uB4DC, \uBE0C\uB77C\uC6B0\uC800 \uC0AC\uC774\uB4DC\uC5D0\uC11C \uC57D\uAC04 \uB2E4\uB974\uB2E4 \uC815\uB3C4\uB294 \uC54C\uAE30\uB97C..</p><h2 id="_2-2016\u1102\u1167\u11AB\u1103\u1169" tabindex="-1"><a class="header-anchor" href="#_2-2016\u1102\u1167\u11AB\u1103\u1169" aria-hidden="true">#</a> 2. 2016\uB144\uB3C4</h2><p>ECMAscript6 \uAC00 2015\uB144\uC5D0 \uBC1C\uD45C\uB418\uC5C8\uC74C<br> [\uD3EC\uC774\uB9C8\uC6F9] (<a href="https://poiemaweb.com/" target="_blank" rel="noopener noreferrer">https://poiemaweb.com/`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>)</p><p>\uC5EC\uAE30\uB3C4 \uBCF4\uBA74 \uC88B\uC74C<br> ES6\uC758 \uBAA8\uB4C8\uBB38\uBC95\uC774 CommonJS\uC758 \uCF58\uC149\uD2B8\uC640 \uC720\uC0AC\uD558\uB2E4.</p><p>promise \uB300\uBD80\uBD84\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C ie \uBE7C\uACE0 \uC9C0\uC6D0\uD55C\uB2E4.<br> \uADFC\uB370 async,await\uB294 \uC9C0\uC6D0 \uC548\uD558\uB294 \uC560\uB4E4\uC774 \uC870\uAE08 \uC788\uC74C.<br> \uADF8\uB7EC\uBBC0\uB85C promise\uB294 \uC81C\uC77C \uB9CE\uC774 \uC4F0\uACE0 \uC788\uB2E4.</p><p>\uADF8 \uC678..<br> \uC9C0\uC218 \uC5F0\uC0B0<br> \uADF8\uB9AC\uACE0..<br> webassembly<br> \uCEF4\uD30C\uC77C \uC548\uD558\uACE0 \uC4F0\uAE30 \uB54C\uBB38\uC5D0 \uC18D\uB3C4\uAC00 \uB290\uB9AC\uB2C8\uAE4C<br> \uC5B4\uC148\uBE14\uB7EC\uB97C \uC4F0\uACA0\uB2E4\uB294 \uAC74\uB370.. \uBB54\uC18C\uB9B0\uC9C0..</p><p>jQuery\uB294 \uC5EC\uC804\uD788 \uC544\uC9C1\uB3C4<br> \uB9CE\uC774 \uC4F8 \uC218 \uBC16\uC5D0 \uC5C6\uC74C.</p><p>jQuery\uC758 \uAC00\uC7A5 \uD070 \uC774\uC810 \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uC4F8 \uC218 \uC788\uB2E4\uB294 \uAC83.</p><p>\uB370\uC2A4\uD06C\uD0D1 \uD504\uB85C\uADF8\uB7A8\uC73C\uB85C<br> \uC77C\uB809\uD2B8\uB860\uC774 \uB098\uC654\uC74C.<br> \uC708\uD3FC \uAC1C\uBC1C\uBCF4\uB2E4 \uC870\uAE08 \uC5B4\uB824\uC6C0. c# \uBB38\uBC95\uACFC\uB3C4 \uB9CE\uC774 \uB2E4\uB984</p><h2 id="_3-2017\u1102\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_3-2017\u1102\u1167\u11AB" aria-hidden="true">#</a> 3. 2017\uB144</h2><p>async await \uAC1C\uB150\uC774 \uC774\uC288\uAC00 \uC5EC\uC804\uD788 \uB418\uC5C8\uC74C<br> requireJS define/require..<br> ecma6 import/ export \uC774\uB807\uAC8C \uB418\uC5C8\uB2E4\uAC00 \uB2E4 \uC5C6\uC5B4\uC9C0\uACE0 import export\uB9CC \uB0A8\uC558\uC74C</p><p>\uD074\uB798\uC2A4</p><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uBB34\uC870\uAC74 \uB2E8\uC77C\uC2A4\uB808\uB4DC\uC784!<br> \uC5EC\uB7EC\uAC1C\uB97C \uB123\uC5B4\uB193\uACE0 \uB2E4\uC911 \uCC98\uB9AC\uB97C \uD558\uBA74 \uC88B\uB2E4.<br> Devops\uB97C \uD1B5\uD574\uC11C nodejs &lt; &gt; c#\uC758 \uCC28\uC774..</p><p>\uBAA8\uBC14\uC77C \uBE0C\uB77C\uC6B0\uC800\uBD80\uD130 es6\uC758 \uC9C0\uC6D0\uC774 \uB9CE\uC774 \uB418\uC5C8\uC74C.<br> \uB9AC\uC561\uD2B8 \uC77C\uB809\uD2B8\uB860\uC774 \uC788\uC5C8\uB2E4..</p><p>\uD45C\uC900\uD654 \uC791\uC5C5\uC774 \uC810\uC810 \uBE68\uB77C\uC84C\uC74C...</p><p>\uB77C\uC774\uBE0C\uB7EC\uB9AC\uB4E4\uC740?<br> \uC774\uB2F9\uC2DC jQuery\uAC00 \uCD5C\uACE0\uC600\uC74C.<br> jQuery\uB294 1,2,3 \uBC84\uC804\uC774 \uC788\uB294\uB370 \uC774\uAC78\uC81C\uC77C \uB9CE\uC774 \uC500.<br> 90% \uC774\uC0C1\uC740 jQuery\uB97C \uC4F4\uB2E4.</p><p>angularjs -&gt; angular<br> react\uAC00 \uB098\uC634</p><p>vanilla js?<br> \uADF8\uB0E5 \uC6B0\uB9AC\uAC00 \uC54C\uACE0 \uC788\uB294 javascript\uC784.<br> \uBB34\uBD84\uBCC4\uD55C \uB77C\uC774\uBE0C\uB7EC\uB9AC \uB0A8\uBC1C\uD558\uAC8C\uB418\uBA74\uC11C \uBB34\uAC70\uC6CC\uC9D0.<br> \uADF8\uB798\uC11C \uC21C\uC218\uD55C js\uB9CC \uC4F0\uC790\uB294 \uB9D0\uC774 \uB098\uC654\uC74C.<br> \uBB50 \uC798 \uC54C\uBA74 \uD558\uBA74 \uB418\uC9C0.</p><p>\uBE0C\uB77C\uC6B0\uC800 \uBC16\uC758 js<br> npm, bower \uC124\uCE58\uD574\uC11C \uC4F0\uB294 \uAC70\uC784.<br> \uBC88\uB4E4\uB7EC<br> \uBC14\uBCA8, \uC6F9\uD329</p><p>nodejs\uAC00<br> \uC5B4\uB9C8\uC5B4\uB9C8\uD558\uAC8C \uBC1C\uC804\uD588\uC74C.<br> nodejs \uB9CC\uC744 \uC4F0\uBA74 \uBCC4 \uBA54\uB9AC\uD2B8\uAC00 \uC5C6\uC9C0\uB9CC<br> devops\uB97C \uC4F0\uB294 nodejs\uB77C\uACE0 \uD558\uBA74 \uC5C4\uCCAD\uB09C \uBA54\uB9AC\uD2B8\uAC00 \uC788\uB2E4\uACE0 \uD568.<br> devops\uB77C\uB294 \uAC70\uB294 \uAC1C\uBC1C\uC790\uAC00 \uC624\uD37C\uB808\uC774\uD305\uD560 \uC218 \uC788\uB294 \uC2DC\uC2A4\uD15C\uC774\uB77C\uACE0 \uD55C\uB2E4.</p><p>\uBAA8\uBC14\uC77C \uAC1C\uBC1C \uC704\uC8FC\uB85C \uD588\uB2E4\uAC00, \uB108\uBB34 \uD37C\uD3EC\uBA3C\uC2A4\uAC00 \uB5A8\uC5B4\uC9C0\uB2C8\uAE4C..<br> \uC9C0\uC6D0\uD558\uB294 \uAC83\uB4E4\uC774 \uB2E4 \uB2EC\uB77C\uC9D0.<br> \uC810\uC810 \uBE68\uB9AC..<br> \uADF8\uB7EC\uB2E4 \uBCF4\uB2C8 \uB354 \uD3B8\uD558\uAC8C \uAC1C\uBC1C\uD560 \uC218 \uC788\uACE0<br> \uB354 \uBE60\uB974\uAC8C \uAC1C\uBC1C\uD560 \uC218 \uC788\uB294<br> hybrid \uC571\uC744 \uC6D0\uD588\uC74C<br> \uC774\uAC8C react native\uAC00 \uB418\uC5C8\uC74C.<br> \uACB0\uAD6D \uB354 \uBE60\uB978 \uAC1C\uBC1C\uC744 \uC704\uD55C \uC5B8\uC5B4\uC784.</p><h2 id="_4-2018\u1102\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_4-2018\u1102\u1167\u11AB" aria-hidden="true">#</a> 4. 2018\uB144</h2><p>promise \uB77C\uB294 \uAC1C\uB150\uC744 \uC54C\uBA74 \uB418\uACE0<br> \uD3F4\uB9AC\uD544\uB85C promise\uB97C \uC9C0\uC6D0\uD574\uC8FC\uAE30 \uB54C\uBB38\uC5D0, \uB300\uBD80\uBD84 \uC9C0\uC6D0\uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.</p><p>sharedArrayBuffer \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uC5C4\uCCAD\uB09C \uBA54\uBAA8\uB9AC \uB0AD\uBE44\uB97C \uD558\uAC8C \uB418\uC5B4\uC11C \uB098\uC628 \uAE30\uC220</p><p>promise finally \uCD94\uAC00 \uC608\uC815</p><p>\uBDF0\uAC00 \uC0DD\uAE40<br> \uBDF0\uB97C \uC4F0\uB294 \uC774\uC720\uB294<br> \uB300\uBD80\uBD84\uC758 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC9C0\uC6D0\uD558\uAE30\uC5D0</p><p>\uADF8\uB7FC\uC5D0\uB3C4 jQuery\uB294 \uC5EC\uC804\uD788 \uB9CE\uC774 \uC368\uC654\uB2E4.</p><p>nodejs\uC758 \uC548\uC815\uC131\uC5D0 \uB300\uD574 \uACE0\uBBFC\uD560 \uD544\uC694\uAC00 \uC5C6\uC744\uB9CC\uD07C \uBC1C\uC804\uB418\uC5B4 \uC654\uC74C.</p><p>\uC5C6\uC5B4\uC84C\uB2E4 \uBC14\uB00C\uC5C8\uB2E4. \uC774 \uAC83\uC758 \uBC29\uBC95</p><p>\uADF8\uB798\uC11C \uC9C4\uC601\uC744 \uC798 \uC120\uD0DD\uD558\uB294 \uAC83\uC774 \uC911\uC694\uD558\uACE0<br> \uC9C4\uC785\uC7A5\uBCBD\uC774 \uB0AE\uC740\uCABD \uBA3C\uC800 \uB4E4\uC5B4\uAC00\uBCF4\uB294 \uAC83\uB3C4 \uC88B\uB2E4. \uADF8\uB798\uC11C vue</p><p>PWA<br> \uC21C\uC218 HTML \uC790\uCCB4\uAC00 \uC571\uC774 \uB428.</p><h2 id="_5-2019\u1102\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_5-2019\u1102\u1167\u11AB" aria-hidden="true">#</a> 5. 2019\uB144</h2><p>TypeScript \uAC00 \uBC1C\uC804\uC774 \uB9CE\uC774 \uB418\uC5C8\uC74C<br> ECMA2019\uC5D0\uC11C... \uD2B9\uC9D5 \uB9CE\uC774 \uCD94\uAC00 \uB418\uC5C8\uC9C0\uB9CC...<br> \uBA38 \uC798 \uC548\uC500.</p><p>\uB77C\uC774\uBE0C\uB7EC\uB9AC</p><ul><li>\uC575\uADE4\uB7EC</li><li>\uBDF0</li><li>\uB9AC\uC561\uD2B8<br> \uC0BC\uD30C\uC804<br> \uBDF0\uC758 \uC0DD\uD0DC\uACC4 \uD658\uACBD\uC758 \uD655\uC7A5 \uC4F8\uB9CC\uD574\uC9D0..<br> \uC575\uADE4\uB7EC -&gt; \uAD6C\uAE00<br> \uB9AC\uC561\uD2B8 -&gt; \uD398\uC774\uC2A4 \uBD81<br> \uC774 \uC5C5\uCCB4\uAC00 \uB9DD\uD558\uC9C0 \uC54A\uC740 \uC774\uC0C1 \uACC4\uC18D \uC9C0\uC6D0<br> VUE\uB294 \uADF8\uB7F0 \uC5C5\uCCB4\uAC00 \uC5C6\uC74C.<br> \uADF8\uB7FC\uC5D0\uB3C4 \uC798 \uC0B4\uC544\uB0A8\uACE0 \uC788\uC74C</li></ul><p>TypeScript ms\uC5D0\uC11C \uC5B4\uB9C8\uC5B4\uB9C8\uD558\uAC8C \uBC00\uC5B4\uBD99\uC774\uACE0 \uC788\uC74C</p><p>\uBC88\uB4E4\uB7EC<br> \uBD80\uB3D9\uC758 1\uC704 \uC6F9\uD329</p><p>PWA\uC758 \uAC00\uC7A5 \uD070 \uC7A5\uC810<br> \uC2A4\uD0C0\uBC85\uC2A4\uC758 \uC571\uC774 pwa\uB85C \uB9CC\uB4E4\uC5B4\uC9D0.<br> \uC5B4\uB9C8\uC5B4\uB9C8 \uBC1C\uC804<br> 200mb \uAC00 \uB418\uB294 \uC571\uC774 1mb\uBC16\uC5D0 \uC548\uB098\uC634.<br> \uC778\uB3C4, \uC911\uAD6D \uB124\uD2B8\uC6CC\uD06C \uB538\uB9AC\uB294 \uCABD\uC5D0\uC11C \uAC15\uC138\uB97C \uBC1C\uC0DD<br> pwa\uAC00 \uAC15\uC810\uC774 \uB420 \uB4EF.</p><h2 id="_6-2020\u1102\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_6-2020\u1102\u1167\u11AB" aria-hidden="true">#</a> 6. 2020\uB144</h2><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 \uB3D9\uD5A5. \uD55C\uACC4 \uB300\uB450.</p><p>\uB77C\uC774\uBE0C\uB7EC\uB9AC \uD504\uB808\uC784\uC6CC\uD06C<br> \uB9AC\uC561\uD2B8 \uAC15\uC138<br> \uC575\uADE4\uB7EC \uC0C8\uB85C\uC6B4 \uBC84\uC804<br> \uADF8\uB9AC\uACE0 \uBDF0js<br> 3.0\uC774 \uBC1C\uD45C\uB418\uBA70 \uBC14\uB01C.<br> \uC548\uBD10\uB3C4 \uB41C\uB2E4. 2.0 \uBC84\uC804\uB9CC \uBCF4\uBA74 \uB428.</p><p>svelete \uB77C\uB294 \uC560\uAC00 \uB098\uC654\uB294\uB370 \uAC11\uC790\uAE30 \uC2E0\uC131\uC73C\uB85C \uB300\uB450\uB428.</p></div>`);
}
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2).html.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
var _______1_D2__html = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["ssrRender", _sfc_ssrRender$H], ["__file", "\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(D2).html.vue"]]);
var _______1_D2__html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _______1_D2__html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$G = {};
function _sfc_ssrRender$G(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>2021.04.13</p><h1 id="javascript-\u1100\u1175\u1107\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#javascript-\u1100\u1175\u1107\u1169\u11AB" aria-hidden="true">#</a> javascript \uAE30\uBCF8</h1><p>ECMA5 \uAC00 \uD604\uC7AC \uD45C\uC900\uC774\uACE0, ECMA6 \uB294 \uC544\uB2D8 \uADFC\uB370 \uC9C0\uAE08 \uACF5\uBD80\uD558\uB294 \uC0AC\uC774\uD2B8\uB294 \uBAA8\uB358 \uD658\uACBD\uC784.</p><h2 id="_1-javascript\u1102\u1173\u11AB" tabindex="-1"><a class="header-anchor" href="#_1-javascript\u1102\u1173\u11AB" aria-hidden="true">#</a> 1. JavaScript\uB294...</h2><pre><code>ECMAscript\uAC00 \uC6D0\uB798 \uBA85\uCE6D 
\uC2A4\uD06C\uB9BD\uD2B8 \uC5D4\uC9C4\uC774 \uB3CC\uC544\uAC00\uC57C \uD568. (\uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uB2E4\uB984)
\u203B ie\uB294 ecma6\uB97C \uC9C0\uC6D0\uC548\uD558\uACE0, \uB2E4 \uC9C0\uC6D0\uD568. ie\uB9CC \uC548\uC4F0\uBA74 \uB428.
</code></pre><h3 id="\u110B\u1166\u11AB\u110C\u1175\u11AB\u110B\u1174-\u110C\u1169\u11BC\u1105\u1172" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u11AB\u110C\u1175\u11AB\u110B\u1174-\u110C\u1169\u11BC\u1105\u1172" aria-hidden="true">#</a> \uC5D4\uC9C4\uC758 \uC885\uB958</h3><pre><code>1) V8 Chrome\uACFC opera v8 \uC5D4\uC9C4\uC774 \uC11C\uBC84\uC0AC\uC774\uB4DC\uC5D0\uC11C \uB3D9\uC791\uD560 \uC218 \uC788\uAC8C \uD588\uC74C
  \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB9CC\uC73C\uB85C \uAC1C\uBC1C \uAC00\uB2A5\uD558\uAC8C \uB418\uC5C8\uB2E4
2) SpiderMonkey : FireFox
3) Trident, Chakra : Ie

js\uB9CC \uC54C\uBA74 \uC548\uB418\uACE0, html, css \uB97C \uC798 \uC54C\uC544\uC57C \uD568
\uC65C\uB0D0 js\uB294 \uACB0\uAD6D dom \uC744 \uAC74\uB4DC\uB9AC\uB294 \uC560\uAE30 \uB54C\uBB38\uC5D0.
</code></pre><h3 id="\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173\u1105\u1169-transipile-\u1103\u116C\u11AF-\u1109\u116E-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u110B\u1165\u11AB\u110B\u1165\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173\u1105\u1169-transipile-\u1103\u116C\u11AF-\u1109\u116E-\u110B\u1175\u11BB\u1102\u1173\u11AB-\u110B\u1165\u11AB\u110B\u1165\u1103\u1173\u11AF" aria-hidden="true">#</a> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C transipile \uB420 \uC218 \uC788\uB294 \uC5B8\uC5B4\uB4E4.</h3><p>\uB2E4\uB978 \uC5B8\uC5B4\uB85C \uC791\uC131\uD588\uC73C\uB098 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB85C \uBCC0\uD658\uAC00\uB2A5</p><ul><li><p>TypeScript : \uC790\uB8CC\uD615\uC758 \uBA85\uC2DC\uD654, \uAC1C\uBC1C\uC744 \uB2E8\uC21C\uD654, \uBCF5\uC7A1\uD55C \uC2DC\uC2A4\uD15C \uC9C0\uC6D0 \uC694\uC998 \uB728\uACE0 \uC788\uC74C. \uD300\uC6E4\uC73C\uB85C \uB9CC\uB4E4 \uB54C \uB300\uD615 \uAE30\uD68D\uC77C\uC218\uB85D \uD615\uADDC\uC57D\uC774 \uD544\uC694\uD568. \uADF8\uB798\uC11C\uC784.. vuejs\uB3C4 v3\uB85C \uAC00\uBA74\uC11C TypeScript\uB97C \uC9C0\uC6D0\uD588\uC74C. \uC774\uAC83\uB3C4 \uACF5\uBD80\uD558\uB294 \uAC74 \uB098\uC058\uC9C0 \uC54A\uC74C.</p></li><li><p>vscode\uAC00 javascript\uB85C \uB9CC\uB4E4\uC5B4\uC838 \uC788\uC74C.</p></li><li><p>\uC77C\uB809\uD2B8\uB860 \uC708\uB3C4\uC6B0 \uD504\uB85C\uADF8\uB798\uBC0D\uC778\uB370, html\uB85C \uB5A8\uC5B4\uC9D0. c#\uC758 ui \uC81C\uC5B4\uD558\uC5EC \uC774\uC058\uAC8C \uB098\uC624\uAE30\uAC00 \uD798\uB4EC. html\uB85C \uAD6C\uD604\uD558\uBA74 \uB514\uC790\uC778\uC740 \uC774\uC058\uAC8C \uB098\uC62C \uC218 \uC788\uC74C.</p></li></ul><h2 id="_2-\u1106\u1162\u1102\u1172\u110B\u1165\u11AF\u1100\u116A-\u1106\u1167\u11BC\u1109\u1166\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#_2-\u1106\u1162\u1102\u1172\u110B\u1165\u11AF\u1100\u116A-\u1106\u1167\u11BC\u1109\u1166\u1109\u1165" aria-hidden="true">#</a> 2. \uB9E4\uB274\uC5BC\uACFC \uBA85\uC138\uC11C</h2><pre><code>- ECMA-262 \uAC00 \uBA85\uC138\uC11C \uC774\uB984. (\uACC4\uC18D \uC5C5\uADF8\uB808\uC774\uB4DC \uB428.)
\uBCFC\uD544\uC694\uB294 \uC5C6\uB294\uB370, \uADF8\uB0E5 \uC774\uB7F0\uAC8C \uC788\uAD6C\uB098 
- MDN JavaScript Reference (\uC774\uAC78 \uC81C\uC77C \uB9CE\uC774 \uBD04.)
- caniuse.com (\uC5EC\uAE30\uC11C \uCD5C\uC2E0 \uBE0C\uB77C\uC6B0\uC800 \uD638\uD658\uC131, \uAC1C\uBC1C\uC790\uC758 \uC219\uBA85)
</code></pre><h2 id="_3-\u110F\u1169\u1103\u1173-\u110B\u1166\u1103\u1175\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#_3-\u110F\u1169\u1103\u1173-\u110B\u1166\u1103\u1175\u1110\u1165" aria-hidden="true">#</a> 3. \uCF54\uB4DC \uC5D0\uB514\uD130</h2><ul><li><p>vscode \uC5D0 \uC775\uC2A4\uD150\uC158 \uC124\uCE58\uD560 \uB54C... (\uB0B4\uBD80\uB9DD, \uC624\uD504\uB77C\uC778 \uD658\uACBD) vsix : visual studio marcketplace\uB77C\uB294 \uACF3\uC744 \uD1B5\uD574 \uB2E4\uC6B4\uB85C\uB4DC</p></li><li><p>\uBAA8\uB358\uC6F9\uC774\uB780 html5 css3 ECMAscript6 \uC774\uC0C1\uC744 \uBAA8\uB358 \uC6F9\uC774\uB77C\uACE0 \uD55C\uB2E4.</p></li><li><p>doctype\uC774\uB77C\uB294 \uAC8C \uC788\uC74C.</p><p>\uC774\uAC8C HTML 4.0\uC744 \uC9C0\uC6D0\uD558\uACE0, ... \uC774\uB807\uAC8C \uB418\uB294\uB370 HTML5\uB294 \uC644\uC804\uD788 \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294\uB2E4. \uC774\uB7F4 \uB550, JQUERY\uB85C \uC791\uC131\uD558\uB294\uAC8C \uC815\uC2E0 \uAC74\uAC15\uC5D0 \uC774\uB86D\uB2E4. \uADFC\uB370  \uC774\uB807\uAC8C \uB05D\uB098\uBA74 5 \uC9C0\uC6D0\uD558\uACA0\uB2E4\uB294 \uAC83\uC784</p></li></ul><h2 id="_4-\u110B\u1170\u11B8\u1111\u116D\u110C\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#_4-\u110B\u1170\u11B8\u1111\u116D\u110C\u116E\u11AB" aria-hidden="true">#</a> 4. \uC6F9\uD45C\uC900,</h2><p>\uC6B0\uB9AC\uB098\uB77C, \uAD6D\uC81C \uD45C\uC900\uC774 \uC788\uC74C \uBCF4\uD1B5 \uACF5\uACF5\uAE30\uAD00\uC5D0\uC11C \uC81C\uACF5\uD568. MVC \uD328\uD134, MVVM \uD328\uD134\uC744 \uAD6C\uD604\uD558\uB824\uBA74, \uC6F9\uD37C\uBE14\uB9AC\uC154\uB77C\uB294 \uC0AC\uB78C\uC774 \uC788\uC5B4\uC57C \uAE30\uB2A5\uBCC4\uB85C \uBA85\uD655\uD558\uAC8C \uAD6C\uBD84\uB41C\uB2E4.</p><p>\uAC1C\uBC1C\uC790 \uB3C4\uAD6C\uC5D0 \uB4E4\uC5B4\uAC00\uC11C \uB124\uD2B8\uC6CC\uD06C \uBD80\uBD84\uC744 \uBCF4\uBA74 finish \uBAA8\uB4E0 \uB370\uC774\uD130\uAC00 \uB80C\uB354\uB9C1, \uC628\uB85C\uB4DC \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uAC00 \uB2E4 \uC644\uB8CC\uB41C \uC2DC\uC810 \uC704\uC5D0\uC11C\uB294 css\uB9CC \uB85C\uB529\uD55C\uB2E4. \uADF8 \uB2E4\uC74C dom \uB85C\uB529 \uADF8\uB9AC\uACE0 js \uB85C\uB529</p><p>cdn\uC5D0 \uC788\uB294 \uAC83\uB4E4\uC740 \uC790\uC8FC \uBCC0\uD558\uC9C0 \uC54A\uB294 \uAC83\uB4E4\uC774\uB2E4. cdn\uC744 \uC4F0\uB294 \uC774\uC720\uAC00 \uBB50\uB0D0.. \uC11C\uBC84 \uB9AC\uC18C\uC2A4\uB97C \uC801\uAC8C \uBA39\uB294 \uAC83\uC774 \uC911\uC694\uD558\uB2E4. \uD2B9\uC9D5\uC740 \uD55C\uBC88 \uC62C\uB9AC\uBA74 \uCE90\uC2DC \uAC31\uC2E0\uD558\uAE30 \uC5B4\uB835\uB2E4.</p><h2 id="_5-\u110F\u1169\u1103\u1173-\u1100\u116E\u110C\u1169" tabindex="-1"><a class="header-anchor" href="#_5-\u110F\u1169\u1103\u1173-\u1100\u116E\u110C\u1169" aria-hidden="true">#</a> 5. \uCF54\uB4DC \uAD6C\uC870</h2><h5 id="\u1106\u116E\u11AB-\u1109\u1166\u1106\u1175\u110F\u1169\u11AF\u1105\u1169\u11AB-\u110C\u116E\u1109\u1165\u11A8\u110B\u1174-\u110B\u1174\u1106\u1175\u110B\u1166-\u1103\u1162\u1112\u1162\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB-\u1109\u1166\u1106\u1175\u110F\u1169\u11AF\u1105\u1169\u11AB-\u110C\u116E\u1109\u1165\u11A8\u110B\u1174-\u110B\u1174\u1106\u1175\u110B\u1166-\u1103\u1162\u1112\u1162\u1109\u1165" aria-hidden="true">#</a> \uBB38, \uC138\uBBF8\uCF5C\uB860, \uC8FC\uC11D\uC758 \uC758\uBBF8\uC5D0 \uB300\uD574\uC11C</h5><p>\uAC1C\uBC1C \uD45C\uC900 \uBC29\uBC95\uB860, \uC138\uBBF8\uCF5C\uB860\uC740 \uB4A4\uC5D0 \uBD99\uC774\uB294 \uAC83\uC774 \uC88B\uB2E4. \uADF8 \uD55C\uB77C\uC778\uC774 \uB05D\uB098\uB294 \uAC83\uC5D0 \uB300\uD55C \uBCF4\uC7A5\uC744 \uD655\uC2E4\uD788 \uD574\uC8FC\uAE30 \uB54C\uBB38. return, {} \uBD80\uBD84 \uB54C\uBB38\uC784. front end \uBAA8\uB358 \uBB38\uBC95\uC744 \uC4F0\uBA74 (ESlint) \uADF8 \uBB38\uBC95 \uC4F0\uB294 \uAC83\uC744 \uAC15\uC81C\uD560 \uC218 \uC5C6\uB2E4. \uD14C\uC2A4\uD2B8 \uD574\uC8FC\uAE30\uB3C4 \uD558\uB294\uB370 \uC138\uBBF8 \uCF5C\uB860\uC744 \uBD99\uC774\uBA74 \uC5D0\uB7EC\uB97C \uB0C4. \uC65C\uB0D0.. \uC138\uBBF8\uCF5C\uB860 \uBD99\uC774\uBA74 \uC6A9\uB7C9 \uC7A1\uC544\uBA39\uB294\uB2E8\uB2E4.. \uBD99\uC774\uB294\uAC8C \uC88B\uB2E4.</p><p>strict \uBAA8\uB4DC (\uC5C4\uACA9\uBAA8\uB4DC) \uC5C4\uACA9\uD55C \uAC80\uC0AC \uBAA8\uB4DC\uB97C \uC4F4\uB2E4. \uC5B4\uB290 \uC815\uB3C4 \uBB38\uBC95 \uAC80\uC0AC\uB97C \uD574\uC900\uB2E4\uACE0\uB9CC \uC54C\uACE0 \uC788\uC73C\uBA74 \uB428 \uBCF4\uD1B5 \uD568\uC218 \uC548\uC5D0 \uC4F0\uB294 \uACBD\uC6B0\uAC00 \uB9CE\uC740\uB370 global\uB85C \uC4F0\uBA74 \uADF8 \uD398\uC774\uC9C0\uAC00 \uBED7\uB294 \uACBD\uC6B0 \uB9CE\uC74C. (\uD300\uC791\uC5C5\uD558\uB294 \uACBD\uC6B0)</p><h2 id="_6-\u1107\u1167\u11AB\u1109\u116E\u110B\u116A-\u1109\u1161\u11BC\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_6-\u1107\u1167\u11AB\u1109\u116E\u110B\u116A-\u1109\u1161\u11BC\u1109\u116E" aria-hidden="true">#</a> 6. \uBCC0\uC218\uC640 \uC0C1\uC218</h2><p>let, const\uB97C \uC790\uC8FC \uC0AC\uC6A9\uD568. ie11\uC5D0\uC11C\uB3C4 \uAC70\uC758 \uC9C0\uC6D0 \uC548\uD568.</p><hr><h1 id="\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1100\u1169\u1100\u1173\u11B8" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1100\u1169\u1100\u1173\u11B8" aria-hidden="true">#</a> [\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uACE0\uAE09]</h1><p>\uC77C\uB2E8 \uB4E4\uC5B4\uBCF4\uAE30</p><h2 id="_1-hoisting" tabindex="-1"><a class="header-anchor" href="#_1-hoisting" aria-hidden="true">#</a> 1. hoisting</h2><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC774\uAC78 \uAC70\uCE68 \uB04C\uC5B4\uC62C\uB824\uC9C4\uB2E4. \uB04C\uC5B4\uC62C\uB824\uC11C \uBA3C\uC800 \uBB50\uAC00 \uC788\uB294\uC9C0 \uD655\uC778\uD558\uACE0 \uADF8 \uB2E4\uC74C \uCB49\uCB49\uCB49 \uC2E4\uD589\uB428.</p><ul><li>\uBCC0\uC218\uC5D0 \uB300\uD55C \uD638\uC774\uC2DC\uD305</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>foo <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> foo<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD574\uB3C4 \uC5D0\uB7EC\uAC00 \uC548\uB428. var foo\uAC00 \uB04C\uC5B4\uC62C\uB824\uC9D0.</p><ul><li><p>\uD568\uC218\uC5D0 \uB300\uD55C \uD638\uC774\uC2A4\uD305 \uD568\uC218\uB294 \uC870\uAE08 \uB2E4\uB984, <b>\uD568\uC218\uB294 \uC120\uC5B8, \uD560\uB2F9, \uCD08\uAE30\uD654 \uB2E4 \uB418\uACE0 \uC62C\uB9BC \uADF8\uB9AC\uACE0 \uD568\uC218 \uD638\uCD9C\uD558\uBA74 \uADF8\uB300\uB85C \uC2E4\uD589\uD568.</b></p></li><li><p>\uC708\uB3C4\uC6B0 \uC804\uC5ED\uAC1D\uCCB4</p></li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> str <span class="token operator">=</span> <span class="token string">&quot;String&quot;</span><span class="token punctuation">;</span>
pStr <span class="token operator">=</span> <span class="token string">&quot;property string&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC708\uB3C4\uC6B0\uB77C\uB294 \uAC1D\uCCB4\uAC00 \uC788\uACE0 str\uC740 \uC708\uB3C4\uC6B0\uC758 \uC9C0\uC5ED\uBCC0\uC218\uAC00 \uB418\uACE0 pStr \uC740 \uC708\uB3C4\uC6B0\uC758 \uD504\uB85C\uD37C\uD2F0\uAC00 \uB428.</p><ul><li>\uD568\uC218 \uC601\uC5ED \uB0B4\uBD80\uC5D0\uC11C\uB3C4 \uBCC0\uC218\uC758 \uD638\uC774\uC2A4\uD305\uC774 \uBC1C\uC0DD\uD55C\uB2E4. (\uB809\uC2DC\uCEEC \uD658\uACBD\uC5D0 \uB9DE\uAC8C)</li></ul><h2 id="_2-execution-context" tabindex="-1"><a class="header-anchor" href="#_2-execution-context" aria-hidden="true">#</a> 2. Execution Context</h2><p>\uC2E4\uD589 \uAC00\uB2A5\uD55C \uCF54\uB4DC\uBE14\uB7ED \uC2E4\uD589\uB418\uB294 \uD658\uACBD Global Eval \uD568\uC218. Function Code</p><p>\uC5EC\uAE30\uC11C \uD575\uC2EC\uC740 \uBB50\uB0D0\uBA74 \uD568\uC218\uAC00 \uD638\uCD9C\uB418\uBA74 \uADF8 \uD568\uC218\uC758 \uB809\uC2DC\uCEEC \uD658\uACBD\uACFC, \uADF8 \uB809\uC2DC\uCEEC \uD658\uACBD\uC774 \uC0C1\uC704 \uAE00\uB85C\uBC8C \uC635\uC81D\uD2B8\uC5D0\uC11C \uCC38\uC870\uD574\uC624\uB294 \uD658\uACBD\uC774 \uC788\uC5B4 \uC774\uB807\uAC8C \uC2A4\uCF54\uD504 \uCCB4\uC774\uB2DD\uC774 \uC774\uB904\uC9C4\uB2E4\uB294 \uAC83\uC774\uACE0 \uC6B0\uC120\uC21C\uC704\uB294 \uBB34\uC870\uAC74 \uAC00\uAE4C\uC6B4\uAC70 \uBD80\uD130\uC57C. const\uB294 \uBC16\uC5D0\uC11C \uC120\uC5B8\uD588\uC73C\uBA74 \uC5B4\uB514\uC11C\uB4E0 \uC911\uBCF5\uD574\uC11C \uC120\uC5B8\uD560 \uC218 \uC5C6\uC74C</p><h2 id="_3-closure" tabindex="-1"><a class="header-anchor" href="#_3-closure" aria-hidden="true">#</a> 3. closure</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">outer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  title   <span class="token operator">...</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">alert</span> <span class="token punctuation">(</span>title<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>inner = outer \uB77C\uACE0 \uD558\uBA74 inner \uD638\uCD9C \uC2DC title\uC774 \uD638\uCD9C \uB418\uB294\uB370 global \uC5D0\uC120 title \uBABB\uCC0D\uC74C</p><p>\uC774\uAC74 \uC880 \uC5B4\uB835\uB2E4. \uBCC0\uC218\uB97C \uC120\uC5B8\uD588\uB294\uB370 \uB0B4\uAC00 \uC6D0\uD558\uB294\uB300\uB85C \uC548\uB098\uC634 \uC774\uAC74 closure \uBB38\uC81C\uC778 \uACBD\uC6B0\uAC00 \uB300\uBD80\uBD84\uC784.</p><h2 id="_4-object-array-function" tabindex="-1"><a class="header-anchor" href="#_4-object-array-function" aria-hidden="true">#</a> 4. object, array, function</h2><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uB300\uBD80\uBD84 \uAC1D\uCCB4\uC774\uB2E4. undefine(is not defined \uC544\uB2C8\uACE0) null NaN \uC774\uAC70 \uBE7C\uACE0 \uB2E4 \uAC1D\uCCB4\uC784.</p><p>\uC120\uC5B8\uC5D0\uC11C\uC624\uB294 \uC18D\uB3C4\uCC28\uC774 \uC0DD\uC131\uC790 \uC0AC\uC6A9\uBCF4\uB2E4 \uB9AC\uD130\uB7F4 \uC0AC\uC6A9\uC774 \uD6E8\uC52C \uBE60\uB984. \uADF8\uB9AC\uACE0 \uC0DD\uC131\uC790\uB294 \uC624\uBC84\uB77C\uC774\uB529 \uB420 \uC704\uD5D8\uC774 \uC788\uC74C \uADF8\uB798\uC11C \uC0DD\uC131\uC790\uBCF4\uB2E4 \uB9AC\uD130\uB7F4\uC744 \uC4F0\uB294 \uACBD\uC6B0\uAC00 \uC88B\uC74C.</p><p>\uD568\uC218\uB3C4 \uC0DD\uC131\uC790\uAC00 \uC788\uC74C.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> sum <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Function</span><span class="token punctuation">(</span><span class="token string">&quot;x&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;y&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;return x+y;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uAC8C \uD568\uC218\uC758 \uB3D9\uC801 \uC120\uC5B8 x,y \uC778\uC218 \uC138\uBC88\uC9F8\uAC00 \uBC14\uB514\uAC00 \uB428</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">sum</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">sum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span>y</span><span class="token punctuation">)</span> 
<span class="token punctuation">{</span>
  <span class="token keyword">return</span> x<span class="token operator">+</span>y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC790 \uC5EC\uAE30\uC11C \uCC28\uC774\uC810\uC740 \uCCAB\uBC88\uC9F8 \uB450\uBC88\uC9F8\uB294 var\uB85C \uB9CC\uB4E0\uAC70\uC784. \uC774\uAC74 \uBCC0\uC218 \uD638\uC774\uC2A4\uD305\uC774 \uB418\uACE0, \uC704\uC5D0\uC11C \uD638\uCD9C\uD560\uB77C\uACE0 \uD558\uBBC4 \uC548\uB428 \uC138\uBC88\uC9F8\uB294 \uD568\uC218 \uD638\uC774\uC2A4\uD305\uC774\uBBC0\uB85C \uC5B4\uB514\uC11C\uB4E0 \uD638\uCD9C \uAC00\uB2A5</p><p>------------------------------------------------\uC5EC\uAE30\uAE4C\uC9C0\uAC00 \uACE0\uAE09 JS------------------------------------------------</p><p>\uB2E4\uC2DC \uBCC0\uC218\uBD80\uBD84 (6\uBC88 \uC774\uC5B4\uC11C) \uC815\uB9AC\uD558\uBA74... \uC6EC\uB9CC\uD558\uBA74 const\uB97C \uC4F0\uACE0 \uC7AC\uD560\uB2F9 \uD560\uAC70\uBA74 let\uC744 \uC4F0\uB77C\uB294 \uAC70\uC784</p><p>\uC5B4\uB835\uAC8C \uAC1C\uBC1C\uD558\uC9C0 \uB9D0\uACE0 \uC77C\uB2E8 \uAC1C\uBC1C\uD574\uC11C \uB418\uBA74\uC740 \uBC14\uAFD4\uBCF4\uACE0 \uD574\uBCF4\uACE0.. \uADF8\uAC8C \uACBD\uD5D8\uC774\uACE0 \uADF8\uAC8C \uAC00\uC7A5 \uC88B\uC74C.</p><h2 id="_6-\u110C\u1161\u1105\u116D\u1112\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#_6-\u110C\u1161\u1105\u116D\u1112\u1167\u11BC" aria-hidden="true">#</a> 6. \uC790\uB8CC\uD615</h2><p>: BigInt \uC790\uB8CC\uD615\uC740 \uC22B\uC790 \uB05D\uC5D0 n\uC744 \uBD99\uC778\uB2E4. (\uC0AC\uD30C\uB9AC, ie \uADF8\uB0E5 \uD06C\uB86C\uC5D0 \uB9DE\uCD94\uB294\uAC8C \uC81C\uC77C \uC88B\uC74C) backtick \uBB38\uC790\uC5F4. \` \uC774\uAC74\uB370 \uB530\uC634\uD45C \uC5EC\uB7EC\uAC1C \uB123\uACE0 \uC2F6\uC740 \uACBD\uC6B0 &quot;\uC548\uC5D0 \`\` \uB123\uC5B4\uC904 \uC218 \uC788\uC73C\uB2C8\uAE4C&quot; \uB610 \uC678\uBD80\uC5D0\uC11C \uC120\uC5B8\uB41C \uBCC0\uC218 \uC790\uB3D9\uC73C\uB85C \uB123\uC744 \uC218 \uC788\uC74C (\uC774\uAC8C \uC81C\uC77C \uC88B\uB2E4.)</p><p>\uC2EC\uBCFC.. ecma6\uC5D0\uC11C \uB098\uC654\uB294\uB370 \uC798 \uC548\uC500.</p><p>typeof \uC758 \uACBD\uC6B0 array\uB294 \uD45C\uC2DC \uC548\uD574\uC90C NaN\uB3C4 \uC22B\uC790\uD615\uC774\uB77C \uBCF4\uBA74 \uB41C\uB2E4.</p><hr><h2 id="_7-getter\u110B\u116A-setter" tabindex="-1"><a class="header-anchor" href="#_7-getter\u110B\u116A-setter" aria-hidden="true">#</a> 7. getter\uC640 setter</h2><p>\uAC12\uC744 \uAC00\uC838\uAC08 \uB54C, \uAC12\uC744 \uC138\uD305\uD560 \uB54C \uADF8 \uC2DC\uC810\uC5D0 \uD568\uC218\uB97C \uC120\uC5B8\uD574\uC11C \uC81C\uC5B4\uD560 \uC218 \uC788\uB2E4. \uC774\uAC8C \uBDF0\uC758 \uAC1C\uB150\uC784.</p><ul><li>\uBDF0\uAC00 \uC2E0\uAE30\uD55C\uAC8C setter\uC640 getter \uC758 \uB3D9\uC791\uC73C\uB85C \uD639\uC740 proxy\uB97C \uD1B5\uD574\uC11C \uC2E4\uC2DC\uAC04 \uC5C5\uB370\uC774\uD2B8\uB97C \uD574\uC90C</li></ul><ul><li>\uBDF0\uC758 \uC2E0\uAE30\uD55C \uC810 input\uC5D0 \uC785\uB825\uD560 \uB54C\uB9C8\uB2E4 \uC704\uC758 string\uC774 \uBC14\uB00C\uAC8C \uD560 \uC218 \uC788\uB294\uAC8C input\uC5D0 \uC785\uB825\uBC1B\uB294 \uC2DC\uC810\uC5D0 setter\uB97C \uBD88\uB7EC\uC640 update\uB97C \uD574\uC8FC\uAE30 \uB54C\uBB38\uC784!! \uC61B\uB0A0\uC5D0 \uAC8C\uC2DC\uD310 \uB9CC\uB4E4 \uB54C \uD68C\uC6D0\uAC00\uC785\uC5D0\uC11C \uBE44\uBC00\uBC88\uD638 \uD655\uC778\uD560 \uB54C \uAE30\uC5B5\uD574\uBD10.. ie9 \uC5D0\uC11C \uB3D9\uC791 \uC548\uD568.</li></ul><h2 id="_8-alert-prompt-confirm" tabindex="-1"><a class="header-anchor" href="#_8-alert-prompt-confirm" aria-hidden="true">#</a> 8. alert, prompt, confirm</h2><p>\uC911\uB2E8\uC774 \uD544\uC694\uD560 \uB54C \uC6D0\uC11C\uCABD\uB3C4 \uC4F8 \uC608\uC815\uC5D0 \uC788\uC74C</p><h2 id="_9-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB" tabindex="-1"><a class="header-anchor" href="#_9-\u1112\u1167\u11BC\u1107\u1167\u11AB\u1112\u116A\u11AB" aria-hidden="true">#</a> 9. \uD615\uBCC0\uD658</h2><p>\uD615\uBCC0\uD658 \uD558\uB294 \uACBD\uC6B0 \uAC70\uC758 \uC5C6\uC74C.</p><p>falsy \uBC38\uB958 false\uAC00 \uC544\uB2D8. \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uC0C1\uC5D0 \uC5F0\uC0B0\uC790 \uAD6C\uBB38\uC73C\uB85C \uB3D9\uC791\uD588\uC744 \uB54C. false\uB85C \uAC04\uC8FC\uB418\uB294 \uAC12 null, undefine, NaN, &quot;&quot;, 0 \uC774\uB7F0\uC560\uB4E4.. falsy object\uB77C\uACE0 \uD55C\uB2E4.</p><h2 id="_10-\u1100\u1175\u1107\u1169\u11AB\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_10-\u1100\u1175\u1107\u1169\u11AB\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> 10. \uAE30\uBCF8\uC5F0\uC0B0\uC790</h2><p>\uAC70\uB4ED\uC81C\uACF1 \uC5F0\uC0B0\uC790\uB294 \uBABB\uC4F0\uB294 \uBE0C\uB77C\uC6B0\uC800\uB3C4 \uC788\uC74C ecma6d\uC784</p><ul><li>\uD615\uBCC0\uD658 \uC6B0\uC120\uC21C\uC704 \uC22B\uC790 + \uBB38\uC790\uC5F4\uC740 \uBB38\uC790\uC5F4\uB85C \uCDE8\uAE09</li></ul><p>\uAC00\uC7A5 \uC88B\uC740 \uC815\uC218 \uD615\uBCC0\uD658 parseInt(&quot;32&quot;,10) 10\uC9C4\uBC95\uC73C\uB85C \uBB38\uC790\uC5F4 \uBCC0\uD658\uD574\uB77C... \uACC4\uC0B0\uD558\uAE30 \uD798\uB4E0 \uC560\uB4E4 \uBD80\uB3D9\uC18C\uC22B\uC810 : \uC5F0\uC0B0\uD558\uB824\uBA74 \uB178\uAC00\uB2E4 \uD544\uC694\uD568 date \uC5F0\uC0B0\uC790 : \uC4F0\uB294 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uC815\uD574\uC838\uC788\uC74C \uBAA8\uBA3C\uD2B8??</p><p>\uBE44\uD2B8\uC5F0\uC0B0\uC790\uB3C4 \uAC70\uC758 \uC548\uC500.</p><h2 id="_11-\u1107\u1175\u1100\u116D\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_11-\u1107\u1175\u1100\u116D\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> 11. \uBE44\uAD50\uC5F0\uC0B0\uC790</h2><p>\uBB38\uC790\uC5F4 \uBE44\uAD50.. \uB9CE\uC774 \uC4F0\uC774\uB294 \uCABD. array sorting \uD560 \uB54C.<br> \uADFC\uB370 \uC774 \uB54C \uC0AC\uC804\uC21C\uC774 \uC544\uB2C8\uB77C \uB300\uC18C\uBB38\uC790 \uB530\uC9C0\uB294 \uC720\uB2C8\uCF54\uB4DC \uC21C\uC784!</p><h2 id="_12-if\u1106\u116E\u11AB-\u110C\u1169\u1100\u1165\u11AB\u110E\u1165\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#_12-if\u1106\u116E\u11AB-\u110C\u1169\u1100\u1165\u11AB\u110E\u1165\u1105\u1175" aria-hidden="true">#</a> 12. if\uBB38 ? \uC870\uAC74\uCC98\uB9AC.</h2><p>3\uD56D \uC5F0\uC0B0\uC790\uAC00 \uC788\uB2E4..</p><h2 id="_13-\u1102\u1169\u11AB\u1105\u1175-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_13-\u1102\u1169\u11AB\u1105\u1175-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> 13. \uB17C\uB9AC \uC5F0\uC0B0\uC790</h2><p>\uAD49\uC7A5\uD788 \uB9CE\uC774 \uC4F0\uC784.(\uC0DD\uAC01\uBCF4\uB2E4) \uC55E\uC5D0\uAC00 true\uB85C \uB5A8\uC5B4\uC9C0\uBA74 \uB4A4\uC5D0\uAC00 \uC2E4\uD589\uC774 \uC548\uB428\uC744 \uC720\uC6A9\uD558\uAC8C \uC4F4\uB2E4.</p><p>alert(alert(1) || 2 || alert(3)); \uC774\uB7EC\uBA74 alert(1) \uC2E4\uD589 =&gt; \uBC18\uD658\uAC12 undefine \uADF8\uB9AC\uACE0 alert(2) \uAC00 \uC2E4\uD589\uB418\uACE0 \uC885\uB8CC.</p><h2 id="_14-null-\u1107\u1167\u11BC\u1112\u1161\u11B8-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#_14-null-\u1107\u1167\u11BC\u1112\u1161\u11B8-\u110B\u1167\u11AB\u1109\u1161\u11AB\u110C\u1161" aria-hidden="true">#</a> 14. null \uBCD1\uD569 \uC5F0\uC0B0\uC790</h2><p>\uBB50 \uC774\uB7F0\uAC8C \uC788\uB2E4 \uC815\uB3C4.</p><h2 id="_15-while-for-\u1100\u116E\u1106\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#_15-while-for-\u1100\u116E\u1106\u116E\u11AB" aria-hidden="true">#</a> 15. while, for \uAD6C\uBB38</h2><p>while\uC744 \uC4F0\uB294 \uACBD\uC6B0\uB294 \uB0B4\uBD80\uC5D0 break\uC744 \uD558\uB294 \uACBD\uC6B0\uC5D0\uB9CC \uC4F0\uC600\uC74C. for(let i=0;..) \uC774\uB7F0\uC2DD\uC73C\uB85C \uC4F4 i\uB294 \uC774 \uC548\uC5D0\uC11C\uB9CC \uC4F8 \uC218 \uC788\uB2E4. continue\uB294 \uBC18\uBCF5\uBB38\uC5D0\uC11C\uB9CC \uC4F8 \uC218 \uC788\uB294 \uAC83\uC774\uB2E4. \uD568\uC218\uC5D0\uC11C \uC911\uC9C0\uC2DC\uD0A4\uB824\uBA74 return \uC784.</p><h2 id="_16-switch-\u1106\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#_16-switch-\u1106\u116E\u11AB" aria-hidden="true">#</a> 16. switch \uBB38</h2><p>\uC2A4\uC704\uCE58 \uBB38 \uBCC4\uB85C\uB77C\uB294 \uCC45\uB3C4 \uC788\uC5C8\uB294\uB370 \uBB50 \uC368\uB3C4 \uC0C1\uAD00 \uC5C6\uB294 \uAC83 \uAC19\uB2E4. break\uB9CC \uC798 \uC4F0\uBA74 \uB428.</p><h2 id="_17-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_17-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> 17. \uD568\uC218</h2><p>\uD568\uC218\uC758 \uAE30\uBCF8\uAC12 \uC124\uC815\uC774 \uAC00\uB2A5\uD558\uB2E4.</p><p>return\uC740 \uC904\uBC14\uAFC8\uC744 \uC8FC\uC758\uD558\uC790 \uC904\uBC14\uAFC8 \uB418\uB294 \uC989\uC2DC return ; \uC73C\uB85C \uBCC0\uD658\uB428.</p><p>continuePrime, nextPrime \uC774\uB7F0\uAC70 \uC548\uC500..</p><ul><li><p>IIFE \uD568\uC218\uC5D0 \uC774\uB984 \uC5C6\uC774 \uADF8\uB0E5 \uC120\uC5B8\uD55C \uD568\uC218\uB97C \uADF8\uB0E5 \uC2E4\uD589\uD574\uBC84\uB9BC \uC5C4\uCCAD \uB9CE\uC774 \uC4F0\uC784. \uC548\uC5D0 \uBCC0\uC218\uB97C \uC120\uC5B8\uD574\uB450\uACE0 \uC774 \uBCC0\uC218\uB4E4\uC740 \uBC16\uC5D0\uC11C \uC811\uADFC \uBABB\uD568 \uADF8\uB0E5 \uD568\uC218\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C.</p><p>\uC678\uBD80\uC5D0\uC11C \uC811\uADFC \uBD88\uAC00 \uD638\uCD9C\uD560 \uC218 \uC5C6\uACE0, \uC775\uBA85\uD568\uC218\uB77C\uACE0\uB3C4 \uD568. &quot;\uC804\uC5ED\uC2A4\uCF54\uD504 \uB808\uBCA8\uC758 \uC624\uC5FC\uC774 \uB418\uC9C0 \uC54A\uAC8C \uD55C\uB2E4\uACE0 \uD558\uB124&quot; \uADF8\uB9AC\uACE0 (function(){})(); \uC774\uB807\uAC8C \uC368\uC57C \uD568. \uAF2D \uB4A4\uC5D0 (); \uAC00 \uC788\uC5B4\uC57C \uD568. \uC678\uAD6D\uC758 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uB300\uBD80\uBD84 \uC774\uB7F0 \uAE30\uBC95 \uB2E4 \uC500!</p><p>\uD568\uC218\uC758 \uBCF5\uC0AC\uB294 \uD568\uC218\uC758 \uC8FC\uC18C\uB97C \uBCF5\uC0AC\uD574\uC11C \uC8FC\uC18C\uC5D0\uC11C \uD638\uCD9C\uD574\uC624\uB294 \uAC83\uC774\uB2E4. c#\uC5D0\uC120 \uC774\uAC8C \uC5BC\uB9C8\uB098 \uC5B4\uB824\uC6B4 \uAC83\uC778\uC9C0... \uADF8\uB7F0\uB370 \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC120 \uADF8\uB0E5 \uB9C9 \uB358\uC9C0\uACE0 \uBC1B\uC744 \uC218 \uC788\uB2E4.</p><p>ajax\uB294 \uAE30\uBCF8\uC801\uC73C\uB85C \uB3D9\uC77C \uB3C4\uBA54\uC778 \uC6D0\uCE59\uC744 \uB530\uC9C0\uB294\uB370.. ajax\uB294 \uCF5C\uBC31\uC744 \uB358\uC838\uC11C \uADF8 \uD568\uC218\uB85C \uC2E4\uD589\uD558\uB77C\uB294 \uAC83\uC784 jsonP\uB294 \uD568\uC218 \uC774\uB984\uB9CC \uB358\uC9D0 \uADF8 \uACB0\uACFC\uC5D0\uC11C \uD568\uC218 \uC774\uB984\uC744 \uC2E4\uD589\uD574\uBC84\uB9BC. \uC5EC\uAE30\uC120 \uD568\uC218 \uBA85\uC744 \uB358\uC9C0\uB294 \uAC83\uC784.</p></li></ul><h2 id="_18-arrow-function" tabindex="-1"><a class="header-anchor" href="#_18-arrow-function" aria-hidden="true">#</a> 18. arrow function</h2><p>\uAC00\uB3C5\uC131\uC774 \uB108\uBB34 \uB5A8\uC5B4\uC9D0. \uD568\uC218\uC778\uC9C0 \uC544\uB2CC\uC9C0 \uC870\uCC28 \uC54C \uC218 \uC5C6\uC5B4\uC11C... \uC798 \uC548\uC4F4\uB2E4\uD568.</p><h1 id="\u110F\u1169\u1103\u1173-\u1111\u116E\u11B7\u110C\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#\u110F\u1169\u1103\u1173-\u1111\u116E\u11B7\u110C\u1175\u11AF" aria-hidden="true">#</a> [\uCF54\uB4DC \uD488\uC9C8]</h1><h2 id="_1-\u110F\u1173\u1105\u1169\u11B7\u110B\u1173\u1105\u1169-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1-\u110F\u1173\u1105\u1169\u11B7\u110B\u1173\u1105\u1169-\u1103\u1175\u1107\u1165\u1100\u1175\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 1. \uD06C\uB86C\uC73C\uB85C \uB514\uBC84\uAE45\uD558\uAE30</h2><p>breakpoint\uB97C \uB9CC\uB4E4\uC5B4 \uB514\uBC84\uAE45\uD558\uB294 \uAC83 \uBCF4\uB2E4.</p><p>console \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC\uB97C \uB9CE\uC774 \uC4F0\uB294\uB370.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  console.dir \uD638\uCD9C \uD2B8\uB9AC \uBCFC \uB54C \uC0AC\uC6A9  
  console.log
  console.trace : \uB0B4\uAC00 \uCC0D\uC740 \uD3EC\uC778\uD2B8 \uB0B4\uC5D0\uC11C trace\uB0B4\uC5D0\uC11C argument\uB97C \uAC00\uC838\uC634 \uC774\uAC70 \uAD1C\uCC2E\uC74C
  console.group
  console.groupend
  console.time
  console.timeend \uADF8 \uCC28\uC774\uC758 \uC2DC\uAC04\uC744 \uCD9C\uB825\uD574\uC90C
  console.warn 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u110F\u1169\u1103\u1175\u11BC-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#_2-\u110F\u1169\u1103\u1175\u11BC-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> 2. \uCF54\uB529 \uC2A4\uD0C0\uC77C</h2><p>\uB531\uD788... \uD544\uC694 \uC5C6\uC74C \uC2DC\uC791\uC9C0\uC810\uC774 \uC798 \uC548\uBCF4\uC5EC\uC11C \uC911\uAD04\uD638 if\uBB38 \uB4A4\uC5D0 \uC4F0\uAE30\uB3C4 \uD568.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 

<span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C</p><p>backtick \uBB38\uC790\uC5F4 \uC88B\uC74C \`\` \uADF8 \uBB34\uC870\uAC74 \uBB38\uC790\uC5F4\uB85C \uCDE8\uAE09\uD568</p><p>immutable \uBD88\uBCC0 \uAC1D\uCCB4 number, string a\uB77C\uB294 \uBCC0\uC218\uC5D0 abc\uD560\uB2F9\uD558\uACE0 a = &quot;abc&quot;; a = a + &quot;abc&quot;; string \uD558\uB098\uC5D0 \uBB38\uC790\uC5F4 \uB123\uC5B4\uB193\uACE0 for \uBB38\uC73C\uB85C \uB367\uBD99\uC5EC\uC11C \uB098\uAC00\uB294 \uACBD\uC6B0\uAC00 \uC788\uC74C</p><p>linter \uC624\uD0C0, \uCF54\uB4DC \uAC15\uC81C\uB85C \uD560\uB2F9 \uB744\uC5B4\uC4F0\uAE30\uB3C4 \uB9C9\uB294 \uACBD\uC6B0 \uC788\uC74C. \uBC88\uAC70\uB86D\uC9C0\uB9CC \uC624\uB958\uB294 \uC548\uB098\uAC8C \uB9C9\uC744 \uC21C \uC5C6\uB2E4.</p><h2 id="_3-\u110C\u116E\u1109\u1165\u11A8" tabindex="-1"><a class="header-anchor" href="#_3-\u110C\u116E\u1109\u1165\u11A8" aria-hidden="true">#</a> 3. \uC8FC\uC11D</h2><p>\uC694\uC998 \uD2B8\uB80C\uB4DC\uB294</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">/* 
 * 
 * \uAD00\uB828 \uCF54\uB4DC \uC124\uBA85 \uBCC0\uC218 \uD30C\uB77C\uBBF8\uD130 \uB4F1 (\uD0C0\uC785\uC2A4\uD06C\uB9BD\uD2B8)
*/</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uBB50 \uC774\uB7F0\uC2DD\uC73C\uB85C \uC4F4\uB31C.</p><ul><li>Devops \uB294 \uB0B4\uAC00 \uC8FC\uC11D\uC744 \uC368\uB450\uBA74 \uC8FC\uC11D\uC5D0 \uB9DE\uAC8C \uBA85\uC138\uC11C\uB97C \uC790\uB3D9\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC90C.</li></ul><h2 id="_4-\u1110\u1166\u1109\u1173\u1110\u1173-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A-mocha" tabindex="-1"><a class="header-anchor" href="#_4-\u1110\u1166\u1109\u1173\u1110\u1173-\u110C\u1161\u1103\u1169\u11BC\u1112\u116A-mocha" aria-hidden="true">#</a> 4. \uD14C\uC2A4\uD2B8 \uC790\uB3D9\uD654 mocha</h2><p>\uD14C\uC2A4\uD2B8 \uBAA8\uB4C8\uC744 \uB9CC\uB4E4\uC5B4\uC11C \uADF8 \uBAA8\uB4C8\uC744 devops\uC5D0 \uB9CC\uB4E4\uC5B4\uB450\uBA74</p><h2 id="_5-\u1111\u1169\u11AF\u1105\u1175\u1111\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#_5-\u1111\u1169\u11AF\u1105\u1175\u1111\u1175\u11AF" aria-hidden="true">#</a> 5. \uD3F4\uB9AC\uD544</h2><p>mdn \uBCF4\uB294\uBC29\uBC95 \uC5B4\uB514\uC5B4\uB514 \uC9C0\uC6D0\uD558\uB294\uC9C0 \uBCFC\uC218 \uC788\uB294\uB370 \uAC70\uAE30\uC11C \uC9C0\uC6D0\uD558\uC9C0 \uC54A\uB294 \uBE0C\uB77C\uC6B0\uC800\uBA74 \uC5B4\uB5BB\uAC8C \uD558\uB290\uB0D0 \uD3F4\uB9AC\uD544\uC744 \uCD94\uAC00\uD574\uC8FC\uBA74 \uAC70\uAE30\uC11C \uD2B9\uC815\uAE30\uB2A5\uC744 \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB9CC\uB4E4\uC5B4\uC8FC\uACA0\uB2E4\uB294 \uAC83\uC784.</p><h1 id="\u1100\u1162\u11A8\u110E\u1166-\u1100\u1175\u1107\u1169\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u1100\u1175\u1107\u1169\u11AB" aria-hidden="true">#</a> [\uAC1D\uCCB4:\uAE30\uBCF8]</h1><h2 id="_1-\u1100\u1162\u11A8\u110E\u1166" tabindex="-1"><a class="header-anchor" href="#_1-\u1100\u1162\u11A8\u110E\u1166" aria-hidden="true">#</a> 1. \uAC1D\uCCB4</h2><p>for .. in \uC4F0\uC9C0\uB9D0 \uAC83. in object \uC0C1\uC18D\uC744 \uD1B5\uD55C \uD504\uB85C\uD37C\uD2F0\uB3C4 \uB2E4 \uB3CC\uBA74\uC11C \uAC00\uC838\uC634 \uADF8\uB7EC\uB2C8 for of\uB97C \uC4F0\uB294\uAC8C \uB0AB\uB2E4. \uADF8\uAC74 \uC0C1\uC18D \uBB34\uC2DC\uD558\uACE0 \uADF8 \uAC1D\uCCB4\uC5D0 \uC788\uB294 \uD504\uB85C\uD37C\uD2F0\uB9CC \uAC00\uC838\uC634.</p><h2 id="_2-\u110E\u1161\u11B7\u110C\u1169\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1107\u1169\u11A8\u1109\u1161" tabindex="-1"><a class="header-anchor" href="#_2-\u110E\u1161\u11B7\u110C\u1169\u110B\u1166-\u110B\u1174\u1112\u1161\u11AB-\u1100\u1162\u11A8\u110E\u1166-\u1107\u1169\u11A8\u1109\u1161" aria-hidden="true">#</a> 2. \uCC38\uC870\uC5D0 \uC758\uD55C \uAC1D\uCCB4 \uBCF5\uC0AC</h2><p>\uAC1D\uCCB4\uB294 call by Reference assign\uC744 \uD1B5\uD574 \uAC1D\uCCB4 \uBCF5\uC0AC\uAC00 \uAC00\uB2A5\uD558\uB2E4. \uC5EC\uAE30\uC11C \uAC1D\uCCB4\uC548\uC5D0 \uC911\uCCA9 \uAC1D\uCCB4\uC758 \uACBD\uC6B0\uB294 assign\uC73C\uB85C \uC548\uB41C\uB2E4. call by Reference\uC774\uAE30 \uB54C\uBB38. deep\uC73C\uB85C \uB4E4\uC5B4\uAC00\uC11C getter, setter \uBAA8\uB450 \uB2E4 \uC624\uBC84\uB77C\uC774\uB529 \uD558\uACA0\uB2E4.</p><p>loadash\uB294 \uAD49\uC7A5\uD788 \uB9CE\uC774 \uC4F0\uC774\uB294 \uAC1D\uCCB4\uC911\uC5D0 \uD558\uB098\uC784. \uC598 \uC548\uC5D0 deepcopy\uB77C\uB294 \uC560\uAC00 \uC788\uC74C \uC598 \uC4F0\uBA74 \uB428.</p><p>loadash, jQuery, moment \uC774\uB7F0 \uC560\uB4E4 \uB9CE\uC774 \uC4F0\uC784</p><p>deep copy \uC5D0 \uB300\uD574\uC11C jQuery\uC5D0\uC120 \uB525 \uBCF5\uC0AC \uAC00\uB2A5 deep copy \uBC29\uBC95 2\uAC1C \uC788\uC74C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>$<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">,</span> object1<span class="token punctuation">,</span> object2<span class="token punctuation">)</span><span class="token punctuation">;</span> 
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token constant">STRINGFY</span><span class="token punctuation">(</span>object1<span class="token punctuation">)</span><span class="token punctuation">)</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uD568\uC218\uAC00 \uC788\uC73C\uBA74 \uC598\uAE30\uB294 \uB2EC\uB77C\uC9D0.</p><h2 id="_3-\u1100\u1161\u1107\u1175\u110C\u1175-\u110F\u1165\u11AF\u1105\u1166\u11A8\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#_3-\u1100\u1161\u1107\u1175\u110C\u1175-\u110F\u1165\u11AF\u1105\u1166\u11A8\u1109\u1167\u11AB" aria-hidden="true">#</a> 3. \uAC00\uBE44\uC9C0 \uCEEC\uB809\uC158</h2><p>\uC6B0\uB9AC\uAC00 \uC544\uBB34\uB9AC \uD574\uB3C4 \uCF00\uC5B4\uB97C \uBABB\uD568. \uC5B8\uC81C \uC5C6\uC5B4\uC9C0\uB294\uC9C0\uB3C4 \uBAB0\uB77C. \uAC00\uBE44\uC9C0 \uCEEC\uB809\uD130\uAC00 \uC788\uAD6C\uB098 \uC815\uB3C4\uB9CC \uC54C\uBA74 \uB428.</p><h2 id="_4-\u1106\u1166\u1109\u1165\u1103\u1173\u110B\u116A-this-\u110C\u116E\u11BC\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#_4-\u1106\u1166\u1109\u1165\u1103\u1173\u110B\u116A-this-\u110C\u116E\u11BC\u110B\u116D" aria-hidden="true">#</a> 4. \uBA54\uC11C\uB4DC\uC640 &quot;this&quot; (*\uC911\uC694)</h2><p>\uC804\uC5ED \uAC1D\uCCB4\uC758 this : \uADF8\uB0E5 console\uC5D0 this \uCE58\uBA74 window</p><p>\uADF8 \uC678\uC758 this</p><ol><li>object key value \uC548\uC758 this\uB294 \uADF8 object</li><li>new \uC5F0\uC0B0\uC790\uB85C \uB9CC\uB4E4\uC5B4\uC9C4 \uAC1D\uCCB4\uBA74 \uADF8 \uAC1D\uCCB4 apply, call \uD1B5\uD574\uC11C \uBCC0\uACBD \uAC00\uB2A5 \uD568.</li></ol><p>this\uB294 \uC0C1\uD669\uBCC4\uB85C \uBC14\uB010\uB2E4. (\uB3D9\uC801\uC774\uB2E4.) this\uB77C\uB294 \uC560\uB97C \uD1B5\uD574\uC11C \uC5EC\uB7EC\uAC00\uC9C0 \uC18D\uC131\uC744 \uD1B5\uD569 \uAD00\uB9AC \uD560 \uC218 \uC788\uB2E4.</p><h2 id="\u110B\u116F\u11AB\u1109\u1165-\u110C\u1165\u11B8\u1109\u116E-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1110\u116E\u11AF\u110B\u1166\u1102\u1173\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110B\u116F\u11AB\u1109\u1165-\u110C\u1165\u11B8\u1109\u116E-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1110\u116E\u11AF\u110B\u1166\u1102\u1173\u11AB" aria-hidden="true">#</a> \uC6D0\uC11C \uC811\uC218 \uC0DD\uC131\uD234\uC5D0\uB294..</h2><p>\uC5EC\uB7EC \uD544\uB4DC\uAC00 \uC788\uACE0 \uC5EC\uB7EC input\uC774 \uC788\uC74C this\uB77C\uB294 \uAC70\uB294 \uB0B4 \uC790\uC2E0\uC744 \uB9D0\uD558\uC9C0\uB9CC \uAC1D\uCCB4\uC758 \uD504\uB85C\uD1A0\uD0C0\uC785, \uD655\uC7A5 \uB2E4 \uAC00\uB2A5\uD558\uB2E4.</p><p>loadash\uB098, jQuery\uB098, moment\uB098 \uC774\uB7F0 \uC560\uB4E4\uC740 \uD568\uC218\uC5D0 this\uB97C \uC4F4\uB2E4. this\uB97C \uD1B5\uD574 \uC790\uC2E0\uC758 \uC18D\uC131, \uC790\uC2E0\uC758 \uBA54\uC11C\uB4DC \uADF8\uB300\uB85C \uB2E4 \uC4F8 \uC218 \uC788\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><p>jQuery\uC5D0\uC11C \uBA54\uC11C\uB4DC \uCCB4\uC774\uB2DD\uACFC \uAC19\uC740 \uAC1C\uB150\uC5D0 \uBCF4\uBA74 \uB098 \uC790\uC2E0\uC744 this \uD558\uBA74 \uB428 return this; \uB97C \uD574\uC900 \uAC83\uC774\uB2E4.</p><p>this \uC758 \uAE30\uB2A5\uC744 \uB2E4\uC2DC \uC9DA\uC5B4\uBCF4\uBA74</p><ol><li>initialize</li><li>filed\uB97C \uAC00\uC838\uC634. \uC774 \uB450\uAC1C\uAC00 \uAE30\uBCF8\uC774\uACE0</li></ol><p>delegate pattern \uC774\uB77C\uB294 \uD328\uD134\uC774 \uC788\uB2E4. (\uC704\uC784 \uBC29\uBC95) \uC5EC\uAE30\uC11C\uB3C4 \uC4F0\uC774\uB294 \uAC83\uC774\uB2E4.<br> \uBA54\uC11C\uB4DC \uCCB4\uC774\uB2DD\uC744 \uC0AC\uC6A9\uD560 \uB54C\uB3C4 return this \uC778\uAC70\uC784</p></div>`);
}
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS).html.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
var _______1_JS__html = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["ssrRender", _sfc_ssrRender$G], ["__file", "\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-1(JS).html.vue"]]);
var _______1_JS__html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _______1_JS__html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$F = {};
function _sfc_ssrRender$F(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u1100\u1162\u11A8\u110E\u1166-\u1100\u1175\u1107\u1169\u11AB-\u110B\u1175\u110B\u1165\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u1100\u1175\u1107\u1169\u11AB-\u110B\u1175\u110B\u1165\u1109\u1165" aria-hidden="true">#</a> [\uAC1D\uCCB4:\uAE30\uBCF8 \uC774\uC5B4\uC11C]</h1><p>arrow function \uC774 \uB098\uC628 \uBC30\uACBD this\uB294 \uB7F0\uD0C0\uC784 \uC2DC \uACB0\uC815 \uB428</p><p>\uC0DD\uC131\uC790 \uD568\uC218\uC758 \uACBD\uC6B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB77C\uACE0 \uD55C\uB2E4\uBA74</p><p>User(&quot;aaa&quot;) \uC774\uB7F0\uC2DD\uC73C\uB85C \uD558\uBA74 \uC548\uB418\uACE0<br> new User(&quot;aaa&quot;)<br> new\uB97C \uBD99\uC5EC\uC918\uC57C \uD574\uB2F9 \uAC1D\uCCB4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C4\uB2E4.</p><p>function(par, par2, ...)<br> \uD544\uC218 \uD30C\uB77C\uBBF8\uD130\uB97C \uB118\uAE30\uACE0, \uADF8 \uC678\uC5D0\uB294 optional\uD558\uAC8C \uB118\uAE30\uACE0<br> \uC635\uC158\uC744 \uC5B4\uB5BB\uAC8C \uC124\uC815\uD558\uB290\uB0D0\uC5D0 \uB530\uB77C\uC11C \uC5B4\uB5A4 \uBC29\uC2DD\uC73C\uB85C \uC4F8\uC9C0\uB97C \uACB0\uC815\uD560 \uC218\uB3C4 \uC788\uB2E4.<br> \uD568\uC218 overriding\uC774 \uC548\uB418\uACE0, overwriting\uC774 \uB418\uBC84\uB9AC\uAE30 \uB54C\uBB38\uC5D0<br> \uC704\uC640 \uAC19\uC740 \uAE30\uBC95\uC73C\uB85C \uB9CE\uC774 \uC4F4\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> user <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">// \uC8FC\uC18C \uC815\uBCF4\uAC00 \uC5C6\uB294 \uC0AC\uC6A9\uC790  </span>
<span class="token function">alert</span><span class="token punctuation">(</span>user<span class="token punctuation">.</span>address<span class="token punctuation">.</span>street<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Cannot read property &#39;street&#39; of undefined  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uACFC \uAC19\uC740 \uACBD\uC6B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>console.log(user.address &amp;&amp; user.address.street || &#39;a&#39;) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB7F0\uC2DD\uC73C\uB85C \uCC0D\uC5B4\uBCF4\uBA74<br> \uB458\uB2E4 \uC5C6\uB2E4 \uCE58\uBA74 &#39;a&#39;\uAC00 \uCD9C\uB825\uB41C\uB2E4.<br><code>alert( user?.address?.street ); // undefined </code> \uC5D0\uB7EC\uAC00 \uBC1C\uC0DD\uD558\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.<br> \uC774\uB7F0 \uBC29\uC2DD\uC73C\uB85C \uAC04\uB2E8\uD558\uAC8C \uC4F0\uBA74 undefined\uB85C \uCD9C\uB825\uD558\uC5EC \uAC80\uC9C0\uD560 \uC218 \uC788\uB2E4.</p><h2 id="\u110C\u1161\u1105\u116D\u1100\u116E\u110C\u1169-\u110C\u1161\u1105\u116D\u1112\u1167\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1105\u116D\u1100\u116E\u110C\u1169-\u110C\u1161\u1105\u116D\u1112\u1167\u11BC" aria-hidden="true">#</a> [\uC790\uB8CC\uAD6C\uC870, \uC790\uB8CC\uD615]</h2><p>Math.floor \uBC84\uB9BC<br> Math.ceil \uC62C\uB9BC<br> \uC5EC\uAE30\uC11C \uC8FC\uC758\uD560 \uAC83\uC740 -1.1 \uBC84\uB9BC\uC740 -2 \uAC00 \uB418\uACE0 \uC62C\uB9BC\uC740 -1\uC774 \uB41C\uB2E4\uB294 \uC74C\uC218\uC758 \uACBD\uC6B0<br> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC11C \uC22B\uC790\uD615 \uC5F0\uC0B0\uC740 \uC0DD\uAC01\uBCF4\uB2E4 \uB09C\uD574\uD558\uB2E4 (\uC8FC\uC758)</p><p>\uBB38\uC790\uC5F4\uC740 \uC7AC\uBC0C\uB294\uAC8C \uBC30\uC5F4\uC774 \uC544\uB2C8\uC9C0\uB9CC \uBC30\uC5F4\uCC98\uB7FC \uC4F8 \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">&#39;abc&#39;</span>  
a<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token comment">// a \uAC00 \uB41C\uB2E4.  </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>string\uC5D0 indexof \uD568\uC218\uB3C4 \uC9C0\uC6D0\uD574\uC900\uB2E4.</p><p>string \uC548\uC5D0 right\uB77C\uB294 \uD568\uC218\uB97C \uB9CC\uB4E4 \uC218 \uC788\uB2E4.<br> string.right \uB97C \uC4F8 \uC218 \uC788\uB2E4.<br> array.remove\uB3C4 \uB9CC\uB4E4 \uC218 \uC788\uB2E4.</p><p>object\uC5D0 \uBB58 \uB9CC\uB4E4 \uC218 \uC788\uB294\uB370... \uADF8\uB7EC\uBA74 \uB2E4 \uC4F8 \uC218 \uC788\uACE0<br> \uADFC\uB370 \uBB38\uC81C \uB420 \uC218 \uC788\uC73C\uB2C8 \uC6EC\uB9CC\uD558\uBA74 \uC548\uC4F0\uB294\uAC8C \uC88B\uB2E4.</p><h4 id="mdn-\u110B\u1173\u11AF-\u1107\u1169\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#mdn-\u110B\u1173\u11AF-\u1107\u1169\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> mdn \uC744 \uBCF4\uB294 \uBC29\uBC95</h4><p>&quot;\uC0C8 \uBC30\uC5F4\uC744 \uBC18\uD658\uD55C\uB2E4.&quot; \uB294 \uBB38\uAD6C\uAC00 \uC788\uC73C\uBA74 \uD574\uB2F9 \uBC30\uC5F4\uC740 \uADF8\uB300\uB85C\uACE0 \uC0C8\uB85C\uC6B4 \uBC30\uC5F4\uC744 \uB9CC\uB4DC\uB294 \uAC83\uC774\uACE0<br> \uC774\uB7F0 \uBB38\uAD6C\uAC00 \uC5C6\uC73C\uBA74 \uADF8 \uC6D0\uBCF8 \uBC30\uC5F4\uC744 \uBC14\uAFB8\uB294 \uAC83\uC774\uB2E4.<br> \uC774 \uBB38\uAD6C\uB97C \uC798 \uBCF4\uBA74\uC11C \uC368\uC57C \uD55C\uB2E4.</p><h4 id="\u1107\u1162\u110B\u1167\u11AF\u110B\u1166\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#\u1107\u1162\u110B\u1167\u11AF\u110B\u1166\u1109\u1165" aria-hidden="true">#</a> \uBC30\uC5F4\uC5D0\uC11C..</h4><p>var arr = [];<br> arr.length = 1000000; \uC73C\uB85C \uB123\uC5B4\uC8FC\uBA74<br> arr\uB97C \uCD9C\uB825\uD574\uBCF4\uBA74 \uBC31\uB9CC\uC774 \uB428<br> \uC2E4\uC81C \uAE38\uC774\uAC00 \uBC14\uB01C. \uADF8\uB7F0\uB370 \uADF8\uB9CC\uD07C \uBA54\uBAA8\uB9AC\uB97C \uCC28\uC9C0\uD558\uB294 \uAC83\uC740 \uC544\uB2D8.</p><ul><li><p>filter\uB294 \uBC18\uB4DC\uC2DC return true\uB97C \uC368\uC918\uC57C\uD568.</p></li><li><p>sort \uC815\uB82C\uC740 \uC720\uB2C8\uCF54\uB4DC\uC5D0 \uB530\uB77C \uC815\uB82C\uD558\uB294 \uAC70\uAE30 \uB54C\uBB38\uC5D0 \uC81C\uB300\uB85C \uC798 \uC548\uB418\uACE0<br> \uBE44\uAD50\uC5F0\uC0B0\uC73C\uB85C \uB9CC\uB4E4\uC5B4\uC8FC\uB294\uAC8C \uB0AB\uB2E4.<br> \uBC30\uC5F4\uD568\uC218\uC758 \uACBD\uC6B0 \uB9CE\uC774 \uC4F0\uAC8C \uB420 \uAC83\uC774\uB2E4 \uC368\uBCF4\uBA74 \uC0DD\uAC01\uBCF4\uB2E4 \uC5B4\uB835\uC9C0\uB294 \uC54A\uB2E4.</p></li><li><p>reduce() \uC5B4\uB835\uC9C0\uB9CC \uC5EC\uB7EC\uAC00\uC9C0 \uB9CE\uC740 \uAC83\uC744 \uD560 \uC218 \uC788\uB2E4.</p></li></ul><h4 id="object" tabindex="-1"><a class="header-anchor" href="#object" aria-hidden="true">#</a> object</h4><p>object\uC5D0<br> object.key<br> object.value</p><ul><li><p>for .. of \uB294 array\uC5D0\uB9CC \uB418\uB294\uB370<br> object\uC758 \uACBD\uC6B0 key, value\uB97C \uCC38\uC870\uD574\uC11C for \uBB38 \uB3CC\uB824\uB3C4 \uB428</p></li><li><p>\uAD6C\uC870\uBD84\uD574 \uD560\uB2F9<br> \uBC30\uC5F4, \uAC1D\uCCB4\uC758 \uACBD\uC6B0 \uBAA8\uB450 \uAC00\uB2A5..<br> \uAC1D\uCCB4\uC758 \uACBD\uC6B0\uB294 key\uAC12\uC5D0 \uB300\uC751\uD574\uC918\uC57C\uD568.</p></li><li><p>date<br> \uCEE4\uC2A4\uD140\uD55C \uD615\uC2DD\uC73C\uB85C \uBD99\uC774\uAE30 \uC704\uD55C \uC608\uC678\uCC98\uB9AC\uB97C \uD574\uC918\uC57C \uD568.<br> \uD55C\uB2EC\uC744 \uB354\uD574\uC57C\uD558\uB0D0, 30\uC77C\uC744 \uB354\uD574\uC57C\uD558\uB0D0...<br> moment\uC5D0 \uC788\uB294 \uAC78\uB85C \uC4F4\uB2E4\uACE0 \uD568.</p></li><li><p>JSON OBJECT \uC784.<br> parse\uB97C \uD558\uB294\uB370 \uC624\uB958\uAC00 \uB09C\uB2E4. key value \uBAA8\uB450 &quot;&quot; \uBB36\uC5EC\uC788\uB294\uC9C0 \uD655\uC778<br> toJSON \uD568\uC218 \uD1B5\uD574 \uB9CC\uB4E4 \uC218 \uC788\uC74C.</p></li><li><p>\uC804\uAC1C \uBB38\uBC95<br> ...arg<br> \uC774 \uACBD\uC6B0 arg\uB97C \uBC30\uC5F4\uB85C \uB9CC\uB4E4\uC5B4\uC900\uB2E4.<br> \uC774\uB807\uAC8C \uC548\uC4F8 \uACBD\uC6B0\uB294<br> argument[0], ... \uC774\uB807\uAC8C \uD45C\uC2DC\uD558\uC9C0\uB9CC \uC598\uB294 \uBC30\uC5F4\uC740 \uC544\uB2D8<br> \uC774 \uB450\uAC1C\uC758 \uAC00\uC7A5 \uD070 \uCC28\uC774\uB294 Array.prototype \uC758 \uD568\uC218\uB97C \uC628\uC804\uD788 \uC4F8 \uC218 \uC788\uB0D0 \uC5C6\uB0D0\uC758 \uCC28\uC774\uB294</p></li><li><p>\uBCC0\uC218\uC758 \uC720\uD6A8\uBC94\uC704 \uD074\uB85C\uC800<br> \uC77C\uB2E8 \uBCC0\uC218 \uD638\uCD9C\uC744 \uBCF4\uACE0 \uC2F6\uC73C\uBA74 (\uC5B4\uB514 \uC5B4\uB5A4 \uC560\uAC00 \uD638\uCD9C \uB41C\uAC74\uC9C0 \uBCF4\uACE0 \uC2F6\uC73C\uBA74) console.trace\uB97C \uC4F0\uB294\uAC8C \uC88B\uB2E4.</p></li><li><p>\uD568\uC218 \uB0B4\uC758 \uD568\uC218<br> \uD074\uB85C\uC800\uC758 \uB300\uD45C\uC801\uC778 \uAC83\uC740 \uD568\uC218 \uC989\uC2DC \uC2E4\uD589 () \uC598</p></li><li><p>&#39;var&#39;\uB294 \uBE14\uB85D\uB2E8\uC704\uC5D0\uC11C\uB9CC \uC811\uADFC \uAC00\uB2A5</p></li><li><p>\uC804\uC5ED \uAC1D\uCCB4 : window</p></li><li><p>var\uB85C \uC120\uC5B8\uD55C \uAC83\uC740 delete\uAC00 \uC548\uB428</p></li></ul><h4 id="\u1111\u1169\u11AF\u1105\u1175\u1111\u1175\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1111\u1169\u11AF\u1105\u1175\u1111\u1175\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD3F4\uB9AC\uD544 \uC0AC\uC6A9\uD558\uAE30</h4><p>\uD568\uC218\uB3C4 \uAC1D\uCCB4\uC784..<br> \uC775\uBA85\uD568\uC218 \uB0A8\uC6A9\uC740 \uC88B\uC9C0 \uC54A\uB2E4</p><p>new function \uD568\uC218 \uC790\uCCB4\uB97C \uB3D9\uC801\uC73C\uB85C \uC0DD\uC131\uD560 \uC218 \uC788\uB2E4.</p><p>\uD568\uC218\uAC00 \uB108\uBB34 \uB9CE\uC544\uC11C \uB108\uBB34 \uC2E4\uD589\uC2DC\uAC04\uC774 \uAE38\uC5B4\uC838\uC11C..<br> \uC2E4\uD589 \uC2DC\uAC04\uC744 \uB108\uBB34 \uC624\uB798 \uAC78\uB824\uC11C \uC5D0\uB7EC\uD398\uC774\uC9C0 \uB730 \uC218 \uC788\uC74C<br> setTimeOut\uC548\uC5D0 \uB123\uC5B4\uC11C \uC2E4\uD589\uD558\uBA74 \uC774\uBCA4\uD2B8 \uD050\uC5D0 \uB123\uACA0\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><p>\uB610 \uCF5C\uBC31\uD568\uC218\uB97C \uC4F8\uC904 \uBAB0\uB77C\uC11C<br> setTimeOut\uC73C\uB85C \uB300\uB7B5\uC758 \uC2DC\uAC04\uC744 \uC608\uC0C1\uD574\uC11C \uB2E4\uC74C\uC73C\uB85C \uC2E4\uD589\uD558\uAC8C \uB9CC\uB4E4\uC9C0 \uB9D0 \uAC83</p><p>call/apply \uB97C \uC368\uC11C \uC6D0\uC11C \uC790\uB3D9 \uD14C\uC2A4\uD2B8 \uCABD\uC5D0\uC11C \uC0AC\uC6A9\uD55C\uB2E4.<br> \uACB0\uAD6D\uC5D0 \uADF8 \uD568\uC218\uB97C \uAC14\uB2E4\uC4F0\uACA0\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><p>\uD568\uC218 \uBC14\uC778\uB529<br> this</p><h2 id="\u1100\u1162\u11A8\u110E\u1166-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1100\u1162\u11A8\u110E\u1166-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175-\u1109\u1165\u11AF\u110C\u1165\u11BC" aria-hidden="true">#</a> [\uAC1D\uCCB4 \uD504\uB85C\uD37C\uD2F0 \uC124\uC815]</h2><p>\uD504\uB85C\uD37C\uD2F0 \uD50C\uB798\uADF8<br> \uD504\uB85C\uD37C\uD2F0 \uC124\uC815 \uB9C9\uC544\uC8FC\uB294 \uC560\uB4E4... freeze \uAC19\uC740 \uC560\uB4E4 \uC788\uB294\uB370 \uC774\uB7F0 \uC560\uB4E4\uC740 \uBE0C\uB77C\uC6B0\uC800 \uBCC4\uB85C \uB2E4\uB974\uAE30 \uB54C\uBB38\uC5D0 \uC798 \uBCF4\uACE0 \uC4F8 \uAC83</p><p>get,set\uC740 \uBDF0\uC5D0\uC11C \uC4F0\uB294 \uAE30\uBCF8 \uAC1C\uB150\uC774\uB2E4 \uC815\uB3C4\uB9CC</p><p>\uD504\uB85C\uD1A0\uD0C0\uC785<br> \uC778\uD130\uB137\uC5D0 \uB0B4\uAC00 \uC4F0\uB294 \uAC1D\uCCB4\uC758 \uD504\uB85C\uD1A0 \uD0C0\uC785\uC744 \uCC3E\uC544\uBCFC \uC21C \uC788\uC9C0\uB9CC \uAC70\uC758 \uBB50 \uCC3E\uC544\uBCFC\uC77C \uC5C6\uC74C</p><p>\uC0C1\uC18D \uBC1B\uC740 \uD504\uB85C\uD37C\uD2F0\uB97C \uC218\uC815\uD560 \uB550<br> Array.c = ... \uC774\uB807\uAC8C \uC4F0\uBA74 \uD504\uB85C\uD37C\uD2F0 \uCD94\uAC00\uC774\uC9C0 \uC0C1\uC18D\uBC1B\uC740 \uC560 \uC4F0\uB294 \uAC70 \uC544\uB2D8<br> Array.<strong>proto</strong>.c = ... \uC774\uB807\uAC8C \uC368\uC57C\uD568.</p><p>\uCCB4\uC774\uB2DD...<br> \uD504\uB85C\uD1A0\uD0C0\uC785 \uCCB4\uC774\uB2DD, \uC5F0\uC1C4\uC801\uC73C\uB85C \uCC3E\uC544\uAC00\uB294 \uAC83 \uAC00\uB2A5</p><p>Object.create(null) \uB85C \uAC1D\uCCB4 \uC0DD\uC131\uD560 \uC218 \uC788\uB294\uB370 \uC6A9\uBC95\uC774 \uB2E4\uB974\uAE30 \uB54C\uBB38\uC5D0<br> \uAC00\uB054 \uC788\uB294\uB370 \uB9AC\uD130\uB7F4\uB85C \uC0DD\uC131\uD558\uB294\uAC8C \uC88B\uC74C.</p><h2 id="\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AF\u1105\u1162\u1109\u1173" aria-hidden="true">#</a> [\uD074\uB798\uC2A4]</h2><p>\uD074\uB798\uC2A4\uB294 \uD568\uC218\uC784!<br> extends \uC5D0 \uB300\uD574\uC11C..<br> \uC774\uAC8C ecma5 \uC758 \uD45C\uC900\uC774 \uC544\uB2D8.<br> \uADF8\uB798\uC11C prototype\uC744 \uC9C1\uC811 \uC9C0\uC815\uD558\uC5EC\uC11C \uB9CC\uB4DC\uC168\uC74C</p><p>extends \uAC19\uC740 \uAE30\uB2A5\uC744 \uC4F0\uB824\uBA74 \uC6F9\uD329\uC744 \uAC00\uC838\uC640\uC11C \uC368\uC57C \uD558\uACE0<br> \uC5F4\uC904 \uCF54\uB4DC\uAC00 1mb \uAC00 \uB118\uC744 \uC218 \uC788\uAC8C \uB428..<br> \uAE54\uB054\uD55C \uCF54\uB4DC\uB294 \uC774\uB7F0\uAC78 \uC0DD\uAC01\uD574\uC57C \uD568.</p><p>instanceof \uB97C \uD1B5\uD574 \uADF8 \uD074\uB798\uC2A4\uB85C \uB9CC\uB4E4\uC5B4\uC9C4 \uAC1D\uCCB4\uC778\uC9C0\uB97C \uD655\uC778\uD560 \uC218 \uC788\uC74C</p><p>typeof \uB85C\uB294 Array\uC640 Object \uAC00 \uBE44\uAD50\uAC00 \uC548\uB410\uB294\uB370<br> object.prototype.toString() \uC5D0 \uC4F0\uBA74 \uAC00\uB2A5\uD558\uB2E4.<br> object.prototype.toString.call(value) \uB97C \uBC1B\uC73C\uBA74 \uB428</p><h2 id="\u110B\u1166\u1105\u1165-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1166\u1105\u1165-\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1175\u11BC" aria-hidden="true">#</a> [\uC5D0\uB7EC \uD578\uB4E4\uB9C1]</h2><p>\uC774\uAC70 \uC4F0\uBA74 \uB514\uBC84\uAE45\uC774 \uC798 \uC548\uB418\uAE30\uB3C4 \uD568.<br> \uAC70\uC758 \uC548\uC4F0\uB294 \uAC83 \uAC19\uC740\uB370, \uB77C\uC774\uBE0C\uB7EC\uB9AC\uC5D0\uC11C \uAC00\uB054, \uC815\uB9D0 \uD544\uC694\uD55C\uB370 \uC5C6\uB294 \uACBD\uC6B0 throw\uB85C \uC5D0\uB7EC\uB97C \uBCF4\uB0B8\uB2E4.</p><p>window.onerror \uB97C \uC4F0\uBA74 \uC804\uC5ED \uC5D0\uB7EC\uB97C \uC870\uC791\uD574\uC904 \uC218 \uC788\uC74C \uC6D0\uC11C\uC811\uC218\uC5D0 \uB9CE\uC774 \uC4F0\uC5EC\uC788\uC74C</p><p>\uCEE4\uC2A4\uD140\uC5D0\uB7EC \uB178\uB4DC\uC5D0\uC11C \uB9CE\uC774 \uC4F0\uC784</p><h2 id="\u1111\u1173\u1105\u1161\u1106\u1175\u1109\u1173-async-await" tabindex="-1"><a class="header-anchor" href="#\u1111\u1173\u1105\u1161\u1106\u1175\u1109\u1173-async-await" aria-hidden="true">#</a> [\uD504\uB77C\uBBF8\uC2A4 async, await]</h2><h4 id="_1-\u110F\u1169\u11AF\u1107\u1162\u11A8" tabindex="-1"><a class="header-anchor" href="#_1-\u110F\u1169\u11AF\u1107\u1162\u11A8" aria-hidden="true">#</a> 1. \uCF5C\uBC31</h4><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 1\uAE09\uD568\uC218\uC774\uB2E4<br> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uCF5C\uBC31\uC744 \uD568\uC218 \uAC1C\uB150\uC73C\uB85C \uB358\uC9D0<br> c#\uC740 \uC21C\uCC28 \uC2E4\uD589\uC5D0 \uAC00\uAE4C\uC6C0<br> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uB294 \uC21C\uCC28 \uC2E4\uD589\uC774 \uC548\uB418\uB294\uAC8C \uB9CE\uC74C<br> ajax, dom \uCEE8\uD2B8\uB864, \uB300\uBD80\uBD84 \uBE44\uB3D9\uAE30\uB85C \uB3D9\uC791\uD568</p><p>\uC5B4\uB5A4 \uD568\uC218 \uC911\uAC04\uC5D0 \uC2DC\uC810\uC744 \uC918\uC11C \uADF8 \uC2DC\uC810\uC5D0 \uD568\uC218\uB97C \uCD9C\uB825\uD574\uC8FC\uACA0\uB2E4\uB294 \uAC83.<br> \uBAA8\uC758 \uB17C\uC220\uC774 \uCF5C\uBC31<br> \uCF5C\uBC31 \uC911\uCCA9 \uCF5C\uBC31 \uC5C9\uB9DD\uC9C4\uCC3D \uBCF4\uAE30 \uC815\uB9D0 \uC5B4\uB824\uC6C0</p><p>\uADF8\uB798\uC11C \uD3B8\uD558\uAC8C \uC4F0\uAE30 \uC704\uD574\uC11C \uB9CC\uB4E0 \uAC83\uC774 promise \uC784.</p><h4 id="_2-promise" tabindex="-1"><a class="header-anchor" href="#_2-promise" aria-hidden="true">#</a> 2. promise</h4><p>ie\uC5D0\uC11C \uC81C\uACF5\uC548\uD558\uB294\uB370, \uD3F4\uB9AC\uD544\uC774 \uC788\uC74C.<br> resolve, reject<br> \uD504\uB77C\uBBF8\uC2A4 \uAC1D\uCCB4\uAC00 \uB9CC\uB4E4\uC5B4\uC9C0\uACE0<br> \uCF5C\uBC31 \uB450\uAC1C \uC0DD\uAE30\uB294 \uAC83\uC784.<br> resolve, reject\uB97C \uC2E4\uD589\uC2DC\uD0A4\uBA74 \uB428</p><p>promise = \uD568\uC218 \uC2E4\uD589<br> promise.then = \uADF8 \uB2E4\uC74C \uD568\uC218<br> promise.then = \uADF8 \uB2E4\uC74C \uD568\uC218<br> \uC774\uB7F0 \uC2DD\uC73C\uB85C \uCF5C\uBC31 hell \uC744 \uBC29\uC9C0\uD560 \uC218 \uC788\uB2E4.<br> \uADFC\uB370 \uC2E4\uC81C \uC0AC\uC6A9\uD574\uBCF4\uBA74 \uC27D\uC9C0\uB294 \uC54A\uB2E8\uB2E4.<br> \uADF8\uB7EC\uBBC0\uB85C \uC798 \uCC3E\uC544\uC11C \uC368\uBCF4\uB294 \uAC78 \uCD94\uCC9C</p><p>fetch\uB77C\uB294 \uC560\uAC00 \uC788\uB294\uB370 ajax\uC784 \uC815\uB9D0 \uB2E8\uC21C\uD558\uAC8C \uC4F8 \uC218 \uC788\uB294.<br> fetch\uB294 promise \uC784.<br> \uADF8\uB0E5 fetch\uB97C \uD1B5\uD574\uC11C callback \uC744 \uD560 \uC218 \uC788\uB2E4.<br> .then\uC73C\uB85C \uCCB4\uC774\uB2DD\uC744 \uD574\uC57C \uD55C\uB2E4.</p><p>catch, then\uC740 \uACC4\uC3D9 \uC5F0\uC1C4 \uBC18\uC751\uC744 \uC77C\uC73C\uD0AC \uC218 \uC788\uB2E4.</p><p>\uD55C\uBC88\uC5D0 \uC5EC\uB7EC\uAC1C\uB97C \uAC00\uC838\uC640\uC11C \uADF8\uAC78 \uC4F0\uACA0\uB2E4. promise.all<br> jQuery\uC5D0\uC11C $when(\uC548\uC5D0 \uB450\uAC1C\uC758 $.ajax) \uB450\uAC1C\uB97C \uD55C\uAEBC\uBC88\uC5D0 \uBC1B\uB294 \uAC83\uC784<br> \uD558\uACE0 .then() \uC774\uB7F0\uC2DD\uC73C\uB85C...<br> \uB450\uAC1C \uD569\uCCD0\uC11C \uD55C\uBC88\uC5D0 \uAC00\uC838\uC640 \uC774\uAC8C \uC774\uC81C \uB418\uB294 \uAC83\uC774\uB2E4 \uC61B\uB0A0\uC5D4 api \uB9CC\uB4E4\uC5B4\uC92C\uC74C<br> js\uC5D0\uC120 promise all\uC774\uB77C\uB294 \uC560\uAC00 \uC788\uC74C</p><p>promise.race \uC5B8\uC81C\uC4F8\uC9C0 \uBAA8\uB974\uACA0\uC74C</p><p>\uD504\uB77C\uBBF8\uC2A4 \uD654 \uAD73\uC774..</p><p>\uBE44\uB3D9\uAE30\uC801\uC778 \uC2E4\uD589\uC774 \uAC00\uB2A5\uD55C \uC774\uC720.<br> \uB9C8\uC774\uD06C\uB85C \uD0DC\uC2A4\uD06C \uD050</p><p>\uB9C8\uC9C0\uB9C9\uC5D0 .catch \uB97C \uB123\uC5B4\uC8FC\uBA74 \uC5D0\uB7EC \uC7A1\uC744 \uC218 \uC788\uC74C \uC548\uB123\uC8FC\uBA74 \uC5D0\uB7EC\uB738</p><h4 id="_3-async-await" tabindex="-1"><a class="header-anchor" href="#_3-async-await" aria-hidden="true">#</a> 3. async, await</h4><p>async\uB294 \uADF8\uB0E5 \uC4F4\uB2E4\uACE0 \uB2EC\uB77C\uC9C0\uB294\uAC74 \uC5C6\uB294\uB370 await\uB97C \uC548\uC5D0 \uC4F0\uB824\uBA74 \uC368\uC57C \uD568<br> \uC911\uC694\uD55C\uAC74 awiat<br> async\uB85C \uAC10\uC2F8\uB294 \uC21C\uAC04 \uADF8 \uD568\uC218\uAC00 promise\uAC00 \uB41C\uB2E4.</p><p>await\uB97C \uC4F0\uBA74 .then\uC774 \uC5C6\uC5B4\uC9D0<br> \uBC14\uB85C \uB2E4\uC74C\uC904 \uC2E4\uD589 \uB428.<br> await\uB294 \uC708\uB3C4\uC6B0\uC5D0\uC11C \uC2E4\uD589 \uC548\uB428</p><h2 id="\u110C\u1166\u1102\u1165\u1105\u1166\u110B\u1175\u1110\u1165\u110B\u116A-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u110B\u1175\u1110\u1165\u1105\u1166\u110B\u1175\u1110\u1165" tabindex="-1"><a class="header-anchor" href="#\u110C\u1166\u1102\u1165\u1105\u1166\u110B\u1175\u1110\u1165\u110B\u116A-\u1107\u1175\u1103\u1169\u11BC\u1100\u1175-\u110B\u1175\u1110\u1165\u1105\u1166\u110B\u1175\u1110\u1165" aria-hidden="true">#</a> [\uC81C\uB108\uB808\uC774\uD130\uC640 \uBE44\uB3D9\uAE30 \uC774\uD130\uB808\uC774\uD130]</h2><p>\uC774\uAC74 \uC5B4\uB530 \uC4F8\uC9C0 \uC544\uC9C1\uAE4C\uC9C0 \uBAA8\uB974\uACA0\uC74C<br> \uB79C\uB364 \uBB38\uC790\uC5F4 \uBC1C\uC0DD? \uCC28\uB77C\uB9AC \uB534\uAC70 \uC4F0\uB294\uAC8C \uB0AB\uC9C0</p><h2 id="\u1106\u1169\u1103\u1172\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1106\u1169\u1103\u1172\u11AF" aria-hidden="true">#</a> [\uBAA8\uB4C8]</h2><p>minify<br> uglify \uCD5C\uB300\uD55C \uC791\uAC8C \uB9CC\uB4E4\uACA0\uB2E4\uB294 \uAC83\uC784.<br> name, value, key \uB97C a,b,c \uB85C \uCE58\uD658 \uD574\uBC84\uB9BC<br> \uADF8\uB7EC\uBA74 \uB514\uBC84\uAE45 \uD560 \uB54C \uC5B4\uB824\uC6CC\uC9D0<br> js.map \uD30C\uC77C<br> uglify \uACFC\uC815\uC5D0\uC11C \uC5B4\uB5A4 \uBCC0\uC218\uAC00 \uBB58\uB85C \uB9F5\uD551 \uB410\uB2E4\uB294 \uAC83\uC744 \uD45C\uC2DC\uD574\uC8FC\uB294 \uD30C\uC77C<br> =&gt; min.js \uD30C\uC77C\uC774 \uB9CC\uB4E4\uC5B4\uC9D0<br> \uC6A9\uB7C9 \uC904\uC774\uB294 \uAC83\uACFC<br> \uB178\uCD9C \uC548\uB418\uB294 \uAC83\uC5D0 \uBAA9\uC801\uC774 \uC788\uB2E4.<br> \uADF8\uB798\uB3C4 \uC54C \uC0AC\uB78C\uC740 \uC548\uB2E4.</p><p>\uC2A4\uD06C\uB9BD\uD2B8\uC5D0 defer \uC18D\uC131\uC744 \uC8FC\uBA74<br> \uBB34\uC2DC\uD558\uACE0 \uB118\uC5B4\uAC10.<br> script load\uB97C \uBE60\uB974\uAC8C \uD574\uC90C</p><h2 id="\u1100\u1175\u1110\u1161" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1110\u1161" aria-hidden="true">#</a> [\uAE30\uD0C0]</h2><p>\uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC758 \uD55C\uACC4\uB97C \uB6F0\uC5B4\uB118\uC740\uAC8C<br> 2008, 2015\uB144\uC774 1,2\uB2E8\uACC4<br> \uC5EC\uC804\uD788 \uB9C9\uAC15\uD568.<br> \uB9CE\uC774 \uC54C\uC544\uB458\uC218\uB85D \uB098\uC060\uAC8C \uC5C6\uC74C</p><p>proxy \uB294 \uAC00\uB85C\uCC44\uAE30\uC758 \uC758\uBBF8<br> \uBDF0\uAC00 \uC774\uAC70 \uC37C\uC74C.<br> getter, setter\uAC00 \uBAA8\uC591\uC774 \uBC14\uB00C\uC5C8\uAD6C\uB098 \uC815\uB3C4 \uC54C\uBA74 \uB428</p><ul><li><p>Eval<br> vue\uC5D0\uC11C\uB3C4 eval\uC744 \uC368\uC11C \uADF8 \uC548\uC5D0\uC11C \uC2E4\uD589\uC2DC\uD0A4\uB294 \uCF54\uB4DC\uB97C \uC0AC\uC6A9\uD55C \uB4EF</p></li><li><p>curry<br> log\uB97C \uCC0D\uC744 \uB54C, \uC5D0\uB7EC\uC5D0 \uB300\uD55C \uB85C\uADF8..<br> \uC5B4\uB5A4 \uB2E8\uACC4\uC5D0\uC11C \uB85C\uADF8\uB97C \uCC0D\uC744 \uC9C0 \uACB0\uC815\uC774 \uD544\uC694\uD568.<br> log(a name, b name, c name);<br> ==&gt; log(a name)(b name)(C name);<br> \uB098\uB220\uC11C \uBD84\uD560 \uC5F0\uC0B0\uC744 \uD568\uC73C\uB85C\uC368 \uC5B4\uB514\uC11C \uBB38\uC81C\uAC00 \uC0DD\uACBC\uB294\uC9C0 trace \uD560 \uC218 \uC788\uC74C</p></li></ul><p>lodash \uB97C \uC4F0\uBA74 \uC54C\uC544\uC11C \uC774\uB807\uAC8C \uBC14\uAFD4\uC90C curried..</p><ul><li><p>DOM \uC2DC\uC791<br> [\uBB38\uC11C]<br> META \uB124\uC784\uC740 \uC798 \uC548\uC500 \uB2E4\uC591\uD55C \uD50C\uB7AB\uD3FC \uC815\uBCF4\uB97C \uB2F4\uACE0 \uC788\uB294 \uAC83\uC784<br> \uC5B8\uC5B4, LOCALE, \uD638\uD658 \uC815\uBCF4 \uB4F1.<br> B2B\uC5D0\uC11C\uB294 \uAC70\uC758 \uC4F8\uC77C \uC5C6\uC74C, \uC911\uC694\uCE58 \uC54A\uC73C\uB2C8\uAE4C \uC720\uC800\uAC00 \uC815\uD574\uC838 \uC788\uC73C\uB2C8\uAE4C</p><p>innerHTML html \uCF58\uD150\uCE20</p><p>ie\uC5D0\uC11C\uB294 tbody\uB97C \uC548\uB9CC\uB4E4\uC5B4\uC90C</p><p>jQuery \uAC00\uC7A5 \uC911\uC694\uD55C \uAC83\uC740<br> \uC140\uB809\uD130\uB97C \uC798 \uB9CC\uB4E4\uC5B4\uB0B4\uB294 \uAC83\uC774 \uAD00\uAC74\uC774\uB2E4.<br> dom \uD2B8\uB9AC \uC0DD\uAC01\uD574\uC11C \uC140\uB809\uD130 \uB9CC\uB4DC\uB294 \uAC83\uC774 \uC911\uC694</p><p>\uAD49\uC7A5\uD788 \uB9CE\uC740 \uBA54\uC11C\uB4DC\uAC00 \uC788\uB294\uB370 \uC774 \uAC83\uC740 jQuery \uACF5\uBD80\uD558\uB294\uAC8C \uC81C\uC77C \uC88B\uB2E4.</p><p>\uC560\uB2C8\uBA54\uC774\uC158\uC740 jquery\uB098 bootstrap\uC744 \uC4F0\uAE30.</p></li></ul></div>`);
}
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2.html.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
var _______2_html = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["ssrRender", _sfc_ssrRender$F], ["__file", "\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-2.html.vue"]]);
var _______2_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _______2_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$E = {};
function _sfc_ssrRender$E(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1100\u1169\u11BC\u1107\u116E" tabindex="-1"><a class="header-anchor" href="#\u110C\u1161\u1107\u1161\u1109\u1173\u110F\u1173\u1105\u1175\u11B8\u1110\u1173-\u1100\u1169\u11BC\u1107\u116E" aria-hidden="true">#</a> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8 \uACF5\uBD80</h1><h2 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173" aria-hidden="true">#</a> [\uC774\uBCA4\uD2B8]</h2><p>mouseover, mouseout<br> mouseenter, mouseleave<br> \uC804\uC790\uB294 \uCEA1\uCC98\uB9C1, \uBC84\uBE14\uB9C1 \uC790\uB3D9<br> \uD6C4\uC790\uB294 jquery \uC774\uBCA4\uD2B8, \uBC84\uBE14\uB9C1 \uCEA1\uCC98\uB9C1 \uC548\uD568.</p><p>keydown<br> keyup<br> \uC0AC\uC774<br> keypress \uB77C\uB294 \uC560\uAC00 \uC788\uC74C<br> \uBB50\uAC00 \uB20C\uB838\uB294\uC9C0 \uBCFC \uB54C \uC0AC\uC6A9</p><p>\uC774\uBCA4\uD2B8, jquery\uC5D0\uC11C remove, removeAttribute \uD574\uC11C \uC774\uBCA4\uD2B8\uB97C \uC9C0\uC6B8 \uC218\uB3C4 \uC788\uC74C</p><p>MVC \uD328\uD134\uC744 \uC9C0\uD0A4\uB824\uBA74<br> HTML \uC5D0 \uC774\uBCA4\uD2B8 \uD560\uB2F9\uD558\uAE30 \uBCF4\uB2E4\uB294</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token constant">ELEM</span><span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB7F0 \uC2DD\uC73C\uB85C \uC4F0\uB294\uAC8C \uC88B\uC74C.<br> \uC65C\uB0D0\uBA74 click \uC774\uBCA4\uD2B8\uB97C \uBC14\uAFB8\uAC8C \uB418\uBA74 html \uC774\uB791 \uB2E4 \uBC14\uAFD4\uC57C \uD558\uB2C8\uAE4C.</p><ul><li><p>addEventListener \uC774\uB7F0 \uC560\uB4E4 \uC548\uC4F0\uB294 \uC774\uC720\uB294 jQuery\uC5D0\uC120 \uC5BC\uB9C8\uB4E0\uC9C0 onclick \uC774\uBCA4\uD2B8 \uBA87\uAC1C\uC529 \uCD94\uAC00 \uAC00\uB2A5\uD558\uAE30 \uB54C\uBB38</p></li><li><p>stopPropagation : \uBC84\uBE14\uB9C1 \uB9C9\uC544\uC90C</p></li><li><p>stopImmediatePropagation : \uB2E4\uB978 \uC774\uBCA4\uD2B8\uC758 \uBC84\uBE14\uB9C1\uB3C4 \uB9C9\uC544\uC8FC\uACE0 \uB531 \uAC54\uB9CC \uC2E4\uD589\uD558\uACE0 \uC2F6\uC744 \uB54C</p></li><li><p>data-action<br> \uC774\uB7F0\uC2DD\uC73C\uB85C \uC4F0\uB294 \uACBD\uC6B0\uAC00 \uC788\uB294\uB370<br> \uC774\uB294 id\uB85C \uD560\uB2F9\uD558\uB294 \uACBD\uC6B0\uC5D4 \uD55C\uACC4\uAC00 \uC788\uC73C\uBBC0\uB85C \uB2E4\uB978 data\uB77C\uB294 \uC560\uB97C \uC0AC\uC6A9\uD558\uC5EC \uD589\uB3D9\uB4E4\uC744 \uAD00\uB9AC\uD55C\uB2E4\uB294 \uAC83\uC774\uB2E4.</p></li><li><p>data-counter == dataset.counter<br> \uC774\uB807\uAC8C \uC4F0\uAE30\uB3C4 \uD55C\uB2E4</p></li><li><p>\uCEE4\uC2A4\uD140 \uC774\uBCA4\uD2B8 \uAC70\uC758 \uC4F8\uC77C \uC5C6\uC74C \u314B</p></li><li><p>key \uC774\uBCA4\uD2B8\uB97C \uD1B5\uD574\uC11C \uB2E8\uD22D\uD0A4 \uC2E4\uD589\uB3C4 \uAC00\uB2A5\uD558\uAC8C \uD55C\uB2E4.</p></li><li><p>\uC560\uB2C8\uBA54\uC774\uC158\uC5D0 \uD544\uC694\uD55C \uBD80\uBD84\uC774 \uC788\uB2E4 \uD558\uBA74 \uADF8\uB0E5 jquery \uC4F0\uC790.<br> \uB4DC\uB798\uADF8 \uC564 \uB4DC\uB78D\uB3C4 jquery</p></li><li><p>\uB178\uB4DC\uB3C4 \uAC1D\uCCB4 \uAE30\uBC18\uC774\uB2E4 \uB2F9\uC5F0\uD558\uC9C0 js\uC600\uC73C\uB2C8.</p></li><li><p>\uD3EC\uCEE4\uC2A4\uC5D0 \uB9DE\uAC8C \uB3D9\uC791\uD558\uC9C0 \uC54A\uB294 \uACBD\uC6B0<br> \uD3EC\uCEE4\uC2A4\uAC00 \uBC1C\uC0DD\uC804\uC5D0 \uB530\uB978 \uB3D9\uC791 \uBC1C\uC0DD\uD560 \uC218\uB3C4 \uC788\uC74C</p></li><li><p>submit<br> onsubmit\uC5D0 \uB300\uD574\uC11C \uC774\uBCA4\uD2B8 \uBC1C\uC0DD\uC2DC\uD0AC \uC218 \uC788\uB294\uB370...<br> \uC694\uC998\uC740 form \uD0DC\uADF8 \uC790\uCCB4\uB97C \uC798 \uC548 \uC500</p></li></ul><h2 id="\u1106\u116E\u11AB\u1109\u1165\u110B\u116A-\u1105\u1175\u1109\u1169\u1109\u1173-\u1105\u1169\u1103\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1106\u116E\u11AB\u1109\u1165\u110B\u116A-\u1105\u1175\u1109\u1169\u1109\u1173-\u1105\u1169\u1103\u1175\u11BC" aria-hidden="true">#</a> [\uBB38\uC11C\uC640 \uB9AC\uC18C\uC2A4 \uB85C\uB529]</h2><p>\uBB38\uC11C\uC758 \uC0DD\uBA85\uC8FC\uAE30<br> \uBB38\uC11C\uAC00 \uB3D9\uC791\uD558\uAE30\uAE4C\uC9C0 \uB2E8\uACC4\uB4E4\uC774 \uC788\uB294\uB370<br> \uBB34\uC5B8\uAC00 \uB3D9\uC791\uC758 \uC2DC\uC810\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB2E4.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span> \uD0DC\uADF8 \uC548\uC5D0 \uAD6C\uD604 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u1100\u1175\u1110\u1161" tabindex="-1"><a class="header-anchor" href="#\u1100\u1175\u1110\u1161" aria-hidden="true">#</a> [\uAE30\uD0C0]</h2><p>\uC635\uC800\uBC84 \uD328\uD134\uC774\uB780 \uAC8C \uC788\uC74C</p><p>selection \uACFC range<br> \uC5D0\uB514\uD130 \uC4F8 \uB54C.<br> \uB9C8\uC6B0\uC2A4\uAC00 \uD604\uC7AC \uC120\uD0DD\uB41C \uC601\uC5ED\uC5D0 \uBB58 \uC0BD\uC785, \uC218\uC815, \uC50C\uC6B0\uACE0 \uC785\uD788\uACE0 \uBB50 \uADF8\uB7F0\uAC70</p><p>\uD0C0\uC774\uBA38 \uAC78 \uB54C javascript\uC758 \uD0C0\uC774\uBA38\uB294 \uC815\uD655\uD558\uC9C4 \uC54A\uB2E4.<br> DB \uC640 \uB3D9\uAE30\uD654 \uC2DC\uD0A4\uB294\uB370 \uC5B8\uC81C \uB3D9\uAE30\uD654 \uC2DC\uD0AC\uAC70\uB0D0.</p><ul><li><p>popup window.open<br> \uC708\uB3C4\uC6B0 \uC624\uD508 \uC2DC\uD0A4\uACE0 \uADF8 \uAC1D\uCCB4\uB97C \uC800\uC7A5\uD574\uB450\uBA74<br> \uADF8 \uAC1D\uCCB4\uC758 \uD568\uC218\uC640 \uD504\uB85C\uD37C\uD2F0 \uD639\uC740 \uADF8 \uC708\uB3C4\uC6B0\uC758 \uCF58\uD150\uCE20\uB3C4 \uC218\uC815\uD560 \uC218 \uC788\uB2E4.</p></li><li><p>document.domain<br> \uB3C4\uBA54\uC778\uAC04\uC5D0 \uD1B5\uC2E0\uC774 \uAC00\uB2A5\uD55C\uB370, \uB2E4 \uC788\uC5B4\uC57C \uD568. \uD558\uB098\uB77C\uB3C4 \uC5C6\uC73C\uBA74 \uBA39\uD1B5\uC774 \uB428.</p></li></ul><p>\uD504\uB808\uC784\uC774\uB85C \uB9CC\uB4E0 \uACBD\uC6B0 \uC8FC\uC18C\uCC3D\uC740 \uC548\uBC14\uB00C\uACE0, \uC548\uC5D0 \uCF58\uD150\uCE20\uAC00 \uBC14\uB014 \uC218 \uC788\uB2E4.</p><ul><li><p>\uC11C\uBC84\uC0AC\uC774\uB4DC\uC5D0 \uD30C\uC77C \uC800\uC7A5\uD558\uACE0 \uBD88\uB7EC\uC62C \uC218 \uC788\uB294\uB370<br> \uADF8 \uB54C \uC4F0\uB294\uAC8C blob</p></li><li><p>http \uC5D0\uB7EC.<br> \uC9C0\uAE08 <a href="http://applyjinhak.com" target="_blank" rel="noopener noreferrer">applyjinhak.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \uC798\uBABB \uB4E4\uC5B4\uAC00\uBA74 \uC0C8\uB85C\uC6B4 \uD398\uC774\uC9C0\uB85C redirect \uAC00 \uB428.</p></li><li><p>\uC2E4\uC2DC\uAC04 \uD1B5\uC2E0\uC774 \uD544\uC694\uD55C \uC560\uB4E4<br> \uCC44\uD305<br> \uCF54\uC778\uAC70\uB798<br> ajax\uB85C \uD558\uBA74 \uB2F9\uC5F0\uD788 \uB799\uAC78\uB9AC\uC9C0<br> \uADF8\uB7FC \uC5B4\uB5BB\uAC8C \uD558\uB0D0<br> long polling<br> \uD55C\uBC88 request \uD558\uACE0 \uC548 \uB04A\uC74C<br> \uADF8\uB7F0\uB370 \uC911\uAC04\uC911\uAC04 \uACC4\uC18D response\uB9CC \uBC1B\uC74C</p></li><li><p>\uC18C\uCF13\uBC29\uC2DD<br> \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC9C0\uC6D0\uD574\uC8FC\uB294 \uC6F9\uC18C\uCF13\uC774 \uC0DD\uAE40<br> ws<br> 80 \uD3EC\uD2B8 \uC0AC\uC6A9<br> wss &gt; HTTPS<br> \uC6F9\uC18C\uCF13\uC774\uB77C\uB294 \uD504\uB85C\uD1A0\uCF5C\uC774 \uC788\uC74C<br> open<br> message<br> error<br> close<br> \uC774\uAC70\uB294 request\uB294 \uD558\uB098\uC784<br> \uC548\uB04A\uAE30\uACE0 \uADF8\uB0E5 \uCB49 \uAC00\uB294 \uAC70\uC784</p></li><li><p>\uCFE0\uD0A4<br> \uBE0C\uB77C\uC6B0\uC800\uC5D0 \uB370\uC774\uD130 \uC800\uC7A5<br> \uC11C\uBC84, \uD074\uB77C\uC774\uC5B8\uD2B8\uAC00 \uC8FC\uACE0\uBC1B\uC744 \uC218 \uC788\uB294 \uC720\uC77C\uD55C \uB9E4\uAC1C\uCCB4<br> \uC6B0\uB9AC \uD68C\uC0AC\uB294 \uBAA8\uB4E0 \uCFE0\uD0A4\uB97C \uC554\uD638\uD654\uD574\uC11C \uC500.<br> document.cookie \uC5D0 \uC811\uADFC \uAC00\uB2A5<br><code>pims \uACB0\uC81C, \uD658\uBD88 \uCABD\uC5D0\uC11C \uC4F0\uACE0 \uC788\uB2E4. (4kb\uB97C \uB118\uC744 \uC218 \uC5C6\uB2E4.)</code></p></li><li><p>\uC815\uADDC \uD45C\uD604\uC2DD\uC774\uB77C\uB294 \uC560\uB4E4\uC774 \uC788\uB294\uB370 \uC0AC\uC774\uD2B8\uC5D0\uC11C \uD655\uC778\uD574\uC11C \uD574\uC11D\uD560 \uAC83.</p></li><li><p>localStorage<br> db\uAC00 \uD544\uC694 \uC5C6\uACE0<br> \uADF8 \uB3C4\uBA54\uC778 \uC548\uC5D0\uC11C \uC800\uC7A5\uD558\uB294 \uAC83\uC774\uB2E4.</p></li><li><p>sessionStorage<br> \uC598\uB294 \uADF8 \uD398\uC774\uC9C0\uC5D0\uC11C\uB9CC \uC800\uC7A5</p></li><li><p>IndexedDB &amp; WebSQL<br> \uC694\uC998\uC740 IndexedDB \uC4F0\uACE0 \uC788\uB2E4.<br> \uC6D0\uC11C\uCABD\uC5D0\uC11C AU \uC560\uB4E4\uC744 \uD55C\uAEBC\uBC88\uC5D0 \uBCF4\uC5EC\uC8FC\uB294 \uBD80\uBD84\uC5D0\uC11C \uC0AC\uC6A9\uD588\uC74C</p></li><li><p>\uBCA0\uC9C0\uC5B4 \uACE1\uC120\uC758 \uC2E4\uC0DD\uD65C : \uC2A4\uD06C\uB864 \uC18D\uB3C4</p></li></ul><h2 id="vue" tabindex="-1"><a class="header-anchor" href="#vue" aria-hidden="true">#</a> [VUE]</h2><p>DEVTOOLS \uC4F0\uC9C0 \uB9D0\uAE30</p><ul><li><p>CDN\uC73C\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uC74C</p></li><li><p>INPUT\uC758 V- \uC2DC\uC791\uD558\uB294 \uC18D\uC131\uC73C\uB85C \uADF8 \uAC12\uC744 \uADF8\uB300\uB85C \uAC00\uC838\uC624\uAC8C \uB41C\uB2E4.</p></li><li><p>\uCEF4\uD3EC\uB10C\uD2B8 : \uCEE4\uC2A4\uD140 \uD0DC\uADF8<br> VUE \uD15C\uD50C\uB9BF - HTML \uD0DC\uADF8<br> \uC0C1\uD638 \uBC14\uC778\uB529 \uAC00\uB2A5</p></li></ul><p>\uBDF0-\uBD80\uD2B8\uC2A4\uD2B8\uB7A9\uC774 \uC788\uC74C (bootstrap-vue)<br> \uC5EC\uAE30\uC11C &lt;b-button&gt;\uC774\uB77C\uB294 \uD0DC\uADF8\uB97C \uC4F0\uB294\uB370 \uC774\uB7F0\uAC70\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uAC83\uC784<br> vue-bootstrap.js \uAE4C\uC9C0 \uC368\uC57C \uB3D9\uC791\uD558\uB294 \uAC83\uC784<br> 4.v \uC744 \uC368\uC57C\uD568.</p><ul><li><p>\uD55C\uD398\uC774\uC9C0 \uB0B4\uC5D0\uC11C \uC5EC\uB7EC\uAC1C\uC758 \uBDF0 \uAC1D\uCCB4\uB97C \uC368\uB3C4 \uB41C\uB2E4.</p></li><li><p>\uBDF0\uC5D0\uC11C\uB294 ${serverRenderer.ssrInterpolate()} \uC548\uC5D0 \uB370\uC774\uD130\uB97C \uC785\uB825\uD558\uBA74 \uBC14\uC778\uB529\uC774 \uB418\uB294\uB370<br> v-show \uB97C \uC18D\uC131\uC73C\uB85C \uC368\uC11C \uCC98\uC74C\uBD80\uD130 \uC548\uADF8\uB824\uC9C0\uAC8C \uD560 \uC218 \uC788\uB2E4.</p></li><li><p>\uC0DD\uBA85 \uC8FC\uAE30\uB77C\uB294\uAC8C \uC788\uACE0 \uADF8 \uC2DC\uC810\uC5D0 \uC81C\uC5B4 \uAC00\uB2A5<br> mounted \uC2DC\uC810\uC5D0 \uB300\uBD80\uBD84 \uB370\uC774\uD130 \uCD08\uAE30\uD654 \uC2DC\uCF1C\uC900\uB2E4.</p></li><li><p>v-once\uB294 \uD55C\uBC88\uB9CC \uBC14\uC778\uB529</p></li><li><p>\uBDF0\uC5D0\uC11C\uB294 \uC678\uBD80 \uC624\uBE0C\uC81D\uD2B8\uB97C \uBABB\uC4F0\uB294 \uACBD\uC6B0 \uB9CE\uB2E4.<br> \uADF8\uB7F4 \uB54C\uB294 \uD574\uB2F9 \uC624\uBE0C\uC81D\uD2B8 \uAE30\uB2A5\uC744 \uC81C\uACF5\uD558\uB294 \uBDF0 \uBBF8\uB4E4\uC6E8\uC5B4\uAC00 \uC788\uB294\uC9C0 \uCC3E\uC544\uBCFC\uAC83</p></li><li><p>v-if \uB97C \uD1B5\uD574 if\uBB38 \uAC00\uB2A5</p></li><li><p>v-on: \uD1B5\uD574 \uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uC57D\uC5B4 @ \uC500</p></li><li><p>v-bind \uD1B5\uD574 \uB370\uC774\uD130 \uBC14\uC778\uB529 \uAC00\uB2A5 \uC57D\uC5B4 : \uC500</p></li><li><p>computed \uC18D\uC131<br> \uBCC0\uC218\uB97C \uBC1B\uC790\uB9C8\uC790 \uADF8 \uBCC0\uC218\uB97C \uC870\uC791\uD574\uC11C \uACE7\uBC14\uB85C \uCD9C\uB825\uD574\uC8FC\uAC8C\uB054 \uB9CC\uB4E4\uC5B4\uC904 \uC218 \uC788\uB2E4,</p></li><li><p>watch \uC18D\uC131<br> \uB9CC\uC57D \uAE30\uC874\uC5D0 \uC788\uB294 \uC18D\uC131\uC774 \uC788\uB2E4\uACE0 \uD55C\uB2E4\uBA74 \uADF8 \uC18D\uC131\uC758 \uBCC0\uD654\uAC00 \uC788\uC744 \uB54C \uB2E4\uB978 \uC561\uC158\uC744 \uCDE8\uD560 \uC218 \uC788\uB2E4<br> \uB450\uAC1C\uAC00 \uBE44\uC2B7\uD55C\uB4EF \uB2E4\uB974\uB2E4.</p></li><li><p>v-bind:class = &quot;{active : isActive}&quot;<br> isActive\uAC00 true\uBA74 class\uC5D0 active \uCD94\uAC00 falsy\uBA74 \uCD94\uAC00 \uC548\uD584</p></li><li><p>v-for \uB97C \uD1B5\uD574 \uBC18\uBCF5\uD560 \uC218 \uC788\uB294\uB370<br> object key,value \uC21C\uD68C\uD558\uBA74\uC11C \uCC0D\uC5B4\uC904 \uC218 \uC788\uB2E4.</p></li><li><p>v-for, v-if \uAC19\uC774 \uC4F0\uC9C0 \uB9D0\uACE0 \uBC16\uC5D0 \uBE84 \uAC83</p></li></ul></div>`);
}
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS).html.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
var _______3_JS__html = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["ssrRender", _sfc_ssrRender$E], ["__file", "\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(JS).html.vue"]]);
var _______3_JS__html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _______3_JS__html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$D = {};
function _sfc_ssrRender$D(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="_21-04-15" tabindex="-1"><a class="header-anchor" href="#_21-04-15" aria-hidden="true">#</a> 21.04.15</h1><h2 id="pwa" tabindex="-1"><a class="header-anchor" href="#pwa" aria-hidden="true">#</a> PWA</h2><ul><li><p>\uC6F91 - \uADF8\uB0E5 \uBCF4\uC5EC\uC8FC\uAE30 \uC2DD</p></li><li><p>\uC6F92 - \uC0AC\uC6A9\uC790\uC640 \uC0C1\uD638\uC791\uC6A9</p></li><li><p>\uC6F93<br> \uC571 &gt; \uC6F9 &gt; \uC6F9\uBDF0 (\uD558\uC774\uBE0C\uB9AC\uB4DC \uC6F9) :</p></li><li><p>\uC6F9\uBDF0 : \uBAA8\uBC14\uC77C \uC6F9\uC758 \uB290\uB9B0\uAC78 \uADF8\uB300\uB85C \uAC00\uAC8C \uB428. \uB108\uBB34 \uB290\uB9AC\uB2C8\uAE4C \uACC4\uC18D \uACE0\uBBFC</p></li><li><p>Native \uC5B8\uC5B4 : \uB124\uC774\uD2F0\uBE0C \uC571 \uD558\uB098\uB97C \uB9CC\uB4E4\uBA74 ios android\uC5D0\uC11C \uC9C0\uC6D0\uD574\uC8FC\uACA0\uB2E4.</p></li><li><p>\uBAA8\uBC14\uC77C \uC571 \uD45C\uC900\uD654 \uB418\uC5C8\uC74C</p></li><li><p>pwa \uAC00 \uD655\uC7A5\uC774 \uB418\uC5C8\uC74C<br> (\uC2A4\uD0C0\uBC85\uC2A4 \uC571)<br> sns \uAC19\uC740 \uC11C\uBE44\uC2A4 \uC815\uBCF4 \uC804\uB2EC\uC758 \uC5ED\uD560\uC744 \uD558\uB294 \uAC83\uC740 \uC571\uC774 \uB9C9\uAC15\uD55C \uC601\uD5A5\uC744 \uB07C\uCE60 \uC218 \uC788\uC74C<br> \uBAA8\uBC14\uC77C\uC5D0\uC11C \uB05D\uB098\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C \uD328\uB4DC\uAC00 \uB098\uC624\uBA74\uC11C \uC0BC\uC911 \uC791\uC5C5\uC774 \uD544\uC694\uD558\uAC8C \uB418\uC5C8\uC74C.<br> \uB300\uBD80\uBD84\uC758 \uD070 \uD68C\uC0AC \uC5B4\uD50C\uB9AC\uCF00\uC774\uC158 \uD070 \uD68C\uC0AC\uB294 \uBAA8\uBC14\uC77C \uAC1C\uBC1C\uC790 \uC11C\uBC84 \uAC1C\uBC1C\uC790 \uB4F1\uB4F1 \uB2E4 \uBF51\uC74C. \uADF8\uB7EC\uB098 \uC791\uC740 \uD68C\uC0AC\uB4E4\uC740 \uC791\uC5C5\uC774 \uC5B4\uB824\uC6C0</p></li><li><p>jQuery jQuery\uB294 UI\uAC00 \uC815\uB9D0 \uC548 \uC608\uC068.<br> \uBD80\uD2B8\uC2A4\uD2B8\uB7A9 \uD15C\uD50C\uB9BF\uC774 \uC644\uC131\uB418\uC5B4 \uC788\uC74C</p></li></ul><p>\uACB0\uAD6D \uC6F9\uC784.<br> MANIFEST.JSON<br> \uC774\uAC70 \uD558\uB098\uB9CC \uAC00\uC9C0\uACE0 \uC774\uAC8C PWA \uB77C\uB294 \uAC8C \uC815\uC758\uAC00 \uB428</p><p>\uBB34\uC870\uAC74 HTTPS \uB9CC \uC124\uCE58\uAC00 \uB428.</p><p>\uC911\uC694\uD55C\uAC74 \uC544\uC774\uCF58\uC774 \uC788\uC5B4\uC57C \uD568.<br> \uC571\uC774\uAE30 \uB54C\uBB38\uC5D0 OFFLINE\uC5D0\uC11C \uC81C\uACF5\uD574\uC918\uC57C \uD568.<br> \uC54C\uB78C NOTIFY \uAE30\uB2A5\uC774 \uC788\uC5B4\uC57C \uD568.</p><p>\uC6B0\uB9AC\uAC00 \uC54C\uACE0 \uC788\uB294 \uD658\uACBD</p><ul><li><p>WINDOW</p></li><li><p>WEB</p></li><li><p>\uC11C\uBE44\uC2A4 \uC6CC\uCEE4\uB77C\uB294 \uD658\uACBD\uC774 \uC788\uC74C<br> \uC11C\uBE44\uC2A4 \uC6CC\uCEE4\uB97C \uB4F1\uB85D\uD558\uC5EC \uC720\uC800 \uD658\uACBD\uC5D0\uC11C \uB3CC\uC544\uAC00\uAC8C\uB054 \uD55C\uB2E4.</p></li><li><p>\uC11C\uBE44\uC2A4 \uC6CC\uCEE4<br> \uC11C\uBE44\uC2A4 \uC6CC\uCEE4 \uC81C\uACF5 \uC548\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uC0AC\uD30C\uB9AC?<br> \uC554\uD2BC. \uADF8\uB7EC\uBA74 \uBE0C\uB77C\uC6B0\uC800\uC5D0\uC11C \uC2E4\uD589\uD558\uBA74 \uC11C\uBE44\uC2A4 \uC6CC\uCEE4\uAC00 \uB4F1\uB85D\uC774 \uB428.<br> \uC571\uB3C4 \uC124\uCE58 \uB428.<br> \uC11C\uBE44\uC2A4 \uC6CC\uCEE4\uC758 \uD575\uC2EC.<br> \uC624\uD504\uB77C\uC778\uC5D0\uC11C \uC5B4\uB5BB\uAC8C \uD560 \uAC70\uB0D0.<br> (\uD06C\uB86C, \uB124\uD2B8\uC6CC\uD06C\uC5D0\uC11C \uC624\uD504\uB77C\uC778 \uC124\uC815\uD574\uC11C \uC2DC\uD5D8\uD574\uBCFC \uC218 \uC788\uC74C)<br> \uC11C\uBE44\uC2A4 \uC6CC\uCEE4\uB77C\uB294\uAC8C \uCE90\uC2DC\uB97C \uC0AC\uC6A9\uD558\uB294 \uAC83\uC774\uB2E4.<br> \uC624\uD504\uB77C\uC778\uC774 \uB418\uBA74 \uCE90\uC2DC\uC5D0\uC11C \uAC00\uC838\uC634.</p></li></ul><ul><li>\uBB34\uC870\uAC74 \uC788\uC5B4\uC57C \uD558\uB294 \uD30C\uC77C\uACFC</li><li>\uB124\uD2B8\uC6CC\uD06C\uAC00 \uC788\uC744 \uB54C \uD544\uC694\uD55C \uD30C\uC77C\uC744 \uB098\uB214.</li></ul><p>fetch \uBD80\uBD84\uC5D0\uC11C \uB124\uD2B8\uC6CC\uD06C \uD1B5\uC2E0\uD558\uB294 \uBD80\uBD84\uC744 \uAD6C\uD604</p><p>\uBC18\uC751\uD615\uC73C\uB85C \uB9CC\uB4DC\uB294 \uBC29\uBC95<br> css \uB124\uC784\uC911\uC5D0<br> @media<br> \uC571\uC744 \uC124\uCE58\uD558\uACE0 \uC2F6\uC744 \uB54C<br> \uC6F9\uC5D0 \uC62C\uB9AC\uBA74 \uC54C\uC544\uC11C \uC124\uCE58\uAC00 \uAC00\uB2A5\uD568.</p><p>\uADF8\uB9AC\uACE0 \uAC1C\uAD04\uC801\uC73C\uB85C\uB294 \uBC18\uC751\uD615\uC774 \uB514\uC790\uC774\uB108\uAC00 \uAC00\uB2A5\uD558\uAC8C \uB41C \uAC83\uC774\uACE0<br> \uAC1C\uBC1C\uC790\uB294 \uBE44\uC9C0\uB2C8\uC2A4\uB85C\uC9C1\uB9CC \uAD6C\uD604\uD558\uBA74 \uB418\uB294 \uAC83\uC774\uB2E4.</p></div>`);
}
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(pwa).html.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
var _______3_pwa__html = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["ssrRender", _sfc_ssrRender$D], ["__file", "\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-3(pwa).html.vue"]]);
var _______3_pwa__html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _______3_pwa__html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$C = {};
function _sfc_ssrRender$C(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="jquery-\u1100\u116D\u110B\u1172\u11A8" tabindex="-1"><a class="header-anchor" href="#jquery-\u1100\u116D\u110B\u1172\u11A8" aria-hidden="true">#</a> [jQuery \uAD50\uC721]</h1><h2 id="_1-core" tabindex="-1"><a class="header-anchor" href="#_1-core" aria-hidden="true">#</a> 1. CORE</h2><p>jQuery = $ \uAC19\uC74C</p><h2 id="_2-selector" tabindex="-1"><a class="header-anchor" href="#_2-selector" aria-hidden="true">#</a> 2. Selector</h2><p>\uADF8\uB0E5 \uC0AC\uC6A9\uD558\uB2E4\uBCF4\uBA74 \uC54C\uAC8C \uB41C\uB2E4.<br> : hide, visible, even, order \uBB50 \uC774\uB7F0 \uAC83\uB4E4<br> css selector\uB97C \uACF5\uBD80\uD558\uB294\uAC8C \uC624\uD788\uB824 \uB354 \uB098\uC744 \uC218 \uC788\uB2E4.<br> . \uC740 \uD074\uB798\uC2A4 \uC120\uD0DD\uC790</p><h1 id="\u110B\u1173\u11AB-\u110B\u1161\u110B\u1175\u1103\u1175-\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1161" tabindex="-1"><a class="header-anchor" href="#\u110B\u1173\u11AB-\u110B\u1161\u110B\u1175\u1103\u1175-\u1109\u1165\u11AB\u1110\u1162\u11A8\u110C\u1161" aria-hidden="true">#</a> \uC740 \uC544\uC774\uB514 \uC120\uD0DD\uC790</h1><p>attr</p><p>\uADF8\uB8F9\uC120\uD0DD\uC790<br> A, B : A\uB610\uB294 B</p><p>\uC790\uC190<br> \uC790\uC2DD<br> \uC790\uC2DD \uACB0\uD569\uC790\uB97C \uC798 \uC368\uC57C \uD568.</p><p>gt\uB294 \uBB50 \uCD08\uACFC<br> has \uC140\uB809\uD130 : td \uC548\uC5D0 span \uD0DC\uADF8\uB97C \uAC00\uC9C0\uACE0 \uC788\uB2E4 td:has(span)<br> hidden \uC228\uACA8\uC838 \uC788\uB294 \uAC83\uB4E4</p><p>input \uC140\uB809\uD130 : input textarea select 3\uAC1C \uBAA8\uB450 \uB9AC\uD134<br> lt : \uBBF8\uB9CC<br> not \uC140\uB809\uD130 : \uC548\uAC00\uC9C0\uACE0 \uC788\uB294 \uAC70 \uCC3E\uC744 \uB54C.<br> nth-child() \uC5F0\uC0B0\uC774 \uAC00\uB2A5\uD558\uB2E4.</p><p>jQuery\uB294 \uBAA8\uB4E0 \uAC83\uC774 \uBC30\uC5F4\uB85C \uB9AC\uD134\uB41C\uB2E4.<br> \uC140\uB809\uD130\uAC00 \uAC00\uC7A5 \uAE30\uBCF8\uC774\uACE0 \uAC00\uC7A5 \uC911\uC694\uD558\uB2E4.</p><h2 id="_3-trversing-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u11AB-\u110B\u1162\u1105\u1173\u11AF-\u1100\u1161\u110C\u1175\u1100\u1169-\u110B\u1171\u110B\u1161\u1105\u1162\u1105\u1169-\u110B\u1169\u11B1\u1100\u1175\u1100\u1165\u1102\u1161-\u1106\u116F-\u1100\u1173\u1105\u1165\u11AB\u1100\u1165" tabindex="-1"><a class="header-anchor" href="#_3-trversing-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u11AB-\u110B\u1162\u1105\u1173\u11AF-\u1100\u1161\u110C\u1175\u1100\u1169-\u110B\u1171\u110B\u1161\u1105\u1162\u1105\u1169-\u110B\u1169\u11B1\u1100\u1175\u1100\u1165\u1102\u1161-\u1106\u116F-\u1100\u1173\u1105\u1165\u11AB\u1100\u1165" aria-hidden="true">#</a> 3. Trversing (\uC120\uD0DD\uD55C \uC560\uB97C \uAC00\uC9C0\uACE0 \uC704\uC544\uB798\uB85C \uC62E\uAE30\uAC70\uB098 \uBB50 \uADF8\uB7F0\uAC70)</h2><p>\uCD94\uAC00 \uC0AD\uC81C\uC758 \uAC1C\uB150<br> append \uB294 \uC544\uB2C8\uACE0 add<br> 0\uAC1C\uB4E0 \uD55C\uAC1C\uB4E0 \uB450\uAC1C\uB4E0 \uAC00\uC9C0\uACE0 \uC788\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 \uCD94\uAC00\uB85C \uB354\uD574\uC90C.<br> addBack<br> show find addBack<br> find\uC5D0\uC11C \uCC3E\uC544\uC628 \uAC1D\uCCB4\uC5D0 \uADF8 \uC0C1\uC704 \uC5D8\uB9AC\uBA3C\uD2B8\uB4E4\uC744 \uCD94\uAC00\uD55C\uB2E4.<br> \uC608)<br> article \uAE30\uC900\uC73C\uB85C<br> h1 \uC744 \uCC3E\uC544<br> \uC804\uBD80\uB2E4 \uAC00\uC838\uC640\uC11C \uD55C\uAEBC\uBC88\uC5D0 \uC870\uC791\uD560 \uC218 \uC788\uC74C</p><p>\uC5B4\uB835\uB2E4\uB294 \uAC83\uC740 \uC5EC\uB7EC\uC904\uB85C \uD560 \uC218 \uC788\uB294 \uC791\uC5C5\uC744 \uD55C \uC904\uB85C \uD560 \uC218\uC788\uB294 \uACBD\uC6B0<br> \uADF8\uAC78\uBD10\uB3C4 \uC798 \uBAA8\uB974\uB294 \uACBD\uC6B0 \uAC00\uB3C5\uC131\uC774 \uB5A8\uC5B4\uC838\uC11C \uADF8\uB7EC\uB098 \uC0AC\uC6A9\uD558\uB2E4\uBCF4\uBA74<br> \uC774\uB807\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><p>children()<br> \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uC790\uC2DD\uB4E4\uC744 \uBAA8\uB458 \uB9AC\uD134\uD574\uC900\uB2E4.</p><p>closest()<br> \uB0B4\uAC00 \uAC00\uC9C4 \uC5D8\uB9AC\uBA3C\uD2B8<br> $(&#39;aritcle&#39;).closest(&#39;div&#39;)<br> \uBB50 \uC774\uB807\uAC8C \uD558\uBA74 \uADF8 div\uB97C \uCC3E\uC544\uC90C</p><p>content \uB97C \uD1B5\uD574 \uADF8 \uC548\uC758 \uB0B4\uC6A9\uBB3C\uC744 \uB2E4\uB8F0 \uC218 \uC788\uB2E4.<br> ex)<br> \uC0DD\uC131\uD234\uC774 \uC788\uACE0 \uC0DD\uC131\uD234 \uC5D0\uB514\uD130\uB97C \uD1B5\uD574\uC11C \uD3B8\uC9D1\uC744 \uD560 \uC218\uAC00 \uC788\uB2E4.<br> \uC704\uCE58 \uC9C0\uC810\uC744 \uB300\uBB38\uC790 \uB450\uAC1C\uB85C \uCC98\uB9AC\uD55C\uB2E4.<br> \uADF8 \uAC1D\uCCB4\uC758 text \uB97C \uCC3E\uC544\uC11C<br> content\uB97C \uAC00\uC838\uC640\uC11C text\uB97C \uC798\uB77C\uBC84\uB9AC\uACE0<br> \uADF8 \uB300\uBB38\uC790 \uB450\uAC1C\uB97C \uB2E4\uB978 \uAC78\uB85C \uCE58\uD658\uD574\uBC84\uB9BC</p><p>end() \uB97C \uC368\uC11C \uBA54\uC11C\uB4DC \uCCB4\uC774\uB2DD\uC744 \uBA48\uCD94\uACE0 \uADF8 \uC804\uC758 \uBC18\uD658 \uAC12\uC744 \uAC00\uC838\uC634.<br> \uAD73\uC774 \uC774\uB807\uAC8C \uC4F0\uB294 \uC774\uC720\uB294 jQuery \uAC1D\uCCB4\uAC00 \uC774\uC911\uC73C\uB85C \uC548\uC0DD\uAE30\uAE30 \uB54C\uBB38\uC5D0 \uC6A9\uB7C9\uC744 \uC904\uC77C \uC218 \uC788\uB2E4.</p><p>eq() \uBA87\uBC88\uC9F8 \uC5D8\uB9AC\uBA3C\uD2B8<br> even()\uC740 \uC9DD\uC218<br> filter() \uC5B4\uB824\uC6B4\uAC70, map()<br> find() \uC5D8\uB9AC\uBA3C\uD2B8 \uCC3E\uC544\uC90C.<br> first() \uCCAB\uBC88\uC9F8<br> has() \uC640 :has \uB294 \uAC19\uC74C<br> is() \uC774\uAC8C \uC18D\uC131\uC73C\uB85C \uCCB4\uD06C\uB4DC \uB418\uC5B4 \uC788\uB294\uAC00. ( \uB2E8\uC77C \uAC80\uC0AC true false )<br> offsetParent() \uC2E4\uC81C\uB85C \uC704\uCE58\uB41C \uACF3\uC758 \uC88C\uD45C\uC0C1\uC758 \uC0C1\uC704. \uC2E4\uC81C \uD0DC\uADF8\uC758 \uC0C1\uC704\uAC00 \uC544\uB2C8\uB77C.<br> drag &amp; drop\uC73C\uB85C \uC704\uCE58 \uC774\uB3D9\uD55C \uACBD\uC6B0 \uAC70\uAE30 \uC704\uCE58\uC758 parent\uB97C \uCC3E\uC544\uC90C<br> parent() \uB2E8\uC77C \uBD80\uBAA8<br> parents() \uBD80\uBAA8\uB4E4</p><p>\uC790 filter, map, slice<br> Array.prototype\uC5D0 \uC788\uB294 \uD568\uC218\uB791 \uB3D9\uC77C\uD55C \uC5ED\uD560\uC744 \uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.<br> \uBC30\uC5F4\uC740 \uC544\uB2C8\uC9C0\uB9CC \uBC30\uC5F4\uCC98\uB7FC \uAD6C\uD604\uD560 \uC218 \uC788\uAC8C<br> filter\uB294 true\uB85C \uC785\uB825\uB418\uBA74 \uBC30\uC5F4 \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uAC83.</p><h2 id="_4-manipulation-\u110C\u1169\u110C\u1161\u11A8-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u11AB-\u110B\u1162\u1105\u1173\u11AF-\u1100\u1161\u110C\u1175\u1100\u1169-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA" tabindex="-1"><a class="header-anchor" href="#_4-manipulation-\u110C\u1169\u110C\u1161\u11A8-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u11AB-\u110B\u1162\u1105\u1173\u11AF-\u1100\u1161\u110C\u1175\u1100\u1169-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1102\u1173\u11AB-\u1100\u1165\u11BA" aria-hidden="true">#</a> 4. Manipulation (\uC870\uC791) \uC120\uD0DD\uD55C \uC560\uB97C \uAC00\uC9C0\uACE0 \uC870\uC791\uD558\uB294 \uAC83</h2><p>after() \uC120\uD0DD\uD55C \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uB3D9\uC77C\uD55C \uB808\uBCA8\uC758 \uD615\uC81C \uB178\uB4DC\uB97C \uB9CC\uB4DC\uB294 \uAC83<br> append() \uC790\uC2DD\uC73C\uB85C \uB9E8 \uB4A4\uC5D0 \uCD94\uAC00<br> appendTo() \uB098\uB97C \uC5B4\uB514\uC5D0 \uC790\uC2DD\uC73C\uB85C \uCD94\uAC00\uD574\uB77C.<br> attr() \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8. attr(name) \uAC8C\uD130, attr(name,value) \uC138\uD130<br> before() after \uC5D0\uC11C \uC774\uC804 \uD615\uC81C \uB77C\uC778<br> clone() \uBCF5\uC0AC true\uB77C\uACE0 \uBC1B\uC73C\uBA74 \uC774\uBCA4\uD2B8 \uB2E4 \uAC00\uC838\uC624\uACE0, \uB370\uC774\uD130 \uAC1D\uCCB4\uB3C4 \uAC00\uC838\uC634<br> css() \uC2A4\uD0C0\uC77C \uCD94\uAC00 \uAC00\uB2A5. object \uD615\uC2DD\uC73C\uB85C \uB118\uAE38 \uC218 \uC788\uB2E4.<br> detach() remove() \uB791 \uB2E4\uB984. \uC774\uAC74 \uB5BC\uC5B4\uB0B4\uC11C \uC7A0\uAE50 \uBCF4\uAD00\uD568.<br> empty() \uC548\uC5D0 \uC788\uB294 \uC560\uB4E4\uC744 \uB2E4 \uBE44\uC6CC\uBC84\uB9BC. \uB098\uB294 \uC5C6\uC5B4\uC9C0\uC9C0 \uC54A\uACE0, \uB0B4 \uC790\uC2E0\uB4E4\uC774 \uC5C6\uC5B4\uC9D0<br> height() \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uB192\uC774 \uAC00\uC838\uC634. \uACC4\uC0B0\uB41C \uAC12\uC744 \uB9AC\uD134\uD568. \uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uB2EC\uB77C\uC9D0(\uB9C8\uC9C4 \uD328\uB529 \uACC4\uC0B0\uBC95\uC774 \uB2E4\uB984)<br> html() \uC21C\uC218 html \uAC00\uC9C0\uACE0 \uC634<br> innerHeight() include, \uD328\uB529, \uC81C\uC678\uD558\uACE0 \uB531 \uB0B4\uBD80\uC758 \uB192\uC774<br> innerWidth() \uB0B4\uBD80\uC758 \uB113\uC774</p><p>offset() \uB0B4\uAC00 \uC704\uCE58\uD55C \uC88C\uD45C\uB97C \uAC00\uC838\uC634. \uC0C1\uC704 \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 \uC758\uD574 \uACB0\uC815\uB41C \uC0C1\uB300 \uC88C\uD45C<br> position() \uC740 \uC808\uB300 \uC88C\uD45C<br> \uC774\uB7F0 \uAC83\uB4E4\uC740 \uB77C\uBE44\uB974\uB7EC\uB9AC \uC4F8 \uAC83.</p><p>outerHeight()<br> outerWidth() \uD328\uB529, \uBCF4\uB354, \uB9C8\uC9C4\uAE4C\uC9C0 \uD3EC\uD568\uD574\uC11C \uB192\uC774, \uB108\uBE44</p><p>prepend() \uB294 append\uC640 \uBC18\uB300, \uC790\uC2DD\uC744 \uB2E4 \uBC00\uC5B4\uBC84\uB9AC\uACE0 \uCCAB\uBC88\uC9F8\uB85C \uB123\uC74C</p><p>prop() \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uB791 \uBE44\uC2B7\uD55C \uC791\uC5C5\uC744 \uD568.<br> attr \uD574\uBD10\uC11C \uC548\uB418\uBA74 prop\uB97C \uC4F0\uBA74 \uB418\uACE0, prop\uB85C \uC548\uB418\uBA74 attr \uC368\uBCF4\uACE0 \uD574\uBD10\uB77C<br> remove() \uC5D8\uB9AC\uBA3C\uD2B8 \uC544\uC608 \uC0AD\uC81C</p><p>text()\uB85C \uD558\uBA74 html \uAC12\uB4E4 \uB2E4 \uC9C0\uC5B4\uC9C0\uACE0 \uC5F0\uC18D\uB41C text \uBC18\uD658<br> toggleClass() \uADF8 \uD074\uB798\uC2A4\uAC00 \uC788\uC73C\uBA74 \uC9C0\uC6B0\uACE0 \uC5C6\uC73C\uBA74 \uB123\uACE0<br> unwrap() \uADF8 \uB4A4\uC5D0 \uB4E4\uC5B4\uAC00\uB294 \uD0DC\uADF8\uB85C \uBC97\uACA8\uB0C4<br> wrap() \uC740 \uC50C\uC6B0\uB294 \uAC83</p><p>val() input \uD0DC\uADF8\uC5D0 \uB9CE\uC774 \uC4F0\uC784. selectbox\uC5D0 val\uC744 \uC368\uB3C4, radio\uC5D0 \uC368\uB3C4, textarea\uC5D0\uB3C4 \uB2E4 \uB428</p><ul><li>textarea \uAC19\uC740 \uACBD\uC6B0\uB294 text() \uB85C\uB3C4 \uC785\uB825\uB418\uB2C8 \uADF8 \uC815\uB3C4\uB9CC \uC54C\uACE0 \uB118\uC5B4\uAC00\uAE30</li></ul><h2 id="_5-event" tabindex="-1"><a class="header-anchor" href="#_5-event" aria-hidden="true">#</a> 5. Event</h2><p>\uC774\uAC8C \uC140\uB809\uD130 \uB2E4\uC74C\uC73C\uB85C \uB450\uBC88\uC9F8\uB85C \uB9CE\uC774\uC500<br> bind()<br> bind(eventType[, eventData], handler)<br> hover \uB9C8\uC6B0\uC2A4 \uC62C\uB77C\uAC00 \uC788\uC744 \uB54C<br> keydown,<br> keypress<br> keyup<br> \uD0A4 \uC774\uBCA4\uD2B8 \uC0BC\uCD1D\uC0AC<br> mousedown<br> mouseenter<br> mouseleave (\uB4DC\uB798\uADF8 &amp; \uB4DC\uB78D\uC5D0\uC11C \uB9CE\uC774 \uC4F4\uB2E8\uB2E4)</p><p>off/ on<br> a name\uC774\uB77C\uB294 \uC18D\uC131\uC744 \uB204\uB974\uBA74 \uD074\uB9AD \uC774\uBCA4\uD2B8 \uBC1C\uC0DD\uD558\uB3C4\uB85D \uB3D9\uC801\uC73C\uB85C \uD560\uB2F9\uD55C\uB2E4\uB294 \uAC83.<br> off\uB294 \uAEBC\uBC84\uB9BC<br> resize() \uC708\uB3C4\uC6B0\uAC00 \uB9AC\uC0AC\uC774\uC988 \uB420 \uB54C\uB9C8\uB2E4 \uD2B8\uB9AC\uAC70 \uC2DC\uD0B4<br> \uC61B\uB0A0\uC5D0 \uC774\uB807\uAE30 \uB9CE\uC774 \uC37C\uACE0 \uC694\uC998\uC740 \uBC18\uC751\uD615\uC774\uAE30 \uB54C\uBB38\uC5D0 css \uB808\uBCA8\uC5D0\uC11C \uC801\uC6A9\uD568.</p><p>trigger() \uC774\uBCA4\uD2B8\uB3C4 \uC2E4\uD589\uC2DC\uD0A4\uACE0 \uC774\uBCA4\uD2B8 \uD568\uC218\uB3C4 \uC2E4\uD589\uB428<br> \uCCB4\uD06C\uBC15\uC2A4 \uCCB4\uD06C/\uD574\uC81C \uAC00\uB2A5<br> triggerhandler() \uD2B8\uB9AC\uAC70\uC5D0 \uC788\uB294 \uD568\uC218\uB9CC \uC2E4\uD589\uC2DC\uD0B4</p><h2 id="_6-effects" tabindex="-1"><a class="header-anchor" href="#_6-effects" aria-hidden="true">#</a> 6. Effects</h2><p>UI \uC801\uC778 \uCE21\uBA74\uC774 \uAC15\uD568<br> animated() \uB294 \uBB38\uBC95\uC774 \uC815\uB9D0 \uC2E0\uAE30\uD568.</p><h2 id="_7-\u1100\u1175\u1110\u1161" tabindex="-1"><a class="header-anchor" href="#_7-\u1100\u1175\u1110\u1161" aria-hidden="true">#</a> 7. \uAE30\uD0C0</h2><p>data() \uAC1D\uCCB4\uB098 \uAC12\uC774\uB098 \uD558\uB294 \uAC83\uB4E4\uC744 elemet\uC5D0 \uC9D1\uC5B4\uB123\uACE0 \uBE7C\uACE0 \uD560 \uC218 \uC788\uC74C \uC598\uB294 \uBE0C\uB77C\uC6B0\uC800\uAC00 \uB3CC\uC544\uAC08 \uB54C\uB9CC \uC720\uD6A8\uD55C \uAC12\uC774 \uB428.<br> get() jQUery\uB85C \uC140\uB809\uD2B8 \uD55C \uC560\uB4E4\uC744 \uC5D8\uB9AC\uBA3C\uD2B8 \uD615\uD0DC\uB85C \uAC00\uC9C0\uACE0 \uC624\uACE0 \uC2F6\uB2E4. \uD560 \uB54C \uC500<br> param() serialize \uD574\uC8FC\uB294 \uC5ED\uD560<br> size() length\uC640 \uAC19\uC740 \uAC1C\uB150\uC784<br> toArray() \uBC30\uC5F4\uCC98\uB7FC \uB3D9\uC791\uD558\uAE34 \uD558\uC9C0\uB9CC \uC2E4\uC81C \uBC30\uC5F4\uB85C \uBC14\uAFD4\uC8FC\uB294 \uC560\uC784</p><h2 id="_8-utitlities" tabindex="-1"><a class="header-anchor" href="#_8-utitlities" aria-hidden="true">#</a> 8. utitlities</h2><p>clearQueue()<br> dequeque() \uD050\uC5D0 \uC774\uBCA4\uD2B8\uB97C \uB123\uACE0 \uBE7C\uACE0 \uD560 \uB54C \uC0AC\uC6A9</p><p>\uC5B4\uB5A4 \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 \uC774\uBCA4\uD2B8\uAC00 \uBB50\uAC00 \uB410\uB294\uC9C0 \uBAA8\uB974\uACA0\uB2E4 \uD558\uBA74<br> .event() \uC774\uB7F0\uC2DD\uC73C\uB85C \uC785\uB825\uD574\uBCF4\uBA74 \uB9AC\uD134\uC774 \uB428.<br> \uADF8\uB7F0\uB370 \uC5B4\uB290 \uC21C\uAC04 \uBC84\uC804\uBD80\uD130, jquery.data().event \uB77C\uACE0 \uD558\uBA74 \uB098\uC634</p><p>grep() array\uC5D0 \uC4F0\uB294 \uD568\uC218\uC778\uB370, filter\uC640 \uBE44\uC2B7\uD568.</p><p>noop() no operation \uADF8\uB0E5 \uD568\uC218 function(){}\uB97C \uC9C0\uC6D0\uD574\uC90C</p><h1 id="javascript-\u110B\u1175\u1106\u1169\u110C\u1165\u1106\u1169" tabindex="-1"><a class="header-anchor" href="#javascript-\u110B\u1175\u1106\u1169\u110C\u1165\u1106\u1169" aria-hidden="true">#</a> [Javascript \uC774\uBAA8\uC800\uBAA8]</h1><p>\uD504\uB860\uD2B8\uC5D4\uB4DC \uAC1C\uBC1C\uC790</p><ul><li>\uB514\uC790\uC774\uB108 \uC5D4\uC9C0\uB2C8\uC5B4 \uAC04\uC758 \uC2DC\uAC01\uC801 \uC5B8\uC5B4 \uD655\uB9BD<br> \uC774\uB7F0 \uAC83\uB4E4 \uC0AC\uC804\uC5D0 \uD611\uC758\uAC00 \uBD84\uBA85\uD558\uAC8C \uB418\uC5B4\uC57C \uD568.</li><li>\uBB50\uAC00 \uC5B4\uB5BB\uAC8C \uBC14\uB00C\uACE0 \uADF8\uB7EC\uBA74 \uC5B4\uB5BB\uAC8C \uB3D9\uC791\uD558\uB294\uC9C0 \uBA85\uD655\uD574\uC57C \uD568</li></ul><p>sequelize.js<br> \uC5B4\uB5A4 \uB370\uC774\uD130\uBCA0\uC774\uC2A4\uAC04\uC5D0 \uD638\uD658\uC131\uC744 \uC81C\uACF5\uD574\uC8FC\uB294 orm \uC744 \uD1B5\uD574\uC11C db \uC81C\uC5B4</p><p>nodejs \uCABD\uC740<br> db\uC640 \uC554\uD638\uD654\uAC19\uC740 \uAC83\uB4E4<br> \uB300\uC6A9\uB7C9 \uD1B5\uC2E0 \uBD80\uBD84\uB4E4 \uB178\uD558\uC6B0\uAC00 \uC5C6\uC74C.<br> \uADF8\uB7EC\uB098 \uC55E\uC73C\uB85C \uB2F7\uB137 \uBCF4\uB2E4\uB294 nodejs\uB85C \uBC14\uAFC0 \uC608\uC815\uC784</p></div>`);
}
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Education/\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4.html.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
var _______4_html = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["ssrRender", _sfc_ssrRender$C], ["__file", "\uD30C\uD2B8\uC7A5\uB2D8 \uAD50\uC721-4.html.vue"]]);
var _______4_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _______4_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$B = {};
function _sfc_ssrRender$B(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="_1\u110C\u1161\u11BC-jquery\u1105\u1173\u11AF-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1106\u1167" tabindex="-1"><a class="header-anchor" href="#_1\u110C\u1161\u11BC-jquery\u1105\u1173\u11AF-\u1109\u1175\u110C\u1161\u11A8\u1112\u1161\u1106\u1167" aria-hidden="true">#</a> 1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70</h1><h2 id="_1-3-jquery-\u1100\u1175\u110E\u1169" tabindex="-1"><a class="header-anchor" href="#_1-3-jquery-\u1100\u1175\u110E\u1169" aria-hidden="true">#</a> 1.3 jQuery \uAE30\uCD08</h2><p><code>jQuery\uB294 HTML \uD398\uC774\uC9C0\uC758 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC870\uD68C\uD55C \uB2E4\uC74C \uADF8 \uACB0\uACFC\uB97C \uC774\uC6A9\uD558\uC5EC \uC0AC\uC6A9\uC790\uAC00 \uC6D0\uD558\uB294 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB294\uB370 \uC911\uC810\uC744 \uB454\uB2E4.</code></p><h3 id="_1-3-1-jquery-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_1-3-1-jquery-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> 1.3.1 jQuery() \uD568\uC218</h3><p>\uC140\uB809\uD130\uB294 \uC678\uBD80 \uC2A4\uD0C0\uC77C \uC2DC\uD2B8 (css\uC640 \uAC19\uC740)\uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8 \uADF8\uB8F9\uC744 \uCC38\uC870\uD560 \uBC29\uBC95\uC774 \uD544\uC694\uD588\uAE30\uC5D0 \uB9CC\uB4E4\uC5B4\uC84C\uB2E4. jQuery\uB294 \uAC15\uB825\uD55C \uC140\uB809\uD130\uB97C \uC9C0\uC6D0\uD55C\uB2E4.</p><p>jQuery \uC140\uB809\uD130 \uBB38\uBC95 $(selector) \uB610\uB294, jQuery(selector)</p><p>$() \uC774\uB7F0 \uD615\uD0DC\uC758 \uD45C\uAE30\uBC95\uC5D0 \uC775\uC219\uD574\uC838\uC57C \uD55C\uB2E4. \uC608\uB97C\uB4E4\uC5B4 $(&quot;p a&quot;) &lt;p&gt; \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 \uD3EC\uD568\uB41C \uBAA8\uB4E0 \uB9C1\uD06C\uB97C \uCC3E\uC744 \uB54C \uC0AC\uC6A9\uD55C\uB2E4. \uC704 \uC140\uB809\uD130\uC758 \uACB0\uACFC\uB85C \uAC1D\uCCB4\uB97C \uBC18\uD658\uD55C\uB2E4.</p><p>$(&quot;div.notLongForThisWorld&quot;).fadeOut(); \uC774\uB807\uAC8C \uD558\uBA74 div \uD0DC\uADF8 \uC911 class\uAC00 notLongForThisWorld \uC778 \uC560\uB97C \uCC3E\uC544\uC11C \uD398\uC774\uB4DC\uC544\uC6C3\uC744 \uC2DC\uD0AC \uC218 \uC788\uB2E4. \uADF8\uB7F0\uB370... \uD574\uB2F9 \uB3D9\uC791\uC744 \uC2E4\uD589\uD55C \uD6C4 \uCD94\uAC00 \uB3D9\uC791\uC744 \uD560 \uC218 \uC788\uB3C4\uB85D \uB3D9\uC77C\uD55C \uC5D8\uB9AC\uBA3C\uD2B8 \uADF8\uB8F9\uC744 \uBC18\uD658\uD574\uC900\uB2E4. \uADF8\uB7EC\uBBC0\uB85C... $(&quot;div.notLongForThisWorld&quot;).fadeOut().addClass(&quot;removed&quot;); \uC774\uB807\uAC8C \uD574\uC90C\uC73C\uB85C\uC368 \uC0C8\uB85C\uC6B4 css \uD074\uB798\uC2A4 removed\uB97C \uCD94\uAC00\uD560 \uC218 \uC788\uB294 \uAC83\uC774\uB2E4. \uC704\uC640 \uAC19\uC740 &quot;jQuery\uCCB4\uC778&quot;\uC740 \uBB34\uD55C\uB300\uB85C \uC5F0\uACB0\uD560 \uC218 \uC788\uB2E4.</p><h3 id="_1-3-2-\u110B\u1172\u1110\u1175\u11AF\u1105\u1175\u1110\u1175-\u1112\u1161\u11B7\u1109\u116E" tabindex="-1"><a class="header-anchor" href="#_1-3-2-\u110B\u1172\u1110\u1175\u11AF\u1105\u1175\u1110\u1175-\u1112\u1161\u11B7\u1109\u116E" aria-hidden="true">#</a> 1.3.2 \uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218</h3><p>\uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218\uB780 $.trim(), jQuery.trim() \uACFC \uAC19\uC774 jQuery\uC5D0\uC11C \uC9C0\uC6D0\uD574\uC8FC\uB294 \uB0B4\uBD80\uBA54\uC11C\uB4DC \uAC19\uC740 \uAC1C\uB150\uC778\uB4EF\uD558\uB2E4.</p><h3 id="_1-3-3-\u1106\u116E\u11AB\u1109\u1165\u110C\u116E\u11AB\u1107\u1175\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1165" tabindex="-1"><a class="header-anchor" href="#_1-3-3-\u1106\u116E\u11AB\u1109\u1165\u110C\u116E\u11AB\u1107\u1175\u1112\u1162\u11AB\u1103\u1173\u11AF\u1105\u1165" aria-hidden="true">#</a> 1.3.3 \uBB38\uC11C\uC900\uBE44\uD578\uB4E4\uB7EC</h3><p>$() \uC548\uC5D0 \uD568\uC218\uB97C \uC778\uC218\uB85C \uC804\uB2EC\uD558\uBA74 \uD574\uB2F9 \uD568\uC218\uB97C (\uC5EC\uB7EC\uAC1C\uAC00 \uB420 \uC218 \uC788\uC74C) \uC120\uC5B8\uD55C \uC21C\uC11C\uB300\uB85C \uC2E4\uD589\uB41C\uB2E4. window.onload()\uC5D0\uC11C\uB294 \uD568\uC218 \uD558\uB098\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uB294 \uAC83\uC5D0 \uBE44\uD574 \uC88B\uB2E4.</p><h3 id="_1-3-4-dom-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_1-3-4-dom-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 1.3.4 DOM \uC5D8\uB9AC\uBA3C\uD2B8 \uC0DD\uC131\uD558\uAE30</h3><p><code>$(&quot;&lt;p&gt; \uC548\uB155! &lt;/p&gt;&quot;)</code></p><p>\uC774\uB807\uAC8C \uD558\uBA74 DOM \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uBC14\uB85C \uB9CC\uB4E4 \uC218 \uC788\uB2E4. \uADF8\uB7EC\uB098 \uC774\uB807\uAC8C\uB9CC \uD558\uBA74 DOM \uD2B8\uB9AC\uC5D0 \uBD99\uC9C0 \uBABB\uD558\uACE0 \uD654\uBA74\uC5D0 \uCD9C\uB825\uC774 \uC548\uB41C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">&quot;text/javascript&quot;</span><span class="token operator">&gt;</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;p&gt;\uC548\uB155!&lt;/p&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertAfter</span><span class="token punctuation">(</span><span class="token string">&quot;#followMe&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC368\uC11C insertAfter() \uB97C \uC368\uC8FC\uBA74 DOM \uD2B8\uB9AC\uC5D0 \uB123\uC5B4\uC11C \uD654\uBA74\uC5D0 \uCD9C\uB825\uC2DC\uD0A4\uB294 \uAC83\uC774 \uAC00\uB2A5\uD558\uB2E4.</p><h2 id="_1-4-\u110B\u116D\u110B\u1163\u11A8" tabindex="-1"><a class="header-anchor" href="#_1-4-\u110B\u116D\u110B\u1163\u11A8" aria-hidden="true">#</a> 1.4 \uC694\uC57D</h2><p>jQuery() \uD568\uC218\uB85C \uD560 \uC218 \uC788\uB294 \uC77C.</p><ul><li>\uC5B4\uB5A4 \uB3D9\uC791\uC744 \uC218\uD589\uD558\uB824\uACE0 DOM \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD558\uACE0 \uD655\uC7A5</li><li>\uC804\uC5ED \uC720\uD2F8\uB9AC\uD2F0 \uD568\uC218\uC758 \uC774\uB984\uACF5\uAC04 \uC81C\uACF5</li><li>HTML \uB9C8\uD06C\uC5C5\uC73C\uB85C DOM \uC5D8\uB9AC\uBA3C\uD2B8 \uB9CC\uB4E4\uAE30</li><li>DOM\uC744 \uC870\uC791\uD560 \uC900\uBE44\uAC00 \uB418\uC5C8\uC744 \uB54C \uC2E4\uD589\uD560 \uCF54\uB4DC \uC9C0\uC815\uD558\uAE30</li></ul></div>`);
}
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/jQuery/1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70.html.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
var _1__jQuery_______html = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["ssrRender", _sfc_ssrRender$B], ["__file", "1\uC7A5 jQuery\uB97C \uC2DC\uC791\uD558\uBA70.html.vue"]]);
var _1__jQuery_______html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _1__jQuery_______html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$A = {};
function _sfc_ssrRender$A(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  const _component_DIV = vue.resolveComponent("DIV");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="_2\u110C\u1161\u11BC-\u1100\u1175\u1102\u1173\u11BC\u110B\u1175-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2\u110C\u1161\u11BC-\u1100\u1175\u1102\u1173\u11BC\u110B\u1175-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.</h1><h2 id="_2-1-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1105\u1167\u1102\u1173\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-1-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1105\u1167\u1102\u1173\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.1 \uC870\uC791\uD558\uB824\uB294 \uC5D8\uB9AC\uBA3C\uD2B8 \uC120\uD0DD\uD558\uAE30.</h2><p>\uC77C\uB2E8 \uC120\uD0DD\uD558\uB824\uBA74 \uD574\uB2F9 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC124\uBA85\uD560 \uC904 \uC54C\uC544\uC57C\uD55C\uB2E4 jQuery\uB294 \uADF8\uB7F0\uBA74\uC5D0\uC11C \uC5B4\uB5A4 \uC5D8\uB9AC\uBA3C\uD2B8\uB77C\uB3C4 \uC138\uB828,\uAC04\uACB0,\uC27D\uAC8C \uC124\uBA85\uD560 \uC218 \uC788\uB294 \uC140\uB809\uD130\uB97C \uB9CC\uB4E4\uC5C8\uB2E4. \uAE30\uBCF8\uC774 \uB418\uB294 \uAC83\uC740 &quot;CSS\uBB38\uBC95&quot;\uC774\uB2E4.</p><h3 id="_2-1-1-\u1100\u1175\u1107\u1169\u11AB-css-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-1-1-\u1100\u1175\u1107\u1169\u11AB-css-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.1.1 \uAE30\uBCF8 CSS \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30</h3><p>\uC608\uC2DC\uB97C \uD1B5\uD574 \uBCF4\uC790.</p><ul><li>a - \uBAA8\uB4E0 \uB9C1\uD06C &lt;a&gt; \uC5D8\uB9AC\uBA3C\uD2B8\uC640 \uC77C\uCE58\uD558\uB294 \uC140\uB809\uD130</li><li>#specialID - specailID\uB97C \uC544\uC774\uB514\uB85C \uAC00\uC9C0\uB294 \uC560 \uC120\uD0DD \uC140\uB809\uD130</li><li>.specialClass - specialClass\uB97C \uD074\uB798\uC2A4\uB85C \uAC00\uC9C4\uC560 \uC120\uD0DD \uC140\uB809\uD130</li><li>a#specailID.specialClass - \uC544\uC774\uB514\uAC00 specialID\uC774\uACE0 specialClass\uB97C \uD074\uB798\uC2A4\uB85C \uAC00\uC9C0\uB294 \uB9C1\uD06C\uC640 \uC77C\uCE58\uD558\uB294 \uC140\uB809\uD130</li></ul><p>\uC774\uC815\uB3C4\uB9CC \uB3FC\uB3C4 \uAF64 \uC0C1\uC138\uD558\uAC8C \uB4E4\uC5B4\uAC08 \uC218 \uC788\uB2E4. \uC704 \uC0AC\uD56D\uC744 \uADF8\uB0E5 $(&quot;&quot;) \uB85C \uAC10\uC2F8\uC8FC\uAE30\uB9CC \uD558\uBA74 \uACE7\uBC14\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4. \uADF8\uB7EC\uB098 \uB610\uD55C \uACE0\uAE09 \uC140\uB809\uD130\uB97C \uC81C\uACF5\uD574\uC900\uB2E4.</p><h3 id="_2-1-2-\u110C\u1161\u1109\u1175\u11A8-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-1-2-\u110C\u1161\u1109\u1175\u11A8-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u110F\u1165\u11AB\u1110\u1166\u110B\u1175\u1102\u1165-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.1.2 \uC790\uC2DD \uC140\uB809\uD130, \uCEE8\uD14C\uC774\uB108 \uC140\uB809\uD130, \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30</h3><p>&quot;\uC790\uC2DD \uC140\uB809\uD130&quot; \uC77C\uB2E8 \uC54C\uC544\uC57C\uD558\uB294 \uAC83\uC740 &quot;\uBD80\uBAA8 \uC140\uB809\uD130 &gt; \uC790\uC2DD \uC140\uB809\uD130&quot; \uB97C \uD1B5\uD574 \uC790\uC2DD \uC140\uB809\uD130\uB97C \uC120\uD0DD\uD560 \uC218 \uC788\uB2E4. \uC774\uB807\uAC8C\uD558\uBA74 \uC9C1\uACC4 \uC790\uC2DD\uB9CC \uAC00\uC838\uC624\uB294 \uAC83\uC774\uB2E4. \uD6C4\uC190\uC744 \uAC00\uC838\uC624\uB294 \uAC83\uC774 \uC544\uB2C8\uB2E4.</p><p>&quot;\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC140\uB809\uD130&quot;<br> \uB610 \uB9C1\uD06C \uAC00\uC838\uC624\uB294 \uACBD\uC6B0 \uB9C1\uD06C\uB97C \uC120\uD0DD\uD558\uB294 \uC140\uB809\uD130\uB97C \uC791\uC131\uD560 \uC218 \uC788\uB2E4. a[href^=http://] \uCE90\uB7FF\uBB38\uC790(^)\uB294 \uBB38\uC790\uC5F4\uC758 \uC2DC\uC791\uC744 \uC758\uBBF8\uD55C\uB2E4. http:// \uB85C \uC2DC\uC791\uD558\uB294 \uBAA8\uB4E0 \uB9C1\uD06C\uB97C \uAC00\uC838\uC624\uB77C\uB294 \uB73B\uC774\uB2E4. &quot;\uC774\uB97C \uC5B4\uD2B8\uB9AC\uBDF0\uD130 \uC140\uB809\uD130&quot;\uB77C\uACE0 \uD55C\uB2E4.</p><p>\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC140\uB809\uD130 \uB294 \uAC12\uC5D0 \uC0C1\uAD00 \uC5C6\uC774 \uD2B9\uC815 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uB97C \uAC00\uC9C4 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uCC3E\uC73C\uB824\uBA74 form[method] \uB97C \uC4F0\uBA74, method \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uB97C \uAC00\uC9C0\uB294 &lt;form&gt; \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uCC3E\uB294\uB2E4. input[type=text] type \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uC758 \uAC12\uC744 text\uB85C \uAC00\uC9C0\uB294 input \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uCC3E\uB294\uB2E4.</p><ul><li>\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC2DC\uC791 \uBB38\uC790\uC5F4 \uCC3E\uAE30 div[title^=my] my\uB85C \uC2DC\uC791\uD558\uB294 title \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uC758 div \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uCC3E\uB294\uB2E4.</li><li>\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uB05D \uBB38\uC790\uC5F4 \uCC3E\uAE30 <code>a[href$=.pdf] pdf\uB97C \uCC38\uC870\uD558\uB294 \uB9C1\uD06C\uB97C \uAC00\uC838\uC628\uB2E4.($=\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC12\uC774 \uB05D\uB098\uB294 \uBB38\uC790\uC5F4\uC744 \uC9C0\uC815\uD558\uB294 \uAC83\uC774\uB2E4.)</code></li><li>\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC911\uAC04 \uBB38\uC790\uC5F4 \uCC3E\uAE30 a[href*=<a href="http://jquery.com" target="_blank" rel="noopener noreferrer">jquery.com`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a>] \uC598\uB97C \uC911\uAC04\uC73C\uB85C \uAC16\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uAC00\uC838\uC628\uB2E4.</li></ul><p>&quot;\uCEE8\uD14C\uC774\uB108 \uC140\uB809\uD130&quot; li:has(a) li\uC5D8\uB9AC\uBA3C\uD2B8 \uC911 a \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uAC00\uC9C0\uB294 \uC560\uB97C \uCC3E\uB294\uB2E4.</p><ul><li>li a \uB294 li \uC548\uC5D0 \uC788\uB294 a\uB97C \uCC3E\uC73C\uB77C\uB294 \uAC70\uACE0 li:has(a)\uB294 a\uB97C \uAC00\uC9C0\uB294 li\uB97C \uCC3E\uC73C\uB77C\uB294 \uAC70\uC784</li></ul><h3 id="_2-1-3-\u110B\u1171\u110E\u1175\u1105\u1169-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-1-3-\u110B\u1171\u110E\u1175\u1105\u1169-\u1109\u1165\u11AB\u1110\u1162\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.1.3 \uC704\uCE58\uB85C \uC120\uD0DD\uD558\uAE30</h3><pre><code>a:first 
\uCCAB\uBC88\uC9F8 a \uC5D8\uB9AC\uBA3C\uD2B8\uC640 \uC77C\uCE58\uD55C\uB2E4.

p:odd \uBAA8\uB4E0 \uD640\uC218 \uBB38\uB2E8
p:even \uBAA8\uB4E0 \uC9DD\uC218 \uBB38\uB2E8

li:last-child \uB9C8\uC9C0\uB9C9 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4.
\u203Bli\uAC00 \uC790\uC2DD\uC778 \uAC83\uC774\uB2E4.

:first               = \uD398\uC774\uC9C0\uC5D0\uC11C \uCC98\uC74C\uB098\uC624\uB294 \uC5D8\uB9AC\uBA3C\uD2B8
:last                = \uB9C8\uC9C0\uB9C9\uC5D0 \uC788\uB294 \uC5D8\uB9AC\uBA3C\uD2B8
:first-child         = \uCCAB\uBC88\uC9F8 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8
:last-child          = \uB9C8\uC9C0\uB9C9 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8
:only-child          = \uD615\uC81C\uAC00 \uC5C6\uB294 \uC5D8\uB9AC\uBA3C\uD2B8
:nth-child(n)        = n\uBC88\uC9F8 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8 nth-child(2) \uBA74 \uB450\uBC88\uC9F8 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8\uC774\uB2E4.
:nth-child(even|odd) = \uC9DD\uC218\uBC88\uC9F8, \uD640\uC218\uBC88\uC9F8 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8
:nth-child(Xn+Y)     = \uACF5\uC2DD\uC5D0 \uB530\uB978 \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8 \uC608\uB97C\uB4E4\uC5B4 (3n+3) 3\uC758 \uBC30\uC218\uC5D0 3\uBC88\uC9F8 \uD6C4\uC5D0 \uC788\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC758\uBBF8\uD568
:even / :odd         = \uD398\uC774\uC9C0 \uC804\uCCB4\uC758 \uC9DD\uC218/ \uD640\uC218 \uBC88\uC9F8 \uC5D8\uB9AC\uBA3C\uD2B8
:eq(n)               = n\uBC88\uC9F8 \uC77C\uCE58\uD558\uB294 \uC5D8\uB9AC\uBA3C\uD2B8 \uCC3E\uC74C
:gt(n)               = n\uBC88\uC9F8 \uC5D8\uB9AC\uBA3C\uD2B8\uB294 \uD3EC\uD568\uD558\uC9C0 \uC54A\uACE0 \uADF8 \uD6C4\uC758 \uC5D8\uB9AC\uBA3C\uD2B8 \uCC3E\uC74C
:lt(n)               = n\uBC88\uC9F8 \uC5D8\uB9AC\uBA3C\uD2B8\uB294 \uD3EC\uD568\uD558\uC9C0 \uC54A\uACE0 \uADF8 \uC804\uC758 \uC5D8\uB9AC\uBA3C\uD2B8 \uCC3E\uC74C
</code></pre><h3 id="_2-1-4-jquery-\u110C\u1165\u11BC\u110B\u1174-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-1-4-jquery-\u110C\u1165\u11BC\u110B\u1174-\u1109\u1166\u11AF\u1105\u1166\u11A8\u1110\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.1.4 jQuery \uC815\uC758 \uC140\uB809\uD130 \uC0AC\uC6A9\uD558\uAE30</h3><pre><code>:animated        = \uD604\uC7AC \uC560\uB2C8\uBA54\uC774\uC158\uC774 \uC801\uC6A9\uB418\uACE0 \uC788\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4.
:button          = \uBAA8\uB4E0 \uBC84\uD2BC\uC744 \uC120\uD0DD\uD55C\uB2E4(input[type=submit], input[type=reset], input[type=button], button).
:checkbox        = \uCCB4\uD06C\uBC15\uC2A4 \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4.
:checked         = \uC120\uD0DD\uB41C \uCCB4\uD06C\uBC15\uC2A4\uB098 \uB77C\uB514\uC624 \uBC84\uD2BC\uB9CC\uC744 \uC120\uD0DD\uD55C\uB2E4(CSS\uC5D0\uC11C \uC9C0\uC6D0). 
:contains(foo)   = \uD14D\uC2A4\uD2B8 foo\uB97C \uD3EC\uD568\uD558\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4.
:disabled        = \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uBE44\uD65C\uC131\uD654 \uC0C1\uD0DC\uC778 \uBAA8\uB4E0 \uD3FC \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4(CSS\uC5D0\uC11C \uC9C0\uC6D0).
:enabled         = \uC778\uD130\uD398\uC774\uC2A4\uC5D0\uC11C \uD65C\uC131\uD654 \uC0C1\uD0DC\uC778 \uBAA8\uB4E0 \uD3FC \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4(CSS\uC5D0\uC9C0\uC6D0).
:file            = \uBAA8\uB4E0 \uD30C\uC77C \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4(input[type=file]).
:header          = \uD5E4\uB354 \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4. \uC608\uB97C \uB4E4\uC5B4&lt;h1&gt;\uBD80\uD130 &lt;h6&gt;\uAE4C\uC9C0\uC758 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4.
:hidden          = \uAC10\uCDB0\uC9C4 \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4.
:image           = \uD3FC \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD55C\uB2E4(input[type=image]).
:input           = \uD3FC \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4(input, select, textarea, button).
:not(filter)     = \uD544\uD130\uC758 \uAC12\uC744 \uBC18\uB300\uB85C \uBCC0\uACBD\uD55C\uB2E4.
:parent\uBE48        = \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC81C\uC678\uD558\uACE0, \uD14D\uC2A4\uD2B8\uB3C4 \uD3EC\uD568\uD574\uC11C \uC790\uC2DD \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uAC00\uC9C0\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC120\uD0DD\uD55C\uB2E4.
:password        = \uD328\uC2A4\uC6CC\uB4DC \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4(input[type=password]).
:radio           = \uB77C\uB514\uC624 \uBC84\uD2BC \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4(input[type=radio]).
:reset           = \uB9AC\uC14B \uBC84\uD2BC\uC744 \uC120\uD0DD\uD55C\uB2E4(input[type=reset] \uC774\uB098 button[type=reset]).
:selected        = \uC120\uD0DD\uB41C \uC5D8\uB9AC\uB9CC\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4.
:submit          = \uC804\uC1A1 \uBC84\uD2BC\uC744 \uC120\uD0DD\uD55C\uB2E4(button[type=submit] \uC774\uB098 input[type=submit]).
:text            = \uD14D\uC2A4\uD2B8 \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4(input[type=text]).
:visible         = \uBCF4\uC774\uB294(visible) \uC5D8\uB9AC\uBA3C\uD2B8\uB9CC \uC120\uD0DD\uD55C\uB2E4.

\uC911\uCCA9 \uC0AC\uC6A9\uC774 \uAC00\uB2A5\uD558\uB2E4.


** :not \uD544\uD130\uB77C\uB294 \uAC83\uB3C4 \uC788\uB2E4.
</code></pre><h2 id="_2-2-\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-html-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-2-\u1109\u1162\u1105\u1169\u110B\u116E\u11AB-html-\u1109\u1162\u11BC\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.2 \uC0C8\uB85C\uC6B4 HTML \uC0DD\uC131\uD558\uAE30</h2><p><span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo stretchy="false">(</mo><mi mathvariant="normal">&quot;</mi><mi mathvariant="normal">&quot;</mi><mo stretchy="false">)</mo><mtext>\uC548\uC5D0</mtext><mi mathvariant="normal">\u2018</mi><mi mathvariant="normal">\u2018</mi><mi mathvariant="normal">\u2018</mi></mrow><annotation encoding="application/x-tex">(&quot;&quot;) \uC548\uC5D0 \`\`\`</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="${serverRenderer.ssrRenderStyle({ "height": "1em", "vertical-align": "-0.25em" })}"></span><span class="mopen">(</span><span class="mord">&quot;&quot;</span><span class="mclose">)</span><span class="mord hangul_fallback">\uC548\uC5D0</span><span class="mord">\u2018\u2018\u2018</span></span></span></span>(&quot;`);
  _push(serverRenderer.ssrRenderComponent(_component_DIV, null, {
    default: vue.withCtx((_2, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` \uC548\uB155\uD558\uC138\uC694 `);
      } else {
        return [
          vue.createTextVNode(" \uC548\uB155\uD558\uC138\uC694 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`&quot;)\`\`\`</p><h2 id="_2-3-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-3-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.3 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uAD00\uB9AC\uD558\uAE30</h2><h3 id="_2-3-1-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1174-\u110F\u1173\u1100\u1175-\u1100\u1167\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-3-1-\u1112\u116A\u11A8\u110C\u1161\u11BC\u1103\u116C\u11AB-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1174-\u110F\u1173\u1100\u1175-\u1100\u1167\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.3.1 \uD655\uC7A5\uB41C \uC9D1\uD569\uC758 \uD06C\uAE30 \uACB0\uC815\uD558\uAE30</h3><p>\uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569\uC740 \uBC30\uC5F4\uACFC \uC720\uC0AC\uD568. \uADF8\uB7EC\uBBC0\uB85C length \uD504\uB85C\uD37C\uD2F0\uB97C \uC9C0\uC6D0\uD558\uBA70 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uAC2F\uC218 \uC815\uBCF4\uB97C \uC54C \uC218 \uC788\uB2E4. \uAC19\uC740 \uC815\uBCF4\uB97C \uBC18\uD658\uD558\uB294 .size() \uBA54\uC11C\uB4DC\uB3C4 \uC788\uB2E4. a.size()\uB97C \uC2E4\uD589\uD574\uBCF4\uB2C8 \uBB38\uC11C\uB0B4\uC758 &lt;a&gt; \uAC2F\uC218 4\uAC1C\uB97C \uBC18\uD658\uD574\uC8FC\uC5C8\uB2E4.</p><h3 id="_2-3-2-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1166\u1109\u1165-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1112\u116C\u11A8\u1103\u1173\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-3-2-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1166\u1109\u1165-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1112\u116C\u11A8\u1103\u1173\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.3.2 \uD655\uC7A5 \uC9D1\uD569\uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8 \uD68D\uB4DD\uD558\uAE30</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span>img<span class="token punctuation">[</span>alt<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC744 \uC0AC\uC6A9\uD558\uBA74 alt \uC18D\uC131\uC744 \uAC00\uC9C0\uACE0 \uC788\uB294 \uCCAB\uBC88\uC9F8 \uC774\uBBF8\uC9C0\uB97C \uAC00\uC838\uC628\uB2E4. get \uC744\uC368\uB3C4 \uB41C\uB2E4. \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD558\uACE0 \uC2F6\uB2E4\uBA74...</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img[alt]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC778\uB371\uC2A4\uB97C \uC368\uC11C \uC778\uB371\uC2A4 \uBC88\uD638\uB3C4 \uC54C \uC218 \uC788\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> n <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img#verdana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_2-3-3-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110C\u1162\u1111\u1167\u11AB\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-3-3-\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110C\u1162\u1111\u1167\u11AB\u1109\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.3.3 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC7AC\uD3B8\uC131\uD558\uAE30</h3><h4 id="\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1166-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1166-\u1103\u1161\u1105\u1173\u11AB-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uD655\uC7A5 \uC9D1\uD569\uC5D0 \uB2E4\uB978 \uC5D8\uB9AC\uBA3C\uD2B8 \uCD94\uAC00\uD558\uAE30</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img[alt]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;img[title&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>add() \uBA54\uC11C\uB4DC\uB97C \uD1B5\uD574 \uB17C\uB9AC\uD569\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uB2E4. $(&#39;img[alt],img[title]&#39;) ,(\uCF64\uB9C8) \uB97C \uD1B5\uD574\uC11C\uB3C4 \uB17C\uB9AC\uD569\uC744 \uAD6C\uD604\uD560 \uC218 \uC788\uB2E4. \uADF8\uB7EC\uB098 \uC774\uB7F4 \uACBD\uC6B0 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uCD94\uAC00\uD560 \uB54C\uB294 \uBCC4\uB85C\uC784.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img[alt]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;thickBorder&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;img[title]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;seeThrough&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB97C \uC0AC\uC6A9\uD560 \uACBD\uC6B0 alt \uC18D\uC131\uC744 \uAC00\uC9C4 \uC560\uB97C \uAD75\uAC8C \uCE60\uD558\uACE0 alt\uC640 title \uC18D\uC131\uC744 \uAC00\uC9C4 \uC560 \uBAA8\uB450 \uD22C\uBA85\uD558\uAC8C \uB9CC\uB4E4\uACA0\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><h4 id="\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1103\u1161\u1103\u1173\u11B7\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8-\u1103\u1161\u1103\u1173\u11B7\u1100\u1175" aria-hidden="true">#</a> \uD655\uC7A5 \uC9D1\uD569 \uB2E4\uB4EC\uAE30</h4><p>not() \uBA54\uC11C\uB4DC\uB294 \uB17C\uB9AC \uBD80\uC815\uC774 \uAC00\uB2A5\uD55C \uBA54\uC11C\uB4DC\uC774\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img[title]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">not</span><span class="token punctuation">(</span><span class="token string">&#39;[title*=puppy]&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uD560 \uACBD\uC6B0 title\uC744 \uAC00\uC9C0\uB294 \uC560\uC911 puppy \uB97C \uAC00\uC9C0\uB294 \uC560\uB294 \uBE7C\uB77C\uB294 \uB73B\uC774\uB2E4. filter(\uC870\uAC74) \uD574\uB2F9 \uC870\uAC74\uC744 \uB9CC\uC871\uD558\uBA74 \uD544\uD130\uB9C1\uD574\uB0B8\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img[title]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;seeThrough&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">&#39;[title*=puppy]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addClass</span><span class="token punctuation">(</span><span class="token string">&#39;thickBorder&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1174-\u1107\u116E\u1107\u116E\u11AB\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110B\u1165\u11AE\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1174-\u1107\u116E\u1107\u116E\u11AB\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110B\u1165\u11AE\u1100\u1175" aria-hidden="true">#</a> \uD655\uC7A5 \uC9D1\uD569\uC758 \uBD80\uBD84\uC9D1\uD569 \uC5BB\uAE30</h4><p>slice(begin, end) \uB77C\uB294 \uBA54\uC11C\uB4DC\uB97C\uC0AC\uC6A9\uD558\uBA74 \uC5F0\uC18D\uB41C \uBD80\uBD84\uC744 \uC798\uB77C\uC11C \uC0C8\uB85C\uC6B4 \uC9D1\uD569\uC73C\uB85C \uBC18\uD658\uD55C\uB2E4. $(&#39;*&#39;).slice(2,3); \uD398\uC774\uC9C0 \uC804\uCCB4\uC5D0\uC11C \uC138\uBC88\uC9F8 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uB2F4\uC740 \uC0C8\uB85C\uC6B4 \uC9D1\uD569\uC744 \uBC18\uD658\uD55C\uB2E4.</p><h4 id="\u1100\u116A\u11AB\u1100\u1168\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1162-\u1112\u116A\u11A8\u110C\u1161\u11BC\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110B\u1165\u11AE\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u116A\u11AB\u1100\u1168\u1105\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1162-\u1112\u116A\u11A8\u110C\u1161\u11BC\u110C\u1175\u11B8\u1112\u1161\u11B8-\u110B\u1165\u11AE\u1100\u1175" aria-hidden="true">#</a> \uAD00\uACC4\uB97C \uC774\uC6A9\uD574 \uD655\uC7A5\uC9D1\uD569 \uC5BB\uAE30</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>children() - \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uACE0\uC720\uD55C \uC790\uC2DD\uC73C\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
contents() - \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uCF58\uD150\uCE20\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658. \uD14D\uC2A4\uD2B8 \uB178\uB4DC\uB3C4 \uD3EC\uD568\uB418\uBA70 \uC8FC\uB85C &lt;iframe&gt; \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uCF58\uD150\uCE20\uB97C \uC5BB\uACE0\uC790 \uC0AC\uC6A9
next() - \uD655\uC7A5 \uC9D1\uD569 \uB0B4\uC758 \uAC01 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uBC14\uB85C \uB2E4\uC74C\uC5D0 \uB098\uC624\uB294 \uD615\uC81C\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
nextAll() - \uD655\uC7A5 \uC9D1\uD569 \uB0B4\uC758 \uAC01 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uB2E4\uC74C\uC5D0 \uB098\uC624\uB294 \uBAA8\uB4E0 \uD615\uC81C\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
parent() - \uD655\uC7A5 \uC9D1\uD569 \uB0B4\uC5D0 \uC788\uB294 \uBAA8\uB4E0 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uBC14\uB85C \uC704 \uBD80\uBAA8\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
parents() - \uBAA8\uB4E0 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uC870\uC0C1\uC73C\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658. \uBC14\uB85C \uC704 \uBD80\uBAA8\uC640 \uC0C1\uC704\uC758 \uBAA8\uB4E0 \uC870\uC0C1\uC774 \uD3EC\uD568\uB418\uC9C0\uB9CC \uBB38\uC11C \uB8E8\uD2B8(document root)\uB294 \uD3EC\uD568\uB418\uC9C0 \uC54A\uB294\uB2E4.
prev() - \uD655\uC7A5 \uC9D1\uD569 \uB0B4\uC758 \uAC01 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uBC14\uB85C \uC774\uC804\uC5D0 \uB098\uC624\uB294 \uD615\uC81C\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
prevAll() - \uD655\uC7A5 \uC9D1\uD569 \uB0B4\uC758 \uAC01 \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8 \uC774\uC804\uC5D0 \uB098\uC624\uB294 \uBAA8\uB4E0 \uD615\uC81C\uB85C \uAD6C\uC131\uB41C \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
siblings() - \uD655\uC7A5 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uBAA8\uB4E0 \uD615\uC81C\uB97C \uD3EC\uD568\uD558\uB294 \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
find(selector) - \uC6D0\uBCF8\uC758 \uBAA8\uB4E0 \uC5D8\uB9AC\uBA3C\uD2B8 \uC911 \uC804\uB2EC\uB41C \uC140\uB809\uD130 \uD45C\uD604\uC2DD\uACFC \uC77C\uCE58\uD558\uB294 \uC5D8\uB9AC\uBA3C\uD2B8\uB85C \uAD6C\uC131\uB41C \uC0C8\uB85C\uC6B4 \uD655\uC7A5 \uC9D1\uD569\uC744 \uBC18\uD658
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1100\u1175\u1110\u1161-\u1107\u1161\u11BC\u1107\u1165\u11B8\u1103\u1173\u11AF" tabindex="-1"><a class="header-anchor" href="#\u1112\u116A\u11A8\u110C\u1161\u11BC-\u110C\u1175\u11B8\u1112\u1161\u11B8\u110B\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u1102\u1173\u11AB-\u1100\u1175\u1110\u1161-\u1107\u1161\u11BC\u1107\u1165\u11B8\u1103\u1173\u11AF" aria-hidden="true">#</a> \uD655\uC7A5 \uC9D1\uD569\uC744 \uC774\uC6A9\uD558\uB294 \uAE30\uD0C0 \uBC29\uBC95\uB4E4</h4><p>find() \uBA54\uC11C\uB4DC\uB294 \uD655\uC7A5 \uC9D1\uD569\uC5D0\uC11C \uC804\uB2EC\uB41C \uC140\uB809\uD130 \uD45C\uD604\uC2DD\uC73C\uB85C \uCC3E\uC740 \uC560\uB4E4\uC744 \uC0C8\uB85C\uC6B4 \uC9D1\uD569\uC73C\uB85C \uBC18\uD658\uD55C\uB2E4. $() \uB791 \uBCC4 \uB2E4\uB97C\uBC14 \uC5C6\uC74C. is() \uBA54\uC11C\uB4DC\uB294 \uC140\uB809\uD130 \uD45C\uD604\uC2DD\uC73C\uB85C \uCC3E\uC544\uC9C0\uBA74 true\uB97C \uBC18\uD658\uD55C\uB2E4.</p><h3 id="_2-3-6-jquery-\u110E\u1166\u110B\u1175\u11AB-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_2-3-6-jquery-\u110E\u1166\u110B\u1175\u11AB-\u1100\u116A\u11AB\u1105\u1175\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 2.3.6 jQuery \uCCB4\uC778 \uAD00\uB9AC\uD558\uAE30</h3><pre><code>end()\uBA54\uC11C\uB4DC\uB97C \uD1B5\uD574 jQuery \uCCB4\uC778\uC744 \uB04A\uACE0 \uCD08\uAE30 \uD655\uC7A5 \uC9D1\uD569\uC73C\uB85C \uB3CC\uC544\uAC04\uB2E4\uACE0 \uBCF4\uBA74 \uB41C\uB2E4.
\uC608\uB97C\uB4E4\uC5B4 
$(&#39;img&#39;).clone().appendTo(&#39;#someWhere&#39;).addClass(&#39;beenCloned&#39;)
\u203B .clone() \uBA54\uC11C\uB4DC\uB294 \uBCF5\uC0AC\uBCF8\uC744 \uB9CC\uB4E4\uC5B4\uC8FC\uB294 \uBA54\uC11C\uB4DC\uC774\uB2E4.
\uC774\uB807\uAC8C \uD558\uBA74 \uBCF5\uC0AC\uBCF8 \uC774\uBBF8\uC9C0\uC5D0 \uD074\uB798\uC2A4\uAC00 \uCD94\uAC00\uB418\uB294 \uCF54\uB4DC\uAC00 \uB41C\uB2E4.
\uADF8\uB7F0\uB370 \uBCF5\uC0AC\uBCF8\uC740 \uBCF5\uC0AC\uBCF8\uB300\uB85C \uB9CC\uB4E4\uACE0 \uADF8 \uC6D0\uBCF8 \uC774\uBBF8\uC9C0\uC5D0 \uD074\uB798\uC2A4 \uD655\uC7A5\uC744 \uC6D0\uD558\uB294 \uACBD\uC6B0 \uC911\uAC04\uC5D0 end()\uB97C \uB123\uC5B4\uC8FC\uC5B4 \uB04A\uC5B4\uC900\uB2E4.
$(&#39;img&#39;).clone().appendTo(&#39;#someWhere&#39;).end().addClass(&#39;beenCloned&#39;)
</code></pre></div>`);
}
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/jQuery/2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.html.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
var _2_______________________html = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["ssrRender", _sfc_ssrRender$A], ["__file", "2\uC7A5 \uAE30\uB2A5\uC774 \uD655\uC7A5\uB41C \uC5D8\uB9AC\uBA3C\uD2B8 \uC9D1\uD569 \uC0DD\uC131\uD558\uAE30.html.vue"]]);
var _2_______________________html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _2_______________________html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$z = {};
function _sfc_ssrRender$z(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="_3\u110C\u1161\u11BC-jquery\u1105\u1169-\u1111\u1166\u110B\u1175\u110C\u1175\u110B\u1166-\u1109\u1162\u11BC\u1106\u1167\u11BC-\u1107\u116E\u11AF\u110B\u1165\u1102\u1165\u11C2\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3\u110C\u1161\u11BC-jquery\u1105\u1169-\u1111\u1166\u110B\u1175\u110C\u1175\u110B\u1166-\u1109\u1162\u11BC\u1106\u1167\u11BC-\u1107\u116E\u11AF\u110B\u1165\u1102\u1165\u11C2\u1100\u1175" aria-hidden="true">#</a> 3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30</h1><p>DHTML : Dynamic HTML \uB3D9\uC801 HTML\uC774\uB780 \uB73B\uC774\uBA70 \uADF8\uB0E5 \uCEE8\uD150\uCE20\uB9CC \uCD9C\uB825\uD574\uC8FC\uB294 \uD398\uC774\uC9C0\uAC00 \uC544\uB2CC, \uC720\uC800\uB85C\uBD80\uD130 \uC815\uBCF4\uB97C \uBC1B\uC544\uC640\uC11C \uC815\uBCF4\uB97C \uAC00\uC9C0\uACE0 \uC591\uBC29\uD5A5 \uC0C1\uD638\uC791\uC6A9\uC744 \uD558\uB294 \uD398\uC774\uC9C0\uB97C \uC758\uBBF8\uD55C\uB2E4.</p><p>HTML, CSS, javascript 3\uAC00\uC9C0 \uC5B8\uC5B4\uB85C \uAD6C\uC131\uD55C\uB2E4\uACE0 \uBCF4\uBA74 \uB418\uB294\uB370</p><p>3\uC7A5\uC5D0\uC11C\uB294 jQuery\uB97C \uC0AC\uC6A9\uD574 \uB3D9\uC801 \uC6F9\uD398\uC774\uC9C0\uB97C \uAD6C\uC131\uD558\uB294 \uBC29\uBC95\uC744 \uBCF8\uACA9\uC801\uC73C\uB85C \uC54C\uC544\uBCF8\uB2E4.</p><h2 id="_3-1-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175\u110B\u116A-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-1-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175\u110B\u116A-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.1 \uC5D8\uB9AC\uBA3C\uD2B8 \uD504\uB85C\uD37C\uD2F0\uC640 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC870\uC791\uD558\uAE30</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myImage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\uC774\uBBF8\uC9C0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>someClass<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\uC774\uBBF8\uC9C0\uB2E4.<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uD0DC\uADF8\uBA85 : img \uB9C8\uD06C\uC5C5(\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8) : id, src, alt, class, title \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uC5D0 \uC0C1\uC751\uD558\uB294 \uD504\uB85C\uD37C\uD2F0\uB97C &quot;\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uD504\uB85C\uD37C\uD2F0&quot;\uB77C \uBD80\uB974\uAE30\uB85C \uD55C\uB2E4.</p><p>\uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uD504\uB85C\uD37C\uD2F0\uC640 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uB294 \uB3D9\uAE30\uD654 \uB41C\uB2E4\uACE0 \uC0DD\uAC01\uD558\uBA74 \uB41C\uB2E4. \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uD504\uB85C\uD37C\uD2F0\uBA85\uC740 \uB300\uBD80\uBD84 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uBA85\uACFC \uC77C\uCE58\uD55C\uB2E4. \uB2E4\uB9CC class \uBA85\uB9CC className\uC774\uB77C\uB294 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uD504\uB85C\uD37C\uD2F0\uBA85\uC744 \uC0AC\uC6A9\uD55C\uB2E4\uACE0\uB9CC \uC8FC\uC758\uD560 \uAC83.</p><h3 id="_3-1-1-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-1-1-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1111\u1173\u1105\u1169\u1111\u1165\u1110\u1175-\u110C\u1169\u110C\u1161\u11A8\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.1.1 \uC5D8\uB9AC\uBA3C\uD2B8 \uD504\uB85C\uD37C\uD2F0 \uC870\uC791\uD558\uAE30</h3><h4 id="each-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#each-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" aria-hidden="true">#</a> each \uCEE4\uB9E8\uB4DC</h4><p>\uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uC77D\uACE0 \uC218\uC815\uD558\uB294 \uCEE4\uB9E8\uB4DC</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;img&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">each</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>alt<span class="token operator">=</span><span class="token string">&#39;\uC544\uC774\uB514\uAC00 &#39;</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">+</span> <span class="token string">&#39;\uC778 image[&#39;</span><span class="token operator">+</span> n <span class="token operator">+</span> <span class="token string">&#39;] \uC774\uB2E4.&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 each\uB97C \uC0AC\uC6A9\uD558\uBA74 \uD574\uB2F9 \uBAA8\uB4E0 \uC5D8\uB9AC\uBA3C\uD2B8 \uD504\uB85C\uD37C\uD2F0\uC5D0 \uC27D\uAC8C \uAC12\uC744 \uC124\uC815\uD560 \uC218 \uC788\uB2E4.</p><h3 id="_3-1-2-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u11B9-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-1-2-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u11B9-\u1100\u1161\u110C\u1167\u110B\u1169\u1100\u1175" aria-hidden="true">#</a> 3.1.2 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC12 \uAC00\uC838\uC624\uAE30</h3><h4 id="attr-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#attr-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" aria-hidden="true">#</a> attr \uCEE4\uB9E8\uB4DC</h4><p>\uC77D\uACE0 \uC4F0\uAE30\uC5D0 \uBAA8\uB450 \uC0AC\uC6A9\uD558\uB294 \uCEE4\uB9E8\uB4DC</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myImage<span class="token punctuation">&quot;</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>image.gif<span class="token punctuation">&quot;</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\uC774\uBBF8\uC9C0<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>someClass<span class="token punctuation">&quot;</span></span> <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\uC774\uBBF8\uC9C0\uB2E4.<span class="token punctuation">&quot;</span></span> <span class="token attr-name">custom</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\uAC12<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uB05D\uC5D0 &#39;custom=\uAC12&#39; \uCD94\uAC00\uD558\uC600\uC74C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;#myImage&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;custom&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774\uD558\uBA74 custom \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC12\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uB2E4.</p><h4 id="_3-1-3-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u11B9-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-1-3-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u11B9-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.1.3 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC12 \uC124\uC815\uD558\uAE30</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">attr</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> value<span class="token punctuation">)</span>

  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">&#39;\uB098\uB294 &#39;</span> <span class="token operator">+</span> index <span class="token operator">+</span> <span class="token string">&#39;\uBC88 \uC5D8\uB9AC\uBA3C\uD2B8\uC774\uACE0 \uB0B4 \uC774\uB984\uC740 &#39;</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">?</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id <span class="token operator">:</span> <span class="token string">&#39;unset&#39;</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;\uC774\uB2E4.&#39;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uAC01 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 title \uAC12\uC744 \uD574\uB2F9 \uD568\uC218\uC758 \uBC18\uD658\uAC12\uC73C\uB85C \uC9C0\uC815\uD558\uACA0\uB2E4\uB294 \uAC83\uC784. \uB9E4\uBC88 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uAC00\uC838\uC62C \uB54C\uB9C8\uB2E4. \uD568\uC218\uB97C \uD638\uCD9C\uD55C\uB2E4.</p><p>\uB450\uBC88\uC9F8 \uBC29\uBC95 \uC5EC\uB7EC \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uC758 \uC774\uB984\uACFC \uAC12\uC744 \uBA85\uC2DC\uD55C\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span>
    <span class="token punctuation">{</span> <span class="token literal-property property">value</span> <span class="token operator">:</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;\uAC12\uC744 \uC785\uB825\uD558\uC138\uC694.&#39;</span><span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-1-4-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-1-4-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.1.4 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uC81C\uAC70\uD558\uAE30</h3><p>removeAttr(name) \uC744 \uC0AC\uC6A9\uD574\uC11C \uD504\uB85C\uD37C\uD2F0 \uAC12\uC744 \uC81C\uAC70\uD560 \uC218\uB294 \uC788\uC73C\uB098 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uAC00 \uC81C\uAC70\uB418\uB294 \uAC83\uC740 \uC544\uB2C8\uB2E4.</p><h3 id="_3-1-5-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u110C\u1175\u1100\u1169-\u1102\u1169\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-1-5-\u110B\u1165\u1110\u1173\u1105\u1175\u1107\u1172\u1110\u1173-\u1100\u1161\u110C\u1175\u1100\u1169-\u1102\u1169\u11AF\u1100\u1175" aria-hidden="true">#</a> 3.1.5 \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8 \uAC00\uC9C0\uACE0 \uB180\uAE30</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;a[href^=http://]&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">attr</span><span class="token punctuation">(</span><span class="token string">&quot;target&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;_blank&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>http:// \uB85C \uC2DC\uC791\uD558\uB294 \uB9C1\uD06C\uC5D0 target \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uB97C _blank\uB85C \uC124\uC815\uD55C\uB2E4.</p><h2 id="_3-2-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-2-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u1107\u1167\u11AB\u1100\u1167\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.2 \uC5D8\uB9AC\uBA3C\uD2B8 \uC2A4\uD0C0\uC77C \uBCC0\uACBD\uD558\uAE30</h2><h3 id="_3-2-1-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1169-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-2-1-\u110F\u1173\u11AF\u1105\u1162\u1109\u1173-\u110E\u116E\u1100\u1161\u1112\u1161\u1100\u1169-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.2.1 \uD074\uB798\uC2A4 \uCD94\uAC00\uD558\uACE0 \uC81C\uAC70\uD558\uAE30</h3><p>class = &quot;someClass anotherClass yetAnotherClass&quot; \uB77C\uACE0 \uD55C\uB2E4\uBA74 \uD074\uB798\uC2A4\uC758 \uC885\uB958\uAC00 3\uAC00\uC9C0\uC778 \uAC83\uC774\uC9C0\uB9CC className \uC548\uC5D0\uB294 \uBC30\uC5F4 \uD615\uD0DC\uB85C 3\uAC00\uC9C0\uAC00 \uB4E4\uC5B4\uAC00\uB294 \uAC83\uC774 \uC544\uB2C8\uB77C \uBB38\uC790\uC5F4 \uC804\uCCB4\uAC00 \uB4E4\uC5B4\uAC00\uAC8C \uB41C\uB2E4\uB294 \uAC83\uC774\uB2E4. \uADF8\uB7EC\uBBC0\uB85C \uD074\uB798\uC2A4\uB97C \uCD94\uAC00\uD558\uACE0 \uC81C\uAC70\uD560 \uB54C\uC5D4 \uCEE4\uB9E8\uB4DC\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC870\uC791\uD55C\uB2E4.</p><h4 id="addclass-name-removeclass-name" tabindex="-1"><a class="header-anchor" href="#addclass-name-removeclass-name" aria-hidden="true">#</a> addClass(name), removeClass(name)</h4><p>\uD074\uB798\uC2A4 name\uC744 \uCD94\uAC00/\uC81C\uAC70 \uD55C\uB2E4. toggleClass(name) \uC744 \uC0AC\uC6A9\uD558\uBA74... class\uC5D0 name \uC774\uB77C\uB294 \uC774\uB984\uC774 \uC788\uB2E4\uBA74 \uC81C\uAC70\uD558\uACE0 \uC5C6\uB2E4\uBA74 \uCD94\uAC00\uD558\uB294 \uBA54\uC11C\uB4DC\uC774\uB2E4.</p><h3 id="_3-2-2-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110B\u1165\u11AE\u1100\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-2-2-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF-\u110B\u1165\u11AE\u1100\u1169-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.2.2 \uC2A4\uD0C0\uC77C \uC5BB\uACE0 \uC124\uC815\uD558\uAE30</h3><h4 id="css-\u1106\u1166\u1109\u1165\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#css-\u1106\u1166\u1109\u1165\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> css()\uBA54\uC11C\uB4DC \uC0AC\uC6A9\uD558\uAE30</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;div.expandable&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">css</span><span class="token punctuation">(</span><span class="token string">&quot;width&quot;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">20</span> <span class="token operator">+</span> <span class="token string">&quot;px&quot;</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>width \uAC12\uC744 \uBCC0\uACBD\uD558\uACE0 \uC2F6\uC744 \uB54C \uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD55C\uB2E4.</p><p>width(), height()\uB294 css(&quot;width&quot;,&quot;500px&quot;) css(&quot;height&quot;,&quot;500px&quot;) \uC640 \uB3D9\uC77C\uD55C \uAC83\uC774\uB2E4.</p><p><code> style.width, style.height\uB294 style \uC5B4\uD2B8\uB9AC\uBDF0\uD2B8\uB97C \uD1B5\uD574 \uC124\uC815\uB418\uC5C8\uC744 \uB54C\uB9CC \uAC12\uC744 \uAC00\uC838\uC62C \uC218 \uC788\uB2E4.</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">&lt;</span>body onresize<span class="token operator">=</span><span class="token string">&quot;report()&quot;</span><span class="token operator">&gt;</span>
<span class="token keyword">function</span> <span class="token function">report</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#display&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">html</span><span class="token punctuation">(</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#testSubject&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">width</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">&#39;x&#39;</span><span class="token operator">+</span><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#testSubject&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">height</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uCF54\uB529\uD558\uBA74 \uAE00\uC758 \uD06C\uAE30\uAC00 \uBC14\uB014\uB54C\uB9C8\uB2E4 report() \uD568\uC218\uB97C \uD638\uCD9C\uD558\uB294\uB370 report \uD568\uC218\uB294 display\uB77C\uB294 \uC544\uC774\uB514\uAC00 \uC788\uB294 \uACF3\uC5D0 \uAE00\uC758 \uD06C\uAE30\uB97C \uCD9C\uB825\uD574\uC8FC\uAC8C \uC791\uC131\uD558\uC600\uB2E4.</p><h3 id="_3-2-3-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1100\u116A-\u1100\u116A\u11AB\u1105\u1167\u11AB\u1103\u116C\u11AB-\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#_3-2-3-\u1109\u1173\u1110\u1161\u110B\u1175\u11AF\u1100\u116A-\u1100\u116A\u11AB\u1105\u1167\u11AB\u1103\u116C\u11AB-\u110B\u1172\u110B\u116D\u11BC\u1112\u1161\u11AB-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" aria-hidden="true">#</a> 3.2.3 \uC2A4\uD0C0\uC77C\uACFC \uAD00\uB828\uB41C \uC720\uC6A9\uD55C \uCEE4\uB9E8\uB4DC</h3><h4 id="hasclass-\u1106\u1166\u1109\u1165\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#hasclass-\u1106\u1166\u1109\u1165\u1103\u1173" aria-hidden="true">#</a> hasClass() \uBA54\uC11C\uB4DC</h4><p><code>$(&quot;p:first&quot;).hasClass(&quot;surpriseMe&quot;)</code></p><p>surpriseMe \uB77C\uB294 \uD074\uB798\uC2A4\uAC00 \uC788\uC73C\uBA74 true\uB97C \uBC18\uD658\uD55C\uB2E4. getClassName\uC774\uB77C\uB294 \uBA54\uC11C\uB4DC\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><h2 id="_3-3-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-3-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u1109\u1165\u11AF\u110C\u1165\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.3 \uC5D8\uB9AC\uBA3C\uD2B8 \uCF58\uD150\uCE20 \uC124\uC815\uD558\uAE30</h2><p>DOM API\uB97C \uC0AC\uC6A9\uD558\uC5EC \uC218\uC815 innerHTML\uC744 \uC0AC\uC6A9\uD558\uC5EC \uC218\uC815</p><h3 id="_3-3-1-html\u1100\u116A-\u1110\u1166\u11A8\u1109\u1173\u1110\u1173-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u1103\u1162\u110E\u1166\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-3-1-html\u1100\u116A-\u1110\u1166\u11A8\u1109\u1173\u1110\u1173-\u110F\u1169\u11AB\u1110\u1166\u11AB\u110E\u1173-\u1103\u1162\u110E\u1166\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.3.1 HTML\uACFC \uD14D\uC2A4\uD2B8 \uCF58\uD150\uCE20 \uB300\uCCB4\uD558\uAE30</h3><h4 id="html-\u1106\u1166\u1109\u1165\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#html-\u1106\u1166\u1109\u1165\u1103\u1173" aria-hidden="true">#</a> html() \uBA54\uC11C\uB4DC</h4><p>html(text) \uB97C \uC791\uC131\uD558\uC5EC html \uCF54\uB4DC\uC758 \uCF58\uD150\uCE20\uB97C \uC218\uC815\uD560 \uC218 \uC788\uB2E4.</p><h4 id="text-\u1106\u1166\u1109\u1165\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#text-\u1106\u1166\u1109\u1165\u1103\u1173" aria-hidden="true">#</a> text() \uBA54\uC11C\uB4DC</h4><p>text() \uBA54\uC11C\uB4DC\uB294 html\uC758 text\uB97C \uACB0\uD569\uD55C \uBB38\uC790\uC5F4\uC744 \uBC18\uD658\uD55C\uB2E4. text(content)\uC5D0\uC11C &#39;&lt;&gt;&#39;\uB97C \uD3EC\uD568\uD55C\uB2E4\uBA74 html \uC5D4\uD2F0\uD2F0\uB85C \uB300\uCCB4\uB41C\uB2E4\uACE0 \uD55C\uB2E4.</p><h3 id="_3-3-2-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175\u110B\u116A-\u110B\u1175\u1103\u1169\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-3-2-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175\u110B\u116A-\u110B\u1175\u1103\u1169\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.3.2 \uC5D8\uB9AC\uBA3C\uD2B8 \uBCF5\uC0AC\uD558\uAE30\uC640 \uC774\uB3D9\uD558\uAE30</h3><h4 id="append-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#append-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" aria-hidden="true">#</a> append() \uCEE4\uB9E8\uB4DC</h4><p>\uB9C8\uC9C0\uB9C9\uC5D0 \uCF58\uD150\uCE20 \uCD94\uAC00 \uAC00\uB2A5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">&#39;&lt;b&gt;\uD14D\uC2A4\uD2B8&lt;/b&gt;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC774\uB807\uAC8C \uCD94\uAC00\uD558\uBA74 \uBAA8\uB4E0 p \uC5D8\uB9AC\uBA3C\uD2B8 \uB4A4\uC5D0</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>b</span><span class="token punctuation">&gt;</span></span>\uD14D\uC2A4\uD2B8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>b</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uAC00 \uBD99\uAC8C \uB41C\uB2E4.</p><p>\uC5D8\uB9AC\uBA3C\uD2B8 \uD558\uB098\uB9CC \uB2E4\uB978 \uC704\uCE58\uB85C \uC774\uB3D9\uC2DC\uD0A4\uAC70\uB098 \uBCF5\uC0AC\uD558\uB824\uBA74 appendTo()\uB97C \uC0AC\uC6A9 appendTo\uC758 \uACBD\uC6B0 \uC5D8\uB9AC\uBA3C\uD2B8\uAC00 \uC5EC\uB7EC\uAC1C\uC77C \uACBD\uC6B0 \uBCF5\uC0AC\uAC00 \uB418\uACE0 \uD558\uB098\uC77C \uACBD\uC6B0\uC5D0\uB294 \uC774\uB3D9 \uB41C\uB2E4.</p><ul><li>prepend(), prependTo() \uC5ED\uC2DC append, appendTo \uC640 \uBE44\uC2B7\uD558\uB098 \uC55E\uC5D0 \uC774\uB3D9,\uBCF5\uC0AC \uC2DC\uD0A4\uB294 \uCEE4\uB9E8\uB4DC\uC774\uB2E4.</li><li>before(), insertBefore()</li><li>after(), insertAfter() \uC5ED\uC2DC \uBE44\uC2B7\uD55C\uACBD\uC6B0\uB2E4.</li></ul><ul><li>\uCC38\uACE01</li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>radio<span class="token punctuation">&quot;</span></span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>command<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>prependTo<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC740 input \uC5D8\uB9AC\uBA3C\uD2B8\uAC00 \uC788\uACE0 \uD574\uB2F9 \uB77C\uB514\uC624\uBC84\uD2BC \uC911 \uC120\uD0DD\uB41C \uC560\uB97C \uAC00\uC9C0\uACE0 \uC624\uACE0 \uC2F6\uB2E4\uACE0\uD558\uBA74 <code>$(&#39;input[name=command]:checked&#39;)</code> \uB97C \uC0AC\uC6A9\uD558\uBA74 name=command\uC778 \uBAA8\uB4E0 \uB77C\uB514\uC624 \uBC84\uD2BC \uC911 \uCCB4\uD06C \uB41C \uC560\uB97C \uAC00\uC9C0\uACE0 \uC624\uB294 \uBC29\uBC95\uC774\uB2E4. \uB4A4\uC5D0 .val()\uC744 \uC785\uB825\uD558\uC5EC value \uAC12\uC744 \uAC00\uC9C0\uACE0 \uC654\uB2E4.</p><ul><li>\uCC38\uACE02<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> command <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;input[name=command]:checked&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">val</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#car&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span>command<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token string">&#39;#targets p:first&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>\uB97C \uBCF4\uBA74<br> commad \uAC12\uC73C\uB85C \uCCB4\uD06C\uB41C \uB77C\uB514\uC624 \uBC84\uD2BC\uC758 \uAC12\uC744 \uAC00\uC838\uC628 \uD6C4 \uAC54\uB97C command\uC5D0 \uB2F4\uC558\uB2E4.<br> \uADF8 \uD6C4 \uC140\uB809\uD130\uB85C &#39;#car&#39;\uB77C\uB294 id\uB97C \uAC00\uC9C4 \uC790\uB3D9\uCC28 \uC774\uBBF8\uC9C0\uB97C \uC120\uD0DD\uD55C \uD6C4 command\uC758 \uBB38\uC790\uC5F4\uC744 []\uC5D0 \uB123\uC5B4 \uD574\uB2F9 \uBA54\uC11C\uB4DC\uB97C \uBD88\uB7EC\uC654\uB2E4.<br> \uADF8\uB7EC\uBA74<br><code>$(&#39;#flower&#39;)[insertBefore](&#39;#targets p&#39;)</code> \uC704\uC640 \uAC19\uC774 command \uB300\uC2E0\uC5D0 insertBefore\uB97C \uADF8\uB300\uB85C \uC785\uB825\uC2DC\uCF1C \uC8FC\uC5B4 insertBefore\uB97C \uADF8\uB300\uB85C \uC2E4\uD589\uC2DC\uD0A4\uB294 \uAC74 \uC548\uB420\uAE4C\uD558\uC5EC<br> \uD574\uBD24\uB294\uB370 \uC548\uB41C\uB2E4. \uC65C\uADF8\uB7F0\uC9C0 \uC0DD\uAC01\uD574\uBCF4\uB2C8<br> $(&#39;#flower&#39;)\uB97C \uD1B5\uD574\uC11C &#39;#flower&#39; \uC544\uC774\uB514\uB97C \uAC00\uC9C4 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uAC00\uC838\uC654\uB2E4.<br> \uBCF4\uD1B5 \uBA54\uC11C\uB4DC\uB97C \uBD88\uB7EC\uC62C \uB54C\uB294 . \uC744 \uC368\uC11C \uD638\uCD9C\uD574\uC900\uB2E4.<br> \uC790\uBC14\uC2A4\uD06C\uB9BD\uD2B8\uC5D0\uC120 []\uB97C \uC0AC\uC6A9\uD574\uC11C\uB3C4 \uAC1D\uCCB4\uC758 \uBA54\uC11C\uB4DC\uB97C \uD638\uCD9C\uD560 \uC218 \uC788\uB294\uB370<br> \uC774 \uB54C, [\uBA54\uC11C\uB4DC \uBA85]\uC774\uB77C\uAE30 \uBCF4\uB2E4\uB294 [&quot;\uBA54\uC11C\uB4DC \uBA85&quot;] \uC774\uB7F0\uC2DD\uC774\uB2E4.<br> \uD070 \uB530\uC634\uD45C\uB97C \uC368\uC918\uC57C\uD558\uB294 \uC774\uC720\uB294 []\uC774\uB807\uAC8C \uD574\uC11C \uBD88\uB7EC\uC62C \uB54C\uB294 \uBCF4\uD1B5 \uC911\uAC04\uC5D0 \uACF5\uBC31\uC774 \uC788\uB294 \uACBD\uC6B0\uAE30 \uB54C\uBB38\uC5D0 \uBB38\uC790\uC5F4\uB85C \uBD88\uB7EC\uC640\uC57C\uD574\uC11C \uADF8\uB7F0 \uAC83\uC774\uB2E4.</li></ul><h3 id="_3-3-3-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1100\u1161\u11B7\u110A\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-3-3-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1100\u1161\u11B7\u110A\u1161\u1100\u1175" aria-hidden="true">#</a> 3.3.3 \uC5D8\uB9AC\uBA3C\uD2B8 \uAC10\uC2F8\uAE30</h3><p>\uD2B9\uC815 \uD074\uB798\uC2A4\uB97C \uAC00\uC9C4 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uAC10\uC2F8\uACE0 \uC2F6\uC744 \uB54C</p><h4 id="wrap-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#wrap-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> wrap() \uCEE4\uB9E8\uB4DC\uB97C \uC0AC\uC6A9</h4><p>$(&quot;a.surprise&quot;).wrap(&quot;<div class="hello"></div>&quot;)</p><p>\uC5D8\uB9AC\uBA3C\uD2B8 \uB9D0\uACE0 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uCF58\uD150\uCE20\uB97C \uAC10\uC2F8\uACE0 \uC2F6\uC744 \uB54C</p><h4 id="wrapinner-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#wrapinner-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> wrapInner() \uCEE4\uB9E8\uB4DC \uC0AC\uC6A9</h4><h3 id="_3-3-4-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-3-4-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u110C\u1166\u1100\u1165\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.3.4 \uC5D8\uB9AC\uBA3C\uD2B8 \uC81C\uAC70\uD558\uAE30</h3><ul><li>remove() \uB97C \uC0AC\uC6A9\uD558\uBA74 \uC5D8\uB9AC\uBA3C\uD2B8\uAC00 \uC81C\uAC70\uAC00 \uB418\uACE0</li><li>empty()\uB97C \uC0AC\uC6A9\uD558\uBA74 content\uAC00 \uC81C\uAC70 \uB428</li></ul><h3 id="_3-3-5-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-3-5-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1107\u1169\u11A8\u1109\u1161\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 3.3.5 \uC5D8\uB9AC\uBA3C\uD2B8 \uBCF5\uC0AC\uD558\uAE30</h3><h4 id="clone-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#clone-\u110F\u1165\u1106\u1162\u11AB\u1103\u1173" aria-hidden="true">#</a> clone() \uCEE4\uB9E8\uB4DC</h4><p>\uBCF5\uC0AC\uBCF8\uC758 \uAC1D\uCCB4\uB97C \uB118\uAE34\uB2E4 \uD574\uC57C\uD558\uB098.. \uC608\uB97C\uB4E4\uC5B4 <code> $(&#39;img&#39;).clone().appendTo(&#39;fieldset.photo&#39;);</code></p><p>\uBAA8\uB4E0 \uC774\uBBF8\uC9C0 \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uBCF5\uC0AC\uBCF8\uC744 \uB9CC\uB4E4\uC5B4 photo \uD074\uB798\uC2A4\uB97C \uAC00\uC9C4 \uBAA8\uB4E0 fieldset \uC5D8\uB9AC\uBA3C\uD2B8\uC5D0 \uB367\uBD99\uC778\uB2E4.</p><h2 id="_3-4-\u1111\u1169\u11B7-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1100\u1161\u11B9-\u1103\u1161\u1105\u116E\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_3-4-\u1111\u1169\u11B7-\u110B\u1166\u11AF\u1105\u1175\u1106\u1165\u11AB\u1110\u1173-\u1100\u1161\u11B9-\u1103\u1161\u1105\u116E\u1100\u1175" aria-hidden="true">#</a> 3.4 \uD3FC \uC5D8\uB9AC\uBA3C\uD2B8 \uAC12 \uB2E4\uB8E8\uAE30</h2><p>form \uC5D8\uB9AC\uBA3C\uD2B8\uB294 \uD2B9\uBCC4\uD55C \uD504\uB85C\uD37C\uD2F0\uB97C \uAC00\uC9C0\uAE30\uC5D0 \uC598\uB294 \uB530\uB85C \uD3B8\uB9AC\uD55C \uD568\uC218\uB97C \uC81C\uACF5\uD55C\uB2E4. \uADF8\uB9AC\uACE0 \uD3FC \uD50C\uB7EC\uADF8\uC778 \uC774\uB77C\uB294 \uC560\uAC00 \uC788\uB294\uB370 \uC598\uB294 \uB354 \uAC15\uB825\uD55C \uAE30\uB2A5\uC744 \uC9C0\uC6D0\uD574\uC900\uB2E8\uB2E4..</p><h4 id="val-\u1106\u1166\u1109\u1165\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#val-\u1106\u1166\u1109\u1165\u1103\u1173" aria-hidden="true">#</a> val() \uBA54\uC11C\uB4DC</h4><p>\uD3FC\uC758 value \uD504\uB85C\uD37C\uD2F0\uB97C \uBC18\uD658\uD55C\uB2E4. \uB2E4\uC911 \uC120\uD0DD \uAC00\uB2A5\uD55C \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uACBD\uC6B0, \uBC18\uD658\uAC12\uC740 \uC120\uD0DD\uB41C \uAC12\uC758 \uBC30\uC5F4\uC774\uB2E4.</p><p>\uC544\uBB34 \uAC83\uB3C4 \uC120\uD0DD\uB418\uC9C0 \uC54A\uC740 \uCCB4\uD06C\uBC15\uC2A4\uB098 \uB77C\uB514\uC624\uBC84\uD2BC\uC758 \uACBD\uC6B0\uB294 undefined\uB97C \uBC18\uD658\uD55C\uB2E4.</p></div>`);
}
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/jQuery/3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30.html.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
var _3__jQuery_______________html = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["ssrRender", _sfc_ssrRender$z], ["__file", "3\uC7A5 jQuery\uB85C \uD398\uC774\uC9C0\uC5D0 \uC0DD\uBA85 \uBD88\uC5B4\uB123\uAE30.html.vue"]]);
var _3__jQuery_______________html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _3__jQuery_______________html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$y = {};
function _sfc_ssrRender$y(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h2 id="_4-1-\u1107\u1173\u1105\u1161\u110B\u116E\u110C\u1165-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#_4-1-\u1107\u1173\u1105\u1161\u110B\u116E\u110C\u1165-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF-\u110B\u1175\u1112\u1162\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> 4.1 \uBE0C\uB77C\uC6B0\uC800 \uC774\uBCA4\uD2B8 \uBAA8\uB378 \uC774\uD574\uD558\uAE30</h2><p>\uBAA8\uC9C8\uB77C \uAE30\uBC18\uC758 \uBE0C\uB77C\uC6B0\uC800 : \uD30C\uC774\uC5B4\uD3ED\uC2A4, \uCE74\uBBF8\uB178<br> \uCD5C\uC2E0 \uD45C\uC900 \uC900\uC218\uD558\uB294 \uBE0C\uB77C\uC6B0\uC800 : \uC0AC\uD30C\uB9AC, \uC624\uD398\uB77C<br> \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC : \uC790\uCCB4 \uD45C\uC900\uC774 \uC788\uC73C\uBA70 \uC790\uC2E0\uB9CC\uC758 \uC778\uD130\uD398\uC774\uC2A4\uB97C \uC0AC\uC6A9</p><p>\uBE0C\uB77C\uC6B0\uC800\uBCC4\uB85C \uC778\uD130\uD398\uC774\uC2A4\uAC00 \uB2EC\uB77C \uBC1C\uC0DD\uD558\uB294 \uC791\uC5C5\uC744 \uC5B4\uB5BB\uAC8C \uCC98\uB9AC\uD574\uC904 \uAC83\uC774\uB0D0.</p><h3 id="_4-1-1-dom-\u1105\u1166\u1107\u1166\u11AF-0-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" tabindex="-1"><a class="header-anchor" href="#_4-1-1-dom-\u1105\u1166\u1107\u1166\u11AF-0-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" aria-hidden="true">#</a> 4.1.1 DOM \uB808\uBCA8 0 \uC774\uBCA4\uD2B8 \uBAA8\uB378</h3><p><code>$(&#39;#vstar&#39;)[0].onmouseover = function(event) {</code></p><p>onmouserover \uC5D0 \uB300\uD55C \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uD574\uB2F9 \uD568\uC218\uB97C \uBD88\uB7EC\uC640\uC11C \uC2E4\uD589\uD55C\uB2E4.</p><h4 id="event-\u110B\u1175\u11AB\u1109\u1173\u1110\u1165\u11AB\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#event-\u110B\u1175\u11AB\u1109\u1173\u1110\u1165\u11AB\u1109\u1173" aria-hidden="true">#</a> Event \uC778\uC2A4\uD134\uC2A4</h4><p>\uADFC\uB370 \uC774\uAC74 jQuery \uC5D0\uC11C\uB9CC \uC788\uB294\uAC8C \uC544\uB2C8\uB77C javascript \uC790\uCCB4\uC801\uC778 \uAE30\uB2A5\uC778\uAC70 \uAC19\uC740\uB370..</p><h4 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1107\u1165\u1107\u1173\u11AF\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1107\u1165\u1107\u1173\u11AF\u1105\u1175\u11BC" aria-hidden="true">#</a> \uC774\uBCA4\uD2B8 \uBC84\uBE14\uB9C1</h4><p>\uBD80\uBAA8\uAE4C\uC9C0 \uC62C\uB77C\uAC00\uBA74\uC11C \uC2E4\uD589\uB41C\uB2E4\uB294 \uAC1C\uB150\uC778\uB370 \uC598\uB3C4 javascript \uAC1C\uB150\uC778 \uAC83 \uAC19\uACE0..</p><h4 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110C\u1165\u11AB\u1111\u1161\u110B\u1174-\u110B\u1167\u11BC\u1112\u1163\u11BC\u1100\u116A-\u1100\u1173-\u110B\u1174\u1106\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110C\u1165\u11AB\u1111\u1161\u110B\u1174-\u110B\u1167\u11BC\u1112\u1163\u11BC\u1100\u116A-\u1100\u1173-\u110B\u1174\u1106\u1175" aria-hidden="true">#</a> \uC774\uBCA4\uD2B8 \uC804\uD30C\uC758 \uC601\uD5A5\uACFC \uADF8 \uC758\uBBF8</h4><p>\uC774\uBCA4\uD2B8 \uBC84\uBE14\uB9C1\uC744 \uB9C9\uACE0 \uC2F6\uB2E4\uBA74?<br> stopPropagation()\uC744 \uD638\uCD9C. - \uD45C\uC900 \uD638\uD658 \uBE0C\uB77C\uC6B0\uC800\uC758 \uACBD\uC6B0<br> \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC\uC5D0\uC11C\uB294 cancelBubble\uC744 \uD638\uCD9C<br> form \uC5D8\uB9AC\uBA3C\uD2B8\uC758 \uACBD\uC6B0 return false\uB97C \uD638\uCD9C\uD558\uC5EC submit\uC744 \uB9C9\uC744 \uC218 \uC788\uB2E4.</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>myForm<span class="token punctuation">&quot;</span></span> <span class="token special-attr"><span class="token attr-name">onsubmit</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span><span class="token value javascript language-javascript"><span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span><span class="token punctuation">&quot;</span></span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-1-2-dom-\u1105\u1166\u1107\u1166\u11AF-2-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" tabindex="-1"><a class="header-anchor" href="#_4-1-2-dom-\u1105\u1166\u1107\u1166\u11AF-2-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" aria-hidden="true">#</a> 4.1.2 DOM \uB808\uBCA8 2 \uC774\uBCA4\uD2B8 \uBAA8\uB378</h3><p>DOM \uB808\uBCA8 0 \uC5D0\uC11C\uB294 \uC774\uBCA4\uD2B8 \uB2F9 \uD578\uB4E4\uB7EC\uB97C \uD558\uB098\uC529 \uBC16\uC5D0 \uD560\uB2F9 \uBABB\uD588\uB2E4.<br> DOM \uB808\uBCA8 2\uC5D0\uC11C\uB294 \uD574\uACB0\uD588\uB2E4.<br> \uC774\uBCA4\uD2B8\uB97C \uD558\uB098 \uC774\uC0C1 \uD560\uB2F9\uD558\uB294 \uBC29\uBC95\uC744 \uC54C\uC544\uBCF4\uBA74..</p><h4 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1112\u1161\u11AF\u1103\u1161\u11BC\u1112\u1161\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1112\u1161\u11AF\u1103\u1161\u11BC\u1112\u1161\u1100\u1175" aria-hidden="true">#</a> \uC774\uBCA4\uD2B8 \uD560\uB2F9\uD558\uAE30</h4><p>addEventListener(eventType, listener, useCapture)</p><ul><li>eventType : \uCC98\uB9AC\uD560 \uC774\uBCA4\uD2B8 on\uC744 \uBE80\uAC83.. (click, mouseover, keydown\uB4F1...)</li><li>listener : \uD578\uB4E4\uB7EC\uB85C \uD560\uB2F9\uD560 \uD568\uC218\uC758 \uCC38\uC870.. (\uC778\uB77C\uC778 \uD568\uC218\uB3C4 \uB428)</li><li>useCapture : \uC774\uBCA4\uD2B8 \uC804\uD30C\uB97C \uC598\uAE30\uD560 \uB54C \uBCFC \uAC83\uC784.. \uC77C\uB2E8 false\uB85C \uC124\uC815\uD558\uAE30..</li></ul><p>\uCF54\uB4DC \uC608\uC2DC</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">$</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> element <span class="token operator">=</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#vstar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// element\uB77C\uB294 \uBCC0\uC218\uC5D0 \uC544\uC774\uB514 \uAC12\uC744 \uD1B5\uD574 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uCC3E\uC544\uC11C \uB123\uC5B4\uC900\uB2E4.</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// \uD574\uB2F9 \uC5D8\uB9AC\uBA3C\uD2B8\uB97C \uBD88\uB7EC\uC640 \uAC70\uAE30\uC5D0 \uB9AC\uC2A4\uB108\uB97C \uB354\uD574\uC900\uB2E4.</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&#39;Whee once!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&#39;Whee twice!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">say</span><span class="token punctuation">(</span><span class="token string">&#39;Whee three times!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uAD6C\uC131\uD558\uBA74 click\uC774\uB77C\uB294 \uC774\uBCA4\uD2B8\uC5D0 3\uAC1C\uC758 \uD568\uC218\uB97C \uBD99\uC5EC\uC900\uAC83\uC774 \uAD6C\uD604\uB41C\uB2E4.</p><h4 id="\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110C\u1165\u11AB\u1111\u1161-usecapture" tabindex="-1"><a class="header-anchor" href="#\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u110C\u1165\u11AB\u1111\u1161-usecapture" aria-hidden="true">#</a> \uC774\uBCA4\uD2B8 \uC804\uD30C (useCapture)</h4><p>\uCEA1\uCC98 \uB2E8\uACC4\uC640 \uBC84\uBE14 \uB2E8\uACC4\uAC00 \uC788\uB294\uB370 \uCEA1\uCC98 \uB2E8\uACC4\uB294 \uC774\uBCA4\uD2B8\uAC00 \uBC1C\uC0DD\uD558\uBA74 \uD574\uB2F9 dom \uB8E8\uD2B8 \uC5D0\uC11C \uC5D8\uB9AC\uBA3C\uD2B8\uB85C \uC804\uD30C\uD558\uB294 \uAC83. \uBC84\uBE14 \uB2E8\uACC4\uB294 \uC774\uBCA4\uD2B8 \uCC98\uB9AC \uD6C4 \uBD80\uBAA8 \uC5D8\uB9AC\uBA3C\uD2B8\uB85C \uC62C\uB824\uBCF4\uB0B4\uB294 \uAC83.</p><p>useCapture \uC18D\uC131\uC744 true\uB85C \uB9CC\uB4E4\uBA74 \uCEA1\uCC98 \uD578\uB4E4\uB7EC\uB85C \uC4F0\uACA0\uB2E4\uB294 \uAC83\uC774\uACE0 useCapture false\uB85C \uB9CC\uB4E4\uBA74 \uBC84\uBE14 \uD578\uB4E4\uB7EC\uB85C \uC4F0\uACA0\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><h3 id="_4-1-3-\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA-\u110B\u1175\u11A8\u1109\u1173\u1111\u1173\u11AF\u1105\u1169\u1105\u1165-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" tabindex="-1"><a class="header-anchor" href="#_4-1-3-\u110B\u1175\u11AB\u1110\u1165\u1102\u1166\u11BA-\u110B\u1175\u11A8\u1109\u1173\u1111\u1173\u11AF\u1105\u1169\u1105\u1165-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" aria-hidden="true">#</a> 4.1.3 \uC778\uD130\uB137 \uC775\uC2A4\uD50C\uB85C\uB7EC \uC774\uBCA4\uD2B8 \uBAA8\uB378</h3><p>\uC778\uD130\uB124 \uC775\uC2A4\uD50C\uB85C\uB7EC\uC5D0 \uB300\uD55C \uC598\uAE30\uC778\uB370.. \uBCC4\uB85C \uC911\uC694\uD558\uC9C0 \uC54A\uC740 \uAC70 \uAC19\uC544\uC11C \uC0DD\uB7B5</p><h2 id="_4-2-jquery-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" tabindex="-1"><a class="header-anchor" href="#_4-2-jquery-\u110B\u1175\u1107\u1166\u11AB\u1110\u1173-\u1106\u1169\u1103\u1166\u11AF" aria-hidden="true">#</a> 4.2 jQuery \uC774\uBCA4\uD2B8 \uBAA8\uB378</h2></div>`);
}
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/jQuery/4\uC7A5 \uC774\uBCA4\uD2B8_\uBAA8\uB4E0 \uAC83\uC758 \uC2DC\uC791.html.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
var _4_______________html = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["ssrRender", _sfc_ssrRender$y], ["__file", "4\uC7A5 \uC774\uBCA4\uD2B8_\uBAA8\uB4E0 \uAC83\uC758 \uC2DC\uC791.html.vue"]]);
var _4_______________html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _4_______________html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$x = {};
function _sfc_ssrRender$x(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="vue-\u110B\u1175\u11AB\u1111\u1173\u1105\u1165\u11AB-\u1100\u1161\u11BC\u110B\u1174-by-\u1109\u1165\u11BC\u110B\u1167\u11BC\u1112\u116E\u11AB" tabindex="-1"><a class="header-anchor" href="#vue-\u110B\u1175\u11AB\u1111\u1173\u1105\u1165\u11AB-\u1100\u1161\u11BC\u110B\u1174-by-\u1109\u1165\u11BC\u110B\u1167\u11BC\u1112\u116E\u11AB" aria-hidden="true">#</a> Vue \uC778\uD504\uB7F0 \uAC15\uC758_by \uC131\uC601\uD6C8</h1><h2 id="\u1100\u116D\u110B\u1172\u11A8-\u110C\u1165\u11BC\u1107\u1169" tabindex="-1"><a class="header-anchor" href="#\u1100\u116D\u110B\u1172\u11A8-\u110C\u1165\u11BC\u1107\u1169" aria-hidden="true">#</a> \uAD50\uC721 \uC815\uBCF4</h2><ul><li>\uAD50\uC721\uBA85 : Vue.js \uC644\uBCBD\uAC00\uC774\uB4DC - \uC2E4\uC2B5\uACFC \uB9AC\uD329\uD1A0\uB9C1\uC73C\uB85C \uBC30\uC6B0\uB294 \uC2E4\uC804 \uAC1C\uB150</li><li>\uC2E0\uCCAD URL : <a href="https://inf.run/ptTX" target="_blank" rel="noopener noreferrer">https://inf.run/ptTX`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></li><li>\uBCF8 \uAC15\uC758\uB294 \uC778\uD504\uB7F0\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 Vue \uB85C\uB4DC\uB9F5\uC758 3\uBC88\uC9F8 \uC2DC\uB9AC\uC988\uC785\uB2C8\uB2E4. (\uCD1D 1~5 Level\uB85C \uB098\uB258\uC5B4\uC838 \uC788\uC73C\uB2C8 \uC790\uC2E0\uC758 \uB808\uBCA8\uC5D0 \uB9DE\uB294 \uAC15\uC758\uBD80\uD130 \uC2DC\uC791\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4.)</li></ul><p><img src="https://cdn.inflearn.com/public/courses/262728/course_cover/e4e95dfd-4e83-4ded-b6be-aa9f2078982e/lv3.png" alt="img" loading="lazy"></p><details><summary>\uCEE4\uB9AC\uD058\uB7FC</summary><div markdown="1"><p>![img]</p></div></details><h2 id="\u1100\u1161\u11BC\u110B\u1174-\u1102\u1162\u110B\u116D\u11BC\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#\u1100\u1161\u11BC\u110B\u1174-\u1102\u1162\u110B\u116D\u11BC\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> \uAC15\uC758 \uB0B4\uC6A9\uC815\uB9AC</h2><p>[Vue\uB0B4\uC6A9\uC815\uB9AC]</p><h2 id="_1-\u1100\u116D\u110B\u1172\u11A8\u110B\u1173\u11AB-\u110B\u1165\u1104\u1162\u11BB\u1102\u1161\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#_1-\u1100\u116D\u110B\u1172\u11A8\u110B\u1173\u11AB-\u110B\u1165\u1104\u1162\u11BB\u1102\u1161\u110B\u116D" aria-hidden="true">#</a> 1) \uAD50\uC721\uC740 \uC5B4\uB560\uB098\uC694?</h2><p>\uAE30\uBCF8\uC801\uC73C\uB85C \uCEA1\uD2F4\uD310\uAD50\uC758 Vue \uAC15\uC758\uB294 \uCCB4\uACC4\uC801\uC778\uB4EF\uD558\uACE0, \uADF8 \uC911 Level3\uAC15\uC758\uB294 Vue\uC758 \uAE30\uCD08\uB97C \uD559\uC2B5\uD558\uB294\uB370 \uB3C4\uC6C0\uC774 \uB9CE\uC774 \uB418\uB294 \uB4EF\uD569\uB2C8\uB2E4. \uC774\uC804\uC5D0\uB294 \uC778\uD130\uB137\uC744 \uB4A4\uC838\uAC00\uBA74\uC11C \uAD6C\uAE00\uB9C1\uC744 \uD1B5\uD574\uC11C\uB9CC \uD559\uC2B5\uC744 \uC9C4\uD589\uD588\uB294\uB370 \uD655\uC2E4\uD788 \uAC15\uC758\uB97C \uB4E3\uACE0\uB098\uB2C8 \uAE30\uCD08\uAC00 \uC7A1\uD788\uB294 \uB290\uB08C\uC774 \uB4E4\uC5C8\uC2B5\uB2C8\uB2E4.</p><h2 id="_2-\u110B\u1165\u1104\u1165\u11AB-\u1107\u116E\u11AB\u1103\u1173\u11AF\u1101\u1166-\u110E\u116E\u110E\u1165\u11AB\u1112\u1161\u1102\u1173\u11AB\u110C\u1175" tabindex="-1"><a class="header-anchor" href="#_2-\u110B\u1165\u1104\u1165\u11AB-\u1107\u116E\u11AB\u1103\u1173\u11AF\u1101\u1166-\u110E\u116E\u110E\u1165\u11AB\u1112\u1161\u1102\u1173\u11AB\u110C\u1175" aria-hidden="true">#</a> 2) \uC5B4\uB5A4 \uBD84\uB4E4\uAED8 \uCD94\uCC9C\uD558\uB294\uC9C0?</h2><p>FrontEnd \uBD84\uC57C \uD2B9\uBCC4\uD788 Vue Framework\uC5D0 \uAD00\uC2EC\uC774 \uC788\uC73C\uBA74\uC11C \uC811\uD574\uBCF4\uAE34 \uD588\uC73C\uB098 \uAE30\uCD08\uAC00 \uBD80\uC871\uD558\uC2E0 \uBD84\uB4E4\uC5D0\uAC8C \uCD94\uCC9C\uD569\uB2C8\uB2E4. (\uAE30\uBCF8\uC801\uC778 html,css,javascript\uC5D0 \uB300\uD55C \uAC1C\uB150\uC740 \uAC00\uC9C0\uACE0 \uC788\uC73C\uC2E0 \uBD84\uB4E4\uC774 \uB4E4\uC73C\uC154\uC57C\uD569\uB2C8\uB2E4.)</p></div>`);
}
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Vue/Vuejs_3\uB808\uBCA8_Reivew.html.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
var Vuejs_3___Reivew_html = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["ssrRender", _sfc_ssrRender$x], ["__file", "Vuejs_3\uB808\uBCA8_Reivew.html.vue"]]);
var Vuejs_3___Reivew_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Vuejs_3___Reivew_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$w = {};
function _sfc_ssrRender$w(_ctx, _push, _parent, _attrs) {
  const _component_ExternalLinkIcon = vue.resolveComponent("ExternalLinkIcon");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><h1 id="vue-\u1100\u1161\u11BC\u110B\u1174-\u1102\u1162\u110B\u116D\u11BC-\u110C\u1165\u11BC\u1105\u1175" tabindex="-1"><a class="header-anchor" href="#vue-\u1100\u1161\u11BC\u110B\u1174-\u1102\u1162\u110B\u116D\u11BC-\u110C\u1165\u11BC\u1105\u1175" aria-hidden="true">#</a> Vue \uAC15\uC758 \uB0B4\uC6A9 \uC815\uB9AC</h1><h2 id="router-\u1109\u1165\u11AF\u1100\u1168-\u1111\u1175\u11AF\u110B\u116D" tabindex="-1"><a class="header-anchor" href="#router-\u1109\u1165\u11AF\u1100\u1168-\u1111\u1175\u11AF\u110B\u116D" aria-hidden="true">#</a> [router \uC124\uACC4 \uD544\uC694 ]</h2><pre><code>news
ask
jobs

\uC138\uAC1C\uC758 \uD398\uC774\uC9C0\uAC00 \uD544\uC694\uD558\uACE0
\uC774\uB97C url\uC5D0 \uB9DE\uAC8C \uBFCC\uB824\uC8FC\uBA74 \uB428.

\uD2B9\uC815 \uC0C1\uC138 \uD398\uC774\uC9C0\uAC00 \uB530\uB85C \uC788\uC74C
\uC0AC\uC6A9\uC790 \uC815\uBCF4 \uD398\uC774\uC9C0 (user view)
</code></pre><h2 id="vue-cli-2-vs-vue-cli-3" tabindex="-1"><a class="header-anchor" href="#vue-cli-2-vs-vue-cli-3" aria-hidden="true">#</a> [vue cli 2 vs vue cli 3]</h2><ul><li><p>\uBA85\uB839\uC5B4</p><ul><li>2.x : vue init &#39;\uD504\uB85C\uC81D\uD2B8 \uD15C\uD50C\uB9BF \uC774\uB984&#39; &#39;\uD30C\uC77C \uC704\uCE58&#39;</li><li>3.x : vue create &#39;\uD504\uB85C\uC81D\uD2B8 \uC774\uB984&#39;</li></ul></li><li><p>\uC6F9\uD329 \uC124\uC815 \uD30C\uC77C</p><ul><li>2.x : \uB178\uCD9C Y WEBPACK.config\uC774 \uBC16\uC73C\uB85C \uB098\uC640 \uC788\uC74C WEBPACK \uC5D0\uB2E4 \uACE7\uBC14\uB85C \uC218\uC815\uD558\uBA74 \uB418\uC5C8\uC74C</li><li>3.x : \uB178\uCD9C N WEBPACK.config\uC774 \uC228\uACA8\uC788\uC74C webpack \uC870\uC791\uD560 \uB54C \uBCC4\uB3C4\uC758 \uD544\uC694\uD55C \uBD80\uBD84 \uCD94\uAC00\uD574\uC918\uC57C\uD568</li></ul></li><li><p>\uD504\uB85C\uC81D\uD2B8 \uAD6C\uC131</p><ul><li>2.x : \uAE43\uD5D9\uC758 \uD15C\uD50C\uB9BF \uB2E4\uC6B4\uB85C\uB4DC</li><li>3.x : \uD50C\uB7EC\uADF8\uC778 \uAE30\uBC18\uC73C\uB85C \uAE30\uB2A5 \uCD94\uAC00</li></ul></li><li><p>ES6 \uC774\uD574</p><ul><li>2.x : \uD544\uC694 \uC5C6\uC74C</li><li>3.x : \uD544\uC694</li></ul></li></ul><h2 id="es-lint-\u1112\u1162\u110C\u1166\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#es-lint-\u1112\u1162\u110C\u1166\u1112\u1161\u1102\u1173\u11AB-\u1107\u1161\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> [ES lint \uD574\uC81C\uD558\uB294 \uBC29\uBC95]</h2><p><code>/*eslint-disable*/</code> \uC744 \uC62C\uB824\uB450\uBA74 \uD574\uB2F9 \uCF54\uB4DC\uB294 \uC801\uC6A9 x</p><h2 id="vue\u110B\u1174-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u116E\u11AB\u1109\u1165" tabindex="-1"><a class="header-anchor" href="#vue\u110B\u1174-\u1111\u1173\u1105\u1169\u110C\u1166\u11A8\u1110\u1173-\u1109\u116E\u11AB\u1109\u1165" aria-hidden="true">#</a> [vue\uC758 \uD504\uB85C\uC81D\uD2B8 \uC21C\uC11C]</h2><ol><li>vue create \uB85C \uC0DD\uC131\uD558\uC5EC vue cli 3 \uB97C \uC2E4\uD589\uD558\uBA74 \uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131</li><li>\uD504\uB85C\uC81D\uD2B8 \uC0DD\uC131 main.js \uAC00 \uD574\uB2F9 application\uC758 \uAD6C\uC870\uB3C4\uAC00 \uB428</li><li>router \uB97C \uB4F1\uB85D\uD558\uB294 \uBC29\uBC95</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1) vue-router \uB97C \uC124\uCE58 (npm install vue-router --save)
    2) router \uD3F4\uB354 (src\uC544\uB798\uC5D0 \uC0DD\uC131) &gt; index.js \uC0DD\uC131
    3) index.js\uC5D0 url \uC815\uBCF4\uC640 components\uC815\uBCF4\uB97C \uC785\uB825
    4) routes \uB97C export \uC2DC\uCF1C\uC8FC\uACE0 main.js\uC5D0\uC11C import\uD574\uC90C
    5) App.vue\uC5D0\uC11C \\&lt;router-view\\&gt;\uB97C \uCD94\uAC00\uD574\uC8FC\uBA74 router\uC5D0\uC11C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uD574\uB2F9 
    \uD0DC\uADF8\uC5D0 \uBFCC\uB824\uC8FC\uB294 \uAC83\uC744 \uD655\uC778\uD560 \uC218 \uC788\uC74C
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1110\u1162\u1100\u1173-\u1109\u1162\u1105\u1169\u11B8\u1100\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8" tabindex="-1"><a class="header-anchor" href="#\u1110\u1162\u1100\u1173-\u1109\u1162\u1105\u1169\u11B8\u1100\u1166-\u1103\u1173\u11BC\u1105\u1169\u11A8" aria-hidden="true">#</a> [\uD0DC\uADF8 \uC0C8\uB86D\uAC8C \uB4F1\uB85D]</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token comment">&lt;!--ToolBar \uC77C \uB54C\uB294 tool-bar \uB85C \uBC14\uAFD4\uC11C \uC0AC\uC6A9\uAC00\uB2A5--&gt;</span>
<span class="token comment">&lt;!--Pascal \uCF00\uC774\uC2A4\uB294 \uC790\uB3D9\uC644\uC131 x--&gt;</span>
<span class="token comment">&lt;!--\uCF00\uBC25 \uCF00\uC774\uC2A4\uB294 \uC790\uB3D9\uC644\uC131 o \uADF8\uB9AC\uACE0 \uAC04\uB7B5 \uD655\uC778\uAC00\uB2A5--&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="router-link-to-url" tabindex="-1"><a class="header-anchor" href="#router-link-to-url" aria-hidden="true">#</a> [router-link to=&#39;url&#39;]</h2><p>\uC575\uCEE4\uAC00 \uBC15\uD788\uAC8C \uB428.</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> [api]</h2><p>api \uB97C \uBD88\uB7EC\uC624\uBA74 \uD574\uB2F9 \uC815\uBCF4\uB4E4\uC744 \uBC30\uC5F4\uD615\uD0DC\uB85C \uBC1B\uC744 \uC218 \uC788\uC74C</p><h2 id="this" tabindex="-1"><a class="header-anchor" href="#this" aria-hidden="true">#</a> [this]</h2><p>vue\uC5D0\uC11C this\uB97C \uCC0D\uC73C\uBA74 \uAE30\uBCF8\uC801\uC73C\uB85C \uCEF4\uD3EC\uB10C\uD2B8 \uC790\uCCB4\uAC00 \uCC0D\uD788\uAC8C \uB418\uB294\uB4EF\uD558\uB2E4. \uADF8\uB7EC\uB098 axios\uC5D0\uC11C then \uC744 \uCC98\uB9AC\uD55C \uD6C4 this\uB97C \uCC0D\uC73C\uBA74 axios\uAC00 \uCC0D\uD788\uAC8C \uB41C\uB2E4.</p><p>this \uB294 \uAE30\uBCF8\uC740 \uC804\uC5ED \uADF8\uB7EC\uB098 \uC0DD\uC131\uC790 \uD568\uC218\uC5D0\uC11C\uB294 \uADF8 \uC0DD\uC131\uC790 \uD568\uC218 \uBE44\uB3D9\uAE30 \uD638\uCD9C \uC2DC this (then \uC5D0 \uB098\uC624\uB294 this) \uB294 undefined\uC774\uB2E4. (\uC774\uB7F4 \uACBD\uC6B0 this binding \uD574\uC918\uC57C \uD568) \uADF8\uB7EC\uB098 arrow func \uC77C \uB54C this\uB294 \uCD5C\uC885 \uC0DD\uC131\uC790 this \uB97C \uAC00\uB9AC\uD0B4 -&gt; \uADF8\uB798\uC11C arrow function \uBC29\uC2DD\uC744 \uB9CE\uC774 \uC0AC\uC6A9\uD55C\uB2E4. this \uBC14\uC778\uB529 \uD560 \uD544\uC694\uAC00 \uC5C6\uC73C\uBBC0\uB85C</p><h2 id="created" tabindex="-1"><a class="header-anchor" href="#created" aria-hidden="true">#</a> [created]</h2><p>components \uAC00 \uC0DD\uC131\uB420 \uB54C \uC0DD\uC131\uB418\uB294 \uACF3\uC774 created() \uC774\uB2E4. ES6 \uC5D0\uC11C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">created</span> <span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uB97C created()\uB85C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</p><p>lifecycle hook\uC774\uB77C\uACE0 \uBD80\uB974\uACE0 \uC774\uB7F0 \uAC83\uB4E4\uC774 beforeMount, mounted \uB4F1\uB4F1\uC774 \uC788\uB2E4.</p><p>\uC774\uC640 \uC5F0\uAD00\uB41C \uB0B4\uC6A9\uC774</p><ul><li><a href="https://vuejs.org/v2/guide/reactivity.html#ad" target="_blank" rel="noopener noreferrer">Reactivity in Depth`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \uB77C\uACE0 \uD558\uB294 \uB0B4\uC6A9\uC774 \uC788\uC74C.</li></ul><p>\uB098\uC911\uC5D0 \uD55C\uBC88 \uBCFC \uAC83</p><h2 id="\u1107\u1175\u1103\u1169\u11BC\u1100\u1175\u110E\u1165\u1105\u1175-callback-promise" tabindex="-1"><a class="header-anchor" href="#\u1107\u1175\u1103\u1169\u11BC\u1100\u1175\u110E\u1165\u1105\u1175-callback-promise" aria-hidden="true">#</a> [\uBE44\uB3D9\uAE30\uCC98\uB9AC, callback, promise]</h2><ul><li><p>callback \uC885\uB8CC\uB418\uB294 \uC2DC\uC810\uC5D0 \uC2E4\uD589\uB418\uB294 \uD568\uC218 (\uD568\uC218\uB85C \uC778\uC790\uB97C \uB118\uAE38 \uC218 \uC788\uC73C\uBBC0\uB85C \uAC00\uB2A5\uD568)</p><pre><code>1) fetchData() \uC2E4\uD589
2) \uADF8 \uC548\uC758 result \uBC30\uC5F4 \uC0DD\uC131
3) ajax \uC2E4\uD589 &gt; \uB370\uC774\uD130 \uBC1B\uC544\uC634. 
4) console.log \uC5D0 \uADF8 \uACB0\uACFC\uAC00 \uCC0D\uD798
</code></pre><p>\uC774\uB7F0 \uC21C\uC73C\uB85C \uCF54\uB529\uC774 \uB418\uC5B4\uC788\uB294\uB370 1&gt;4 \uC21C\uC774 \uC544\uB2C8\uB77C</p><p>1,2,4,3 \uC21C\uC73C\uB85C \uC2E4\uD589 \uB428 \uBA3C\uC800 console.log \uB97C \uBA3C\uC800 \uCC98\uB9AC\uD558\uACE0 \uADF8 \uB2E4\uC74C\uC5D0 ajax\uC758 \uCC98\uB9AC\uAC00 \uC644\uB8CC\uB428</p><p>\uC774\uAC8C \uBE44\uB3D9\uAE30\uCC98\uB9AC\uC758 \uAE30\uBCF8 \uC784</p><p>\uADF8\uB7EC\uBA74 console.log\uB97C ajax\uC548\uC5D0\uC11C \uC2E4\uD589\uD558\uBA74 \uC62C\uBC14\uB978 \uC21C\uC11C\uB85C \uCC0D\uD798</p><p>callback hell \uC5D0 \uBE60\uC9C8 \uC218 \uC788\uC74C</p></li><li><p>Promise \uC640 resolve \uCF5C\uBC31 \uAD00\uACC4\uC5D0\uC11C Promise\uAC00 \uB05D\uB098\uACE0 resolve\uB97C \uD1B5\uD574 data \uAC12\uC744 \uB118\uACA8\uC8FC\uAC8C \uB418\uB294 \uAC83\uC784.</p></li></ul><h2 id="vuex-\u1100\u1161\u11AB\u1103\u1161\u11AB\u1112\u1161\u11AB-\u1100\u116E\u110C\u1169\u1103\u1169" tabindex="-1"><a class="header-anchor" href="#vuex-\u1100\u1161\u11AB\u1103\u1161\u11AB\u1112\u1161\u11AB-\u1100\u116E\u110C\u1169\u1103\u1169" aria-hidden="true">#</a> Vuex \uAC04\uB2E8\uD55C \uAD6C\uC870\uB3C4</h2><p>before NewsView \uC5D0\uC11C API\uB97C \uC801\uC6A9\uD574\uC11C \uD638\uCD9C</p><p>after NewsView &lt;- Vuex &lt;- API</p><p>\uC911\uAC04\uC5D0 Vuex \uB97C \uC0AC\uC6A9\uD558\uC5EC \uD638\uCD9C\uD560 \uC608\uC815\uC784. \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAD00\uB9AC\uC758 \uC758\uBBF8\uAC00 \uC788\uC74C</p><p>Vuex\uB294 \uC0C1\uD0DC\uAD00\uB9AC\uB3C4\uAD6C \uCEF4\uD3EC\uB10C\uD2B8 \uAC04\uC5D0 \uB370\uC774\uD130 \uB118\uACA8\uC904 \uB54C \uC0AC\uC6A9</p><ul><li><p>Vuex \uB97C \uB9CC\uB4E4\uC5B4\uC11C \uC778\uC2A4\uD134\uC2A4\uB97C \uCD94\uAC00\uD574\uC8FC\uBA74 \uAC1C\uBC1C\uC790 \uB3C4\uAD6C\uC5D0\uC11C Vue \uD0ED\uC758 \uB450\uBC88\uC9F8 \uC140\uB809\uC158\uC73C\uB85C Vuex \uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p></li><li><p>Vuex\uC5D0\uC11C\uC758 action\uC0C1\uD0DC\uB294 dispatch\uB85C \uAC00\uC838\uC62C \uC218 \uC788\uB2E4.</p></li><li><p>Vuex\uC5D0\uC11C\uC758 \uC0C1\uD0DC\uC5D0 \uB300\uD558\uC5EC. Action : \uBAA8\uB4E0 \uBE44\uB3D9\uAE30 \uD638\uCD9C \uAC12\uC744 \uAC00\uC838\uC628\uB2E4. Mutation : \uC774\uB97C State\uC5D0 \uB2F4\uAE30 \uC804 \uC0C1\uD0DC\uC784. \uC5EC\uAE30\uB97C \uAC70\uCCD0\uAC10. State : \uCD5C\uC885 \uBC14\uB014 \uAC12.</p><p>\uC21C\uC11C\uB294 \uB2E4\uC74C\uACFC \uAC19\uB2E4. Action(API\uB85C \uBD80\uD130 \uAC12\uC744 \uBC1B\uC74C)</p><ul><li>mutation (\uAC12\uC744 state\uB85C \uB118\uACA8\uC90C) : \uC774 \uACFC\uC815\uC774 \uC65C \uC788\uB294\uC9C0\uB294 \uAC15\uC0AC\uB3C4 \uBAA8\uB974\uACE0 \uC788\uC74C</li><li>state (\uC5EC\uAE30 \uC548\uC758 \uBCC0\uC218\uB97C \uB0B4\uBCF4\uB0BC \uC218 \uC788\uC74C)</li></ul><ul><li>\uC774 \uB54C, \uC0C1\uD0DC\uC5D0 \uB530\uB77C \uB370\uC774\uD130 \uB118\uACA8\uC904 \uB54C \uC368\uC57C\uD558\uB294 \uC6A9\uC5B4\uB4E4\uC774 \uC815\uD574\uC838\uC788\uC74C <a href="https://vuex.vuejs.org/kr/" target="_blank" rel="noopener noreferrer">\uC5EC\uAE30`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \uB97C \uCC38\uACE0\uD558\uACE0 action -&gt; mutation \uC740 commit vue component\uC5D0\uC11C action\uC5D0 \uC811\uADFC\uD558\uC5EC \uB370\uC774\uD130 \uAC00\uC838\uC62C\uB54C\uB294 dispatch\uB97C \uC0AC\uC6A9\uD574\uC57C\uD568</li></ul><p>\uC704\uC758 \uC804\uCCB4 \uC0C1\uD0DC \uAC12\uC5D0 \uB300\uD55C \uCF54\uB4DC\uB97C store \uC5D0 \uB2F4\uC544\uC11C export \uC2DC\uCF1C\uC8FC\uBA74</p><p>main.js\uC5D0\uC11C store\uB97C import \uC2DC\uCF1C\uC92C\uAE30 \uB54C\uBB38\uC5D0 \uBAA8\uB4E0 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C store\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><p>\uADF8 \uB2E4\uC74C \uC6D0\uD558\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C this.$store.dispatch(&#39;actions \uC548\uC758 \uD568\uC218 \uC774\uB984&#39;) \uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD558\uBA74 \uC704\uC758 state\uC5D0 \uC800\uC7A5\uD55C \uAC12\uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p></li></ul><h2 id="destructuring-\u1100\u116E\u110C\u1169-\u1107\u116E\u11AB\u1112\u1162-\u1106\u116E\u11AB\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#destructuring-\u1100\u116E\u110C\u1169-\u1107\u116E\u11AB\u1112\u1162-\u1106\u116E\u11AB\u1107\u1165\u11B8" aria-hidden="true">#</a> Destructuring (\uAD6C\uC870 \uBD84\uD574 \uBB38\uBC95)</h2><p><a href="https://joshua1988.github.io/es6-online-book/destructuring.html#%EA%B8%B0%EC%A1%B4-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%97%90%EC%84%9C%EC%9D%98-%EA%B5%AC%EC%A1%B0" target="_blank" rel="noopener noreferrer">\uAD00\uB828\uB9C1\uD06C`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \uC704 \uD398\uC774\uC9C0\uC5D0 \uAE34 \uB0B4\uC6A9\uC774 \uB2F4\uACA8\uC788\uC74C.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">var</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token number">30</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC740 \uBC30\uC5F4, \uAC1D\uCCB4\uC758 \uC120\uC5B8\uC5D0\uC11C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">var</span> <span class="token punctuation">{</span> a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC704\uB97C \uC2E4\uD589\uD560 \uC2DC a, b, c \uC5D0 \uAC01\uAC01 10,20,30 \uC774 \uB4E4\uC5B4\uAC00\uAC8C \uB41C\uB2E4.</p><p>\uC790\uC8FC \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95\uC740 \uC544\uB798\uC640 \uAC19\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">var</span> josh <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">language</span><span class="token operator">:</span> <span class="token string">&#39;javascript&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">position</span><span class="token operator">:</span> <span class="token string">&#39;front-end&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">area</span><span class="token operator">:</span> <span class="token string">&#39;pangyo&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">hobby</span><span class="token operator">:</span> <span class="token string">&#39;singing&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">&#39;102&#39;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>

  <span class="token keyword">var</span> language <span class="token operator">=</span> josh<span class="token punctuation">.</span>language<span class="token punctuation">;</span>
  <span class="token keyword">var</span> position <span class="token operator">=</span> josh<span class="token punctuation">.</span>position<span class="token punctuation">;</span>
  <span class="token keyword">var</span> area <span class="token operator">=</span> josh<span class="token punctuation">.</span>area<span class="token punctuation">;</span>
  <span class="token keyword">var</span> hobby <span class="token operator">=</span> josh<span class="token punctuation">.</span>hobby<span class="token punctuation">;</span>
  <span class="token keyword">var</span> age <span class="token operator">=</span> josh<span class="token punctuation">.</span>age<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD558\uB358 \uAC83\uC744</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token keyword">var</span> <span class="token punctuation">{</span> language<span class="token punctuation">,</span> position<span class="token punctuation">,</span> area<span class="token punctuation">,</span> hobby<span class="token punctuation">,</span> age <span class="token punctuation">}</span> <span class="token operator">=</span> josh<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>language<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// javascript</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>position<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// front-end</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// pangyo</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>hobby<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// singing</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 102</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><p>vuex\uB97C \uC0AC\uC6A9\uD560 \uB54C, context.context \uC0AC\uC6A9\uC2DC {commit} \uC73C\uB85C \uAC04\uB7B5\uD558\uAC8C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAC8C \uB41C\uB2E4.</p><h2 id="vuejs-map-\u1112\u1166\u11AF\u1111\u1165\u110B\u1166-\u1103\u1162\u1112\u1161\u110B\u1167" tabindex="-1"><a class="header-anchor" href="#vuejs-map-\u1112\u1166\u11AF\u1111\u1165\u110B\u1166-\u1103\u1162\u1112\u1161\u110B\u1167" aria-hidden="true">#</a> vuejs map \uD5EC\uD37C\uC5D0 \uB300\uD558\uC5EC...</h2><ul><li>AskView \uBD80\uBD84\uC744 \uBCF4\uBA74 \uC8FC\uC11D\uC73C\uB85C this.$store.state.ask \uB97C \uC5B4\uB5BB\uAC8C\uD558\uBA74 \uAC04\uB7B5\uD558\uAC8C \uC0AC\uC6A9\uD560 \uAC83\uC774\uB0D0\uC5D0 \uB300\uD55C \uB0B4\uC6A9\uC744 \uC801\uC5B4\uB450\uC5C8\uC74C.</li></ul><p>\uADF8\uC5D0 \uB300\uD55C \uC124\uBA85\uC744 \uC5EC\uAE30\uC5D0 \uAE30\uB85D\uD568.</p><h3 id="_1-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11B7" tabindex="-1"><a class="header-anchor" href="#_1-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11B7" aria-hidden="true">#</a> 1 \uD568\uC218\uB97C \uC0AC\uC6A9\uD568.</h3><p>\uB2E8\uC21C\uD558\uB2E4. computed : \uC544\uB798\uC5D0 \uBA54\uC11C\uB4DC\uB97C \uD558\uB098\uB9CC\uB4E4\uC5B4 \uAC70\uAE30\uC11C return this.$store.state.ask \uC744 \uB123\uC5B4\uC8FC\uBA74 \uB05D</p><h3 id="_2-\u110B\u1175\u110C\u1166\u1107\u116E\u1110\u1165\u1102\u1173\u11AB-vuex-\u1106\u1162\u11B8\u1112\u1166\u11AF\u1111\u1165-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u1100\u1161\u110C\u1167\u110B\u1169\u11AF-\u1100\u1165\u11BA\u110B\u1175\u1103\u1161" tabindex="-1"><a class="header-anchor" href="#_2-\u110B\u1175\u110C\u1166\u1107\u116E\u1110\u1165\u1102\u1173\u11AB-vuex-\u1106\u1162\u11B8\u1112\u1166\u11AF\u1111\u1165-\u1112\u1161\u11B7\u1109\u116E\u1105\u1173\u11AF-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u110B\u1167-\u1100\u1161\u110C\u1167\u110B\u1169\u11AF-\u1100\u1165\u11BA\u110B\u1175\u1103\u1161" aria-hidden="true">#</a> 2 \uC774\uC81C\uBD80\uD130\uB294 vuex \uB9F5\uD5EC\uD37C \uD568\uC218\uB97C \uC0AC\uC6A9\uD558\uC5EC \uAC00\uC838\uC62C \uAC83\uC774\uB2E4.</h3><ol><li>mapState \uC0AC\uC6A9\uBC95 map\uD5EC\uD37C\uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uB54C\uB294, ... (spread \uAD6C\uBB38\uC744 \uC0AC\uC6A9\uD558\uB294 \uB4EF\uD558\uB2E4) \uC65C spread \uAD6C\uBB38\uC774\uB0D0 \uC608\uB97C \uB4E4\uC5B4</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token string">&#39;count&#39;</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD558\uC600\uB2E4\uBA74.. state \uB0B4\uC758 \uBAA8\uB4E0 \uC874\uC7AC\uD558\uB294 value\uB4E4\uC744 \uAC80\uC0C9\uD558\uC5EC \uADF8 \uC911\uC5D0 count \uB97C \uAC00\uC838\uC624\uACA0\uB2E4\uB294 \uB73B\uC774\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token operator">...</span><span class="token function">mapState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token function-variable function">ask</span> <span class="token operator">:</span> <span class="token parameter">state</span> <span class="token operator">=&gt;</span> state<span class="token punctuation">.</span>ask
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC5EC\uAE30\uC11C\uB294 \uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD558\uC600\uB294\uB370 =&gt; \uC778\uC790 \uC548\uC5D0 state \uB97C \uB123\uC73C\uBA74 state\uC758 \uAC12\uC740 state \uC758 \uBAA8\uB4E0 \uAC12\uC744 \uB2E4 \uAC00\uC838\uC628\uB2E4. (\uBB3C\uB860 \uC5EC\uAE30\uC11C\uB294 created \uB420 \uB54C, FETCH_ASK \uB97C \uD638\uCD9C\uD558\uC600\uAE30 \uB54C\uBB38\uC5D0 \uB2E4\uB978 \uAC12\uC5D0\uB294 \uC544\uBB34 \uAC83\uB3C4 \uC548\uB4E4\uC5B4\uAC00\uC9C0\uB9CC state.ask \uC5D0\uB9CC \uAC12\uC774 \uB4E4\uC5B4\uAC00 \uC788\uAC8C \uB428.) \uACB0\uACFC\uC801\uC73C\uB85C \uC704 \uCF54\uB4DC\uC5D0\uC11C ask \uB77C\uB294 \uD504\uB85C\uD37C\uD2F0 \uC548\uC5D0 state.ask \uAC12\uC744 \uB123\uC5B4\uC900 \uAC83\uACFC \uAC19\uC774 \uB3D9\uC791\uD55C\uB2E4.</p><ol start="2"><li>mapGetter(\uAC1D\uCCB4 \uD45C\uAE30\uBC95) index.js \uC548\uC5D0</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">getters</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token function">fetchedAsk</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          <span class="token keyword">return</span> state<span class="token punctuation">.</span>asks<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 getters \uB97C \uB9CC\uB4E4\uC5B4 fetchedAsk \uB97C \uCD94\uAC00\uD55C\uB2E4. getters \uB780 \uAE30\uBCF8\uC801\uC73C\uB85C \uB370\uC774\uD130\uC5D0 \uC811\uADFC\uD560 \uB54C \uBC1C\uC0DD\uD55C\uB2E4.</p><p>\uADF8 \uB54C fetchedAsk \uB97C \uBC1C\uC0DD\uC2DC\uCF1C state.ask \uB97C \uAC00\uC838\uAC08 \uC218 \uC788\uB3C4\uB85D \uD574\uC8FC\uB294 \uAC83\uC774\uB2E4.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>    <span class="token operator">...</span><span class="token function">mapGetters</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">ask</span> <span class="token operator">:</span> <span class="token string">&#39;fetchedAsk&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC120\uC5B8\uD558\uC5EC index.js \uC5D0\uC11C ask \uAC12\uC744 \uAC00\uC838\uC628\uB2E4. \uD639\uC740 \uBC30\uC5F4\uD615\uD0DC\uB85C.. ...mapGetters([ &#39;fetchedAsk&#39; ]), \uC704\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD560 \uC218 \uC788\uB2E4.</p><h2 id="dynamic-route-matching-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173-\u1106\u1162\u110E\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#dynamic-route-matching-\u1103\u1169\u11BC\u110C\u1165\u11A8-\u1105\u1161\u110B\u116E\u1110\u1173-\u1106\u1162\u110E\u1175\u11BC" aria-hidden="true">#</a> Dynamic Route matching (\uB3D9\uC801 \uB77C\uC6B0\uD2B8 \uB9E4\uCE6D)</h2><p>url \uC5D0 ?id=(\uC544\uC774\uB514\uBA85) \uC774\uAC70\uB85C \uB2E4\uC74C \uD398\uC774\uC9C0\uB85C \uC774\uB3D9\uD560 \uC218 \uC788\uB2E4.</p><p>\uB77C\uC6B0\uD305 routes/index.js \uC5D0 \uBCF4\uBA74</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token punctuation">{</span>
    <span class="token literal-property property">path</span><span class="token operator">:</span><span class="token string">&#39;/user/:id&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">component</span><span class="token operator">:</span> UserView<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC124\uC815\uD558\uACE0</p><p>\uB77C\uC6B0\uD305 \uB9C1\uD06C\uB97C \uC124\uC815\uD560 \uB54C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-link</span> <span class="token attr-name"><span class="token namespace">v-bind:</span>to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>\`/user/\${item.user}\`<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{item.user}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-link</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 \uC124\uC815 \uB2E4\uC2DC\uB9D0\uD574 v-bind:to=/user/ + id \uC758 \uAD6C\uC870\uB85C \uC124\uC815\uD558\uBA74</p><p>\uD574\uB2F9\uD558\uB294 \uACF3\uC73C\uB85C \uC774\uB3D9\uD588\uC744 \uB54C</p><p>vue \uD0ED\uC758 \uAC1C\uBC1C\uC790\uB3C4\uAD6C\uB85C \uB4E4\uC5B4\uAC00\uBA74 data.$route.params \uC548\uC5D0 (\uC5EC\uAE30 \uAC1D\uCCB4 \uAC12 \uD655\uC778 \uD544\uC694) id \uAC12\uC774 \uB118\uC5B4\uAC00\uB294 \uAC83\uC744 \uC54C \uC218 \uC788\uB2E4.</p><p>\uC704\uC5D0\uC11C \uC5B4\uB514\uB294 params \uC5D0 \uB118\uAE30\uACE0 \uC5B4\uB514\uB294 query\uC5D0 \uB118\uAE40 \uBC29\uBC95\uB860\uC801\uC778 \uAC70 \uB098\uC911\uC5D0 \uC774 \uBC29\uBC95 \uC800 \uBC29\uBC95 \uB2E4 \uBC30\uC6B8 \uAC83</p><ul><li>\uB2E4\uC774\uB098\uBBF9 \uB77C\uC6B0\uD305\uC758 \uC21C\uC11C</li></ul><ol><li>\uB77C\uC6B0\uD130 &gt; index.js\uC5D0 \uB77C\uC6B0\uD130 \uC815\uBCF4 \uB4F1\uB85D</li><li>\uD574\uB2F9 \uD398\uC774\uC9C0 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uC774\uB3D9\uD588\uC744 \uB54C params Or querys \uC815\uBCF4\uB97C \uB2E4\uB8F0 \uAC83</li></ol><ul><li><p>\uB370\uC774\uD130 fetch \uC21C\uC11C (vuex \uCABD\uC774\uAE34\uD55C\uB370 \uC624\uB298 \uC54C\uAC8C \uB428)</p><ol><li>vue component \uC0DD\uC131</li><li>vuex \uB97C \uC0AC\uC6A9\uD558\uC5EC dispatch\uC2E4\uD589 =&gt; store\uC758 actions \uB85C \uAC00\uAC8C \uB428</li><li>\uD574\uB2F9 \uD558\uB294 \uD568\uC218 (FETCH_ITEM) \uC2E4\uD589</li><li>axios\uB4F1\uC744 \uC2E4\uD589\uD558\uC5EC \uB370\uC774\uD130 \uAC00\uC838\uC634</li><li>\uC5EC\uAE30 \uB370\uC774\uD130 mutation\uC73C\uB85C \uC62E\uAE40</li><li>mutation\uC5D0\uC11C state\uC5D0 \uC14B\uD305\uD55C \uC815\uBCF4\uB4E4\uC744 component\uC5D0\uC11C \uC0AC\uC6A9 \uAC00\uB2A5</li></ol></li><li><p>font awsome \uD398\uC774\uC9C0 \uCC38\uACE0</p></li></ul><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/your-path-to-fontawesome/css/all.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span> 
  <span class="token comment">&lt;!--load all styles --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>html \uC5D0 \uD574\uB2F9\uD558\uB294 content\uB97C \uAC00\uC838\uC654\uC744 \uB54C \uD0DC\uADF8\uB97C \uC778\uC2DD\uC2DC\uCF1C\uC11C \uCD9C\uB825\uC2DC\uCF1C\uC904 \uACBD\uC6B0 v-html \uC744 \uC0AC\uC6A9\uD558\uBA74 \uB05D<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-html</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>fetchedItem.content<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ul><h2 id="\u1105\u1161\u110B\u116E\u1110\u1165-\u1110\u1173\u1105\u1162\u11AB\u110C\u1175\u1109\u1167\u11AB" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u110B\u116E\u1110\u1165-\u1110\u1173\u1105\u1162\u11AB\u110C\u1175\u1109\u1167\u11AB" aria-hidden="true">#</a> \uB77C\uC6B0\uD130 \uD2B8\uB79C\uC9C0\uC158</h2><p>\uB77C\uC6B0\uD130\uC5D0 \uC758\uD574 \uD398\uC774\uC9C0\uAC00 \uBC14\uB014 \uB54C, \uC880\uB354 \uC2A4\uBB34\uC2A4\uD558\uAC8C \uBC14\uB014 \uC218 \uC788\uB3C4\uB85D \uD560 \uC218 \uC788\uC74C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>transition</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>router-view</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>transition</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1105\u1175\u1111\u1162\u11A8\u1110\u1169\u1105\u1175\u11BC" tabindex="-1"><a class="header-anchor" href="#\u1105\u1175\u1111\u1162\u11A8\u1110\u1169\u1105\u1175\u11BC" aria-hidden="true">#</a> \uB9AC\uD329\uD1A0\uB9C1</h2><p>\uAD6C\uC870\uB97C \uBC14\uAFC0 \uAC83\uC784. \uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uB418\uB294 \uBD80\uBD84\uC744 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uBF51\uC544\uB0BC \uAC83\uC784 ex) \uD558\uB098\uC758 \uAE00(\uD53C\uB4DC)\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB9CC\uB4E4 \uC218 \uC788\uC74C.</p><ul><li>\uC77C\uB2E8, style \uD0DC\uADF8 \uC548\uC5D0 scoped \uC18D\uC131\uC744 \uC8FC\uBA74 \uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uB9CC \uC601\uD5A5\uC744 \uB07C\uCE58\uACA0\uB2E4\uB294 \uC18C\uB9AC\uC784</li></ul><p>\uCEF4\uD3EC\uB10C\uD2B8 \uB9CC\uB4E4\uC5B4\uC11C \uC0AC\uC6A9\uD560 \uB54C, \uBA85\uBA85 \uADDC\uCE59\uC758 \uBCC0\uD654\uAC00 \uB428\uC744 \uC720\uC758\uD560 \uAC83. \uC608\uB97C\uB4E4\uC5B4, ListItem.vue \uB85C \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC0DD\uC131\uD574\uC11C \uAC00\uC838\uC654\uC73C\uBA74 \uD0DC\uADF8\uB294 list-item\uC73C\uB85C \uC0DD\uC131\uD574\uC57C\uD568. \uB300\uBB38\uC790\uB85C \uAD6C\uBD84\uC774 - \uB85C \uAD6C\uBD84\uC774 \uB418\uACE0 \uC18C\uBB38\uC790\uB85C \uBCC0\uACBD\uB428.</p><p>\uD575\uC2EC\uC740 \uBD84\uAE30\uB97C \uC5B4\uB5BB\uAC8C \uD574\uC904 \uAC83\uC774\uB0D0\uD558\uB294 \uAC83\uC784. this.$route; \uC5D0 \uC811\uADFC\uD560 \uC218 \uC788\uC74C. \uC774 \uC548\uC5D0 \uC788\uB294 \uC815\uBCF4, path or name\uC744 \uD1B5\uD574 \uBD84\uAE30\uB97C \uC8FC\uBA74 \uB428</p><p>\uADF8 \uC678\uC5D0\uB294 v-if \uB97C \uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95 \uC124\uBA85\uD568. \uC5B4\uB5A4 \uC560\uB294 \uC788\uB294\uB370 \uC5B4\uB5A4 \uC560\uB294 \uC5C6\uC73C\uBA74 \uC774\uB97C \uD310\uB2E8\uD558\uC5EC \uBD84\uAE30\uD574\uC8FC\uBA74 \uB428.</p><h2 id="\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1109\u1161\u110B\u116D\u11BC\u110C\u1161-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1173\u1105\u1173\u11B7" aria-hidden="true">#</a> \uC0AC\uC6A9\uC790 \uCEF4\uD3EC\uB10C\uD2B8 \uB370\uC774\uD130 \uD750\uB984</h2><ul><li><p>\uCCAB\uBC88\uC9F8 \uBC29\uBC95 userView \uC548\uC5D0 userProfile \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uAC00\uC838\uC654\uB2E4. \uC774 \uACBD\uC6B0</p><ol><li>userView\uC5D0\uC11C fetch dispatch\uD558\uB294 \uBD80\uBD84\uC5D0\uC11C \uB370\uC774\uD130 \uAC00\uC838\uC634</li><li>\uC704 \uB370\uC774\uD130\uB97C \uC544\uB798 \uCEF4\uD3EC\uB10C\uD2B8\uC778 userProfile \uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C</li><li>this.$store.state.user \uB97C \uD1B5\uD574 \uC0AC\uC6A9\uD558\uBA74 \uB428</li></ol></li><li><p>\uB450\uBC88\uC9F8 \uBC29\uBC95 userView \uC548\uC5D0 &lt;user-profile&gt; \uD0DC\uADF8\uC5D0</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>user-profile</span> <span class="token attr-name">:info</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>userInfo<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>user-profile</span><span class="token punctuation">&gt;</span></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 :info \uC548\uC5D0 \uB370\uC774\uD130\uB97C \uB118\uACA8\uC900\uB2E4. (\uBB3C\uB860 userView \uC548\uC5D0 computed \uC18D\uC131\uC5D0 userInfo \uAC12\uC774 \uC788\uC5B4\uC57C\uD55C\uB2E4.) \uADF8\uB7EC\uBA74 userProfile \uC548\uC5D0\uB294 props \uB85C info \uAC12\uC744 \uBC1B\uC744 \uC218 \uC788\uB2E4.</p></li><li><p>\uB450\uAC00\uC9C0 \uBC29\uBC95\uC758 \uBE44\uAD50 \uC9C1\uBE75\uC73C\uB85C \uAC00\uC838\uC624\uB294 \uAC83\uACFC info \uB85C \uBCF4\uB0B4\uC8FC\uACE0 \uBC1B\uB294 \uAC83.</p><p>1\uBC88\uC740 UserView =&gt; Vuex =&gt; API =&gt; Vuex =&gt; UserProfile =&gt; UserView</p><p>2\uBC88\uC740 UserView =&gt; Vuex =&gt; API =&gt; Vuex =&gt; UserView =&gt; UserProfile =&gt; UserView</p><p>\uC870\uAE08\uB354 Vuex\uC758 \uAD6C\uC870\uC5D0 \uC801\uD569\uD558\uAC8C \uB9CC\uB4E4\uB824\uBA74 \uD45C\uD604\uD558\uB294 \uBD80\uBD84\uC5D0 \uBC14\uB85C \uB561\uAE30\uB294 \uAC83\uC774 \uAC04\uD3B8\uD558\uAC8C \uB9CC\uB4E0 \uAC83\uC774\uAE30 \uB54C\uBB38\uC5D0</p><p>\uACE7\uBC14\uB85C \uAC00\uC838\uAC00\uB294 1\uBC88 \uBC29\uBC95\uC774 \uB0AB\uACE0</p><p>\uADF8\uB7EC\uB098 \uAD6C\uC870\uC801\uC73C\uB85C \uC758\uBBF8\uB97C \uC8FC\uACE0 \uC2F6\uC73C\uBA74 2\uBC88\uC73C\uB85C \uC0AC\uC6A9\uD558\uB294\uAC8C \uB0AB\uB2E4.</p></li></ul><h2 id="slot-\u110B\u1174-\u1109\u1161\u110B\u116D\u11BC" tabindex="-1"><a class="header-anchor" href="#slot-\u110B\u1174-\u1109\u1161\u110B\u116D\u11BC" aria-hidden="true">#</a> slot \uC758 \uC0AC\uC6A9</h2><p>UserProfile \uC5D0\uC11C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
      <span class="token comment">&lt;!-- \uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC815\uC758\uD560 \uC601\uC5ED --&gt;</span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC704\uC640 \uAC19\uC774 slot\uC744 \uB6AB\uC5B4\uC8FC\uBA74</p><p>UserVue \uC5D0\uC11C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>username<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>{{ userInfo.id }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\uC640 \uAC19\uC774 \uC0AC\uC6A9\uD558\uBA74 \uB41C\uB2E4. \uADF8\uB7EC\uBA74 \uD574\uB2F9 \uC704\uCE58\uC5D0 \uB0B4\uAC00 \uC6D0\uD558\uB294 \uC815\uBCF4\uB97C \uADF8\uB300\uB85C \uB118\uACA8\uC904 \uC218 \uC788\uB2E4.</p><p>\uC5B8\uC81C \uC0AC\uC6A9\uD558\uB294\uAC00 ex) ItemView \uC5D0\uC11C\uB294 <a href="http://info.id" target="_blank" rel="noopener noreferrer">info.id`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \uAC12\uC744 \uB118\uACA8\uC8FC\uB294\uB370 UserView \uC5D0\uC11C\uB294 info.user \uAC12\uC744 \uB118\uACA8\uC900\uB2E4\uACE0 \uD558\uBA74 \uBD84\uAE30\uB97C \uB9CC\uB4E4\uC218\uB3C4 \uC788\uACA0\uC9C0\uB9CC \uC704\uC640 \uAC19\uC774 \uCC98\uB9AC\uD558\uB294\uAC8C \uC9C1\uAD00\uC801\uC73C\uB85C \uBCF4\uAE30\uAC00 \uC88B\uC740\uB4EF</p><p>router-link \uC5D0 \uBB3C\uB824\uC11C \uBCF4\uB0B4\uC904 \uC218 \uC788\uC74C.</p><h2 id="spinner" tabindex="-1"><a class="header-anchor" href="#spinner" aria-hidden="true">#</a> spinner</h2><blockquote><p>&quot;\uC6F9 \uD398\uC774\uC9C0\uC758 \uB85C\uB529 \uC0C1\uD0DC\uB97C \uB098\uD0C0\uB0B4\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uB97C \uC758\uBBF8\uD569\uB2C8\uB2E4.&quot;</p></blockquote><ol><li>Spinner.vue \uB97C \uC0DD\uC131\uD55C\uB2E4. \uAC4D\uAD6C\uAE00\uB9C1\uD574\uC11C \uBCF5\uBD99\uD568.</li><li>javascript</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span>
      <span class="token literal-property property">required</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>props \uC5D0 loading \uAC12\uC744 \uC124\uC815\uD560 \uAC83, 3. bus \uC14B\uD305 &quot;Spinner\uB294 \uC5EC\uB7EC \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uC218 \uC788\uAE30 \uB54C\uBB38\uC5D0, Event Bus\uB97C \uC774\uC6A9\uD558\uB294 \uAC83\uC774 \uC88B\uC2B5\uB2C8\uB2E4. event bus\uB294 \uB2E8\uC21C\uD788 \uC774\uBCA4\uD2B8\uB97C \uACF5\uC720\uD560 \uC218 \uC788\uB3C4\uB85D \uD558\uB294 bus\uC785\uB2C8\uB2E4.&quot; bus.js \uC0DD\uC131 (\uB2E8\uC21C vue \uB9CC\uB4E4\uC5B4\uC11C export \uC2DC\uCF1C\uC90C)</p><ol start="4"><li>bus\uB97C \uC0AC\uC6A9\uD558\uC5EC App.vue \uC758 created()\uC640 beforeDestroy() \uC548\uC5D0\uC11C \uC0AC\uC6A9\uD568.</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;start:spinner&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">&#39;end:spinner&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span> <span class="token comment">// \uC774\uBCA4\uD2B8 \uB4F1\uB85D\uD558\uACE0 \uB098\uBA74 \uBC18\uB4DC\uC2DC \uC885\uB8CC\uC2DC\uCF1C\uC918\uC57C\uD568.</span>
    bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;start:spinner&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>startSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">&#39;end:spinner&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>endSpinner<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\uC5D8\uB9AC\uBA3C\uD2B8 created() \uC5D0\uC11C \uD398\uC774\uC9C0 \uC0DD\uC131 \uB420 \uB54C \uD574\uB2F9 \uB85C\uB529 \uD654\uBA74 \uBCF4\uC5EC\uC9C0\uB3C4\uB85D \uC218\uC815</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;start:spinner&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// start:spinner \uBC1C\uC0DD (\uC774\uB54C \uBD80\uD130 \uB85C\uB529\uAC12 \uBCF4\uC5EC\uC90C)</span>
  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token comment">// setTimeout \uC740 \uB85C\uB529\uC744 \uC778\uC704\uC801\uC73C\uB85C \uBCF4\uB3C4\uB85D \uB9CC\uB4E0 \uAC83\uC784 </span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">&#39;FETCH_JOBS&#39;</span><span class="token punctuation">)</span>  <span class="token comment">// \uB370\uC774\uD130\uBC1B\uC544\uC640\uC11C</span>
    <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span> 
      bus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;end:spinner&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \uC815\uC0C1\uC801\uC73C\uB85C \uBC1B\uC544\uC624\uBA74 spinner \uC885\uB8CC</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u1112\u1161\u110B\u1175\u110B\u1169\u1103\u1165-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-hoc" tabindex="-1"><a class="header-anchor" href="#\u1112\u1161\u110B\u1175\u110B\u1169\u1103\u1165-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-hoc" aria-hidden="true">#</a> \uD558\uC774\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8 (HOC)</h2><p>&quot;\uD558\uC774\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8\uB294 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB85C\uC9C1(\uCF54\uB4DC)\uC744 \uC7AC\uC0AC\uC6A9\uD558\uAE30 \uC704\uD55C \uACE0\uAE09\uAE30\uC220&quot; \uC704\uC758 spinner\uB97C \uB9CC\uB4E0\uB2E4 \uD558\uBA74, \uBAA8\uB4E0 \uC5D8\uB9AC\uBA3C\uD2B8 \uD30C\uC77C\uC5D0 \uD574\uB2F9 \uB3D9\uC77C\uD55C \uCF54\uB4DC\uB97C \uCD94\uAC00\uD574\uC918\uC57C\uD588\uB2E4.</p><p>\uC774\uB97C \uACF5\uD1B5 \uCEF4\uD3EC\uB10C\uD2B8\uB85C \uB9CC\uB4E4\uC5B4\uC11C(\uD558\uC774\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8) \uC5B8\uC81C\uB4E0 \uC7AC\uC0AC\uC6A9\uD558\uAC8C \uB9CC\uB4E4\uACA0\uB2E4\uB294 \uAC83\uC774\uB2E4.</p><ol><li><p>CreateListView.js \uC774\uAC8C \uD558\uC774\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8\uB77C \uD560 \uC218 \uC788\uC74C.</p></li><li><p>router \uCABD\uC5D0\uC11C \uC0AC\uC6A9\uB41C component\uC758 \uAC2F\uC218\uAC00 \uC801\uC5B4\uC9D0. \uADF8\uB0E5 CreateListView \uB9CC \uC4F0\uBA74 \uB428.</p></li></ol><p>\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uAD6C\uC870\uAC00 \uC5B4\uB5BB\uAC8C \uB418\uB294\uAC00. NewsView &gt; ListView(hoc\uB85C \uC0DD\uC0C1\uB41C \uCEF4\uD3EC\uB10C\uD2B8) &gt; ListItem</p><h2 id="mixin" tabindex="-1"><a class="header-anchor" href="#mixin" aria-hidden="true">#</a> Mixin</h2><blockquote><p>&quot;\uACF5\uD1B5\uC73C\uB85C \uC0AC\uC6A9\uD558\uACE0 \uC788\uB294 \uB85C\uC9C1, \uAE30\uB2A5\uB4E4\uC744 \uC7AC\uC0AC\uC6A9\uD558\uB294 \uBC29\uBC95&quot;</p></blockquote><p>\uD558\uC774\uC624\uB354 \uCEF4\uD3EC\uB10C\uD2B8\uC758 \uB2E8\uC810\uC740 NewsView &gt; ListView(hoc\uB85C \uC0DD\uC0C1\uB41C \uCEF4\uD3EC\uB10C\uD2B8) &gt; ListItem</p><p>Level\uC774 \uAE4A\uC5B4\uC9D0. \uD1B5\uC2E0\uC5D0 \uC788\uC5B4\uC11C \uBD88\uD3B8\uD568\uC774 \uBC1C\uC0DD\uD560 \uC218 \uC788\uC74C.</p><p>Mixin\uC744 \uC0AC\uC6A9\uD558\uBA74</p><ol><li>\uCF54\uB4DC\uAC00 \uAE54\uB054\uD574\uC9D0.</li><li>spinner\uC758 \uD6A8\uC728\uC774 \uC88B\uC544\uC9D0.</li></ol><h2 id="\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1169\u110E\u116E\u11AF-\u1109\u1175\u110C\u1165\u11B7" tabindex="-1"><a class="header-anchor" href="#\u1103\u1166\u110B\u1175\u1110\u1165-\u1112\u1169\u110E\u116E\u11AF-\u1109\u1175\u110C\u1165\u11B7" aria-hidden="true">#</a> \uB370\uC774\uD130 \uD638\uCD9C \uC2DC\uC810</h2><h3 id="_1-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1161\u110B\u1175\u1111\u1173-\u1109\u1161\u110B\u1175\u110F\u1173\u11AF-\u1112\u116E\u11A8" tabindex="-1"><a class="header-anchor" href="#_1-\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1105\u1161\u110B\u1175\u1111\u1173-\u1109\u1161\u110B\u1175\u110F\u1173\u11AF-\u1112\u116E\u11A8" aria-hidden="true">#</a> 1. \uCEF4\uD3EC\uB10C\uD2B8 \uB77C\uC774\uD504 \uC0AC\uC774\uD074 \uD6C5</h3><ul><li>created() \uC778\uC2A4\uD134\uC2A4(\uCEF4\uD3EC\uB10C\uD2B8)\uAC00 \uC0DD\uC131\uB418\uC790 \uB9C8\uC790. \uD638\uCD9C\uB418\uB294 \uB85C\uC9C1\uB4E4. data \uAD00\uCC30, computed \uC18D\uC131, methods \uC811\uADFC \uAC00\uB2A5 \uD654\uBA74\uC5D0 mounted \uC5D0 \uC811\uADFC\uC740 \uC548\uB428</li></ul><p>&#39;\uCEF4\uD3EC\uB10C\uD2B8 \uC0DD\uC131\uB418\uC790\uB9C8\uC790&#39; \uD0C0\uC774\uBC0D\uC774 \uD575\uC2EC!</p><h3 id="_2-\u1105\u1161\u110B\u116E\u1110\u1165-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1161\u1103\u1173" tabindex="-1"><a class="header-anchor" href="#_2-\u1105\u1161\u110B\u116E\u1110\u1165-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1161\u1103\u1173" aria-hidden="true">#</a> 2. \uB77C\uC6B0\uD130 \uB124\uBE44\uAC8C\uC774\uC158 \uAC00\uB4DC.</h3><p><a href="https://joshua1988.github.io/web-development/vuejs/vue-router-navigation-guards/" target="_blank" rel="noopener noreferrer">\uCC38\uACE0`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>router<span class="token punctuation">.</span><span class="token function">beforeEach</span><span class="token punctuation">(</span><span class="token function">fucntion</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// to: \uC774\uB3D9\uD560 url</span>
  <span class="token comment">// from : \uD604\uC7AC url</span>
  <span class="token comment">// next : to\uC5D0\uC11C \uC9C0\uC815\uD55C url\uB85C \uC774\uB3D9\uD558\uAE30 \uC704\uD574 \uAF2D \uD638\uCD9C\uD574\uC57C\uD558\uB294 \uD568\uC218</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB7F0\uC2DD\uC73C\uB85C \uB77C\uC6B0\uD305 \uB418\uAE30\uC804 \uC2DC\uC810\uC5D0 \uD638\uCD9C\uD560 \uC218 \uC788\uC74C.</p><p><a href="https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards" target="_blank" rel="noopener noreferrer">vue-router \uACF5\uC2DD \uBB38\uC11C &gt; advanced`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a></p><ul><li><p>\uD2B9\uC815 &quot;url\uB85C \uC811\uADFC\uD558\uAE30 \uC804&quot;\uC5D0 \uB3D9\uC791\uC744 \uC815\uC758! \uC2DC\uC810\uC740 \uB77C\uC6B0\uD130 \uB124\uBE44\uAC8C\uC774\uC158 \uAC00\uB4DC\uAC00 \uBA3C\uC800\uC784.</p></li><li><p>\uB77C\uC774\uD504 \uC0AC\uC774\uD074 \uD6C5\uC758 \uBB38\uC81C\uC810. \uD574\uB2F9 \uB0B4\uC6A9\uC774 update\uB418\uAE30 \uC804\uC5D0 \uADF8 \uC804\uC758 \uB0B4\uC6A9\uC744 \uBA3C\uC800 \uBCF4\uC5EC\uC92C\uB2E4\uAC00 \uADF8\uB2E4\uC74C \uB0B4\uC6A9\uC774 \uB738.</p><p>\uC65C \uADF8\uB7EC\uB0D0\uBA74 vuex(store) &gt; state \uC5D0\uC11C list\uB77C\uB294 \uB370\uC774\uD130\uB97C \uACF5\uC720\uD558\uACE0 \uAC70\uAE30\uC5D0 \uB36E\uC5B4\uC4F0\uAE30\uB97C \uBC18\uBCF5\uD558\uAE30 \uB54C\uBB38\uC784. (news, jobs, ask \uB530\uB85C \uC4F8 \uB54C\uB294 \uAD1C\uCC2E\uC74C)</p></li></ul><h2 id="\u1105\u1161\u110B\u116E\u1110\u1165-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1161\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" tabindex="-1"><a class="header-anchor" href="#\u1105\u1161\u110B\u116E\u1110\u1165-\u1102\u1166\u1107\u1175\u1100\u1166\u110B\u1175\u1109\u1167\u11AB-\u1100\u1161\u1103\u1173-\u1109\u1161\u110B\u116D\u11BC\u1107\u1165\u11B8" aria-hidden="true">#</a> \uB77C\uC6B0\uD130 \uB124\uBE44\uAC8C\uC774\uC158 \uAC00\uB4DC \uC0AC\uC6A9\uBC95</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">component</span><span class="token operator">:</span> NewsView<span class="token punctuation">,</span>
  <span class="token function-variable function">beforeEnter</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>to<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>from<span class="token punctuation">)</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>next<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>beforeEnter \uB97C \uC0AC\uC6A9\uD558\uBA74 url \uC774\uB3D9\uD558\uAE30 \uC804\uC5D0 \uB3D9\uC791\uC744 \uC904 \uC218 \uC788\uB2E4. \uC5EC\uAE30\uC11C auth \uAC19\uC740\uAC78\uB85C \uAD6C\uBD84\uD574\uC11C if\uBB38 \uAC78\uC5B4\uC11C \uBABB\uAC00\uAC8C \uB9CC\uB4E4 \uC218\uB3C4 \uC788\uC74C.</p><ul><li>\uB77C\uC6B0\uD130 \uB124\uBE44\uAC8C\uC774\uC158\uC744 \uC0AC\uC6A9\uD558\uAC8C \uB418\uBA74 \uBC18\uB4DC\uC2DC \uADF8 \uC911\uAC04\uC911\uAC04\uC5D0 \uAE30\uB2E4\uB9B4 \uC218 \uC788\uB3C4\uB85D \uC778\uC9C0\uC2DC\uD0A4\uB294 \uB3C4\uAD6C\uAC00 \uD544\uC694\uD558\uB2E4.</li></ul><ul><li>spinner</li><li>progress bar</li><li>loading bar \uB4F1\uB4F1\uC774 \uB418\uC5B4\uC57C \uD568!</li></ul><h2 id="async-await" tabindex="-1"><a class="header-anchor" href="#async-await" aria-hidden="true">#</a> async await</h2><p>\uD568\uC218\uB4E4\uC758 \uB2E8\uCD95, \uAC00\uB3C5\uC131 \uC99D\uAC00 \uD568\uC218 \uC55E\uC5D0 async \uB97C \uBD99\uC774\uBA74 \uADF8 \uC548\uC5D0 \uD568\uC218 \uD638\uCD9C\uD560 \uB54C, await \uB97C \uC0AC\uC6A9\uD560 \uC218 \uC788\uC74C.</p><p>async await \uC758 \uC608\uC678\uCC98\uB9AC\uB294 try - catch \uB85C \uC0AC\uC6A9</p><p>handleException(error) \uB97C \uB9CC\uB4E4\uC5B4\uC11C \uC0AC\uC6A9\uD558\uB294 \uACBD\uC6B0\uB3C4 \uC788\uB2E4.</p><h2 id="\u110B\u116C\u1107\u116E-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1106\u1169\u1103\u1172\u11AF\u1112\u116A" tabindex="-1"><a class="header-anchor" href="#\u110B\u116C\u1107\u116E-\u1105\u1161\u110B\u1175\u1107\u1173\u1105\u1165\u1105\u1175-\u1106\u1169\u1103\u1172\u11AF\u1112\u116A" aria-hidden="true">#</a> \uC678\uBD80 \uB77C\uC774\uBE0C\uB7EC\uB9AC \uBAA8\uB4C8\uD654</h2><ul><li><p>\uC774\uC720 Vue.js \uAD00\uB828 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uAC00 \uC5C6\uC744 \uB54C \uC77C\uBC18 \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uACB0\uD568\uD560 \uC218 \uC788\uC5B4\uC57C\uD568. \u203B state of js \uD398\uC774\uC9C0\uAC00 \uC788\uC74C</p></li><li><p>\uC885\uB958</p><ol><li>\uCC28\uD2B8</li><li>\uB370\uC774\uD2B8 \uD53C\uD06C</li><li>\uD14C\uC774\uBE14</li><li>\uC2A4\uD53C\uB108</li></ol></li></ul><ul><li><p>chart.js</p><ol><li>\uCC28\uD2B8 \uB77C\uC774\uBE0C\uB7EC\uB9AC npm \uC124\uCE58</li><li>\uC124\uCE58\uB41C \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C import \uB85C App.vue \uC5D0\uC11C \uB85C\uB529</li></ol><ul><li>import \uC2DC\uD0AC \uB54C import Chart from &quot;chart.js/auto&quot;; \uC704\uC640 \uAC19\uC774 /auto \uB97C \uBD99\uC5EC\uC918\uC57C\uD55C\uB2E4. (\uC548\uADF8\uB7EC\uBA74 \uB534\uAC70 \uCC38\uC870\uD574\uC624\uAE30 \uB54C\uBB38\uC5D0 \uC5D0\uB7EC\uB0A8. \uBC84\uC804\uC5D0 \uB530\uB978 \uBB38\uC81C\uB77C\uACE0 \uD568.)</li></ul><ol start="3"><li><p>mounted() \uB77C\uC774\uD504 \uC0AC\uC774\uD074 \uD6C5\uC5D0\uC11C \uCC28\uD2B8\uB97C \uADF8\uB9BC \uC5EC\uAE30 \uC0AC\uC6A9\uD560 \uB54C script DOM \uC5D0 \uC811\uADFC\uD574\uC57C\uD558\uBBC0\uB85C mounted \uB41C \uD6C4\uC5D0 \uC0AC\uC6A9\uD574\uC57C \uD568.</p></li><li><p>\uCC28\uD2B8\uB97C \uCEF4\uD3EC\uB10C\uD2B8\uD654 \uC2DC\uD0B4</p><ol><li>component \uB4F1\uB85D</li><li>\uD574\uB2F9 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0 \uC6D0\uD558\uB294 \uB300\uB85C setting</li><li>App.vue \uC5D0\uC11C import \uC2DC\uCF1C\uC11C \uAC00\uC838\uC634</li></ol><p>reference \uC18D\uC131</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>document<span class="token punctuation">.</span><span class="token function">getelementById</span><span class="token punctuation">(</span><span class="token string">&#39;app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>vue\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uC704\uC758 \uAE30\uB2A5</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>hello <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>script\uC548\uC5D0 <code>this.$refs.app; (\uC774\uB807\uAC8C \uC0AC\uC6A9\uD558\uBA74 \uB428);</code> reference\uB97C \uC0AC\uC6A9\uD558\uBA74 \uC88B\uC740\uC810. DOM \uC73C\uB85C \uBCC0\uD658\uB420 \uB54C \uC0AC\uC6A9 \uC548\uB428. \uADF8\uB7EC\uBBC0\uB85C \uC911\uBCF5 \uAC12\uC744 \uB9CC\uB4E4\uC5B4\uB3C4 \uC0AC\uC6A9 \uAC00\uB2A5\uD568!</p></li><li><p>\uCEF4\uD3EC\uB10C\uD2B8\uC758 \uD50C\uB7EC\uADF8\uC778\uD654 \uB9E4\uBC88 \uCEF4\uD3EC\uB10C\uD2B8 \uAC00\uC838\uC62C \uB54C\uB9C8\uB2E4 chart.js \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uBD88\uB7EC\uC640\uC57C\uD568. \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB97C \uD50C\uB7EC\uADF8\uC778\uC73C\uB85C \uB9CC\uB4E4 \uC218 \uC788\uC74C. <a href="https://vuejs.org/v2/guide/plugins.html#ad" target="_blank" rel="noopener noreferrer">vuejs \uD50C\uB7EC\uADF8\uC778 \uACF5\uC2DD \uBB38\uC11C`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> Vue.use(\uB77C\uC774\uBE0C\uB7EC\uB9AC \uBA85) - \uBDF0\uC5D0\uC11C \uC81C\uACF5\uD558\uB294 \uD50C\uB7EC\uADF8\uC778\uC744 \uAC00\uC838\uC628 \uACBD\uC6B0\uB97C \uB9D0\uD568</p></li></ol><ul><li><code>Vue.prototype.$_Chart = Chart;</code><br> \uC5D0 \uB300\uD55C \uC758\uBBF8.<br> ($_Chart\uB294 \uACF5\uC2DD\uBB38\uC11C \uAD8C\uACE0 \uD45C\uAE30\uBC29\uBC95)</li></ul><ol start="6"><li>\uCEF4\uD3EC\uB10C\uD2B8 \uD1B5\uC2E0\uC744 \uC774\uC6A9\uD55C \uCEF4\uD3EC\uB10C\uD2B8 \uAE30\uB2A5 \uACB0\uD569 <code>v-bind:propsdata=&quot;...&quot;</code> \uC774\uB7F0\uC2DD\uC73C\uB85C \uD574\uC11C \uB118\uACA8\uC904 \uC218 \uC788\uACE0 \uC774\uBCA4\uD2B8\uC5D0 \uB300\uD574\uC120</li></ol><ol><li>\uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C</li></ol><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">onclick</span><span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">&#39;refresh:chart&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>App.vue \uC5D0\uC11C <code>v-on:refresh:chart=&quot;refreshChart&quot;</code></li><li>App.vue methods: \uC548\uC5D0\uC11C refreshChart \uC815\uC758</li></ol></li></ul><h2 id="\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1111\u1162\u1110\u1165\u11AB" tabindex="-1"><a class="header-anchor" href="#\u110F\u1165\u11B7\u1111\u1169\u1102\u1165\u11AB\u1110\u1173-\u1103\u1175\u110C\u1161\u110B\u1175\u11AB-\u1111\u1162\u1110\u1165\u11AB" aria-hidden="true">#</a> \uCEF4\uD3EC\uB10C\uD2B8 \uB514\uC790\uC778 \uD328\uD134</h2><p>4\uAC00\uC9C0 \uD328\uD134</p><ol><li>Common - \uAE30\uBCF8\uC801\uC778 \uCEF4\uD3EC\uB10C\uD2B8 \uB4F1\uB85D \uBC29\uC2DD, \uCEF4\uD3EC\uB10C\uD2B8 \uD1B5\uC2E0</li><li>Slot - \uB9C8\uD06C\uC5C5 \uD655\uC7A5\uC774 \uAC00\uB2A5\uD55C \uCEF4\uD3EC\uB10C\uD2B8</li><li>Controlled - \uACB0\uD569\uB825 \uB192\uC74C</li><li>Renderless - \uB370\uC774\uD130 \uCC98\uB9AC \uCEF4\uD3EC\uB10C\uD2B8</li></ol><h3 id="_1-common-\u110C\u1175\u1100\u1173\u11B7\u1101\u1161\u110C\u1175-\u1109\u1161\u11AF\u1111\u1167\u1107\u116A\u11BB\u1103\u1165\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8\u1100\u116A-\u1100\u1161\u11C0\u110B\u1173\u11B7" tabindex="-1"><a class="header-anchor" href="#_1-common-\u110C\u1175\u1100\u1173\u11B7\u1101\u1161\u110C\u1175-\u1109\u1161\u11AF\u1111\u1167\u1107\u116A\u11BB\u1103\u1165\u11AB-\u1107\u1161\u11BC\u1109\u1175\u11A8\u1100\u116A-\u1100\u1161\u11C0\u110B\u1173\u11B7" aria-hidden="true">#</a> 1) Common (\uC9C0\uAE08\uAE4C\uC9C0 \uC0B4\uD3B4\uBD24\uB358 \uBC29\uC2DD\uACFC \uAC19\uC74C)</h3><ul><li>\uCEF4\uD3EC\uB10C\uD2B8 \uC124\uC815<br> App <ul><li>AppHeader</li><li>AppContent</li></ul></li></ul><p>v-bind:\uBCC0\uC218\uBA85 \uC73C\uB85C \uC804\uB2EC</p><ul><li>props \uB97C \uD1B5\uD574\uC11C \uC804\uB2EC\uD560 \uB54C\uB294</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>props<span class="token punctuation">{</span>
  <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;String&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC774\uB7F0\uC2DD\uC73C\uB85C \uD0C0\uC785\uC744 \uC9C0\uC815\uD560 \uC218 \uC788\uC74C. (\uC18D\uC131=\uAE30\uBCF8\uC801\uC778 \uC18D\uC131)</p><h3 id="_2-slots" tabindex="-1"><a class="header-anchor" href="#_2-slots" aria-hidden="true">#</a> 2) slots</h3><p>slot\uC740 \uCEF4\uD3EC\uB10C\uD2B8\uC640 \uB2E4\uB974\uAC8C \uC0AC\uC774\uC5D0 \uD14D\uC2A4\uD2B8\uAC00 \uC62C \uC218 \uC788\uC74C. \uBCF4\uD1B5 \uCEF4\uD3EC\uB10C\uD2B8\uB294 <code>&lt;app-content&gt;&lt;/app-content&gt;</code> \uC0AC\uC774\uC5D0 \uC544\uBB34\uAC83\uB3C4 \uC62C \uC218 \uC5C6\uC5C8\uC74C. \uADF8\uB7EC\uB098 slot\uC5D0\uB294 <code>&lt;item&gt; \uC544\uC774\uD15C1 &lt;/item&gt;</code> \uC774\uB7F0\uC2DD\uC73C\uB85C \uC62C \uC218 \uC788\uC74C.</p><h5 id="_1-props\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AF-\u1104\u1162\u1102\u1173\u11AB-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7\u110B\u1173\u11AF-\u1107\u1169\u1100\u1175\u110B\u1171\u1112\u1162" tabindex="-1"><a class="header-anchor" href="#_1-props\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AF-\u1104\u1162\u1102\u1173\u11AB-\u110E\u1161\u110B\u1175\u110C\u1165\u11B7\u110B\u1173\u11AF-\u1107\u1169\u1100\u1175\u110B\u1171\u1112\u1162" aria-hidden="true">#</a> [1] props\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB54C\uB294 (\uCC28\uC774\uC810\uC744 \uBCF4\uAE30\uC704\uD574..)</h5><pre><code>  data() \uC548\uC5D0\uC11C \`\`\`items: [&#39;1&#39;, &#39;2&#39;, &#39;3&#39;, &#39;4&#39;];\`\`\` \uC774\uB807\uAC8C \uD558\uACE0
</code></pre><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>item</span> <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item in items<span class="token punctuation">&quot;</span></span> <span class="token attr-name">:propsData</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>item</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">//    item.vue \uB85C \uAC00\uC11C </span>
  item props<span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;propsData&#39;</span><span class="token punctuation">]</span>  <span class="token comment">//\uB85C\uD558\uACE0</span>
  <span class="token punctuation">{</span><span class="token punctuation">{</span>propsData<span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token comment">//\uB97C \uC0AC\uC6A9\uD588\uC74C.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-slot\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AF-\u1104\u1162\u1102\u1173\u11AB" tabindex="-1"><a class="header-anchor" href="#_2-slot\u110B\u1166\u1109\u1165-\u1109\u1161\u110B\u116D\u11BC\u1112\u1161\u11AF-\u1104\u1162\u1102\u1173\u11AB" aria-hidden="true">#</a> [2] slot\uC5D0\uC11C \uC0AC\uC6A9\uD560 \uB54C\uB294</h5><p>data \uD544\uC694 \uC5C6\uC74C</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>//item.vue \uC548\uC5D0\uC11C 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">&gt;</span></span> \uC5EC\uAE30\uB294 \uC815\uC758\uD560 \uB54C\uB9C8\uB2E4 \uACC4\uC18D \uC815\uC758 \uB428 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\uC57D\uAC04 \uCE58\uD658\uB41C\uB2E4\uACE0 \uBCF4\uBA74 \uB428. slot =&gt; \uB0B4\uC6A9\uC73C\uB85C \uB9CC\uC57D\uC5D0 \uB9AC\uC2A4\uD2B8\uB97C \uCC0D\uC5B4\uC8FC\uB2E4\uAC00 \uC5B4\uB5A4 \uC694\uCCAD.,. \uB09C \uC774 \uACBD\uC6B0\uB294 \uADF8\uB9BC\uC744 \uBCF4\uC5EC\uC8FC\uACE0 \uC2F6\uC5B4 \uADF8\uB7EC\uBA74 \uAD73\uC5B4\uC9C4 \uCEF4\uD3EC\uB10C\uD2B8\uB77C\uBA74 \uBD88\uAC00\uB2A5 \uD568.</p><p>\uC1FC\uD551\uBAB0 \uC0C1\uD488, \uBAA8\uB2EC \uAC19\uC740 \uAC83\uB4E4\uC744 \uB9D8\uB300\uB85C \uD655\uC7A5\uAC00\uB2A5 \uC2A4\uD0C0\uC77C\uB3C4 \uB123\uC744 \uC218 \uC788\uC74C. \uC0C1\uB2F9\uD788 \uB3D9\uC801\uC778\uCC98\uB9AC\uAC00 \uAC00\uB2A5\uD574\uC9D0.</p><h5 id="_3-controlled" tabindex="-1"><a class="header-anchor" href="#_3-controlled" aria-hidden="true">#</a> [3] controlled</h5><pre><code>\uC790 \uC815\uB9AC\uD574\uBCF4\uBA74, props \uBC29\uC2DD\uC758 \uBB38\uC81C\uB97C \uC54C\uC544\uC57C \uD568.
\uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8 =&gt; props\uB85C \uC804\uB2EC =&gt; \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C props \uBCC0\uACBD =&gt; \uC5D0\uB7EC\uBC1C\uC0DD 
\uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8 =&gt; v-model \uB85C \uC5F0\uACB0 =&gt; \uD558\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C value \uC640 input \uC774\uBCA4\uD2B8 =&gt; \uC774\uBCA4\uD2B8 \uBC1C\uC0DD \uC2DC toggle \uBA54\uC11C\uB4DC \uC0DD\uC131 
</code></pre><h5 id="_4-renderless" tabindex="-1"><a class="header-anchor" href="#_4-renderless" aria-hidden="true">#</a> [4] Renderless</h5><ul><li>render() function \uC5D0 \uB300\uD55C \uB0B4\uC6A9</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    # <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;\uD0DC\uADF8\uC774\uB984&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\uD0DC\uADF8 \uC18D\uC131&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\uD558\uC704 \uD0DC\uADF8 \uB0B4\uC6A9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;p&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Hello Vue&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span><span class="token operator">=&gt;</span><span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span> <span class="token comment">// \uC5D0 \uB300\uD55C \uB0B4\uC6A9 \uC704\uC758 \uCF54\uB4DC\uC758 \uC6D0\uB9AC\uB300\uB85C </span>
  <span class="token literal-property property">render</span><span class="token operator">:</span> <span class="token function">fucntion</span><span class="token punctuation">(</span><span class="token parameter">createElement</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    # <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;\uD0DC\uADF8\uC774\uB984&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\uD0DC\uADF8 \uC18D\uC131&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\uD558\uC704 \uD0DC\uADF8 \uB0B4\uC6A9&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token function">createElement</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token literal-property property">createElement</span> <span class="token operator">:</span> <span class="token function">h\uB85C</span> <span class="token punctuation">(</span>hypertext<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\uC5EC\uAE30 createElement \uB294 Virtual DOM \uC744 \uC758\uBBF8\uD558\uB294\uB370 vue\uC758 \uCC3D\uC2DC\uC790 EvanU \uC5D0 \uC758\uD574 hypertext\uC758 \uC57D\uC790 h\uB85C \uC0AC\uC6A9
</code></pre><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function-variable function">render</span><span class="token operator">:</span> <span class="token parameter">h</span><span class="token operator">=&gt;</span> <span class="token function">h</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">//\uC774\uB807\uAC8C \uB418\uB294 \uAC83\uC784.</span>

  <span class="token comment">//\uD558\uC704 \uB370\uC774\uD130\uB97C \uC0C1\uC704\uB85C \uBCF4\uB0BC \uC218 \uC788\uC74C.</span>
  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>$scopedSlots<span class="token punctuation">.</span><span class="token function">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>response<span class="token punctuation">,</span>
      <span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loading
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>\uC704\uC640 \uAC19\uC774 \uC815\uC758\uD558\uBA74

\uC0C1\uC704 \uCEF4\uD3EC\uB10C\uD2B8\uC5D0\uC11C 
</code></pre><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot-scoped</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{response, loading}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token comment">&lt;!-- \uC548\uC5D0\uC11C \uD574\uB2F9 \uB370\uC774\uD130\uB97C \uBC1B\uC544\uC62C \uC218 \uC788\uC74C. --&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="cli-\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1107\u1162\u1111\u1169" tabindex="-1"><a class="header-anchor" href="#cli-\u1105\u1173\u11AF-\u1110\u1169\u11BC\u1112\u1161\u11AB-\u1107\u1162\u1111\u1169" aria-hidden="true">#</a> CLI \uB97C \uD1B5\uD55C \uBC30\uD3EC</h2><p><code>npm run build </code> dist \uD3F4\uB354 \uBC11\uC5D0 hosting \uD560\uC218 \uC788\uB294 \uD30C\uC77C\uC774 \uC0DD\uC131\uB428.</p><h2 id="netlify-\u110B\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1162\u1111\u1169" tabindex="-1"><a class="header-anchor" href="#netlify-\u110B\u1173\u11AF-\u110B\u1175\u110B\u116D\u11BC\u1112\u1161\u11AB-\u1107\u1162\u1111\u1169" aria-hidden="true">#</a> Netlify \uC744 \uC774\uC6A9\uD55C \uBC30\uD3EC</h2><p>bae directory \uB9CC \uC124\uC815\uD574\uC11C \uBC30\uD3EC\uD558\uBA74 \uD574\uB2F9 \uC0AC\uC774\uD2B8\uAC00 \uC798 \uB098\uC634.</p><pre><code>\uADF8\uB7F0\uB370, url/(path) \uC774\uB807\uAC8C url \uC774 \uC9C0\uC815\uB420 \uACBD\uC6B0
\uD398\uC774\uC9C0\uB97C \uCC3E\uC744 \uC218 \uC5C6\uB2E4\uACE0 \uB72C\uB2E4. 
\uB531 url\uB85C\uB9CC \uB4E4\uC5B4\uAC00\uC57C \uC798 \uB72C\uB2E4.
\uC65C\uB0D0\uBA74 \uC11C\uBC84\uC5D0\uC11C \uD574\uB2F9 path url\uC744 \uC54C \uAE38\uC774 \uC5C6\uAE30 \uB54C\uBB38\uC774\uB2E4.
\uC774\uC5D0 \uB300\uD574\uC11C \uC124\uC815\uC744 \uD574\uC904 \uC218 \uC788\uB294 \uD30C\uC77C\uC774 
public/_redirects \uC5D0\uC11C \uC124\uC815\uD574\uC904 \uC218 \uC788\uB2E4.

\uC704 \uD30C\uC77C\uC5D0
Netlify settings for single-page application
/*    /index.html   200
</code></pre><p>\uB97C \uCD94\uAC00\uD574\uC900\uB2E4.</p><p><a href="https://cli.vuejs.org/guide/deployment.html#general-guidelines" target="_blank" rel="noopener noreferrer">Netlify\uC124\uC815`);
  _push(serverRenderer.ssrRenderComponent(_component_ExternalLinkIcon, null, null, _parent));
  _push(`</a> \uC704 \uB9C1\uD06C Netlify \uC5D0 \uBC30\uD3EC\uD560 \uB54C \uC124\uC815 \uAC12\uC784.</p><p>\uC704\uC640 \uAC19\uC774 \uCD94\uAC00\uD558\uBA74 \uADF8 \uB4A4\uC758 route \uC815\uBCF4\uB97C \uAC00\uC838\uAC00\uC11C \uD655\uC778\uD558\uB294\uB4EF\uD558\uB2E4.</p><h2 id="env-\u1111\u1161\u110B\u1175\u11AF" tabindex="-1"><a class="header-anchor" href="#env-\u1111\u1161\u110B\u1175\u11AF" aria-hidden="true">#</a> env \uD30C\uC77C</h2><p>\uC5B4\uD50C\uB9AC\uCF00\uC774\uC158\uC5D0 \uACF5\uD1B5\uC73C\uB85C \uC811\uADFC\uD560 \uC218 \uC788\uB294 \uBCC0\uC218\uB97C \uB9CC\uB4E4\uACA0\uB2E4\uB294 \uAC83\uC784. 1) \uC804\uC5ED \uD30C\uC77C .env \uD30C\uC77C\uC744 \uB9CC\uB4E0\uB2E4. 2) APP_TITLE=HELLO \uC774\uB807\uAC8C \uB9CC\uB4E4\uACE0 3) App.vue \uC5D0\uC11C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//created() \uC548\uC5D0     </span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">APP_TITLE</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\uC744 \uB123\uC5B4\uC11C \uC2E4\uD589</span>
<span class="token comment">//=&gt; undefined \uC774 \uB72C\uB2E4.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>4) \uC6D0\uB798\uB294 dotenv \uB77C\uB294 \uD328\uD0A4\uC9C0 \uAC00\uC838\uC640\uC11C, \uBB50 \uC5B4\uCA4C\uAD6C \uC800\uCA4C\uAD6C\uD574\uC11C \uC815\uC758\uD574\uC57C\uB9CC \uC0AC\uC6A9\uD560 \uC218 \uC788\uC5C8\uC74C.
5) vue cli 3 \uC774\uC0C1\uBD80\uD130 \uC9C0\uC6D0\uD558\uB294 \uAE30\uB2A5\uC774 \uC788\uC74C. \uC55E\uC5D0 VUE_ \uB97C \uBD99\uC774\uBA74 \uB428.
6) console.log(p<wbr>rocess.env.VUE_APP_TITLE); \uB97C \uC0AC\uC6A9\uD558\uBA74 \uB05D!
</code></pre></div>`);
}
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/posts/Vue/Vue\uAC15\uC758\uC815\uB9AC.html.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
var Vue_____html = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["ssrRender", _sfc_ssrRender$w], ["__file", "Vue\uAC15\uC758\uC815\uB9AC.html.vue"]]);
var Vue_____html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Vue_____html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$v = {};
function _sfc_ssrRender$v(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/404.html.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
var _404_html = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["ssrRender", _sfc_ssrRender$v], ["__file", "404.html.vue"]]);
var _404_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404_html
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$u = {};
function _sfc_ssrRender$u(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/index.html.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
var index_html$Y = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["ssrRender", _sfc_ssrRender$u], ["__file", "index.html.vue"]]);
var index_html$Z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$Y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$t = {};
function _sfc_ssrRender$t(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/index.html.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
var index_html$W = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["ssrRender", _sfc_ssrRender$t], ["__file", "index.html.vue"]]);
var index_html$X = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$W
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$s = {};
function _sfc_ssrRender$s(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/article/index.html.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
var index_html$U = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["ssrRender", _sfc_ssrRender$s], ["__file", "index.html.vue"]]);
var index_html$V = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$U
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$r = {};
function _sfc_ssrRender$r(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/encrypted/index.html.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
var index_html$S = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["ssrRender", _sfc_ssrRender$r], ["__file", "index.html.vue"]]);
var index_html$T = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$S
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$q = {};
function _sfc_ssrRender$q(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/slide/index.html.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
var index_html$Q = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["ssrRender", _sfc_ssrRender$q], ["__file", "index.html.vue"]]);
var index_html$R = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$Q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$p = {};
function _sfc_ssrRender$p(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/star/index.html.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
var index_html$O = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["ssrRender", _sfc_ssrRender$p], ["__file", "index.html.vue"]]);
var index_html$P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$O
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$o = {};
function _sfc_ssrRender$o(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/timeline/index.html.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
var index_html$M = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["ssrRender", _sfc_ssrRender$o], ["__file", "index.html.vue"]]);
var index_html$N = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$M
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$n = {};
function _sfc_ssrRender$n(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/guide/index.html.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
var index_html$K = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["ssrRender", _sfc_ssrRender$n], ["__file", "index.html.vue"]]);
var index_html$L = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$K
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$m = {};
function _sfc_ssrRender$m(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/disable/index.html.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
var index_html$I = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["ssrRender", _sfc_ssrRender$m], ["__file", "index.html.vue"]]);
var index_html$J = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$I
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$l = {};
function _sfc_ssrRender$l(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/article/index.html.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
var index_html$G = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["ssrRender", _sfc_ssrRender$l], ["__file", "index.html.vue"]]);
var index_html$H = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$G
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$k = {};
function _sfc_ssrRender$k(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/encrypted/index.html.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
var index_html$E = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["ssrRender", _sfc_ssrRender$k], ["__file", "index.html.vue"]]);
var index_html$F = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$E
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$j = {};
function _sfc_ssrRender$j(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/slide/index.html.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
var index_html$C = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["ssrRender", _sfc_ssrRender$j], ["__file", "index.html.vue"]]);
var index_html$D = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$C
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$i = {};
function _sfc_ssrRender$i(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/star/index.html.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
var index_html$A = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["ssrRender", _sfc_ssrRender$i], ["__file", "index.html.vue"]]);
var index_html$B = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$A
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$h = {};
function _sfc_ssrRender$h(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/timeline/index.html.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
var index_html$y = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["ssrRender", _sfc_ssrRender$h], ["__file", "index.html.vue"]]);
var index_html$z = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$y
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$g = {};
function _sfc_ssrRender$g(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/javascript/index.html.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
var index_html$w = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["ssrRender", _sfc_ssrRender$g], ["__file", "index.html.vue"]]);
var index_html$x = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$w
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$f = {};
function _sfc_ssrRender$f(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/encryption/index.html.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
var index_html$u = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["ssrRender", _sfc_ssrRender$f], ["__file", "index.html.vue"]]);
var index_html$v = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$u
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$e = {};
function _sfc_ssrRender$e(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/study/index.html.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
var index_html$s = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["ssrRender", _sfc_ssrRender$e], ["__file", "index.html.vue"]]);
var index_html$t = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$s
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$d = {};
function _sfc_ssrRender$d(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/markdown/index.html.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
var index_html$q = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["ssrRender", _sfc_ssrRender$d], ["__file", "index.html.vue"]]);
var index_html$r = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$q
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$c = {};
function _sfc_ssrRender$c(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/jquery/index.html.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
var index_html$o = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["ssrRender", _sfc_ssrRender$c], ["__file", "index.html.vue"]]);
var index_html$p = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$o
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$b = {};
function _sfc_ssrRender$b(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/page-config/index.html.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
var index_html$m = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$b], ["__file", "index.html.vue"]]);
var index_html$n = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$m
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$a = {};
function _sfc_ssrRender$a(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/vue/index.html.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
var index_html$k = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$a], ["__file", "index.html.vue"]]);
var index_html$l = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$k
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$9 = {};
function _sfc_ssrRender$9(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/guide/index.html.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
var index_html$i = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$9], ["__file", "index.html.vue"]]);
var index_html$j = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$i
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$8 = {};
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/category/review/index.html.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
var index_html$g = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8], ["__file", "index.html.vue"]]);
var index_html$h = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$g
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$7 = {};
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/teamleader-education/index.html.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
var index_html$e = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7], ["__file", "index.html.vue"]]);
var index_html$f = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$e
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$6 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/category/index.html.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
var index_html$c = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__file", "index.html.vue"]]);
var index_html$d = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$c
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$5 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/pwa/index.html.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
var index_html$a = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__file", "index.html.vue"]]);
var index_html$b = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$a
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/jquery/index.html.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
var index_html$8 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__file", "index.html.vue"]]);
var index_html$9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$8
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/review/index.html.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
var index_html$6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__file", "index.html.vue"]]);
var index_html$7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$6
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/vue/index.html.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
var index_html$4 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__file", "index.html.vue"]]);
var index_html$5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/tag/study/index.html.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var index_html$2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__file", "index.html.vue"]]);
var index_html$3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../pages/zh/tag/index.html.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
var index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__file", "index.html.vue"]]);
var index_html$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": index_html
}, Symbol.toStringTag, { value: "Module" }));
var skipLink = "";
var SkipLink = vue.defineComponent({
  name: "SkipLink",
  props: {
    content: {
      type: String,
      default: "main-content"
    }
  },
  setup(props) {
    const route = vueRouter.useRoute();
    const backToTop2 = vue.ref();
    vue.watch(() => route.path, () => backToTop2.value.focus());
    const focusMainContent = ({ target }) => {
      const el = document.querySelector(target.hash);
      if (el) {
        const removeTabIndex = () => {
          el.removeAttribute("tabindex");
          el.removeEventListener("blur", removeTabIndex);
        };
        el.setAttribute("tabindex", "-1");
        el.addEventListener("blur", removeTabIndex);
        el.focus();
        window.scrollTo(0, 0);
      }
    };
    return () => [
      vue.h("span", {
        ref: backToTop2,
        tabindex: "-1"
      }),
      vue.h("a", {
        href: `#${props.content}`,
        class: "skip-link sr-only",
        onClick: focusMainContent
      }, "Skip to content")
    ];
  }
});
var _404$2 = "";
var _404 = vue.defineComponent({
  name: "404",
  setup() {
    var _a;
    const routeLocale = useRouteLocale();
    const themeLocale = useThemeLocaleData();
    const getMsg = () => {
      const messages = themeLocale.value.routeLocales["404msg"];
      return messages[Math.floor(Math.random() * messages.length)];
    };
    const { navigate } = vueRouter.useLink({
      to: (_a = themeLocale.value.home) != null ? _a : routeLocale.value
    });
    return () => [
      vue.h(SkipLink),
      vue.h(vue.resolveComponent("CommonWrapper"), { sidebar: false }, () => vue.h("main", { class: "page not-found", id: "main-content" }, [
        vue.h(Page404Icon),
        vue.h("blockquote", getMsg()),
        vue.h("button", {
          class: "action-button",
          onClick: () => {
            window.history.go(-1);
          }
        }, themeLocale.value.routeLocales.back),
        vue.h("button", { class: "action-button", onClick: () => navigate() }, themeLocale.value.routeLocales.home)
      ]))
    ];
  }
});
var _404$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": _404
}, Symbol.toStringTag, { value: "Module" }));
var fadeSlideY = "";
var FadeSlideY = vue.defineComponent({
  name: "FadeSlideY",
  setup(_props, { slots }) {
    const scrollPromise2 = useScrollPromise();
    const onBeforeEnter = scrollPromise2.resolve;
    const onBeforeLeave = scrollPromise2.pending;
    return () => vue.h(vue.Transition, {
      name: "fade-slide-y",
      mode: "out-in",
      onBeforeEnter,
      onBeforeLeave
    }, () => {
      var _a;
      return (_a = slots["default"]) == null ? void 0 : _a.call(slots);
    });
  }
});
var Layout = vue.defineComponent({
  name: "Layout",
  setup() {
    const themeData2 = useThemeData();
    const themeLocale = useThemeLocaleData();
    const page2 = usePageData();
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();
    const sidebarDisplay = vue.computed(() => themeLocale.value.blog.sidebarDisplay || themeData2.value.blog.sidebarDisplay || "mobile");
    return () => [
      vue.h(SkipLink),
      vue.h(vue.resolveComponent("CommonWrapper"), {}, {
        default: () => frontmatter.value.home ? vue.h(vue.resolveComponent("HomePage")) : vue.h(FadeSlideY, () => vue.h(vue.resolveComponent("NormalPage"), { key: page2.value.path })),
        ...sidebarDisplay.value !== "none" ? { navScreenBottom: () => vue.h(vue.resolveComponent("BloggerInfo")) } : {},
        ...!isMobile.value && sidebarDisplay.value === "always" ? { sidebar: () => vue.h(vue.resolveComponent("BloggerInfo")) } : {}
      })
    ];
  }
});
var Layout$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Layout
}, Symbol.toStringTag, { value: "Module" }));
var layout = "";
const u = () => vue.h(a$5, { name: "back" }, () => vue.h("path", { d: "M1014.749 449.156v125.688H260.626l345.64 345.64-89.239 89.237L19.307 512l497.72-497.721 89.238 89.238-345.64 345.64h754.124z" })), r = () => vue.h(a$5, { name: "home" }, () => vue.h("path", { d: "M780.106 420.978L506.994 147.866 233.882 420.978h.045v455.11H780.06v-455.11h.046zm90.977 90.976V876.09a91.022 91.022 0 01-91.023 91.022H233.927a91.022 91.022 0 01-91.022-91.022V511.954l-67.22 67.175-64.307-64.307 431.309-431.31c35.498-35.498 93.115-35.498 128.614 0l431.309 431.31-64.307 64.307L871.083 512z" }));
var i = vue.defineComponent({ name: "SlidePage", setup() {
  const s2 = vueRouter.useRouter(), n2 = vue.ref(false), i2 = vue.ref(null), c2 = () => {
    n2.value = false;
  };
  return core.onClickOutside(i2, c2), () => vue.h("div", { class: "presentation" }, [vue.h(Content$1), vue.h("div", { ref: i2, class: ["menu", { active: n2.value }] }, [vue.h("button", { class: "menu-button", onClick: () => {
    n2.value = !n2.value;
  } }, vue.h("span", { class: "icon" })), vue.h("button", { class: "back-button", onClick: () => (c2(), void window.history.go(-1)) }, vue.h(u)), vue.h("button", { class: "home-button", onClick: () => (c2(), void s2.push("/")) }, vue.h(r))])]);
} });
var Slide$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": i
}, Symbol.toStringTag, { value: "Module" }));
var Blog = vue.defineComponent({
  name: "Blog",
  setup() {
    const frontmatter = usePageFrontmatter();
    const isMobile = useMobile();
    return () => [
      vue.h(SkipLink),
      vue.h(vue.resolveComponent("CommonWrapper"), { sidebar: false }, {
        default: () => frontmatter.value["home"] ? vue.h(BlogHome) : vue.h("main", { class: "page blog", id: "main-content" }, vue.h("div", { class: "blog-page-wrapper" }, [
          vue.h(BlogPage),
          vue.h(DropTransition, { delay: 0.16 }, () => vue.h(InfoPanel$1))
        ])),
        navScreenBottom: () => vue.h(BloggerInfo),
        ...isMobile.value ? { sidebar: () => vue.h(InfoList) } : {}
      })
    ];
  }
});
var Blog$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": Blog
}, Symbol.toStringTag, { value: "Module" }));
/*!
  * PhotoSwipe 5.2.8 - https://photoswipe.com
  * (c) 2022 Dmytro Semenov
  */
function createElement(className, tagName, appendToEl) {
  const el = document.createElement(tagName || "div");
  if (className) {
    el.className = className;
  }
  if (appendToEl) {
    appendToEl.appendChild(el);
  }
  return el;
}
function equalizePoints(p1, p2) {
  p1.x = p2.x;
  p1.y = p2.y;
  if (p2.id !== void 0) {
    p1.id = p2.id;
  }
  return p1;
}
function roundPoint(p2) {
  p2.x = Math.round(p2.x);
  p2.y = Math.round(p2.y);
}
function getDistanceBetween(p1, p2) {
  const x2 = Math.abs(p1.x - p2.x);
  const y2 = Math.abs(p1.y - p2.y);
  return Math.sqrt(x2 * x2 + y2 * y2);
}
function pointsEqual(p1, p2) {
  return p1.x === p2.x && p1.y === p2.y;
}
function clamp(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
function toTransformString(x2, y2, scale) {
  let propValue = "translate3d(" + x2 + "px," + (y2 || 0) + "px,0)";
  if (scale !== void 0) {
    propValue += " scale3d(" + scale + "," + scale + ",1)";
  }
  return propValue;
}
function setTransform(el, x2, y2, scale) {
  el.style.transform = toTransformString(x2, y2, scale);
}
const defaultCSSEasing = "cubic-bezier(.4,0,.22,1)";
function setTransitionStyle(el, prop, duration, ease) {
  el.style.transition = prop ? prop + " " + duration + "ms " + (ease || defaultCSSEasing) : "none";
}
function setWidthHeight(el, w2, h2) {
  el.style.width = typeof w2 === "number" ? w2 + "px" : w2;
  el.style.height = typeof h2 === "number" ? h2 + "px" : h2;
}
function removeTransitionStyle(el) {
  setTransitionStyle(el);
}
function decodeImage(img) {
  if ("decode" in img) {
    return img.decode();
  }
  if (img.complete) {
    return Promise.resolve(img);
  }
  return new Promise((resolve, reject) => {
    img.onload = () => resolve(img);
    img.onerror = reject;
  });
}
const LOAD_STATE = {
  IDLE: "idle",
  LOADING: "loading",
  LOADED: "loaded",
  ERROR: "error"
};
function specialKeyUsed(e2) {
  if (e2.which === 2 || e2.ctrlKey || e2.metaKey || e2.altKey || e2.shiftKey) {
    return true;
  }
}
function getElementsFromOption(option, legacySelector, parent = document) {
  let elements = [];
  if (option instanceof Element) {
    elements = [option];
  } else if (option instanceof NodeList || Array.isArray(option)) {
    elements = Array.from(option);
  } else {
    const selector = typeof option === "string" ? option : legacySelector;
    if (selector) {
      elements = Array.from(parent.querySelectorAll(selector));
    }
  }
  return elements;
}
let supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, "passive", {
    get: () => {
      supportsPassive = true;
    }
  }));
} catch (e2) {
}
class DOMEvents {
  constructor() {
    this._pool = [];
  }
  add(target, type2, listener, passive) {
    this._toggleListener(target, type2, listener, passive);
  }
  remove(target, type2, listener, passive) {
    this._toggleListener(target, type2, listener, passive, true);
  }
  removeAll() {
    this._pool.forEach((poolItem) => {
      this._toggleListener(poolItem.target, poolItem.type, poolItem.listener, poolItem.passive, true, true);
    });
    this._pool = [];
  }
  _toggleListener(target, type2, listener, passive, unbind, skipPool) {
    if (!target) {
      return;
    }
    const methodName = unbind ? "removeEventListener" : "addEventListener";
    const types = type2.split(" ");
    types.forEach((eType) => {
      if (eType) {
        if (!skipPool) {
          if (unbind) {
            this._pool = this._pool.filter((poolItem) => {
              return poolItem.type !== eType || poolItem.listener !== listener || poolItem.target !== target;
            });
          } else {
            this._pool.push({
              target,
              type: eType,
              listener,
              passive
            });
          }
        }
        const eventOptions = supportsPassive ? { passive: passive || false } : false;
        target[methodName](eType, listener, eventOptions);
      }
    });
  }
}
function getViewportSize(options, pswp) {
  if (options.getViewportSizeFn) {
    const newViewportSize = options.getViewportSizeFn(options, pswp);
    if (newViewportSize) {
      return newViewportSize;
    }
  }
  return {
    x: document.documentElement.clientWidth,
    y: window.innerHeight
  };
}
function parsePaddingOption(prop, options, viewportSize, itemData, index2) {
  let paddingValue;
  if (options.paddingFn) {
    paddingValue = options.paddingFn(viewportSize, itemData, index2)[prop];
  } else if (options.padding) {
    paddingValue = options.padding[prop];
  } else {
    const legacyPropName = "padding" + prop[0].toUpperCase() + prop.slice(1);
    if (options[legacyPropName]) {
      paddingValue = options[legacyPropName];
    }
  }
  return paddingValue || 0;
}
function getPanAreaSize(options, viewportSize, itemData, index2) {
  return {
    x: viewportSize.x - parsePaddingOption("left", options, viewportSize, itemData, index2) - parsePaddingOption("right", options, viewportSize, itemData, index2),
    y: viewportSize.y - parsePaddingOption("top", options, viewportSize, itemData, index2) - parsePaddingOption("bottom", options, viewportSize, itemData, index2)
  };
}
class PanBounds {
  constructor(slide) {
    this.slide = slide;
    this.currZoomLevel = 1;
    this.center = {};
    this.max = {};
    this.min = {};
    this.reset();
  }
  update(currZoomLevel) {
    this.currZoomLevel = currZoomLevel;
    if (!this.slide.width) {
      this.reset();
    } else {
      this._updateAxis("x");
      this._updateAxis("y");
      this.slide.pswp.dispatch("calcBounds", { slide: this.slide });
    }
  }
  _updateAxis(axis) {
    const { pswp } = this.slide;
    const elSize = this.slide[axis === "x" ? "width" : "height"] * this.currZoomLevel;
    const paddingProp = axis === "x" ? "left" : "top";
    const padding = parsePaddingOption(paddingProp, pswp.options, pswp.viewportSize, this.slide.data, this.slide.index);
    const panAreaSize = this.slide.panAreaSize[axis];
    this.center[axis] = Math.round((panAreaSize - elSize) / 2) + padding;
    this.max[axis] = elSize > panAreaSize ? Math.round(panAreaSize - elSize) + padding : this.center[axis];
    this.min[axis] = elSize > panAreaSize ? padding : this.center[axis];
  }
  reset() {
    this.center.x = 0;
    this.center.y = 0;
    this.max.x = 0;
    this.max.y = 0;
    this.min.x = 0;
    this.min.y = 0;
  }
  correctPan(axis, panOffset) {
    return clamp(panOffset, this.max[axis], this.min[axis]);
  }
}
const MAX_IMAGE_WIDTH = 4e3;
class ZoomLevel {
  constructor(options, itemData, index2, pswp) {
    this.pswp = pswp;
    this.options = options;
    this.itemData = itemData;
    this.index = index2;
  }
  update(maxWidth, maxHeight, panAreaSize) {
    this.elementSize = {
      x: maxWidth,
      y: maxHeight
    };
    this.panAreaSize = panAreaSize;
    const hRatio = this.panAreaSize.x / this.elementSize.x;
    const vRatio = this.panAreaSize.y / this.elementSize.y;
    this.fit = Math.min(1, hRatio < vRatio ? hRatio : vRatio);
    this.fill = Math.min(1, hRatio > vRatio ? hRatio : vRatio);
    this.vFill = Math.min(1, vRatio);
    this.initial = this._getInitial();
    this.secondary = this._getSecondary();
    this.max = Math.max(this.initial, this.secondary, this._getMax());
    this.min = Math.min(this.fit, this.initial, this.secondary);
    if (this.pswp) {
      this.pswp.dispatch("zoomLevelsUpdate", { zoomLevels: this, slideData: this.itemData });
    }
  }
  _parseZoomLevelOption(optionPrefix) {
    const optionName = optionPrefix + "ZoomLevel";
    const optionValue = this.options[optionName];
    if (!optionValue) {
      return;
    }
    if (typeof optionValue === "function") {
      return optionValue(this);
    }
    if (optionValue === "fill") {
      return this.fill;
    }
    if (optionValue === "fit") {
      return this.fit;
    }
    return Number(optionValue);
  }
  _getSecondary() {
    let currZoomLevel = this._parseZoomLevelOption("secondary");
    if (currZoomLevel) {
      return currZoomLevel;
    }
    currZoomLevel = Math.min(1, this.fit * 3);
    if (currZoomLevel * this.elementSize.x > MAX_IMAGE_WIDTH) {
      currZoomLevel = MAX_IMAGE_WIDTH / this.elementSize.x;
    }
    return currZoomLevel;
  }
  _getInitial() {
    return this._parseZoomLevelOption("initial") || this.fit;
  }
  _getMax() {
    const currZoomLevel = this._parseZoomLevelOption("max");
    if (currZoomLevel) {
      return currZoomLevel;
    }
    return Math.max(1, this.fit * 4);
  }
}
class Slide {
  constructor(data2, index2, pswp) {
    this.data = data2;
    this.index = index2;
    this.pswp = pswp;
    this.isActive = index2 === pswp.currIndex;
    this.currentResolution = 0;
    this.panAreaSize = {};
    this.isFirstSlide = this.isActive && !pswp.opener.isOpen;
    this.zoomLevels = new ZoomLevel(pswp.options, data2, index2, pswp);
    this.pswp.dispatch("gettingData", {
      slide: this,
      data: this.data,
      index: index2
    });
    this.pan = {
      x: 0,
      y: 0
    };
    this.content = this.pswp.contentLoader.getContentBySlide(this);
    this.container = createElement("pswp__zoom-wrap");
    this.currZoomLevel = 1;
    this.width = this.content.width;
    this.height = this.content.height;
    this.bounds = new PanBounds(this);
    this.prevDisplayedWidth = -1;
    this.prevDisplayedHeight = -1;
    this.pswp.dispatch("slideInit", { slide: this });
  }
  setIsActive(isActive) {
    if (isActive && !this.isActive) {
      this.activate();
    } else if (!isActive && this.isActive) {
      this.deactivate();
    }
  }
  append(holderElement) {
    this.holderElement = holderElement;
    if (!this.data) {
      this.holderElement.innerHTML = "";
      return;
    }
    this.calculateSize();
    this.container.style.transformOrigin = "0 0";
    this.load();
    this.appendHeavy();
    this.updateContentSize();
    this.holderElement.innerHTML = "";
    this.holderElement.appendChild(this.container);
    this.zoomAndPanToInitial();
    this.pswp.dispatch("firstZoomPan", { slide: this });
    this.applyCurrentZoomPan();
    this.pswp.dispatch("afterSetContent", { slide: this });
    if (this.isActive) {
      this.activate();
    }
  }
  load() {
    this.content.load();
    this.pswp.dispatch("slideLoad", { slide: this });
  }
  appendHeavy() {
    const { pswp } = this;
    const appendHeavyNearby = true;
    if (this.heavyAppended || !pswp.opener.isOpen || pswp.mainScroll.isShifted() || !this.isActive && !appendHeavyNearby) {
      return;
    }
    if (this.pswp.dispatch("appendHeavy", { slide: this }).defaultPrevented) {
      return;
    }
    this.heavyAppended = true;
    this.content.append();
    this.pswp.dispatch("appendHeavyContent", { slide: this });
  }
  activate() {
    this.isActive = true;
    this.appendHeavy();
    this.content.activate();
    this.pswp.dispatch("slideActivate", { slide: this });
  }
  deactivate() {
    this.isActive = false;
    this.content.deactivate();
    this.currentResolution = 0;
    this.zoomAndPanToInitial();
    this.applyCurrentZoomPan();
    this.updateContentSize();
    this.pswp.dispatch("slideDeactivate", { slide: this });
  }
  destroy() {
    this.content.hasSlide = false;
    this.content.remove();
    this.pswp.dispatch("slideDestroy", { slide: this });
  }
  resize() {
    if (this.currZoomLevel === this.zoomLevels.initial || !this.isActive) {
      this.calculateSize();
      this.currentResolution = 0;
      this.zoomAndPanToInitial();
      this.applyCurrentZoomPan();
      this.updateContentSize();
    } else {
      this.calculateSize();
      this.bounds.update(this.currZoomLevel);
      this.panTo(this.pan.x, this.pan.y);
    }
  }
  updateContentSize(force) {
    const scaleMultiplier = this.currentResolution || this.zoomLevels.initial;
    if (!scaleMultiplier) {
      return;
    }
    const width = Math.round(this.width * scaleMultiplier) || this.pswp.viewportSize.x;
    const height = Math.round(this.height * scaleMultiplier) || this.pswp.viewportSize.y;
    if (!this.sizeChanged(width, height) && !force) {
      return;
    }
    this.content.setDisplayedSize(width, height);
  }
  sizeChanged(width, height) {
    if (width !== this.prevDisplayedWidth || height !== this.prevDisplayedHeight) {
      this.prevDisplayedWidth = width;
      this.prevDisplayedHeight = height;
      return true;
    }
    return false;
  }
  getPlaceholderElement() {
    if (this.content.placeholder) {
      return this.content.placeholder.element;
    }
  }
  zoomTo(destZoomLevel, centerPoint, transitionDuration, ignoreBounds) {
    const { pswp } = this;
    if (!this.isZoomable() || pswp.mainScroll.isShifted()) {
      return;
    }
    pswp.dispatch("beforeZoomTo", {
      destZoomLevel,
      centerPoint,
      transitionDuration
    });
    pswp.animations.stopAllPan();
    const prevZoomLevel = this.currZoomLevel;
    if (!ignoreBounds) {
      destZoomLevel = clamp(destZoomLevel, this.zoomLevels.min, this.zoomLevels.max);
    }
    this.setZoomLevel(destZoomLevel);
    this.pan.x = this.calculateZoomToPanOffset("x", centerPoint, prevZoomLevel);
    this.pan.y = this.calculateZoomToPanOffset("y", centerPoint, prevZoomLevel);
    roundPoint(this.pan);
    const finishTransition = () => {
      this._setResolution(destZoomLevel);
      this.applyCurrentZoomPan();
    };
    if (!transitionDuration) {
      finishTransition();
    } else {
      pswp.animations.startTransition({
        isPan: true,
        name: "zoomTo",
        target: this.container,
        transform: this.getCurrentTransform(),
        onComplete: finishTransition,
        duration: transitionDuration,
        easing: pswp.options.easing
      });
    }
  }
  toggleZoom(centerPoint) {
    this.zoomTo(this.currZoomLevel === this.zoomLevels.initial ? this.zoomLevels.secondary : this.zoomLevels.initial, centerPoint, this.pswp.options.zoomAnimationDuration);
  }
  setZoomLevel(currZoomLevel) {
    this.currZoomLevel = currZoomLevel;
    this.bounds.update(this.currZoomLevel);
  }
  calculateZoomToPanOffset(axis, point, prevZoomLevel) {
    const totalPanDistance = this.bounds.max[axis] - this.bounds.min[axis];
    if (totalPanDistance === 0) {
      return this.bounds.center[axis];
    }
    if (!point) {
      point = this.pswp.getViewportCenterPoint();
    }
    const zoomFactor = this.currZoomLevel / prevZoomLevel;
    return this.bounds.correctPan(axis, (this.pan[axis] - point[axis]) * zoomFactor + point[axis]);
  }
  panTo(panX, panY) {
    this.pan.x = this.bounds.correctPan("x", panX);
    this.pan.y = this.bounds.correctPan("y", panY);
    this.applyCurrentZoomPan();
  }
  isPannable() {
    return this.width && this.currZoomLevel > this.zoomLevels.fit;
  }
  isZoomable() {
    return this.width && this.content.isZoomable();
  }
  applyCurrentZoomPan() {
    this._applyZoomTransform(this.pan.x, this.pan.y, this.currZoomLevel);
    if (this === this.pswp.currSlide) {
      this.pswp.dispatch("zoomPanUpdate", { slide: this });
    }
  }
  zoomAndPanToInitial() {
    this.currZoomLevel = this.zoomLevels.initial;
    this.bounds.update(this.currZoomLevel);
    equalizePoints(this.pan, this.bounds.center);
    this.pswp.dispatch("initialZoomPan", { slide: this });
  }
  _applyZoomTransform(x2, y2, zoom) {
    zoom /= this.currentResolution || this.zoomLevels.initial;
    setTransform(this.container, x2, y2, zoom);
  }
  calculateSize() {
    const { pswp } = this;
    equalizePoints(this.panAreaSize, getPanAreaSize(pswp.options, pswp.viewportSize, this.data, this.index));
    this.zoomLevels.update(this.width, this.height, this.panAreaSize);
    pswp.dispatch("calcSlideSize", {
      slide: this
    });
  }
  getCurrentTransform() {
    const scale = this.currZoomLevel / (this.currentResolution || this.zoomLevels.initial);
    return toTransformString(this.pan.x, this.pan.y, scale);
  }
  _setResolution(newResolution) {
    if (newResolution === this.currentResolution) {
      return;
    }
    this.currentResolution = newResolution;
    this.updateContentSize();
    this.pswp.dispatch("resolutionChanged");
  }
}
const PAN_END_FRICTION = 0.35;
const VERTICAL_DRAG_FRICTION = 0.6;
const MIN_RATIO_TO_CLOSE = 0.4;
const MIN_NEXT_SLIDE_SPEED = 0.5;
function project(initialVelocity, decelerationRate) {
  return initialVelocity * decelerationRate / (1 - decelerationRate);
}
class DragHandler {
  constructor(gestures) {
    this.gestures = gestures;
    this.pswp = gestures.pswp;
    this.startPan = {};
  }
  start() {
    equalizePoints(this.startPan, this.pswp.currSlide.pan);
    this.pswp.animations.stopAll();
  }
  change() {
    const { p1, prevP1, dragAxis, pswp } = this.gestures;
    const { currSlide } = pswp;
    if (dragAxis === "y" && pswp.options.closeOnVerticalDrag && currSlide.currZoomLevel <= currSlide.zoomLevels.fit && !this.gestures.isMultitouch) {
      const panY = currSlide.pan.y + (p1.y - prevP1.y);
      if (!pswp.dispatch("verticalDrag", { panY }).defaultPrevented) {
        this._setPanWithFriction("y", panY, VERTICAL_DRAG_FRICTION);
        const bgOpacity = 1 - Math.abs(this._getVerticalDragRatio(currSlide.pan.y));
        pswp.applyBgOpacity(bgOpacity);
        currSlide.applyCurrentZoomPan();
      }
    } else {
      const mainScrollChanged = this._panOrMoveMainScroll("x");
      if (!mainScrollChanged) {
        this._panOrMoveMainScroll("y");
        roundPoint(currSlide.pan);
        currSlide.applyCurrentZoomPan();
      }
    }
  }
  end() {
    const { pswp, velocity } = this.gestures;
    const { mainScroll } = pswp;
    let indexDiff = 0;
    pswp.animations.stopAll();
    if (mainScroll.isShifted()) {
      const mainScrollShiftDiff = mainScroll.x - mainScroll.getCurrSlideX();
      const currentSlideVisibilityRatio = mainScrollShiftDiff / pswp.viewportSize.x;
      if (velocity.x < -MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio < 0 || velocity.x < 0.1 && currentSlideVisibilityRatio < -0.5) {
        indexDiff = 1;
        velocity.x = Math.min(velocity.x, 0);
      } else if (velocity.x > MIN_NEXT_SLIDE_SPEED && currentSlideVisibilityRatio > 0 || velocity.x > -0.1 && currentSlideVisibilityRatio > 0.5) {
        indexDiff = -1;
        velocity.x = Math.max(velocity.x, 0);
      }
      mainScroll.moveIndexBy(indexDiff, true, velocity.x);
    }
    if (pswp.currSlide.currZoomLevel > pswp.currSlide.zoomLevels.max || this.gestures.isMultitouch) {
      this.gestures.zoomLevels.correctZoomPan(true);
    } else {
      this._finishPanGestureForAxis("x");
      this._finishPanGestureForAxis("y");
    }
  }
  _finishPanGestureForAxis(axis) {
    const { pswp } = this;
    const { currSlide } = pswp;
    const { velocity } = this.gestures;
    const { pan, bounds } = currSlide;
    const panPos = pan[axis];
    const restoreBgOpacity = pswp.bgOpacity < 1 && axis === "y";
    const decelerationRate = 0.995;
    const projectedPosition = panPos + project(velocity[axis], decelerationRate);
    if (restoreBgOpacity) {
      const vDragRatio = this._getVerticalDragRatio(panPos);
      const projectedVDragRatio = this._getVerticalDragRatio(projectedPosition);
      if (vDragRatio < 0 && projectedVDragRatio < -MIN_RATIO_TO_CLOSE || vDragRatio > 0 && projectedVDragRatio > MIN_RATIO_TO_CLOSE) {
        pswp.close();
        return;
      }
    }
    const correctedPanPosition = bounds.correctPan(axis, projectedPosition);
    if (panPos === correctedPanPosition) {
      return;
    }
    const dampingRatio = correctedPanPosition === projectedPosition ? 1 : 0.82;
    const initialBgOpacity = pswp.bgOpacity;
    const totalPanDist = correctedPanPosition - panPos;
    pswp.animations.startSpring({
      name: "panGesture" + axis,
      isPan: true,
      start: panPos,
      end: correctedPanPosition,
      velocity: velocity[axis],
      dampingRatio,
      onUpdate: (pos) => {
        if (restoreBgOpacity && pswp.bgOpacity < 1) {
          const animationProgressRatio = 1 - (correctedPanPosition - pos) / totalPanDist;
          pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * animationProgressRatio, 0, 1));
        }
        pan[axis] = Math.floor(pos);
        currSlide.applyCurrentZoomPan();
      }
    });
  }
  _panOrMoveMainScroll(axis) {
    const { p1, pswp, dragAxis, prevP1, isMultitouch } = this.gestures;
    const { currSlide, mainScroll } = pswp;
    const delta = p1[axis] - prevP1[axis];
    const newMainScrollX = mainScroll.x + delta;
    if (!delta) {
      return;
    }
    if (axis === "x" && !currSlide.isPannable() && !isMultitouch) {
      mainScroll.moveTo(newMainScrollX, true);
      return true;
    }
    const { bounds } = currSlide;
    const newPan = currSlide.pan[axis] + delta;
    if (pswp.options.allowPanToNext && dragAxis === "x" && axis === "x" && !isMultitouch) {
      const currSlideMainScrollX = mainScroll.getCurrSlideX();
      const mainScrollShiftDiff = mainScroll.x - currSlideMainScrollX;
      const isLeftToRight = delta > 0;
      const isRightToLeft = !isLeftToRight;
      if (newPan > bounds.min[axis] && isLeftToRight) {
        const wasAtMinPanPosition = bounds.min[axis] <= this.startPan[axis];
        if (wasAtMinPanPosition) {
          mainScroll.moveTo(newMainScrollX, true);
          return true;
        } else {
          this._setPanWithFriction(axis, newPan);
        }
      } else if (newPan < bounds.max[axis] && isRightToLeft) {
        const wasAtMaxPanPosition = this.startPan[axis] <= bounds.max[axis];
        if (wasAtMaxPanPosition) {
          mainScroll.moveTo(newMainScrollX, true);
          return true;
        } else {
          this._setPanWithFriction(axis, newPan);
        }
      } else {
        if (mainScrollShiftDiff !== 0) {
          if (mainScrollShiftDiff > 0) {
            mainScroll.moveTo(Math.max(newMainScrollX, currSlideMainScrollX), true);
            return true;
          } else if (mainScrollShiftDiff < 0) {
            mainScroll.moveTo(Math.min(newMainScrollX, currSlideMainScrollX), true);
            return true;
          }
        } else {
          this._setPanWithFriction(axis, newPan);
        }
      }
    } else {
      if (axis === "y") {
        if (!mainScroll.isShifted() && bounds.min.y !== bounds.max.y) {
          this._setPanWithFriction(axis, newPan);
        }
      } else {
        this._setPanWithFriction(axis, newPan);
      }
    }
  }
  _getVerticalDragRatio(panY) {
    return (panY - this.pswp.currSlide.bounds.center.y) / (this.pswp.viewportSize.y / 3);
  }
  _setPanWithFriction(axis, potentialPan, customFriction) {
    const { pan, bounds } = this.pswp.currSlide;
    const correctedPan = bounds.correctPan(axis, potentialPan);
    if (correctedPan !== potentialPan || customFriction) {
      const delta = Math.round(potentialPan - pan[axis]);
      pan[axis] += delta * (customFriction || PAN_END_FRICTION);
    } else {
      pan[axis] = potentialPan;
    }
  }
}
const UPPER_ZOOM_FRICTION = 0.05;
const LOWER_ZOOM_FRICTION = 0.15;
function getZoomPointsCenter(p2, p1, p22) {
  p2.x = (p1.x + p22.x) / 2;
  p2.y = (p1.y + p22.y) / 2;
  return p2;
}
class ZoomHandler {
  constructor(gestures) {
    this.gestures = gestures;
    this.pswp = this.gestures.pswp;
    this._startPan = {};
    this._startZoomPoint = {};
    this._zoomPoint = {};
  }
  start() {
    this._startZoomLevel = this.pswp.currSlide.currZoomLevel;
    equalizePoints(this._startPan, this.pswp.currSlide.pan);
    this.pswp.animations.stopAllPan();
    this._wasOverFitZoomLevel = false;
  }
  change() {
    const { p1, startP1, p2, startP2, pswp } = this.gestures;
    const { currSlide } = pswp;
    const minZoomLevel = currSlide.zoomLevels.min;
    const maxZoomLevel = currSlide.zoomLevels.max;
    if (!currSlide.isZoomable() || pswp.mainScroll.isShifted()) {
      return;
    }
    getZoomPointsCenter(this._startZoomPoint, startP1, startP2);
    getZoomPointsCenter(this._zoomPoint, p1, p2);
    let currZoomLevel = 1 / getDistanceBetween(startP1, startP2) * getDistanceBetween(p1, p2) * this._startZoomLevel;
    if (currZoomLevel > currSlide.zoomLevels.initial + currSlide.zoomLevels.initial / 15) {
      this._wasOverFitZoomLevel = true;
    }
    if (currZoomLevel < minZoomLevel) {
      if (pswp.options.pinchToClose && !this._wasOverFitZoomLevel && this._startZoomLevel <= currSlide.zoomLevels.initial) {
        const bgOpacity = 1 - (minZoomLevel - currZoomLevel) / (minZoomLevel / 1.2);
        if (!pswp.dispatch("pinchClose", { bgOpacity }).defaultPrevented) {
          pswp.applyBgOpacity(bgOpacity);
        }
      } else {
        currZoomLevel = minZoomLevel - (minZoomLevel - currZoomLevel) * LOWER_ZOOM_FRICTION;
      }
    } else if (currZoomLevel > maxZoomLevel) {
      currZoomLevel = maxZoomLevel + (currZoomLevel - maxZoomLevel) * UPPER_ZOOM_FRICTION;
    }
    currSlide.pan.x = this._calculatePanForZoomLevel("x", currZoomLevel);
    currSlide.pan.y = this._calculatePanForZoomLevel("y", currZoomLevel);
    currSlide.setZoomLevel(currZoomLevel);
    currSlide.applyCurrentZoomPan();
  }
  end() {
    const { pswp } = this;
    const { currSlide } = pswp;
    if (currSlide.currZoomLevel < currSlide.zoomLevels.initial && !this._wasOverFitZoomLevel && pswp.options.pinchToClose) {
      pswp.close();
    } else {
      this.correctZoomPan();
    }
  }
  _calculatePanForZoomLevel(axis, currZoomLevel) {
    const zoomFactor = currZoomLevel / this._startZoomLevel;
    return this._zoomPoint[axis] - (this._startZoomPoint[axis] - this._startPan[axis]) * zoomFactor;
  }
  correctZoomPan(ignoreGesture) {
    const { pswp } = this;
    const { currSlide } = pswp;
    if (!currSlide.isZoomable()) {
      return;
    }
    if (this._zoomPoint.x === void 0) {
      ignoreGesture = true;
    }
    const prevZoomLevel = currSlide.currZoomLevel;
    let destinationZoomLevel;
    let currZoomLevelNeedsChange = true;
    if (prevZoomLevel < currSlide.zoomLevels.initial) {
      destinationZoomLevel = currSlide.zoomLevels.initial;
    } else if (prevZoomLevel > currSlide.zoomLevels.max) {
      destinationZoomLevel = currSlide.zoomLevels.max;
    } else {
      currZoomLevelNeedsChange = false;
      destinationZoomLevel = prevZoomLevel;
    }
    const initialBgOpacity = pswp.bgOpacity;
    const restoreBgOpacity = pswp.bgOpacity < 1;
    const initialPan = equalizePoints({}, currSlide.pan);
    let destinationPan = equalizePoints({}, initialPan);
    if (ignoreGesture) {
      this._zoomPoint.x = 0;
      this._zoomPoint.y = 0;
      this._startZoomPoint.x = 0;
      this._startZoomPoint.y = 0;
      this._startZoomLevel = prevZoomLevel;
      equalizePoints(this._startPan, initialPan);
    }
    if (currZoomLevelNeedsChange) {
      destinationPan = {
        x: this._calculatePanForZoomLevel("x", destinationZoomLevel),
        y: this._calculatePanForZoomLevel("y", destinationZoomLevel)
      };
    }
    currSlide.setZoomLevel(destinationZoomLevel);
    destinationPan = {
      x: currSlide.bounds.correctPan("x", destinationPan.x),
      y: currSlide.bounds.correctPan("y", destinationPan.y)
    };
    currSlide.setZoomLevel(prevZoomLevel);
    let panNeedsChange = true;
    if (pointsEqual(destinationPan, initialPan)) {
      panNeedsChange = false;
    }
    if (!panNeedsChange && !currZoomLevelNeedsChange && !restoreBgOpacity) {
      currSlide._setResolution(destinationZoomLevel);
      currSlide.applyCurrentZoomPan();
      return;
    }
    pswp.animations.stopAllPan();
    pswp.animations.startSpring({
      isPan: true,
      start: 0,
      end: 1e3,
      velocity: 0,
      dampingRatio: 1,
      naturalFrequency: 40,
      onUpdate: (now) => {
        now /= 1e3;
        if (panNeedsChange || currZoomLevelNeedsChange) {
          if (panNeedsChange) {
            currSlide.pan.x = initialPan.x + (destinationPan.x - initialPan.x) * now;
            currSlide.pan.y = initialPan.y + (destinationPan.y - initialPan.y) * now;
          }
          if (currZoomLevelNeedsChange) {
            const newZoomLevel = prevZoomLevel + (destinationZoomLevel - prevZoomLevel) * now;
            currSlide.setZoomLevel(newZoomLevel);
          }
          currSlide.applyCurrentZoomPan();
        }
        if (restoreBgOpacity && pswp.bgOpacity < 1) {
          pswp.applyBgOpacity(clamp(initialBgOpacity + (1 - initialBgOpacity) * now, 0, 1));
        }
      },
      onComplete: () => {
        currSlide._setResolution(destinationZoomLevel);
        currSlide.applyCurrentZoomPan();
      }
    });
  }
}
function didTapOnMainContent(event) {
  return !!event.target.closest(".pswp__container");
}
class TapHandler {
  constructor(gestures) {
    this.gestures = gestures;
  }
  click(point, originalEvent) {
    const targetClassList = originalEvent.target.classList;
    const isImageClick = targetClassList.contains("pswp__img");
    const isBackgroundClick = targetClassList.contains("pswp__item") || targetClassList.contains("pswp__zoom-wrap");
    if (isImageClick) {
      this._doClickOrTapAction("imageClick", point, originalEvent);
    } else if (isBackgroundClick) {
      this._doClickOrTapAction("bgClick", point, originalEvent);
    }
  }
  tap(point, originalEvent) {
    if (didTapOnMainContent(originalEvent)) {
      this._doClickOrTapAction("tap", point, originalEvent);
    }
  }
  doubleTap(point, originalEvent) {
    if (didTapOnMainContent(originalEvent)) {
      this._doClickOrTapAction("doubleTap", point, originalEvent);
    }
  }
  _doClickOrTapAction(actionName, point, originalEvent) {
    const { pswp } = this.gestures;
    const { currSlide } = pswp;
    const actionFullName = actionName + "Action";
    const optionValue = pswp.options[actionFullName];
    if (pswp.dispatch(actionFullName, { point, originalEvent }).defaultPrevented) {
      return;
    }
    if (typeof optionValue === "function") {
      optionValue.call(pswp, point, originalEvent);
      return;
    }
    switch (optionValue) {
      case "close":
      case "next":
        pswp[optionValue]();
        break;
      case "zoom":
        currSlide.toggleZoom(point);
        break;
      case "zoom-or-close":
        if (currSlide.isZoomable() && currSlide.zoomLevels.secondary !== currSlide.zoomLevels.initial) {
          currSlide.toggleZoom(point);
        } else if (pswp.options.clickToCloseNonZoomable) {
          pswp.close();
        }
        break;
      case "toggle-controls":
        this.gestures.pswp.element.classList.toggle("pswp--ui-visible");
        break;
    }
  }
}
const AXIS_SWIPE_HYSTERISIS = 10;
const DOUBLE_TAP_DELAY = 300;
const MIN_TAP_DISTANCE = 25;
class Gestures {
  constructor(pswp) {
    this.pswp = pswp;
    this.dragAxis = void 0;
    this.p1 = {};
    this.p2 = {};
    this.prevP1 = {};
    this.prevP2 = {};
    this.startP1 = {};
    this.startP2 = {};
    this.velocity = {};
    this._lastStartP1 = {};
    this._intervalP1 = {};
    this._numActivePoints = 0;
    this._ongoingPointers = [];
    this._touchEventEnabled = "ontouchstart" in window;
    this._pointerEventEnabled = !!window.PointerEvent;
    this.supportsTouch = this._touchEventEnabled || this._pointerEventEnabled && navigator.maxTouchPoints > 1;
    if (!this.supportsTouch) {
      pswp.options.allowPanToNext = false;
    }
    this.drag = new DragHandler(this);
    this.zoomLevels = new ZoomHandler(this);
    this.tapHandler = new TapHandler(this);
    pswp.on("bindEvents", () => {
      pswp.events.add(pswp.scrollWrap, "click", (e2) => this._onClick(e2));
      if (this._pointerEventEnabled) {
        this._bindEvents("pointer", "down", "up", "cancel");
      } else if (this._touchEventEnabled) {
        this._bindEvents("touch", "start", "end", "cancel");
        pswp.scrollWrap.ontouchmove = () => {
        };
        pswp.scrollWrap.ontouchend = () => {
        };
      } else {
        this._bindEvents("mouse", "down", "up");
      }
    });
  }
  _bindEvents(pref, down, up, cancel) {
    const { pswp } = this;
    const { events } = pswp;
    const cancelEvent = cancel ? pref + cancel : "";
    events.add(pswp.scrollWrap, pref + down, this.onPointerDown.bind(this));
    events.add(window, pref + "move", this.onPointerMove.bind(this));
    events.add(window, pref + up, this.onPointerUp.bind(this));
    if (cancelEvent) {
      events.add(pswp.scrollWrap, cancelEvent, this.onPointerUp.bind(this));
    }
  }
  onPointerDown(e2) {
    let isMousePointer;
    if (e2.type === "mousedown" || e2.pointerType === "mouse") {
      isMousePointer = true;
    }
    if (isMousePointer && e2.button > 0) {
      return;
    }
    const { pswp } = this;
    if (!pswp.opener.isOpen) {
      e2.preventDefault();
      return;
    }
    if (pswp.dispatch("pointerDown", { originalEvent: e2 }).defaultPrevented) {
      return;
    }
    if (isMousePointer) {
      pswp.mouseDetected();
      this._preventPointerEventBehaviour(e2);
    }
    pswp.animations.stopAll();
    this._updatePoints(e2, "down");
    this.pointerDown = true;
    if (this._numActivePoints === 1) {
      this.dragAxis = null;
      equalizePoints(this.startP1, this.p1);
    }
    if (this._numActivePoints > 1) {
      this._clearTapTimer();
      this.isMultitouch = true;
    } else {
      this.isMultitouch = false;
    }
  }
  onPointerMove(e2) {
    e2.preventDefault();
    if (!this._numActivePoints) {
      return;
    }
    this._updatePoints(e2, "move");
    if (this.pswp.dispatch("pointerMove", { originalEvent: e2 }).defaultPrevented) {
      return;
    }
    if (this._numActivePoints === 1 && !this.isDragging) {
      if (!this.dragAxis) {
        this._calculateDragDirection();
      }
      if (this.dragAxis && !this.isDragging) {
        if (this.isZooming) {
          this.isZooming = false;
          this.zoomLevels.end();
        }
        this.isDragging = true;
        this._clearTapTimer();
        this._updateStartPoints();
        this._intervalTime = Date.now();
        this._velocityCalculated = false;
        equalizePoints(this._intervalP1, this.p1);
        this.velocity.x = 0;
        this.velocity.y = 0;
        this.drag.start();
        this._rafStopLoop();
        this._rafRenderLoop();
      }
    } else if (this._numActivePoints > 1 && !this.isZooming) {
      this._finishDrag();
      this.isZooming = true;
      this._updateStartPoints();
      this.zoomLevels.start();
      this._rafStopLoop();
      this._rafRenderLoop();
    }
  }
  _finishDrag() {
    if (this.isDragging) {
      this.isDragging = false;
      if (!this._velocityCalculated) {
        this._updateVelocity(true);
      }
      this.drag.end();
      this.dragAxis = null;
    }
  }
  onPointerUp(e2) {
    if (!this._numActivePoints) {
      return;
    }
    this._updatePoints(e2, "up");
    if (this.pswp.dispatch("pointerUp", { originalEvent: e2 }).defaultPrevented) {
      return;
    }
    if (this._numActivePoints === 0) {
      this.pointerDown = false;
      this._rafStopLoop();
      if (this.isDragging) {
        this._finishDrag();
      } else if (!this.isZooming && !this.isMultitouch) {
        this._finishTap(e2);
      }
    }
    if (this._numActivePoints < 2 && this.isZooming) {
      this.isZooming = false;
      this.zoomLevels.end();
      if (this._numActivePoints === 1) {
        this.dragAxis = null;
        this._updateStartPoints();
      }
    }
  }
  _rafRenderLoop() {
    if (this.isDragging || this.isZooming) {
      this._updateVelocity();
      if (this.isDragging) {
        if (!pointsEqual(this.p1, this.prevP1)) {
          this.drag.change();
        }
      } else {
        if (!pointsEqual(this.p1, this.prevP1) || !pointsEqual(this.p2, this.prevP2)) {
          this.zoomLevels.change();
        }
      }
      this._updatePrevPoints();
      this.raf = requestAnimationFrame(this._rafRenderLoop.bind(this));
    }
  }
  _updateVelocity(force) {
    const time = Date.now();
    const duration = time - this._intervalTime;
    if (duration < 50 && !force) {
      return;
    }
    this.velocity.x = this._getVelocity("x", duration);
    this.velocity.y = this._getVelocity("y", duration);
    this._intervalTime = time;
    equalizePoints(this._intervalP1, this.p1);
    this._velocityCalculated = true;
  }
  _finishTap(e2) {
    const { mainScroll } = this.pswp;
    if (mainScroll.isShifted()) {
      mainScroll.moveIndexBy(0, true);
      return;
    }
    if (e2.type.indexOf("cancel") > 0) {
      return;
    }
    if (e2.type === "mouseup" || e2.pointerType === "mouse") {
      this.tapHandler.click(this.startP1, e2);
      return;
    }
    const tapDelay = this.pswp.options.doubleTapAction ? DOUBLE_TAP_DELAY : 0;
    if (this._tapTimer) {
      this._clearTapTimer();
      if (getDistanceBetween(this._lastStartP1, this.startP1) < MIN_TAP_DISTANCE) {
        this.tapHandler.doubleTap(this.startP1, e2);
      }
    } else {
      equalizePoints(this._lastStartP1, this.startP1);
      this._tapTimer = setTimeout(() => {
        this.tapHandler.tap(this.startP1, e2);
        this._clearTapTimer();
      }, tapDelay);
    }
  }
  _clearTapTimer() {
    if (this._tapTimer) {
      clearTimeout(this._tapTimer);
      this._tapTimer = null;
    }
  }
  _getVelocity(axis, duration) {
    const displacement = this.p1[axis] - this._intervalP1[axis];
    if (Math.abs(displacement) > 1 && duration > 5) {
      return displacement / duration;
    }
    return 0;
  }
  _rafStopLoop() {
    if (this.raf) {
      cancelAnimationFrame(this.raf);
      this.raf = null;
    }
  }
  _preventPointerEventBehaviour(e2) {
    e2.preventDefault();
    return true;
  }
  _updatePoints(e2, pointerType) {
    if (this._pointerEventEnabled) {
      const pointerEvent = e2;
      const pointerIndex = this._ongoingPointers.findIndex((ongoingPoiner) => {
        return ongoingPoiner.id === pointerEvent.pointerId;
      });
      if (pointerType === "up" && pointerIndex > -1) {
        this._ongoingPointers.splice(pointerIndex, 1);
      } else if (pointerType === "down" && pointerIndex === -1) {
        this._ongoingPointers.push(this._convertEventPosToPoint(pointerEvent, {}));
      } else if (pointerIndex > -1) {
        this._convertEventPosToPoint(pointerEvent, this._ongoingPointers[pointerIndex]);
      }
      this._numActivePoints = this._ongoingPointers.length;
      if (this._numActivePoints > 0) {
        equalizePoints(this.p1, this._ongoingPointers[0]);
      }
      if (this._numActivePoints > 1) {
        equalizePoints(this.p2, this._ongoingPointers[1]);
      }
    } else {
      const touchEvent = e2;
      this._numActivePoints = 0;
      if (touchEvent.type.indexOf("touch") > -1) {
        if (touchEvent.touches && touchEvent.touches.length > 0) {
          this._convertEventPosToPoint(touchEvent.touches[0], this.p1);
          this._numActivePoints++;
          if (touchEvent.touches.length > 1) {
            this._convertEventPosToPoint(touchEvent.touches[1], this.p2);
            this._numActivePoints++;
          }
        }
      } else {
        this._convertEventPosToPoint(e2, this.p1);
        if (pointerType === "up") {
          this._numActivePoints = 0;
        } else {
          this._numActivePoints++;
        }
      }
    }
  }
  _updatePrevPoints() {
    equalizePoints(this.prevP1, this.p1);
    equalizePoints(this.prevP2, this.p2);
  }
  _updateStartPoints() {
    equalizePoints(this.startP1, this.p1);
    equalizePoints(this.startP2, this.p2);
    this._updatePrevPoints();
  }
  _calculateDragDirection() {
    if (this.pswp.mainScroll.isShifted()) {
      this.dragAxis = "x";
    } else {
      const diff = Math.abs(this.p1.x - this.startP1.x) - Math.abs(this.p1.y - this.startP1.y);
      if (diff !== 0) {
        const axisToCheck = diff > 0 ? "x" : "y";
        if (Math.abs(this.p1[axisToCheck] - this.startP1[axisToCheck]) >= AXIS_SWIPE_HYSTERISIS) {
          this.dragAxis = axisToCheck;
        }
      }
    }
  }
  _convertEventPosToPoint(e2, p2) {
    p2.x = e2.pageX - this.pswp.offset.x;
    p2.y = e2.pageY - this.pswp.offset.y;
    if ("pointerId" in e2) {
      p2.id = e2.pointerId;
    } else if (e2.identifier !== void 0) {
      p2.id = e2.identifier;
    }
    return p2;
  }
  _onClick(e2) {
    if (this.pswp.mainScroll.isShifted()) {
      e2.preventDefault();
      e2.stopPropagation();
    }
  }
}
const MAIN_SCROLL_END_FRICTION = 0.35;
class MainScroll {
  constructor(pswp) {
    this.pswp = pswp;
    this.x = 0;
    this.slideWidth = void 0;
    this.itemHolders = void 0;
    this.resetPosition();
  }
  resize(resizeSlides) {
    const { pswp } = this;
    const newSlideWidth = Math.round(pswp.viewportSize.x + pswp.viewportSize.x * pswp.options.spacing);
    const slideWidthChanged = newSlideWidth !== this.slideWidth;
    if (slideWidthChanged) {
      this.slideWidth = newSlideWidth;
      this.moveTo(this.getCurrSlideX());
    }
    this.itemHolders.forEach((itemHolder, index2) => {
      if (slideWidthChanged) {
        setTransform(itemHolder.el, (index2 + this._containerShiftIndex) * this.slideWidth);
      }
      if (resizeSlides && itemHolder.slide) {
        itemHolder.slide.resize();
      }
    });
  }
  resetPosition() {
    this._currPositionIndex = 0;
    this._prevPositionIndex = 0;
    this.slideWidth = 0;
    this._containerShiftIndex = -1;
  }
  appendHolders() {
    this.itemHolders = [];
    for (let i2 = 0; i2 < 3; i2++) {
      const el = createElement("pswp__item", false, this.pswp.container);
      el.style.display = i2 === 1 ? "block" : "none";
      this.itemHolders.push({
        el
      });
    }
  }
  canBeSwiped() {
    return this.pswp.getNumItems() > 1;
  }
  moveIndexBy(diff, animate, velocityX) {
    const { pswp } = this;
    let newIndex = pswp.potentialIndex + diff;
    const numSlides = pswp.getNumItems();
    if (pswp.canLoop()) {
      newIndex = pswp.getLoopedIndex(newIndex);
      const distance = (diff + numSlides) % numSlides;
      if (distance <= numSlides / 2) {
        diff = distance;
      } else {
        diff = distance - numSlides;
      }
    } else {
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= numSlides) {
        newIndex = numSlides - 1;
      }
      diff = newIndex - pswp.potentialIndex;
    }
    pswp.potentialIndex = newIndex;
    this._currPositionIndex -= diff;
    pswp.animations.stopMainScroll();
    const destinationX = this.getCurrSlideX();
    if (!animate) {
      this.moveTo(destinationX);
      this.updateCurrItem();
    } else {
      pswp.animations.startSpring({
        isMainScroll: true,
        start: this.x,
        end: destinationX,
        velocity: velocityX || 0,
        naturalFrequency: 30,
        dampingRatio: 1,
        onUpdate: (x2) => {
          this.moveTo(x2);
        },
        onComplete: () => {
          this.updateCurrItem();
          pswp.appendHeavy();
        }
      });
      let currDiff = pswp.potentialIndex - pswp.currIndex;
      if (pswp.canLoop()) {
        const currDistance = (currDiff + numSlides) % numSlides;
        if (currDistance <= numSlides / 2) {
          currDiff = currDistance;
        } else {
          currDiff = currDistance - numSlides;
        }
      }
      if (Math.abs(currDiff) > 1) {
        this.updateCurrItem();
      }
    }
    if (diff) {
      return true;
    }
  }
  getCurrSlideX() {
    return this.slideWidth * this._currPositionIndex;
  }
  isShifted() {
    return this.x !== this.getCurrSlideX();
  }
  updateCurrItem() {
    const { pswp } = this;
    const positionDifference = this._prevPositionIndex - this._currPositionIndex;
    if (!positionDifference) {
      return;
    }
    this._prevPositionIndex = this._currPositionIndex;
    pswp.currIndex = pswp.potentialIndex;
    let diffAbs = Math.abs(positionDifference);
    let tempHolder;
    if (diffAbs >= 3) {
      this._containerShiftIndex += positionDifference + (positionDifference > 0 ? -3 : 3);
      diffAbs = 3;
    }
    for (let i2 = 0; i2 < diffAbs; i2++) {
      if (positionDifference > 0) {
        tempHolder = this.itemHolders.shift();
        this.itemHolders[2] = tempHolder;
        this._containerShiftIndex++;
        setTransform(tempHolder.el, (this._containerShiftIndex + 2) * this.slideWidth);
        pswp.setContent(tempHolder, pswp.currIndex - diffAbs + i2 + 2);
      } else {
        tempHolder = this.itemHolders.pop();
        this.itemHolders.unshift(tempHolder);
        this._containerShiftIndex--;
        setTransform(tempHolder.el, this._containerShiftIndex * this.slideWidth);
        pswp.setContent(tempHolder, pswp.currIndex + diffAbs - i2 - 2);
      }
    }
    if (Math.abs(this._containerShiftIndex) > 50 && !this.isShifted()) {
      this.resetPosition();
      this.resize();
    }
    pswp.animations.stopAllPan();
    this.itemHolders.forEach((itemHolder, i2) => {
      if (itemHolder.slide) {
        itemHolder.slide.setIsActive(i2 === 1);
      }
    });
    pswp.currSlide = this.itemHolders[1].slide;
    pswp.contentLoader.updateLazy(positionDifference);
    pswp.currSlide.applyCurrentZoomPan();
    pswp.dispatch("change");
  }
  moveTo(x2, dragging) {
    let newSlideIndexOffset;
    let delta;
    if (!this.pswp.canLoop() && dragging) {
      newSlideIndexOffset = (this.slideWidth * this._currPositionIndex - x2) / this.slideWidth;
      newSlideIndexOffset += this.pswp.currIndex;
      delta = Math.round(x2 - this.x);
      if (newSlideIndexOffset < 0 && delta > 0 || newSlideIndexOffset >= this.pswp.getNumItems() - 1 && delta < 0) {
        x2 = this.x + delta * MAIN_SCROLL_END_FRICTION;
      }
    }
    this.x = x2;
    setTransform(this.pswp.container, x2);
    this.pswp.dispatch("moveMainScroll", { x: x2, dragging });
  }
}
class Keyboard {
  constructor(pswp) {
    this.pswp = pswp;
    pswp.on("bindEvents", () => {
      if (!pswp.options.initialPointerPos) {
        this._focusRoot();
      }
      pswp.events.add(document, "focusin", this._onFocusIn.bind(this));
      pswp.events.add(document, "keydown", this._onKeyDown.bind(this));
    });
    const lastActiveElement = document.activeElement;
    pswp.on("destroy", () => {
      if (pswp.options.returnFocus && lastActiveElement && this._wasFocused) {
        lastActiveElement.focus();
      }
    });
  }
  _focusRoot() {
    if (!this._wasFocused) {
      this.pswp.element.focus();
      this._wasFocused = true;
    }
  }
  _onKeyDown(e2) {
    const { pswp } = this;
    if (pswp.dispatch("keydown", { originalEvent: e2 }).defaultPrevented) {
      return;
    }
    if (specialKeyUsed(e2)) {
      return;
    }
    let keydownAction;
    let axis;
    let isForward;
    switch (e2.keyCode) {
      case 27:
        if (pswp.options.escKey) {
          keydownAction = "close";
        }
        break;
      case 90:
        keydownAction = "toggleZoom";
        break;
      case 37:
        axis = "x";
        break;
      case 38:
        axis = "y";
        break;
      case 39:
        axis = "x";
        isForward = true;
        break;
      case 40:
        isForward = true;
        axis = "y";
        break;
      case 9:
        this._focusRoot();
        break;
    }
    if (axis) {
      e2.preventDefault();
      const { currSlide } = pswp;
      if (pswp.options.arrowKeys && axis === "x" && pswp.getNumItems() > 1) {
        keydownAction = isForward ? "next" : "prev";
      } else if (currSlide && currSlide.currZoomLevel > currSlide.zoomLevels.fit) {
        currSlide.pan[axis] += isForward ? -80 : 80;
        currSlide.panTo(currSlide.pan.x, currSlide.pan.y);
      }
    }
    if (keydownAction) {
      e2.preventDefault();
      pswp[keydownAction]();
    }
  }
  _onFocusIn(e2) {
    const { template } = this.pswp;
    if (document !== e2.target && template !== e2.target && !template.contains(e2.target)) {
      template.focus();
    }
  }
}
const DEFAULT_EASING = "cubic-bezier(.4,0,.22,1)";
class CSSAnimation {
  constructor(props) {
    this.props = props;
    const {
      target,
      onComplete,
      transform,
      onFinish
    } = props;
    let {
      duration,
      easing
    } = props;
    this.onFinish = onFinish;
    const prop = transform ? "transform" : "opacity";
    const propValue = props[prop];
    this._target = target;
    this._onComplete = onComplete;
    duration = duration || 333;
    easing = easing || DEFAULT_EASING;
    this._onTransitionEnd = this._onTransitionEnd.bind(this);
    this._firstFrameTimeout = setTimeout(() => {
      setTransitionStyle(target, prop, duration, easing);
      this._firstFrameTimeout = setTimeout(() => {
        target.addEventListener("transitionend", this._onTransitionEnd, false);
        target.addEventListener("transitioncancel", this._onTransitionEnd, false);
        target.style[prop] = propValue;
      }, 30);
    }, 0);
  }
  _onTransitionEnd(e2) {
    if (e2.target === this._target) {
      this._finalizeAnimation();
    }
  }
  _finalizeAnimation() {
    if (!this._finished) {
      this._finished = true;
      this.onFinish();
      if (this._onComplete) {
        this._onComplete();
      }
    }
  }
  destroy() {
    if (this._firstFrameTimeout) {
      clearTimeout(this._firstFrameTimeout);
    }
    removeTransitionStyle(this._target);
    this._target.removeEventListener("transitionend", this._onTransitionEnd, false);
    this._target.removeEventListener("transitioncancel", this._onTransitionEnd, false);
    if (!this._finished) {
      this._finalizeAnimation();
    }
  }
}
const DEFAULT_NATURAL_FREQUENCY = 12;
const DEFAULT_DAMPING_RATIO = 0.75;
class SpringEaser {
  constructor(initialVelocity, dampingRatio, naturalFrequency) {
    this.velocity = initialVelocity * 1e3;
    this._dampingRatio = dampingRatio || DEFAULT_DAMPING_RATIO;
    this._naturalFrequency = naturalFrequency || DEFAULT_NATURAL_FREQUENCY;
    if (this._dampingRatio < 1) {
      this._dampedFrequency = this._naturalFrequency * Math.sqrt(1 - this._dampingRatio * this._dampingRatio);
    }
  }
  easeFrame(deltaPosition, deltaTime) {
    let displacement = 0;
    let coeff;
    deltaTime /= 1e3;
    const naturalDumpingPow = Math.E ** (-this._dampingRatio * this._naturalFrequency * deltaTime);
    if (this._dampingRatio === 1) {
      coeff = this.velocity + this._naturalFrequency * deltaPosition;
      displacement = (deltaPosition + coeff * deltaTime) * naturalDumpingPow;
      this.velocity = displacement * -this._naturalFrequency + coeff * naturalDumpingPow;
    } else if (this._dampingRatio < 1) {
      coeff = 1 / this._dampedFrequency * (this._dampingRatio * this._naturalFrequency * deltaPosition + this.velocity);
      const dumpedFCos = Math.cos(this._dampedFrequency * deltaTime);
      const dumpedFSin = Math.sin(this._dampedFrequency * deltaTime);
      displacement = naturalDumpingPow * (deltaPosition * dumpedFCos + coeff * dumpedFSin);
      this.velocity = displacement * -this._naturalFrequency * this._dampingRatio + naturalDumpingPow * (-this._dampedFrequency * deltaPosition * dumpedFSin + this._dampedFrequency * coeff * dumpedFCos);
    }
    return displacement;
  }
}
class SpringAnimation {
  constructor(props) {
    this.props = props;
    const {
      start,
      end,
      velocity,
      onUpdate,
      onComplete,
      onFinish,
      dampingRatio,
      naturalFrequency
    } = props;
    this.onFinish = onFinish;
    const easer = new SpringEaser(velocity, dampingRatio, naturalFrequency);
    let prevTime = Date.now();
    let deltaPosition = start - end;
    const animationLoop = () => {
      if (this._raf) {
        deltaPosition = easer.easeFrame(deltaPosition, Date.now() - prevTime);
        if (Math.abs(deltaPosition) < 1 && Math.abs(easer.velocity) < 50) {
          onUpdate(end);
          if (onComplete) {
            onComplete();
          }
          this.onFinish();
        } else {
          prevTime = Date.now();
          onUpdate(deltaPosition + end);
          this._raf = requestAnimationFrame(animationLoop);
        }
      }
    };
    this._raf = requestAnimationFrame(animationLoop);
  }
  destroy() {
    if (this._raf >= 0) {
      cancelAnimationFrame(this._raf);
    }
    this._raf = null;
  }
}
class Animations {
  constructor() {
    this.activeAnimations = [];
  }
  startSpring(props) {
    this._start(props, true);
  }
  startTransition(props) {
    this._start(props);
  }
  _start(props, isSpring) {
    let animation;
    if (isSpring) {
      animation = new SpringAnimation(props);
    } else {
      animation = new CSSAnimation(props);
    }
    this.activeAnimations.push(animation);
    animation.onFinish = () => this.stop(animation);
    return animation;
  }
  stop(animation) {
    animation.destroy();
    const index2 = this.activeAnimations.indexOf(animation);
    if (index2 > -1) {
      this.activeAnimations.splice(index2, 1);
    }
  }
  stopAll() {
    this.activeAnimations.forEach((animation) => {
      animation.destroy();
    });
    this.activeAnimations = [];
  }
  stopAllPan() {
    this.activeAnimations = this.activeAnimations.filter((animation) => {
      if (animation.props.isPan) {
        animation.destroy();
        return false;
      }
      return true;
    });
  }
  stopMainScroll() {
    this.activeAnimations = this.activeAnimations.filter((animation) => {
      if (animation.props.isMainScroll) {
        animation.destroy();
        return false;
      }
      return true;
    });
  }
  isPanRunning() {
    return this.activeAnimations.some((animation) => {
      return animation.props.isPan;
    });
  }
}
class ScrollWheel {
  constructor(pswp) {
    this.pswp = pswp;
    pswp.events.add(pswp.element, "wheel", this._onWheel.bind(this));
  }
  _onWheel(e2) {
    e2.preventDefault();
    const { currSlide } = this.pswp;
    let { deltaX, deltaY } = e2;
    if (!currSlide) {
      return;
    }
    if (this.pswp.dispatch("wheel", { originalEvent: e2 }).defaultPrevented) {
      return;
    }
    if (e2.ctrlKey || this.pswp.options.wheelToZoom) {
      if (currSlide.isZoomable()) {
        let zoomFactor = -deltaY;
        if (e2.deltaMode === 1) {
          zoomFactor *= 0.05;
        } else {
          zoomFactor *= e2.deltaMode ? 1 : 2e-3;
        }
        zoomFactor = 2 ** zoomFactor;
        const destZoomLevel = currSlide.currZoomLevel * zoomFactor;
        currSlide.zoomTo(destZoomLevel, {
          x: e2.clientX,
          y: e2.clientY
        });
      }
    } else {
      if (currSlide.isPannable()) {
        if (e2.deltaMode === 1) {
          deltaX *= 18;
          deltaY *= 18;
        }
        currSlide.panTo(currSlide.pan.x - deltaX, currSlide.pan.y - deltaY);
      }
    }
  }
}
function addElementHTML(htmlData) {
  if (typeof htmlData === "string") {
    return htmlData;
  }
  if (!htmlData || !htmlData.isCustomSVG) {
    return "";
  }
  const svgData = htmlData;
  let out = '<svg aria-hidden="true" class="pswp__icn" viewBox="0 0 %d %d" width="%d" height="%d">';
  out = out.split("%d").join(svgData.size || 32);
  if (svgData.outlineID) {
    out += '<use class="pswp__icn-shadow" xlink:href="#' + svgData.outlineID + '"/>';
  }
  out += svgData.inner;
  out += "</svg>";
  return out;
}
class UIElement {
  constructor(pswp, data2) {
    const name = data2.name || data2.className;
    let elementHTML = data2.html;
    if (pswp.options[name] === false) {
      return;
    }
    if (typeof pswp.options[name + "SVG"] === "string") {
      elementHTML = pswp.options[name + "SVG"];
    }
    pswp.dispatch("uiElementCreate", { data: data2 });
    let className = "";
    if (data2.isButton) {
      className += "pswp__button ";
      className += data2.className || `pswp__button--${data2.name}`;
    } else {
      className += data2.className || `pswp__${data2.name}`;
    }
    let element;
    let tagName = data2.isButton ? data2.tagName || "button" : data2.tagName || "div";
    tagName = tagName.toLowerCase();
    element = createElement(className, tagName);
    if (data2.isButton) {
      element = createElement(className, tagName);
      if (tagName === "button") {
        element.type = "button";
      }
      let { title } = data2;
      const { ariaLabel } = data2;
      if (typeof pswp.options[name + "Title"] === "string") {
        title = pswp.options[name + "Title"];
      }
      if (title) {
        element.title = title;
      }
      if (ariaLabel || title) {
        element.setAttribute("aria-label", ariaLabel || title);
      }
    }
    element.innerHTML = addElementHTML(elementHTML);
    if (data2.onInit) {
      data2.onInit(element, pswp);
    }
    if (data2.onClick) {
      element.onclick = (e2) => {
        if (typeof data2.onClick === "string") {
          pswp[data2.onClick]();
        } else {
          data2.onClick(e2, element, pswp);
        }
      };
    }
    const appendTo = data2.appendTo || "bar";
    let container;
    if (appendTo === "bar") {
      if (!pswp.topBar) {
        pswp.topBar = createElement("pswp__top-bar pswp__hide-on-close", "div", pswp.scrollWrap);
      }
      container = pswp.topBar;
    } else {
      element.classList.add("pswp__hide-on-close");
      if (appendTo === "wrapper") {
        container = pswp.scrollWrap;
      } else {
        container = pswp.element;
      }
    }
    container.appendChild(pswp.applyFilters("uiElement", element, data2));
  }
}
function initArrowButton(element, pswp, isNextButton) {
  element.classList.add("pswp__button--arrow");
  pswp.on("change", () => {
    if (!pswp.options.loop) {
      if (isNextButton) {
        element.disabled = !(pswp.currIndex < pswp.getNumItems() - 1);
      } else {
        element.disabled = !(pswp.currIndex > 0);
      }
    }
  });
}
const arrowPrev = {
  name: "arrowPrev",
  className: "pswp__button--arrow--prev",
  title: "Previous",
  order: 10,
  isButton: true,
  appendTo: "wrapper",
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z" id="pswp__icn-arrow"/>',
    outlineID: "pswp__icn-arrow"
  },
  onClick: "prev",
  onInit: initArrowButton
};
const arrowNext = {
  name: "arrowNext",
  className: "pswp__button--arrow--next",
  title: "Next",
  order: 11,
  isButton: true,
  appendTo: "wrapper",
  html: {
    isCustomSVG: true,
    size: 60,
    inner: '<use xlink:href="#pswp__icn-arrow"/>',
    outlineID: "pswp__icn-arrow"
  },
  onClick: "next",
  onInit: (el, pswp) => {
    initArrowButton(el, pswp, true);
  }
};
const closeButton = {
  name: "close",
  title: "Close",
  order: 20,
  isButton: true,
  html: {
    isCustomSVG: true,
    inner: '<path d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z" id="pswp__icn-close"/>',
    outlineID: "pswp__icn-close"
  },
  onClick: "close"
};
const zoomButton = {
  name: "zoom",
  title: "Zoom",
  order: 10,
  isButton: true,
  html: {
    isCustomSVG: true,
    inner: '<path d="M17.426 19.926a6 6 0 1 1 1.5-1.5L23 22.5 21.5 24l-4.074-4.074z" id="pswp__icn-zoom"/><path fill="currentColor" class="pswp__zoom-icn-bar-h" d="M11 16v-2h6v2z"/><path fill="currentColor" class="pswp__zoom-icn-bar-v" d="M13 12h2v6h-2z"/>',
    outlineID: "pswp__icn-zoom"
  },
  onClick: "toggleZoom"
};
const loadingIndicator = {
  name: "preloader",
  appendTo: "bar",
  order: 7,
  html: {
    isCustomSVG: true,
    inner: '<path fill-rule="evenodd" clip-rule="evenodd" d="M21.2 16a5.2 5.2 0 1 1-5.2-5.2V8a8 8 0 1 0 8 8h-2.8Z" id="pswp__icn-loading"/>',
    outlineID: "pswp__icn-loading"
  },
  onInit: (indicatorElement, pswp) => {
    let isVisible;
    let delayTimeout;
    const toggleIndicatorClass = (className, add) => {
      indicatorElement.classList[add ? "add" : "remove"]("pswp__preloader--" + className);
    };
    const setIndicatorVisibility = (visible) => {
      if (isVisible !== visible) {
        isVisible = visible;
        toggleIndicatorClass("active", visible);
      }
    };
    const updatePreloaderVisibility = () => {
      if (!pswp.currSlide.content.isLoading()) {
        setIndicatorVisibility(false);
        if (delayTimeout) {
          clearTimeout(delayTimeout);
          delayTimeout = null;
        }
        return;
      }
      if (!delayTimeout) {
        delayTimeout = setTimeout(() => {
          setIndicatorVisibility(pswp.currSlide.content.isLoading());
          delayTimeout = null;
        }, pswp.options.preloaderDelay);
      }
    };
    pswp.on("change", updatePreloaderVisibility);
    pswp.on("loadComplete", (e2) => {
      if (pswp.currSlide === e2.slide) {
        updatePreloaderVisibility();
      }
    });
    pswp.ui.updatePreloaderVisibility = updatePreloaderVisibility;
  }
};
const counterIndicator = {
  name: "counter",
  order: 5,
  onInit: (counterElement, pswp) => {
    pswp.on("change", () => {
      counterElement.innerText = pswp.currIndex + 1 + pswp.options.indexIndicatorSep + pswp.getNumItems();
    });
  }
};
function setZoomedIn(el, isZoomedIn) {
  el.classList[isZoomedIn ? "add" : "remove"]("pswp--zoomed-in");
}
class UI {
  constructor(pswp) {
    this.pswp = pswp;
    this.updatePreloaderVisibility = void 0;
    this._lastUpdatedZoomLevel = void 0;
  }
  init() {
    const { pswp } = this;
    this.isRegistered = false;
    this.uiElementsData = [
      closeButton,
      arrowPrev,
      arrowNext,
      zoomButton,
      loadingIndicator,
      counterIndicator
    ];
    pswp.dispatch("uiRegister");
    this.uiElementsData.sort((a2, b2) => {
      return (a2.order || 0) - (b2.order || 0);
    });
    this.items = [];
    this.isRegistered = true;
    this.uiElementsData.forEach((uiElementData) => {
      this.registerElement(uiElementData);
    });
    pswp.on("change", () => {
      pswp.element.classList[pswp.getNumItems() === 1 ? "add" : "remove"]("pswp--one-slide");
    });
    pswp.on("zoomPanUpdate", () => this._onZoomPanUpdate());
  }
  registerElement(elementData) {
    if (this.isRegistered) {
      this.items.push(new UIElement(this.pswp, elementData));
    } else {
      this.uiElementsData.push(elementData);
    }
  }
  _onZoomPanUpdate() {
    const { template, currSlide, options } = this.pswp;
    let { currZoomLevel } = currSlide;
    if (this.pswp.opener.isClosing) {
      return;
    }
    if (!this.pswp.opener.isOpen) {
      currZoomLevel = currSlide.zoomLevels.initial;
    }
    if (currZoomLevel === this._lastUpdatedZoomLevel) {
      return;
    }
    this._lastUpdatedZoomLevel = currZoomLevel;
    const currZoomLevelDiff = currSlide.zoomLevels.initial - currSlide.zoomLevels.secondary;
    if (Math.abs(currZoomLevelDiff) < 0.01 || !currSlide.isZoomable()) {
      setZoomedIn(template, false);
      template.classList.remove("pswp--zoom-allowed");
      return;
    }
    template.classList.add("pswp--zoom-allowed");
    const secondaryIsHigher = currZoomLevelDiff < 0;
    if (currZoomLevel === currSlide.zoomLevels.secondary) {
      setZoomedIn(template, secondaryIsHigher);
    } else if (currZoomLevel > currSlide.zoomLevels.secondary) {
      setZoomedIn(template, true);
    } else {
      setZoomedIn(template, false);
    }
    if (options.imageClickAction === "zoom" || options.imageClickAction === "zoom-or-close") {
      template.classList.add("pswp--click-to-zoom");
    }
  }
}
function getBoundsByElement(el) {
  const thumbAreaRect = el.getBoundingClientRect();
  return {
    x: thumbAreaRect.left,
    y: thumbAreaRect.top,
    w: thumbAreaRect.width
  };
}
function getCroppedBoundsByElement(el, imageWidth, imageHeight) {
  const thumbAreaRect = el.getBoundingClientRect();
  const hRatio = thumbAreaRect.width / imageWidth;
  const vRatio = thumbAreaRect.height / imageHeight;
  const fillZoomLevel = hRatio > vRatio ? hRatio : vRatio;
  const offsetX = (thumbAreaRect.width - imageWidth * fillZoomLevel) / 2;
  const offsetY = (thumbAreaRect.height - imageHeight * fillZoomLevel) / 2;
  const bounds = {
    x: thumbAreaRect.left + offsetX,
    y: thumbAreaRect.top + offsetY,
    w: imageWidth * fillZoomLevel
  };
  bounds.innerRect = {
    w: thumbAreaRect.width,
    h: thumbAreaRect.height,
    x: offsetX,
    y: offsetY
  };
  return bounds;
}
function getThumbBounds(index2, itemData, instance) {
  const event = instance.dispatch("thumbBounds", {
    index: index2,
    itemData,
    instance
  });
  if (event.thumbBounds) {
    return event.thumbBounds;
  }
  const { element } = itemData;
  let thumbBounds;
  let thumbnail;
  if (element && instance.options.thumbSelector !== false) {
    const thumbSelector = instance.options.thumbSelector || "img";
    thumbnail = element.matches(thumbSelector) ? element : element.querySelector(thumbSelector);
  }
  thumbnail = instance.applyFilters("thumbEl", thumbnail, itemData, index2);
  if (thumbnail) {
    if (!itemData.thumbCropped) {
      thumbBounds = getBoundsByElement(thumbnail);
    } else {
      thumbBounds = getCroppedBoundsByElement(thumbnail, itemData.width || itemData.w, itemData.height || itemData.h);
    }
  }
  return instance.applyFilters("thumbBounds", thumbBounds, itemData, index2);
}
class PhotoSwipeEvent {
  constructor(type2, details) {
    this.type = type2;
    if (details) {
      Object.assign(this, details);
    }
  }
  preventDefault() {
    this.defaultPrevented = true;
  }
}
class Eventable {
  constructor() {
    this._listeners = {};
    this._filters = {};
    this.pswp = void 0;
    this.options = void 0;
  }
  addFilter(name, fn, priority = 100) {
    if (!this._filters[name]) {
      this._filters[name] = [];
    }
    this._filters[name].push({ fn, priority });
    this._filters[name].sort((f1, f2) => f1.priority - f2.priority);
    if (this.pswp) {
      this.pswp.addFilter(name, fn, priority);
    }
  }
  removeFilter(name, fn) {
    if (this._filters[name]) {
      this._filters[name] = this._filters[name].filter((filter) => filter.fn !== fn);
    }
    if (this.pswp) {
      this.pswp.removeFilter(name, fn);
    }
  }
  applyFilters(name, ...args) {
    if (this._filters[name]) {
      this._filters[name].forEach((filter) => {
        args[0] = filter.fn.apply(this, args);
      });
    }
    return args[0];
  }
  on(name, fn) {
    if (!this._listeners[name]) {
      this._listeners[name] = [];
    }
    this._listeners[name].push(fn);
    if (this.pswp) {
      this.pswp.on(name, fn);
    }
  }
  off(name, fn) {
    if (this._listeners[name]) {
      this._listeners[name] = this._listeners[name].filter((listener) => fn !== listener);
    }
    if (this.pswp) {
      this.pswp.off(name, fn);
    }
  }
  dispatch(name, details) {
    if (this.pswp) {
      return this.pswp.dispatch(name, details);
    }
    const event = new PhotoSwipeEvent(name, details);
    if (!this._listeners) {
      return event;
    }
    if (this._listeners[name]) {
      this._listeners[name].forEach((listener) => {
        listener.call(this, event);
      });
    }
    return event;
  }
}
class Placeholder {
  constructor(imageSrc, container) {
    this.element = createElement("pswp__img pswp__img--placeholder", imageSrc ? "img" : "", container);
    if (imageSrc) {
      this.element.decoding = "async";
      this.element.alt = "";
      this.element.src = imageSrc;
      this.element.setAttribute("role", "presentation");
    }
    this.element.setAttribute("aria-hiden", "true");
  }
  setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }
    if (this.element.tagName === "IMG") {
      setWidthHeight(this.element, 250, "auto");
      this.element.style.transformOrigin = "0 0";
      this.element.style.transform = toTransformString(0, 0, width / 250);
    } else {
      setWidthHeight(this.element, width, height);
    }
  }
  destroy() {
    if (this.element.parentNode) {
      this.element.remove();
    }
    this.element = null;
  }
}
class Content {
  constructor(itemData, instance, index2) {
    this.instance = instance;
    this.data = itemData;
    this.index = index2;
    this.element = void 0;
    this.width = Number(this.data.w) || Number(this.data.width) || 0;
    this.height = Number(this.data.h) || Number(this.data.height) || 0;
    this.isAttached = false;
    this.hasSlide = false;
    this.state = LOAD_STATE.IDLE;
    if (this.data.type) {
      this.type = this.data.type;
    } else if (this.data.src) {
      this.type = "image";
    } else {
      this.type = "html";
    }
    this.instance.dispatch("contentInit", { content: this });
  }
  removePlaceholder() {
    if (this.placeholder && !this.keepPlaceholder()) {
      setTimeout(() => {
        if (this.placeholder) {
          this.placeholder.destroy();
          this.placeholder = null;
        }
      }, 500);
    }
  }
  load(isLazy, reload) {
    if (!this.placeholder && this.slide && this.usePlaceholder()) {
      const placeholderSrc = this.instance.applyFilters("placeholderSrc", this.data.msrc && this.slide.isFirstSlide ? this.data.msrc : false, this);
      this.placeholder = new Placeholder(placeholderSrc, this.slide.container);
    }
    if (this.element && !reload) {
      return;
    }
    if (this.instance.dispatch("contentLoad", { content: this, isLazy }).defaultPrevented) {
      return;
    }
    if (this.isImageContent()) {
      this.loadImage(isLazy);
    } else {
      this.element = createElement("pswp__content");
      this.element.innerHTML = this.data.html || "";
    }
    if (reload && this.slide) {
      this.slide.updateContentSize(true);
    }
  }
  loadImage(isLazy) {
    const imageElement = createElement("pswp__img", "img");
    this.element = imageElement;
    if (this.instance.dispatch("contentLoadImage", { content: this, isLazy }).defaultPrevented) {
      return;
    }
    if (this.data.srcset) {
      imageElement.srcset = this.data.srcset;
    }
    imageElement.src = this.data.src;
    imageElement.alt = this.data.alt || "";
    this.state = LOAD_STATE.LOADING;
    if (imageElement.complete) {
      this.onLoaded();
    } else {
      imageElement.onload = () => {
        this.onLoaded();
      };
      imageElement.onerror = () => {
        this.onError();
      };
    }
  }
  setSlide(slide) {
    this.slide = slide;
    this.hasSlide = true;
    this.instance = slide.pswp;
  }
  onLoaded() {
    this.state = LOAD_STATE.LOADED;
    if (this.slide) {
      this.instance.dispatch("loadComplete", { slide: this.slide, content: this });
      if (this.slide.isActive && this.slide.heavyAppended && !this.element.parentNode) {
        this.slide.container.innerHTML = "";
        this.append();
        this.slide.updateContentSize(true);
      }
    }
  }
  onError() {
    this.state = LOAD_STATE.ERROR;
    if (this.slide) {
      this.displayError();
      this.instance.dispatch("loadComplete", { slide: this.slide, isError: true, content: this });
      this.instance.dispatch("loadError", { slide: this.slide, content: this });
    }
  }
  isLoading() {
    return this.instance.applyFilters("isContentLoading", this.state === LOAD_STATE.LOADING, this);
  }
  isError() {
    return this.state === LOAD_STATE.ERROR;
  }
  isImageContent() {
    return this.type === "image";
  }
  setDisplayedSize(width, height) {
    if (!this.element) {
      return;
    }
    if (this.placeholder) {
      this.placeholder.setDisplayedSize(width, height);
    }
    if (this.instance.dispatch("contentResize", { content: this, width, height }).defaultPrevented) {
      return;
    }
    setWidthHeight(this.element, width, height);
    if (this.isImageContent() && !this.isError()) {
      const image = this.element;
      if (image.srcset && (!image.dataset.largestUsedSize || width > parseInt(image.dataset.largestUsedSize, 10))) {
        image.sizes = width + "px";
        image.dataset.largestUsedSize = String(width);
      }
      if (this.slide) {
        this.instance.dispatch("imageSizeChange", { slide: this.slide, width, height, content: this });
      }
    }
  }
  isZoomable() {
    return this.instance.applyFilters("isContentZoomable", this.isImageContent() && this.state !== LOAD_STATE.ERROR, this);
  }
  usePlaceholder() {
    return this.instance.applyFilters("useContentPlaceholder", this.isImageContent(), this);
  }
  lazyLoad() {
    if (this.instance.dispatch("contentLazyLoad", { content: this }).defaultPrevented) {
      return;
    }
    this.load(true);
  }
  keepPlaceholder() {
    return this.instance.applyFilters("isKeepingPlaceholder", this.isLoading(), this);
  }
  destroy() {
    this.hasSlide = false;
    this.slide = null;
    if (this.instance.dispatch("contentDestroy", { content: this }).defaultPrevented) {
      return;
    }
    this.remove();
    if (this.isImageContent() && this.element) {
      this.element.onload = null;
      this.element.onerror = null;
      this.element = null;
    }
  }
  displayError() {
    if (this.slide) {
      let errorMsgEl = createElement("pswp__error-msg");
      errorMsgEl.innerText = this.instance.options.errorMsg;
      errorMsgEl = this.instance.applyFilters("contentErrorElement", errorMsgEl, this);
      this.element = createElement("pswp__content pswp__error-msg-container");
      this.element.appendChild(errorMsgEl);
      this.slide.container.innerHTML = "";
      this.slide.container.appendChild(this.element);
      this.slide.updateContentSize(true);
      this.removePlaceholder();
    }
  }
  append() {
    this.isAttached = true;
    if (this.state === LOAD_STATE.ERROR) {
      this.displayError();
      return;
    }
    if (this.instance.dispatch("contentAppend", { content: this }).defaultPrevented) {
      return;
    }
    if (this.isImageContent()) {
      if (this.slide && !this.slide.isActive && "decode" in this.element) {
        this.isDecoding = true;
        requestAnimationFrame(() => {
          if (this.element && this.element.tagName === "IMG") {
            this.element.decode().then(() => {
              this.isDecoding = false;
              requestAnimationFrame(() => {
                this.appendImage();
              });
            }).catch(() => {
              this.isDecoding = false;
            });
          }
        });
      } else {
        if (this.placeholder && (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR)) {
          this.removePlaceholder();
        }
        this.appendImage();
      }
    } else if (this.element && !this.element.parentNode) {
      this.slide.container.appendChild(this.element);
    }
  }
  activate() {
    if (this.instance.dispatch("contentActivate", { content: this }).defaultPrevented) {
      return;
    }
    if (this.slide) {
      if (this.isImageContent() && this.isDecoding) {
        this.appendImage();
      } else if (this.isError()) {
        this.load(false, true);
      }
    }
  }
  deactivate() {
    this.instance.dispatch("contentDeactivate", { content: this });
  }
  remove() {
    this.isAttached = false;
    if (this.instance.dispatch("contentRemove", { content: this }).defaultPrevented) {
      return;
    }
    if (this.element && this.element.parentNode) {
      this.element.remove();
    }
  }
  appendImage() {
    if (!this.isAttached) {
      return;
    }
    if (this.instance.dispatch("contentAppendImage", { content: this }).defaultPrevented) {
      return;
    }
    if (this.slide && this.element && !this.element.parentNode) {
      this.slide.container.appendChild(this.element);
      if (this.placeholder && (this.state === LOAD_STATE.LOADED || this.state === LOAD_STATE.ERROR)) {
        this.removePlaceholder();
      }
    }
  }
}
class PhotoSwipeBase extends Eventable {
  getNumItems() {
    let numItems;
    const { dataSource } = this.options;
    if (!dataSource) {
      numItems = 0;
    } else if ("length" in dataSource) {
      numItems = dataSource.length;
    } else if ("gallery" in dataSource) {
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
      }
      if (dataSource.items) {
        numItems = dataSource.items.length;
      }
    }
    const event = this.dispatch("numItems", {
      dataSource,
      numItems
    });
    return this.applyFilters("numItems", event.numItems, dataSource);
  }
  createContentFromData(slideData, index2) {
    return new Content(slideData, this, index2);
  }
  getItemData(index2) {
    const { dataSource } = this.options;
    let dataSourceItem;
    if (Array.isArray(dataSource)) {
      dataSourceItem = dataSource[index2];
    } else if (dataSource && dataSource.gallery) {
      if (!dataSource.items) {
        dataSource.items = this._getGalleryDOMElements(dataSource.gallery);
      }
      dataSourceItem = dataSource.items[index2];
    }
    let itemData = dataSourceItem;
    if (itemData instanceof Element) {
      itemData = this._domElementToItemData(itemData);
    }
    const event = this.dispatch("itemData", {
      itemData: itemData || {},
      index: index2
    });
    return this.applyFilters("itemData", event.itemData, index2);
  }
  _getGalleryDOMElements(galleryElement) {
    if (this.options.children || this.options.childSelector) {
      return getElementsFromOption(this.options.children, this.options.childSelector, galleryElement) || [];
    }
    return [galleryElement];
  }
  _domElementToItemData(element) {
    const itemData = {
      element
    };
    const linkEl = element.tagName === "A" ? element : element.querySelector("a");
    if (linkEl) {
      itemData.src = linkEl.dataset.pswpSrc || linkEl.href;
      if (linkEl.dataset.pswpSrcset) {
        itemData.srcset = linkEl.dataset.pswpSrcset;
      }
      itemData.width = parseInt(linkEl.dataset.pswpWidth, 10);
      itemData.height = parseInt(linkEl.dataset.pswpHeight, 10);
      itemData.w = itemData.width;
      itemData.h = itemData.height;
      if (linkEl.dataset.pswpType) {
        itemData.type = linkEl.dataset.pswpType;
      }
      const thumbnailEl = element.querySelector("img");
      if (thumbnailEl) {
        itemData.msrc = thumbnailEl.currentSrc || thumbnailEl.src;
        itemData.alt = thumbnailEl.getAttribute("alt");
      }
      if (linkEl.dataset.pswpCropped || linkEl.dataset.cropped) {
        itemData.thumbCropped = true;
      }
    }
    return this.applyFilters("domItemData", itemData, element, linkEl);
  }
}
const MIN_OPACITY = 3e-3;
class Opener {
  constructor(pswp) {
    this.pswp = pswp;
    this.isClosed = true;
    this._prepareOpen = this._prepareOpen.bind(this);
    this._thumbBounds = void 0;
    pswp.on("firstZoomPan", this._prepareOpen);
  }
  open() {
    this._prepareOpen();
    this._start();
  }
  close() {
    if (this.isClosed || this.isClosing || this.isOpening) {
      return false;
    }
    const slide = this.pswp.currSlide;
    this.isOpen = false;
    this.isOpening = false;
    this.isClosing = true;
    this._duration = this.pswp.options.hideAnimationDuration;
    if (slide && slide.currZoomLevel * slide.width >= this.pswp.options.maxWidthToAnimate) {
      this._duration = 0;
    }
    this._applyStartProps();
    setTimeout(() => {
      this._start();
    }, this._croppedZoom ? 30 : 0);
    return true;
  }
  _prepareOpen() {
    this.pswp.off("firstZoomPan", this._prepareOpen);
    if (!this.isOpening) {
      const slide = this.pswp.currSlide;
      this.isOpening = true;
      this.isClosing = false;
      this._duration = this.pswp.options.showAnimationDuration;
      if (slide && slide.zoomLevels.initial * slide.width >= this.pswp.options.maxWidthToAnimate) {
        this._duration = 0;
      }
      this._applyStartProps();
    }
  }
  _applyStartProps() {
    const { pswp } = this;
    const slide = this.pswp.currSlide;
    const { options } = pswp;
    if (options.showHideAnimationType === "fade") {
      options.showHideOpacity = true;
      this._thumbBounds = false;
    } else if (options.showHideAnimationType === "none") {
      options.showHideOpacity = false;
      this._duration = 0;
      this._thumbBounds = false;
    } else if (this.isOpening && pswp._initialThumbBounds) {
      this._thumbBounds = pswp._initialThumbBounds;
    } else {
      this._thumbBounds = this.pswp.getThumbBounds();
    }
    this._placeholder = slide.getPlaceholderElement();
    pswp.animations.stopAll();
    this._useAnimation = this._duration > 50;
    this._animateZoom = Boolean(this._thumbBounds) && (slide.content && slide.content.usePlaceholder()) && (!this.isClosing || !pswp.mainScroll.isShifted());
    if (!this._animateZoom) {
      this._animateRootOpacity = true;
      if (this.isOpening) {
        slide.zoomAndPanToInitial();
        slide.applyCurrentZoomPan();
      }
    } else {
      this._animateRootOpacity = options.showHideOpacity;
    }
    this._animateBgOpacity = !this._animateRootOpacity && this.pswp.options.bgOpacity > MIN_OPACITY;
    this._opacityElement = this._animateRootOpacity ? pswp.element : pswp.bg;
    if (!this._useAnimation) {
      this._duration = 0;
      this._animateZoom = false;
      this._animateBgOpacity = false;
      this._animateRootOpacity = true;
      if (this.isOpening) {
        pswp.element.style.opacity = String(MIN_OPACITY);
        pswp.applyBgOpacity(1);
      }
      return;
    }
    if (this._animateZoom && this._thumbBounds && this._thumbBounds.innerRect) {
      this._croppedZoom = true;
      this._cropContainer1 = this.pswp.container;
      this._cropContainer2 = this.pswp.currSlide.holderElement;
      pswp.container.style.overflow = "hidden";
      pswp.container.style.width = pswp.viewportSize.x + "px";
    } else {
      this._croppedZoom = false;
    }
    if (this.isOpening) {
      if (this._animateRootOpacity) {
        pswp.element.style.opacity = String(MIN_OPACITY);
        pswp.applyBgOpacity(1);
      } else {
        if (this._animateBgOpacity) {
          pswp.bg.style.opacity = String(MIN_OPACITY);
        }
        pswp.element.style.opacity = "1";
      }
      if (this._animateZoom) {
        this._setClosedStateZoomPan();
        if (this._placeholder) {
          this._placeholder.style.willChange = "transform";
          this._placeholder.style.opacity = String(MIN_OPACITY);
        }
      }
    } else if (this.isClosing) {
      pswp.mainScroll.itemHolders[0].el.style.display = "none";
      pswp.mainScroll.itemHolders[2].el.style.display = "none";
      if (this._croppedZoom) {
        if (pswp.mainScroll.x !== 0) {
          pswp.mainScroll.resetPosition();
          pswp.mainScroll.resize();
        }
      }
    }
  }
  _start() {
    if (this.isOpening && this._useAnimation && this._placeholder && this._placeholder.tagName === "IMG") {
      new Promise((resolve) => {
        let decoded = false;
        let isDelaying = true;
        decodeImage(this._placeholder).finally(() => {
          decoded = true;
          if (!isDelaying) {
            resolve();
          }
        });
        setTimeout(() => {
          isDelaying = false;
          if (decoded) {
            resolve();
          }
        }, 50);
        setTimeout(resolve, 250);
      }).finally(() => this._initiate());
    } else {
      this._initiate();
    }
  }
  _initiate() {
    this.pswp.element.style.setProperty("--pswp-transition-duration", this._duration + "ms");
    this.pswp.dispatch(this.isOpening ? "openingAnimationStart" : "closingAnimationStart");
    this.pswp.dispatch("initialZoom" + (this.isOpening ? "In" : "Out"));
    this.pswp.element.classList[this.isOpening ? "add" : "remove"]("pswp--ui-visible");
    if (this.isOpening) {
      if (this._placeholder) {
        this._placeholder.style.opacity = "1";
      }
      this._animateToOpenState();
    } else if (this.isClosing) {
      this._animateToClosedState();
    }
    if (!this._useAnimation) {
      this._onAnimationComplete();
    }
  }
  _onAnimationComplete() {
    const { pswp } = this;
    this.isOpen = this.isOpening;
    this.isClosed = this.isClosing;
    this.isOpening = false;
    this.isClosing = false;
    pswp.dispatch(this.isOpen ? "openingAnimationEnd" : "closingAnimationEnd");
    pswp.dispatch("initialZoom" + (this.isOpen ? "InEnd" : "OutEnd"));
    if (this.isClosed) {
      pswp.destroy();
    } else if (this.isOpen) {
      if (this._animateZoom) {
        pswp.container.style.overflow = "visible";
        pswp.container.style.width = "100%";
      }
      pswp.currSlide.applyCurrentZoomPan();
    }
  }
  _animateToOpenState() {
    const { pswp } = this;
    if (this._animateZoom) {
      if (this._croppedZoom) {
        this._animateTo(this._cropContainer1, "transform", "translate3d(0,0,0)");
        this._animateTo(this._cropContainer2, "transform", "none");
      }
      pswp.currSlide.zoomAndPanToInitial();
      this._animateTo(pswp.currSlide.container, "transform", pswp.currSlide.getCurrentTransform());
    }
    if (this._animateBgOpacity) {
      this._animateTo(pswp.bg, "opacity", String(pswp.options.bgOpacity));
    }
    if (this._animateRootOpacity) {
      this._animateTo(pswp.element, "opacity", "1");
    }
  }
  _animateToClosedState() {
    const { pswp } = this;
    if (this._animateZoom) {
      this._setClosedStateZoomPan(true);
    }
    if (this._animateBgOpacity && pswp.bgOpacity > 0.01) {
      this._animateTo(pswp.bg, "opacity", "0");
    }
    if (this._animateRootOpacity) {
      this._animateTo(pswp.element, "opacity", "0");
    }
  }
  _setClosedStateZoomPan(animate) {
    if (!this._thumbBounds)
      return;
    const { pswp } = this;
    const { innerRect } = this._thumbBounds;
    const { currSlide, viewportSize } = pswp;
    if (this._croppedZoom) {
      const containerOnePanX = -viewportSize.x + (this._thumbBounds.x - innerRect.x) + innerRect.w;
      const containerOnePanY = -viewportSize.y + (this._thumbBounds.y - innerRect.y) + innerRect.h;
      const containerTwoPanX = viewportSize.x - innerRect.w;
      const containerTwoPanY = viewportSize.y - innerRect.h;
      if (animate) {
        this._animateTo(this._cropContainer1, "transform", toTransformString(containerOnePanX, containerOnePanY));
        this._animateTo(this._cropContainer2, "transform", toTransformString(containerTwoPanX, containerTwoPanY));
      } else {
        setTransform(this._cropContainer1, containerOnePanX, containerOnePanY);
        setTransform(this._cropContainer2, containerTwoPanX, containerTwoPanY);
      }
    }
    equalizePoints(currSlide.pan, innerRect || this._thumbBounds);
    currSlide.currZoomLevel = this._thumbBounds.w / currSlide.width;
    if (animate) {
      this._animateTo(currSlide.container, "transform", currSlide.getCurrentTransform());
    } else {
      currSlide.applyCurrentZoomPan();
    }
  }
  _animateTo(target, prop, propValue) {
    if (!this._duration) {
      target.style[prop] = propValue;
      return;
    }
    const { animations } = this.pswp;
    const animProps = {
      duration: this._duration,
      easing: this.pswp.options.easing,
      onComplete: () => {
        if (!animations.activeAnimations.length) {
          this._onAnimationComplete();
        }
      },
      target
    };
    animProps[prop] = propValue;
    animations.startTransition(animProps);
  }
}
const MIN_SLIDES_TO_CACHE = 5;
function lazyLoadData(itemData, instance, index2) {
  const content = instance.createContentFromData(itemData, index2);
  if (!content || !content.lazyLoad) {
    return;
  }
  const { options } = instance;
  const viewportSize = instance.viewportSize || getViewportSize(options, instance);
  const panAreaSize = getPanAreaSize(options, viewportSize, itemData, index2);
  const zoomLevel = new ZoomLevel(options, itemData, -1);
  zoomLevel.update(content.width, content.height, panAreaSize);
  content.lazyLoad();
  content.setDisplayedSize(Math.ceil(content.width * zoomLevel.initial), Math.ceil(content.height * zoomLevel.initial));
  return content;
}
function lazyLoadSlide(index2, instance) {
  const itemData = instance.getItemData(index2);
  if (instance.dispatch("lazyLoadSlide", { index: index2, itemData }).defaultPrevented) {
    return;
  }
  return lazyLoadData(itemData, instance, index2);
}
class ContentLoader {
  constructor(pswp) {
    this.pswp = pswp;
    this.limit = Math.max(pswp.options.preload[0] + pswp.options.preload[1] + 1, MIN_SLIDES_TO_CACHE);
    this._cachedItems = [];
  }
  updateLazy(diff) {
    const { pswp } = this;
    if (pswp.dispatch("lazyLoad").defaultPrevented) {
      return;
    }
    const { preload } = pswp.options;
    const isForward = diff === void 0 ? true : diff >= 0;
    let i2;
    for (i2 = 0; i2 <= preload[1]; i2++) {
      this.loadSlideByIndex(pswp.currIndex + (isForward ? i2 : -i2));
    }
    for (i2 = 1; i2 <= preload[0]; i2++) {
      this.loadSlideByIndex(pswp.currIndex + (isForward ? -i2 : i2));
    }
  }
  loadSlideByIndex(index2) {
    index2 = this.pswp.getLoopedIndex(index2);
    let content = this.getContentByIndex(index2);
    if (!content) {
      content = lazyLoadSlide(index2, this.pswp);
      if (content) {
        this.addToCache(content);
      }
    }
  }
  getContentBySlide(slide) {
    let content = this.getContentByIndex(slide.index);
    if (!content) {
      content = this.pswp.createContentFromData(slide.data, slide.index);
      if (content) {
        this.addToCache(content);
      }
    }
    if (content) {
      content.setSlide(slide);
    }
    return content;
  }
  addToCache(content) {
    this.removeByIndex(content.index);
    this._cachedItems.push(content);
    if (this._cachedItems.length > this.limit) {
      const indexToRemove = this._cachedItems.findIndex((item) => {
        return !item.isAttached && !item.hasSlide;
      });
      if (indexToRemove !== -1) {
        const removedItem = this._cachedItems.splice(indexToRemove, 1)[0];
        removedItem.destroy();
      }
    }
  }
  removeByIndex(index2) {
    const indexToRemove = this._cachedItems.findIndex((item) => item.index === index2);
    if (indexToRemove !== -1) {
      this._cachedItems.splice(indexToRemove, 1);
    }
  }
  getContentByIndex(index2) {
    return this._cachedItems.find((content) => content.index === index2);
  }
  destroy() {
    this._cachedItems.forEach((content) => content.destroy());
    this._cachedItems = null;
  }
}
const defaultOptions = {
  allowPanToNext: true,
  spacing: 0.1,
  loop: true,
  pinchToClose: true,
  closeOnVerticalDrag: true,
  hideAnimationDuration: 333,
  showAnimationDuration: 333,
  zoomAnimationDuration: 333,
  escKey: true,
  arrowKeys: true,
  returnFocus: true,
  maxWidthToAnimate: 4e3,
  clickToCloseNonZoomable: true,
  imageClickAction: "zoom-or-close",
  bgClickAction: "close",
  tapAction: "toggle-controls",
  doubleTapAction: "zoom",
  indexIndicatorSep: " / ",
  preloaderDelay: 2e3,
  bgOpacity: 0.8,
  index: 0,
  errorMsg: "The image cannot be loaded",
  preload: [1, 2],
  easing: "cubic-bezier(.4,0,.22,1)"
};
class PhotoSwipe extends PhotoSwipeBase {
  constructor(options) {
    super();
    this._prepareOptions(options);
    this.offset = {};
    this._prevViewportSize = {};
    this.viewportSize = {};
    this.bgOpacity = 1;
    this.topBar = void 0;
    this.events = new DOMEvents();
    this.animations = new Animations();
    this.mainScroll = new MainScroll(this);
    this.gestures = new Gestures(this);
    this.opener = new Opener(this);
    this.keyboard = new Keyboard(this);
    this.contentLoader = new ContentLoader(this);
  }
  init() {
    if (this.isOpen || this.isDestroying) {
      return;
    }
    this.isOpen = true;
    this.dispatch("init");
    this.dispatch("beforeOpen");
    this._createMainStructure();
    let rootClasses = "pswp--open";
    if (this.gestures.supportsTouch) {
      rootClasses += " pswp--touch";
    }
    if (this.options.mainClass) {
      rootClasses += " " + this.options.mainClass;
    }
    this.element.className += " " + rootClasses;
    this.currIndex = this.options.index || 0;
    this.potentialIndex = this.currIndex;
    this.dispatch("firstUpdate");
    this.scrollWheel = new ScrollWheel(this);
    if (Number.isNaN(this.currIndex) || this.currIndex < 0 || this.currIndex >= this.getNumItems()) {
      this.currIndex = 0;
    }
    if (!this.gestures.supportsTouch) {
      this.mouseDetected();
    }
    this.updateSize();
    this.offset.y = window.pageYOffset;
    this._initialItemData = this.getItemData(this.currIndex);
    this.dispatch("gettingData", {
      index: this.currIndex,
      data: this._initialItemData,
      slide: void 0
    });
    this._initialThumbBounds = this.getThumbBounds();
    this.dispatch("initialLayout");
    this.on("openingAnimationEnd", () => {
      this.setContent(this.mainScroll.itemHolders[0], this.currIndex - 1);
      this.setContent(this.mainScroll.itemHolders[2], this.currIndex + 1);
      this.mainScroll.itemHolders[0].el.style.display = "block";
      this.mainScroll.itemHolders[2].el.style.display = "block";
      this.appendHeavy();
      this.contentLoader.updateLazy();
      this.events.add(window, "resize", this._handlePageResize.bind(this));
      this.events.add(window, "scroll", this._updatePageScrollOffset.bind(this));
      this.dispatch("bindEvents");
    });
    this.setContent(this.mainScroll.itemHolders[1], this.currIndex);
    this.dispatch("change");
    this.opener.open();
    this.dispatch("afterInit");
    return true;
  }
  getLoopedIndex(index2) {
    const numSlides = this.getNumItems();
    if (this.options.loop) {
      if (index2 > numSlides - 1) {
        index2 -= numSlides;
      }
      if (index2 < 0) {
        index2 += numSlides;
      }
    }
    index2 = clamp(index2, 0, numSlides - 1);
    return index2;
  }
  appendHeavy() {
    this.mainScroll.itemHolders.forEach((itemHolder) => {
      if (itemHolder.slide) {
        itemHolder.slide.appendHeavy();
      }
    });
  }
  goTo(index2) {
    this.mainScroll.moveIndexBy(this.getLoopedIndex(index2) - this.potentialIndex);
  }
  next() {
    this.goTo(this.potentialIndex + 1);
  }
  prev() {
    this.goTo(this.potentialIndex - 1);
  }
  zoomTo(...args) {
    this.currSlide.zoomTo(...args);
  }
  toggleZoom() {
    this.currSlide.toggleZoom();
  }
  close() {
    if (!this.opener.isOpen || this.isDestroying) {
      return;
    }
    this.isDestroying = true;
    this.dispatch("close");
    this.events.removeAll();
    this.opener.close();
  }
  destroy() {
    if (!this.isDestroying) {
      this.options.showHideAnimationType = "none";
      this.close();
      return;
    }
    this.dispatch("destroy");
    this.listeners = null;
    this.scrollWrap.ontouchmove = null;
    this.scrollWrap.ontouchend = null;
    this.element.remove();
    this.mainScroll.itemHolders.forEach((itemHolder) => {
      if (itemHolder.slide) {
        itemHolder.slide.destroy();
      }
    });
    this.contentLoader.destroy();
    this.events.removeAll();
  }
  refreshSlideContent(slideIndex) {
    this.contentLoader.removeByIndex(slideIndex);
    this.mainScroll.itemHolders.forEach((itemHolder, i2) => {
      let potentialHolderIndex = this.currSlide.index - 1 + i2;
      if (this.canLoop()) {
        potentialHolderIndex = this.getLoopedIndex(potentialHolderIndex);
      }
      if (potentialHolderIndex === slideIndex) {
        this.setContent(itemHolder, slideIndex, true);
        if (i2 === 1) {
          this.currSlide = itemHolder.slide;
          itemHolder.slide.setIsActive(true);
        }
      }
    });
    this.dispatch("change");
  }
  setContent(holder, index2, force) {
    if (this.canLoop()) {
      index2 = this.getLoopedIndex(index2);
    }
    if (holder.slide) {
      if (holder.slide.index === index2 && !force) {
        return;
      }
      holder.slide.destroy();
      holder.slide = null;
    }
    if (!this.canLoop() && (index2 < 0 || index2 >= this.getNumItems())) {
      return;
    }
    const itemData = this.getItemData(index2);
    holder.slide = new Slide(itemData, index2, this);
    if (index2 === this.currIndex) {
      this.currSlide = holder.slide;
    }
    holder.slide.append(holder.el);
  }
  getViewportCenterPoint() {
    return {
      x: this.viewportSize.x / 2,
      y: this.viewportSize.y / 2
    };
  }
  updateSize(force) {
    if (this.isDestroying) {
      return;
    }
    const newViewportSize = getViewportSize(this.options, this);
    if (!force && pointsEqual(newViewportSize, this._prevViewportSize)) {
      return;
    }
    equalizePoints(this._prevViewportSize, newViewportSize);
    this.dispatch("beforeResize");
    equalizePoints(this.viewportSize, this._prevViewportSize);
    this._updatePageScrollOffset();
    this.dispatch("viewportSize");
    this.mainScroll.resize(this.opener.isOpen);
    if (!this.hasMouse && window.matchMedia("(any-hover: hover)").matches) {
      this.mouseDetected();
    }
    this.dispatch("resize");
  }
  applyBgOpacity(opacity) {
    this.bgOpacity = Math.max(opacity, 0);
    this.bg.style.opacity = String(this.bgOpacity * this.options.bgOpacity);
  }
  mouseDetected() {
    if (!this.hasMouse) {
      this.hasMouse = true;
      this.element.classList.add("pswp--has_mouse");
    }
  }
  _handlePageResize() {
    this.updateSize();
    if (/iPhone|iPad|iPod/i.test(window.navigator.userAgent)) {
      setTimeout(() => {
        this.updateSize();
      }, 500);
    }
  }
  _updatePageScrollOffset() {
    this.setScrollOffset(0, window.pageYOffset);
  }
  setScrollOffset(x2, y2) {
    this.offset.x = x2;
    this.offset.y = y2;
    this.dispatch("updateScrollOffset");
  }
  _createMainStructure() {
    this.element = createElement("pswp");
    this.element.setAttribute("tabindex", "-1");
    this.element.setAttribute("role", "dialog");
    this.template = this.element;
    this.bg = createElement("pswp__bg", false, this.element);
    this.scrollWrap = createElement("pswp__scroll-wrap", false, this.element);
    this.container = createElement("pswp__container", false, this.scrollWrap);
    this.mainScroll.appendHolders();
    this.ui = new UI(this);
    this.ui.init();
    (this.options.appendToEl || document.body).appendChild(this.element);
  }
  getThumbBounds() {
    return getThumbBounds(this.currIndex, this.currSlide ? this.currSlide.data : this._initialItemData, this);
  }
  canLoop() {
    return this.options.loop && this.getNumItems() > 2;
  }
  _prepareOptions(options) {
    if (window.matchMedia("(prefers-reduced-motion), (update: slow)").matches) {
      options.showHideAnimationType = "none";
      options.zoomAnimationDuration = 0;
    }
    this.options = {
      ...defaultOptions,
      ...options
    };
  }
}
var photoswipe_esm = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  "default": PhotoSwipe
}, Symbol.toStringTag, { value: "Module" }));
exports.createVueApp = createVueApp;
