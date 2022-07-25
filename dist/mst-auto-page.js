import { ref as B, watch as F, computed as M, resolveComponent as Y, openBlock as a, createElementBlock as i, Fragment as b, normalizeClass as g, normalizeStyle as P, createBlock as c, resolveDynamicComponent as w, createCommentVNode as h, renderSlot as O, createElementVNode as y, withDirectives as q, vModelCheckbox as I, withCtx as T, withModifiers as G, unref as f, createVNode as E, Transition as Q, renderList as N, vModelText as W, toDisplayString as L, vModelSelect as X, createTextVNode as J, vModelDynamic as Z } from "vue";
import { useRoute as p, useRouter as _, onBeforeRouteUpdate as ee } from "vue-router";
const z = B(!1), te = (e = !1) => {
  z.value = z.value == e ? !1 : e;
}, U = () => {
  z.value = !1;
};
F(() => z.value, (e, t) => {
  e ? window.addEventListener("click", U) : window.removeEventListener("click", U);
});
const ae = ["href", "title"], le = ["src"], ne = ["title"], A = {
  __name: "ColonTable",
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(e) {
    const t = e, n = (D, u) => u === 1 ? Object.prototype.toString.call(D) === "[object Object]" : u === 2 ? Object.prototype.toString.call(D) === "[object Array]" : u === 3 ? Object.prototype.toString.call(D) === "[object String]" : u === 4 ? Object.prototype.toString.call(D) === "[object Number]" : u === 5 ? Object.prototype.toString.call(D) === "[object Null]" : !1, o = (D, u) => n(D, 1) ? Object.prototype.hasOwnProperty.call(D, u) : !1, s = M(() => t.rowData[t.filedData.key] ? t.rowData[t.filedData.key] : t.filedData.key), d = B(!1), k = (D, u) => {
      z !== D && (window.innerHeight / 1.3 < u.clientY ? d.value = !0 : d.value = !1), te(D);
    }, C = () => {
      typeof t.filedData.callback == "function" && t.filedData.callback(t.rowData, t.filedData);
    }, l = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0, v = () => o(t.filedData, "link") ? typeof t.filedData.link == "function" ? t.filedData.link(t.rowData) : t.rowData[t.filedData.link] ? t.rowData[t.filedData.link] : t.filedData.link : "", r = () => o(t.filedData, "style") ? typeof t.filedData.style == "function" ? t.filedData.style(t.rowData) : t.rowData[t.filedData.style] ? t.rowData[t.filedData.style] : t.filedData.style : "", m = () => o(t.filedData, "title") ? typeof t.filedData.title == "function" ? t.filedData.title(t.rowData) : t.rowData[t.filedData.title] ? t.rowData[t.filedData.title] : t.filedData.title : "", $ = () => o(t.filedData, "name") ? typeof t.filedData.name == "function" ? t.filedData.name(t.rowData) : t.rowData[t.filedData.name] ? t.rowData[t.filedData.name] : t.filedData.name : "", S = () => o(t.filedData, "class") ? typeof t.filedData.class == "function" ? t.filedData.class(t.rowData) : t.filedData.class : "", x = () => typeof t.filedData.comp.data == "function" ? t.filedData.comp.data(t.rowData) : t.filedData.comp.data;
    return (D, u) => {
      const j = Y("router-link");
      return l() ? (a(), i(b, { key: 0 }, [
        e.filedData.type === "link" ? (a(), i("a", {
          key: 0,
          onClick: u[0] || (u[0] = (H) => C()),
          class: g(S()),
          href: v(),
          title: m(),
          style: P(r())
        }, [
          e.filedData.name ? (a(), c(w(e.filedData.tag ? e.filedData.tag : "span"), {
            key: 0,
            innerHTML: $()
          }, null, 8, ["innerHTML"])) : h("", !0),
          O(D.$slots, "default")
        ], 14, ae)) : e.filedData.type === "img" ? (a(), i(b, { key: 1 }, [
          y("img", {
            class: g(S()),
            src: $(),
            onClick: u[1] || (u[1] = (H) => C())
          }, null, 10, le),
          O(D.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (a(), i(b, { key: 2 }, [
          q(y("input", {
            onClick: u[2] || (u[2] = (H) => C()),
            "onUpdate:modelValue": u[3] || (u[3] = (H) => e.rowData.select = H),
            type: "checkbox",
            class: g(S()),
            title: m(),
            style: P(r())
          }, null, 14, ne), [
            [I, e.rowData.select]
          ]),
          O(D.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (a(), c(j, {
          key: 3,
          class: g(S()),
          to: v(),
          onClick: u[4] || (u[4] = (H) => C()),
          title: m(),
          style: P(r())
        }, {
          default: T(() => [
            e.filedData.name ? (a(), c(w(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: $()
            }, null, 8, ["innerHTML"])) : h("", !0),
            O(D.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : e.filedData.type === "dropdown" ? (a(), c(w(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 4,
          onClick: u[5] || (u[5] = G((H) => k(f(s), H), ["stop"])),
          class: g(S()),
          style: P(r()),
          title: m(),
          name: f(s)
        }, {
          default: T(() => [
            (a(), c(w("div"), {
              innerHTML: $()
            }, null, 8, ["innerHTML"])),
            E(Q, {
              name: e.filedData.tname
            }, {
              default: T(() => [
                f(z) === f(s) ? (a(), c(w(e.filedData.dTag ? e.filedData.dTag : "div"), {
                  key: 0,
                  class: g([
                    e.filedData.dClass,
                    d.value ? e.filedData.dClassUp : e.filedData.dClassDown
                  ]),
                  id: f(s)
                }, {
                  default: T(() => [
                    e.filedData.list ? (a(!0), i(b, { key: 0 }, N(e.filedData.list, (H, V) => (a(), c(A, {
                      key: V + "-body",
                      filedData: H,
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
        }, 8, ["class", "style", "title", "name"])) : e.filedData.type === "comp" ? (a(), i(b, { key: 5 }, [
          e.filedData.comp ? (a(), c(w(e.filedData.tag ? e.filedData.tag : "div"), {
            key: 0,
            class: g(S())
          }, {
            default: T(() => [
              (a(), c(w(e.filedData.comp.name), {
                compData: x()
              }, null, 8, ["compData"])),
              O(D.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : h("", !0)
        ], 64)) : (a(), c(w(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 6,
          onClick: u[6] || (u[6] = (H) => C()),
          class: g(S()),
          title: m(),
          style: P(r())
        }, {
          default: T(() => [
            e.filedData.list && e.filedData.body ? (a(!0), i(b, { key: 0 }, N(e.filedData.list, (H) => (a(), c(A, {
              key: H.name,
              filedData: H,
              rowData: e.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : h("", !0),
            e.filedData.name ? (a(), c(w("span"), {
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
}, re = ["placeholder"], ie = {
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
    }, null, 42, re)), [
      [W, e.autoSearch.value]
    ]);
  }
}, oe = ["placeholder"], se = ["value", "hidden"], de = ["value", "disabled", "innerHTML"], ce = {
  key: 0,
  class: "text-error-form"
}, R = {
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
    const t = e, n = (o, s) => typeof t.changNames == "function" ? t.changNames(o, s) : s[t.vv];
    return (o, s) => (a(), i(b, null, [
      q(y("select", {
        onChange: s[0] || (s[0] = (d) => e.onChange()),
        class: g([
          e.className,
          { "tag-error-form": e.element.error && e.element.error[e.field] }
        ]),
        "onUpdate:modelValue": s[1] || (s[1] = (d) => e.element[e.field] = d),
        placeholder: e.placeholder
      }, [
        e.first ? (a(), i("option", {
          key: 0,
          value: e.first[e.vk],
          hidden: e.first.h
        }, L(e.first[e.vv]), 9, se)) : h("", !0),
        (a(!0), i(b, null, N(e.list, (d) => (a(), i("option", {
          key: d,
          value: d[e.vk],
          disabled: d.d,
          innerHTML: n(e.element, d)
        }, null, 8, de))), 128))
      ], 42, oe), [
        [X, e.element[e.field]]
      ]),
      O(o.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), i("span", ce, L(e.element.error[e.field]), 1)) : h("", !0)
    ], 64));
  }
}, ue = {
  key: 0,
  class: "bg-white h-[74px] flex text-sm leading-[1.5] font-medium justify-between text-gray-500 items-center px-7"
}, fe = { class: "flex items-center gap-4" }, me = /* @__PURE__ */ y("div", { class: "grow" }, null, -1), De = { class: "flex items-center" }, ye = { class: "text-[#111928] font-medium mr-1" }, ge = /* @__PURE__ */ J(" of "), he = { class: "text-[#111928] font-medium ml-1" }, ve = /* @__PURE__ */ y("span", { class: "text-sm leading-[21px]" }, "Previous", -1), be = [
  ve
], ke = /* @__PURE__ */ y("span", { class: "text-sm leading-[21px]" }, "Next", -1), He = [
  ke
], Se = {
  __name: "Pagination",
  props: {
    searchData: Array,
    preHandler: Object
  },
  setup(e) {
    const t = e, n = p(), o = _(), s = (r, m, $) => {
      if (r <= $)
        return [];
      var S, x = Math.ceil(r / $), D = Math.min(10, x);
      if (m > x)
        m = x, S = x - D;
      else {
        var u = Math.ceil(D / 2);
        S = m + u > x ? x + 1 - D : u + 1 > m ? 1 : m - u;
      }
      S = Math.max(1, S);
      var j = Array.apply(null, new Array(D)).map(function(H, V) {
        return S + V++;
      });
      return j.indexOf(1) === -1 && (j.shift(), j.unshift(1)), j.indexOf(x) === -1 && j.push(x), j;
    }, d = M(() => [
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
    ]), k = async (r) => {
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
      return s(r, l.value.page, l.value.pageSize);
    }), F(() => l.value.pageSize, (r, m) => {
      r != m - 1 && C(r);
    }), ee((r, m) => {
      r.query.pageSize || (l.value.page = 1, l.value.pageSize = 25);
    }), (r, m) => f(l).total > 10 ? (a(), i("div", ue, [
      y("div", fe, [
        J(" Items per Page " + L(f(l).pageSize) + " ", 1),
        E(R, {
          className: "  focus:text-black text-[#D03801] text-sm font-medium pr-7 rounded-lg border-[#D03801] ",
          field: "pageSize",
          element: f(l),
          list: f(d),
          vk: "v",
          vv: "v"
        }, null, 8, ["element", "list"])
      ]),
      me,
      y("div", De, [
        y("span", ye, L(f(l).pageSize * (+f(l).page - 1) + 1) + " - " + L(f(v)), 1),
        ge,
        y("span", he, L(f(l).total), 1),
        y("button", {
          class: g([
            "btn-fill-orange ml-2 flex items-center gap-2 py-[10px]",
            f(l).page == 1 ? "btn-fill-orange-disable" : "btn-fill-orange"
          ]),
          onClick: m[0] || (m[0] = ($) => f(l).page == 1 ? void 0 : k(parseInt(f(l).page) - 1))
        }, be, 2),
        y("button", {
          class: g([
            "flex items-center ml-2.5 gap-2 py-[10px]",
            f(l).page == Math.ceil(f(l).total / f(l).pageSize) ? "btn-fill-orange-disable" : "btn-fill-orange"
          ]),
          onClick: m[1] || (m[1] = ($) => f(l).page == Math.ceil(f(l).total / f(l).pageSize) ? void 0 : k(parseInt(f(l).page) + 1))
        }, He, 2)
      ])
    ])) : h("", !0);
  }
}, we = ["innerHTML"], $e = ["innerHTML"], xe = {
  __name: "HeaderTable",
  props: {
    sortingData: Array,
    filedData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, n = B(!1), o = M(() => t.searchData.reduce((l, v) => l += v.select ? 1 : 0, 0));
    F(n, (l, v) => {
      t.sortingData.forEach((r) => {
        r.select = l;
      });
    }), F(() => o.value, (l, v) => {
      l == t.searchData.length ? n.value = !0 : n.value = !1;
    });
    const s = () => {
      var l = "";
      t.preHandler.sorting.t === 1 ? l = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"].localeCompare(b["' + t.preHandler.sorting.n + '"])' : 'b["' + t.preHandler.sorting.n + '"].localeCompare(a["' + t.preHandler.sorting.n + '"])' : t.preHandler.sorting.t === 2 && (l = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"] - b["' + t.preHandler.sorting.n + '"]' : 'b["' + t.preHandler.sorting.n + '"] - a["' + t.preHandler.sorting.n + '"]');
      let v = "return " + l;
      return new Function("a,b", v);
    }, d = (l) => t.preHandler.sorting.n === l ? t.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", k = (l) => l && l.caseColon ? l.caseColon(l) : !0, C = (l) => {
      if (l.sort) {
        t.preHandler.sorting.r = t.preHandler.sorting.n === l.sort.n && !t.preHandler.sorting.r, t.preHandler.sorting.n = l.sort.n, t.preHandler.sorting.t = l.sort.t;
        const v = s();
        t.searchData.sort(v);
      }
    };
    return (l, v) => k(e.filedData) ? (a(), i("th", {
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
        [I, n.value]
      ]) : (a(), i("span", {
        key: 1,
        class: g(e.filedData.head.class),
        innerHTML: e.filedData.head.title
      }, null, 10, we)),
      e.filedData.head.sort ? (a(), i("span", {
        key: 2,
        innerHTML: d(e.filedData.head.sort.n)
      }, null, 8, $e)) : h("", !0)
    ], 6)) : h("", !0);
  }
}, Ce = {
  __name: "RowTable",
  props: {
    rowData: Object,
    filedData: Object
  },
  setup(e) {
    const t = e, n = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0;
    return (o, s) => n() ? (a(), i("td", {
      key: 0,
      class: g(e.filedData.body && e.filedData.body.tclass ? e.filedData.body.tclass : "")
    }, [
      e.filedData.body.list ? (a(!0), i(b, { key: 0 }, N(e.filedData.body.list, (d, k) => (a(), c(A, {
        key: k + "-body",
        filedData: d,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))), 128)) : (a(), c(A, {
        key: 1,
        filedData: e.filedData.body,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))
    ], 2)) : h("", !0);
  }
}, Oe = { key: 0 }, je = { key: 0 }, Te = ["colspan"], Ne = /* @__PURE__ */ y("h6", null, "Data Not Found", -1), Me = [
  Ne
], Le = { key: 0 }, Pe = ["colspan"], ze = { key: 1 }, Ae = ["colspan"], qe = /* @__PURE__ */ y("h5", null, "Loader...", -1), Fe = [
  qe
], Ve = {
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
        const o = t.searchData.length, s = t.preHandler.pagination, d = Math.ceil(o / s.pageSize);
        s.page > d && d > 0 && (s.page = d);
        const k = (s.page - 1) * s.pageSize;
        return t.searchData.slice(k, k + s.pageSize);
      }
    });
    return (o, s) => (a(), i("table", null, [
      y("thead", null, [
        y("tr", null, [
          (a(!0), i(b, null, N(e.tableData, (d) => (a(), c(xe, {
            key: d.head.name,
            sortingData: f(n),
            filedData: d,
            preHandler: e.preHandler,
            searchData: e.searchData
          }, null, 8, ["sortingData", "filedData", "preHandler", "searchData"]))), 128))
        ])
      ]),
      e.preHandler.loader ? (a(), i("tbody", ze, [
        y("tr", null, [
          y("td", {
            colspan: e.tableData.length
          }, Fe, 8, Ae)
        ])
      ])) : (a(), i("tbody", Oe, [
        f(n).length === 0 ? (a(), i("tr", je, [
          y("td", {
            colspan: e.tableData.length
          }, Me, 8, Te)
        ])) : (a(!0), i(b, { key: 1 }, N(f(n), (d) => (a(), i(b, { key: d }, [
          y("tr", null, [
            (a(!0), i(b, null, N(e.tableData, (k) => (a(), c(Ce, {
              key: k.head.name,
              rowData: d,
              filedData: k
            }, null, 8, ["rowData", "filedData"]))), 128))
          ]),
          d.open ? (a(), i("tr", Le, [
            y("td", {
              colspan: e.tableData.length
            }, [
              (a(), c(w(d.component), { pageData: d }, null, 8, ["pageData"]))
            ], 8, Pe)
          ])) : h("", !0)
        ], 64))), 128))
      ]))
    ]));
  }
}, Ke = ["tabindex", "autocomplete", "type", "placeholder", "maxlength", "disabled", "required", "id", "readonly"], Be = {
  key: 0,
  class: "text-error-form"
}, Ue = {
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
    return (t, n) => (a(), i(b, null, [
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
      }, null, 42, Ke), [
        [Z, e.element[e.field]]
      ]),
      O(t.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), i("span", Be, L(e.element.error[e.field]), 1)) : h("", !0)
    ], 64));
  }
}, Ie = {
  __name: "SectionBody",
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    opts: Object
  },
  setup(e) {
    const t = e, n = () => Object.prototype.hasOwnProperty.call(t.column, "class") ? typeof t.column.class == "function" ? t.column.class(t.rowData) : t.column.class : "";
    return (o, s) => e.column.type === "comp" ? (a(), c(w(e.column.tag ? e.column.tag : "div"), {
      key: 0,
      class: g(n())
    }, {
      default: T(() => [
        e.column.name === "table" ? (a(), c(Ve, {
          key: 0,
          tableData: e.column.data,
          searchData: e.searchData,
          preHandler: e.preHandler,
          opts: e.column.opts,
          class: g(n())
        }, null, 8, ["tableData", "searchData", "preHandler", "opts", "class"])) : e.column.name === "pagination" ? (a(), c(Se, {
          key: 1,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["searchData", "preHandler"])) : e.column.name === "autosearch" ? (a(), c(ie, {
          key: 2,
          autoSearch: e.column.data
        }, null, 8, ["autoSearch"])) : (a(), c(w(e.column.name), {
          key: 3,
          compData: e.column.data
        }, null, 8, ["compData"])),
        e.column.list ? (a(), c(K, {
          key: 4,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["columns", "searchData", "preHandler"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : e.column.type === "select" ? (a(), c(R, {
      key: 1,
      field: e.column.field,
      element: e.column.data,
      list: e.column.options,
      vk: e.column.vk ? e.column.vk : "v",
      first: e.column.first,
      vv: e.column.vv ? e.column.vv : "t",
      className: n()
    }, null, 8, ["field", "element", "list", "vk", "first", "vv", "className"])) : e.column.type === "input" ? (a(), c(Ue, {
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
      default: T(() => [
        e.column.list ? (a(), c(K, {
          key: 0,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["columns", "searchData", "preHandler"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}, K = {
  __name: "Section",
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = (n) => typeof n.caseColon == "function" ? n.caseColon() : !0;
    return (n, o) => (a(!0), i(b, null, N(e.columns, (s) => (a(), i(b, { key: s }, [
      t(s) ? (a(), c(Ie, {
        key: 0,
        column: s,
        preHandler: e.preHandler,
        searchData: e.searchData
      }, null, 8, ["column", "preHandler", "searchData"])) : h("", !0)
    ], 64))), 128));
  }
}, Ee = {
  key: 1,
  class: "loader"
}, Ye = {
  __name: "index",
  props: {
    pageSetting: Object,
    searchData: {
      type: Array,
      default: []
    }
  },
  setup(e) {
    return (t, n) => e.pageSetting.loader ? (a(), i("div", Ee, "Loader...")) : (a(), c(K, {
      key: 0,
      columns: e.pageSetting.pageData,
      preHandler: e.pageSetting.preHandler,
      searchData: e.searchData
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
};
class Ge {
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
  Ye as AutoPage,
  Ge as createPageSetting
};
