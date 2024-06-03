// ==UserScript==
// @name         tampermonkey-typescript-boilerplate
// @description  Minimalistic boilerplate for Tampermonkey userscripts in TypeScript
// @version      0.0.0
// @author       Слава Соколов (equilpres)
// @iconURL      https://www.google.com/s2/favicons?sz=128&domain=zelenka.guru
// @match        *://example.com/*
// @grant        none
// @run-at       document-end
// @noframes
// @updateURL    https://github.com/equilpres/tampermonkey-typescript-boilerplate/raw/main/build/tampermonkey-typescript-boilerplate.user.js
// @downloadURL  https://github.com/equilpres/tampermonkey-typescript-boilerplate/raw/main/build/tampermonkey-typescript-boilerplate.user.js
// @homepageURL  https://github.com/equilpres/tampermonkey-typescript-boilerplate
// @supportURL   https://github.com/equilpres/tampermonkey-typescript-boilerplate/issues
// @webRequest   [{"selector":"*://obj.ac.bcon.ecdns.net/*","action":{"cancel":true}}]
// ==/UserScript==

/* eslint-disable */
function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e){for(const t of n)t(void 0);return t}const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function u(t,e){t.appendChild(e)}function i(t,e,n){t.insertBefore(e,n||null)}function l(t){t.parentNode&&t.parentNode.removeChild(t)}function f(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.data!==e&&(t.data=e)}let p;function h(t){p=t}function m(t){(function(){if(!p)throw new Error("Function called outside component initialization");return p})().$$.on_mount.push(t)}const g=[],y=[];let x=[];const b=[],_=Promise.resolve();let w=!1;function v(t){x.push(t)}const S=new Set;let k=0;function E(){if(0!==k)return;const t=p;do{try{for(;k<g.length;){const t=g[k];k++,h(t),j(t.$$)}}catch(t){throw g.length=0,k=0,t}for(h(null),g.length=0,k=0;y.length;)y.pop()();for(let t=0;t<x.length;t+=1){const e=x[t];S.has(e)||(S.add(e),e())}x.length=0}while(g.length);for(;b.length;)b.pop()();w=!1,S.clear(),h(t)}function j(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(v)}}const A=new Set;let C;function N(t,e){t&&t.i&&(A.delete(t),t.i(e))}function z(t,e,n,o){if(t&&t.o){if(A.has(t))return;A.add(t),C.c.push((()=>{A.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function O(t){t&&t.c()}function T(t,n,c){const{fragment:s,after_update:u}=t.$$;s&&s.m(n,c),v((()=>{const n=t.$$.on_mount.map(e).filter(r);t.$$.on_destroy?t.$$.on_destroy.push(...n):o(n),t.$$.on_mount=[]})),u.forEach(v)}function B(t,e){const n=t.$$;null!==n.fragment&&(!function(t){const e=[],n=[];x.forEach((o=>-1===t.indexOf(o)?e.push(o):n.push(o))),n.forEach((t=>t())),x=e}(n.after_update),o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(g.push(t),w||(w=!0,_.then(E)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function I(e,r,c,s,u,i,f=null,a=[-1]){const d=p;h(e);const $=e.$$={fragment:null,ctx:[],props:i,update:t,not_equal:u,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:a,skip_bound:!1,root:r.target||d.$$.root};f&&f($.root);let m=!1;if($.ctx=c?c(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&D(e,t)),n})):[],$.update(),m=!0,o($.before_update),$.fragment=!!s&&s($.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);$.fragment&&$.fragment.l(t),t.forEach(l)}else $.fragment&&$.fragment.c();r.intro&&N(e.$$.fragment),T(e,r.target,r.anchor),E()}h(d)}class q{$$=void 0;$$set=void 0;$destroy(){B(this,1),this.$destroy=t}$on(e,n){if(!r(n))return t;const o=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return o.push(n),()=>{const t=o.indexOf(n);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function H(e){let n,o,r,c,s,u=e[3](e[2])+"",f=e[3](e[1])+"",d=e[3](e[0])+"";return{c(){n=a(u),o=a(":"),r=a(f),c=a(":"),s=a(d)},m(t,e){i(t,n,e),i(t,o,e),i(t,r,e),i(t,c,e),i(t,s,e)},p(t,[e]){4&e&&u!==(u=t[3](t[2])+"")&&$(n,u),2&e&&f!==(f=t[3](t[1])+"")&&$(r,f),1&e&&d!==(d=t[3](t[0])+"")&&$(s,d)},i:t,o:t,d(t){t&&(l(n),l(o),l(r),l(c),l(s))}}}function M(t,e,n){let o,r,c,s=new Date;return m((()=>{const t=setInterval((()=>{n(4,s=new Date)}),100);return()=>{clearInterval(t)}})),t.$$.update=()=>{16&t.$$.dirty&&n(2,o=s.getHours()),16&t.$$.dirty&&n(1,r=s.getMinutes()),16&t.$$.dirty&&n(0,c=s.getSeconds())},[c,r,o,t=>`${t}`.padStart(2,"0"),s]}"undefined"!=typeof window&&(window.__svelte||(window.__svelte={v:new Set})).v.add("4");class F extends q{constructor(t){super(),I(this,t,M,H,c,{})}}const P=[];const W=function(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!P.length;for(const t of r)t[1](),P.push(t,e);if(t){for(let t=0;t<P.length;t+=2)P[t][0](P[t+1]);P.length=0}}}function u(t){s(t(e))}return{set:s,update:u,subscribe:function(c,i=t){const l=[c,i];return r.add(l),1===r.size&&(o=n(s,u)||t),c(e),()=>{r.delete(l),0===r.size&&o&&(o(),o=null)}}}}({text:"Hello, World!",createdAt:(new Date).toISOString()});function G(t){let e,n,o,r,c,s=t[0].text+"";return r=new F({}),{c(){e=f("span"),n=a(s),o=a(" x "),O(r.$$.fragment),d(e,"class","text-xl")},m(t,s){i(t,e,s),u(e,n),u(e,o),T(r,e,null),c=!0},p(t,[e]){(!c||1&e)&&s!==(s=t[0].text+"")&&$(n,s)},i(t){c||(N(r.$$.fragment,t),c=!0)},o(t){z(r.$$.fragment,t),c=!1},d(t){t&&l(e),B(r)}}}function J(t,e,n){let o;return s(t,W,(t=>n(0,o=t))),m((()=>{console.log("tampermonkey-typescript-boilerplate")})),[o]}class K extends q{constructor(t){super(),I(this,t,J,G,c,{})}}function L(e){let n,o,r;return o=new K({}),{c(){n=f("span"),O(o.$$.fragment),d(n,"class","flex select-none flex-col items-center justify-center")},m(t,e){i(t,n,e),T(o,n,null),r=!0},p:t,i(t){r||(N(o.$$.fragment,t),r=!0)},o(t){z(o.$$.fragment,t),r=!1},d(t){t&&l(n),B(o)}}}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}(".flex {\n    display: flex\n}\n.select-none {\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none\n}\n.flex-col {\n    flex-direction: column\n}\n.items-center {\n    align-items: center\n}\n.justify-center {\n    justify-content: center\n}\n.text-xl {\n    font-size: 1.25rem;\n    line-height: 1.75rem\n}\n");const Q=document.querySelector("div");new class extends q{constructor(t){super(),I(this,t,null,L,c,{})}}({target:Q});
