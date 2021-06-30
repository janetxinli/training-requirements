(this["webpackJsonpfrontend-training"]=this["webpackJsonpfrontend-training"]||[]).push([[0],{213:function(e,t,n){},214:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(85),c=n.n(i),o=n(13),s=n(10),l=n(86),u=n(87),d=n(88),f=n.n(d),b=n(21),p=n(11),j=n(12),h=n(45),m={Asia:{red:239,green:84,blue:106},Americas:{red:136,green:229,blue:25},Europe:{red:251,green:226,blue:34},Africa:{red:74,green:206,blue:228},Unknown:{red:0,green:0,blue:0}},x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return m[e]?"rgba(".concat(m[e].red,", ").concat(m[e].green,", ").concat(m[e].blue,", ").concat(t,")"):null},g=function(e,t){return-1===Object.values(t).indexOf(!0)?e.map((function(e){return x(e.continent,.8)})):e.map((function(e){return t[e.label]?x(e.continent,.8):x(e.continent,.2)}))},O=function(e,t){return-1===Object.values(t).indexOf(!0)?e.map((function(){return"rgba(128, 128, 128, 0.8)"})):e.map((function(e){return t[e.label]?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.1)"}))},y=function(e){if(0===e)return"0";var t,n=Math.log10(e),a=Math.floor(n/3);switch(a){case 0:t="";break;case 1:t="k";break;case 2:t="M";break;case 3:t="B"}return String(e/Math.pow(10,3*a)).slice(0,4).replace(/\.$/,"")+t},v={population:function(e){return Math.PI*Math.pow(300*e,2)},fertilityRate:function(e){return Math.PI*Math.pow(e/25,2)},co2:function(e){return Math.PI*Math.pow(e,2)}},k=function(){return window.innerWidth>1280?36:window.innerWidth>720?30:window.innerWidth>480?24:20},C=function(){return window.innerWidth>1280?28:window.innerWidth>720?24:window.innerWidth>480?16:12},_=function(){return window.innerWidth>1280?20:window.innerWidth>720?16:12},S=function(e,t){switch(e){case"gdpPercap":return{type:"logarithmic",offset:!1,min:100,max:12e4,title:{display:!0,text:"Income per person (GDP/capita)",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"},autoSkip:!1,includeBounds:!1,backdropPadding:0}};case"year":return{type:"category",labels:t.allYears.map((function(e){return e})).concat("","","Today"),title:{display:!0,text:"Time",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"}}};case"fertilityRate":return{type:"linear",min:0,max:9,title:{display:!0,text:"Babies per Woman",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"},autoSkip:!1,includeBounds:!1,backdropPadding:0}};case"co2":return{type:"logarithmic",offset:!1,min:.001,max:200,title:{display:!0,text:"CO2 Emissions per Person",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"},callback:function(e,t,n){return n[t].major?n[t].value:null},autoSkip:!0,includeBounds:!1,backdropPadding:0}};case"population":return{type:"linear",min:0,max:175e7,title:{display:!0,text:"Population",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"},callback:function(e,t,n){return y(n[t].value)},autoSkip:!1,includeBounds:!1,backdropPadding:0}};case"lifeExpectancy":return{type:"linear",min:20,max:90,title:{display:!0,text:"Life expectancy (years)",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"},autoSkip:!1,includeBounds:!1,backdropPadding:0}};default:return{}}},w=n(14),W=n(9),D=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a.useState)(e),r=Object(o.a)(n,2),i=r[0],c=r[1],s=Object(a.useState)([]),l=Object(o.a)(s,2),u=l[0],d=l[1],f=Object(a.useState)({}),b=Object(o.a)(f,2),p=b[0],h=b[1];Object(a.useEffect)((function(){c(e)}),[e]),Object(a.useEffect)((function(){e&&d(Object(W.a)(new Set(e.map((function(e){return e.year})))))}),[e]);var m=function(e){c(e),h(Object(W.a)(new Set(e.map((function(e){return e.label})))).reduce((function(e,n){return-1===t.indexOf(n)?e[n]=!1:e[n]=!0,e}),{}))},x=function(e){h(Object(j.a)(Object(j.a)({},p),{},Object(w.a)({},e,!p[e])))},g=function(t){if(e){var n=e.filter(t);c(n)}};return{data:i,allYears:u,selected:p,toggleSelected:x,filterData:g,initializeData:m}},M=function(){var e=Object(a.useState)(window.innerWidth),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useLayoutEffect)((function(){var e=function(){r(window.innerWidth)};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),n},N=n(2),P=function(e){var t=e.choice,n=e.handleChange,a=e.label;return Object(N.jsxs)("div",{className:"select-container",children:[Object(N.jsx)("p",{className:"select-label",children:a}),Object(N.jsxs)("select",{defaultValue:t,onChange:n,children:[Object(N.jsx)("option",{value:"fertilityRate",children:"Babies per Woman"}),Object(N.jsx)("option",{value:"co2",children:"CO2 Emissions per Person"}),Object(N.jsx)("option",{value:"gdpPercap",children:"Income per Person"}),Object(N.jsx)("option",{value:"lifeExpectancy",children:"Life Expectancy"}),Object(N.jsx)("option",{value:"population",children:"Population"}),Object(N.jsx)("option",{value:"year",children:"Time"})]})]})},z=function(e){var t=e.sizeValue,n=e.setSizeValue,a=e.hoverValue;return Object(N.jsxs)("span",{className:"select-container",children:[Object(N.jsx)("p",{className:"select-label",children:"bubble size"}),Object(N.jsxs)("select",{defaultValue:t,onChange:function(e){return n(e.target.value)},children:[Object(N.jsx)("option",{value:"population",children:"population"===t&&a?a:"Population"}),Object(N.jsx)("option",{value:"fertilityRate",children:"fertilityRate"===t&&a?a:"Babies per Woman"}),Object(N.jsx)("option",{value:"co2",children:"co2"===t&&a?a:"CO2 Emissions per Person"})]})]})},E=n(91),B=n.n(E),I=function(e){var t=e.children;return Object(N.jsx)("section",{className:"df df-fc df-ai-c ".concat(B.a["chart-container"]),children:t})},R=n(92),q=n.n(R),H=function(e){var t=e.children;return Object(N.jsx)("main",{className:"container df df-ai-fs ".concat(q.a["chart-layout"]),children:t})},Y=n(22),V=n.n(Y),G=function(e){var t=e.selected,n=e.toggleSelected,r=e.children,i=Object(a.useState)(""),c=Object(o.a)(i,2),s=c[0],l=c[1];return Object(N.jsxs)("section",{className:"df df-fc df-ai-c ".concat(V.a.sidebar),children:[Object(N.jsx)("img",{src:"".concat("/training-requirements/front_end","/world_colour_map.svg"),alt:"Colour legend map for plot points",className:V.a.map}),Object(N.jsx)("input",{type:"text",value:s,onChange:function(e){var t=e.target;return l(t.value)},className:V.a.search,placeholder:"Search"}),Object(N.jsxs)("article",{className:"df df-fc df-ai-fs ".concat(V.a.select),children:[Object.entries(t).filter((function(e){return!0===e[1]})).length>0?Object(N.jsx)("article",{className:"df df-fc df-ai-fs ".concat(V.a["selected-countries"]),children:Object.entries(t).filter((function(e){return!0===e[1]})).map((function(e){return e[0]})).map((function(e){return Object(N.jsxs)("article",{className:V.a["country-name"],children:[Object(N.jsx)("input",{type:"checkbox",id:e,name:e,defaultChecked:t[e],onClick:function(){return n(e)}}),Object(N.jsx)("label",{htmlFor:e,children:e})]},e)}))}):null,Object(N.jsx)("article",{className:"df df-fc df-ai-fs ".concat(V.a["unselected-countries"]),children:""===s?Object.entries(t).filter((function(e){return!1===e[1]})).map((function(e){return e[0]})).map((function(e){return Object(N.jsxs)("article",{className:V.a["country-name"],children:[Object(N.jsx)("input",{type:"checkbox",id:e,name:e,defaultChecked:t[e],onClick:function(){return n(e)}}),Object(N.jsx)("label",{htmlFor:e,children:e})]},e)})):Object.entries(t).filter((function(e){return!1===e[1]})).map((function(e){return e[0]})).filter((function(e){return e.toLowerCase().search(s.toLowerCase())>-1})).map((function(e){return Object(N.jsxs)("article",{className:V.a["country-name"],children:[Object(N.jsx)("input",{type:"checkbox",id:e,name:e,defaultChecked:t[e],onClick:function(){return n(e)}}),Object(N.jsx)("label",{htmlFor:e,children:e})]},e)}))})]}),r]})},L=function(){return Object(N.jsx)("h2",{children:"Loading..."})},A=n(93),T=n.n(A),$=function(e){var t=e.listData,n=e.min,a=e.max,r=e.value,i=e.handleChange;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("input",{className:T.a.slider,type:"range",min:n,max:a,value:r,list:"slider-data",onChange:i}),Object(N.jsx)("datalist",{id:"slider-data",children:t.map((function(e){return Object(N.jsx)("option",{value:e,"aria-label":e},e)}))})]})},F=function(e){var t=e.allData,n=D(t),r=M(),i=Object(a.useState)("population"),c=Object(o.a)(i,2),s=c[0],l=c[1],u=Object(a.useState)(2007),d=Object(o.a)(u,2),f=d[0],b=d[1],p=Object(a.useState)(null),m=Object(o.a)(p,2),x=m[0],C=m[1],w=Object(a.useState)("gdpPercap"),W=Object(o.a)(w,2),E=W[0],B=W[1],R=Object(a.useState)("lifeExpectancy"),q=Object(o.a)(R,2),Y=q[0],V=q[1],A=Object(a.useState)(!1),T=Object(o.a)(A,2),F=T[0],U=T[1],J=Object(a.useRef)(null),X={population:function(e){return 1/300*Math.sqrt(e/Math.PI)},fertilityRate:function(e){return 25*Math.sqrt(e/Math.PI)},co2:function(e){return 15*Math.sqrt(e/Math.PI)}},K={population:function(){return 15},fertilityRate:function(){return 15},co2:function(){return 15}};Object(a.useEffect)((function(){t&&n.initializeData(t.filter((function(e){return e.year===f})))}),[t]),Object(a.useEffect)((function(){n.filterData((function(e){return e.year===f}))}),[f]),Object(a.useEffect)((function(){J.current&&J.current.update()}),[r]);if(n.data&&n.selected){var Q={datasets:[{data:n.data.map((function(e){return{x:e[E],y:e[Y],label:e.label,r:F?K[s](e[s]):X[s](e[s]),continent:e.continent}})),backgroundColor:g(n.data,n.selected),borderWidth:1,borderColor:O(n.data,n.selected),clip:0}]},Z={aspectRatio:1,responsive:!0,maintainAspectRatio:!1,animation:{duration:0},onHover:function(e,t,a){return function(e,t,n,a,r,i){t.length?(i(y(v[a](t[0].element.$context.parsed._custom))),n.data.datasets[0].backgroundColor=n.data.datasets[0].backgroundColor.map((function(e,n){return n===t[0].index?e.replace(/0.[0-9]\)/,"1)"):e.replace(/0.[0-9]\)|1\)/,"0.1)")})),n.data.datasets[0].borderColor=n.data.datasets[0].data.map((function(e,n){return n===t[0].index?"rgba(128, 128, 128, 0.8)":"rgba(128, 128, 128, 0.1)"})),n.config.options.plugins.annotation=Object(j.a)(Object(j.a)({},n.config.options.plugins.annotation),{},{annotations:{line2:{type:"line",drawTime:"beforeDraw",yMin:t[0].element.$context.parsed.y,yMax:t[0].element.$context.parsed.y,xMax:t[0].element.$context.parsed.x,borderColor:"rgb((255, 99, 132)",borderWidth:2,borderDash:[4]},line3:{type:"line",drawTime:"beforeDraw",xMin:t[0].element.$context.parsed.x,xMax:t[0].element.$context.parsed.x,yMin:0,yMax:t[0].element.$context.parsed.y,borderColor:"rgb((255, 99, 132)",borderWidth:2,borderDash:[4]}}}),n.update()):(i(null),n.data.datasets[0].backgroundColor=g(n.data.datasets[0].data,r),n.data.datasets[0].borderColor=O(n.data.datasets[0].data,r),n.config.options.plugins.annotation&&n.config.options.plugins.annotation.annotations.line2&&(delete n.config.options.plugins.annotation.annotations.line2,delete n.config.options.plugins.annotation.annotations.line3),n.update())}(0,t,a,s,n.selected,C)},onClick:function(e,t,a){t.length&&n.toggleSelected(a.data.datasets[0].data[t[0].index].label)},scales:{x:Object(j.a)({},S(E,n)),y:Object(j.a)(Object(j.a)({},S(Y,n)),"year"===Y&&{reverse:!0})},plugins:Object(j.a)({tooltip:{filter:function(e){var t=e.dataset.data[e.dataIndex].label;return!n.selected[t]},callbacks:{label:function(e){return e.dataset.data[e.dataIndex].label}},bodyFont:{family:"'Work Sans', sans-serif",size:_()},displayColors:!1},legend:{display:!1},title:{display:!0,text:f,font:{size:k(),family:"'Work Sans', sans-serif"}},datalabels:{formatter:function(e){var t=e.label;return n.selected[t]?e.label:null},color:"rgb(255, 255, 255)",align:"top",font:{size:_(),family:"'Work Sans', sans-serif"},anchor:"end",offset:4,backgroundColor:"rgba(0, 0, 0, 0.8)",borderColor:"rgb(128, 128, 128)",borderRadius:2,borderWidth:1,clamp:!0}},E===Y&&{annotation:{annotations:{line1:{type:"line",xMin:function(e){return e.chart.scales.x.min},xMax:function(e){return e.chart.scales.x.max},yMin:function(e){return e.chart.scales.y.min},yMax:function(e){return e.chart.scales.y.max},borderColor:"rgb((255, 99, 132)",borderWidth:2,borderDash:[4],drawTime:"beforeDatasetsDraw"}}}})};return Object(N.jsxs)(H,{children:[Object(N.jsxs)(I,{children:[Object(N.jsx)(h.a,{data:Q,options:Z,ref:J,height:300,width:300}),Object(N.jsx)("button",{type:"submit",onClick:function(e){e.preventDefault(),U(!F)},children:F?"use value sizes":"use constant sizes"}),Object(N.jsx)($,{listData:n.allYears,min:"0",max:n.allYears.length-1,value:n.allYears.indexOf(f),handleChange:function(e){var t=e.target;return b(n.allYears[t.value])}})]}),Object(N.jsxs)(G,{selected:n.selected,toggleSelected:n.toggleSelected,children:[Object(N.jsx)(z,{sizeValue:s,setSizeValue:l,hoverValue:x}),Object(N.jsx)(P,{choice:E,handleChange:function(e){return B(e.target.value)},label:"x-axis"}),Object(N.jsx)(P,{choice:Y,handleChange:function(e){return V(e.target.value)},label:"y-axis"})]})]})}return Object(N.jsx)(L,{})},U=n(25),J=n.n(U),X=function(){var e=Object(p.f)();return Object(N.jsxs)("header",{className:"container df df-ai-c df-jc-c ".concat(J.a.header),children:[Object(N.jsx)(b.b,{to:"".concat("/training-requirements/front_end","/"),children:Object(N.jsx)("h1",{className:J.a.logo,children:"Gapminder"})}),Object(N.jsxs)("nav",{className:"df",children:[Object(N.jsx)(b.b,{to:"".concat("/training-requirements/front_end","/"),className:"".concat(J.a["nav-link"]," ").concat(e.pathname==="".concat("/training-requirements/front_end","/")?J.a.current:null),children:"Home"}),Object(N.jsx)(b.b,{to:"".concat("/training-requirements/front_end","/bubble"),className:"".concat(J.a["nav-link"]," ").concat(e.pathname==="".concat("/training-requirements/front_end","/bubble")?J.a.current:null),children:"Bubble"}),Object(N.jsx)(b.b,{to:"".concat("/training-requirements/front_end","/line"),className:"".concat(J.a["nav-link"]," ").concat(e.pathname==="".concat("/training-requirements/front_end","/line")?J.a.current:null),children:"Line"})]})]})},K=n(95),Q=n.n(K),Z=function(){return Object(N.jsxs)("main",{className:"container",children:[Object(N.jsx)("h2",{children:"Gapminder Data Visualization"}),Object(N.jsx)("article",{className:"df df-fc df-ai-c df-jc-c ".concat(Q.a.text),children:Object(N.jsxs)("p",{children:[Object(N.jsx)("a",{href:"https://www.gapminder.org/",target:"_blank",rel:"noopener noreferrer",children:"Gapminder"})," ","is a Swedish organization that fights ignorance and promotes a better understanding of the world by making data available and accessible.",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Explore the relationship between GDP per capita, life expectancy and other attributes with a Bubble Chart ",Object(N.jsx)(b.b,{to:"".concat("/training-requirements/front_end","/bubble"),children:"here"}),".",Object(N.jsx)("br",{}),Object(N.jsx)("br",{}),"Explore how GDP per capita changes over time in different countries here with a Line Chart ",Object(N.jsx)(b.b,{to:"".concat("/training-requirements/front_end","/line"),children:"here"}),".",Object(N.jsx)("br",{})]})})]})},ee=function(e,t,n){t.length?(n.config.options.plugins.datalabels.backgroundColor=function(e){return e.datasetIndex===t[0].datasetIndex?"rgba(0, 0, 0, 0.8)":"rgba(0, 0, 0, 0.1)"},n.config.options.plugins.datalabels.color=function(e){return e.datasetIndex===t[0].datasetIndex?"rgba(255, 255, 255, 1)":"rgba(255, 255, 255, 0.1)"},n.data.datasets=n.data.datasets.map((function(e,n){return n===t[0].datasetIndex?e:Object(j.a)(Object(j.a)({},e),{},{borderColor:e.borderColor.replace(/[0.]?1\)/,"0.1)"),pointBackgroundColor:e.pointBackgroundColor.replace(/[0.]?1\)/,"0.1)"),pointBorderColor:"rgba(128, 128, 128, 0.1)"})})),n.update()):(n.config.options.plugins.datalabels.backgroundColor=function(){return"rgba(0, 0, 0, 0.8)"},n.config.options.plugins.datalabels.color=function(){return"rgba(255, 255, 255, 1)"},n.data.datasets=n.data.datasets.map((function(e){return Object(j.a)(Object(j.a)({},e),{},{borderColor:e.borderColor.replace(/0.1\)/,"1)"),pointBackgroundColor:e.pointBackgroundColor.replace(/0.1\)/,"1)"),pointBorderColor:"rgb(0, 0, 0)"})})),n.update())},te=function(e){var t=e.allData,n=D(t,["Canada","Indonesia","Nigeria"]),r=M(),i=Object(a.useState)(2007),c=Object(o.a)(i,2),s=c[0],l=c[1],u=Object(a.useRef)(null);if(Object(a.useEffect)((function(){t&&n.initializeData(t.filter((function(e){return e.year<=s})))}),[t]),Object(a.useEffect)((function(){n.filterData((function(e){return e.year<=s}))}),[s]),Object(a.useEffect)((function(){u.current&&u.current.update()}),[r]),n.data&&n.selected){var d={labels:n.allYears,datasets:Object.entries(n.selected).filter((function(e){return!0===e[1]})).map((function(e){return e[0]})).map((function(e){return n.data.filter((function(t){return t.label===e}))})).filter((function(e){return e.length>0})).map((function(e){return{label:e[0].label,data:e.map((function(e){return{x:e.year,y:e.gdpPercap}})),borderColor:x(e[0].continent),borderWidth:5,pointBorderWidth:3,pointBackgroundColor:x(e[0].continent),pointBorderColor:"rgb(0, 0, 0)",pointRadius:e.map((function(e){return e.year===s?8:0})),pointHoverRadius:e.map((function(e){return e.year===s?8:0})),pointHoverBorderWidth:3}}))},f={responsive:!0,maintainAspectRatio:!1,aspectRatio:1,layout:{padding:{top:2*k(),right:60}},animation:{duration:0},onHover:ee,scales:{x:{type:"category",labels:n.allYears.map((function(e){return e})).concat("","","Today"),title:{display:!0,text:"Time",font:{size:C(),family:"'Work Sans', sans-serif"}},ticks:{font:{family:"'Work Sans', sans-serif"}}},y:{type:"logarithmic",min:0,max:8e4,title:{display:!0,text:"Income per person (GDP/capita)",font:{size:C(),family:"'Work Sans', sans-serif"},align:"center"},ticks:{font:{family:"'Work Sans', sans-serif"}}}},plugins:{tooltip:{enabled:!1},legend:{display:!1},annotation:{annotations:{line1:{type:"line",mode:"vertical",drawTime:"beforeDraw",xMin:s,xMax:s,borderColor:"rgb(128, 128, 128)",borderWidth:1,borderDash:[3]}}},datalabels:{formatter:function(e,t){if(t.dataIndex===t.dataset.data.length-1){var n=t.dataset.label,a=n.split(" ");if(n.split(" ").length>2){for(var r="",i=0;i<a.length;i+=2)a[i+1]?r+="".concat(a[i]," ").concat(a[i+1]):r+="".concat(a[i]),i<a.length-2&&(r+="\n");return r}return a.join(" ")}return null},color:"white",align:"right",font:{size:_(),family:"'Work Sans', sans-serif"},offset:14,backgroundColor:function(){return"rgba(0, 0, 0, 0.8)"},borderRadius:2,borderWidth:1,clamp:!0}}};return Object(N.jsxs)(H,{children:[Object(N.jsxs)(I,{children:[Object(N.jsx)(h.b,{data:d,options:f,height:300,width:300}),Object(N.jsx)($,{listData:n.allYears,min:"0",max:n.allYears.length-1,value:n.allYears.indexOf(s),handleChange:function(e){var t=e.target;return l(n.allYears[t.value])}})]}),Object(N.jsx)(G,{selected:n.selected,toggleSelected:n.toggleSelected})]})}return Object(N.jsx)(L,{})},ne=n.p+"static/media/gapminder_clean.ab8b93e9.csv",ae=function(e){switch(e){case"Oceania":return"Asia";case"":return"Unknown";default:return e}};s.d.register(l.a),s.d.register(u.a);var re=function(){var e=Object(a.useState)(null),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(a.useEffect)((function(){f.a.parse(ne,{download:!0,header:!0,complete:function(e){var t=e.data.filter((function(e){return!Number.isNaN(Number(e.year))})).map((function(e){return{label:e.countryName,gdpPercap:e.gdpPercap,lifeExpectancy:e.lifeExpectancy,population:e.pop,fertilityRate:e.fertilityRate,co2:e.co2,continent:ae(e.continent),year:+e.year}})).filter((function(e){return"Unknown"!==e.continent})).filter((function(e){return-1===Object.values(e).indexOf("")}));r(t)}})}),[]),Object(N.jsxs)(b.a,{children:[Object(N.jsx)(X,{}),Object(N.jsxs)(p.c,{children:[Object(N.jsx)(p.a,{path:"".concat("/training-requirements/front_end","/bubble"),children:Object(N.jsx)(F,{allData:n})}),Object(N.jsx)(p.a,{path:"".concat("/training-requirements/front_end","/line"),children:Object(N.jsx)(te,{allData:n})}),Object(N.jsx)(p.a,{path:"".concat("/training-requirements/front_end","/"),children:Object(N.jsx)(Z,{})})]})]})};n(213);c.a.render(Object(N.jsx)(r.a.StrictMode,{children:Object(N.jsx)(re,{})}),document.getElementById("root"))},22:function(e,t,n){e.exports={sidebar:"ChartSidebar_sidebar__33mph",select:"ChartSidebar_select__HDUmD",map:"ChartSidebar_map__3YK4v",search:"ChartSidebar_search__FfVKM","selected-countries":"ChartSidebar_selected-countries__2HJ63","unselected-countries":"ChartSidebar_unselected-countries__GVGoy","country-name":"ChartSidebar_country-name__20cV8"}},25:function(e,t,n){e.exports={header:"Header_header__2XAj3","nav-link":"Header_nav-link__2_Uhp",current:"Header_current__2i1-b",logo:"Header_logo__2XG30"}},91:function(e,t,n){e.exports={"chart-container":"ChartAndSliderContainer_chart-container__2vDfH"}},92:function(e,t,n){e.exports={"chart-layout":"ChartPageLayout_chart-layout__Oev08"}},93:function(e,t,n){e.exports={slider:"Slider_slider__oktDX",sliderfocus:"Slider_sliderfocus__Q-bHF"}},95:function(e,t,n){e.exports={text:"Home_text__1ZAGp"}}},[[214,1,2]]]);
//# sourceMappingURL=main.d166a891.chunk.js.map