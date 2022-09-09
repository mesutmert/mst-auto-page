import { ref as N, computed as z, resolveComponent as R, openBlock as t, createElementBlock as r, Fragment as y, normalizeClass as m, normalizeStyle as M, createBlock as c, resolveDynamicComponent as k, createTextVNode as K, toDisplayString as j, createCommentVNode as D, renderSlot as O, createElementVNode as x, withDirectives as P, vModelCheckbox as U, withCtx as H, withModifiers as J, unref as C, createVNode as Y, Transition as G, renderList as T, vModelText as Q, reactive as A, onMounted as B, vModelDynamic as W, vModelSelect as X, watch as V } from "vue";
import { useRoute as Z, useRouter as _ } from "vue-router";
const q = N(!1), ee = (e = !1) => {
  q.value = q.value == e ? !1 : e;
}, ae = ["href", "title"], te = ["src"], ne = ["title"], L = {
  __name: "ColonTable",
  props: {
    filedData: Object,
    rowData: Object
  },
  setup(e) {
    const a = e, i = (h, f) => f === 1 ? Object.prototype.toString.call(h) === "[object Object]" : f === 2 ? Object.prototype.toString.call(h) === "[object Array]" : f === 3 ? Object.prototype.toString.call(h) === "[object String]" : f === 4 ? Object.prototype.toString.call(h) === "[object Number]" : f === 5 ? Object.prototype.toString.call(h) === "[object Null]" : !1, l = (h, f) => i(h, 1) ? Object.prototype.hasOwnProperty.call(h, f) : !1, s = z(() => a.rowData[a.filedData.key] ? a.rowData[a.filedData.key] : a.filedData.key), g = N(!1), d = (h, f) => {
      q !== h && (window.innerHeight / 1.3 < f.clientY ? g.value = !0 : g.value = !1), ee(h);
    }, n = () => {
      typeof a.filedData.callback == "function" && a.filedData.callback(a.rowData, a.filedData);
    }, o = () => a.filedData.caseColon ? a.filedData.caseColon(a.rowData, a.filedData) : !0, u = () => l(a.filedData, "link") ? typeof a.filedData.link == "function" ? a.filedData.link(a.rowData) : a.rowData[a.filedData.link] ? a.rowData[a.filedData.link] : a.filedData.link : "", p = () => l(a.filedData, "style") ? typeof a.filedData.style == "function" ? a.filedData.style(a.rowData) : a.rowData[a.filedData.style] ? a.rowData[a.filedData.style] : a.filedData.style : "", b = () => l(a.filedData, "title") ? typeof a.filedData.title == "function" ? a.filedData.title(a.rowData) : a.rowData[a.filedData.title] ? a.rowData[a.filedData.title] : a.filedData.title : "", v = () => l(a.filedData, "name") ? typeof a.filedData.name == "function" ? a.filedData.name(a.rowData) : a.rowData[a.filedData.name] ? a.rowData[a.filedData.name] : a.filedData.name : "", w = () => l(a.filedData, "class") ? typeof a.filedData.class == "function" ? a.filedData.class(a.rowData) : a.filedData.class : "", $ = () => typeof a.filedData.comp.data == "function" ? a.filedData.comp.data(a.rowData) : a.filedData.comp.data;
    return (h, f) => {
      const I = R("router-link");
      return o() ? (t(), r(y, { key: 0 }, [
        e.filedData.type === "link" ? (t(), r("a", {
          key: 0,
          onClick: f[0] || (f[0] = (S) => n()),
          class: m(w()),
          href: u(),
          title: b(),
          style: M(p())
        }, [
          e.filedData.name ? (t(), r(y, { key: 0 }, [
            e.filedData.html ? (t(), c(k(e.filedData.tag ? e.filedData.tag : "span"), {
              key: 0,
              innerHTML: v()
            }, null, 8, ["innerHTML"])) : (t(), r(y, { key: 1 }, [
              K(j(v()), 1)
            ], 64))
          ], 64)) : D("", !0),
          O(h.$slots, "default")
        ], 14, ae)) : e.filedData.type === "img" ? (t(), r(y, { key: 1 }, [
          x("img", {
            class: m(w()),
            src: v(),
            onClick: f[1] || (f[1] = (S) => n())
          }, null, 10, te),
          O(h.$slots, "default")
        ], 64)) : e.filedData.type === "checkbox" ? (t(), r(y, { key: 2 }, [
          P(x("input", {
            onClick: f[2] || (f[2] = (S) => n()),
            "onUpdate:modelValue": f[3] || (f[3] = (S) => e.rowData.select = S),
            type: "checkbox",
            class: m(w()),
            title: b(),
            style: M(p())
          }, null, 14, ne), [
            [U, e.rowData.select]
          ]),
          O(h.$slots, "default")
        ], 64)) : e.filedData.type === "router-link" ? (t(), c(I, {
          key: 3,
          class: m(w()),
          to: u(),
          onClick: f[4] || (f[4] = (S) => n()),
          title: b(),
          style: M(p())
        }, {
          default: H(() => [
            e.filedData.name ? (t(), r(y, { key: 0 }, [
              e.filedData.html ? (t(), c(k(e.filedData.tag ? e.filedData.tag : "span"), {
                key: 0,
                innerHTML: v()
              }, null, 8, ["innerHTML"])) : (t(), r(y, { key: 1 }, [
                K(j(v()), 1)
              ], 64))
            ], 64)) : D("", !0),
            O(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "to", "title", "style"])) : e.filedData.type === "dropdown" ? (t(), c(k(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 4,
          onClick: f[5] || (f[5] = J((S) => d(C(s), S), ["stop"])),
          class: m(w()),
          style: M(p()),
          title: b(),
          name: C(s)
        }, {
          default: H(() => [
            (t(), c(k("div"), {
              innerHTML: v()
            }, null, 8, ["innerHTML"])),
            Y(G, {
              name: e.filedData.tname
            }, {
              default: H(() => [
                C(q) === C(s) ? (t(), c(k(e.filedData.dTag ? e.filedData.dTag : "div"), {
                  key: 0,
                  class: m([
                    e.filedData.dClass,
                    g.value ? e.filedData.dClassUp : e.filedData.dClassDown
                  ]),
                  id: C(s)
                }, {
                  default: H(() => [
                    e.filedData.list ? (t(!0), r(y, { key: 0 }, T(e.filedData.list, (S, E) => (t(), c(L, {
                      key: E + "-body",
                      filedData: S,
                      rowData: e.rowData
                    }, null, 8, ["filedData", "rowData"]))), 128)) : D("", !0)
                  ]),
                  _: 1
                }, 8, ["class", "id"])) : D("", !0)
              ]),
              _: 1
            }, 8, ["name"]),
            O(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "style", "title", "name"])) : e.filedData.type === "comp" ? (t(), r(y, { key: 5 }, [
          e.filedData.comp ? (t(), c(k(e.filedData.tag ? e.filedData.tag : "div"), {
            key: 0,
            class: m(w())
          }, {
            default: H(() => [
              (t(), c(k(e.filedData.comp.name), {
                compData: $()
              }, null, 8, ["compData"])),
              O(h.$slots, "default")
            ]),
            _: 3
          }, 8, ["class"])) : D("", !0)
        ], 64)) : (t(), c(k(e.filedData.tag ? e.filedData.tag : "div"), {
          key: 6,
          onClick: f[6] || (f[6] = (S) => n()),
          class: m(w()),
          title: b(),
          style: M(p())
        }, {
          default: H(() => [
            e.filedData.list && e.filedData.body ? (t(!0), r(y, { key: 0 }, T(e.filedData.list, (S) => (t(), c(L, {
              key: S.name,
              filedData: S,
              rowData: e.rowData
            }, null, 8, ["filedData", "rowData"]))), 128)) : D("", !0),
            e.filedData.name ? (t(), r(y, { key: 1 }, [
              e.filedData.html ? (t(), c(k("span"), {
                key: 0,
                innerHTML: v()
              }, null, 8, ["innerHTML"])) : (t(), r(y, { key: 1 }, [
                K(j(v()), 1)
              ], 64))
            ], 64)) : D("", !0),
            O(h.$slots, "default")
          ]),
          _: 3
        }, 8, ["class", "title", "style"]))
      ], 64)) : D("", !0);
    };
  }
}, le = ["placeholder"], re = {
  __name: "AutoSearch",
  props: {
    autoSearch: Object,
    runSearch: Function,
    preHandler: Object
  },
  setup(e) {
    return (a, i) => P((t(), r("input", {
      type: "text",
      "onUpdate:modelValue": i[0] || (i[0] = (l) => e.preHandler.autoSearch.value = l),
      onInput: i[1] || (i[1] = (l) => e.runSearch()),
      class: m(e.autoSearch.class),
      placeholder: e.autoSearch.placeholder ? e.autoSearch.placeholder : "Search"
    }, null, 42, le)), [
      [Q, e.preHandler.autoSearch.value]
    ]);
  }
}, oe = { class: "col-12" }, ie = { class: "pagination float-left" }, se = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, ce = ["onClick"], ue = {
  key: 1,
  class: "page-link",
  href: "javascript:;"
}, de = {
  __name: "Pagination",
  props: {
    preHandler: Object
  },
  setup(e) {
    const a = e, i = Z(), l = _(), s = (n, o, u) => {
      if (n <= u)
        return [];
      var p, b = Math.ceil(n / u), v = Math.min(10, b);
      if (o > b)
        o = b, p = b - v;
      else {
        var w = Math.ceil(v / 2);
        p = o + w > b ? b + 1 - v : w + 1 > o ? 1 : o - w;
      }
      p = Math.max(1, p);
      var $ = Array.apply(null, new Array(v)).map(function(h, f) {
        return p + f++;
      });
      return $.indexOf(1) === -1 && ($.shift(), $.unshift(1)), $.indexOf(b) === -1 && $.push(b), $;
    }, g = async (n) => {
      if (a.preHandler.dynamic) {
        if (typeof a.preHandler.tableCahngePage == "function") {
          let o = JSON.parse(JSON.stringify(i.query));
          o.page = n, await l.push({ name: i.name, query: o }), i.query.page = n, a.preHandler.pagination.page = n, a.preHandler.tableCahngePage(n, i.query);
        }
      } else
        a.preHandler.pagination.page = n, a.preHandler.tableCahngePage(n, i.query);
    }, d = z(() => s(a.preHandler.pagination.total, a.preHandler.pagination.page, a.preHandler.pagination.pageSize));
    return (n, o) => C(d).length > 0 ? (t(), r("div", {
      key: 0,
      class: m(["row mt-2", { disabledbutton: a.preHandler.loader }])
    }, [
      x("div", oe, [
        x("ul", ie, [
          x("li", {
            class: m(["page-item", { disabled: e.preHandler.pagination.page == 1 }])
          }, [
            e.preHandler.pagination.page > 1 ? (t(), r("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: o[0] || (o[0] = (u) => g(parseInt(e.preHandler.pagination.page) - 1))
            }, "prev")) : (t(), r("a", se, "Prev"))
          ], 2),
          (t(!0), r(y, null, T(C(d), (u) => (t(), r("li", {
            class: m(["page-item", { active: e.preHandler.pagination.page == u }]),
            key: u
          }, [
            x("a", {
              class: "page-link",
              href: "javascript:;",
              onClick: (p) => g(u)
            }, j(u), 9, ce)
          ], 2))), 128)),
          C(d).length > 0 ? (t(), r("li", {
            key: 0,
            class: m(["page-item", { disabled: e.preHandler.pagination.page >= C(d).length }])
          }, [
            e.preHandler.pagination.page < C(d).length ? (t(), r("a", {
              key: 0,
              class: "page-link",
              href: "javascript:;",
              onClick: o[1] || (o[1] = (u) => g(parseInt(e.preHandler.pagination.page) + 1))
            }, " Next ")) : (t(), r("a", ue, "Next"))
          ], 2)) : D("", !0)
        ])
      ])
    ], 2)) : D("", !0);
  }
}, fe = ["for"], De = ["tabindex", "type", "placeholder", "maxlength", "disabled", "required", "id", "readonly"], ge = ["innerHTML"], ye = {
  key: 3,
  class: "text-sm text-red-500 pl-[3px]"
}, me = {
  __name: "InputTag",
  props: {
    options: {
      type: Object,
      default: {}
    }
  },
  setup(e) {
    const a = e, i = N(!1), l = A({
      className: "",
      isControlData: () => {
      },
      onKeyPress: () => !0,
      type: "text",
      placeholder: "",
      group: !1,
      groupText: "Se\xE7",
      groupClass: "",
      changeClick: () => !0,
      maxlength: 255,
      disabled: !1,
      required: !1,
      readonly: !1,
      tabindex: 1,
      onKeyup: () => {
      },
      label: "",
      labelClass: ""
    }), s = () => {
      for (const g in l)
        if (Object.hasOwnProperty.call(a.options, g)) {
          const d = a.options[g];
          l[g] = d;
        }
      i.value = !0;
    };
    return B(() => {
      i.value = !1, s();
    }), (g, d) => (t(), r(y, null, [
      l.label ? (t(), r("label", {
        key: 0,
        for: e.options.field,
        class: m(["ship-form-label", l.labelClass])
      }, j(l.label), 11, fe)) : D("", !0),
      i.value ? P((t(), r("input", {
        key: 1,
        onKeyup: d[0] || (d[0] = (...n) => l.onKeyup && l.onKeyup(...n)),
        tabindex: l.tabindex,
        autocomplete: "off",
        type: l.type,
        "onUpdate:modelValue": d[1] || (d[1] = (n) => e.options.element[e.options.field] = n),
        onKeypress: d[2] || (d[2] = (...n) => l.onKeyPress && l.onKeyPress(...n)),
        onChange: d[3] || (d[3] = (n) => l.isControlData(e.options.element, e.options.element[e.options.field])),
        class: m([
          l.className,
          e.options.element.error && e.options.element.error[e.options.field] ? "border-red-400" : ""
        ]),
        placeholder: l.placeholder,
        maxlength: l.maxlength,
        disabled: l.disabled,
        required: l.required,
        id: e.options.field,
        readonly: l.readonly
      }, null, 42, De)), [
        [W, e.options.element[e.options.field]]
      ]) : D("", !0),
      l.group ? (t(), r("div", {
        key: 2,
        class: m(["h-100", l.groupClass]),
        innerHTML: l.groupText,
        onClick: d[4] || (d[4] = (n) => l.changeClick(l.field))
      }, null, 10, ge)) : D("", !0),
      e.options.element.error && l.element.error[e.options.field] ? (t(), r("span", ye, j(e.options.element.error[e.options.field]), 1)) : D("", !0)
    ], 64));
  }
}, he = ["disabled", "placeholder"], pe = ["value", "hidden"], ke = ["value", "disabled", "innerHTML"], be = {
  key: 0,
  class: "text-sm text-red-500 pl-[3px]"
}, He = {
  __name: "SelectTag",
  props: {
    options: {
      type: Object,
      default: {}
    }
  },
  setup(e) {
    const a = e, i = N(!1), l = (d, n) => typeof s.changNames == "function" ? s.changNames(a.options.element, n) : n[s.vv], s = A({
      className: "",
      first: null,
      onChange: () => {
      },
      placeholder: "",
      changNames: null,
      vk: "v",
      vv: "t",
      disabled: !1
    }), g = () => {
      for (const d in a.options)
        if (Object.hasOwnProperty.call(s, d)) {
          const n = a.options[d];
          s[d] = n;
        }
      i.value = !0;
    };
    return B(() => {
      i.value = !1, g();
    }), (d, n) => (t(), r(y, null, [
      P(x("select", {
        disabled: s.disabled,
        onChange: n[0] || (n[0] = (o) => s.onChange()),
        "onUpdate:modelValue": n[1] || (n[1] = (o) => a.options.element[a.options.field] = o),
        placeholder: s.placeholder
      }, [
        s.first ? (t(), r("option", {
          key: 0,
          value: s.first[s.vk],
          hidden: s.first.h
        }, j(s.first[s.vv]), 9, pe)) : D("", !0),
        (t(!0), r(y, null, T(a.options.list, (o) => (t(), r("option", {
          key: o,
          value: o[s.vk],
          disabled: o.d,
          innerHTML: l(a.options.element, o)
        }, null, 8, ke))), 128))
      ], 40, he), [
        [X, a.options.element[a.options.field]]
      ]),
      a.options.element.error && a.options.element.error[a.options.field] ? (t(), r("span", be, j(a.options.element.error[a.options.field]), 1)) : D("", !0)
    ], 64));
  }
}, ve = ["innerHTML"], Se = ["innerHTML"], we = {
  __name: "AutoTableHeader",
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    const a = e, i = N(!1);
    V(i, (n, o) => {
      a.searchData.forEach((u) => {
        u.select = n;
      });
    });
    const l = () => {
      var n = "";
      a.preHandler.sorting.t === 1 ? n = a.preHandler.sorting.r ? 'a["' + a.preHandler.sorting.n + '"].localeCompare(b["' + a.preHandler.sorting.n + '"])' : 'b["' + a.preHandler.sorting.n + '"].localeCompare(a["' + a.preHandler.sorting.n + '"])' : a.preHandler.sorting.t === 2 && (n = a.preHandler.sorting.r ? 'a["' + a.preHandler.sorting.n + '"] - b["' + a.preHandler.sorting.n + '"]' : 'b["' + a.preHandler.sorting.n + '"] - a["' + a.preHandler.sorting.n + '"]');
      let o = "return " + n;
      return new Function("a,b", o);
    }, s = (n) => a.preHandler.sorting.n === n ? a.preHandler.sorting.r ? "&#8650;" : "&#8648;" : "&#8645;", g = (n) => n && n.caseColon ? n.caseColon(n) : !0, d = (n) => {
      if (n.sort) {
        a.preHandler.sorting.r = a.preHandler.sorting.n === n.sort.n && !a.preHandler.sorting.r, a.preHandler.sorting.n = n.sort.n, a.preHandler.sorting.t = n.sort.t;
        const o = l();
        a.searchData.sort(o);
      }
    };
    return (n, o) => (t(), c(k(e.tableData.lineTag ? e.tableData.lineTag : "tr"), null, {
      default: H(() => [
        (t(!0), r(y, null, T(e.tableData.data, (u) => (t(), r(y, {
          key: u.name
        }, [
          g(u) ? (t(), c(k(e.tableData.columnTag ? e.tableData.columnTag : "td"), {
            key: 0,
            class: m(u.tclass ? u.tclass : ""),
            style: M(u.style),
            onClick: (p) => d(u)
          }, {
            default: H(() => [
              u.checkbox ? P((t(), r("input", {
                key: 0,
                type: "checkbox",
                class: m(u.class),
                "onUpdate:modelValue": o[0] || (o[0] = (p) => i.value = p)
              }, null, 2)), [
                [U, i.value]
              ]) : (t(), r("span", {
                key: 1,
                class: m(u.class),
                innerHTML: u.title
              }, null, 10, ve)),
              u.sort ? (t(), r("span", {
                key: 2,
                innerHTML: s(u.sort.n)
              }, null, 8, Se)) : D("", !0)
            ]),
            _: 2
          }, 1032, ["class", "style", "onClick"])) : D("", !0)
        ], 64))), 128))
      ]),
      _: 1
    }));
  }
}, Ce = {
  __name: "RowTable",
  props: {
    rowData: Object,
    filedData: Object
  },
  setup(e) {
    const a = e, i = () => a.filedData.caseColon ? a.filedData.caseColon(a.rowData, a.filedData) : !0;
    return (l, s) => i() ? (t(), r("td", {
      key: 0,
      class: m(e.filedData && e.filedData.tclass ? e.filedData.tclass : "")
    }, [
      e.filedData.list ? (t(!0), r(y, { key: 0 }, T(e.filedData.list, (g, d) => (t(), c(L, {
        key: d + "-body",
        filedData: g,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))), 128)) : (t(), c(L, {
        key: 1,
        filedData: e.filedData,
        rowData: e.rowData
      }, null, 8, ["filedData", "rowData"]))
    ], 2)) : D("", !0);
  }
}, Te = {
  __name: "AutoTableBody",
  props: {
    tableData: Object,
    preHandler: Object,
    searchData: Array
  },
  setup(e) {
    return (a, i) => (t(!0), r(y, null, T(e.searchData, (l) => (t(), c(k(e.tableData.lineTag ? e.tableData.lineTag : "tr"), { key: l }, {
      default: H(() => [
        (t(!0), r(y, null, T(e.tableData.data, (s) => (t(), c(Ce, {
          key: s,
          rowData: l,
          filedData: s
        }, null, 8, ["rowData", "filedData"]))), 128)),
        l.open ? (t(), c(k(a.filedData.lineTag ? a.filedData.lineTag : "tr"), { key: 0 }, {
          default: H(() => [
            a.filedData.lineTag === "tr" || !a.filedData.lineTag ? (t(), c(k(a.filedData.colonTag ? a.filedData.colonTag : "td"), { key: 0 }, {
              default: H(() => [
                (t(), c(k(l.component), { pageData: l }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024)) : (t(), c(k(a.filedData.colonTag ? a.filedData.colonTag : "div"), { key: 1 }, {
              default: H(() => [
                (t(), c(k(l.component), { pageData: l }, null, 8, ["pageData"]))
              ]),
              _: 2
            }, 1024))
          ]),
          _: 2
        }, 1024)) : D("", !0)
      ]),
      _: 2
    }, 1024))), 128));
  }
}, $e = {
  __name: "SectionBody",
  props: {
    column: Object,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    const a = e, i = () => Object.prototype.hasOwnProperty.call(a.column, "class") ? typeof a.column.class == "function" ? a.column.class(a.rowData) : a.column.class : "";
    return (l, s) => e.column.type === "comp" ? (t(), c(k(e.column.tag ? e.column.tag : "div"), {
      key: 0,
      class: m(i())
    }, {
      default: H(() => [
        e.column.name === "tableHead" ? (t(), c(we, {
          key: 0,
          tableData: e.column,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["tableData", "searchData", "preHandler"])) : D("", !0),
        e.column.name === "tableBody" ? (t(), c(Te, {
          key: 1,
          tableData: e.column,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["tableData", "searchData", "preHandler"])) : e.column.name === "pagination" ? (t(), c(de, {
          key: 2,
          searchData: e.searchData,
          preHandler: e.preHandler
        }, null, 8, ["searchData", "preHandler"])) : e.column.name === "autosearch" ? (t(), c(re, {
          key: 3,
          autoSearch: e.column.data,
          runSearch: e.runSearch,
          preHandler: e.preHandler
        }, null, 8, ["autoSearch", "runSearch", "preHandler"])) : (t(), c(k(e.column.name), {
          key: 4,
          compData: e.column.data
        }, null, 8, ["compData"])),
        e.column.list ? (t(), c(F, {
          key: 5,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler,
          runSearch: e.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : D("", !0)
      ]),
      _: 1
    }, 8, ["class"])) : e.column.type === "input" ? (t(), c(me, {
      key: 1,
      options: e.column.data
    }, null, 8, ["options"])) : e.column.type === "select" ? (t(), c(He, {
      key: 2,
      options: e.column.data
    }, null, 8, ["options"])) : e.column.type === "dropdown" ? (t(), c(L, {
      key: 3,
      filedData: e.column,
      rowData: {}
    }, null, 8, ["filedData"])) : (t(), c(L, {
      key: 4,
      filedData: e.column,
      rowData: {}
    }, {
      default: H(() => [
        e.column.list ? (t(), c(F, {
          key: 0,
          columns: e.column.list,
          searchData: e.searchData,
          preHandler: e.preHandler,
          runSearch: e.runSearch
        }, null, 8, ["columns", "searchData", "preHandler", "runSearch"])) : D("", !0)
      ]),
      _: 1
    }, 8, ["filedData"]));
  }
}, F = {
  __name: "Section",
  props: {
    columns: Array,
    preHandler: Object,
    searchData: Array,
    runSearch: Function
  },
  setup(e) {
    const a = (i) => typeof i.caseColon == "function" ? i.caseColon() : !0;
    return (i, l) => (t(!0), r(y, null, T(e.columns, (s) => (t(), r(y, { key: s }, [
      a(s) ? (t(), c($e, {
        key: 0,
        column: s,
        preHandler: e.preHandler,
        searchData: e.searchData,
        runSearch: e.runSearch
      }, null, 8, ["column", "preHandler", "searchData", "runSearch"])) : D("", !0)
    ], 64))), 128));
  }
}, je = {
  key: 1,
  class: "loader"
}, Me = {
  __name: "index",
  props: {
    pageSetting: Object,
    allData: {
      type: Array,
      default: []
    }
  },
  setup(e) {
    const a = e, i = A([]), l = A([]), s = (n) => n.replace(/Ğ/g, "\u011F").replace(/Ü/g, "\xFC").replace(/Ş/g, "\u015F").replace(/I/g, "\u0131").replace(/İ/g, "i").replace(/Ö/g, "\xF6").replace(/Ç/g, "\xE7").toLowerCase();
    V(a.allData, () => {
      g();
    }), V(a.pageSetting.preHandler.pagination, () => {
      a.pageSetting.preHandler.dynamic || g();
    });
    const g = () => {
      let n = a.pageSetting.preHandler.autoSearch && a.pageSetting.preHandler.autoSearch.value.length > 0 ? a.allData.filter((o) => {
        let u = [];
        return a.pageSetting.preHandler.autoSearch.alans.forEach((b) => {
          u.push(s(o[b].toString()));
        }), u.join(" ").indexOf(s(a.pageSetting.preHandler.autoSearch.value)) !== -1;
      }) : a.allData;
      i.splice(0, i.length), i.push(...n), d();
    }, d = () => {
      if (l.splice(0, l.length), a.pageSetting.preHandler.dynamic)
        l.push(...i);
      else {
        const n = i.length, o = a.pageSetting.preHandler.pagination;
        o.total = n;
        const u = Math.ceil(n / o.pageSize);
        o.page > u && u > 0 && (o.page = u);
        const p = (o.page - 1) * o.pageSize;
        l.push(...i.slice(p, p + o.pageSize));
      }
    };
    return B(() => {
      g();
    }), (n, o) => e.pageSetting.loader ? (t(), r("div", je, "Loader...")) : (t(), c(F, {
      key: 0,
      columns: e.pageSetting.pageData,
      preHandler: e.pageSetting.preHandler,
      searchData: l,
      runSearch: g
    }, null, 8, ["columns", "preHandler", "searchData"]));
  }
};
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
