"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [588],
  {
    1715: function (e, t, n) {
      n.d(t, {
        Lm: function () {
          return h;
        },
      });
      var r = n(7294),
        i = (e) => {
          let t = r.useRef(e);
          return (
            r.useEffect(() => {
              t.current = e;
            }),
            t
          );
        };
      let o = (e, t = 100, n = !1) => {
          let o = i(e),
            l = r.useRef(),
            s = [t, n, o];
          function u() {
            (l.current && clearTimeout(l.current), (l.current = void 0));
          }
          function f() {
            l.current = void 0;
          }
          return (
            r.useEffect(() => u, s),
            r.useCallback(function () {
              let e = arguments,
                { current: r } = l;
              if (void 0 === r && n)
                return (
                  (l.current = setTimeout(f, t)),
                  o.current.apply(null, e)
                );
              (r && clearTimeout(r),
                (l.current = setTimeout(() => {
                  ((l.current = void 0), o.current.apply(null, e));
                }, t)));
            }, s)
          );
        },
        l = (e, t, n) => {
          let i = r.useState(e);
          return [i[0], o(i[1], t, n)];
        };
      var s = function (e, t, n, i) {
        let o = r.useRef(n),
          l = r.useRef(i);
        (r.useEffect(() => {
          ((o.current = n), (l.current = i));
        }),
          r.useEffect(() => {
            let n = e && "current" in e ? e.current : e;
            if (!n) return;
            let r = 0;
            function i(...e) {
              r || o.current.apply(this, e);
            }
            n.addEventListener(t, i);
            let s = l.current;
            return () => {
              ((r = 1), n.removeEventListener(t, i), s && s());
            };
          }, [e, t]));
      };
      let u = {},
        f = "undefined" == typeof window ? null : window,
        c = f && void 0 !== f.visualViewport ? f.visualViewport : null,
        a = () => [
          document.documentElement.clientWidth,
          document.documentElement.clientHeight,
        ],
        d = function (e) {
          void 0 === e && (e = u);
          let {
              wait: t,
              leading: n,
              initialWidth: r = 0,
              initialHeight: i = 0,
            } = e,
            [o, d] = l("undefined" == typeof document ? [r, i] : a, t, n),
            h = () => d(a);
          return (
            s(f, "resize", h),
            s(c, "resize", h),
            s(f, "orientationchange", h),
            o
          );
        },
        h = (e) => d(e)[0];
    },
    5204: function (e, t, n) {
      let r, i;
      n.d(t, {
        v: function () {
          return M;
        },
      });
      var o = n(3234),
        l = n(6681),
        s = n(7294),
        u = n(5487),
        f = n(6405),
        c = n(7367),
        a = n(7301);
      let d = new WeakMap();
      function h({ target: e, contentRect: t, borderBoxSize: n }) {
        var r;
        null === (r = d.get(e)) ||
          void 0 === r ||
          r.forEach((r) => {
            r({
              target: e,
              contentSize: t,
              get size() {
                return (function (e, t) {
                  if (t) {
                    let { inlineSize: e, blockSize: n } = t[0];
                    return { width: e, height: n };
                  }
                  return e instanceof SVGElement && "getBBox" in e
                    ? e.getBBox()
                    : { width: e.offsetWidth, height: e.offsetHeight };
                })(e, n);
              },
            });
          });
      }
      function g(e) {
        e.forEach(h);
      }
      let p = new Set();
      var v = n(3967),
        m = n(3038);
      let y = () => ({
          current: 0,
          offset: [],
          progress: 0,
          scrollLength: 0,
          targetOffset: 0,
          targetLength: 0,
          containerLength: 0,
          velocity: 0,
        }),
        w = () => ({ time: 0, x: y(), y: y() }),
        E = {
          x: { length: "Width", position: "Left" },
          y: { length: "Height", position: "Top" },
        };
      function L(e, t, n, r) {
        let i = n[t],
          { length: o, position: l } = E[t],
          s = i.current,
          u = n.time;
        ((i.current = e["scroll" + l]),
          (i.scrollLength = e["scroll" + o] - e["client" + o]),
          (i.offset.length = 0),
          (i.offset[0] = 0),
          (i.offset[1] = i.scrollLength),
          (i.progress = (0, v.Y)(0, i.scrollLength, i.current)));
        let f = r - u;
        i.velocity = f > 50 ? 0 : (0, m.R)(i.current - s, f);
      }
      let W = {
          All: [
            [0, 0],
            [1, 1],
          ],
        },
        x = { start: 0, center: 0.5, end: 1 };
      function b(e, t, n = 0) {
        let r = 0;
        if ((void 0 !== x[e] && (e = x[e]), "string" == typeof e)) {
          let t = parseFloat(e);
          e.endsWith("px")
            ? (r = t)
            : e.endsWith("%")
              ? (e = t / 100)
              : e.endsWith("vw")
                ? (r = (t / 100) * document.documentElement.clientWidth)
                : e.endsWith("vh")
                  ? (r = (t / 100) * document.documentElement.clientHeight)
                  : (e = t);
        }
        return ("number" == typeof e && (r = t * e), n + r);
      }
      let z = [0, 0];
      var B = n(4606),
        H = n(533);
      let S = { x: 0, y: 0 },
        k = new WeakMap(),
        O = new WeakMap(),
        T = new WeakMap(),
        A = (e) => (e === document.documentElement ? window : e);
      var P = n(8868);
      function R(e, t) {
        (0, u.K)(
          !!(!t || t.current),
          `You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`,
        );
      }
      let Y = () => ({
        scrollX: (0, o.B)(0),
        scrollY: (0, o.B)(0),
        scrollXProgress: (0, o.B)(0),
        scrollYProgress: (0, o.B)(0),
      });
      function M({ container: e, target: t, layoutEffect: n = !0, ...o } = {}) {
        let u = (0, l.h)(Y);
        return (
          (n ? P.L : s.useEffect)(
            () => (
              R("target", t),
              R("container", e),
              (function (
                e,
                { container: t = document.documentElement, ...n } = {},
              ) {
                let o = T.get(t);
                o || ((o = new Set()), T.set(t, o));
                let l = (function (e, t, n, r = {}) {
                  return {
                    measure: () =>
                      (function (e, t = e, n) {
                        if (
                          ((n.x.targetOffset = 0),
                          (n.y.targetOffset = 0),
                          t !== e)
                        ) {
                          let r = t;
                          for (; r && r !== e; )
                            ((n.x.targetOffset += r.offsetLeft),
                              (n.y.targetOffset += r.offsetTop),
                              (r = r.offsetParent));
                        }
                        ((n.x.targetLength =
                          t === e ? t.scrollWidth : t.clientWidth),
                          (n.y.targetLength =
                            t === e ? t.scrollHeight : t.clientHeight),
                          (n.x.containerLength = e.clientWidth),
                          (n.y.containerLength = e.clientHeight));
                      })(e, r.target, n),
                    update: (t) => {
                      (L(e, "x", n, t),
                        L(e, "y", n, t),
                        (n.time = t),
                        (r.offset || r.target) &&
                          (function (e, t, n) {
                            let { offset: r = W.All } = n,
                              { target: i = e, axis: o = "y" } = n,
                              l = "y" === o ? "height" : "width",
                              s =
                                i !== e
                                  ? (function (e, t) {
                                      let n = { x: 0, y: 0 },
                                        r = e;
                                      for (; r && r !== t; )
                                        if (r instanceof HTMLElement)
                                          ((n.x += r.offsetLeft),
                                            (n.y += r.offsetTop),
                                            (r = r.offsetParent));
                                        else if (
                                          r instanceof SVGGraphicsElement &&
                                          "getBBox" in r
                                        ) {
                                          let { top: e, left: t } = r.getBBox();
                                          for (
                                            n.x += t, n.y += e;
                                            r && "svg" !== r.tagName;

                                          )
                                            r = r.parentNode;
                                        }
                                      return n;
                                    })(i, e)
                                  : S,
                              u =
                                i === e
                                  ? {
                                      width: e.scrollWidth,
                                      height: e.scrollHeight,
                                    }
                                  : {
                                      width: i.clientWidth,
                                      height: i.clientHeight,
                                    },
                              f = {
                                width: e.clientWidth,
                                height: e.clientHeight,
                              };
                            t[o].offset.length = 0;
                            let c = !t[o].interpolate,
                              a = r.length;
                            for (let e = 0; e < a; e++) {
                              let n = (function (e, t, n, r) {
                                let i = Array.isArray(e) ? e : z,
                                  o = 0;
                                return (
                                  "number" == typeof e
                                    ? (i = [e, e])
                                    : "string" == typeof e &&
                                      (i = (e = e.trim()).includes(" ")
                                        ? e.split(" ")
                                        : [e, x[e] ? e : "0"]),
                                  b(i[0], n, r) - b(i[1], t)
                                );
                              })(r[e], f[l], u[l], s[o]);
                              (c ||
                                n === t[o].interpolatorOffsets[e] ||
                                (c = !0),
                                (t[o].offset[e] = n));
                            }
                            (c &&
                              ((t[o].interpolate = (0, B.s)(
                                t[o].offset,
                                (0, H.Y)(r),
                              )),
                              (t[o].interpolatorOffsets = [...t[o].offset])),
                              (t[o].progress = t[o].interpolate(t[o].current)));
                          })(e, n, r));
                    },
                    notify: () => t(n),
                  };
                })(t, e, w(), n);
                if ((o.add(l), !k.has(t))) {
                  let e = () => {
                      for (let e of o) e.measure();
                    },
                    n = () => {
                      for (let e of o) e.update(c.frameData.timestamp);
                    },
                    l = () => {
                      for (let e of o) e.notify();
                    },
                    s = () => {
                      (f.Wi.read(e, !1, !0),
                        f.Wi.update(n, !1, !0),
                        f.Wi.update(l, !1, !0));
                    };
                  k.set(t, s);
                  let u = A(t);
                  (window.addEventListener("resize", s, { passive: !0 }),
                    t !== document.documentElement &&
                      O.set(
                        t,
                        "function" == typeof t
                          ? (p.add(t),
                            i ||
                              ((i = () => {
                                let e = {
                                    width: window.innerWidth,
                                    height: window.innerHeight,
                                  },
                                  t = {
                                    target: window,
                                    size: e,
                                    contentSize: e,
                                  };
                                p.forEach((e) => e(t));
                              }),
                              window.addEventListener("resize", i)),
                            () => {
                              (p.delete(t), !p.size && i && (i = void 0));
                            })
                          : (function (e, t) {
                              r ||
                                "undefined" == typeof ResizeObserver ||
                                (r = new ResizeObserver(g));
                              let n = (0, a.I)(e);
                              return (
                                n.forEach((e) => {
                                  let n = d.get(e);
                                  (n || ((n = new Set()), d.set(e, n)),
                                    n.add(t),
                                    null == r || r.observe(e));
                                }),
                                () => {
                                  n.forEach((e) => {
                                    let n = d.get(e);
                                    (null == n || n.delete(t),
                                      (null == n ? void 0 : n.size) ||
                                        null == r ||
                                        r.unobserve(e));
                                  });
                                }
                              );
                            })(t, s),
                      ),
                    u.addEventListener("scroll", s, { passive: !0 }));
                }
                let s = k.get(t);
                return (
                  f.Wi.read(s, !1, !0),
                  () => {
                    var e;
                    (0, f.Pn)(s);
                    let n = T.get(t);
                    if (!n || (n.delete(l), n.size)) return;
                    let r = k.get(t);
                    (k.delete(t),
                      r &&
                        (A(t).removeEventListener("scroll", r),
                        null === (e = O.get(t)) || void 0 === e || e(),
                        window.removeEventListener("resize", r)));
                  }
                );
              })(
                ({ x: e, y: t }) => {
                  (u.scrollX.set(e.current),
                    u.scrollXProgress.set(e.progress),
                    u.scrollY.set(t.current),
                    u.scrollYProgress.set(t.progress));
                },
                {
                  ...o,
                  container: (null == e ? void 0 : e.current) || void 0,
                  target: (null == t ? void 0 : t.current) || void 0,
                },
              )
            ),
            [],
          ),
          u
        );
      }
    },
    2421: function (e, t, n) {
      n.d(t, {
        H: function () {
          return d;
        },
      });
      var r = n(4606);
      let i = (e) => "object" == typeof e && e.mix,
        o = (e) => (i(e) ? e.mix : void 0);
      var l = n(7294),
        s = n(3234),
        u = n(6014),
        f = n(6681),
        c = n(6405),
        a = n(8868);
      function d(e, t, n, i) {
        let l =
          "function" == typeof t
            ? t
            : (function (...e) {
                let t = !Array.isArray(e[0]),
                  n = t ? 0 : -1,
                  i = e[0 + n],
                  l = e[1 + n],
                  s = e[2 + n],
                  u = e[3 + n],
                  f = (0, r.s)(l, s, { mixer: o(s[0]), ...u });
                return t ? f(i) : f;
              })(t, n, i);
        return Array.isArray(e) ? h(e, l) : h([e], ([e]) => l(e));
      }
      function h(e, t) {
        let n = (0, f.h)(() => []);
        return (function (e, t) {
          let n = (function (e) {
              let t = (0, f.h)(() => (0, s.B)(e)),
                { isStatic: n } = (0, l.useContext)(u._);
              if (n) {
                let [, n] = (0, l.useState)(e);
                (0, l.useEffect)(() => t.on("change", n), []);
              }
              return t;
            })(t()),
            r = () => n.set(t());
          return (
            r(),
            (0, a.L)(() => {
              let t = () => c.Wi.update(r, !1, !0),
                n = e.map((e) => e.on("change", t));
              return () => {
                (n.forEach((e) => e()), (0, c.Pn)(r));
              };
            }),
            n
          );
        })(e, () => {
          n.length = 0;
          let r = e.length;
          for (let t = 0; t < r; t++) n[t] = e[t].get();
          return t(n);
        });
      }
    },
  },
]);
