(this["webpackJsonpbrightcove-api-test"]=this["webpackJsonpbrightcove-api-test"]||[]).push([[0],{20:function(e,t,c){},21:function(e,t,c){},42:function(e,t,c){"use strict";c.r(t);var s=c(2),n=c.n(s),i=c(14),a=c.n(i),j=(c(20),c(3)),l=(c(21),c(15)),r=c.n(l),o=c(0);var d=function(){var e=Object(s.useState)(null),t=Object(j.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(null),a=Object(j.a)(i,2),l=a[0],d=a[1],b=Object(s.useState)(new Date),O=Object(j.a)(b,2),h=O[0],u=O[1],m=Object(s.useState)(new Date),x=Object(j.a)(m,2),p=x[0],v=x[1],g=Object(s.useState)(),C=Object(j.a)(g,2),N=C[0],S=C[1],T=Object(s.useState)(""),E=Object(j.a)(T,2),f=E[0],A=E[1],y=Object(s.useState)(""),L=Object(j.a)(y,2),w=L[0],D=L[1];return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsxs)("div",{className:"settings",children:[Object(o.jsxs)("div",{id:"keySettings",className:"setting",children:[Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Current API Key:"})," ",c]})}),Object(o.jsx)("input",{value:f,onChange:function(e){return A(e.target.value)}}),Object(o.jsx)("button",{style:{marginLeft:"5px"},onClick:function(e){n(f,A(""))},children:"Update Key"})]}),Object(o.jsxs)("div",{id:"liveSettings",className:"setting",children:[Object(o.jsx)("div",{className:"",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("b",{children:"Current Live Job:"})," ",l]})}),Object(o.jsx)("input",{value:w,onChange:function(e){return D(e.target.value)}}),Object(o.jsx)("button",{style:{marginLeft:"5px"},onClick:function(e){d(f,D(""))},children:"Update Key"})]})]}),Object(o.jsxs)("div",{id:"times",children:[Object(o.jsxs)("div",{className:"start",children:[Object(o.jsx)("h4",{className:"time",children:"Start"}),Object(o.jsx)("h3",{className:"time",children:h.toTimeString()}),Object(o.jsxs)("h3",{className:"time",children:["Epoch: ",h.getTime()]}),Object(o.jsx)("button",{onClick:function(e){return u(new Date)},children:"Event Wipe"})]}),Object(o.jsxs)("div",{className:"end",children:[Object(o.jsx)("h4",{className:"time",children:"End"}),Object(o.jsx)("h3",{className:"time",children:p.toTimeString()}),Object(o.jsxs)("h3",{className:"time",children:["Epoch: ",p.getTime()]}),Object(o.jsx)("button",{onClick:function(e){return function(e){v(new Date);var t={headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"GET,PUT,POST,DELETE,PATCH,OPTIONS","Content-Type":"application/json","X-API-KEY":c}},s={live_job_id:l,outputs:[{label:"Test Clip From API",start_time:h.getTime(),end_time:p.getTime(),credentials:"USER_VIDEOCLOUD_CREDENTIAL_LABEL",videocloud:{video:{name:"Test Clip From API",ingest:{"capture-images":!0}}}}]},n=r.a.post("".concat("/v1/vods"),s,t);S(JSON.stringify(n)),console.log(n)}()},children:"Last Results Clear"})]})]}),Object(o.jsxs)("div",{id:"response",children:[Object(o.jsx)("h3",{children:"Response"}),Object(o.jsx)("code",{children:N})]})]})};a.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(d,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.93423a9e.chunk.js.map