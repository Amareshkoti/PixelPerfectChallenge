(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8312: function (e, i, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(3976);
        },
      ]);
    },
    3976: function (e, i, t) {
      "use strict";
      (t.r(i),
        t.d(i, {
          default: function () {
            return J;
          },
        }));
      var r = t(5893),
        a = t(923),
        c = t(4771),
        n = t(58),
        s = t(9919),
        l = t.n(s),
        o = t(7104),
        d = t(7633),
        f = t.n(d),
        m = t(9647),
        h = t.n(m),
        p = t(9779),
        u = t(7294),
        _ = t(630),
        g = t.n(_);
      function b(e) {
        let { className: i = "", children: t, ...a } = e;
        return (0, r.jsx)("button", {
          ...a,
          className: (0, o.A)(
            g().Button,
            "flex flex-row items-center justify-center px-6 py-3 text-normal rounded-lg text-zinc-300 font-semibold border border-zinc-800 hover:border-zinc-500 hover:bg-zinc-900/50 hover:text-zinc-200 transition-colors shadow-xl",
            i,
          ),
          children: t,
        });
      }
      var x = t(6260),
        v = t(4114),
        y = t.n(v),
        P = t(6893);
      function j() {
        let e = u.useRef(null);
        return (
          u.useRef(!1),
          (0, P.Y)(e),
          (0, r.jsx)("div", {
            className: (0, o.A)(
              y().ContainerAspect,
              "relative w-[150vw] md:w-[100vw] 2xl:w-auto 2xl:min-w-[1920px]",
            ),
            children: (0, r.jsxs)("div", {
              className:
                "absolute w-full bottom-0 overflow-hidden sm:overflow-x-visible",
              children: [
                (0, r.jsx)("img", {
                  className: (0, o.A)(
                    y().fadeInAnimation,
                    "absolute bottom-0 left-0 select-none z-0 opacity-50",
                  ),
                  alt: "screen",
                  src: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/be5b7097-fa47-4967-9403-e688fb463700/public",
                  width: "1920",
                  height: "1536",
                  decoding: "async",
                  "data-nimg": "1",
                  style: { color: "transparent" },
                  srcSet:
                    "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/be5b7097-fa47-4967-9403-e688fb463700/512 768w, https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/be5b7097-fa47-4967-9403-e688fb463700/public 1920w",
                }),
                (0, r.jsx)("img", {
                  alt: "screen",
                  src: "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1714a744-46b5-4009-1b22-d39558452000/public",
                  width: "1920",
                  height: "1536",
                  className: (0, o.A)(
                    y().brightnessAnimation,
                    "relative select-none z-10",
                  ),
                  decoding: "async",
                  "data-nimg": "1",
                  style: { color: "transparent" },
                  srcSet:
                    "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1714a744-46b5-4009-1b22-d39558452000/512 768w, https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1714a744-46b5-4009-1b22-d39558452000/public 1920w",
                }),
                (0, r.jsx)("div", {
                  className: (0, o.A)(
                    y().VideoScreenContainer,
                    "absolute top-[31.7%] left-[28.6%] w-[50%] h-[40.5%] z-20",
                  ),
                  children: (0, r.jsx)("video", {
                    ref: e,
                    className: (0, o.A)(y().VideoScreen, "w-full h-full"),
                    muted: !0,
                    autoPlay: !0,
                    loop: !0,
                    playsInline: !0,
                    src: "https://video.flair.ai/flair-hero.mp4",
                  }),
                }),
              ],
            }),
          })
        );
      }
      var w = t(4146),
        C = t(1664),
        N = t.n(C);
      function S() {
        return (0, r.jsx)(N(), {
          href: "https://app.flair.ai",
          children: (0, r.jsxs)(p.D, {
            className: "min-w-[168px] truncate",
            children: [
              "Get Started",
              (0, r.jsx)("span", {
                className: "hidden md:inline ml-1",
                children: "- It's Free",
              }),
            ],
          }),
        });
      }
      function X() {
        return (0, r.jsx)(N(), {
          href: "https://w5um0lo5i9o.typeform.com/to/WaYTKFJ8",
          target: "_blank",
          rel: "noopener noreferrer",
          children: (0, r.jsx)(b, {
            className: "min-w-[168px] truncate",
            children: "Book a Demo",
          }),
        });
      }
      function B() {
        return (0, r.jsxs)("div", {
          className: "flex flex-row items-center justify-center z-20 space-x-4",
          children: [(0, r.jsx)(S, {}), (0, r.jsx)(X, {})],
        });
      }
      function W(e) {
        let { words: i, className: t } = e,
          [a, c] = (0, u.useState)(0),
          [n, s] = (0, u.useState)("hidden"),
          [l, o] = (0, u.useState)(!1),
          d = (0, u.useRef)(null),
          f = () => {
            d.current && (clearInterval(d.current), (d.current = null));
          };
        ((0, u.useEffect)(() => {
          let e = setTimeout(() => {
            (o(!0),
              s("entering"),
              setTimeout(() => {
                (s("visible"), m());
              }, 400));
          }, 1200);
          return () => clearTimeout(e);
        }, []),
          (0, u.useEffect)(() => () => f(), []));
        let m = () => {
            (f(),
              (d.current = setInterval(() => {
                (s("exiting"),
                  setTimeout(() => {
                    (c((e) => (e + 1) % i.length),
                      s("entering"),
                      setTimeout(() => {
                        s("visible");
                      }, 300));
                  }, 300));
              }, 3e3)));
          },
          h = i.reduce((e, i) => (i.length > e.length ? i : e), i[0]);
        return l
          ? (0, r.jsxs)(w.E.span, {
              className: "inline-flex flex-row items-center",
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, ease: [0.9, 0, 0.26, 1] },
              children: [
                (0, r.jsx)("span", {
                  className: "text-lime-500",
                  children: "product",
                }),
                (0, r.jsx)("span", { className: "w-[0.3em]" }),
                (0, r.jsxs)("span", {
                  className: "relative inline-block overflow-hidden",
                  children: [
                    (0, r.jsx)("span", { className: "invisible", children: h }),
                    (0, r.jsx)("span", {
                      className: "absolute left-0 top-0 ".concat(t),
                      style: {
                        transform:
                          "entering" === n
                            ? "translateY(20px)"
                            : "exiting" === n
                              ? "translateY(-20px)"
                              : "translateY(0)",
                        opacity: "visible" === n ? 1 : 0,
                        transition: "transform 300ms ease, opacity 300ms ease",
                      },
                      children: i[a],
                    }),
                  ],
                }),
              ],
            })
          : (0, r.jsxs)("span", {
              className: "inline-flex flex-row items-center opacity-0",
              children: [
                (0, r.jsx)("span", { children: "product" }),
                (0, r.jsx)("span", { className: "w-[0.3em]" }),
                (0, r.jsx)("span", {
                  className: "relative inline-block",
                  children: (0, r.jsx)("span", { children: h }),
                }),
              ],
            });
      }
      function U() {
        return (0, r.jsx)(w.E.div, {
          initial: { y: 50 },
          animate: { y: 0 },
          transition: { duration: 2.3, ease: [0.9, 0, 0.26, 1], delay: 1.7 },
          className: (0, o.A)(
            n.h.className,
            h().Header1,
            "w-full flex flex-col items-center z-20",
          ),
          children: (0, r.jsxs)("div", {
            className: "relative w-full text-zinc-100/80 text-center z-20",
            children: [
              (function (e) {
                let i =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : 1.2,
                  t =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : "text-zinc-100/80",
                  a =
                    arguments.length > 3 && void 0 !== arguments[3]
                      ? arguments[3]
                      : 0,
                  c = a,
                  n = !1,
                  s = [];
                return (
                  e.forEach((e, a) => {
                    let l = c + (n ? 0.5 : 0);
                    ((c = l + i),
                      (n = e.endsWith(".") || e.endsWith(";")),
                      s.push(
                        (0, r.jsxs)(
                          "div",
                          {
                            className:
                              "inline-block relative overflow-hidden text-transparent",
                            children: [
                              e,
                              (0, r.jsx)(w.E.div, {
                                className: (0, o.A)("absolute left-0 top-0", t),
                                initial: { y: 120, opacity: 0 },
                                animate: { y: 0, opacity: 1 },
                                transition: {
                                  duration: 1.2,
                                  ease: [0.9, 0, 0.26, 1],
                                  delay: l,
                                },
                                children: e,
                              }),
                            ],
                          },
                          a,
                        ),
                      ),
                      s.push(
                        (0, r.jsx)(
                          "span",
                          { children: " " },
                          "".concat(a, "_space"),
                        ),
                      ));
                  }),
                  s
                );
              })("The AI design tool for product".split(" "), 0.15),
              " ",
              (0, r.jsx)("br", {}),
              (0, r.jsx)(W, {
                words: [
                  "photoshoots",
                  "marketing",
                  "content",
                  "videos",
                  "advertising",
                ],
                className: "text-lime-500",
              }),
            ],
          }),
        });
      }
      function A() {
        return (0, r.jsxs)("div", {
          className: (0, o.A)(
            "relative flex flex-col items-center w-full min-h-screen pt-8 overflow-hidden",
          ),
          children: [
            (0, r.jsx)("div", {
              className: (0, o.A)(
                f().HeroGrid,
                "absolute left-0 w-full h-full z-0 select-none pointer-events-none",
              ),
            }),
            (0, r.jsxs)("div", {
              className: (0, o.A)(
                l().className,
                x.O,
                "flex flex-col jusitfy-center items-center font-extralight overflow-x-visible",
              ),
              children: [
                (0, r.jsx)(U, {}),
                (0, r.jsx)("div", { className: "h-8" }),
                (0, r.jsxs)(w.E.div, {
                  initial: { y: 50, opacity: 0 },
                  animate: { y: 0, opacity: 1 },
                  transition: {
                    duration: 1.2,
                    ease: [0.9, 0, 0.26, 1],
                    delay: 2,
                  },
                  className: "flex flex-col jusitfy-center items-center z-20",
                  children: [
                    (0, r.jsx)("div", {
                      className: (0, o.A)(
                        h().Header4,
                        "px-4 text-center font-extralight",
                      ),
                      children: (0, r.jsx)("span", {
                        className: "text-zinc-100/70",
                        children:
                          "Build stunning AI product content with your team in real-time.",
                      }),
                    }),
                    (0, r.jsx)("div", { className: "h-12" }),
                    (0, r.jsx)(B, {}),
                    (0, r.jsx)("div", { className: "h-20" }),
                  ],
                }),
                (0, r.jsx)(j, {}),
              ],
            }),
          ],
        });
      }
      var Q = t(1112),
        z = t(5675),
        I = t.n(z),
        V = t(8438),
        T = t.n(V),
        E = t(2469),
        H = t(576);
      let k = u.forwardRef(function (e, i) {
          let {
            className: t = "",
            primarySrc: a = "",
            width: c = 1024,
            height: n = 1024,
            ...s
          } = e;
          return (0, r.jsx)("div", {
            ...s,
            ref: i,
            draggable: !1,
            className: (0, o.A)(t, T().GridItem, "relative"),
          });
        }),
        R = u.forwardRef(function (e, i) {
          let {
            className: t = "",
            primarySrc: a = "",
            width: c = 1024,
            height: n = 1024,
            isVideo: s = !1,
            ...l
          } = e;
          return (0, r.jsx)("div", {
            ...l,
            ref: i,
            className: (0, o.A)(
              t,
              T().GridItem,
              "relative rounded-xl border border-zinc-800 overflow-hidden",
            ),
            children: s
              ? (0, r.jsx)("video", {
                  src: a,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  className: "w-full h-full object-cover",
                })
              : a &&
                (0, r.jsx)(I(), {
                  alt: "image",
                  src: a,
                  width: c,
                  height: n,
                  draggable: !1,
                  className: "pointer-events-none",
                }),
          });
        }),
        O =
          "flex flex-row items-center justify-start gap-4 my-4 sm:gap-8 sm:my-8",
        F = u.forwardRef(function (e, i) {
          var t;
          let { className: a = "", dataList: c, ...n } = e,
            s = u.useRef(null),
            l = u.useRef(null),
            d = u.useRef(!1),
            f = u.useRef([0, 0, 0]),
            m = u.useCallback((e) => {
              let i = l.current;
              if (!i) return;
              let t = -e.currentTarget.scrollLeft;
              i.style.left = "".concat(t, "px");
            }, []);
          return (u.useEffect(() => {
            let e = l.current;
            if (!e) return;
            e.style.opacity = "0";
            let i = null,
              t = (r) => {
                i || (i = r);
                let a = Math.min((r - i) / 300, 1);
                ((e.style.opacity = "".concat(a)),
                  a < 1 && requestAnimationFrame(t));
              };
            return (
              requestAnimationFrame(t),
              () => {
                i = null;
              }
            );
          }, [c]),
          !c || Object.values(c).length <= 0)
            ? (0, r.jsx)("div", { className: T().GridItem })
            : (0, r.jsxs)("div", {
                ...n,
                className: (0, o.A)(x.O, "relative", a),
                children: [
                  (0, r.jsx)("div", {
                    ref:
                      ((t = [i, s]),
                      (e) => {
                        t.forEach((i) => {
                          "function" == typeof i
                            ? i(e)
                            : null != i && (i.current = e);
                        });
                      }),
                    className: (0, o.A)(
                      h().HideScrollbar,
                      O,
                      "w-full overflow-x-auto pointer-events-auto sm:pointer-events-none",
                    ),
                    onScroll: m,
                    children: Object.entries(c).map((e, i) => {
                      let [t, a] = e;
                      return (0, r.jsx)(k, { ...a }, t);
                    }),
                  }),
                  (0, r.jsx)("div", {
                    ref: l,
                    className: (0, o.A)(
                      O,
                      "absolute top-0 left-0 px-4 lg:px-16 pointer-events-none sm:pointer-events-auto",
                    ),
                    onPointerDown: (e) => {
                      let i = s.current;
                      i &&
                        ((d.current = !0),
                        (f.current = [e.clientX, e.clientY, i.scrollLeft]));
                    },
                    onPointerMove: (e) => {
                      if (!d.current) return;
                      let i = s.current;
                      if (!i) return;
                      let t = f.current[0] - e.clientX;
                      i.scrollTo({ left: f.current[2] + t });
                    },
                    onPointerUp: () => {
                      d.current = !1;
                    },
                    onWheel: (e) => {
                      let i = l.current;
                      if (!i) return;
                      let t = s.current;
                      if (!t) return;
                      t.scrollLeft += e.deltaX;
                      let r = -t.scrollLeft;
                      i.style.left = "".concat(r, "px");
                    },
                    children: Object.entries(c).map((e, i) => {
                      let [t, a] = e;
                      return (0, r.jsx)(
                        R,
                        {
                          ...a,
                          draggable: !1,
                          className: "pointer-events-none select-none",
                        },
                        t,
                      );
                    }),
                  }),
                ],
              });
        }),
        G = {
          "On Model Photography": {
            "0-4": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/3ee18fa2-c63d-40a3-3566-66e9e4ad6c00/1024",
            },
            "0-1": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/1abe1e5c-9bce-4141-5662-a9b605d5f100/1024",
            },
            "0-2": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/44b25ea1-5722-45df-7a7b-d04505fb4000/512",
            },
            "0-7": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/18659716-f931-4ab8-b557-f9b391ea8000/1024",
            },
            "0-13": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f378d413-f696-4651-b4be-bfa25bdd3700/1024",
            },
            "0-14": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/626565b6-54c3-4eca-092f-077acf6eb900/1024",
            },
            "0-5": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f27a5d94-b7b9-4914-d979-8a50c6186c00/1024",
            },
            "0-8": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/ed0997b6-0f31-42a1-6768-b66f17683600/1024",
            },
            "0-12": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f5fb922c-b384-41e0-2280-356c18fa4000/1024",
            },
            "0-3": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/9213f527-a173-4a27-4974-e6aaaeba3400/1024",
            },
            "0-17": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/a5a4adf5-8035-4e2e-537e-2d54fb340900/1024",
            },
            "0-18": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/fa6b8a66-5824-46df-6dc0-ee0ba6ea9a00/512",
            },
            "0-19": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c2b05a9a-4eb7-48c7-3a7c-45a867fc7d00/512",
            },
          },
          "Product Videos": {
            "0-0": {
              primarySrc:
                "https://video.flair.ai/assetsV2_vTK3AYqNLgEo9ROo4YD1V_asset.mp4",
              isVideo: !0,
            },
            "0-4": {
              primarySrc:
                "https://video.flair.ai/assetsV2_7CfLV0p8Hmc15SHY90866_asset.mp4",
              isVideo: !0,
            },
            "0-1": {
              primarySrc:
                "https://video.flair.ai/assetsV2_4uje21gxNUyhLdI4C733g_asset.mp4",
              isVideo: !0,
            },
            "0-2": {
              primarySrc:
                "https://video.flair.ai/assetsV2_6O2EXGA8lxByNqlGkYVuu_asset.mp4",
              isVideo: !0,
            },
            "0-3": {
              primarySrc:
                "https://video.flair.ai/assetsV2_rUa8fgEXE9LFNRcN9KXAj_asset.mp4",
              isVideo: !0,
            },
            "0-5": {
              primarySrc:
                "https://video.flair.ai/assetsV2_yfg5JAFw8cVHZzlR9YRCG_asset.mp4",
              isVideo: !0,
            },
          },
          "Marketing & Ads": {
            "0-2": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/4468f2ee-a19e-4755-404d-f396b05db800/1024",
            },
            "0-0": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0666c16d-48c6-49b1-2813-12503afc7200/1024",
            },
            "0-4": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/0bab29e1-ca6f-4522-891b-6669e13c6500/1024",
            },
            "0-1": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/b56616d8-9bc0-4c5a-d14d-627da3e2a300/1024",
            },
            "0-3": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/60b18fb0-1656-42b1-6e9c-511259b77400/1024",
            },
            "0-5": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/e7110023-d759-4c4c-a729-66c5c7fe6200/1024",
            },
            "0-6": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/ed14cadf-58ce-4f61-da43-33126de1a800/1024",
            },
            "0-7": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/4ff09d55-2f7f-41df-d0ee-6d487ad85400/1024",
            },
            "0-8": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/8d07d4d2-26b8-4052-b96f-f5dbf6593000/1024",
            },
            "0-9": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/8e2691fa-f7d7-4033-9f9e-173b7ed80900/1024",
            },
          },
          "Product Photography": {
            "0-4": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c78d7209-e9e6-4615-8d8b-4f5c473b2600/512",
            },
            "0-1": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/c8b27631-3884-4320-0b53-3b857c5a5900/512",
            },
            "0-7": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/064528bd-4add-4445-5566-9cda41936200/512",
            },
            "0-13": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/535917c4-c4d1-4282-ee03-127d44503600/512",
            },
            "0-14": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/6f404edf-e9dd-492e-72ab-8b1533922c00/512",
            },
            "0-2": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/fe67d70a-9cb3-4f24-8c85-7ac333551100/512",
            },
            "0-8": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f575b6d9-8d41-46dd-db9d-7b939cd90500/512",
            },
            "0-12": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/f56449f3-4e46-43c2-8813-dabd890af100/512",
            },
            "0-3": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/508b2bca-e455-4e77-c2ee-10fe7c7c8600/512",
            },
            "0-17": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/19c2b522-e0ed-4958-4250-c4c593e5ea00/512",
            },
            "0-18": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/2aa0e094-a1b6-43b8-f891-1d0f5ec58c00/512",
            },
            "0-16": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/85fbf434-7ad4-4dbd-8d58-c335c35cc700/512",
            },
            "0-5": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/41c63310-c72a-4bc8-02e1-01754435e900/512",
            },
            "0-6": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/222a5b23-27b8-43a9-603a-e316eb966100/512",
            },
            "0-0": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/73bf9e36-5847-4175-636d-b588f24dd400/512",
            },
            "0-9": {
              primarySrc:
                "https://flair.ai/cdn-cgi/imagedelivery/i1XPW6iC_chU01_6tBPo8Q/3de13e92-e3eb-4196-37c9-695a6d25ae00/512",
            },
          },
        },
        L = (0, o.A)(
          n.h.className,
          "text-base px-6 py-2 sm:text-md sm:mb-8 sm:px-8 sm:py-2 rounded-full w-fit border select-none",
        ),
        Y = (0, o.A)(
          L,
          "text-zinc-300 border-zinc-700 hover:text-zinc-100 hover:border-zinc-400 active:border-zinc-500 transition-colors duration-300",
        ),
        Z = (0, o.A)(L, "text-lime-500 border-lime-500");
      function M(e) {
        let { activeTemplateType: i, setActiveTemplateType: t } = e;
        return (0, r.jsx)("div", {
          className: (0, o.A)(
            h().HideScrollbar,
            "flex-1 flex flex-row items-center justify-start gap-4 overflow-x-auto",
          ),
          children: Object.keys(G).map((e) =>
            (0, r.jsx)(
              "button",
              {
                className: (0, o.A)("whitespace-nowrap", e === i ? Z : Y),
                onClick: () => {
                  t(e);
                },
                children: e,
              },
              e,
            ),
          ),
        });
      }
      function q() {
        let [e, i] = u.useState(Object.keys(G)[0]),
          t = u.useRef(null);
        return (
          u.useEffect(() => {
            var e;
            t.current &&
              (null === (e = t.current) ||
                void 0 === e ||
                e.scrollTo({ left: 0, behavior: "smooth" }));
          }, [e]),
          (0, r.jsxs)("div", {
            className: (0, o.A)(
              n.h.className,
              "relative flex flex-col items-center w-full pt-40 pb-32 max-w-screen overflow-hidden",
            ),
            children: [
              (0, r.jsxs)("div", {
                className: (0, o.A)(x.O),
                children: [
                  (0, r.jsx)(H.O, {}),
                  (0, r.jsxs)("div", {
                    className: "z-20",
                    children: [
                      (0, r.jsx)("div", {
                        className: (0, o.A)(
                          n.h.className,
                          "text-l mb-8 text-lime-500",
                        ),
                        children:
                          "Create content that matches your brand rules and aesthetic.",
                      }),
                      (0, r.jsx)("div", {
                        className: (0, o.A)(h().Header2),
                        children:
                          "Generate on brand content for all your business needs.",
                      }),
                    ],
                  }),
                  (0, r.jsx)("div", { className: "h-14 sm:h-16" }),
                  (0, r.jsxs)("div", {
                    className: "relative w-full flex flex-row items-start z-20",
                    children: [
                      (0, r.jsx)(M, {
                        activeTemplateType: e,
                        setActiveTemplateType: i,
                      }),
                      (0, r.jsxs)("div", {
                        className:
                          "ml-2 hidden md:flex flex-row items-center justify-center gap-4",
                        children: [
                          (0, r.jsx)("button", {
                            "aria-label": "arrow-left",
                            className:
                              "rounded-full p-3 text-zinc-300 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 transition-colors duration-300",
                            onClick: () => {
                              let i = t.current;
                              if (!i) return;
                              let r = G[e];
                              if (!r) return;
                              let a = i.clientWidth,
                                c = Object.keys(r).length;
                              c <= 0 ||
                                i.scrollBy({
                                  left: -(2 * Math.round(a / c)),
                                  behavior: "smooth",
                                });
                            },
                            children: (0, r.jsx)(E.Y4O, {
                              width: 18,
                              height: 18,
                            }),
                          }),
                          (0, r.jsx)("button", {
                            "aria-label": "arrow-right",
                            className:
                              "rounded-full p-3 text-zinc-300 bg-zinc-700 hover:bg-zinc-600 active:bg-zinc-800 transition-colors duration-300",
                            onClick: () => {
                              let i = t.current;
                              if (!i) return;
                              let r = G[e];
                              if (!r) return;
                              let a = i.clientWidth,
                                c = Object.keys(r).length;
                              c <= 0 ||
                                i.scrollBy({
                                  left: 2 * Math.round(a / c),
                                  behavior: "smooth",
                                });
                            },
                            children: (0, r.jsx)(E.LZ3, {
                              width: 18,
                              height: 18,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, r.jsx)(F, { ref: t, dataList: G[e] }),
            ],
          })
        );
      }
      var D = t(8630);
      function J() {
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(D.H, {
              title:
                "AI Product Photo Generator & Editor | Create E-Commerce Images",
              description:
                "Create studio-quality e-commerce photoshoots in seconds with our drag-and-drop AI editor. Try it free today.",
              canonical: "https://flair.ai/",
            }),
            (0, r.jsx)(A, {}),
            (0, r.jsx)(Q.TS, {}),
            (0, r.jsx)(q, {}),
            (0, r.jsx)(Q.qS, {}),
            (0, r.jsx)(c.A, {}),
            (0, r.jsx)(a.L, {}),
          ],
        });
      }
    },
    4114: function (e) {
      e.exports = {
        VideoScreenContainer: "hero-graphics_VideoScreenContainer__rwXsd",
        videoFadeIn: "hero-graphics_videoFadeIn__mzVMm",
        VideoScreen: "hero-graphics_VideoScreen__38pIA",
        fadeInAnimation: "hero-graphics_fadeInAnimation__X_Jew",
        fadeIn: "hero-graphics_fadeIn__C6eEk",
        brightnessAnimation: "hero-graphics_brightnessAnimation__1EiwF",
        brightnessTransition: "hero-graphics_brightnessTransition__wijB3",
        ContainerAspect: "hero-graphics_ContainerAspect__3jUpe",
      };
    },
    8438: function (e) {
      e.exports = {
        GridItem: "templates_GridItem__pr2pF",
        HoverZoomRoot: "templates_HoverZoomRoot__zHVc3",
        HoverZoomChild: "templates_HoverZoomChild__1Q2pZ",
        HoverZoomTarget: "templates_HoverZoomTarget__Fx4TC",
      };
    },
    7633: function (e) {
      e.exports = {
        HeroCardContainer: "hero_HeroCardContainer__cVHXJ",
        HeroGrid: "hero_HeroGrid__p38cS",
        "fade-in-grid": "hero_fade-in-grid__oRFx3",
        FadeInText: "hero_FadeInText__eXba5",
        "fade-in-text": "hero_fade-in-text__mOlmU",
        FadeInImage: "hero_FadeInImage__55La6",
        "fade-in-image": "hero_fade-in-image__lNwNH",
        spin: "hero_spin__kSVaf",
        Shimmer: "hero_Shimmer__nPLaI",
        shimmer: "hero_shimmer__otZdS",
        "rotate-in": "hero_rotate-in__pRzoG",
      };
    },
  },
  function (e) {
    (e.O(0, [409, 529, 588, 112, 139, 888, 774, 179], function () {
      return e((e.s = 8312));
    }),
      (_N_E = e.O()));
  },
]);
