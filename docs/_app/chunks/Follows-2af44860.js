import{S as se,i as ae,s as fe,e as k,c as b,a0 as Z,b as w,g as F,d as h,t as A,k as j,a as D,h as O,m as B,a1 as M,H as v,I as P,j as C,K as T,l as $,f as _e,G as x,n as ne,o as K,p as ue,q as H,L as he,w as ce,x as de,y as me,B as ve,a2 as pe}from"./vendor-d20115e3.js";import{h as ee,j as we}from"./stores-cf2b4674.js";function le(i){let e,t;return{c(){e=k("img"),this.h()},l(o){e=b(o,"IMG",{src:!0,alt:!0}),this.h()},h(){Z(e.src,t=i[0].user.profile_image_url)||w(e,"src",t),w(e,"alt","logo")},m(o,u){F(o,e,u)},p(o,u){u&1&&!Z(e.src,t=o[0].user.profile_image_url)&&w(e,"src",t)},d(o){o&&h(e)}}}function te(i){let e,t=i[0].user.description+"",o,u,f,n,d=ee(i[0].followed_at)+"",a,r,s;return{c(){e=k("div"),o=A(t),u=j(),f=k("div"),n=A("followed: "),a=A(d),this.h()},l(c){e=b(c,"DIV",{title:!0});var l=D(e);o=O(l,t),l.forEach(h),u=B(c),f=b(c,"DIV",{});var _=D(f);n=O(_,"followed: "),a=O(_,d),_.forEach(h),this.h()},h(){w(e,"title","click to expand"),M(e,"max-chars",i[1]),M(f,"hidden",i[1])},m(c,l){F(c,e,l),v(e,o),F(c,u,l),F(c,f,l),v(f,n),v(f,a),r||(s=P(e,"click",i[2]),r=!0)},p(c,l){l&1&&t!==(t=c[0].user.description+"")&&C(o,t),l&2&&M(e,"max-chars",c[1]),l&1&&d!==(d=ee(c[0].followed_at)+"")&&C(a,d),l&2&&M(f,"hidden",c[1])},d(c){c&&h(e),c&&h(u),c&&h(f),r=!1,s()}}}function ge(i){let e,t,o,u,f,n,d,a=i[0].to_login+"",r,s,c,l,_,m,E,y,p,I,J,q,R,L,S=i[0].user&&le(i),V=i[0].user&&te(i);return{c(){e=k("div"),t=k("a"),S&&S.c(),u=j(),f=k("div"),n=k("div"),d=k("strong"),r=A(a),s=j(),V&&V.c(),c=j(),l=k("a"),_=A("Follows"),E=j(),y=k("a"),p=A("Videos"),J=j(),q=k("a"),R=A("Streams"),this.h()},l(g){e=b(g,"DIV",{class:!0});var N=D(e);t=b(N,"A",{class:!0,href:!0,target:!0});var U=D(t);S&&S.l(U),U.forEach(h),u=B(N),f=b(N,"DIV",{});var G=D(f);n=b(G,"DIV",{});var z=D(n);d=b(z,"STRONG",{});var Q=D(d);r=O(Q,a),Q.forEach(h),z.forEach(h),s=B(G),V&&V.l(G),c=B(G),l=b(G,"A",{href:!0});var W=D(l);_=O(W,"Follows"),W.forEach(h),E=B(G),y=b(G,"A",{href:!0});var X=D(y);p=O(X,"Videos"),X.forEach(h),J=B(G),q=b(G,"A",{href:!0});var Y=D(q);R=O(Y,"Streams"),Y.forEach(h),G.forEach(h),N.forEach(h),this.h()},h(){w(t,"class","image-link"),w(t,"href",o="https://twitch.tv/"+i[0].to_login),w(t,"target","_blank"),w(l,"href",m="/follows/"+i[0].to_id+"-"+i[0].to_login),w(y,"href",I="/videos/"+i[0].to_id+"-"+i[0].to_login),w(q,"href",L="/streams/"+i[0].to_id+"-"+i[0].to_login),w(e,"class","follow card")},m(g,N){F(g,e,N),v(e,t),S&&S.m(t,null),v(e,u),v(e,f),v(f,n),v(n,d),v(d,r),v(f,s),V&&V.m(f,null),v(f,c),v(f,l),v(l,_),v(f,E),v(f,y),v(y,p),v(f,J),v(f,q),v(q,R)},p(g,[N]){g[0].user?S?S.p(g,N):(S=le(g),S.c(),S.m(t,null)):S&&(S.d(1),S=null),N&1&&o!==(o="https://twitch.tv/"+g[0].to_login)&&w(t,"href",o),N&1&&a!==(a=g[0].to_login+"")&&C(r,a),g[0].user?V?V.p(g,N):(V=te(g),V.c(),V.m(f,c)):V&&(V.d(1),V=null),N&1&&m!==(m="/follows/"+g[0].to_id+"-"+g[0].to_login)&&w(l,"href",m),N&1&&I!==(I="/videos/"+g[0].to_id+"-"+g[0].to_login)&&w(y,"href",I),N&1&&L!==(L="/streams/"+g[0].to_id+"-"+g[0].to_login)&&w(q,"href",L)},i:T,o:T,d(g){g&&h(e),S&&S.d(),V&&V.d()}}}function ke(i,e,t){let{follow:o}=e,u=!0;const f=()=>t(1,u=!u);return i.$$set=n=>{"follow"in n&&t(0,o=n.follow)},[o,u,f]}class be extends se{constructor(e){super();ae(this,e,ke,ge,fe,{follow:0})}}function oe(i,e,t){const o=i.slice();return o[9]=e[t],o}function Ee(i){let e,t;return{c(){e=k("div"),t=A("Nothing here")},l(o){e=b(o,"DIV",{});var u=D(e);t=O(u,"Nothing here"),u.forEach(h)},m(o,u){F(o,e,u),v(e,t)},p:T,i:T,o:T,d(o){o&&h(e)}}}function Ie(i){let e,t=i[3].data.length+"",o,u,f,n,d,a=i[0]&&ie(i),r=i[3].data,s=[];for(let l=0;l<r.length;l+=1)s[l]=re(oe(i,r,l));const c=l=>K(s[l],1,1,()=>{s[l]=null});return{c(){e=k("div"),o=A(t),u=A(` records
		`),a&&a.c(),f=j(),n=k("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=b(l,"DIV",{});var _=D(e);o=O(_,t),u=O(_,` records
		`),a&&a.l(_),_.forEach(h),f=B(l),n=b(l,"DIV",{id:!0});var m=D(n);for(let E=0;E<s.length;E+=1)s[E].l(m);m.forEach(h),this.h()},h(){w(n,"id","follows")},m(l,_){F(l,e,_),v(e,o),v(e,u),a&&a.m(e,null),F(l,f,_),F(l,n,_);for(let m=0;m<s.length;m+=1)s[m].m(n,null);d=!0},p(l,_){if((!d||_&8)&&t!==(t=l[3].data.length+"")&&C(o,t),l[0]?a?a.p(l,_):(a=ie(l),a.c(),a.m(e,null)):a&&(a.d(1),a=null),_&8){r=l[3].data;let m;for(m=0;m<r.length;m+=1){const E=oe(l,r,m);s[m]?(s[m].p(E,_),H(s[m],1)):(s[m]=re(E),s[m].c(),H(s[m],1),s[m].m(n,null))}for(ne(),m=r.length;m<s.length;m+=1)c(m);ue()}},i(l){if(!d){for(let _=0;_<r.length;_+=1)H(s[_]);d=!0}},o(l){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)K(s[_]);d=!1},d(l){l&&h(e),a&&a.d(),l&&h(f),l&&h(n),pe(s,l)}}}function ie(i){let e,t,o,u,f,n,d,a;return{c(){e=A("- "),t=k("a"),o=A(i[0]),f=j(),n=k("a"),d=A("Streams"),this.h()},l(r){e=O(r,"- "),t=b(r,"A",{href:!0,target:!0});var s=D(t);o=O(s,i[0]),s.forEach(h),f=B(r),n=b(r,"A",{href:!0});var c=D(n);d=O(c,"Streams"),c.forEach(h),this.h()},h(){w(t,"href",u="https://twitch.tv/"+i[0]),w(t,"target","_blank"),w(n,"href",a="/streams/"+i[1]+"-"+i[0])},m(r,s){F(r,e,s),F(r,t,s),v(t,o),F(r,f,s),F(r,n,s),v(n,d)},p(r,s){s&1&&C(o,r[0]),s&1&&u!==(u="https://twitch.tv/"+r[0])&&w(t,"href",u),s&3&&a!==(a="/streams/"+r[1]+"-"+r[0])&&w(n,"href",a)},d(r){r&&h(e),r&&h(t),r&&h(f),r&&h(n)}}}function re(i){let e,t;return e=new be({props:{follow:i[9]}}),{c(){ce(e.$$.fragment)},l(o){de(e.$$.fragment,o)},m(o,u){me(e,o,u),t=!0},p(o,u){const f={};u&8&&(f.follow=o[9]),e.$set(f)},i(o){t||(H(e.$$.fragment,o),t=!0)},o(o){K(e.$$.fragment,o),t=!1},d(o){ve(e,o)}}}function De(i){let e,t,o,u,f,n,d,a,r,s,c,l,_;const m=[Ie,Ee],E=[];function y(p,I){return p[3]?0:1}return a=y(i),r=E[a]=m[a](i),{c(){e=k("div"),t=k("h1"),o=A("Follows"),u=j(),f=k("div"),n=k("input"),d=j(),r.c(),s=$(),this.h()},l(p){e=b(p,"DIV",{class:!0});var I=D(e);t=b(I,"H1",{});var J=D(t);o=O(J,"Follows"),J.forEach(h),u=B(I),f=b(I,"DIV",{});var q=D(f);n=b(q,"INPUT",{type:!0,placeholder:!0,style:!0}),q.forEach(h),I.forEach(h),d=B(p),r.l(p),s=$(),this.h()},h(){w(n,"type","text"),w(n,"placeholder","Filter"),_e(n,"width","15ch"),w(e,"class","follows-filter")},m(p,I){F(p,e,I),v(e,t),v(t,o),v(e,u),v(e,f),v(f,n),x(n,i[2]),F(p,d,I),E[a].m(p,I),F(p,s,I),c=!0,l||(_=[P(n,"input",i[6]),P(n,"input",i[7]),P(n,"keydown",i[8])],l=!0)},p(p,[I]){I&4&&n.value!==p[2]&&x(n,p[2]);let J=a;a=y(p),a===J?E[a].p(p,I):(ne(),K(E[J],1,1,()=>{E[J]=null}),ue(),r=E[a],r?r.p(p,I):(r=E[a]=m[a](p),r.c()),H(r,1),r.m(s.parentNode,s))},i(p){c||(H(r),c=!0)},o(p){K(r),c=!1},d(p){p&&h(e),p&&h(d),E[a].d(p),p&&h(s),l=!1,he(_)}}}function Se(i,e,t){let o,{follows:u}=e,{uname:f}=e,{uid:n}=e,d="";const a=l=>{t(3,o.data=JSON.parse(JSON.stringify(u)).data.filter(_=>_.to_login.includes(d)),o)};function r(){d=this.value,t(2,d)}const s=l=>we(l,a,500),c=l=>{l.key==="Escape"&&(t(2,d=""),a())};return i.$$set=l=>{"follows"in l&&t(5,u=l.follows),"uname"in l&&t(0,f=l.uname),"uid"in l&&t(1,n=l.uid)},i.$$.update=()=>{i.$$.dirty&32&&t(3,o=(()=>{try{return JSON.parse(JSON.stringify(u))}catch{return{data:[]}}})())},[f,n,d,o,a,u,r,s,c]}class Ne extends se{constructor(e){super();ae(this,e,Se,De,fe,{follows:5,uname:0,uid:1})}}export{Ne as F};
