import{S as se,i as fe,s as ae,e as k,c as b,a0 as Z,b as p,g as F,d as h,t as A,k as B,a as D,h as O,m as H,a1 as M,H as v,I as P,j as C,K as j,l as $,f as _e,G as x,n as ne,o as K,p as ue,q as T,L as he,w as ce,x as de,y as me,B as ve,a2 as we}from"./vendor-611aba13.js";import{f as ee,d as pe}from"./util-b72d8139.js";function le(i){let e,t;return{c(){e=k("img"),this.h()},l(o){e=b(o,"IMG",{src:!0,alt:!0}),this.h()},h(){Z(e.src,t=i[0].user.profile_image_url)||p(e,"src",t),p(e,"alt","logo")},m(o,u){F(o,e,u)},p(o,u){u&1&&!Z(e.src,t=o[0].user.profile_image_url)&&p(e,"src",t)},d(o){o&&h(e)}}}function te(i){let e,t=i[0].user.description+"",o,u,a,n,d=ee(i[0].followed_at)+"",f,r,s;return{c(){e=k("div"),o=A(t),u=B(),a=k("div"),n=A("followed: "),f=A(d),this.h()},l(c){e=b(c,"DIV",{title:!0});var l=D(e);o=O(l,t),l.forEach(h),u=H(c),a=b(c,"DIV",{});var _=D(a);n=O(_,"followed: "),f=O(_,d),_.forEach(h),this.h()},h(){p(e,"title","click to expand"),M(e,"max-chars",i[1]),M(a,"hidden",i[1])},m(c,l){F(c,e,l),v(e,o),F(c,u,l),F(c,a,l),v(a,n),v(a,f),r||(s=P(e,"click",i[2]),r=!0)},p(c,l){l&1&&t!==(t=c[0].user.description+"")&&C(o,t),l&2&&M(e,"max-chars",c[1]),l&1&&d!==(d=ee(c[0].followed_at)+"")&&C(f,d),l&2&&M(a,"hidden",c[1])},d(c){c&&h(e),c&&h(u),c&&h(a),r=!1,s()}}}function ge(i){let e,t,o,u,a,n,d,f=i[0].to_login+"",r,s,c,l,_,m,E,y,w,I,J,q,R,L,S=i[0].user&&le(i),V=i[0].user&&te(i);return{c(){e=k("div"),t=k("a"),S&&S.c(),u=B(),a=k("div"),n=k("div"),d=k("strong"),r=A(f),s=B(),V&&V.c(),c=B(),l=k("a"),_=A("Follows"),E=B(),y=k("a"),w=A("Videos"),J=B(),q=k("a"),R=A("Streams"),this.h()},l(g){e=b(g,"DIV",{class:!0});var N=D(e);t=b(N,"A",{class:!0,href:!0,target:!0});var U=D(t);S&&S.l(U),U.forEach(h),u=H(N),a=b(N,"DIV",{});var G=D(a);n=b(G,"DIV",{});var z=D(n);d=b(z,"STRONG",{});var Q=D(d);r=O(Q,f),Q.forEach(h),z.forEach(h),s=H(G),V&&V.l(G),c=H(G),l=b(G,"A",{href:!0});var W=D(l);_=O(W,"Follows"),W.forEach(h),E=H(G),y=b(G,"A",{href:!0});var X=D(y);w=O(X,"Videos"),X.forEach(h),J=H(G),q=b(G,"A",{href:!0});var Y=D(q);R=O(Y,"Streams"),Y.forEach(h),G.forEach(h),N.forEach(h),this.h()},h(){p(t,"class","image-link"),p(t,"href",o="https://twitch.tv/"+i[0].to_login),p(t,"target","_blank"),p(l,"href",m="/twitch-follower/follows/"+i[0].to_id+"-"+i[0].to_login),p(y,"href",I="/twitch-follower/videos/"+i[0].to_id+"-"+i[0].to_login),p(q,"href",L="/twitch-follower/streams/"+i[0].to_id+"-"+i[0].to_login),p(e,"class","follow card")},m(g,N){F(g,e,N),v(e,t),S&&S.m(t,null),v(e,u),v(e,a),v(a,n),v(n,d),v(d,r),v(a,s),V&&V.m(a,null),v(a,c),v(a,l),v(l,_),v(a,E),v(a,y),v(y,w),v(a,J),v(a,q),v(q,R)},p(g,[N]){g[0].user?S?S.p(g,N):(S=le(g),S.c(),S.m(t,null)):S&&(S.d(1),S=null),N&1&&o!==(o="https://twitch.tv/"+g[0].to_login)&&p(t,"href",o),N&1&&f!==(f=g[0].to_login+"")&&C(r,f),g[0].user?V?V.p(g,N):(V=te(g),V.c(),V.m(a,c)):V&&(V.d(1),V=null),N&1&&m!==(m="/twitch-follower/follows/"+g[0].to_id+"-"+g[0].to_login)&&p(l,"href",m),N&1&&I!==(I="/twitch-follower/videos/"+g[0].to_id+"-"+g[0].to_login)&&p(y,"href",I),N&1&&L!==(L="/twitch-follower/streams/"+g[0].to_id+"-"+g[0].to_login)&&p(q,"href",L)},i:j,o:j,d(g){g&&h(e),S&&S.d(),V&&V.d()}}}function ke(i,e,t){let{follow:o}=e,u=!0;const a=()=>t(1,u=!u);return i.$$set=n=>{"follow"in n&&t(0,o=n.follow)},[o,u,a]}class be extends se{constructor(e){super();fe(this,e,ke,ge,ae,{follow:0})}}function oe(i,e,t){const o=i.slice();return o[9]=e[t],o}function Ee(i){let e,t;return{c(){e=k("div"),t=A("Nothing here")},l(o){e=b(o,"DIV",{});var u=D(e);t=O(u,"Nothing here"),u.forEach(h)},m(o,u){F(o,e,u),v(e,t)},p:j,i:j,o:j,d(o){o&&h(e)}}}function Ie(i){let e,t=i[3].data.length+"",o,u,a,n,d,f=i[0]&&ie(i),r=i[3].data,s=[];for(let l=0;l<r.length;l+=1)s[l]=re(oe(i,r,l));const c=l=>K(s[l],1,1,()=>{s[l]=null});return{c(){e=k("div"),o=A(t),u=A(` records
		`),f&&f.c(),a=B(),n=k("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=b(l,"DIV",{});var _=D(e);o=O(_,t),u=O(_,` records
		`),f&&f.l(_),_.forEach(h),a=H(l),n=b(l,"DIV",{id:!0});var m=D(n);for(let E=0;E<s.length;E+=1)s[E].l(m);m.forEach(h),this.h()},h(){p(n,"id","follows")},m(l,_){F(l,e,_),v(e,o),v(e,u),f&&f.m(e,null),F(l,a,_),F(l,n,_);for(let m=0;m<s.length;m+=1)s[m].m(n,null);d=!0},p(l,_){if((!d||_&8)&&t!==(t=l[3].data.length+"")&&C(o,t),l[0]?f?f.p(l,_):(f=ie(l),f.c(),f.m(e,null)):f&&(f.d(1),f=null),_&8){r=l[3].data;let m;for(m=0;m<r.length;m+=1){const E=oe(l,r,m);s[m]?(s[m].p(E,_),T(s[m],1)):(s[m]=re(E),s[m].c(),T(s[m],1),s[m].m(n,null))}for(ne(),m=r.length;m<s.length;m+=1)c(m);ue()}},i(l){if(!d){for(let _=0;_<r.length;_+=1)T(s[_]);d=!0}},o(l){s=s.filter(Boolean);for(let _=0;_<s.length;_+=1)K(s[_]);d=!1},d(l){l&&h(e),f&&f.d(),l&&h(a),l&&h(n),we(s,l)}}}function ie(i){let e,t,o,u,a,n,d,f;return{c(){e=A("- "),t=k("a"),o=A(i[0]),a=B(),n=k("a"),d=A("Streams"),this.h()},l(r){e=O(r,"- "),t=b(r,"A",{href:!0,target:!0});var s=D(t);o=O(s,i[0]),s.forEach(h),a=H(r),n=b(r,"A",{href:!0});var c=D(n);d=O(c,"Streams"),c.forEach(h),this.h()},h(){p(t,"href",u="https://twitch.tv/"+i[0]),p(t,"target","_blank"),p(n,"href",f="/twitch-follower/streams/"+i[1]+"-"+i[0])},m(r,s){F(r,e,s),F(r,t,s),v(t,o),F(r,a,s),F(r,n,s),v(n,d)},p(r,s){s&1&&C(o,r[0]),s&1&&u!==(u="https://twitch.tv/"+r[0])&&p(t,"href",u),s&3&&f!==(f="/twitch-follower/streams/"+r[1]+"-"+r[0])&&p(n,"href",f)},d(r){r&&h(e),r&&h(t),r&&h(a),r&&h(n)}}}function re(i){let e,t;return e=new be({props:{follow:i[9]}}),{c(){ce(e.$$.fragment)},l(o){de(e.$$.fragment,o)},m(o,u){me(e,o,u),t=!0},p(o,u){const a={};u&8&&(a.follow=o[9]),e.$set(a)},i(o){t||(T(e.$$.fragment,o),t=!0)},o(o){K(e.$$.fragment,o),t=!1},d(o){ve(e,o)}}}function De(i){let e,t,o,u,a,n,d,f,r,s,c,l,_;const m=[Ie,Ee],E=[];function y(w,I){return w[3]?0:1}return f=y(i),r=E[f]=m[f](i),{c(){e=k("div"),t=k("h1"),o=A("Follows"),u=B(),a=k("div"),n=k("input"),d=B(),r.c(),s=$(),this.h()},l(w){e=b(w,"DIV",{class:!0});var I=D(e);t=b(I,"H1",{});var J=D(t);o=O(J,"Follows"),J.forEach(h),u=H(I),a=b(I,"DIV",{});var q=D(a);n=b(q,"INPUT",{type:!0,placeholder:!0,style:!0}),q.forEach(h),I.forEach(h),d=H(w),r.l(w),s=$(),this.h()},h(){p(n,"type","text"),p(n,"placeholder","Filter"),_e(n,"width","15ch"),p(e,"class","follows-filter")},m(w,I){F(w,e,I),v(e,t),v(t,o),v(e,u),v(e,a),v(a,n),x(n,i[2]),F(w,d,I),E[f].m(w,I),F(w,s,I),c=!0,l||(_=[P(n,"input",i[6]),P(n,"input",i[7]),P(n,"keydown",i[8])],l=!0)},p(w,[I]){I&4&&n.value!==w[2]&&x(n,w[2]);let J=f;f=y(w),f===J?E[f].p(w,I):(ne(),K(E[J],1,1,()=>{E[J]=null}),ue(),r=E[f],r?r.p(w,I):(r=E[f]=m[f](w),r.c()),T(r,1),r.m(s.parentNode,s))},i(w){c||(T(r),c=!0)},o(w){K(r),c=!1},d(w){w&&h(e),w&&h(d),E[f].d(w),w&&h(s),l=!1,he(_)}}}function Se(i,e,t){let o,{follows:u}=e,{uname:a}=e,{uid:n}=e,d="";const f=l=>{t(3,o.data=JSON.parse(JSON.stringify(u)).data.filter(_=>_.to_login.includes(d)),o)};function r(){d=this.value,t(2,d)}const s=l=>pe(l,f,500),c=l=>{l.key==="Escape"&&(t(2,d=""),f())};return i.$$set=l=>{"follows"in l&&t(5,u=l.follows),"uname"in l&&t(0,a=l.uname),"uid"in l&&t(1,n=l.uid)},i.$$.update=()=>{i.$$.dirty&32&&t(3,o=(()=>{try{return JSON.parse(JSON.stringify(u))}catch{return{data:[]}}})())},[a,n,d,o,f,u,r,s,c]}class Ne extends se{constructor(e){super();fe(this,e,Se,De,ae,{follows:5,uname:0,uid:1})}}export{Ne as F};
