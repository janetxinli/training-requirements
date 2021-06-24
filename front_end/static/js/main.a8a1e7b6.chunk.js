(this["webpackJsonpfrontend-training"]=this["webpackJsonpfrontend-training"]||[]).push([[0],{214:function(e,t,n){},215:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(85),c=n.n(i),o=n(15),l=n(10),s=n(86),d=n(87),u=n(88),b=n.n(u),f=n(21),p=n(11),j=n(45),h={Asia:{red:239,green:84,blue:106},Americas:{red:136,green:229,blue:25},Europe:{red:251,green:226,blue:34},Africa:{red:74,green:206,blue:228},Unknown:{red:0,green:0,blue:0}},m=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return h[e]?"rgba(".concat(h[e].red,", ").concat(h[e].green,", ").concat(h[e].blue,", ").concat(t,")"):null},g=function(e,t){return-1===Object.values(t).indexOf(!0)?e.map((function(e){return m(e.continent,.8)})):e.map((function(e){return t[e.label]?m(e.continent,.8):m(e.continent,.2)}))},x=function(e,t){return-1===Object.values(t).indexOf(!0)?e.map((function(){return"rgba(128, 128, 128, 0.8)"})):e.map((function(e){return t[e.label]?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.1)"}))},O=function(e,t,n,a,r,i){t.length?(i(function(e){var t,n=Math.log10(e),a=Math.floor(n/3);switch(a){case 0:t="";break;case 1:t="k";break;case 2:t="M";break;case 3:t="B"}return String(e/Math.pow(10,3*a)).slice(0,4).replace(/\.$/,"")+t}(t[0].element.$context.parsed._custom/a)),n.data.datasets[0].backgroundColor=n.data.datasets[0].backgroundColor.map((function(e,n){return n===t[0].index?e.replace(/0.[0-9]\)/,"1)"):e.replace(/0.[0-9]\)|1\)/,"0.1)")})),n.data.datasets[0].borderColor=n.data.datasets[0].data.map((function(e,n){return n===t[0].index?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.1)"})),n.config.options.plugins.annotation={annotations:{line1:{type:"line",drawTime:"beforeDraw",yMin:t[0].element.$context.parsed.y,yMax:t[0].element.$context.parsed.y,xMax:t[0].element.$context.parsed.x,borderColor:"rgb((255, 99, 132)",borderWidth:2,borderDash:[4]},line2:{type:"line",drawTime:"beforeDraw",xMin:t[0].element.$context.parsed.x,xMax:t[0].element.$context.parsed.x,yMin:0,yMax:t[0].element.$context.parsed.y,borderColor:"rgb((255, 99, 132)",borderWidth:2,borderDash:[4]}}},n.update()):(i(null),n.data.datasets[0].backgroundColor=g(n.data.datasets[0].data,r),n.data.datasets[0].borderColor=x(n.data.datasets[0].data,r),n.config.options.plugins.annotation=void 0,n.update())},y=function(){return window.innerWidth>1280?36:window.innerWidth>720?30:window.innerWidth>480?24:20},_=function(){return window.innerWidth>1280?28:window.innerWidth>720?24:window.innerWidth>480?16:12},v=function(){return window.innerWidth>1280?20:window.innerWidth>720?16:12},w=n(12),C=n(16),k=n(9),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a.useState)(e),r=Object(o.a)(n,2),i=r[0],c=r[1],l=Object(a.useState)([]),s=Object(o.a)(l,2),d=s[0],u=s[1],b=Object(a.useState)({}),f=Object(o.a)(b,2),p=f[0],j=f[1];Object(a.useEffect)((function(){c(e)}),[e]),Object(a.useEffect)((function(){e&&u(Object(k.a)(new Set(e.map((function(e){return e.year})))))}),[e]);var h=function(e){c(e),j(Object(k.a)(new Set(e.map((function(e){return e.label})))).reduce((function(e,n){return-1===t.indexOf(n)?e[n]=!1:e[n]=!0,e}),{}))},m=function(e){j(Object(C.a)(Object(C.a)({},p),{},Object(w.a)({},e,!p[e])))},g=function(t){if(e){var n=e.filter(t);c(n)}};return{data:i,allYears:d,selected:p,toggleSelected:m,filterData:g,initializeData:h}},W=function(){var e=Object(a.useState)(window.innerWidth),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useLayoutEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},D=n(91),N=n.n(D),z=n(2),E=function(e){var t=e.sizeValue,n=e.setSizeValue,a=e.hoverValue;return Object(z.jsxs)("select",{name:"pets",defaultValue:t,onChange:function(e){return n(e.target.value)},className:N.a.dropdown,children:[Object(z.jsx)("option",{value:"population",children:"population"===t&&a?a:"Population"}),Object(z.jsx)("option",{value:"babiesPerWoman",children:"babiesPerWoman"===t&&a?a:"Babies per Woman"}),Object(z.jsx)("option",{value:"co2",children:"co2"===t&&a?a:"CO2 Emissions per Person"})]})},B=n(92),P=n.n(B),M=function(e){var t=e.children;return Object(z.jsx)("section",{className:"df df-fc df-ai-c ".concat(P.a["chart-container"]),children:t})},H=n(93),q=n.n(H),I=function(e){var t=e.children;return Object(z.jsx)("main",{className:"container df df-ai-c ".concat(q.a["chart-layout"]),children:t})},Y=n(22),G=n.n(Y),V=function(e){var t=e.selected,n=e.toggleSelected,r=e.children,i=Object(a.useState)(""),c=Object(o.a)(i,2),l=c[0],s=c[1];return Object(z.jsxs)("section",{className:"df df-fc df-ai-c ".concat(G.a.sidebar),children:[Object(z.jsx)("img",{src:"".concat("/training-requirements/front_end","/world_colour_map.svg"),alt:"Colour legend map for plot points",className:G.a.map}),Object(z.jsx)("input",{type:"text",value:l,onChange:function(e){var t=e.target;return s(t.value)},className:G.a.search,placeholder:"Search"}),Object(z.jsxs)("article",{className:"df df-fc df-ai-fs ".concat(G.a.select),children:[Object.entries(t).filter((function(e){return!0===e[1]})).length>0?Object(z.jsx)("article",{className:"df df-fc df-ai-fs ".concat(G.a["selected-countries"]),children:Object.entries(t).filter((function(e){return!0===e[1]})).map((function(e){return e[0]})).map((function(e){return Object(z.jsxs)("article",{className:G.a["country-name"],children:[Object(z.jsx)("input",{type:"checkbox",id:e,name:e,defaultChecked:t[e],onClick:function(){return n(e)}}),Object(z.jsx)("label",{htmlFor:e,children:e})]},e)}))}):null,Object(z.jsx)("article",{className:"df df-fc df-ai-fs ".concat(G.a["unselected-countries"]),children:""===l?Object.entries(t).filter((function(e){return!1===e[1]})).map((function(e){return e[0]})).map((function(e){return Object(z.jsxs)("article",{className:G.a["country-name"],children:[Object(z.jsx)("input",{type:"checkbox",id:e,name:e,defaultChecked:t[e],onClick:function(){return n(e)}}),Object(z.jsx)("label",{htmlFor:e,children:e})]},e)})):Object.entries(t).filter((function(e){return!1===e[1]})).map((function(e){return e[0]})).filter((function(e){return e.toLowerCase().search(l.toLowerCase())>-1})).map((function(e){return Object(z.jsxs)("article",{className:G.a["country-name"],children:[Object(z.jsx)("input",{type:"checkbox",id:e,name:e,defaultChecked:t[e],onClick:function(){return n(e)}}),Object(z.jsx)("label",{htmlFor:e,children:e})]},e)}))})]}),r]})},L=function(){return Object(z.jsx)("h2",{children:"Loading..."})},R=n(94),$=n.n(R),A=function(e){var t=e.listData,n=e.min,a=e.max,r=e.value,i=e.handleChange;return Object(z.jsxs)(z.Fragment,{children:[Object(z.jsx)("input",{className:$.a.slider,type:"range",min:n,max:a,value:r,list:"slider-data",onChange:i}),Object(z.jsx)("datalist",{id:"slider-data",children:t.map((function(e){return Object(z.jsx)("option",{value:e,"aria-label":e},e)}))})]})},F=function(e){var t=e.allData,n=S(t),r=W(),i=Object(a.useState)("population"),c=Object(o.a)(i,2),l=c[0],s=c[1],d=Object(a.useState)(2007),u=Object(o.a)(d,2),b=u[0],f=u[1],p=Object(a.useState)(null),h=Object(o.a)(p,2),m=h[0],w=h[1],C=Object(a.useRef)(null),k={population:r>720?1/15e6:5e-8,babiesPerWoman:3,co2:1};if(Object(a.useEffect)((function(){t&&n.initializeData(t.filter((function(e){return e.year===b})))}),[t]),Object(a.useEffect)((function(){n.filterData((function(e){return e.year===b}))}),[b]),Object(a.useEffect)((function(){C.current&&C.current.update()}),[r]),n.data&&n.selected){var D={datasets:[{label:"Population",data:n.data.map((function(e){return{x:e.gdpPercap,y:e.lifeExpectancy,label:e.label,r:k[l]*e[l],continent:e.continent}})),backgroundColor:g(n.data,n.selected),borderWidth:1,borderColor:x(n.data,n.selected),clip:0}]},N={aspectRatio:1,animation:{duration:0},onHover:function(e,t,a){return O(0,t,a,k[l],n.selected,w)},onClick:function(e,t,a){t.length&&n.toggleSelected(a.data.datasets[0].data[t[0].index].label)},scales:{x:{type:"logarithmic",min:0,max:128e3,title:{display:!0,text:"Income per person (GDP/capita)",font:{size:_(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"}}},y:{min:20,max:90,title:{display:!0,text:"Life expectancy (years)",font:{size:_(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"}}}},plugins:{tooltip:{filter:function(e){var t=e.dataset.data[e.dataIndex].label;return!n.selected[t]},callbacks:{label:function(e){return e.dataset.data[e.dataIndex].label}},bodyFont:{family:"'Work Sans', sans-serif",size:v()},displayColors:!1},legend:{display:!1},title:{display:!0,text:b,font:{size:y(),family:"'Work Sans', sans-serif"}},datalabels:{formatter:function(e){var t=e.label;return n.selected[t]?e.label:null},color:"rgb(255, 255, 255)",align:"top",font:{size:v(),family:"'Work Sans', sans-serif"},anchor:"end",offset:4,backgroundColor:"rgba(0, 0, 0, 0.8)",borderColor:"rgb(128, 128, 128)",borderRadius:2,borderWidth:1,clamp:!0}}};return Object(z.jsxs)(I,{children:[Object(z.jsxs)(M,{children:[Object(z.jsx)(j.a,{data:D,options:N,ref:C}),Object(z.jsx)(A,{listData:n.allYears,min:"0",max:n.allYears.length-1,value:n.allYears.indexOf(b),handleChange:function(e){var t=e.target;return f(n.allYears[t.value])}})]}),Object(z.jsx)(V,{selected:n.selected,toggleSelected:n.toggleSelected,children:Object(z.jsx)(E,{sizeValue:l,setSizeValue:s,hoverValue:m})})]})}return Object(z.jsx)(L,{})},T=n(25),U=n.n(T),J=function(){var e=Object(p.f)();return Object(z.jsxs)("header",{className:"container df df-ai-c df-jc-c ".concat(U.a.header),children:[Object(z.jsx)(f.b,{to:"".concat("/training-requirements/front_end","/"),children:Object(z.jsx)("h1",{className:U.a.logo,children:"Gapminder"})}),Object(z.jsxs)("nav",{className:"df",children:[Object(z.jsx)(f.b,{to:"".concat("/training-requirements/front_end","/"),className:"".concat(U.a["nav-link"]," ").concat(e.pathname==="".concat("/training-requirements/front_end","/")?U.a.current:null),children:"Home"}),Object(z.jsx)(f.b,{to:"".concat("/training-requirements/front_end","/bubble"),className:"".concat(U.a["nav-link"]," ").concat(e.pathname==="".concat("/training-requirements/front_end","/bubble")?U.a.current:null),children:"Bubble"}),Object(z.jsx)(f.b,{to:"".concat("/training-requirements/front_end","/line"),className:"".concat(U.a["nav-link"]," ").concat(e.pathname==="".concat("/training-requirements/front_end","/line")?U.a.current:null),children:"Line"})]})]})},X=n(96),K=n.n(X),Z=function(){return Object(z.jsxs)("main",{className:"container",children:[Object(z.jsx)("h2",{children:"Gapminder Data Visualization"}),Object(z.jsx)("article",{className:"df df-fc df-ai-c df-jc-c ".concat(K.a.text),children:Object(z.jsxs)("p",{children:[Object(z.jsx)("a",{href:"https://www.gapminder.org/",target:"_blank",rel:"noopener noreferrer",children:"Gapminder"})," ","is a Swedish organization that fights ignorance and promotes a better understanding of the world by making data available and accessible.",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"Explore the relationship between GDP per capita, life expectancy and other attributes with a Bubble Chart ",Object(z.jsx)(f.b,{to:"".concat("/training-requirements/front_end","/bubble"),children:"here"}),".",Object(z.jsx)("br",{}),Object(z.jsx)("br",{}),"Explore how GDP per capita changes over time in different countries here with a Line Chart ",Object(z.jsx)(f.b,{to:"".concat("/training-requirements/front_end","/line"),children:"here"}),".",Object(z.jsx)("br",{})]})})]})},Q=function(e,t,n){t.length?(n.config.options.plugins.datalabels.backgroundColor=function(e){return e.datasetIndex===t[0].datasetIndex?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.1)"},n.config.options.plugins.datalabels.color=function(e){return e.datasetIndex===t[0].datasetIndex?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0.1)"},n.data.datasets=n.data.datasets.map((function(e,n){return n===t[0].datasetIndex?e:Object(C.a)(Object(C.a)({},e),{},{borderColor:e.borderColor.replace(/[0.]?1\)/,"0.1)"),pointBackgroundColor:e.pointBackgroundColor.replace(/[0.]?1\)/,"0.1)"),pointBorderColor:"rgba(128, 128, 128, 0.1)"})})),n.update()):(n.config.options.plugins.datalabels.backgroundColor=function(){return"rgba(0, 0, 0, 0.8)"},n.config.options.plugins.datalabels.color=function(){return"rgba(255, 255, 255, 1)"},n.data.datasets=n.data.datasets.map((function(e){return Object(C.a)(Object(C.a)({},e),{},{borderColor:e.borderColor.replace(/0.1\)/,"1)"),pointBackgroundColor:e.pointBackgroundColor.replace(/0.1\)/,"1)"),pointBorderColor:"rgb(0, 0, 0)"})})),n.update())},ee=function(e){var t=e.allData,n=S(t,["Canada","Indonesia","Nigeria"]),r=W(),i=Object(a.useState)(2007),c=Object(o.a)(i,2),l=c[0],s=c[1],d=Object(a.useRef)(null);if(Object(a.useEffect)((function(){t&&n.initializeData(t.filter((function(e){return e.year<=l})))}),[t]),Object(a.useEffect)((function(){n.filterData((function(e){return e.year<=l}))}),[l]),Object(a.useEffect)((function(){d.current&&d.current.update()}),[r]),n.data&&n.selected){var u={labels:n.allYears,datasets:Object.entries(n.selected).filter((function(e){return!0===e[1]})).map((function(e){return e[0]})).map((function(e){return n.data.filter((function(t){return t.label===e}))})).filter((function(e){return e.length>0})).map((function(e){return{label:e[0].label,data:e.map((function(e){return{x:e.year,y:e.gdpPercap}})),borderColor:m(e[0].continent),borderWidth:5,pointBorderWidth:3,pointBackgroundColor:m(e[0].continent),pointBorderColor:"rgb(0, 0, 0)",pointRadius:e.map((function(e){return e.year===l?8:0})),pointHoverRadius:e.map((function(e){return e.year===l?8:0})),pointHoverBorderWidth:3}}))},b={aspectRatio:1,layout:{padding:{top:2*y(),right:60}},animation:{duration:0},onHover:Q,scales:{x:{type:"category",labels:n.allYears.map((function(e){return e})).concat("","","Today"),title:{display:!0,text:"Time",font:{size:_(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"}}},y:{type:"logarithmic",min:0,max:8e4,title:{display:!0,text:"Income per person (GDP/capita)",font:{size:_(),family:"'Work Sans', sans-serif"},align:"center"},ticks:{font:{family:"'Work Sans', sans-serif"}}}},plugins:{tooltip:{enabled:!1},legend:{display:!1},annotation:{annotations:{line1:{type:"line",mode:"vertical",drawTime:"beforeDraw",xMin:l,xMax:l,borderColor:"rgb(128, 128, 128)",borderWidth:1,borderDash:[3]}}},datalabels:{formatter:function(e,t){if(t.dataIndex===t.dataset.data.length-1){var n=t.dataset.label,a=n.split(" ");if(n.split(" ").length>2){for(var r="",i=0;i<a.length;i+=2)a[i+1]?r+="".concat(a[i]," ").concat(a[i+1]):r+="".concat(a[i]),i<a.length-2&&(r+="\n");return r}return a.join(" ")}return null},color:"white",align:"right",font:{size:v(),family:"'Work Sans', sans-serif"},offset:14,backgroundColor:function(){return"rgba(0, 0, 0, 0.8)"},borderRadius:2,borderWidth:1,clamp:!0}}};return Object(z.jsxs)(I,{children:[Object(z.jsxs)(M,{children:[Object(z.jsx)(j.b,{data:u,options:b}),Object(z.jsx)(A,{listData:n.allYears,min:"0",max:n.allYears.length-1,value:n.allYears.indexOf(l),handleChange:function(e){var t=e.target;return s(n.allYears[t.value])}})]}),Object(z.jsx)(V,{selected:n.selected,toggleSelected:n.toggleSelected})]})}return Object(z.jsx)(L,{})},te=n.p+"static/media/gapminder_clean.ab8b93e9.csv",ne=function(e){switch(e){case"Oceania":return"Asia";case"":return"Unknown";default:return e}};l.d.register(s.a),l.d.register(d.a);var ae=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){b.a.parse(te,{download:!0,header:!0,complete:function(e){var t=e.data.filter((function(e){return!Number.isNaN(Number(e.year))})).map((function(e){return{label:e.countryName,gdpPercap:e.gdpPercap,lifeExpectancy:e.lifeExpectancy,population:e.pop,babiesPerWoman:e.fertilityRate,co2:e.co2,continent:ne(e.continent),year:+e.year}})).filter((function(e){return"Unknown"!==e.continent}));r(t)}})}),[]),Object(z.jsxs)(f.a,{children:[Object(z.jsx)(J,{}),Object(z.jsxs)(p.c,{children:[Object(z.jsx)(p.a,{path:"".concat("/training-requirements/front_end","/bubble"),children:Object(z.jsx)(F,{allData:n})}),Object(z.jsx)(p.a,{path:"".concat("/training-requirements/front_end","/line"),children:Object(z.jsx)(ee,{allData:n})}),Object(z.jsx)(p.a,{path:"".concat("/training-requirements/front_end","/"),children:Object(z.jsx)(Z,{})})]})]})};n(214);c.a.render(Object(z.jsx)(r.a.StrictMode,{children:Object(z.jsx)(ae,{})}),document.getElementById("root"))},22:function(e,t,n){e.exports={sidebar:"ChartSidebar_sidebar__33mph",select:"ChartSidebar_select__HDUmD",map:"ChartSidebar_map__3YK4v",search:"ChartSidebar_search__FfVKM","selected-countries":"ChartSidebar_selected-countries__2HJ63","unselected-countries":"ChartSidebar_unselected-countries__GVGoy","country-name":"ChartSidebar_country-name__20cV8"}},25:function(e,t,n){e.exports={header:"Header_header__2XAj3","nav-link":"Header_nav-link__2_Uhp",current:"Header_current__2i1-b",logo:"Header_logo__2XG30"}},91:function(e,t,n){e.exports={dropdown:"BubbleSizeDropdown_dropdown__1D_wZ"}},92:function(e,t,n){e.exports={"chart-container":"ChartAndSliderContainer_chart-container__2vDfH"}},93:function(e,t,n){e.exports={"chart-layout":"ChartPageLayout_chart-layout__Oev08"}},94:function(e,t,n){e.exports={slider:"Slider_slider__oktDX",sliderfocus:"Slider_sliderfocus__Q-bHF"}},96:function(e,t,n){e.exports={text:"Home_text__1ZAGp"}}},[[215,1,2]]]);
//# sourceMappingURL=main.a8a1e7b6.chunk.js.map