(this["webpackJsonpproject-class-repo-client"]=this["webpackJsonpproject-class-repo-client"]||[]).push([[0],{24:function(e,t,a){e.exports=a.p+"static/media/linkedin.563469cb.svg"},25:function(e,t,a){e.exports=a.p+"static/media/github.3c35ce34.svg"},41:function(e,t,a){e.exports=a(71)},48:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),l=a.n(c),o=a(1),s=a.n(o),i=a(8),u=a(4),m=a(3),p=a(6),d=a(5);a(47),a(48);var b=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"sidebar",className:"".concat(c?"active":"")},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("h3",null,"Welcome to Class Repo")),r.a.createElement("ul",{className:"list-unstyled components"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/about"},"About")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/contact"},"Contact"))),r.a.createElement("ul",{className:"list-unstyled CTAs"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/signup",className:"download"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/login",className:"article"},"Login")))),r.a.createElement("button",{type:"button",id:"sidebarCollapse",className:"navbar-btn",style:{position:"relative",top:0,left:0,zIndex:100},onClick:function(){l(!c)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))};var f=function(e){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light"},r.a.createElement("div",{className:"container-fluid"},r.a.createElement("div",{className:"",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"nav navbar-nav ml-auto"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement("span",{className:"nav-link"},e.pageName))))))};var E=function(){return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Home"}),r.a.createElement("h2",null,"Welcome to Class Repo"),r.a.createElement("p",null,"Controle os exerc\xedcios de seus alunos no Github"),r.a.createElement("div",{className:"line"}))};var v=function(){return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"About"}),r.a.createElement("h2",null,"About"),r.a.createElement("div",null,"O Welcome to Class Repo \xe9 uma plataforma de controle centralizada para aulas/cursos que usam o github como uma ferramenta de exerc\xedcios para os alunos. Nele o Professor pode acompanhar as entregas dos exerc\xedcios feitos pelos alunos al\xe9m de poder atribuir uma nota para cada exerc\xedcio, evitando o uso de planilhas e documentos espalhados, facilitando o dia a dia dos professores."),r.a.createElement("div",{className:"line"}))},g=a(24),h=a.n(g),O=a(25),j=a.n(O);var N=function(){return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Contact"}),r.a.createElement("h2",null,"Contact"),r.a.createElement("div",{className:"line"}),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body d-flex flex-column align-items-center"},r.a.createElement("h5",{className:"card-title"},"Rubem Carvalho"),r.a.createElement("div",null,r.a.createElement("img",{alt:"linkedin icon",src:h.a,style:{width:60,height:40}}),r.a.createElement("a",{href:"https://www.linkedin.com/in/rubem-carvalho/"},"/in/rubem-carvalho"),r.a.createElement("img",{alt:"github icon",src:j.a,style:{width:60,height:40}}),r.a.createElement("a",{href:"https://github.com/rubemdiogo"},"/rubemdiogo"))))),r.a.createElement("div",{className:"col-sm-6"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body d-flex flex-column align-items-center"},r.a.createElement("h5",{className:"card-title"},"Daniel Kunrath"),r.a.createElement("div",null,r.a.createElement("img",{alt:"linkedin icon",src:h.a,style:{width:60,height:40}}),r.a.createElement("a",{href:"https://www.linkedin.com/in/daniel-k-albanez/"},"/in/daniel-k-albanez"),r.a.createElement("img",{alt:"github icon",src:j.a,style:{width:60,height:40}}),r.a.createElement("a",{href:"https://github.com/D-Kunrath"},"/D-Kunrath")))))),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",{className:"line"}))},w=a(18),x=a.n(w),k=x.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API}),y=localStorage.getItem("loggedInUser"),C=JSON.parse(y||'""');k.interceptors.request.use((function(e){return C.token&&(e.headers={Authorization:"Bearer ".concat(C.token)}),e}),(function(e){console.error(e)}));var S=k,_=a(19),P=a(20);var I=function(){var e=Object(d.g)(),t=Object(n.useState)({git_user:"",email:"",password:"",confirmPassword:""}),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)({loading:!1,error:""}),p=Object(m.a)(o,2),b=p[0],E=p[1],v=function(e){var t=Object(i.a)({},c);t[e.currentTarget.name]=e.currentTarget.value,l(t)},g=function(){var t=Object(u.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return E(Object(i.a)(Object(i.a)({},b),{},{loading:!0})),t.prev=1,a.preventDefault(),t.next=5,S.post("/signup",c);case 5:n=t.sent,console.log(n),E(Object(i.a)(Object(i.a)({},b),{},{loading:!1})),e.push("/login"),t.next=15;break;case 11:t.prev=11,t.t0=t.catch(1),console.error(t.t0),E({loading:!1,error:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}();return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Signup"}),r.a.createElement("div",null,r.a.createElement("form",{className:"text-center border border-light p-5",onSubmit:g},r.a.createElement("div",{className:"control pt-2"},r.a.createElement("label",{htmlFor:"git_user"},"Github Username "),r.a.createElement("input",{type:"text",id:"git_user",name:"git_user",className:"form-control",placeholder:"Github Username",value:c.git_user,onChange:v})),r.a.createElement("div",{className:"control pt-2"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"E-mail",value:c.email,onChange:v})),r.a.createElement("div",{className:"control pt-2"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"Password",value:c.password,onChange:v}),r.a.createElement("small",{id:"passwordInfo",className:"form-text text-muted"},"Password should be at least 8 characters long, should contain an uppercase letter, lowercase letter, a number and a special character")),r.a.createElement("div",{className:"control pt-2"},r.a.createElement("label",{htmlFor:"confirmPassword"},"Confirm Password"),r.a.createElement("input",{type:"password",id:"confirmPassword",name:"confirmPassword",className:"form-control",placeholder:"Confirm Password",value:c.confirmPassword,onChange:v}),r.a.createElement("small",{id:"passwordInfo",className:"form-text text-muted"},"Must match the password")),b.error?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},b.error):null,b.loading?r.a.createElement("span",{className:"btn btn-info my-4 btn-block",style:{backgroundColor:"#7386D5"}},"Loading..."):r.a.createElement("button",{className:"btn btn-info my-4 btn-block",style:{backgroundColor:"#7386D5"},type:"submit"},"Sign Up"),r.a.createElement("p",null,"or sign up with:"),r.a.createElement("a",{href:"/",role:"button"},r.a.createElement(_.a,{icon:P.a,color:"#7386D5",size:"3x"})))),r.a.createElement("div",{className:"line"}))};var U=function(e){var t=Object(d.g)(),a=Object(n.useRef)();a.current=!1;var c=Object(n.useState)({email:"",password:""}),l=Object(m.a)(c,2),o=l[0],p=l[1],b=Object(n.useState)({loading:!1,error:""}),E=Object(m.a)(b,2),v=E[0],g=E[1];Object(n.useEffect)((function(){a.current=!0}),[]),Object(n.useEffect)((function(){return function(){a.current=!1}}),[]);var h=function(e){var t=Object(i.a)({},o);t[e.currentTarget.name]=e.currentTarget.value,p(t)},O=function(){var n=Object(u.a)(s.a.mark((function n(r){var c,l;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r.preventDefault(),g(Object(i.a)(Object(i.a)({},v),{},{loading:!0})),n.prev=2,n.next=5,S.post("/login",o);case 5:c=n.sent,l=c.data,console.log("data ->",l),e.setUserState({user:Object(i.a)({},l.user),token:l.token}),localStorage.setItem("loggedInUser",JSON.stringify({user:Object(i.a)({},l.user),token:l.token})),a&&(g(Object(i.a)(Object(i.a)({},v),{},{loading:!1})),t.push("/profile")),n.next=17;break;case 13:n.prev=13,n.t0=n.catch(2),console.error(n.t0),g(Object(i.a)(Object(i.a)({},v),{},{loading:!1}));case 17:case"end":return n.stop()}}),n,null,[[2,13]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Login"}),r.a.createElement("div",null,r.a.createElement("form",{className:"text-center border border-light p-5",onSubmit:O},r.a.createElement("div",{className:"control pt-2"},r.a.createElement("label",{htmlFor:"email"},"E-mail"),r.a.createElement("input",{type:"email",id:"email",name:"email",className:"form-control",placeholder:"E-mail",value:o.email,onChange:h})),r.a.createElement("div",{className:"control pt-2"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",name:"password",className:"form-control",placeholder:"Password",value:o.password,onChange:h})),r.a.createElement("button",{className:"btn btn-info my-4 btn-block",style:{backgroundColor:"#7386D5"},type:"submit"},"Login"),r.a.createElement("p",null,"or sign up with:"),r.a.createElement("a",{href:"/",role:"button"}," ",r.a.createElement(_.a,{icon:P.a,color:"#7386D5",size:"3x"})," "))),r.a.createElement("div",{className:"line"}))},D=a(40);var L=function(e){var t=e.component,a=e.user,n=Object(D.a)(e,["component","user"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a.user._id?r.a.createElement(t,Object.assign({},e,n,{user:a.user})):r.a.createElement(d.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},A=x.a.create({baseURL:"https://api.github.com"}),R=localStorage.getItem("loggedInUser"),T=JSON.parse(R||'""');(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/githubapi");case 3:return t=e.sent,A.interceptors.request.use((function(e){return T.token&&(e.headers={Authorization:"Token ".concat(t.data.token)}),e}),(function(e){console.error(e)})),e.abrupt("return",A);case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()();var z=A;var F=function(e){var t=Object(n.useState)(!1),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)({}),i=Object(m.a)(o,2),d=i[0],b=i[1];return Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t,a,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,localStorage.getItem("loggedInUser");case 3:return t=e.sent,e.next=6,JSON.parse(t||'""');case 6:if(void 0===(a=e.sent).user){e.next=13;break}return e.next=10,z.get("/users/".concat(a.user.name));case 10:n=e.sent,console.log(n.data),b(n.data);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"sidebar",className:"".concat(c?"active":"")},r.a.createElement("div",{className:"sidebar-header"},r.a.createElement("img",{alt:"user github avatar",src:d.avatar_url}),r.a.createElement("h3",null,d.login)),r.a.createElement("ul",{className:"list-unstyled components"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/profile"},"Profile")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/newclassroom"},"New Classroom")),r.a.createElement("li",null,r.a.createElement(p.b,{to:"/classroomList"},"Classroom"))),r.a.createElement("ul",{className:"list-unstyled CTAs"},r.a.createElement("li",null,r.a.createElement(p.b,{to:"/logout",className:"article"},"Logout")))),r.a.createElement("button",{type:"button",id:"sidebarCollapse",className:"navbar-btn",style:{position:"relative",top:0,left:0,zIndex:100},onClick:function(){l(!c)}},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},J=function(){var e=Object(n.useState)("loading..."),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useRef)().current=!1,Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z.get("/zen");case 2:t=e.sent,console.log(t.data),c(t.data);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Profile"}),r.a.createElement("p",null,"Git Zen Menssage:"),r.a.createElement("h2",null,a),r.a.createElement("div",{className:"line"}))},K=function(e){var t=Object(d.g)(),a=e.setUserState;return Object(n.useEffect)((function(){localStorage.removeItem("loggedInUser"),a({user:{},token:""}),t.push("/")}),[t,a]),r.a.createElement("div",null,"Logging Out")},W=a(9),G=function(){var e=Object(d.g)(),t=Object(n.useState)(""),a=Object(m.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)([]),s=Object(m.a)(o,2),i=s[0],u=s[1],p=Object(n.useState)(""),b=Object(m.a)(p,2),E=b[0],v=b[1],g=Object(n.useState)([]),h=Object(m.a)(g,2),O=h[0],j=h[1],N=Object(n.useState)(""),w=Object(m.a)(N,2),x=w[0],k=w[1];return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"New Classroom"}),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={classroom_name:c,description:"",repo_urls:i,students:O};S.post("/classroom",a),e.push("/profile")}},r.a.createElement("div",null,r.a.createElement("p",null,"Classroom Name"),r.a.createElement("input",{onChange:function(e){l(e.target.value)},value:c}),r.a.createElement("button",{type:"submit"},"Save Classroom")),r.a.createElement("div",{className:"d-flex justify-content-around mt-5"},r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){k(e.target.value)},value:x}),r.a.createElement("button",{type:"button",onClick:function(){x&&(j((function(e){var t=Object(W.a)(e);return t.push(x),Object(W.a)(t)})),k(""))}},"Add")),r.a.createElement("div",{className:"card-header"},"Students"),r.a.createElement("ul",{className:"list-group list-group-flush"},O.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between"},e,r.a.createElement("button",{type:"button",onClick:function(){!function(e){var t=Object(W.a)(O);t.splice(e,1),j(t)}(t)}},"x")))})))),r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("input",{onChange:function(e){v(e.target.value)},value:E}),r.a.createElement("button",{type:"button",onClick:function(){E&&(u((function(e){var t=Object(W.a)(e);return t.push(E),Object(W.a)(t)})),v(""))}},"Add")),r.a.createElement("div",{className:"card-header"},"Repository URLs"),r.a.createElement("ul",{className:"list-group list-group-flush"},i.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("li",{className:"list-group-item  d-flex justify-content-between"},e,r.a.createElement("button",{type:"button",onClick:function(){!function(e){var t=Object(W.a)(i);t.splice(e,1),u(t)}(t)}},"x")))})))))))},B=function(){var e=Object(d.g)(),t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],l=a[1];Object(n.useEffect)((function(){(function(){var e=Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/classroom/all");case 3:t=e.sent,l(t.data),console.log("/classroom/all",t),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),alert("Error fetch classroom list");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var o=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.delete("/classroom/".concat(a));case 3:(n=Object(W.a)(c)).splice(t,1),l(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),alert("Error Deleting classroom");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Classroom List"}),r.a.createElement("ul",{className:"list-group"},c.map((function(t,a){var n;return n=a%2?"list-group-item d-flex justify-content-between align-items-center list-group-item-dark":"list-group-item d-flex justify-content-between align-items-center",r.a.createElement("li",{key:a,className:n,style:{cursor:"pointer"},onClick:function(){e.push("/labslit/".concat(t._id),t)}},t.classroom_name,r.a.createElement("span",{className:"badge badge-primary badge-pill"},t.students.length),r.a.createElement("button",{type:"button",onClick:function(){o(a,t._id)}},"X"))}))))},H=function(e){var t=Object(d.g)(),a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1],i=e.match.params.id;Object(n.useEffect)((function(){console.log(i),function(){var e=Object(u.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.get("/repo/all/".concat(i));case 3:t=e.sent,a=t.data,o(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()()}),[i]);var p=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.delete("/repo/".concat(a));case 3:(n=Object(W.a)(l)).splice(t,1),o(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0),alert("Error Deleting classroom");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}();return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Classroom List"}),r.a.createElement("ul",{className:"list-group"},l.map((function(e,a){var n;return n=a%2?"list-group-item d-flex justify-content-between align-items-center list-group-item-dark":"list-group-item d-flex justify-content-between align-items-center",r.a.createElement("li",{key:a,className:n,style:{cursor:"pointer"},onClick:function(){t.push("/labedit",e),console.log(e)}},e.repo_url,r.a.createElement("button",{type:"button",onClick:function(){p(a,e._id)}},"X"))}))))},q=function(){var e,t=Object(d.g)(),a=Object(n.useState)([]),c=Object(m.a)(a,2),l=c[0],o=c[1];t.location.state&&t.location.state._id?e=t.location.state._id:(console.log("no _ID"),t.goBack()),Object(n.useEffect)((function(){(function(){var t=Object(u.a)(s.a.mark((function t(){var a,n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.get("/repo/".concat(e));case 3:a=t.sent,n=a.data.scores,o(n),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0),alert("Error fetch Labs list");case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}})()()}),[e]);var i=function(){var e=Object(u.a)(s.a.mark((function e(t,a){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(n=Object(W.a)(l))[a].score=t.target.value,o(n);case 3:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(u.a)(s.a.mark((function e(t){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=Object(W.a)(l))[t].done=!a[t].done,o(a);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var a=Object(u.a)(s.a.mark((function a(){var n,r;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,S.patch("/repo/".concat(e),l);case 3:return a.next=5,S.get("repo/".concat(e));case 5:n=a.sent,r=n.data,t.push("/labslit/".concat(r.classroom_id)),a.next=14;break;case 10:a.prev=10,a.t0=a.catch(0),console.error(a.t0),alert("Error Saving Changes");case 14:case"end":return a.stop()}}),a,null,[[0,10]])})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",{id:"content"},r.a.createElement(f,{pageName:"Repo ".concat(t.location.state.repo_url)}),r.a.createElement("h3",null,"Students"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item d-flex justify-content-between align-items-center"},r.a.createElement("div",null,"Git UserName"),r.a.createElement("div",null,"Score"),r.a.createElement("div",null,"Done")),l.map((function(e,t){var a;return console.log(e),a=t%2?"list-group-item d-flex justify-content-between align-items-center list-group-item-dark":"list-group-item d-flex justify-content-between align-items-center",r.a.createElement("li",{key:t,className:a},e.git_user,r.a.createElement("input",{value:e.score,onChange:function(e){i(e,t)}}),r.a.createElement("div",null,r.a.createElement("input",{type:"checkbox",checked:e.done,onChange:function(){p(t)}})))}))),r.a.createElement("button",{onClick:b},"Save Changes"))};var M=function(){var e=Object(n.useState)({user:{},token:""}),t=Object(m.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){Object(u.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=JSON.parse(localStorage.getItem("loggedInUser")||'""'),e.next=3,c((function(e){return Object(i.a)(Object(i.a)({},e),t)}));case 3:case"end":return e.stop()}}),e)})))()}),[]),Object(n.useEffect)((function(){console.log(a)}),[a]),r.a.createElement("div",{className:"App"},r.a.createElement(p.a,null,a.user._id?r.a.createElement("div",{className:"wrapper"},r.a.createElement(F,null),r.a.createElement(d.d,null,r.a.createElement(L,{exact:!0,path:"/logout",user:a,component:K,setUserState:c}),r.a.createElement(L,{exact:!0,path:"/profile",user:a,component:J}),r.a.createElement(L,{exact:!0,path:"/newclassroom",user:a,component:G}),r.a.createElement(L,{exact:!0,path:"/classroomList",user:a,component:B}),r.a.createElement(L,{exact:!0,path:"/labslit/:id",user:a,component:H}),r.a.createElement(L,{exact:!0,path:"/labedit",user:a,component:q}),r.a.createElement(d.b,null,r.a.createElement(d.a,{to:"/profile"})))):r.a.createElement("div",{className:"wrapper"},r.a.createElement(b,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{exact:!0,path:"/",component:E}),r.a.createElement(d.b,{exact:!0,path:"/about",component:v}),r.a.createElement(d.b,{exact:!0,path:"/contact",component:N}),r.a.createElement(d.b,{exact:!0,path:"/signup",component:I}),r.a.createElement(d.b,{exact:!0,path:"/login",render:function(){return r.a.createElement(U,{setUserState:c})}}),r.a.createElement(d.b,null,r.a.createElement(d.a,{to:"/"}))))))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.3bae068c.chunk.js.map