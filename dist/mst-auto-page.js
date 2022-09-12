import { resolveComponent as z, openBlock as t, createElementBlock as r, Fragment as D, normalizeClass as y, normalizeStyle as j, createBlock as s, resolveDynamicComponent as k, createTextVNode as L, toDisplayString as v, createCommentVNode as h, renderSlot as S, createElementVNode as $, withDirectives as T, vModelCheckbox as P, withCtx as H, vModelText as q, computed as x, unref as M, renderList as C, ref as E, watch as A, reactive as F, onMounted as I } from "vue";
import { useRoute as U, useRouter as R } from "vue-router";
const J = ["href", "title"], K = ["src"], G = ["title"], Q = {
  name: "column"
}, W = /* @__PURE__ */ Object.assign(Q, {
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(a) {
    const e = a, u = (o, n) => n === 1 ? Object.prototype.toString.call(o) === "[object Object]" : n === 2 ? Object.prototype.toString.call(o) === "[object Array]" : n === 3 ? Object.prototype.toString.call(o) === "[object String]" : n === 4 ? Object.prototype.toString.call(o) === "[object Number]" : n === 5 ? Object.prototype.toString.call(o) === "[object Null]" : !1, d = (o, n) => u(o, 1) ? Object.prototype.hasOwnProperty.call(o, n) : !1, g = () => {
      typeof e.filedData.callback == "function" && e.filedData.callback(e.rowData, e.filedData);
    }, b = () => e.filedData.caseColon ? e.filedData.caseColon(e.rowData, e.filedData) : !0, p = () => d(e.filedData, "link") ? typeof e.filedData.link == "function" ? e.filedData.link(e.rowData) : e.rowData[e.filedData.link] ? e.rowData[e.filedData.link] : e.filedData.link : "", i = () => d(e.filedData, "style") ? typeof e.filedData.style == "function" ? e.filedData.style(e.rowData) : e.rowData[e.filedData.style] ? e.rowData[e.filedData.style] : e.filedData.style : "", c = () => d(e.filedData, "title") ? typeof e.filedData.title == "function" ? e.filedData.title(e.rowData) : e.rowData[e.filedData.title] ? e.rowData[e.filedData.title] : e.filedData.title : "", l = () => d(e.filedData, "name") ? typeof e.filedData.name == "function" ? e.filedData.name(e.rowData) : e.rowData[e.filedData.name] ? e.rowData[e.filedData.name] : e.filedData.name : "", f = () => d(e.filedData, "class") ? typeof e.filedData.class == "function" ? e.filedData.class(e.rowData) : e.filedData.class : "", w = () => typeof e.filedData.comp.data == "function" ? e.filedData.comp.data(e.rowData) : e.filedData.comp.data;
    return (o, n) => {
      const O = z("router-link");
      return b() ? (t(), r(D, { key: 0 }, [
        a.filedData.type === "link" ? (t(), r("a", {
          key: 0,
          onClick: n[0] || (n[0] = (m) => g()),
          class: y(f()),
          href: p(),
          title: c(),
          style: j(i())
        }, [
          a.filedData.name ? (t(), r(D, { key: 0 }, [
            a.filedData.html ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "span"), {
              key: 0,
              innerHTML: l()
            }, null, 8, ["innerHTML"])) : (t(), r(D, { key: 1 }, [
              L(v(l()), 1)
            ], 64))
          ], 64)) : h("", !0),
          S(o.$slots, "default")
        ], 14, J)) : a.filedData.type === "img" ? (t(), r(D, { key: 1 }, [
          $("img", {
            class: y(f()),
            src: l(),
            onClick: n[1] || (n[1] = (m) => g())
          }, null, 10, K),
          S(o.$slots, "default")
        ], 64)) : a.filedData.type === "checkbox" ? (t(), r(D, { key: 2 }, [
          T($("input", {
            onClick: n[2] || (n[2] = (m) => g()),
            "onUpdate:modelValue": n[3] || (n[3] = (m) => a.rowData.select = m),
            type: "checkbox",
            class: y(f()),
            title: c(),
            style: j(i())
          }, null, 14, G), [
            [P, a.rowData.select]
          ]),
          S(o.$slots, "default")
        ], 64)) : a.filedData.type === "router-link" ? (t(), s(O, {
          key: 3,
          class: y(f()),
          to: p(),
          onClick: n[4] || (n[4] = (m) => g()),
          title: c(),
          style: j(i())
        }, {
          default: H(() => [
            a.filedData.name ? (t(), r(D, { key: 0 }, [
              a.filedData.html ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "span"), {
                key: 0,
                innerHTML: l()
              }, null, 8, ["innerHTML"])) : (t(), r(D, { key: 1 }, [
                L(v(l()), 1)
              ], 64))
            ], 64)) : h("", !0),
            S(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : a.filedData.type === "comp" ? (t(), r(D, { key: 4 }, [
          a.filedData.comp ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "div"), {
            key: 0,
            class: y(f())
          }, {
            default: H(() => [
              (t(), s(k(a.filedData.comp.name), {
                compData: w(),
                rowData: a.rowData
              }, null, 8, ["compData", "rowData"])),
              S(o.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : h("", !0)
        ], 64)) : (t(), s(k(a.filedData.tag ? a.filedData.tag : "div"), {
          key: 5,
          onClick: n[5] || (n[5] = (m) => g()),
          class: y(f()),
          title: c(),
          style: j(i())
        }, {
          default: H(() => [
            a.filedData.name ? (t(), r(D, { key: 0 }, [
              a.filedData.html ? (t(), s(k("span"), {
                key: 0,
                innerHTML: l()
              }, null, 8, ["innerHTML"])) : (t(), r(D, { key: 1 }, [
                L(v(l()), 1)
              ], 64))
            ], 64)) : h("", !0),
            S(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "title", "style"]))
      ], 64)) : h("", !0);
    };
  }
}), X = ["placeholder"], Y = {
  name: "AutoSearch"
}, Z = /* @__PURE__ */ Object.assign(Y, {
  props: {
    autoSearch: Object,
    runSearch: Function,
    preHandler: Object
  },
  setup(a) {
    return (e, u) => T((t(), r("input", {
      type: "text",
      "onUpdate:modelValue": u[0] || (u[0] = (d) => a.preHandler.autoSearch.value = d),
      onInput: u[1] || (u[1] = (d) => a.runSearch()),
      class: y(a.autoSearch.class),
      placeholder: a.autoSearch.placeholder ? a.autoSearch.placeholder : "Search"
    }, null, 42, X)), [
      [q, a.preHandler.autoSearch.value]
    ]);
  }
}), _ = { class: "col-12" }, ee = { class: "pagination float-left" }, ae = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, te = ["onClick"], le = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, ne = {
  name: "Pagination"
}, re = /* @__PURE__ */ Object.assign(ne, {
  props: {
    preHandler: Object
  },
  setup(a) {
    const e = a, u = U(), d = R(), g = (c, l, f) => {
      if (c <= f)
        return [];
      var w, o = Math.ceil(c / f), n = Math.min(10, o);
      if (l > o)
        l = o, w = o - n;
      else {
        var O = Math.ceil(n / 2);
        w = l + O > o ? o + 1 - n : O + 1 > l ? 1 : l - O;
      }
      w = Math.max(1, w);
      var m = Array.apply(null, new Array(n)).map(function($e, V) {
        return w + V++;
      });
      return m.indexOf(1) === -1 && (m.shift(), m.unshift(1)), m.indexOf(o) === -1 && m.push(o), m;
    }, b = async (c) => {
      if (e.preHandler.dynamic) {
        if (typeof e.preHandler.tableCahngePage == "function") {
          let l = JSON.parse(JSON.stringify(u.query));
          l.page = c, await d.push({ name: u.name, query: l }), u.query.page = c, e.preHandler.pagination.page = c, e.preHandler.tableCahngePage(c, u.query);
        }
      } else
        e.preHandler.pagination.page = c, e.preHandler.tableCahngePage(c, u.query);
    }, p = x(() => g(e.preHandler.pagination.total, e.preHandler.pagination.page, e.preHandler.pagination.pageSize)), i = x(() => Math.ceil(e.preHandler.pagination.total / e.preHandler.pagination.pageSize));
    return (c, l) => M(i) > 0 ? (t(), r("div", {
      key: 0,
      class: y(["row mt-2", { disabledbutton: e.preHandler.loader }])
    }, [
      $("div", _, [
        $("ul", ee, [
          $("li", {
            class: y(["page-item", { disabled: a.preHandler.pagination.page == 1 }])
          }, [
            a.preHandler.pagination.page > 1 ? (t(), r("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: l[0] || (l[0] = (f) => b(parseInt(a.preHandler.pagination.page) - 1))
            }, "prev")) : (t(), r("a", ae, "Prev"))
          ], 2),
          (t(!0), r(D, null, C(M(p), (f) => (t(), r("li", {
            class: y(["page-item", { active: a.preHandler.pagination.page == f }]),
            key: f
          }, [
            $("a", {
              class: "page-link",
              href: "javascript:;",
              onClick: (w) => b(f)
            }, v(f), 9, te)
          ], 2))), 128)),
          M(i) > 0 ? (t(), r("li", {
            key: 0,
            class: y(["page-item", { disabled: a.preHandler.pagination.page >= M(i) }])
          }, [
            a.preHandler.pagination.page < M(i) ? (t(), r("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: l[1] || (l[1] = (f) => b(parseInt(a.preHandler.pagination.page) + 1))
            }, " Next ")) : (t(), r("a", le, "Next"))
          ], 2)) : h("", !0)
        ])
      ])
    ], 2)) : h("", !0);
  }
}), ie = ["innerHTML"], oe = ["innerHTML"], ce = {
  name: "ListHeader"
}, se = /* @__PURE__ */ Object.assign(ce, {
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(a) {
    const e = a, u = E(!1);
    A(u, (i, c) => {
      e.searchData.forEach((l) => {
        l.select = i;
      });
    });
    const d = () => {
      var i = "";
      e.preHandler.sorting.t === 1 ? i = e.preHandler.sorting.r ? 'a["' + e.preHandler.sorting.n + '"].localeCompare(b["' + e.preHandler.sorting.n + '"])' : 'b["' + e.preHandler.sorting.n + '"].localeCompare(a["' + e.preHandler.sorting.n + '"])' : e.preHandler.sorting.t === 2 && (i = e.preHandler.sorting.r ? 'a["' + e.preHandler.sorting.n + '"] - b["' + e.preHandler.sorting.n + '"]' : 'b["' + e.preHandler.sorting.n + '"] - a["' + e.preHandler.sorting.n + '"]');
      let c = "return " + i;
      return new Function("a,b", c);
    }, g = (i) => e.preHandler.sorting.n === i ? e.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", b = (i) => i && i.caseColon ? i.caseColon(i) : !0, p = (i) => {
      if (i.sort) {
        e.preHandler.sorting.r = e.preHandler.sorting.n === i.sort.n && !e.preHandler.sorting.r, e.preHandler.sorting.n = i.sort.n, e.preHandler.sorting.t = i.sort.t;
        const c = d();
        e.searchData.sort(c);
      }
    };
    return (i, c) => (t(), s(k(a.tableData.line ? a.tableData.line.tag : "tr"), {
      class: y(a.tableData.line.class)
    }, {
      default: H(() => [
        (t(!0), r(D, null, C(a.tableData.data, (l) => (t(), r(D, {
          key: l.name
        }, [
          b(l) ? (t(), s(k(l.tag ? l.tag : "th"), {
            key: 0,
            class: y(l.tclass ? l.tclass : ""),
            style: j(l.style),
            onClick: (f) => p(l)
          }, {
            default: H(() => [
              l.checkbox ? T((t(), r("input", {
                key: 0,
                type: "checkbox",
                class: y(l.class),
                "onUpdate:modelValue": c[0] || (c[0] = (f) => u.value = f)
              }, null, 2)), [
                [P, u.value]
              ]) : (t(), r("span", {
                key: 1,
                class: y(l.class),
                innerHTML: l.title
              }, null, 10, ie)),
              l.sort ? (t(), r("span", {
                key: 2,
                innerHTML: g(l.sort.n)
              }, null, 8, oe)) : h("", !0)
            ]),
            _: 2
          }, 1032, ["class", "style", "onClick"])) : h("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }, 8, ["class"]));
  }
}), ue = ["href", "title"], de = ["src"], fe = ["title"], De = {
  name: "column"
}, B = /* @__PURE__ */ Object.assign(De, {
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(a) {
    const e = a, u = (o, n) => n === 1 ? Object.prototype.toString.call(o) === "[object Object]" : n === 2 ? Object.prototype.toString.call(o) === "[object Array]" : n === 3 ? Object.prototype.toString.call(o) === "[object String]" : n === 4 ? Object.prototype.toString.call(o) === "[object Number]" : n === 5 ? Object.prototype.toString.call(o) === "[object Null]" : !1, d = (o, n) => u(o, 1) ? Object.prototype.hasOwnProperty.call(o, n) : !1, g = () => {
      typeof e.filedData.callback == "function" && e.filedData.callback(e.rowData, e.filedData);
    }, b = () => e.filedData.caseColon ? e.filedData.caseColon(e.rowData, e.filedData) : !0, p = () => d(e.filedData, "link") ? typeof e.filedData.link == "function" ? e.filedData.link(e.rowData) : e.rowData[e.filedData.link] ? e.rowData[e.filedData.link] : e.filedData.link : "", i = () => d(e.filedData, "style") ? typeof e.filedData.style == "function" ? e.filedData.style(e.rowData) : e.rowData[e.filedData.style] ? e.rowData[e.filedData.style] : e.filedData.style : "", c = () => d(e.filedData, "title") ? typeof e.filedData.title == "function" ? e.filedData.title(e.rowData) : e.rowData[e.filedData.title] ? e.rowData[e.filedData.title] : e.filedData.title : "", l = () => d(e.filedData, "name") ? typeof e.filedData.name == "function" ? e.filedData.name(e.rowData) : e.rowData[e.filedData.name] ? e.rowData[e.filedData.name] : e.filedData.name : "", f = () => d(e.filedData, "class") ? typeof e.filedData.class == "function" ? e.filedData.class(e.rowData) : e.filedData.class : "", w = () => typeof e.filedData.comp.data == "function" ? e.filedData.comp.data(e.rowData) : e.filedData.comp.data;
    return (o, n) => {
      const O = z("router-link");
      return b() ? (t(), r(D, { key: 0 }, [
        a.filedData.type === "link" ? (t(), r("a", {
          key: 0,
          onClick: n[0] || (n[0] = (m) => g()),
          class: y(f()),
          href: p(),
          title: c(),
          style: j(i())
        }, [
          a.filedData.name ? (t(), r(D, { key: 0 }, [
            a.filedData.html ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "span"), {
              key: 0,
              innerHTML: l()
            }, null, 8, ["innerHTML"])) : (t(), r(D, { key: 1 }, [
              L(v(l()), 1)
            ], 64))
          ], 64)) : h("", !0),
          S(o.$slots, "default")
        ], 14, ue)) : a.filedData.type === "img" ? (t(), r(D, { key: 1 }, [
          $("img", {
            class: y(f()),
            src: l(),
            onClick: n[1] || (n[1] = (m) => g())
          }, null, 10, de),
          S(o.$slots, "default")
        ], 64)) : a.filedData.type === "checkbox" ? (t(), r(D, { key: 2 }, [
          T($("input", {
            onClick: n[2] || (n[2] = (m) => g()),
            "onUpdate:modelValue": n[3] || (n[3] = (m) => a.rowData.select = m),
            type: "checkbox",
            class: y(f()),
            title: c(),
            style: j(i())
          }, null, 14, fe), [
            [P, a.rowData.select]
          ]),
          S(o.$slots, "default")
        ], 64)) : a.filedData.type === "router-link" ? (t(), s(O, {
          key: 3,
          class: y(f()),
          to: p(),
          onClick: n[4] || (n[4] = (m) => g()),
          title: c(),
          style: j(i())
        }, {
          default: H(() => [
            a.filedData.name ? (t(), r(D, { key: 0 }, [
              a.filedData.html ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "span"), {
                key: 0,
                innerHTML: l()
              }, null, 8, ["innerHTML"])) : (t(), r(D, { key: 1 }, [
                L(v(l()), 1)
              ], 64))
            ], 64)) : h("", !0),
            S(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : a.filedData.type === "comp" ? (t(), r(D, { key: 4 }, [
          a.filedData.comp ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "div"), {
            key: 0,
            class: y(f())
          }, {
            default: H(() => [
              (t(), s(k(a.filedData.comp.name), {
                compData: w(),
                rowData: a.rowData
              }, null, 8, ["compData", "rowData"])),
              S(o.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : h("", !0)
        ], 64)) : (t(), s(k(a.filedData.tag ? a.filedData.tag : "div"), {
          key: 5,
          onClick: n[5] || (n[5] = (m) => g()),
          class: y(f()),
          title: c(),
          style: j(i())
        }, {
          default: H(() => [
            a.filedData.list ? (t(!0), r(D, { key: 0 }, C(a.filedData.list, (m) => (t(), s(B, {
              key: m.name,
              filedData: m,
              rowData: a.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : h("", !0),
            a.filedData.name ? (t(), r(D, { key: 1 }, [
              a.filedData.html ? (t(), s(k("span"), {
                key: 0,
                innerHTML: l()
              }, null, 8, ["innerHTML"])) : (t(), r(D, { key: 1 }, [
                L(v(l()), 1)
              ], 64))
            ], 64)) : h("", !0),
            S(o.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "title", "style"]))
      ], 64)) : h("", !0);
    };
  }
}), ge = {
  name: "Row"
}, ye = /* @__PURE__ */ Object.assign(ge, {
  props: {
    tableData: Object,
    rowData: Object,
    filedData: Object
  },
  setup(a) {
    const e = a, u = () => e.filedData.caseColon ? e.filedData.caseColon(e.rowData, e.filedData) : !0;
    return (d, g) => u() ? (t(), s(k(a.filedData.tag ? a.filedData.tag : "td"), {
      key: 0,
      class: y(a.filedData.class)
    }, {
      default: H(() => [
        a.filedData.list ? (t(!0), r(D, { key: 0 }, C(a.filedData.list, (b, p) => (t(), s(B, {
          key: p + "-body",
          filedData: b,
          rowData: a.rowData
        }, null, 8, ["filedData", "rowData"]))), 128)) : h("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : h("", !0);
  }
}), me = {
  name: "LineTable"
}, ke = /* @__PURE__ */ Object.assign(me, {
  props: {
    tableData: Object
  },
  setup(a) {
    return (e, u) => (t(), s(k(a.tableData.line.tag ? a.tableData.line.tag : "tr"), {
      class: y(a.tableData.line.class)
    }, {
      default: H(() => [
        S(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
}), he = {
  name: "ListBody"
}, be = /* @__PURE__ */ Object.assign(he, {
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(a) {
    return (e, u) => (t(!0), r(D, null, C(a.searchData, (d) => (t(), s(ke, {
      key: d,
      tableData: a.tableData
    }, {
      default: H(() => [
        (t(!0), r(D, null, C(a.tableData.data, (g) => (t(), s(ye, {
          key: g,
          rowData: d,
          filedData: g,
          tableData: a.tableData
        }, null, 8, ["rowData", "filedData", "tableData"]))), 128)),
        d.open ? (t(), s(k(a.tableData.line.tag ? a.tableData.line.tag : "tr"), {
          key: 0,
          class: y(a.tableData.line.class)
        }, {
          default: H(() => [
            a.tableData.line.tag === "tr" || !a.tableData.line.tag ? (t(), s(k(e.filedData.tag ? e.filedData.tag : "td"), { key: 0 }, {
              default: H(() => [
                (t(), s(k(d.component), { pageData: d }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024)) : (t(), s(k(e.filedData.tag ? e.filedData.tag : "td"), { key: 1 }, {
              default: H(() => [
                (t(), s(k(d.component), { pageData: d }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1032, ["class"])) : h("", !0)
      ]),
      _: 2
    }, 1032, ["tableData"]))), 128));
  }
}), He = {
  name: "SectionBody"
}, pe = /* @__PURE__ */ Object.assign(He, {
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(a) {
    return (e, u) => a.column.type === "comp" ? (t(), r(D, { key: 0 }, [
      a.column.name === "tableHead" ? (t(), s(se, {
        key: 0,
        tableData: a.column,
        searchData: a.searchData,
        preHandler: a.preHandler
      }, null, 8, ["tableData", "searchData", "preHandler"])) : a.column.name === "tableBody" ? (t(), s(be, {
        key: 1,
        tableData: a.column,
        searchData: a.searchData,
        preHandler: a.preHandler
      }, null, 8, ["tableData", "searchData", "preHandler"])) : a.column.name === "pagination" ? (t(), s(re, {
        key: 2,
        searchData: a.searchData,
        preHandler: a.preHandler
      }, null, 8, ["searchData", "preHandler"])) : a.column.name === "autosearch" ? (t(), s(Z, {
        key: 3,
        autoSearch: a.column.data,
        runSearch: a.runSearch,
        preHandler: a.preHandler
      }, null, 8, ["autoSearch", "runSearch", "preHandler"])) : (t(), s(k(a.column.name), {
        key: 4,
        compData: a.column.data,
        rowData: {}
      }, null, 8, ["compData"])),
      a.column.list ? (t(), s(N, {
        key: 5,
        columns: a.column.list,
        searchData: a.searchData,
        preHandler: a.preHandler,
        runSearch: a.runSearch
      }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : h("", !0)
    ], 64)) : (t(), s(W, {
      key: 1,
      filedData: a.column,
      rowData: {}
    }, {
      default: H(() => [
        a.column.list ? (t(), s(N, {
          key: 0,
          columns: a.column.list,
          searchData: a.searchData,
          preHandler: a.preHandler,
          runSearch: a.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : h("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}), Se = {
  name: "Section"
}, N = /* @__PURE__ */ Object.assign(Se, {
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(a) {
    const e = (u) => typeof u.caseColon == "function" ? u.caseColon() : !0;
    return (u, d) => (t(!0), r(D, null, C(a.columns, (g) => (t(), r(D, { key: g }, [
      e(g) ? (t(), s(pe, {
        key: 0,
        column: g,
        preHandler: a.preHandler,
        searchData: a.searchData,
        runSearch: a.runSearch
      }, null, 8, ["column", "preHandler", "searchData", "runSearch"])) : h("", !0)
    ], 64))), 128));
  }
}), we = {
  key: 1,
  class: "loader"
}, je = {
  name: "AutoPage"
}, Ce = /* @__PURE__ */ Object.assign(je, {
  props: {
    pageSetting: Object,
    allData: {
      type: Array,
      default: []
    }
  },
  setup(a) {
    const e = a, u = F([]), d = F([]), g = (i) => i.replace(/Ğ/g, "\u011F").replace(/Ü/g, "\xFC").replace(/Ş/g, "\u015F").replace(/I/g, "\u0131").replace(/İ/g, "i").replace(/Ö/g, "\xF6").replace(/Ç/g, "\xE7").toLowerCase();
    A(e.allData, () => {
      b();
    }), A(e.pageSetting.preHandler.pagination, () => {
      e.pageSetting.preHandler.dynamic || b();
    });
    const b = () => {
      let i = e.pageSetting.preHandler.autoSearch && e.pageSetting.preHandler.autoSearch.value.length > 0 ? e.allData.filter((c) => {
        let l = [];
        return e.pageSetting.preHandler.autoSearch.alans.forEach((w) => {
          l.push(g(c[w].toString()));
        }), l.join(" ").indexOf(g(e.pageSetting.preHandler.autoSearch.value)) !== -1;
      }) : e.allData;
      u.splice(0, u.length), u.push(...i), p();
    }, p = () => {
      if (d.splice(0, d.length), e.pageSetting.preHandler.dynamic)
        d.push(...u);
      else {
        const i = u.length, c = e.pageSetting.preHandler.pagination;
        c.total = i;
        const l = Math.ceil(i / c.pageSize);
        c.page > l && l > 0 && (c.page = l);
        const f = (c.page - 1) * c.pageSize;
        d.push(...u.slice(f, f + c.pageSize));
      }
    };
    return I(() => {
      b();
    }), (i, c) => a.pageSetting.loader ? (t(), r("div", we, "Loader...")) : (t(), s(N, {
      key: 0,
      columns: a.pageSetting.pageData,
      preHandler: a.pageSetting.preHandler,
      searchData: d,
      runSearch: b
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
  Ce as AutoPage,
  Le as createPageSetting
};
