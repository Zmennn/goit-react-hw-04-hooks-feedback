(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,function(t,e,a){t.exports={title:"FeedBack_title__M34le",button:"FeedBack_button__2qvzO",resultString:"FeedBack_resultString__3d-fA"}},,,,,,,,,function(t,e,a){},function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),r=a(5),s=a.n(r),d=(a(10),a(3)),i=(a(11),a(1)),o=a.n(i),l=a(0);function u(t){var e=t.addBad,a=t.addNeutral,n=t.addGood;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("button",{className:o.a.button,type:"button",onClick:n,children:"Good"}),Object(l.jsx)("button",{className:o.a.button,type:"button",onClick:a,children:"Neutral"}),Object(l.jsx)("button",{className:o.a.button,type:"button",onClick:e,children:"Bad"})]})}function b(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,r=t.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("div",{className:o.a.title,children:"Statistic"}),Object(l.jsxs)("div",{className:o.a.resultString,children:["Good:",e]}),Object(l.jsxs)("div",{className:o.a.resultString,children:["Neutral:",a]}),Object(l.jsxs)("div",{className:o.a.resultString,children:["Bad:",n]}),Object(l.jsxs)("div",{className:o.a.resultString,children:["Total:",c]}),Object(l.jsxs)("div",{className:o.a.resultString,children:["Positive:",r||0]})]})}function j(t){var e=t.message;return Object(l.jsx)("div",{className:o.a.resultString,children:e})}function O(t){var e=t.title,a=t.good,n=t.neutral,c=t.bad,r=t.total,s=t.positivePercentage,d=t.addGood,i=t.addNeutral,O=t.addBad;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:o.a.title,children:e}),Object(l.jsx)(u,{addBad:O,addNeutral:i,addGood:d}),a||n||c?Object(l.jsx)(b,{good:a,neutral:n,bad:c,total:r,positivePercentage:s}):Object(l.jsx)(j,{message:"No feedback given"})]})}function g(){var t=Object(n.useState)(0),e=Object(d.a)(t,2),a=e[0],c=e[1],r=Object(n.useState)(0),s=Object(d.a)(r,2),i=s[0],o=s[1],u=Object(n.useState)(0),b=Object(d.a)(u,2),j=b[0],g=b[1],h=function(){return a+i+j};return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(O,{title:"Please leave feedback",addGood:function(){c((function(t){return t+1}))},addNeutral:function(){o((function(t){return t+1}))},addBad:function(){g((function(t){return t+1}))},good:a,neutral:i,bad:j,total:h(),positivePercentage:Math.round(a/h()*100)})})}s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(g,{})}),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.5d47f44d.chunk.js.map