(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={title:"FeedBack_title__M34le",button:"FeedBack_button__2qvzO",resultString:"FeedBack_resultString__3d-fA"}},,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),r=a(5),s=a.n(r),d=(a(10),a(3)),o=(a(11),a(2)),i=a.n(o),u=a(0);function l(t){var e=t.addBad,a=t.addNeutral,n=t.addGood;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("button",{className:i.a.button,type:"button",onClick:n,children:"Good"}),Object(u.jsx)("button",{className:i.a.button,type:"button",onClick:a,children:"Neutral"}),Object(u.jsx)("button",{className:i.a.button,type:"button",onClick:e,children:"Bad"})]})}function b(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,r=t.positivePercentage;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:i.a.title,children:"Statistic"}),Object(u.jsxs)("div",{className:i.a.resultString,children:["Good:",e]}),Object(u.jsxs)("div",{className:i.a.resultString,children:["Neutral:",a]}),Object(u.jsxs)("div",{className:i.a.resultString,children:["Bad:",n]}),Object(u.jsxs)("div",{className:i.a.resultString,children:["Total:",c]}),Object(u.jsxs)("div",{className:i.a.resultString,children:["Positive:",r||0]})]})}function j(t){var e=t.message;return Object(u.jsx)("div",{className:i.a.resultString,children:e})}function O(t){var e=t.title,a=t.good,n=t.neutral,c=t.bad,r=t.total,s=t.positivePercentage,d=t.addGood,o=t.addNeutral,O=t.addBad;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h2",{className:i.a.title,children:e}),Object(u.jsx)(l,{addBad:O,addNeutral:o,addGood:d}),a||n||c?Object(u.jsx)(b,{good:a,neutral:n,bad:c,total:r,positivePercentage:s}):Object(u.jsx)(j,{message:"No feedback given"})]})}function g(){var t=Object(n.useRef)(0),e=Object(n.useRef)(0),a=Object(n.useState)(0),c=Object(d.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(0),i=Object(d.a)(o,2),l=i[0],b=i[1],j=Object(n.useState)(0),g=Object(d.a)(j,2),f=g[0],h=g[1];return Object(n.useEffect)((function(){t.current=r+l+f,e.current=Math.round(r/t.current*100)})),console.log(t),Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(O,{title:"Please leave feedback",addGood:function(){s((function(t){return t+1}))},addNeutral:function(){b((function(t){return t+1}))},addBad:function(){h((function(t){return t+1}))},good:r,neutral:l,bad:f,total:t.current,positivePercentage:e.current})})}s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(g,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.f00564bb.chunk.js.map