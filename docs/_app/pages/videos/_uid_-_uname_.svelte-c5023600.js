import{S as I,i as N,s as q,w as C,x as L,y as O,q as P,o as U,B as j,U as A,e as v,t as $,c as E,a as T,h as b,d as f,g as D,H as p,K as H,a5 as K,a7 as V,I as w,j as z,a2 as F,L as G,a8 as J}from"../../chunks/vendor-611aba13.js";import{a as M}from"../../chunks/navigation-076a75e1.js";import{p as Q}from"../../chunks/stores-76a0209b.js";import{V as R}from"../../chunks/Videos-d8590486.js";import{m as S}from"../../chunks/stores-dbe2d455.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/util-b72d8139.js";function k(n,e,a){const t=n.slice();return t[6]=e[a],t}function B(n){let e,a=n[6]+"",t,r;return{c(){e=v("option"),t=$(a),this.h()},l(l){e=E(l,"OPTION",{});var c=T(e);t=b(c,a),c.forEach(f),this.h()},h(){e.__value=r=n[6],e.value=e.__value},m(l,c){D(l,e,c),p(e,t)},p:H,d(l){l&&f(e)}}}function W(n){let e,a,t=n[0].data.length+"",r,l,c,h,d,g,u=n[3],i=[];for(let s=0;s<u.length;s+=1)i[s]=B(k(n,u,s));return{c(){e=v("div"),a=v("span"),r=$(t),l=$(" records"),c=$(`
		- Type:
		`),h=v("select");for(let s=0;s<i.length;s+=1)i[s].c();this.h()},l(s){e=E(s,"DIV",{});var _=T(e);a=E(_,"SPAN",{});var o=T(a);r=b(o,t),l=b(o," records"),o.forEach(f),c=b(_,`
		- Type:
		`),h=E(_,"SELECT",{});var m=T(h);for(let y=0;y<i.length;y+=1)i[y].l(m);m.forEach(f),_.forEach(f),this.h()},h(){n[1]===void 0&&K(()=>n[4].call(h))},m(s,_){D(s,e,_),p(e,a),p(a,r),p(a,l),p(e,c),p(e,h);for(let o=0;o<i.length;o+=1)i[o].m(h,null);V(h,n[1]),d||(g=[w(h,"change",n[4]),w(h,"change",n[5])],d=!0)},p(s,_){if(_&1&&t!==(t=s[0].data.length+"")&&z(r,t),_&8){u=s[3];let o;for(o=0;o<u.length;o+=1){const m=k(s,u,o);i[o]?i[o].p(m,_):(i[o]=B(m),i[o].c(),i[o].m(h,null))}for(;o<i.length;o+=1)i[o].d(1);i.length=u.length}_&10&&V(h,s[1])},d(s){s&&f(e),F(i,s),d=!1,G(g)}}}function X(n){let e,a;return e=new R({props:{videos:n[0],uname:n[2].params.uname,title:"Videos",$$slots:{default:[W]},$$scope:{ctx:n}}}),{c(){C(e.$$.fragment)},l(t){L(e.$$.fragment,t)},m(t,r){O(e,t,r),a=!0},p(t,[r]){const l={};r&1&&(l.videos=t[0]),r&4&&(l.uname=t[2].params.uname),r&519&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)},i(t){a||(P(e.$$.fragment,t),a=!0)},o(t){U(e.$$.fragment,t),a=!1},d(t){j(e,t)}}}function Y(n,e,a){let t;A(n,Q,g=>a(2,t=g));let r,l=["all","upload","archive","highlight"],c=l[0];M(async()=>{a(0,r=await S(t.params.uid,c))});function h(){c=J(this),a(1,c),a(3,l)}return[r,c,t,l,h,async()=>a(0,r=await S(t.params.uid,c))]}class oe extends I{constructor(e){super();N(this,e,Y,X,q,{})}}export{oe as default};
