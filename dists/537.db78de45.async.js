(self["webpackChunkant_design_pro"]=self["webpackChunkant_design_pro"]||[]).push([[537],{49101:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a=n(67294),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"},i=r,o=n(27029),c=function(e,t){return a.createElement(o.Z,Object.assign({},e,{ref:t,icon:i}))};c.displayName="PlusOutlined";var l=a.forwardRef(c)},3749:function(){},72370:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var a=n(19877),r=n(67294);function i(){var e=r.useReducer((function(e){return e+1}),0),t=(0,a.Z)(e,2),n=t[1];return n}},85748:function(e,t,n){"use strict";n.d(t,{c4:function(){return i}});var a=n(4763),r=n(3066),i=["xxl","xl","lg","md","sm","xs"],o={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},c=new Map,l=-1,u={},s={matchHandlers:{},dispatch:function(e){return u=e,c.forEach((function(e){return e(u)})),c.size>=1},subscribe:function(e){return c.size||this.register(),l+=1,c.set(l,e),e(u),l},unsubscribe:function(e){c["delete"](e),c.size||this.unregister()},unregister:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],a=e.matchHandlers[n];null===a||void 0===a||a.mql.removeListener(null===a||void 0===a?void 0:a.listener)})),c.clear()},register:function(){var e=this;Object.keys(o).forEach((function(t){var n=o[t],i=function(n){var i=n.matches;e.dispatch((0,r.Z)((0,r.Z)({},u),(0,a.Z)({},t,i)))},c=window.matchMedia(n);c.addListener(i),e.matchHandlers[n]={mql:c,listener:i},i(c)}))}};t["ZP"]=s},52311:function(e,t,n){"use strict";n.d(t,{Z:function(){return ce}});var a=n(3066),r=n(4763),i=n(67294),o=n(19877),c=n(95676),l=n(63309),u=n(45937),s=n(35510),d=n.n(s),f=n(10048),v=n(44581),m=n(82321),h=n(66156),b=n(90468),p=n(20562);function y(e){var t=(0,i.useRef)(),n=(0,i.useRef)(!1);function a(){for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];n.current||(b.Z.cancel(t.current),t.current=(0,b.Z)((function(){e.apply(void 0,r)})))}return(0,i.useEffect)((function(){return function(){n.current=!0,b.Z.cancel(t.current)}}),[]),a}function Z(e){var t=(0,i.useRef)([]),n=(0,i.useState)({}),a=(0,o.Z)(n,2),r=a[1],c=(0,i.useRef)("function"===typeof e?e():e),l=y((function(){var e=c.current;t.current.forEach((function(t){e=t(e)})),t.current=[],c.current=e,r({})}));function u(e){t.current.push(e),l()}return[c.current,u]}var g=n(90826);function E(e,t){var n,a=e.prefixCls,o=e.id,c=e.active,l=e.tab,u=l.key,s=l.tab,f=l.disabled,v=l.closeIcon,m=e.closable,h=e.renderWrapper,b=e.removeAriaLabel,p=e.editable,y=e.onClick,Z=e.onRemove,E=e.onFocus,x=e.style,w="".concat(a,"-tab");i.useEffect((function(){return Z}),[]);var k=p&&!1!==m&&!f;function C(e){f||y(e)}function N(e){e.preventDefault(),e.stopPropagation(),p.onEdit("remove",{key:u,event:e})}var T=i.createElement("div",{key:u,ref:t,className:d()(w,(n={},(0,r.Z)(n,"".concat(w,"-with-remove"),k),(0,r.Z)(n,"".concat(w,"-active"),c),(0,r.Z)(n,"".concat(w,"-disabled"),f),n)),style:x,onClick:C},i.createElement("div",{role:"tab","aria-selected":c,id:o&&"".concat(o,"-tab-").concat(u),className:"".concat(w,"-btn"),"aria-controls":o&&"".concat(o,"-panel-").concat(u),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),C(e)},onKeyDown:function(e){[g.Z.SPACE,g.Z.ENTER].includes(e.which)&&(e.preventDefault(),C(e))},onFocus:E},s),k&&i.createElement("button",{type:"button","aria-label":b||"remove",tabIndex:0,className:"".concat(w,"-remove"),onClick:function(e){e.stopPropagation(),N(e)}},v||p.removeIcon||"\xd7"));return h?h(T):T}var x=i.forwardRef(E),w={width:0,height:0,left:0,top:0};function k(e,t,n){return(0,i.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||w,i=r.left+r.width,o=0;o<e.length;o+=1){var c,l=e[o].key,s=t.get(l);if(!s)s=t.get(null===(c=e[o-1])||void 0===c?void 0:c.key)||w;var d=a.get(l)||(0,u.Z)({},s);d.right=i-d.left-d.width,a.set(l,d)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}var C={width:0,height:0,left:0,top:0,right:0};function N(e,t,n,a,r){var o,c,l,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(o="width",c=d?"right":"left",l=Math.abs(t.left)):(o="height",c="top",l=-t.top);var f=t[o],v=n[o],m=a[o],h=f;return v+m>f&&(h=f-m),(0,i.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||C;if(r[c]+r[o]>l+h){n=a-1;break}}for(var i=0,s=t-1;s>=0;s-=1){var d=e.get(u[s].key)||C;if(d[c]<l){i=s+1;break}}return[i,n]}),[e,l,h,s,u.map((function(e){return e.key})).join("_"),d])}var T=n(47503),P=n(87547);function S(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?i.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}var I=i.forwardRef(S);function R(e,t){var n=e.prefixCls,a=e.id,c=e.tabs,l=e.locale,u=e.mobile,s=e.moreIcon,f=void 0===s?"More":s,v=e.moreTransitionName,m=e.style,h=e.className,b=e.editable,p=e.tabBarGutter,y=e.rtl,Z=e.onTabClick,E=(0,i.useState)(!1),x=(0,o.Z)(E,2),w=x[0],k=x[1],C=(0,i.useState)(null),N=(0,o.Z)(C,2),S=N[0],R=N[1],M="".concat(a,"-more-popup"),L="".concat(n,"-dropdown"),B=null!==S?"".concat(M,"-").concat(S):null,A=null===l||void 0===l?void 0:l.dropdownAriaLabel,D=i.createElement(T.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;Z(t,n),k(!1)},id:M,tabIndex:-1,role:"listbox","aria-activedescendant":B,selectedKeys:[S],"aria-label":void 0!==A?A:"expanded dropdown"},c.map((function(e){return i.createElement(T.sN,{key:e.key,id:"".concat(M,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function O(e){for(var t=c.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,r=0;r<a;r+=1){n=(n+e+a)%a;var i=t[n];if(!i.disabled)return void R(i.key)}}function j(e){var t=e.which;if(w)switch(t){case g.Z.UP:O(-1),e.preventDefault();break;case g.Z.DOWN:O(1),e.preventDefault();break;case g.Z.ESC:k(!1);break;case g.Z.SPACE:case g.Z.ENTER:null!==S&&Z(S,e);break}else[g.Z.DOWN,g.Z.SPACE,g.Z.ENTER].includes(t)&&(k(!0),e.preventDefault())}(0,i.useEffect)((function(){var e=document.getElementById(B);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),(0,i.useEffect)((function(){w||R(null)}),[w]);var K=(0,r.Z)({},y?"marginRight":"marginLeft",p);c.length||(K.visibility="hidden",K.order=1);var W=d()((0,r.Z)({},"".concat(L,"-rtl"),y)),q=u?null:i.createElement(P.Z,{prefixCls:L,overlay:D,trigger:["hover"],visible:w,transitionName:v,onVisibleChange:k,overlayClassName:W,mouseEnterDelay:.1,mouseLeaveDelay:.1},i.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:K,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:j},f));return i.createElement("div",{className:d()("".concat(n,"-nav-operations"),h),style:m,ref:t},q,i.createElement(I,{prefixCls:n,locale:l,editable:b}))}var M=i.forwardRef(R),L=(0,i.createContext)(null),B=.1,A=.01,D=20,O=Math.pow(.995,D);function j(e,t){var n=(0,i.useState)(),a=(0,o.Z)(n,2),r=a[0],c=a[1],l=(0,i.useState)(0),u=(0,o.Z)(l,2),s=u[0],d=u[1],f=(0,i.useState)(0),v=(0,o.Z)(f,2),m=v[0],h=v[1],b=(0,i.useState)(),p=(0,o.Z)(b,2),y=p[0],Z=p[1],g=(0,i.useRef)();function E(e){var t=e.touches[0],n=t.screenX,a=t.screenY;c({x:n,y:a}),window.clearInterval(g.current)}function x(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;c({x:a,y:i});var o=a-r.x,l=i-r.y;t(o,l);var u=Date.now();d(u),h(u-s),Z({x:o,y:l})}}function w(){if(r&&(c(null),Z(null),y)){var e=y.x/m,n=y.y/m,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<B)return;var o=e,l=n;g.current=window.setInterval((function(){Math.abs(o)<A&&Math.abs(l)<A?window.clearInterval(g.current):(o*=O,l*=O,t(o*D,l*D))}),D)}}var k=(0,i.useRef)();function C(e){var n=e.deltaX,a=e.deltaY,r=0,i=Math.abs(n),o=Math.abs(a);i===o?r="x"===k.current?n:a:i>o?(r=n,k.current="x"):(r=a,k.current="y"),t(-r,-r)&&e.preventDefault()}var N=(0,i.useRef)(null);N.current={onTouchStart:E,onTouchMove:x,onTouchEnd:w,onWheel:C},i.useEffect((function(){function t(e){N.current.onTouchStart(e)}function n(e){N.current.onTouchMove(e)}function a(e){N.current.onTouchEnd(e)}function r(e){N.current.onWheel(e)}return document.addEventListener("touchmove",n,{passive:!1}),document.addEventListener("touchend",a,{passive:!1}),e.current.addEventListener("touchstart",t,{passive:!1}),e.current.addEventListener("wheel",r),function(){document.removeEventListener("touchmove",n),document.removeEventListener("touchend",a)}}),[])}function K(){var e=(0,i.useRef)(new Map);function t(t){return e.current.has(t)||e.current.set(t,i.createRef()),e.current.get(t)}function n(t){e.current.delete(t)}return[t,n]}function W(e,t){var n=i.useRef(e),a=i.useState({}),r=(0,o.Z)(a,2),c=r[1];function l(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,c({})}return[n.current,l]}var q=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o={};return r&&"object"===(0,c.Z)(r)&&!i.isValidElement(r)?o=r:o.right=r,"right"===n&&(t=o.right),"left"===n&&(t=o.left),t?i.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function z(e,t){var n,c=i.useContext(L),l=c.prefixCls,s=c.tabs,f=e.className,v=e.style,m=e.id,g=e.animated,E=e.activeKey,w=e.rtl,C=e.extra,T=e.editable,P=e.locale,S=e.tabPosition,R=e.tabBarGutter,B=e.children,A=e.onTabClick,D=e.onTabScroll,O=(0,i.useRef)(),z=(0,i.useRef)(),H=(0,i.useRef)(),_=(0,i.useRef)(),V=K(),G=(0,o.Z)(V,2),Y=G[0],F=G[1],X="top"===S||"bottom"===S,U=W(0,(function(e,t){X&&D&&D({direction:e>t?"left":"right"})})),J=(0,o.Z)(U,2),Q=J[0],$=J[1],ee=W(0,(function(e,t){!X&&D&&D({direction:e>t?"top":"bottom"})})),te=(0,o.Z)(ee,2),ne=te[0],ae=te[1],re=(0,i.useState)(0),ie=(0,o.Z)(re,2),oe=ie[0],ce=ie[1],le=(0,i.useState)(0),ue=(0,o.Z)(le,2),se=ue[0],de=ue[1],fe=(0,i.useState)(0),ve=(0,o.Z)(fe,2),me=ve[0],he=ve[1],be=(0,i.useState)(0),pe=(0,o.Z)(be,2),ye=pe[0],Ze=pe[1],ge=(0,i.useState)(null),Ee=(0,o.Z)(ge,2),xe=Ee[0],we=Ee[1],ke=(0,i.useState)(null),Ce=(0,o.Z)(ke,2),Ne=Ce[0],Te=Ce[1],Pe=(0,i.useState)(0),Se=(0,o.Z)(Pe,2),Ie=Se[0],Re=Se[1],Me=(0,i.useState)(0),Le=(0,o.Z)(Me,2),Be=Le[0],Ae=Le[1],De=Z(new Map),Oe=(0,o.Z)(De,2),je=Oe[0],Ke=Oe[1],We=k(s,je,oe),qe="".concat(l,"-nav-operations-hidden"),ze=0,He=0;function _e(e){return e<ze?ze:e>He?He:e}X?w?(ze=0,He=Math.max(0,oe-xe)):(ze=Math.min(0,xe-oe),He=0):(ze=Math.min(0,Ne-se),He=0);var Ve=(0,i.useRef)(),Ge=(0,i.useState)(),Ye=(0,o.Z)(Ge,2),Fe=Ye[0],Xe=Ye[1];function Ue(){Xe(Date.now())}function Je(){window.clearTimeout(Ve.current)}function Qe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=We.get(e)||{width:0,height:0,left:0,right:0,top:0};if(X){var n=Q;w?t.right<Q?n=t.right:t.right+t.width>Q+xe&&(n=t.right+t.width-xe):t.left<-Q?n=-t.left:t.left+t.width>-Q+xe&&(n=-(t.left+t.width-xe)),ae(0),$(_e(n))}else{var a=ne;t.top<-ne?a=-t.top:t.top+t.height>-ne+Ne&&(a=-(t.top+t.height-Ne)),$(0),ae(_e(a))}}j(O,(function(e,t){function n(e,t){e((function(e){var n=_e(e+t);return n}))}if(X){if(xe>=oe)return!1;n($,e)}else{if(Ne>=se)return!1;n(ae,t)}return Je(),Ue(),!0})),(0,i.useEffect)((function(){return Je(),Fe&&(Ve.current=window.setTimeout((function(){Xe(0)}),100)),Je}),[Fe]);var $e=N(We,{width:xe,height:Ne,left:Q,top:ne},{width:me,height:ye},{width:Ie,height:Be},(0,u.Z)((0,u.Z)({},e),{},{tabs:s})),et=(0,o.Z)($e,2),tt=et[0],nt=et[1],at={};"top"===S||"bottom"===S?at[w?"marginRight":"marginLeft"]=R:at.marginTop=R;var rt=s.map((function(e,t){var n=e.key;return i.createElement(x,{id:m,prefixCls:l,key:n,tab:e,style:0===t?void 0:at,closable:e.closable,editable:T,active:n===E,renderWrapper:B,removeAriaLabel:null===P||void 0===P?void 0:P.removeAriaLabel,ref:Y(n),onClick:function(e){A(n,e)},onRemove:function(){F(n)},onFocus:function(){Qe(n),Ue(),O.current&&(w||(O.current.scrollLeft=0),O.current.scrollTop=0)}})})),it=y((function(){var e,t,n,a,r,i,o,c,l,u=(null===(e=O.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=O.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=_.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=_.current)||void 0===a?void 0:a.offsetHeight)||0,m=(null===(r=H.current)||void 0===r?void 0:r.offsetWidth)||0,h=(null===(i=H.current)||void 0===i?void 0:i.offsetHeight)||0;we(u),Te(d),Re(f),Ae(v);var b=((null===(o=z.current)||void 0===o?void 0:o.offsetWidth)||0)-f,p=((null===(c=z.current)||void 0===c?void 0:c.offsetHeight)||0)-v;ce(b),de(p);var y=null===(l=H.current)||void 0===l?void 0:l.className.includes(qe);he(b-(y?0:m)),Ze(p-(y?0:h)),Ke((function(){var e=new Map;return s.forEach((function(t){var n=t.key,a=Y(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),ot=s.slice(0,tt),ct=s.slice(nt+1),lt=[].concat((0,h.Z)(ot),(0,h.Z)(ct)),ut=(0,i.useState)(),st=(0,o.Z)(ut,2),dt=st[0],ft=st[1],vt=We.get(E),mt=(0,i.useRef)();function ht(){b.Z.cancel(mt.current)}(0,i.useEffect)((function(){var e={};return vt&&(X?(w?e.right=vt.right:e.left=vt.left,e.width=vt.width):(e.top=vt.top,e.height=vt.height)),ht(),mt.current=(0,b.Z)((function(){ft(e)})),ht}),[vt,X,w]),(0,i.useEffect)((function(){Qe()}),[E,vt,We,X]),(0,i.useEffect)((function(){it()}),[w,R,E,s.map((function(e){return e.key})).join("_")]);var bt,pt,yt,Zt,gt=!!lt.length,Et="".concat(l,"-nav-wrap");return X?w?(pt=Q>0,bt=Q+xe<oe):(bt=Q<0,pt=-Q+xe<oe):(yt=ne<0,Zt=-ne+Ne<se),i.createElement("div",{ref:t,role:"tablist",className:d()("".concat(l,"-nav"),f),style:v,onKeyDown:function(){Ue()}},i.createElement(q,{position:"left",extra:C,prefixCls:l}),i.createElement(p.Z,{onResize:it},i.createElement("div",{className:d()(Et,(n={},(0,r.Z)(n,"".concat(Et,"-ping-left"),bt),(0,r.Z)(n,"".concat(Et,"-ping-right"),pt),(0,r.Z)(n,"".concat(Et,"-ping-top"),yt),(0,r.Z)(n,"".concat(Et,"-ping-bottom"),Zt),n)),ref:O},i.createElement(p.Z,{onResize:it},i.createElement("div",{ref:z,className:"".concat(l,"-nav-list"),style:{transform:"translate(".concat(Q,"px, ").concat(ne,"px)"),transition:Fe?"none":void 0}},rt,i.createElement(I,{ref:_,prefixCls:l,locale:P,editable:T,style:(0,u.Z)((0,u.Z)({},0===rt.length?void 0:at),{},{visibility:gt?"hidden":null})}),i.createElement("div",{className:d()("".concat(l,"-ink-bar"),(0,r.Z)({},"".concat(l,"-ink-bar-animated"),g.inkBar)),style:dt}))))),i.createElement(M,(0,a.Z)({},e,{ref:H,prefixCls:l,tabs:lt,className:!gt&&qe})),i.createElement(q,{position:"right",extra:C,prefixCls:l}))}var H=i.forwardRef(z);function _(e){var t=e.id,n=e.activeKey,a=e.animated,o=e.tabPosition,c=e.rtl,l=e.destroyInactiveTabPane,u=i.useContext(L),s=u.prefixCls,f=u.tabs,v=a.tabPane,m=f.findIndex((function(e){return e.key===n}));return i.createElement("div",{className:d()("".concat(s,"-content-holder"))},i.createElement("div",{className:d()("".concat(s,"-content"),"".concat(s,"-content-").concat(o),(0,r.Z)({},"".concat(s,"-content-animated"),v)),style:m&&v?(0,r.Z)({},c?"marginRight":"marginLeft","-".concat(m,"00%")):null},f.map((function(e){return i.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:v,active:e.key===n,destroyInactiveTabPane:l})}))))}function V(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,c=e.id,l=e.active,s=e.animated,f=e.destroyInactiveTabPane,v=e.tabKey,m=e.children,h=i.useState(n),b=(0,o.Z)(h,2),p=b[0],y=b[1];i.useEffect((function(){l?y(!0):f&&y(!1)}),[l,f]);var Z={};return l||(s?(Z.visibility="hidden",Z.height=0,Z.overflowY="hidden"):Z.display="none"),i.createElement("div",{id:c&&"".concat(c,"-panel-").concat(v),role:"tabpanel",tabIndex:l?0:-1,"aria-labelledby":c&&"".concat(c,"-tab-").concat(v),"aria-hidden":!l,style:(0,u.Z)((0,u.Z)({},Z),r),className:d()("".concat(t,"-tabpane"),l&&"".concat(t,"-tabpane-active"),a)},(l||p||n)&&m)}var G=["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"],Y=0;function F(e){return(0,f.Z)(e).map((function(e){if(i.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,u.Z)((0,u.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}function X(e,t){var n,s,f=e.id,h=e.prefixCls,b=void 0===h?"rc-tabs":h,p=e.className,y=e.children,Z=e.direction,g=e.activeKey,E=e.defaultActiveKey,x=e.editable,w=e.animated,k=void 0===w?{inkBar:!0,tabPane:!1}:w,C=e.tabPosition,N=void 0===C?"top":C,T=e.tabBarGutter,P=e.tabBarStyle,S=e.tabBarExtraContent,I=e.locale,R=e.moreIcon,M=e.moreTransitionName,B=e.destroyInactiveTabPane,A=e.renderTabBar,D=e.onChange,O=e.onTabClick,j=e.onTabScroll,K=(0,l.Z)(e,G),W=F(y),q="rtl"===Z;s=!1===k?{inkBar:!1,tabPane:!1}:!0===k?{inkBar:!0,tabPane:!0}:(0,u.Z)({inkBar:!0,tabPane:!1},"object"===(0,c.Z)(k)?k:{});var z=(0,i.useState)(!1),V=(0,o.Z)(z,2),X=V[0],U=V[1];(0,i.useEffect)((function(){U((0,v.Z)())}),[]);var J=(0,m.Z)((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:g,defaultValue:E}),Q=(0,o.Z)(J,2),$=Q[0],ee=Q[1],te=(0,i.useState)((function(){return W.findIndex((function(e){return e.key===$}))})),ne=(0,o.Z)(te,2),ae=ne[0],re=ne[1];(0,i.useEffect)((function(){var e,t=W.findIndex((function(e){return e.key===$}));-1===t&&(t=Math.max(0,Math.min(ae,W.length-1)),ee(null===(e=W[t])||void 0===e?void 0:e.key));re(t)}),[W.map((function(e){return e.key})).join("_"),$,ae]);var ie=(0,m.Z)(null,{value:f}),oe=(0,o.Z)(ie,2),ce=oe[0],le=oe[1],ue=N;function se(e,t){null===O||void 0===O||O(e,t),ee(e),null===D||void 0===D||D(e)}X&&!["left","right"].includes(N)&&(ue="top"),(0,i.useEffect)((function(){f||(le("rc-tabs-".concat(Y)),Y+=1)}),[]);var de,fe={id:ce,activeKey:$,animated:s,tabPosition:ue,rtl:q,mobile:X},ve=(0,u.Z)((0,u.Z)({},fe),{},{editable:x,locale:I,moreIcon:R,moreTransitionName:M,tabBarGutter:T,onTabClick:se,onTabScroll:j,extra:S,style:P,panes:y});return de=A?A(ve,H):i.createElement(H,ve),i.createElement(L.Provider,{value:{tabs:W,prefixCls:b}},i.createElement("div",(0,a.Z)({ref:t,id:f,className:d()(b,"".concat(b,"-").concat(ue),(n={},(0,r.Z)(n,"".concat(b,"-mobile"),X),(0,r.Z)(n,"".concat(b,"-editable"),x),(0,r.Z)(n,"".concat(b,"-rtl"),q),n),p)},K),de,i.createElement(_,(0,a.Z)({destroyInactiveTabPane:B},fe,{animated:s}))))}var U=i.forwardRef(X);U.TabPane=V;var J=U,Q=J,$=n(44545),ee=n(49101),te=n(54549),ne=n(20324),ae=n(67170),re=n(10772),ie=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function oe(e){var t,n=e.type,o=e.className,c=e.size,l=e.onEdit,u=e.hideAdd,s=e.centered,f=e.addIcon,v=ie(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=v.prefixCls,h=v.moreIcon,b=void 0===h?i.createElement($.Z,null):h,p=i.useContext(ae.E_),y=p.getPrefixCls,Z=p.direction,g=y("tabs",m);"editable-card"===n&&(t={onEdit:function(e,t){var n=t.key,a=t.event;null===l||void 0===l||l("add"===e?a:n,e)},removeIcon:i.createElement(te.Z,null),addIcon:f||i.createElement(ee.Z,null),showAdd:!0!==u});var E=y();return(0,ne.Z)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),i.createElement(re.Z.Consumer,null,(function(e){var l,u=void 0!==c?c:e;return i.createElement(Q,(0,a.Z)({direction:Z,moreTransitionName:"".concat(E,"-slide-up")},v,{className:d()((l={},(0,r.Z)(l,"".concat(g,"-").concat(u),u),(0,r.Z)(l,"".concat(g,"-card"),["card","editable-card"].includes(n)),(0,r.Z)(l,"".concat(g,"-editable-card"),"editable-card"===n),(0,r.Z)(l,"".concat(g,"-centered"),s),l),o),editable:t,moreIcon:b,prefixCls:g}))}))}oe.TabPane=V;var ce=oe},84786:function(e,t,n){"use strict";n(43673),n(3749)}}]);