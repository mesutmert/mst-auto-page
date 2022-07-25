import { ref as B, watch as E, computed as P, resolveComponent as R, openBlock as a, createElementBlock as l, Fragment as y, normalizeClass as g, normalizeStyle as N, createBlock as d, resolveDynamicComponent as $, createTextVNode as q, toDisplayString as x, createCommentVNode as k, renderSlot as j, createElementVNode as H, withDirectives as F, vModelCheckbox as U, withCtx as T, withModifiers as J, unref as h, createVNode as Y, Transition as G, renderList as O, vModelText as Q, vModelDynamic as W, vModelSelect as X, reactive as Z, onMounted as p } from "vue";
import { useRoute as _, useRouter as ee } from "vue-router";
const M = B(!1), te = (e = !1) => {
  M.value = M.value == e ? !1 : e;
}, z = () => {
  M.value = !1;
};
E(() => M.value, (e, t) => {
  e ? window.addEventListener("click", z) : window.removeEventListener("click", z);
});
const ae = ["href", "title"], le = ["src"], ne = ["title"], L = {
  __name: "ColonTable",
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(e) {
    const t = e, n = (u, D) => D === 1 ? Object.prototype.toString.call(u) === "[object Object]" : D === 2 ? Object.prototype.toString.call(u) === "[object Array]" : D === 3 ? Object.prototype.toString.call(u) === "[object String]" : D === 4 ? Object.prototype.toString.call(u) === "[object Number]" : D === 5 ? Object.prototype.toString.call(u) === "[object Null]" : !1, o = (u, D) => n(u, 1) ? Object.prototype.hasOwnProperty.call(u, D) : !1, i = P(() => t.rowData[t.filedData.key] ? t.rowData[t.filedData.key] : t.filedData.key), r = B(!1), s = (u, D) => {
      M !== u && (window.innerHeight / 1.3 < D.clientY ? r.value = !0 : r.value = !1), te(u);
    }, c = () => {
      typeof t.filedData.callback == "function" && t.filedData.callback(t.rowData, t.filedData);
    }, f = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0, m = () => o(t.filedData, "link") ? typeof t.filedData.link == "function" ? t.filedData.link(t.rowData) : t.rowData[t.filedData.link] ? t.rowData[t.filedData.link] : t.filedData.link : "", v = () => o(t.filedData, "style") ? typeof t.filedData.style == "function" ? t.filedData.style(t.rowData) : t.rowData[t.filedData.style] ? t.rowData[t.filedData.style] : t.filedData.style : "", w = () => o(t.filedData, "title") ? typeof t.filedData.title == "function" ? t.filedData.title(t.rowData) : t.rowData[t.filedData.title] ? t.rowData[t.filedData.title] : t.filedData.title : "", b = () => o(t.filedData, "name") ? typeof t.filedData.name == "function" ? t.filedData.name(t.rowData) : t.rowData[t.filedData.name] ? t.rowData[t.filedData.name] : t.filedData.name : "", C = () => o(t.filedData, "class") ? typeof t.filedData.class == "function" ? t.filedData.class(t.rowData) : t.filedData.class : "", A = () => typeof t.filedData.comp.data == "function" ? t.filedData.comp.data(t.rowData) : t.filedData.comp.data;
    return (u, D) => {
      const V = R("router-link");
      return f() ? (a(), l(y, { key: 0 }, [
        e.filedData.type === "link" ? (a(), l("a", {
          key: 0,
          onClick: D[0] || (D[0] = (S) => c()),
          class: g(C()),
          href: m(),
          title: w(),
          style: N(v())
        }, [
          e.filedData.name ? (a(), l(y, { key: 0 }, [
            e.filedData.html ? (a(), d($(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: b()
            }, null, 8, ["innerHTML"])) : (a(), l(y, { key: 1 }, [
              q(x(b()), 1)
            ], 64))
          ], 64)) : k("", !0),
          j(u.$slots, "default")
        ], 14, ae)) : e.filedData.type === "img" ? (a(), l(y, { key: 1 }, [
          H("img", {
            class: g(C()),
            src: b(),
            onClick: D[1] || (D[1] = (S) => c())
          }, null, 10, le),
          j(u.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (a(), l(y, { key: 2 }, [
          F(H("input", {
            onClick: D[2] || (D[2] = (S) => c()),
            "onUpdate:modelValue": D[3] || (D[3] = (S) => e.rowData.select = S),
            type: "checkbox",
            class: g(C()),
            title: w(),
            style: N(v())
          }, null, 14, ne), [
            [U, e.rowData.select]
          ]),
          j(u.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (a(), d(V, {
          key: 3,
          class: g(C()),
          to: m(),
          onClick: D[4] || (D[4] = (S) => c()),
          title: w(),
          style: N(v())
        }, {
          default: T(() => [
            e.filedData.name ? (a(), l(y, { key: 0 }, [
              e.filedData.html ? (a(), d($(e.filedData.tag ? e.filedData.tag : "span"), {
                key: 0,
                innerHTML: b()
              }, null, 8, ["innerHTML"])) : (a(), l(y, { key: 1 }, [
                q(x(b()), 1)
              ], 64))
            ], 64)) : k("", !0),
            j(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : e.filedData.type === "dropdown" ? (a(), d($(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 4,
          onClick: D[5] || (D[5] = J((S) => s(h(i), S), ["stop"])),
          class: g(C()),
          style: N(v()),
          title: w(),
          name: h(i)
        }, {
          default: T(() => [
            (a(), d($("div"), {
              innerHTML: b()
            }, null, 8, ["innerHTML"])),
            Y(G, {
              name: e.filedData.tname
            }, {
              default: T(() => [
                h(M) === h(i) ? (a(), d($(e.filedData.dTag ? e.filedData.dTag : "div"), {
                  key: 0,
                  class: g([
                    e.filedData.dClass,
                    r.value ? e.filedData.dClassUp : e.filedData.dClassDown
                  ]),
                  id: h(i)
                }, {
                  default: T(() => [
                    e.filedData.list ? (a(!0), l(y, { key: 0 }, O(e.filedData.list, (S, I) => (a(), d(L, {
                      key: I + "-body",
                      filedData: S,
                      rowData: e.rowData
                    }, null, 8, ["filedData", "rowData"]))), 128)) : k("", !0)
                  ]),
                  _: 1
                }, 8, ["class", "id"])) : k("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            j(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style", "title", "name"])) : e.filedData.type === "comp" ? (a(), l(y, { key: 5 }, [
          e.filedData.comp ? (a(), d($(e.filedData.tag ? e.filedData.tag : "div"), {
            key: 0,
            class: g(C())
          }, {
            default: T(() => [
              (a(), d($(e.filedData.comp.name), {
                compData: A()
              }, null, 8, ["compData"])),
              j(u.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : k("", !0)
        ], 64)) : (a(), d($(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 6,
          onClick: D[6] || (D[6] = (S) => c()),
          class: g(C()),
          title: w(),
          style: N(v())
        }, {
          default: T(() => [
            e.filedData.list && e.filedData.body ? (a(!0), l(y, { key: 0 }, O(e.filedData.list, (S) => (a(), d(L, {
              key: S.name,
              filedData: S,
              rowData: e.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : k("", !0),
            e.filedData.name ? (a(), l(y, { key: 1 }, [
              e.filedData.html ? (a(), d($("span"), {
                key: 0,
                innerHTML: b()
              }, null, 8, ["innerHTML"])) : (a(), l(y, { key: 1 }, [
                q(x(b()), 1)
              ], 64))
            ], 64)) : k("", !0),
            j(u.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "title", "style"]))
      ], 64)) : k("", !0);
    };
  }
}, re = ["placeholder"], ie = {
  __name: "AutoSearch",
  props: {
    autoSearch: Object,
    runSearch: Function
  },
  setup(e) {
    return (t, n) => F((a(), l("input", {
      type: "text",
      "onUpdate:modelValue": n[0] || (n[0] = (o) => e.autoSearch.value = o),
      onInput: n[1] || (n[1] = (o) => e.runSearch(e.autoSearch)),
      class: g(e.autoSearch.class),
      placeholder: e.autoSearch.placeholder ? e.autoSearch.placeholder : "Search"
    }, null, 42, re)), [
      [Q, e.autoSearch.value]
    ]);
  }
}, oe = { class: "col-12" }, ce = { class: "pagination float-left" }, de = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, se = ["onClick"], ue = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, fe = {
  __name: "Pagination",
  props: {
    searchData: Array,
    preHandler: Object
  },
  setup(e) {
    const t = e, n = _(), o = ee(), i = (f, m, v) => {
      if (f <= v)
        return [];
      var w, b = Math.ceil(f / v), C = Math.min(10, b);
      if (m > b)
        m = b, w = b - C;
      else {
        var A = Math.ceil(C / 2);
        w = m + A > b ? b + 1 - C : A + 1 > m ? 1 : m - A;
      }
      w = Math.max(1, w);
      var u = Array.apply(null, new Array(C)).map(function(D, V) {
        return w + V++;
      });
      return u.indexOf(1) === -1 && (u.shift(), u.unshift(1)), u.indexOf(b) === -1 && u.push(b), u;
    }, r = async (f) => {
      if (t.preHandler.dynamic) {
        if (typeof t.preHandler.tableCahngePage == "function") {
          let m = JSON.parse(JSON.stringify(n.query));
          m.page = f, await o.push({ name: n.name, query: m }), n.query.page = f, t.preHandler.tableCahngePage(f, n.query);
        }
      } else
        s.value.page = f;
    }, s = P(() => t.preHandler.pagination), c = P(() => {
      const f = t.preHandler.dynamic ? s.value.total : t.searchData.length;
      return i(f, s.value.page, s.value.pageSize);
    });
    return (f, m) => h(c).length > 0 ? (a(), l("div", {
      key: 0,
      class: g(["row mt-2", { disabledbutton: t.preHandler.loader }])
    }, [
      H("div", oe, [
        H("ul", ce, [
          H("li", {
            class: g(["page-item", { disabled: h(s).page == 1 }])
          }, [
            h(s).page > 1 ? (a(), l("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: m[0] || (m[0] = (v) => r(parseInt(h(s).page) - 1))
            }, "prev")) : (a(), l("a", de, "Prev"))
          ], 2),
          (a(!0), l(y, null, O(h(c), (v) => (a(), l("li", {
            class: g(["page-item", { active: h(s).page == v }]),
            key: v
          }, [
            H("a", {
              class: "page-link",
              href: "javascript:;",
              onClick: (w) => r(v)
            }, x(v), 9, se)
          ], 2))), 128)),
          h(c).length > 0 ? (a(), l("li", {
            key: 0,
            class: g(["page-item", { disabled: h(s).page >= h(c).length }])
          }, [
            h(s).page < h(c).length ? (a(), l("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: m[1] || (m[1] = (v) => r(parseInt(h(s).page) + 1))
            }, " Next ")) : (a(), l("a", ue, "Next"))
          ], 2)) : k("", !0)
        ])
      ])
    ], 2)) : k("", !0);
  }
}, De = ["innerHTML"], ye = ["innerHTML"], me = {
  __name: "HeaderTable",
  props: {
    sortingData: Array,
    filedData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, n = B(!1);
    E(n, (c, f) => {
      t.sortingData.forEach((m) => {
        m.select = c;
      });
    });
    const o = () => {
      var c = "";
      t.preHandler.sorting.t === 1 ? c = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"].localeCompare(b["' + t.preHandler.sorting.n + '"])' : 'b["' + t.preHandler.sorting.n + '"].localeCompare(a["' + t.preHandler.sorting.n + '"])' : t.preHandler.sorting.t === 2 && (c = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"] - b["' + t.preHandler.sorting.n + '"]' : 'b["' + t.preHandler.sorting.n + '"] - a["' + t.preHandler.sorting.n + '"]');
      let f = "return " + c;
      return new Function("a,b", f);
    }, i = (c) => t.preHandler.sorting.n === c ? t.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", r = (c) => c && c.caseColon ? c.caseColon(c) : !0, s = (c) => {
      if (c.sort) {
        t.preHandler.sorting.r = t.preHandler.sorting.n === c.sort.n && !t.preHandler.sorting.r, t.preHandler.sorting.n = c.sort.n, t.preHandler.sorting.t = c.sort.t;
        const f = o();
        t.searchData.sort(f);
      }
    };
    return (c, f) => r(e.filedData) ? (a(), l("th", {
      key: 0,
      class: g(e.filedData.head.tclass ? e.filedData.head.tclass : ""),
      style: N(e.filedData.head.style),
      onClick: f[1] || (f[1] = (m) => s(e.filedData.head))
    }, [
      e.filedData.head.checkbox ? F((a(), l("input", {
        key: 0,
        type: "checkbox",
        class: g(e.filedData.head.class),
        "onUpdate:modelValue": f[0] || (f[0] = (m) => n.value = m)
      }, null, 2)), [
        [U, n.value]
      ]) : (a(), l("span", {
        key: 1,
        class: g(e.filedData.head.class),
        innerHTML: e.filedData.head.title
      }, null, 10, De)),
      e.filedData.head.sort ? (a(), l("span", {
        key: 2,
        innerHTML: i(e.filedData.head.sort.n)
      }, null, 8, ye)) : k("", !0)
    ], 6)) : k("", !0);
  }
}, ge = {
  __name: "RowTable",
  props: {
    rowData: Object,
    filedData: Object
  },
  setup(e) {
    const t = e, n = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0;
    return (o, i) => n() ? (a(), l("td", {
      key: 0,
      class: g(e.filedData.body && e.filedData.body.tclass ? e.filedData.body.tclass : "")
    }, [
      e.filedData.body.list ? (a(!0), l(y, { key: 0 }, O(e.filedData.body.list, (r, s) => (a(), d(L, {
        key: s + "-body",
        filedData: r,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))), 128)) : (a(), d(L, {
        key: 1,
        filedData: e.filedData.body,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))
    ], 2)) : k("", !0);
  }
}, he = { key: 0 }, ke = { key: 0 }, ve = ["colspan"], be = /* @__PURE__ */ H("h6", null, "Data Not Found", -1), He = [
  be
], Se = { key: 0 }, we = ["colspan"], Ce = { key: 1 }, $e = ["colspan"], je = /* @__PURE__ */ H("h5", null, "Loader...", -1), Oe = [
  je
], Te = {
  __name: "AutoTable",
  props: {
    tableData: Array,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, n = P(() => {
      if (t.preHandler.dynamic)
        return t.searchData;
      {
        const o = t.searchData.length, i = t.preHandler.pagination, r = Math.ceil(o / i.pageSize);
        i.page > r && r > 0 && (i.page = r);
        const s = (i.page - 1) * i.pageSize;
        return t.searchData.slice(s, s + i.pageSize);
      }
    });
    return (o, i) => (a(), l("table", null, [
      H("thead", null, [
        H("tr", null, [
          (a(!0), l(y, null, O(e.tableData, (r) => (a(), d(me, {
            key: r.head.name,
            sortingData: h(n),
            filedData: r,
            preHandler: e.preHandler,
            searchData: e.searchData
          }, null, 8, ["sortingData", "filedData", "preHandler", "searchData"]))), 128))
        ])
      ]),
      e.preHandler.loader ? (a(), l("tbody", Ce, [
        H("tr", null, [
          H("td", {
            colspan: e.tableData.length
          }, Oe, 8, $e)
        ])
      ])) : (a(), l("tbody", he, [
        h(n).length === 0 ? (a(), l("tr", ke, [
          H("td", {
            colspan: e.tableData.length
          }, He, 8, ve)
        ])) : (a(!0), l(y, { key: 1 }, O(h(n), (r) => (a(), l(y, { key: r }, [
          H("tr", null, [
            (a(!0), l(y, null, O(e.tableData, (s) => (a(), d(ge, {
              key: s.head.name,
              rowData: r,
              filedData: s
            }, null, 8, ["rowData", "filedData"]))), 128))
          ]),
          r.open ? (a(), l("tr", Se, [
            H("td", {
              colspan: e.tableData.length
            }, [
              (a(), d($(r.component), { pageData: r }, null, 8, ["pageData"]))
            ], 8, we)
          ])) : k("", !0)
        ], 64))), 128))
      ]))
    ]));
  }
}, xe = ["tabindex", "autocomplete", "type", "placeholder", "maxlength", "disabled", "required", "id", "readonly"], Ne = {
  key: 0,
  class: "text-error-form"
}, Me = {
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
    return (t, n) => (a(), l(y, null, [
      F(H("input", {
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
      }, null, 42, xe), [
        [W, e.element[e.field]]
      ]),
      j(t.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), l("span", Ne, x(e.element.error[e.field]), 1)) : k("", !0)
    ], 64));
  }
}, Le = ["placeholder"], Ae = ["value", "hidden"], Fe = ["value", "disabled", "innerHTML"], Pe = {
  key: 0,
  class: "text-error-form"
}, Ve = {
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
    const t = e, n = (o, i) => typeof t.changNames == "function" ? t.changNames(o, i) : i[t.vv];
    return (o, i) => (a(), l(y, null, [
      F(H("select", {
        onChange: i[0] || (i[0] = (r) => e.onChange()),
        class: g([
          e.className,
          { "tag-error-form": e.element.error && e.element.error[e.field] }
        ]),
        "onUpdate:modelValue": i[1] || (i[1] = (r) => e.element[e.field] = r),
        placeholder: e.placeholder
      }, [
        e.first ? (a(), l("option", {
          key: 0,
          value: e.first[e.vk],
          hidden: e.first.h
        }, x(e.first[e.vv]), 9, Ae)) : k("", !0),
        (a(!0), l(y, null, O(e.list, (r) => (a(), l("option", {
          key: r,
          value: r[e.vk],
          disabled: r.d,
          innerHTML: n(e.element, r)
        }, null, 8, Fe))), 128))
      ], 42, Le), [
        [X, e.element[e.field]]
      ]),
      j(o.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), l("span", Pe, x(e.element.error[e.field]), 1)) : k("", !0)
    ], 64));
  }
}, qe = {
  __name: "SectionBody",
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    const t = e, n = () => Object.prototype.hasOwnProperty.call(t.column, "class") ? typeof t.column.class == "function" ? t.column.class(t.rowData) : t.column.class : "";
    return (o, i) => e.column.type === "comp" ? (a(), d($(e.column.tag ? e.column.tag : "div"), {
      key: 0,
      class: g(n())
    }, {
      default: T(() => [
        e.column.name === "table" ? (a(), d(Te, {
          key: 0,
          tableData: e.column.data,
          searchData: e.searchData,
          preHandler: e.preHandler,
          opts: e.column.opts,
          class: g(n())
        }, null, 8, ["tableData", "searchData", "preHandler", "opts", "class"])) : e.column.name === "pagination" ? (a(), d(fe, {
          key: 1,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["searchData", "preHandler"])) : e.column.name === "autosearch" ? (a(), d(ie, {
          key: 2,
          autoSearch: e.column.data,
          runSearch: e.runSearch
        }, null, 8, ["autoSearch", "runSearch"])) : (a(), d($(e.column.name), {
          key: 3,
          compData: e.column.data
        }, null, 8, ["compData"])),
        e.column.list ? (a(), d(K, {
          key: 4,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler,
          runSearch: e.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : k("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : e.column.type === "select" ? (a(), d(Ve, {
      key: 1,
      field: e.column.field,
      element: e.column.data,
      list: e.column.options,
      vk: e.column.vk ? e.column.vk : "v",
      first: e.column.first,
      vv: e.column.vv ? e.column.vv : "t",
      className: n()
    }, null, 8, ["field", "element", "list", "vk", "first", "vv", "className"])) : e.column.type === "input" ? (a(), d(Me, {
      key: 2,
      field: e.column.field,
      element: e.column.data,
      className: n(),
      readonly: e.column.readonly
    }, null, 8, ["field", "element", "className", "readonly"])) : e.column.type === "dropdown" ? (a(), d(L, {
      key: 3,
      filedData: e.column,
      rowData: {}
    }, null, 8, ["filedData"])) : (a(), d(L, {
      key: 4,
      filedData: e.column,
      rowData: {}
    }, {
      default: T(() => [
        e.column.list ? (a(), d(K, {
          key: 0,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler,
          runSearch: e.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : k("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}, K = {
  __name: "Section",
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    const t = (n) => typeof n.caseColon == "function" ? n.caseColon() : !0;
    return (n, o) => (a(!0), l(y, null, O(e.columns, (i) => (a(), l(y, { key: i }, [
      t(i) ? (a(), d(qe, {
        key: 0,
        column: i,
        preHandler: e.preHandler,
        searchData: e.searchData,
        runSearch: e.runSearch
      }, null, 8, ["column", "preHandler", "searchData", "runSearch"])) : k("", !0)
    ], 64))), 128));
  }
}, Ke = {
  key: 1,
  class: "loader"
}, Ee = {
  __name: "index",
  props: {
    pageSetting: Object,
    allData: {
      type: Array,
      default: []
    }
  },
  setup(e) {
    const t = e, n = Z([]), o = (r) => r.replace(/Ğ/g, "\u011F").replace(/Ü/g, "\xFC").replace(/Ş/g, "\u015F").replace(/I/g, "\u0131").replace(/İ/g, "i").replace(/Ö/g, "\xF6").replace(/Ç/g, "\xE7").toLowerCase(), i = (r = null) => {
      let s = r && r.value.length > 0 ? t.allData.filter((c) => {
        let f = [];
        return r.alans.forEach((v) => {
          f.push(o(c[v].toString()));
        }), f.join(" ").indexOf(o(r.value)) !== -1;
      }) : t.allData;
      n.splice(0, n.length), n.push(...s);
    };
    return p(() => {
      i();
    }), (r, s) => e.pageSetting.loader ? (a(), l("div", Ke, "Loader...")) : (a(), d(K, {
      key: 0,
      columns: e.pageSetting.pageData,
      preHandler: e.pageSetting.preHandler,
      searchData: n,
      runSearch: i
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
};
class Ue {
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
  Ee as AutoPage,
  Ue as createPageSetting
};
