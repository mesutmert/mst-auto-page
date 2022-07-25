import { ref as z, watch as K, computed as F, resolveComponent as R, openBlock as a, createElementBlock as n, Fragment as y, normalizeClass as g, normalizeStyle as N, createBlock as s, resolveDynamicComponent as $, createTextVNode as q, toDisplayString as x, createCommentVNode as k, renderSlot as j, createElementVNode as b, withDirectives as P, vModelCheckbox as I, withCtx as T, withModifiers as J, unref as h, createVNode as Y, Transition as G, renderList as O, vModelText as Q, vModelDynamic as W, vModelSelect as X, reactive as Z, onMounted as p } from "vue";
import { useRoute as _, useRouter as ee } from "vue-router";
const M = z(!1), te = (e = !1) => {
  M.value = M.value == e ? !1 : e;
}, E = () => {
  M.value = !1;
};
K(() => M.value, (e, t) => {
  e ? window.addEventListener("click", E) : window.removeEventListener("click", E);
});
const ae = ["href", "title"], le = ["src"], ne = ["title"], L = {
  __name: "ColonTable",
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(e) {
    const t = e, l = (f, D) => D === 1 ? Object.prototype.toString.call(f) === "[object Object]" : D === 2 ? Object.prototype.toString.call(f) === "[object Array]" : D === 3 ? Object.prototype.toString.call(f) === "[object String]" : D === 4 ? Object.prototype.toString.call(f) === "[object Number]" : D === 5 ? Object.prototype.toString.call(f) === "[object Null]" : !1, c = (f, D) => l(f, 1) ? Object.prototype.hasOwnProperty.call(f, D) : !1, o = F(() => t.rowData[t.filedData.key] ? t.rowData[t.filedData.key] : t.filedData.key), r = z(!1), u = (f, D) => {
      M !== f && (window.innerHeight / 1.3 < D.clientY ? r.value = !0 : r.value = !1), te(f);
    }, H = () => {
      typeof t.filedData.callback == "function" && t.filedData.callback(t.rowData, t.filedData);
    }, i = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0, d = () => c(t.filedData, "link") ? typeof t.filedData.link == "function" ? t.filedData.link(t.rowData) : t.rowData[t.filedData.link] ? t.rowData[t.filedData.link] : t.filedData.link : "", m = () => c(t.filedData, "style") ? typeof t.filedData.style == "function" ? t.filedData.style(t.rowData) : t.rowData[t.filedData.style] ? t.rowData[t.filedData.style] : t.filedData.style : "", w = () => c(t.filedData, "title") ? typeof t.filedData.title == "function" ? t.filedData.title(t.rowData) : t.rowData[t.filedData.title] ? t.rowData[t.filedData.title] : t.filedData.title : "", v = () => c(t.filedData, "name") ? typeof t.filedData.name == "function" ? t.filedData.name(t.rowData) : t.rowData[t.filedData.name] ? t.rowData[t.filedData.name] : t.filedData.name : "", C = () => c(t.filedData, "class") ? typeof t.filedData.class == "function" ? t.filedData.class(t.rowData) : t.filedData.class : "", A = () => typeof t.filedData.comp.data == "function" ? t.filedData.comp.data(t.rowData) : t.filedData.comp.data;
    return (f, D) => {
      const V = R("router-link");
      return i() ? (a(), n(y, { key: 0 }, [
        e.filedData.type === "link" ? (a(), n("a", {
          key: 0,
          onClick: D[0] || (D[0] = (S) => H()),
          class: g(C()),
          href: d(),
          title: w(),
          style: N(m())
        }, [
          e.filedData.name ? (a(), n(y, { key: 0 }, [
            e.filedData.html ? (a(), s($(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: v()
            }, null, 8, ["innerHTML"])) : (a(), n(y, { key: 1 }, [
              q(x(v()), 1)
            ], 64))
          ], 64)) : k("", !0),
          j(f.$slots, "default")
        ], 14, ae)) : e.filedData.type === "img" ? (a(), n(y, { key: 1 }, [
          b("img", {
            class: g(C()),
            src: v(),
            onClick: D[1] || (D[1] = (S) => H())
          }, null, 10, le),
          j(f.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (a(), n(y, { key: 2 }, [
          P(b("input", {
            onClick: D[2] || (D[2] = (S) => H()),
            "onUpdate:modelValue": D[3] || (D[3] = (S) => e.rowData.select = S),
            type: "checkbox",
            class: g(C()),
            title: w(),
            style: N(m())
          }, null, 14, ne), [
            [I, e.rowData.select]
          ]),
          j(f.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (a(), s(V, {
          key: 3,
          class: g(C()),
          to: d(),
          onClick: D[4] || (D[4] = (S) => H()),
          title: w(),
          style: N(m())
        }, {
          default: T(() => [
            e.filedData.name ? (a(), n(y, { key: 0 }, [
              e.filedData.html ? (a(), s($(e.filedData.tag ? e.filedData.tag : "span"), {
                key: 0,
                innerHTML: v()
              }, null, 8, ["innerHTML"])) : (a(), n(y, { key: 1 }, [
                q(x(v()), 1)
              ], 64))
            ], 64)) : k("", !0),
            j(f.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : e.filedData.type === "dropdown" ? (a(), s($(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 4,
          onClick: D[5] || (D[5] = J((S) => u(h(o), S), ["stop"])),
          class: g(C()),
          style: N(m()),
          title: w(),
          name: h(o)
        }, {
          default: T(() => [
            (a(), s($("div"), {
              innerHTML: v()
            }, null, 8, ["innerHTML"])),
            Y(G, {
              name: e.filedData.tname
            }, {
              default: T(() => [
                h(M) === h(o) ? (a(), s($(e.filedData.dTag ? e.filedData.dTag : "div"), {
                  key: 0,
                  class: g([
                    e.filedData.dClass,
                    r.value ? e.filedData.dClassUp : e.filedData.dClassDown
                  ]),
                  id: h(o)
                }, {
                  default: T(() => [
                    e.filedData.list ? (a(!0), n(y, { key: 0 }, O(e.filedData.list, (S, U) => (a(), s(L, {
                      key: U + "-body",
                      filedData: S,
                      rowData: e.rowData
                    }, null, 8, ["filedData", "rowData"]))), 128)) : k("", !0)
                  ]),
                  _: 1
                }, 8, ["class", "id"])) : k("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            j(f.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style", "title", "name"])) : e.filedData.type === "comp" ? (a(), n(y, { key: 5 }, [
          e.filedData.comp ? (a(), s($(e.filedData.tag ? e.filedData.tag : "div"), {
            key: 0,
            class: g(C())
          }, {
            default: T(() => [
              (a(), s($(e.filedData.comp.name), {
                compData: A()
              }, null, 8, ["compData"])),
              j(f.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : k("", !0)
        ], 64)) : (a(), s($(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 6,
          onClick: D[6] || (D[6] = (S) => H()),
          class: g(C()),
          title: w(),
          style: N(m())
        }, {
          default: T(() => [
            e.filedData.list && e.filedData.body ? (a(!0), n(y, { key: 0 }, O(e.filedData.list, (S) => (a(), s(L, {
              key: S.name,
              filedData: S,
              rowData: e.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : k("", !0),
            e.filedData.name ? (a(), n(y, { key: 1 }, [
              e.filedData.html ? (a(), s($("span"), {
                key: 0,
                innerHTML: v()
              }, null, 8, ["innerHTML"])) : (a(), n(y, { key: 1 }, [
                q(x(v()), 1)
              ], 64))
            ], 64)) : k("", !0),
            j(f.$slots, "default")
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
    return (t, l) => P((a(), n("input", {
      type: "text",
      "onUpdate:modelValue": l[0] || (l[0] = (c) => e.autoSearch.value = c),
      onInput: l[1] || (l[1] = (c) => e.runSearch(e.autoSearch)),
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
    const t = e, l = _(), c = ee(), o = (i, d, m) => {
      if (i <= m)
        return [];
      var w, v = Math.ceil(i / m), C = Math.min(10, v);
      if (d > v)
        d = v, w = v - C;
      else {
        var A = Math.ceil(C / 2);
        w = d + A > v ? v + 1 - C : A + 1 > d ? 1 : d - A;
      }
      w = Math.max(1, w);
      var f = Array.apply(null, new Array(C)).map(function(D, V) {
        return w + V++;
      });
      return f.indexOf(1) === -1 && (f.shift(), f.unshift(1)), f.indexOf(v) === -1 && f.push(v), f;
    }, r = async (i) => {
      if (t.preHandler.dynamic) {
        if (typeof t.preHandler.tableCahngePage == "function") {
          let d = JSON.parse(JSON.stringify(l.query));
          d.page = i, await c.push({ name: l.name, query: d }), l.query.page = i, t.preHandler.tableCahngePage(i, l.query);
        }
      } else
        u.value.page = i;
    }, u = F(() => t.preHandler.pagination), H = F(() => {
      const i = t.preHandler.dynamic ? u.value.total : t.searchData.length;
      return o(i, u.value.page, u.value.pageSize);
    });
    return (i, d) => h(H).length > 0 ? (a(), n("div", {
      key: 0,
      class: g(["row mt-2", { disabledbutton: t.preHandler.loader }])
    }, [
      b("div", oe, [
        b("ul", ce, [
          b("li", {
            class: g(["page-item", { disabled: h(u).page == 1 }])
          }, [
            h(u).page > 1 ? (a(), n("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: d[0] || (d[0] = (m) => r(parseInt(h(u).page) - 1))
            }, "prev")) : (a(), n("a", de, "Prev"))
          ], 2),
          (a(!0), n(y, null, O(h(H), (m) => (a(), n("li", {
            class: g(["page-item", { active: h(u).page == m }]),
            key: m
          }, [
            b("a", {
              class: "page-link",
              href: "javascript:;",
              onClick: (w) => r(m)
            }, x(m), 9, se)
          ], 2))), 128)),
          h(H).length > 0 ? (a(), n("li", {
            key: 0,
            class: g(["page-item", { disabled: h(u).page >= h(H).length }])
          }, [
            h(u).page < h(H).length ? (a(), n("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: d[1] || (d[1] = (m) => r(parseInt(h(u).page) + 1))
            }, " Next ")) : (a(), n("a", ue, "Next"))
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
    const t = e, l = z(!1), c = F(() => t.searchData.reduce((i, d) => i += d.select ? 1 : 0, 0));
    K(l, (i, d) => {
      t.sortingData.forEach((m) => {
        m.select = i;
      });
    }), K(() => c.value, (i, d) => {
      i == t.searchData.length ? l.value = !0 : l.value = !1;
    });
    const o = () => {
      var i = "";
      t.preHandler.sorting.t === 1 ? i = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"].localeCompare(b["' + t.preHandler.sorting.n + '"])' : 'b["' + t.preHandler.sorting.n + '"].localeCompare(a["' + t.preHandler.sorting.n + '"])' : t.preHandler.sorting.t === 2 && (i = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"] - b["' + t.preHandler.sorting.n + '"]' : 'b["' + t.preHandler.sorting.n + '"] - a["' + t.preHandler.sorting.n + '"]');
      let d = "return " + i;
      return new Function("a,b", d);
    }, r = (i) => t.preHandler.sorting.n === i ? t.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", u = (i) => i && i.caseColon ? i.caseColon(i) : !0, H = (i) => {
      if (i.sort) {
        t.preHandler.sorting.r = t.preHandler.sorting.n === i.sort.n && !t.preHandler.sorting.r, t.preHandler.sorting.n = i.sort.n, t.preHandler.sorting.t = i.sort.t;
        const d = o();
        t.searchData.sort(d);
      }
    };
    return (i, d) => u(e.filedData) ? (a(), n("th", {
      key: 0,
      class: g(e.filedData.head.tclass ? e.filedData.head.tclass : ""),
      style: N(e.filedData.head.style),
      onClick: d[1] || (d[1] = (m) => H(e.filedData.head))
    }, [
      e.filedData.head.checkbox ? P((a(), n("input", {
        key: 0,
        type: "checkbox",
        class: g(e.filedData.head.class),
        "onUpdate:modelValue": d[0] || (d[0] = (m) => l.value = m)
      }, null, 2)), [
        [I, l.value]
      ]) : (a(), n("span", {
        key: 1,
        class: g(e.filedData.head.class),
        innerHTML: e.filedData.head.title
      }, null, 10, De)),
      e.filedData.head.sort ? (a(), n("span", {
        key: 2,
        innerHTML: r(e.filedData.head.sort.n)
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
    const t = e, l = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0;
    return (c, o) => l() ? (a(), n("td", {
      key: 0,
      class: g(e.filedData.body && e.filedData.body.tclass ? e.filedData.body.tclass : "")
    }, [
      e.filedData.body.list ? (a(!0), n(y, { key: 0 }, O(e.filedData.body.list, (r, u) => (a(), s(L, {
        key: u + "-body",
        filedData: r,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))), 128)) : (a(), s(L, {
        key: 1,
        filedData: e.filedData.body,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))
    ], 2)) : k("", !0);
  }
}, he = { key: 0 }, ke = { key: 0 }, ve = ["colspan"], be = /* @__PURE__ */ b("h6", null, "Data Not Found", -1), He = [
  be
], Se = { key: 0 }, we = ["colspan"], Ce = { key: 1 }, $e = ["colspan"], je = /* @__PURE__ */ b("h5", null, "Loader...", -1), Oe = [
  je
], Te = {
  __name: "AutoTable",
  props: {
    tableData: Array,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, l = F(() => {
      if (t.preHandler.dynamic)
        return t.searchData;
      {
        const c = t.searchData.length, o = t.preHandler.pagination, r = Math.ceil(c / o.pageSize);
        o.page > r && r > 0 && (o.page = r);
        const u = (o.page - 1) * o.pageSize;
        return t.searchData.slice(u, u + o.pageSize);
      }
    });
    return (c, o) => (a(), n("table", null, [
      b("thead", null, [
        b("tr", null, [
          (a(!0), n(y, null, O(e.tableData, (r) => (a(), s(me, {
            key: r.head.name,
            sortingData: h(l),
            filedData: r,
            preHandler: e.preHandler,
            searchData: e.searchData
          }, null, 8, ["sortingData", "filedData", "preHandler", "searchData"]))), 128))
        ])
      ]),
      e.preHandler.loader ? (a(), n("tbody", Ce, [
        b("tr", null, [
          b("td", {
            colspan: e.tableData.length
          }, Oe, 8, $e)
        ])
      ])) : (a(), n("tbody", he, [
        h(l).length === 0 ? (a(), n("tr", ke, [
          b("td", {
            colspan: e.tableData.length
          }, He, 8, ve)
        ])) : (a(!0), n(y, { key: 1 }, O(h(l), (r) => (a(), n(y, { key: r }, [
          b("tr", null, [
            (a(!0), n(y, null, O(e.tableData, (u) => (a(), s(ge, {
              key: u.head.name,
              rowData: r,
              filedData: u
            }, null, 8, ["rowData", "filedData"]))), 128))
          ]),
          r.open ? (a(), n("tr", Se, [
            b("td", {
              colspan: e.tableData.length
            }, [
              (a(), s($(r.component), { pageData: r }, null, 8, ["pageData"]))
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
    return (t, l) => (a(), n(y, null, [
      P(b("input", {
        onKeyup: l[0] || (l[0] = (...c) => e.onKeyup && e.onKeyup(...c)),
        tabindex: e.tabindex,
        autocomplete: e.autocomplete,
        type: e.type,
        "onUpdate:modelValue": l[1] || (l[1] = (c) => e.element[e.field] = c),
        onKeypress: l[2] || (l[2] = (...c) => e.onKeyPress && e.onKeyPress(...c)),
        onChange: l[3] || (l[3] = (c) => e.isControlData(e.element, e.element[e.field])),
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
      e.element.error && e.element.error[e.field] ? (a(), n("span", Ne, x(e.element.error[e.field]), 1)) : k("", !0)
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
    const t = e, l = (c, o) => typeof t.changNames == "function" ? t.changNames(c, o) : o[t.vv];
    return (c, o) => (a(), n(y, null, [
      P(b("select", {
        onChange: o[0] || (o[0] = (r) => e.onChange()),
        class: g([
          e.className,
          { "tag-error-form": e.element.error && e.element.error[e.field] }
        ]),
        "onUpdate:modelValue": o[1] || (o[1] = (r) => e.element[e.field] = r),
        placeholder: e.placeholder
      }, [
        e.first ? (a(), n("option", {
          key: 0,
          value: e.first[e.vk],
          hidden: e.first.h
        }, x(e.first[e.vv]), 9, Ae)) : k("", !0),
        (a(!0), n(y, null, O(e.list, (r) => (a(), n("option", {
          key: r,
          value: r[e.vk],
          disabled: r.d,
          innerHTML: l(e.element, r)
        }, null, 8, Fe))), 128))
      ], 42, Le), [
        [X, e.element[e.field]]
      ]),
      j(c.$slots, "default"),
      e.element.error && e.element.error[e.field] ? (a(), n("span", Pe, x(e.element.error[e.field]), 1)) : k("", !0)
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
    const t = e, l = () => Object.prototype.hasOwnProperty.call(t.column, "class") ? typeof t.column.class == "function" ? t.column.class(t.rowData) : t.column.class : "";
    return (c, o) => e.column.type === "comp" ? (a(), s($(e.column.tag ? e.column.tag : "div"), {
      key: 0,
      class: g(l())
    }, {
      default: T(() => [
        e.column.name === "table" ? (a(), s(Te, {
          key: 0,
          tableData: e.column.data,
          searchData: e.searchData,
          preHandler: e.preHandler,
          opts: e.column.opts,
          class: g(l())
        }, null, 8, ["tableData", "searchData", "preHandler", "opts", "class"])) : e.column.name === "pagination" ? (a(), s(fe, {
          key: 1,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["searchData", "preHandler"])) : e.column.name === "autosearch" ? (a(), s(ie, {
          key: 2,
          autoSearch: e.column.data,
          runSearch: e.runSearch
        }, null, 8, ["autoSearch", "runSearch"])) : (a(), s($(e.column.name), {
          key: 3,
          compData: e.column.data
        }, null, 8, ["compData"])),
        e.column.list ? (a(), s(B, {
          key: 4,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler,
          runSearch: e.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : k("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : e.column.type === "select" ? (a(), s(Ve, {
      key: 1,
      field: e.column.field,
      element: e.column.data,
      list: e.column.options,
      vk: e.column.vk ? e.column.vk : "v",
      first: e.column.first,
      vv: e.column.vv ? e.column.vv : "t",
      className: l()
    }, null, 8, ["field", "element", "list", "vk", "first", "vv", "className"])) : e.column.type === "input" ? (a(), s(Me, {
      key: 2,
      field: e.column.field,
      element: e.column.data,
      className: l(),
      readonly: e.column.readonly
    }, null, 8, ["field", "element", "className", "readonly"])) : e.column.type === "dropdown" ? (a(), s(L, {
      key: 3,
      filedData: e.column,
      rowData: {}
    }, null, 8, ["filedData"])) : (a(), s(L, {
      key: 4,
      filedData: e.column,
      rowData: {}
    }, {
      default: T(() => [
        e.column.list ? (a(), s(B, {
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
}, B = {
  __name: "Section",
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    const t = (l) => typeof l.caseColon == "function" ? l.caseColon() : !0;
    return (l, c) => (a(!0), n(y, null, O(e.columns, (o) => (a(), n(y, { key: o }, [
      t(o) ? (a(), s(qe, {
        key: 0,
        column: o,
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
    const t = e, l = Z([]), c = (r) => r.replace(/Ğ/g, "\u011F").replace(/Ü/g, "\xFC").replace(/Ş/g, "\u015F").replace(/I/g, "\u0131").replace(/İ/g, "i").replace(/Ö/g, "\xF6").replace(/Ç/g, "\xE7").toLowerCase(), o = (r = null) => {
      let u = r && r.value.length > 0 ? t.allData.filter((H) => {
        let i = [];
        return r.alans.forEach((m) => {
          i.push(c(H[m].toString()));
        }), i.join(" ").indexOf(c(r.value)) !== -1;
      }) : t.allData;
      l.splice(0, l.length), l.push(...u);
    };
    return p(() => {
      o();
    }), (r, u) => e.pageSetting.loader ? (a(), n("div", Ke, "Loader...")) : (a(), s(B, {
      key: 0,
      columns: e.pageSetting.pageData,
      preHandler: e.pageSetting.preHandler,
      searchData: l,
      runSearch: o
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
};
class Ie {
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
  Ie as createPageSetting
};
