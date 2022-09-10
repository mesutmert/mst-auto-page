import { resolveComponent as q, openBlock as t, createElementBlock as c, Fragment as D, normalizeClass as y, normalizeStyle as $, createBlock as o, resolveDynamicComponent as m, createTextVNode as T, toDisplayString as M, createCommentVNode as H, renderSlot as C, createElementVNode as w, withDirectives as A, vModelCheckbox as B, withCtx as p, renderList as v, vModelText as V, computed as N, unref as O, ref as E, watch as x, reactive as z, onMounted as I } from "vue";
import { useRoute as R, useRouter as U } from "vue-router";
const J = ["href", "title"], K = ["src"], G = ["title"], P = {
  __name: "ColonTable",
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(a) {
    const e = a, i = (d, u) => u === 1 ? Object.prototype.toString.call(d) === "[object Object]" : u === 2 ? Object.prototype.toString.call(d) === "[object Array]" : u === 3 ? Object.prototype.toString.call(d) === "[object String]" : u === 4 ? Object.prototype.toString.call(d) === "[object Number]" : u === 5 ? Object.prototype.toString.call(d) === "[object Null]" : !1, s = (d, u) => i(d, 1) ? Object.prototype.hasOwnProperty.call(d, u) : !1, g = () => {
      typeof e.filedData.callback == "function" && e.filedData.callback(e.rowData, e.filedData);
    }, k = () => e.filedData.caseColon ? e.filedData.caseColon(e.rowData, e.filedData) : !0, b = () => s(e.filedData, "link") ? typeof e.filedData.link == "function" ? e.filedData.link(e.rowData) : e.rowData[e.filedData.link] ? e.rowData[e.filedData.link] : e.filedData.link : "", l = () => s(e.filedData, "style") ? typeof e.filedData.style == "function" ? e.filedData.style(e.rowData) : e.rowData[e.filedData.style] ? e.rowData[e.filedData.style] : e.filedData.style : "", r = () => s(e.filedData, "title") ? typeof e.filedData.title == "function" ? e.filedData.title(e.rowData) : e.rowData[e.filedData.title] ? e.rowData[e.filedData.title] : e.filedData.title : "", n = () => s(e.filedData, "name") ? typeof e.filedData.name == "function" ? e.filedData.name(e.rowData) : e.rowData[e.filedData.name] ? e.rowData[e.filedData.name] : e.filedData.name : "", f = () => s(e.filedData, "class") ? typeof e.filedData.class == "function" ? e.filedData.class(e.rowData) : e.filedData.class : "", S = () => typeof e.filedData.comp.data == "function" ? e.filedData.comp.data(e.rowData) : e.filedData.comp.data;
    return (d, u) => {
      const j = q("router-link");
      return k() ? (t(), c(D, { key: 0 }, [
        a.filedData.type === "link" ? (t(), c("a", {
          key: 0,
          onClick: u[0] || (u[0] = (h) => g()),
          class: y(f()),
          href: b(),
          title: r(),
          style: $(l())
        }, [
          a.filedData.name ? (t(), c(D, { key: 0 }, [
            a.filedData.html ? (t(), o(m(a.filedData.tag ? a.filedData.tag : "span"), {
              key: 0,
              innerHTML: n()
            }, null, 8, ["innerHTML"])) : (t(), c(D, { key: 1 }, [
              T(M(n()), 1)
            ], 64))
          ], 64)) : H("", !0),
          C(d.$slots, "default")
        ], 14, J)) : a.filedData.type === "img" ? (t(), c(D, { key: 1 }, [
          w("img", {
            class: y(f()),
            src: n(),
            onClick: u[1] || (u[1] = (h) => g())
          }, null, 10, K),
          C(d.$slots, "default")
        ], 64)) : a.filedData.type === "checkbox" ? (t(), c(D, { key: 2 }, [
          A(w("input", {
            onClick: u[2] || (u[2] = (h) => g()),
            "onUpdate:modelValue": u[3] || (u[3] = (h) => a.rowData.select = h),
            type: "checkbox",
            class: y(f()),
            title: r(),
            style: $(l())
          }, null, 14, G), [
            [B, a.rowData.select]
          ]),
          C(d.$slots, "default")
        ], 64)) : a.filedData.type === "router-link" ? (t(), o(j, {
          key: 3,
          class: y(f()),
          to: b(),
          onClick: u[4] || (u[4] = (h) => g()),
          title: r(),
          style: $(l())
        }, {
          default: p(() => [
            a.filedData.name ? (t(), c(D, { key: 0 }, [
              a.filedData.html ? (t(), o(m(a.filedData.tag ? a.filedData.tag : "span"), {
                key: 0,
                innerHTML: n()
              }, null, 8, ["innerHTML"])) : (t(), c(D, { key: 1 }, [
                T(M(n()), 1)
              ], 64))
            ], 64)) : H("", !0),
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : a.filedData.type === "comp" ? (t(), c(D, { key: 4 }, [
          a.filedData.comp ? (t(), o(m(a.filedData.tag ? a.filedData.tag : "div"), {
            key: 0,
            class: y(f())
          }, {
            default: p(() => [
              (t(), o(m(a.filedData.comp.name), {
                compData: S()
              }, null, 8, ["compData"])),
              C(d.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : H("", !0)
        ], 64)) : (t(), o(m(a.filedData.tag ? a.filedData.tag : "div"), {
          key: 5,
          onClick: u[5] || (u[5] = (h) => g()),
          class: y(f()),
          title: r(),
          style: $(l())
        }, {
          default: p(() => [
            a.filedData.list && a.filedData.body ? (t(!0), c(D, { key: 0 }, v(a.filedData.list, (h) => (t(), o(P, {
              key: h.name,
              filedData: h,
              rowData: a.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : H("", !0),
            a.filedData.name ? (t(), c(D, { key: 1 }, [
              a.filedData.html ? (t(), o(m("span"), {
                key: 0,
                innerHTML: n()
              }, null, 8, ["innerHTML"])) : (t(), c(D, { key: 1 }, [
                T(M(n()), 1)
              ], 64))
            ], 64)) : H("", !0),
            C(d.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "title", "style"]))
      ], 64)) : H("", !0);
    };
  }
}, Q = ["placeholder"], W = {
  __name: "AutoSearch",
  props: {
    autoSearch: Object,
    runSearch: Function,
    preHandler: Object
  },
  setup(a) {
    return (e, i) => A((t(), c("input", {
      type: "text",
      "onUpdate:modelValue": i[0] || (i[0] = (s) => a.preHandler.autoSearch.value = s),
      onInput: i[1] || (i[1] = (s) => a.runSearch()),
      class: y(a.autoSearch.class),
      placeholder: a.autoSearch.placeholder ? a.autoSearch.placeholder : "Search"
    }, null, 42, Q)), [
      [V, a.preHandler.autoSearch.value]
    ]);
  }
}, X = { class: "col-12" }, Y = { class: "pagination float-left" }, Z = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, _ = ["onClick"], ee = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, ae = {
  __name: "Pagination",
  props: {
    preHandler: Object
  },
  setup(a) {
    const e = a, i = R(), s = U(), g = (r, n, f) => {
      if (r <= f)
        return [];
      var S, d = Math.ceil(r / f), u = Math.min(10, d);
      if (n > d)
        n = d, S = d - u;
      else {
        var j = Math.ceil(u / 2);
        S = n + j > d ? d + 1 - u : j + 1 > n ? 1 : n - j;
      }
      S = Math.max(1, S);
      var h = Array.apply(null, new Array(u)).map(function(se, F) {
        return S + F++;
      });
      return h.indexOf(1) === -1 && (h.shift(), h.unshift(1)), h.indexOf(d) === -1 && h.push(d), h;
    }, k = async (r) => {
      if (e.preHandler.dynamic) {
        if (typeof e.preHandler.tableCahngePage == "function") {
          let n = JSON.parse(JSON.stringify(i.query));
          n.page = r, await s.push({ name: i.name, query: n }), i.query.page = r, e.preHandler.pagination.page = r, e.preHandler.tableCahngePage(r, i.query);
        }
      } else
        e.preHandler.pagination.page = r, e.preHandler.tableCahngePage(r, i.query);
    }, b = N(() => g(e.preHandler.pagination.total, e.preHandler.pagination.page, e.preHandler.pagination.pageSize)), l = N(() => Math.ceil(e.preHandler.pagination.total / e.preHandler.pagination.pageSize));
    return (r, n) => O(l) > 0 ? (t(), c("div", {
      key: 0,
      class: y(["row mt-2", { disabledbutton: e.preHandler.loader }])
    }, [
      w("div", X, [
        w("ul", Y, [
          w("li", {
            class: y(["page-item", { disabled: a.preHandler.pagination.page == 1 }])
          }, [
            a.preHandler.pagination.page > 1 ? (t(), c("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: n[0] || (n[0] = (f) => k(parseInt(a.preHandler.pagination.page) - 1))
            }, "prev")) : (t(), c("a", Z, "Prev"))
          ], 2),
          (t(!0), c(D, null, v(O(b), (f) => (t(), c("li", {
            class: y(["page-item", { active: a.preHandler.pagination.page == f }]),
            key: f
          }, [
            w("a", {
              class: "page-link",
              href: "javascript:;",
              onClick: (S) => k(f)
            }, M(f), 9, _)
          ], 2))), 128)),
          O(l) > 0 ? (t(), c("li", {
            key: 0,
            class: y(["page-item", { disabled: a.preHandler.pagination.page >= O(l) }])
          }, [
            a.preHandler.pagination.page < O(l) ? (t(), c("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: n[1] || (n[1] = (f) => k(parseInt(a.preHandler.pagination.page) + 1))
            }, " Next ")) : (t(), c("a", ee, "Next"))
          ], 2)) : H("", !0)
        ])
      ])
    ], 2)) : H("", !0);
  }
}, te = ["innerHTML"], ne = ["innerHTML"], le = {
  __name: "AutoTableHeader",
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(a) {
    const e = a, i = E(!1);
    x(i, (l, r) => {
      e.searchData.forEach((n) => {
        n.select = l;
      });
    });
    const s = () => {
      var l = "";
      e.preHandler.sorting.t === 1 ? l = e.preHandler.sorting.r ? 'a["' + e.preHandler.sorting.n + '"].localeCompare(b["' + e.preHandler.sorting.n + '"])' : 'b["' + e.preHandler.sorting.n + '"].localeCompare(a["' + e.preHandler.sorting.n + '"])' : e.preHandler.sorting.t === 2 && (l = e.preHandler.sorting.r ? 'a["' + e.preHandler.sorting.n + '"] - b["' + e.preHandler.sorting.n + '"]' : 'b["' + e.preHandler.sorting.n + '"] - a["' + e.preHandler.sorting.n + '"]');
      let r = "return " + l;
      return new Function("a,b", r);
    }, g = (l) => e.preHandler.sorting.n === l ? e.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", k = (l) => l && l.caseColon ? l.caseColon(l) : !0, b = (l) => {
      if (l.sort) {
        e.preHandler.sorting.r = e.preHandler.sorting.n === l.sort.n && !e.preHandler.sorting.r, e.preHandler.sorting.n = l.sort.n, e.preHandler.sorting.t = l.sort.t;
        const r = s();
        e.searchData.sort(r);
      }
    };
    return (l, r) => (t(), o(m(a.tableData.line ? a.tableData.line.tag : "tr"), {
      class: y(a.tableData.line.class)
    }, {
      default: p(() => [
        (t(!0), c(D, null, v(a.tableData.data, (n) => (t(), c(D, {
          key: n.name
        }, [
          k(n) ? (t(), o(m(n.tag ? n.tag : "th"), {
            key: 0,
            class: y(n.tclass ? n.tclass : ""),
            style: $(n.style),
            onClick: (f) => b(n)
          }, {
            default: p(() => [
              n.checkbox ? A((t(), c("input", {
                key: 0,
                type: "checkbox",
                class: y(n.class),
                "onUpdate:modelValue": r[0] || (r[0] = (f) => i.value = f)
              }, null, 2)), [
                [B, i.value]
              ]) : (t(), c("span", {
                key: 1,
                class: y(n.class),
                innerHTML: n.title
              }, null, 10, te)),
              n.sort ? (t(), c("span", {
                key: 2,
                innerHTML: g(n.sort.n)
              }, null, 8, ne)) : H("", !0)
            ]),
            _: 2
          }, 1032, ["class", "style", "onClick"])) : H("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}, re = {
  __name: "RowTable",
  props: {
    tableData: Object,
    rowData: Object,
    filedData: Object
  },
  setup(a) {
    const e = a, i = () => e.filedData.caseColon ? e.filedData.caseColon(e.rowData, e.filedData) : !0;
    return (s, g) => i() ? (t(), o(m(a.filedData.tag ? a.filedData.tag : "td"), {
      key: 0,
      class: y(a.filedData.class)
    }, {
      default: p(() => [
        a.filedData.list ? (t(!0), c(D, { key: 0 }, v(a.filedData.list, (k, b) => (t(), o(P, {
          key: b + "-body",
          filedData: k,
          rowData: a.rowData
        }, null, 8, ["filedData", "rowData"]))), 128)) : H("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : H("", !0);
  }
}, ie = {
  __name: "AutoTableBody",
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(a) {
    return (e, i) => (t(!0), c(D, null, v(a.searchData, (s) => (t(), o(m(a.tableData.line.tag ? a.tableData.line.tag : "tr"), {
      key: s,
      class: y(a.tableData.line.class)
    }, {
      default: p(() => [
        (t(!0), c(D, null, v(a.tableData.data, (g) => (t(), o(re, {
          key: g,
          rowData: s,
          filedData: g,
          tableData: a.tableData
        }, null, 8, ["rowData", "filedData", "tableData"]))), 128)),
        s.open ? (t(), o(m(a.tableData.line.tag ? a.tableData.line.tag : "tr"), {
          key: 0,
          class: y(a.tableData.line.class)
        }, {
          default: p(() => [
            a.tableData.line.tag === "tr" || !a.tableData.line.tag ? (t(), o(m(e.filedData.tag ? e.filedData.tag : "td"), { key: 0 }, {
              default: p(() => [
                (t(), o(m(s.component), { pageData: s }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024)) : (t(), o(m(e.filedData.tag ? e.filedData.tag : "td"), { key: 1 }, {
              default: p(() => [
                (t(), o(m(s.component), { pageData: s }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1032, ["class"])) : H("", !0)
      ]),
      _: 2
    }, 1032, ["class"]))), 128));
  }
}, ce = {
  __name: "SectionBody",
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(a) {
    const e = a, i = () => Object.prototype.hasOwnProperty.call(e.column, "class") ? typeof e.column.class == "function" ? e.column.class(e.rowData) : e.column.class : "";
    return (s, g) => a.column.type === "comp" ? (t(), o(m(a.column.tag ? a.column.tag : "div"), {
      key: 0,
      class: y(i())
    }, {
      default: p(() => [
        a.column.name === "tableHead" ? (t(), o(le, {
          key: 0,
          tableData: a.column,
          searchData: a.searchData,
          preHandler: a.preHandler
        }, null, 8, ["tableData", "searchData", "preHandler"])) : a.column.name === "tableBody" ? (t(), o(ie, {
          key: 1,
          tableData: a.column,
          searchData: a.searchData,
          preHandler: a.preHandler
        }, null, 8, ["tableData", "searchData", "preHandler"])) : a.column.name === "pagination" ? (t(), o(ae, {
          key: 2,
          searchData: a.searchData,
          preHandler: a.preHandler
        }, null, 8, ["searchData", "preHandler"])) : a.column.name === "autosearch" ? (t(), o(W, {
          key: 3,
          autoSearch: a.column.data,
          runSearch: a.runSearch,
          preHandler: a.preHandler
        }, null, 8, ["autoSearch", "runSearch", "preHandler"])) : (t(), o(m(a.column.name), {
          key: 4,
          compData: a.column.data
        }, null, 8, ["compData"])),
        a.column.list ? (t(), o(L, {
          key: 5,
          columns: a.column.list,
          searchData: a.searchData,
          preHandler: a.preHandler,
          runSearch: a.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : H("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : (t(), o(P, {
      key: 1,
      filedData: a.column,
      rowData: {}
    }, {
      default: p(() => [
        a.column.list ? (t(), o(L, {
          key: 0,
          columns: a.column.list,
          searchData: a.searchData,
          preHandler: a.preHandler,
          runSearch: a.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : H("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}, L = {
  __name: "Section",
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(a) {
    const e = (i) => typeof i.caseColon == "function" ? i.caseColon() : !0;
    return (i, s) => (t(!0), c(D, null, v(a.columns, (g) => (t(), c(D, { key: g }, [
      e(g) ? (t(), o(ce, {
        key: 0,
        column: g,
        preHandler: a.preHandler,
        searchData: a.searchData,
        runSearch: a.runSearch
      }, null, 8, ["column", "preHandler", "searchData", "runSearch"])) : H("", !0)
    ], 64))), 128));
  }
}, oe = {
  key: 1,
  class: "loader"
}, fe = {
  __name: "index",
  props: {
    pageSetting: Object,
    allData: {
      type: Array,
      default: []
    }
  },
  setup(a) {
    const e = a, i = z([]), s = z([]), g = (l) => l.replace(/Ğ/g, "\u011F").replace(/Ü/g, "\xFC").replace(/Ş/g, "\u015F").replace(/I/g, "\u0131").replace(/İ/g, "i").replace(/Ö/g, "\xF6").replace(/Ç/g, "\xE7").toLowerCase();
    x(e.allData, () => {
      k();
    }), x(e.pageSetting.preHandler.pagination, () => {
      e.pageSetting.preHandler.dynamic || k();
    });
    const k = () => {
      let l = e.pageSetting.preHandler.autoSearch && e.pageSetting.preHandler.autoSearch.value.length > 0 ? e.allData.filter((r) => {
        let n = [];
        return e.pageSetting.preHandler.autoSearch.alans.forEach((S) => {
          n.push(g(r[S].toString()));
        }), n.join(" ").indexOf(g(e.pageSetting.preHandler.autoSearch.value)) !== -1;
      }) : e.allData;
      i.splice(0, i.length), i.push(...l), b();
    }, b = () => {
      if (s.splice(0, s.length), e.pageSetting.preHandler.dynamic)
        s.push(...i);
      else {
        const l = i.length, r = e.pageSetting.preHandler.pagination;
        r.total = l;
        const n = Math.ceil(l / r.pageSize);
        r.page > n && n > 0 && (r.page = n);
        const f = (r.page - 1) * r.pageSize;
        s.push(...i.slice(f, f + r.pageSize));
      }
    };
    return I(() => {
      k();
    }), (l, r) => a.pageSetting.loader ? (t(), c("div", oe, "Loader...")) : (t(), o(L, {
      key: 0,
      columns: a.pageSetting.pageData,
      preHandler: a.pageSetting.preHandler,
      searchData: s,
      runSearch: k
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
};
class ge {
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
  fe as AutoPage,
  ge as createPageSetting
};
