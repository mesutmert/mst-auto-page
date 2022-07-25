import { ref as I, watch as V, computed as M, resolveComponent as B, openBlock as a, createElementBlock as i, Fragment as k, normalizeClass as g, normalizeStyle as P, createBlock as c, resolveDynamicComponent as x, createCommentVNode as h, renderSlot as O, createElementVNode as y, withDirectives as q, vModelCheckbox as J, withCtx as j, withModifiers as Y, unref as f, createVNode as F, Transition as G, renderList as N, vModelText as Q, createTextVNode as R, toDisplayString as L, vModelDynamic as W, vModelSelect as X } from "vue";
import { useRoute as Z, useRouter as p, onBeforeRouteUpdate as _ } from "vue-router";
const z = I(!1), ee = (e = !1) => {
  z.value = z.value == e ? !1 : e;
}, E = () => {
  z.value = !1;
};
V(() => z.value, (e, t) => {
  e ? window.addEventListener("click", E) : window.removeEventListener("click", E);
});
const te = ["href", "title"], ae = ["src"], le = ["title"], A = {
  __name: "ColonTable",
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(e) {
    const t = e, n = (D, u) => u === 1 ? Object.prototype.toString.call(D) === "[object Object]" : u === 2 ? Object.prototype.toString.call(D) === "[object Array]" : u === 3 ? Object.prototype.toString.call(D) === "[object String]" : u === 4 ? Object.prototype.toString.call(D) === "[object Number]" : u === 5 ? Object.prototype.toString.call(D) === "[object Null]" : !1, o = (D, u) => n(D, 1) ? Object.prototype.hasOwnProperty.call(D, u) : !1, d = M(() => t.rowData[t.filedData.key] ? t.rowData[t.filedData.key] : t.filedData.key), s = I(!1), H = (D, u) => {
      z !== D && (window.innerHeight / 1.3 < u.clientY ? s.value = !0 : s.value = !1), ee(D);
    }, C = () => {
      typeof t.filedData.callback == "function" && t.filedData.callback(t.rowData, t.filedData);
    }, l = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0, v = () => o(t.filedData, "link") ? typeof t.filedData.link == "function" ? t.filedData.link(t.rowData) : t.rowData[t.filedData.link] ? t.rowData[t.filedData.link] : t.filedData.link : "", r = () => o(t.filedData, "style") ? typeof t.filedData.style == "function" ? t.filedData.style(t.rowData) : t.rowData[t.filedData.style] ? t.rowData[t.filedData.style] : t.filedData.style : "", m = () => o(t.filedData, "title") ? typeof t.filedData.title == "function" ? t.filedData.title(t.rowData) : t.rowData[t.filedData.title] ? t.rowData[t.filedData.title] : t.filedData.title : "", $ = () => o(t.filedData, "name") ? typeof t.filedData.name == "function" ? t.filedData.name(t.rowData) : t.rowData[t.filedData.name] ? t.rowData[t.filedData.name] : t.filedData.name : "", b = () => o(t.filedData, "class") ? typeof t.filedData.class == "function" ? t.filedData.class(t.rowData) : t.filedData.class : "", w = () => typeof t.filedData.comp.data == "function" ? t.filedData.comp.data(t.rowData) : t.filedData.comp.data;
    return (D, u) => {
      const T = B("router-link");
      return l() ? (a(), i(k, { key: 0 }, [
        e.filedData.type === "link" ? (a(), i("a", {
          key: 0,
          onClick: u[0] || (u[0] = (S) => C()),
          class: g(b()),
          href: v(),
          title: m(),
          style: P(r())
        }, [
          e.filedData.name ? (a(), c(x(e.filedData.tag ? e.filedData.tag : "span"), {
            key: 0,
            innerHTML: $()
          }, null, 8, ["innerHTML"])) : h("", !0),
          O(D.$slots, "default")
        ], 14, te)) : e.filedData.type === "img" ? (a(), i(k, { key: 1 }, [
          y("img", {
            class: g(b()),
            src: $(),
            onClick: u[1] || (u[1] = (S) => C())
          }, null, 10, ae),
          O(D.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (a(), i(k, { key: 2 }, [
          q(y("input", {
            onClick: u[2] || (u[2] = (S) => C()),
            "onUpdate:modelValue": u[3] || (u[3] = (S) => e.rowData.select = S),
            type: "checkbox",
            class: g(b()),
            title: m(),
            style: P(r())
          }, null, 14, le), [
            [J, e.rowData.select]
          ]),
          O(D.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (a(), c(T, {
          key: 3,
          class: g(b()),
          to: v(),
          onClick: u[4] || (u[4] = (S) => C()),
          title: m(),
          style: P(r())
        }, {
          default: j(() => [
            e.filedData.name ? (a(), c(x(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: $()
            }, null, 8, ["innerHTML"])) : h("", !0),
            O(D.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : e.filedData.type === "dropdown" ? (a(), c(x(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 4,
          onClick: u[5] || (u[5] = Y((S) => H(f(d), S), ["stop"])),
          class: g(b()),
          style: P(r()),
          title: m(),
          name: f(d)
        }, {
          default: j(() => [
            (a(), c(x("div"), {
              innerHTML: $()
            }, null, 8, ["innerHTML"])),
            F(G, {
              name: e.filedData.tname
            }, {
              default: j(() => [
                f(z) === f(d) ? (a(), c(x(e.filedData.dTag ? e.filedData.dTag : "div"), {
                  key: 0,
                  class: g([
                    e.filedData.dClass,
                    s.value ? e.filedData.dClassUp : e.filedData.dClassDown
                  ]),
                  id: f(d)
                }, {
                  default: j(() => [
                    e.filedData.list ? (a(!0), i(k, { key: 0 }, N(e.filedData.list, (S, K) => (a(), c(A, {
                      key: K + "-body",
                      filedData: S,
                      rowData: e.rowData
                    }, null, 8, ["filedData", "rowData"]))), 128)) : h("", !0)
                  ]),
                  _: 1
                }, 8, ["class", "id"])) : h("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            O(D.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style", "title", "name"])) : e.filedData.type === "comp" ? (a(), i(k, { key: 5 }, [
          e.filedData.comp ? (a(), c(x(e.filedData.tag ? e.filedData.tag : "div"), {
            key: 0,
            class: g(b())
          }, {
            default: j(() => [
              (a(), c(x(e.filedData.comp.name), {
                compData: w()
              }, null, 8, ["compData"])),
              O(D.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : h("", !0)
        ], 64)) : (a(), c(x(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 6,
          onClick: u[6] || (u[6] = (S) => C()),
          class: g(b()),
          title: m(),
          style: P(r())
        }, {
          default: j(() => [
            e.filedData.list && e.filedData.body ? (a(!0), i(k, { key: 0 }, N(e.filedData.list, (S) => (a(), c(A, {
              key: S.name,
              filedData: S,
              rowData: e.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : h("", !0),
            e.filedData.name ? (a(), c(x(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 1,
              innerHTML: $()
            }, null, 8, ["innerHTML"])) : h("", !0),
            O(D.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "title", "style"]))
      ], 64)) : h("", !0);
    };
  }
}, ne = ["placeholder"], re = {
  __name: "AutoSearch",
  props: {
    autoSearch: Object
  },
  setup(e) {
    return (t, n) => q((a(), i("input", {
      type: "text",
      "onUpdate:modelValue": n[0] || (n[0] = (o) => e.autoSearch.value = o),
      onInput: n[1] || (n[1] = (o) => e.autoSearch.callback(o, e.autoSearch)),
      class: g(e.autoSearch.class),
      placeholder: e.autoSearch.placeholder ? e.autoSearch.placeholder : "Search"
    }, null, 42, ne)), [
      [Q, e.autoSearch.value]
    ]);
  }
}, ie = {
  key: 0,
  class: "bg-white h-[74px] flex text-sm leading-[1.5] font-medium justify-between text-gray-500 items-center px-7"
}, oe = { class: "flex items-center gap-4" }, de = /* @__PURE__ */ y("div", { class: "grow" }, null, -1), se = { class: "flex items-center" }, ce = { class: "text-[#111928] font-medium mr-1" }, ue = /* @__PURE__ */ R(" of "), fe = { class: "text-[#111928] font-medium ml-1" }, me = /* @__PURE__ */ y("span", { class: "text-sm leading-[21px]" }, "Previous", -1), De = /* @__PURE__ */ y("span", { class: "text-sm leading-[21px]" }, "Next", -1), ye = {
  __name: "Pagination",
  props: {
    searchData: Array,
    preHandler: Object
  },
  setup(e) {
    const t = e, n = Z(), o = p(), d = (r, m, $) => {
      if (r <= $)
        return [];
      var b, w = Math.ceil(r / $), D = Math.min(10, w);
      if (m > w)
        m = w, b = w - D;
      else {
        var u = Math.ceil(D / 2);
        b = m + u > w ? w + 1 - D : u + 1 > m ? 1 : m - u;
      }
      b = Math.max(1, b);
      var T = Array.apply(null, new Array(D)).map(function(S, K) {
        return b + K++;
      });
      return T.indexOf(1) === -1 && (T.shift(), T.unshift(1)), T.indexOf(w) === -1 && T.push(w), T;
    }, s = M(() => [
      {
        v: 10,
        d: 10 >= l.value.total
      },
      {
        v: 25,
        d: 25 >= l.value.total
      },
      {
        v: 50,
        d: 50 >= l.value.total
      },
      {
        v: 75,
        d: 75 >= l.value.total
      },
      {
        v: 100,
        d: 100 >= l.value.total
      }
    ]), H = async (r) => {
      if (t.preHandler.dynamic) {
        if (typeof t.preHandler.tableCahngePage == "function") {
          let m = JSON.parse(JSON.stringify(n.query));
          m.page = r, await o.push({ name: n.name, query: m }), n.query.page = r, t.preHandler.tableCahngePage(r, n.query);
        }
      } else
        l.value.page = r;
    }, C = async (r) => {
      if (r != t.preHandler.pagination.pageS\u0130ze)
        if (t.preHandler.dynamic) {
          if (typeof t.preHandler.tableChangePageSize == "function") {
            let m = JSON.parse(JSON.stringify(n.query));
            m.limit = r, await o.push({ name: n.name, query: m }), n.query.limit = r, t.preHandler.tableChangePageSize(r, n.query);
          }
        } else
          l.preHandler.pageSize = r;
    }, l = M(() => t.preHandler.pagination), v = M(() => {
      const r = +l.value.pageSize * (+l.value.page - 1);
      return l.value.page == Math.ceil(l.value.total / l.value.pageSize) ? l.value.total : r + l.value.pageSize;
    });
    return M(() => {
      const r = t.preHandler.dynamic ? l.value.total : t.searchData.length;
      return d(r, l.value.page, l.value.pageSize);
    }), V(() => l.value.pageSize, (r, m) => {
      r != m - 1 && C(r);
    }), _((r, m) => {
      r.query.pageSize || (l.value.page = 1, l.value.pageSize = 25);
    }), (r, m) => {
      const $ = B("SelectTag"), b = B("fai");
      return f(l).total > 10 ? (a(), i("div", ie, [
        y("div", oe, [
          R(" Items per Page " + L(f(l).pageSize) + " ", 1),
          F($, {
            className: "  focus:text-black text-[#D03801] text-sm font-medium pr-7 rounded-lg border-[#D03801] ",
            field: "pageSize",
            element: f(l),
            list: f(s),
            vk: "v",
            vv: "v"
          }, null, 8, ["element", "list"])
        ]),
        de,
        y("div", se, [
          y("span", ce, L(f(l).pageSize * (+f(l).page - 1) + 1) + " - " + L(f(v)), 1),
          ue,
          y("span", fe, L(f(l).total), 1),
          y("button", {
            class: g([
              "btn-fill-orange ml-2 flex items-center gap-2 py-[10px]",
              f(l).page == 1 ? "btn-fill-orange-disable" : "btn-fill-orange"
            ]),
            onClick: m[0] || (m[0] = (w) => f(l).page == 1 ? void 0 : H(parseInt(f(l).page) - 1))
          }, [
            F(b, {
              icon: "angle-left",
              class: "text-md"
            }),
            me
          ], 2),
          y("button", {
            class: g([
              "flex items-center ml-2.5 gap-2 py-[10px]",
              f(l).page == Math.ceil(f(l).total / f(l).pageSize) ? "btn-fill-orange-disable" : "btn-fill-orange"
            ]),
            onClick: m[1] || (m[1] = (w) => f(l).page == Math.ceil(f(l).total / f(l).pageSize) ? void 0 : H(parseInt(f(l).page) + 1))
          }, [
            De,
            F(b, {
              icon: "angle-right",
              class: "text-md"
            })
          ], 2)
        ])
      ])) : h("", !0);
    };
  }
}, ge = ["innerHTML"], he = ["innerHTML"], ve = {
  __name: "HeaderTable",
  props: {
    sortingData: Array,
    filedData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, n = I(!1), o = M(() => t.searchData.reduce((l, v) => l += v.select ? 1 : 0, 0));
    V(n, (l, v) => {
      t.sortingData.forEach((r) => {
        r.select = l;
      });
    }), V(() => o.value, (l, v) => {
      l == t.searchData.length ? n.value = !0 : n.value = !1;
    });
    const d = () => {
      var l = "";
      t.preHandler.sorting.t === 1 ? l = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"].localeCompare(b["' + t.preHandler.sorting.n + '"])' : 'b["' + t.preHandler.sorting.n + '"].localeCompare(a["' + t.preHandler.sorting.n + '"])' : t.preHandler.sorting.t === 2 && (l = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"] - b["' + t.preHandler.sorting.n + '"]' : 'b["' + t.preHandler.sorting.n + '"] - a["' + t.preHandler.sorting.n + '"]');
      let v = "return " + l;
      return new Function("a,b", v);
    }, s = (l) => t.preHandler.sorting.n === l ? t.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", H = (l) => l && l.caseColon ? l.caseColon(l) : !0, C = (l) => {
      if (l.sort) {
        t.preHandler.sorting.r = t.preHandler.sorting.n === l.sort.n && !t.preHandler.sorting.r, t.preHandler.sorting.n = l.sort.n, t.preHandler.sorting.t = l.sort.t;
        const v = d();
        t.searchData.sort(v);
      }
    };
    return (l, v) => H(e.filedData) ? (a(), i("th", {
      key: 0,
      class: g(e.filedData.head.tclass ? e.filedData.head.tclass : ""),
      style: P(e.filedData.head.style),
      onClick: v[1] || (v[1] = (r) => C(e.filedData.head))
    }, [
      e.filedData.head.checkbox ? q((a(), i("input", {
        key: 0,
        type: "checkbox",
        class: g(e.filedData.head.class),
        "onUpdate:modelValue": v[0] || (v[0] = (r) => n.value = r)
      }, null, 2)), [
        [J, n.value]
      ]) : (a(), i("span", {
        key: 1,
        class: g(e.filedData.head.class),
        innerHTML: e.filedData.head.title
      }, null, 10, ge)),
      e.filedData.head.sort ? (a(), i("span", {
        key: 2,
        innerHTML: s(e.filedData.head.sort.n)
      }, null, 8, he)) : h("", !0)
    ], 6)) : h("", !0);
  }
}, be = {
  __name: "RowTable",
  props: {
    rowData: Object,
    filedData: Object
  },
  setup(e) {
    const t = e, n = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0;
    return (o, d) => n() ? (a(), i("td", {
      key: 0,
      class: g(e.filedData.body && e.filedData.body.tclass ? e.filedData.body.tclass : "")
    }, [
      e.filedData.body.list ? (a(!0), i(k, { key: 0 }, N(e.filedData.body.list, (s, H) => (a(), c(A, {
        key: H + "-body",
        filedData: s,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))), 128)) : (a(), c(A, {
        key: 1,
        filedData: e.filedData.body,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))
    ], 2)) : h("", !0);
  }
}, ke = { key: 0 }, He = { key: 0 }, Se = ["colspan"], we = /* @__PURE__ */ y("h6", null, "Data Not Found", -1), xe = [
  we
], $e = { key: 0 }, Ce = ["colspan"], Oe = { key: 1 }, Te = ["colspan"], je = /* @__PURE__ */ y("h5", null, "Loader...", -1), Ne = [
  je
], Me = {
  __name: "AutoTable",
  props: {
    tableData: Array,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, n = M(() => {
      if (t.preHandler.dynamic)
        return t.searchData;
      {
        const o = t.searchData.length, d = t.preHandler.pagination, s = Math.ceil(o / d.pageSize);
        d.page > s && s > 0 && (d.page = s);
        const H = (d.page - 1) * d.pageSize;
        return t.searchData.slice(H, H + d.pageSize);
      }
    });
    return (o, d) => (a(), i("table", null, [
      y("thead", null, [
        y("tr", null, [
          (a(!0), i(k, null, N(e.tableData, (s) => (a(), c(ve, {
            key: s.head.name,
            sortingData: f(n),
            filedData: s,
            preHandler: e.preHandler,
            searchData: e.searchData
          }, null, 8, ["sortingData", "filedData", "preHandler", "searchData"]))), 128))
        ])
      ]),
      e.preHandler.loader ? (a(), i("tbody", Oe, [
        y("tr", null, [
          y("td", {
            colspan: e.tableData.length
          }, Ne, 8, Te)
        ])
      ])) : (a(), i("tbody", ke, [
        f(n).length === 0 ? (a(), i("tr", He, [
          y("td", {
            colspan: e.tableData.length
          }, xe, 8, Se)
        ])) : (a(!0), i(k, { key: 1 }, N(f(n), (s) => (a(), i(k, { key: s }, [
          y("tr", null, [
            (a(!0), i(k, null, N(e.tableData, (H) => (a(), c(be, {
              key: H.head.name,
              rowData: s,
              filedData: H
            }, null, 8, ["rowData", "filedData"]))), 128))
          ]),
          s.open ? (a(), i("tr", $e, [
            y("td", {
              colspan: e.tableData.length
            }, [
              (a(), c(x(s.component), { pageData: s }, null, 8, ["pageData"]))
            ], 8, Ce)
          ])) : h("", !0)
        ], 64))), 128))
      ]))
    ]));
  }
}, Le = ["tabindex", "autocomplete", "type", "placeholder", "maxlength", "disabled", "required", "id", "readonly"], Pe = {
  key: 0,
  class: "text-error-form"
}, ze = {
  __name: "InputTag",
  props: {
    field: String,
    element: Object,
    className: {
      type: String,
      default: ""
    },
    isControlData: {
      type: Function,
      default: () => {
      }
    },
    onKeyPress: {
      type: Function,
      default: () => !0
    },
    type: {
      type: String,
      default: "text"
    },
    placeholder: {
      type: String,
      default: ""
    },
    maxlength: {
      default: 255,
      type: Number
    },
    disabled: {
      default: !1,
      type: Boolean
    },
    required: {
      default: !1,
      type: Boolean
    },
    readonly: {
      default: !1,
      type: Boolean
    },
    tabindex: {
      type: Number
    },
    onKeyup: {
      type: Function,
      default: () => {
      }
    },
    autocomplete: {
      type: String,
      default: "off"
    }
  },
  setup(e) {
    return (t, n) => (a(), i(k, null, [
      q(y("input", {
        onKeyup: n[0] || (n[0] = (...o) => e.onKeyup && e.onKeyup(...o)),
        tabindex: e.tabindex,
        autocomplete: e.autocomplete,
        type: e.type,
        "onUpdate:modelValue": n[1] || (n[1] = (o) => e.element[e.field] = o),
        onKeypress: n[2] || (n[2] = (...o) => e.onKeyPress && e.onKeyPress(...o)),
        onChange: n[3] || (n[3] = (o) => e.isControlData(e.element, e.element[e.field])),
        class: g([
          e.className,
          e.element.error && e.element.error[e.field] ? "tag-error-form" : ""
        ]),
        placeholder: e.placeholder,
        maxlength: e.maxlength,
        disabled: e.disabled,
        required: e.required,
        id: e.field,
        readonly: e.readonly
      }, null, 42, Le), [
        [W, e.element[e.field]]
      ]),
      O(t.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), i("span", Pe, L(e.element.error[e.field]), 1)) : h("", !0)
    ], 64));
  }
}, Ae = ["placeholder"], qe = ["value", "hidden"], Fe = ["value", "disabled", "innerHTML"], Ve = {
  key: 0,
  class: "text-error-form"
}, Ke = {
  __name: "SelectTag",
  props: {
    field: String | Number,
    element: Object,
    list: Array,
    className: {
      type: String,
      default: ""
    },
    first: {
      type: Object,
      default: null
    },
    onChange: {
      type: Function,
      default: () => {
      }
    },
    placeholder: {
      type: String,
      default: ""
    },
    changNames: {
      type: Function,
      default: null
    },
    vk: {
      type: String,
      default: "v"
    },
    vv: {
      type: String,
      default: "t"
    }
  },
  setup(e) {
    const t = e, n = (o, d) => typeof t.changNames == "function" ? t.changNames(o, d) : d[t.vv];
    return (o, d) => (a(), i(k, null, [
      q(y("select", {
        onChange: d[0] || (d[0] = (s) => e.onChange()),
        class: g([
          e.className,
          { "tag-error-form": e.element.error && e.element.error[e.field] }
        ]),
        "onUpdate:modelValue": d[1] || (d[1] = (s) => e.element[e.field] = s),
        placeholder: e.placeholder
      }, [
        e.first ? (a(), i("option", {
          key: 0,
          value: e.first[e.vk],
          hidden: e.first.h
        }, L(e.first[e.vv]), 9, qe)) : h("", !0),
        (a(!0), i(k, null, N(e.list, (s) => (a(), i("option", {
          key: s,
          value: s[e.vk],
          disabled: s.d,
          innerHTML: n(e.element, s)
        }, null, 8, Fe))), 128))
      ], 42, Ae), [
        [X, e.element[e.field]]
      ]),
      O(o.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), i("span", Ve, L(e.element.error[e.field]), 1)) : h("", !0)
    ], 64));
  }
}, Be = {
  __name: "SectionBody",
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    opts: Object
  },
  setup(e) {
    const t = e, n = () => Object.prototype.hasOwnProperty.call(t.column, "class") ? typeof t.column.class == "function" ? t.column.class(t.rowData) : t.column.class : "";
    return (o, d) => e.column.type === "comp" ? (a(), c(x(e.column.tag ? e.column.tag : "div"), {
      key: 0,
      class: g(n())
    }, {
      default: j(() => [
        e.column.name === "table" ? (a(), c(Me, {
          key: 0,
          tableData: e.column.data,
          searchData: e.searchData,
          preHandler: e.preHandler,
          opts: e.column.opts,
          class: g(n())
        }, null, 8, ["tableData", "searchData", "preHandler", "opts", "class"])) : e.column.name === "pagination" ? (a(), c(ye, {
          key: 1,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["searchData", "preHandler"])) : e.column.name === "autosearch" ? (a(), c(re, {
          key: 2,
          autoSearch: e.column.data
        }, null, 8, ["autoSearch"])) : (a(), c(x(e.column.name), {
          key: 3,
          compData: e.column.data
        }, null, 8, ["compData"])),
        e.column.list ? (a(), c(U, {
          key: 4,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["columns", "searchData", "preHandler"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : e.column.type === "select" ? (a(), c(Ke, {
      key: 1,
      field: e.column.field,
      element: e.column.data,
      list: e.column.options,
      vk: e.column.vk ? e.column.vk : "v",
      first: e.column.first,
      vv: e.column.vv ? e.column.vv : "t",
      className: n()
    }, null, 8, ["field", "element", "list", "vk", "first", "vv", "className"])) : e.column.type === "input" ? (a(), c(ze, {
      key: 2,
      field: e.column.field,
      element: e.column.data,
      className: n(),
      readonly: e.column.readonly
    }, null, 8, ["field", "element", "className", "readonly"])) : e.column.type === "dropdown" ? (a(), c(A, {
      key: 3,
      filedData: e.column,
      rowData: {}
    }, null, 8, ["filedData"])) : (a(), c(A, {
      key: 4,
      filedData: e.column,
      rowData: {}
    }, {
      default: j(() => [
        e.column.list ? (a(), c(U, {
          key: 0,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["columns", "searchData", "preHandler"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}, U = {
  __name: "Section",
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = (n) => typeof n.caseColon == "function" ? n.caseColon() : !0;
    return (n, o) => (a(!0), i(k, null, N(e.columns, (d) => (a(), i(k, { key: d }, [
      t(d) ? (a(), c(Be, {
        key: 0,
        column: d,
        preHandler: e.preHandler,
        searchData: e.searchData
      }, null, 8, ["column", "preHandler", "searchData"])) : h("", !0)
    ], 64))), 128));
  }
}, Ue = {
  key: 1,
  class: "loader"
}, Je = {
  __name: "index",
  props: {
    pageSetting: Object,
    searchData: {
      type: Array,
      default: []
    }
  },
  setup(e) {
    return (t, n) => e.pageSetting.loader ? (a(), i("div", Ue, "Loader...")) : (a(), c(U, {
      key: 0,
      columns: e.pageSetting.pageData,
      preHandler: e.pageSetting.preHandler,
      searchData: e.searchData
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
};
class Re {
  constructor() {
    this.preHandler = {
      dynamic: !1,
      loader: !1,
      pagination: {
        status: !0,
        page: 1,
        pageSize: 20,
        total: 0
      },
      sorting: {
        n: "",
        t: 1,
        r: !1
      },
      tableCahngePage: () => {
      },
      tableSorting: () => {
      }
    }, this.pageData = [];
  }
}
export {
  Je as AutoPage,
  Re as createPageSetting
};
