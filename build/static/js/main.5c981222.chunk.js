(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},20:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),u=n(14),c=n.n(u),o=n(4),l=n(2),i=(n(20),function(e){var t=e.person,n=e.removePerson;return r.a.createElement("div",null,t.name," ",t.number,r.a.createElement("button",{onClick:n},"remove"))}),m=n(3),f=n.n(m),s="https://aqueous-taiga-84718.herokuapp.com/api/persons",d=function(){return f.a.get(s).then((function(e){return e.data}))},b=function(e){return f.a.post(s,e).then((function(e){return e.data}))},h=function(e,t){return f.a.put("".concat(s,"/").concat(e),t).then((function(e){return e.data}))},p=function(e){return f.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))},v=function(e){var t=e.message,n=e.notcolor;return null===t?null:r.a.createElement("div",{className:"notification",style:{color:n}},t)},E=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],u=t[1],c=Object(a.useState)(""),m=Object(l.a)(c,2),f=m[0],s=m[1],E=Object(a.useState)(""),g=Object(l.a)(E,2),O=g[0],j=g[1],w=Object(a.useState)(""),y=Object(l.a)(w,2),S=y[0],k=y[1],C=Object(a.useState)(null),N=Object(l.a)(C,2),P=N[0],T=N[1],x=Object(a.useState)(""),A=Object(l.a)(x,2),D=A[0],J=A[1];Object(a.useEffect)((function(){d().then((function(e){u(e)}))}),[]);var L=[];return L=0===S.length?n:n.filter((function(e){return e.name.toLowerCase().includes(S)})),r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(v,{message:P,notcolor:D}),"filter with: ",r.a.createElement("input",{onChange:function(e){k(e.target.value.toLowerCase())}}),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=n.map((function(e){return e.name}));if(console.log(n),f.length<3||O.length<8)alert("name must be at least 3 character long and number at least 8 character long");else if(t.includes(f)){if(!0===window.confirm("".concat(f," is already added, want to replace number with new one?"))){var a=n.map((function(e){return e.id}))[t.indexOf(f)];console.log(a);var r=n.find((function(e){return e.id===a})),c=Object(o.a)(Object(o.a)({},r),{},{number:O});h(a,c).then((function(e){u(n.map((function(t){return t.id!==a?t:e})))})).catch((function(e){J("red"),T("".concat(f," is already removed")),setTimeout((function(){T(null)}),2e3)}))}}else{b({name:f,number:O}).then((function(e){u(n.concat(e)),s(""),j(""),J("green"),T("Added ".concat(f)),setTimeout((function(){T(null)}),2e3)}))}}},r.a.createElement("h2",null,"Add new"),r.a.createElement("div",null,"name: ",r.a.createElement("input",{onChange:function(e){s(e.target.value)}})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{onChange:function(e){j(e.target.value)}})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add"))),r.a.createElement("h2",null,"Numbers"),L.map((function(e,t){return r.a.createElement(i,{key:e.name,person:e,removePerson:function(){return function(e){!0===window.confirm("Do you want to delete ".concat(e.name,"?"))&&(p(e.id).then(u(n.filter((function(t){return t.id!==e.id})))),J("red"),T("Number removed"),setTimeout((function(){T(null)}),2e3))}(e)}})})))};c.a.render(r.a.createElement(E,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.5c981222.chunk.js.map