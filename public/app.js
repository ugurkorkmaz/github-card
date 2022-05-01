var app=function(){"use strict";function t(){}function e(t){return t()}function o(){return Object.create(null)}function n(t){t.forEach(e)}function r(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let i,c;function s(t,e){return i||(i=document.createElement("a")),i.href=e,t===i.href}function l(t,e){t.appendChild(e)}function d(t,e,o){t.insertBefore(e,o||null)}function u(t){t.parentNode.removeChild(t)}function p(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function f(){return m(" ")}function h(t,e,o){null==o?t.removeAttribute(e):t.getAttribute(e)!==o&&t.setAttribute(e,o)}function g(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t){c=t}const w=[],x=[],y=[],k=[],v=Promise.resolve();let $=!1;function _(t){y.push(t)}const z=new Set;let E=0;function C(){const t=c;do{for(;E<w.length;){const t=w[E];E++,b(t),S(t.$$)}for(b(null),w.length=0,E=0;x.length;)x.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];z.has(e)||(z.add(e),e())}y.length=0}while(w.length);for(;k.length;)k.pop()();$=!1,z.clear(),b(t)}function S(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(_)}}const N=new Set;function j(t,e){-1===t.$$.dirty[0]&&(w.push(t),$||($=!0,v.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(a,i,s,l,d,p,m,f=[-1]){const h=c;b(a);const g=a.$$={fragment:null,ctx:null,props:p,update:t,not_equal:d,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:o(),dirty:f,skip_bound:!1,root:i.target||h.$$.root};m&&m(g.root);let w=!1;if(g.ctx=s?s(a,i.props||{},((t,e,...o)=>{const n=o.length?o[0]:e;return g.ctx&&d(g.ctx[t],g.ctx[t]=n)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](n),w&&j(a,t)),e})):[],g.update(),w=!0,n(g.before_update),g.fragment=!!l&&l(g.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();i.intro&&((x=a.$$.fragment)&&x.i&&(N.delete(x),x.i(y))),function(t,o,a,i){const{fragment:c,on_mount:s,on_destroy:l,after_update:d}=t.$$;c&&c.m(o,a),i||_((()=>{const o=s.map(e).filter(r);l?l.push(...o):n(o),t.$$.on_mount=[]})),d.forEach(_)}(a,i.target,i.anchor,i.customElement),C()}var x,y;b(h)}function M(e){let o;return{c(){o=p("h1"),o.textContent="User not found"},m(t,e){d(t,o,e)},p:t,d(t){t&&u(o)}}}function T(t){let e,o,n,r,a,i,c,b,w,x,y,k,v,$,_,z,E,C,S,N=t[0].bio+"",j=t[0].name+"",A=t[0].location+"";return{c(){e=p("figure"),o=p("img"),a=f(),i=p("div"),c=p("blockquote"),b=p("p"),w=m(N),x=f(),y=p("figcaption"),k=p("div"),v=p("div"),$=p("a"),_=m(j),E=f(),C=p("div"),S=m(A),h(o,"class","w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"),s(o.src,n=t[0].avatar_url)||h(o,"src",n),h(o,"alt",r=t[0].name),h(b,"class","text-lg font-medium"),h($,"href",z=t[0].html_url),h($,"target","_blank"),h($,"rel","noopener noreferrer"),h(v,"class","flex items-center space-x-2"),h(k,"class","text-sky-500 dark:text-sky-400"),h(C,"class","text-slate-700 dark:text-slate-500"),h(y,"class","font-medium"),h(i,"class","pt-6 md:p-8 text-center md:text-left space-y-4"),h(e,"class","md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800")},m(t,n){d(t,e,n),l(e,o),l(e,a),l(e,i),l(i,c),l(c,b),l(b,w),l(i,x),l(i,y),l(y,k),l(k,v),l(v,$),l($,_),l(y,E),l(y,C),l(C,S)},p(t,e){1&e&&!s(o.src,n=t[0].avatar_url)&&h(o,"src",n),1&e&&r!==(r=t[0].name)&&h(o,"alt",r),1&e&&N!==(N=t[0].bio+"")&&g(w,N),1&e&&j!==(j=t[0].name+"")&&g(_,j),1&e&&z!==(z=t[0].html_url)&&h($,"href",z),1&e&&A!==(A=t[0].location+"")&&g(S,A)},d(t){t&&u(e)}}}function B(e){let o;function n(t,e){return null!=t[0]?T:M}let r=n(e),a=r(e);return{c(){o=p("section"),a.c()},m(t,e){d(t,o,e),a.m(o,null)},p(t,[e]){r===(r=n(t))&&a?a.p(t,e):(a.d(1),a=r(t),a&&(a.c(),a.m(o,null)))},i:t,o:t,d(t){t&&u(o),a.d()}}}function U(t,e,o){let{username:n}=e,r=null;return(async()=>{const t=await fetch(`https://api.github.com/users/${n}`),e=await t.json();o(0,r=e)})(),t.$$set=t=>{"username"in t&&o(1,n=t.username)},[r,n]}!function(t,e){void 0===e&&(e={});var o=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&n.firstChild?n.insertBefore(r,n.firstChild):n.appendChild(r),r.styleSheet?r.styleSheet.cssText=t:r.appendChild(document.createTextNode(t))}}('*,::before,::after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}::before,::after{--tw-content:\'\'}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=\'button\'],[type=\'reset\'],[type=\'submit\']{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=\'search\']{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder,textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::-moz-placeholder, textarea::-moz-placeholder{opacity:1;color:#9ca3af}input:-ms-input-placeholder, textarea:-ms-input-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role="button"]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,::before,::after{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x:  ;--tw-pan-y:  ;--tw-pinch-zoom:  ;--tw-scroll-snap-strictness:proximity;--tw-ordinal:  ;--tw-slashed-zero:  ;--tw-numeric-figure:  ;--tw-numeric-spacing:  ;--tw-numeric-fraction:  ;--tw-ring-inset:  ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgb(59 130 246 / 0.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur:  ;--tw-brightness:  ;--tw-contrast:  ;--tw-grayscale:  ;--tw-hue-rotate:  ;--tw-invert:  ;--tw-saturate:  ;--tw-sepia:  ;--tw-drop-shadow:  ;--tw-backdrop-blur:  ;--tw-backdrop-brightness:  ;--tw-backdrop-contrast:  ;--tw-backdrop-grayscale:  ;--tw-backdrop-hue-rotate:  ;--tw-backdrop-invert:  ;--tw-backdrop-opacity:  ;--tw-backdrop-saturate:  ;--tw-backdrop-sepia:  }.mx-auto{margin-left:auto;margin-right:auto}.flex{display:flex}.h-24{height:6rem}.w-24{width:6rem}.items-center{align-items:center}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-top:calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(1rem * var(--tw-space-y-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-right:calc(0.5rem * var(--tw-space-x-reverse));margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))}.rounded-xl{border-radius:0.75rem}.rounded-full{border-radius:9999px}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249 / var(--tw-bg-opacity))}.p-8{padding:2rem}.pt-6{padding-top:1.5rem}.text-center{text-align:center}.text-lg{font-size:1.125rem;line-height:1.75rem}.font-medium{font-weight:500}.text-sky-500{--tw-text-opacity:1;color:rgb(14 165 233 / var(--tw-text-opacity))}.text-slate-700{--tw-text-opacity:1;color:rgb(51 65 85 / var(--tw-text-opacity))}@media(prefers-color-scheme: dark){.dark\\:bg-slate-800{--tw-bg-opacity:1;background-color:rgb(30 41 59 / var(--tw-bg-opacity))}.dark\\:text-sky-400{--tw-text-opacity:1;color:rgb(56 189 248 / var(--tw-text-opacity))}.dark\\:text-slate-500{--tw-text-opacity:1;color:rgb(100 116 139 / var(--tw-text-opacity))}}@media(min-width: 768px){.md\\:flex{display:flex}.md\\:h-auto{height:auto}.md\\:w-48{width:12rem}.md\\:rounded-none{border-radius:0px}.md\\:p-0{padding:0px}.md\\:p-8{padding:2rem}.md\\:text-left{text-align:left}}');class q extends class{$destroy(){!function(t,e){const o=t.$$;null!==o.fragment&&(n(o.on_destroy),o.fragment&&o.fragment.d(e),o.on_destroy=o.fragment=null,o.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const t=o.indexOf(e);-1!==t&&o.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),A(this,t,U,B,a,{username:1})}}return Array.from(document.getElementsByTagName("github")).forEach((t=>{let e=t.getAttribute("username");new q({target:t,props:{username:e}})})),q}();
//# sourceMappingURL=app.js.map
