(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{20:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),r=n(6),o=n.n(r),s=(n(20),n(15)),i=n(8),d=n(2),l=n(4),j=n(0),u=function(e){var t=e.toggleMode,n=e.modeState;return Object(j.jsxs)("div",{className:"page-header",children:[Object(j.jsx)("div",{style:{padding:"10px"},children:(new Date).toLocaleDateString("en-au",{weekday:"long",year:"numeric",month:"short",day:"numeric"})}),n?Object(j.jsx)(l.a,{className:"icon",onClick:t,style:{fontSize:"20",display:"inline",position:"relative",right:"10px"}}):Object(j.jsx)(l.b,{className:"icon",onClick:t,style:{fontSize:"20",display:"inline",position:"relative",right:"10px"}})]})},b=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(j.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};b.defaultProps={color:"darkred",text:"Add"};var h=b,m=function(e){var t=e.title,n=e.onAddTask,c=e.showAdd;return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h1",{children:t}),Object(j.jsx)(h,{onClick:n,color:"black",text:c?"Close":"Add Task"})]})};m.defaultProps={title:"Daily Planner"};var O=m,x=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(j.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(j.jsxs)("h3",{children:[t.text,Object(j.jsx)(l.c,{style:{color:"crimson",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(j.jsx)("p",{children:t.day})]})},f=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(j.jsx)(j.Fragment,{children:t.map((function(e){return Object(j.jsx)(x,{task:e,onDelete:n,onToggle:c},e.id)}))})},p=function(e){var t=e.onAdd,n=Object(c.useState)(""),a=Object(d.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(""),i=Object(d.a)(s,2),l=i[0],u=i[1],b=Object(c.useState)(!1),h=Object(d.a)(b,2),m=h[0],O=h[1];return Object(j.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),r?(t({text:r,day:l,reminder:m}),o(""),u(""),O(!1)):alert("Please add task name")},children:[Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Task"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Task",value:r,onChange:function(e){return o(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control",children:[Object(j.jsx)("label",{children:"Day & Time"}),Object(j.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:l,onChange:function(e){return u(e.target.value)}})]}),Object(j.jsxs)("div",{className:"form-control form-control-check",children:[Object(j.jsx)("label",{children:"Task"}),Object(j.jsx)("input",{type:"checkbox",checked:m,value:m,cursor:"pointer",onChange:function(e){return O(e.currentTarget.checked)}})]}),Object(j.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},k=n(14),g=n.n(k),y=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),o=Object(d.a)(r,2),l=o[0],b=o[1],h=Object(c.useState)([{id:0,text:"StartUp Weekend!",day:"Sunday 28th at 9am",reminder:!1},{id:1,text:"Sent Sophia & Adam phone number listing",day:"Monday 29th at 9am",reminder:!1},{id:2,text:"Practice some react?",day:"Sunday 28th at 8am",reminder:!1}]),m=Object(d.a)(h,2),x=m[0],k=m[1];return Object(j.jsxs)("div",{children:[Object(j.jsx)(u,{toggleMode:function(){b(!l),l?(document.body.style.backgroundColor="#041F35",document.body.style.color="white"):(document.body.style.backgroundColor="cornsilk",document.body.style.color="black")},modeState:l}),Object(j.jsx)(g.a,{handle:"#handle",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("hr",{className:"rounded",id:"handle"}),Object(j.jsx)(O,{onAddTask:function(){return a(!n)},showAdd:n}),n&&Object(j.jsx)(p,{onAdd:function(e){var t=Math.floor(1e3*Math.random())+1,n=Object(i.a)({id:t},e);k([].concat(Object(s.a)(x),[n]))}}),x.length>0?Object(j.jsx)(f,{tasks:x,onDelete:function(e){k(x.filter((function(t){return t.id!==e})))},onToggle:function(e){k(x.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{reminder:!t.reminder}):t})))}}):Object(j.jsx)("div",{className:"backmsg",children:" No Tasks "})]})})]})},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.83317704.chunk.js.map