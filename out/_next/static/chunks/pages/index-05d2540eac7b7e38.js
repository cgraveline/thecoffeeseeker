(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6329)}])},227:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,o){return!1},("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1551:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=n(2648).Z,r=n(7273).Z,l=o(n(7294)),i=n(1003),a=n(7795),s=n(4465),c=n(2692),u=n(8245),f=n(9246),d=n(227),p=n(3468);let h=new Set;function _(e,t,n,o){if(i.isLocalURL(t)){if(!o.bypassPrefetchedCheck){let r=void 0!==o.locale?o.locale:"locale"in e?e.locale:void 0,l=t+"%"+n+"%"+r;if(h.has(l))return;h.add(l)}Promise.resolve(e.prefetch(t,n,o)).catch(e=>{})}}function m(e){return"string"==typeof e?e:a.formatUrl(e)}let v=l.default.forwardRef(function(e,t){let n,o;let{href:a,as:h,children:v,prefetch:y,passHref:g,replace:j,shallow:x,scroll:b,locale:w,onClick:k,onMouseEnter:C,onTouchStart:E,legacyBehavior:H=!1}=e,M=r(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=v,H&&("string"==typeof n||"number"==typeof n)&&(n=l.default.createElement("a",null,n));let N=!1!==y,O=l.default.useContext(c.RouterContext),L=l.default.useContext(u.AppRouterContext),S=null!=O?O:L,P=!O,{href:I,as:T}=l.default.useMemo(()=>{if(!O){let e=m(a);return{href:e,as:h?m(h):e}}let[t,n]=i.resolveHref(O,a,!0);return{href:t,as:h?i.resolveHref(O,h):n||t}},[O,a,h]),D=l.default.useRef(I),R=l.default.useRef(T);H&&(o=l.default.Children.only(n));let W=H?o&&"object"==typeof o&&o.ref:t,[U,q,G]=f.useIntersection({rootMargin:"200px"}),K=l.default.useCallback(e=>{(R.current!==T||D.current!==I)&&(G(),R.current=T,D.current=I),U(e),W&&("function"==typeof W?W(e):"object"==typeof W&&(W.current=e))},[T,W,I,G,U]);l.default.useEffect(()=>{S&&q&&N&&_(S,I,T,{locale:w})},[T,I,q,w,N,null==O?void 0:O.locale,S]);let z={ref:K,onClick(e){H||"function"!=typeof k||k(e),H&&o.props&&"function"==typeof o.props.onClick&&o.props.onClick(e),S&&!e.defaultPrevented&&function(e,t,n,o,r,a,s,c,u,f){let{nodeName:d}=e.currentTarget,p="A"===d.toUpperCase();if(p&&(function(e){let{target:t}=e.currentTarget;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!i.isLocalURL(n)))return;e.preventDefault();let h=()=>{"beforePopState"in t?t[r?"replace":"push"](n,o,{shallow:a,locale:c,scroll:s}):t[r?"replace":"push"](o||n,{forceOptimisticNavigation:!f})};u?l.default.startTransition(h):h()}(e,S,I,T,j,x,b,w,P,N)},onMouseEnter(e){H||"function"!=typeof C||C(e),H&&o.props&&"function"==typeof o.props.onMouseEnter&&o.props.onMouseEnter(e),S&&(N||!P)&&_(S,I,T,{locale:w,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart(e){H||"function"!=typeof E||E(e),H&&o.props&&"function"==typeof o.props.onTouchStart&&o.props.onTouchStart(e),S&&(N||!P)&&_(S,I,T,{locale:w,priority:!0,bypassPrefetchedCheck:!0})}};if(!H||g||"a"===o.type&&!("href"in o.props)){let B=void 0!==w?w:null==O?void 0:O.locale,Z=(null==O?void 0:O.isLocaleDomain)&&d.getDomainLocale(T,B,null==O?void 0:O.locales,null==O?void 0:O.domainLocales);z.href=Z||p.addBasePath(s.addLocale(T,B,null==O?void 0:O.defaultLocale))}return H?l.default.cloneElement(o,z):l.default.createElement("a",Object.assign({},M,z),n)});t.default=v,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},9246:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){let{rootRef:t,rootMargin:n,disabled:s}=e,c=s||!l,[u,f]=o.useState(!1),[d,p]=o.useState(null);o.useEffect(()=>{if(l){if(!c&&!u&&d&&d.tagName){let e=function(e,t,n){let{id:o,observer:r,elements:l}=function(e){let t;let n={root:e.root||null,margin:e.rootMargin||""},o=a.find(e=>e.root===n.root&&e.margin===n.margin);if(o&&(t=i.get(o)))return t;let r=new Map,l=new IntersectionObserver(e=>{e.forEach(e=>{let t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)})},e);return t={id:n,observer:l,elements:r},a.push(n),i.set(n,t),t}(n);return l.set(e,t),r.observe(e),function(){if(l.delete(e),r.unobserve(e),0===l.size){r.disconnect(),i.delete(o);let t=a.findIndex(e=>e.root===o.root&&e.margin===o.margin);t>-1&&a.splice(t,1)}}}(d,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!u){let o=r.requestIdleCallback(()=>f(!0));return()=>r.cancelIdleCallback(o)}},[d,c,n,t,u]);let h=o.useCallback(()=>{f(!1)},[]);return[p,u,h]};var o=n(7294),r=n(4686);let l="function"==typeof IntersectionObserver,i=new Map,a=[];("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6329:function(e,t,n){"use strict";n.r(t),n.d(t,{Home:function(){return h},default:function(){return _}});var o=n(5893),r=n(9008),l=n.n(r),i=n(7294),a=n(3915),s=n.n(a),c=n(1664),u=n.n(c),f=n(1829),d=n.n(f);let p=e=>{let{children:t}=e;return(0,o.jsx)("div",{className:d().card,children:t})},h=()=>{let[e,t]=(0,i.useState)([]);return(0,i.useEffect)(()=>{(async function(){let e=await fetch("/api/shops"),n=await e.json();t(n.coffeeShops)})()},[]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(l(),{children:[(0,o.jsx)("title",{children:"The Coffee Seeker"}),(0,o.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/favicon.ico"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.googleapis.com"}),(0,o.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossOrigin:"true"}),(0,o.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Lora:wght@600&family=Noto+Sans+Mono&display=swap",rel:"stylesheet"})]}),(0,o.jsx)("header",{className:s().header,children:(0,o.jsx)("h1",{children:"The Coffee Seeker ☕️"})}),(0,o.jsxs)("main",{className:s().main,children:[(0,o.jsx)("h2",{className:s().intro,children:"Leading a \uD83D\uDC0E to ☕️."}),(0,o.jsx)("ul",{className:s().cardWrap,children:e.map(e=>(0,o.jsx)("li",{children:(0,o.jsx)(p,{children:(0,o.jsxs)("div",{className:s().shop,children:[(0,o.jsx)("h3",{children:e.title}),(0,o.jsx)("span",{children:e.address}),(0,o.jsxs)("div",{className:s().shopLinks,children:[(0,o.jsx)(u(),{className:s().website,href:e.website,children:"Website"}),(0,o.jsx)(u(),{className:s().directions,href:e.directions,children:"Directions"})]})]})})},e.title))})]})]})};var _=h},3915:function(e){e.exports={main:"Home_main__EtNt2",header:"Home_header__qwdnY",intro:"Home_intro__Isu_t",cardWrap:"Home_cardWrap__oFNlc",shop:"Home_shop__ZnGCp",shopLinks:"Home_shopLinks__iS_qM",website:"Home_website__aGvIB",directions:"Home_directions__S_5i_",card:"Home_card__7oz7W",thirteen:"Home_thirteen__ocdUI",content:"Home_content___fOQz",grid:"Home_grid__c_g6N",center:"Home_center__V0nxp",description:"Home_description__Qwq1f",vercelLogo:"Home_vercelLogo__lhIxO",logo:"Home_logo__80mSr",rotate:"Home_rotate__99GkW"}},1829:function(e){e.exports={card:"Card_card__oI5iJ"}},9008:function(e,t,n){e.exports=n(3121)},1664:function(e,t,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);