"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[336],{1955:(e,t,n)=>{n.r(t),n.d(t,{default:()=>y});var r=n(5155),i=n(2115),a=n(5565);function l(e,t,n,r){return new(n||(n=Promise))(function(i,a){function l(e){try{s(r.next(e))}catch(e){a(e)}}function c(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):((t=e.value)instanceof n?t:new n(function(e){e(t)})).then(l,c)}s((r=r.apply(e,t||[])).next())})}function c(e,t){var n,r,i,a,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(n)throw TypeError("Generator is already executing.");for(;l;)try{if(n=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return l.label++,{value:a[1],done:!1};case 5:l.label++,r=a[1],a=[0];continue;case 7:a=l.ops.pop(),l.trys.pop();continue;default:if(!(i=(i=l.trys).length>0&&i[i.length-1])&&(6===a[0]||2===a[0])){l=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){l.label=a[1];break}if(6===a[0]&&l.label<i[1]){l.label=i[1],i=a;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(a);break}i[2]&&l.ops.pop(),l.trys.pop();continue}a=t.call(e,l)}catch(e){a=[6,e],r=0}finally{n=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}function s(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function o(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,a=n.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)l.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(i)throw i.error}}return l}function u(e,t,n){if(n||2==arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}function d(e,t,n,r,i){for(var a=[],d=5;d<arguments.length;d++)a[d-5]=arguments[d];return l(this,void 0,void 0,function(){var d,h,p,m,y;return c(this,function(x){switch(x.label){case 0:x.trys.push([0,12,13,14]),h=(d=s(a)).next(),x.label=1;case 1:if(h.done)return[3,11];switch(typeof(p=h.value)){case"string":return[3,2];case"number":return[3,4];case"function":return[3,6]}return[3,8];case 2:return[4,function(e,t,n,r,i,a){return l(this,void 0,void 0,function(){var d,h;return c(this,function(p){switch(p.label){case 0:var m,y;return m=d=e.textContent||"",y=o(n).slice(0),h=u(u([],o(m),!1),[NaN],!1).findIndex(function(e,t){return y[t]!==e}),[4,function(e,t,n,r,i){return l(this,void 0,void 0,function(){var a,l,u,d,h,p,m,y,x,v,b,w;return c(this,function(g){switch(g.label){case 0:if(a=t,i){for(l=0,u=1;u<t.length;u++)if(h=(d=o([t[u-1],t[u]],2))[0],(p=d[1]).length>h.length||""===p){l=u;break}a=t.slice(l,t.length)}g.label=1;case 1:g.trys.push([1,6,7,8]),y=(m=s(function(e){var t,n,r,i,a,l;return c(this,function(o){switch(o.label){case 0:t=function(e){return c(this,function(t){switch(t.label){case 0:return[4,{op:function(t){return requestAnimationFrame(function(){return t.textContent=e})},opCode:function(t){var n=t.textContent||"";return""===e||n.length>e.length?"DELETE":"WRITING"}}];case 1:return t.sent(),[2]}})},o.label=1;case 1:o.trys.push([1,6,7,8]),r=(n=s(e)).next(),o.label=2;case 2:return r.done?[3,5]:(i=r.value,[5,t(i)]);case 3:o.sent(),o.label=4;case 4:return r=n.next(),[3,2];case 5:return[3,8];case 6:return a={error:o.sent()},[3,8];case 7:try{r&&!r.done&&(l=n.return)&&l.call(n)}finally{if(a)throw a.error}return[7];case 8:return[2]}})}(a))).next(),g.label=2;case 2:return y.done?[3,5]:(v="WRITING"===(x=y.value).opCode(e)?n+n*(Math.random()-.5):r+r*(Math.random()-.5),x.op(e),[4,f(v)]);case 3:g.sent(),g.label=4;case 4:return y=m.next(),[3,2];case 5:return[3,8];case 6:return b={error:g.sent()},[3,8];case 7:try{y&&!y.done&&(w=m.return)&&w.call(m)}finally{if(b)throw b.error}return[7];case 8:return[2]}})})}(e,u(u([],o(function(e,t,n){var r,i;return void 0===n&&(n=0),c(this,function(a){switch(a.label){case 0:i=(r=t(e)).length,a.label=1;case 1:return i>n?[4,r.slice(0,--i).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}(d,t,h)),!1),o(function(e,t,n){var r,i;return void 0===n&&(n=0),c(this,function(a){switch(a.label){case 0:i=(r=t(e)).length,a.label=1;case 1:return n<i?[4,r.slice(0,++n).join("")]:[3,3];case 2:return a.sent(),[3,1];case 3:return[2]}})}(n,t,h)),!1),r,i,a)];case 1:return p.sent(),[2]}})})}(e,t,p,n,r,i)];case 3:case 5:case 7:return x.sent(),[3,10];case 4:return[4,f(p)];case 6:return[4,p.apply(void 0,u([e,t,n,r,i],o(a),!1))];case 8:return[4,p];case 9:x.sent(),x.label=10;case 10:return h=d.next(),[3,1];case 11:return[3,14];case 12:return m={error:x.sent()},[3,14];case 13:try{h&&!h.done&&(y=d.return)&&y.call(d)}finally{if(m)throw m.error}return[7];case 14:return[2]}})})}function f(e){return l(this,void 0,void 0,function(){return c(this,function(t){switch(t.label){case 0:return[4,new Promise(function(t){return setTimeout(t,e)})];case 1:return t.sent(),[2]}})})}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css","top"===n&&r.firstChild?r.insertBefore(i,r.firstChild):r.appendChild(i),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(document.createTextNode(e))}}(".index-module_type__E-SaG::after {\n  content: '|';\n  animation: index-module_cursor__PQg0P 1.1s infinite step-start;\n}\n\n@keyframes index-module_cursor__PQg0P {\n  50% {\n    opacity: 0;\n  }\n}\n");var h=(0,i.memo)((0,i.forwardRef)(function(e,t){var n=e.sequence,r=e.repeat,a=e.className,l=e.speed,c=void 0===l?40:l,s=e.deletionSpeed,f=e.omitDeletionAnimation,h=void 0!==f&&f,p=e.preRenderFirstString,m=e.wrapper,y=e.splitter,x=void 0===y?function(e){return u([],o(e),!1)}:y,v=e.cursor,b=void 0===v||v,w=e.style,g=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)0>t.indexOf(r[i])&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}(e,["sequence","repeat","className","speed","deletionSpeed","omitDeletionAnimation","preRenderFirstString","wrapper","splitter","cursor","style"]),j=g["aria-label"],N=g["aria-hidden"],_=g.role;s||(s=c);var k=[,,].fill(40);[c,s].forEach(function(e,t){switch(typeof e){case"number":k[t]=Math.abs(e-100);break;case"object":var n=e.type,r=e.value;if("number"!=typeof r)break;"keyStrokeDelayInMs"===n&&(k[t]=r)}});var S,C,P,E,R,O,T,I,A=k[0],D=k[1],F=(void 0===S&&(S=null),C=(0,i.useRef)(S),(0,i.useEffect)(function(){t&&("function"==typeof t?t(C.current):t.current=C.current)},[t]),C),G="index-module_type__E-SaG";P=a?"".concat(b?G+" ":"").concat(a):b?G:"",E=(0,i.useRef)(function(){var e,t=n;r===1/0?e=d:"number"==typeof r&&(t=Array(1+r).fill(n).flat());var i=e?u(u([],o(t),!1),[e],!1):u([],o(t),!1);return d.apply(void 0,u([F.current,x,A,D,h],o(i),!1)),function(){F.current}}),R=(0,i.useRef)(),O=(0,i.useRef)(!1),T=(0,i.useRef)(!1),I=o((0,i.useState)(0),2)[1],O.current&&(T.current=!0),(0,i.useEffect)(function(){return O.current||(R.current=E.current(),O.current=!0),I(function(e){return e+1}),function(){T.current&&R.current&&R.current()}},[]);var W=void 0!==p&&p?n.find(function(e){return"string"==typeof e})||"":null;return i.createElement(void 0===m?"span":m,{"aria-hidden":N,"aria-label":j,role:_,style:w,className:P,children:j?i.createElement("span",{"aria-hidden":"true",ref:F,children:W}):W,ref:j?void 0:F})}),function(e,t){return!0});let p=e=>{let{onComplete:t}=e;return(0,r.jsx)(h,{sequence:["Welcome Recruiter!",1e3,"Welcome Recruiter!\nYour search ends here",1e3,"Welcome Recruiter!\nYour search ends here :)",1e3,()=>t()],wrapper:"div",speed:50,style:{display:"inline-block",whiteSpace:"pre-line",lineHeight:"1.5"},cursor:!1,className:"text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"})};var m=n(6636);let y=()=>{let[e,t]=(0,i.useState)(!1),[n,l]=(0,i.useState)(!1),c={hidden:{opacity:0,x:20},show:{opacity:1,x:0}};return(0,r.jsxs)("div",{className:"pt-56 pl-24 flex flex-col items-center",children:[(0,r.jsxs)("div",{className:"w-full flex justify-between items-center",children:[(0,r.jsxs)("div",{className:"flex-1 flex flex-col items-center -m-24 sm:hidden",children:[(0,r.jsx)("div",{className:"flex-1 flex justify-center",children:(0,r.jsx)(m.P.div,{className:"mt-10 flex justify-center items-center mr-24",initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.5,delay:.5},children:(0,r.jsx)(a.default,{src:"/PortfolioPic.jpeg",alt:"me",width:150,height:150,className:"rounded-full"})})}),(0,r.jsx)("div",{className:"flex-1 lg:text-left text-center lg:pl-0 -ml-24 lg:ml-0",children:(0,r.jsx)(p,{onComplete:()=>{t(!0),l(!0)}})})]}),(0,r.jsx)("div",{className:"hidden sm:flex flex-1 lg:text-left text-center",children:(0,r.jsx)(p,{onComplete:()=>{t(!0),l(!0)}})}),(0,r.jsx)("div",{className:" pr-24 hidden lg:flex",children:(0,r.jsx)(m.P.div,{variants:{hidden:{opacity:0},show:{opacity:1,transition:{staggerChildren:.2,delayChildren:.3}}},initial:"hidden",animate:n?"show":"hidden",className:"flex flex-col gap-6 text-2xl",children:(0,r.jsxs)(m.P.ul,{className:"space-y-4 ",children:[(0,r.jsx)(m.P.li,{variants:c,children:"Software Engineer"}),(0,r.jsx)(m.P.li,{variants:c,children:"Problem Solver"}),(0,r.jsx)(m.P.li,{variants:c,children:"Creative Thinker"}),(0,r.jsx)(m.P.li,{variants:c,children:"Best Candidate?"})]})})})]}),(0,r.jsx)(m.P.div,{className:"mt-40 flex justify-center items-center",initial:{opacity:0},animate:{opacity:e?1:0},transition:{duration:.5},children:(0,r.jsxs)("ul",{className:"flex gap-6 items-center justify-center -ml-28",children:[(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"rounded-full hover:opacity-80 transition-opacity flex items-center justify-center",children:(0,r.jsx)(a.default,{src:"/linkedIn-favicon .png",onClick:()=>window.open("https://www.linkedin.com/in/yunus-kocaman-b372822b5/","_blank"),alt:"me",width:50,height:50,className:"lg:rounded"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"rounded-full hover:opacity-80 transition-opacity flex items-center justify-center",children:(0,r.jsx)(a.default,{src:"/github-favicon.png",onClick:()=>window.open("https://github.com/ykunus","_blank"),alt:"me",width:50,height:50,className:"lg:rounded"})})}),(0,r.jsx)("li",{children:(0,r.jsx)("button",{className:"rounded-full hover:opacity-80 transition-opacity flex items-center justify-center",children:(0,r.jsx)(a.default,{src:"/resume-favicon .png",onClick:()=>{let e=document.createElement("a");e.href="/Yunus_Kocaman_Resume_2025_Feb_05_latest.pdf",e.download="/Yunus_Kocaman_Resume_2025_Feb_05_latest.pdf",document.body.appendChild(e),e.click(),document.body.removeChild(e)},alt:"Download Resume",width:50,height:50,className:"lg:rounded"})})})]})})]})}}}]);