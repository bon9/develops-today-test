(this["webpackJsonpdevelops-today-test"]=this["webpackJsonpdevelops-today-test"]||[]).push([[0],{51:function(e,n,t){e.exports=t(79)},60:function(e,n,t){},79:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(23),c=t.n(o),i=t(19),u=t(21),s=t(17),l=t(48),d=(t(60),t(14)),b=t(18),f=t(8),m=t.n(f),p=t(3),g=t(4);function E(){var e=Object(p.a)(["\n  align-self: center;\n  box-shadow: 0 0 0 1px red inset;\n  color: red;\n  font-size: 0.8rem;\n  outline: 0;\n  border: none;\n  background: none;\n  padding: 0.4em 1em;\n  text-align: center;\n  border-radius: 0.3rem;\n  transition: all 0.25s ease;\n  &:hover:enabled {\n    cursor: pointer;\n    color: #fff;\n    background-color: red;\n  }\n  &:active:enabled {\n    background-color: grey;\n  }\n  &:disabled {\n    color: lightgrey;\n    box-shadow: 0 0 0 1px lightgrey inset;\n  }\n"]);return E=function(){return e},e}function v(){var e=Object(p.a)(["\n  margin-left: 0.5em;\n  text-decoration: none;\n"]);return v=function(){return e},e}function O(){var e=Object(p.a)(["\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.75em;\n  line-height: 1.2;\n"]);return O=function(){return e},e}function h(){var e=Object(p.a)(["\n  display: inline-block;\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 600;\n  margin-right: 0.5em;\n  line-height: 1.2;\n"]);return h=function(){return e},e}function y(){var e=Object(p.a)(["\n  flex-grow: 1;\n  margin-right: 1em;\n  &:hover {\n    box-shadow: 0 0 2px 2px lightgrey;\n    border-radius: 0.3em;\n    cursor: pointer;\n  }\n  a {\n    text-decoration: none;\n    color: black;\n    display: block;\n    width: 100%;\n  }\n  a:active {\n    color: black;\n  }\n"]);return y=function(){return e},e}function x(){var e=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n  margin: 0.25em 0;\n  transition: all 0.5s ease;\n  padding: 0.25em;\n  box-shadow: 0 0 2px 2px transparent;\n"]);return x=function(){return e},e}var T=g.a.div(x()),S=g.a.div(y()),C=g.a.div(h()),j=g.a.span(O()),_=g.a.p(v()),w=g.a.button(E());var P=function(e){var n=e.title,t=(e.body,e.creator),r=e.date,o=e.id,c=e.onDeletePost;return a.a.createElement(T,null,a.a.createElement(S,null,a.a.createElement(i.b,{to:"/posts/".concat(o)},a.a.createElement(C,null,t),a.a.createElement(j,null,r),a.a.createElement(_,null,n))),a.a.createElement(w,{onClick:function(){return c(o)}},"delete"))};function A(){var e=Object(p.a)(["\n  box-shadow: 0 0 0 1px #21ba45 inset;\n  color: #21ba45;\n  font-size: 1rem;\n  min-height: 1em;\n  outline: 0;\n  border: none;\n  background: none;\n  padding: 0.75em 1.5em;\n  font-weight: 700;\n  line-height: 1em;\n  text-align: center;\n  border-radius: 0.3rem;\n  transition: all 0.25s ease;\n  &:hover:enabled {\n    cursor: pointer;\n    color: #fff;\n    background-color: #21ba45;\n    letter-spacing: 0.05em;\n  }\n  &:active:enabled {\n    background-color: grey;\n  }\n  &:disabled {\n    color: lightgrey;\n    box-shadow: 0 0 0 1px lightgrey inset;\n  }\n"]);return A=function(){return e},e}function k(){var e=Object(p.a)(["\n  padding: 0.5em;\n  margin-bottom: 1em;\n\n  outline: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  border-radius: 0.3em;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  &:focus {\n    border-color: #85b7d9;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]);return k=function(){return e},e}function D(){var e=Object(p.a)(["\n  flex: 1 0 auto;\n  max-width: 100%;\n  padding: 0.5em;\n  margin-bottom: 0.25em;\n  outline: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  color: rgba(0, 0, 0, 0.9);\n  border-radius: 0.3em;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  &:focus {\n    border-color: #85b7d9;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]);return D=function(){return e},e}function F(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return F=function(){return e},e}function I(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  margin-bottom: 1em;\n"]);return I=function(){return e},e}var L=g.a.div(I()),R=g.a.div(F()),M=g.a.input(D()),H=g.a.textarea(k()),U=g.a.button(A());P.propTypes={posts:m.a.array,onCreatePost:m.a.func,onDeletePost:m.a.func};var z=function(e){var n=e.posts,t=e.onCreatePost,o=e.onDeletePost,c=Object(r.useState)(""),i=Object(d.a)(c,2),u=i[0],s=i[1],l=Object(r.useState)(""),b=Object(d.a)(l,2),f=b[0],m=b[1];if(!n)return null;var p=function(e,n){"title"===n&&s(e.target.value),"body"===n&&m(e.target.value)},g=n.map((function(e){return a.a.createElement(P,{title:e.title||"Title post",body:e.body||"Body post",creator:e.creator||"Anybody",date:e.date||"Body date",id:e.id,key:e.id,onDeletePost:o})}));return a.a.createElement(a.a.Fragment,null,a.a.createElement(L,null,g),a.a.createElement(R,null,a.a.createElement(M,{type:"text",placeholder:"title",onChange:function(e){return p(e,"title")},value:u}),a.a.createElement(H,{type:"text",placeholder:"body",onChange:function(e){return p(e,"body")},value:f}),a.a.createElement(U,{onClick:function(){var e={title:u,body:f};s(""),m(""),t(e)},disabled:!f||!u},"Add new post")))},V="FETCH_POSTS",B="CREATE_POST",N="DELETE_POST",G="FETCH_POST_DETAIL",J="SAVE_EDIT",X="CREATE_COMMENT",Y=function(){return{type:V}},q=function(){return{type:"FETCH_POSTS_START"}},K=function(e){return{type:"FETCH_BLOGS_SUCCESS",payload:{posts:e}}},Q=function(e){return{type:"FETCH_POSTS_FAIL",payload:{errorMessage:e}}},W=function(){return{type:"CREATE_POST_START"}},Z=function(){return{type:"CREATE_POST_SUCCESS"}},$=function(e){return{type:"CREATE_POST_FAIL",payload:{errorMessage:e}}},ee=function(){return{type:"DELETE_POST_START"}},ne=function(){return{type:"DELETE_POST_SUCCESS"}},te=function(e){return{type:"DELETE_POST_FAIL",payload:{errorMessage:e}}},re=function(e){return{type:G,payload:{id:e}}},ae=function(){return{type:"FETCH_POST_DETAIL_START"}},oe=function(e){return{type:"FETCH_POST_DETAIL_SUCCESS",payload:{postDetail:e}}},ce=function(e){return{type:"FETCH_POST_DETAIL_FAIL",payload:{errorMessage:e}}},ie=function(){return{type:"SAVE_EDIT_START"}},ue=function(){return{type:"SAVE_EDIT_SUCCESS"}},se=function(e){return{type:"SAVE_EDIT_FAIL",payload:{errorMessage:e}}};var le=Object(u.b)((function(e){return{posts:e.posts.posts,error:e.posts.error}}),(function(e){return{onFetchPosts:function(){return e(Y())},onCreatePost:function(n){return e(function(e){return{type:B,payload:{newPost:e}}}(n))},onDeletePost:function(n){return e(function(e){return{type:N,payload:{id:e}}}(n))}}}))((function(e){var n=e.onFetchPosts,t=e.onCreatePost,o=e.onDeletePost,c=e.posts,i=e.error,u=e.setReferrerDefault;return Object(r.useEffect)((function(){u(),n()}),[n,u]),i?a.a.createElement("div",null,i):c&&a.a.createElement(z,{posts:c,onCreatePost:t,onDeletePost:o})}));function de(){var e=Object(p.a)(["\n  box-shadow: 0 0 0 1px #21ba45 inset;\n  color: #21ba45;\n  font-size: 1rem;\n  cursor: pointer;\n  min-height: 1em;\n  outline: 0;\n  border: none;\n  background: none;\n  padding: 0.75em 1.5em;\n  font-weight: 700;\n  line-height: 1em;\n  text-align: center;\n  border-radius: 0.3rem;\n  transition: all 0.25s ease;\n  :hover:enabled {\n    color: #fff;\n    background-color: #21ba45;\n  }\n  &:active:enabled {\n    background-color: grey;\n  }\n  &:disabled {\n    cursor: initial;\n    color: lightgrey;\n    box-shadow: 0 0 0 1px lightgrey inset;\n  }\n"]);return de=function(){return e},e}function be(){var e=Object(p.a)(["\n  padding: 0.5em;\n  margin-bottom: 1em;\n\n  outline: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  border-radius: 0.3em;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  &:focus {\n    border-color: #85b7d9;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]);return be=function(){return e},e}function fe(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n"]);return fe=function(){return e},e}var me=g.a.div(fe()),pe=g.a.textarea(be()),ge=g.a.button(de());var Ee=function(e){var n=e.onCreateComment,t=e.id,o=Object(r.useState)(""),c=Object(d.a)(o,2),i=c[0],u=c[1];return a.a.createElement(me,null,a.a.createElement(pe,{value:i,onChange:function(e){u(e.target.value)},placeholder:"Add comment"}),a.a.createElement(ge,{disabled:!i,onClick:function(){var e={id:t,body:i};u(""),n(e)}},"Create comment"))};function ve(){var e=Object(p.a)([""]);return ve=function(){return e},e}function Oe(){var e=Object(p.a)(["\n  padding: 0.25em 0.35em;\n  margin: 0 0 0.25em 1em;\n"]);return Oe=function(){return e},e}var he=g.a.div(Oe()),ye=g.a.p(ve());var xe=function(e){var n=e.comments,t=e.onCreateComment,r=e.id,o=n.map((function(e){return a.a.createElement(ye,{key:e.id},"- ",e.body)}));return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",null,"Comments:"),a.a.createElement(he,null,o),a.a.createElement(Ee,{onCreateComment:t,id:r}))};function Te(){var e=Object(p.a)(["\n  padding: 0.5em;\n  margin-bottom: 1em;\n\n  outline: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  border-radius: 0.3em;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  &:focus {\n    border-color: #85b7d9;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]);return Te=function(){return e},e}function Se(){var e=Object(p.a)(["\n  flex: 1 0 auto;\n  max-width: 100%;\n  padding: 0.5em;\n  margin-bottom: 0.25em;\n  outline: none;\n  border: 1px solid rgba(34, 36, 38, 0.15);\n  color: rgba(0, 0, 0, 0.9);\n  border-radius: 0.3em;\n  transition: box-shadow 0.1s ease, border-color 0.1s ease;\n  &:focus {\n    border-color: #85b7d9;\n    color: rgba(0, 0, 0, 0.8);\n  }\n"]);return Se=function(){return e},e}function Ce(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding: 0.5em 0;\n"]);return Ce=function(){return e},e}function je(){var e=Object(p.a)(["\n  margin-left: 0.5em;\n  margin: 0 0 1em 1em;\n"]);return je=function(){return e},e}function _e(){var e=Object(p.a)(["\n  font-style: italic;\n  font-size: 1em;\n  margin: 0.5em 0;\n  span {\n    font-style: normal;\n  }\n"]);return _e=function(){return e},e}function we(){var e=Object(p.a)(["\n  box-shadow: 0 0 0 1px #21ba45 inset;\n  color: #21ba45;\n  font-size: 0.8em;\n  cursor: pointer;\n  outline: 0;\n  border: none;\n  background: none;\n  padding: 0.25em 0.75em;\n  font-weight: normal;\n  line-height: 1.2;\n  text-align: center;\n  border-radius: 0.3rem;\n  transition: all 0.25s ease;\n  margin-left: 1em;\n  :hover:enabled {\n    color: #fff;\n    background-color: #21ba45;\n  }\n  &:active:enabled {\n    background-color: grey;\n  }\n  &:disabled {\n    cursor: initial;\n    color: lightgrey;\n    box-shadow: 0 0 0 1px lightgrey inset;\n  }\n"]);return we=function(){return e},e}function Pe(){var e=Object(p.a)(["\n  display: inline-block;\n  color: rgba(0, 0, 0, 0.4);\n  font-size: 0.8em;\n  line-height: 1.2;\n"]);return Pe=function(){return e},e}function Ae(){var e=Object(p.a)(["\n  display: inline-block;\n  font-size: 1.2em;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 600;\n  margin-right: 0.5em;\n  line-height: 1.2;\n"]);return Ae=function(){return e},e}function ke(){var e=Object(p.a)([""]);return ke=function(){return e},e}var De=g.a.div(ke()),Fe=g.a.div(Ae()),Ie=g.a.span(Pe()),Le=g.a.button(we()),Re=g.a.div(_e()),Me=g.a.div(je()),He=g.a.div(Ce()),Ue=g.a.input(Se()),ze=g.a.textarea(Te());var Ve=function(e){var n=e.post,t=e.onSaveEdit,o=e.onCreateComment,c=n.creator,i=void 0===c?"Anybody":c,u=n.date,s=void 0===u?"Must be date":u,l=n.title,b=n.body,f=n.comments,m=n.id,p=Object(r.useState)(!1),g=Object(d.a)(p,2),E=g[0],v=g[1],O=Object(r.useState)(l),h=Object(d.a)(O,2),y=h[0],x=h[1],T=Object(r.useState)(b),S=Object(d.a)(T,2),C=S[0],j=S[1],_=function(e,n){"title"===n&&x(e.target.value),"body"===n&&j(e.target.value)},w=a.a.createElement(a.a.Fragment,null,a.a.createElement(Re,null,a.a.createElement("span",null,"Title: "),l),a.a.createElement(Me,null,b));return E&&(w=a.a.createElement(He,null,a.a.createElement(Ue,{value:y,onChange:function(e){return _(e,"title")}}),a.a.createElement(ze,{value:C,onChange:function(e){return _(e,"body")}}))),a.a.createElement(De,null,a.a.createElement(Fe,null,i),a.a.createElement(Ie,null,s),a.a.createElement(Le,{disabled:E,onClick:function(){v(!0)}},"Edit"),a.a.createElement(Le,{disabled:!E,onClick:function(){v(!1),t({titleEdit:y,bodyEdit:C,id:m,date:s,creator:i})}},"Save"),w,a.a.createElement(xe,{comments:f,onCreateComment:o,id:m}))};var Be=Object(u.b)((function(e){return{post:e.posts.post,error:e.posts.error}}),(function(e){return{onFetchPostDetail:function(n){return e(re(n))},onSaveEdit:function(n){return e(function(e){return{type:J,payload:{editedPost:e}}}(n))},onCreateComment:function(n){return e(function(e){return{type:X,payload:{newComment:e}}}(n))}}}))((function(e){var n=e.onFetchPostDetail,t=e.onSaveEdit,o=e.onCreateComment,c=e.post,i=(e.isFetching,e.error),u=e.referrer,s=Object(b.g)().postId;if(Object(r.useEffect)((function(){n(s)}),[n,s]),i)return a.a.createElement("div",null,i);var l=c&&a.a.createElement(Ve,{post:c,onSaveEdit:t,onCreateComment:o});return u&&(l=a.a.createElement(b.a,{to:u})),l}));function Ne(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n  padding: 1.5em;\n"]);return Ne=function(){return e},e}function Ge(){var e=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  max-width: 1200px;\n  margin: 0 auto;\n"]);return Ge=function(){return e},e}var Je=g.a.div(Ge()),Xe=g.a.div(Ne());function Ye(){var e=Object(p.a)(["\n  transform: rotate(180deg);\n  border: none;\n  padding: 0;\n  margin: 0;\n  background-color: transparent;\n  color: #fff;\n  font-size: 2em;\n  font-weight: 700;\n  position: absolute;\n  top: 0;\n  left: 0;\n  line-height: 50px;\n  margin-left: 20px;\n  outline: none;\n  transition: all 0.3s ease;\n  &:hover {\n    cursor: pointer;\n    font-size: 2.1em;\n    color: lightgreen;\n  }\n"]);return Ye=function(){return e},e}function qe(){var e=Object(p.a)(["\n  color: white;\n  align-self: center;\n"]);return qe=function(){return e},e}function Ke(){var e=Object(p.a)(["\n  position: relative;\n  display: flex;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  background-color: orange;\n"]);return Ke=function(){return e},e}var Qe=g.a.header(Ke()),We=g.a.h2(qe()),Ze=g.a.button(Ye());var $e=function(e){var n=e.handleClickBack;return a.a.createElement(a.a.Fragment,null,a.a.createElement(Qe,null,a.a.createElement(Ze,{onClick:n},"\u27a6"),a.a.createElement(We,null,"Develops Today")))};var en=function(){var e=Object(r.useState)(null),n=Object(d.a)(e,2),t=n[0],o=n[1],c=a.a.createElement(b.d,null,a.a.createElement(b.b,{path:"/posts",exact:!0},a.a.createElement(le,{setReferrerDefault:function(){o(null)}})),a.a.createElement(b.b,{path:"/posts/:postId",exact:!0},a.a.createElement(Be,{referrer:t})),a.a.createElement(b.a,{to:"/posts"}));return a.a.createElement(Je,null,a.a.createElement($e,{handleClickBack:function(){o("/posts")}}),a.a.createElement(Xe,null,c))},nn=t(46);function tn(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function rn(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?tn(t,!0).forEach((function(n){Object(nn.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):tn(t).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var an={posts:null,post:null,isFetching:!1,isCreating:!1,isFetchingPostDetail:!1,isEditing:!1,isCommenting:!1,error:!1},on=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,n=arguments.length>1?arguments[1]:void 0,t=n.payload;switch(n.type){case"FETCH_POSTS_START":return rn({},e,{error:!1,isFetching:!0});case"FETCH_BLOGS_SUCCESS":return rn({},e,{posts:t.posts,error:!1,isFetching:!1});case"FETCH_POSTS_FAIL":return rn({},e,{error:t.errorMessage,isFetching:!1});case"CREATE_POST_START":return rn({},e,{error:!1,isCreating:!0});case"CREATE_POST_SUCCESS":return rn({},e,{error:!1,isCreating:!1});case"CREATE_POST_FAIL":return rn({},e,{error:t.errorMessage,isCreating:!1});case"DELETE_POST_START":return rn({},e,{error:!1,isCommenting:!0});case"DELETE_POST_SUCCESS":return rn({},e,{error:!1,isCommenting:!1});case"DELETE_POST_FAIL":return rn({},e,{error:t.errorMessage,isCommenting:!1});case"FETCH_POST_DETAIL_START":return rn({},e,{error:!1,isFetchingPostDetail:!0});case"FETCH_POST_DETAIL_SUCCESS":return rn({},e,{post:t.postDetail,error:!1,isFetchingPostDetail:!1});case"FETCH_POST_DETAIL_FAIL":return rn({},e,{error:t.errorMessage,isFetchingPostDetail:!1});case"SAVE_EDIT_START":return rn({},e,{error:!1,isEditing:!0});case"SAVE_EDIT_SUCCESS":return rn({},e,{error:!1,isEditing:!1});case"SAVE_EDIT_FAIL":return rn({},e,{error:t.errorMessage,isEditing:!1});case"CREATE_COMMENT_START":return rn({},e,{error:!1,isEditing:!0});case"CREATE_COMMENT_SUCCESS":return rn({},e,{error:!1,isEditing:!1});case"CREATE_COMMENT_FAIL":return rn({},e,{error:t.errorMessage,isEditing:!1});default:return e}},cn=t(10),un=t.n(cn),sn=t(7),ln=t(47),dn=t.n(ln).a.create({baseURL:"https://simple-blog-api.crew.red",headers:{"Content-Type":"application/json"}});function bn(){var e=new Date,n=e.getFullYear(),t=e.getMonth()+1,r=e.getDate();return"".concat(n,"-").concat(t<10?"0".concat(t):t,"-").concat(r)}var fn=un.a.mark(On),mn=un.a.mark(hn),pn=un.a.mark(yn),gn=un.a.mark(xn),En=un.a.mark(Tn),vn=un.a.mark(Sn);function On(){var e,n,t;return un.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(sn.b)(q());case 2:return r.prev=2,r.next=5,dn.get("/posts");case 5:return e=r.sent,n=e.data,r.next=9,Object(sn.b)(K(n));case 9:r.next=16;break;case 11:return r.prev=11,r.t0=r.catch(2),t=r.t0.message,r.next=16,Object(sn.b)(Q(t));case 16:case"end":return r.stop()}}),fn,null,[[2,11]])}function hn(e){var n,t,r,a,o,c,i;return un.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return n=e.payload,t=n.newPost,r=t.title,a=t.body,o=t.creator,c={title:r,body:a,creator:void 0===o?"Oleh":o,date:bn()},u.next=5,Object(sn.b)(W());case 5:return u.prev=5,u.next=8,dn.post("/posts",c);case 8:return u.next=10,Object(sn.b)(Z());case 10:return u.next=12,Object(sn.b)(Y());case 12:u.next=19;break;case 14:return u.prev=14,u.t0=u.catch(5),i=u.t0.message,u.next=19,Object(sn.b)($(i));case 19:case"end":return u.stop()}}),mn,null,[[5,14]])}function yn(e){var n,t,r;return un.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return n=e.payload,t=n.id,a.next=4,Object(sn.b)(ee());case 4:return a.prev=4,a.next=7,dn.delete("/posts/".concat(t));case 7:return a.next=9,Object(sn.b)(ne());case 9:return a.next=11,Object(sn.b)(Y());case 11:a.next=18;break;case 13:return a.prev=13,a.t0=a.catch(4),r=a.t0.message,a.next=18,Object(sn.b)(te(r));case 18:case"end":return a.stop()}}),pn,null,[[4,13]])}function xn(e){var n,t,r,a,o;return un.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return n=e.payload,t=n.id,c.next=4,Object(sn.b)(ae());case 4:return c.prev=4,c.next=7,dn.get("/posts/".concat(t,"?_embed=comments"));case 7:return r=c.sent,a=r.data,c.next=11,Object(sn.b)(oe(a));case 11:c.next=18;break;case 13:return c.prev=13,c.t0=c.catch(4),o=c.t0.message,c.next=18,Object(sn.b)(ce(o));case 18:case"end":return c.stop()}}),gn,null,[[4,13]])}function Tn(e){var n,t,r,a,o,c,i,u,s,l;return un.a.wrap((function(d){for(;;)switch(d.prev=d.next){case 0:return n=e.payload,t=n.editedPost,r=t.titleEdit,a=t.bodyEdit,o=t.id,c=t.creator,i=void 0===c?"Anybody":c,u=t.date,s={title:r,body:a,creator:i,date:u},d.next=5,Object(sn.b)(ie());case 5:return d.prev=5,d.next=8,dn.put("/posts/".concat(o),s);case 8:return d.next=10,Object(sn.b)(re(o));case 10:return d.next=12,Object(sn.b)(ue());case 12:d.next=19;break;case 14:return d.prev=14,d.t0=d.catch(5),l=d.t0.message,d.next=19,Object(sn.b)(se(l));case 19:case"end":return d.stop()}}),En,null,[[5,14]])}function Sn(e){var n,t,r,a,o,c;return un.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return n=e.payload,t=n.newComment,r=t.body,a=t.id,o={body:r,postId:a},i.next=5,Object(sn.b)(ie());case 5:return i.prev=5,i.next=8,dn.post("/comments",o);case 8:return i.next=10,Object(sn.b)(re(a));case 10:return i.next=12,Object(sn.b)(ue());case 12:i.next=19;break;case 14:return i.prev=14,i.t0=i.catch(5),c=i.t0.message,i.next=19,Object(sn.b)(se(c));case 19:case"end":return i.stop()}}),vn,null,[[5,14]])}var Cn=un.a.mark(jn);function jn(){return un.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(sn.a)([Object(sn.c)(V,On),Object(sn.c)(B,hn),Object(sn.c)(N,yn),Object(sn.c)(G,xn),Object(sn.c)(J,Tn),Object(sn.c)(X,Sn)]);case 2:case"end":return e.stop()}}),Cn)}var _n=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d,wn=Object(l.a)(),Pn=Object(s.c)({posts:on}),An=Object(s.e)(Pn,_n(Object(s.a)(wn)));wn.run(jn);var kn=a.a.createElement(u.a,{store:An},a.a.createElement(i.a,null,a.a.createElement(en,null)));c.a.render(kn,document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.57632b5c.chunk.js.map