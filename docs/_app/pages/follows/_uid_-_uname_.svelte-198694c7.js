import{S as r,i as m,s as i,w as u,x as p,y as f,q as l,o as c,B as _,U as w}from"../../chunks/vendor-611aba13.js";import{a as $}from"../../chunks/navigation-076a75e1.js";import{p as g}from"../../chunks/stores-76a0209b.js";import{F as d}from"../../chunks/Follows-9efa8606.js";import{e as h}from"../../chunks/stores-dbe2d455.js";import"../../chunks/singletons-d1fb5791.js";import"../../chunks/util-b72d8139.js";function B(t){let o,s;return o=new d({props:{follows:t[0],uname:t[1].params.uname,uid:t[1].params.uid}}),{c(){u(o.$$.fragment)},l(a){p(o.$$.fragment,a)},m(a,e){f(o,a,e),s=!0},p(a,[e]){const n={};e&1&&(n.follows=a[0]),e&2&&(n.uname=a[1].params.uname),e&2&&(n.uid=a[1].params.uid),o.$set(n)},i(a){s||(l(o.$$.fragment,a),s=!0)},o(a){c(o.$$.fragment,a),s=!1},d(a){_(o,a)}}}function F(t,o,s){let a;w(t,g,n=>s(1,a=n));let e;return $(async()=>{s(0,e=await h(a.params.uid))}),[e,a]}class C extends r{constructor(o){super();m(this,o,F,B,i,{})}}export{C as default};
