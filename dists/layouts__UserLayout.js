(self["webpackChunkant_design_pro"]=self["webpackChunkant_design_pro"]||[]).push([[81],{20698:function(e){e.exports={container:"container___3rwDa",lang:"lang___2ES0G",content:"content___3Paa8",top:"top___1W42Y",header:"header___1cl15",logo:"logo___29nS6",title:"title___3DxND",desc:"desc___2YLHe"}},43458:function(e,t,n){"use strict";var r=n(67294),a=n(91374),i=n(78874),o=r.createElement(a.Z,{copyright:"".concat((new Date).getFullYear()," \u8682\u8681\u91d1\u670d\u4f53\u9a8c\u6280\u672f\u90e8\u51fa\u54c1\u725b\u903c"),links:[{key:"Ant Design Pro",title:"Ant Design Pro1",href:"https://pro.ant.design",blankTarget:!0},{key:"github",title:r.createElement(i.Z,null),href:"https://github.com/ant-design/ant-design-pro",blankTarget:!0},{key:"Ant Design",title:"Ant Design2",href:"https://ant.design",blankTarget:!0}]});t["Z"]=o},2311:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return V}});var r=n(52663),a=n(76129),i=n(79800),o=n(67294),c=n(44721),s=n.n(c),u=n(97449),l=n.n(u),f=n(78267),p=n.n(f),d=n(23270),h=n.n(d);function m(){return(m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function y(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}function g(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(n=i[r])>=0||(a[n]=e[n]);return a}var T={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title",FRAGMENT:"Symbol(react.fragment)"},v=Object.keys(T).map((function(e){return T[e]})),b={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},A=Object.keys(b).reduce((function(e,t){return e[b[t]]=t,e}),{}),C=function(e,t){for(var n=e.length-1;n>=0;n-=1){var r=e[n];if(Object.prototype.hasOwnProperty.call(r,t))return r[t]}return null},E=function(e){var t=C(e,T.TITLE),n=C(e,"titleTemplate");if(Array.isArray(t)&&(t=t.join("")),n&&t)return n.replace(/%s/g,(function(){return t}));var r=C(e,"defaultTitle");return t||r||void 0},O=function(e){return C(e,"onChangeClientState")||function(){}},S=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return m({},e,t)}),{})},P=function(e,t){return t.filter((function(e){return void 0!==e[T.BASE]})).map((function(e){return e[T.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),a=0;a<r.length;a+=1){var i=r[a].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},x=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&console&&"function"==typeof console.warn&&console.warn("Helmet: "+e+' should be of type "Array". Instead found type "'+typeof t[e]+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var a={};n.filter((function(e){for(var n,i=Object.keys(e),o=0;o<i.length;o+=1){var c=i[o],s=c.toLowerCase();-1===t.indexOf(s)||"rel"===n&&"canonical"===e[n].toLowerCase()||"rel"===s&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||"innerHTML"!==c&&"cssText"!==c&&"itemprop"!==c||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),a[n]||(a[n]={}),!r[n][u]&&(a[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(a),o=0;o<i.length;o+=1){var c=i[o],s=m({},r[c],a[c]);r[c]=s}return e}),[]).reverse()},I=function(e){return Array.isArray(e)?e.join(""):e},k=[T.NOSCRIPT,T.SCRIPT,T.STYLE],L=function(e,t){return void 0===t&&(t=!0),!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},w=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},N=function(e,t){return void 0===t&&(t={}),Object.keys(e).reduce((function(t,n){return t[b[n]||n]=e[n],t}),t)},j=function(e,t,n){switch(e){case T.TITLE:return{toComponent:function(){return n=t.titleAttributes,(r={key:e=t.title})["data-rh"]=!0,a=N(n,r),[o.createElement(T.TITLE,a,e)];var e,n,r,a},toString:function(){return function(e,t,n,r){var a=w(n),i=I(t);return a?"<"+e+' data-rh="true" '+a+">"+L(i,r)+"</"+e+">":"<"+e+' data-rh="true">'+L(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case"bodyAttributes":case"htmlAttributes":return{toComponent:function(){return N(t)},toString:function(){return w(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,a=((r={key:n})["data-rh"]=!0,r);return Object.keys(t).forEach((function(e){var n=b[e]||e;"innerHTML"===n||"cssText"===n?a.dangerouslySetInnerHTML={__html:t.innerHTML||t.cssText}:a[n]=t[e]})),o.createElement(e,a)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var a=Object.keys(r).filter((function(e){return!("innerHTML"===e||"cssText"===e)})).reduce((function(e,t){var a=void 0===r[t]?t:t+'="'+L(r[t],n)+'"';return e?e+" "+a:a}),""),i=r.innerHTML||r.cssText||"",o=-1===k.indexOf(e);return t+"<"+e+' data-rh="true" '+a+(o?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},_=function(e){var t=e.bodyAttributes,n=e.encode,r=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.scriptTags,s=e.styleTags,u=e.title,l=void 0===u?"":u,f=e.titleAttributes;return{base:j(T.BASE,e.baseTag,n),bodyAttributes:j("bodyAttributes",t,n),htmlAttributes:j("htmlAttributes",r,n),link:j(T.LINK,a,n),meta:j(T.META,i,n),noscript:j(T.NOSCRIPT,o,n),script:j(T.SCRIPT,c,n),style:j(T.STYLE,s,n),title:j(T.TITLE,{title:l,titleAttributes:f},n)}},R=o.createContext({}),H=s().shape({setHelmet:s().func,helmetInstances:s().shape({get:s().func,add:s().func,remove:s().func})}),M="undefined"!=typeof document,D=function(e){function t(n){var r;return(r=e.call(this,n)||this).instances=[],r.value={setHelmet:function(e){r.props.context.helmet=e},helmetInstances:{get:function(){return r.instances},add:function(e){r.instances.push(e)},remove:function(e){var t=r.instances.indexOf(e);r.instances.splice(t,1)}}},t.canUseDOM||(n.context.helmet=_({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),r}return y(t,e),t.prototype.render=function(){return o.createElement(R.Provider,{value:this.value},this.props.children)},t}(o.Component);D.canUseDOM=M,D.propTypes={context:s().shape({helmet:s().shape()}),children:s().node.isRequired},D.defaultProps={context:{}},D.displayName="HelmetProvider";var Z=function(e,t){var n,r=document.head||document.querySelector(T.HEAD),a=r.querySelectorAll(e+"[data-rh]"),i=[].slice.call(a),o=[];return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&("innerHTML"===a?r.innerHTML=t.innerHTML:"cssText"===a?r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText)):r.setAttribute(a,void 0===t[a]?"":t[a]));r.setAttribute("data-rh","true"),i.some((function(e,t){return n=t,r.isEqualNode(e)}))?i.splice(n,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},Y=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute("data-rh"),a=r?r.split(","):[],i=[].concat(a),o=Object.keys(t),c=0;c<o.length;c+=1){var s=o[c],u=t[s]||"";n.getAttribute(s)!==u&&n.setAttribute(s,u),-1===a.indexOf(s)&&a.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f-=1)n.removeAttribute(i[f]);a.length===i.length?n.removeAttribute("data-rh"):n.getAttribute("data-rh")!==o.join(",")&&n.setAttribute("data-rh",o.join(","))}},q=function(e,t){var n=e.baseTag,r=e.htmlAttributes,a=e.linkTags,i=e.metaTags,o=e.noscriptTags,c=e.onChangeClientState,s=e.scriptTags,u=e.styleTags,l=e.title,f=e.titleAttributes;Y(T.BODY,e.bodyAttributes),Y(T.HTML,r),function(e,t){void 0!==e&&document.title!==e&&(document.title=I(e)),Y(T.TITLE,t)}(l,f);var p={baseTag:Z(T.BASE,n),linkTags:Z(T.LINK,a),metaTags:Z(T.META,i),noscriptTags:Z(T.NOSCRIPT,o),scriptTags:Z(T.SCRIPT,s),styleTags:Z(T.STYLE,u)},d={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(d[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),c(e,d,h)},B=null,K=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).rendered=!1,t}y(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!h()(e,this.props)},n.componentDidUpdate=function(){this.emitChange()},n.componentWillUnmount=function(){this.props.context.helmetInstances.remove(this),this.emitChange()},n.emitChange=function(){var e,t,n=this.props.context,r=n.setHelmet,a=null,i=(e=n.helmetInstances.get().map((function(e){var t=m({},e.props);return delete t.context,t})),{baseTag:P(["href"],e),bodyAttributes:S("bodyAttributes",e),defer:C(e,"defer"),encode:C(e,"encodeSpecialCharacters"),htmlAttributes:S("htmlAttributes",e),linkTags:x(T.LINK,["rel","href"],e),metaTags:x(T.META,["name","charset","http-equiv","property","itemprop"],e),noscriptTags:x(T.NOSCRIPT,["innerHTML"],e),onChangeClientState:O(e),scriptTags:x(T.SCRIPT,["src","innerHTML"],e),styleTags:x(T.STYLE,["cssText"],e),title:E(e),titleAttributes:S("titleAttributes",e)});D.canUseDOM?(t=i,B&&cancelAnimationFrame(B),t.defer?B=requestAnimationFrame((function(){q(t,(function(){B=null}))})):(q(t),B=null)):_&&(a=_(i)),r(a)},n.init=function(){this.rendered||(this.rendered=!0,this.props.context.helmetInstances.add(this),this.emitChange())},n.render=function(){return this.init(),null},t}(o.Component);K.propTypes={context:H.isRequired},K.displayName="HelmetDispatcher";var U=function(e){function t(){return e.apply(this,arguments)||this}y(t,e);var n=t.prototype;return n.shouldComponentUpdate=function(e){return!l()(this.props,e)},n.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case T.SCRIPT:case T.NOSCRIPT:return{innerHTML:t};case T.STYLE:return{cssText:t};default:throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")}},n.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren;return m({},r,((t={})[n.type]=[].concat(r[n.type]||[],[m({},e.newChildProps,this.mapNestedChildrenToProps(n,e.nestedChildren))]),t))},n.mapObjectTypeChildren=function(e){var t,n,r=e.child,a=e.newProps,i=e.newChildProps,o=e.nestedChildren;switch(r.type){case T.TITLE:return m({},a,((t={})[r.type]=o,t.titleAttributes=m({},i),t));case T.BODY:return m({},a,{bodyAttributes:m({},i)});case T.HTML:return m({},a,{htmlAttributes:m({},i)});default:return m({},a,((n={})[r.type]=m({},i),n))}},n.mapArrayTypeChildrenToProps=function(e,t){var n=m({},t);return Object.keys(e).forEach((function(t){var r;n=m({},n,((r={})[t]=e[t],r))})),n},n.warnOnInvalidChildren=function(e,t){return p()(v.some((function(t){return e.type===t})),"function"==typeof e.type?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":"Only elements types "+v.join(", ")+" are allowed. Helmet does not support rendering <"+e.type+"> elements. Refer to our API for more information."),p()(!t||"string"==typeof t||Array.isArray(t)&&!t.some((function(e){return"string"!=typeof e})),"Helmet expects a string as a child of <"+e.type+">. Did you forget to wrap your children in braces? ( <"+e.type+">{``}</"+e.type+"> ) Refer to our API for more information."),!0},n.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var a=e.props,i=a.children,o=g(a,["children"]),c=Object.keys(o).reduce((function(e,t){return e[A[t]||t]=o[t],e}),{}),s=e.type;switch("symbol"==typeof s?s=s.toString():n.warnOnInvalidChildren(e,i),s){case T.FRAGMENT:t=n.mapChildrenToProps(i,t);break;case T.LINK:case T.META:case T.NOSCRIPT:case T.SCRIPT:case T.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:c,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:c,nestedChildren:i})}}})),this.mapArrayTypeChildrenToProps(r,t)},n.render=function(){var e=this.props,t=e.children,n=m({},g(e,["children"]));return t&&(n=this.mapChildrenToProps(t,n)),o.createElement(R.Consumer,null,(function(e){return o.createElement(K,m({},n,{context:e}))}))},t}(o.Component);U.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},U.defaultProps={defer:!0,encodeSpecialCharacters:!0},U.displayName="Helmet";var F=n(8128),G=n(87748),W=n(43458),$=n(54200),X=n.n($),z=n(20698),J=n.n(z),Q=function(e){var t=e.route,n=void 0===t?{routes:[]}:t,c=n.routes,s=void 0===c?[]:c,u=e.children,l=e.location,f=void 0===l?{pathname:""}:l,p=(0,F.YB)(),d=p.formatMessage,h=(0,a.Z)(s),m=h.breadcrumb,y=(0,i.ZP)((0,r.Z)({pathname:f.pathname,formatMessage:d,breadcrumb:m},e));return(0,o.useEffect)((function(){var e=localStorage.getItem("adminData"),t=sessionStorage.getItem("adminData");null===e&&null===t||F.m8.replace("/")})),o.createElement(D,null,o.createElement(U,null,o.createElement("title",null,y),o.createElement("meta",{name:"description",content:y})),o.createElement("div",{className:J().container},o.createElement("div",{className:J().lang},o.createElement(F.pD,null)),o.createElement("div",{className:J().content},o.createElement("div",{className:J().top},o.createElement("div",{className:J().header},o.createElement(G.rU,{to:"/"},o.createElement("img",{alt:"logo",className:J().logo,src:X()}),o.createElement("span",{className:J().title},"Ant Design"))),o.createElement("div",{className:J().desc},"Ant Design \u662f\u897f\u6e56\u533a\u6700\u5177\u5f71\u54cd\u529b\u7684 Web \u8bbe\u8ba1\u89c4\u8303\u554a")),u),W.Z))},V=(0,F.$j)((function(e){var t=e.settings;return(0,r.Z)({},t)}))(Q)},87748:function(e,t,n){"use strict";n.d(t,{rU:function(){return y}});var r=n(70971),a=n(38279),i=n(67294),o=n(83233),c=(n(44721),n(3066)),s=n(29345),u=n(88945);i.Component;i.Component;var l=function(e,t){return"function"===typeof e?e(t):e},f=function(e,t){return"string"===typeof e?(0,o.ob)(e,null,null,t):e},p=function(e){return e},d=i.forwardRef;function h(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}"undefined"===typeof d&&(d=p);var m=d((function(e,t){var n=e.innerRef,r=e.navigate,a=e.onClick,o=(0,s.Z)(e,["innerRef","navigate","onClick"]),u=o.target,l=(0,c.Z)({},o,{onClick:function(e){try{a&&a(e)}catch(t){throw e.preventDefault(),t}e.defaultPrevented||0!==e.button||u&&"_self"!==u||h(e)||(e.preventDefault(),r())}});return l.ref=p!==d&&t||n,i.createElement("a",l)}));var y=d((function(e,t){var n=e.component,a=void 0===n?m:n,o=e.replace,h=e.to,y=e.innerRef,g=(0,s.Z)(e,["component","replace","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=e.history,r=f(l(h,e.location),e.location),s=r?n.createHref(r):"",m=(0,c.Z)({},g,{href:s,navigate:function(){var t=l(h,e.location),r=o?n.replace:n.push;r(t)}});return p!==d?m.ref=t||y:m.innerRef=y,i.createElement(a,m)}))})),g=function(e){return e},T=i.forwardRef;function v(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return e})).join(" ")}"undefined"===typeof T&&(T=g);T((function(e,t){var n=e["aria-current"],a=void 0===n?"page":n,o=e.activeClassName,p=void 0===o?"active":o,d=e.activeStyle,h=e.className,m=e.exact,b=e.isActive,A=e.location,C=e.sensitive,E=e.strict,O=e.style,S=e.to,P=e.innerRef,x=(0,s.Z)(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return i.createElement(r.s6.Consumer,null,(function(e){e||(0,u.Z)(!1);var n=A||e.location,o=f(l(S,n),n),s=o.pathname,I=s&&s.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),k=I?(0,r.LX)(n.pathname,{path:I,exact:m,sensitive:C,strict:E}):null,L=!!(b?b(k,n):k),w=L?v(h,p):h,N=L?(0,c.Z)({},O,{},d):O,j=(0,c.Z)({"aria-current":L&&a||null,className:w,style:N,to:o},x);return g!==T?j.ref=t||P:j.innerRef=P,i.createElement(y,j)}))}))},54200:function(e,t,n){e.exports=n.p+"static/logo.f0355d39.svg"}}]);