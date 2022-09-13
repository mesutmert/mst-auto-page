import { resolveComponent as B, openBlock as a, createElementBlock as d, Fragment as g, mergeProps as H, createBlock as f, resolveDynamicComponent as b, createTextVNode as C, toDisplayString as j, createCommentVNode as m, renderSlot as p, createElementVNode as S, withDirectives as P, vModelCheckbox as x, withCtx as h, normalizeProps as M, normalizeClass as $, vModelText as I, computed as z, unref as L, renderList as O, ref as R, watch as A, guardReactiveProps as N, normalizeStyle as U, reactive as F, onMounted as J } from "vue";
import { useRoute as G, useRouter as K } from "vue-router";
const Q = ["href"], W = ["src"], X = {
  name: "column"
}, Y = /* @__PURE__ */ Object.assign(X, {
  props: {
    filedData: Object,
    rowData: {
      type: Object,
      default: {}
    }
  },
  setup(e) {
    const t = e, u = () => {
      const n = {}, l = o("class"), r = o("title"), s = o("style"), D = o("id");
      return l && (n.class = l), D && (n.id = D), r && (n.title = r), s && (n.style = s), t.filedData.attrs && Object.assign(n, t.filedData.attrs), n;
    }, c = () => {
      typeof t.filedData.callback == "function" && t.filedData.callback(t.rowData, t.filedData);
    }, i = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0, o = (n) => Object.prototype.hasOwnProperty.call(t.filedData, n) ? typeof t.filedData[n] == "function" ? t.filedData[n](t.rowData) : t.rowData[t.filedData[n]] ? t.rowData[t.filedData[n]] : t.filedData[n] : "", y = () => typeof t.filedData.comp.data == "function" ? t.filedData.comp.data(t.rowData) : t.filedData.comp.data;
    return (n, l) => {
      const r = B("router-link");
      return i() ? (a(), d(g, { key: 0 }, [
        e.filedData.type === "link" ? (a(), d("a", H({
          key: 0,
          onClick: l[0] || (l[0] = (s) => c()),
          href: o("link")
        }, u()), [
          e.filedData.name ? (a(), d(g, { key: 0 }, [
            e.filedData.html ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: o("name")
            }, null, 8, ["innerHTML"])) : (a(), d(g, { key: 1 }, [
              C(j(o("name")), 1)
            ], 64))
          ], 64)) : m("", !0),
          p(n.$slots, "default")
        ], 16, Q)) : e.filedData.type === "img" ? (a(), d(g, { key: 1 }, [
          S("img", H(u(), {
            src: o("name"),
            onClick: l[1] || (l[1] = (s) => c())
          }), null, 16, W),
          p(n.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (a(), d(g, { key: 2 }, [
          P(S("input", H({
            onClick: l[2] || (l[2] = (s) => c()),
            "onUpdate:modelValue": l[3] || (l[3] = (s) => e.rowData.select = s),
            type: "checkbox"
          }, u()), null, 16), [
            [x, e.rowData.select]
          ]),
          p(n.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (a(), f(r, H({
          key: 3,
          to: o("link"),
          onClick: l[4] || (l[4] = (s) => c())
        }, u()), {
          default: h(() => [
            e.filedData.name ? (a(), d(g, { key: 0 }, [
              e.filedData.html ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "span"), {
                key: 0,
                innerHTML: o("name")
              }, null, 8, ["innerHTML"])) : (a(), d(g, { key: 1 }, [
                C(j(o("name")), 1)
              ], 64))
            ], 64)) : m("", !0),
            p(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["to"])) : e.filedData.type === "comp" ? (a(), d(g, { key: 4 }, [
          e.filedData.comp ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "div"), M(H({ key: 0 }, u())), {
            default: h(() => [
              (a(), f(b(e.filedData.comp.name), {
                compData: y(),
                rowData: e.rowData
              }, null, 8, ["compData", "rowData"])),
              p(n.$slots, "default")
            ]),
            _: 3
          }, 16)) : m("", !0)
        ], 64)) : (a(), f(b(e.filedData.tag ? e.filedData.tag : "div"), H({
          key: 5,
          onClick: l[5] || (l[5] = (s) => c())
        }, u()), {
          default: h(() => [
            e.filedData.name ? (a(), d(g, { key: 0 }, [
              e.filedData.html ? (a(), f(b("span"), {
                key: 0,
                innerHTML: o("name")
              }, null, 8, ["innerHTML"])) : (a(), d(g, { key: 1 }, [
                C(j(o("name")), 1)
              ], 64))
            ], 64)) : m("", !0),
            p(n.$slots, "default")
          ]),
          _: 3
        }, 16))
      ], 64)) : m("", !0);
    };
  }
}), Z = ["placeholder"], _ = {
  name: "AutoSearch"
}, ee = /* @__PURE__ */ Object.assign(_, {
  props: {
    autoSearch: Object,
    runSearch: Function,
    preHandler: Object
  },
  setup(e) {
    return (t, u) => P((a(), d("input", {
      type: "text",
      "onUpdate:modelValue": u[0] || (u[0] = (c) => e.preHandler.autoSearch.value = c),
      onInput: u[1] || (u[1] = (c) => e.runSearch()),
      class: $(e.autoSearch.class),
      placeholder: e.autoSearch.placeholder ? e.autoSearch.placeholder : "Search"
    }, null, 42, Z)), [
      [I, e.preHandler.autoSearch.value]
    ]);
  }
}), te = { class: "col-12" }, ae = { class: "pagination float-left" }, ne = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, le = ["onClick"], re = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, ie = {
  name: "Pagination"
}, oe = /* @__PURE__ */ Object.assign(ie, {
  props: {
    preHandler: Object
  },
  setup(e) {
    const t = e, u = G(), c = K(), i = (l, r, s) => {
      if (l <= s)
        return [];
      var D, k = Math.ceil(l / s), w = Math.min(10, k);
      if (r > k)
        r = k, D = k - w;
      else {
        var T = Math.ceil(w / 2);
        D = r + T > k ? k + 1 - w : T + 1 > r ? 1 : r - T;
      }
      D = Math.max(1, D);
      var v = Array.apply(null, new Array(w)).map(function(Oe, E) {
        return D + E++;
      });
      return v.indexOf(1) === -1 && (v.shift(), v.unshift(1)), v.indexOf(k) === -1 && v.push(k), v;
    }, o = async (l) => {
      if (t.preHandler.dynamic) {
        if (typeof t.preHandler.tableCahngePage == "function") {
          let r = JSON.parse(JSON.stringify(u.query));
          r.page = l, await c.push({ name: u.name, query: r }), u.query.page = l, t.preHandler.pagination.page = l, t.preHandler.tableCahngePage(l, u.query);
        }
      } else
        t.preHandler.pagination.page = l, t.preHandler.tableCahngePage(l, u.query);
    }, y = z(() => i(t.preHandler.pagination.total, t.preHandler.pagination.page, t.preHandler.pagination.pageSize)), n = z(() => Math.ceil(t.preHandler.pagination.total / t.preHandler.pagination.pageSize));
    return (l, r) => L(n) > 0 ? (a(), d("div", {
      key: 0,
      class: $(["row mt-2", { disabledbutton: t.preHandler.loader }])
    }, [
      S("div", te, [
        S("ul", ae, [
          S("li", {
            class: $(["page-item", { disabled: e.preHandler.pagination.page == 1 }])
          }, [
            e.preHandler.pagination.page > 1 ? (a(), d("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: r[0] || (r[0] = (s) => o(parseInt(e.preHandler.pagination.page) - 1))
            }, "prev")) : (a(), d("a", ne, "Prev"))
          ], 2),
          (a(!0), d(g, null, O(L(y), (s) => (a(), d("li", {
            class: $(["page-item", { active: e.preHandler.pagination.page == s }]),
            key: s
          }, [
            S("a", {
              class: "page-link",
              href: "javascript:;",
              onClick: (D) => o(s)
            }, j(s), 9, le)
          ], 2))), 128)),
          L(n) > 0 ? (a(), d("li", {
            key: 0,
            class: $(["page-item", { disabled: e.preHandler.pagination.page >= L(n) }])
          }, [
            e.preHandler.pagination.page < L(n) ? (a(), d("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: r[1] || (r[1] = (s) => o(parseInt(e.preHandler.pagination.page) + 1))
            }, " Next ")) : (a(), d("a", re, "Next"))
          ], 2)) : m("", !0)
        ])
      ])
    ], 2)) : m("", !0);
  }
}), ce = ["innerHTML"], se = ["innerHTML"], ue = {
  name: "ListHeader"
}, de = /* @__PURE__ */ Object.assign(ue, {
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, u = R(!1), c = () => {
      const r = {}, s = i("class"), D = i("title"), k = i("style"), w = i("id");
      return s && (r.class = s), w && (r.id = w), D && (r.title = D), k && (r.style = k), t.tableData.line.attrs && Object.assign(r, t.tableData.line.attrs), r;
    }, i = (r) => Object.prototype.hasOwnProperty.call(t.tableData.line, r) ? typeof t.tableData.line[r] == "function" ? t.tableData.line[r](t.rowData) : t.tableData.line[r] : "";
    A(u, (r, s) => {
      t.searchData.forEach((D) => {
        D.select = r;
      });
    });
    const o = () => {
      var r = "";
      t.preHandler.sorting.t === 1 ? r = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"].localeCompare(b["' + t.preHandler.sorting.n + '"])' : 'b["' + t.preHandler.sorting.n + '"].localeCompare(a["' + t.preHandler.sorting.n + '"])' : t.preHandler.sorting.t === 2 && (r = t.preHandler.sorting.r ? 'a["' + t.preHandler.sorting.n + '"] - b["' + t.preHandler.sorting.n + '"]' : 'b["' + t.preHandler.sorting.n + '"] - a["' + t.preHandler.sorting.n + '"]');
      let s = "return " + r;
      return new Function("a,b", s);
    }, y = (r) => t.preHandler.sorting.n === r ? t.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", n = (r) => r && r.caseColon ? r.caseColon(r) : !0, l = (r) => {
      if (r.sort) {
        t.preHandler.sorting.r = t.preHandler.sorting.n === r.sort.n && !t.preHandler.sorting.r, t.preHandler.sorting.n = r.sort.n, t.preHandler.sorting.t = r.sort.t;
        const s = o();
        t.searchData.sort(s);
      }
    };
    return (r, s) => (a(), f(b(e.tableData.line ? e.tableData.line.tag : "tr"), M(N(c())), {
      default: h(() => [
        (a(!0), d(g, null, O(e.tableData.data, (D) => (a(), d(g, {
          key: D.name
        }, [
          n(D) ? (a(), f(b(D.tag ? D.tag : "th"), {
            key: 0,
            class: $(D.tclass ? D.tclass : ""),
            style: U(D.style),
            onClick: (k) => l(D)
          }, {
            default: h(() => [
              D.checkbox ? P((a(), d("input", {
                key: 0,
                type: "checkbox",
                class: $(D.class),
                "onUpdate:modelValue": s[0] || (s[0] = (k) => u.value = k)
              }, null, 2)), [
                [x, u.value]
              ]) : (a(), d("span", {
                key: 1,
                class: $(D.class),
                innerHTML: D.title
              }, null, 10, ce)),
              D.sort ? (a(), d("span", {
                key: 2,
                innerHTML: y(D.sort.n)
              }, null, 8, se)) : m("", !0)
            ]),
            _: 2
          }, 1032, ["class", "style", "onClick"])) : m("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }, 16));
  }
}), fe = ["href"], De = ["src"], ge = {
  name: "column"
}, q = /* @__PURE__ */ Object.assign(ge, {
  props: {
    filedData: Object,
    rowData: {
      type: Object,
      default: {}
    }
  },
  setup(e) {
    const t = e, u = () => {
      const n = {}, l = c("class"), r = c("title"), s = c("style"), D = c("id");
      return l && (n.class = l), D && (n.id = D), r && (n.title = r), s && (n.style = s), t.filedData.attrs && Object.assign(n, t.filedData.attrs), n;
    }, c = (n) => Object.prototype.hasOwnProperty.call(t.filedData, n) ? typeof t.filedData[n] == "function" ? t.filedData[n](t.rowData) : t.rowData[t.filedData[n]] ? t.rowData[t.filedData[n]] : t.filedData[n] : "", i = () => {
      typeof t.filedData.callback == "function" && t.filedData.callback(t.rowData, t.filedData);
    }, o = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0, y = () => typeof t.filedData.comp.data == "function" ? t.filedData.comp.data(t.rowData) : t.filedData.comp.data;
    return (n, l) => {
      const r = B("router-link");
      return o() ? (a(), d(g, { key: 0 }, [
        e.filedData.type === "link" ? (a(), d("a", H({
          key: 0,
          onClick: l[0] || (l[0] = (s) => i()),
          href: c("link")
        }, u()), [
          e.filedData.name ? (a(), d(g, { key: 0 }, [
            e.filedData.html ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: c("name")
            }, null, 8, ["innerHTML"])) : (a(), d(g, { key: 1 }, [
              C(j(c("name")), 1)
            ], 64))
          ], 64)) : m("", !0),
          p(n.$slots, "default")
        ], 16, fe)) : e.filedData.type === "img" ? (a(), d(g, { key: 1 }, [
          S("img", H(u(), {
            src: c("name"),
            onClick: l[1] || (l[1] = (s) => i())
          }), null, 16, De),
          p(n.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (a(), d(g, { key: 2 }, [
          P(S("input", H({
            onClick: l[2] || (l[2] = (s) => i()),
            "onUpdate:modelValue": l[3] || (l[3] = (s) => e.rowData.select = s),
            type: "checkbox"
          }, u()), null, 16), [
            [x, e.rowData.select]
          ]),
          p(n.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (a(), f(r, H({
          key: 3,
          to: c("link"),
          onClick: l[4] || (l[4] = (s) => i())
        }, u()), {
          default: h(() => [
            e.filedData.name ? (a(), d(g, { key: 0 }, [
              e.filedData.html ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "span"), {
                key: 0,
                innerHTML: c("name")
              }, null, 8, ["innerHTML"])) : (a(), d(g, { key: 1 }, [
                C(j(c("name")), 1)
              ], 64))
            ], 64)) : m("", !0),
            p(n.$slots, "default")
          ]),
          _: 3
        }, 16, ["to"])) : e.filedData.type === "comp" ? (a(), d(g, { key: 4 }, [
          e.filedData.comp ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "div"), M(H({ key: 0 }, u())), {
            default: h(() => [
              (a(), f(b(e.filedData.comp.name), {
                compData: y(),
                rowData: e.rowData
              }, null, 8, ["compData", "rowData"])),
              p(n.$slots, "default")
            ]),
            _: 3
          }, 16)) : m("", !0)
        ], 64)) : (a(), f(b(e.filedData.tag ? e.filedData.tag : "div"), H({
          key: 5,
          onClick: l[5] || (l[5] = (s) => i())
        }, u()), {
          default: h(() => [
            e.filedData.list ? (a(!0), d(g, { key: 0 }, O(e.filedData.list, (s) => (a(), f(q, {
              key: s.name,
              filedData: s,
              rowData: e.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : m("", !0),
            e.filedData.name ? (a(), d(g, { key: 1 }, [
              e.filedData.html ? (a(), f(b("span"), {
                key: 0,
                innerHTML: c("name")
              }, null, 8, ["innerHTML"])) : (a(), d(g, { key: 1 }, [
                C(j(c("name")), 1)
              ], 64))
            ], 64)) : m("", !0),
            p(n.$slots, "default")
          ]),
          _: 3
        }, 16))
      ], 64)) : m("", !0);
    };
  }
}), ye = {
  name: "Row"
}, be = /* @__PURE__ */ Object.assign(ye, {
  props: {
    tableData: Object,
    rowData: Object,
    filedData: Object
  },
  setup(e) {
    const t = e, u = () => {
      const o = {}, y = c("class"), n = c("title"), l = c("style"), r = c("id");
      return y && (o.class = y), r && (o.id = r), n && (o.title = n), l && (o.style = l), t.filedData.attrs && Object.assign(o, t.filedData.attrs), o;
    }, c = (o) => Object.prototype.hasOwnProperty.call(t.filedData, o) ? typeof t.filedData[o] == "function" ? t.filedData[o](t.rowData) : t.rowData[t.filedData[o]] ? t.rowData[t.filedData[o]] : t.filedData[o] : "", i = () => t.filedData.caseColon ? t.filedData.caseColon(t.rowData, t.filedData) : !0;
    return (o, y) => i() ? (a(), f(b(e.filedData.tag ? e.filedData.tag : "td"), M(H({ key: 0 }, u())), {
      default: h(() => [
        e.filedData.list ? (a(!0), d(g, { key: 0 }, O(e.filedData.list, (n) => (a(), f(q, {
          key: n,
          filedData: n,
          rowData: e.rowData
        }, null, 8, ["filedData", "rowData"]))), 128)) : m("", !0)
      ]),
      _: 1
    }, 16)) : m("", !0);
  }
}), me = {
  name: "LineTable"
}, he = /* @__PURE__ */ Object.assign(me, {
  props: {
    tableData: Object
  },
  setup(e) {
    const t = e, u = () => {
      const i = {}, o = c("class"), y = c("title"), n = c("style"), l = c("id");
      return o && (i.class = o), l && (i.id = l), y && (i.title = y), n && (i.style = n), t.tableData.line.attrs && Object.assign(i, t.tableData.line.attrs), i;
    }, c = (i) => Object.prototype.hasOwnProperty.call(t.tableData.line, i) ? typeof t.tableData.line[i] == "function" ? t.tableData.line[i](t.rowData) : t.tableData.line[i] : "";
    return (i, o) => (a(), f(b(e.tableData.line.tag ? e.tableData.line.tag : "tr"), M(N(u())), {
      default: h(() => [
        p(i.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
}), ke = {
  name: "ListBody"
}, He = /* @__PURE__ */ Object.assign(ke, {
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const t = e, u = () => {
      const i = {}, o = c("class"), y = c("title"), n = c("style"), l = c("id");
      return o && (i.class = o), l && (i.id = l), y && (i.title = y), n && (i.style = n), t.tableData.line.attrs && Object.assign(i, t.tableData.line.attrs), i;
    }, c = (i) => Object.prototype.hasOwnProperty.call(t.tableData.line, i) ? typeof t.tableData.line[i] == "function" ? t.tableData.line[i](t.rowData) : t.tableData.line[i] : "";
    return (i, o) => (a(!0), d(g, null, O(e.searchData, (y) => (a(), f(he, {
      key: y,
      tableData: e.tableData
    }, {
      default: h(() => [
        (a(!0), d(g, null, O(e.tableData.data, (n) => (a(), f(be, {
          key: n,
          rowData: y,
          filedData: n,
          tableData: e.tableData
        }, null, 8, ["rowData", "filedData", "tableData"]))), 128)),
        y.open ? (a(), f(b(e.tableData.line.tag ? e.tableData.line.tag : "tr"), M(H({ key: 0 }, u())), {
          default: h(() => [
            e.tableData.line.tag === "tr" ? (a(), f(b(i.filedData.tag ? i.filedData.tag : "td"), {
              key: 0,
              colspan: e.tableData.data.length
            }, {
              default: h(() => [
                (a(), f(b(y.component), { pageData: y }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1032, ["colspan"])) : (a(), f(b(i.filedData.tag ? i.filedData.tag : "div"), { key: 1 }, {
              default: h(() => [
                (a(), f(b(y.component), { pageData: y }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1040)) : m("", !0)
      ]),
      _: 2
    }, 1032, ["tableData"]))), 128));
  }
}), pe = {
  name: "SectionBody"
}, Se = /* @__PURE__ */ Object.assign(pe, {
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    return (t, u) => e.column.type === "comp" ? (a(), d(g, { key: 0 }, [
      e.column.name === "tableHead" ? (a(), f(de, {
        key: 0,
        tableData: e.column,
        searchData: e.searchData,
        preHandler: e.preHandler
      }, null, 8, ["tableData", "searchData", "preHandler"])) : e.column.name === "tableBody" ? (a(), f(He, {
        key: 1,
        tableData: e.column,
        searchData: e.searchData,
        preHandler: e.preHandler
      }, null, 8, ["tableData", "searchData", "preHandler"])) : e.column.name === "pagination" ? (a(), f(oe, {
        key: 2,
        searchData: e.searchData,
        preHandler: e.preHandler
      }, null, 8, ["searchData", "preHandler"])) : e.column.name === "autosearch" ? (a(), f(ee, {
        key: 3,
        autoSearch: e.column.data,
        runSearch: e.runSearch,
        preHandler: e.preHandler
      }, null, 8, ["autoSearch", "runSearch", "preHandler"])) : (a(), f(b(e.column.name), {
        key: 4,
        compData: e.column.data,
        rowData: {}
      }, null, 8, ["compData"])),
      e.column.list ? (a(), f(V, {
        key: 5,
        columns: e.column.list,
        searchData: e.searchData,
        preHandler: e.preHandler,
        runSearch: e.runSearch
      }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : m("", !0)
    ], 64)) : (a(), f(Y, {
      key: 1,
      filedData: e.column,
      rowData: {}
    }, {
      default: h(() => [
        e.column.list ? (a(), f(V, {
          key: 0,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler,
          runSearch: e.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : m("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}), $e = {
  name: "Section"
}, V = /* @__PURE__ */ Object.assign($e, {
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    const t = (u) => typeof u.caseColon == "function" ? u.caseColon() : !0;
    return (u, c) => (a(!0), d(g, null, O(e.columns, (i) => (a(), d(g, { key: i }, [
      t(i) ? (a(), f(Se, {
        key: 0,
        column: i,
        preHandler: e.preHandler,
        searchData: e.searchData,
        runSearch: e.runSearch
      }, null, 8, ["column", "preHandler", "searchData", "runSearch"])) : m("", !0)
    ], 64))), 128));
  }
}), we = {
  key: 1,
  class: "loader"
}, je = {
  name: "AutoPage"
}, Me = /* @__PURE__ */ Object.assign(je, {
  props: {
    pageSetting: Object,
    allData: {
      type: Array,
      default: []
    }
  },
  setup(e) {
    const t = e, u = F([]), c = F([]), i = (n) => n.replace(/Ğ/g, "\u011F").replace(/Ü/g, "\xFC").replace(/Ş/g, "\u015F").replace(/I/g, "\u0131").replace(/İ/g, "i").replace(/Ö/g, "\xF6").replace(/Ç/g, "\xE7").toLowerCase();
    A(t.allData, () => {
      o();
    }), A(t.pageSetting.preHandler.pagination, () => {
      t.pageSetting.preHandler.dynamic || o();
    });
    const o = () => {
      let n = t.pageSetting.preHandler.autoSearch && t.pageSetting.preHandler.autoSearch.value.length > 0 ? t.allData.filter((l) => {
        let r = [];
        return t.pageSetting.preHandler.autoSearch.alans.forEach((D) => {
          r.push(i(l[D].toString()));
        }), r.join(" ").indexOf(i(t.pageSetting.preHandler.autoSearch.value)) !== -1;
      }) : t.allData;
      u.splice(0, u.length), u.push(...n), y();
    }, y = () => {
      if (c.splice(0, c.length), t.pageSetting.preHandler.dynamic)
        c.push(...u);
      else {
        const n = u.length, l = t.pageSetting.preHandler.pagination;
        l.total = n;
        const r = Math.ceil(n / l.pageSize);
        l.page > r && r > 0 && (l.page = r);
        const s = (l.page - 1) * l.pageSize;
        c.push(...u.slice(s, s + l.pageSize));
      }
    };
    return J(() => {
      o();
    }), (n, l) => e.pageSetting.loader ? (a(), d("div", we, "Loader...")) : (a(), f(V, {
      key: 0,
      columns: e.pageSetting.pageData,
      preHandler: e.pageSetting.preHandler,
      searchData: c,
      runSearch: o
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
});
class Le {
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
      autoSearch: {
        value: "",
        alans: []
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
  Me as AutoPage,
  Le as createPageSetting
};
