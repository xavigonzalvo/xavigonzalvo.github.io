(self.webpackChunkxavi_s_page=self.webpackChunkxavi_s_page||[]).push([[524],{4852:function(e){"use strict";e.exports=Object.assign},1605:function(e,t,r){"use strict";const n=(0,r(7294).createContext)({darkMode:!1,toggleDarkMode:()=>{}});t.Z=n},6947:function(e,t,r){"use strict";var n=r(7294),i=r(1883),a=r(389);t.Z=function(){const e=(0,i.K2)("4174678028");return n.createElement("footer",{class:"mt-32"},n.createElement("div",{class:"sm:px-8"},n.createElement("div",{class:"mx-auto max-w-7xl lg:px-8"},n.createElement("div",{class:"border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40"},n.createElement("div",{class:"relative px-4 sm:px-8 lg:px-12"},n.createElement("div",{class:"mx-auto max-w-2xl lg:max-w-5xl"},n.createElement("div",{class:"flex flex-col items-center justify-between gap-6 sm:flex-row"},n.createElement("div",{class:"flex gap-6 text-sm font-medium text-zinc-800 dark:text-zinc-200"},e.allSitePage.nodes.map((e=>n.createElement("a",{class:"transition hover:text-teal-500 dark:hover:text-teal-400",href:e.path},(0,a.T)(e.path))))),n.createElement("p",{class:"text-sm text-zinc-400 dark:text-zinc-500"},"© "))))))))}},3374:function(e,t,r){"use strict";r.d(t,{Z:function(){return ye}});var n,i,a,o,c=r(7294),s=r(5697),l=r.n(s),u=r(3524),d=r.n(u),f=r(9590),p=r.n(f),m=r(4852),h=r.n(m),g="bodyAttributes",y="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},v=(Object.keys(w).map((function(e){return w[e]})),"charset"),M="cssText",T="href",j="http-equiv",x="innerHTML",I="itemprop",k="name",E="property",C="rel",A="src",S="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},z="defaultTitle",O="defer",N="encodeSpecialCharacters",D="onChangeClientState",P="titleTemplate",Z=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),Q=[w.NOSCRIPT,w.SCRIPT,w.STYLE],Y="data-react-helmet",B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},U=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},G=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},W=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},_=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},F=function(e){var t=V(e,w.TITLE),r=V(e,P);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=V(e,z);return t||n||void 0},X=function(e){return V(e,D)||function(){}},J=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return R({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var a=n[i].toLowerCase();if(-1!==e.indexOf(a)&&r[a])return t.concat(r)}return t}),[])},q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+B(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,a=Object.keys(e),o=0;o<a.length;o++){var c=a[o],s=c.toLowerCase();-1===t.indexOf(s)||r===C&&"canonical"===e[r].toLowerCase()||s===C&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==x&&c!==M&&c!==I||(r=c)}if(!r||!e[r])return!1;var l=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][l]&&(i[r][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var a=Object.keys(i),o=0;o<a.length;o++){var c=a[o],s=h()({},n[c],i[c]);n[c]=s}return e}),[]).reverse()},V=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,ae=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,u=e.styleTags,d=e.title,f=e.titleAttributes;se(w.BODY,n),se(w.HTML,i),ce(d,f);var p={baseTag:le(w.BASE,r),linkTags:le(w.LINK,a),metaTags:le(w.META,o),noscriptTags:le(w.NOSCRIPT,c),scriptTags:le(w.SCRIPT,l),styleTags:le(w.STYLE,u)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=p[e].oldTags)})),t&&t(),s(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),se(w.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Y),i=n?n.split(","):[],a=[].concat(i),o=Object.keys(t),c=0;c<o.length;c++){var s=o[c],l=t[s]||"";r.getAttribute(s)!==l&&r.setAttribute(s,l),-1===i.indexOf(s)&&i.push(s);var u=a.indexOf(s);-1!==u&&a.splice(u,1)}for(var d=a.length-1;d>=0;d--)r.removeAttribute(a[d]);i.length===a.length?r.removeAttribute(Y):r.getAttribute(Y)!==o.join(",")&&r.setAttribute(Y,o.join(","))}},le=function(e,t){var r=document.head||document.querySelector(w.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),a=[],o=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===x)r.innerHTML=t.innerHTML;else if(n===M)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(Y,"true"),i.some((function(e,t){return o=t,r.isEqualNode(e)}))?i.splice(o,1):a.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),a.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:a}},ue=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},de=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},fe=function(e,t,r){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[Y]=!0,i=de(r,n),[c.createElement(w.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=ue(r),a=oe(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+_(a,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+_(a,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case g:case y:return{toComponent:function(){return de(t)},toString:function(){return ue(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[Y]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===x||r===M){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),c.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===x||e===M)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+_(n[t],r)+'"';return e?e+" "+i:i}),""),a=n.innerHTML||n.cssText||"",o=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(o?"/>":">"+a+"</"+e+">")}),"")}(e,t,r)}}}},pe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,a=e.linkTags,o=e.metaTags,c=e.noscriptTags,s=e.scriptTags,l=e.styleTags,u=e.title,d=void 0===u?"":u,f=e.titleAttributes;return{base:fe(w.BASE,t,n),bodyAttributes:fe(g,r,n),htmlAttributes:fe(y,i,n),link:fe(w.LINK,a,n),meta:fe(w.META,o,n),noscript:fe(w.NOSCRIPT,c,n),script:fe(w.SCRIPT,s,n),style:fe(w.STYLE,l,n),title:fe(w.TITLE,{title:d,titleAttributes:f},n)}},me=d()((function(e){return{baseTag:K([T,S],e),bodyAttributes:J(g,e),defer:V(e,O),encode:V(e,N),htmlAttributes:J(y,e),linkTags:q(w.LINK,[C,T],e),metaTags:q(w.META,[k,v,j,E,I],e),noscriptTags:q(w.NOSCRIPT,[x],e),onChangeClientState:X(e),scriptTags:q(w.SCRIPT,[A,x],e),styleTags:q(w.STYLE,[M],e),title:F(e),titleAttributes:J(b,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){ae(e,(function(){ie=null}))})):(ae(e),ie=null)}),pe)((function(){return null})),he=(i=me,o=a=function(e){function t(){return H(this,t),W(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return R({},n,((t={})[r.type]=[].concat(n[r.type]||[],[R({},i,this.mapNestedChildrenToProps(r,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,a=e.newChildProps,o=e.nestedChildren;switch(n.type){case w.TITLE:return R({},i,((t={})[n.type]=o,t.titleAttributes=R({},a),t));case w.BODY:return R({},i,{bodyAttributes:R({},a)});case w.HTML:return R({},i,{htmlAttributes:R({},a)})}return R({},i,((r={})[n.type]=R({},a),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=R({},t);return Object.keys(e).forEach((function(t){var n;r=R({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return c.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,a=i.children,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[Z[r]||r]=e[r],t}),t)}(G(i,["children"]));switch(r.warnOnInvalidChildren(e,a),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:o,nestedChildren:a});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:o,nestedChildren:a})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=G(e,["children"]),n=R({},r);return t&&(n=this.mapChildrenToProps(t,n)),c.createElement(i,n)},U(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(c.Component),a.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},a.defaultProps={defer:!0,encodeSpecialCharacters:!0},a.peek=i.peek,a.rewind=function(){var e=i.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},o);he.renderStatic=he.rewind;var ge=r(1605);var ye=function(e){let{children:t}=e;const[r,n]=c.useState((()=>{return e="darkMode",("undefined"==typeof window?null:JSON.parse(localStorage.getItem(e)))||!1;var e})),i=e=>{var t,r;t="darkMode",r=e,"undefined"!=typeof window&&localStorage.setItem(t,JSON.stringify(r))};return c.createElement(ge.Z.Provider,{value:{darkMode:r,toggleDarkMode:()=>{const e=!r;n(e),i(e)}}},c.createElement(he,null,c.createElement("html",{className:r?"dark":""})),c.createElement("div",{class:"flex h-full flex-col bg-zinc-50 dark:bg-black"},c.createElement("div",{class:"fixed inset-0 flex justify-center sm:px-8"},c.createElement("div",{class:"flex w-full max-w-7xl lg:px-8"},c.createElement("div",{class:"w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20"}))),t))}},3947:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var n=r(7294),i=r(1883),a=r(389);function o(){const e=(0,i.K2)("4174678028");return n.createElement("nav",{class:"pointer-events-auto hidden md:block"},n.createElement("ul",{class:"flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"},e.allSitePage.nodes.map((e=>n.createElement("li",null,n.createElement("a",{class:"relative block px-3 py-2 transition hover:text-teal-500 dark:hover:text-teal-400",href:e.path},(0,a.T)(e.path)))))))}function c(e){let{onClose:t}=e;const r=(0,i.K2)("4174678028");return n.createElement("div",null,n.createElement("div",{class:"fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80 opacity-100",id:"headlessui-popover-overlay-:r0:","aria-hidden":"true","data-headlessui-state":"open"}),n.createElement("div",{class:"fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800 opacity-100 scale-100",id:"headlessui-popover-panel-:r1:",tabindex:"-1","data-headlessui-state":"open"},n.createElement("div",{class:"flex flex-row-reverse items-center justify-between"},n.createElement("button",{"aria-label":"Close menu",class:"-m-1 p-1",type:"button","data-headlessui-state":"open",tabindex:"0",onClick:t},n.createElement("svg",{viewBox:"0 0 24 24","aria-hidden":"true",class:"h-6 w-6 text-zinc-500 dark:text-zinc-400"},n.createElement("path",{d:"m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5",fill:"none",stroke:"currentColor","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}))),n.createElement("h2",{class:"text-sm font-medium text-zinc-600 dark:text-zinc-400"},"Navigation")),n.createElement("nav",{class:"mt-6"},n.createElement("ul",{class:"-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300"},r.allSitePage.nodes.map((e=>n.createElement("li",null,n.createElement("a",{class:"block py-2","data-headlessui-state":"open",href:e.path},(0,a.T)(e.path)))))))))}var s=r.p+"static/xavi-avatar-a29e2462967a8d63197e3da19d9baac0.png",l=r(1605);function u(e){let{dark:t,toggle:r}=e;return n.createElement("div",{class:"flex justify-end md:flex-1"},n.createElement("div",{class:"pointer-events-auto"},n.createElement("button",{type:"button","aria-label":"Toggle dark mode",class:"group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20",onClick:r},n.createElement("svg",{viewBox:"0 0 24 24","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round","aria-hidden":"true",class:"h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:stroke-teal-500 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:stroke-teal-600"},n.createElement("path",{d:"M8 12.25A4.25 4.25 0 0 1 12.25 8v0a4.25 4.25 0 0 1 4.25 4.25v0a4.25 4.25 0 0 1-4.25 4.25v0A4.25 4.25 0 0 1 8 12.25v0Z"}),n.createElement("path",{d:"M12.25 3v1.5M21.5 12.25H20M18.791 18.791l-1.06-1.06M18.791 5.709l-1.06 1.06M12.25 20v1.5M4.5 12.25H3M6.77 6.77 5.709 5.709M6.77 17.73l-1.061 1.061",fill:"none"})),n.createElement("svg",{viewBox:"0 0 24 24","aria-hidden":"true",class:"hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400 [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media_not_(prefers-color-scheme:dark)]:stroke-teal-500"},n.createElement("path",{d:"M17.25 16.22a6.937 6.937 0 0 1-9.47-9.47 7.451 7.451 0 1 0 9.47 9.47ZM12.75 7C17 7 17 2.75 17 2.75S17 7 21.25 7C17 7 17 11.25 17 11.25S17 7 12.75 7Z","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"})))))}function d(){return n.createElement("div",{class:"flex flex-1"},n.createElement("div",{class:"h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10"},n.createElement("a",{"aria-label":"Home",class:"pointer-events-auto",href:"/"},n.createElement("img",{alt:"",fetchpriority:"high",width:"512",height:"512",decoding:"async","data-nimg":"1",class:"rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 h-9 w-9",sizes:"2.25rem",src:s,style:{color:"transparent"}}))))}function f(){const[e,t]=n.useState(!1);return n.createElement("div",{class:"flex flex-1 justify-end md:justify-center"},n.createElement("div",{class:"pointer-events-auto md:hidden","data-headlessui-state":""},n.createElement("button",{class:"group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20",type:"button","aria-expanded":"false","data-headlessui-state":"",id:"headlessui-popover-button-:R2qb6:",onClick:()=>t(!e)},"Menu",n.createElement("svg",{viewBox:"0 0 8 6","aria-hidden":"true",class:"ml-3 h-auto w-2 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400"},n.createElement("path",{d:"M1.75 1.75 4 4.25l2.25-2.5",fill:"none","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}))),e&&n.createElement(c,{onClose:()=>t(!e)})),n.createElement(o,null))}var p=function(){const{darkMode:e,toggleDarkMode:t}=n.useContext(l.Z);return n.createElement("header",{class:"pointer-events-none relative z-50 flex flex-col ",style:{height:"var(--header-height)","margin-bottom":"var(--header-mb)"}},n.createElement("div",{class:"top-0 z-10 h-16 pt-6",style:{position:"var(--header-position)"}},n.createElement("div",{class:"sm:px-8 top-[var(--header-top,theme(spacing.6))] w-full",style:{position:"var(--header-inner-position)"}},n.createElement("div",{class:"mx-auto max-w-7xl lg:px-8"},n.createElement("div",{class:"relative px-4 sm:px-8 lg:px-12"},n.createElement("div",{class:"mx-auto max-w-2xl lg:max-w-5xl"},n.createElement("div",{class:"relative flex gap-4"},n.createElement(d,null),n.createElement(f,null),n.createElement(u,{dark:e,toggle:t}))))))))}},389:function(e,t,r){"use strict";r.d(t,{Z:function(){return n},T:function(){return i}});function n(e){switch(e){case"google":return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNDggNDgiIHdpZHRoPSI0OHB4IiBoZWlnaHQ9IjQ4cHgiPjxwYXRoIGZpbGw9IiNGRkMxMDciIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0xLjY0OSw0LjY1Ny02LjA4LDgtMTEuMzAzLDhjLTYuNjI3LDAtMTItNS4zNzMtMTItMTJjMC02LjYyNyw1LjM3My0xMiwxMi0xMmMzLjA1OSwwLDUuODQyLDEuMTU0LDcuOTYxLDMuMDM5bDUuNjU3LTUuNjU3QzM0LjA0Niw2LjA1MywyOS4yNjgsNCwyNCw0QzEyLjk1NSw0LDQsMTIuOTU1LDQsMjRjMCwxMS4wNDUsOC45NTUsMjAsMjAsMjBjMTEuMDQ1LDAsMjAtOC45NTUsMjAtMjBDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjxwYXRoIGZpbGw9IiNGRjNEMDAiIGQ9Ik02LjMwNiwxNC42OTFsNi41NzEsNC44MTlDMTQuNjU1LDE1LjEwOCwxOC45NjEsMTIsMjQsMTJjMy4wNTksMCw1Ljg0MiwxLjE1NCw3Ljk2MSwzLjAzOWw1LjY1Ny01LjY1N0MzNC4wNDYsNi4wNTMsMjkuMjY4LDQsMjQsNEMxNi4zMTgsNCw5LjY1Niw4LjMzNyw2LjMwNiwxNC42OTF6Ii8+PHBhdGggZmlsbD0iIzRDQUY1MCIgZD0iTTI0LDQ0YzUuMTY2LDAsOS44Ni0xLjk3NywxMy40MDktNS4xOTJsLTYuMTktNS4yMzhDMjkuMjExLDM1LjA5MSwyNi43MTUsMzYsMjQsMzZjLTUuMjAyLDAtOS42MTktMy4zMTctMTEuMjgzLTcuOTQ2bC02LjUyMiw1LjAyNUM5LjUwNSwzOS41NTYsMTYuMjI3LDQ0LDI0LDQ0eiIvPjxwYXRoIGZpbGw9IiMxOTc2RDIiIGQ9Ik00My42MTEsMjAuMDgzSDQyVjIwSDI0djhoMTEuMzAzYy0wLjc5MiwyLjIzNy0yLjIzMSw0LjE2Ni00LjA4Nyw1LjU3MWMwLjAwMS0wLjAwMSwwLjAwMi0wLjAwMSwwLjAwMy0wLjAwMmw2LjE5LDUuMjM4QzM2Ljk3MSwzOS4yMDUsNDQsMzQsNDQsMjRDNDQsMjIuNjU5LDQzLjg2MiwyMS4zNSw0My42MTEsMjAuMDgzeiIvPjwvc3ZnPg==";case"patts":return"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0iZGFya3JlZCIgLz4KICA8dGV4dCB4PSIyNSIgeT0iNzAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSI0OCIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5wPC90ZXh0PgogIDx0ZXh0IHg9IjYwIiB5PSI3MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjQ4IiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0ib3JhbmdlIj5hPC90ZXh0Pgo8L3N2Zz4K";case"salle":return"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI1MCIgZmlsbD0ic2t5Ymx1ZSIgLz4KICA8dGV4dCB4PSIzMCIgeT0iNDAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIzMiIgZm9udC13ZWlnaHQ9ImJvbGQiIGZpbGw9IndoaXRlIj5MPC90ZXh0PgogIDx0ZXh0IHg9IjU2IiB5PSI0MCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjMyIiBmb250LXdlaWdodD0iYm9sZCIgZmlsbD0iYmxhY2siPlM8L3RleHQ+CiAgPHRleHQgeD0iMjUiIHk9Ijc1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSI+QkNOPC90ZXh0Pgo8L3N2Zz4K"}}const i=e=>{const t=e.substring(1,e.length-1);return t.charAt(0).toUpperCase()+t.slice(1)}},9590:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function a(e,o){if(e===o)return!0;if(e&&o&&"object"==typeof e&&"object"==typeof o){if(e.constructor!==o.constructor)return!1;var c,s,l,u;if(Array.isArray(e)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(!a(e[s],o[s]))return!1;return!0}if(r&&e instanceof Map&&o instanceof Map){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;for(u=e.entries();!(s=u.next()).done;)if(!a(s.value[1],o.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&o instanceof Set){if(e.size!==o.size)return!1;for(u=e.entries();!(s=u.next()).done;)if(!o.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(o)){if((c=e.length)!=o.length)return!1;for(s=c;0!=s--;)if(e[s]!==o[s])return!1;return!0}if(e.constructor===RegExp)return e.source===o.source&&e.flags===o.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof o.valueOf)return e.valueOf()===o.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof o.toString)return e.toString()===o.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(o).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(o,l[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==l[s]&&"__v"!==l[s]&&"__o"!==l[s]||!e.$$typeof)&&!a(e[l[s]],o[l[s]]))return!1;return!0}return e!=e&&o!=o}e.exports=function(e,t){try{return a(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},3524:function(e,t,r){"use strict";var n,i=r(7294),a=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,l=[];function u(){s=e(l.map((function(e){return e.props}))),d.canUseDOM?t(s):r&&(s=r(s))}var d=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,l=[],e};var o=i.prototype;return o.UNSAFE_componentWillMount=function(){l.push(this),u()},o.componentDidUpdate=function(){u()},o.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),u()},o.render=function(){return a.createElement(n,this.props)},i}(i.PureComponent);return o(d,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),o(d,"canUseDOM",c),d}}}}]);
//# sourceMappingURL=b8fcb17b84a3d39becd28bca8afcf6824f427bcd-218be2b2551592e15468.js.map