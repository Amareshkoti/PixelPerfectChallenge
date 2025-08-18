(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [888],
  {
    9477: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 });
      let i = r(5893),
        n = r(7294);
      t.default = function ({
        html: e,
        height: t = null,
        width: r = null,
        children: a,
        dataNtpc: o = "",
      }) {
        return (
          (0, n.useEffect)(() => {
            o &&
              performance.mark("mark_feature_usage", {
                detail: { feature: `next-third-parties-${o}` },
              });
          }, [o]),
          (0, i.jsxs)(i.Fragment, {
            children: [
              a,
              e
                ? (0, i.jsx)("div", {
                    style: {
                      height: null != t ? `${t}px` : "auto",
                      width: null != r ? `${r}px` : "auto",
                    },
                    "data-ntpc": o,
                    dangerouslySetInnerHTML: { __html: e },
                  })
                : null,
            ],
          })
        );
      };
    },
    7834: function (e, t, r) {
      "use strict";
      let i;
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent = t.GoogleAnalytics = void 0));
      let a = r(5893),
        o = r(7294),
        s = n(r(4298));
      ((t.GoogleAnalytics = function (e) {
        let { gaId: t, dataLayerName: r = "dataLayer" } = e;
        return (
          void 0 === i && (i = r),
          (0, o.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-ga" },
            });
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(s.default, {
                id: "_next-ga-init",
                dangerouslySetInnerHTML: {
                  __html: `
          window['${r}'] = window['${r}'] || [];
          function gtag(){window['${r}'].push(arguments);}
          gtag('js', new Date());

          gtag('config', '${t}');`,
                },
              }),
              (0, a.jsx)(s.default, {
                id: "_next-ga",
                src: `https://www.googletagmanager.com/gtag/js?id=${t}`,
              }),
            ],
          })
        );
      }),
        (t.sendGAEvent = (...e) => {
          if (void 0 === i) {
            console.warn("@next/third-parties: GA has not been initialized");
            return;
          }
          window[i]
            ? window[i].push(...e)
            : console.warn(
                `@next/third-parties: GA dataLayer ${i} does not exist`,
              );
        }));
    },
    3632: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = r(5893),
        a = r(6257),
        o = i(r(9477));
      t.default = function (e) {
        let { apiKey: t, ...r } = e,
          i = { ...r, key: t },
          { html: s } = (0, a.GoogleMapsEmbed)(i);
        return (0, n.jsx)(o.default, {
          height: i.height || null,
          width: i.width || null,
          html: s,
          dataNtpc: "GoogleMapsEmbed",
        });
      };
    },
    674: function (e, t, r) {
      "use strict";
      let i;
      var n =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGTMEvent = t.GoogleTagManager = void 0));
      let a = r(5893),
        o = r(7294),
        s = n(r(4298));
      ((t.GoogleTagManager = function (e) {
        let {
          gtmId: t,
          dataLayerName: r = "dataLayer",
          auth: n,
          preview: l,
          dataLayer: c,
        } = e;
        void 0 === i && (i = r);
        let d = "dataLayer" !== r ? `$l=${r}` : "",
          u = n ? `&gtm_auth=${n}` : "",
          f = l ? `&gtm_preview=${l}&gtm_cookies_win=x` : "";
        return (
          (0, o.useEffect)(() => {
            performance.mark("mark_feature_usage", {
              detail: { feature: "next-third-parties-gtm" },
            });
          }, []),
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(s.default, {
                id: "_next-gtm-init",
                dangerouslySetInnerHTML: {
                  __html: `
      (function(w,l){
        w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        ${c ? `w[l].push(${JSON.stringify(c)})` : ""}
      })(window,'${r}');`,
                },
              }),
              (0, a.jsx)(s.default, {
                id: "_next-gtm",
                "data-ntpc": "GTM",
                src: `https://www.googletagmanager.com/gtm.js?id=${t}${d}${u}${f}`,
              }),
            ],
          })
        );
      }),
        (t.sendGTMEvent = (e) => {
          if (void 0 === i) {
            console.warn("@next/third-parties: GTM has not been initialized");
            return;
          }
          window[i]
            ? window[i].push(e)
            : console.warn(
                `@next/third-parties: GTM dataLayer ${i} does not exist`,
              );
        }));
    },
    9692: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.sendGAEvent =
          t.GoogleAnalytics =
          t.sendGTMEvent =
          t.GoogleTagManager =
          t.YouTubeEmbed =
          t.GoogleMapsEmbed =
            void 0));
      var n = r(3632);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return i(n).default;
        },
      });
      var a = r(1494);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return i(a).default;
        },
      });
      var o = r(674);
      (Object.defineProperty(t, "GoogleTagManager", {
        enumerable: !0,
        get: function () {
          return o.GoogleTagManager;
        },
      }),
        Object.defineProperty(t, "sendGTMEvent", {
          enumerable: !0,
          get: function () {
            return o.sendGTMEvent;
          },
        }));
      var s = r(7834);
      (Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return s.GoogleAnalytics;
        },
      }),
        Object.defineProperty(t, "sendGAEvent", {
          enumerable: !0,
          get: function () {
            return s.sendGAEvent;
          },
        }));
    },
    1494: function (e, t, r) {
      "use strict";
      var i =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 });
      let n = r(5893),
        a = i(r(4298)),
        o = r(6257),
        s = i(r(9477)),
        l = {
          server: "beforeInteractive",
          client: "afterInteractive",
          idle: "lazyOnload",
          worker: "worker",
        };
      t.default = function (e) {
        let { html: t, scripts: r, stylesheets: i } = (0, o.YouTubeEmbed)(e);
        return (0, n.jsx)(s.default, {
          height: e.height || null,
          width: e.width || null,
          html: t,
          dataNtpc: "YouTubeEmbed",
          children:
            null == r
              ? void 0
              : r.map((e) =>
                  (0, n.jsx)(
                    a.default,
                    { src: e.url, strategy: l[e.strategy], stylesheets: i },
                    e.url,
                  ),
                ),
        });
      };
    },
    1373: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = r(7294);
      /**
       * @license lucide-react v0.503.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let n = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
        a = (e) =>
          e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, r) =>
            r ? r.toUpperCase() : t.toLowerCase(),
          ),
        o = (e) => {
          let t = a(e);
          return t.charAt(0).toUpperCase() + t.slice(1);
        },
        s = (...e) =>
          e
            .filter((e, t, r) => !!e && "" !== e.trim() && r.indexOf(e) === t)
            .join(" ")
            .trim(),
        l = (e) => {
          for (let t in e)
            if (t.startsWith("aria-") || "role" === t || "title" === t)
              return !0;
        };
      /**
       * @license lucide-react v0.503.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ var c = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
      };
      /**
       * @license lucide-react v0.503.0 - ISC
       *
       * This source code is licensed under the ISC license.
       * See the LICENSE file in the root directory of this source tree.
       */ let d = (0, i.forwardRef)(
          (
            {
              color: e = "currentColor",
              size: t = 24,
              strokeWidth: r = 2,
              absoluteStrokeWidth: n,
              className: a = "",
              children: o,
              iconNode: d,
              ...u
            },
            f,
          ) =>
            (0, i.createElement)(
              "svg",
              {
                ref: f,
                ...c,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: n ? (24 * Number(r)) / Number(t) : r,
                className: s("lucide", a),
                ...(!o && !l(u) && { "aria-hidden": "true" }),
                ...u,
              },
              [
                ...d.map(([e, t]) => (0, i.createElement)(e, t)),
                ...(Array.isArray(o) ? o : [o]),
              ],
            ),
        ),
        u = (e, t) => {
          let r = (0, i.forwardRef)(({ className: r, ...a }, l) =>
            (0, i.createElement)(d, {
              ref: l,
              iconNode: t,
              className: s(`lucide-${n(o(e))}`, `lucide-${e}`, r),
              ...a,
            }),
          );
          return ((r.displayName = o(e)), r);
        };
    },
    1211: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let i = (0, r(1373).Z)("circle-help", [
        ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
        ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
        ["path", { d: "M12 17h.01", key: "p32p05" }],
      ]);
    },
    6840: function (e, t, r) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/_app",
        function () {
          return r(4343);
        },
      ]);
    },
    9779: function (e, t, r) {
      "use strict";
      r.d(t, {
        D: function () {
          return s;
        },
      });
      var i = r(5893);
      r(7294);
      var n = r(7104),
        a = r(9152),
        o = r.n(a);
      function s(e) {
        let { className: t = "", children: r, ...a } = e;
        return (0, i.jsx)("button", {
          ...a,
          className: (0, n.A)(
            o().HoverShadow,
            "relative px-6 py-3 text-normal rounded-lg text-zinc-900 font-semibold bg-lime-500 border border-lime-500 hover:bg-lime-400 active:bg-lime-500 transition-colors",
            t,
          ),
          children: r,
        });
      }
    },
    6260: function (e, t, r) {
      "use strict";
      r.d(t, {
        O: function () {
          return a;
        },
      });
      var i = r(9647),
        n = r.n(i);
      let a = "".concat(n().ScreenMaxWidth, " w-full px-4 lg:px-16");
    },
    58: function (e, t, r) {
      "use strict";
      r.d(t, {
        h: function () {
          return n;
        },
      });
      var i = r(9919);
      let n = r.n(i)();
    },
    6382: function (e, t, r) {
      "use strict";
      r.d(t, {
        U: function () {
          return f;
        },
      });
      var i = r(5893),
        n = r(7104),
        a = r(7294),
        o = r(5675),
        s = r.n(o);
      (0, n.A)(
        "relative aspect-square w-20 flex-shrink-0 rounded overflow-hidden",
      );
      let l = (0, n.A)("absolute inset-0 flex"),
        c = (0, n.A)("h-full overflow-hidden"),
        d = (0, n.A)(
          "h-full w-[200%] object-cover bg-zinc-800/50 transition-opacity",
        ),
        u = (0, n.A)("relative w-[1px] h-full bg-zinc-100");
      function f(e) {
        let {
            beforeImageUrl: t,
            afterImageUrl: r,
            className: o,
            isAnimating: f = !1,
            hasRoundedBottom: g = !0,
          } = e,
          [m, p] = (0, a.useState)(50),
          h = (0, a.useRef)();
        return (
          (0, a.useEffect)(() => {
            if (f) {
              let e = 50,
                t = 0,
                r = performance.now(),
                i = [0, 100],
                n = 0,
                a = (o) => {
                  let s = o - r;
                  r = o;
                  let l = i[n] - e;
                  ((t += 0.0015 * l * s),
                    (t *= 0.5),
                    (e += t),
                    2 > Math.abs(l) &&
                      0.05 > Math.abs(t) &&
                      (n = 0 === n ? 1 : 0),
                    p(e),
                    (h.current = requestAnimationFrame(a)));
                };
              h.current = requestAnimationFrame(a);
            } else (h.current && cancelAnimationFrame(h.current), p(50));
            return () => {
              h.current && cancelAnimationFrame(h.current);
            };
          }, [f]),
          (0, i.jsx)("div", {
            className: (0, n.A)(
              "relative aspect-square w-20 flex-shrink-0 overflow-hidden",
              g ? "rounded" : "rounded-t",
              null != o ? o : "",
            ),
            children: (0, i.jsxs)("div", {
              className: l,
              children: [
                (0, i.jsx)("div", {
                  className: c,
                  style: {
                    width: "".concat(m, "%"),
                    transition: f ? "none" : "width 0.3s ease-out",
                  },
                  children: (0, i.jsx)(s(), {
                    src: t,
                    alt: "Before",
                    className: d,
                    style: { objectPosition: "left" },
                    width: 300,
                    height: 300,
                  }),
                }),
                (0, i.jsx)("div", { className: u }),
                (0, i.jsx)("div", {
                  className: c,
                  style: {
                    width: "".concat(100 - m, "%"),
                    transition: f ? "none" : "width 0.3s ease-out",
                  },
                  children: (0, i.jsx)(s(), {
                    src: r,
                    alt: "After",
                    className: d,
                    style: { objectPosition: "right" },
                    width: 300,
                    height: 300,
                  }),
                }),
              ],
            }),
          })
        );
      }
    },
    8714: function (e, t, r) {
      "use strict";
      var i, n;
      (r.d(t, {
        H: function () {
          return a;
        },
      }),
        ((n = i || (i = {})).Beauty = "beauty"),
        (n.ConsumerPackagedGoods = "consumer-packaged-goods"),
        (n.Jewelry = "jewelry"),
        (n.FashionModels = "fashion-models"),
        (n.Furniture = "furniture"),
        (n.Technology = "tech"),
        (n.Handbags = "handbags"),
        (n.Food = "food"),
        (n.Footwear = "footwear"));
      let a = {
        beauty: {
          slug: "beauty",
          name: "AI Beauty",
          description:
            "Create stunning beauty product imagery with AI. Generate photorealistic images of makeup, skincare, and beauty tools in lifestyle settings.",
          features: [
            "Generate lifelike beauty product imagery without a photoshoot",
            "Create consistent product angles and lighting across your catalog",
            "Show products in use with diverse models",
            "Visualize products in lifestyle settings",
            "Easily create seasonal campaigns",
            "Experiment with different packaging concepts",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/a3337f99-6d1a-4a38-8f45-f238a8604c00/1024",
              title: "Luxury Skincare",
              prompt:
                "Body Creme on marble counter with soft lighting and minimal aesthetic",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/a0ec3b4f-cb98-473a-1c17-eee815fa2600/1024",
              title: "Cosmetics Flatlay",
              prompt:
                "Professional flatlay of Lip kit bundle including lipstick, lip liner, and lip balm",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/424b6b61-97eb-4d54-4f1f-f674bf1ea600/1024",
              title: "Relaxing Bath Set",
              prompt:
                "Lavender Bath Set including bath bombs, candles, and essential oils arranged around a bathtub",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/72418664-99ae-44c1-1ea7-4e735ba6ea00/1024",
              title: "Korean Skincare Routine",
              prompt:
                "Complete 10-Step Skincare Routine with toners, essences, and sheet masks arranged in minimalist style on light background",
            },
          ],
          faqs: [
            {
              question: "How realistic are the AI-generated beauty products?",
              answer:
                "Our AI creates photorealistic beauty product images that are indistinguishable from professional photography. The system accurately renders textures, reflections, and lighting to create stunning product visualizations.",
            },
            {
              question: "Can I create images of my specific product designs?",
              answer:
                "Yes! You can upload reference images of your actual products, and our AI will create new marketing imagery featuring those products in different settings and angles.",
            },
          ],
        },
        "consumer-packaged-goods": {
          slug: "consumer-packaged-goods",
          name: "AI Consumer Packaged Goods",
          description:
            "Create compelling CPG product imagery for all your marketing channels. Visualize packaging concepts, show products in use, and create consistent catalog imagery.",
          features: [
            "Generate high-quality images of packaged products",
            "Create consistent product angles across your catalog",
            "Visualize new packaging designs before production",
            "Show products in lifestyle and usage settings",
            "Create seasonal and promotional imagery on demand",
            "Design multi-product arrangements for collections",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/54c9ca9b-e7d1-4660-73b3-9ad86493bc00/1024",
              title: "Premium Packaging",
              prompt: "3 Bars Bundle on clean white surface with soft shadows",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0c57240e-107f-4aac-0651-c6942f11ec00/1024",
              title: "Product Collection",
              prompt:
                "Limited Edition Bundle arranged in a visually pleasing composition",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b505cc6a-62bd-4b47-726d-7905135d4700/1024",
              title: "Lifestyle Context",
              prompt:
                "Flower Desk lamp on a desk with with cute aesthetic, lifestyle setting",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/fec1c464-50e2-49dd-f3c6-6fc17cead700/1024",
              title: "Product Flatlay",
              prompt:
                "Overhead view of Spring 2025 Bundle arranged aesthetically on white surface",
            },
          ],
          faqs: [
            {
              question: "Can I create images of products that don't exist yet?",
              answer:
                "Absolutely! Our AI is perfect for visualizing packaging concepts before production, saving you time and costs on physical prototypes.",
            },
            {
              question:
                "How can I ensure brand consistency across AI-generated images?",
              answer:
                "You can upload your brand guidelines and reference materials, and our AI will maintain consistent brand elements, colors, and styling across all generated imagery.",
            },
          ],
        },
        jewelry: {
          slug: "jewelry",
          name: "AI Jewelry",
          description:
            "Create stunning jewelry product imagery with AI. Generate photorealistic images of rings, necklaces, earrings and more in elegant settings or on diverse models.",
          features: [
            "Generate high-quality jewelry images without expensive photography",
            "Show pieces on diverse models or in elegant settings",
            "Create consistent lighting and angles across your entire catalog",
            "Visualize custom designs before production",
            "Easily create seasonal and thematic campaigns",
            "Show how pieces can be styled and layered together",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f94a1ca6-9571-4199-eb48-e47d7373c900/1024",
              title: "Premium Jewelry Display",
              prompt: "Nature Charms (Silver) on white trinket dish",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/8b54f96d-1d43-44c4-58f5-9b0c63b84f00/1024",
              title: "Rings on Hand",
              prompt:
                "Close-up of Bold & Beautiful (Set) worn on female hand with neutral manicure",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/10799b8d-9df2-42f7-589c-221d468a8700/1024",
              title: "Styled Earrings",
              prompt:
                "Gold Sculpted Earrings shown on model with elegant updo hairstyle",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b115959d-663a-4a6f-e1f2-4e24e5b6e300/1024",
              title: "Layered Jewelry",
              prompt:
                "Gold Chain Bundle (7 items) arranged to show layering possibilities",
            },
          ],
          faqs: [
            {
              question:
                "How accurately can AI capture jewelry details and gemstones?",
              answer:
                "Our AI is specifically trained to render fine jewelry details, accurately depicting gemstone cuts, metal finishes, and intricate design elements with photorealistic quality.",
            },
            {
              question: "Can I create images of jewelry on specific models?",
              answer:
                "Yes! You can generate images of your jewelry pieces on a diverse range of models with different skin tones, ages, and styles to show how your pieces look when worn.",
            },
          ],
        },
        "fashion-models": {
          slug: "fashion-models",
          name: "AI Fashion Models",
          description:
            "Generate stunning fashion imagery with AI models wearing your products. Create diverse, on-brand content for all your marketing channels.",
          features: [
            "Create diverse model imagery without photoshoots",
            "Show your products on different body types and skin tones",
            "Maintain consistent styling across your catalog",
            "Generate seasonal campaign imagery on demand",
            "Visualize new designs before production",
            "Create lifestyle imagery in various settings",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/094efc4c-8eaa-4abc-2190-af473bee2b00/1024",
              title: "Studio Portrait",
              prompt:
                "Professional studio portrait of model wearing Kankuro Nightwatch Black Jacket and Pants set against neutral background",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/5e6ca024-797d-439e-713b-ac7ffa9cbd00/1024",
              title: "Urban Lifestyle",
              prompt:
                "Model showcasing Women's Brown Wool Coat while walking on city street with soft natural lighting",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/fd0909b3-521a-4df0-ed21-98b25b11a100/1024",
              title: "Accessory Focus",
              prompt: "Close-up Nolan wearing Jacket-294D",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/56917a18-fbd3-4b9d-7450-153cea78c800/1024",
              title: "Active Wear",
              prompt:
                "Athletic model in Summer 2025 Active Set #13 in dynamic pose",
            },
          ],
          faqs: [
            {
              question: "How diverse are the AI models available?",
              answer:
                "Our system offers a wide range of model diversity, including various body types, skin tones, ages, and styles. You can generate inclusive marketing materials that represent your entire customer base.",
            },
            {
              question:
                "Can I create consistent model imagery across my product catalog?",
              answer:
                "Absolutely! Once you establish a style or specific model look, our AI can maintain consistent representation across your entire product line, ensuring brand cohesion.",
            },
          ],
        },
        furniture: {
          slug: "furniture",
          name: "AI Furniture",
          description:
            "Create stunning furniture imagery with AI. Generate photorealistic images of your furniture products in various settings and from multiple angles.",
          features: [
            "Generate realistic furniture images without expensive photography or staging",
            "Show pieces in different interior design contexts",
            "Create consistent lighting and angles across your catalog",
            "Visualize new designs before production",
            "Generate seasonal and thematic room settings",
            "Show furniture in different color and material options",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0bc734d0-ebc9-4057-bc1d-0073b6e3b700/1024",
              title: "Sofa Showcase",
              prompt:
                "Jefferson Sofa in Sage Green in bright living room with natural lighting and minimal decor",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c016bbae-52c7-477a-a3fd-928291912400/1024",
              title: "Bedroom Set",
              prompt: "Oak Bedroom Set with Full Bed in coordinated style",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/ed99d6c1-8311-41cc-cbcd-61f61d616400/1024",
              title: "Office Furniture",
              prompt:
                "Zinc Standing Desk in home office setting with productivity accessories",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/11a66b2f-a0f1-4561-0a48-1ee47c7c9300/1024",
              title: "Outdoor Collection",
              prompt:
                "Teal and Maple Patio Furniture Set on wooden deck with lush greenery and outdoor accessories",
            },
          ],
          faqs: [
            {
              question:
                "How realistic are the room settings in AI-generated furniture images?",
              answer:
                "Our AI creates photorealistic interior scenes with accurate lighting, shadows, and perspective. The furniture appears naturally integrated into the space for compelling and believable marketing imagery.",
            },
            {
              question:
                "Can I show my furniture in specific interior design styles?",
              answer:
                "Yes! You can specify interior design styles (modern, mid-century, traditional, etc.) and our AI will generate appropriate settings that complement your furniture pieces.",
            },
          ],
        },
        tech: {
          slug: "tech",
          name: "AI Technology",
          description:
            "Create compelling tech product imagery with AI. Generate photorealistic images of electronics, gadgets, and tech accessories in various settings.",
          features: [
            "Generate realistic tech product images without expensive photography",
            "Show devices in use with diverse models",
            "Create consistent angles and lighting across your catalog",
            "Visualize new product concepts before production",
            "Generate lifestyle imagery showing tech in various contexts",
            "Show UI/screen content on devices",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/90818fcb-2050-4bac-8acb-4621c2cd8000/1024",
              title: "Tech Flatlay",
              prompt:
                "Overhead view of multiple tech devices and accessories arranged aesthetically",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/2abe7093-8eae-4479-8a23-b2ceb60e5a00/1024",
              title: "Device in Use",
              prompt: "Awake 2.0 on nightstand with ambient lighting",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b445e3b6-42f8-4b64-f35e-ebb5b403c500/1024",
              title: "Premium Product Shot",
              prompt: "Phone with dramatic lighting on reflective surface",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/beb279ba-8b43-4c65-5550-6905d3faec00/1024",
              title: "Accessory Collection",
              prompt:
                "Spring 2025 Collection of gadgets arranged to show ecosystem",
            },
          ],
          faqs: [
            {
              question: "Can I showcase specific UI screens on devices?",
              answer:
                "Yes! Our AI can realistically display screen content on devices, allowing you to showcase your app or interface in context.",
            },
            {
              question:
                "How accurate are the product details in AI-generated tech images?",
              answer:
                "Our AI can accurately render detailed tech product features like buttons, ports, textures, and materials for photorealistic product imagery.",
            },
          ],
        },
        handbags: {
          slug: "handbags",
          name: "AI Handbags",
          description:
            "Create stunning handbag imagery with AI. Generate photorealistic images of bags, purses, and accessories in various settings or on models.",
          features: [
            "Generate high-quality handbag images without expensive photography",
            "Show bags on diverse models or in elegant settings",
            "Create consistent lighting and angles across your catalog",
            "Visualize new designs before production",
            "Generate seasonal campaign imagery on demand",
            "Show products in lifestyle contexts",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/fa4e28a4-c7b4-4d7a-2de6-457885242b00/1024",
              title: "Product Detail",
              prompt:
                "Close-up of Marni Bag in Warm Brown showing leather texture and hardware details",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/87fbe984-43e7-4542-5366-39ece2aef400/1024",
              title: "Styled Setting",
              prompt: "Camel Olivia Bag on stylish surface",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/11376d58-c6a0-4ee6-54ff-92abf2e7c300/1024",
              title: "Model Shot",
              prompt:
                "Model carrying Cream Hobo Bag with coordinated outfit in urban setting",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/a44a81ba-b488-4a76-510a-ed13e0266300/1024",
              title: "Collection Display",
              prompt: "Customizable Kids Rabbit Bag worn on a model",
            },
          ],
          faqs: [
            {
              question:
                "How accurate are the material textures in AI-generated handbag images?",
              answer:
                "Our AI accurately renders leather grain, fabric textures, hardware finishes, and other material details for photorealistic handbag visualization.",
            },
            {
              question: "Can I show how my bags look when carried?",
              answer:
                "Yes! You can generate images of your handbags being carried by diverse models to demonstrate size, proportion, and styling.",
            },
          ],
        },
        food: {
          slug: "food",
          name: "AI Food",
          description:
            "Create appetizing food imagery with AI. Generate photorealistic images of dishes, ingredients, and packaged food products for your marketing needs.",
          features: [
            "Generate mouthwatering food images without professional food styling",
            "Create consistent presentation across your menu or product line",
            "Visualize new recipes or product concepts",
            "Show food in various serving contexts",
            "Generate seasonal menu imagery on demand",
            "Create lifestyle settings featuring your food products",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1a559f19-0598-4a92-d71f-893941e35f00/1024",
              title: "Overhead Food Shot",
              prompt:
                "Beautifully arranged Salmon Fillet Main Dish photographed from above with complementary ingredients",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/dbd3879d-1800-45a5-beaa-beb140654700/1024",
              title: "Restaurant Setting",
              prompt:
                "Angus Steak in upscale restaurant environment with ambient lighting",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/924b1a74-341e-40be-7915-ecacdf1ca600/1024",
              title: "Lifestyle Shot",
              prompt:
                "Lifestyle shot of a person enjoying a Chicken Breast & Brown Rice meal",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0afce185-6f30-4231-296b-177c066a6100/1024",
              title: "Ingredient Showcase",
              prompt:
                "Fresh ingredients arranged around Beef Tacos (3) showing quality components",
            },
          ],
          faqs: [
            {
              question: "How realistic do AI-generated food images look?",
              answer:
                "Our AI creates highly appetizing and realistic food imagery with proper textures, steam effects, and lighting that would normally require professional food styling.",
            },
            {
              question:
                "Can I create images for an entire menu or product line?",
              answer:
                "Absolutely! You can quickly generate consistent, high-quality images for your complete menu or product catalog, maintaining a cohesive visual style.",
            },
          ],
        },
        footwear: {
          slug: "footwear",
          name: "AI Footwear",
          description:
            "Create stunning footwear imagery with AI. Generate photorealistic images of shoes, boots, and accessories in various settings or on diverse models.",
          features: [
            "Generate high-quality footwear images without expensive photography",
            "Show shoes on diverse models or in elegant settings",
            "Create consistent lighting and angles across your catalog",
            "Visualize new designs before production",
            "Generate seasonal campaign imagery on demand",
            "Show products in lifestyle contexts",
          ],
          examples: [
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/14679ccb-065d-45aa-c29a-e99a9653cd00/1024",
              title: "Product Detail",
              prompt:
                "Close-up of Grey Lonestar Runner showing material details and design features",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/93a94826-0c1b-4c98-5ad3-fa7a01663f00/1024",
              title: "Lifestyle Setting",
              prompt:
                "Navy Suede Sneakers in everyday environment showing real-world context",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/e30eba3f-7a48-45fa-9c5f-4c24af488300/1024",
              title: "On Model",
              prompt:
                "Little Black Boot shown on model with coordinated outfit",
            },
            {
              imageUrl:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b496d570-c0e0-480c-b82a-05f754d23900/1024",
              title: "Collection Display",
              prompt:
                "Spring 2025 Basic Collection displayed together showing variety in collection",
            },
          ],
          faqs: [
            {
              question:
                "How accurate are the material textures in AI-generated footwear images?",
              answer:
                "Our AI accurately renders leather, suede, canvas, and other material textures with proper lighting and shadows for photorealistic footwear visualization.",
            },
            {
              question: "Can I show my footwear in action?",
              answer:
                "Yes! You can generate dynamic imagery showing footwear being worn in various activities and environments to highlight performance features.",
            },
          ],
        },
      };
    },
    7744: function (e, t, r) {
      "use strict";
      r.d(t, {
        Z: function () {
          return u;
        },
        s: function () {
          return f;
        },
      });
      var i = r(5893);
      r(7294);
      var n = r(7104),
        a = r(6260),
        o = r(9779),
        s = r(1664),
        l = r.n(s),
        c = r(5675),
        d = r.n(c);
      let u = Object.values(r(8714).H).map((e) => ({
          name: e.name,
          href: "/product-category-features/".concat(e.slug),
        })),
        f = (e) => {
          let {
            categoryName: t,
            description: r,
            features: s,
            examples: c,
            faqs: u = [],
          } = e;
          return (0, i.jsxs)("div", {
            className: "min-h-[80vh] bg-zinc-950 text-zinc-100",
            children: [
              (0, i.jsx)("section", {
                className: "py-16 border-b border-zinc-800",
                children: (0, i.jsx)("div", {
                  className: (0, n.A)("mx-auto px-4", a.O),
                  children: (0, i.jsxs)("div", {
                    className: "max-w-3xl",
                    children: [
                      (0, i.jsx)("h1", {
                        className: "text-4xl md:text-5xl text-zinc-100 mb-6",
                        children: t,
                      }),
                      (0, i.jsx)("p", {
                        className: "text-zinc-400 text-lg leading-relaxed mb-8",
                        children: r,
                      }),
                      (0, i.jsx)(l(), {
                        href: "https://app.flair.ai/",
                        children: (0, i.jsx)(o.D, {
                          className: "px-8 py-3 text-lg",
                          children: "Start Creating",
                        }),
                      }),
                    ],
                  }),
                }),
              }),
              (0, i.jsx)("section", {
                className: "py-16 border-b border-zinc-800",
                children: (0, i.jsx)("div", {
                  className: (0, n.A)("mx-auto px-4", a.O),
                  children: (0, i.jsx)("div", {
                    className:
                      "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                    children: c.map((e, t) =>
                      (0, i.jsxs)(
                        "div",
                        {
                          className:
                            "bg-zinc-900 rounded-lg overflow-hidden group hover:bg-zinc-800 transition-colors",
                          children: [
                            (0, i.jsxs)("div", {
                              className: "aspect-square relative",
                              children: [
                                (0, i.jsx)(d(), {
                                  src: e.imageUrl,
                                  alt: e.title,
                                  className: "w-full h-full object-cover",
                                  width: 1024,
                                  height: 1024,
                                }),
                                (0, i.jsx)("div", {
                                  className:
                                    "absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70",
                                }),
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "p-4",
                              children: [
                                (0, i.jsx)("h3", {
                                  className:
                                    "text-zinc-100 font-medium text-lg group-hover:text-lime-500 transition-colors",
                                  children: e.title,
                                }),
                                e.prompt &&
                                  (0, i.jsxs)("p", {
                                    className:
                                      "text-zinc-400 text-sm mt-1 italic",
                                    children: ['"', e.prompt, '"'],
                                  }),
                              ],
                            }),
                          ],
                        },
                        t,
                      ),
                    ),
                  }),
                }),
              }),
              (0, i.jsx)("section", {
                className: "py-16 border-b border-zinc-800",
                children: (0, i.jsxs)("div", {
                  className: (0, n.A)("mx-auto px-4", a.O),
                  children: [
                    (0, i.jsx)("h2", {
                      className: "text-3xl mb-8",
                      children: "Key Features",
                    }),
                    (0, i.jsx)("div", {
                      className:
                        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                      children: s.map((e, t) =>
                        (0, i.jsx)(
                          "div",
                          {
                            className: "bg-zinc-900 p-6 rounded-lg",
                            children: (0, i.jsxs)("div", {
                              className: "flex items-start mb-3",
                              children: [
                                (0, i.jsx)("div", {
                                  className:
                                    "rounded-full bg-lime-500 bg-opacity-20 flex  justify-center mr-3",
                                  children: (0, i.jsx)("span", {
                                    className:
                                      "text-lime-500 font-medium text-center w-8 h-8 flex items-center justify-center",
                                    children: t + 1,
                                  }),
                                }),
                                (0, i.jsx)("h3", {
                                  className:
                                    "text-lg font-medium text-zinc-100",
                                  children: e,
                                }),
                              ],
                            }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
              u.length > 0 &&
                (0, i.jsx)("section", {
                  className: "py-16",
                  children: (0, i.jsxs)("div", {
                    className: (0, n.A)("mx-auto px-4", a.O),
                    children: [
                      (0, i.jsx)("h2", {
                        className: "text-3xl mb-8",
                        children: "Frequently Asked Questions",
                      }),
                      (0, i.jsx)("div", {
                        className: "space-y-6",
                        children: u.map((e, t) =>
                          (0, i.jsxs)(
                            "div",
                            {
                              className: "bg-zinc-900 p-6 rounded-lg",
                              children: [
                                (0, i.jsx)("h3", {
                                  className: "text-xl font-medium mb-3",
                                  children: e.question,
                                }),
                                (0, i.jsx)("p", {
                                  className: "text-zinc-400",
                                  children: e.answer,
                                }),
                              ],
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                }),
              (0, i.jsx)("section", {
                className: "py-16 bg-zinc-900",
                children: (0, i.jsxs)("div", {
                  className: (0, n.A)("mx-auto px-4 text-center", a.O),
                  children: [
                    (0, i.jsx)("h2", {
                      className: "text-3xl mb-4",
                      children: "Ready to create amazing photoshoots?",
                    }),
                    (0, i.jsxs)("p", {
                      className: "text-zinc-400 text-lg mb-8 max-w-2xl mx-auto",
                      children: [
                        "Join millions of creators and businesses using Flair.ai to generate stunning ",
                        t,
                        " content.",
                      ],
                    }),
                    (0, i.jsx)(l(), {
                      href: "https://app.flair.ai/",
                      children: (0, i.jsx)(o.D, {
                        className: "px-8 py-3 text-lg",
                        children: "Start Creating Now",
                      }),
                    }),
                  ],
                }),
              }),
            ],
          });
        };
    },
    8630: function (e, t, r) {
      "use strict";
      r.d(t, {
        H: function () {
          return o;
        },
      });
      var i = r(5893),
        n = r(9008),
        a = r.n(n);
      function o(e) {
        let {
            title: t = "AI Design Tool for Product Photos",
            description:
              r = "Create studio-quality e-commerce photoshoots in seconds with our drag-and-drop AI editor. Try it free.",
            canonical: n = "https://flair.ai/",
            ogImage:
              o = "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/27e80a51-e8fc-4197-4a9a-9d422bf1a200/public",
            ogType: s = "website",
            alternateLanguages: l = [],
          } = e,
          c = t ? "".concat(t, " | Flair.ai") : "Flair.ai";
        return (0, i.jsxs)(a(), {
          children: [
            (0, i.jsx)("title", { children: c }),
            (0, i.jsx)("meta", { name: "description", content: r }),
            (0, i.jsx)("link", { rel: "canonical", href: n }),
            l.map((e) => {
              let { hreflang: t, href: r } = e;
              return (0, i.jsx)(
                "link",
                { rel: "alternate", hrefLang: t, href: r },
                t,
              );
            }),
            (0, i.jsx)("link", { rel: "manifest", href: "/manifest.json" }),
            (0, i.jsx)("meta", { property: "og:type", content: s }),
            (0, i.jsx)("meta", {
              property: "og:site_name",
              content: "Flair.ai",
            }),
            (0, i.jsx)("meta", { property: "og:url", content: n }),
            (0, i.jsx)("meta", { property: "og:title", content: c }),
            (0, i.jsx)("meta", { property: "og:description", content: r }),
            (0, i.jsx)("meta", { property: "og:image", content: o }),
            (0, i.jsx)("meta", { property: "og:image:width", content: "1200" }),
            (0, i.jsx)("meta", { property: "og:image:height", content: "630" }),
            (0, i.jsx)("meta", { property: "og:locale", content: "en_US" }),
            (0, i.jsx)("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            (0, i.jsx)("meta", { name: "twitter:site", content: "@flairAI_" }),
            (0, i.jsx)("meta", {
              name: "twitter:creator",
              content: "@flairAI_",
            }),
            (0, i.jsx)("meta", { name: "twitter:title", content: t }),
            (0, i.jsx)("meta", { name: "twitter:description", content: r }),
            (0, i.jsx)("meta", { name: "twitter:image", content: o }),
            (0, i.jsx)("meta", { name: "twitter:url", content: n }),
            (0, i.jsx)("meta", { name: "robots", content: "index,follow" }),
            (0, i.jsx)("meta", { name: "theme-color", content: "#84CC16" }),
            (0, i.jsx)("link", { rel: "icon", href: "/favicon.ico" }),
            (0, i.jsx)("link", {
              rel: "apple-touch-icon",
              href: "/apple-touch-icon.png",
            }),
            (0, i.jsx)("link", {
              rel: "mask-icon",
              href: "/favicon.svg",
              color: "#84CC16",
            }),
            (0, i.jsx)("meta", {
              name: "viewport",
              content: "width=device-width, initial-scale=1",
            }),
          ],
        });
      }
    },
    7104: function (e, t, r) {
      "use strict";
      r.d(t, {
        A: function () {
          return n;
        },
      });
      var i = r(7851);
      function n() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, i.m)(t);
      }
    },
    5768: function (e, t, r) {
      "use strict";
      function i(e) {
        let { src: t, width: r } = e;
        return (function (e) {
          let { src: t, width: r } = e,
            i =
              /^https:\/\/flair\.ai\/cdn-cgi\/imagedelivery\/([a-zA-Z0-9_-]+)\/([a-zA-Z0-9-]+)\/([a-zA-Z0-9-]+)(\/[0-9]+|\/public)?$/,
            n =
              r > 1024
                ? "public"
                : [64, 128, 256, 512, 1024].reduce((e, t) =>
                    Math.abs(t - r) < Math.abs(e - r) ? t : e,
                  );
          if (i.test(t)) {
            let e = t.match(i);
            if (e) {
              let t = e[1],
                r = e[2];
              e[3];
              let i = "public" === n ? "public" : n.toString();
              return "https://flair.ai/cdn-cgi/imagedelivery/"
                .concat(t, "/")
                .concat(r, "/")
                .concat(i);
            }
          }
          return t;
        })({ src: t, width: r });
      }
      (r.r(t),
        r.d(t, {
          default: function () {
            return i;
          },
        }));
    },
    3809: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "actionAsyncStorage", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let i = (0, r(8267).createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8267: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "createAsyncLocalStorage", {
          enumerable: !0,
          get: function () {
            return a;
          },
        }));
      let r = Error(
        "Invariant: AsyncLocalStorage accessed in runtime where it is not available",
      );
      class i {
        disable() {
          throw r;
        }
        getStore() {}
        run() {
          throw r;
        }
        exit() {
          throw r;
        }
        enterWith() {
          throw r;
        }
      }
      let n = globalThis.AsyncLocalStorage;
      function a() {
        return n ? new n() : new i();
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1770: function (e, t, r) {
      "use strict";
      function i(e) {}
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "clientHookInServerComponentError", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        r(8754),
        r(7294),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    6612: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ReadonlyURLSearchParams: function () {
            return m;
          },
          useSearchParams: function () {
            return p;
          },
          usePathname: function () {
            return h;
          },
          ServerInsertedHTMLContext: function () {
            return c.ServerInsertedHTMLContext;
          },
          useServerInsertedHTML: function () {
            return c.useServerInsertedHTML;
          },
          useRouter: function () {
            return b;
          },
          useParams: function () {
            return y;
          },
          useSelectedLayoutSegments: function () {
            return v;
          },
          useSelectedLayoutSegment: function () {
            return x;
          },
          redirect: function () {
            return d.redirect;
          },
          permanentRedirect: function () {
            return d.permanentRedirect;
          },
          RedirectType: function () {
            return d.RedirectType;
          },
          notFound: function () {
            return u.notFound;
          },
        }));
      let i = r(7294),
        n = r(6216),
        a = r(349),
        o = r(1770),
        s = r(8865),
        l = r(5160),
        c = r(594),
        d = r(7573),
        u = r(9249),
        f = Symbol("internal for urlsearchparams readonly");
      function g() {
        return Error("ReadonlyURLSearchParams cannot be modified");
      }
      class m {
        [Symbol.iterator]() {
          return this[f][Symbol.iterator]();
        }
        append() {
          throw g();
        }
        delete() {
          throw g();
        }
        set() {
          throw g();
        }
        sort() {
          throw g();
        }
        constructor(e) {
          ((this[f] = e),
            (this.entries = e.entries.bind(e)),
            (this.forEach = e.forEach.bind(e)),
            (this.get = e.get.bind(e)),
            (this.getAll = e.getAll.bind(e)),
            (this.has = e.has.bind(e)),
            (this.keys = e.keys.bind(e)),
            (this.values = e.values.bind(e)),
            (this.toString = e.toString.bind(e)),
            (this.size = e.size));
        }
      }
      function p() {
        (0, o.clientHookInServerComponentError)("useSearchParams");
        let e = (0, i.useContext)(a.SearchParamsContext);
        return (0, i.useMemo)(() => (e ? new m(e) : null), [e]);
      }
      function h() {
        return (
          (0, o.clientHookInServerComponentError)("usePathname"),
          (0, i.useContext)(a.PathnameContext)
        );
      }
      function b() {
        (0, o.clientHookInServerComponentError)("useRouter");
        let e = (0, i.useContext)(n.AppRouterContext);
        if (null === e)
          throw Error("invariant expected app router to be mounted");
        return e;
      }
      function y() {
        (0, o.clientHookInServerComponentError)("useParams");
        let e = (0, i.useContext)(n.GlobalLayoutRouterContext),
          t = (0, i.useContext)(a.PathParamsContext);
        return (0, i.useMemo)(
          () =>
            (null == e ? void 0 : e.tree)
              ? (function e(t, r) {
                  for (let i of (void 0 === r && (r = {}),
                  Object.values(t[1]))) {
                    let t = i[0],
                      n = Array.isArray(t),
                      a = n ? t[1] : t;
                    !a ||
                      a.startsWith(l.PAGE_SEGMENT_KEY) ||
                      (n && ("c" === t[2] || "oc" === t[2])
                        ? (r[t[0]] = t[1].split("/"))
                        : n && (r[t[0]] = t[1]),
                      (r = e(i, r)));
                  }
                  return r;
                })(e.tree)
              : t,
          [null == e ? void 0 : e.tree, t],
        );
      }
      function v(e) {
        (void 0 === e && (e = "children"),
          (0, o.clientHookInServerComponentError)("useSelectedLayoutSegments"));
        let { tree: t } = (0, i.useContext)(n.LayoutRouterContext);
        return (function e(t, r, i, n) {
          let a;
          if ((void 0 === i && (i = !0), void 0 === n && (n = []), i))
            a = t[1][r];
          else {
            var o;
            let e = t[1];
            a = null != (o = e.children) ? o : Object.values(e)[0];
          }
          if (!a) return n;
          let c = a[0],
            d = (0, s.getSegmentValue)(c);
          return !d || d.startsWith(l.PAGE_SEGMENT_KEY)
            ? n
            : (n.push(d), e(a, r, !1, n));
        })(t, e);
      }
      function x(e) {
        (void 0 === e && (e = "children"),
          (0, o.clientHookInServerComponentError)("useSelectedLayoutSegment"));
        let t = v(e);
        return 0 === t.length ? null : t[0];
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    9249: function (e, t) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          notFound: function () {
            return i;
          },
          isNotFoundError: function () {
            return n;
          },
        }));
      let r = "NEXT_NOT_FOUND";
      function i() {
        let e = Error(r);
        throw ((e.digest = r), e);
      }
      function n(e) {
        return (
          "object" == typeof e && null !== e && "digest" in e && e.digest === r
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2445: function (e, t) {
      "use strict";
      var r, i;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RedirectStatusCode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ((i = r || (r = {}))[(i.SeeOther = 303)] = "SeeOther"),
        (i[(i.TemporaryRedirect = 307)] = "TemporaryRedirect"),
        (i[(i.PermanentRedirect = 308)] = "PermanentRedirect"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    7573: function (e, t, r) {
      "use strict";
      var i, n;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          RedirectType: function () {
            return i;
          },
          getRedirectError: function () {
            return c;
          },
          redirect: function () {
            return d;
          },
          permanentRedirect: function () {
            return u;
          },
          isRedirectError: function () {
            return f;
          },
          getURLFromRedirectError: function () {
            return g;
          },
          getRedirectTypeFromError: function () {
            return m;
          },
          getRedirectStatusCodeFromError: function () {
            return p;
          },
        }));
      let a = r(7714),
        o = r(3809),
        s = r(2445),
        l = "NEXT_REDIRECT";
      function c(e, t, r) {
        void 0 === r && (r = s.RedirectStatusCode.TemporaryRedirect);
        let i = Error(l);
        i.digest = l + ";" + t + ";" + e + ";" + r + ";";
        let n = a.requestAsyncStorage.getStore();
        return (n && (i.mutableCookies = n.mutableCookies), i);
      }
      function d(e, t) {
        void 0 === t && (t = "replace");
        let r = o.actionAsyncStorage.getStore();
        throw c(
          e,
          t,
          (null == r ? void 0 : r.isAction)
            ? s.RedirectStatusCode.SeeOther
            : s.RedirectStatusCode.TemporaryRedirect,
        );
      }
      function u(e, t) {
        void 0 === t && (t = "replace");
        let r = o.actionAsyncStorage.getStore();
        throw c(
          e,
          t,
          (null == r ? void 0 : r.isAction)
            ? s.RedirectStatusCode.SeeOther
            : s.RedirectStatusCode.PermanentRedirect,
        );
      }
      function f(e) {
        if (
          "object" != typeof e ||
          null === e ||
          !("digest" in e) ||
          "string" != typeof e.digest
        )
          return !1;
        let [t, r, i, n] = e.digest.split(";", 4),
          a = Number(n);
        return (
          t === l &&
          ("replace" === r || "push" === r) &&
          "string" == typeof i &&
          !isNaN(a) &&
          a in s.RedirectStatusCode
        );
      }
      function g(e) {
        return f(e) ? e.digest.split(";", 3)[2] : null;
      }
      function m(e) {
        if (!f(e)) throw Error("Not a redirect error");
        return e.digest.split(";", 2)[1];
      }
      function p(e) {
        if (!f(e)) throw Error("Not a redirect error");
        return Number(e.digest.split(";", 4)[3]);
      }
      (((n = i || (i = {})).push = "push"),
        (n.replace = "replace"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    7714: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "requestAsyncStorage", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }));
      let i = (0, r(8267).createAsyncLocalStorage)();
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8865: function (e, t) {
      "use strict";
      function r(e) {
        return Array.isArray(e) ? e[1] : e;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSegmentValue", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    3412: function (e, t) {
      "use strict";
      var r, i;
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          PrefetchKind: function () {
            return r;
          },
          ACTION_REFRESH: function () {
            return n;
          },
          ACTION_NAVIGATE: function () {
            return a;
          },
          ACTION_RESTORE: function () {
            return o;
          },
          ACTION_SERVER_PATCH: function () {
            return s;
          },
          ACTION_PREFETCH: function () {
            return l;
          },
          ACTION_FAST_REFRESH: function () {
            return c;
          },
          ACTION_SERVER_ACTION: function () {
            return d;
          },
          isThenable: function () {
            return u;
          },
        }));
      let n = "refresh",
        a = "navigate",
        o = "restore",
        s = "server-patch",
        l = "prefetch",
        c = "fast-refresh",
        d = "server-action";
      function u(e) {
        return (
          e &&
          ("object" == typeof e || "function" == typeof e) &&
          "function" == typeof e.then
        );
      }
      (((i = r || (r = {})).AUTO = "auto"),
        (i.FULL = "full"),
        (i.TEMPORARY = "temporary"),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    6504: function (e, t, r) {
      "use strict";
      function i(e, t, r, i) {
        return !1;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return i;
          },
        }),
        r(282),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default)));
    },
    3686: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return v;
          },
        }));
      let i = r(8754),
        n = r(1757),
        a = r(5893),
        o = n._(r(7294)),
        s = i._(r(3935)),
        l = i._(r(6665)),
        c = r(1908),
        d = r(4706),
        u = r(5670);
      r(1558);
      let f = r(1973),
        g = i._(r(5768)),
        m = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image/",
          loader: "custom",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(e, t, r, i, n, a) {
        let o = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== o &&
          ((e["data-loaded-src"] = o),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && n(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let i = !1,
                    n = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => i,
                    isPropagationStopped: () => n,
                    persist: () => {},
                    preventDefault: () => {
                      ((i = !0), t.preventDefault());
                    },
                    stopPropagation: () => {
                      ((n = !0), t.stopPropagation());
                    },
                  });
                }
                (null == i ? void 0 : i.current) && i.current(e);
              }
            }));
      }
      function h(e) {
        let [t, r] = o.version.split(".", 2),
          i = parseInt(t, 10),
          n = parseInt(r, 10);
        return i > 18 || (18 === i && n >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let b = (0, o.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: i,
          sizes: n,
          height: s,
          width: l,
          decoding: c,
          className: d,
          style: u,
          fetchPriority: f,
          placeholder: g,
          loading: m,
          unoptimized: b,
          fill: y,
          onLoadRef: v,
          onLoadingCompleteRef: x,
          setBlurComplete: w,
          setShowAltText: _,
          onLoad: j,
          onError: P,
          ...C
        } = e;
        return (0, a.jsx)("img", {
          ...C,
          ...h(f),
          loading: m,
          width: l,
          height: s,
          decoding: c,
          "data-nimg": y ? "fill" : "1",
          className: d,
          style: u,
          sizes: n,
          srcSet: i,
          src: r,
          ref: (0, o.useCallback)(
            (e) => {
              (t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (P && (e.src = e.src), e.complete && p(e, g, v, x, w, b)));
            },
            [r, g, v, x, w, P, b, t],
          ),
          onLoad: (e) => {
            p(e.currentTarget, g, v, x, w, b);
          },
          onError: (e) => {
            (_(!0), "empty" !== g && w(!0), P && P(e));
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          i = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...h(r.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(r.src, i), null)
          : (0, a.jsx)(l.default, {
              children: (0, a.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...i },
                "__nimg-" + r.src + r.srcSet + r.sizes,
              ),
            });
      }
      let v = (0, o.forwardRef)((e, t) => {
        let r = (0, o.useContext)(f.RouterContext),
          i = (0, o.useContext)(u.ImageConfigContext),
          n = (0, o.useMemo)(() => {
            let e = m || i || d.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [i]),
          { onLoad: s, onLoadingComplete: l } = e,
          p = (0, o.useRef)(s);
        (0, o.useEffect)(() => {
          p.current = s;
        }, [s]);
        let h = (0, o.useRef)(l);
        (0, o.useEffect)(() => {
          h.current = l;
        }, [l]);
        let [v, x] = (0, o.useState)(!1),
          [w, _] = (0, o.useState)(!1),
          { props: j, meta: P } = (0, c.getImgProps)(e, {
            defaultLoader: g.default,
            imgConf: n,
            blurComplete: v,
            showAltText: w,
          });
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(b, {
              ...j,
              unoptimized: P.unoptimized,
              placeholder: P.placeholder,
              fill: P.fill,
              onLoadRef: p,
              onLoadingCompleteRef: h,
              setBlurComplete: x,
              setShowAltText: _,
              ref: t,
            }),
            P.priority
              ? (0, a.jsx)(y, { isAppRouter: !r, imgAttributes: j })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3480: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return x;
          },
        }));
      let i = r(8754),
        n = r(5893),
        a = i._(r(7294)),
        o = r(7950),
        s = r(7387),
        l = r(6982),
        c = r(6921),
        d = r(7727),
        u = r(1973),
        f = r(6216),
        g = r(1722),
        m = r(6504),
        p = r(634),
        h = r(3412),
        b = new Set();
      function y(e, t, r, i, n, a) {
        if (a || (0, s.isLocalURL)(t)) {
          if (!i.bypassPrefetchedCheck) {
            let n =
              t +
              "%" +
              r +
              "%" +
              (void 0 !== i.locale
                ? i.locale
                : "locale" in e
                  ? e.locale
                  : void 0);
            if (b.has(n)) return;
            b.add(n);
          }
          Promise.resolve(a ? e.prefetch(t, n) : e.prefetch(t, r, i)).catch(
            (e) => {},
          );
        }
      }
      function v(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let x = a.default.forwardRef(function (e, t) {
        let r, i;
        let {
          href: l,
          as: b,
          children: x,
          prefetch: w = null,
          passHref: _,
          replace: j,
          shallow: P,
          scroll: C,
          locale: k,
          onClick: I,
          onMouseEnter: N,
          onTouchStart: A,
          legacyBehavior: z = !1,
          ...O
        } = e;
        ((r = x),
          z &&
            ("string" == typeof r || "number" == typeof r) &&
            (r = (0, n.jsx)("a", { children: r })));
        let S = a.default.useContext(u.RouterContext),
          U = a.default.useContext(f.AppRouterContext),
          M = null != S ? S : U,
          E = !S,
          B = !1 !== w,
          T = null === w ? h.PrefetchKind.AUTO : h.PrefetchKind.FULL,
          { href: W, as: G } = a.default.useMemo(() => {
            if (!S) {
              let e = v(l);
              return { href: e, as: b ? v(b) : e };
            }
            let [e, t] = (0, o.resolveHref)(S, l, !0);
            return { href: e, as: b ? (0, o.resolveHref)(S, b) : t || e };
          }, [S, l, b]),
          R = a.default.useRef(W),
          H = a.default.useRef(G);
        z && (i = a.default.Children.only(r));
        let X = z ? i && "object" == typeof i && i.ref : t,
          [Q, L, q] = (0, g.useIntersection)({ rootMargin: "200px" }),
          F = a.default.useCallback(
            (e) => {
              ((H.current !== G || R.current !== W) &&
                (q(), (H.current = G), (R.current = W)),
                Q(e),
                X &&
                  ("function" == typeof X
                    ? X(e)
                    : "object" == typeof X && (X.current = e)));
            },
            [G, X, W, q, Q],
          );
        a.default.useEffect(() => {
          M && L && B && y(M, W, G, { locale: k }, { kind: T }, E);
        }, [G, W, L, k, B, null == S ? void 0 : S.locale, M, E, T]);
        let D = {
          ref: F,
          onClick(e) {
            (z || "function" != typeof I || I(e),
              z &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              M &&
                !e.defaultPrevented &&
                (function (e, t, r, i, n, o, l, c, d) {
                  let { nodeName: u } = e.currentTarget;
                  if (
                    "A" === u.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!d && !(0, s.isLocalURL)(r)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[n ? "replace" : "push"](r, i, {
                          shallow: o,
                          locale: c,
                          scroll: e,
                        })
                      : t[n ? "replace" : "push"](i || r, { scroll: e });
                  };
                  d ? a.default.startTransition(f) : f();
                })(e, M, W, G, j, P, C, k, E));
          },
          onMouseEnter(e) {
            (z || "function" != typeof N || N(e),
              z &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              M &&
                (B || !E) &&
                y(
                  M,
                  W,
                  G,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: T },
                  E,
                ));
          },
          onTouchStart(e) {
            (z || "function" != typeof A || A(e),
              z &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              M &&
                (B || !E) &&
                y(
                  M,
                  W,
                  G,
                  { locale: k, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: T },
                  E,
                ));
          },
        };
        if ((0, c.isAbsoluteUrl)(G)) D.href = G;
        else if (!z || _ || ("a" === i.type && !("href" in i.props))) {
          let e = void 0 !== k ? k : null == S ? void 0 : S.locale,
            t =
              (null == S ? void 0 : S.isLocaleDomain) &&
              (0, m.getDomainLocale)(
                G,
                e,
                null == S ? void 0 : S.locales,
                null == S ? void 0 : S.domainLocales,
              );
          D.href =
            t ||
            (0, p.addBasePath)(
              (0, d.addLocale)(G, e, null == S ? void 0 : S.defaultLocale),
            );
        }
        return z
          ? a.default.cloneElement(i, D)
          : (0, n.jsx)("a", { ...O, ...D, children: r });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1722: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }));
      let i = r(7294),
        n = r(9126),
        a = "function" == typeof IntersectionObserver,
        o = new Map(),
        s = [];
      function l(e) {
        let { rootRef: t, rootMargin: r, disabled: l } = e,
          c = l || !a,
          [d, u] = (0, i.useState)(!1),
          f = (0, i.useRef)(null),
          g = (0, i.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, i.useEffect)(() => {
            if (a) {
              if (c || d) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, r) {
                  let {
                    id: i,
                    observer: n,
                    elements: a,
                  } = (function (e) {
                    let t;
                    let r = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      i = s.find(
                        (e) => e.root === r.root && e.margin === r.margin,
                      );
                    if (i && (t = o.get(i))) return t;
                    let n = new Map();
                    return (
                      (t = {
                        id: r,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = n.get(e.target),
                              r = e.isIntersecting || e.intersectionRatio > 0;
                            t && r && t(r);
                          });
                        }, e),
                        elements: n,
                      }),
                      s.push(r),
                      o.set(r, t),
                      t
                    );
                  })(r);
                  return (
                    a.set(e, t),
                    n.observe(e),
                    function () {
                      if ((a.delete(e), n.unobserve(e), 0 === a.size)) {
                        (n.disconnect(), o.delete(i));
                        let e = s.findIndex(
                          (e) => e.root === i.root && e.margin === i.margin,
                        );
                        e > -1 && s.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && u(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: r,
                });
            } else if (!d) {
              let e = (0, n.requestIdleCallback)(() => u(!0));
              return () => (0, n.cancelIdleCallback)(e);
            }
          }, [c, r, t, d, f.current]),
          [
            g,
            d,
            (0, i.useCallback)(() => {
              u(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1908: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(1558));
      let i = r(7386),
        n = r(4706);
      function a(e) {
        return void 0 !== e.default;
      }
      function o(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
            ? Number.isFinite(e)
              ? e
              : NaN
            : "string" == typeof e && /^[0-9]+$/.test(e)
              ? parseInt(e, 10)
              : NaN;
      }
      function s(e, t) {
        var r;
        let s,
          l,
          c,
          {
            src: d,
            sizes: u,
            unoptimized: f = !1,
            priority: g = !1,
            loading: m,
            className: p,
            quality: h,
            width: b,
            height: y,
            fill: v = !1,
            style: x,
            onLoad: w,
            onLoadingComplete: _,
            placeholder: j = "empty",
            blurDataURL: P,
            fetchPriority: C,
            layout: k,
            objectFit: I,
            objectPosition: N,
            lazyBoundary: A,
            lazyRoot: z,
            ...O
          } = e,
          { imgConf: S, showAltText: U, blurComplete: M, defaultLoader: E } = t,
          B = S || n.imageConfigDefault;
        if ("allSizes" in B) s = B;
        else {
          let e = [...B.deviceSizes, ...B.imageSizes].sort((e, t) => e - t),
            t = B.deviceSizes.sort((e, t) => e - t);
          s = { ...B, allSizes: e, deviceSizes: t };
        }
        let T = O.loader || E;
        (delete O.loader, delete O.srcSet);
        let W = "__next_img_default" in T;
        if (W) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader',
            );
        } else {
          let e = T;
          T = (t) => {
            let { config: r, ...i } = t;
            return e(i);
          };
        }
        if (k) {
          "fill" === k && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[k];
          e && (x = { ...x, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[k];
          t && !u && (u = t);
        }
        let G = "",
          R = o(b),
          H = o(y);
        if ("object" == typeof (r = d) && (a(r) || void 0 !== r.src)) {
          let e = a(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e),
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e),
            );
          if (
            ((l = e.blurWidth),
            (c = e.blurHeight),
            (P = P || e.blurDataURL),
            (G = e.src),
            !v)
          ) {
            if (R || H) {
              if (R && !H) {
                let t = R / e.width;
                H = Math.round(e.height * t);
              } else if (!R && H) {
                let t = H / e.height;
                R = Math.round(e.width * t);
              }
            } else ((R = e.width), (H = e.height));
          }
        }
        let X = !g && ("lazy" === m || void 0 === m);
        ((!(d = "string" == typeof d ? d : G) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (X = !1)),
          s.unoptimized && (f = !0),
          W && d.endsWith(".svg") && !s.dangerouslyAllowSVG && (f = !0),
          g && (C = "high"));
        let Q = o(h),
          L = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: I,
                  objectPosition: N,
                }
              : {},
            U ? {} : { color: "transparent" },
            x,
          ),
          q =
            M || "empty" === j
              ? null
              : "blur" === j
                ? 'url("data:image/svg+xml;charset=utf-8,' +
                  (0, i.getImageBlurSvg)({
                    widthInt: R,
                    heightInt: H,
                    blurWidth: l,
                    blurHeight: c,
                    blurDataURL: P || "",
                    objectFit: L.objectFit,
                  }) +
                  '")'
                : 'url("' + j + '")',
          F = q
            ? {
                backgroundSize: L.objectFit || "cover",
                backgroundPosition: L.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: q,
              }
            : {},
          D = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: i,
              width: n,
              quality: a,
              sizes: o,
              loader: s,
            } = e;
            if (i) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: c } = (function (e, t, r) {
                let { deviceSizes: i, allSizes: n } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let i; (i = e.exec(r)); i) t.push(parseInt(i[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: n.filter((t) => t >= i[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: n, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: i, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => n.find((t) => t >= e) || n[n.length - 1],
                          ),
                        ),
                      ],
                      kind: "x",
                    };
              })(t, n, o),
              d = l.length - 1;
            return {
              sizes: o || "w" !== c ? o : "100vw",
              srcSet: l
                .map(
                  (e, i) =>
                    s({ config: t, src: r, quality: a, width: e }) +
                    " " +
                    ("w" === c ? e : i + 1) +
                    c,
                )
                .join(", "),
              src: s({ config: t, src: r, quality: a, width: l[d] }),
            };
          })({
            config: s,
            src: d,
            unoptimized: f,
            width: R,
            quality: Q,
            sizes: u,
            loader: T,
          });
        return {
          props: {
            ...O,
            loading: X ? "lazy" : m,
            fetchPriority: C,
            width: R,
            height: H,
            decoding: "async",
            className: p,
            style: { ...L, ...F },
            sizes: D.sizes,
            srcSet: D.srcSet,
            src: D.src,
          },
          meta: { unoptimized: f, priority: g, placeholder: j, fill: v },
        };
      }
    },
    7386: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: i,
            blurHeight: n,
            blurDataURL: a,
            objectFit: o,
          } = e,
          s = i ? 40 * i : t,
          l = n ? 40 * n : r,
          c = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          c +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (c
            ? "none"
            : "contain" === o
              ? "xMidYMid"
              : "cover" === o
                ? "xMidYMid slice"
                : "none") +
          "' style='filter: url(%23b);' href='" +
          a +
          "'/%3E%3C/svg%3E"
        );
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }));
    },
    9267: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          getImageProps: function () {
            return s;
          },
          default: function () {
            return l;
          },
        }));
      let i = r(8754),
        n = r(1908),
        a = r(3686),
        o = i._(r(5768)),
        s = (e) => {
          let { props: t } = (0, n.getImgProps)(e, {
            defaultLoader: o.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/_next/image/",
              loader: "custom",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
          return { props: t };
        },
        l = a.Image;
    },
    594: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          ServerInsertedHTMLContext: function () {
            return n;
          },
          useServerInsertedHTML: function () {
            return a;
          },
        }));
      let i = r(1757)._(r(7294)),
        n = i.default.createContext(null);
      function a(e) {
        let t = (0, i.useContext)(n);
        t && t(e);
      }
    },
    4343: function (e, t, r) {
      "use strict";
      (r.r(t),
        r.d(t, {
          default: function () {
            return J;
          },
        }));
      var i,
        n,
        a = r(5893),
        o = r(58),
        s = r(9647),
        l = r.n(s),
        c = r(7104),
        d = r(1664),
        u = r.n(d);
      function f(e) {
        let { size: t = 32, ...r } = e;
        return (0, a.jsxs)("svg", {
          ...r,
          width: t,
          height: t,
          viewBox: "0 0 512 512",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: [
            (0, a.jsx)("path", {
              d: "M74.4382 512H101.382C145.501 512 184.758 484.003 199.13 442.291C201.443 435.578 196.456 428.584 189.355 428.584H74.4382V512Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M104.389 171.146H73V90.6067H167.596C188.629 90.6067 207.532 77.771 215.29 58.2212C229.236 23.0755 263.219 0 301.031 0H439.742V86.2921H232.502C212.533 86.2921 194.501 98.2355 186.71 116.621C172.705 149.675 140.287 171.146 104.389 171.146Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M105.827 343.73H74.4382V263.191H169.034C190.067 263.191 208.97 250.355 216.728 230.805C230.675 195.66 264.657 172.584 302.469 172.584H418.169V258.876H233.94C213.971 258.876 195.939 270.82 188.149 289.206C174.143 322.259 141.726 343.73 105.827 343.73Z",
              fill: "currentColor",
            }),
          ],
        });
      }
      var g = r(6260),
        m = r(1373);
      let p = (0, m.Z)("network", [
          [
            "rect",
            {
              x: "16",
              y: "16",
              width: "6",
              height: "6",
              rx: "1",
              key: "4q2zg0",
            },
          ],
          [
            "rect",
            {
              x: "2",
              y: "16",
              width: "6",
              height: "6",
              rx: "1",
              key: "8cvhb9",
            },
          ],
          [
            "rect",
            { x: "9", y: "2", width: "6", height: "6", rx: "1", key: "1egb70" },
          ],
          [
            "path",
            { d: "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3", key: "1jsf9p" },
          ],
          ["path", { d: "M12 12V8", key: "2874zd" }],
        ]),
        h = (0, m.Z)("shirt", [
          [
            "path",
            {
              d: "M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",
              key: "1wgbhj",
            },
          ],
        ]),
        b = (0, m.Z)("video", [
          [
            "path",
            {
              d: "m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",
              key: "ftymec",
            },
          ],
          [
            "rect",
            {
              x: "2",
              y: "6",
              width: "14",
              height: "12",
              rx: "2",
              key: "158x01",
            },
          ],
        ]),
        y = (0, m.Z)("monitor-smartphone", [
          [
            "path",
            {
              d: "M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",
              key: "10dyio",
            },
          ],
          ["path", { d: "M10 19v-3.96 3.15", key: "1irgej" }],
          ["path", { d: "M7 19h5", key: "qswx4l" }],
          [
            "rect",
            {
              width: "6",
              height: "10",
              x: "16",
              y: "12",
              rx: "2",
              key: "1egngj",
            },
          ],
        ]),
        v = (0, m.Z)("circle-user", [
          ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
          ["circle", { cx: "12", cy: "10", r: "3", key: "ilqhr7" }],
          [
            "path",
            {
              d: "M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",
              key: "154egf",
            },
          ],
        ]),
        x = (0, m.Z)("code-xml", [
          ["path", { d: "m18 16 4-4-4-4", key: "1inbqp" }],
          ["path", { d: "m6 8-4 4 4 4", key: "15zrgr" }],
          ["path", { d: "m14.5 4-5 16", key: "e7oirm" }],
        ]);
      (((i = n || (n = {})).BulkContentGeneration = "bulk-content-generation"),
        (i.OnModelPhotography = "on-model-photography"),
        (i.AIProductVideos = "ai-product-videos"),
        (i.AIMarketingAds = "ai-marketing-and-ads"),
        (i.AIHumanBuilder = "ai-human-builder"),
        (i.API = "flair-api"));
      let w = {
        "bulk-content-generation": {
          slug: "bulk-content-generation",
          name: "Bulk Content Generation",
          iconType: "network",
          shortDescription: "Generate multiple content types at once",
          description:
            "Generate multiple content types at once, including images, videos, and text.",
          heroImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f056e11c-2264-463e-5900-955fbbe1be00/1024",
          steps: [
            {
              title: "Upload your product images",
              description:
                "Start by uploading clean product images. These can be simple product-only shots against a neutral background.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/26c9b3c5-5695-4b02-1d74-1fd122384700/1024",
            },
            {
              title: "Select content types",
              description:
                "Choose the content types you want to generate. You can select from a range of options, including images, videos, and text.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/851d5238-1b64-4c94-4c6f-f54fb1ddb500/1024",
            },
            {
              title: "Generate content",
              description:
                "Our AI generates the content you need, including images, videos, and ads.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f50d2e07-f51a-401d-86c1-b57e8e8e1d00/1024",
            },
          ],
          cta: {
            heading: "Ready to generate on brand content at scale?",
            subheading:
              "Join thousands of brands using Flair.ai to create stunning on-model imagery without expensive photoshoots.",
            buttonText: "Start Creating Now",
            buttonLink: "https://app.flair.ai/",
          },
        },
        "on-model-photography": {
          slug: "on-model-photography",
          name: "On Model Photography",
          iconType: "shirt",
          shortDescription: "Generate fashion on model photos in seconds",
          description:
            "Generate high-quality product photos on diverse models without expensive photo shoots.",
          heroImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/18659716-f931-4ab8-b557-f9b391ea8000/1024",
          steps: [
            {
              title: "Upload your product images",
              description:
                "Start by uploading clean product images. These can be simple product-only shots against a neutral background.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/26c9b3c5-5695-4b02-1d74-1fd122384700/1024",
            },
            {
              title: "Select model attributes",
              description:
                "Choose from a diverse range of model types, poses, and styles that align with your brand aesthetic.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/851d5238-1b64-4c94-4c6f-f54fb1ddb500/1024",
            },
            {
              title: "Customize the setting",
              description:
                "Select the environment, lighting, and other details to create the perfect context for your product.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f50d2e07-f51a-401d-86c1-b57e8e8e1d00/1024",
            },
            {
              title: "Generate and refine",
              description:
                "Our AI creates photorealistic on-model imagery that you can further refine with our editing tools.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/7428b34c-eb85-4ef7-afcb-7635e1b78b00/1024",
            },
          ],
          cta: {
            heading: "Ready to transform your product photography?",
            subheading:
              "Join thousands of brands using Flair.ai to create stunning on-model imagery without expensive photoshoots.",
            buttonText: "Start Creating Now",
            buttonLink: "https://app.flair.ai/",
          },
        },
        "ai-product-videos": {
          slug: "ai-product-videos",
          name: "AI Product Videos",
          iconType: "video",
          shortDescription: "Create professional product videos",
          description:
            "Create professional product videos and animations in seconds without video equipment or editing skills.",
          heroVideo:
            "https://video.flair.ai/assetsV2_7CfLV0p8Hmc15SHY90866_asset.mp4",
          steps: [
            {
              title: "Start with a product image",
              description:
                "Upload a high-quality image of your product that will be the foundation of your video.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/daabf233-1ae9-4f1a-348c-6800bcae2f00/1024",
            },
            {
              title: "Choose your video style",
              description:
                "Select from various camera movements and describe the scene you want to create.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/a0ec3b4f-cb98-473a-1c17-eee815fa2600/1024",
            },
            {
              title: "Generate and export",
              description:
                "Our AI generates a professional product video that you can download in various formats for different platforms.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/6ed97f6a-c2ee-40e1-9bf7-d9c0ee3b4300/1024",
            },
          ],
          cta: {
            heading: "Ready to bring your products to life?",
            subheading:
              "Join innovative brands using Flair.ai to create engaging product videos that drive conversions.",
            buttonText: "Create Videos Now",
            buttonLink: "https://app.flair.ai/",
          },
        },
        "ai-marketing-and-ads": {
          slug: "ai-marketing-and-ads",
          name: "AI Marketing & Ads",
          shortDescription:
            "Create product content for marketing campaigns and ads",
          iconType: "monitor-smartphone",
          description:
            "Create product content for marketing campaigns and advertisements across various platforms and formats.",
          heroImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/4468f2ee-a19e-4755-404d-f396b05db800/1024",
          steps: [
            {
              title: "Upload product assets",
              description:
                "Provide your product images or select from previously created content in your library.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f24456ac-3d0b-414e-4dc9-cc5ba3ca0300/1024",
            },
            {
              title: "Select ad formats and styles",
              description:
                "Choose from social media posts, banner ads, carousel ads, and more with customizable templates and styles.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f6c88c49-e4d0-47a3-d456-ab9e74a80c00/1024",
            },
            {
              title: "Generate and optimize",
              description:
                "Our AI creates multiple ad variations that you can refine, test, and export for your marketing platforms.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/d59b1ceb-c7fe-4c33-9ed0-c9f2a6d74200/1024",
            },
          ],
          cta: {
            heading: "Ready to transform your marketing?",
            subheading:
              "Join forward-thinking brands using Flair.ai to create compelling ad content that drives engagement and conversions.",
            buttonText: "Start Creating Ads",
            buttonLink: "https://app.flair.ai/",
          },
        },
        "ai-human-builder": {
          slug: "ai-human-builder",
          name: "AI Human Builder",
          shortDescription: "Build your own AI brand model",
          iconType: "user-circle",
          description:
            "Create custom AI models for people to showcase your products with consistent brand representation.",
          heroImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/945c433a-244b-41cf-3e9d-1a32009f8e00/1024",
          steps: [
            {
              title: "Define your model requirements",
              description:
                "Specify the characteristics, style, and visual attributes that align with your brand identity.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0d5eec99-ec6a-47bf-e67d-47c3ff6eb500/1024",
            },
            {
              title: "Generate and use consistently",
              description:
                "Create a brand model that you can use across all your product photography needs.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/7428b34c-eb85-4ef7-afcb-7635e1b78b00/1024",
            },
          ],
          cta: {
            heading: "Ready to create your brand's virtual models?",
            subheading:
              "Join innovative brands using Flair.ai to create consistent human representation across all product imagery.",
            buttonText: "Build Your Models",
            buttonLink: "https://app.flair.ai/",
          },
        },
        "flair-api": {
          slug: "flair-api",
          name: "Flair API",
          iconType: "code-xml",
          shortDescription:
            "Integrate AI-powered content generation into your workflow",
          description:
            "Integrate AI-powered content generation directly into your workflow with our comprehensive API.",
          heroImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c4cedada-68e7-4f6e-e442-df6c55fa8700/1024",
          steps: [
            {
              title: "Get API access",
              description:
                "Sign up for API access with flexible plans based on your usage requirements and content volume.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/daabf233-1ae9-4f1a-348c-6800bcae2f00/1024",
            },
            {
              title: "Integrate with your systems",
              description:
                "Use our SDKs and code examples to seamlessly integrate Flair's AI capabilities into your existing workflows.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f6c88c49-e4d0-47a3-d456-ab9e74a80c00/1024",
            },
            {
              title: "Scale your content production",
              description:
                "Generate thousands of product images, videos, and marketing assets programmatically at scale.",
              image:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/d59b1ceb-c7fe-4c33-9ed0-c9f2a6d74200/1024",
            },
          ],
          cta: {
            heading: "Ready to scale your content creation?",
            subheading:
              "Join forward-thinking businesses using Flair.ai's API to generate content at scale and automate workflows.",
            buttonText: "Get API Access",
            buttonLink: "https://app.flair.ai/api",
          },
        },
      };
      var _ = r(1102),
        j = r(8714);
      let P = (0, m.Z)("twitter", [
          [
            "path",
            {
              d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",
              key: "pff0z6",
            },
          ],
        ]),
        C = (0, m.Z)("linkedin", [
          [
            "path",
            {
              d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",
              key: "c2jq9f",
            },
          ],
          ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
          ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
        ]),
        k = (0, m.Z)("instagram", [
          [
            "rect",
            {
              width: "20",
              height: "20",
              x: "2",
              y: "2",
              rx: "5",
              ry: "5",
              key: "2e1cvw",
            },
          ],
          [
            "path",
            {
              d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",
              key: "9exkf1",
            },
          ],
          [
            "line",
            { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" },
          ],
        ]),
        I = (0, m.Z)("youtube", [
          [
            "path",
            {
              d: "M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",
              key: "1q2vi4",
            },
          ],
          ["path", { d: "m10 15 5-3-5-3z", key: "1jp15x" }],
        ]),
        N = (0, m.Z)("mail", [
          [
            "rect",
            {
              width: "20",
              height: "16",
              x: "2",
              y: "4",
              rx: "2",
              key: "18n3k1",
            },
          ],
          [
            "path",
            { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" },
          ],
        ]);
      function A() {
        let e = Object.values(_.imageEditingTools).slice(0, 8),
          t = Object.values(j.H).slice(0, 8);
        return (0, a.jsx)("footer", {
          className: "bg-zinc-950 border-t border-zinc-900 pt-16 pb-8",
          children: (0, a.jsxs)("div", {
            className: (0, c.A)(g.O, "mx-auto px-4"),
            children: [
              (0, a.jsxs)("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16",
                children: [
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-zinc-300 font-semibold mb-4",
                        children: "Company",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "space-y-3",
                        children: [
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u(), {
                              href: "/pricing",
                              className:
                                "text-zinc-500 hover:text-zinc-300 transition-colors",
                              children: "Pricing",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u(), {
                              href: "/enterprise",
                              className:
                                "text-zinc-500 hover:text-zinc-300 transition-colors",
                              children: "Enterprise",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u(), {
                              href: "/careers",
                              className:
                                "text-zinc-500 hover:text-zinc-300 transition-colors",
                              children: "Careers",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u(), {
                              href: "/terms-of-service",
                              className:
                                "text-zinc-500 hover:text-zinc-300 transition-colors",
                              children: "Terms of Service",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u(), {
                              href: "/resources/blog",
                              className:
                                "text-zinc-500 hover:text-zinc-300 transition-colors",
                              children: "Blog",
                            }),
                          }),
                          (0, a.jsx)("li", {
                            children: (0, a.jsx)(u(), {
                              href: "/resources/faq",
                              className:
                                "text-zinc-500 hover:text-zinc-300 transition-colors",
                              children: "FAQ",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-zinc-300 font-semibold mb-4",
                        children: "Key Features",
                      }),
                      (0, a.jsx)("ul", {
                        className: "space-y-3",
                        children: Object.values(w).map((e) =>
                          (0, a.jsx)(
                            "li",
                            {
                              children: (0, a.jsx)(u(), {
                                href: "/key-features/".concat(e.slug),
                                className:
                                  "text-zinc-500 hover:text-zinc-300 transition-colors",
                                children: e.name,
                              }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-zinc-300 font-semibold mb-4",
                        children: "Product Categories",
                      }),
                      (0, a.jsx)("ul", {
                        className: "space-y-3",
                        children: t.map((e) =>
                          (0, a.jsx)(
                            "li",
                            {
                              children: (0, a.jsx)(u(), {
                                href: "/product-category-features/".concat(
                                  e.slug,
                                ),
                                className:
                                  "text-zinc-500 hover:text-zinc-300 transition-colors",
                                children: e.name,
                              }),
                            },
                            e.slug,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "",
                    children: [
                      (0, a.jsx)("h3", {
                        className: "text-zinc-300 font-semibold mb-4",
                        children: "Editing Tools",
                      }),
                      (0, a.jsxs)("ul", {
                        className: "space-y-3",
                        children: [
                          e.map((e) =>
                            (0, a.jsx)(
                              "li",
                              {
                                children: (0, a.jsx)(u(), {
                                  href: "/editing-tool-features/".concat(
                                    e.slug,
                                  ),
                                  className:
                                    "text-zinc-500 hover:text-zinc-300 transition-colors",
                                  children: e.name,
                                }),
                              },
                              e.slug,
                            ),
                          ),
                          (0, a.jsx)("li", {
                            children: (0, a.jsxs)(u(), {
                              href: "/editing-tool-features/all-editing-tools",
                              className:
                                "text-zinc-500 hover:text-lime-500 transition-colors flex items-center",
                              children: [
                                "View all tools",
                                (0, a.jsx)("svg", {
                                  className: "w-3 h-3 ml-1.5",
                                  fill: "none",
                                  stroke: "currentColor",
                                  viewBox: "0 0 24 24",
                                  children: (0, a.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M9 5l7 7-7 7",
                                  }),
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className:
                  "flex flex-col md:flex-row justify-between items-center",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "flex flex-col md:flex-row items-center mb-6 md:mb-0",
                    children: [
                      (0, a.jsx)(f, {
                        size: 24,
                        className: "text-lime-500 mb-4 md:mb-0 md:mr-4",
                      }),
                      (0, a.jsx)("p", {
                        className: "text-zinc-500 text-sm",
                        children: "\xa9 2025 Flair AI. All rights reserved.",
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "flex items-center space-x-4",
                    children: [
                      (0, a.jsxs)("a", {
                        href: "https://twitter.com/flairAI_",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-zinc-500 hover:text-zinc-300 transition-colors",
                        children: [
                          (0, a.jsx)(P, { size: 20 }),
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Twitter",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        href: "https://www.linkedin.com/in/amaresh1411/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-zinc-500 hover:text-zinc-300 transition-colors",
                        children: [
                          (0, a.jsx)(C, { size: 20 }),
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "LinkedIn",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        href: "https://www.instagram.com/flairai_",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-zinc-500 hover:text-zinc-300 transition-colors",
                        children: [
                          (0, a.jsx)(k, { size: 20 }),
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Instagram",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        href: "https://www.youtube.com/@flairAI_",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className:
                          "text-zinc-500 hover:text-zinc-300 transition-colors",
                        children: [
                          (0, a.jsx)(I, { size: 20 }),
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "YouTube",
                          }),
                        ],
                      }),
                      (0, a.jsxs)("a", {
                        href: "mailto:support@flair.ai",
                        className:
                          "text-zinc-500 hover:text-zinc-300 transition-colors",
                        children: [
                          (0, a.jsx)(N, { size: 20 }),
                          (0, a.jsx)("span", {
                            className: "sr-only",
                            children: "Email",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var z = r(7294),
        O = r(8005),
        S = r.n(O),
        U = r(9152),
        M = r.n(U),
        E = r(630),
        B = r.n(E),
        T = r(9332),
        W = r(7744);
      function G() {
        let [e, t] = (0, z.useState)(!1),
          r = (0, z.useRef)(null),
          i = (0, T.usePathname)();
        return (
          (0, z.useEffect)(() => {
            function e(e) {
              r.current && !r.current.contains(e.target) && t(!1);
            }
            return (
              document.addEventListener("mousedown", e),
              () => {
                document.removeEventListener("mousedown", e);
              }
            );
          }, []),
          (0, a.jsxs)("div", {
            className: "relative",
            ref: r,
            children: [
              (0, a.jsxs)(F, {
                onClick: () => t(!e),
                isActive:
                  i.includes("/editing-tool-features") ||
                  i.includes("/key-features") ||
                  i.includes("/product-category-template"),
                children: [
                  "Features",
                  (0, a.jsx)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    className: (0, c.A)(
                      "h-4 w-4 ml-1 transition-transform",
                      e ? "transform rotate-180" : "",
                    ),
                    fill: "none",
                    viewBox: "0 0 24 24",
                    stroke: "currentColor",
                    children: (0, a.jsx)("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M19 9l-7 7-7-7",
                    }),
                  }),
                ],
              }),
              e &&
                (0, a.jsx)("div", {
                  className:
                    "absolute md:right-auto md:left-0 mt-2 w-[95vw] max-w-[900px] bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl z-50",
                  children: (0, a.jsxs)("div", {
                    className: "flex flex-col lg:flex-row p-4 lg:p-6",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "w-full lg:w-1/3 lg:pr-6 mb-6 lg:mb-0",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-zinc-400 font-medium mb-3 text-sm",
                            children: "Key Features",
                          }),
                          (0, a.jsx)("div", {
                            className: "grid grid-cols-2 lg:grid-cols-1 gap-3",
                            children: Object.values(w).map((e) =>
                              (0, a.jsxs)(
                                u(),
                                {
                                  href: "/key-features/".concat(e.slug),
                                  className:
                                    "flex items-start p-2 rounded-lg hover:bg-zinc-800 group transition-colors",
                                  onClick: () => t(!1),
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex-shrink-0 h-10 w-10 rounded-md border border-lime-800 group-hover:bg-lime-500/20 flex items-center justify-center shadow-[inset_0_0_8px_rgba(132,204,22,0.3)] bg-zinc-800/50",
                                      children: (function (e) {
                                        switch (e) {
                                          case "network":
                                            return (0, a.jsx)(p, {
                                              className:
                                                "h-5 w-5 text-lime-500",
                                              strokeWidth: 2,
                                            });
                                          case "shirt":
                                            return (0, a.jsx)(h, {
                                              className:
                                                "h-5 w-5 text-lime-500",
                                              strokeWidth: 2,
                                            });
                                          case "video":
                                            return (0, a.jsx)(b, {
                                              className:
                                                "h-5 w-5 text-lime-500",
                                              strokeWidth: 2,
                                            });
                                          case "monitor-smartphone":
                                            return (0, a.jsx)(y, {
                                              className:
                                                "h-5 w-5 text-lime-500",
                                              strokeWidth: 2,
                                            });
                                          case "user-circle":
                                            return (0, a.jsx)(v, {
                                              className:
                                                "h-5 w-5 text-lime-500",
                                              strokeWidth: 2,
                                            });
                                          case "code-xml":
                                            return (0, a.jsx)(x, {
                                              className:
                                                "h-5 w-5 text-lime-500",
                                              strokeWidth: 2,
                                            });
                                          default:
                                            return null;
                                        }
                                      })(e.iconType),
                                    }),
                                    (0, a.jsxs)("div", {
                                      className: "ml-3",
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-sm font-medium text-zinc-200 group-hover:text-lime-500",
                                          children: e.name,
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "text-xs text-zinc-400",
                                          children: e.shortDescription,
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                e.name,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full lg:w-1/3 lg:px-6 mb-6 lg:mb-0 lg:border-l border-zinc-700",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-zinc-400 font-medium mb-3 text-sm",
                            children: "AI Product Categories",
                          }),
                          (0, a.jsx)("div", {
                            className: "grid grid-cols-2 lg:grid-cols-1 gap-2",
                            children: W.Z.map((e) =>
                              (0, a.jsx)(
                                u(),
                                {
                                  href: e.href,
                                  className:
                                    "block px-2 py-2 text-sm text-zinc-300 hover:bg-zinc-800 hover:text-lime-500 rounded",
                                  onClick: () => t(!1),
                                  children: e.name,
                                },
                                e.name,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "w-full lg:w-1/3 lg:pl-6 lg:border-l border-zinc-700",
                        children: [
                          (0, a.jsx)("h3", {
                            className: "text-zinc-400 font-medium mb-3 text-sm",
                            children: "Image Editing Tools",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "grid grid-cols-2 lg:flex lg:flex-col gap-2",
                            children: [
                              Object.values(_.imageEditingTools)
                                .slice(0, 6)
                                .map((e) =>
                                  (0, a.jsxs)(
                                    u(),
                                    {
                                      href: "/editing-tool-features/".concat(
                                        e.slug,
                                      ),
                                      className:
                                        "block px-2 py-2 text-sm hover:bg-zinc-800 rounded group",
                                      onClick: () => t(!1),
                                      children: [
                                        (0, a.jsx)("p", {
                                          className:
                                            "text-zinc-300 group-hover:text-lime-500 font-medium",
                                          children: e.name,
                                        }),
                                        (0, a.jsx)("p", {
                                          className: "text-xs text-zinc-400",
                                          children: e.description,
                                        }),
                                      ],
                                    },
                                    e.slug,
                                  ),
                                ),
                              (0, a.jsx)("div", {
                                className: "col-span-2 mt-4",
                                children: (0, a.jsx)(u(), {
                                  href: "/editing-tool-features/all-editing-tools",
                                  className:
                                    "block px-4 py-3 text-sm bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-full text-center group transition-all",
                                  onClick: () => t(!1),
                                  children: (0, a.jsx)("p", {
                                    className:
                                      "text-zinc-400 group-hover:text-lime-400 font-medium",
                                    children: "All Editing Tools →",
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      }
      let R = (0, m.Z)("notebook-pen", [
        [
          "path",
          {
            d: "M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",
            key: "re6nr2",
          },
        ],
        ["path", { d: "M2 6h4", key: "aawbzj" }],
        ["path", { d: "M2 10h4", key: "l0bgd4" }],
        ["path", { d: "M2 14h4", key: "1gsvsf" }],
        ["path", { d: "M2 18h4", key: "1bu2t1" }],
        [
          "path",
          {
            d: "M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z",
            key: "pqwjuv",
          },
        ],
      ]);
      var H = r(1211);
      function X() {
        let [e, t] = (0, z.useState)(!1),
          r = (0, z.useRef)(null),
          i = (0, T.usePathname)();
        (0, z.useEffect)(() => {
          function e(e) {
            r.current && !r.current.contains(e.target) && t(!1);
          }
          return (
            document.addEventListener("mousedown", e),
            () => {
              document.removeEventListener("mousedown", e);
            }
          );
        }, []);
        let n = [
          {
            title: "Blog",
            description: "Learn about AI-powered tools",
            href: "/resources/blog",
            icon: (0, a.jsx)(R, {
              className: "h-5 w-5 text-lime-500",
              strokeWidth: 2,
            }),
          },
          {
            title: "FAQ",
            description: "Find answers to common questions",
            href: "/resources/faq",
            icon: (0, a.jsx)(H.Z, {
              className: "h-5 w-5 text-lime-500",
              strokeWidth: 2,
            }),
          },
          {
            title: "Tutorial Videos",
            description: "Tutorials and product demos",
            href: "https://www.youtube.com/@flairAI_",
            icon: (0, a.jsx)(I, {
              className: "h-5 w-5 text-lime-500",
              strokeWidth: 2,
            }),
          },
        ];
        return (0, a.jsxs)("div", {
          className: "relative",
          ref: r,
          children: [
            (0, a.jsxs)(F, {
              onClick: () => t(!e),
              isActive:
                i.includes("/resources") || "/blog" === i || "/faq" === i,
              children: [
                "Resources",
                (0, a.jsx)("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  className: (0, c.A)(
                    "h-4 w-4 ml-1 transition-transform",
                    e ? "transform rotate-180" : "",
                  ),
                  fill: "none",
                  viewBox: "0 0 24 24",
                  stroke: "currentColor",
                  children: (0, a.jsx)("path", {
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: 2,
                    d: "M19 9l-7 7-7-7",
                  }),
                }),
              ],
            }),
            e &&
              (0, a.jsx)("div", {
                className:
                  "absolute right-0 mt-2 w-80 bg-zinc-900 border border-zinc-700 rounded-lg shadow-xl z-50",
                children: (0, a.jsxs)("div", {
                  className: "p-4",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-zinc-400 font-medium mb-3 text-sm",
                      children: "Resources",
                    }),
                    (0, a.jsx)("div", {
                      className: "space-y-3",
                      children: n.map((e) =>
                        (0, a.jsxs)(
                          u(),
                          {
                            href: e.href,
                            className:
                              "flex items-start p-2 rounded-lg hover:bg-zinc-800 group transition-colors",
                            onClick: () => t(!1),
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "flex-shrink-0 h-10 w-10 rounded-md border border-lime-800 group-hover:bg-lime-500/20 flex items-center justify-center shadow-[inset_0_0_8px_rgba(132,204,22,0.3)] bg-zinc-800/50",
                                children: e.icon,
                              }),
                              (0, a.jsxs)("div", {
                                className: "ml-3",
                                children: [
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-sm font-medium text-zinc-200 group-hover:text-lime-500",
                                    children: e.title,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-xs text-zinc-400",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.title,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
          ],
        });
      }
      function Q() {
        return (0, a.jsxs)(u(), {
          href: "/",
          className: (0, c.A)(
            "flex flex-row justify-center items-center cursor-pointer",
            o.h.className,
          ),
          children: [
            (0, a.jsx)(f, { size: 20, className: "text-lime-500" }),
            (0, a.jsx)("span", {
              className:
                "text-2xl ml-2 text-zinc-200 select-none pointer-events-none tracking-normal",
              children: "Flair.ai",
            }),
          ],
        });
      }
      let L =
        "relative flex flex-row items-center justify-center px-6 py-2.5 sm:py-2 text-sm rounded-lg transition-colors whitespace-nowrap";
      function q(e) {
        let { className: t = "", isSticky: r = !1, children: i, ...n } = e;
        return (0, a.jsx)("button", {
          ...n,
          className: (0, c.A)(
            r ? M().HoverShadow : B().Button,
            L,
            r
              ? "text-zinc-900 font-semibold bg-lime-500 border border-lime-500 hover:bg-lime-400 active:bg-lime-500"
              : "text-zinc-300 font-semibold border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200 shadow-xl",
            t,
          ),
          children: i,
        });
      }
      function F(e) {
        let { className: t = "", isActive: r = !1, children: i, ...n } = e;
        return (0, a.jsx)("button", {
          ...n,
          className: (0, c.A)(
            L,
            r
              ? "text-zinc-300 font-semibold hover:text-zinc-200 active:text-zinc-500"
              : "text-zinc-400 font-semibold hover:text-zinc-200 active:text-zinc-500",
            t,
          ),
          children: i,
        });
      }
      function D() {
        let e = z.useRef(null),
          [t, r] = z.useState(!1);
        z.useEffect(() => {
          let t = e.current;
          if (!t) return;
          let i = new IntersectionObserver(
            (e) => {
              let [t] = e;
              return r(t.intersectionRatio < 1);
            },
            { rootMargin: "-17px 0px 0px 0px", threshold: [1] },
          );
          return (
            i.observe(t),
            () => {
              i.unobserve(t);
            }
          );
        }, []);
        let i = (0, T.usePathname)();
        return (0, a.jsx)("div", {
          ref: e,
          className: (0, c.A)(
            S().NavBarContainer,
            "sticky top-0 w-full lg:px-4 py-2.5 sm:py-4 my-6 z-50 flex flex-row items-center justify-center transition-colors border-b",
            t ? "border-zinc-700/30 shadow" : "border-zinc-800/0",
          ),
          children: (0, a.jsxs)("div", {
            className: (0, c.A)(
              g.O,
              "w-full flex flex-row items-center justify-center transition-colors",
            ),
            children: [
              (0, a.jsx)(Q, {}),
              (0, a.jsx)("div", { className: "flex-1 min-w-0" }),
              (0, a.jsxs)("div", {
                className:
                  "hidden sm:flex mx-8 flex-row items-center justify-center gap-1 md:gap-2",
                children: [
                  (0, a.jsx)(G, {}),
                  (0, a.jsx)(u(), {
                    href: "/pricing",
                    children: (0, a.jsx)(F, {
                      isActive: "/pricing" === i,
                      children: "Pricing",
                    }),
                  }),
                  (0, a.jsx)(u(), {
                    href: "/enterprise",
                    children: (0, a.jsx)(F, {
                      isActive: "/enterprise" === i,
                      children: "Enterprise",
                    }),
                  }),
                  (0, a.jsx)(u(), {
                    href: "https://community.flair.ai/explore",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: (0, a.jsx)(F, { children: "Community Gallery" }),
                  }),
                  (0, a.jsx)(X, {}),
                ],
              }),
              (0, a.jsx)(u(), {
                href: "https://app.flair.ai",
                children: (0, a.jsxs)(q, {
                  isSticky: t,
                  children: [
                    "Try Flair AI ",
                    (0, a.jsx)("span", {
                      className: "hidden md:inline ml-1.5",
                      children: "for free",
                    }),
                  ],
                }),
              }),
            ],
          }),
        });
      }
      var V = r(4298),
        $ = r.n(V);
      function Y(e) {
        let { className: t = "", children: r, ...i } = e;
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsxs)("main", {
              ...i,
              className: (0, c.A)(l().main, o.h.className, t),
              children: [(0, a.jsx)(D, {}), r, (0, a.jsx)(A, {})],
            }),
            (0, a.jsx)($(), {
              src: "https://r.wdfl.co/rw.js",
              "data-rewardful": "befd6b",
            }),
            (0, a.jsx)($(), {
              id: "rewardful-queue",
              strategy: "beforeInteractive",
              children:
                "(function(w,r){w._rwq=r;w[r]=w[r]||function(){(w[r].q=w[r].q||[]).push(arguments)}})(window,'rewardful');",
            }),
          ],
        });
      }
      r(7133);
      var Z = r(9692);
      function J(e) {
        let { Component: t, pageProps: r } = e;
        return (0, a.jsxs)(Y, {
          children: [
            (0, a.jsx)(t, { ...r }),
            (0, a.jsx)(Z.GoogleAnalytics, { gaId: "G-225C47MKCN" }),
          ],
        });
      }
    },
    1102: function (e, t, r) {
      "use strict";
      (r.r(t),
        r.d(t, {
          ImageEditorMode: function () {
            return n;
          },
          imageEditingTools: function () {
            return g;
          },
        }));
      var i,
        n,
        a = r(5893),
        o = r(1664),
        s = r.n(o),
        l = r(8630),
        c = r(6382),
        d = r(7104),
        u = r(130),
        f = r.n(u);
      (((i = n || (n = {})).RegenerateProduct = "RegenerateProduct"),
        (i.RegenerateHuman = "RegenerateHuman"),
        (i.MagicErase = "MagicErase"),
        (i.Upscale = "Upscale"),
        (i.Inpainting = "Inpainting"),
        (i.VirtualTryOn = "VirtualTryOn"),
        (i.UpscaleCreative = "UpscaleCreative"),
        (i.GenerateVarations = "ICV"),
        (i.UpscaleFace = "UpscaleFace"),
        (i.Outpaint = "Outpaint"),
        (i.ChangeColor = "ChangeColor"),
        (i.ChangeCameraAngle = "ChangeCameraAngle"),
        (i.ChangePose = "ChangePose"));
      let g = {
        RegenerateProduct: {
          description: "Replace the product in the image",
          longDescription:
            "Replace the product in the image with a new product. This is useful for creating new product images or updating existing ones.",
          name: "Regenerate Product",
          slug: "regenerate-product",
          toolCategory: "Product Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bb386ed0-da19-4bfd-6721-99b27b7fb200/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/89600d3d-4fda-4e04-5bdd-3f847f4c2200/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bb386ed0-da19-4bfd-6721-99b27b7fb200/256",
        },
        RegenerateHuman: {
          description: "Replace the human in the image",
          longDescription:
            "Replace the human in the image with a new human. This is useful for creating new human images or updating existing ones.",
          name: "Regenerate Human",
          slug: "regenerate-human",
          toolCategory: "Human Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/4adcca9e-f1a0-4a41-6318-7f8b3c396d00/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bbf9b607-2949-404f-591a-71b931374e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/4adcca9e-f1a0-4a41-6318-7f8b3c396d00/256",
        },
        MagicErase: {
          description: "Naturally erase parts of an image",
          longDescription:
            "Naturally erase parts of an image. This is useful for removing unwanted objects, text, or people from your images.",
          name: "Magic Erase",
          slug: "magic-erase",
          toolCategory: "Image Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/ee68cb83-8f8b-4eff-1514-ed0b29b1a900/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
        },
        Upscale: {
          description: "Upscale images to improve quality",
          longDescription:
            "Upscale images to improve quality. This is useful for creating high-quality images for print or web.",
          name: "Upscale",
          slug: "upscale",
          toolCategory: "Image Enhancement",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bbf9b607-2949-404f-591a-71b931374e00/256",
          beforeAfterDivider: !1,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bbf9b607-2949-404f-591a-71b931374e00/256",
        },
        VirtualTryOn: {
          description: "Try on different clothing items",
          longDescription:
            "Try on different clothing items. This is useful for creating high-quality images for print or web.",
          name: "Virtual Try On",
          slug: "virtual-try-on",
          toolCategory: "Fashion Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/91b2dd9b-2d87-48a6-c3dc-88f7b6c5f200/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bbf9b607-2949-404f-591a-71b931374e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/91b2dd9b-2d87-48a6-c3dc-88f7b6c5f200/256",
        },
        UpscaleCreative: {
          description: "Upscale images to improve quality",
          longDescription:
            "Upscale images to improve quality. This is useful for creating high-quality images for print or web.",
          name: "Enhance Image Resolution",
          slug: "enhance-resolution",
          toolCategory: "Image Enhancement",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bbf9b607-2949-404f-591a-71b931374e00/256",
          beforeAfterDivider: !1,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/bbf9b607-2949-404f-591a-71b931374e00/256",
        },
        ICV: {
          description: "Create different image variations",
          longDescription:
            "Create different image variations. This is useful for creating high-quality images for print or web.",
          name: "Generate Variations",
          slug: "variations",
          toolCategory: "Creative Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/15befffe-5906-4ca8-53c3-a660551a1500/256",
          beforeAfterDivider: !1,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/15befffe-5906-4ca8-53c3-a660551a1500/256",
        },
        Outpaint: {
          description: "Outpaint images to improve quality",
          longDescription:
            "Outpaint images to improve quality. This is useful for creating high-quality images for print or web.",
          name: "Extend Image Dimensions",
          slug: "extend-image",
          toolCategory: "Canvas Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/00f87157-d1e2-4f87-4805-414199401300/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/cd05f886-5a48-46d6-e9e8-4ae78b0f3400/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/00f87157-d1e2-4f87-4805-414199401300/256",
        },
        Inpainting: {
          description: "Inpaint images to improve quality",
          longDescription:
            "Inpaint images to improve quality. This is useful for creating high-quality images for print or web.",
          name: "Magic Paint",
          slug: "magic-paint",
          toolCategory: "Image Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/8d348af4-9c14-4748-efb2-08f7ae04a700/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/8d348af4-9c14-4748-efb2-08f7ae04a700/256",
        },
        UpscaleFace: {
          description: "Upscale faces to improve quality",
          longDescription:
            "Upscale faces to improve quality. This is useful for creating high-quality images for print or web.",
          name: "Upscale Face",
          slug: "upscale-face",
          toolCategory: "Portrait Enhancement",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/dbae3038-137d-4fc1-13fb-b3fa3e970500/256",
          beforeAfterDivider: !1,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/dbae3038-137d-4fc1-13fb-b3fa3e970500/256",
        },
        ChangeColor: {
          description: "Change or modify colors in the image",
          longDescription:
            "Change or modify colors in the image. This is useful for creating high-quality images for print or web.",
          name: "Change Color",
          slug: "change-color",
          toolCategory: "Color Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0728c9b7-e76f-4c98-5466-acad7c44de00/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0728c9b7-e76f-4c98-5466-acad7c44de00/256",
        },
        ChangeCameraAngle: {
          description: "Change the camera angle of the image",
          longDescription:
            "Change the camera angle of the image. This is useful for creating high-quality images for print or web.",
          name: "Change Camera Angle",
          slug: "change-angle",
          toolCategory: "Perspective Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0c9e3159-d70d-4e66-505b-0ae431b1a600/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0c9e3159-d70d-4e66-505b-0ae431b1a600/256",
        },
        ChangePose: {
          description: "Change the pose of the image",
          longDescription:
            "Change the pose of the image. This is useful for creating high-quality images for print or web.",
          name: "Change Pose",
          slug: "change-pose",
          toolCategory: "Human Editing",
          exampleImage:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/cb3ad869-2089-4e50-18c3-23b97a8ef900/256",
          beforeAfterDivider: !0,
          beforeImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/38582466-e2f5-4d55-b179-5ea197db7e00/256",
          afterImageUrl:
            "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/cb3ad869-2089-4e50-18c3-23b97a8ef900/256",
        },
      };
      t.default = () =>
        (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(l.H, {
              title: "All Editing Tools | Flair.ai",
              description:
                "Explore all image editing tools available with Flair.ai",
              canonical:
                "https://flair.ai/editing-tool-features/all-editing-tools",
            }),
            (0, a.jsx)("div", {
              className: "min-h-screen bg-zinc-950 text-white",
              children: (0, a.jsx)("main", {
                className: "container mx-auto px-4 py-16",
                children: (0, a.jsxs)("div", {
                  className: "max-w-7xl mx-auto",
                  children: [
                    (0, a.jsxs)("div", {
                      className: "text-center mb-16",
                      children: [
                        (0, a.jsx)("h1", {
                          className: "text-4xl md:text-5xl font-bold mb-4",
                          children: "Image Editing Tools",
                        }),
                        (0, a.jsx)("p", {
                          className: "text-xl text-zinc-400 max-w-3xl mx-auto",
                          children:
                            "Transform your product photography with our comprehensive suite of AI-powered editing tools",
                        }),
                      ],
                    }),
                    (0, a.jsx)("div", {
                      className:
                        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6",
                      children: Object.values(g).map((e) =>
                        (0, a.jsxs)(
                          s(),
                          {
                            href: "/editing-tool-features/".concat(e.slug),
                            className: (0, d.A)(
                              "group",
                              f().ProductFeatureCard,
                            ),
                            children: [
                              (0, a.jsxs)("div", {
                                className: "relative aspect-video w-full",
                                children: [
                                  (0, a.jsx)(c.U, {
                                    beforeImageUrl: e.beforeImageUrl,
                                    afterImageUrl: e.afterImageUrl,
                                    className: "w-full h-full object-cover",
                                    hasRoundedBottom: !1,
                                  }),
                                  (0, a.jsx)("div", {
                                    className:
                                      "absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-70",
                                  }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "p-4",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "text-zinc-100 font-medium text-lg group-hover:text-lime-500 transition-colors",
                                    children: e.name,
                                  }),
                                  (0, a.jsx)("p", {
                                    className: "text-zinc-400 text-sm mt-1",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.name,
                        ),
                      ),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
    },
    7133: function () {},
    9919: function (e) {
      e.exports = {
        style: {
          fontFamily: "'__fontMuoto_4d9027', '__fontMuoto_Fallback_4d9027'",
        },
        className: "__className_4d9027",
      };
    },
    9152: function (e) {
      e.exports = { HoverShadow: "buttom-primary_HoverShadow__L_0Fq" };
    },
    630: function (e) {
      e.exports = { Button: "button-secondary_Button__WDDxb" };
    },
    130: function (e) {
      e.exports = {
        ProductFeatureCard: "editing-tool-template_ProductFeatureCard__9Ibf5",
      };
    },
    8005: function (e) {
      e.exports = { NavBarContainer: "navbar_NavBarContainer__busMK" };
    },
    9647: function (e) {
      e.exports = {
        main: "Home_main__VkIEL",
        description: "Home_description__uXNdx",
        code: "Home_code__VVrIr",
        grid: "Home_grid__AVljO",
        card: "Home_card__E5spL",
        center: "Home_center__O_TIN",
        logo: "Home_logo__IOQAX",
        thirteen: "Home_thirteen__sqGDr",
        rotate: "Home_rotate__c5eru",
        content: "Home_content__tkQPU",
        ScreenMaxWidth: "Home_ScreenMaxWidth__A0Znw",
        vercelLogo: "Home_vercelLogo___BVuc",
        Header1: "Home_Header1__Aq3oh",
        Header2: "Home_Header2__x_e2P",
        Header3: "Home_Header3__BPzMi",
        Header4: "Home_Header4__DIY5Z",
        Header5: "Home_Header5__wVjVd",
        Header6: "Home_Header6__ml1y8",
        vignette: "Home_vignette__ANFW5",
        FlipVertical: "Home_FlipVertical__mkvol",
        FlipHorizontal: "Home_FlipHorizontal__mMXN8",
        HideScrollbar: "Home_HideScrollbar__EMlgU",
      };
    },
    9008: function (e, t, r) {
      e.exports = r(6665);
    },
    5675: function (e, t, r) {
      e.exports = r(9267);
    },
    1664: function (e, t, r) {
      e.exports = r(3480);
    },
    9332: function (e, t, r) {
      e.exports = r(6612);
    },
    4298: function (e, t, r) {
      e.exports = r(5874);
    },
    6257: function (e, t, r) {
      "use strict";
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = t.GoogleMapsEmbed = t.GoogleAnalytics = void 0));
      var i = r(3494);
      Object.defineProperty(t, "GoogleAnalytics", {
        enumerable: !0,
        get: function () {
          return i.GoogleAnalytics;
        },
      });
      var n = r(4248);
      Object.defineProperty(t, "GoogleMapsEmbed", {
        enumerable: !0,
        get: function () {
          return n.GoogleMapsEmbed;
        },
      });
      var a = r(2239);
      Object.defineProperty(t, "YouTubeEmbed", {
        enumerable: !0,
        get: function () {
          return a.YouTubeEmbed;
        },
      });
    },
    3494: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                0 > t.indexOf(i) &&
                (r[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var n = 0, i = Object.getOwnPropertySymbols(e);
                n < i.length;
                n++
              )
                0 > t.indexOf(i[n]) &&
                  Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
                  (r[i[n]] = e[i[n]]);
            return r;
          },
        n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleAnalytics = void 0));
      let a = n(r(9426)),
        o = r(7058);
      t.GoogleAnalytics = (e) => {
        var t = i(e, []);
        return (0, o.formatData)(a.default, t);
      };
    },
    4248: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                0 > t.indexOf(i) &&
                (r[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var n = 0, i = Object.getOwnPropertySymbols(e);
                n < i.length;
                n++
              )
                0 > t.indexOf(i[n]) &&
                  Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
                  (r[i[n]] = e[i[n]]);
            return r;
          },
        n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.GoogleMapsEmbed = void 0));
      let a = n(r(7395)),
        o = r(7058);
      t.GoogleMapsEmbed = (e) => {
        var t = i(e, []);
        return (0, o.formatData)(a.default, t);
      };
    },
    2239: function (e, t, r) {
      "use strict";
      var i =
          (this && this.__rest) ||
          function (e, t) {
            var r = {};
            for (var i in e)
              Object.prototype.hasOwnProperty.call(e, i) &&
                0 > t.indexOf(i) &&
                (r[i] = e[i]);
            if (null != e && "function" == typeof Object.getOwnPropertySymbols)
              for (
                var n = 0, i = Object.getOwnPropertySymbols(e);
                n < i.length;
                n++
              )
                0 > t.indexOf(i[n]) &&
                  Object.prototype.propertyIsEnumerable.call(e, i[n]) &&
                  (r[i[n]] = e[i[n]]);
            return r;
          },
        n =
          (this && this.__importDefault) ||
          function (e) {
            return e && e.__esModule ? e : { default: e };
          };
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.YouTubeEmbed = void 0));
      let a = n(r(8420)),
        o = r(7058);
      t.YouTubeEmbed = (e) => {
        var t = i(e, []);
        return (0, o.formatData)(a.default, t);
      };
    },
    7058: function (e, t) {
      "use strict";
      function r(e, t, r = !1) {
        return t
          ? Object.keys(e)
              .filter((e) => (r ? !t.includes(e) : t.includes(e)))
              .reduce((t, r) => ((t[r] = e[r]), t), {})
          : {};
      }
      function i(e, t, r, i) {
        let n =
          i && Object.keys(i).length > 0
            ? new URL(Object.values(i)[0], e)
            : new URL(e);
        return (
          t &&
            r &&
            t.forEach((e) => {
              r[e] && n.searchParams.set(e, r[e]);
            }),
          n.toString()
        );
      }
      function n(e, t, r, n, a) {
        var o;
        if (!t) return `<${e}></${e}>`;
        let s = (null === (o = t.src) || void 0 === o ? void 0 : o.url)
            ? Object.assign(Object.assign({}, t), {
                src: i(t.src.url, t.src.params, n, a),
              })
            : t,
          l = Object.keys(Object.assign(Object.assign({}, s), r)).reduce(
            (e, t) => {
              let i = null == r ? void 0 : r[t],
                n = s[t],
                a = null != i ? i : n,
                o = !0 === a ? t : `${t}="${a}"`;
              return a ? e + ` ${o}` : e;
            },
            "",
          );
        return `<${e}${l}></${e}>`;
      }
      (Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.formatData = t.createHtml = t.formatUrl = void 0),
        (t.formatUrl = i),
        (t.createHtml = n),
        (t.formatData = function (e, t) {
          var a, o, s, l, c;
          let d = r(
              t,
              null === (a = e.scripts) || void 0 === a
                ? void 0
                : a.reduce(
                    (e, t) => [
                      ...e,
                      ...(Array.isArray(t.params) ? t.params : []),
                    ],
                    [],
                  ),
            ),
            u = r(
              t,
              null ===
                (s =
                  null === (o = e.html) || void 0 === o
                    ? void 0
                    : o.attributes.src) || void 0 === s
                ? void 0
                : s.params,
            ),
            f = r(t, [
              null ===
                (c =
                  null === (l = e.html) || void 0 === l
                    ? void 0
                    : l.attributes.src) || void 0 === c
                ? void 0
                : c.slugParam,
            ]),
            g = r(
              t,
              [...Object.keys(d), ...Object.keys(u), ...Object.keys(f)],
              !0,
            );
          return Object.assign(Object.assign({}, e), {
            html: e.html ? n(e.html.element, e.html.attributes, g, u, f) : null,
            scripts: e.scripts
              ? e.scripts.map((e) =>
                  Object.assign(Object.assign({}, e), {
                    url: i(e.url, e.params, d),
                  }),
                )
              : null,
          });
        }));
    },
    7851: function (e, t, r) {
      "use strict";
      r.d(t, {
        m: function () {
          return U;
        },
      });
      var i = /^\[(.+)\]$/;
      function n(e, t) {
        var r = e;
        return (
          t.split("-").forEach(function (e) {
            (r.nextPart.has(e) ||
              r.nextPart.set(e, { nextPart: new Map(), validators: [] }),
              (r = r.nextPart.get(e)));
          }),
          r
        );
      }
      var a = /\s+/;
      function o() {
        for (var e, t, r = 0, i = ""; r < arguments.length; )
          (e = arguments[r++]) &&
            (t = (function e(t) {
              if ("string" == typeof t) return t;
              for (var r, i = "", n = 0; n < t.length; n++)
                t[n] && (r = e(t[n])) && (i && (i += " "), (i += r));
              return i;
            })(e)) &&
            (i && (i += " "), (i += t));
        return i;
      }
      function s(e) {
        var t = function (t) {
          return t[e] || [];
        };
        return ((t.isThemeGetter = !0), t);
      }
      var l = /^\[(?:([a-z-]+):)?(.+)\]$/i,
        c = /^\d+\/\d+$/,
        d = new Set(["px", "full", "screen"]),
        u = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
        f =
          /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
        g = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
      function m(e) {
        return x(e) || d.has(e) || c.test(e) || p(e);
      }
      function p(e) {
        return I(e, "length", N);
      }
      function h(e) {
        return I(e, "size", A);
      }
      function b(e) {
        return I(e, "position", A);
      }
      function y(e) {
        return I(e, "url", z);
      }
      function v(e) {
        return I(e, "number", x);
      }
      function x(e) {
        return !Number.isNaN(Number(e));
      }
      function w(e) {
        return e.endsWith("%") && x(e.slice(0, -1));
      }
      function _(e) {
        return O(e) || I(e, "number", O);
      }
      function j(e) {
        return l.test(e);
      }
      function P() {
        return !0;
      }
      function C(e) {
        return u.test(e);
      }
      function k(e) {
        return I(e, "", S);
      }
      function I(e, t, r) {
        var i = l.exec(e);
        return !!i && (i[1] ? i[1] === t : r(i[2]));
      }
      function N(e) {
        return f.test(e);
      }
      function A() {
        return !1;
      }
      function z(e) {
        return e.startsWith("url(");
      }
      function O(e) {
        return Number.isInteger(Number(e));
      }
      function S(e) {
        return g.test(e);
      }
      var U = (function () {
        for (var e, t, r, s = arguments.length, l = Array(s), c = 0; c < s; c++)
          l[c] = arguments[c];
        var d = function (a) {
          var o = l[0];
          return (
            (t = (e = (function (e) {
              var t, r, a, o, s, l, c, d, u, f, g;
              return {
                cache: (function (e) {
                  if (e < 1)
                    return { get: function () {}, set: function () {} };
                  var t = 0,
                    r = new Map(),
                    i = new Map();
                  function n(n, a) {
                    (r.set(n, a),
                      ++t > e && ((t = 0), (i = r), (r = new Map())));
                  }
                  return {
                    get: function (e) {
                      var t = r.get(e);
                      return void 0 !== t
                        ? t
                        : void 0 !== (t = i.get(e))
                          ? (n(e, t), t)
                          : void 0;
                    },
                    set: function (e, t) {
                      r.has(e) ? r.set(e, t) : n(e, t);
                    },
                  };
                })(e.cacheSize),
                splitModifiers:
                  ((r = 1 === (t = e.separator || ":").length),
                  (a = t[0]),
                  (o = t.length),
                  function (e) {
                    for (
                      var i, n = [], s = 0, l = 0, c = 0;
                      c < e.length;
                      c++
                    ) {
                      var d = e[c];
                      if (0 === s) {
                        if (d === a && (r || e.slice(c, c + o) === t)) {
                          (n.push(e.slice(l, c)), (l = c + o));
                          continue;
                        }
                        if ("/" === d) {
                          i = c;
                          continue;
                        }
                      }
                      "[" === d ? s++ : "]" === d && s--;
                    }
                    var u = 0 === n.length ? e : e.substring(l),
                      f = u.startsWith("!"),
                      g = f ? u.substring(1) : u;
                    return {
                      modifiers: n,
                      hasImportantModifier: f,
                      baseClassName: g,
                      maybePostfixModifierPosition: i && i > l ? i - l : void 0,
                    };
                  }),
                ...((d = e.theme),
                (u = e.prefix),
                (f = { nextPart: new Map(), validators: [] }),
                ((g = Object.entries(e.classGroups)),
                u
                  ? g.map(function (e) {
                      return [
                        e[0],
                        e[1].map(function (e) {
                          return "string" == typeof e
                            ? u + e
                            : "object" == typeof e
                              ? Object.fromEntries(
                                  Object.entries(e).map(function (e) {
                                    return [u + e[0], e[1]];
                                  }),
                                )
                              : e;
                        }),
                      ];
                    })
                  : g).forEach(function (e) {
                  var t = e[0];
                  (function e(t, r, i, a) {
                    t.forEach(function (t) {
                      if ("string" == typeof t) {
                        ("" === t ? r : n(r, t)).classGroupId = i;
                        return;
                      }
                      if ("function" == typeof t) {
                        if (t.isThemeGetter) {
                          e(t(a), r, i, a);
                          return;
                        }
                        r.validators.push({ validator: t, classGroupId: i });
                        return;
                      }
                      Object.entries(t).forEach(function (t) {
                        var o = t[0];
                        e(t[1], n(r, o), i, a);
                      });
                    });
                  })(e[1], f, t, d);
                }),
                (s = e.conflictingClassGroups),
                (c =
                  void 0 === (l = e.conflictingClassGroupModifiers) ? {} : l),
                {
                  getClassGroupId: function (e) {
                    var t = e.split("-");
                    return (
                      "" === t[0] && 1 !== t.length && t.shift(),
                      (function e(t, r) {
                        if (0 === t.length) return r.classGroupId;
                        var i = t[0],
                          n = r.nextPart.get(i),
                          a = n ? e(t.slice(1), n) : void 0;
                        if (a) return a;
                        if (0 !== r.validators.length) {
                          var o = t.join("-");
                          return r.validators.find(function (e) {
                            return (0, e.validator)(o);
                          })?.classGroupId;
                        }
                      })(t, f) ||
                        (function (e) {
                          if (i.test(e)) {
                            var t = i.exec(e)[1],
                              r = t?.substring(0, t.indexOf(":"));
                            if (r) return "arbitrary.." + r;
                          }
                        })(e)
                    );
                  },
                  getConflictingClassGroupIds: function (e, t) {
                    var r = s[e] || [];
                    return t && c[e] ? [].concat(r, c[e]) : r;
                  },
                }),
              };
            })(
              l.slice(1).reduce(function (e, t) {
                return t(e);
              }, o()),
            )).cache.get),
            (r = e.cache.set),
            (d = u),
            u(a)
          );
        };
        function u(i) {
          var n,
            o,
            s,
            l,
            c,
            d = t(i);
          if (d) return d;
          var u =
            ((o = (n = e).splitModifiers),
            (s = n.getClassGroupId),
            (l = n.getConflictingClassGroupIds),
            (c = new Set()),
            i
              .trim()
              .split(a)
              .map(function (e) {
                var t = o(e),
                  r = t.modifiers,
                  i = t.hasImportantModifier,
                  n = t.baseClassName,
                  a = t.maybePostfixModifierPosition,
                  l = s(a ? n.substring(0, a) : n),
                  c = !!a;
                if (!l) {
                  if (!a || !(l = s(n)))
                    return { isTailwindClass: !1, originalClassName: e };
                  c = !1;
                }
                var d = (function (e) {
                  if (e.length <= 1) return e;
                  var t = [],
                    r = [];
                  return (
                    e.forEach(function (e) {
                      "[" === e[0]
                        ? (t.push.apply(t, r.sort().concat([e])), (r = []))
                        : r.push(e);
                    }),
                    t.push.apply(t, r.sort()),
                    t
                  );
                })(r).join(":");
                return {
                  isTailwindClass: !0,
                  modifierId: i ? d + "!" : d,
                  classGroupId: l,
                  originalClassName: e,
                  hasPostfixModifier: c,
                };
              })
              .reverse()
              .filter(function (e) {
                if (!e.isTailwindClass) return !0;
                var t = e.modifierId,
                  r = e.classGroupId,
                  i = e.hasPostfixModifier,
                  n = t + r;
                return (
                  !c.has(n) &&
                  (c.add(n),
                  l(r, i).forEach(function (e) {
                    return c.add(t + e);
                  }),
                  !0)
                );
              })
              .reverse()
              .map(function (e) {
                return e.originalClassName;
              })
              .join(" "));
          return (r(i, u), u);
        }
        return function () {
          return d(o.apply(null, arguments));
        };
      })(function () {
        var e = s("colors"),
          t = s("spacing"),
          r = s("blur"),
          i = s("brightness"),
          n = s("borderColor"),
          a = s("borderRadius"),
          o = s("borderSpacing"),
          l = s("borderWidth"),
          c = s("contrast"),
          d = s("grayscale"),
          u = s("hueRotate"),
          f = s("invert"),
          g = s("gap"),
          I = s("gradientColorStops"),
          N = s("gradientColorStopPositions"),
          A = s("inset"),
          z = s("margin"),
          O = s("opacity"),
          S = s("padding"),
          U = s("saturate"),
          M = s("scale"),
          E = s("sepia"),
          B = s("skew"),
          T = s("space"),
          W = s("translate"),
          G = function () {
            return ["auto", "contain", "none"];
          },
          R = function () {
            return ["auto", "hidden", "clip", "visible", "scroll"];
          },
          H = function () {
            return ["auto", j, t];
          },
          X = function () {
            return [j, t];
          },
          Q = function () {
            return ["", m];
          },
          L = function () {
            return ["auto", x, j];
          },
          q = function () {
            return [
              "bottom",
              "center",
              "left",
              "left-bottom",
              "left-top",
              "right",
              "right-bottom",
              "right-top",
              "top",
            ];
          },
          F = function () {
            return ["solid", "dashed", "dotted", "double", "none"];
          },
          D = function () {
            return [
              "normal",
              "multiply",
              "screen",
              "overlay",
              "darken",
              "lighten",
              "color-dodge",
              "color-burn",
              "hard-light",
              "soft-light",
              "difference",
              "exclusion",
              "hue",
              "saturation",
              "color",
              "luminosity",
              "plus-lighter",
            ];
          },
          V = function () {
            return [
              "start",
              "end",
              "center",
              "between",
              "around",
              "evenly",
              "stretch",
            ];
          },
          $ = function () {
            return ["", "0", j];
          },
          Y = function () {
            return [
              "auto",
              "avoid",
              "all",
              "avoid-page",
              "page",
              "left",
              "right",
              "column",
            ];
          },
          Z = function () {
            return [x, v];
          },
          J = function () {
            return [x, j];
          };
        return {
          cacheSize: 500,
          theme: {
            colors: [P],
            spacing: [m],
            blur: ["none", "", C, j],
            brightness: Z(),
            borderColor: [e],
            borderRadius: ["none", "", "full", C, j],
            borderSpacing: X(),
            borderWidth: Q(),
            contrast: Z(),
            grayscale: $(),
            hueRotate: J(),
            invert: $(),
            gap: X(),
            gradientColorStops: [e],
            gradientColorStopPositions: [w, p],
            inset: H(),
            margin: H(),
            opacity: Z(),
            padding: X(),
            saturate: Z(),
            scale: Z(),
            sepia: $(),
            skew: J(),
            space: X(),
            translate: X(),
          },
          classGroups: {
            aspect: [{ aspect: ["auto", "square", "video", j] }],
            container: ["container"],
            columns: [{ columns: [C] }],
            "break-after": [{ "break-after": Y() }],
            "break-before": [{ "break-before": Y() }],
            "break-inside": [
              {
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"],
              },
            ],
            "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
            box: [{ box: ["border", "content"] }],
            display: [
              "block",
              "inline-block",
              "inline",
              "flex",
              "inline-flex",
              "table",
              "inline-table",
              "table-caption",
              "table-cell",
              "table-column",
              "table-column-group",
              "table-footer-group",
              "table-header-group",
              "table-row-group",
              "table-row",
              "flow-root",
              "grid",
              "inline-grid",
              "contents",
              "list-item",
              "hidden",
            ],
            float: [{ float: ["right", "left", "none"] }],
            clear: [{ clear: ["left", "right", "both", "none"] }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [
              { object: ["contain", "cover", "fill", "none", "scale-down"] },
            ],
            "object-position": [{ object: [].concat(q(), [j]) }],
            overflow: [{ overflow: R() }],
            "overflow-x": [{ "overflow-x": R() }],
            "overflow-y": [{ "overflow-y": R() }],
            overscroll: [{ overscroll: G() }],
            "overscroll-x": [{ "overscroll-x": G() }],
            "overscroll-y": [{ "overscroll-y": G() }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{ inset: [A] }],
            "inset-x": [{ "inset-x": [A] }],
            "inset-y": [{ "inset-y": [A] }],
            start: [{ start: [A] }],
            end: [{ end: [A] }],
            top: [{ top: [A] }],
            right: [{ right: [A] }],
            bottom: [{ bottom: [A] }],
            left: [{ left: [A] }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{ z: ["auto", _] }],
            basis: [{ basis: H() }],
            "flex-direction": [
              { flex: ["row", "row-reverse", "col", "col-reverse"] },
            ],
            "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
            flex: [{ flex: ["1", "auto", "initial", "none", j] }],
            grow: [{ grow: $() }],
            shrink: [{ shrink: $() }],
            order: [{ order: ["first", "last", "none", _] }],
            "grid-cols": [{ "grid-cols": [P] }],
            "col-start-end": [{ col: ["auto", { span: ["full", _] }, j] }],
            "col-start": [{ "col-start": L() }],
            "col-end": [{ "col-end": L() }],
            "grid-rows": [{ "grid-rows": [P] }],
            "row-start-end": [{ row: ["auto", { span: [_] }, j] }],
            "row-start": [{ "row-start": L() }],
            "row-end": [{ "row-end": L() }],
            "grid-flow": [
              {
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"],
              },
            ],
            "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", j] }],
            "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", j] }],
            gap: [{ gap: [g] }],
            "gap-x": [{ "gap-x": [g] }],
            "gap-y": [{ "gap-y": [g] }],
            "justify-content": [{ justify: ["normal"].concat(V()) }],
            "justify-items": [
              { "justify-items": ["start", "end", "center", "stretch"] },
            ],
            "justify-self": [
              { "justify-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            "align-content": [
              { content: ["normal"].concat(V(), ["baseline"]) },
            ],
            "align-items": [
              { items: ["start", "end", "center", "baseline", "stretch"] },
            ],
            "align-self": [
              {
                self: ["auto", "start", "end", "center", "stretch", "baseline"],
              },
            ],
            "place-content": [
              { "place-content": [].concat(V(), ["baseline"]) },
            ],
            "place-items": [
              {
                "place-items": [
                  "start",
                  "end",
                  "center",
                  "baseline",
                  "stretch",
                ],
              },
            ],
            "place-self": [
              { "place-self": ["auto", "start", "end", "center", "stretch"] },
            ],
            p: [{ p: [S] }],
            px: [{ px: [S] }],
            py: [{ py: [S] }],
            ps: [{ ps: [S] }],
            pe: [{ pe: [S] }],
            pt: [{ pt: [S] }],
            pr: [{ pr: [S] }],
            pb: [{ pb: [S] }],
            pl: [{ pl: [S] }],
            m: [{ m: [z] }],
            mx: [{ mx: [z] }],
            my: [{ my: [z] }],
            ms: [{ ms: [z] }],
            me: [{ me: [z] }],
            mt: [{ mt: [z] }],
            mr: [{ mr: [z] }],
            mb: [{ mb: [z] }],
            ml: [{ ml: [z] }],
            "space-x": [{ "space-x": [T] }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{ "space-y": [T] }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{ w: ["auto", "min", "max", "fit", j, t] }],
            "min-w": [{ "min-w": ["min", "max", "fit", j, m] }],
            "max-w": [
              {
                "max-w": [
                  "0",
                  "none",
                  "full",
                  "min",
                  "max",
                  "fit",
                  "prose",
                  { screen: [C] },
                  C,
                  j,
                ],
              },
            ],
            h: [{ h: [j, t, "auto", "min", "max", "fit"] }],
            "min-h": [{ "min-h": ["min", "max", "fit", j, m] }],
            "max-h": [{ "max-h": [j, t, "min", "max", "fit"] }],
            "font-size": [{ text: ["base", C, p] }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [
              {
                font: [
                  "thin",
                  "extralight",
                  "light",
                  "normal",
                  "medium",
                  "semibold",
                  "bold",
                  "extrabold",
                  "black",
                  v,
                ],
              },
            ],
            "font-family": [{ font: [P] }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [
              {
                tracking: [
                  "tighter",
                  "tight",
                  "normal",
                  "wide",
                  "wider",
                  "widest",
                  j,
                ],
              },
            ],
            "line-clamp": [{ "line-clamp": ["none", x, v] }],
            leading: [
              {
                leading: [
                  "none",
                  "tight",
                  "snug",
                  "normal",
                  "relaxed",
                  "loose",
                  j,
                  m,
                ],
              },
            ],
            "list-image": [{ "list-image": ["none", j] }],
            "list-style-type": [{ list: ["none", "disc", "decimal", j] }],
            "list-style-position": [{ list: ["inside", "outside"] }],
            "placeholder-color": [{ placeholder: [e] }],
            "placeholder-opacity": [{ "placeholder-opacity": [O] }],
            "text-alignment": [
              { text: ["left", "center", "right", "justify", "start", "end"] },
            ],
            "text-color": [{ text: [e] }],
            "text-opacity": [{ "text-opacity": [O] }],
            "text-decoration": [
              "underline",
              "overline",
              "line-through",
              "no-underline",
            ],
            "text-decoration-style": [{ decoration: [].concat(F(), ["wavy"]) }],
            "text-decoration-thickness": [
              { decoration: ["auto", "from-font", m] },
            ],
            "underline-offset": [{ "underline-offset": ["auto", j, m] }],
            "text-decoration-color": [{ decoration: [e] }],
            "text-transform": [
              "uppercase",
              "lowercase",
              "capitalize",
              "normal-case",
            ],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            indent: [{ indent: X() }],
            "vertical-align": [
              {
                align: [
                  "baseline",
                  "top",
                  "middle",
                  "bottom",
                  "text-top",
                  "text-bottom",
                  "sub",
                  "super",
                  j,
                ],
              },
            ],
            whitespace: [
              {
                whitespace: [
                  "normal",
                  "nowrap",
                  "pre",
                  "pre-line",
                  "pre-wrap",
                  "break-spaces",
                ],
              },
            ],
            break: [{ break: ["normal", "words", "all", "keep"] }],
            hyphens: [{ hyphens: ["none", "manual", "auto"] }],
            content: [{ content: ["none", j] }],
            "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
            "bg-clip": [
              { "bg-clip": ["border", "padding", "content", "text"] },
            ],
            "bg-opacity": [{ "bg-opacity": [O] }],
            "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
            "bg-position": [{ bg: [].concat(q(), [b]) }],
            "bg-repeat": [
              {
                bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }],
              },
            ],
            "bg-size": [{ bg: ["auto", "cover", "contain", h] }],
            "bg-image": [
              {
                bg: [
                  "none",
                  {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"],
                  },
                  y,
                ],
              },
            ],
            "bg-color": [{ bg: [e] }],
            "gradient-from-pos": [{ from: [N] }],
            "gradient-via-pos": [{ via: [N] }],
            "gradient-to-pos": [{ to: [N] }],
            "gradient-from": [{ from: [I] }],
            "gradient-via": [{ via: [I] }],
            "gradient-to": [{ to: [I] }],
            rounded: [{ rounded: [a] }],
            "rounded-s": [{ "rounded-s": [a] }],
            "rounded-e": [{ "rounded-e": [a] }],
            "rounded-t": [{ "rounded-t": [a] }],
            "rounded-r": [{ "rounded-r": [a] }],
            "rounded-b": [{ "rounded-b": [a] }],
            "rounded-l": [{ "rounded-l": [a] }],
            "rounded-ss": [{ "rounded-ss": [a] }],
            "rounded-se": [{ "rounded-se": [a] }],
            "rounded-ee": [{ "rounded-ee": [a] }],
            "rounded-es": [{ "rounded-es": [a] }],
            "rounded-tl": [{ "rounded-tl": [a] }],
            "rounded-tr": [{ "rounded-tr": [a] }],
            "rounded-br": [{ "rounded-br": [a] }],
            "rounded-bl": [{ "rounded-bl": [a] }],
            "border-w": [{ border: [l] }],
            "border-w-x": [{ "border-x": [l] }],
            "border-w-y": [{ "border-y": [l] }],
            "border-w-s": [{ "border-s": [l] }],
            "border-w-e": [{ "border-e": [l] }],
            "border-w-t": [{ "border-t": [l] }],
            "border-w-r": [{ "border-r": [l] }],
            "border-w-b": [{ "border-b": [l] }],
            "border-w-l": [{ "border-l": [l] }],
            "border-opacity": [{ "border-opacity": [O] }],
            "border-style": [{ border: [].concat(F(), ["hidden"]) }],
            "divide-x": [{ "divide-x": [l] }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{ "divide-y": [l] }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{ "divide-opacity": [O] }],
            "divide-style": [{ divide: F() }],
            "border-color": [{ border: [n] }],
            "border-color-x": [{ "border-x": [n] }],
            "border-color-y": [{ "border-y": [n] }],
            "border-color-t": [{ "border-t": [n] }],
            "border-color-r": [{ "border-r": [n] }],
            "border-color-b": [{ "border-b": [n] }],
            "border-color-l": [{ "border-l": [n] }],
            "divide-color": [{ divide: [n] }],
            "outline-style": [{ outline: [""].concat(F()) }],
            "outline-offset": [{ "outline-offset": [j, m] }],
            "outline-w": [{ outline: [m] }],
            "outline-color": [{ outline: [e] }],
            "ring-w": [{ ring: Q() }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{ ring: [e] }],
            "ring-opacity": [{ "ring-opacity": [O] }],
            "ring-offset-w": [{ "ring-offset": [m] }],
            "ring-offset-color": [{ "ring-offset": [e] }],
            shadow: [{ shadow: ["", "inner", "none", C, k] }],
            "shadow-color": [{ shadow: [P] }],
            opacity: [{ opacity: [O] }],
            "mix-blend": [{ "mix-blend": D() }],
            "bg-blend": [{ "bg-blend": D() }],
            filter: [{ filter: ["", "none"] }],
            blur: [{ blur: [r] }],
            brightness: [{ brightness: [i] }],
            contrast: [{ contrast: [c] }],
            "drop-shadow": [{ "drop-shadow": ["", "none", C, j] }],
            grayscale: [{ grayscale: [d] }],
            "hue-rotate": [{ "hue-rotate": [u] }],
            invert: [{ invert: [f] }],
            saturate: [{ saturate: [U] }],
            sepia: [{ sepia: [E] }],
            "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
            "backdrop-blur": [{ "backdrop-blur": [r] }],
            "backdrop-brightness": [{ "backdrop-brightness": [i] }],
            "backdrop-contrast": [{ "backdrop-contrast": [c] }],
            "backdrop-grayscale": [{ "backdrop-grayscale": [d] }],
            "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
            "backdrop-invert": [{ "backdrop-invert": [f] }],
            "backdrop-opacity": [{ "backdrop-opacity": [O] }],
            "backdrop-saturate": [{ "backdrop-saturate": [U] }],
            "backdrop-sepia": [{ "backdrop-sepia": [E] }],
            "border-collapse": [{ border: ["collapse", "separate"] }],
            "border-spacing": [{ "border-spacing": [o] }],
            "border-spacing-x": [{ "border-spacing-x": [o] }],
            "border-spacing-y": [{ "border-spacing-y": [o] }],
            "table-layout": [{ table: ["auto", "fixed"] }],
            caption: [{ caption: ["top", "bottom"] }],
            transition: [
              {
                transition: [
                  "none",
                  "all",
                  "",
                  "colors",
                  "opacity",
                  "shadow",
                  "transform",
                  j,
                ],
              },
            ],
            duration: [{ duration: J() }],
            ease: [{ ease: ["linear", "in", "out", "in-out", j] }],
            delay: [{ delay: J() }],
            animate: [
              { animate: ["none", "spin", "ping", "pulse", "bounce", j] },
            ],
            transform: [{ transform: ["", "gpu", "none"] }],
            scale: [{ scale: [M] }],
            "scale-x": [{ "scale-x": [M] }],
            "scale-y": [{ "scale-y": [M] }],
            rotate: [{ rotate: [_, j] }],
            "translate-x": [{ "translate-x": [W] }],
            "translate-y": [{ "translate-y": [W] }],
            "skew-x": [{ "skew-x": [B] }],
            "skew-y": [{ "skew-y": [B] }],
            "transform-origin": [
              {
                origin: [
                  "center",
                  "top",
                  "top-right",
                  "right",
                  "bottom-right",
                  "bottom",
                  "bottom-left",
                  "left",
                  "top-left",
                  j,
                ],
              },
            ],
            accent: [{ accent: ["auto", e] }],
            appearance: ["appearance-none"],
            cursor: [
              {
                cursor: [
                  "auto",
                  "default",
                  "pointer",
                  "wait",
                  "text",
                  "move",
                  "help",
                  "not-allowed",
                  "none",
                  "context-menu",
                  "progress",
                  "cell",
                  "crosshair",
                  "vertical-text",
                  "alias",
                  "copy",
                  "no-drop",
                  "grab",
                  "grabbing",
                  "all-scroll",
                  "col-resize",
                  "row-resize",
                  "n-resize",
                  "e-resize",
                  "s-resize",
                  "w-resize",
                  "ne-resize",
                  "nw-resize",
                  "se-resize",
                  "sw-resize",
                  "ew-resize",
                  "ns-resize",
                  "nesw-resize",
                  "nwse-resize",
                  "zoom-in",
                  "zoom-out",
                  j,
                ],
              },
            ],
            "caret-color": [{ caret: [e] }],
            "pointer-events": [{ "pointer-events": ["none", "auto"] }],
            resize: [{ resize: ["none", "y", "x", ""] }],
            "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
            "scroll-m": [{ "scroll-m": X() }],
            "scroll-mx": [{ "scroll-mx": X() }],
            "scroll-my": [{ "scroll-my": X() }],
            "scroll-ms": [{ "scroll-ms": X() }],
            "scroll-me": [{ "scroll-me": X() }],
            "scroll-mt": [{ "scroll-mt": X() }],
            "scroll-mr": [{ "scroll-mr": X() }],
            "scroll-mb": [{ "scroll-mb": X() }],
            "scroll-ml": [{ "scroll-ml": X() }],
            "scroll-p": [{ "scroll-p": X() }],
            "scroll-px": [{ "scroll-px": X() }],
            "scroll-py": [{ "scroll-py": X() }],
            "scroll-ps": [{ "scroll-ps": X() }],
            "scroll-pe": [{ "scroll-pe": X() }],
            "scroll-pt": [{ "scroll-pt": X() }],
            "scroll-pr": [{ "scroll-pr": X() }],
            "scroll-pb": [{ "scroll-pb": X() }],
            "scroll-pl": [{ "scroll-pl": X() }],
            "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
            "snap-stop": [{ snap: ["normal", "always"] }],
            "snap-type": [{ snap: ["none", "x", "y", "both"] }],
            "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
            touch: [
              {
                touch: [
                  "auto",
                  "none",
                  "pinch-zoom",
                  "manipulation",
                  { pan: ["x", "left", "right", "y", "up", "down"] },
                ],
              },
            ],
            select: [{ select: ["none", "text", "all", "auto"] }],
            "will-change": [
              { "will-change": ["auto", "scroll", "contents", "transform", j] },
            ],
            fill: [{ fill: [e, "none"] }],
            "stroke-w": [{ stroke: [m, v] }],
            stroke: [{ stroke: [e, "none"] }],
            sr: ["sr-only", "not-sr-only"],
          },
          conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: [
              "inset-x",
              "inset-y",
              "start",
              "end",
              "top",
              "right",
              "bottom",
              "left",
            ],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            "font-size": ["leading"],
            "fvn-normal": [
              "fvn-ordinal",
              "fvn-slashed-zero",
              "fvn-figure",
              "fvn-spacing",
              "fvn-fraction",
            ],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            rounded: [
              "rounded-s",
              "rounded-e",
              "rounded-t",
              "rounded-r",
              "rounded-b",
              "rounded-l",
              "rounded-ss",
              "rounded-se",
              "rounded-ee",
              "rounded-es",
              "rounded-tl",
              "rounded-tr",
              "rounded-br",
              "rounded-bl",
            ],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": [
              "border-w-s",
              "border-w-e",
              "border-w-t",
              "border-w-r",
              "border-w-b",
              "border-w-l",
            ],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": [
              "border-color-t",
              "border-color-r",
              "border-color-b",
              "border-color-l",
            ],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": [
              "scroll-mx",
              "scroll-my",
              "scroll-ms",
              "scroll-me",
              "scroll-mt",
              "scroll-mr",
              "scroll-mb",
              "scroll-ml",
            ],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": [
              "scroll-px",
              "scroll-py",
              "scroll-ps",
              "scroll-pe",
              "scroll-pt",
              "scroll-pr",
              "scroll-pb",
              "scroll-pl",
            ],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
          },
          conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
      });
    },
    9426: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"google-analytics","description":"Install a Google Analytics tag on your website","website":"https://analytics.google.com/analytics/web/","scripts":[{"url":"https://www.googletagmanager.com/gtag/js","params":["id"],"strategy":"worker","location":"head","action":"append"},{"code":"window.dataLayer=window.dataLayer||[];window.gtag=function gtag(){window.dataLayer.push(arguments);};gtag(\'js\',new Date());gtag(\'config\',\'${args.id}\')","strategy":"worker","location":"head","action":"append"}]}',
      );
    },
    7395: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"google-maps-embed","description":"Embed a Google Maps embed on your webpage","website":"https://developers.google.com/maps/documentation/embed/get-started","html":{"element":"iframe","attributes":{"loading":"lazy","src":{"url":"https://www.google.com/maps/embed/v1/place","slugParam":"mode","params":["key","q","center","zoom","maptype","language","region"]},"referrerpolicy":"no-referrer-when-downgrade","frameborder":"0","style":"border:0","allowfullscreen":true,"width":null,"height":null}}}',
      );
    },
    8420: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"id":"youtube-embed","description":"Embed a YouTube embed on your webpage.","website":"https://github.com/paulirish/lite-youtube-embed","html":{"element":"lite-youtube","attributes":{"videoid":null,"playlabel":null}},"stylesheets":["https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.css"],"scripts":[{"url":"https://cdn.jsdelivr.net/gh/paulirish/lite-youtube-embed@master/src/lite-yt-embed.js","strategy":"idle","location":"head","action":"append"}]}',
      );
    },
  },
  function (e) {
    var t = function (t) {
      return e((e.s = t));
    };
    (e.O(0, [774, 179], function () {
      return (t(6840), t(3035));
    }),
      (_N_E = e.O()));
  },
]);
