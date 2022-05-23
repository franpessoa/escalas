const _e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerpolicy&&(l.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?l.credentials="include":r.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}};_e();function k(){}const se=e=>e;function le(e){return e()}function Z(){return Object.create(null)}function N(e){e.forEach(le)}function ce(e){return typeof e=="function"}function ue(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function me(e){return Object.keys(e).length===0}function ge(e,...t){if(e==null)return k;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function be(e,t,n){e.$$.on_destroy.push(ge(t,n))}const fe=typeof window!="undefined";let ye=fe?()=>window.performance.now():()=>Date.now(),W=fe?e=>requestAnimationFrame(e):k;const O=new Set;function ae(e){O.forEach(t=>{t.c(e)||(O.delete(t),t.f())}),O.size!==0&&W(ae)}function $e(e){let t;return O.size===0&&W(ae),{promise:new Promise(n=>{O.add(t={c:e,f:n})}),abort(){O.delete(t)}}}function _(e,t){e.appendChild(t)}function de(e){if(!e)return document;const t=e.getRootNode?e.getRootNode():e.ownerDocument;return t&&t.host?t:e.ownerDocument}function we(e){const t=$("style");return ve(de(e),t),t.sheet}function ve(e,t){_(e.head||e,t)}function he(e,t,n){e.insertBefore(t,n||null)}function X(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function M(e){return document.createTextNode(e)}function G(){return M(" ")}function ee(e,t,n,i){return e.addEventListener(t,n,i),()=>e.removeEventListener(t,n,i)}function Me(e){return function(t){return t.preventDefault(),e.call(this,t)}}function L(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ke(e){return Array.from(e.childNodes)}function U(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ee(e,t,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,i,t),r}const q=new Map;let I=0;function Se(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}function Ne(e,t){const n={stylesheet:we(t),rules:{}};return q.set(e,n),n}function te(e,t,n,i,r,l,o,c=0){const u=16.666/i;let s=`{
`;for(let m=0;m<=1;m+=u){const b=t+(n-t)*l(m);s+=m*100+`%{${o(b,1-b)}}
`}const f=s+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Se(f)}_${c}`,d=de(e),{stylesheet:g,rules:p}=q.get(d)||Ne(d,e);p[a]||(p[a]=!0,g.insertRule(`@keyframes ${a} ${f}`,g.cssRules.length));const w=e.style.animation||"";return e.style.animation=`${w?`${w}, `:""}${a} ${i}ms linear ${r}ms 1 both`,I+=1,a}function xe(e,t){const n=(e.style.animation||"").split(", "),i=n.filter(t?l=>l.indexOf(t)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(e.style.animation=i.join(", "),I-=r,I||Ae())}function Ae(){W(()=>{I||(q.forEach(e=>{const{stylesheet:t}=e;let n=t.cssRules.length;for(;n--;)t.deleteRule(n);e.rules={}}),q.clear())})}let Y;function D(e){Y=e}const F=[],ne=[],z=[],re=[],Oe=Promise.resolve();let V=!1;function je(){V||(V=!0,Oe.then(pe))}function j(e){z.push(e)}const H=new Set;let R=0;function pe(){const e=Y;do{for(;R<F.length;){const t=F[R];R++,D(t),Ce(t.$$)}for(D(null),F.length=0,R=0;ne.length;)ne.pop()();for(let t=0;t<z.length;t+=1){const n=z[t];H.has(n)||(H.add(n),n())}z.length=0}while(F.length);for(;re.length;)re.pop()();V=!1,H.clear(),D(e)}function Ce(e){if(e.fragment!==null){e.update(),N(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}let C;function Fe(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function J(e,t,n){e.dispatchEvent(Ee(`${t?"intro":"outro"}${n}`))}const B=new Set;let v;function De(){v={r:0,c:[],p:v}}function Le(){v.r||N(v.c),v=v.p}function P(e,t){e&&e.i&&(B.delete(e),e.i(t))}function ie(e,t,n,i){if(e&&e.o){if(B.has(e))return;B.add(e),v.c.push(()=>{B.delete(e),i&&(n&&e.d(1),i())}),e.o(t)}}const Re={duration:0};function K(e,t,n,i){let r=t(e,n),l=i?0:1,o=null,c=null,u=null;function s(){u&&xe(e,u)}function f(d,g){const p=d.b-l;return g*=Math.abs(p),{a:l,b:d.b,d:p,duration:g,start:d.start,end:d.start+g,group:d.group}}function a(d){const{delay:g=0,duration:p=300,easing:w=se,tick:m=k,css:b}=r||Re,E={start:ye()+g,b:d};d||(E.group=v,v.r+=1),o||c?c=E:(b&&(s(),u=te(e,l,d,p,g,w,b)),d&&m(0,1),o=f(E,p),j(()=>J(e,d,"start")),$e(S=>{if(c&&S>c.start&&(o=f(c,p),c=null,J(e,o.b,"start"),b&&(s(),u=te(e,l,o.b,o.duration,0,w,r.css))),o){if(S>=o.end)m(l=o.b,1-l),J(e,o.b,"end"),c||(o.b?s():--o.group.r||N(o.group.c)),o=null;else if(S>=o.start){const h=S-o.start;l=o.a+o.d*w(h/o.duration),m(l,1-l)}}return!!(o||c)}))}return{run(d){ce(r)?Fe().then(()=>{r=r(),a(d)}):a(d)},end(){s(),o=c=null}}}function ze(e,t,n,i){const{fragment:r,on_mount:l,on_destroy:o,after_update:c}=e.$$;r&&r.m(t,n),i||j(()=>{const u=l.map(le).filter(ce);o?o.push(...u):N(u),e.$$.on_mount=[]}),c.forEach(j)}function Be(e,t){const n=e.$$;n.fragment!==null&&(N(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(F.push(e),je(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function qe(e,t,n,i,r,l,o,c=[-1]){const u=Y;D(e);const s=e.$$={fragment:null,ctx:null,props:l,update:k,not_equal:r,bound:Z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:Z(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};o&&o(s.root);let f=!1;if(s.ctx=n?n(e,t.props||{},(a,d,...g)=>{const p=g.length?g[0]:d;return s.ctx&&r(s.ctx[a],s.ctx[a]=p)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](p),f&&Pe(e,a)),d}):[],s.update(),f=!0,N(s.before_update),s.fragment=i?i(s.ctx):!1,t.target){if(t.hydrate){const a=ke(t.target);s.fragment&&s.fragment.l(a),a.forEach(X)}else s.fragment&&s.fragment.c();t.intro&&P(e.$$.fragment),ze(e,t.target,t.anchor,t.customElement),pe()}D(u)}class Ie{$destroy(){Be(this,1),this.$destroy=k}$on(t,n){const i=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(t){this.$$set&&!me(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const A=[];function Ke(e,t=k){let n;const i=new Set;function r(c){if(ue(e,c)&&(e=c,n)){const u=!A.length;for(const s of i)s[1](),A.push(s,e);if(u){for(let s=0;s<A.length;s+=2)A[s][0](A[s+1]);A.length=0}}}function l(c){r(c(e))}function o(c,u=k){const s=[c,u];return i.add(s),i.size===1&&(n=t(r)||k),c(e),()=>{i.delete(s),i.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:o}}function Te(){const{subscribe:e,set:t}=Ke(void 0);let n={"D\xF3 Maior":"Nenhum","Sol Maior":"F\xE1#","R\xE9 Maior":"F\xE1# e D\xF3#","L\xE1 Maior":"F\xE1#, D\xF3# e Sol#","F\xE1 Maior":"SiB","Sib Maior":"Sib e Mib","L\xE1 Menor":"Nenhum","Mi Menor":"F\xE1#","Si Menor":"F\xE1# e D\xF3#","F\xE1# Menor":"F\xE1#, D\xF3# e Sol#","R\xE9 Menor":"SiB","Sol Menor":"SiB e MiB"};return{subscribe:e,createNew:async()=>{let i=Object.keys(n),r=i[i.length*Math.random()<<0],l=[r,n[r]];t(l)}}}const Q=Te();function T(e,{delay:t=0,duration:n=400,easing:i=se}={}){const r=+getComputedStyle(e).opacity;return{delay:t,duration:n,easing:i,css:l=>`opacity: ${l*r}`}}function oe(e){let t,n,i=e[1][0]+"",r,l,o=e[1][1]+"",c,u,s;return{c(){t=$("p"),n=M("A escala de "),r=M(i),l=M(" tem os acidentes "),c=M(o)},m(f,a){he(f,t,a),_(t,n),_(t,r),_(t,l),_(t,c),s=!0},p(f,a){(!s||a&2)&&i!==(i=f[1][0]+"")&&U(r,i),(!s||a&2)&&o!==(o=f[1][1]+"")&&U(c,o)},i(f){s||(j(()=>{u||(u=K(t,T,{},!0)),u.run(1)}),s=!0)},o(f){u||(u=K(t,T,{},!1)),u.run(0),s=!1},d(f){f&&X(t),f&&u&&u.end()}}}function Ge(e){let t,n,i,r,l,o=e[1][0]+"",c,u,s,f,a,d,g,p,w,m,b,E,S,h=e[0]&&oe(e);return{c(){t=$("main"),n=$("h1"),n.textContent="Criador de Escalas",i=G(),r=$("p"),l=M("Atual escala: "),c=M(o),u=G(),h&&h.c(),s=M(`
  Mostrar acidentes: `),f=$("input"),a=$("br"),d=$("br"),g=G(),p=$("button"),p.textContent="Sortear nova escala",w=$("br"),L(n,"class","svelte-14fj6zh"),L(f,"type","checkbox"),L(p,"class","button-12 svelte-14fj6zh"),L(t,"class","svelte-14fj6zh")},m(y,x){he(y,t,x),_(t,n),_(t,i),_(t,r),_(r,l),_(r,c),_(t,u),h&&h.m(t,null),_(t,s),_(t,f),f.checked=e[0],_(t,a),_(t,d),_(t,g),_(t,p),_(t,w),b=!0,E||(S=[ee(f,"change",e[3]),ee(p,"click",Me(e[2]))],E=!0)},p(y,[x]){(!b||x&2)&&o!==(o=y[1][0]+"")&&U(c,o),y[0]?h?(h.p(y,x),x&1&&P(h,1)):(h=oe(y),h.c(),P(h,1),h.m(t,s)):h&&(De(),ie(h,1,1,()=>{h=null}),Le()),x&1&&(f.checked=y[0])},i(y){b||(P(h),j(()=>{m||(m=K(t,T,{},!0)),m.run(1)}),b=!0)},o(y){ie(h),m||(m=K(t,T,{},!1)),m.run(0),b=!1},d(y){y&&X(t),h&&h.d(),y&&m&&m.end(),E=!1,N(S)}}}function He(e,t,n){let i;be(e,Q,c=>n(1,i=c)),Q.createNew();let r=!1;const l=()=>{Q.createNew()};function o(){r=this.checked,n(0,r)}return[r,i,l,o]}class Je extends Ie{constructor(t){super(),qe(this,t,He,Ge,ue,{})}}new Je({target:document.getElementById("app")});