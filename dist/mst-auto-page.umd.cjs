(function(u,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue"),require("vue-router")):typeof define=="function"&&define.amd?define(["exports","vue","vue-router"],e):(u=typeof globalThis<"u"?globalThis:u||self,e(u["mst-auto-page"]={},u.Vue,u.vueRouter))})(this,function(u,e,p){"use strict";const C=e.ref(!1),x=(t=!1)=>{C.value=C.value==t?!1:t},N=()=>{C.value=!1};e.watch(()=>C.value,(t,a)=>{t?window.addEventListener("click",N):window.removeEventListener("click",N)});const E=["href","title"],V=["src"],$=["title"],S={__name:"ColonTable",props:{filedData:Object,rowData:Object},setup(t){const a=t,n=(m,d)=>d===1?Object.prototype.toString.call(m)==="[object Object]":d===2?Object.prototype.toString.call(m)==="[object Array]":d===3?Object.prototype.toString.call(m)==="[object String]":d===4?Object.prototype.toString.call(m)==="[object Number]":d===5?Object.prototype.toString.call(m)==="[object Null]":!1,r=(m,d)=>n(m,1)?Object.prototype.hasOwnProperty.call(m,d):!1,c=e.computed(()=>a.rowData[a.filedData.key]?a.rowData[a.filedData.key]:a.filedData.key),i=e.ref(!1),y=(m,d)=>{C!==m&&(window.innerHeight/1.3<d.clientY?i.value=!0:i.value=!1),x(m)},B=()=>{typeof a.filedData.callback=="function"&&a.filedData.callback(a.rowData,a.filedData)},l=()=>a.filedData.caseColon?a.filedData.caseColon(a.rowData,a.filedData):!0,f=()=>r(a.filedData,"link")?typeof a.filedData.link=="function"?a.filedData.link(a.rowData):a.rowData[a.filedData.link]?a.rowData[a.filedData.link]:a.filedData.link:"",o=()=>r(a.filedData,"style")?typeof a.filedData.style=="function"?a.filedData.style(a.rowData):a.rowData[a.filedData.style]?a.rowData[a.filedData.style]:a.filedData.style:"",s=()=>r(a.filedData,"title")?typeof a.filedData.title=="function"?a.filedData.title(a.rowData):a.rowData[a.filedData.title]?a.rowData[a.filedData.title]:a.filedData.title:"",h=()=>r(a.filedData,"name")?typeof a.filedData.name=="function"?a.filedData.name(a.rowData):a.rowData[a.filedData.name]?a.rowData[a.filedData.name]:a.filedData.name:"",D=()=>r(a.filedData,"class")?typeof a.filedData.class=="function"?a.filedData.class(a.rowData):a.filedData.class:"",g=()=>typeof a.filedData.comp.data=="function"?a.filedData.comp.data(a.rowData):a.filedData.comp.data;return(m,d)=>{const b=e.resolveComponent("router-link");return l()?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[t.filedData.type==="link"?(e.openBlock(),e.createElementBlock("a",{key:0,onClick:d[0]||(d[0]=k=>B()),class:e.normalizeClass(D()),href:f(),title:s(),style:e.normalizeStyle(o())},[t.filedData.name?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.tag?t.filedData.tag:"span"),{key:0,innerHTML:h()},null,8,["innerHTML"])):e.createCommentVNode("",!0),e.renderSlot(m.$slots,"default")],14,E)):t.filedData.type==="img"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:1},[e.createElementVNode("img",{class:e.normalizeClass(D()),src:h(),onClick:d[1]||(d[1]=k=>B())},null,10,V),e.renderSlot(m.$slots,"default")],64)):t.filedData.type==="checkbox"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:2},[e.withDirectives(e.createElementVNode("input",{onClick:d[2]||(d[2]=k=>B()),"onUpdate:modelValue":d[3]||(d[3]=k=>t.rowData.select=k),type:"checkbox",class:e.normalizeClass(D()),title:s(),style:e.normalizeStyle(o())},null,14,$),[[e.vModelCheckbox,t.rowData.select]]),e.renderSlot(m.$slots,"default")],64)):t.filedData.type==="router-link"?(e.openBlock(),e.createBlock(b,{key:3,class:e.normalizeClass(D()),to:f(),onClick:d[4]||(d[4]=k=>B()),title:s(),style:e.normalizeStyle(o())},{default:e.withCtx(()=>[t.filedData.name?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.tag?t.filedData.tag:"span"),{key:0,innerHTML:h()},null,8,["innerHTML"])):e.createCommentVNode("",!0),e.renderSlot(m.$slots,"default")]),_:3},8,["class","to","title","style"])):t.filedData.type==="dropdown"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.tag?t.filedData.tag:"div"),{key:4,onClick:d[5]||(d[5]=e.withModifiers(k=>y(e.unref(c),k),["stop"])),class:e.normalizeClass(D()),style:e.normalizeStyle(o()),title:s(),name:e.unref(c)},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent("div"),{innerHTML:h()},null,8,["innerHTML"])),e.createVNode(e.Transition,{name:t.filedData.tname},{default:e.withCtx(()=>[e.unref(C)===e.unref(c)?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.dTag?t.filedData.dTag:"div"),{key:0,class:e.normalizeClass([t.filedData.dClass,i.value?t.filedData.dClassUp:t.filedData.dClassDown]),id:e.unref(c)},{default:e.withCtx(()=>[t.filedData.list?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.filedData.list,(k,w)=>(e.openBlock(),e.createBlock(S,{key:w+"-body",filedData:k,rowData:t.rowData},null,8,["filedData","rowData"]))),128)):e.createCommentVNode("",!0)]),_:1},8,["class","id"])):e.createCommentVNode("",!0)]),_:1},8,["name"]),e.renderSlot(m.$slots,"default")]),_:3},8,["class","style","title","name"])):t.filedData.type==="comp"?(e.openBlock(),e.createElementBlock(e.Fragment,{key:5},[t.filedData.comp?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.tag?t.filedData.tag:"div"),{key:0,class:e.normalizeClass(D())},{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.comp.name),{compData:g()},null,8,["compData"])),e.renderSlot(m.$slots,"default")]),_:3},8,["class"])):e.createCommentVNode("",!0)],64)):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.tag?t.filedData.tag:"div"),{key:6,onClick:d[6]||(d[6]=k=>B()),class:e.normalizeClass(D()),title:s(),style:e.normalizeStyle(o())},{default:e.withCtx(()=>[t.filedData.list&&t.filedData.body?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.filedData.list,k=>(e.openBlock(),e.createBlock(S,{key:k.name,filedData:k,rowData:t.rowData},null,8,["filedData","rowData"]))),128)):e.createCommentVNode("",!0),t.filedData.name?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.filedData.tag?t.filedData.tag:"span"),{key:1,innerHTML:h()},null,8,["innerHTML"])):e.createCommentVNode("",!0),e.renderSlot(m.$slots,"default")]),_:3},8,["class","title","style"]))],64)):e.createCommentVNode("",!0)}}},z=["placeholder"],T={__name:"AutoSearch",props:{autoSearch:Object},setup(t){return(a,n)=>e.withDirectives((e.openBlock(),e.createElementBlock("input",{type:"text","onUpdate:modelValue":n[0]||(n[0]=r=>t.autoSearch.value=r),onInput:n[1]||(n[1]=r=>t.autoSearch.callback(r,t.autoSearch)),class:e.normalizeClass(t.autoSearch.class),placeholder:t.autoSearch.placeholder?t.autoSearch.placeholder:"Search"},null,42,z)),[[e.vModelText,t.autoSearch.value]])}},O={key:0,class:"bg-white h-[74px] flex text-sm leading-[1.5] font-medium justify-between text-gray-500 items-center px-7"},j={class:"flex items-center gap-4"},M=e.createElementVNode("div",{class:"grow"},null,-1),L={class:"flex items-center"},F={class:"text-[#111928] font-medium mr-1"},P=e.createTextVNode(" of "),q={class:"text-[#111928] font-medium ml-1"},A=e.createElementVNode("span",{class:"text-sm leading-[21px]"},"Previous",-1),K=e.createElementVNode("span",{class:"text-sm leading-[21px]"},"Next",-1),U={__name:"Pagination",props:{searchData:Array,preHandler:Object},setup(t){const a=t,n=p.useRoute(),r=p.useRouter(),c=(o,s,h)=>{if(o<=h)return[];var D,g=Math.ceil(o/h),m=Math.min(10,g);if(s>g)s=g,D=g-m;else{var d=Math.ceil(m/2);D=s+d>g?g+1-m:d+1>s?1:s-d}D=Math.max(1,D);var b=Array.apply(null,new Array(m)).map(function(k,w){return D+w++});return b.indexOf(1)===-1&&(b.shift(),b.unshift(1)),b.indexOf(g)===-1&&b.push(g),b},i=e.computed(()=>[{v:10,d:10>=l.value.total},{v:25,d:25>=l.value.total},{v:50,d:50>=l.value.total},{v:75,d:75>=l.value.total},{v:100,d:100>=l.value.total}]),y=async o=>{if(a.preHandler.dynamic){if(typeof a.preHandler.tableCahngePage=="function"){let s=JSON.parse(JSON.stringify(n.query));s.page=o,await r.push({name:n.name,query:s}),n.query.page=o,a.preHandler.tableCahngePage(o,n.query)}}else l.value.page=o},B=async o=>{if(o!=a.preHandler.pagination.pageS\u0130ze)if(a.preHandler.dynamic){if(typeof a.preHandler.tableChangePageSize=="function"){let s=JSON.parse(JSON.stringify(n.query));s.limit=o,await r.push({name:n.name,query:s}),n.query.limit=o,a.preHandler.tableChangePageSize(o,n.query)}}else l.preHandler.pageSize=o},l=e.computed(()=>a.preHandler.pagination),f=e.computed(()=>{const o=+l.value.pageSize*(+l.value.page-1);return l.value.page==Math.ceil(l.value.total/l.value.pageSize)?l.value.total:o+l.value.pageSize});return e.computed(()=>{const o=a.preHandler.dynamic?l.value.total:a.searchData.length;return c(o,l.value.page,l.value.pageSize)}),e.watch(()=>l.value.pageSize,(o,s)=>{o!=s-1&&B(o)}),p.onBeforeRouteUpdate((o,s)=>{o.query.pageSize||(l.value.page=1,l.value.pageSize=25)}),(o,s)=>{const h=e.resolveComponent("SelectTag"),D=e.resolveComponent("fai");return e.unref(l).total>10?(e.openBlock(),e.createElementBlock("div",O,[e.createElementVNode("div",j,[e.createTextVNode(" Items per Page "+e.toDisplayString(e.unref(l).pageSize)+" ",1),e.createVNode(h,{className:"  focus:text-black text-[#D03801] text-sm font-medium pr-7 rounded-lg border-[#D03801] ",field:"pageSize",element:e.unref(l),list:e.unref(i),vk:"v",vv:"v"},null,8,["element","list"])]),M,e.createElementVNode("div",L,[e.createElementVNode("span",F,e.toDisplayString(e.unref(l).pageSize*(+e.unref(l).page-1)+1)+" - "+e.toDisplayString(e.unref(f)),1),P,e.createElementVNode("span",q,e.toDisplayString(e.unref(l).total),1),e.createElementVNode("button",{class:e.normalizeClass(["btn-fill-orange ml-2 flex items-center gap-2 py-[10px]",e.unref(l).page==1?"btn-fill-orange-disable":"btn-fill-orange"]),onClick:s[0]||(s[0]=g=>e.unref(l).page==1?void 0:y(parseInt(e.unref(l).page)-1))},[e.createVNode(D,{icon:"angle-left",class:"text-md"}),A],2),e.createElementVNode("button",{class:e.normalizeClass(["flex items-center ml-2.5 gap-2 py-[10px]",e.unref(l).page==Math.ceil(e.unref(l).total/e.unref(l).pageSize)?"btn-fill-orange-disable":"btn-fill-orange"]),onClick:s[1]||(s[1]=g=>e.unref(l).page==Math.ceil(e.unref(l).total/e.unref(l).pageSize)?void 0:y(parseInt(e.unref(l).page)+1))},[K,e.createVNode(D,{icon:"angle-right",class:"text-md"})],2)])])):e.createCommentVNode("",!0)}}},I=["innerHTML"],J=["innerHTML"],R={__name:"HeaderTable",props:{sortingData:Array,filedData:Object,preHandler:Object,searchData:Array},setup(t){const a=t,n=e.ref(!1),r=e.computed(()=>a.searchData.reduce((l,f)=>l+=f.select?1:0,0));e.watch(n,(l,f)=>{a.sortingData.forEach(o=>{o.select=l})}),e.watch(()=>r.value,(l,f)=>{l==a.searchData.length?n.value=!0:n.value=!1});const c=()=>{var l="";a.preHandler.sorting.t===1?l=a.preHandler.sorting.r?'a["'+a.preHandler.sorting.n+'"].localeCompare(b["'+a.preHandler.sorting.n+'"])':'b["'+a.preHandler.sorting.n+'"].localeCompare(a["'+a.preHandler.sorting.n+'"])':a.preHandler.sorting.t===2&&(l=a.preHandler.sorting.r?'a["'+a.preHandler.sorting.n+'"] - b["'+a.preHandler.sorting.n+'"]':'b["'+a.preHandler.sorting.n+'"] - a["'+a.preHandler.sorting.n+'"]');let f="return "+l;return new Function("a,b",f)},i=l=>a.preHandler.sorting.n===l?a.preHandler.sorting.r?"&#8650;":"&#8648;":"&#8645;",y=l=>l&&l.caseColon?l.caseColon(l):!0,B=l=>{if(l.sort){a.preHandler.sorting.r=a.preHandler.sorting.n===l.sort.n&&!a.preHandler.sorting.r,a.preHandler.sorting.n=l.sort.n,a.preHandler.sorting.t=l.sort.t;const f=c();a.searchData.sort(f)}};return(l,f)=>y(t.filedData)?(e.openBlock(),e.createElementBlock("th",{key:0,class:e.normalizeClass(t.filedData.head.tclass?t.filedData.head.tclass:""),style:e.normalizeStyle(t.filedData.head.style),onClick:f[1]||(f[1]=o=>B(t.filedData.head))},[t.filedData.head.checkbox?e.withDirectives((e.openBlock(),e.createElementBlock("input",{key:0,type:"checkbox",class:e.normalizeClass(t.filedData.head.class),"onUpdate:modelValue":f[0]||(f[0]=o=>n.value=o)},null,2)),[[e.vModelCheckbox,n.value]]):(e.openBlock(),e.createElementBlock("span",{key:1,class:e.normalizeClass(t.filedData.head.class),innerHTML:t.filedData.head.title},null,10,I)),t.filedData.head.sort?(e.openBlock(),e.createElementBlock("span",{key:2,innerHTML:i(t.filedData.head.sort.n)},null,8,J)):e.createCommentVNode("",!0)],6)):e.createCommentVNode("",!0)}},Y={__name:"RowTable",props:{rowData:Object,filedData:Object},setup(t){const a=t,n=()=>a.filedData.caseColon?a.filedData.caseColon(a.rowData,a.filedData):!0;return(r,c)=>n()?(e.openBlock(),e.createElementBlock("td",{key:0,class:e.normalizeClass(t.filedData.body&&t.filedData.body.tclass?t.filedData.body.tclass:"")},[t.filedData.body.list?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(t.filedData.body.list,(i,y)=>(e.openBlock(),e.createBlock(S,{key:y+"-body",filedData:i,rowData:t.rowData},null,8,["filedData","rowData"]))),128)):(e.openBlock(),e.createBlock(S,{key:1,filedData:t.filedData.body,rowData:t.rowData},null,8,["filedData","rowData"]))],2)):e.createCommentVNode("",!0)}},G={key:0},Q={key:0},W=["colspan"],X=[e.createElementVNode("h6",null,"Data Not Found",-1)],Z={key:0},v=["colspan"],_={key:1},ee=["colspan"],te=[e.createElementVNode("h5",null,"Loader...",-1)],ae={__name:"AutoTable",props:{tableData:Array,preHandler:Object,searchData:Array},setup(t){const a=t,n=e.computed(()=>{if(a.preHandler.dynamic)return a.searchData;{const r=a.searchData.length,c=a.preHandler.pagination,i=Math.ceil(r/c.pageSize);c.page>i&&i>0&&(c.page=i);const y=(c.page-1)*c.pageSize;return a.searchData.slice(y,y+c.pageSize)}});return(r,c)=>(e.openBlock(),e.createElementBlock("table",null,[e.createElementVNode("thead",null,[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tableData,i=>(e.openBlock(),e.createBlock(R,{key:i.head.name,sortingData:e.unref(n),filedData:i,preHandler:t.preHandler,searchData:t.searchData},null,8,["sortingData","filedData","preHandler","searchData"]))),128))])]),t.preHandler.loader?(e.openBlock(),e.createElementBlock("tbody",_,[e.createElementVNode("tr",null,[e.createElementVNode("td",{colspan:t.tableData.length},te,8,ee)])])):(e.openBlock(),e.createElementBlock("tbody",G,[e.unref(n).length===0?(e.openBlock(),e.createElementBlock("tr",Q,[e.createElementVNode("td",{colspan:t.tableData.length},X,8,W)])):(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:1},e.renderList(e.unref(n),i=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:i},[e.createElementVNode("tr",null,[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.tableData,y=>(e.openBlock(),e.createBlock(Y,{key:y.head.name,rowData:i,filedData:y},null,8,["rowData","filedData"]))),128))]),i.open?(e.openBlock(),e.createElementBlock("tr",Z,[e.createElementVNode("td",{colspan:t.tableData.length},[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(i.component),{pageData:i},null,8,["pageData"]))],8,v)])):e.createCommentVNode("",!0)],64))),128))]))]))}},le=["tabindex","autocomplete","type","placeholder","maxlength","disabled","required","id","readonly"],ne={key:0,class:"text-error-form"},oe={__name:"InputTag",props:{field:String,element:Object,className:{type:String,default:""},isControlData:{type:Function,default:()=>{}},onKeyPress:{type:Function,default:()=>!0},type:{type:String,default:"text"},placeholder:{type:String,default:""},maxlength:{default:255,type:Number},disabled:{default:!1,type:Boolean},required:{default:!1,type:Boolean},readonly:{default:!1,type:Boolean},tabindex:{type:Number},onKeyup:{type:Function,default:()=>{}},autocomplete:{type:String,default:"off"}},setup(t){return(a,n)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("input",{onKeyup:n[0]||(n[0]=(...r)=>t.onKeyup&&t.onKeyup(...r)),tabindex:t.tabindex,autocomplete:t.autocomplete,type:t.type,"onUpdate:modelValue":n[1]||(n[1]=r=>t.element[t.field]=r),onKeypress:n[2]||(n[2]=(...r)=>t.onKeyPress&&t.onKeyPress(...r)),onChange:n[3]||(n[3]=r=>t.isControlData(t.element,t.element[t.field])),class:e.normalizeClass([t.className,t.element.error&&t.element.error[t.field]?"tag-error-form":""]),placeholder:t.placeholder,maxlength:t.maxlength,disabled:t.disabled,required:t.required,id:t.field,readonly:t.readonly},null,42,le),[[e.vModelDynamic,t.element[t.field]]]),e.renderSlot(a.$slots,"default"),t.element.error&&t.element.error[t.field]?(e.openBlock(),e.createElementBlock("span",ne,e.toDisplayString(t.element.error[t.field]),1)):e.createCommentVNode("",!0)],64))}},re=["placeholder"],ce=["value","hidden"],ie=["value","disabled","innerHTML"],de={key:0,class:"text-error-form"},se={__name:"SelectTag",props:{field:String|Number,element:Object,list:Array,className:{type:String,default:""},first:{type:Object,default:null},onChange:{type:Function,default:()=>{}},placeholder:{type:String,default:""},changNames:{type:Function,default:null},vk:{type:String,default:"v"},vv:{type:String,default:"t"}},setup(t){const a=t,n=(r,c)=>typeof a.changNames=="function"?a.changNames(r,c):c[a.vv];return(r,c)=>(e.openBlock(),e.createElementBlock(e.Fragment,null,[e.withDirectives(e.createElementVNode("select",{onChange:c[0]||(c[0]=i=>t.onChange()),class:e.normalizeClass([t.className,{"tag-error-form":t.element.error&&t.element.error[t.field]}]),"onUpdate:modelValue":c[1]||(c[1]=i=>t.element[t.field]=i),placeholder:t.placeholder},[t.first?(e.openBlock(),e.createElementBlock("option",{key:0,value:t.first[t.vk],hidden:t.first.h},e.toDisplayString(t.first[t.vv]),9,ce)):e.createCommentVNode("",!0),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.list,i=>(e.openBlock(),e.createElementBlock("option",{key:i,value:i[t.vk],disabled:i.d,innerHTML:n(t.element,i)},null,8,ie))),128))],42,re),[[e.vModelSelect,t.element[t.field]]]),e.renderSlot(r.$slots,"default"),t.element.error&&t.element.error[t.field]?(e.openBlock(),e.createElementBlock("span",de,e.toDisplayString(t.element.error[t.field]),1)):e.createCommentVNode("",!0)],64))}},me={__name:"SectionBody",props:{column:Object,preHandler:Object,searchData:Array,opts:Object},setup(t){const a=t,n=()=>Object.prototype.hasOwnProperty.call(a.column,"class")?typeof a.column.class=="function"?a.column.class(a.rowData):a.column.class:"";return(r,c)=>t.column.type==="comp"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.column.tag?t.column.tag:"div"),{key:0,class:e.normalizeClass(n())},{default:e.withCtx(()=>[t.column.name==="table"?(e.openBlock(),e.createBlock(ae,{key:0,tableData:t.column.data,searchData:t.searchData,preHandler:t.preHandler,opts:t.column.opts,class:e.normalizeClass(n())},null,8,["tableData","searchData","preHandler","opts","class"])):t.column.name==="pagination"?(e.openBlock(),e.createBlock(U,{key:1,searchData:t.searchData,preHandler:t.preHandler},null,8,["searchData","preHandler"])):t.column.name==="autosearch"?(e.openBlock(),e.createBlock(T,{key:2,autoSearch:t.column.data},null,8,["autoSearch"])):(e.openBlock(),e.createBlock(e.resolveDynamicComponent(t.column.name),{key:3,compData:t.column.data},null,8,["compData"])),t.column.list?(e.openBlock(),e.createBlock(H,{key:4,columns:t.column.list,searchData:t.searchData,preHandler:t.preHandler},null,8,["columns","searchData","preHandler"])):e.createCommentVNode("",!0)]),_:1},8,["class"])):t.column.type==="select"?(e.openBlock(),e.createBlock(se,{key:1,field:t.column.field,element:t.column.data,list:t.column.options,vk:t.column.vk?t.column.vk:"v",first:t.column.first,vv:t.column.vv?t.column.vv:"t",className:n()},null,8,["field","element","list","vk","first","vv","className"])):t.column.type==="input"?(e.openBlock(),e.createBlock(oe,{key:2,field:t.column.field,element:t.column.data,className:n(),readonly:t.column.readonly},null,8,["field","element","className","readonly"])):t.column.type==="dropdown"?(e.openBlock(),e.createBlock(S,{key:3,filedData:t.column,rowData:{}},null,8,["filedData"])):(e.openBlock(),e.createBlock(S,{key:4,filedData:t.column,rowData:{}},{default:e.withCtx(()=>[t.column.list?(e.openBlock(),e.createBlock(H,{key:0,columns:t.column.list,searchData:t.searchData,preHandler:t.preHandler},null,8,["columns","searchData","preHandler"])):e.createCommentVNode("",!0)]),_:1},8,["filedData"]))}},H={__name:"Section",props:{columns:Array,preHandler:Object,searchData:Array},setup(t){const a=n=>typeof n.caseColon=="function"?n.caseColon():!0;return(n,r)=>(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(t.columns,c=>(e.openBlock(),e.createElementBlock(e.Fragment,{key:c},[a(c)?(e.openBlock(),e.createBlock(me,{key:0,column:c,preHandler:t.preHandler,searchData:t.searchData},null,8,["column","preHandler","searchData"])):e.createCommentVNode("",!0)],64))),128))}},fe={key:1,class:"loader"},De={__name:"index",props:{pageSetting:Object,searchData:{type:Array,default:[]}},setup(t){return(a,n)=>t.pageSetting.loader?(e.openBlock(),e.createElementBlock("div",fe,"Loader...")):(e.openBlock(),e.createBlock(H,{key:0,columns:t.pageSetting.pageData,preHandler:t.pageSetting.preHandler,searchData:t.searchData},null,8,["columns","preHandler","searchData"]))}};class ye{constructor(){this.preHandler={dynamic:!1,loader:!1,pagination:{status:!0,page:1,pageSize:20,total:0},sorting:{n:"",t:1,r:!1},tableCahngePage:()=>{},tableSorting:()=>{}},this.pageData=[]}}u.AutoPage=De,u.createPageSetting=ye,Object.defineProperties(u,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
