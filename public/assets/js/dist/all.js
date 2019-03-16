/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});



/*!
 * VERSION: 1.20.4
 * DATE: 2018-02-15
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._repeat&&this._uncache(!0),this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.20.4",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0||!!this.vars.yoyoEase,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._yoyoEase=null,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,d){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var e,f,i,j,k,l,m,n,o,p=this._dirty?this.totalDuration():this._totalDuration,q=this._time,r=this._totalTime,s=this._cycle,t=this._duration,u=this._rawPrevTime;if(a>=p-1e-7&&a>=0?(this._totalTime=p,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=t,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(e=!0,f="onComplete",d=d||this._timeline.autoRemoveChildren),0===t&&(this._initted||!this.vars.lazy||d)&&(this._startTime===this._timeline._duration&&(a=0),(0>u||0>=a&&a>=-1e-7||u===g&&"isPause"!==this.data)&&u!==a&&(d=!0,u>g&&(f="onReverseComplete")),this._rawPrevTime=n=!b||a||u===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==r||0===t&&u>0)&&(f="onReverseComplete",e=this._reversed),0>a&&(this._active=!1,0===t&&(this._initted||!this.vars.lazy||d)&&(u>=0&&(d=!0),this._rawPrevTime=n=!b||a||u===a?a:g)),this._initted||(d=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(j=t+this._repeatDelay,this._cycle=this._totalTime/j>>0,0!==this._cycle&&this._cycle===this._totalTime/j&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*j,this._yoyo&&0!==(1&this._cycle)&&(this._time=t-this._time,o=this._yoyoEase||this.vars.yoyoEase,o&&(this._yoyoEase||(o!==!0||this._initted?this._yoyoEase=o=o===!0?this._ease:o instanceof Ease?o:Ease.map[o]:(o=this.vars.ease,this._yoyoEase=o=o?o instanceof Ease?o:"function"==typeof o?new Ease(o,this.vars.easeParams):Ease.map[o]||c.defaultEase:c.defaultEase)),this.ratio=o?1-o.getRatio((t-this._time)/t):0)),this._time>t?this._time=t:this._time<0&&(this._time=0)),this._easeType&&!o?(k=this._time/t,l=this._easeType,m=this._easePower,(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===m?k*=k:2===m?k*=k*k:3===m?k*=k*k*k:4===m&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:this._time/t<.5?this.ratio=k/2:this.ratio=1-k/2):o||(this.ratio=this._ease.getRatio(this._time/t))),q===this._time&&!d&&s===this._cycle)return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!d&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=q,this._totalTime=r,this._rawPrevTime=u,this._cycle=s,h.lazyTweens.push(this),void(this._lazy=[a,b]);!this._time||e||o?e&&this._ease._calcEnd&&!o&&(this.ratio=this._ease.getRatio(0===this._time?0:1)):this.ratio=this._ease.getRatio(this._time/t)}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==q&&a>=0&&(this._active=!0),0===r&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,!0,d):f||(f="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===t)&&(b||this._callback("onStart"))),i=this._firstPT;i;)i.f?i.t[i.p](i.c*this.ratio+i.s):i.t[i.p]=i.c*this.ratio+i.s,i=i._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,!0,d),b||(this._totalTime!==r||f)&&this._callback("onUpdate")),this._cycle!==s&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),f&&(!this._gc||d)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,!0,d),e&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[f]&&this._callback(f),0===t&&this._rawPrevTime===g&&n!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.20.4",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g,h,i=new d(a),j=i._timeline;for(null==b&&(b=!0),j._remove(i,!0),i._startTime=0,i._rawPrevTime=i._time=i._totalTime=j._time,g=j._first;g;)h=g._next,b&&g instanceof c&&g.target===g.vars.onComplete||(f=g._startTime-g._delay,0>f&&(e=1),i.add(g,f)),g=h;return j.add(i,0),e&&i.totalDuration(),i},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),e._time&&e.render((this.rawTime()-e._startTime)*e._timeScale,!1,!1),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f,g;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(g=e.length;--g>-1;)e[g]instanceof a&&e[g].timeline===this&&this.remove(e[g]);if(f="number"!=typeof b||c?this.duration()>99999999999?this.recent().endTime(!1):this._duration:0,"string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-f:0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=f);else{if(g=b.indexOf("="),-1===g)return null==this._labels[b]?d?this._labels[b]=f+c:c:this._labels[b]+c;c=parseInt(b.charAt(g-1)+"1",10)*Number(b.substr(g+1)),b=g>1?this._parseTimeOrLabel(b.substr(0,g-1),0,d):f}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._time,o=this._dirty?this.totalDuration():this._totalDuration,p=this._startTime,q=this._timeScale,r=this._paused;if(n!==this._time&&(a+=this._time-n),a>=o-1e-7&&a>=0)this._totalTime=this._time=o,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=o+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==n||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=n)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==n&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==n&&a>0&&(this._active=!0),0===n&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=n)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=n&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused&&!this._calculatingDuration?(this._calculatingDuration=1,this.add(e,e._startTime-e._delay),this._calculatingDuration=0):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale,this._time-=e._startTime,this._totalTime-=e._startTime,this._rawPrevTime-=e._startTime),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.20.4",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1,lazy:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time===f.target.time()||d!==f.duration()||f.isFromTo||f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale).render(f.time(),!0,!0),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.isFromTo=1,d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._time,p=this._dirty?this.totalDuration():this._totalDuration,q=this._duration,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(o!==this._time&&(a+=this._time-o),a>=p-1e-7&&a>=0)this._locked||(this._totalTime=p,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=q,a=q+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==o||0===q&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=q||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===q&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=q+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=q-this._time),this._time>q?(this._time=q,a=q+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=o||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&m._startTime<q&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*q,this._cycle<w?x=!x:this._totalTime+=q,this._time=o,this._rawPrevTime=0===q?u-1e-4:u,this._cycle=w,this._locked=!0,o=x?0:q,this.render(o,b,0===q),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),o!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,o=x?q+1e-4:-1e-4,this.render(o,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==o&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=o)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||p>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()||0},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()||0},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[0][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],
s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.8",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.20.4",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e&&"lineHeight"!==c)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"lineHeight"!==c||e)if("%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,-1!==_(l,"display").indexOf("flex")&&(m.position="absolute"),i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}else i=$(a).lineHeight,a.style.lineHeight=d,h=parseFloat($(a).lineHeight),a.style.lineHeight=i;return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(c[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h="";if(!f.length)return a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+" "+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(-1!==(d+c).indexOf("rgb")||-1!==(d+c).indexOf("hsl")?(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" ")):(D=D.join(" ").split(",").join(", ").split(" "),E=E.join(" ").split(",").join(", ").split(" ")),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,z=u,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(z.substr(0,z.indexOf("hsl"))+(y?"hsla(":"hsl("),p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(z.substr(0,z.indexOf("rgb"))+(y?"rgba(":"rgb("),p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!Ha||!a.getCTM||a.parentNode&&!a.ownerSVGElement||!Na(a))},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,!Ca||!(h=!$(a)||"none"===$(a).display)&&a.parentNode||(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(e=a.transform.baseVal.consolidate().matrix,d="matrix("+e.a+","+e.b+","+e.c+","+e.d+","+e.e+","+e.f+")",c=0)),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(N),w=Math.sin(N),s=x*v+y*w,t=B*v+C*w,u=F*v+G*w,y=y*v-x*w,C=C*v-B*w,G=G*v-F*w,x=s,B=t,F=u),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),N=Math.atan2(B,C),m.scaleX=(Math.sqrt(x*x+y*y+z*z)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+D*D)*p+.5|0)/p,m.scaleZ=(Math.sqrt(F*F+G*G+H*H)*p+.5|0)/p,x/=m.scaleX,B/=m.scaleY,y/=m.scaleX,C/=m.scaleY,Math.abs(N)>o?(m.skewX=N*L,B=0,"simple"!==m.skewType&&(m.scaleY*=1/Math.cos(N))):m.skewX=0,m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180)),m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{
parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(D.skewType=A.skewType||D.skewType||g.defaultSkewType,d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),"simple"===D.skewType&&(l.scaleY*=Math.cos(l.skewX*K)),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b){if(n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g])c=h.parse(a,n,g,this,c,f,b);else{if("--"===g.substr(0,2)){this._tween._propLookup[g]=this._addTween.call(this._tween,a.style,"setProperty",$(a).getPropertyValue(g)+"",n+"",g,!1,g);continue}m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&(""!==p||"lineHeight"===g)&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))}f&&c&&!c.plugin&&(c.plugin=f)}return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.1",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.1",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e,f=_gsScope.GreenSockGlobals||_gsScope,g=f.com.greensock,h=2*Math.PI,i=Math.PI/2,j=g._class,k=function(b,c){var d=j("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},l=a.register||function(){},m=function(a,b,c,d,e){var f=j("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return l(f,a),f},n=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},o=function(b,c){var d=j("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},p=m("Back",o("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),o("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),o("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),q=j("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),r=q.prototype=new a;return r.constructor=q,r.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1===a?0:1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},q.ease=new q(.7,.7),r.config=q.config=function(a,b,c){return new q(a,b,c)},b=j("easing.SteppedEase",function(a,b){a=a||1,this._p1=1/a,this._p2=a+(b?0:1),this._p3=b?1:0},!0),r=b.prototype=new a,r.constructor=b,r.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),((this._p2*a|0)+this._p3)*this._p1},r.config=b.config=function(a,c){return new b(a,c)},c=j("easing.ExpoScaleEase",function(a,b,c){this._p1=Math.log(b/a),this._p2=b-a,this._p3=a,this._ease=c},!0),r=c.prototype=new a,r.constructor=c,r.getRatio=function(a){return this._ease&&(a=this._ease.getRatio(a)),(this._p3*Math.exp(this._p1*a)-this._p3)/this._p2},r.config=c.config=function(a,b,d){return new c(a,b,d)},d=j("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),m=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--m>-1;)c=o?Math.random():1/l*m,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:m%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new n(1,1,null),m=l;--m>-1;)g=j[m],h=new n(g.x,g.y,h);this._prev=new n(0,0,0!==h.t?h:h.next)},!0),r=d.prototype=new a,r.constructor=d,r.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},r.config=function(a){return new d(a)},d.ease=new d,m("Bounce",k("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),k("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),k("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),m("Circ",k("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),k("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),k("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),e=function(b,c,d){var e=j("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/h*(Math.asin(1/this._p1)||0),this._p2=h/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},m("Elastic",e("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),e("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),e("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),m("Expo",k("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),k("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),k("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),m("Sine",k("SineOut",function(a){return Math.sin(a*i)}),k("SineIn",function(a){return-Math.cos(a*i)+1}),k("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),j("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),l(f.SlowMo,"SlowMo","ease,"),l(d,"RoughEase","ease,"),l(b,"SteppedEase","ease,"),p},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p=f.length,s=p;--p>-1;)(l=q[f[p]]||new r(f[p],[])).gsClass?(i[p]=l.gsClass,s--):j&&l.sc.push(this);if(0===s&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,"undefined"!=typeof module&&module.exports)if(d===b){module.exports=c[b]=o;for(p in c)o[p]=c[p]}else c[b]&&(c[b][n]=o);else"function"==typeof define&&define.amd&&define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){return arguments.length?(p=a||1/m,void(q=Math.min(b,p,0))):1/m>p},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==(d||{}).visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,X){j||i.wake();var c=this.vars.useFrames?W:X;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&("hidden"!==(d||{}).visibilityState||!i.lagSmoothing())&&i.wake();var a=setTimeout(E,2e3);a.unref&&a.unref()};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale-1e-7},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Z(),this.render(a,b,!1),J.length&&Z())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;var b,c;for(a=a||m,this._timeline&&this._timeline.smoothChildTiming&&(b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime(),this._startTime=c-(c-this._startTime)*this._timeScale/a),this._timeScale=a,c=this.timeline;c&&c.timeline;)c._dirty=!0,c.totalDuration(),c=c.timeline;return this},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,
this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused&&!e._gc)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?V[G.defaultOverwrite]:"number"==typeof i?i>>0:V[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=$(f,this,!1),1===i&&this._siblings[e].length>1&&aa(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=$(b,this,!1),1===i&&this._siblings.length>1&&aa(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)U[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!R[c]||R[c]&&R[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.20.4",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=/[\+-]=-?[\.\d]/,N=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a&&null!=this.end?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},O=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=N,M.test(b)&&(l.end=null),l},P=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=O(m,n?parseFloat(o.s)+o.c+(o.s+"").replace(/[0-9\-\.]/g,""):d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},Q=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:O},R=G._plugins={},S=Q.tweenLookup={},T=0,U=Q.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},V={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},W=D._rootFramesTimeline=new F,X=D._rootTimeline=new F,Y=30,Z=Q.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};X._startTime=i.time,W._startTime=i.frame,X._active=W._active=!0,setTimeout(Z,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Z(),X.render((i.time-X._startTime)*X._timeScale,!1,!1),W.render((i.frame-W._startTime)*W._timeScale,!1,!1),J.length&&Z(),i.frame>=Y){Y=i.frame+(parseInt(G.autoSleep,10)||120);for(c in S){for(b=S[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete S[c]}if(c=X._first,(!c||c._paused)&&G.autoSleep&&!W._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var $=function(a,b,c){var d,e,f=a._gsTweenID;if(S[f||(a._gsTweenID=f="t"+T++)]||(S[f]={target:a,tweens:[]}),b&&(d=S[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return S[f].tweens},_=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},aa=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||ba(b,0,o),0===ba(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!_(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},ba=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.data="isStart",e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,e.onUpdate=g.onUpdate,e.onUpdateParams=g.onUpdateParams,e.onUpdateScope=g.onUpdateScope||g.callbackScope||this,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)U[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Z(),this.vars.css||b.style&&b!==a&&b.nodeType&&R.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],U[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(R[g]&&(j=new R[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=P.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&aa(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),(!this._initted||this._startAt&&this._startAt.progress())&&(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,!0,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,!0,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,!0,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!_(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=$(d[c],this,!0);else this._siblings=$(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else if(a._gsTweenID)for(d=$(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d||[]},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ca=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ca.prototype},!0);if(h=ca.prototype,ca.version="1.19.0",ca.API=2,h._firstPT=null,h._addTween=P,h.setRatio=N,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ca.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ca.API&&(R[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ca.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ca(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ca.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");

/*!
 * VERSION: 1.8.0
 * DATE: 2016-07-09
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=document.documentElement,b=window,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-(b["inner"+e]||a[g]||h[g]):c[f]-c["offset"+e]},d=function(a){return"string"==typeof a&&(a=TweenLite.selector(a)),a.length&&a!==b&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===b||a.nodeType&&a.style?a:null},e=function(c,d){var e="scroll"+("x"===d?"Left":"Top");return c===b&&(null!=c.pageXOffset?e="page"+d.toUpperCase()+"Offset":c=null!=a[e]?a:document.body),function(){return c[e]}},f=function(c,f){var g=d(c).getBoundingClientRect(),h=!f||f===b||f===document.body,i=(h?a:f).getBoundingClientRect(),j={x:g.left-i.left,y:g.top-i.top};return!h&&f&&(j.x+=e(f,"x")(),j.y+=e(f,"y")()),j},g=function(a,b,d){var e=typeof a;return"number"===e||"string"===e&&"="===a.charAt(1)?a:"max"===a?c(b,d):Math.min(c(b,d),f(a,b)[d])},h=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,version:"1.8.0",init:function(a,c,d){return this._wdw=a===b,this._target=a,this._tween=d,"object"!=typeof c?(c={y:c},"string"==typeof c.y&&"max"!==c.y&&"="!==c.y.charAt(1)&&(c.x=c.y)):c.nodeType&&(c={y:c,x:c}),this.vars=c,this._autoKill=c.autoKill!==!1,this.getX=e(a,"x"),this.getY=e(a,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=c.x?(this._addTween(this,"x",this.x,g(c.x,a,"x")-(c.offsetX||0),"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=c.y?(this._addTween(this,"y",this.y,g(c.y,a,"y")-(c.offsetY||0),"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var d=this._wdw||!this.skipX?this.getX():this.xPrev,e=this._wdw||!this.skipY?this.getY():this.yPrev,f=e-this.yPrev,g=d-this.xPrev,i=h.autoKillThreshold;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(g>i||-i>g)&&d<c(this._target,"x")&&(this.skipX=!0),!this.skipY&&(f>i||-i>f)&&e<c(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?b.scrollTo(this.skipX?d:this.x,this.skipY?e:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),i=h.prototype;h.max=c,h.getOffset=f,h.autoKillThreshold=7,i._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("ScrollToPlugin");
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("Barba",[],e):"object"==typeof exports?exports.Barba=e():t.Barba=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="http://localhost:8080/dist",e(0)}([function(t,e,n){"function"!=typeof Promise&&(window.Promise=n(1));var r={version:"1.0.0",BaseTransition:n(4),BaseView:n(6),BaseCache:n(8),Dispatcher:n(7),HistoryManager:n(9),Pjax:n(10),Prefetch:n(13),Utils:n(5)};t.exports=r},function(t,e,n){(function(e){!function(n){function r(){}function i(t,e){return function(){t.apply(e,arguments)}}function o(t){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof t)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],h(t,this)}function s(t,e){for(;3===t._state;)t=t._value;return 0===t._state?void t._deferreds.push(e):(t._handled=!0,void l(function(){var n=1===t._state?e.onFulfilled:e.onRejected;if(null===n)return void(1===t._state?a:c)(e.promise,t._value);var r;try{r=n(t._value)}catch(t){return void c(e.promise,t)}a(e.promise,r)}))}function a(t,e){try{if(e===t)throw new TypeError("A promise cannot be resolved with itself.");if(e&&("object"==typeof e||"function"==typeof e)){var n=e.then;if(e instanceof o)return t._state=3,t._value=e,void u(t);if("function"==typeof n)return void h(i(n,e),t)}t._state=1,t._value=e,u(t)}catch(e){c(t,e)}}function c(t,e){t._state=2,t._value=e,u(t)}function u(t){2===t._state&&0===t._deferreds.length&&l(function(){t._handled||p(t._value)});for(var e=0,n=t._deferreds.length;e<n;e++)s(t,t._deferreds[e]);t._deferreds=null}function f(t,e,n){this.onFulfilled="function"==typeof t?t:null,this.onRejected="function"==typeof e?e:null,this.promise=n}function h(t,e){var n=!1;try{t(function(t){n||(n=!0,a(e,t))},function(t){n||(n=!0,c(e,t))})}catch(t){if(n)return;n=!0,c(e,t)}}var d=setTimeout,l="function"==typeof e&&e||function(t){d(t,0)},p=function(t){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",t)};o.prototype.catch=function(t){return this.then(null,t)},o.prototype.then=function(t,e){var n=new this.constructor(r);return s(this,new f(t,e,n)),n},o.all=function(t){var e=Array.prototype.slice.call(t);return new o(function(t,n){function r(o,s){try{if(s&&("object"==typeof s||"function"==typeof s)){var a=s.then;if("function"==typeof a)return void a.call(s,function(t){r(o,t)},n)}e[o]=s,0===--i&&t(e)}catch(t){n(t)}}if(0===e.length)return t([]);for(var i=e.length,o=0;o<e.length;o++)r(o,e[o])})},o.resolve=function(t){return t&&"object"==typeof t&&t.constructor===o?t:new o(function(e){e(t)})},o.reject=function(t){return new o(function(e,n){n(t)})},o.race=function(t){return new o(function(e,n){for(var r=0,i=t.length;r<i;r++)t[r].then(e,n)})},o._setImmediateFn=function(t){l=t},o._setUnhandledRejectionFn=function(t){p=t},"undefined"!=typeof t&&t.exports?t.exports=o:n.Promise||(n.Promise=o)}(this)}).call(e,n(2).setImmediate)},function(t,e,n){(function(t,r){function i(t,e){this._id=t,this._clearFn=e}var o=n(3).nextTick,s=Function.prototype.apply,a=Array.prototype.slice,c={},u=0;e.setTimeout=function(){return new i(s.call(setTimeout,window,arguments),clearTimeout)},e.setInterval=function(){return new i(s.call(setInterval,window,arguments),clearInterval)},e.clearTimeout=e.clearInterval=function(t){t.close()},i.prototype.unref=i.prototype.ref=function(){},i.prototype.close=function(){this._clearFn.call(window,this._id)},e.enroll=function(t,e){clearTimeout(t._idleTimeoutId),t._idleTimeout=e},e.unenroll=function(t){clearTimeout(t._idleTimeoutId),t._idleTimeout=-1},e._unrefActive=e.active=function(t){clearTimeout(t._idleTimeoutId);var e=t._idleTimeout;e>=0&&(t._idleTimeoutId=setTimeout(function(){t._onTimeout&&t._onTimeout()},e))},e.setImmediate="function"==typeof t?t:function(t){var n=u++,r=!(arguments.length<2)&&a.call(arguments,1);return c[n]=!0,o(function(){c[n]&&(r?t.apply(null,r):t.call(null),e.clearImmediate(n))}),n},e.clearImmediate="function"==typeof r?r:function(t){delete c[t]}}).call(e,n(2).setImmediate,n(2).clearImmediate)},function(t,e){function n(){h&&u&&(h=!1,u.length?f=u.concat(f):d=-1,f.length&&r())}function r(){if(!h){var t=s(n);h=!0;for(var e=f.length;e;){for(u=f,f=[];++d<e;)u&&u[d].run();d=-1,e=f.length}u=null,h=!1,a(t)}}function i(t,e){this.fun=t,this.array=e}function o(){}var s,a,c=t.exports={};!function(){try{s=setTimeout}catch(t){s=function(){throw new Error("setTimeout is not defined")}}try{a=clearTimeout}catch(t){a=function(){throw new Error("clearTimeout is not defined")}}}();var u,f=[],h=!1,d=-1;c.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];f.push(new i(t,e)),1!==f.length||h||s(r,0)},i.prototype.run=function(){this.fun.apply(null,this.array)},c.title="browser",c.browser=!0,c.env={},c.argv=[],c.version="",c.versions={},c.on=o,c.addListener=o,c.once=o,c.off=o,c.removeListener=o,c.removeAllListeners=o,c.emit=o,c.binding=function(t){throw new Error("process.binding is not supported")},c.cwd=function(){return"/"},c.chdir=function(t){throw new Error("process.chdir is not supported")},c.umask=function(){return 0}},function(t,e,n){var r=n(5),i={oldContainer:void 0,newContainer:void 0,newContainerLoading:void 0,extend:function(t){return r.extend(this,t)},init:function(t,e){var n=this;return this.oldContainer=t,this._newContainerPromise=e,this.deferred=r.deferred(),this.newContainerReady=r.deferred(),this.newContainerLoading=this.newContainerReady.promise,this.start(),this._newContainerPromise.then(function(t){n.newContainer=t,n.newContainerReady.resolve()}),this.deferred.promise},done:function(){this.oldContainer.parentNode.removeChild(this.oldContainer),this.newContainer.style.visibility="visible",this.deferred.resolve()},start:function(){}};t.exports=i},function(t,e){var n={getCurrentUrl:function(){return window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search},cleanLink:function(t){return t.replace(/#.*/,"")},xhrTimeout:5e3,xhr:function(t){var e=this.deferred(),n=new XMLHttpRequest;return n.onreadystatechange=function(){if(4===n.readyState)return 200===n.status?e.resolve(n.responseText):e.reject(new Error("xhr: HTTP code is not 200"))},n.ontimeout=function(){return e.reject(new Error("xhr: Timeout exceeded"))},n.open("GET",t),n.timeout=this.xhrTimeout,n.setRequestHeader("x-barba","yes"),n.send(),e.promise},extend:function(t,e){var n=Object.create(t);for(var r in e)e.hasOwnProperty(r)&&(n[r]=e[r]);return n},deferred:function(){return new function(){this.resolve=null,this.reject=null,this.promise=new Promise(function(t,e){this.resolve=t,this.reject=e}.bind(this))}},getPort:function(t){var e="undefined"!=typeof t?t:window.location.port,n=window.location.protocol;return""!=e?parseInt(e):"http:"===n?80:"https:"===n?443:void 0}};t.exports=n},function(t,e,n){var r=n(7),i=n(5),o={namespace:null,extend:function(t){return i.extend(this,t)},init:function(){var t=this;r.on("initStateChange",function(e,n){n&&n.namespace===t.namespace&&t.onLeave()}),r.on("newPageReady",function(e,n,r){t.container=r,e.namespace===t.namespace&&t.onEnter()}),r.on("transitionCompleted",function(e,n){e.namespace===t.namespace&&t.onEnterCompleted(),n&&n.namespace===t.namespace&&t.onLeaveCompleted()})},onEnter:function(){},onEnterCompleted:function(){},onLeave:function(){},onLeaveCompleted:function(){}};t.exports=o},function(t,e){var n={events:{},on:function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},off:function(t,e){t in this.events!=!1&&this.events[t].splice(this.events[t].indexOf(e),1)},trigger:function(t){if(t in this.events!=!1)for(var e=0;e<this.events[t].length;e++)this.events[t][e].apply(this,Array.prototype.slice.call(arguments,1))}};t.exports=n},function(t,e,n){var r=n(5),i={data:{},extend:function(t){return r.extend(this,t)},set:function(t,e){this.data[t]=e},get:function(t){return this.data[t]},reset:function(){this.data={}}};t.exports=i},function(t,e){var n={history:[],add:function(t,e){e||(e=void 0),this.history.push({url:t,namespace:e})},currentStatus:function(){return this.history[this.history.length-1]},prevStatus:function(){var t=this.history;return t.length<2?null:t[t.length-2]}};t.exports=n},function(t,e,n){var r=n(5),i=n(7),o=n(11),s=n(8),a=n(9),c=n(12),u={Dom:c,History:a,Cache:s,cacheEnabled:!0,transitionProgress:!1,ignoreClassLink:"no-barba",start:function(){this.init()},init:function(){var t=this.Dom.getContainer(),e=this.Dom.getWrapper();e.setAttribute("aria-live","polite"),this.History.add(this.getCurrentUrl(),this.Dom.getNamespace(t)),i.trigger("initStateChange",this.History.currentStatus()),i.trigger("newPageReady",this.History.currentStatus(),{},t,this.Dom.currentHTML),i.trigger("transitionCompleted",this.History.currentStatus()),this.bindEvents()},bindEvents:function(){document.addEventListener("click",this.onLinkClick.bind(this)),window.addEventListener("popstate",this.onStateChange.bind(this))},getCurrentUrl:function(){return r.cleanLink(r.getCurrentUrl())},goTo:function(t){window.history.pushState(null,null,t),this.onStateChange()},forceGoTo:function(t){window.location=t},load:function(t){var e,n=r.deferred(),i=this;return e=this.Cache.get(t),e||(e=r.xhr(t),this.Cache.set(t,e)),e.then(function(t){var e=i.Dom.parseResponse(t);i.Dom.putContainer(e),i.cacheEnabled||i.Cache.reset(),n.resolve(e)},function(){i.forceGoTo(t),n.reject()}),n.promise},getHref:function(t){if(t)return t.getAttribute&&"string"==typeof t.getAttribute("xlink:href")?t.getAttribute("xlink:href"):"string"==typeof t.href?t.href:void 0},onLinkClick:function(t){for(var e=t.target;e&&!this.getHref(e);)e=e.parentNode;if(this.preventCheck(t,e)){t.stopPropagation(),t.preventDefault(),i.trigger("linkClicked",e,t);var n=this.getHref(e);this.goTo(n)}},preventCheck:function(t,e){if(!window.history.pushState)return!1;var n=this.getHref(e);return!(!e||!n)&&(!(t.which>1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey)&&((!e.target||"_blank"!==e.target)&&(window.location.protocol===e.protocol&&window.location.hostname===e.hostname&&(r.getPort()===r.getPort(e.port)&&(!(n.indexOf("#")>-1)&&((!e.getAttribute||"string"!=typeof e.getAttribute("download"))&&(r.cleanLink(n)!=r.cleanLink(location.href)&&!e.classList.contains(this.ignoreClassLink))))))))},getTransition:function(){return o},onStateChange:function(){var t=this.getCurrentUrl();if(this.transitionProgress&&this.forceGoTo(t),this.History.currentStatus().url===t)return!1;this.History.add(t);var e=this.load(t),n=Object.create(this.getTransition());this.transitionProgress=!0,i.trigger("initStateChange",this.History.currentStatus(),this.History.prevStatus());var r=n.init(this.Dom.getContainer(),e);e.then(this.onNewContainerLoaded.bind(this)),r.then(this.onTransitionEnd.bind(this))},onNewContainerLoaded:function(t){var e=this.History.currentStatus();e.namespace=this.Dom.getNamespace(t),i.trigger("newPageReady",this.History.currentStatus(),this.History.prevStatus(),t,this.Dom.currentHTML)},onTransitionEnd:function(){this.transitionProgress=!1,i.trigger("transitionCompleted",this.History.currentStatus(),this.History.prevStatus())}};t.exports=u},function(t,e,n){var r=n(4),i=r.extend({start:function(){this.newContainerLoading.then(this.finish.bind(this))},finish:function(){document.body.scrollTop=0,this.done()}});t.exports=i},function(t,e){var n={dataNamespace:"namespace",wrapperId:"barba-wrapper",containerClass:"barba-container",currentHTML:document.documentElement.innerHTML,parseResponse:function(t){this.currentHTML=t;var e=document.createElement("div");e.innerHTML=t;var n=e.querySelector("title");return n&&(document.title=n.textContent),this.getContainer(e)},getWrapper:function(){var t=document.getElementById(this.wrapperId);if(!t)throw new Error("Barba.js: wrapper not found!");return t},getContainer:function(t){if(t||(t=document.body),!t)throw new Error("Barba.js: DOM not ready!");var e=this.parseContainer(t);if(e&&e.jquery&&(e=e[0]),!e)throw new Error("Barba.js: no container found");return e},getNamespace:function(t){return t&&t.dataset?t.dataset[this.dataNamespace]:t?t.getAttribute("data-"+this.dataNamespace):null},putContainer:function(t){t.style.visibility="hidden";var e=this.getWrapper();e.appendChild(t)},parseContainer:function(t){return t.querySelector("."+this.containerClass)}};t.exports=n},function(t,e,n){var r=n(5),i=n(10),o={ignoreClassLink:"no-barba-prefetch",init:function(){return!!window.history.pushState&&(document.body.addEventListener("mouseover",this.onLinkEnter.bind(this)),void document.body.addEventListener("touchstart",this.onLinkEnter.bind(this)))},onLinkEnter:function(t){for(var e=t.target;e&&!i.getHref(e);)e=e.parentNode;if(e&&!e.classList.contains(this.ignoreClassLink)){var n=i.getHref(e);if(i.preventCheck(t,e)&&!i.Cache.get(n)){var o=r.xhr(n);i.Cache.set(n,o)}}}};t.exports=o}])});
/*
 * jQuery throttle / debounce - v1.1 - 3/7/2010
 * http://benalman.com/projects/jquery-throttle-debounce-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function(b,c){var $=b.jQuery||b.Cowboy||(b.Cowboy={}),a;$.throttle=a=function(e,f,j,i){var h,d=0;if(typeof f!=="boolean"){i=j;j=f;f=c}function g(){var o=this,m=+new Date()-d,n=arguments;function l(){d=+new Date();j.apply(o,n)}function k(){h=c}if(i&&!h){l()}h&&clearTimeout(h);if(i===c&&m>e){l()}else{if(f!==true){h=setTimeout(i?k:l,i===c?e-m:e)}}}if($.guid){g.guid=j.guid=j.guid||$.guid++}return g};$.debounce=function(d,e,f){return f===c?a(d,e,false):a(d,f,e!==false)}})(this);
;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month' && targetElement.type !== 'email') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {

		// AMD. Register as an anonymous module.
		define(function() {
			return FastClick;
		});
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());
/*!
 * Flickity PACKAGED v2.1.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2018 Metafizzy
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,o,a){function l(t,e,n){var s,o="$()."+i+'("'+e+'")';return t.each(function(t,l){var h=a.data(l,i);if(!h)return void r(i+" not initialized. Cannot call methods, i.e. "+o);var c=h[e];if(!c||"_"==e.charAt(0))return void r(o+" is not a valid method");var d=c.apply(h,n);s=void 0===s?d:s}),void 0!==s?s:t}function h(t,e){t.each(function(t,n){var s=a.data(n,i);s?(s.option(e),s._init()):(s=new o(n,e),a.data(n,i,s))})}a=a||e||t.jQuery,a&&(o.prototype.option||(o.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=s.call(arguments,1);return l(this,t,e)}return h(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var s=Array.prototype.slice,o=t.console,r="undefined"==typeof o?function(){}:function(t){o.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return n.indexOf(e)==-1&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return n!=-1&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s],r=n&&n[o];r&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=t.indexOf("%")==-1&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<h;e++){var i=l[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function s(){if(!c){c=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var s=n(e);o.isBoxSizeOuter=r=200==t(s.width),i.removeChild(e)}}function o(e){if(s(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var o=n(e);if("none"==o.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var c=a.isBorderBox="border-box"==o.boxSizing,d=0;d<h;d++){var u=l[d],f=o[u],p=parseFloat(f);a[u]=isNaN(p)?0:p}var g=a.paddingLeft+a.paddingRight,v=a.paddingTop+a.paddingBottom,m=a.marginLeft+a.marginRight,y=a.marginTop+a.marginBottom,b=a.borderLeftWidth+a.borderRightWidth,E=a.borderTopWidth+a.borderBottomWidth,S=c&&r,C=t(o.width);C!==!1&&(a.width=C+(S?0:g+b));var x=t(o.height);return x!==!1&&(a.height=x+(S?0:v+E)),a.innerWidth=a.width-(g+b),a.innerHeight=a.height-(v+E),a.outerWidth=a.width+m,a.outerHeight=a.height+y,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},l=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],h=l.length,c=!1;return o}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],s=n+"MatchesSelector";if(t[s])return s}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);i!=-1&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void s.push(t);e(t,n)&&s.push(t);for(var i=t.querySelectorAll(n),o=0;o<i.length;o++)s.push(i[o])}}),s},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],s=e+"Timeout";t.prototype[e]=function(){var t=this[s];clearTimeout(t);var e=arguments,o=this;this[s]=setTimeout(function(){n.apply(o,e),delete o[s]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var s=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var o=i.toDashed(n),r="data-"+o,a=document.querySelectorAll("["+r+"]"),l=document.querySelectorAll(".js-"+o),h=i.makeArray(a).concat(i.makeArray(l)),c=r+"-options",d=t.jQuery;h.forEach(function(t){var i,o=t.getAttribute(r)||t.getAttribute(c);try{i=o&&JSON.parse(o)}catch(a){return void(s&&s.error("Error parsing "+r+" on "+t.className+": "+a))}var l=new e(t,i);d&&d.data(t,n,l)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("get-size")):(t.Flickity=t.Flickity||{},t.Flickity.Cell=e(t,t.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-selected","false"),this.x=0,this.shift=0},n.destroy=function(){this.element.style.position="";var t=this.parent.originSide;this.element.removeAttribute("aria-selected"),this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.changeSelected(!0)},e.unselect=function(){this.changeSelected(!1)},e.changeSelected=function(t){var e=t?"add":"remove";this.cells.forEach(function(i){i.element.classList[e]("is-selected"),i.element.setAttribute("aria-selected",t.toString())})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("fizzy-ui-utils")):(t.Flickity=t.Flickity||{},t.Flickity.animatePrototype=e(t,t.fizzyUIUtils))}(window,function(t,e){var i={};return i.startAnimation=function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},i.animate=function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},i.positionSlider=function(){var t=this.x;this.options.wrapAround&&this.cells.length>1&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=this.isAnimating?"translate3d("+i+",0,0)":"translateX("+i+")";var n=this.slides[0];if(n){var s=-this.x-n.target,o=s/this.slidesWidth;this.dispatchEvent("scroll",null,[o,s])}},i.positionSliderAtSelected=function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},i.getPositionValue=function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},i.settle=function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,this.restingFrames>2&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},i.shiftWrapCells=function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},i._shiftCells=function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=e>0?i:0;s.wrapShift(o),e-=s.size.outerWidth}},i._unshiftCells=function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},i.integratePhysics=function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},i.applyForce=function(t){this.velocity+=t},i.getFrictionFactor=function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},i.getRestingPosition=function(){return this.x+this.velocity/(1-this.getFrictionFactor())},i.applyDragForce=function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x,e=t-this.velocity;this.applyForce(e)}},i.applySelectedAttraction=function(){var t=this.isDraggable&&this.isPointerDown;if(!t&&!this.isFreeScrolling&&this.slides.length){var e=this.selectedSlide.target*-1-this.x,i=e*this.options.selectedAttraction;this.applyForce(i)}},i}),function(t,e){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(i,n,s,o,r,a){return e(t,i,n,s,o,r,a)});else if("object"==typeof module&&module.exports)module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var i=t.Flickity;t.Flickity=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,i.Cell,i.Slide,i.animatePrototype)}}(window,function(t,e,i,n,s,o,r){function a(t,e){for(t=n.makeArray(t);t.length;)e.appendChild(t.shift())}function l(t,e){var i=n.getQueryElement(t);if(!i)return void(d&&d.error("Bad element for Flickity: "+(i||t)));if(this.element=i,this.element.flickityGUID){var s=f[this.element.flickityGUID];return s.option(e),s}h&&(this.$element=h(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e),this._create()}var h=t.jQuery,c=t.getComputedStyle,d=t.console,u=0,f={};l.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},l.createMethods=[];var p=l.prototype;n.extend(p,e.prototype),p._create=function(){var e=this.guid=++u;this.element.flickityGUID=e,f[e]=this,this.selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&t.addEventListener("resize",this);for(var i in this.options.on){var n=this.options.on[i];this.on(i,n)}l.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){n.extend(this.options,t)},p.activate=function(){if(!this.isActive){this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize();var t=this._filterFindCellElements(this.element.children);a(t,this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate");var e,i=this.options.initialIndex;e=this.isInitActivated?this.selectedIndex:void 0!==i&&this.cells[i]?i:0,this.select(e,!1,!0),this.isInitActivated=!0,this.dispatchEvent("ready")}},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return n.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){var e=this._filterFindCellElements(t),i=e.map(function(t){return new s(t,this)},this);return i},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t?this.maxCellHeight||0:0;var e=0;if(t>0){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var t=new o(this);this.slides.push(t);var e="left"==this.originSide,i=e?"marginRight":"marginLeft",n=this._getCanCellFit();this.cells.forEach(function(e,s){if(!t.cells.length)return void t.addCell(e);var r=t.outerWidth-t.firstMargin+(e.size.outerWidth-e.size[i]);n.call(this,s,r)?t.addCell(e):(t.updateTarget(),t=new o(this),this.slides.push(t),t.addCell(e))},this),t.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!==0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=i(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];t>0;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),h&&this.$element){t+=this.options.namespaceJQueryEvents?".flickity":"";var s=t;if(e){var o=h.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=n.modulo(t,this.slides.length)),this.slides[t])){var s=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=s&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length,i=this.options.wrapAround&&e>1;if(!i)return t;var s=n.modulo(t,e),o=Math.abs(s-this.selectedIndex),r=Math.abs(s+e-this.selectedIndex),a=Math.abs(s-e-this.selectedIndex);!this.isDragSelect&&r<o?t+=e:!this.isDragSelect&&a<o&&(t-=e),t<0?this.x-=this.slideableWidth:t>=e&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),this.selectedSlide=t,t.select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){var i=this.slides[e],n=i.cells.indexOf(t);if(n!=-1)return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getCell(t);i&&e.push(i)},this),e},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e?e:(t=n.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(1+2*t>=i)return this.getCellElements();for(var s=[],o=e-t;o<=e+t;o++){var r=this.options.wrapAround?n.modulo(o,i):o,a=this.slides[r];a&&(s=s.concat(a.getCellElements()))}return s},p.queryCell=function(t){return"number"==typeof t?this.cells[t]:("string"==typeof t&&(t=this.element.querySelector(t)),this.getCell(t))},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){this.emitEvent("childUIPointerDown",[t])},p.onresize=function(){this.watchCSS(),this.resize()},n.debounceMethod(l,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=n.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){var t=this.options.watchCSS;if(t){var e=c(this.element,":after").content;e.indexOf("flickity")!=-1?this.activate():this.deactivate()}},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=l.keyboardHandlers[t.keyCode];i&&i.call(this)}},l.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var e=t.pageYOffset;this.element.focus(),t.pageYOffset!=e&&t.scrollTo(t.pageXOffset,e)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),a(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),t.removeEventListener("resize",this),this.emitEvent("destroy"),h&&this.$element&&h.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete f[this.guid]},n.extend(p,r),l.data=function(t){t=n.getQueryElement(t);var e=t&&t.flickityGUID;return e&&f[e]},n.htmlInit(l,"flickity"),h&&h.bridget&&h.bridget("flickity",l),l.setJQuery=function(t){h=t},l.Cell=s,l}),function(t,e){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.Unipointer=e(t,t.EvEmitter)}(window,function(t,e){function i(){}function n(){}var s=n.prototype=Object.create(e.prototype);s.bindStartEvent=function(t){this._bindStartEvent(t,!0)},s.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},s._bindStartEvent=function(e,i){i=void 0===i||i;var n=i?"addEventListener":"removeEventListener",s="mousedown";t.PointerEvent?s="pointerdown":"ontouchstart"in t&&(s="touchstart"),e[n](s,this)},s.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},s.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},s.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},s.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},s.onpointerdown=function(t){this._pointerDown(t,t)},s._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},s.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var o={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return s._bindPostStartEvents=function(e){if(e){var i=o[e.type];i.forEach(function(e){t.addEventListener(e,this)},this),this._boundPointerEvents=i}},s._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(e){t.removeEventListener(e,this)},this),delete this._boundPointerEvents)},s.onmousemove=function(t){this._pointerMove(t,t)},s.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},s.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},s._pointerMove=function(t,e){this.pointerMove(t,e)},s.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},s.onmouseup=function(t){this._pointerUp(t,t)},s.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},s.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},s._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},s.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},s._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},s._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},s.pointerDone=i,s.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},s.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},s._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},s.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},n.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},n}),function(t,e){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.Unidragger=e(t,t.Unipointer)}(window,function(t,e){function i(){}var n=i.prototype=Object.create(e.prototype);n.bindHandles=function(){this._bindHandles(!0)},n.unbindHandles=function(){this._bindHandles(!1)},n._bindHandles=function(e){e=void 0===e||e;for(var i=e?"addEventListener":"removeEventListener",n=e?this._touchActionValue:"",s=0;s<this.handles.length;s++){var o=this.handles[s];this._bindStartEvent(o,e),o[i]("click",this),t.PointerEvent&&(o.style.touchAction=n)}},n._touchActionValue="none",n.pointerDown=function(t,e){var i=this.okayPointerDown(t);i&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},o={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return n.okayPointerDown=function(t){var e=s[t.target.nodeName],i=o[t.target.type],n=!e||i;return n||this._pointerReset(),n},n.pointerDownBlur=function(){var t=document.activeElement,e=t&&t.blur&&t!=document.body;e&&t.blur()},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},n._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},n.hasDragStarted=function(t){return Math.abs(t.x)>3||Math.abs(t.y)>3},n.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},n._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},n._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},n.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},n._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},n.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},n._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},n.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},n.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},n._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},n.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},i.getPointerPoint=e.getPointerPoint,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):t.Flickity=e(t,t.Flickity,t.Unidragger,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(){return{x:t.pageXOffset,y:t.pageYOffset}}n.extend(e.defaults,{draggable:">1",dragThreshold:3}),e.createMethods.push("_createDrag");var o=e.prototype;n.extend(o,i.prototype),o._touchActionValue="pan-y";var r="createTouch"in document,a=!1;o._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("childUIPointerDown",this._childUIPointerDownDrag),this.on("deactivate",this.unbindDrag),this.on("cellChange",this.updateDraggable),r&&!a&&(t.addEventListener("touchmove",function(){}),a=!0)},o.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},o.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},o.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=this.slides.length>1:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},o.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},o.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},o._uiChangeDrag=function(){delete this.isFreeScrolling},o._childUIPointerDownDrag=function(t){t.preventDefault(),this.pointerDownFocus(t)},o.pointerDown=function(e,i){if(!this.isDraggable)return void this._pointerDownDefault(e,i);var n=this.okayPointerDown(e);n&&(this._pointerDownPreventDefault(e),this.pointerDownFocus(e),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=s(),t.addEventListener("scroll",this),this._pointerDownDefault(e,i))},o._pointerDownDefault=function(t,e){this.pointerDownPointer=e,this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var l={INPUT:!0,TEXTAREA:!0,SELECT:!0};return o.pointerDownFocus=function(t){var e=l[t.target.nodeName];e||this.focus()},o._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=l[t.target.nodeName];e||i||n||t.preventDefault()},o.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},o.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},o.pointerDone=function(){t.removeEventListener("scroll",this),delete this.pointerDownScroll},o.dragStart=function(e,i){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),t.removeEventListener("scroll",this),this.dispatchEvent("dragStart",e,[i]))},o.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},o.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=s>o?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,
this.dispatchEvent("dragMove",t,[e,i])}},o.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},o.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1),s=i.distance<n.distance?i.index:n.index;return s},o._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,e=this.getSlideDistance(-t,n),null!==e);)e=Math.abs(e);return{distance:s,index:n-i}},o.getSlideDistance=function(t,e){var i=this.slides.length,s=this.options.wrapAround&&i>1,o=s?n.modulo(e,i):e,r=this.slides[o];if(!r)return null;var a=s?this.slideableWidth*Math.floor(e/i):0;return t-(r.target+a)},o.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||new Date-this.dragMoveTime>100)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return t>0&&e>0?1:t<0&&e<0?-1:0},o.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},o.onscroll=function(){var t=s(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(Math.abs(e)>3||Math.abs(i)>3)&&this._pointerDone()},e}),function(t,e){"function"==typeof define&&define.amd?define("tap-listener/tap-listener",["unipointer/unipointer"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("unipointer")):t.TapListener=e(t,t.Unipointer)}(window,function(t,e){function i(t){this.bindTap(t)}var n=i.prototype=Object.create(e.prototype);return n.bindTap=function(t){t&&(this.unbindTap(),this.tapElement=t,this._bindStartEvent(t,!0))},n.unbindTap=function(){this.tapElement&&(this._bindStartEvent(this.tapElement,!0),delete this.tapElement)},n.pointerUp=function(i,n){if(!this.isIgnoringMouseUp||"mouseup"!=i.type){var s=e.getPointerPoint(n),o=this.tapElement.getBoundingClientRect(),r=t.pageXOffset,a=t.pageYOffset,l=s.x>=o.left+r&&s.x<=o.right+r&&s.y>=o.top+a&&s.y<=o.bottom+a;if(l&&this.emitEvent("tap",[i,n]),"mouseup"!=i.type){this.isIgnoringMouseUp=!0;var h=this;setTimeout(function(){delete h.isIgnoringMouseUp},400)}}},n.destroy=function(){this.pointerDone(),this.unbindTap()},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";function s(t,e){this.direction=t,this.parent=e,this._create()}function o(t){return"string"==typeof t?t:"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z"}var r="http://www.w3.org/2000/svg";s.prototype=Object.create(i.prototype),s.prototype._create=function(){this.isEnabled=!0,this.isPrevious=this.direction==-1;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.on("tap",this.onTap),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.bindTap(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.element),i.prototype.destroy.call(this),this.element.removeEventListener("click",this)},s.prototype.createSVG=function(){var t=document.createElementNS(r,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(r,"path"),i=o(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},s.prototype.onTap=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},s.prototype.handleEvent=n.handleEvent,s.prototype.onclick=function(t){var e=document.activeElement;e&&e==this.element&&this.onTap(t,t)},s.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},s.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},s.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&t.length>1)return void this.enable();var e=t.length?t.length-1:0,i=this.isPrevious?0:e,n=this.parent.selectedIndex==i?"disable":"enable";this[n]()},s.prototype.destroy=function(){this.deactivate()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var a=e.prototype;return a._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new s((-1),this),this.nextButton=new s(1,this),this.on("activate",this.activatePrevNextButtons))},a.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},a.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","tap-listener/tap-listener","fizzy-ui-utils/utils"],function(i,n,s){return e(t,i,n,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("tap-listener"),require("fizzy-ui-utils")):e(t,t.Flickity,t.TapListener,t.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}s.prototype=new i,s.prototype._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.on("tap",this.onTap),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.bindTap(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.parent.element.removeChild(this.holder),i.prototype.destroy.call(this)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;t>0?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){var e=this.dots.splice(this.dots.length-t,t);e.forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):e(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}n.prototype=Object.create(t.prototype),n.prototype.play=function(){if("playing"!=this.state){var t=document.hidden;if(t)return void document.addEventListener("visibilitychange",this.onVisibilityPlay);this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()}},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){var t=document.hidden;this[t?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){function n(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}var s=e.prototype;return s.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var s=this.cells.length;e=void 0===e?s:e;var o=n(i),r=e==s;if(r)this.slider.appendChild(o);else{var a=this.cells[e].element;this.slider.insertBefore(o,a)}if(0===e)this.cells=i.concat(this.cells);else if(r)this.cells=this.cells.concat(i);else{var l=this.cells.splice(e,s-e);this.cells=this.cells.concat(i).concat(l)}this._sizeCells(i),this.cellChange(e,!0)}},s.append=function(t){this.insert(t,this.cells.length)},s.prepend=function(t){this.insert(t,0)},s.remove=function(t){var e=this.getCells(t);if(e&&e.length){var n=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);n=Math.min(e,n),i.removeFrom(this.cells,t)},this),this.cellChange(n,!0)}},s.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},s.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("./flickity"),require("fizzy-ui-utils")):e(t,t.Flickity,t.fizzyUIUtils)}(window,function(t,e,i){"use strict";function n(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),n=t.getAttribute("data-flickity-lazyload-src"),s=t.getAttribute("data-flickity-lazyload-srcset");if(e||n||s)return[t]}var o="img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]",r=t.querySelectorAll(o);return i.makeArray(r)}function s(t,e){this.img=t,this.flickity=e,this.load()}e.createMethods.push("_createLazyload");var o=e.prototype;return o._createLazyload=function(){this.on("select",this.lazyLoad)},o.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),o=[];i.forEach(function(t){var e=n(t);o=o.concat(e)}),o.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=i.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(t,e){function i(t,e,i){return(e-t)*i+t}t.createMethods.push("_createAsNavFor");var n=t.prototype;return n._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},n.setNavCompanion=function(i){i=e.getQueryElement(i);var n=t.data(i);if(n&&n!=this){this.navCompanion=n;var s=this;this.onNavCompanionSelect=function(){s.navCompanionSelect()},n.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},n.navCompanionSelect=function(t){if(this.navCompanion){var e=this.navCompanion.selectedCells[0],n=this.navCompanion.cells.indexOf(e),s=n+this.navCompanion.selectedCells.length-1,o=Math.floor(i(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,s+1);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},n.changeNavSelectedClass=function(t){this.navSelectedElements.forEach(function(e){e.classList[t]("is-nav-selected")})},n.activateAsNavFor=function(){this.navCompanionSelect(!0)},n.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},n.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},n.deactivateAsNavFor=function(){this.removeNavSelectedElements()},n.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){if(Array.isArray(t))return t;var e="object"==typeof t&&"number"==typeof t.length;return e?h.call(t):[t]}function s(t,e,o){if(!(this instanceof s))return new s(t,e,o);var r=t;return"string"==typeof t&&(r=document.querySelectorAll(t)),r?(this.elements=n(r),this.options=i({},this.options),"function"==typeof e?o=e:i(this.options,e),o&&this.on("always",o),this.getImages(),a&&(this.jqDeferred=new a.Deferred),void setTimeout(this.check.bind(this))):void l.error("Bad element for imagesLoaded "+(r||t))}function o(t){this.img=t}function r(t,e){this.url=t,this.element=e,this.img=new Image}var a=t.jQuery,l=t.console,h=Array.prototype.slice;s.prototype=Object.create(e.prototype),s.prototype.options={},s.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},s.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&c[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var c={1:!0,9:!0,11:!0};return s.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},s.prototype.addImage=function(t){var e=new o(t);this.images.push(e)},s.prototype.addBackground=function(t,e){var i=new r(t,e);this.images.push(i)},s.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},s.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&l&&l.log("progress: "+i,t,e)},s.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},o.prototype=Object.create(e.prototype),o.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},o.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},o.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},o.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},o.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},o.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},o.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype=Object.create(o.prototype),r.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},r.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},s.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(a=e,a.fn.imagesLoaded=function(t,e){var i=new s(this,t,e);return i.jqDeferred.promise(a(this))})},s.makeJQueryPlugin(),s}),function(t,e){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(i,n){return e(t,i,n)}):"object"==typeof module&&module.exports?module.exports=e(t,require("flickity"),require("imagesloaded")):t.Flickity=e(t,t.Flickity,t.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){function t(t,i){var n=e.getParentCell(i.img);e.cellSizeChange(n&&n.element),e.options.freeScroll||e.positionSliderAtSelected()}if(this.options.imagesLoaded){var e=this;i(this.slider).on("progress",t)}},e});
/*!
 * headroom.js v0.9.4 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2017 Nick Williams - http://wicky.nillia.ms/headroom.js
 * License: MIT
 */

!function(a,b){"use strict";"function"==typeof define&&define.amd?define([],b):"object"==typeof exports?module.exports=b():a.Headroom=b()}(this,function(){"use strict";function a(a){this.callback=a,this.ticking=!1}function b(a){return a&&"undefined"!=typeof window&&(a===window||a.nodeType)}function c(a){if(arguments.length<=0)throw new Error("Missing arguments in extend function");var d,e,f=a||{};for(e=1;e<arguments.length;e++){var g=arguments[e]||{};for(d in g)"object"!=typeof f[d]||b(f[d])?f[d]=f[d]||g[d]:f[d]=c(f[d],g[d])}return f}function d(a){return a===Object(a)?a:{down:a,up:a}}function e(a,b){b=c(b,e.options),this.lastKnownScrollY=0,this.elem=a,this.tolerance=d(b.tolerance),this.classes=b.classes,this.offset=b.offset,this.scroller=b.scroller,this.initialised=!1,this.onPin=b.onPin,this.onUnpin=b.onUnpin,this.onTop=b.onTop,this.onNotTop=b.onNotTop,this.onBottom=b.onBottom,this.onNotBottom=b.onNotBottom}var f={bind:!!function(){}.bind,classList:"classList"in document.documentElement,rAF:!!(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame)};return window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,a.prototype={constructor:a,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.rafCallback||(this.rafCallback=this.update.bind(this))),this.ticking=!0)},handleEvent:function(){this.requestTick()}},e.prototype={constructor:e,init:function(){if(e.cutsTheMustard)return this.debouncer=new a(this.update.bind(this)),this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100),this},destroy:function(){var a=this.classes;this.initialised=!1;for(var b in a)a.hasOwnProperty(b)&&this.elem.classList.remove(a[b]);this.scroller.removeEventListener("scroll",this.debouncer,!1)},attachEvent:function(){this.initialised||(this.lastKnownScrollY=this.getScrollY(),this.initialised=!0,this.scroller.addEventListener("scroll",this.debouncer,!1),this.debouncer.handleEvent())},unpin:function(){var a=this.elem.classList,b=this.classes;!a.contains(b.pinned)&&a.contains(b.unpinned)||(a.add(b.unpinned),a.remove(b.pinned),this.onUnpin&&this.onUnpin.call(this))},pin:function(){var a=this.elem.classList,b=this.classes;a.contains(b.unpinned)&&(a.remove(b.unpinned),a.add(b.pinned),this.onPin&&this.onPin.call(this))},top:function(){var a=this.elem.classList,b=this.classes;a.contains(b.top)||(a.add(b.top),a.remove(b.notTop),this.onTop&&this.onTop.call(this))},notTop:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notTop)||(a.add(b.notTop),a.remove(b.top),this.onNotTop&&this.onNotTop.call(this))},bottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.bottom)||(a.add(b.bottom),a.remove(b.notBottom),this.onBottom&&this.onBottom.call(this))},notBottom:function(){var a=this.elem.classList,b=this.classes;a.contains(b.notBottom)||(a.add(b.notBottom),a.remove(b.bottom),this.onNotBottom&&this.onNotBottom.call(this))},getScrollY:function(){return void 0!==this.scroller.pageYOffset?this.scroller.pageYOffset:void 0!==this.scroller.scrollTop?this.scroller.scrollTop:(document.documentElement||document.body.parentNode||document.body).scrollTop},getViewportHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},getElementPhysicalHeight:function(a){return Math.max(a.offsetHeight,a.clientHeight)},getScrollerPhysicalHeight:function(){return this.scroller===window||this.scroller===document.body?this.getViewportHeight():this.getElementPhysicalHeight(this.scroller)},getDocumentHeight:function(){var a=document.body,b=document.documentElement;return Math.max(a.scrollHeight,b.scrollHeight,a.offsetHeight,b.offsetHeight,a.clientHeight,b.clientHeight)},getElementHeight:function(a){return Math.max(a.scrollHeight,a.offsetHeight,a.clientHeight)},getScrollerHeight:function(){return this.scroller===window||this.scroller===document.body?this.getDocumentHeight():this.getElementHeight(this.scroller)},isOutOfBounds:function(a){var b=a<0,c=a+this.getScrollerPhysicalHeight()>this.getScrollerHeight();return b||c},toleranceExceeded:function(a,b){return Math.abs(a-this.lastKnownScrollY)>=this.tolerance[b]},shouldUnpin:function(a,b){var c=a>this.lastKnownScrollY,d=a>=this.offset;return c&&d&&b},shouldPin:function(a,b){var c=a<this.lastKnownScrollY,d=a<=this.offset;return c&&b||d},update:function(){var a=this.getScrollY(),b=a>this.lastKnownScrollY?"down":"up",c=this.toleranceExceeded(a,b);this.isOutOfBounds(a)||(a<=this.offset?this.top():this.notTop(),a+this.getViewportHeight()>=this.getScrollerHeight()?this.bottom():this.notBottom(),this.shouldUnpin(a,c)?this.unpin():this.shouldPin(a,c)&&this.pin(),this.lastKnownScrollY=a)}},e.options={tolerance:{up:0,down:0},offset:0,scroller:window,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",top:"headroom--top",notTop:"headroom--not-top",bottom:"headroom--bottom",notBottom:"headroom--not-bottom",initial:"headroom"}},e.cutsTheMustard="undefined"!=typeof f&&f.rAF&&f.bind&&f.classList,e});



(function($) {

  if(!$) {
    return;
  }

  ////////////
  // Plugin //
  ////////////

  $.fn.headroom = function(option) {
    return this.each(function() {
      var $this   = $(this),
        data      = $this.data('headroom'),
        options   = typeof option === 'object' && option;

      options = $.extend(true, {}, Headroom.options, options);

      if (!data) {
        data = new Headroom(this, options);
        data.init();
        $this.data('headroom', data);
      }
      if (typeof option === 'string') {
        data[option]();

        if(option === 'destroy'){
          $this.removeData('headroom');
        }
      }
    });
  };

  //////////////
  // Data API //
  //////////////

  $('[data-headroom]').each(function() {
    var $this = $(this);
    $this.headroom($this.data());
  });

}(window.Zepto || window.jQuery));
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(e,t){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",t):"object"==typeof module&&module.exports?module.exports=t():e.EvEmitter=t()}("undefined"!=typeof window?window:this,function(){function e(){}var t=e.prototype;return t.on=function(e,t){if(e&&t){var i=this._events=this._events||{},n=i[e]=i[e]||[];return n.indexOf(t)==-1&&n.push(t),this}},t.once=function(e,t){if(e&&t){this.on(e,t);var i=this._onceEvents=this._onceEvents||{},n=i[e]=i[e]||{};return n[t]=!0,this}},t.off=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){var n=i.indexOf(t);return n!=-1&&i.splice(n,1),this}},t.emitEvent=function(e,t){var i=this._events&&this._events[e];if(i&&i.length){i=i.slice(0),t=t||[];for(var n=this._onceEvents&&this._onceEvents[e],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(e,r),delete n[r]),r.apply(this,t)}return this}},t.allOff=function(){delete this._events,delete this._onceEvents},e}),function(e,t){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return t(e,i)}):"object"==typeof module&&module.exports?module.exports=t(e,require("ev-emitter")):e.imagesLoaded=t(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){function i(e,t){for(var i in t)e[i]=t[i];return e}function n(e){if(Array.isArray(e))return e;var t="object"==typeof e&&"number"==typeof e.length;return t?d.call(e):[e]}function o(e,t,r){if(!(this instanceof o))return new o(e,t,r);var s=e;return"string"==typeof e&&(s=document.querySelectorAll(e)),s?(this.elements=n(s),this.options=i({},this.options),"function"==typeof t?r=t:i(this.options,t),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(this.check.bind(this))):void a.error("Bad element for imagesLoaded "+(s||e))}function r(e){this.img=e}function s(e,t){this.url=e,this.element=t,this.img=new Image}var h=e.jQuery,a=e.console,d=Array.prototype.slice;o.prototype=Object.create(t.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(e){"IMG"==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&u[t]){for(var i=e.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=e.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var u={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(e){var t=getComputedStyle(e);if(t)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(t.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,e),n=i.exec(t.backgroundImage)}},o.prototype.addImage=function(e){var t=new r(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var i=new s(e,t);this.images.push(i)},o.prototype.check=function(){function e(e,i,n){setTimeout(function(){t.progress(e,i,n)})}var t=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(t){t.once("progress",e),t.check()}):void this.complete()},o.prototype.progress=function(e,t,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emitEvent("progress",[this,e,t]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(e,[this]),this.emitEvent("always",[this]),this.jqDeferred){var t=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[t](this)}},r.prototype=Object.create(t.prototype),r.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},r.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.img,t])},r.prototype.handleEvent=function(e){var t="on"+e.type;this[t]&&this[t](e)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(e,t){this.isLoaded=e,this.emitEvent("progress",[this,this.element,t])},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(h=t,h.fn.imagesLoaded=function(e,t){var i=new o(this,e,t);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});
!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t)}):"object"==typeof module&&module.exports?module.exports=e(t):(t.lottie=e(t),t.bodymovin=t.lottie)}(window||{},function(window){function ProjectInterface(){return{}}function roundValues(t){bm_rnd=t?Math.round:function(t){return t}}function styleDiv(t){t.style.position="absolute",t.style.top=0,t.style.left=0,t.style.display="block",t.style.transformOrigin=t.style.webkitTransformOrigin="0 0",t.style.backfaceVisibility=t.style.webkitBackfaceVisibility="visible",t.style.transformStyle=t.style.webkitTransformStyle=t.style.mozTransformStyle="preserve-3d"}function styleUnselectableDiv(t){t.style.userSelect="none",t.style.MozUserSelect="none",t.style.webkitUserSelect="none",t.style.oUserSelect="none"}function BMEnterFrameEvent(t,e,r,s){this.type=t,this.currentTime=e,this.totalTime=r,this.direction=s<0?-1:1}function BMCompleteEvent(t,e){this.type=t,this.direction=e<0?-1:1}function BMCompleteLoopEvent(t,e,r,s){this.type=t,this.currentLoop=e,this.totalLoops=r,this.direction=s<0?-1:1}function BMSegmentStartEvent(t,e,r){this.type=t,this.firstFrame=e,this.totalFrames=r}function BMDestroyEvent(t,e){this.type=t,this.target=e}function _addEventListener(t,e){return this._cbs[t]||(this._cbs[t]=[]),this._cbs[t].push(e),function(){this.removeEventListener(t,e)}.bind(this)}function _removeEventListener(t,e){if(e){if(this._cbs[t]){for(var r=0,s=this._cbs[t].length;r<s;)this._cbs[t][r]===e&&(this._cbs[t].splice(r,1),r-=1,s-=1),r+=1;this._cbs[t].length||(this._cbs[t]=null)}}else this._cbs[t]=null}function _triggerEvent(t,e){if(this._cbs[t])for(var r=this._cbs[t].length,s=0;s<r;s++)this._cbs[t][s](e)}function randomString(t,e){void 0===e&&(e="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890");var r,s="";for(r=t;r>0;--r)s+=e[Math.round(Math.random()*(e.length-1))];return s}function HSVtoRGB(t,e,r){var s,i,a,n,o,h,l,p;switch(1===arguments.length&&(e=t.s,r=t.v,t=t.h),n=Math.floor(6*t),o=6*t-n,h=r*(1-e),l=r*(1-o*e),p=r*(1-(1-o)*e),n%6){case 0:s=r,i=p,a=h;break;case 1:s=l,i=r,a=h;break;case 2:s=h,i=r,a=p;break;case 3:s=h,i=l,a=r;break;case 4:s=p,i=h,a=r;break;case 5:s=r,i=h,a=l}return[s,i,a]}function RGBtoHSV(t,e,r){1===arguments.length&&(e=t.g,r=t.b,t=t.r);var s,i=Math.max(t,e,r),a=Math.min(t,e,r),n=i-a,o=0===i?0:n/i,h=i/255;switch(i){case a:s=0;break;case t:s=e-r+n*(e<r?6:0),s/=6*n;break;case e:s=r-t+2*n,s/=6*n;break;case r:s=t-e+4*n,s/=6*n}return[s,o,h]}function addSaturationToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[1]+=e,r[1]>1?r[1]=1:r[1]<=0&&(r[1]=0),HSVtoRGB(r[0],r[1],r[2])}function addBrightnessToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[2]+=e,r[2]>1?r[2]=1:r[2]<0&&(r[2]=0),HSVtoRGB(r[0],r[1],r[2])}function addHueToRGB(t,e){var r=RGBtoHSV(255*t[0],255*t[1],255*t[2]);return r[0]+=e/360,r[0]>1?r[0]-=1:r[0]<0&&(r[0]+=1),HSVtoRGB(r[0],r[1],r[2])}function createNS(t){return document.createElementNS(svgNS,t)}function createElement(t,e,r){if(!e){var s=Object.create(t.prototype,r),i={};return s&&"[object Function]"===i.toString.call(s.init)&&s.init(),s}e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype._parent=t.prototype}function extendPrototype(t,e){for(var r in t.prototype)t.prototype.hasOwnProperty(r)&&(e.prototype[r]=t.prototype[r])}function getDescriptor(t,e){return Object.getOwnPropertyDescriptor(t,e)}function bezFunction(){function t(t,e,r,s,i,a){var n=t*s+e*i+r*a-i*s-a*t-r*e;return n>-1e-4&&n<1e-4}function e(e,r,s,i,a,n,o,h,l){if(0===s&&0===n&&0===l)return t(e,r,i,a,o,h);var p,m=Math.sqrt(Math.pow(i-e,2)+Math.pow(a-r,2)+Math.pow(n-s,2)),f=Math.sqrt(Math.pow(o-e,2)+Math.pow(h-r,2)+Math.pow(l-s,2)),c=Math.sqrt(Math.pow(o-i,2)+Math.pow(h-a,2)+Math.pow(l-n,2));return p=m>f?m>c?m-f-c:c-f-m:c>f?c-f-m:f-m-c,p>-1e-4&&p<1e-4}function r(t){var e,r=t.c,s=t.v,i=t.o,a=t.i,n=t._length,o=[],h=0;for(e=0;e<n-1;e+=1)o[e]=l(s[e],s[e+1],i[e],a[e+1]),h+=o[e].addedLength;return r&&(o[e]=l(s[e],s[0],i[e],a[0]),h+=o[e].addedLength),{lengths:o,totalLength:h}}function s(t){this.segmentLength=0,this.points=new Array(t)}function i(t,e){this.partialLength=t,this.point=e}function a(t,e){var r=e.segments,s=r.length,i=bm_floor((s-1)*t),a=t*e.addedLength,n=0;if(a==r[i].l)return r[i].p;for(var o=r[i].l>a?-1:1,h=!0;h;)r[i].l<=a&&r[i+1].l>a?(n=(a-r[i].l)/(r[i+1].l-r[i].l),h=!1):i+=o,(i<0||i>=s-1)&&(h=!1);return r[i].p+(r[i+1].p-r[i].p)*n}function n(){this.pt1=new Array(2),this.pt2=new Array(2),this.pt3=new Array(2),this.pt4=new Array(2)}function o(t,e,r,s,i,n){var o=a(i,n),h=1-o,l=Math.round(1e3*(h*h*h*t[0]+(o*h*h+h*o*h+h*h*o)*r[0]+(o*o*h+h*o*o+o*h*o)*s[0]+o*o*o*e[0]))/1e3,p=Math.round(1e3*(h*h*h*t[1]+(o*h*h+h*o*h+h*h*o)*r[1]+(o*o*h+h*o*o+o*h*o)*s[1]+o*o*o*e[1]))/1e3;return[l,p]}function h(t,e,r,s,i,o,h){var l=new n;i=i<0?0:i>1?1:i;var p=a(i,h);o=o>1?1:o;var m,f=a(o,h),c=t.length,d=1-p,u=1-f;for(m=0;m<c;m+=1)l.pt1[m]=Math.round(1e3*(d*d*d*t[m]+(p*d*d+d*p*d+d*d*p)*r[m]+(p*p*d+d*p*p+p*d*p)*s[m]+p*p*p*e[m]))/1e3,l.pt3[m]=Math.round(1e3*(d*d*u*t[m]+(p*d*u+d*p*u+d*d*f)*r[m]+(p*p*u+d*p*f+p*d*f)*s[m]+p*p*f*e[m]))/1e3,l.pt4[m]=Math.round(1e3*(d*u*u*t[m]+(p*u*u+d*f*u+d*u*f)*r[m]+(p*f*u+d*f*f+p*u*f)*s[m]+p*f*f*e[m]))/1e3,l.pt2[m]=Math.round(1e3*(u*u*u*t[m]+(f*u*u+u*f*u+u*u*f)*r[m]+(f*f*u+u*f*f+f*u*f)*s[m]+f*f*f*e[m]))/1e3;return l}var l=(Math,function(){function t(t,e){this.l=t,this.p=e}return function(e,r,s,i){var a,n,o,h,l,p,m=defaultCurveSegments,f=0,c=[],d=[],u={addedLength:0,segments:Array.apply(null,{length:m})};for(o=s.length,a=0;a<m;a+=1){for(l=a/(m-1),p=0,n=0;n<o;n+=1)h=bm_pow(1-l,3)*e[n]+3*bm_pow(1-l,2)*l*s[n]+3*(1-l)*bm_pow(l,2)*i[n]+bm_pow(l,3)*r[n],c[n]=h,null!==d[n]&&(p+=bm_pow(c[n]-d[n],2)),d[n]=c[n];p&&(p=bm_sqrt(p),f+=p),u.segments[a]=new t(f,l)}return u.addedLength=f,u}}()),p=function(){var e={};return function(r){var a=r.s,n=r.e,o=r.to,h=r.ti,l=(a[0]+"_"+a[1]+"_"+n[0]+"_"+n[1]+"_"+o[0]+"_"+o[1]+"_"+h[0]+"_"+h[1]).replace(/\./g,"p");if(e[l])return void(r.bezierData=e[l]);var p,m,f,c,d,u,y,g=defaultCurveSegments,v=0,b=null;2===a.length&&(a[0]!=n[0]||a[1]!=n[1])&&t(a[0],a[1],n[0],n[1],a[0]+o[0],a[1]+o[1])&&t(a[0],a[1],n[0],n[1],n[0]+h[0],n[1]+h[1])&&(g=2);var E=new s(g);for(f=o.length,p=0;p<g;p+=1){for(y=new Array(f),d=p/(g-1),u=0,m=0;m<f;m+=1)c=bm_pow(1-d,3)*a[m]+3*bm_pow(1-d,2)*d*(a[m]+o[m])+3*(1-d)*bm_pow(d,2)*(n[m]+h[m])+bm_pow(d,3)*n[m],y[m]=c,null!==b&&(u+=bm_pow(y[m]-b[m],2));u=bm_sqrt(u),v+=u,E.points[p]=new i(u,y),b=y}E.segmentLength=v,r.bezierData=E,e[l]=E}}();return{getBezierLength:l,getSegmentsLength:r,getNewSegment:h,getPointInSegment:o,buildBezierData:p,pointOnLine2D:t,pointOnLine3D:e}}function dataFunctionManager(){function t(i,a,o){var h,l,p,m,f,c,d,u,y=i.length;for(m=0;m<y;m+=1)if(h=i[m],"ks"in h&&!h.completed){if(h.completed=!0,h.tt&&(i[m-1].td=h.tt),l=[],p=-1,h.hasMask){var g=h.masksProperties;for(c=g.length,f=0;f<c;f+=1)if(g[f].pt.k.i)s(g[f].pt.k);else for(u=g[f].pt.k.length,d=0;d<u;d+=1)g[f].pt.k[d].s&&s(g[f].pt.k[d].s[0]),g[f].pt.k[d].e&&s(g[f].pt.k[d].e[0])}0===h.ty?(h.layers=e(h.refId,a),t(h.layers,a,o)):4===h.ty?r(h.shapes):5==h.ty&&n(h,o)}}function e(t,e){for(var r=0,s=e.length;r<s;){if(e[r].id===t)return e[r].layers.__used?JSON.parse(JSON.stringify(e[r].layers)):(e[r].layers.__used=!0,e[r].layers);r+=1}}function r(t){var e,i,a,n=t.length,o=!1;for(e=n-1;e>=0;e-=1)if("sh"==t[e].ty){if(t[e].ks.k.i)s(t[e].ks.k);else for(a=t[e].ks.k.length,i=0;i<a;i+=1)t[e].ks.k[i].s&&s(t[e].ks.k[i].s[0]),t[e].ks.k[i].e&&s(t[e].ks.k[i].e[0]);o=!0}else"gr"==t[e].ty&&r(t[e].it)}function s(t){var e,r=t.i.length;for(e=0;e<r;e+=1)t.i[e][0]+=t.v[e][0],t.i[e][1]+=t.v[e][1],t.o[e][0]+=t.v[e][0],t.o[e][1]+=t.v[e][1]}function i(t,e){var r=e?e.split("."):[100,100,100];return t[0]>r[0]||!(r[0]>t[0])&&(t[1]>r[1]||!(r[1]>t[1])&&(t[2]>r[2]||!(r[2]>t[2])&&void 0))}function a(e,r){e.__complete||(l(e),o(e),h(e),p(e),t(e.layers,e.assets,r),e.__complete=!0)}function n(t,e){0!==t.t.a.length||"m"in t.t.p||(t.singleShape=!0)}var o=function(){function t(t){var e=t.t.d;t.t.d={k:[{s:e,t:0}]}}function e(e){var r,s=e.length;for(r=0;r<s;r+=1)5===e[r].ty&&t(e[r])}var r=[4,4,14];return function(t){if(i(r,t.v)&&(e(t.layers),t.assets)){var s,a=t.assets.length;for(s=0;s<a;s+=1)t.assets[s].layers&&e(t.assets[s].layers)}}}(),h=function(){var t=[4,7,99];return function(e){if(e.chars&&!i(t,e.v)){var r,a,n,o,h,l=e.chars.length;for(r=0;r<l;r+=1)if(e.chars[r].data&&e.chars[r].data.shapes)for(h=e.chars[r].data.shapes[0].it,n=h.length,a=0;a<n;a+=1)o=h[a].ks.k,o.__converted||(s(h[a].ks.k),o.__converted=!0)}}}(),l=function(){function t(e){var r,s,i,a=e.length;for(r=0;r<a;r+=1)if("gr"===e[r].ty)t(e[r].it);else if("fl"===e[r].ty||"st"===e[r].ty)if(e[r].c.k&&e[r].c.k[0].i)for(i=e[r].c.k.length,s=0;s<i;s+=1)e[r].c.k[s].s&&(e[r].c.k[s].s[0]/=255,e[r].c.k[s].s[1]/=255,e[r].c.k[s].s[2]/=255,e[r].c.k[s].s[3]/=255),e[r].c.k[s].e&&(e[r].c.k[s].e[0]/=255,e[r].c.k[s].e[1]/=255,e[r].c.k[s].e[2]/=255,e[r].c.k[s].e[3]/=255);else e[r].c.k[0]/=255,e[r].c.k[1]/=255,e[r].c.k[2]/=255,e[r].c.k[3]/=255}function e(e){var r,s=e.length;for(r=0;r<s;r+=1)4===e[r].ty&&t(e[r].shapes)}var r=[4,1,9];return function(t){if(i(r,t.v)&&(e(t.layers),t.assets)){var s,a=t.assets.length;for(s=0;s<a;s+=1)t.assets[s].layers&&e(t.assets[s].layers)}}}(),p=function(){function t(e){var r,s,i,a=e.length,n=!1;for(r=a-1;r>=0;r-=1)if("sh"==e[r].ty){if(e[r].ks.k.i)e[r].ks.k.c=e[r].closed;else for(i=e[r].ks.k.length,s=0;s<i;s+=1)e[r].ks.k[s].s&&(e[r].ks.k[s].s[0].c=e[r].closed),e[r].ks.k[s].e&&(e[r].ks.k[s].e[0].c=e[r].closed);n=!0}else"gr"==e[r].ty&&t(e[r].it)}function e(e){var r,s,i,a,n,o,h=e.length;for(s=0;s<h;s+=1){if(r=e[s],r.hasMask){var l=r.masksProperties;for(a=l.length,i=0;i<a;i+=1)if(l[i].pt.k.i)l[i].pt.k.c=l[i].cl;else for(o=l[i].pt.k.length,n=0;n<o;n+=1)l[i].pt.k[n].s&&(l[i].pt.k[n].s[0].c=l[i].cl),l[i].pt.k[n].e&&(l[i].pt.k[n].e[0].c=l[i].cl)}4===r.ty&&t(r.shapes)}}var r=[4,4,18];return function(t){if(i(r,t.v)&&(e(t.layers),t.assets)){var s,a=t.assets.length;for(s=0;s<a;s+=1)t.assets[s].layers&&e(t.assets[s].layers)}}}(),m={};return m.completeData=a,m}function ShapePath(){this.c=!1,this._length=0,this._maxLength=8,this.v=Array.apply(null,{length:this._maxLength}),this.o=Array.apply(null,{length:this._maxLength}),this.i=Array.apply(null,{length:this._maxLength})}function ShapeModifier(){}function TrimModifier(){}function RoundCornersModifier(){}function RepeaterModifier(){}function ShapeCollection(){this._length=0,this._maxLength=4,this.shapes=Array.apply(null,{length:this._maxLength})}function DashProperty(t,e,r,s){this.elem=t,this.frameId=-1,this.dataProps=Array.apply(null,{length:e.length}),this.renderer=r,this.mdf=!1,this.k=!1,this.dashStr="",this.dashArray=createTypedArray("float32",e.length-1),this.dashoffset=createTypedArray("float32",1);var i,a,n=e.length;for(i=0;i<n;i+=1)a=PropertyFactory.getProp(t,e[i].v,0,0,s),this.k=!!a.k||this.k,this.dataProps[i]={n:e[i].n,p:a};this.k?s.push(this):this.getValue(!0)}function GradientProperty(t,e,r){this.prop=PropertyFactory.getProp(t,e.k,1,null,[]),this.data=e,this.k=this.prop.k,this.c=createTypedArray("uint8c",4*e.p);var s=e.k.k[0].s?e.k.k[0].s.length-4*e.p:e.k.k.length-4*e.p;this.o=createTypedArray("float32",s),this.cmdf=!1,this.omdf=!1,this.prop.k&&r.push(this),this.getValue(!0)}function TextAnimatorProperty(t,e,r){this.mdf=!1,this._firstFrame=!0,this._hasMaskedPath=!1,this._frameId=-1,this._dynamicProperties=[],this._textData=t,this._renderType=e,this._elem=r,this._animatorsData=Array.apply(null,{length:this._textData.a.length}),this._pathData={},this._moreOptions={alignment:{}},this.renderedLetters=[],this.lettersChangedFlag=!1}function LetterProps(t,e,r,s,i,a){this.o=t,this.sw=e,this.sc=r,this.fc=s,this.m=i,this.p=a,this.mdf={o:!0,sw:!!e,sc:!!r,fc:!!s,m:!0,p:!0}}function TextProperty(t,e,r){this._frameId=-99999,this.pv="",this.v="",this.kf=!1,this.firstFrame=!0,this.mdf=!0,this.data=e,this.elem=t,this.keysIndex=-1,this.currentData={ascent:0,boxWidth:[0,0],f:"",fStyle:"",fWeight:"",fc:"",j:"",justifyOffset:"",l:[],lh:0,lineWidths:[],ls:"",of:"",s:"",sc:"",sw:0,t:0,tr:0,sz:0,ps:[0,0],fillColorAnim:!1,strokeColorAnim:!1,strokeWidthAnim:!1,yOffset:0,__complete:!1},this.searchProperty()?r.push(this):this.getValue(!0)}function BaseRenderer(){}function SVGRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.renderConfig={preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",progressiveLoad:e&&e.progressiveLoad||!1,hideOnTransparent:!e||e.hideOnTransparent!==!1,viewBoxOnly:e&&e.viewBoxOnly||!1,viewBoxSize:e&&e.viewBoxSize||!1,className:e&&e.className||""},this.globalData.renderConfig=this.renderConfig,this.elements=[],this.pendingElements=[],this.destroyed=!1}function MaskElement(t,e,r){this.dynamicProperties=[],this.data=t,this.element=e,this.globalData=r,this.storedData=[],this.masksProperties=this.data.masksProperties,this.viewData=Array.apply(null,{length:this.masksProperties.length}),this.maskElement=null,this.firstFrame=!0;var s,i,a,n,o,h,l,p,m=this.globalData.defs,f=this.masksProperties.length,c=this.masksProperties,d=0,u=[],y=randomString(10),g="clipPath",v="clip-path";for(s=0;s<f;s++)if(("a"!==c[s].mode&&"n"!==c[s].mode||c[s].inv||100!==c[s].o.k)&&(g="mask",v="mask"),"s"!=c[s].mode&&"i"!=c[s].mode||0!=d?o=null:(o=createNS("rect"),o.setAttribute("fill","#ffffff"),o.setAttribute("width",this.element.comp.data.w),o.setAttribute("height",this.element.comp.data.h),u.push(o)),i=createNS("path"),"n"!=c[s].mode){if(d+=1,"s"==c[s].mode?i.setAttribute("fill","#000000"):i.setAttribute("fill","#ffffff"),i.setAttribute("clip-rule","nonzero"),0!==c[s].x.k){g="mask",v="mask",p=PropertyFactory.getProp(this.element,c[s].x,0,null,this.dynamicProperties);var b="fi_"+randomString(10);h=createNS("filter"),h.setAttribute("id",b),l=createNS("feMorphology"),l.setAttribute("operator","dilate"),l.setAttribute("in","SourceGraphic"),l.setAttribute("radius","0"),h.appendChild(l),m.appendChild(h),"s"==c[s].mode?i.setAttribute("stroke","#000000"):i.setAttribute("stroke","#ffffff")}else l=null,p=null;if(this.storedData[s]={elem:i,x:p,expan:l,lastPath:"",lastOperator:"",filterId:b,lastRadius:0},"i"==c[s].mode){n=u.length;var E=createNS("g");for(a=0;a<n;a+=1)E.appendChild(u[a]);var P=createNS("mask");P.setAttribute("mask-type","alpha"),P.setAttribute("id",y+"_"+d),P.appendChild(i),m.appendChild(P),E.setAttribute("mask","url("+locationHref+"#"+y+"_"+d+")"),u.length=0,u.push(E)}else u.push(i);c[s].inv&&!this.solidPath&&(this.solidPath=this.createLayerSolidPath()),this.viewData[s]={elem:i,lastPath:"",op:PropertyFactory.getProp(this.element,c[s].o,0,.01,this.dynamicProperties),prop:ShapePropertyFactory.getShapeProp(this.element,c[s],3,this.dynamicProperties,null)},o&&(this.viewData[s].invRect=o),this.viewData[s].prop.k||this.drawPath(c[s],this.viewData[s].prop.v,this.viewData[s])}else this.viewData[s]={op:PropertyFactory.getProp(this.element,c[s].o,0,.01,this.dynamicProperties),prop:ShapePropertyFactory.getShapeProp(this.element,c[s],3,this.dynamicProperties,null),elem:i},m.appendChild(i);for(this.maskElement=createNS(g),f=u.length,s=0;s<f;s+=1)this.maskElement.appendChild(u[s]);this.maskElement.setAttribute("id",y),d>0&&this.element.maskedElement.setAttribute(v,"url("+locationHref+"#"+y+")"),m.appendChild(this.maskElement)}function BaseElement(){}function SVGBaseElement(t,e,r,s,i){this.globalData=r,this.comp=s,this.data=t,this.matteElement=null,this.transformedElement=null,this.isTransparent=!1,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this._sizeChanged=!1,this.init()}function IShapeElement(t,e,r,s,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,r,s,i)}function ITextElement(t,e,r,s){}function SVGTextElement(t,e,r,s,i){this.textSpans=[],this.renderType="svg",this._parent.constructor.call(this,t,e,r,s,i)}function SVGTintFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");if(r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r),r=createNS("feColorMatrix"),r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),r.setAttribute("result","f2"),t.appendChild(r),this.matrixFilter=r,100!==e.effectElements[2].p.v||e.effectElements[2].p.k){var s=createNS("feMerge");t.appendChild(s);var i;i=createNS("feMergeNode"),i.setAttribute("in","SourceGraphic"),s.appendChild(i),i=createNS("feMergeNode"),i.setAttribute("in","f2"),s.appendChild(i)}}function SVGFillFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","sRGB"),r.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),t.appendChild(r),this.matrixFilter=r}function SVGStrokeEffect(t,e){this.initialized=!1,this.filterManager=e,this.elem=t,this.paths=[]}function SVGTritoneFilter(t,e){this.filterManager=e;var r=createNS("feColorMatrix");r.setAttribute("type","matrix"),r.setAttribute("color-interpolation-filters","linearRGB"),r.setAttribute("values","0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),r.setAttribute("result","f1"),t.appendChild(r);var s=createNS("feComponentTransfer");s.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(s),this.matrixFilter=s;var i=createNS("feFuncR");i.setAttribute("type","table"),s.appendChild(i),this.feFuncR=i;var a=createNS("feFuncG");a.setAttribute("type","table"),s.appendChild(a),this.feFuncG=a;var n=createNS("feFuncB");n.setAttribute("type","table"),s.appendChild(n),this.feFuncB=n}function SVGProLevelsFilter(t,e){this.filterManager=e;var r=this.filterManager.effectElements,s=createNS("feComponentTransfer");(r[10].p.k||0!==r[10].p.v||r[11].p.k||1!==r[11].p.v||r[12].p.k||1!==r[12].p.v||r[13].p.k||0!==r[13].p.v||r[14].p.k||1!==r[14].p.v)&&(this.feFuncR=this.createFeFunc("feFuncR",s)),(r[17].p.k||0!==r[17].p.v||r[18].p.k||1!==r[18].p.v||r[19].p.k||1!==r[19].p.v||r[20].p.k||0!==r[20].p.v||r[21].p.k||1!==r[21].p.v)&&(this.feFuncG=this.createFeFunc("feFuncG",s)),(r[24].p.k||0!==r[24].p.v||r[25].p.k||1!==r[25].p.v||r[26].p.k||1!==r[26].p.v||r[27].p.k||0!==r[27].p.v||r[28].p.k||1!==r[28].p.v)&&(this.feFuncB=this.createFeFunc("feFuncB",s)),(r[31].p.k||0!==r[31].p.v||r[32].p.k||1!==r[32].p.v||r[33].p.k||1!==r[33].p.v||r[34].p.k||0!==r[34].p.v||r[35].p.k||1!==r[35].p.v)&&(this.feFuncA=this.createFeFunc("feFuncA",s)),(this.feFuncR||this.feFuncG||this.feFuncB||this.feFuncA)&&(s.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(s),s=createNS("feComponentTransfer")),(r[3].p.k||0!==r[3].p.v||r[4].p.k||1!==r[4].p.v||r[5].p.k||1!==r[5].p.v||r[6].p.k||0!==r[6].p.v||r[7].p.k||1!==r[7].p.v)&&(s.setAttribute("color-interpolation-filters","sRGB"),t.appendChild(s),this.feFuncRComposed=this.createFeFunc("feFuncR",s),this.feFuncGComposed=this.createFeFunc("feFuncG",s),this.feFuncBComposed=this.createFeFunc("feFuncB",s))}function SVGDropShadowEffect(t,e){t.setAttribute("x","-100%"),t.setAttribute("y","-100%"),t.setAttribute("width","400%"),t.setAttribute("height","400%"),this.filterManager=e;var r=createNS("feGaussianBlur");r.setAttribute("in","SourceAlpha"),r.setAttribute("result","drop_shadow_1"),r.setAttribute("stdDeviation","0"),this.feGaussianBlur=r,t.appendChild(r);var s=createNS("feOffset");s.setAttribute("dx","25"),s.setAttribute("dy","0"),s.setAttribute("in","drop_shadow_1"),s.setAttribute("result","drop_shadow_2"),this.feOffset=s,t.appendChild(s);var i=createNS("feFlood");i.setAttribute("flood-color","#00ff00"),i.setAttribute("flood-opacity","1"),i.setAttribute("result","drop_shadow_3"),this.feFlood=i,t.appendChild(i);var a=createNS("feComposite");a.setAttribute("in","drop_shadow_3"),a.setAttribute("in2","drop_shadow_2"),a.setAttribute("operator","in"),a.setAttribute("result","drop_shadow_4"),t.appendChild(a);var n=createNS("feMerge");t.appendChild(n);var o;o=createNS("feMergeNode"),n.appendChild(o),o=createNS("feMergeNode"),o.setAttribute("in","SourceGraphic"),this.feMergeNode=o,this.feMerge=n,this.originalNodeAdded=!1,n.appendChild(o)}function SVGMatte3Effect(t,e,r){this.initialized=!1,this.filterManager=e,this.filterElem=t,this.elem=r,r.matteElement=createNS("g"),r.matteElement.appendChild(r.layerElement),r.matteElement.appendChild(r.transformedElement),r.baseElement=r.matteElement}function SVGEffects(t){var e,r=t.data.ef.length,s=randomString(10),i=filtersFactory.createFilter(s),a=0;this.filters=[];var n;for(e=0;e<r;e+=1)20===t.data.ef[e].ty?(a+=1,n=new SVGTintFilter(i,t.effects.effectElements[e]),this.filters.push(n)):21===t.data.ef[e].ty?(a+=1,n=new SVGFillFilter(i,t.effects.effectElements[e]),this.filters.push(n)):22===t.data.ef[e].ty?(n=new SVGStrokeEffect(t,t.effects.effectElements[e]),this.filters.push(n)):23===t.data.ef[e].ty?(a+=1,n=new SVGTritoneFilter(i,t.effects.effectElements[e]),this.filters.push(n)):24===t.data.ef[e].ty?(a+=1,n=new SVGProLevelsFilter(i,t.effects.effectElements[e]),this.filters.push(n)):25===t.data.ef[e].ty?(a+=1,n=new SVGDropShadowEffect(i,t.effects.effectElements[e]),this.filters.push(n)):28===t.data.ef[e].ty&&(n=new SVGMatte3Effect(i,t.effects.effectElements[e],t),this.filters.push(n));a&&(t.globalData.defs.appendChild(i),t.layerElement.setAttribute("filter","url("+locationHref+"#"+s+")"))}function ICompElement(t,e,r,s,i){this._parent.constructor.call(this,t,e,r,s,i),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=this.layers?Array.apply(null,{length:this.layers.length}):[],this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,r.frameRate,this.dynamicProperties)),this.data.xt?(this.layerElement=createNS("g"),this.buildAllItems()):r.progressiveLoad||this.buildAllItems()}function IImageElement(t,e,r,s,i){this.assetData=r.getAssetData(t.refId),this._parent.constructor.call(this,t,e,r,s,i)}function ISolidElement(t,e,r,s,i){this._parent.constructor.call(this,t,e,r,s,i)}function CanvasRenderer(t,e){this.animationItem=t,this.renderConfig={clearCanvas:!e||void 0===e.clearCanvas||e.clearCanvas,context:e&&e.context||null,progressiveLoad:e&&e.progressiveLoad||!1,preserveAspectRatio:e&&e.preserveAspectRatio||"xMidYMid meet",className:e&&e.className||""},this.renderConfig.dpr=e&&e.dpr||1,this.animationItem.wrapper&&(this.renderConfig.dpr=e&&e.dpr||window.devicePixelRatio||1),this.renderedFrame=-1,this.globalData={frameNum:-1},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1};var r,s=15;for(r=0;r<s;r+=1)this.contextData.saved[r]=Array.apply(null,{length:16});this.elements=[],this.pendingElements=[],this.transformMat=new Matrix,this.completeLayers=!1}function HybridRenderer(t,e){this.animationItem=t,this.layers=null,this.renderedFrame=-1,this.globalData={frameNum:-1},this.renderConfig={className:e&&e.className||""},this.pendingElements=[],this.elements=[],this.threeDElements=[],this.destroyed=!1,this.camera=null,this.supports3d=!0}function CVBaseElement(t,e,r){this.globalData=r,this.data=t,this.comp=e,this.canvasContext=r.canvasContext,this.init()}function CVCompElement(t,e,r){this._parent.constructor.call(this,t,e,r);var s={};for(var i in r)r.hasOwnProperty(i)&&(s[i]=r[i]);s.renderer=this,s.compHeight=this.data.h,s.compWidth=this.data.w,this.renderConfig={clearCanvas:!0},this.contextData={saved:Array.apply(null,{length:15}),savedOp:Array.apply(null,{length:15}),cArrPos:0,cTr:new Matrix,cO:1},this.completeLayers=!1;var a,n=15;for(a=0;a<n;a+=1)this.contextData.saved[a]=Array.apply(null,{length:16});this.transformMat=new Matrix,this.parentGlobalData=this.globalData;var o=document.createElement("canvas");s.canvasContext=o.getContext("2d"),this.canvasContext=s.canvasContext,o.width=this.data.w,o.height=this.data.h,this.canvas=o,this.globalData=s,this.layers=t.layers,this.pendingElements=[],this.elements=Array.apply(null,{length:this.layers.length}),this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,r.frameRate,this.dynamicProperties)),!this.data.xt&&r.progressiveLoad||this.buildAllItems()}function CVImageElement(t,e,r){this.assetData=r.getAssetData(t.refId),this._parent.constructor.call(this,t,e,r),this.globalData.addPendingElement()}function CVMaskElement(t,e){this.data=t,this.element=e,this.dynamicProperties=[],this.masksProperties=this.data.masksProperties,this.viewData=Array.apply(null,{length:this.masksProperties.length});var r,s=this.masksProperties.length;for(r=0;r<s;r++)this.viewData[r]=ShapePropertyFactory.getShapeProp(this.element,this.masksProperties[r],3,this.dynamicProperties,null)}function CVShapeElement(t,e,r){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,r)}function CVSolidElement(t,e,r){this._parent.constructor.call(this,t,e,r)}function CVTextElement(t,e,r){this.textSpans=[],this.yOffset=0,this.fillColorAnim=!1,this.strokeColorAnim=!1,this.strokeWidthAnim=!1,this.stroke=!1,this.fill=!1,this.justifyOffset=0,this.currentRender=null,this.renderType="canvas",this.values={fill:"rgba(0,0,0,0)",stroke:"rgba(0,0,0,0)",sWidth:0,fValue:""},this._parent.constructor.call(this,t,e,r)}function HBaseElement(t,e,r,s,i){this.globalData=r,this.comp=s,this.data=t,this.matteElement=null,this.parentContainer=e,this.layerId=i?i.layerId:"ly_"+randomString(10),this.placeholder=i,this.init()}function HSolidElement(t,e,r,s,i){this._parent.constructor.call(this,t,e,r,s,i)}function HCompElement(t,e,r,s,i){this._parent.constructor.call(this,t,e,r,s,i),this.layers=t.layers,this.supports3d=!0,this.completeLayers=!1,this.pendingElements=[],this.elements=Array.apply(null,{length:this.layers.length}),this.data.tm&&(this.tm=PropertyFactory.getProp(this,this.data.tm,0,r.frameRate,this.dynamicProperties)),this.data.hasMask&&(this.supports3d=!1),this.data.xt&&(this.layerElement=document.createElement("div")),this.buildAllItems()}function HShapeElement(t,e,r,s,i){this.shapes=[],this.shapesData=t.shapes,this.stylesList=[],this.itemsData=[],this.prevViewData=[],this.shapeModifiers=[],this.processedElements=[],this._parent.constructor.call(this,t,e,r,s,i),this.currentBBox={x:999999,y:-999999,h:0,w:0}}function HTextElement(t,e,r,s,i){this.textSpans=[],this.textPaths=[],this.currentBBox={x:999999,y:-999999,h:0,w:0},this.renderType="svg",this.isMasked=!1,this._parent.constructor.call(this,t,e,r,s,i)}function HImageElement(t,e,r,s,i){this.assetData=r.getAssetData(t.refId),this._parent.constructor.call(this,t,e,r,s,i)}function HCameraElement(t,e,r,s,i){this._parent.constructor.call(this,t,e,r,s,i);var a=PropertyFactory.getProp;if(this.pe=a(this,t.pe,0,0,this.dynamicProperties),t.ks.p.s?(this.px=a(this,t.ks.p.x,1,0,this.dynamicProperties),this.py=a(this,t.ks.p.y,1,0,this.dynamicProperties),this.pz=a(this,t.ks.p.z,1,0,this.dynamicProperties)):this.p=a(this,t.ks.p,1,0,this.dynamicProperties),t.ks.a&&(this.a=a(this,t.ks.a,1,0,this.dynamicProperties)),t.ks.or.k.length&&t.ks.or.k[0].to){var n,o=t.ks.or.k.length;for(n=0;n<o;n+=1)t.ks.or.k[n].to=null,t.ks.or.k[n].ti=null}this.or=a(this,t.ks.or,1,degToRads,this.dynamicProperties),this.or.sh=!0,this.rx=a(this,t.ks.rx,0,degToRads,this.dynamicProperties),this.ry=a(this,t.ks.ry,0,degToRads,this.dynamicProperties),this.rz=a(this,t.ks.rz,0,degToRads,this.dynamicProperties),this.mat=new Matrix}function SliderEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function AngleEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function ColorEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function PointEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,1,0,r)}function LayerIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function MaskIndexEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function CheckboxEffect(t,e,r){this.p=PropertyFactory.getProp(e,t.v,0,0,r)}function NoValueEffect(){this.p={}}function EffectsManager(t,e,r){var s=t.ef;this.effectElements=[];var i,a,n=s.length;for(i=0;i<n;i++)a=new GroupEffect(s[i],e,r),this.effectElements.push(a)}function GroupEffect(t,e,r){this.dynamicProperties=[],this.init(t,e,this.dynamicProperties),this.dynamicProperties.length&&r.push(this)}function setLocationHref(t){locationHref=t}function play(t){animationManager.play(t)}function pause(t){animationManager.pause(t)}function togglePause(t){animationManager.togglePause(t)}function setSpeed(t,e){animationManager.setSpeed(t,e)}function setDirection(t,e){animationManager.setDirection(t,e)}function stop(t){animationManager.stop(t)}function moveFrame(t){animationManager.moveFrame(t)}function searchAnimations(){standalone===!0?animationManager.searchAnimations(animationData,standalone,renderer):animationManager.searchAnimations()}function registerAnimation(t){return animationManager.registerAnimation(t)}function resize(){animationManager.resize()}function goToAndStop(t,e,r){animationManager.goToAndStop(t,e,r)}function setSubframeRendering(t){subframeEnabled=t}function loadAnimation(t){return standalone===!0&&(t.animationData=JSON.parse(animationData)),animationManager.loadAnimation(t)}function destroy(t){return animationManager.destroy(t)}function setQuality(t){if("string"==typeof t)switch(t){case"high":defaultCurveSegments=200;break;case"medium":defaultCurveSegments=50;break;case"low":defaultCurveSegments=10}else!isNaN(t)&&t>1&&(defaultCurveSegments=t);roundValues(!(defaultCurveSegments>=50))}function inBrowser(){return"undefined"!=typeof navigator}function installPlugin(t,e){"expressions"===t&&(expressionsPlugin=e)}function getFactory(t){switch(t){case"propertyFactory":return PropertyFactory;case"shapePropertyFactory":return ShapePropertyFactory;case"matrix":return Matrix}}function checkReady(){"complete"===document.readyState&&(clearInterval(readyStateCheckInterval),searchAnimations())}function getQueryVariable(t){for(var e=queryString.split("&"),r=0;r<e.length;r++){var s=e[r].split("=");if(decodeURIComponent(s[0])==t)return decodeURIComponent(s[1])}}var svgNS="http://www.w3.org/2000/svg",locationHref="",subframeEnabled=!0,expressionsPlugin,isSafari=/^((?!chrome|android).)*safari/i.test(navigator.userAgent),cachedColors={},bm_rounder=Math.round,bm_rnd,bm_pow=Math.pow,bm_sqrt=Math.sqrt,bm_abs=Math.abs,bm_floor=Math.floor,bm_max=Math.max,bm_min=Math.min,blitter=10,BMMath={};!function(){var t,e=Object.getOwnPropertyNames(Math),r=e.length;for(t=0;t<r;t+=1)BMMath[e[t]]=Math[e[t]]}(),BMMath.random=Math.random,BMMath.abs=function(t){var e=typeof t;if("object"===e&&t.length){var r,s=Array.apply(null,{length:t.length}),i=t.length;for(r=0;r<i;r+=1)s[r]=Math.abs(t[r]);return s}return Math.abs(t)};var defaultCurveSegments=150,degToRads=Math.PI/180,roundCorner=.5519;roundValues(!1);var rgbToHex=function(){var t,e,r=[];for(t=0;t<256;t+=1)e=t.toString(16),r[t]=1==e.length?"0"+e:e;return function(t,e,s){return t<0&&(t=0),e<0&&(e=0),s<0&&(s=0),"#"+r[t]+r[e]+r[s]}}(),createTypedArray=function(){function t(t,e){var r,s=0,i=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(s=0;s<e;s+=1)i.push(r);return i}function e(t,e){return"float32"===t?new Float32Array(e):"int16"===t?new Int16Array(e):"uint8c"===t?new Uint8ClampedArray(e):void 0}return"function"==typeof Uint8ClampedArray&&"function"==typeof Float32Array?e:t}(),Matrix=function(){function t(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function e(t){if(0===t)return this;
var e=A(t),r=k(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function r(t){if(0===t)return this;var e=A(t),r=k(t);return this._t(1,0,0,0,0,e,-r,0,0,r,e,0,0,0,0,1)}function s(t){if(0===t)return this;var e=A(t),r=k(t);return this._t(e,0,r,0,0,1,0,0,-r,0,e,0,0,0,0,1)}function i(t){if(0===t)return this;var e=A(t),r=k(t);return this._t(e,-r,0,0,r,e,0,0,0,0,1,0,0,0,0,1)}function a(t,e){return this._t(1,e,t,1,0,0)}function n(t,e){return this.shear(M(t),M(e))}function o(t,e){var r=A(e),s=k(e);return this._t(r,s,0,0,-s,r,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,M(t),1,0,0,0,0,1,0,0,0,0,1)._t(r,-s,0,0,s,r,0,0,0,0,1,0,0,0,0,1)}function h(t,e,r){return r=isNaN(r)?1:r,1==t&&1==e&&1==r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function l(t,e,r,s,i,a,n,o,h,l,p,m,f,c,d,u){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=s,this.props[4]=i,this.props[5]=a,this.props[6]=n,this.props[7]=o,this.props[8]=h,this.props[9]=l,this.props[10]=p,this.props[11]=m,this.props[12]=f,this.props[13]=c,this.props[14]=d,this.props[15]=u,this}function p(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function m(t,e,r,s,i,a,n,o,h,l,p,m,f,c,d,u){if(1===t&&0===e&&0===r&&0===s&&0===i&&1===a&&0===n&&0===o&&0===h&&0===l&&1===p&&0===m)return 0===f&&0===c&&0===d||(this.props[12]=this.props[12]*t+this.props[13]*i+this.props[14]*h+this.props[15]*f,this.props[13]=this.props[12]*e+this.props[13]*a+this.props[14]*l+this.props[15]*c,this.props[14]=this.props[12]*r+this.props[13]*n+this.props[14]*p+this.props[15]*d,this.props[15]=this.props[12]*s+this.props[13]*o+this.props[14]*m+this.props[15]*u),this._identityCalculated=!1,this;var y=this.props[0],g=this.props[1],v=this.props[2],b=this.props[3],E=this.props[4],P=this.props[5],x=this.props[6],C=this.props[7],S=this.props[8],A=this.props[9],k=this.props[10],M=this.props[11],T=this.props[12],D=this.props[13],w=this.props[14],_=this.props[15];return this.props[0]=y*t+g*i+v*h+b*f,this.props[1]=y*e+g*a+v*l+b*c,this.props[2]=y*r+g*n+v*p+b*d,this.props[3]=y*s+g*o+v*m+b*u,this.props[4]=E*t+P*i+x*h+C*f,this.props[5]=E*e+P*a+x*l+C*c,this.props[6]=E*r+P*n+x*p+C*d,this.props[7]=E*s+P*o+x*m+C*u,this.props[8]=S*t+A*i+k*h+M*f,this.props[9]=S*e+A*a+k*l+M*c,this.props[10]=S*r+A*n+k*p+M*d,this.props[11]=S*s+A*o+k*m+M*u,this.props[12]=T*t+D*i+w*h+_*f,this.props[13]=T*e+D*a+w*l+_*c,this.props[14]=T*r+D*n+w*p+_*d,this.props[15]=T*s+D*o+w*m+_*u,this._identityCalculated=!1,this}function f(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function c(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e]}function d(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function u(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function y(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function g(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function v(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function b(t){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],r=this.props[5]/e,s=-this.props[1]/e,i=-this.props[4]/e,a=this.props[0]/e,n=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,o=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e;return[t[0]*r+t[1]*i+n,t[0]*s+t[1]*a+o,0]}function E(t){var e,r=t.length,s=[];for(e=0;e<r;e+=1)s[e]=b(t[e]);return s}function P(t,e,r,s){if(s&&2===s){var i=point_pool.newPoint();return i[0]=t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],i[1]=t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],i}return[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function x(t,e){return this.isIdentity()?t+","+e:bm_rnd(t*this.props[0]+e*this.props[4]+this.props[12])+","+bm_rnd(t*this.props[1]+e*this.props[5]+this.props[13])}function C(){for(var t=0,e=this.props,r="matrix3d(",s=1e4;t<16;)r+=T(e[t]*s)/s,r+=15===t?")":",",t+=1;return r}function S(){var t=1e4,e=this.props;return"matrix("+T(e[0]*t)/t+","+T(e[1]*t)/t+","+T(e[4]*t)/t+","+T(e[5]*t)/t+","+T(e[12]*t)/t+","+T(e[13]*t)/t+")"}var A=Math.cos,k=Math.sin,M=Math.tan,T=Math.round;return function(){this.reset=t,this.rotate=e,this.rotateX=r,this.rotateY=s,this.rotateZ=i,this.skew=n,this.skewFromAxis=o,this.shear=a,this.scale=h,this.setTransform=l,this.translate=p,this.transform=m,this.applyToPoint=u,this.applyToX=y,this.applyToY=g,this.applyToZ=v,this.applyToPointArray=P,this.applyToPointStringified=x,this.toCSS=C,this.to2dCSS=S,this.clone=c,this.cloneFromProps=d,this.inversePoints=E,this.inversePoint=b,this._t=this.transform,this.isIdentity=f,this._identity=!0,this._identityCalculated=!1,this.props=createTypedArray("float32",16),this.reset()}}();!function(t,e){function r(r,l,p){var c=[];l=1==l?{entropy:!0}:l||{};var v=n(a(l.entropy?[r,h(t)]:null==r?o():r,3),c),b=new s(c),E=function(){for(var t=b.g(f),e=u,r=0;t<y;)t=(t+r)*m,e*=m,r=b.g(1);for(;t>=g;)t/=2,e/=2,r>>>=1;return(t+r)/e};return E.int32=function(){return 0|b.g(4)},E.quick=function(){return b.g(4)/4294967296},E["double"]=E,n(h(b.S),t),(l.pass||p||function(t,r,s,a){return a&&(a.S&&i(a,b),t.state=function(){return i(b,{})}),s?(e[d]=t,r):t})(E,v,"global"in l?l.global:this==e,l.state)}function s(t){var e,r=t.length,s=this,i=0,a=s.i=s.j=0,n=s.S=[];for(r||(t=[r++]);i<m;)n[i]=i++;for(i=0;i<m;i++)n[i]=n[a=v&a+t[i%r]+(e=n[i])],n[a]=e;(s.g=function(t){for(var e,r=0,i=s.i,a=s.j,n=s.S;t--;)e=n[i=v&i+1],r=r*m+n[v&(n[i]=n[a=v&a+e])+(n[a]=e)];return s.i=i,s.j=a,r})(m)}function i(t,e){return e.i=t.i,e.j=t.j,e.S=t.S.slice(),e}function a(t,e){var r,s=[],i=typeof t;if(e&&"object"==i)for(r in t)try{s.push(a(t[r],e-1))}catch(n){}return s.length?s:"string"==i?t:t+"\0"}function n(t,e){for(var r,s=t+"",i=0;i<s.length;)e[v&i]=v&(r^=19*e[v&i])+s.charCodeAt(i++);return h(e)}function o(){try{if(l)return h(l.randomBytes(m));var e=new Uint8Array(m);return(p.crypto||p.msCrypto).getRandomValues(e),h(e)}catch(r){var s=p.navigator,i=s&&s.plugins;return[+new Date,p,i,p.screen,h(t)]}}function h(t){return String.fromCharCode.apply(0,t)}var l,p=this,m=256,f=6,c=52,d="random",u=e.pow(m,f),y=e.pow(2,c),g=2*y,v=m-1;e["seed"+d]=r,n(e.random(),t)}([],BMMath);var BezierFactory=function(){function t(t,e,r,s,i){var a=i||("bez_"+t+"_"+e+"_"+r+"_"+s).replace(/\./g,"p");if(p[a])return p[a];var n=new h([t,e,r,s]);return p[a]=n,n}function e(t,e){return 1-3*e+3*t}function r(t,e){return 3*e-6*t}function s(t){return 3*t}function i(t,i,a){return((e(i,a)*t+r(i,a))*t+s(i))*t}function a(t,i,a){return 3*e(i,a)*t*t+2*r(i,a)*t+s(i)}function n(t,e,r,s,a){var n,o,h=0;do o=e+(r-e)/2,n=i(o,s,a)-t,n>0?r=o:e=o;while(Math.abs(n)>c&&++h<d);return o}function o(t,e,r,s){for(var n=0;n<m;++n){var o=a(e,r,s);if(0===o)return e;var h=i(e,r,s)-t;e-=h/o}return e}function h(t){this._p=t,this._mSampleValues=g?new Float32Array(u):new Array(u),this._precomputed=!1,this.get=this.get.bind(this)}var l={};l.getBezierEasing=t;var p={},m=4,f=.001,c=1e-7,d=10,u=11,y=1/(u-1),g="function"==typeof Float32Array;return h.prototype={get:function(t){var e=this._p[0],r=this._p[1],s=this._p[2],a=this._p[3];return this._precomputed||this._precompute(),e===r&&s===a?t:0===t?0:1===t?1:i(this._getTForX(t),r,a)},_precompute:function(){var t=this._p[0],e=this._p[1],r=this._p[2],s=this._p[3];this._precomputed=!0,t===e&&r===s||this._calcSampleValues()},_calcSampleValues:function(){for(var t=this._p[0],e=this._p[2],r=0;r<u;++r)this._mSampleValues[r]=i(r*y,t,e)},_getTForX:function(t){for(var e=this._p[0],r=this._p[2],s=this._mSampleValues,i=0,h=1,l=u-1;h!==l&&s[h]<=t;++h)i+=y;--h;var p=(t-s[h])/(s[h+1]-s[h]),m=i+p*y,c=a(m,e,r);return c>=f?o(t,m,e,r):0===c?m:n(t,i,i+y,e,r)}},l}();!function(){for(var t=0,e=["ms","moz","webkit","o"],r=0;r<e.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[e[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[r]+"CancelAnimationFrame"]||window[e[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,r){var s=(new Date).getTime(),i=Math.max(0,16-(s-t)),a=setTimeout(function(){e(s+i)},i);return t=s+i,a}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}();var bez=bezFunction(),dataManager=dataFunctionManager(),FontManager=function(){function t(t,e){var r=document.createElement("span");r.style.fontFamily=e;var s=document.createElement("span");s.innerHTML="giItT1WQy@!-/#",r.style.position="absolute",r.style.left="-10000px",r.style.top="-10000px",r.style.fontSize="300px",r.style.fontVariant="normal",r.style.fontStyle="normal",r.style.fontWeight="normal",r.style.letterSpacing="0",r.appendChild(s),document.body.appendChild(r);var i=s.offsetWidth;return s.style.fontFamily=t+", "+e,{node:s,w:i,parent:r}}function e(){var t,r,s,i=this.fonts.length,a=i;for(t=0;t<i;t+=1)if(this.fonts[t].loaded)a-=1;else if("t"===this.fonts[t].fOrigin||2===this.fonts[t].origin){if(window.Typekit&&window.Typekit.load&&0===this.typekitLoaded){this.typekitLoaded=1;try{window.Typekit.load({async:!0,active:function(){this.typekitLoaded=2}.bind(this)})}catch(n){}}2===this.typekitLoaded&&(this.fonts[t].loaded=!0)}else"n"===this.fonts[t].fOrigin||0===this.fonts[t].origin?this.fonts[t].loaded=!0:(r=this.fonts[t].monoCase.node,s=this.fonts[t].monoCase.w,r.offsetWidth!==s?(a-=1,this.fonts[t].loaded=!0):(r=this.fonts[t].sansCase.node,s=this.fonts[t].sansCase.w,r.offsetWidth!==s&&(a-=1,this.fonts[t].loaded=!0)),this.fonts[t].loaded&&(this.fonts[t].sansCase.parent.parentNode.removeChild(this.fonts[t].sansCase.parent),this.fonts[t].monoCase.parent.parentNode.removeChild(this.fonts[t].monoCase.parent)));0!==a&&Date.now()-this.initTime<h?setTimeout(e.bind(this),20):setTimeout(function(){this.loaded=!0}.bind(this),0)}function r(t,e){var r=createNS("text");r.style.fontSize="100px",r.style.fontFamily=e.fFamily,r.textContent="1",e.fClass?(r.style.fontFamily="inherit",r.className=e.fClass):r.style.fontFamily=e.fFamily,t.appendChild(r);var s=document.createElement("canvas").getContext("2d");return s.font="100px "+e.fFamily,s}function s(s,i){if(!s)return void(this.loaded=!0);if(this.chars)return this.loaded=!0,void(this.fonts=s.list);var a,n=s.list,o=n.length;for(a=0;a<o;a+=1){if(n[a].loaded=!1,n[a].monoCase=t(n[a].fFamily,"monospace"),n[a].sansCase=t(n[a].fFamily,"sans-serif"),n[a].fPath){if("p"===n[a].fOrigin||3===n[a].origin){var h=document.createElement("style");h.type="text/css",h.innerHTML="@font-face {font-family: "+n[a].fFamily+"; font-style: normal; src: url('"+n[a].fPath+"');}",i.appendChild(h)}else if("g"===n[a].fOrigin||1===n[a].origin){var l=document.createElement("link");l.type="text/css",l.rel="stylesheet",l.href=n[a].fPath,i.appendChild(l)}else if("t"===n[a].fOrigin||2===n[a].origin){var p=document.createElement("script");p.setAttribute("src",n[a].fPath),i.appendChild(p)}}else n[a].loaded=!0;n[a].helper=r(i,n[a]),this.fonts.push(n[a])}e.bind(this)()}function i(t){if(t){this.chars||(this.chars=[]);var e,r,s,i=t.length,a=this.chars.length;for(e=0;e<i;e+=1){for(r=0,s=!1;r<a;)this.chars[r].style===t[e].style&&this.chars[r].fFamily===t[e].fFamily&&this.chars[r].ch===t[e].ch&&(s=!0),r+=1;s||(this.chars.push(t[e]),a+=1)}}}function a(t,e,r){for(var s=0,i=this.chars.length;s<i;){if(this.chars[s].ch===t&&this.chars[s].style===e&&this.chars[s].fFamily===r)return this.chars[s];s+=1}return console&&console.warn&&console.warn("Missing character from exported characters list: ",t,e,r),l}function n(t,e,r){var s=this.getFontByName(e),i=s.helper;return i.measureText(t).width*r/100}function o(t){for(var e=0,r=this.fonts.length;e<r;){if(this.fonts[e].fName===t)return this.fonts[e];e+=1}return"sans-serif"}var h=5e3,l={w:0,size:0,shapes:[]},p=function(){this.fonts=[],this.chars=null,this.typekitLoaded=0,this.loaded=!1,this.initTime=Date.now()};return p.prototype.addChars=i,p.prototype.addFonts=s,p.prototype.getCharData=a,p.prototype.getFontByName=o,p.prototype.measureText=n,p}(),PropertyFactory=function(){function t(t,e,r,s){var i,a=this.offsetTime;"multidimensional"===this.propType&&(i=createTypedArray("float32",r.length));for(var n,o,h=e,l=this.keyframes.length-1,p=!0;p;){if(n=this.keyframes[h],o=this.keyframes[h+1],h==l-1&&t>=o.t-a){n.h&&(n=o),e=0;break}if(o.t-a>t){e=h;break}h<l-1?h+=1:(e=0,p=!1)}var m,f,c,d,u,y;if(n.to){n.bezierData||bez.buildBezierData(n);var g=n.bezierData;if(t>=o.t-a||t<n.t-a){var v=t>=o.t-a?g.points.length-1:0;for(f=g.points[v].point.length,m=0;m<f;m+=1)i[m]=g.points[v].point[m];s._lastBezierData=null}else{n.__fnct?y=n.__fnct:(y=BezierFactory.getBezierEasing(n.o.x,n.o.y,n.i.x,n.i.y,n.n).get,n.__fnct=y),c=y((t-(n.t-a))/(o.t-a-(n.t-a)));var b,E=g.segmentLength*c,P=s.lastFrame<t&&s._lastBezierData===g?s._lastAddedLength:0;for(u=s.lastFrame<t&&s._lastBezierData===g?s._lastPoint:0,p=!0,d=g.points.length;p;){if(P+=g.points[u].partialLength,0===E||0===c||u==g.points.length-1){for(f=g.points[u].point.length,m=0;m<f;m+=1)i[m]=g.points[u].point[m];break}if(E>=P&&E<P+g.points[u+1].partialLength){for(b=(E-P)/g.points[u+1].partialLength,f=g.points[u].point.length,m=0;m<f;m+=1)i[m]=g.points[u].point[m]+(g.points[u+1].point[m]-g.points[u].point[m])*b;break}u<d-1?u+=1:p=!1}s._lastPoint=u,s._lastAddedLength=P-g.points[u].partialLength,s._lastBezierData=g}}else{var x,C,S,A,k;for(l=n.s.length,h=0;h<l;h+=1){if(1!==n.h&&(t>=o.t-a?c=1:t<n.t-a?c=0:(n.o.x.constructor===Array?(n.__fnct||(n.__fnct=[]),n.__fnct[h]?y=n.__fnct[h]:(x=n.o.x[h]||n.o.x[0],C=n.o.y[h]||n.o.y[0],S=n.i.x[h]||n.i.x[0],A=n.i.y[h]||n.i.y[0],y=BezierFactory.getBezierEasing(x,C,S,A).get,n.__fnct[h]=y)):n.__fnct?y=n.__fnct:(x=n.o.x,C=n.o.y,S=n.i.x,A=n.i.y,y=BezierFactory.getBezierEasing(x,C,S,A).get,n.__fnct=y),c=y((t-(n.t-a))/(o.t-a-(n.t-a))))),this.sh&&1!==n.h){var M=n.s[h],T=n.e[h];M-T<-180?M+=360:M-T>180&&(M-=360),k=M+(T-M)*c}else k=1===n.h?n.s[h]:n.s[h]+(n.e[h]-n.s[h])*c;1===l?i=k:i[h]=k}}return{value:i,iterationIndex:e}}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(!(t===this._caching.lastFrame||this._caching.lastFrame!==h&&(this._caching.lastFrame>=r&&t>=r||this._caching.lastFrame<e&&t<e))){var s=this._caching.lastFrame<t?this._caching.lastIndex:0,i=this.interpolateValue(t,s,this.pv,this._caching);if(this._caching.lastIndex=i.iterationIndex,"multidimensional"===this.propType){for(s=0;s<this.v.length;)this.pv[s]=i.value[s],this.v[s]=this.mult?this.pv[s]*this.mult:this.pv[s],this.lastPValue[s]!==this.pv[s]&&(this.mdf=!0,this.lastPValue[s]=this.pv[s]),s+=1;this.firstFrame&&(this.firstFrame=!1,this.mdf=!0)}else this.pv=i.value,this.v=this.mult?this.pv*this.mult:this.pv,this.lastPValue!=this.pv&&(this.mdf=!0,this.lastPValue=this.pv)}this._caching.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function r(){}function s(t,e,s){this.propType="unidimensional",this.mult=s,this.v=s?e.k*s:e.k,this.pv=e.k,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.vel=0,this.getValue=r}function i(t,e,s){this.propType="multidimensional",this.mult=s,this.data=e,this.mdf=!1,this.comp=t.comp,this.k=!1,this.kf=!1,this.frameId=-1,this.v=createTypedArray("float32",e.k.length),this.pv=createTypedArray("float32",e.k.length),this.lastValue=createTypedArray("float32",e.k.length);createTypedArray("float32",e.k.length);this.vel=createTypedArray("float32",e.k.length);var i,a=e.k.length;for(i=0;i<a;i+=1)this.v[i]=s?e.k[i]*s:e.k[i],this.pv[i]=e.k[i];this.getValue=r}function a(r,s,i){this.propType="unidimensional",this.keyframes=s.k,this.offsetTime=r.data.st,this.lastValue=-99999,this.lastPValue=-99999,this.frameId=-1,this._caching={lastFrame:h,lastIndex:0},this.k=!0,this.kf=!0,this.data=s,this.mult=i,this.elem=r,this.firstFrame=!1,this.comp=r.comp,this.v=i?s.k[0].s[0]*i:s.k[0].s[0],this.pv=s.k[0].s[0],this.getValue=e,this.interpolateValue=t}function n(r,s,i){var a,n,o,l,p,m=s.k.length;for(a=0;a<m-1;a+=1)s.k[a].to&&s.k[a].s&&s.k[a].e&&(n=s.k[a].s,o=s.k[a].e,l=s.k[a].to,p=s.k[a].ti,(2===n.length&&(n[0]!==o[0]||n[1]!==o[1])&&bez.pointOnLine2D(n[0],n[1],o[0],o[1],n[0]+l[0],n[1]+l[1])&&bez.pointOnLine2D(n[0],n[1],o[0],o[1],o[0]+p[0],o[1]+p[1])||3===n.length&&(n[0]!==o[0]||n[1]!==o[1]||n[2]!==o[2])&&bez.pointOnLine3D(n[0],n[1],n[2],o[0],o[1],o[2],n[0]+l[0],n[1]+l[1],n[2]+l[2])&&bez.pointOnLine3D(n[0],n[1],n[2],o[0],o[1],o[2],o[0]+p[0],o[1]+p[1],o[2]+p[2]))&&(s.k[a].to=null,s.k[a].ti=null));this.propType="multidimensional",this.keyframes=s.k,this.offsetTime=r.data.st,this.k=!0,this.kf=!0,this.firstFrame=!0,this.mult=i,this.elem=r,this.comp=r.comp,this._caching={lastFrame:h,lastIndex:0},this.getValue=e,this.interpolateValue=t,this.frameId=-1;var f=s.k[0].s.length;this.v=createTypedArray("float32",f),this.pv=createTypedArray("float32",f),this.lastValue=createTypedArray("float32",f),this.lastPValue=createTypedArray("float32",f)}function o(t,e,r,o,h){var l;if(0===e.a)l=0===r?new s(t,e,o):new i(t,e,o);else if(1===e.a)l=0===r?new a(t,e,o):new n(t,e,o);else if(e.k.length)if("number"==typeof e.k[0])l=new i(t,e,o);else switch(r){case 0:l=new a(t,e,o);break;case 1:l=new n(t,e,o)}else l=new s(t,e,o);return l.k&&h.push(l),l}var h=-999999,l={getProp:o};return l}(),TransformPropertyFactory=function(){function t(t){var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.a&&t.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&t.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.r?t.rotate(-this.r.v):t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?this.data.p.z?t.translate(this.px.v,this.py.v,-this.pz.v):t.translate(this.px.v,this.py.v,0):t.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);if(this.mdf){if(this.v.reset(),this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.autoOriented&&this.p.keyframes&&this.p.getValueAtTime){var r,s;this.p._caching.lastFrame+this.p.offsetTime<=this.p.keyframes[0].t?(r=this.p.getValueAtTime((this.p.keyframes[0].t+.01)/this.elem.globalData.frameRate,0),s=this.p.getValueAtTime(this.p.keyframes[0].t/this.elem.globalData.frameRate,0)):this.p._caching.lastFrame+this.p.offsetTime>=this.p.keyframes[this.p.keyframes.length-1].t?(r=this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length-1].t/this.elem.globalData.frameRate,0),s=this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length-1].t-.01)/this.elem.globalData.frameRate,0)):(r=this.p.pv,s=this.p.getValueAtTime((this.p._caching.lastFrame+this.p.offsetTime-.01)/this.elem.globalData.frameRate,this.p.offsetTime)),this.v.rotate(-Math.atan2(r[1]-s[1],r[0]-s[0]))}this.data.p.s?this.data.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2])}this.frameId=this.elem.globalData.frameId}}function r(){this.inverted=!0,this.iv=new Matrix,this.k||(this.data.p.s?this.iv.translate(this.px.v,this.py.v,-this.pz.v):this.iv.translate(this.p.v[0],this.p.v[1],-this.p.v[2]),this.r?this.iv.rotate(-this.r.v):this.iv.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.s&&this.iv.scale(this.s.v[0],this.s.v[1],1),this.a&&this.iv.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]))}function s(){}function i(t,e,r){if(this.elem=t,this.frameId=-1,this.type="transform",this.dynamicProperties=[],this.mdf=!1,this.data=e,this.v=new Matrix,e.p.s?(this.px=PropertyFactory.getProp(t,e.p.x,0,0,this.dynamicProperties),this.py=PropertyFactory.getProp(t,e.p.y,0,0,this.dynamicProperties),e.p.z&&(this.pz=PropertyFactory.getProp(t,e.p.z,0,0,this.dynamicProperties))):this.p=PropertyFactory.getProp(t,e.p,1,0,this.dynamicProperties),e.r)this.r=PropertyFactory.getProp(t,e.r,0,degToRads,this.dynamicProperties);else if(e.rx){if(this.rx=PropertyFactory.getProp(t,e.rx,0,degToRads,this.dynamicProperties),this.ry=PropertyFactory.getProp(t,e.ry,0,degToRads,this.dynamicProperties),this.rz=PropertyFactory.getProp(t,e.rz,0,degToRads,this.dynamicProperties),e.or.k[0].ti){var s,i=e.or.k.length;for(s=0;s<i;s+=1)e.or.k[s].to=e.or.k[s].ti=null}this.or=PropertyFactory.getProp(t,e.or,1,degToRads,this.dynamicProperties),this.or.sh=!0}e.sk&&(this.sk=PropertyFactory.getProp(t,e.sk,0,degToRads,this.dynamicProperties),this.sa=PropertyFactory.getProp(t,e.sa,0,degToRads,this.dynamicProperties)),e.a&&(this.a=PropertyFactory.getProp(t,e.a,1,0,this.dynamicProperties)),e.s&&(this.s=PropertyFactory.getProp(t,e.s,1,.01,this.dynamicProperties)),e.o?this.o=PropertyFactory.getProp(t,e.o,0,.01,r):this.o={mdf:!1,v:1},this.dynamicProperties.length?r.push(this):(this.a&&this.v.translate(-this.a.v[0],-this.a.v[1],this.a.v[2]),this.s&&this.v.scale(this.s.v[0],this.s.v[1],this.s.v[2]),this.sk&&this.v.skewFromAxis(-this.sk.v,this.sa.v),this.r?this.v.rotate(-this.r.v):this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),this.data.p.s?e.p.z?this.v.translate(this.px.v,this.py.v,-this.pz.v):this.v.translate(this.px.v,this.py.v,0):this.v.translate(this.p.v[0],this.p.v[1],-this.p.v[2]))}function a(t,e,r){return new i(t,e,r)}return i.prototype.applyToMatrix=t,i.prototype.getValue=e,i.prototype.setInverted=r,i.prototype.autoOrient=s,{getTransformProperty:a}}();ShapePath.prototype.setPathData=function(t,e){this.c=t,this.setLength(e);for(var r=0;r<e;)this.v[r]=point_pool.newPoint(),this.o[r]=point_pool.newPoint(),this.i[r]=point_pool.newPoint(),r+=1},ShapePath.prototype.setLength=function(t){for(;this._maxLength<t;)this.doubleArrayLength();this._length=t},ShapePath.prototype.doubleArrayLength=function(){this.v=this.v.concat(Array.apply(null,{length:this._maxLength})),this.i=this.i.concat(Array.apply(null,{length:this._maxLength})),this.o=this.o.concat(Array.apply(null,{length:this._maxLength})),this._maxLength*=2},ShapePath.prototype.setXYAt=function(t,e,r,s,i){var a;switch(this._length=Math.max(this._length,s+1),this._length>=this._maxLength&&this.doubleArrayLength(),r){case"v":a=this.v;break;case"i":a=this.i;break;case"o":a=this.o}(!a[s]||a[s]&&!i)&&(a[s]=point_pool.newPoint()),a[s][0]=t,a[s][1]=e},ShapePath.prototype.setTripleAt=function(t,e,r,s,i,a,n,o){this.setXYAt(t,e,"v",n,o),this.setXYAt(r,s,"o",n,o),this.setXYAt(i,a,"i",n,o)},ShapePath.prototype.reverse=function(){var t=new ShapePath;t.setPathData(this.c,this._length);var e=this.v,r=this.o,s=this.i,a=0;this.c&&(t.setTripleAt(e[0][0],e[0][1],s[0][0],s[0][1],r[0][0],r[0][1],0,!1),a=1);var n=this._length-1,o=this._length;for(i=a;i<o;i+=1)t.setTripleAt(e[n][0],e[n][1],s[n][0],s[n][1],r[n][0],r[n][1],i,!1),n-=1;return t};var ShapePropertyFactory=function(){function t(t,e,r,s){var i,a,n;if(t<this.keyframes[0].t-this.offsetTime)i=this.keyframes[0].s[0],n=!0,e=0;else if(t>=this.keyframes[this.keyframes.length-1].t-this.offsetTime)i=1===this.keyframes[this.keyframes.length-2].h?this.keyframes[this.keyframes.length-1].s[0]:this.keyframes[this.keyframes.length-2].e[0],n=!0;else{for(var o,h,l,p,m,f,c=e,d=this.keyframes.length-1,u=!0;u&&(o=this.keyframes[c],h=this.keyframes[c+1],!(h.t-this.offsetTime>t));)c<d-1?c+=1:u=!1;n=1===o.h,e=c;var y;if(!n){if(t>=h.t-this.offsetTime)y=1;else if(t<o.t-this.offsetTime)y=0;else{var g;o.__fnct?g=o.__fnct:(g=BezierFactory.getBezierEasing(o.o.x,o.o.y,o.i.x,o.i.y).get,o.__fnct=g),y=g((t-(o.t-this.offsetTime))/(h.t-this.offsetTime-(o.t-this.offsetTime)))}a=o.e[0]}i=o.s[0]}p=r._length,f=i.i[0].length;var v,b=!1;for(l=0;l<p;l+=1)for(m=0;m<f;m+=1)n?(v=i.i[l][m],r.i[l][m]!==v&&(r.i[l][m]=v,s&&(this.pv.i[l][m]=v),b=!0),v=i.o[l][m],r.o[l][m]!==v&&(r.o[l][m]=v,s&&(this.pv.o[l][m]=v),b=!0),v=i.v[l][m],r.v[l][m]!==v&&(r.v[l][m]=v,s&&(this.pv.v[l][m]=v),b=!0)):(v=i.i[l][m]+(a.i[l][m]-i.i[l][m])*y,r.i[l][m]!==v&&(r.i[l][m]=v,s&&(this.pv.i[l][m]=v),b=!0),v=i.o[l][m]+(a.o[l][m]-i.o[l][m])*y,r.o[l][m]!==v&&(r.o[l][m]=v,s&&(this.pv.o[l][m]=v),b=!0),v=i.v[l][m]+(a.v[l][m]-i.v[l][m])*y,r.v[l][m]!==v&&(r.v[l][m]=v,s&&(this.pv.v[l][m]=v),b=!0));return b&&(r.c=i.c),{iterationIndex:e,hasModified:b}}function e(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1;var t=this.comp.renderedFrame-this.offsetTime,e=this.keyframes[0].t-this.offsetTime,r=this.keyframes[this.keyframes.length-1].t-this.offsetTime;if(this.lastFrame===l||!(this.lastFrame<e&&t<e||this.lastFrame>r&&t>r)){var s=this.lastFrame<t?this._lastIndex:0,i=this.interpolateShape(t,s,this.v,!0);this._lastIndex=i.iterationIndex,this.mdf=i.hasModified,i.hasModified&&(this.paths=this.localShapeCollection)}this.lastFrame=t,this.frameId=this.elem.globalData.frameId}}function r(){return this.v}function s(){this.paths=this.localShapeCollection,this.k||(this.mdf=!1)}function i(t,e,r){this.__shapeObject=1,this.comp=t.comp,this.k=!1,this.mdf=!1;var i=3===r?e.pt.k:e.ks.k;this.v=shape_pool.clone(i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.reset=s}function a(t,e,r){this.__shapeObject=1,this.comp=t.comp,this.elem=t,this.offsetTime=t.data.st,this._lastIndex=0,this.keyframes=3===r?e.pt.k:e.ks.k,this.k=!0,this.kf=!0;var i=this.keyframes[0].s[0].i.length;this.keyframes[0].s[0].i[0].length;this.v=shape_pool.newShape(),this.v.setPathData(this.keyframes[0].s[0].c,i),this.pv=shape_pool.clone(this.v),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.paths.addShape(this.v),this.lastFrame=l,this.reset=s}function n(t,e,r,s){var n;if(3===r||4===r){var o=3===r?e.pt:e.ks,h=o.k;n=1===o.a||h.length?new a(t,e,r):new i(t,e,r)}else 5===r?n=new f(t,e):6===r?n=new p(t,e):7===r&&(n=new m(t,e));return n.k&&s.push(n),n}function o(){return i}function h(){return a}var l=-999999;i.prototype.interpolateShape=t,i.prototype.getValue=r,a.prototype.getValue=e,a.prototype.interpolateShape=t;var p=function(){function t(){var t=this.p.v[0],e=this.p.v[1],s=this.s.v[0]/2,i=this.s.v[1]/2;3!==this.d?(this.v.v[0][0]=t,this.v.v[0][1]=e-i,this.v.v[1][0]=t+s,this.v.v[1][1]=e,this.v.v[2][0]=t,this.v.v[2][1]=e+i,this.v.v[3][0]=t-s,this.v.v[3][1]=e,this.v.i[0][0]=t-s*r,this.v.i[0][1]=e-i,this.v.i[1][0]=t+s,this.v.i[1][1]=e-i*r,this.v.i[2][0]=t+s*r,this.v.i[2][1]=e+i,this.v.i[3][0]=t-s,this.v.i[3][1]=e+i*r,this.v.o[0][0]=t+s*r,this.v.o[0][1]=e-i,this.v.o[1][0]=t+s,this.v.o[1][1]=e+i*r,this.v.o[2][0]=t-s*r,this.v.o[2][1]=e+i,this.v.o[3][0]=t-s,this.v.o[3][1]=e-i*r):(this.v.v[0][0]=t,this.v.v[0][1]=e-i,this.v.v[1][0]=t-s,this.v.v[1][1]=e,this.v.v[2][0]=t,this.v.v[2][1]=e+i,this.v.v[3][0]=t+s,this.v.v[3][1]=e,this.v.i[0][0]=t+s*r,this.v.i[0][1]=e-i,this.v.i[1][0]=t-s,this.v.i[1][1]=e-i*r,this.v.i[2][0]=t-s*r,this.v.i[2][1]=e+i,this.v.i[3][0]=t+s,this.v.i[3][1]=e+i*r,this.v.o[0][0]=t-s*r,this.v.o[0][1]=e-i,this.v.o[1][0]=t-s,this.v.o[1][1]=e+i*r,this.v.o[2][0]=t+s*r,this.v.o[2][1]=e+i,this.v.o[3][0]=t+s,this.v.o[3][1]=e-i*r)}function e(t){var e,r=this.dynamicProperties.length;if(this.elem.globalData.frameId!==this.frameId){for(this.mdf=!1,this.frameId=this.elem.globalData.frameId,e=0;e<r;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertEllToPath()}}var r=roundCorner;return function(r,i){this.v=shape_pool.newShape(),this.v.setPathData(!0,4),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.paths=this.localShapeCollection,this.localShapeCollection.addShape(this.v),this.d=i.d,this.dynamicProperties=[],this.elem=r,this.comp=r.comp,this.frameId=-1,this.mdf=!1,this.getValue=e,this.convertEllToPath=t,this.reset=s,this.p=PropertyFactory.getProp(r,i.p,1,0,this.dynamicProperties),this.s=PropertyFactory.getProp(r,i.s,1,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertEllToPath()}}(),m=function(){function t(){var t,e=Math.floor(this.pt.v),r=2*Math.PI/e,s=this.or.v,i=this.os.v,a=2*Math.PI*s/(4*e),n=-Math.PI/2,o=3===this.data.d?-1:1;for(n+=this.r.v,this.v._length=0,t=0;t<e;t+=1){var h=s*Math.cos(n),l=s*Math.sin(n),p=0===h&&0===l?0:l/Math.sqrt(h*h+l*l),m=0===h&&0===l?0:-h/Math.sqrt(h*h+l*l);h+=+this.p.v[0],l+=+this.p.v[1],this.v.setTripleAt(h,l,h-p*a*i*o,l-m*a*i*o,h+p*a*i*o,l+m*a*i*o,t,!0),n+=r*o}this.paths.length=0,this.paths[0]=this.v}function e(){var t,e,r,s,i=2*Math.floor(this.pt.v),a=2*Math.PI/i,n=!0,o=this.or.v,h=this.ir.v,l=this.os.v,p=this.is.v,m=2*Math.PI*o/(2*i),f=2*Math.PI*h/(2*i),c=-Math.PI/2;c+=this.r.v;var d=3===this.data.d?-1:1;for(this.v._length=0,t=0;t<i;t+=1){e=n?o:h,r=n?l:p,s=n?m:f;var u=e*Math.cos(c),y=e*Math.sin(c),g=0===u&&0===y?0:y/Math.sqrt(u*u+y*y),v=0===u&&0===y?0:-u/Math.sqrt(u*u+y*y);u+=+this.p.v[0],y+=+this.p.v[1],this.v.setTripleAt(u,y,u-g*s*r*d,y-v*s*r*d,u+g*s*r*d,y+v*s*r*d,t,!0),n=!n,c+=a*d}}function r(){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.dynamicProperties[t].mdf&&(this.mdf=!0);this.mdf&&this.convertToPath()}}return function(i,a){this.v=shape_pool.newShape(),this.v.setPathData(!0,0),this.elem=i,this.comp=i.comp,this.data=a,this.frameId=-1,this.d=a.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=r,this.reset=s,1===a.sy?(this.ir=PropertyFactory.getProp(i,a.ir,0,0,this.dynamicProperties),this.is=PropertyFactory.getProp(i,a.is,0,.01,this.dynamicProperties),this.convertToPath=e):this.convertToPath=t,this.pt=PropertyFactory.getProp(i,a.pt,0,0,this.dynamicProperties),this.p=PropertyFactory.getProp(i,a.p,1,0,this.dynamicProperties),this.r=PropertyFactory.getProp(i,a.r,0,degToRads,this.dynamicProperties),this.or=PropertyFactory.getProp(i,a.or,0,0,this.dynamicProperties),this.os=PropertyFactory.getProp(i,a.os,0,.01,this.dynamicProperties),this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.dynamicProperties.length?this.k=!0:this.convertToPath()}}(),f=function(){function t(t){if(this.elem.globalData.frameId!==this.frameId){this.mdf=!1,this.frameId=this.elem.globalData.frameId;var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.mdf=!0);this.mdf&&this.convertRectToPath()}}function e(){var t=this.p.v[0],e=this.p.v[1],r=this.s.v[0]/2,s=this.s.v[1]/2,i=bm_min(r,s,this.r.v),a=i*(1-roundCorner);this.v._length=0,2===this.d||1===this.d?(this.v.setTripleAt(t+r,e-s+i,t+r,e-s+i,t+r,e-s+a,0,!0),this.v.setTripleAt(t+r,e+s-i,t+r,e+s-a,t+r,e+s-i,1,!0),0!==i?(this.v.setTripleAt(t+r-i,e+s,t+r-i,e+s,t+r-a,e+s,2,!0),this.v.setTripleAt(t-r+i,e+s,t-r+a,e+s,t-r+i,e+s,3,!0),this.v.setTripleAt(t-r,e+s-i,t-r,e+s-i,t-r,e+s-a,4,!0),this.v.setTripleAt(t-r,e-s+i,t-r,e-s+a,t-r,e-s+i,5,!0),this.v.setTripleAt(t-r+i,e-s,t-r+i,e-s,t-r+a,e-s,6,!0),this.v.setTripleAt(t+r-i,e-s,t+r-a,e-s,t+r-i,e-s,7,!0)):(this.v.setTripleAt(t-r,e+s,t-r+a,e+s,t-r,e+s,2),
this.v.setTripleAt(t-r,e-s,t-r,e-s+a,t-r,e-s,3))):(this.v.setTripleAt(t+r,e-s+i,t+r,e-s+a,t+r,e-s+i,0,!0),0!==i?(this.v.setTripleAt(t+r-i,e-s,t+r-i,e-s,t+r-a,e-s,1,!0),this.v.setTripleAt(t-r+i,e-s,t-r+a,e-s,t-r+i,e-s,2,!0),this.v.setTripleAt(t-r,e-s+i,t-r,e-s+i,t-r,e-s+a,3,!0),this.v.setTripleAt(t-r,e+s-i,t-r,e+s-a,t-r,e+s-i,4,!0),this.v.setTripleAt(t-r+i,e+s,t-r+i,e+s,t-r+a,e+s,5,!0),this.v.setTripleAt(t+r-i,e+s,t+r-a,e+s,t+r-i,e+s,6,!0),this.v.setTripleAt(t+r,e+s-i,t+r,e+s-i,t+r,e+s-a,7,!0)):(this.v.setTripleAt(t-r,e-s,t-r+a,e-s,t-r,e-s,1,!0),this.v.setTripleAt(t-r,e+s,t-r,e+s-a,t-r,e+s,2,!0),this.v.setTripleAt(t+r,e+s,t+r-a,e+s,t+r,e+s,3,!0)))}return function(r,i){this.v=shape_pool.newShape(),this.v.c=!0,this.localShapeCollection=shapeCollection_pool.newShapeCollection(),this.localShapeCollection.addShape(this.v),this.paths=this.localShapeCollection,this.elem=r,this.comp=r.comp,this.frameId=-1,this.d=i.d,this.dynamicProperties=[],this.mdf=!1,this.getValue=t,this.convertRectToPath=e,this.reset=s,this.p=PropertyFactory.getProp(r,i.p,1,0,this.dynamicProperties),this.s=PropertyFactory.getProp(r,i.s,1,0,this.dynamicProperties),this.r=PropertyFactory.getProp(r,i.r,0,0,this.dynamicProperties),this.dynamicProperties.length?this.k=!0:this.convertRectToPath()}}(),c={};return c.getShapeProp=n,c.getConstructorFunction=o,c.getKeyframedConstructorFunction=h,c}(),ShapeModifiers=function(){function t(t,e){s[t]||(s[t]=e)}function e(t,e,r,i){return new s[t](e,r,i)}var r={},s={};return r.registerModifier=t,r.getModifier=e,r}();ShapeModifier.prototype.initModifierProperties=function(){},ShapeModifier.prototype.addShapeToModifier=function(){},ShapeModifier.prototype.addShape=function(t){this.closed||(this.shapes.push({shape:t.sh,data:t,localShapeCollection:shapeCollection_pool.newShapeCollection()}),this.addShapeToModifier(t.sh))},ShapeModifier.prototype.init=function(t,e,r){this.elem=t,this.frameId=-1,this.shapes=[],this.dynamicProperties=[],this.mdf=!1,this.closed=!1,this.k=!1,this.comp=t.comp,this.initModifierProperties(t,e),this.dynamicProperties.length?(this.k=!0,r.push(this)):this.getValue(!0)},extendPrototype(ShapeModifier,TrimModifier),TrimModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=!!t,this.frameId=this.elem.globalData.frameId;var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0);if(this.mdf||t){var s=this.o.v%360/360;s<0&&(s+=1);var i=this.s.v+s,a=this.e.v+s;if(i>a){var n=i;i=a,a=n}this.sValue=i,this.eValue=a,this.oValue=s}}},TrimModifier.prototype.initModifierProperties=function(t,e){this.sValue=0,this.eValue=0,this.oValue=0,this.getValue=this.processKeys,this.s=PropertyFactory.getProp(t,e.s,0,.01,this.dynamicProperties),this.e=PropertyFactory.getProp(t,e.e,0,.01,this.dynamicProperties),this.o=PropertyFactory.getProp(t,e.o,0,0,this.dynamicProperties),this.m=e.m,this.dynamicProperties.length||this.getValue(!0)},TrimModifier.prototype.calculateShapeEdges=function(t,e,r,s,i){var a=[];e<=1?a.push({s:t,e:e}):t>=1?a.push({s:t-1,e:e-1}):(a.push({s:t,e:1}),a.push({s:0,e:e-1}));var n,o,h=[],l=a.length;for(n=0;n<l;n+=1)if(o=a[n],o.e*i<s||o.s*i>s+r);else{var p,m;p=o.s*i<=s?0:(o.s*i-s)/r,m=o.e*i>=s+r?1:(o.e*i-s)/r,h.push([p,m])}return h.length||h.push([0,0]),h},TrimModifier.prototype.processShapes=function(t){var e,r,s,i,a,n,o,h=this.shapes.length,l=this.sValue,p=this.eValue,m=0;if(p===l)for(r=0;r<h;r+=1)this.shapes[r].localShapeCollection.releaseShapes(),this.shapes[r].shape.mdf=!0,this.shapes[r].shape.paths=this.shapes[r].localShapeCollection;else if(1===p&&0===l||0===p&&1===l){if(this.mdf)for(r=0;r<h;r+=1)this.shapes[r].shape.mdf=!0}else{var f,c,d=[];for(r=0;r<h;r+=1)if(f=this.shapes[r],f.shape.mdf||this.mdf||t||2===this.m){if(e=f.shape.paths,i=e._length,o=0,!f.shape.mdf&&f.pathsData)o=f.totalShapeLength;else{for(a=[],s=0;s<i;s+=1)n=bez.getSegmentsLength(e.shapes[s]),a.push(n),o+=n.totalLength;f.totalShapeLength=o,f.pathsData=a}m+=o,f.shape.mdf=!0}else f.shape.paths=f.localShapeCollection;var s,i,u=l,y=p,g=0;for(r=h-1;r>=0;r-=1)if(f=this.shapes[r],f.shape.mdf){if(c=f.localShapeCollection,c.releaseShapes(),2===this.m&&h>1){var v=this.calculateShapeEdges(l,p,f.totalShapeLength,g,m);g+=f.totalShapeLength}else v=[[u,y]];for(i=v.length,s=0;s<i;s+=1){u=v[s][0],y=v[s][1],d.length=0,y<=1?d.push({s:f.totalShapeLength*u,e:f.totalShapeLength*y}):u>=1?d.push({s:f.totalShapeLength*(u-1),e:f.totalShapeLength*(y-1)}):(d.push({s:f.totalShapeLength*u,e:f.totalShapeLength}),d.push({s:0,e:f.totalShapeLength*(y-1)}));var b=this.addShapes(f,d[0]);if(d[0].s!==d[0].e){if(d.length>1)if(f.shape.v.c){var E=b.pop();this.addPaths(b,c),b=this.addShapes(f,d[1],E)}else this.addPaths(b,c),b=this.addShapes(f,d[1]);this.addPaths(b,c)}}f.shape.paths=c}}this.dynamicProperties.length||(this.mdf=!1)},TrimModifier.prototype.addPaths=function(t,e){var r,s=t.length;for(r=0;r<s;r+=1)e.addShape(t[r])},TrimModifier.prototype.addSegment=function(t,e,r,s,i,a,n){i.setXYAt(e[0],e[1],"o",a),i.setXYAt(r[0],r[1],"i",a+1),n&&i.setXYAt(t[0],t[1],"v",a),i.setXYAt(s[0],s[1],"v",a+1)},TrimModifier.prototype.addShapes=function(t,e,r){var s,i,a,n,o,h,l,p,m=t.pathsData,f=t.shape.paths.shapes,c=t.shape.paths._length,d=0,u=[],y=!0;for(r?(o=r._length,p=r._length):(r=shape_pool.newShape(),o=0,p=0),u.push(r),s=0;s<c;s+=1){for(h=m[s].lengths,r.c=f[s].c,a=f[s].c?h.length:h.length+1,i=1;i<a;i+=1)if(n=h[i-1],d+n.addedLength<e.s)d+=n.addedLength,r.c=!1;else{if(d>e.e){r.c=!1;break}e.s<=d&&e.e>=d+n.addedLength?(this.addSegment(f[s].v[i-1],f[s].o[i-1],f[s].i[i],f[s].v[i],r,o,y),y=!1):(l=bez.getNewSegment(f[s].v[i-1],f[s].v[i],f[s].o[i-1],f[s].i[i],(e.s-d)/n.addedLength,(e.e-d)/n.addedLength,h[i-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,r,o,y),y=!1,r.c=!1),d+=n.addedLength,o+=1}if(f[s].c){if(n=h[i-1],d<=e.e){var g=h[i-1].addedLength;e.s<=d&&e.e>=d+g?(this.addSegment(f[s].v[i-1],f[s].o[i-1],f[s].i[0],f[s].v[0],r,o,y),y=!1):(l=bez.getNewSegment(f[s].v[i-1],f[s].v[0],f[s].o[i-1],f[s].i[0],(e.s-d)/g,(e.e-d)/g,h[i-1]),this.addSegment(l.pt1,l.pt3,l.pt4,l.pt2,r,o,y),y=!1,r.c=!1)}else r.c=!1;d+=n.addedLength,o+=1}if(r._length&&(r.setXYAt(r.v[p][0],r.v[p][1],"i",p),r.setXYAt(r.v[r._length-1][0],r.v[r._length-1][1],"o",r._length-1)),d>e.e)break;s<c-1&&(r=shape_pool.newShape(),y=!0,u.push(r),o=0)}return u},ShapeModifiers.registerModifier("tm",TrimModifier),extendPrototype(ShapeModifier,RoundCornersModifier),RoundCornersModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=!!t,this.frameId=this.elem.globalData.frameId;var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},RoundCornersModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.rd=PropertyFactory.getProp(t,e.r,0,null,this.dynamicProperties),this.dynamicProperties.length||this.getValue(!0)},RoundCornersModifier.prototype.processPath=function(t,e){var r=shape_pool.newShape();r.c=t.c;var s,i,a,n,o,h,l,p,m,f,c,d,u,y=t._length,g=0;for(s=0;s<y;s+=1)i=t.v[s],n=t.o[s],a=t.i[s],i[0]===n[0]&&i[1]===n[1]&&i[0]===a[0]&&i[1]===a[1]?0!==s&&s!==y-1||t.c?(o=0===s?t.v[y-1]:t.v[s-1],h=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2)),l=h?Math.min(h/2,e)/h:0,p=d=i[0]+(o[0]-i[0])*l,m=u=i[1]-(i[1]-o[1])*l,f=p-(p-i[0])*roundCorner,c=m-(m-i[1])*roundCorner,r.setTripleAt(p,m,f,c,d,u,g),g+=1,o=s===y-1?t.v[0]:t.v[s+1],h=Math.sqrt(Math.pow(i[0]-o[0],2)+Math.pow(i[1]-o[1],2)),l=h?Math.min(h/2,e)/h:0,p=f=i[0]+(o[0]-i[0])*l,m=c=i[1]+(o[1]-i[1])*l,d=p-(p-i[0])*roundCorner,u=m-(m-i[1])*roundCorner,r.setTripleAt(p,m,f,c,d,u,g),g+=1):(r.setTripleAt(i[0],i[1],n[0],n[1],a[0],a[1],g),g+=1):(r.setTripleAt(t.v[s][0],t.v[s][1],t.o[s][0],t.o[s][1],t.i[s][0],t.i[s][1],g),g+=1);return r},RoundCornersModifier.prototype.processShapes=function(t){var e,r,s,i,a=this.shapes.length,n=this.rd.v;if(0!==n){var o,h,l;for(r=0;r<a;r+=1){if(o=this.shapes[r],h=o.shape.paths,l=o.localShapeCollection,o.shape.mdf||this.mdf||t)for(l.releaseShapes(),o.shape.mdf=!0,e=o.shape.paths.shapes,i=o.shape.paths._length,s=0;s<i;s+=1)l.addShape(this.processPath(e[s],n));o.shape.paths=o.localShapeCollection}}this.dynamicProperties.length||(this.mdf=!1)},ShapeModifiers.registerModifier("rd",RoundCornersModifier),RepeaterModifier.prototype.processKeys=function(t){if(this.elem.globalData.frameId!==this.frameId||t){this.mdf=!!t;var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}},RepeaterModifier.prototype.initModifierProperties=function(t,e){this.getValue=this.processKeys,this.c=PropertyFactory.getProp(t,e.c,0,null,this.dynamicProperties),this.o=PropertyFactory.getProp(t,e.o,0,null,this.dynamicProperties),this.tr=TransformPropertyFactory.getTransformProperty(t,e.tr,this.dynamicProperties),this.data=e,this.dynamicProperties.length||this.getValue(!0),this.pMatrix=new Matrix,this.rMatrix=new Matrix,this.sMatrix=new Matrix,this.tMatrix=new Matrix,this.matrix=new Matrix},RepeaterModifier.prototype.applyTransforms=function(t,e,r,s,i,a){var n=a?-1:1,o=s.s.v[0]+(1-s.s.v[0])*(1-i),h=s.s.v[1]+(1-s.s.v[1])*(1-i);t.translate(s.p.v[0]*n*i,s.p.v[1]*n*i,s.p.v[2]),e.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),e.rotate(-s.r.v*n*i),e.translate(s.a.v[0],s.a.v[1],s.a.v[2]),r.translate(-s.a.v[0],-s.a.v[1],s.a.v[2]),r.scale(a?1/o:o,a?1/h:h),r.translate(s.a.v[0],s.a.v[1],s.a.v[2])},RepeaterModifier.prototype.init=function(t,e,r,s,i){this.elem=t,this.arr=e,this.pos=r,this.elemsData=s,this._currentCopies=0,this._elements=[],this._groups=[],this.dynamicProperties=[],this.frameId=-1,this.initModifierProperties(t,e[r]);for(var a=0;r>0;)r-=1,this._elements.unshift(e[r]),a+=1;this.dynamicProperties.length?(this.k=!0,i.push(this)):this.getValue(!0)},RepeaterModifier.prototype.resetElements=function(t){var e,r=t.length;for(e=0;e<r;e+=1)t[e]._processed=!1,"gr"===t[e].ty&&this.resetElements(t[e].it)},RepeaterModifier.prototype.cloneElements=function(t){var e=(t.length,JSON.parse(JSON.stringify(t)));return this.resetElements(e),e},RepeaterModifier.prototype.changeGroupRender=function(t,e){var r,s=t.length;for(r=0;r<s;r+=1)t[r]._render=e,"gr"===t[r].ty&&this.changeGroupRender(t[r].it,e)},RepeaterModifier.prototype.processShapes=function(t){if(this.elem.globalData.frameId!==this.frameId&&(this.frameId=this.elem.globalData.frameId,this.dynamicProperties.length||t||(this.mdf=!1),this.mdf)){var e=Math.ceil(this.c.v);if(this._groups.length<e){for(;this._groups.length<e;){var r={it:this.cloneElements(this._elements),ty:"gr"};r.it.push({a:{a:0,ix:1,k:[0,0]},nm:"Transform",o:{a:0,ix:7,k:100},p:{a:0,ix:2,k:[0,0]},r:{a:0,ix:6,k:0},s:{a:0,ix:3,k:[100,100]},sa:{a:0,ix:5,k:0},sk:{a:0,ix:4,k:0},ty:"tr"}),this.arr.splice(0,0,r),this._groups.splice(0,0,r),this._currentCopies+=1}this.elem.reloadShapes()}var s,i,a=0;for(s=0;s<=this._groups.length-1;s+=1)i=a<e,this._groups[s]._render=i,this.changeGroupRender(this._groups[s].it,i),a+=1;this._currentCopies=e,this.elem.firstFrame=!0;var n=this.o.v,o=n%1,h=n>0?Math.floor(n):Math.ceil(n),l=(this.tr.v.props,this.pMatrix.props),p=this.rMatrix.props,m=this.sMatrix.props;this.pMatrix.reset(),this.rMatrix.reset(),this.sMatrix.reset(),this.tMatrix.reset(),this.matrix.reset();var f=0;if(n>0){for(;f<h;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),f+=1;o&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,o,!1),f+=o)}else if(n<0){for(;f>h;)this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!0),f-=1;o&&(this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,-o,!0),f-=o)}s=1===this.data.m?0:this._currentCopies-1;var c=1===this.data.m?1:-1;for(a=this._currentCopies;a;){if(0!==f){(0!==s&&1===c||s!==this._currentCopies-1&&c===-1)&&this.applyTransforms(this.pMatrix,this.rMatrix,this.sMatrix,this.tr,1,!1),this.matrix.transform(p[0],p[1],p[2],p[3],p[4],p[5],p[6],p[7],p[8],p[9],p[10],p[11],p[12],p[13],p[14],p[15]),this.matrix.transform(m[0],m[1],m[2],m[3],m[4],m[5],m[6],m[7],m[8],m[9],m[10],m[11],m[12],m[13],m[14],m[15]),this.matrix.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15]);var d,u=this.elemsData[s].it,y=u[u.length-1].transform.mProps.v.props,g=y.length;for(d=0;d<g;d+=1)y[d]=this.matrix.props[d];this.matrix.reset()}else{this.matrix.reset();var d,u=this.elemsData[s].it,y=u[u.length-1].transform.mProps.v.props,g=y.length;for(d=0;d<g;d+=1)y[d]=this.matrix.props[d]}f+=1,a-=1,s+=c}}},RepeaterModifier.prototype.addShape=function(){},ShapeModifiers.registerModifier("rp",RepeaterModifier),ShapeCollection.prototype.addShape=function(t){this._length===this._maxLength&&(this.shapes=this.shapes.concat(Array.apply(null,{length:this._maxLength})),this._maxLength*=2),this.shapes[this._length]=t,this._length+=1},ShapeCollection.prototype.releaseShapes=function(){var t;for(t=0;t<this._length;t+=1)shape_pool.release(this.shapes[t]);this._length=0},DashProperty.prototype.getValue=function(t){if(this.elem.globalData.frameId!==this.frameId||t){var e=0,r=this.dataProps.length;for(this.mdf=!1,this.frameId=this.elem.globalData.frameId;e<r;){if(this.dataProps[e].p.mdf){this.mdf=!t;break}e+=1}if(this.mdf||t)for("svg"===this.renderer&&(this.dashStr=""),e=0;e<r;e+=1)"o"!=this.dataProps[e].n?"svg"===this.renderer?this.dashStr+=" "+this.dataProps[e].p.v:this.dashArray[e]=this.dataProps[e].p.v:this.dashoffset[0]=this.dataProps[e].p.v}},GradientProperty.prototype.getValue=function(t){if(this.prop.getValue(),this.cmdf=!1,this.omdf=!1,this.prop.mdf||t){var e,r,s,i=4*this.data.p;for(e=0;e<i;e+=1)r=e%4===0?100:255,s=Math.round(this.prop.v[e]*r),this.c[e]!==s&&(this.c[e]=s,this.cmdf=!t);if(this.o.length)for(i=this.prop.v.length,e=4*this.data.p;e<i;e+=1)r=e%2===0?100:1,s=e%2===0?Math.round(100*this.prop.v[e]):this.prop.v[e],this.o[e-4*this.data.p]!==s&&(this.o[e-4*this.data.p]=s,this.omdf=!t)}};var ImagePreloader=function(){function t(){this.loadedAssets+=1,this.loadedAssets===this.totalImages&&this.imagesLoadedCb&&this.imagesLoadedCb(null)}function e(t){var e="";if(this.assetsPath){var r=t.p;r.indexOf("images/")!==-1&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e}function r(e){var r=document.createElement("img");r.addEventListener("load",t.bind(this),!1),r.addEventListener("error",t.bind(this),!1),r.src=e}function s(t,s){this.imagesLoadedCb=s,this.totalAssets=t.length;var i;for(i=0;i<this.totalAssets;i+=1)t[i].layers||(r.bind(this)(e.bind(this)(t[i])),this.totalImages+=1)}function i(t){this.path=t||""}function a(t){this.assetsPath=t||""}function n(){this.imagesLoadedCb=null}return function(){this.loadAssets=s,this.setAssetsPath=a,this.setPath=i,this.destroy=n,this.assetsPath="",this.path="",this.totalAssets=0,this.totalImages=0,this.loadedAssets=0,this.imagesLoadedCb=null}}(),featureSupport=function(){var t={maskType:!0};return(/MSIE 10/i.test(navigator.userAgent)||/MSIE 9/i.test(navigator.userAgent)||/rv:11.0/i.test(navigator.userAgent)||/Edge\/\d./i.test(navigator.userAgent))&&(t.maskType=!1),t}(),filtersFactory=function(){function t(t){var e=createNS("filter");return e.setAttribute("id",t),e.setAttribute("filterUnits","objectBoundingBox"),e.setAttribute("x","0%"),e.setAttribute("y","0%"),e.setAttribute("width","100%"),e.setAttribute("height","100%"),e}function e(){var t=createNS("feColorMatrix");return t.setAttribute("type","matrix"),t.setAttribute("color-interpolation-filters","sRGB"),t.setAttribute("values","0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"),t}var r={};return r.createFilter=t,r.createAlphaToLuminanceFilter=e,r}();TextAnimatorProperty.prototype.searchProperties=function(t){var e,r,s,i=this._textData.a.length,a=PropertyFactory.getProp;for(e=0;e<i;e+=1)s=this._textData.a[e],r={a:{},s:{}},"r"in s.a&&(r.a.r=a(this._elem,s.a.r,0,degToRads,this._dynamicProperties)),"rx"in s.a&&(r.a.rx=a(this._elem,s.a.rx,0,degToRads,this._dynamicProperties)),"ry"in s.a&&(r.a.ry=a(this._elem,s.a.ry,0,degToRads,this._dynamicProperties)),"sk"in s.a&&(r.a.sk=a(this._elem,s.a.sk,0,degToRads,this._dynamicProperties)),"sa"in s.a&&(r.a.sa=a(this._elem,s.a.sa,0,degToRads,this._dynamicProperties)),"s"in s.a&&(r.a.s=a(this._elem,s.a.s,1,.01,this._dynamicProperties)),"a"in s.a&&(r.a.a=a(this._elem,s.a.a,1,0,this._dynamicProperties)),"o"in s.a&&(r.a.o=a(this._elem,s.a.o,0,.01,this._dynamicProperties)),"p"in s.a&&(r.a.p=a(this._elem,s.a.p,1,0,this._dynamicProperties)),"sw"in s.a&&(r.a.sw=a(this._elem,s.a.sw,0,0,this._dynamicProperties)),"sc"in s.a&&(r.a.sc=a(this._elem,s.a.sc,1,0,this._dynamicProperties)),"fc"in s.a&&(r.a.fc=a(this._elem,s.a.fc,1,0,this._dynamicProperties)),"fh"in s.a&&(r.a.fh=a(this._elem,s.a.fh,0,0,this._dynamicProperties)),"fs"in s.a&&(r.a.fs=a(this._elem,s.a.fs,0,.01,this._dynamicProperties)),"fb"in s.a&&(r.a.fb=a(this._elem,s.a.fb,0,.01,this._dynamicProperties)),"t"in s.a&&(r.a.t=a(this._elem,s.a.t,0,0,this._dynamicProperties)),r.s=TextSelectorProp.getTextSelectorProp(this._elem,s.s,this._dynamicProperties),r.s.t=s.s.t,this._animatorsData[e]=r;this._textData.p&&"m"in this._textData.p?(this._pathData={f:a(this._elem,this._textData.p.f,0,0,this._dynamicProperties),l:a(this._elem,this._textData.p.l,0,0,this._dynamicProperties),r:this._textData.p.r,m:this._elem.maskManager.getMaskProperty(this._textData.p.m)},this._hasMaskedPath=!0):this._hasMaskedPath=!1,this._moreOptions.alignment=a(this._elem,this._textData.m.a,1,0,this._dynamicProperties),this._dynamicProperties.length&&t.push(this)},TextAnimatorProperty.prototype.getMeasures=function(t,e){if(this.lettersChangedFlag=e,this.mdf||this._firstFrame||e||this._hasMaskedPath&&this._pathData.m.mdf){this._firstFrame=!1;var r,s,i,a,n=this._moreOptions.alignment.v,o=this._animatorsData,h=this._textData,l=this.mHelper,p=this._renderType,m=this.renderedLetters.length,f=(this.data,t.l);if(this._hasMaskedPath){var c=this._pathData.m;if(!this._pathData.n||this._pathData.mdf){var d=c.v;this._pathData.r&&(d=d.reverse());var u={tLength:0,segments:[]};a=d._length-1;var y,g=0;for(i=0;i<a;i+=1)y={s:d.v[i],e:d.v[i+1],to:[d.o[i][0]-d.v[i][0],d.o[i][1]-d.v[i][1]],ti:[d.i[i+1][0]-d.v[i+1][0],d.i[i+1][1]-d.v[i+1][1]]},bez.buildBezierData(y),u.tLength+=y.bezierData.segmentLength,u.segments.push(y),g+=y.bezierData.segmentLength;i=a,c.v.c&&(y={s:d.v[i],e:d.v[0],to:[d.o[i][0]-d.v[i][0],d.o[i][1]-d.v[i][1]],ti:[d.i[0][0]-d.v[0][0],d.i[0][1]-d.v[0][1]]},bez.buildBezierData(y),u.tLength+=y.bezierData.segmentLength,u.segments.push(y),g+=y.bezierData.segmentLength),this._pathData.pi=u}var v,b,E,u=this._pathData.pi,P=this._pathData.f.v,x=0,C=1,S=0,A=!0,k=u.segments;if(P<0&&c.v.c)for(u.tLength<Math.abs(P)&&(P=-Math.abs(P)%u.tLength),x=k.length-1,E=k[x].bezierData.points,C=E.length-1;P<0;)P+=E[C].partialLength,C-=1,C<0&&(x-=1,E=k[x].bezierData.points,C=E.length-1);E=k[x].bezierData.points,b=E[C-1],v=E[C];var M,T,D=v.partialLength}a=f.length,r=0,s=0;var w,_,I,F,V,R=1.2*t.s*.714,B=!0;F=o.length;var L,N,O,G,H,z,j,W,Y,X,q,U,J,Z=-1,K=P,Q=x,$=C,tt=-1,et=0,rt="",st=this.defaultPropsArray;for(i=0;i<a;i+=1){if(l.reset(),H=1,f[i].n)r=0,s+=t.yOffset,s+=B?1:0,P=K,B=!1,et=0,this._hasMaskedPath&&(x=Q,C=$,E=k[x].bezierData.points,b=E[C-1],v=E[C],D=v.partialLength,S=0),J=X=U=rt="",st=this.defaultPropsArray;else{if(this._hasMaskedPath){if(tt!==f[i].line){switch(t.j){case 1:P+=g-t.lineWidths[f[i].line];break;case 2:P+=(g-t.lineWidths[f[i].line])/2}tt=f[i].line}Z!==f[i].ind&&(f[Z]&&(P+=f[Z].extra),P+=f[i].an/2,Z=f[i].ind),P+=n[0]*f[i].an/200;var it=0;for(I=0;I<F;I+=1)w=o[I].a,"p"in w&&(_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),it+=L.length?w.p.v[0]*L[0]:w.p.v[0]*L),"a"in w&&(_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),it+=L.length?w.a.v[0]*L[0]:w.a.v[0]*L);for(A=!0;A;)S+D>=P+it||!E?(M=(P+it-S)/v.partialLength,O=b.point[0]+(v.point[0]-b.point[0])*M,G=b.point[1]+(v.point[1]-b.point[1])*M,l.translate(-n[0]*f[i].an/200,-(n[1]*R/100)),A=!1):E&&(S+=v.partialLength,C+=1,C>=E.length&&(C=0,x+=1,k[x]?E=k[x].bezierData.points:c.v.c?(C=0,x=0,E=k[x].bezierData.points):(S-=v.partialLength,E=null)),E&&(b=v,v=E[C],D=v.partialLength));N=f[i].an/2-f[i].add,l.translate(-N,0,0)}else N=f[i].an/2-f[i].add,l.translate(-N,0,0),l.translate(-n[0]*f[i].an/200,-n[1]*R/100,0);for(et+=f[i].l/2,I=0;I<F;I+=1)w=o[I].a,"t"in w&&(_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),this._hasMaskedPath?P+=L.length?w.t*L[0]:w.t*L:r+=L.length?w.t.v*L[0]:w.t.v*L);for(et+=f[i].l/2,t.strokeWidthAnim&&(j=t.sw||0),t.strokeColorAnim&&(z=t.sc?[t.sc[0],t.sc[1],t.sc[2]]:[0,0,0]),t.fillColorAnim&&t.fc&&(W=[t.fc[0],t.fc[1],t.fc[2]]),I=0;I<F;I+=1)w=o[I].a,"a"in w&&(_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),L.length?l.translate(-w.a.v[0]*L[0],-w.a.v[1]*L[1],w.a.v[2]*L[2]):l.translate(-w.a.v[0]*L,-w.a.v[1]*L,w.a.v[2]*L));for(I=0;I<F;I+=1)w=o[I].a,"s"in w&&(_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),L.length?l.scale(1+(w.s.v[0]-1)*L[0],1+(w.s.v[1]-1)*L[1],1):l.scale(1+(w.s.v[0]-1)*L,1+(w.s.v[1]-1)*L,1));for(I=0;I<F;I+=1){if(w=o[I].a,_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),"sk"in w&&(L.length?l.skewFromAxis(-w.sk.v*L[0],w.sa.v*L[1]):l.skewFromAxis(-w.sk.v*L,w.sa.v*L)),"r"in w&&(L.length?l.rotateZ(-w.r.v*L[2]):l.rotateZ(-w.r.v*L)),"ry"in w&&(L.length?l.rotateY(w.ry.v*L[1]):l.rotateY(w.ry.v*L)),"rx"in w&&(L.length?l.rotateX(w.rx.v*L[0]):l.rotateX(w.rx.v*L)),"o"in w&&(H+=L.length?(w.o.v*L[0]-H)*L[0]:(w.o.v*L-H)*L),t.strokeWidthAnim&&"sw"in w&&(j+=L.length?w.sw.v*L[0]:w.sw.v*L),t.strokeColorAnim&&"sc"in w)for(Y=0;Y<3;Y+=1)L.length?z[Y]=z[Y]+(w.sc.v[Y]-z[Y])*L[0]:z[Y]=z[Y]+(w.sc.v[Y]-z[Y])*L;if(t.fillColorAnim&&t.fc){if("fc"in w)for(Y=0;Y<3;Y+=1)L.length?W[Y]=W[Y]+(w.fc.v[Y]-W[Y])*L[0]:W[Y]=W[Y]+(w.fc.v[Y]-W[Y])*L;"fh"in w&&(W=L.length?addHueToRGB(W,w.fh.v*L[0]):addHueToRGB(W,w.fh.v*L)),"fs"in w&&(W=L.length?addSaturationToRGB(W,w.fs.v*L[0]):addSaturationToRGB(W,w.fs.v*L)),"fb"in w&&(W=L.length?addBrightnessToRGB(W,w.fb.v*L[0]):addBrightnessToRGB(W,w.fb.v*L))}}for(I=0;I<F;I+=1)w=o[I].a,"p"in w&&(_=o[I].s,L=_.getMult(f[i].anIndexes[I],h.a[I].s.totalChars),this._hasMaskedPath?L.length?l.translate(0,w.p.v[1]*L[0],-w.p.v[2]*L[1]):l.translate(0,w.p.v[1]*L,-w.p.v[2]*L):L.length?l.translate(w.p.v[0]*L[0],w.p.v[1]*L[1],-w.p.v[2]*L[2]):l.translate(w.p.v[0]*L,w.p.v[1]*L,-w.p.v[2]*L));if(t.strokeWidthAnim&&(X=j<0?0:j),t.strokeColorAnim&&(q="rgb("+Math.round(255*z[0])+","+Math.round(255*z[1])+","+Math.round(255*z[2])+")"),t.fillColorAnim&&t.fc&&(U="rgb("+Math.round(255*W[0])+","+Math.round(255*W[1])+","+Math.round(255*W[2])+")"),this._hasMaskedPath){if(l.translate(0,-t.ls),l.translate(0,n[1]*R/100+s,0),h.p.p){T=(v.point[1]-b.point[1])/(v.point[0]-b.point[0]);var at=180*Math.atan(T)/Math.PI;v.point[0]<b.point[0]&&(at+=180),l.rotate(-at*Math.PI/180)}l.translate(O,G,0),P-=n[0]*f[i].an/200,f[i+1]&&Z!==f[i+1].ind&&(P+=f[i].an/2,P+=t.tr/1e3*t.s)}else{switch(l.translate(r,s,0),t.ps&&l.translate(t.ps[0],t.ps[1]+t.ascent,0),t.j){case 1:l.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[f[i].line]),0,0);break;case 2:l.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[f[i].line])/2,0,0)}l.translate(0,-t.ls),l.translate(N,0,0),l.translate(n[0]*f[i].an/200,n[1]*R/100,0),r+=f[i].l+t.tr/1e3*t.s}"html"===p?rt=l.toCSS():"svg"===p?rt=l.to2dCSS():st=[l.props[0],l.props[1],l.props[2],l.props[3],l.props[4],l.props[5],l.props[6],l.props[7],l.props[8],l.props[9],l.props[10],l.props[11],l.props[12],l.props[13],l.props[14],l.props[15]],J=H}m<=i?(V=new LetterProps(J,X,q,U,rt,st),this.renderedLetters.push(V),m+=1,this.lettersChangedFlag=!0):(V=this.renderedLetters[i],this.lettersChangedFlag=V.update(J,X,q,U,rt,st)||this.lettersChangedFlag)}}},TextAnimatorProperty.prototype.getValue=function(){if(this._elem.globalData.frameId!==this._frameId){this._frameId=this._elem.globalData.frameId;var t,e=this._dynamicProperties.length;for(this.mdf=!1,t=0;t<e;t+=1)this._dynamicProperties[t].getValue(),this.mdf=this._dynamicProperties[t].mdf||this.mdf}},TextAnimatorProperty.prototype.mHelper=new Matrix,TextAnimatorProperty.prototype.defaultPropsArray=[],LetterProps.prototype.update=function(t,e,r,s,i,a){this.mdf.o=!1,this.mdf.sw=!1,this.mdf.sc=!1,this.mdf.fc=!1,this.mdf.m=!1,this.mdf.p=!1;var n=!1;return this.o!==t&&(this.o=t,this.mdf.o=!0,n=!0),this.sw!==e&&(this.sw=e,this.mdf.sw=!0,n=!0),this.sc!==r&&(this.sc=r,this.mdf.sc=!0,n=!0),this.fc!==s&&(this.fc=s,this.mdf.fc=!0,n=!0),this.m!==i&&(this.m=i,this.mdf.m=!0,n=!0),!a.length||this.p[0]===a[0]&&this.p[1]===a[1]&&this.p[4]===a[4]&&this.p[5]===a[5]&&this.p[12]===a[12]&&this.p[13]===a[13]||(this.p=a,this.mdf.p=!0,n=!0),n},TextProperty.prototype.setCurrentData=function(t){var e=this.currentData;e.ascent=t.ascent,e.boxWidth=t.boxWidth?t.boxWidth:e.boxWidth,e.f=t.f,e.fStyle=t.fStyle,e.fWeight=t.fWeight,e.fc=t.fc,e.j=t.j,e.justifyOffset=t.justifyOffset,e.l=t.l,e.lh=t.lh,e.lineWidths=t.lineWidths,e.ls=t.ls,e.of=t.of,e.s=t.s,e.sc=t.sc,e.sw=t.sw,e.sz=t.sz,e.ps=t.ps,e.t=t.t,e.tr=t.tr,e.fillColorAnim=t.fillColorAnim||e.fillColorAnim,e.strokeColorAnim=t.strokeColorAnim||e.strokeColorAnim,e.strokeWidthAnim=t.strokeWidthAnim||e.strokeWidthAnim,e.yOffset=t.yOffset,e.__complete=!1},TextProperty.prototype.searchProperty=function(){return this.kf=this.data.d.k.length>1,this.kf},TextProperty.prototype.getValue=function(){this.mdf=!1;var t=this.elem.globalData.frameId;if(t!==this._frameId&&this.kf||this.firstFrame){for(var e,r=this.data.d.k,s=0,i=r.length;s<=i-1&&(e=r[s].s,!(s===i-1||r[s+1].t>t));)s+=1;this.keysIndex!==s&&(e.__complete||this.completeTextData(e),this.setCurrentData(e),this.mdf=!this.firstFrame,this.pv=this.v=this.currentData.t,this.keysIndex=s),this._frameId=t}},TextProperty.prototype.completeTextData=function(t){t.__complete=!0;var e,r,s,i,a,n,o,h=this.elem.globalData.fontManager,l=this.data,p=[],m=0,f=l.m.g,c=0,d=0,u=0,y=[],g=0,v=0,b=h.getFontByName(t.f),E=0,P=b.fStyle.split(" "),x="normal",C="normal";r=P.length;var S;for(e=0;e<r;e+=1)switch(S=P[e].toLowerCase()){case"italic":C="italic";break;case"bold":x="700";break;case"black":x="900";break;case"medium":x="500";break;case"regular":case"normal":x="400";case"light":case"thin":x="200"}t.fWeight=x,t.fStyle=C,r=t.t.length;var A=t.tr/1e3*t.s;if(t.sz){var k=t.sz[0],M=-1;for(e=0;e<r;e+=1)s=!1," "===t.t.charAt(e)?M=e:13===t.t.charCodeAt(e)&&(g=0,s=!0),h.chars?(o=h.getCharData(t.t.charAt(e),b.fStyle,b.fFamily),E=s?0:o.w*t.s/100):E=h.measureText(t.t.charAt(e),t.f,t.s),g+E>k&&" "!==t.t.charAt(e)?(M===-1?r+=1:e=M,t.t=t.t.substr(0,e)+"\r"+t.t.substr(e===M?e+1:e),M=-1,g=0):(g+=E,g+=A);r=t.t.length}g=-A,E=0;var T,D=0;for(e=0;e<r;e+=1)if(s=!1,T=t.t.charAt(e)," "===T?i="\xa0":13===T.charCodeAt(0)?(D=0,y.push(g),v=g>v?g:v,g=-2*A,i="",s=!0,u+=1):i=t.t.charAt(e),h.chars?(o=h.getCharData(T,b.fStyle,h.getFontByName(t.f).fFamily),E=s?0:o.w*t.s/100):E=h.measureText(i,t.f,t.s)," "===T?D+=E+A:(g+=E+A+D,D=0),p.push({l:E,an:E,add:c,n:s,anIndexes:[],val:i,line:u}),2==f){if(c+=E,""==i||"\xa0"==i||e==r-1){for(""!=i&&"\xa0"!=i||(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;m+=1,c=0}}else if(3==f){if(c+=E,""==i||e==r-1){for(""==i&&(c-=E);d<=e;)p[d].an=c,p[d].ind=m,p[d].extra=E,d+=1;c=0,m+=1}}else p[m].ind=m,p[m].extra=0,m+=1;if(t.l=p,v=g>v?g:v,y.push(g),t.sz)t.boxWidth=t.sz[0],t.justifyOffset=0;else switch(t.boxWidth=v,t.j){case 1:t.justifyOffset=-t.boxWidth;break;case 2:t.justifyOffset=-t.boxWidth/2;break;default:t.justifyOffset=0}t.lineWidths=y;var w,_,I=l.a;n=I.length;var F,V,R=[];for(a=0;a<n;a+=1){for(w=I[a],w.a.sc&&(t.strokeColorAnim=!0),w.a.sw&&(t.strokeWidthAnim=!0),(w.a.fc||w.a.fh||w.a.fs||w.a.fb)&&(t.fillColorAnim=!0),V=0,F=w.s.b,e=0;e<r;e+=1)_=p[e],_.anIndexes[a]=V,(1==F&&""!=_.val||2==F&&""!=_.val&&"\xa0"!=_.val||3==F&&(_.n||"\xa0"==_.val||e==r-1)||4==F&&(_.n||e==r-1))&&(1===w.s.rn&&R.push(V),V+=1);l.a[a].s.totalChars=V;var B,L=-1;if(1===w.s.rn)for(e=0;e<r;e+=1)_=p[e],L!=_.anIndexes[a]&&(L=_.anIndexes[a],B=R.splice(Math.floor(Math.random()*R.length),1)[0]),_.anIndexes[a]=B}t.yOffset=t.lh||1.2*t.s,t.ls=t.ls||0,t.ascent=b.ascent*t.s/100},TextProperty.prototype.updateDocumentData=function(t,e){e=void 0===e?this.keysIndex:e;var r=this.data.d.k[e].s;r.__complete=!1,r.t=t.t,this.keysIndex=-1,this.firstFrame=!0,this.getValue()};var TextSelectorProp=function(){function t(t){if(this.mdf=t||!1,this.dynamicProperties.length){var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.mdf=!0)}var s=this.elem.textProperty.currentData?this.elem.textProperty.currentData.l.length:0;t&&2===this.data.r&&(this.e.v=s);var i=2===this.data.r?1:100/s,a=this.o.v/i,n=this.s.v/i+a,o=this.e.v/i+a;if(n>o){var h=n;n=o,o=h}this.finalS=n,this.finalE=o}function e(t){var e=BezierFactory.getBezierEasing(this.ne.v/100,0,1-this.xe.v/100,1).get,r=0,s=this.finalS,o=this.finalE,h=this.data.sh;if(2==h)r=o===s?t>=o?1:0:i(0,a(.5/(o-s)+(t-s)/(o-s),1)),r=e(r);else if(3==h)r=o===s?t>=o?0:1:1-i(0,a(.5/(o-s)+(t-s)/(o-s),1)),r=e(r);else if(4==h)o===s?r=0:(r=i(0,a(.5/(o-s)+(t-s)/(o-s),1)),r<.5?r*=2:r=1-2*(r-.5)),r=e(r);else if(5==h){if(o===s)r=0;else{var l=o-s;t=a(i(0,t+.5-s),o-s);var p=-l/2+t,m=l/2;r=Math.sqrt(1-p*p/(m*m))}r=e(r)}else 6==h?(o===s?r=0:(t=a(i(0,t+.5-s),o-s),r=(1+Math.cos(Math.PI+2*Math.PI*t/(o-s)))/2),r=e(r)):(t>=n(s)&&(r=t-s<0?1-(s-t):i(0,a(o-t,1))),r=e(r));return r*this.a.v}function r(r,s,i){this.mdf=!1,this.k=!1,this.data=s,this.dynamicProperties=[],this.getValue=t,this.getMult=e,this.elem=r,this.comp=r.comp,this.finalS=0,this.finalE=0,this.s=PropertyFactory.getProp(r,s.s||{k:0},0,0,this.dynamicProperties),"e"in s?this.e=PropertyFactory.getProp(r,s.e,0,0,this.dynamicProperties):this.e={v:100},this.o=PropertyFactory.getProp(r,s.o||{k:0},0,0,this.dynamicProperties),this.xe=PropertyFactory.getProp(r,s.xe||{k:0},0,0,this.dynamicProperties),this.ne=PropertyFactory.getProp(r,s.ne||{k:0},0,0,this.dynamicProperties),this.a=PropertyFactory.getProp(r,s.a,0,.01,this.dynamicProperties),this.dynamicProperties.length?i.push(this):this.getValue()}function s(t,e,s){return new r(t,e,s)}var i=Math.max,a=Math.min,n=Math.floor;return{getTextSelectorProp:s}}(),pooling=function(){function t(t){return t.concat(Array.apply(null,{length:t.length}))}return{"double":t}}(),point_pool=function(){function t(){var t;return s?(s-=1,t=a[s]):t=createTypedArray("float32",2),t}function e(t){s===i&&(a=pooling["double"](a),i=2*i),a[s]=t,s+=1}var r={newPoint:t,release:e},s=0,i=8,a=Array.apply(null,{length:i});return r}(),shape_pool=function(){function t(){var t;return a?(a-=1,t=o[a]):t=new ShapePath,t}function e(t){a===n&&(o=pooling["double"](o),n=2*n);var e,r=t._length;for(e=0;e<r;e+=1)point_pool.release(t.v[e]),point_pool.release(t.i[e]),point_pool.release(t.o[e]),t.v[e]=null,t.i[e]=null,t.o[e]=null;t._length=0,t.c=!1,o[a]=t,a+=1}function r(t,r){for(;r--;)e(t[r])}function s(e,r){var s,i=void 0===e._length?e.v.length:e._length,a=t();a.setLength(i),a.c=e.c;var n;for(s=0;s<i;s+=1)r?(n=r.applyToPointArray(e.v[s][0],e.v[s][1],0,2),a.setXYAt(n[0],n[1],"v",s),point_pool.release(n),n=r.applyToPointArray(e.o[s][0],e.o[s][1],0,2),a.setXYAt(n[0],n[1],"o",s),point_pool.release(n),n=r.applyToPointArray(e.i[s][0],e.i[s][1],0,2),a.setXYAt(n[0],n[1],"i",s),point_pool.release(n)):a.setTripleAt(e.v[s][0],e.v[s][1],e.o[s][0],e.o[s][1],e.i[s][0],e.i[s][1],s);return a}var i={clone:s,newShape:t,release:e,releaseArray:r},a=0,n=4,o=Array.apply(null,{length:n});return i}(),shapeCollection_pool=function(){function t(){var t;return i?(i-=1,t=n[i]):t=new ShapeCollection,t}function e(t){var e,r=t._length;for(e=0;e<r;e+=1)shape_pool.release(t.shapes[e]);t._length=0,i===a&&(n=pooling["double"](n),a=2*a),n[i]=t,i+=1}function r(t,r){e(t),i===a&&(n=pooling["double"](n),a=2*a),n[i]=t,i+=1}var s={newShapeCollection:t,release:e,clone:r},i=0,a=4,n=Array.apply(null,{length:a});return s}();BaseRenderer.prototype.checkLayers=function(t){var e,r,s=this.layers.length;
for(this.completeLayers=!0,e=s-1;e>=0;e--)this.elements[e]||(r=this.layers[e],r.ip-r.st<=t-this.layers[e].st&&r.op-r.st>t-this.layers[e].st&&this.buildItem(e)),this.completeLayers=!!this.elements[e]&&this.completeLayers;this.checkPendingElements()},BaseRenderer.prototype.createItem=function(t){switch(t.ty){case 2:return this.createImage(t);case 0:return this.createComp(t);case 1:return this.createSolid(t);case 4:return this.createShape(t);case 5:return this.createText(t);case 13:return this.createCamera(t);case 99:return null}return this.createBase(t)},BaseRenderer.prototype.createCamera=function(){throw new Error("You're using a 3d camera. Try the html renderer.")},BaseRenderer.prototype.buildAllItems=function(){var t,e=this.layers.length;for(t=0;t<e;t+=1)this.buildItem(t);this.checkPendingElements()},BaseRenderer.prototype.includeLayers=function(t){this.completeLayers=!1;var e,r,s=t.length,i=this.layers.length;for(e=0;e<s;e+=1)for(r=0;r<i;){if(this.layers[r].id==t[e].id){this.layers[r]=t[e];break}r+=1}},BaseRenderer.prototype.setProjectInterface=function(t){this.globalData.projectInterface=t},BaseRenderer.prototype.initItems=function(){this.globalData.progressiveLoad||this.buildAllItems()},BaseRenderer.prototype.buildElementParenting=function(t,e,r){r=r||[];for(var s=this.elements,i=this.layers,a=0,n=i.length;a<n;)i[a].ind==e&&(s[a]&&s[a]!==!0?void 0!==i[a].parent?(r.push(s[a]),s[a]._isParent=!0,this.buildElementParenting(t,i[a].parent,r)):(r.push(s[a]),s[a]._isParent=!0,t.setHierarchy(r)):(this.buildItem(a),this.addPendingElement(t))),a+=1},BaseRenderer.prototype.addPendingElement=function(t){this.pendingElements.push(t)},extendPrototype(BaseRenderer,SVGRenderer),SVGRenderer.prototype.createBase=function(t){return new SVGBaseElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createShape=function(t){return new IShapeElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createText=function(t){return new SVGTextElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createImage=function(t){return new IImageElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createComp=function(t){return new ICompElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.createSolid=function(t){return new ISolidElement(t,this.layerElement,this.globalData,this)},SVGRenderer.prototype.configAnimation=function(t){this.layerElement=createNS("svg"),this.layerElement.setAttribute("xmlns","http://www.w3.org/2000/svg"),this.renderConfig.viewBoxSize?this.layerElement.setAttribute("viewBox",this.renderConfig.viewBoxSize):this.layerElement.setAttribute("viewBox","0 0 "+t.w+" "+t.h),this.renderConfig.viewBoxOnly||(this.layerElement.setAttribute("width",t.w),this.layerElement.setAttribute("height",t.h),this.layerElement.style.width="100%",this.layerElement.style.height="100%"),this.renderConfig.className&&this.layerElement.setAttribute("class",this.renderConfig.className),this.layerElement.setAttribute("preserveAspectRatio",this.renderConfig.preserveAspectRatio),this.animationItem.wrapper.appendChild(this.layerElement);var e=createNS("defs");this.globalData.defs=e,this.layerElement.appendChild(e),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.globalData.frameId=0,this.globalData.nm=t.nm,this.globalData.compSize={w:t.w,h:t.h},this.data=t,this.globalData.frameRate=t.fr;var r=createNS("clipPath"),s=createNS("rect");s.setAttribute("width",t.w),s.setAttribute("height",t.h),s.setAttribute("x",0),s.setAttribute("y",0);var i="animationMask_"+randomString(10);r.setAttribute("id",i),r.appendChild(s);var a=createNS("g");a.setAttribute("clip-path","url("+locationHref+"#"+i+")"),this.layerElement.appendChild(a),e.appendChild(r),this.layerElement=a,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,e),this.elements=Array.apply(null,{length:t.layers.length})},SVGRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.layerElement=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},SVGRenderer.prototype.updateContainerSize=function(){},SVGRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){e[t]=!0;var r=this.createItem(this.layers[t]);e[t]=r,expressionsPlugin&&(0===this.layers[t].ty&&this.globalData.projectInterface.registerComposition(r),r.initExpressions()),this.appendElementInPos(r,t),this.layers[t].tt&&(this.elements[t-1]&&this.elements[t-1]!==!0?r.setMatte(e[t-1].layerId):(this.buildItem(t-1),this.addPendingElement(r)))}},SVGRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();if(t.checkParenting(),t.data.tt)for(var e=0,r=this.elements.length;e<r;){if(this.elements[e]===t){t.setMatte(this.elements[e-1].layerId);break}e+=1}}},SVGRenderer.prototype.renderFrame=function(t){if(this.renderedFrame!=t&&!this.destroyed){null===t?t=this.renderedFrame:this.renderedFrame=t,this.globalData.frameNum=t,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t;var e,r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=r-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=r-1;e>=0;e--)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}},SVGRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){for(var s,i=0;i<e;)this.elements[i]&&this.elements[i]!==!0&&this.elements[i].getBaseElement()&&(s=this.elements[i].getBaseElement()),i+=1;s?this.layerElement.insertBefore(r,s):this.layerElement.appendChild(r)}},SVGRenderer.prototype.hide=function(){this.layerElement.style.display="none"},SVGRenderer.prototype.show=function(){this.layerElement.style.display="block"},SVGRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length,s=createNS("g");for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e],s,this.globalData.comp,null);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},MaskElement.prototype.getMaskProperty=function(t){return this.viewData[t].prop},MaskElement.prototype.prepareFrame=function(){var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue()},MaskElement.prototype.renderFrame=function(t){var e,r=this.masksProperties.length;for(e=0;e<r;e++)if((this.viewData[e].prop.mdf||this.firstFrame)&&this.drawPath(this.masksProperties[e],this.viewData[e].prop.v,this.viewData[e]),(this.viewData[e].op.mdf||this.firstFrame)&&this.viewData[e].elem.setAttribute("fill-opacity",this.viewData[e].op.v),"n"!==this.masksProperties[e].mode&&(this.viewData[e].invRect&&(this.element.finalTransform.mProp.mdf||this.firstFrame)&&(this.viewData[e].invRect.setAttribute("x",-t.props[12]),this.viewData[e].invRect.setAttribute("y",-t.props[13])),this.storedData[e].x&&(this.storedData[e].x.mdf||this.firstFrame))){var s=this.storedData[e].expan;this.storedData[e].x.v<0?("erode"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="erode",this.storedData[e].elem.setAttribute("filter","url("+locationHref+"#"+this.storedData[e].filterId+")")),s.setAttribute("radius",-this.storedData[e].x.v)):("dilate"!==this.storedData[e].lastOperator&&(this.storedData[e].lastOperator="dilate",this.storedData[e].elem.setAttribute("filter",null)),this.storedData[e].elem.setAttribute("stroke-width",2*this.storedData[e].x.v))}this.firstFrame=!1},MaskElement.prototype.getMaskelement=function(){return this.maskElement},MaskElement.prototype.createLayerSolidPath=function(){var t="M0,0 ";return t+=" h"+this.globalData.compSize.w,t+=" v"+this.globalData.compSize.h,t+=" h-"+this.globalData.compSize.w,t+=" v-"+this.globalData.compSize.h+" "},MaskElement.prototype.drawPath=function(t,e,r){var s,i,a=" M"+e.v[0][0]+","+e.v[0][1];for(i=e._length,s=1;s<i;s+=1)a+=" C"+bm_rnd(e.o[s-1][0])+","+bm_rnd(e.o[s-1][1])+" "+bm_rnd(e.i[s][0])+","+bm_rnd(e.i[s][1])+" "+bm_rnd(e.v[s][0])+","+bm_rnd(e.v[s][1]);e.c&&i>1&&(a+=" C"+bm_rnd(e.o[s-1][0])+","+bm_rnd(e.o[s-1][1])+" "+bm_rnd(e.i[0][0])+","+bm_rnd(e.i[0][1])+" "+bm_rnd(e.v[0][0])+","+bm_rnd(e.v[0][1])),r.lastPath!==a&&(r.elem&&(e.c?t.inv?r.elem.setAttribute("d",this.solidPath+a):r.elem.setAttribute("d",a):r.elem.setAttribute("d","")),r.lastPath=a)},MaskElement.prototype.destroy=function(){this.element=null,this.globalData=null,this.maskElement=null,this.data=null,this.masksProperties=null},BaseElement.prototype.checkMasks=function(){if(!this.data.hasMask)return!1;for(var t=0,e=this.data.masksProperties.length;t<e;){if("n"!==this.data.masksProperties[t].mode&&this.data.masksProperties[t].cl!==!1)return!0;t+=1}return!1},BaseElement.prototype.checkParenting=function(){void 0!==this.data.parent&&this.comp.buildElementParenting(this,this.data.parent)},BaseElement.prototype.prepareFrame=function(t){this.data.ip-this.data.st<=t&&this.data.op-this.data.st>t?this.isVisible!==!0&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!0,this.firstFrame=!0,this.data.hasMask&&(this.maskManager.firstFrame=!0)):this.isVisible!==!1&&(this.elemMdf=!0,this.globalData.mdf=!0,this.isVisible=!1);var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)(this.isVisible||this._isParent&&"transform"===this.dynamicProperties[e].type)&&(this.dynamicProperties[e].getValue(),this.dynamicProperties[e].mdf&&(this.elemMdf=!0,this.globalData.mdf=!0));return this.data.hasMask&&this.isVisible&&this.maskManager.prepareFrame(t*this.data.sr),this.currentFrameNum=t*this.data.sr,this.isVisible},BaseElement.prototype.globalToLocal=function(t){var e=[];e.push(this.finalTransform);for(var r=!0,s=this.comp;r;)s.finalTransform?(s.data.hasMask&&e.splice(0,0,s.finalTransform),s=s.comp):r=!1;var i,a,n=e.length;for(i=0;i<n;i+=1)a=e[i].mat.applyToPointArray(0,0,0),t=[t[0]-a[0],t[1]-a[1],0];return t},BaseElement.prototype.initExpressions=function(){this.layerInterface=LayerExpressionInterface(this),this.data.hasMask&&this.layerInterface.registerMaskInterface(this.maskManager);var t=EffectsExpressionInterface.createEffectsInterface(this,this.layerInterface);this.layerInterface.registerEffectsInterface(t),0===this.data.ty||this.data.xt?this.compInterface=CompExpressionInterface(this):4===this.data.ty?(this.layerInterface.shapeInterface=ShapeExpressionInterface.createShapeInterface(this.shapesData,this.itemsData,this.layerInterface),this.layerInterface.content=this.layerInterface.shapeInterface):5===this.data.ty&&(this.layerInterface.textInterface=TextExpressionInterface(this),this.layerInterface.text=this.layerInterface.textInterface)},BaseElement.prototype.setBlendMode=function(){var t="";switch(this.data.bm){case 1:t="multiply";break;case 2:t="screen";break;case 3:t="overlay";break;case 4:t="darken";break;case 5:t="lighten";break;case 6:t="color-dodge";break;case 7:t="color-burn";break;case 8:t="hard-light";break;case 9:t="soft-light";break;case 10:t="difference";break;case 11:t="exclusion";break;case 12:t="hue";break;case 13:t="saturation";break;case 14:t="color";break;case 15:t="luminosity"}var e=this.baseElement||this.layerElement;e.style["mix-blend-mode"]=t},BaseElement.prototype.init=function(){this.data.sr||(this.data.sr=1),this.dynamicProperties=this.dynamicProperties||[],this.data.ef&&(this.effects=new EffectsManager(this.data,this,this.dynamicProperties)),this.hidden=!1,this.firstFrame=!0,this.isVisible=!1,this._isParent=!1,this.currentFrameNum=-99999,this.lastNum=-99999,this.data.ks&&(this.finalTransform={mProp:TransformPropertyFactory.getTransformProperty(this,this.data.ks,this.dynamicProperties),matMdf:!1,opMdf:!1,mat:new Matrix,opacity:1},this.data.ao&&(this.finalTransform.mProp.autoOriented=!0),this.finalTransform.op=this.finalTransform.mProp.o,this.transform=this.finalTransform.mProp,11!==this.data.ty&&this.createElements(),this.data.hasMask&&this.addMasks(this.data)),this.elemMdf=!1},BaseElement.prototype.getType=function(){return this.type},BaseElement.prototype.resetHierarchy=function(){this.hierarchy?this.hierarchy.length=0:this.hierarchy=[]},BaseElement.prototype.getHierarchy=function(){return this.hierarchy||(this.hierarchy=[]),this.hierarchy},BaseElement.prototype.setHierarchy=function(t){this.hierarchy=t},BaseElement.prototype.getLayerSize=function(){return 5===this.data.ty?{w:this.data.textData.width,h:this.data.textData.height}:{w:this.data.width,h:this.data.height}},BaseElement.prototype.hide=function(){},BaseElement.prototype.sourceRectAtTime=function(){return{top:0,left:0,width:100,height:100}},BaseElement.prototype.mHelper=new Matrix,createElement(BaseElement,SVGBaseElement),SVGBaseElement.prototype.createElements=function(){this.layerElement=createNS("g"),this.transformedElement=this.layerElement,this.data.hasMask&&(this.maskedElement=this.layerElement);var t=null;if(this.data.td){if(3==this.data.td||1==this.data.td){var e=createNS("mask");if(e.setAttribute("id",this.layerId),e.setAttribute("mask-type",3==this.data.td?"luminance":"alpha"),e.appendChild(this.layerElement),t=e,this.globalData.defs.appendChild(e),!featureSupport.maskType&&1==this.data.td){e.setAttribute("mask-type","luminance");var r=randomString(10),s=filtersFactory.createFilter(r);this.globalData.defs.appendChild(s),s.appendChild(filtersFactory.createAlphaToLuminanceFilter());var i=createNS("g");i.appendChild(this.layerElement),t=i,e.appendChild(i),i.setAttribute("filter","url("+locationHref+"#"+r+")")}}else if(2==this.data.td){var a=createNS("mask");a.setAttribute("id",this.layerId),a.setAttribute("mask-type","alpha");var n=createNS("g");a.appendChild(n);var r=randomString(10),s=filtersFactory.createFilter(r),o=createNS("feColorMatrix");o.setAttribute("type","matrix"),o.setAttribute("color-interpolation-filters","sRGB"),o.setAttribute("values","1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 -1 1"),s.appendChild(o),this.globalData.defs.appendChild(s);var h=createNS("rect");if(h.setAttribute("width",this.comp.data.w),h.setAttribute("height",this.comp.data.h),h.setAttribute("x","0"),h.setAttribute("y","0"),h.setAttribute("fill","#ffffff"),h.setAttribute("opacity","0"),n.setAttribute("filter","url("+locationHref+"#"+r+")"),n.appendChild(h),n.appendChild(this.layerElement),t=n,!featureSupport.maskType){a.setAttribute("mask-type","luminance"),s.appendChild(filtersFactory.createAlphaToLuminanceFilter());var i=createNS("g");n.appendChild(h),i.appendChild(this.layerElement),t=i,n.appendChild(i)}this.globalData.defs.appendChild(a)}}else(this.data.hasMask||this.data.tt)&&this.data.tt?(this.matteElement=createNS("g"),this.matteElement.appendChild(this.layerElement),t=this.matteElement,this.baseElement=this.matteElement):this.baseElement=this.layerElement;if(!this.data.ln&&!this.data.cl||4!==this.data.ty&&0!==this.data.ty||(this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)),0===this.data.ty){var l=createNS("clipPath"),p=createNS("path");p.setAttribute("d","M0,0 L"+this.data.w+",0 L"+this.data.w+","+this.data.h+" L0,"+this.data.h+"z");var m="cp_"+randomString(8);if(l.setAttribute("id",m),l.appendChild(p),this.globalData.defs.appendChild(l),this.checkMasks()){var f=createNS("g");f.setAttribute("clip-path","url("+locationHref+"#"+m+")"),f.appendChild(this.layerElement),this.transformedElement=f,t?t.appendChild(this.transformedElement):this.baseElement=this.transformedElement}else this.layerElement.setAttribute("clip-path","url("+locationHref+"#"+m+")")}0!==this.data.bm&&this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.data.ef&&(this.effectsManager=new SVGEffects(this)),this.checkParenting()},SVGBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,SVGBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty||this.data.hd||!this.isVisible)return!1;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.firstFrame||this.finalTransform.op.mdf,this.finalTransform.matMdf=this.firstFrame||this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v;var e,r=this.finalTransform.mat;if(this.hierarchy){var s=0,i=this.hierarchy.length;if(!this.finalTransform.matMdf)for(;s<i;){if(this.hierarchy[s].finalTransform.mProp.mdf){this.finalTransform.matMdf=!0;break}s+=1}if(this.finalTransform.matMdf)for(e=this.finalTransform.mProp.v.props,r.cloneFromProps(e),s=0;s<i;s+=1)e=this.hierarchy[s].finalTransform.mProp.v.props,r.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&(r=this.finalTransform.mProp.v);return this.finalTransform.matMdf&&this.layerElement&&this.transformedElement.setAttribute("transform",r.to2dCSS()),this.finalTransform.opMdf&&this.layerElement&&(this.finalTransform.op.v<=0?!this.isTransparent&&this.globalData.renderConfig.hideOnTransparent&&(this.isTransparent=!0,this.hide()):this.hidden&&this.isTransparent&&(this.isTransparent=!1,this.show()),this.transformedElement.setAttribute("opacity",this.finalTransform.op.v)),this.data.hasMask&&this.maskManager.renderFrame(r),this.effectsManager&&this.effectsManager.renderFrame(this.firstFrame),this.isVisible},SVGBaseElement.prototype.destroy=function(){this.layerElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&this.maskManager.destroy()},SVGBaseElement.prototype.getBaseElement=function(){return this.baseElement},SVGBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},SVGBaseElement.prototype.setMatte=function(t){this.matteElement&&this.matteElement.setAttribute("mask","url("+locationHref+"#"+t+")")},SVGBaseElement.prototype.hide=function(){this.hidden||(this.layerElement.style.display="none",this.hidden=!0)},SVGBaseElement.prototype.show=function(){this.isVisible&&!this.isTransparent&&(this.hidden=!1,this.layerElement.style.display="block")},createElement(SVGBaseElement,IShapeElement),IShapeElement.prototype.identityMatrix=new Matrix,IShapeElement.prototype.lcEnum={1:"butt",2:"round",3:"square"},IShapeElement.prototype.ljEnum={1:"miter",2:"round",3:"butt"},IShapeElement.prototype.searchProcessedElement=function(t){for(var e=this.processedElements.length;e;)if(e-=1,this.processedElements[e].elem===t)return this.processedElements[e].pos;return 0},IShapeElement.prototype.addProcessedElement=function(t,e){for(var r=this.processedElements.length;r;)if(r-=1,this.processedElements[r].elem===t){this.processedElements[r].pos=e;break}0===r&&this.processedElements.push({elem:t,pos:e})},IShapeElement.prototype.buildExpressionInterface=function(){},IShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0),this.data.hd&&!this.data.td||styleUnselectableDiv(this.layerElement)},IShapeElement.prototype.setGradientData=function(t,e,r){var s,i="gr_"+randomString(10);s=createNS(1===e.t?"linearGradient":"radialGradient"),s.setAttribute("id",i),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse");var a,n,o,h=[];for(o=4*e.g.p,n=0;n<o;n+=4)a=createNS("stop"),s.appendChild(a),h.push(a);t.setAttribute("gf"===e.ty?"fill":"stroke","url(#"+i+")"),this.globalData.defs.appendChild(s),r.gf=s,r.cst=h},IShapeElement.prototype.setGradientOpacity=function(t,e,r){if(t.g.k.k[0].s&&t.g.k.k[0].s.length>4*t.g.p||t.g.k.k.length>4*t.g.p){var s,i,a,n,o=createNS("mask"),h=createNS("path");o.appendChild(h);var l="op_"+randomString(10),p="mk_"+randomString(10);o.setAttribute("id",p),s=createNS(1===t.t?"linearGradient":"radialGradient"),s.setAttribute("id",l),s.setAttribute("spreadMethod","pad"),s.setAttribute("gradientUnits","userSpaceOnUse"),n=t.g.k.k[0].s?t.g.k.k[0].s.length:t.g.k.k.length;var m=[];for(a=4*t.g.p;a<n;a+=2)i=createNS("stop"),i.setAttribute("stop-color","rgb(255,255,255)"),s.appendChild(i),m.push(i);return h.setAttribute("gf"===t.ty?"fill":"stroke","url(#"+l+")"),this.globalData.defs.appendChild(s),this.globalData.defs.appendChild(o),e.of=s,e.ost=m,r.msElem=h,p}},IShapeElement.prototype.createStyleElement=function(t,e,r){var s={},i={data:t,type:t.ty,d:"",ld:"",lvl:e,mdf:!1,closed:!1},a=createNS("path");if(s.o=PropertyFactory.getProp(this,t.o,0,.01,r),("st"==t.ty||"gs"==t.ty)&&(a.setAttribute("stroke-linecap",this.lcEnum[t.lc]||"round"),a.setAttribute("stroke-linejoin",this.ljEnum[t.lj]||"round"),a.setAttribute("fill-opacity","0"),1==t.lj&&a.setAttribute("stroke-miterlimit",t.ml),s.w=PropertyFactory.getProp(this,t.w,0,null,r),t.d)){var n=new DashProperty(this,t.d,"svg",r);n.k||(a.setAttribute("stroke-dasharray",n.dasharray),a.setAttribute("stroke-dashoffset",n.dashoffset[0])),s.d=n}if("fl"==t.ty||"st"==t.ty)s.c=PropertyFactory.getProp(this,t.c,1,255,r);else{s.g=new GradientProperty(this,t.g,r),2==t.t&&(s.h=PropertyFactory.getProp(this,t.h,0,.01,r),s.a=PropertyFactory.getProp(this,t.a,0,degToRads,r)),s.s=PropertyFactory.getProp(this,t.s,1,null,r),s.e=PropertyFactory.getProp(this,t.e,1,null,r),this.setGradientData(a,t,s,i);var o=this.setGradientOpacity(t,s,i);o&&a.setAttribute("mask","url(#"+o+")")}return s.elem=a,2===t.r&&a.setAttribute("fill-rule","evenodd"),t.ln&&a.setAttribute("id",t.ln),t.cl&&a.setAttribute("class",t.cl),i.pElem=a,this.stylesList.push(i),s.style=i,s},IShapeElement.prototype.createGroupElement=function(t){var e={it:[],prevViewData:[]},r=createNS("g");return e.gr=r,t.ln&&e.gr.setAttribute("id",t.ln),e},IShapeElement.prototype.createTransformElement=function(t,e){var r={transform:{op:PropertyFactory.getProp(this,t.o,0,.01,e),mProps:TransformPropertyFactory.getTransformProperty(this,t,e)},elements:[]};return r},IShapeElement.prototype.createShapeElement=function(t,e,r,s){var i={elements:[],caches:[],styles:[],transformers:e,lStr:""},a=4;return"rc"==t.ty?a=5:"el"==t.ty?a=6:"sr"==t.ty&&(a=7),i.sh=ShapePropertyFactory.getShapeProp(this,t,a,s),i.lvl=r,this.shapes.push(i.sh),this.addShapeToModifiers(i),i};var cont=0;IShapeElement.prototype.setElementStyles=function(){var t,e=this.stylesList.length,r=[];for(t=0;t<e;t+=1)this.stylesList[t].closed||r.push(this.stylesList[t]);return r},IShapeElement.prototype.reloadShapes=function(){this.firstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0);var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},IShapeElement.prototype.searchShapes=function(t,e,r,s,i,a,n,o){var h,l,p,m,f,c,d=[].concat(n),u=t.length-1,y=[],g=[];for(h=u;h>=0;h-=1){if(c=this.searchProcessedElement(t[h]),c?e[h]=r[c-1]:t[h]._render=o,"fl"==t[h].ty||"st"==t[h].ty||"gf"==t[h].ty||"gs"==t[h].ty)c?e[h].style.closed=!1:e[h]=this.createStyleElement(t[h],a,i),t[h]._render&&s.appendChild(e[h].elem),y.push(e[h].style);else if("gr"==t[h].ty){if(c)for(p=e[h].it.length,l=0;l<p;l+=1)e[h].prevViewData[l]=e[h].it[l];else e[h]=this.createGroupElement(t[h]);this.searchShapes(t[h].it,e[h].it,e[h].prevViewData,e[h].gr,i,a+1,d,o),t[h]._render&&s.appendChild(e[h].gr)}else"tr"==t[h].ty?(c||(e[h]=this.createTransformElement(t[h],i)),m=e[h].transform,d.push(m)):"sh"==t[h].ty||"rc"==t[h].ty||"el"==t[h].ty||"sr"==t[h].ty?(c||(e[h]=this.createShapeElement(t[h],d,a,i)),e[h].elements=this.setElementStyles()):"tm"==t[h].ty||"rd"==t[h].ty||"ms"==t[h].ty?(c?(f=e[h],f.closed=!1):(f=ShapeModifiers.getModifier(t[h].ty),f.init(this,t[h],i),e[h]=f,this.shapeModifiers.push(f)),g.push(f)):"rp"==t[h].ty&&(c?(f=e[h],f.closed=!0):(f=ShapeModifiers.getModifier(t[h].ty),e[h]=f,f.init(this,t,h,e,i),this.shapeModifiers.push(f),o=!1),g.push(f));this.addProcessedElement(t[h],h+1)}for(u=y.length,h=0;h<u;h+=1)y[h].closed=!0;for(u=g.length,h=0;h<u;h+=1)g[h].closed=!0},IShapeElement.prototype.addShapeToModifiers=function(t){var e,r=this.shapeModifiers.length;for(e=0;e<r;e+=1)this.shapeModifiers[e].addShape(t)},IShapeElement.prototype.renderModifiers=function(){if(this.shapeModifiers.length){var t,e=this.shapes.length;for(t=0;t<e;t+=1)this.shapes[t].reset();for(e=this.shapeModifiers.length,t=e-1;t>=0;t-=1)this.shapeModifiers[t].processShapes(this.firstFrame)}},IShapeElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();this.hidden&&(this.layerElement.style.display="block",this.hidden=!1),this.renderModifiers();var r,s=this.stylesList.length;for(r=0;r<s;r+=1)this.stylesList[r].d="",this.stylesList[r].mdf=!1;for(this.renderShape(this.shapesData,this.itemsData,null),r=0;r<s;r+=1)"0"===this.stylesList[r].ld&&(this.stylesList[r].ld="1",this.stylesList[r].pElem.style.display="block"),(this.stylesList[r].mdf||this.firstFrame)&&(this.stylesList[r].pElem.setAttribute("d",this.stylesList[r].d||"M0 0"),this.stylesList[r].msElem&&this.stylesList[r].msElem.setAttribute("d",this.stylesList[r].d));this.firstFrame&&(this.firstFrame=!1)},IShapeElement.prototype.hide=function(){if(!this.hidden){this.layerElement.style.display="none";var t,e=this.stylesList.length;for(t=e-1;t>=0;t-=1)"0"!==this.stylesList[t].ld&&(this.stylesList[t].ld="0",this.stylesList[t].pElem.style.display="none",this.stylesList[t].pElem.parentNode&&(this.stylesList[t].parent=this.stylesList[t].pElem.parentNode));this.hidden=!0}},IShapeElement.prototype.renderShape=function(t,e,r){var s,i,a=t.length-1;for(s=0;s<=a;s+=1)i=t[s].ty,"tr"==i?((this.firstFrame||e[s].transform.op.mdf&&r)&&r.setAttribute("opacity",e[s].transform.op.v),(this.firstFrame||e[s].transform.mProps.mdf&&r)&&r.setAttribute("transform",e[s].transform.mProps.v.to2dCSS())):"sh"==i||"el"==i||"rc"==i||"sr"==i?this.renderPath(t[s],e[s]):"fl"==i?this.renderFill(t[s],e[s]):"gf"==i?this.renderGradient(t[s],e[s]):"gs"==i?(this.renderGradient(t[s],e[s]),this.renderStroke(t[s],e[s])):"st"==i?this.renderStroke(t[s],e[s]):"gr"==i&&this.renderShape(t[s].it,e[s].it,e[s].gr)},IShapeElement.prototype.buildShapeString=function(t,e,r,s){var i,a="";for(i=1;i<e;i+=1)1===i&&(a+=" M"+s.applyToPointStringified(t.v[0][0],t.v[0][1])),a+=" C"+s.applyToPointStringified(t.o[i-1][0],t.o[i-1][1])+" "+s.applyToPointStringified(t.i[i][0],t.i[i][1])+" "+s.applyToPointStringified(t.v[i][0],t.v[i][1]);return 1===e&&(a+=" M"+s.applyToPointStringified(t.v[0][0],t.v[0][1])),r&&e&&(a+=" C"+s.applyToPointStringified(t.o[i-1][0],t.o[i-1][1])+" "+s.applyToPointStringified(t.i[0][0],t.i[0][1])+" "+s.applyToPointStringified(t.v[0][0],t.v[0][1]),a+="z"),a},IShapeElement.prototype.renderPath=function(t,e){var r,s,i,a,n,o,h,l=e.elements.length,p=e.lvl;if(t._render)for(o=0;o<l;o+=1)if(e.elements[o].data._render){a=e.sh.mdf||this.firstFrame,i="";var m=e.sh.paths;if(s=m._length,e.elements[o].lvl<p)for(h=this.mHelper.reset(),iterations=p-e.elements[o].lvl,k=e.transformers.length-1;iterations>0;)a=e.transformers[k].mProps.mdf||a,props=e.transformers[k].mProps.v.props,h.transform(props[0],props[1],props[2],props[3],props[4],props[5],props[6],props[7],props[8],props[9],props[10],props[11],props[12],props[13],props[14],props[15]),iterations--,k--;else h=this.identityMatrix;if(a){for(r=0;r<s;r+=1)n=m.shapes[r],n&&n._length&&(i+=this.buildShapeString(n,n._length,n.c,h));e.caches[o]=i}else i=e.caches[o];e.elements[o].d+=i,e.elements[o].mdf=a||e.elements[o].mdf}else e.elements[o].mdf=!0},IShapeElement.prototype.renderFill=function(t,e){var r=e.style;(e.c.mdf||this.firstFrame)&&r.pElem.setAttribute("fill","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&r.pElem.setAttribute("fill-opacity",e.o.v)},IShapeElement.prototype.renderGradient=function(t,e){var r=e.gf,s=e.of,i=e.s.v,a=e.e.v;if(e.o.mdf||this.firstFrame){var n="gf"===t.ty?"fill-opacity":"stroke-opacity";e.elem.setAttribute(n,e.o.v)}if(e.s.mdf||this.firstFrame){var o=1===t.t?"x1":"cx",h="x1"===o?"y1":"cy";r.setAttribute(o,i[0]),r.setAttribute(h,i[1]),s&&(s.setAttribute(o,i[0]),s.setAttribute(h,i[1]))}var l,p,m,f;if(e.g.cmdf||this.firstFrame){l=e.cst;var c=e.g.c;for(m=l.length,p=0;p<m;p+=1)f=l[p],f.setAttribute("offset",c[4*p]+"%"),f.setAttribute("stop-color","rgb("+c[4*p+1]+","+c[4*p+2]+","+c[4*p+3]+")")}if(s&&(e.g.omdf||this.firstFrame)){l=e.ost;var d=e.g.o;for(m=l.length,p=0;p<m;p+=1)f=l[p],f.setAttribute("offset",d[2*p]+"%"),f.setAttribute("stop-opacity",d[2*p+1])}if(1===t.t)(e.e.mdf||this.firstFrame)&&(r.setAttribute("x2",a[0]),r.setAttribute("y2",a[1]),s&&(s.setAttribute("x2",a[0]),s.setAttribute("y2",a[1])));else{var u;if((e.s.mdf||e.e.mdf||this.firstFrame)&&(u=Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)),r.setAttribute("r",u),s&&s.setAttribute("r",u)),e.e.mdf||e.h.mdf||e.a.mdf||this.firstFrame){u||(u=Math.sqrt(Math.pow(i[0]-a[0],2)+Math.pow(i[1]-a[1],2)));var y=Math.atan2(a[1]-i[1],a[0]-i[0]),g=e.h.v>=1?.99:e.h.v<=-1?-.99:e.h.v,v=u*g,b=Math.cos(y+e.a.v)*v+i[0],E=Math.sin(y+e.a.v)*v+i[1];r.setAttribute("fx",b),r.setAttribute("fy",E),s&&(s.setAttribute("fx",b),s.setAttribute("fy",E))}}},IShapeElement.prototype.renderStroke=function(t,e){var r=e.style,s=e.d;s&&(s.mdf||this.firstFrame)&&(r.pElem.setAttribute("stroke-dasharray",s.dashStr),r.pElem.setAttribute("stroke-dashoffset",s.dashoffset[0])),e.c&&(e.c.mdf||this.firstFrame)&&r.pElem.setAttribute("stroke","rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||this.firstFrame)&&r.pElem.setAttribute("stroke-opacity",e.o.v),(e.w.mdf||this.firstFrame)&&(r.pElem.setAttribute("stroke-width",e.w.v),r.msElem&&r.msElem.setAttribute("stroke-width",e.w.v))},IShapeElement.prototype.destroy=function(){this._parent.destroy.call(this._parent),this.shapeData=null,this.itemsData=null,this.parentContainer=null,this.placeholder=null},ITextElement.prototype.init=function(){this.lettersChangedFlag=!0,this.dynamicProperties=this.dynamicProperties||[],this.textAnimator=new TextAnimatorProperty(this.data.t,this.renderType,this),this.textProperty=new TextProperty(this,this.data.t,this.dynamicProperties),this._parent.init.call(this),this.textAnimator.searchProperties(this.dynamicProperties)},ITextElement.prototype.prepareFrame=function(t){this._parent.prepareFrame.call(this,t),(this.textProperty.mdf||this.textProperty.firstFrame)&&(this.buildNewText(),this.textProperty.firstFrame=!1)},ITextElement.prototype.createPathShape=function(t,e){var r,s,i=e.length,a="";for(r=0;r<i;r+=1)s=e[r].ks.k,a+=this.buildShapeString(s,s.i.length,!0,t);return a},ITextElement.prototype.updateDocumentData=function(t,e){this.textProperty.updateDocumentData(t,e)},ITextElement.prototype.applyTextPropertiesToMatrix=function(t,e,r,s,i){switch(t.ps&&e.translate(t.ps[0],t.ps[1]+t.ascent,0),e.translate(0,-t.ls,0),t.j){case 1:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r]),0,0);break;case 2:e.translate(t.justifyOffset+(t.boxWidth-t.lineWidths[r])/2,0,0)}e.translate(s,i,0)},ITextElement.prototype.buildColor=function(t){return"rgb("+Math.round(255*t[0])+","+Math.round(255*t[1])+","+Math.round(255*t[2])+")"},ITextElement.prototype.buildShapeString=IShapeElement.prototype.buildShapeString,ITextElement.prototype.emptyProp=new LetterProps,ITextElement.prototype.destroy=function(){this._parent.destroy.call(this._parent)},createElement(SVGBaseElement,SVGTextElement),extendPrototype(ITextElement,SVGTextElement),SVGTextElement.prototype.createElements=function(){this._parent.createElements.call(this),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl),this.data.singleShape&&!this.globalData.fontManager.chars&&(this.textContainer=createNS("text"));
},SVGTextElement.prototype.buildNewText=function(){var t,e,r=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:r?r.l.length:0}),r.fc?this.layerElement.setAttribute("fill",this.buildColor(r.fc)):this.layerElement.setAttribute("fill","rgba(0,0,0,0)"),r.sc&&(this.layerElement.setAttribute("stroke",this.buildColor(r.sc)),this.layerElement.setAttribute("stroke-width",r.sw)),this.layerElement.setAttribute("font-size",r.s);var s=this.globalData.fontManager.getFontByName(r.f);if(s.fClass)this.layerElement.setAttribute("class",s.fClass);else{this.layerElement.setAttribute("font-family",s.fFamily);var i=r.fWeight,a=r.fStyle;this.layerElement.setAttribute("font-style",a),this.layerElement.setAttribute("font-weight",i)}var n=r.l||[],o=this.globalData.fontManager.chars;if(e=n.length){var h,l,p=this.mHelper,m="",f=this.data.singleShape,c=0,d=0,u=!0,y=r.tr/1e3*r.s;if(f&&!o){var g=this.textContainer,v="";switch(r.j){case 1:v="end";break;case 2:v="middle";break;case 2:v="start"}g.setAttribute("text-anchor",v),g.setAttribute("letter-spacing",y);var b=r.t.split(String.fromCharCode(13));e=b.length;var d=r.ps?r.ps[1]+r.ascent:0;for(t=0;t<e;t+=1)h=this.textSpans[t]||createNS("tspan"),h.textContent=b[t],h.setAttribute("x",0),h.setAttribute("y",d),h.style.display="inherit",g.appendChild(h),this.textSpans[t]=h,d+=r.lh;this.layerElement.appendChild(g)}else{var E,P,x=this.textSpans.length;for(t=0;t<e;t+=1)o&&f&&0!==t||(h=x>t?this.textSpans[t]:createNS(o?"path":"text"),x<=t&&(h.setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4"),this.textSpans[t]=h,this.layerElement.appendChild(h)),h.style.display="inherit"),p.reset(),o?(p.scale(r.s/100,r.s/100),f&&(n[t].n&&(c=-y,d+=r.yOffset,d+=u?1:0,u=!1),this.applyTextPropertiesToMatrix(r,p,n[t].line,c,d),c+=n[t].l||0,c+=y),P=this.globalData.fontManager.getCharData(r.t.charAt(t),s.fStyle,this.globalData.fontManager.getFontByName(r.f).fFamily),E=P&&P.data||{},l=E.shapes?E.shapes[0].it:[],f?m+=this.createPathShape(p,l):h.setAttribute("d",this.createPathShape(p,l))):(h.textContent=n[t].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"));f&&h.setAttribute("d",m)}for(;t<this.textSpans.length;)this.textSpans[t].style.display="none",t+=1;this._sizeChanged=!0}},SVGTextElement.prototype.sourceRectAtTime=function(t){if(this.prepareFrame(this.comp.renderedFrame-this.data.st),this.renderLetters(),this._sizeChanged){this._sizeChanged=!1;var e=this.layerElement.getBBox();this.bbox={top:e.y,left:e.x,width:e.width,height:e.height}}return this.bbox},SVGTextElement.prototype.renderLetters=function(){if(!this.data.singleShape&&(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag)){this._sizeChanged=!0;var t,e,r=this.textAnimator.renderedLetters,s=this.textProperty.currentData.l;e=s.length;var i,a;for(t=0;t<e;t+=1)s[t].n||(i=r[t],a=this.textSpans[t],i.mdf.m&&a.setAttribute("transform",i.m),i.mdf.o&&a.setAttribute("opacity",i.o),i.mdf.sw&&a.setAttribute("stroke-width",i.sw),i.mdf.sc&&a.setAttribute("stroke",i.sc),i.mdf.fc&&a.setAttribute("fill",i.fc))}},SVGTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&this.show(),this.firstFrame&&(this.firstFrame=!1),void this.renderLetters())},SVGTintFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,s=this.filterManager.effectElements[2].p.v/100;this.matrixFilter.setAttribute("values",r[0]-e[0]+" 0 0 0 "+e[0]+" "+(r[1]-e[1])+" 0 0 0 "+e[1]+" "+(r[2]-e[2])+" 0 0 0 "+e[2]+" 0 0 0 "+s+" 0")}},SVGFillFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[2].p.v,r=this.filterManager.effectElements[6].p.v;this.matrixFilter.setAttribute("values","0 0 0 0 "+e[0]+" 0 0 0 0 "+e[1]+" 0 0 0 0 "+e[2]+" 0 0 0 "+r+" 0")}},SVGStrokeEffect.prototype.initialize=function(){var t,e,r,s,i=this.elem.layerElement.children||this.elem.layerElement.childNodes;for(1===this.filterManager.effectElements[1].p.v?(s=this.elem.maskManager.masksProperties.length,r=0):(r=this.filterManager.effectElements[0].p.v-1,s=r+1),e=createNS("g"),e.setAttribute("fill","none"),e.setAttribute("stroke-linecap","round"),e.setAttribute("stroke-dashoffset",1),r;r<s;r+=1)t=createNS("path"),e.appendChild(t),this.paths.push({p:t,m:r});if(3===this.filterManager.effectElements[10].p.v){var a=createNS("mask"),n="stms_"+randomString(10);a.setAttribute("id",n),a.setAttribute("mask-type","alpha"),a.appendChild(e),this.elem.globalData.defs.appendChild(a);var o=createNS("g");o.setAttribute("mask","url("+locationHref+"#"+n+")"),i[0]&&o.appendChild(i[0]),this.elem.layerElement.appendChild(o),this.masker=a,e.setAttribute("stroke","#fff")}else if(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v){if(2===this.filterManager.effectElements[10].p.v)for(var i=this.elem.layerElement.children||this.elem.layerElement.childNodes;i.length;)this.elem.layerElement.removeChild(i[0]);this.elem.layerElement.appendChild(e),this.elem.layerElement.removeAttribute("mask"),e.setAttribute("stroke","#fff")}this.initialized=!0,this.pathMasker=e},SVGStrokeEffect.prototype.renderFrame=function(t){this.initialized||this.initialize();var e,r,s,i=this.paths.length;for(e=0;e<i;e+=1)if(r=this.elem.maskManager.viewData[this.paths[e].m],s=this.paths[e].p,(t||this.filterManager.mdf||r.prop.mdf)&&s.setAttribute("d",r.lastPath),t||this.filterManager.effectElements[9].p.mdf||this.filterManager.effectElements[4].p.mdf||this.filterManager.effectElements[7].p.mdf||this.filterManager.effectElements[8].p.mdf||r.prop.mdf){var a;if(0!==this.filterManager.effectElements[7].p.v||100!==this.filterManager.effectElements[8].p.v){var n=Math.min(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,o=Math.max(this.filterManager.effectElements[7].p.v,this.filterManager.effectElements[8].p.v)/100,h=s.getTotalLength();a="0 0 0 "+h*n+" ";var l,p=h*(o-n),m=1+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100,f=Math.floor(p/m);for(l=0;l<f;l+=1)a+="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100+" ";a+="0 "+10*h+" 0 0"}else a="1 "+2*this.filterManager.effectElements[4].p.v*this.filterManager.effectElements[9].p.v/100;s.setAttribute("stroke-dasharray",a)}if((t||this.filterManager.effectElements[4].p.mdf)&&this.pathMasker.setAttribute("stroke-width",2*this.filterManager.effectElements[4].p.v),(t||this.filterManager.effectElements[6].p.mdf)&&this.pathMasker.setAttribute("opacity",this.filterManager.effectElements[6].p.v),(1===this.filterManager.effectElements[10].p.v||2===this.filterManager.effectElements[10].p.v)&&(t||this.filterManager.effectElements[3].p.mdf)){var c=this.filterManager.effectElements[3].p.v;this.pathMasker.setAttribute("stroke","rgb("+bm_floor(255*c[0])+","+bm_floor(255*c[1])+","+bm_floor(255*c[2])+")")}},SVGTritoneFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e=this.filterManager.effectElements[0].p.v,r=this.filterManager.effectElements[1].p.v,s=this.filterManager.effectElements[2].p.v,i=s[0]+" "+r[0]+" "+e[0],a=s[1]+" "+r[1]+" "+e[1],n=s[2]+" "+r[2]+" "+e[2];this.feFuncR.setAttribute("tableValues",i),this.feFuncG.setAttribute("tableValues",a),this.feFuncB.setAttribute("tableValues",n)}},SVGProLevelsFilter.prototype.createFeFunc=function(t,e){var r=createNS(t);return r.setAttribute("type","table"),e.appendChild(r),r},SVGProLevelsFilter.prototype.getTableValue=function(t,e,r,s,i){for(var a,n,o=0,h=256,l=Math.min(t,e),p=Math.max(t,e),m=Array.call(null,{length:h}),f=0,c=i-s,d=e-t;o<=256;)a=o/256,n=a<=l?d<0?i:s:a>=p?d<0?s:i:s+c*Math.pow((a-t)/d,1/r),m[f++]=n,o+=256/(h-1);return m.join(" ")},SVGProLevelsFilter.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){var e,r=this.filterManager.effectElements;this.feFuncRComposed&&(t||r[3].p.mdf||r[4].p.mdf||r[5].p.mdf||r[6].p.mdf||r[7].p.mdf)&&(e=this.getTableValue(r[3].p.v,r[4].p.v,r[5].p.v,r[6].p.v,r[7].p.v),this.feFuncRComposed.setAttribute("tableValues",e),this.feFuncGComposed.setAttribute("tableValues",e),this.feFuncBComposed.setAttribute("tableValues",e)),this.feFuncR&&(t||r[10].p.mdf||r[11].p.mdf||r[12].p.mdf||r[13].p.mdf||r[14].p.mdf)&&(e=this.getTableValue(r[10].p.v,r[11].p.v,r[12].p.v,r[13].p.v,r[14].p.v),this.feFuncR.setAttribute("tableValues",e)),this.feFuncG&&(t||r[17].p.mdf||r[18].p.mdf||r[19].p.mdf||r[20].p.mdf||r[21].p.mdf)&&(e=this.getTableValue(r[17].p.v,r[18].p.v,r[19].p.v,r[20].p.v,r[21].p.v),this.feFuncG.setAttribute("tableValues",e)),this.feFuncB&&(t||r[24].p.mdf||r[25].p.mdf||r[26].p.mdf||r[27].p.mdf||r[28].p.mdf)&&(e=this.getTableValue(r[24].p.v,r[25].p.v,r[26].p.v,r[27].p.v,r[28].p.v),this.feFuncB.setAttribute("tableValues",e)),this.feFuncA&&(t||r[31].p.mdf||r[32].p.mdf||r[33].p.mdf||r[34].p.mdf||r[35].p.mdf)&&(e=this.getTableValue(r[31].p.v,r[32].p.v,r[33].p.v,r[34].p.v,r[35].p.v),this.feFuncA.setAttribute("tableValues",e))}},SVGDropShadowEffect.prototype.renderFrame=function(t){if(t||this.filterManager.mdf){if((t||this.filterManager.effectElements[4].p.mdf)&&this.feGaussianBlur.setAttribute("stdDeviation",this.filterManager.effectElements[4].p.v/4),t||this.filterManager.effectElements[0].p.mdf){var e=this.filterManager.effectElements[0].p.v;this.feFlood.setAttribute("flood-color",rgbToHex(Math.round(255*e[0]),Math.round(255*e[1]),Math.round(255*e[2])))}if((t||this.filterManager.effectElements[1].p.mdf)&&this.feFlood.setAttribute("flood-opacity",this.filterManager.effectElements[1].p.v/255),t||this.filterManager.effectElements[2].p.mdf||this.filterManager.effectElements[3].p.mdf){var r=this.filterManager.effectElements[3].p.v,s=(this.filterManager.effectElements[2].p.v-90)*degToRads,i=r*Math.cos(s),a=r*Math.sin(s);this.feOffset.setAttribute("dx",i),this.feOffset.setAttribute("dy",a)}}},SVGMatte3Effect.prototype.setElementAsMask=function(t,e){var r=createNS("mask");r.setAttribute("id",e.layerId),r.setAttribute("mask-type","alpha"),r.appendChild(e.layerElement),t.setMatte(e.layerId),e.data.hd=!1;var s=t.globalData.defs;s.appendChild(r)},SVGMatte3Effect.prototype.initialize=function(){for(var t=this.filterManager.effectElements[0].p.v,e=0,r=this.elem.comp.elements.length;e<r;)this.elem.comp.elements[e].data.ind===t&&this.setElementAsMask(this.elem,this.elem.comp.elements[e]),e+=1;this.initialized=!0},SVGMatte3Effect.prototype.renderFrame=function(){this.initialized||this.initialize()},SVGEffects.prototype.renderFrame=function(t){var e,r=this.filters.length;for(e=0;e<r;e+=1)this.filters[e].renderFrame(t)},createElement(SVGBaseElement,ICompElement),ICompElement.prototype.hide=function(){if(!this.hidden){this._parent.hide.call(this);var t,e=this.elements.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].hide()}},ICompElement.prototype.prepareFrame=function(t){if(this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){if(this.tm){var e=this.tm.v;e===this.data.op&&(e=this.data.op-1),this.renderedFrame=e}else this.renderedFrame=t/this.data.sr;var r,s=this.elements.length;for(this.completeLayers||this.checkLayers(this.renderedFrame),r=0;r<s;r+=1)(this.completeLayers||this.elements[r])&&this.elements[r].prepareFrame(this.renderedFrame-this.layers[r].st)}},ICompElement.prototype.renderFrame=function(t){var e,r=this._parent.renderFrame.call(this,t),s=this.layers.length;if(r===!1)return void this.hide();for(this.hidden&&this.show(),e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},ICompElement.prototype.setElements=function(t){this.elements=t},ICompElement.prototype.getElements=function(){return this.elements},ICompElement.prototype.destroy=function(){this._parent.destroy.call(this._parent);var t,e=this.layers.length;for(t=0;t<e;t+=1)this.elements[t]&&this.elements[t].destroy()},ICompElement.prototype.checkLayers=SVGRenderer.prototype.checkLayers,ICompElement.prototype.buildItem=SVGRenderer.prototype.buildItem,ICompElement.prototype.buildAllItems=SVGRenderer.prototype.buildAllItems,ICompElement.prototype.buildElementParenting=SVGRenderer.prototype.buildElementParenting,ICompElement.prototype.createItem=SVGRenderer.prototype.createItem,ICompElement.prototype.createImage=SVGRenderer.prototype.createImage,ICompElement.prototype.createComp=SVGRenderer.prototype.createComp,ICompElement.prototype.createSolid=SVGRenderer.prototype.createSolid,ICompElement.prototype.createShape=SVGRenderer.prototype.createShape,ICompElement.prototype.createText=SVGRenderer.prototype.createText,ICompElement.prototype.createBase=SVGRenderer.prototype.createBase,ICompElement.prototype.appendElementInPos=SVGRenderer.prototype.appendElementInPos,ICompElement.prototype.checkPendingElements=SVGRenderer.prototype.checkPendingElements,ICompElement.prototype.addPendingElement=SVGRenderer.prototype.addPendingElement,createElement(SVGBaseElement,IImageElement),IImageElement.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData);this._parent.createElements.call(this),this.innerElem=createNS("image"),this.innerElem.setAttribute("width",this.assetData.w+"px"),this.innerElem.setAttribute("height",this.assetData.h+"px"),this.innerElem.setAttribute("preserveAspectRatio","xMidYMid slice"),this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),this.maskedElement=this.innerElem,this.layerElement.appendChild(this.innerElem),this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},IImageElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);return e===!1?void this.hide():(this.hidden&&this.show(),void(this.firstFrame&&(this.firstFrame=!1)))},IImageElement.prototype.destroy=function(){this._parent.destroy.call(this._parent),this.innerElem=null},createElement(SVGBaseElement,ISolidElement),ISolidElement.prototype.createElements=function(){this._parent.createElements.call(this);var t=createNS("rect");t.setAttribute("width",this.data.sw),t.setAttribute("height",this.data.sh),t.setAttribute("fill",this.data.sc),this.layerElement.appendChild(t),this.innerElem=t,this.data.ln&&this.layerElement.setAttribute("id",this.data.ln),this.data.cl&&this.layerElement.setAttribute("class",this.data.cl)},ISolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,ISolidElement.prototype.destroy=IImageElement.prototype.destroy;var animationManager=function(){function t(t){for(var e=0,r=t.target;e<C;)P[e].animation===r&&(P.splice(e,1),e-=1,C-=1,r.isPaused||s()),e+=1}function e(t,e){if(!t)return null;for(var r=0;r<C;){if(P[r].elem==t&&null!==P[r].elem)return P[r].animation;r+=1}var s=new AnimationItem;return i(s,t),s.setData(t,e),s}function r(){A+=1,b()}function s(){A-=1,0===A&&(S=!0)}function i(e,i){e.addEventListener("destroy",t),e.addEventListener("_active",r),e.addEventListener("_idle",s),P.push({elem:i,animation:e}),C+=1}function a(t){var e=new AnimationItem;return i(e,null),e.setParams(t),e}function n(t,e){var r;for(r=0;r<C;r+=1)P[r].animation.setSpeed(t,e)}function o(t,e){var r;for(r=0;r<C;r+=1)P[r].animation.setDirection(t,e)}function h(t){var e;for(e=0;e<C;e+=1)P[e].animation.play(t)}function l(t,e){x=Date.now();var r;for(r=0;r<C;r+=1)P[r].animation.moveFrame(t,e)}function p(t){var e,r=t-x;for(e=0;e<C;e+=1)P[e].animation.advanceTime(r);x=t,S?k=!0:window.requestAnimationFrame(p)}function m(t){x=t,window.requestAnimationFrame(p)}function f(t){var e;for(e=0;e<C;e+=1)P[e].animation.pause(t)}function c(t,e,r){var s;for(s=0;s<C;s+=1)P[s].animation.goToAndStop(t,e,r)}function d(t){var e;for(e=0;e<C;e+=1)P[e].animation.stop(t)}function u(t){var e;for(e=0;e<C;e+=1)P[e].animation.togglePause(t)}function y(t){var e;for(e=C-1;e>=0;e-=1)P[e].animation.destroy(t)}function g(t,r,s){var i,a=[].concat([].slice.call(document.getElementsByClassName("lottie")),[].slice.call(document.getElementsByClassName("bodymovin"))),n=a.length;for(i=0;i<n;i+=1)s&&a[i].setAttribute("data-bm-type",s),e(a[i],t);if(r&&0===n){s||(s="svg");var o=document.getElementsByTagName("body")[0];o.innerHTML="";var h=document.createElement("div");h.style.width="100%",h.style.height="100%",h.setAttribute("data-bm-type",s),o.appendChild(h),e(h,t)}}function v(){var t;for(t=0;t<C;t+=1)P[t].animation.resize()}function b(){S&&(S=!1,k&&(window.requestAnimationFrame(m),k=!1))}var E={},P=[],x=0,C=0,S=!0,A=0,k=!0;return E.registerAnimation=e,E.loadAnimation=a,E.setSpeed=n,E.setDirection=o,E.play=h,E.moveFrame=l,E.pause=f,E.stop=d,E.togglePause=u,E.searchAnimations=g,E.resize=v,E.goToAndStop=c,E.destroy=y,E}(),AnimationItem=function(){this._cbs=[],this.name="",this.path="",this.isLoaded=!1,this.currentFrame=0,this.currentRawFrame=0,this.totalFrames=0,this.frameRate=0,this.frameMult=0,this.playSpeed=1,this.playDirection=1,this.pendingElements=0,this.playCount=0,this.animationData={},this.layers=[],this.assets=[],this.isPaused=!0,this.autoplay=!1,this.loop=!0,this.renderer=null,this.animationID=randomString(10),this.assetsPath="",this.timeCompleted=0,this.segmentPos=0,this.subframeEnabled=subframeEnabled,this.segments=[],this.pendingSegment=!1,this._idle=!0,this.projectInterface=ProjectInterface()};AnimationItem.prototype.setParams=function(t){var e=this;t.context&&(this.context=t.context),(t.wrapper||t.container)&&(this.wrapper=t.wrapper||t.container);var r=t.animType?t.animType:t.renderer?t.renderer:"svg";switch(r){case"canvas":this.renderer=new CanvasRenderer(this,t.rendererSettings);break;case"svg":this.renderer=new SVGRenderer(this,t.rendererSettings);break;case"hybrid":case"html":default:this.renderer=new HybridRenderer(this,t.rendererSettings)}if(this.renderer.setProjectInterface(this.projectInterface),this.animType=r,""===t.loop||null===t.loop||(t.loop===!1?this.loop=!1:t.loop===!0?this.loop=!0:this.loop=parseInt(t.loop)),this.autoplay=!("autoplay"in t)||t.autoplay,this.name=t.name?t.name:"",this.autoloadSegments=!t.hasOwnProperty("autoloadSegments")||t.autoloadSegments,t.animationData)e.configAnimation(t.animationData);else if(t.path){"json"!=t.path.substr(-4)&&("/"!=t.path.substr(-1,1)&&(t.path+="/"),t.path+="data.json");var s=new XMLHttpRequest;t.path.lastIndexOf("\\")!=-1?this.path=t.path.substr(0,t.path.lastIndexOf("\\")+1):this.path=t.path.substr(0,t.path.lastIndexOf("/")+1),this.assetsPath=t.assetsPath,this.fileName=t.path.substr(t.path.lastIndexOf("/")+1),this.fileName=this.fileName.substr(0,this.fileName.lastIndexOf(".json")),s.open("GET",t.path,!0),s.send(),s.onreadystatechange=function(){if(4==s.readyState)if(200==s.status)e.configAnimation(JSON.parse(s.responseText));else try{var t=JSON.parse(s.responseText);e.configAnimation(t)}catch(r){}}}},AnimationItem.prototype.setData=function(t,e){var r={wrapper:t,animationData:e?"object"==typeof e?e:JSON.parse(e):null},s=t.attributes;r.path=s.getNamedItem("data-animation-path")?s.getNamedItem("data-animation-path").value:s.getNamedItem("data-bm-path")?s.getNamedItem("data-bm-path").value:s.getNamedItem("bm-path")?s.getNamedItem("bm-path").value:"",r.animType=s.getNamedItem("data-anim-type")?s.getNamedItem("data-anim-type").value:s.getNamedItem("data-bm-type")?s.getNamedItem("data-bm-type").value:s.getNamedItem("bm-type")?s.getNamedItem("bm-type").value:s.getNamedItem("data-bm-renderer")?s.getNamedItem("data-bm-renderer").value:s.getNamedItem("bm-renderer")?s.getNamedItem("bm-renderer").value:"canvas";var i=s.getNamedItem("data-anim-loop")?s.getNamedItem("data-anim-loop").value:s.getNamedItem("data-bm-loop")?s.getNamedItem("data-bm-loop").value:s.getNamedItem("bm-loop")?s.getNamedItem("bm-loop").value:"";""===i||("false"===i?r.loop=!1:"true"===i?r.loop=!0:r.loop=parseInt(i));var a=s.getNamedItem("data-anim-autoplay")?s.getNamedItem("data-anim-autoplay").value:s.getNamedItem("data-bm-autoplay")?s.getNamedItem("data-bm-autoplay").value:!s.getNamedItem("bm-autoplay")||s.getNamedItem("bm-autoplay").value;r.autoplay="false"!==a,r.name=s.getNamedItem("data-name")?s.getNamedItem("data-name").value:s.getNamedItem("data-bm-name")?s.getNamedItem("data-bm-name").value:s.getNamedItem("bm-name")?s.getNamedItem("bm-name").value:"";var n=s.getNamedItem("data-anim-prerender")?s.getNamedItem("data-anim-prerender").value:s.getNamedItem("data-bm-prerender")?s.getNamedItem("data-bm-prerender").value:s.getNamedItem("bm-prerender")?s.getNamedItem("bm-prerender").value:"";"false"===n&&(r.prerender=!1),this.setParams(r)},AnimationItem.prototype.includeLayers=function(t){t.op>this.animationData.op&&(this.animationData.op=t.op,this.totalFrames=Math.floor(t.op-this.animationData.ip),this.animationData.tf=this.totalFrames);var e,r,s=this.animationData.layers,i=s.length,a=t.layers,n=a.length;for(r=0;r<n;r+=1)for(e=0;e<i;){if(s[e].id==a[r].id){s[e]=a[r];break}e+=1}if((t.chars||t.fonts)&&(this.renderer.globalData.fontManager.addChars(t.chars),this.renderer.globalData.fontManager.addFonts(t.fonts,this.renderer.globalData.defs)),t.assets)for(i=t.assets.length,e=0;e<i;e+=1)this.animationData.assets.push(t.assets[e]);this.animationData.__complete=!1,dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.renderer.includeLayers(t.layers),expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.renderFrame(null),this.loadNextSegment()},AnimationItem.prototype.loadNextSegment=function(){var t=this.animationData.segments;if(!t||0===t.length||!this.autoloadSegments)return this.trigger("data_ready"),void(this.timeCompleted=this.animationData.tf);var e=t.shift();this.timeCompleted=e.time*this.frameRate;var r=new XMLHttpRequest,s=this,i=this.path+this.fileName+"_"+this.segmentPos+".json";this.segmentPos+=1,r.open("GET",i,!0),r.send(),r.onreadystatechange=function(){if(4==r.readyState)if(200==r.status)s.includeLayers(JSON.parse(r.responseText));else try{var t=JSON.parse(r.responseText);s.includeLayers(t)}catch(e){}}},AnimationItem.prototype.loadSegments=function(){var t=this.animationData.segments;t||(this.timeCompleted=this.animationData.tf),this.loadNextSegment()},AnimationItem.prototype.configAnimation=function(t){var e=this;this.renderer&&this.renderer.destroyed||(this.animationData=t,this.totalFrames=Math.floor(this.animationData.op-this.animationData.ip),this.animationData.tf=this.totalFrames,this.renderer.configAnimation(t),t.assets||(t.assets=[]),t.comps&&(t.assets=t.assets.concat(t.comps),t.comps=null),this.renderer.searchExtraCompositions(t.assets),this.layers=this.animationData.layers,this.assets=this.animationData.assets,this.frameRate=this.animationData.fr,this.firstFrame=Math.round(this.animationData.ip),this.frameMult=this.animationData.fr/1e3,this.trigger("config_ready"),this.imagePreloader=new ImagePreloader,this.imagePreloader.setAssetsPath(this.assetsPath),this.imagePreloader.setPath(this.path),this.imagePreloader.loadAssets(t.assets,function(t){t||e.trigger("loaded_images")}),this.loadSegments(),this.updaFrameModifier(),this.renderer.globalData.fontManager?this.waitForFontsLoaded():(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()))},AnimationItem.prototype.waitForFontsLoaded=function(){function t(){this.renderer.globalData.fontManager.loaded?(dataManager.completeData(this.animationData,this.renderer.globalData.fontManager),this.checkLoaded()):setTimeout(t.bind(this),20)}return function(){t.bind(this)()}}(),AnimationItem.prototype.addPendingElement=function(){this.pendingElements+=1},AnimationItem.prototype.elementLoaded=function(){this.pendingElements--,this.checkLoaded()},AnimationItem.prototype.checkLoaded=function(){0===this.pendingElements&&(expressionsPlugin&&expressionsPlugin.initExpressions(this),this.renderer.initItems(),setTimeout(function(){this.trigger("DOMLoaded")}.bind(this),0),this.isLoaded=!0,this.gotoFrame(),this.autoplay&&this.play())},AnimationItem.prototype.resize=function(){this.renderer.updateContainerSize()},AnimationItem.prototype.setSubframe=function(t){this.subframeEnabled=!!t},AnimationItem.prototype.gotoFrame=function(){this.currentFrame=this.subframeEnabled?this.currentRawFrame:~~this.currentRawFrame,this.timeCompleted!==this.totalFrames&&this.currentFrame>this.timeCompleted&&(this.currentFrame=this.timeCompleted),this.trigger("enterFrame"),this.renderFrame()},AnimationItem.prototype.renderFrame=function(){this.isLoaded!==!1&&this.renderer.renderFrame(this.currentFrame+this.firstFrame)},AnimationItem.prototype.play=function(t){t&&this.name!=t||this.isPaused===!0&&(this.isPaused=!1,this._idle&&(this._idle=!1,this.trigger("_active")))},AnimationItem.prototype.pause=function(t){t&&this.name!=t||this.isPaused===!1&&(this.isPaused=!0,this.pendingSegment||(this._idle=!0,this.trigger("_idle")))},AnimationItem.prototype.togglePause=function(t){t&&this.name!=t||(this.isPaused===!0?this.play():this.pause())},AnimationItem.prototype.stop=function(t){t&&this.name!=t||(this.pause(),this.currentFrame=this.currentRawFrame=0,this.playCount=0,this.gotoFrame())},AnimationItem.prototype.goToAndStop=function(t,e,r){r&&this.name!=r||(e?this.setCurrentRawFrameValue(t):this.setCurrentRawFrameValue(t*this.frameModifier),this.pause())},AnimationItem.prototype.goToAndPlay=function(t,e,r){this.goToAndStop(t,e,r),this.play()},AnimationItem.prototype.advanceTime=function(t){return this.pendingSegment?(this.pendingSegment=!1,this.adjustSegment(this.segments.shift()),void(this.isPaused&&this.play())):void(this.isPaused!==!0&&this.isLoaded!==!1&&this.setCurrentRawFrameValue(this.currentRawFrame+t*this.frameModifier))},AnimationItem.prototype.updateAnimation=function(t){this.setCurrentRawFrameValue(this.totalFrames*t)},AnimationItem.prototype.moveFrame=function(t,e){e&&this.name!=e||this.setCurrentRawFrameValue(this.currentRawFrame+t)},AnimationItem.prototype.adjustSegment=function(t){this.playCount=0,t[1]<t[0]?(this.frameModifier>0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(-1)),this.totalFrames=t[0]-t[1],this.firstFrame=t[1],this.setCurrentRawFrameValue(this.totalFrames-.001)):t[1]>t[0]&&(this.frameModifier<0&&(this.playSpeed<0?this.setSpeed(-this.playSpeed):this.setDirection(1)),this.totalFrames=t[1]-t[0],this.firstFrame=t[0],this.setCurrentRawFrameValue(.001)),this.trigger("segmentStart")},AnimationItem.prototype.setSegment=function(t,e){var r=-1;this.isPaused&&(this.currentRawFrame+this.firstFrame<t?r=t:this.currentRawFrame+this.firstFrame>e&&(r=e-t)),this.firstFrame=t,this.totalFrames=e-t,r!==-1&&this.goToAndStop(r,!0)},AnimationItem.prototype.playSegments=function(t,e){if("object"==typeof t[0]){var r,s=t.length;for(r=0;r<s;r+=1)this.segments.push(t[r])}else this.segments.push(t);e&&this.adjustSegment(this.segments.shift()),this.isPaused&&this.play()},AnimationItem.prototype.resetSegments=function(t){this.segments.length=0,this.segments.push([this.animationData.ip,this.animationData.op]),t&&this.adjustSegment(this.segments.shift())},AnimationItem.prototype.checkSegments=function(){this.segments.length&&(this.pendingSegment=!0)},AnimationItem.prototype.remove=function(t){t&&this.name!=t||this.renderer.destroy()},AnimationItem.prototype.destroy=function(t){t&&this.name!=t||this.renderer&&this.renderer.destroyed||(this.renderer.destroy(),this.trigger("destroy"),this._cbs=null,this.onEnterFrame=this.onLoopComplete=this.onComplete=this.onSegmentStart=this.onDestroy=null,this.renderer=null)},AnimationItem.prototype.setCurrentRawFrameValue=function(t){this.currentRawFrame=t;var e=!1;this.currentRawFrame>=this.totalFrames?(this.checkSegments(),this.loop===!1?(this.currentRawFrame=this.totalFrames,e=!0):(this.trigger("loopComplete"),this.playCount+=1,this.loop!==!0&&this.playCount==this.loop||this.pendingSegment?(this.currentRawFrame=this.totalFrames,e=!0):this.currentRawFrame=this.currentRawFrame%this.totalFrames)):this.currentRawFrame<0&&(this.checkSegments(),this.playCount-=1,this.playCount<0&&(this.playCount=0),this.loop===!1||this.pendingSegment?(this.currentRawFrame=0,e=!0):(this.trigger("loopComplete"),this.currentRawFrame=(this.totalFrames+this.currentRawFrame)%this.totalFrames)),this.gotoFrame(),e&&(this.pause(),this.trigger("complete"))},AnimationItem.prototype.setSpeed=function(t){this.playSpeed=t,this.updaFrameModifier()},AnimationItem.prototype.setDirection=function(t){this.playDirection=t<0?-1:1,this.updaFrameModifier()},AnimationItem.prototype.updaFrameModifier=function(){this.frameModifier=this.frameMult*this.playSpeed*this.playDirection},AnimationItem.prototype.getPath=function(){return this.path},AnimationItem.prototype.getAssetsPath=function(t){var e="";if(this.assetsPath){var r=t.p;r.indexOf("images/")!==-1&&(r=r.split("/")[1]),e=this.assetsPath+r}else e=this.path,e+=t.u?t.u:"",e+=t.p;return e},AnimationItem.prototype.getAssetData=function(t){for(var e=0,r=this.assets.length;e<r;){if(t==this.assets[e].id)return this.assets[e];e+=1}},AnimationItem.prototype.hide=function(){this.renderer.hide()},AnimationItem.prototype.show=function(){this.renderer.show()},AnimationItem.prototype.getAssets=function(){return this.assets},AnimationItem.prototype.trigger=function(t){if(this._cbs&&this._cbs[t])switch(t){case"enterFrame":this.triggerEvent(t,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult));break;case"loopComplete":this.triggerEvent(t,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult));break;case"complete":this.triggerEvent(t,new BMCompleteEvent(t,this.frameMult));break;case"segmentStart":this.triggerEvent(t,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames));break;case"destroy":this.triggerEvent(t,new BMDestroyEvent(t,this));break;default:this.triggerEvent(t)}"enterFrame"===t&&this.onEnterFrame&&this.onEnterFrame.call(this,new BMEnterFrameEvent(t,this.currentFrame,this.totalFrames,this.frameMult)),"loopComplete"===t&&this.onLoopComplete&&this.onLoopComplete.call(this,new BMCompleteLoopEvent(t,this.loop,this.playCount,this.frameMult)),"complete"===t&&this.onComplete&&this.onComplete.call(this,new BMCompleteEvent(t,this.frameMult)),"segmentStart"===t&&this.onSegmentStart&&this.onSegmentStart.call(this,new BMSegmentStartEvent(t,this.firstFrame,this.totalFrames)),"destroy"===t&&this.onDestroy&&this.onDestroy.call(this,new BMDestroyEvent(t,this))},AnimationItem.prototype.addEventListener=_addEventListener,AnimationItem.prototype.removeEventListener=_removeEventListener,AnimationItem.prototype.triggerEvent=_triggerEvent,extendPrototype(BaseRenderer,CanvasRenderer),CanvasRenderer.prototype.createBase=function(t){return new CVBaseElement(t,this,this.globalData)},CanvasRenderer.prototype.createShape=function(t){return new CVShapeElement(t,this,this.globalData)},CanvasRenderer.prototype.createText=function(t){return new CVTextElement(t,this,this.globalData)},CanvasRenderer.prototype.createImage=function(t){return new CVImageElement(t,this,this.globalData)},CanvasRenderer.prototype.createComp=function(t){return new CVCompElement(t,this,this.globalData)},CanvasRenderer.prototype.createSolid=function(t){return new CVSolidElement(t,this,this.globalData)},CanvasRenderer.prototype.ctxTransform=function(t){if(1!==t[0]||0!==t[1]||0!==t[4]||1!==t[5]||0!==t[12]||0!==t[13]){if(!this.renderConfig.clearCanvas)return void this.canvasContext.transform(t[0],t[1],t[4],t[5],t[12],t[13]);this.transformMat.cloneFromProps(t),this.transformMat.transform(this.contextData.cTr.props[0],this.contextData.cTr.props[1],this.contextData.cTr.props[2],this.contextData.cTr.props[3],this.contextData.cTr.props[4],this.contextData.cTr.props[5],this.contextData.cTr.props[6],this.contextData.cTr.props[7],this.contextData.cTr.props[8],this.contextData.cTr.props[9],this.contextData.cTr.props[10],this.contextData.cTr.props[11],this.contextData.cTr.props[12],this.contextData.cTr.props[13],this.contextData.cTr.props[14],this.contextData.cTr.props[15]),
this.contextData.cTr.cloneFromProps(this.transformMat.props);var e=this.contextData.cTr.props;this.canvasContext.setTransform(e[0],e[1],e[4],e[5],e[12],e[13])}},CanvasRenderer.prototype.ctxOpacity=function(t){if(1!==t){if(!this.renderConfig.clearCanvas)return void(this.canvasContext.globalAlpha*=t<0?0:t);this.contextData.cO*=t<0?0:t,this.canvasContext.globalAlpha=this.contextData.cO}},CanvasRenderer.prototype.reset=function(){return this.renderConfig.clearCanvas?(this.contextData.cArrPos=0,this.contextData.cTr.reset(),void(this.contextData.cO=1)):void this.canvasContext.restore()},CanvasRenderer.prototype.save=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.save();t&&this.canvasContext.save();var e=this.contextData.cTr.props;null!==this.contextData.saved[this.contextData.cArrPos]&&void 0!==this.contextData.saved[this.contextData.cArrPos]||(this.contextData.saved[this.contextData.cArrPos]=new Array(16));var r,s=this.contextData.saved[this.contextData.cArrPos];for(r=0;r<16;r+=1)s[r]=e[r];this.contextData.savedOp[this.contextData.cArrPos]=this.contextData.cO,this.contextData.cArrPos+=1},CanvasRenderer.prototype.restore=function(t){if(!this.renderConfig.clearCanvas)return void this.canvasContext.restore();t&&this.canvasContext.restore(),this.contextData.cArrPos-=1;var e,r=this.contextData.saved[this.contextData.cArrPos],s=this.contextData.cTr.props;for(e=0;e<16;e+=1)s[e]=r[e];this.canvasContext.setTransform(r[0],r[1],r[4],r[5],r[12],r[13]),r=this.contextData.savedOp[this.contextData.cArrPos],this.contextData.cO=r,this.canvasContext.globalAlpha=r},CanvasRenderer.prototype.configAnimation=function(t){this.animationItem.wrapper?(this.animationItem.container=document.createElement("canvas"),this.animationItem.container.style.width="100%",this.animationItem.container.style.height="100%",this.animationItem.container.style.transformOrigin=this.animationItem.container.style.mozTransformOrigin=this.animationItem.container.style.webkitTransformOrigin=this.animationItem.container.style["-webkit-transform"]="0px 0px 0px",this.animationItem.wrapper.appendChild(this.animationItem.container),this.canvasContext=this.animationItem.container.getContext("2d"),this.renderConfig.className&&this.animationItem.container.setAttribute("class",this.renderConfig.className)):this.canvasContext=this.renderConfig.context,this.data=t,this.globalData.canvasContext=this.canvasContext,this.globalData.renderer=this,this.globalData.isDashed=!1,this.globalData.totalFrames=Math.floor(t.tf),this.globalData.compWidth=t.w,this.globalData.compHeight=t.h,this.globalData.frameRate=t.fr,this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.progressiveLoad=this.renderConfig.progressiveLoad,this.layers=t.layers,this.transformCanvas={},this.transformCanvas.w=t.w,this.transformCanvas.h=t.h,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,document.body),this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.addPendingElement=this.animationItem.addPendingElement.bind(this.animationItem),this.globalData.transformCanvas=this.transformCanvas,this.elements=Array.apply(null,{length:t.layers.length}),this.updateContainerSize()},CanvasRenderer.prototype.updateContainerSize=function(){var t,e;this.animationItem.wrapper&&this.animationItem.container?(t=this.animationItem.wrapper.offsetWidth,e=this.animationItem.wrapper.offsetHeight,this.animationItem.container.setAttribute("width",t*this.renderConfig.dpr),this.animationItem.container.setAttribute("height",e*this.renderConfig.dpr)):(t=this.canvasContext.canvas.width*this.renderConfig.dpr,e=this.canvasContext.canvas.height*this.renderConfig.dpr);var r,s;if(this.renderConfig.preserveAspectRatio.indexOf("meet")!==-1||this.renderConfig.preserveAspectRatio.indexOf("slice")!==-1){var i=this.renderConfig.preserveAspectRatio.split(" "),a=i[1]||"meet",n=i[0]||"xMidYMid",o=n.substr(0,4),h=n.substr(4);r=t/e,s=this.transformCanvas.w/this.transformCanvas.h,s>r&&"meet"===a||s<r&&"slice"===a?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=t/(this.transformCanvas.w/this.renderConfig.dpr)):(this.transformCanvas.sx=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr)),"xMid"===o&&(s<r&&"meet"===a||s>r&&"slice"===a)?this.transformCanvas.tx=(t-this.transformCanvas.w*(e/this.transformCanvas.h))/2*this.renderConfig.dpr:"xMax"===o&&(s<r&&"meet"===a||s>r&&"slice"===a)?this.transformCanvas.tx=(t-this.transformCanvas.w*(e/this.transformCanvas.h))*this.renderConfig.dpr:this.transformCanvas.tx=0,"YMid"===h&&(s>r&&"meet"===a||s<r&&"slice"===a)?this.transformCanvas.ty=(e-this.transformCanvas.h*(t/this.transformCanvas.w))/2*this.renderConfig.dpr:"YMax"===h&&(s>r&&"meet"===a||s<r&&"slice"===a)?this.transformCanvas.ty=(e-this.transformCanvas.h*(t/this.transformCanvas.w))*this.renderConfig.dpr:this.transformCanvas.ty=0}else"none"==this.renderConfig.preserveAspectRatio?(this.transformCanvas.sx=t/(this.transformCanvas.w/this.renderConfig.dpr),this.transformCanvas.sy=e/(this.transformCanvas.h/this.renderConfig.dpr),this.transformCanvas.tx=0,this.transformCanvas.ty=0):(this.transformCanvas.sx=this.renderConfig.dpr,this.transformCanvas.sy=this.renderConfig.dpr,this.transformCanvas.tx=0,this.transformCanvas.ty=0);this.transformCanvas.props=[this.transformCanvas.sx,0,0,0,0,this.transformCanvas.sy,0,0,0,0,1,0,this.transformCanvas.tx,this.transformCanvas.ty,0,1];var l,p=this.elements.length;for(l=0;l<p;l+=1)this.elements[l]&&0===this.elements[l].data.ty&&this.elements[l].resize(this.globalData.transformCanvas)},CanvasRenderer.prototype.destroy=function(){this.renderConfig.clearCanvas&&(this.animationItem.wrapper.innerHTML="");var t,e=this.layers?this.layers.length:0;for(t=e-1;t>=0;t-=1)this.elements[t]&&this.elements[t].destroy();this.elements.length=0,this.globalData.canvasContext=null,this.animationItem.container=null,this.destroyed=!0},CanvasRenderer.prototype.renderFrame=function(t){if(!(this.renderedFrame==t&&this.renderConfig.clearCanvas===!0||this.destroyed||null===t)){this.renderedFrame=t,this.globalData.frameNum=t-this.animationItem.firstFrame,this.globalData.frameId+=1,this.globalData.projectInterface.currentFrame=t,this.renderConfig.clearCanvas===!0?(this.reset(),this.canvasContext.save(),this.canvasContext.clearRect(this.transformCanvas.tx,this.transformCanvas.ty,this.transformCanvas.w*this.transformCanvas.sx,this.transformCanvas.h*this.transformCanvas.sy)):this.save(),this.ctxTransform(this.transformCanvas.props),this.canvasContext.beginPath(),this.canvasContext.rect(0,0,this.transformCanvas.w,this.transformCanvas.h),this.canvasContext.closePath(),this.canvasContext.clip();var e,r=this.layers.length;for(this.completeLayers||this.checkLayers(t),e=0;e<r;e++)(this.completeLayers||this.elements[e])&&this.elements[e].prepareFrame(t-this.layers[e].st);for(e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.renderConfig.clearCanvas!==!0?this.restore():this.canvasContext.restore()}},CanvasRenderer.prototype.buildItem=function(t){var e=this.elements;if(!e[t]&&99!=this.layers[t].ty){var r=this.createItem(this.layers[t],this,this.globalData);e[t]=r,r.initExpressions(),0===this.layers[t].ty&&r.resize(this.globalData.transformCanvas)}},CanvasRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},CanvasRenderer.prototype.hide=function(){this.animationItem.container.style.display="none"},CanvasRenderer.prototype.show=function(){this.animationItem.container.style.display="block"},CanvasRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length;createNS("g");for(e=0;e<r;e+=1)if(t[e].xt){var s=this.createComp(t[e],this.globalData.comp,this.globalData);s.initExpressions(),this.globalData.projectInterface.registerComposition(s)}},extendPrototype(BaseRenderer,HybridRenderer),HybridRenderer.prototype.buildItem=SVGRenderer.prototype.buildItem,HybridRenderer.prototype.checkPendingElements=function(){for(;this.pendingElements.length;){var t=this.pendingElements.pop();t.checkParenting()}},HybridRenderer.prototype.appendElementInPos=function(t,e){var r=t.getBaseElement();if(r){var s=this.layers[e];if(s.ddd&&this.supports3d)this.addTo3dContainer(r,e);else{for(var i,a,n=0;n<e;)this.elements[n]&&this.elements[n]!==!0&&this.elements[n].getBaseElement&&(a=this.elements[n],i=this.layers[n].ddd?this.getThreeDContainerByPos(n):a.getBaseElement()),n+=1;i?s.ddd&&this.supports3d||this.layerElement.insertBefore(r,i):s.ddd&&this.supports3d||this.layerElement.appendChild(r)}}},HybridRenderer.prototype.createBase=function(t){return new SVGBaseElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createShape=function(t){return this.supports3d?new HShapeElement(t,this.layerElement,this.globalData,this):new IShapeElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createText=function(t){return this.supports3d?new HTextElement(t,this.layerElement,this.globalData,this):new SVGTextElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createCamera=function(t){return this.camera=new HCameraElement(t,this.layerElement,this.globalData,this),this.camera},HybridRenderer.prototype.createImage=function(t){return this.supports3d?new HImageElement(t,this.layerElement,this.globalData,this):new IImageElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createComp=function(t){return this.supports3d?new HCompElement(t,this.layerElement,this.globalData,this):new ICompElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.createSolid=function(t){return this.supports3d?new HSolidElement(t,this.layerElement,this.globalData,this):new ISolidElement(t,this.layerElement,this.globalData,this)},HybridRenderer.prototype.getThreeDContainerByPos=function(t){for(var e=0,r=this.threeDElements.length;e<r;){if(this.threeDElements[e].startPos<=t&&this.threeDElements[e].endPos>=t)return this.threeDElements[e].perspectiveElem;e+=1}},HybridRenderer.prototype.createThreeDContainer=function(t){var e=document.createElement("div");styleDiv(e),e.style.width=this.globalData.compSize.w+"px",e.style.height=this.globalData.compSize.h+"px",e.style.transformOrigin=e.style.mozTransformOrigin=e.style.webkitTransformOrigin="50% 50%";var r=document.createElement("div");styleDiv(r),r.style.transform=r.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)",e.appendChild(r),this.resizerElem.appendChild(e);var s={container:r,perspectiveElem:e,startPos:t,endPos:t};return this.threeDElements.push(s),s},HybridRenderer.prototype.build3dContainers=function(){var t,e,r=this.layers.length;for(t=0;t<r;t+=1)this.layers[t].ddd?(e||(e=this.createThreeDContainer(t)),e.endPos=Math.max(e.endPos,t)):e=null},HybridRenderer.prototype.addTo3dContainer=function(t,e){for(var r=0,s=this.threeDElements.length;r<s;){if(e<=this.threeDElements[r].endPos){for(var i,a=this.threeDElements[r].startPos;a<e;)this.elements[a]&&this.elements[a].getBaseElement&&(i=this.elements[a].getBaseElement()),a+=1;i?this.threeDElements[r].container.insertBefore(t,i):this.threeDElements[r].container.appendChild(t);break}r+=1}},HybridRenderer.prototype.configAnimation=function(t){var e=document.createElement("div"),r=this.animationItem.wrapper;e.style.width=t.w+"px",e.style.height=t.h+"px",this.resizerElem=e,styleDiv(e),e.style.transformStyle=e.style.webkitTransformStyle=e.style.mozTransformStyle="flat",this.renderConfig.className&&r.setAttribute("class",this.renderConfig.className),r.appendChild(e),e.style.overflow="hidden";var s=createNS("svg");s.setAttribute("width","1"),s.setAttribute("height","1"),styleDiv(s),this.resizerElem.appendChild(s);var i=createNS("defs");s.appendChild(i),this.globalData.defs=i,this.data=t,this.globalData.getAssetData=this.animationItem.getAssetData.bind(this.animationItem),this.globalData.getAssetsPath=this.animationItem.getAssetsPath.bind(this.animationItem),this.globalData.elementLoaded=this.animationItem.elementLoaded.bind(this.animationItem),this.globalData.frameId=0,this.globalData.compSize={w:t.w,h:t.h},this.globalData.frameRate=t.fr,this.layers=t.layers,this.globalData.fontManager=new FontManager,this.globalData.fontManager.addChars(t.chars),this.globalData.fontManager.addFonts(t.fonts,s),this.layerElement=this.resizerElem,this.build3dContainers(),this.updateContainerSize()},HybridRenderer.prototype.destroy=function(){this.animationItem.wrapper.innerHTML="",this.animationItem.container=null,this.globalData.defs=null;var t,e=this.layers?this.layers.length:0;for(t=0;t<e;t++)this.elements[t].destroy();this.elements.length=0,this.destroyed=!0,this.animationItem=null},HybridRenderer.prototype.updateContainerSize=function(){var t,e,r,s,i=this.animationItem.wrapper.offsetWidth,a=this.animationItem.wrapper.offsetHeight,n=i/a,o=this.globalData.compSize.w/this.globalData.compSize.h;o>n?(t=i/this.globalData.compSize.w,e=i/this.globalData.compSize.w,r=0,s=(a-this.globalData.compSize.h*(i/this.globalData.compSize.w))/2):(t=a/this.globalData.compSize.h,e=a/this.globalData.compSize.h,r=(i-this.globalData.compSize.w*(a/this.globalData.compSize.h))/2,s=0),this.resizerElem.style.transform=this.resizerElem.style.webkitTransform="matrix3d("+t+",0,0,0,0,"+e+",0,0,0,0,1,0,"+r+","+s+",0,1)"},HybridRenderer.prototype.renderFrame=SVGRenderer.prototype.renderFrame,HybridRenderer.prototype.hide=function(){this.resizerElem.style.display="none"},HybridRenderer.prototype.show=function(){this.resizerElem.style.display="block"},HybridRenderer.prototype.initItems=function(){if(this.buildAllItems(),this.camera)this.camera.setup();else{var t,e=this.globalData.compSize.w,r=this.globalData.compSize.h,s=this.threeDElements.length;for(t=0;t<s;t+=1)this.threeDElements[t].perspectiveElem.style.perspective=this.threeDElements[t].perspectiveElem.style.webkitPerspective=Math.sqrt(Math.pow(e,2)+Math.pow(r,2))+"px"}},HybridRenderer.prototype.searchExtraCompositions=function(t){var e,r=t.length,s=document.createElement("div");for(e=0;e<r;e+=1)if(t[e].xt){var i=this.createComp(t[e],s,this.globalData.comp,null);i.initExpressions(),this.globalData.projectInterface.registerComposition(i)}},createElement(BaseElement,CVBaseElement),CVBaseElement.prototype.createElements=function(){this.checkParenting()},CVBaseElement.prototype.checkBlendMode=function(t){if(t.blendMode!==this.data.bm){t.blendMode=this.data.bm;var e="";switch(this.data.bm){case 0:e="normal";break;case 1:e="multiply";break;case 2:e="screen";break;case 3:e="overlay";break;case 4:e="darken";break;case 5:e="lighten";break;case 6:e="color-dodge";break;case 7:e="color-burn";break;case 8:e="hard-light";break;case 9:e="soft-light";break;case 10:e="difference";break;case 11:e="exclusion";break;case 12:e="hue";break;case 13:e="saturation";break;case 14:e="color";break;case 15:e="luminosity"}t.canvasContext.globalCompositeOperation=e}},CVBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty)return!1;if(this.checkBlendMode(0===this.data.ty?this.parentGlobalData:this.globalData),!this.isVisible)return this.isVisible;this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v;var e,r=this.finalTransform.mat;if(this.hierarchy){var s,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,r.cloneFromProps(e),s=0;s<i;s+=1)this.finalTransform.matMdf=!!this.hierarchy[s].finalTransform.mProp.mdf||this.finalTransform.matMdf,e=this.hierarchy[s].finalTransform.mProp.v.props,r.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else t?(e=this.finalTransform.mProp.v.props,r.cloneFromProps(e)):r.cloneFromProps(this.finalTransform.mProp.v.props);return t&&(e=t.mat.props,r.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15]),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=!!t.opMdf||this.finalTransform.opMdf,this.finalTransform.matMdf=!!t.matMdf||this.finalTransform.matMdf),this.data.hasMask&&(this.globalData.renderer.save(!0),this.maskManager.renderFrame(0===this.data.ty?null:r)),this.data.hd&&(this.isVisible=!1),this.isVisible},CVBaseElement.prototype.addMasks=function(t){this.maskManager=new CVMaskElement(t,this,this.globalData)},CVBaseElement.prototype.destroy=function(){this.canvasContext=null,this.data=null,this.globalData=null,this.maskManager&&this.maskManager.destroy()},CVBaseElement.prototype.mHelper=new Matrix,createElement(CVBaseElement,CVCompElement),CVCompElement.prototype.ctxTransform=CanvasRenderer.prototype.ctxTransform,CVCompElement.prototype.ctxOpacity=CanvasRenderer.prototype.ctxOpacity,CVCompElement.prototype.save=CanvasRenderer.prototype.save,CVCompElement.prototype.restore=CanvasRenderer.prototype.restore,CVCompElement.prototype.reset=function(){this.contextData.cArrPos=0,this.contextData.cTr.reset(),this.contextData.cO=1},CVCompElement.prototype.resize=function(t){var e=Math.max(t.sx,t.sy);this.canvas.width=this.data.w*e,this.canvas.height=this.data.h*e,this.transformCanvas={sc:e,w:this.data.w*e,h:this.data.h*e,props:[e,0,0,0,0,e,0,0,0,0,1,0,0,0,0,1]};var r,s=this.elements.length;for(r=0;r<s;r+=1)this.elements[r]&&0===this.elements[r].data.ty&&this.elements[r].resize(t)},CVCompElement.prototype.prepareFrame=function(t){if(this.globalData.frameId=this.parentGlobalData.frameId,this.globalData.mdf=!1,this._parent.prepareFrame.call(this,t),this.isVisible!==!1||this.data.xt){var e=t;this.tm&&(e=this.tm.v,e===this.data.op&&(e=this.data.op-1)),this.renderedFrame=e/this.data.sr;var r,s=this.elements.length;for(this.completeLayers||this.checkLayers(t),r=0;r<s;r+=1)(this.completeLayers||this.elements[r])&&(this.elements[r].prepareFrame(e/this.data.sr-this.layers[r].st),0===this.elements[r].data.ty&&this.elements[r].globalData.mdf&&(this.globalData.mdf=!0));this.globalData.mdf&&!this.data.xt&&(this.canvasContext.clearRect(0,0,this.data.w,this.data.h),this.ctxTransform(this.transformCanvas.props))}},CVCompElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){if(this.globalData.mdf){var e,r=this.layers.length;for(e=r-1;e>=0;e-=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame()}this.data.hasMask&&this.globalData.renderer.restore(!0),this.firstFrame&&(this.firstFrame=!1),this.parentGlobalData.renderer.save(),this.parentGlobalData.renderer.ctxTransform(this.finalTransform.mat.props),this.parentGlobalData.renderer.ctxOpacity(this.finalTransform.opacity),this.parentGlobalData.renderer.canvasContext.drawImage(this.canvas,0,0,this.data.w,this.data.h),this.parentGlobalData.renderer.restore(),this.globalData.mdf&&this.reset()}},CVCompElement.prototype.setElements=function(t){this.elements=t},CVCompElement.prototype.getElements=function(){return this.elements},CVCompElement.prototype.destroy=function(){var t,e=this.layers.length;for(t=e-1;t>=0;t-=1)this.elements[t].destroy();this.layers=null,this.elements=null,this._parent.destroy.call(this._parent)},CVCompElement.prototype.checkLayers=CanvasRenderer.prototype.checkLayers,CVCompElement.prototype.buildItem=CanvasRenderer.prototype.buildItem,CVCompElement.prototype.checkPendingElements=CanvasRenderer.prototype.checkPendingElements,CVCompElement.prototype.addPendingElement=CanvasRenderer.prototype.addPendingElement,CVCompElement.prototype.buildAllItems=CanvasRenderer.prototype.buildAllItems,CVCompElement.prototype.createItem=CanvasRenderer.prototype.createItem,CVCompElement.prototype.createImage=CanvasRenderer.prototype.createImage,CVCompElement.prototype.createComp=CanvasRenderer.prototype.createComp,CVCompElement.prototype.createSolid=CanvasRenderer.prototype.createSolid,CVCompElement.prototype.createShape=CanvasRenderer.prototype.createShape,CVCompElement.prototype.createText=CanvasRenderer.prototype.createText,CVCompElement.prototype.createBase=CanvasRenderer.prototype.createBase,CVCompElement.prototype.buildElementParenting=CanvasRenderer.prototype.buildElementParenting,createElement(CVBaseElement,CVImageElement),CVImageElement.prototype.createElements=function(){var t=function(){if(this.globalData.elementLoaded(),this.assetData.w!==this.img.width||this.assetData.h!==this.img.height){var t=document.createElement("canvas");t.width=this.assetData.w,t.height=this.assetData.h;var e,r,s=t.getContext("2d"),i=this.img.width,a=this.img.height,n=i/a,o=this.assetData.w/this.assetData.h;n>o?(r=a,e=r*o):(e=i,r=e/o),s.drawImage(this.img,(i-e)/2,(a-r)/2,e,r,0,0,this.assetData.w,this.assetData.h),this.img=t}}.bind(this),e=function(){this.failed=!0,this.globalData.elementLoaded()}.bind(this);this.img=new Image,this.img.addEventListener("load",t,!1),this.img.addEventListener("error",e,!1);var r=this.globalData.getAssetsPath(this.assetData);this.img.src=r,this._parent.createElements.call(this)},CVImageElement.prototype.renderFrame=function(t){if(!this.failed&&this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext;this.globalData.renderer.save();var r=this.finalTransform.mat.props;this.globalData.renderer.ctxTransform(r),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.drawImage(this.img,0,0),this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},CVImageElement.prototype.destroy=function(){this.img=null,this._parent.destroy.call(this._parent)},CVMaskElement.prototype.prepareFrame=function(t){var e,r=this.dynamicProperties.length;for(e=0;e<r;e+=1)this.dynamicProperties[e].getValue(t),this.dynamicProperties[e].mdf&&(this.element.globalData.mdf=!0)},CVMaskElement.prototype.renderFrame=function(t){var e,r,s,i,a,n=this.element.canvasContext,o=this.data.masksProperties.length,h=!1;for(e=0;e<o;e++)if("n"!==this.masksProperties[e].mode){h===!1&&(n.beginPath(),h=!0),this.masksProperties[e].inv&&(n.moveTo(0,0),n.lineTo(this.element.globalData.compWidth,0),n.lineTo(this.element.globalData.compWidth,this.element.globalData.compHeight),n.lineTo(0,this.element.globalData.compHeight),n.lineTo(0,0)),a=this.viewData[e].v,r=t?t.applyToPointArray(a.v[0][0],a.v[0][1],0):a.v[0],n.moveTo(r[0],r[1]);var l,p=a._length;for(l=1;l<p;l++)r=t?t.applyToPointArray(a.o[l-1][0],a.o[l-1][1],0):a.o[l-1],s=t?t.applyToPointArray(a.i[l][0],a.i[l][1],0):a.i[l],i=t?t.applyToPointArray(a.v[l][0],a.v[l][1],0):a.v[l],n.bezierCurveTo(r[0],r[1],s[0],s[1],i[0],i[1]);r=t?t.applyToPointArray(a.o[l-1][0],a.o[l-1][1],0):a.o[l-1],s=t?t.applyToPointArray(a.i[0][0],a.i[0][1],0):a.i[0],i=t?t.applyToPointArray(a.v[0][0],a.v[0][1],0):a.v[0],n.bezierCurveTo(r[0],r[1],s[0],s[1],i[0],i[1])}h&&n.clip()},CVMaskElement.prototype.getMaskProperty=MaskElement.prototype.getMaskProperty,CVMaskElement.prototype.destroy=function(){this.element=null},createElement(CVBaseElement,CVShapeElement),CVShapeElement.prototype.transformHelper={opacity:1,mat:new Matrix,matMdf:!1,opMdf:!1},CVShapeElement.prototype.dashResetter=[],CVShapeElement.prototype.createElements=function(){this._parent.createElements.call(this),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties,!0)},CVShapeElement.prototype.createStyleElement=function(t,e){var r={data:t,type:t.ty,elements:[]},s={};if("fl"!=t.ty&&"st"!=t.ty||(s.c=PropertyFactory.getProp(this,t.c,1,255,e),s.c.k||(r.co="rgb("+bm_floor(s.c.v[0])+","+bm_floor(s.c.v[1])+","+bm_floor(s.c.v[2])+")")),s.o=PropertyFactory.getProp(this,t.o,0,.01,e),"st"==t.ty){if(r.lc=this.lcEnum[t.lc]||"round",r.lj=this.ljEnum[t.lj]||"round",1==t.lj&&(r.ml=t.ml),s.w=PropertyFactory.getProp(this,t.w,0,null,e),s.w.k||(r.wi=s.w.v),t.d){var i=new DashProperty(this,t.d,"canvas",e);s.d=i,s.d.k||(r.da=s.d.dashArray,r["do"]=s.d.dashoffset[0])}}else r.r=2===t.r?"evenodd":"nonzero";return this.stylesList.push(r),s.style=r,s},CVShapeElement.prototype.createGroupElement=function(t){var e={it:[],prevViewData:[]};return e},CVShapeElement.prototype.createTransformElement=function(t,e){var r={transform:{mat:new Matrix,opacity:1,matMdf:!1,opMdf:!1,op:PropertyFactory.getProp(this,t.o,0,.01,e),mProps:TransformPropertyFactory.getTransformProperty(this,t,e)},elements:[]};return r},CVShapeElement.prototype.createShapeElement=function(t,e){var r={nodes:[],trNodes:[],tr:[0,0,0,0,0,0]},s=4;"rc"==t.ty?s=5:"el"==t.ty?s=6:"sr"==t.ty&&(s=7),r.sh=ShapePropertyFactory.getShapeProp(this,t,s,e),this.shapes.push(r.sh),this.addShapeToModifiers(r),jLen=this.stylesList.length;var i=!1,a=!1;for(j=0;j<jLen;j+=1)this.stylesList[j].closed||(this.stylesList[j].elements.push(r),"st"===this.stylesList[j].type?i=!0:a=!0);return r.st=i,r.fl=a,r},CVShapeElement.prototype.reloadShapes=function(){this.firstFrame=!0;var t,e=this.itemsData.length;for(t=0;t<e;t+=1)this.prevViewData[t]=this.itemsData[t];this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.dynamicProperties,!0);var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue();this.renderModifiers()},CVShapeElement.prototype.searchShapes=function(t,e,r,s,i){var a,n,o,h,l=t.length-1,p=[],m=[];for(a=l;a>=0;a-=1){if(h=this.searchProcessedElement(t[a]),h?e[a]=r[h-1]:t[a]._render=i,"fl"==t[a].ty||"st"==t[a].ty)h?e[a].style.closed=!1:e[a]=this.createStyleElement(t[a],s),p.push(e[a].style);else if("gr"==t[a].ty){if(h)for(o=e[a].it.length,n=0;n<o;n+=1)e[a].prevViewData[n]=e[a].it[n];else e[a]=this.createGroupElement(t[a]);this.searchShapes(t[a].it,e[a].it,e[a].prevViewData,s,i)}else if("tr"==t[a].ty)h||(e[a]=this.createTransformElement(t[a],s));else if("sh"==t[a].ty||"rc"==t[a].ty||"el"==t[a].ty||"sr"==t[a].ty)h||(e[a]=this.createShapeElement(t[a],s));else if("tm"==t[a].ty||"rd"==t[a].ty){if(h)f=e[a],f.closed=!1;else{var f=ShapeModifiers.getModifier(t[a].ty);f.init(this,t[a],s),e[a]=f,this.shapeModifiers.push(f)}m.push(f)}else"rp"==t[a].ty&&(h?(f=e[a],f.closed=!0):(f=ShapeModifiers.getModifier(t[a].ty),e[a]=f,f.init(this,t,a,e,s),this.shapeModifiers.push(f),i=!1),m.push(f));this.addProcessedElement(t[a],a+1)}for(l=p.length,a=0;a<l;a+=1)p[a].closed=!0;for(l=m.length,a=0;a<l;a+=1)m[a].closed=!0},CVShapeElement.prototype.addShapeToModifiers=IShapeElement.prototype.addShapeToModifiers,CVShapeElement.prototype.renderModifiers=IShapeElement.prototype.renderModifiers,CVShapeElement.prototype.lcEnum=IShapeElement.prototype.lcEnum,CVShapeElement.prototype.ljEnum=IShapeElement.prototype.ljEnum,CVShapeElement.prototype.searchProcessedElement=IShapeElement.prototype.searchProcessedElement,CVShapeElement.prototype.addProcessedElement=IShapeElement.prototype.addProcessedElement,CVShapeElement.prototype.renderFrame=function(t){this._parent.renderFrame.call(this,t)!==!1&&(this.transformHelper.mat.reset(),this.transformHelper.opacity=this.finalTransform.opacity,this.transformHelper.matMdf=!1,this.transformHelper.opMdf=this.finalTransform.opMdf,this.renderModifiers(),this.renderShape(this.transformHelper,null,null,!0),this.data.hasMask&&this.globalData.renderer.restore(!0))},CVShapeElement.prototype.renderShape=function(t,e,r,s){var i,a;if(!e)for(e=this.shapesData,a=this.stylesList.length,i=0;i<a;i+=1)this.stylesList[i].d="",this.stylesList[i].mdf=!1;r||(r=this.itemsData),a=e.length-1;var n,o;for(n=t,i=a;i>=0;i-=1)if("tr"==e[i].ty){n=r[i].transform;var h=r[i].transform.mProps.v.props;if(n.matMdf=n.mProps.mdf,n.opMdf=n.op.mdf,o=n.mat,o.cloneFromProps(h),t){var l=t.mat.props;n.opacity=t.opacity,n.opacity*=r[i].transform.op.v,n.matMdf=!!t.matMdf||n.matMdf,n.opMdf=!!t.opMdf||n.opMdf,o.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],l[12],l[13],l[14],l[15])}else n.opacity=n.op.o}else"sh"==e[i].ty||"el"==e[i].ty||"rc"==e[i].ty||"sr"==e[i].ty?this.renderPath(e[i],r[i],n):"fl"==e[i].ty?this.renderFill(e[i],r[i],n):"st"==e[i].ty?this.renderStroke(e[i],r[i],n):"gr"==e[i].ty?this.renderShape(n,e[i].it,r[i].it):"tm"==e[i].ty;if(s){a=this.stylesList.length;var p,m,f,c,d,u,y,g=this.globalData.renderer,v=this.globalData.canvasContext;for(g.save(),g.ctxTransform(this.finalTransform.mat.props),i=0;i<a;i+=1)if(y=this.stylesList[i].type,("st"!==y||0!==this.stylesList[i].wi)&&this.stylesList[i].data._render){for(g.save(),d=this.stylesList[i].elements,"st"===y?(v.strokeStyle=this.stylesList[i].co,v.lineWidth=this.stylesList[i].wi,v.lineCap=this.stylesList[i].lc,v.lineJoin=this.stylesList[i].lj,v.miterLimit=this.stylesList[i].ml||0):v.fillStyle=this.stylesList[i].co,g.ctxOpacity(this.stylesList[i].coOp),"st"!==y&&v.beginPath(),m=d.length,p=0;p<m;p+=1){for("st"===y&&(v.beginPath(),this.stylesList[i].da?(v.setLineDash(this.stylesList[i].da),v.lineDashOffset=this.stylesList[i]["do"],this.globalData.isDashed=!0):this.globalData.isDashed&&(v.setLineDash(this.dashResetter),this.globalData.isDashed=!1)),u=d[p].trNodes,c=u.length,f=0;f<c;f+=1)"m"==u[f].t?v.moveTo(u[f].p[0],u[f].p[1]):"c"==u[f].t?v.bezierCurveTo(u[f].p1[0],u[f].p1[1],u[f].p2[0],u[f].p2[1],u[f].p3[0],u[f].p3[1]):v.closePath();"st"===y&&v.stroke()}"st"!==y&&v.fill(this.stylesList[i].r),g.restore()}g.restore(),this.firstFrame&&(this.firstFrame=!1)}},CVShapeElement.prototype.renderPath=function(t,e,r){var s,i,a,n,o=r.matMdf||e.sh.mdf||this.firstFrame;if(o){var h=e.sh.paths,l=r.mat;n=h._length;var p=e.trNodes;for(p.length=0,a=0;a<n;a+=1){var m=h.shapes[a];if(m&&m.v){for(s=m._length,i=1;i<s;i+=1)1==i&&p.push({t:"m",p:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),p.push({t:"c",p1:l.applyToPointArray(m.o[i-1][0],m.o[i-1][1],0),p2:l.applyToPointArray(m.i[i][0],m.i[i][1],0),p3:l.applyToPointArray(m.v[i][0],m.v[i][1],0)});1==s&&p.push({t:"m",p:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),m.c&&s&&(p.push({t:"c",p1:l.applyToPointArray(m.o[i-1][0],m.o[i-1][1],0),p2:l.applyToPointArray(m.i[0][0],m.i[0][1],0),p3:l.applyToPointArray(m.v[0][0],m.v[0][1],0)}),p.push({t:"z"})),e.lStr=p}}if(e.st)for(i=0;i<16;i+=1)e.tr[i]=r.mat.props[i];e.trNodes=p}},CVShapeElement.prototype.renderFill=function(t,e,r){var s=e.style;(e.c.mdf||this.firstFrame)&&(s.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||r.opMdf||this.firstFrame)&&(s.coOp=e.o.v*r.opacity)},CVShapeElement.prototype.renderStroke=function(t,e,r){var s=e.style,i=e.d;i&&(i.mdf||this.firstFrame)&&(s.da=i.dashArray,s["do"]=i.dashoffset[0]),(e.c.mdf||this.firstFrame)&&(s.co="rgb("+bm_floor(e.c.v[0])+","+bm_floor(e.c.v[1])+","+bm_floor(e.c.v[2])+")"),(e.o.mdf||r.opMdf||this.firstFrame)&&(s.coOp=e.o.v*r.opacity),(e.w.mdf||this.firstFrame)&&(s.wi=e.w.v)},CVShapeElement.prototype.destroy=function(){this.shapesData=null,this.globalData=null,this.canvasContext=null,this.stylesList.length=0,this.itemsData.length=0,this._parent.destroy.call(this._parent)},createElement(CVBaseElement,CVSolidElement),CVSolidElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext;this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(this.finalTransform.mat.props),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.fillStyle=this.data.sc,e.fillRect(0,0,this.data.sw,this.data.sh),this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},createElement(CVBaseElement,CVTextElement),extendPrototype(ITextElement,CVTextElement),CVTextElement.prototype.tHelper=document.createElement("canvas").getContext("2d"),CVTextElement.prototype.createElements=function(){this._parent.createElements.call(this)},CVTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:t.l?t.l.length:0});var e=!1;t.fc?(e=!0,this.values.fill=this.buildColor(t.fc)):this.values.fill="rgba(0,0,0,0)",
this.fill=e;var r=!1;t.sc&&(r=!0,this.values.stroke=this.buildColor(t.sc),this.values.sWidth=t.sw);var s,i,a=this.globalData.fontManager.getFontByName(t.f),n=t.l,o=this.mHelper;this.stroke=r,this.values.fValue=t.s+"px "+this.globalData.fontManager.getFontByName(t.f).fFamily,i=t.t.length;var h,l,p,m,f,c,d,u,y,g,v=this.data.singleShape,b=t.tr/1e3*t.s,E=0,P=0,x=!0,C=0;for(s=0;s<i;s+=1){for(h=this.globalData.fontManager.getCharData(t.t.charAt(s),a.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily),l=h&&h.data||{},o.reset(),v&&n[s].n&&(E=-b,P+=t.yOffset,P+=x?1:0,x=!1),f=l.shapes?l.shapes[0].it:[],d=f.length,o.scale(t.s/100,t.s/100),v&&this.applyTextPropertiesToMatrix(t,o,n[s].line,E,P),y=Array.apply(null,{length:d}),c=0;c<d;c+=1){for(m=f[c].ks.k.i.length,u=f[c].ks.k,g=[],p=1;p<m;p+=1)1==p&&g.push(o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[p][0],u.i[p][1],0),o.applyToY(u.i[p][0],u.i[p][1],0),o.applyToX(u.v[p][0],u.v[p][1],0),o.applyToY(u.v[p][0],u.v[p][1],0));g.push(o.applyToX(u.o[p-1][0],u.o[p-1][1],0),o.applyToY(u.o[p-1][0],u.o[p-1][1],0),o.applyToX(u.i[0][0],u.i[0][1],0),o.applyToY(u.i[0][0],u.i[0][1],0),o.applyToX(u.v[0][0],u.v[0][1],0),o.applyToY(u.v[0][0],u.v[0][1],0)),y[c]=g}v&&(E+=n[s].l,E+=b),this.textSpans[C]?this.textSpans[C].elem=y:this.textSpans[C]={elem:y},C+=1}},CVTextElement.prototype.renderFrame=function(t){if(this._parent.renderFrame.call(this,t)!==!1){var e=this.canvasContext,r=this.finalTransform.mat.props;this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(r),this.globalData.renderer.ctxOpacity(this.finalTransform.opacity),e.font=this.values.fValue,e.lineCap="butt",e.lineJoin="miter",e.miterLimit=4,this.data.singleShape||this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag);var s,i,a,n,o,h,l=this.textAnimator.renderedLetters,p=this.textProperty.currentData.l;i=p.length;var m,f,c,d=null,u=null,y=null;for(s=0;s<i;s+=1)if(!p[s].n){if(m=l[s],m&&(this.globalData.renderer.save(),this.globalData.renderer.ctxTransform(m.p),this.globalData.renderer.ctxOpacity(m.o)),this.fill){for(m&&m.fc?d!==m.fc&&(d=m.fc,e.fillStyle=m.fc):d!==this.values.fill&&(d=this.values.fill,e.fillStyle=this.values.fill),f=this.textSpans[s].elem,n=f.length,this.globalData.canvasContext.beginPath(),a=0;a<n;a+=1)for(c=f[a],h=c.length,this.globalData.canvasContext.moveTo(c[0],c[1]),o=2;o<h;o+=6)this.globalData.canvasContext.bezierCurveTo(c[o],c[o+1],c[o+2],c[o+3],c[o+4],c[o+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.fill()}if(this.stroke){for(m&&m.sw?y!==m.sw&&(y=m.sw,e.lineWidth=m.sw):y!==this.values.sWidth&&(y=this.values.sWidth,e.lineWidth=this.values.sWidth),m&&m.sc?u!==m.sc&&(u=m.sc,e.strokeStyle=m.sc):u!==this.values.stroke&&(u=this.values.stroke,e.strokeStyle=this.values.stroke),f=this.textSpans[s].elem,n=f.length,this.globalData.canvasContext.beginPath(),a=0;a<n;a+=1)for(c=f[a],h=c.length,this.globalData.canvasContext.moveTo(c[0],c[1]),o=2;o<h;o+=6)this.globalData.canvasContext.bezierCurveTo(c[o],c[o+1],c[o+2],c[o+3],c[o+4],c[o+5]);this.globalData.canvasContext.closePath(),this.globalData.canvasContext.stroke()}m&&this.globalData.renderer.restore()}this.globalData.renderer.restore(this.data.hasMask),this.firstFrame&&(this.firstFrame=!1)}},createElement(BaseElement,HBaseElement),HBaseElement.prototype.checkBlendMode=function(){},HBaseElement.prototype.setBlendMode=BaseElement.prototype.setBlendMode,HBaseElement.prototype.getBaseElement=function(){return this.baseElement},HBaseElement.prototype.createElements=function(){this.data.hasMask?(this.layerElement=createNS("svg"),styleDiv(this.layerElement),this.baseElement=this.layerElement,this.maskedElement=this.layerElement):this.layerElement=this.parentContainer,this.transformedElement=this.layerElement,!this.data.ln||4!==this.data.ty&&0!==this.data.ty||(this.layerElement===this.parentContainer&&(this.layerElement=createNS("g"),this.baseElement=this.layerElement),this.layerElement.setAttribute("id",this.data.ln)),this.setBlendMode(),this.layerElement!==this.parentContainer&&(this.placeholder=null),this.checkParenting()},HBaseElement.prototype.renderFrame=function(t){if(3===this.data.ty)return!1;if(this.currentFrameNum===this.lastNum||!this.isVisible)return this.isVisible;this.lastNum=this.currentFrameNum,this.finalTransform.opMdf=this.finalTransform.op.mdf,this.finalTransform.matMdf=this.finalTransform.mProp.mdf,this.finalTransform.opacity=this.finalTransform.op.v,this.firstFrame&&(this.finalTransform.opMdf=!0,this.finalTransform.matMdf=!0);var e,r=this.finalTransform.mat;if(this.hierarchy){var s,i=this.hierarchy.length;for(e=this.finalTransform.mProp.v.props,r.cloneFromProps(e),s=0;s<i;s+=1)this.finalTransform.matMdf=!!this.hierarchy[s].finalTransform.mProp.mdf||this.finalTransform.matMdf,e=this.hierarchy[s].finalTransform.mProp.v.props,r.transform(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}else this.isVisible&&this.finalTransform.matMdf&&(t?(e=this.finalTransform.mProp.v.props,r.cloneFromProps(e)):r.cloneFromProps(this.finalTransform.mProp.v.props));return this.data.hasMask&&this.maskManager.renderFrame(r),t&&(e=t.mat.props,r.cloneFromProps(e),this.finalTransform.opacity*=t.opacity,this.finalTransform.opMdf=!!t.opMdf||this.finalTransform.opMdf,this.finalTransform.matMdf=!!t.matMdf||this.finalTransform.matMdf),this.finalTransform.matMdf&&(this.transformedElement.style.transform=this.transformedElement.style.webkitTransform=r.toCSS(),this.finalMat=r),this.finalTransform.opMdf&&(this.transformedElement.style.opacity=this.finalTransform.opacity),this.isVisible},HBaseElement.prototype.destroy=function(){this.layerElement=null,this.transformedElement=null,this.parentContainer=null,this.matteElement&&(this.matteElement=null),this.maskManager&&(this.maskManager.destroy(),this.maskManager=null)},HBaseElement.prototype.getDomElement=function(){return this.layerElement},HBaseElement.prototype.addMasks=function(t){this.maskManager=new MaskElement(t,this,this.globalData)},HBaseElement.prototype.hide=function(){},HBaseElement.prototype.setMatte=function(){},HBaseElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,createElement(HBaseElement,HSolidElement),HSolidElement.prototype.createElements=function(){var t=document.createElement("div");styleDiv(t);var e=createNS("svg");styleDiv(e),e.setAttribute("width",this.data.sw),e.setAttribute("height",this.data.sh),t.appendChild(e),this.layerElement=t,this.transformedElement=t,this.baseElement=t,this.innerElem=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),0!==this.data.bm&&this.setBlendMode();var r=createNS("rect");r.setAttribute("width",this.data.sw),r.setAttribute("height",this.data.sh),r.setAttribute("fill",this.data.sc),e.appendChild(r),this.data.hasMask&&(this.maskedElement=r),this.checkParenting()},HSolidElement.prototype.hide=SVGBaseElement.prototype.hide,HSolidElement.prototype.show=SVGBaseElement.prototype.show,HSolidElement.prototype.renderFrame=IImageElement.prototype.renderFrame,HSolidElement.prototype.destroy=IImageElement.prototype.destroy,createElement(HBaseElement,HCompElement),HCompElement.prototype.createElements=function(){var t=document.createElement("div");if(styleDiv(t),this.data.ln&&t.setAttribute("id",this.data.ln),t.style.clip="rect(0px, "+this.data.w+"px, "+this.data.h+"px, 0px)",this.data.hasMask){var e=createNS("svg");styleDiv(e),e.setAttribute("width",this.data.w),e.setAttribute("height",this.data.h);var r=createNS("g");e.appendChild(r),t.appendChild(e),this.maskedElement=r,this.baseElement=t,this.layerElement=r,this.transformedElement=t}else this.layerElement=t,this.baseElement=this.layerElement,this.transformedElement=t;this.checkParenting()},HCompElement.prototype.hide=ICompElement.prototype.hide,HCompElement.prototype.prepareFrame=ICompElement.prototype.prepareFrame,HCompElement.prototype.setElements=ICompElement.prototype.setElements,HCompElement.prototype.getElements=ICompElement.prototype.getElements,HCompElement.prototype.destroy=ICompElement.prototype.destroy,HCompElement.prototype.renderFrame=function(t){var e,r=this._parent.renderFrame.call(this,t),s=this.layers.length;if(r===!1)return void this.hide();for(this.hidden=!1,e=0;e<s;e+=1)(this.completeLayers||this.elements[e])&&this.elements[e].renderFrame();this.firstFrame&&(this.firstFrame=!1)},HCompElement.prototype.checkLayers=BaseRenderer.prototype.checkLayers,HCompElement.prototype.buildItem=HybridRenderer.prototype.buildItem,HCompElement.prototype.checkPendingElements=HybridRenderer.prototype.checkPendingElements,HCompElement.prototype.addPendingElement=HybridRenderer.prototype.addPendingElement,HCompElement.prototype.buildAllItems=BaseRenderer.prototype.buildAllItems,HCompElement.prototype.createItem=HybridRenderer.prototype.createItem,HCompElement.prototype.buildElementParenting=HybridRenderer.prototype.buildElementParenting,HCompElement.prototype.createImage=HybridRenderer.prototype.createImage,HCompElement.prototype.createComp=HybridRenderer.prototype.createComp,HCompElement.prototype.createSolid=HybridRenderer.prototype.createSolid,HCompElement.prototype.createShape=HybridRenderer.prototype.createShape,HCompElement.prototype.createText=HybridRenderer.prototype.createText,HCompElement.prototype.createBase=HybridRenderer.prototype.createBase,HCompElement.prototype.appendElementInPos=HybridRenderer.prototype.appendElementInPos,createElement(HBaseElement,HShapeElement);var parent=HShapeElement.prototype._parent;extendPrototype(IShapeElement,HShapeElement),HShapeElement.prototype._parent=parent,HShapeElement.prototype._renderShapeFrame=HShapeElement.prototype.renderFrame,HShapeElement.prototype.createElements=function(){var t=document.createElement("div");styleDiv(t);var e=createNS("svg");styleDiv(e);var r=this.comp.data?this.comp.data:this.globalData.compSize;if(e.setAttribute("width",r.w),e.setAttribute("height",r.h),this.data.hasMask){var s=createNS("g");t.appendChild(e),e.appendChild(s),this.maskedElement=s,this.layerElement=s,this.shapesContainer=s}else t.appendChild(e),this.layerElement=e,this.shapesContainer=createNS("g"),this.layerElement.appendChild(this.shapesContainer);this.data.hd||(this.baseElement=t),this.innerElem=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),this.searchShapes(this.shapesData,this.itemsData,this.prevViewData,this.layerElement,this.dynamicProperties,0,[],!0),this.buildExpressionInterface(),this.layerElement=t,this.transformedElement=t,this.shapeCont=e,0!==this.data.bm&&this.setBlendMode(),this.checkParenting()},HShapeElement.prototype.renderFrame=function(t){var e=this.firstFrame;if(this._renderShapeFrame(),this.isVisible&&(this.elemMdf||e)){var r=this.shapeCont.getBBox(),s=!1;this.currentBBox.w!==r.width&&(this.currentBBox.w=r.width,this.shapeCont.setAttribute("width",r.width),s=!0),this.currentBBox.h!==r.height&&(this.currentBBox.h=r.height,this.shapeCont.setAttribute("height",r.height),s=!0),(s||this.currentBBox.x!==r.x||this.currentBBox.y!==r.y)&&(this.currentBBox.w=r.width,this.currentBBox.h=r.height,this.currentBBox.x=r.x,this.currentBBox.y=r.y,this.shapeCont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.shapeCont.style.transform=this.shapeCont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}},createElement(HBaseElement,HTextElement),extendPrototype(ITextElement,HTextElement),HTextElement.prototype.createElements=function(){this.isMasked=this.checkMasks();var t=document.createElement("div");if(styleDiv(t),this.layerElement=t,this.transformedElement=t,this.isMasked){this.renderType="svg";var e=createNS("svg");styleDiv(e),this.cont=e,this.compW=this.comp.data.w,this.compH=this.comp.data.h,e.setAttribute("width",this.compW),e.setAttribute("height",this.compH);var r=createNS("g");e.appendChild(r),t.appendChild(e),this.maskedElement=r,this.innerElem=r}else this.renderType="html",this.innerElem=t;this.baseElement=t,this.checkParenting()},HTextElement.prototype.buildNewText=function(){var t=this.textProperty.currentData;this.renderedLetters=Array.apply(null,{length:this.textProperty.currentData.l?this.textProperty.currentData.l.length:0});var e=this.innerElem.style;e.color=e.fill=t.fc?this.buildColor(t.fc):"rgba(0,0,0,0)",t.sc&&(e.stroke=this.buildColor(t.sc),e.strokeWidth=t.sw+"px");var r=this.globalData.fontManager.getFontByName(t.f);if(!this.globalData.fontManager.chars)if(e.fontSize=t.s+"px",e.lineHeight=t.s+"px",r.fClass)this.innerElem.className=r.fClass;else{e.fontFamily=r.fFamily;var s=t.fWeight,i=t.fStyle;e.fontStyle=i,e.fontWeight=s}var a,n,o=t.l;n=o.length;var h,l,p,m,f=this.mHelper,c="",d=0;for(a=0;a<n;a+=1){if(this.globalData.fontManager.chars?(this.textPaths[d]?h=this.textPaths[d]:(h=createNS("path"),h.setAttribute("stroke-linecap","butt"),h.setAttribute("stroke-linejoin","round"),h.setAttribute("stroke-miterlimit","4")),this.isMasked||(this.textSpans[d]?(l=this.textSpans[d],p=l.children[0]):(l=document.createElement("div"),p=createNS("svg"),p.appendChild(h),styleDiv(l)))):this.isMasked?h=this.textPaths[d]?this.textPaths[d]:createNS("text"):this.textSpans[d]?(l=this.textSpans[d],h=this.textPaths[d]):(l=document.createElement("span"),styleDiv(l),h=document.createElement("span"),styleDiv(h),l.appendChild(h)),this.globalData.fontManager.chars){var u,y=this.globalData.fontManager.getCharData(t.t.charAt(a),r.fStyle,this.globalData.fontManager.getFontByName(t.f).fFamily);if(u=y?y.data:null,f.reset(),u&&u.shapes&&(m=u.shapes[0].it,f.scale(t.s/100,t.s/100),c=this.createPathShape(f,m),h.setAttribute("d",c)),this.isMasked)this.innerElem.appendChild(h);else if(this.innerElem.appendChild(l),u&&u.shapes){document.body.appendChild(p);var g=p.getBBox();p.setAttribute("width",g.width+2),p.setAttribute("height",g.height+2),p.setAttribute("viewBox",g.x-1+" "+(g.y-1)+" "+(g.width+2)+" "+(g.height+2)),p.style.transform=p.style.webkitTransform="translate("+(g.x-1)+"px,"+(g.y-1)+"px)",o[a].yOffset=g.y-1,l.appendChild(p)}else p.setAttribute("width",1),p.setAttribute("height",1)}else h.textContent=o[a].val,h.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),this.isMasked?this.innerElem.appendChild(h):(this.innerElem.appendChild(l),h.style.transform=h.style.webkitTransform="translate3d(0,"+-t.s/1.2+"px,0)");this.isMasked?this.textSpans[d]=h:this.textSpans[d]=l,this.textSpans[d].style.display="block",this.textPaths[d]=h,d+=1}for(;d<this.textSpans.length;)this.textSpans[d].style.display="none",d+=1},HTextElement.prototype.hide=SVGTextElement.prototype.hide,HTextElement.prototype.renderFrame=function(t){var e=this._parent.renderFrame.call(this,t);if(e===!1)return void this.hide();if(this.hidden&&(this.hidden=!1,this.innerElem.style.display="block",this.layerElement.style.display="block"),this.data.singleShape){if(!this.firstFrame&&!this.lettersChangedFlag)return;this.isMasked&&this.finalTransform.matMdf&&(this.cont.setAttribute("viewBox",-this.finalTransform.mProp.p.v[0]+" "+-this.finalTransform.mProp.p.v[1]+" "+this.compW+" "+this.compH),this.cont.style.transform=this.cont.style.webkitTransform="translate("+-this.finalTransform.mProp.p.v[0]+"px,"+-this.finalTransform.mProp.p.v[1]+"px)")}if(this.textAnimator.getMeasures(this.textProperty.currentData,this.lettersChangedFlag),this.lettersChangedFlag||this.textAnimator.lettersChangedFlag){var r,s,i=0,a=this.textAnimator.renderedLetters,n=this.textProperty.currentData.l;s=n.length;var o,h,l;for(r=0;r<s;r+=1)n[r].n?i+=1:(h=this.textSpans[r],l=this.textPaths[r],o=a[i],i+=1,this.isMasked?h.setAttribute("transform",o.m):h.style.transform=h.style.webkitTransform=o.m,h.style.opacity=o.o,o.sw&&l.setAttribute("stroke-width",o.sw),o.sc&&l.setAttribute("stroke",o.sc),o.fc&&(l.setAttribute("fill",o.fc),l.style.color=o.fc));if(this.isVisible&&(this.elemMdf||this.firstFrame)&&this.innerElem.getBBox){var p=this.innerElem.getBBox();this.currentBBox.w!==p.width&&(this.currentBBox.w=p.width,this.cont.setAttribute("width",p.width)),this.currentBBox.h!==p.height&&(this.currentBBox.h=p.height,this.cont.setAttribute("height",p.height));var m=1;this.currentBBox.w===p.width+2*m&&this.currentBBox.h===p.height+2*m&&this.currentBBox.x===p.x-m&&this.currentBBox.y===p.y-m||(this.currentBBox.w=p.width+2*m,this.currentBBox.h=p.height+2*m,this.currentBBox.x=p.x-m,this.currentBBox.y=p.y-m,this.cont.setAttribute("viewBox",this.currentBBox.x+" "+this.currentBBox.y+" "+this.currentBBox.w+" "+this.currentBBox.h),this.cont.style.transform=this.cont.style.webkitTransform="translate("+this.currentBBox.x+"px,"+this.currentBBox.y+"px)")}this.firstFrame&&(this.firstFrame=!1)}},createElement(HBaseElement,HImageElement),HImageElement.prototype.createElements=function(){var t=this.globalData.getAssetsPath(this.assetData),e=new Image;if(this.data.hasMask){var r=document.createElement("div");styleDiv(r);var s=createNS("svg");styleDiv(s),s.setAttribute("width",this.assetData.w),s.setAttribute("height",this.assetData.h),r.appendChild(s),this.imageElem=createNS("image"),this.imageElem.setAttribute("width",this.assetData.w+"px"),this.imageElem.setAttribute("height",this.assetData.h+"px"),this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink","href",t),s.appendChild(this.imageElem),this.layerElement=r,this.transformedElement=r,this.baseElement=r,this.innerElem=r,this.maskedElement=this.imageElem}else styleDiv(e),this.layerElement=e,this.baseElement=e,this.innerElem=e,this.transformedElement=e;e.src=t,this.data.ln&&this.innerElem.setAttribute("id",this.data.ln),this.checkParenting()},HImageElement.prototype.show=HSolidElement.prototype.show,HImageElement.prototype.hide=HSolidElement.prototype.hide,HImageElement.prototype.renderFrame=HSolidElement.prototype.renderFrame,HImageElement.prototype.destroy=HSolidElement.prototype.destroy,createElement(HBaseElement,HCameraElement),HCameraElement.prototype.setup=function(){var t,e,r=this.comp.threeDElements.length;for(t=0;t<r;t+=1)e=this.comp.threeDElements[t],e.perspectiveElem.style.perspective=e.perspectiveElem.style.webkitPerspective=this.pe.v+"px",e.container.style.transformOrigin=e.container.style.mozTransformOrigin=e.container.style.webkitTransformOrigin="0px 0px 0px",e.perspectiveElem.style.transform=e.perspectiveElem.style.webkitTransform="matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"},HCameraElement.prototype.createElements=function(){},HCameraElement.prototype.hide=function(){},HCameraElement.prototype.renderFrame=function(){var t,e,r=this.firstFrame;if(this.hierarchy)for(e=this.hierarchy.length,t=0;t<e;t+=1)r=!!this.hierarchy[t].finalTransform.mProp.mdf||r;if(r||this.p&&this.p.mdf||this.px&&(this.px.mdf||this.py.mdf||this.pz.mdf)||this.rx.mdf||this.ry.mdf||this.rz.mdf||this.or.mdf||this.a&&this.a.mdf){if(this.mat.reset(),this.p?this.mat.translate(-this.p.v[0],-this.p.v[1],this.p.v[2]):this.mat.translate(-this.px.v,-this.py.v,this.pz.v),this.a){var s=[this.p.v[0]-this.a.v[0],this.p.v[1]-this.a.v[1],this.p.v[2]-this.a.v[2]],i=Math.sqrt(Math.pow(s[0],2)+Math.pow(s[1],2)+Math.pow(s[2],2)),a=[s[0]/i,s[1]/i,s[2]/i],n=Math.sqrt(a[2]*a[2]+a[0]*a[0]),o=Math.atan2(a[1],n),h=Math.atan2(a[0],-a[2]);this.mat.rotateY(h).rotateX(-o)}if(this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),this.mat.translate(this.globalData.compSize.w/2,this.globalData.compSize.h/2,0),this.mat.translate(0,0,this.pe.v),this.hierarchy){var l;for(e=this.hierarchy.length,t=0;t<e;t+=1)l=this.hierarchy[t].finalTransform.mProp.iv.props,this.mat.transform(l[0],l[1],l[2],l[3],l[4],l[5],l[6],l[7],l[8],l[9],l[10],l[11],-l[12],-l[13],l[14],l[15])}e=this.comp.threeDElements.length;var p;for(t=0;t<e;t+=1)p=this.comp.threeDElements[t],p.container.style.transform=p.container.style.webkitTransform=this.mat.toCSS()}this.firstFrame=!1},HCameraElement.prototype.destroy=function(){};var Expressions=function(){function t(t){t.renderer.compInterface=CompExpressionInterface(t.renderer),t.renderer.globalData.projectInterface.registerComposition(t.renderer)}var e={};return e.initExpressions=t,e}();expressionsPlugin=Expressions,function(){function t(){return this.pv}function e(t,e,r){if(!this.k||!this.keyframes)return this.pv;t=t.toLowerCase();var s=this.comp.renderedFrame,i=this.keyframes,a=i[i.length-1].t;if(s<=a)return this.pv;var n,o;r?(n=e?Math.abs(a-elem.comp.globalData.frameRate*e):Math.max(0,a-this.elem.data.ip),o=a-n):((!e||e>i.length-1)&&(e=i.length-1),o=i[i.length-1-e].t,n=a-o);var h,l,p;if("pingpong"===t){var m=Math.floor((s-o)/n);if(m%2!==0)return this.getValueAtTime((n-(s-o)%n+o)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(o/this.comp.globalData.frameRate,0),c=this.getValueAtTime(a/this.comp.globalData.frameRate,0),d=this.getValueAtTime(((s-o)%n+o)/this.comp.globalData.frameRate,0),u=Math.floor((s-o)/n);if(this.pv.length){for(p=new Array(f.length),l=p.length,h=0;h<l;h+=1)p[h]=(c[h]-f[h])*u+d[h];return p}return(c-f)*u+d}if("continue"===t){var y=this.getValueAtTime(a/this.comp.globalData.frameRate,0),g=this.getValueAtTime((a-.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(p=new Array(y.length),l=p.length,h=0;h<l;h+=1)p[h]=y[h]+(y[h]-g[h])*((s-a)/this.comp.globalData.frameRate)/5e-4;return p}return y+(y-g)*((s-a)/.001)}}return this.getValueAtTime(((s-o)%n+o)/this.comp.globalData.frameRate,0)}function r(t,e,r){if(!this.k)return this.pv;t=t.toLowerCase();var s=this.comp.renderedFrame,i=this.keyframes,a=i[0].t;if(s>=a)return this.pv;var n,o;r?(n=e?Math.abs(elem.comp.globalData.frameRate*e):Math.max(0,this.elem.data.op-a),o=a+n):((!e||e>i.length-1)&&(e=i.length-1),o=i[e].t,n=o-a);var h,l,p;if("pingpong"===t){var m=Math.floor((a-s)/n);if(m%2===0)return this.getValueAtTime(((a-s)%n+a)/this.comp.globalData.frameRate,0)}else{if("offset"===t){var f=this.getValueAtTime(a/this.comp.globalData.frameRate,0),c=this.getValueAtTime(o/this.comp.globalData.frameRate,0),d=this.getValueAtTime((n-(a-s)%n+a)/this.comp.globalData.frameRate,0),u=Math.floor((a-s)/n)+1;if(this.pv.length){for(p=new Array(f.length),l=p.length,h=0;h<l;h+=1)p[h]=d[h]-(c[h]-f[h])*u;return p}return d-(c-f)*u}if("continue"===t){var y=this.getValueAtTime(a/this.comp.globalData.frameRate,0),g=this.getValueAtTime((a+.001)/this.comp.globalData.frameRate,0);if(this.pv.length){for(p=new Array(y.length),l=p.length,h=0;h<l;h+=1)p[h]=y[h]+(y[h]-g[h])*(a-s)/.001;return p}return y+(y-g)*(a-s)/.001}}return this.getValueAtTime((n-(a-s)%n+a)/this.comp.globalData.frameRate,0)}function s(t){if(this._cachingAtTime||(this._cachingAtTime={lastValue:-99999,lastIndex:0}),t!==this._cachingAtTime.lastFrame){t*=this.elem.globalData.frameRate,t-=this.offsetTime;var e=this._caching.lastFrame<t?this._caching.lastIndex:0,r=this.interpolateValue(t,e,this.pv,this._cachingAtTime);this._cachingAtTime.lastIndex=r.iterationIndex,this._cachingAtTime.value=r.value,this._cachingAtTime.lastFrame=t}return this._cachingAtTime.value}function i(t){if(void 0!==this.vel)return this.vel;var e,r=-.01,s=this.getValueAtTime(t),i=this.getValueAtTime(t+r);if(s.length){e=createTypedArray("float32",s.length);var a;for(a=0;a<s.length;a+=1)e[a]=(i[a]-s[a])/r}else e=(i-s)/r;return e}function a(t){this.propertyGroup=t}function n(t,e,r){e.x&&(r.k=!0,r.x=!0,r.getValue&&(r.getPreValue=r.getValue),r.getValue=ExpressionManager.initiateExpression.bind(r)(t,e,r))}function o(t){}function h(t){}function l(t){if(this._shapeValueAtTime||(this._lastIndexAtTime=0,this._lastTimeAtTime=-999999,this._shapeValueAtTime=shape_pool.clone(this.pv)),t!==this._lastTimeAtTime){this._lastTimeAtTime=t,t*=this.elem.globalData.frameRate;var e=this.interpolateShape(t,this._lastIndexAtTime,this._shapeValueAtTime,!1);this._lastIndexAtTime=e.iterationIndex}return this._shapeValueAtTime}var p=function(){function e(t,e){return this.textIndex=t+1,this.textTotal=e,this.getValue(),this.v}return function(r,o){this.pv=1,this.comp=r.comp,this.elem=r,this.mult=.01,this.type="textSelector",this.textTotal=o.totalChars,this.selectorValue=100,this.lastValue=[1,1,1],n.bind(this)(r,o,this),this.getMult=e,this.getVelocityAtTime=i,this.kf?this.getValueAtTime=s.bind(this):this.getValueAtTime=t.bind(this),this.setGroupProperty=a}}(),m=TransformPropertyFactory.getTransformProperty;TransformPropertyFactory.getTransformProperty=function(t,e,r){var s=m(t,e,r);return s.dynamicProperties.length?s.getValueAtTime=o.bind(s):s.getValueAtTime=h.bind(s),s.setGroupProperty=a,s};var f=PropertyFactory.getProp;PropertyFactory.getProp=function(o,h,l,p,m){var c=f(o,h,l,p,m);c.kf?c.getValueAtTime=s.bind(c):c.getValueAtTime=t.bind(c),c.setGroupProperty=a,c.loopOut=e,c.loopIn=r,c.getVelocityAtTime=i,c.numKeys=1===h.a?h.k.length:0;var d=c.k;return c.propertyIndex=h.ix,n(o,h,c),!d&&c.x&&m.push(c),c};var c=ShapePropertyFactory.getConstructorFunction(),d=ShapePropertyFactory.getKeyframedConstructorFunction();c.prototype.vertices=function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0));var s,i=r._length,a=r[t],n=r.v,o=Array.apply(null,{length:i});for(s=0;s<i;s+=1)"i"===t||"o"===t?o[s]=[a[s][0]-n[s][0],a[s][1]-n[s][1]]:o[s]=[a[s][0],a[s][1]];return o},c.prototype.points=function(t){return this.vertices("v",t)},c.prototype.inTangents=function(t){return this.vertices("i",t)},c.prototype.outTangents=function(t){return this.vertices("o",t)},c.prototype.isClosed=function(){return this.v.c},c.prototype.pointOnPath=function(t,e){var r=this.v;void 0!==e&&(r=this.getValueAtTime(e,0)),this._segmentsLength||(this._segmentsLength=bez.getSegmentsLength(r));for(var s,i=this._segmentsLength,a=i.lengths,n=i.totalLength*t,o=0,h=a.length,l=0;o<h;){if(l+a[o].addedLength>n){s=a[o].segments;var p=o,m=r.c&&o===h-1?0:o+1,f=(n-l)/a[o].addedLength,c=bez.getPointInSegment(r.v[p],r.v[m],r.o[p],r.i[m],f,a[o]);break}l+=a[o].addedLength,o+=1}return c||(c=r.c?[r.v[0][0],r.v[0][1]]:[r.v[r._length-1][0],r.v[r._length-1][1]]),c},c.prototype.vectorOnPath=function(t,e,r){t=1==t?this.v.c?0:.999:t;var s=this.pointOnPath(t,e),i=this.pointOnPath(t+.001,e),a=i[0]-s[0],n=i[1]-s[1],o=Math.sqrt(Math.pow(a,2)+Math.pow(n,2)),h="tangent"===r?[a/o,n/o]:[-n/o,a/o];return h},c.prototype.tangentOnPath=function(t,e){return this.vectorOnPath(t,e,"tangent")},c.prototype.normalOnPath=function(t,e){return this.vectorOnPath(t,e,"normal")},c.prototype.setGroupProperty=a,c.prototype.getValueAtTime=t,d.prototype.vertices=c.prototype.vertices,d.prototype.points=c.prototype.points,d.prototype.inTangents=c.prototype.inTangents,d.prototype.outTangents=c.prototype.outTangents,d.prototype.isClosed=c.prototype.isClosed,d.prototype.pointOnPath=c.prototype.pointOnPath,d.prototype.vectorOnPath=c.prototype.vectorOnPath,d.prototype.tangentOnPath=c.prototype.tangentOnPath,d.prototype.normalOnPath=c.prototype.normalOnPath,d.prototype.setGroupProperty=c.prototype.setGroupProperty,d.prototype.getValueAtTime=l;var u=ShapePropertyFactory.getShapeProp;ShapePropertyFactory.getShapeProp=function(t,e,r,s,i){var a=u(t,e,r,s,i),o=a.k;return a.propertyIndex=e.ix,3===r?n(t,e.pt,a):4===r&&n(t,e.ks,a),!o&&a.x&&s.push(a),a};var y=TextSelectorProp.getTextSelectorProp;TextSelectorProp.getTextSelectorProp=function(t,e,r){return 1===e.t?new p(t,e,r):y(t,e,r)}}(),function(){function t(){return!!this.data.d.x&&(this.comp=this.elem.comp,this.getValue&&(this.getPreValue=this.getValue),this.calculateExpression=ExpressionManager.initiateExpression.bind(this)(this.elem,this.data.d,this),this.getValue=this.getExpressionValue,!0)}TextProperty.prototype.searchProperty=function(){return this.kf=this.searchExpressions()||this.data.d.k.length>1,this.kf},TextProperty.prototype.getExpressionValue=function(t){this.calculateExpression(),this.mdf&&(this.currentData.t=this.v.toString(),this.completeTextData(this.currentData))},TextProperty.prototype.searchExpressions=t}();var ExpressionManager=function(){function duplicatePropertyValue(t,e){if(e=e||1,"number"==typeof t||t instanceof Number)return t*e;if(t.i)return JSON.parse(JSON.stringify(t));var r,s=createTypedArray("int16",t.length),i=t.length;for(r=0;r<i;r+=1)s[r]=t[r]*e;return s}function isTypeOfArray(t){return t.constructor===Array||t.constructor===Float32Array}function shapesEqual(t,e){if(t._length!==e._length||t.c!==e.c)return!1;var r,s=t._length;for(r=0;r<s;r+=1)if(t.v[r][0]!==e.v[r][0]||t.v[r][1]!==e.v[r][1]||t.o[r][0]!==e.o[r][0]||t.o[r][1]!==e.o[r][1]||t.i[r][0]!==e.i[r][0]||t.i[r][1]!==e.i[r][1])return!1;return!0}function $bm_neg(t){var e=typeof t;if("number"===e||"boolean"===e||t instanceof Number)return-t;if(isTypeOfArray(t)){var r,s=t.length,i=[];for(r=0;r<s;r+=1)i[r]=-t[r];return i}}function sum(t,e){var r=typeof t,s=typeof e;if("string"===r||"string"===s)return t+e;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number))return t+e;if(isTypeOfArray(t)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number))return t[0]=t[0]+e,t;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&isTypeOfArray(e))return e[0]=t+e[0],e;if(isTypeOfArray(t)&&isTypeOfArray(e)){for(var i=0,a=t.length,n=e.length,o=[];i<a||i<n;)("number"==typeof t[i]||t[i]instanceof Number)&&("number"==typeof e[i]||e[i]instanceof Number)?o[i]=t[i]+e[i]:o[i]=void 0==e[i]?t[i]:t[i]||e[i],i+=1;return o}return 0}function sub(t,e){var r=typeof t,s=typeof e;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number))return"string"===r&&(t=parseInt(t)),"string"===s&&(e=parseInt(e)),t-e;if(isTypeOfArray(t)&&("number"===s||"boolean"===s||"string"===s||e instanceof Number))return t[0]=t[0]-e,t;if(("number"===r||"boolean"===r||"string"===r||t instanceof Number)&&isTypeOfArray(e))return e[0]=t-e[0],e;if(isTypeOfArray(t)&&isTypeOfArray(e)){for(var i=0,a=t.length,n=e.length,o=[];i<a||i<n;)"number"==typeof t[i]||t[i]instanceof Number?o[i]=t[i]-e[i]:o[i]=void 0==e[i]?t[i]:t[i]||e[i],i+=1;return o}return 0}function mul(t,e){var r,s=typeof t,i=typeof e;if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&("number"===i||"boolean"===i||"string"===i||e instanceof Number))return t*e;var a,n;if(isTypeOfArray(t)&&("number"===i||"boolean"===i||"string"===i||e instanceof Number)){for(n=t.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t[a]*e;return r}if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&isTypeOfArray(e)){for(n=e.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t*e[a];return r}return 0}function div(t,e){var r,s=typeof t,i=typeof e;if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&("number"===i||"boolean"===i||"string"===i||e instanceof Number))return t/e;var a,n;if(isTypeOfArray(t)&&("number"===i||"boolean"===i||"string"===i||e instanceof Number)){for(n=t.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t[a]/e;return r}if(("number"===s||"boolean"===s||"string"===s||t instanceof Number)&&isTypeOfArray(e)){for(n=e.length,r=createTypedArray("float32",n),a=0;a<n;a+=1)r[a]=t/e[a];return r}return 0}function mod(t,e){return"string"==typeof t&&(t=parseInt(t)),"string"==typeof e&&(e=parseInt(e)),t%e}function clamp(t,e,r){if(e>r){var s=r;r=e,e=s}return Math.min(Math.max(t,e),r)}function radiansToDegrees(t){return t/degToRads}function degreesToRadians(t){return t*degToRads}function length(t,e){if("number"==typeof t||t instanceof Number)return e=e||0,Math.abs(t-e);e||(e=helperLengthArray);var r,s=Math.min(t.length,e.length),i=0;for(r=0;r<s;r+=1)i+=Math.pow(e[r]-t[r],2);return Math.sqrt(i)}function normalize(t){return div(t,length(t))}function rgbToHsl(t){var e,r,s=t[0],i=t[1],a=t[2],n=Math.max(s,i,a),o=Math.min(s,i,a),h=(n+o)/2;if(n==o)e=r=0;else{var l=n-o;switch(r=h>.5?l/(2-n-o):l/(n+o),n){case s:e=(i-a)/l+(i<a?6:0);break;case i:e=(a-s)/l+2;
break;case a:e=(s-i)/l+4}e/=6}return[e,r,h,t[3]]}function hslToRgb(t){function e(t,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?t+6*(e-t)*r:r<.5?e:r<2/3?t+(e-t)*(2/3-r)*6:t}var r,s,i,a=t[0],n=t[1],o=t[2];if(0==n)r=s=i=o;else{var h=o<.5?o*(1+n):o+n-o*n,l=2*o-h;r=e(l,h,a+1/3),s=e(l,h,a),i=e(l,h,a-1/3)}return[r,s,i,t[3]]}function linear(t,e,r,s,i){if(void 0===s||void 0===i)return linear(t,0,1,e,r);if(t<=e)return s;if(t>=r)return i;var a=r===e?0:(t-e)/(r-e);if(!s.length)return s+(i-s)*a;var n,o=s.length,h=createTypedArray("float32",o);for(n=0;n<o;n+=1)h[n]=s[n]+(i[n]-s[n])*a;return h}function random(t,e){if(void 0===e&&(void 0===t?(t=0,e=1):(e=t,t=void 0)),e.length){var r,s=e.length;t||(t=createTypedArray("float32",s));var i=createTypedArray("float32",s),a=BMMath.random();for(r=0;r<s;r+=1)i[r]=t[r]+a*(e[r]-t[r]);return i}void 0===t&&(t=0);var n=BMMath.random();return t+n*(e-t)}function createPath(t,e,r,s){e=e&&e.length?e:t,r=r&&r.length?r:t;var a=shape_pool.newShape(),n=t.length;for(a.setPathData(s,n),i=0;i<n;i+=1)a.setTripleAt(t[i][0],t[i][1],r[i][0]+t[i][0],r[i][1]+t[i][1],e[i][0]+t[i][0],e[i][1]+t[i][1],i,!0);return a}function initiateExpression(elem,data,property){function lookAt(t,e){var r=[e[0]-t[0],e[1]-t[1],e[2]-t[2]],s=Math.atan2(r[0],Math.sqrt(r[1]*r[1]+r[2]*r[2]))/degToRads,i=-Math.atan2(r[1],r[2])/degToRads;return[i,s,0]}function easeOut(t,e,r,s,i){return void 0===s?(s=e,i=r):t=(t-e)/(r-e),-(i-s)*t*(t-2)+s}function easeIn(t,e,r,s,i){return void 0===s?(s=e,i=r):t=(t-e)/(r-e),(i-s)*t*t+s}function nearestKey(t){var e,r,s,i=data.k.length;if(data.k.length&&"number"!=typeof data.k[0])if(r=-1,t*=elem.comp.globalData.frameRate,t<data.k[0].t)r=1,s=data.k[0].t;else{for(e=0;e<i-1;e+=1){if(t===data.k[e].t){r=e+1,s=data.k[e].t;break}if(t>data.k[e].t&&t<data.k[e+1].t){t-data.k[e].t>data.k[e+1].t-t?(r=e+2,s=data.k[e+1].t):(r=e+1,s=data.k[e].t);break}}r===-1&&(r=e+1,s=data.k[e].t)}else r=0,s=0;var a={};return a.index=r,a.time=s/elem.comp.globalData.frameRate,a}function key(t){var e,r,s;if(!data.k.length||"number"==typeof data.k[0])throw new Error("The property has no keyframe at index "+t);t-=1,e={time:data.k[t].t/elem.comp.globalData.frameRate};var i;for(i=t!==data.k.length-1||data.k[t].h?data.k[t].s:data.k[t-1].e,s=i.length,r=0;r<s;r+=1)e[r]=i[r];return e}function framesToTime(t,e){return e||(e=elem.comp.globalData.frameRate),t/e}function timeToFrames(t,e){return t||0===t||(t=time),e||(e=elem.comp.globalData.frameRate),t*e}function seedRandom(t){BMMath.seedrandom(randSeed+t)}function sourceRectAtTime(){return elem.sourceRectAtTime()}function executeExpression(){if(_needsRandom&&seedRandom(randSeed),this.frameExpressionId!==elem.globalData.frameId||"textSelector"===this.type){if(this.lock)return this.v=duplicatePropertyValue(this.pv,this.mult),!0;"textSelector"===this.type&&(textIndex=this.textIndex,textTotal=this.textTotal,selectorValue=this.selectorValue),thisLayer||(thisLayer=elem.layerInterface,thisComp=elem.comp.compInterface,toWorld=thisLayer.toWorld.bind(thisLayer),fromWorld=thisLayer.fromWorld.bind(thisLayer),fromComp=thisLayer.fromComp.bind(thisLayer),mask=thisLayer.mask?thisLayer.mask.bind(thisLayer):null,fromCompToSurface=fromComp),transform||(transform=elem.layerInterface("ADBE Transform Group"),anchorPoint=transform.anchorPoint),4!==elemType||content||(content=thisLayer("ADBE Root Vectors Group")),effect||(effect=thisLayer(4)),hasParent=!(!elem.hierarchy||!elem.hierarchy.length),hasParent&&!parent&&(parent=elem.hierarchy[0].layerInterface),this.lock=!0,this.getPreValue&&this.getPreValue(),value=this.pv,time=this.comp.renderedFrame/this.comp.globalData.frameRate,needsVelocity&&(velocity=velocityAtTime(time)),bindedFn(),this.frameExpressionId=elem.globalData.frameId;var t,e;if(this.mult)if("number"==typeof this.v||this.v instanceof Number||this.v instanceof String||"string"==typeof this.v)this.v*=this.mult;else if(1===this.v.length)this.v=this.v[0]*this.mult;else for(e=this.v.length,value===this.v&&(this.v=2===e?[value[0],value[1]]:[value[0],value[1],value[2]]),t=0;t<e;t+=1)this.v[t]*=this.mult;if(1===this.v.length&&(this.v=this.v[0]),"number"==typeof this.v||this.v instanceof Number||this.v instanceof String||"string"==typeof this.v)this.lastValue!==this.v&&(this.lastValue=this.v,this.mdf=!0);else if(this.v._length)shapesEqual(this.v,this.localShapeCollection.shapes[0])||(this.mdf=!0,this.localShapeCollection.releaseShapes(),this.localShapeCollection.addShape(shape_pool.clone(this.v)));else for(e=this.v.length,t=0;t<e;t+=1)this.v[t]!==this.lastValue[t]&&(this.lastValue[t]=this.v[t],this.mdf=!0);this.lock=!1}}var val=data.x,needsVelocity=/velocity(?![\w\d])/.test(val),_needsRandom=val.indexOf("random")!==-1,elemType=elem.data.ty,transform,content,effect,thisComp=elem.comp,thisProperty=property;elem.comp.frameDuration=1/elem.comp.globalData.frameRate;var inPoint=elem.data.ip/elem.comp.globalData.frameRate,outPoint=elem.data.op/elem.comp.globalData.frameRate,width=elem.data.sw?elem.data.sw:0,height=elem.data.sh?elem.data.sh:0,loopIn,loop_in,loopOut,loop_out,toWorld,fromWorld,fromComp,fromCompToSurface,anchorPoint,thisLayer,thisComp,mask,valueAtTime,velocityAtTime,fn=new Function,fn=eval("[function(){"+val+";if($bm_rt.__shapeObject){this.v=shape_pool.clone($bm_rt.v);}else{this.v=$bm_rt;}}]")[0],bindedFn=fn.bind(this),numKeys=property.kf?data.k.length:0,wiggle=function(t,e){var r,s,i=this.pv.length?this.pv.length:1,a=createTypedArray("float32",i);t=5;var n=Math.floor(time*t);for(r=0,s=0;r<n;){for(s=0;s<i;s+=1)a[s]+=-e+2*e*BMMath.random();r+=1}var o=time*t,h=o-Math.floor(o),l=createTypedArray("float32",i);if(i>1){for(s=0;s<i;s+=1)l[s]=this.pv[s]+a[s]+(-e+2*e*BMMath.random())*h;return l}return this.pv+a[0]+(-e+2*e*BMMath.random())*h}.bind(this);thisProperty.loopIn&&(loopIn=thisProperty.loopIn.bind(thisProperty),loop_in=loopIn),thisProperty.loopOut&&(loopOut=thisProperty.loopOut.bind(thisProperty),loop_out=loopOut);var loopInDuration=function(t,e){return loopIn(t,e,!0)}.bind(this),loopOutDuration=function(t,e){return loopOut(t,e,!0)}.bind(this);this.getValueAtTime&&(valueAtTime=this.getValueAtTime.bind(this)),this.getVelocityAtTime&&(velocityAtTime=this.getVelocityAtTime.bind(this));var comp=elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),time,velocity,value,textIndex,textTotal,selectorValue,index=elem.data.ind,hasParent=!(!elem.hierarchy||!elem.hierarchy.length),parent,randSeed=Math.floor(1e6*Math.random());return executeExpression}var ob={},Math=BMMath,window=null,document=null,add=sum,radians_to_degrees=radiansToDegrees,degrees_to_radians=radiansToDegrees,helperLengthArray=[0,0,0,0,0,0];return ob.initiateExpression=initiateExpression,ob}(),ShapeExpressionInterface=function(){function t(t,e,r){return d(t,e,r)}function e(t,e,r){return y(t,e,r)}function r(t,e,r){return g(t,e,r)}function s(t,e,r){return v(t,e,r)}function i(t,e,r){return b(t,e,r)}function a(t,e,r){return E(t,e,r)}function n(t,e,r){return P(t,e,r)}function o(t,e,r){return x(t,e,r)}function h(t,e,r){return C(t,e,r)}function l(t,e,r){return S(t,e,r)}function p(t,e,r){return A(t,e,r)}function m(t,e,r){return k(t,e,r)}function f(t,e,r){var s,i=[],a=t?t.length:0;for(s=0;s<a;s+=1)"gr"==t[s].ty?i.push(ShapeExpressionInterface.createGroupInterface(t[s],e[s],r)):"fl"==t[s].ty?i.push(ShapeExpressionInterface.createFillInterface(t[s],e[s],r)):"st"==t[s].ty?i.push(ShapeExpressionInterface.createStrokeInterface(t[s],e[s],r)):"tm"==t[s].ty?i.push(ShapeExpressionInterface.createTrimInterface(t[s],e[s],r)):"tr"==t[s].ty||("el"==t[s].ty?i.push(ShapeExpressionInterface.createEllipseInterface(t[s],e[s],r)):"sr"==t[s].ty?i.push(ShapeExpressionInterface.createStarInterface(t[s],e[s],r)):"sh"==t[s].ty?i.push(ShapeExpressionInterface.createPathInterface(t[s],e[s],r)):"rc"==t[s].ty?i.push(ShapeExpressionInterface.createRectInterface(t[s],e[s],r)):"rd"==t[s].ty?i.push(ShapeExpressionInterface.createRoundedInterface(t[s],e[s],r)):"rp"==t[s].ty&&i.push(ShapeExpressionInterface.createRepatearInterface(t[s],e[s],r)));return i}var c={createShapeInterface:t,createGroupInterface:e,createTrimInterface:i,createStrokeInterface:s,createTransformInterface:a,createEllipseInterface:n,createStarInterface:o,createRectInterface:h,createRoundedInterface:l,createRepatearInterface:p,createPathInterface:m,createFillInterface:r},d=function(){return function(t,e,r){function s(t){if("number"==typeof t)return i[t-1];for(var e=0,r=i.length;e<r;){if(i[e]._name===t)return i[e];e+=1}}var i;return s.propertyGroup=r,i=f(t,e,s),s}}(),u=function(){return function(t,e,r){var s,i=function(t){for(var e=0,r=s.length;e<r;){if(s[e]._name===t||s[e].mn===t||s[e].propertyIndex===t||s[e].ix===t||s[e].ind===t)return s[e];e+=1}if("number"==typeof t)return s[t-1]};return i.propertyGroup=function(t){return 1===t?i:r(t-1)},s=f(t.it,e.it,i.propertyGroup),i.numProperties=s.length,i.propertyIndex=t.cix,i}}(),y=function(){return function(t,e,r){var s=function(t){switch(t){case"ADBE Vectors Group":case"Contents":case 2:return s.content;case"ADBE Vector Transform Group":case 3:default:return s.transform}};s.propertyGroup=function(t){return 1===t?s:r(t-1)};var i=u(t,e,s.propertyGroup),a=ShapeExpressionInterface.createTransformInterface(t.it[t.it.length-1],e.it[e.it.length-1],s.propertyGroup);return s.content=i,s.transform=a,Object.defineProperty(s,"_name",{get:function(){return t.nm}}),s.numProperties=t.np,s.propertyIndex=t.ix,s.nm=t.nm,s.mn=t.mn,s}}(),g=function(){return function(t,e,r){function s(t){return"Color"===t||"color"===t?s.color:"Opacity"===t||"opacity"===t?s.opacity:void 0}return Object.defineProperty(s,"color",{get:function(){return ExpressionValue(e.c,1/e.c.mult,"color")}}),Object.defineProperty(s,"opacity",{get:function(){return ExpressionValue(e.o,100)}}),Object.defineProperty(s,"_name",{value:t.nm}),Object.defineProperty(s,"mn",{value:t.mn}),e.c.setGroupProperty(r),e.o.setGroupProperty(r),s}}(),v=function(){return function(t,e,r){function s(t){return 1===t?c:r(t-1)}function i(t){return 1===t?l:s(t-1)}function a(r){Object.defineProperty(l,t.d[r].nm,{get:function(){return ExpressionValue(e.d.dataProps[r].p)}})}function n(t){return"Color"===t||"color"===t?n.color:"Opacity"===t||"opacity"===t?n.opacity:"Stroke Width"===t||"stroke width"===t?n.strokeWidth:void 0}var o,h=t.d?t.d.length:0,l={};for(o=0;o<h;o+=1)a(o),e.d.dataProps[o].p.setGroupProperty(i);return Object.defineProperty(n,"color",{get:function(){return ExpressionValue(e.c,1/e.c.mult,"color")}}),Object.defineProperty(n,"opacity",{get:function(){return ExpressionValue(e.o,100)}}),Object.defineProperty(n,"strokeWidth",{get:function(){return ExpressionValue(e.w)}}),Object.defineProperty(n,"dash",{get:function(){return l}}),Object.defineProperty(n,"_name",{value:t.nm}),Object.defineProperty(n,"mn",{value:t.mn}),e.c.setGroupProperty(s),e.o.setGroupProperty(s),e.w.setGroupProperty(s),n}}(),b=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){return e===t.e.ix||"End"===e||"end"===e?i.end:e===t.s.ix?i.start:e===t.o.ix?i.offset:void 0}return i.propertyIndex=t.ix,e.s.setGroupProperty(s),e.e.setGroupProperty(s),e.o.setGroupProperty(s),i.propertyIndex=t.ix,Object.defineProperty(i,"start",{get:function(){return ExpressionValue(e.s,1/e.s.mult)}}),Object.defineProperty(i,"end",{get:function(){return ExpressionValue(e.e,1/e.e.mult)}}),Object.defineProperty(i,"offset",{get:function(){return ExpressionValue(e.o)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),E=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){return t.a.ix===e?i.anchorPoint:t.o.ix===e?i.opacity:t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.s.ix===e?i.scale:t.sk&&t.sk.ix===e?i.skew:t.sa&&t.sa.ix===e?i.skewAxis:"Opacity"===e?i.opacity:"Position"===e?i.position:"Anchor Point"===e?i.anchorPoint:"Scale"===e?i.scale:"Rotation"===e||"ADBE Vector Rotation"===e?i.rotation:"Skew"===e?i.skew:"Skew Axis"===e?i.skewAxis:void 0}e.transform.mProps.o.setGroupProperty(s),e.transform.mProps.p.setGroupProperty(s),e.transform.mProps.a.setGroupProperty(s),e.transform.mProps.s.setGroupProperty(s),e.transform.mProps.r.setGroupProperty(s),e.transform.mProps.sk&&(e.transform.mProps.sk.setGroupProperty(s),e.transform.mProps.sa.setGroupProperty(s)),e.transform.op.setGroupProperty(s),Object.defineProperty(i,"opacity",{get:function(){return ExpressionValue(e.transform.mProps.o,1/e.transform.mProps.o.mult)}}),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(e.transform.mProps.p)}}),Object.defineProperty(i,"anchorPoint",{get:function(){return ExpressionValue(e.transform.mProps.a)}});return Object.defineProperty(i,"scale",{get:function(){return ExpressionValue(e.transform.mProps.s,1/e.transform.mProps.s.mult)}}),Object.defineProperty(i,"rotation",{get:function(){return ExpressionValue(e.transform.mProps.r,1/e.transform.mProps.r.mult)}}),Object.defineProperty(i,"skew",{get:function(){return ExpressionValue(e.transform.mProps.sk)}}),Object.defineProperty(i,"skewAxis",{get:function(){return ExpressionValue(e.transform.mProps.sa)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.ty="tr",i.mn=t.mn,i}}(),P=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){return t.p.ix===e?i.position:t.s.ix===e?i.size:void 0}i.propertyIndex=t.ix;var a="tm"===e.sh.ty?e.sh.prop:e.sh;return a.s.setGroupProperty(s),a.p.setGroupProperty(s),Object.defineProperty(i,"size",{get:function(){return ExpressionValue(a.s)}}),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(a.p)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),x=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.rotation:t.pt.ix===e?i.points:t.or.ix===e||"ADBE Vector Star Outer Radius"===e?i.outerRadius:t.os.ix===e?i.outerRoundness:!t.ir||t.ir.ix!==e&&"ADBE Vector Star Inner Radius"!==e?t.is&&t.is.ix===e?i.innerRoundness:void 0:i.innerRadius}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.or.setGroupProperty(s),a.os.setGroupProperty(s),a.pt.setGroupProperty(s),a.p.setGroupProperty(s),a.r.setGroupProperty(s),t.ir&&(a.ir.setGroupProperty(s),a.is.setGroupProperty(s)),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(a.p)}}),Object.defineProperty(i,"rotation",{get:function(){return ExpressionValue(a.r,1/a.r.mult)}}),Object.defineProperty(i,"points",{get:function(){return ExpressionValue(a.pt)}}),Object.defineProperty(i,"outerRadius",{get:function(){return ExpressionValue(a.or)}}),Object.defineProperty(i,"outerRoundness",{get:function(){return ExpressionValue(a.os)}}),Object.defineProperty(i,"innerRadius",{get:function(){return a.ir?ExpressionValue(a.ir):0}}),Object.defineProperty(i,"innerRoundness",{get:function(){return a.is?ExpressionValue(a.is,1/a.is.mult):0}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),C=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){return t.p.ix===e?i.position:t.r.ix===e?i.roundness:t.s.ix===e||"Size"===e||"ADBE Vector Rect Size"===e?i.size:void 0}var a="tm"===e.sh.ty?e.sh.prop:e.sh;return i.propertyIndex=t.ix,a.p.setGroupProperty(s),a.s.setGroupProperty(s),a.r.setGroupProperty(s),Object.defineProperty(i,"position",{get:function(){return ExpressionValue(a.p)}}),Object.defineProperty(i,"roundness",{get:function(){return ExpressionValue(a.r)}}),Object.defineProperty(i,"size",{get:function(){return ExpressionValue(a.s)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),S=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){if(t.r.ix===e||"Round Corners 1"===e)return i.radius}var a=e;return i.propertyIndex=t.ix,a.rd.setGroupProperty(s),Object.defineProperty(i,"radius",{get:function(){return ExpressionValue(a.rd)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),A=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(e){return t.c.ix===e||"Copies"===e?i.copies:t.o.ix===e||"Offset"===e?i.offset:void 0}var a=e;return i.propertyIndex=t.ix,a.c.setGroupProperty(s),a.o.setGroupProperty(s),Object.defineProperty(i,"copies",{get:function(){return ExpressionValue(a.c)}}),Object.defineProperty(i,"offset",{get:function(){return ExpressionValue(a.o)}}),Object.defineProperty(i,"_name",{get:function(){return t.nm}}),i.mn=t.mn,i}}(),k=function(){return function(t,e,r){function s(t){return 1==t?i:r(--t)}function i(t){if("Shape"===t||"shape"===t||"Path"===t||"path"===t||"ADBE Vector Shape"===t||2===t)return i.path}var a=e.sh;return a.setGroupProperty(s),Object.defineProperty(i,"path",{get:function(){return a.k&&a.getValue(),a}}),Object.defineProperty(i,"shape",{get:function(){return a.k&&a.getValue(),a}}),Object.defineProperty(i,"_name",{value:t.nm}),Object.defineProperty(i,"ix",{value:t.ix}),Object.defineProperty(i,"mn",{value:t.mn}),i}}();return c}(),TextExpressionInterface=function(){return function(t){function e(){}var r,s;return Object.defineProperty(e,"sourceText",{get:function(){var e=t.textProperty.currentData.t;return t.textProperty.currentData.t!==r&&(t.textProperty.currentData.t=r,s=new String(e),s.value=e?e:new String(e)),s}}),e}}(),LayerExpressionInterface=function(){function t(t,e){var r=new Matrix;r.reset();var s;if(s=e?this._elem.finalTransform.mProp:this._elem.finalTransform.mProp,s.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,a=this._elem.hierarchy.length;for(i=0;i<a;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.applyToPointArray(t[0],t[1],t[2]||0)}return r.applyToPointArray(t[0],t[1],t[2]||0)}function e(t,e){var r=new Matrix;r.reset();var s;if(s=e?this._elem.finalTransform.mProp:this._elem.finalTransform.mProp,s.applyToMatrix(r),this._elem.hierarchy&&this._elem.hierarchy.length){var i,a=this._elem.hierarchy.length;for(i=0;i<a;i+=1)this._elem.hierarchy[i].finalTransform.mProp.applyToMatrix(r);return r.inversePoint(t)}return r.inversePoint(t)}function r(t){var e=new Matrix;if(e.reset(),this._elem.finalTransform.mProp.applyToMatrix(e),this._elem.hierarchy&&this._elem.hierarchy.length){var r,s=this._elem.hierarchy.length;for(r=0;r<s;r+=1)this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);return e.inversePoint(t)}return e.inversePoint(t)}return function(s){function i(t){n.mask=new MaskManagerInterface(t,s)}function a(t){n.effect=t}function n(t){switch(t){case"ADBE Root Vectors Group":case"Contents":case 2:return n.shapeInterface;case 1:case 6:case"Transform":case"transform":case"ADBE Transform Group":return o;case 4:case"ADBE Effect Parade":return n.effect}}var o=TransformExpressionInterface(s.transform);n.toWorld=t,n.fromWorld=e,n.toComp=t,n.fromComp=r,n.sourceRectAtTime=s.sourceRectAtTime.bind(s),n._elem=s,Object.defineProperty(n,"hasParent",{get:function(){return!!s.hierarchy}}),Object.defineProperty(n,"parent",{get:function(){return s.hierarchy[0].layerInterface}}),Object.defineProperty(n,"rotation",getDescriptor(o,"rotation")),Object.defineProperty(n,"scale",getDescriptor(o,"scale")),Object.defineProperty(n,"position",getDescriptor(o,"position")),Object.defineProperty(n,"opacity",getDescriptor(o,"opacity"));var h=getDescriptor(o,"anchorPoint");return Object.defineProperty(n,"anchorPoint",h),Object.defineProperty(n,"anchor_point",h),Object.defineProperty(n,"transform",{get:function(){return o}}),Object.defineProperty(n,"_name",{value:s.data.nm}),Object.defineProperty(n,"active",{get:function(){return s.isVisible}}),n.startTime=s.data.st,n.index=s.data.ind,n.source=s.data.refId,n.height=0===s.data.ty?s.data.h:100,n.width=0===s.data.ty?s.data.w:100,n.registerMaskInterface=i,n.registerEffectsInterface=a,n}}(),CompExpressionInterface=function(){return function(t){function e(e){for(var r=0,s=t.layers.length;r<s;){if(t.layers[r].nm===e||t.layers[r].ind===e)return t.elements[r].layerInterface;r+=1}return{active:!1}}return Object.defineProperty(e,"_name",{value:t.data.nm}),e.layer=e,e.pixelAspect=1,e.height=t.globalData.compSize.h,e.width=t.globalData.compSize.w,e.pixelAspect=1,e.frameDuration=1/t.globalData.frameRate,e}}(),TransformExpressionInterface=function(){return function(t){function e(t){switch(t){case"scale":case"Scale":case"ADBE Scale":case 6:return e.scale;case"rotation":case"Rotation":case"ADBE Rotation":case"ADBE Rotate Z":case 10:return e.rotation;case"position":case"Position":case"ADBE Position":case 2:return e.position;case"anchorPoint":case"AnchorPoint":case"Anchor Point":case"ADBE AnchorPoint":case 1:return e.anchorPoint;case"opacity":case"Opacity":case 11:return e.opacity}}return Object.defineProperty(e,"rotation",{get:function(){return t.r?ExpressionValue(t.r,1/degToRads):ExpressionValue(t.rz,1/degToRads)}}),Object.defineProperty(e,"scale",{get:function(){return ExpressionValue(t.s,100)}}),Object.defineProperty(e,"position",{get:function(){return t.p?ExpressionValue(t.p):[t.px.v,t.py.v,t.pz?t.pz.v:0]}}),Object.defineProperty(e,"xPosition",{get:function(){return ExpressionValue(t.px)}}),Object.defineProperty(e,"yPosition",{get:function(){return ExpressionValue(t.py)}}),Object.defineProperty(e,"zPosition",{get:function(){return ExpressionValue(t.pz)}}),Object.defineProperty(e,"anchorPoint",{get:function(){return ExpressionValue(t.a)}}),Object.defineProperty(e,"opacity",{get:function(){return ExpressionValue(t.o,100)}}),Object.defineProperty(e,"skew",{get:function(){return ExpressionValue(t.sk)}}),Object.defineProperty(e,"skewAxis",{get:function(){return ExpressionValue(t.sa)}}),Object.defineProperty(e,"orientation",{get:function(){return ExpressionValue(t.or)}}),e}}(),ProjectInterface=function(){function t(t){this.compositions.push(t)}return function(){function e(t){for(var e=0,r=this.compositions.length;e<r;){if(this.compositions[e].data&&this.compositions[e].data.nm===t)return this.compositions[e].prepareFrame&&this.compositions[e].prepareFrame(this.compositions[e].data.xt?this.currentFrame:this.compositions[e].currentFrameNum),this.compositions[e].compInterface;e+=1}}return e.compositions=[],e.currentFrame=0,e.registerComposition=t,e}}(),EffectsExpressionInterface=function(){function t(t,r){if(t.effects){var s,i=[],a=t.data.ef,n=t.effects.effectElements.length;for(s=0;s<n;s+=1)i.push(e(a[s],t.effects.effectElements[s],r,t));return function(e){for(var r=t.data.ef,s=0,a=r.length;s<a;){if(e===r[s].nm||e===r[s].mn||e===r[s].ix)return i[s];s+=1}}}}function e(t,s,i,a){function n(t){return 1===t?p:i(t-1)}var o,h=[],l=t.ef.length;for(o=0;o<l;o+=1)5===t.ef[o].ty?h.push(e(t.ef[o],s.effectElements[o],s.effectElements[o].propertyGroup,a)):h.push(r(s.effectElements[o],t.ef[o].ty,a,n));var p=function(e){for(var r=t.ef,s=0,i=r.length;s<i;){if(e===r[s].nm||e===r[s].mn||e===r[s].ix)return 5===r[s].ty?h[s]:h[s]();s+=1}return h[0]()};return p.propertyGroup=n,"ADBE Color Control"===t.mn&&Object.defineProperty(p,"color",{get:function(){return h[0]()}}),Object.defineProperty(p,"numProperties",{get:function(){return t.np}}),p.active=0!==t.en,p}function r(t,e,r,s){function i(){return 10===e?r.comp.compInterface(t.p.v):ExpressionValue(t.p)}return t.p.setGroupProperty&&t.p.setGroupProperty(s),i}var s={createEffectsInterface:t};return s}(),MaskManagerInterface=function(){function t(t,e){this._mask=t,this._data=e}Object.defineProperty(t.prototype,"maskPath",{get:function(){return this._mask.prop.k&&this._mask.prop.getValue(),this._mask.prop}});var e=function(e,r){var s,i=Array.apply(null,{length:e.viewData.length}),a=e.viewData.length;for(s=0;s<a;s+=1)i[s]=new t(e.viewData[s],e.masksProperties[s]);var n=function(t){for(s=0;s<a;){if(e.masksProperties[s].nm===t)return i[s];s+=1}};return n};return e}(),ExpressionValue=function(){return function(t,e,r){var s;t.k&&t.getValue();var i,a,n;if(r){if("color"===r){for(a=4,s=createTypedArray("float32",a),n=createTypedArray("float32",a),i=0;i<a;i+=1)s[i]=n[i]=e&&i<3?t.v[i]*e:1;s.value=n}}else if("number"==typeof t.v||t.v instanceof Number)s=e?new Number(t.v*e):new Number(t.v),s.value=e?t.v*e:t.v;else{for(a=t.v.length,s=createTypedArray("float32",a),n=createTypedArray("float32",a),i=0;i<a;i+=1)s[i]=n[i]=e?t.v[i]*e:t.v[i];s.value=n}return s.numKeys=t.keyframes?t.keyframes.length:0,s.key=function(e){return s.numKeys?t.keyframes[e-1].t:0},s.valueAtTime=t.getValueAtTime,s.propertyGroup=t.propertyGroup,s}}();GroupEffect.prototype.getValue=function(){this.mdf=!1;var t,e=this.dynamicProperties.length;for(t=0;t<e;t+=1)this.dynamicProperties[t].getValue(),this.mdf=!!this.dynamicProperties[t].mdf||this.mdf},GroupEffect.prototype.init=function(t,e,r){this.data=t,this.mdf=!1,this.effectElements=[];var s,i,a=this.data.ef.length,n=this.data.ef;for(s=0;s<a;s+=1)switch(n[s].ty){case 0:i=new SliderEffect(n[s],e,r),this.effectElements.push(i);break;case 1:i=new AngleEffect(n[s],e,r),this.effectElements.push(i);break;case 2:i=new ColorEffect(n[s],e,r),this.effectElements.push(i);break;case 3:i=new PointEffect(n[s],e,r),this.effectElements.push(i);break;case 4:case 7:i=new CheckboxEffect(n[s],e,r),this.effectElements.push(i);break;case 10:i=new LayerIndexEffect(n[s],e,r),this.effectElements.push(i);break;case 11:i=new MaskIndexEffect(n[s],e,r),this.effectElements.push(i);break;case 5:i=new EffectsManager(n[s],e,r),this.effectElements.push(i);break;case 6:default:i=new NoValueEffect(n[s],e,r),this.effectElements.push(i)}};var lottiejs={};lottiejs.play=play,lottiejs.pause=pause,lottiejs.setLocationHref=setLocationHref,lottiejs.togglePause=togglePause,lottiejs.setSpeed=setSpeed,lottiejs.setDirection=setDirection,lottiejs.stop=stop,lottiejs.moveFrame=moveFrame,lottiejs.searchAnimations=searchAnimations,lottiejs.registerAnimation=registerAnimation,lottiejs.loadAnimation=loadAnimation,lottiejs.setSubframeRendering=setSubframeRendering,lottiejs.resize=resize,lottiejs.goToAndStop=goToAndStop,lottiejs.destroy=destroy,lottiejs.setQuality=setQuality,lottiejs.inBrowser=inBrowser,lottiejs.installPlugin=installPlugin,lottiejs.__getFactory=getFactory,lottiejs.version="5.0.6";var standalone="__[STANDALONE]__",animationData="__[ANIMATIONDATA]__",renderer="";if(standalone){var scripts=document.getElementsByTagName("script"),index=scripts.length-1,myScript=scripts[index]||{src:""},queryString=myScript.src.replace(/^[^\?]+\??/,"");renderer=getQueryVariable("renderer")}var readyStateCheckInterval=setInterval(checkReady,100);return lottiejs});
/*!
 * Masonry PACKAGED v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

!function(t,e){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,r,a){function h(t,e,n){var o,r="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void s(i+" not initialized. Cannot call methods, i.e. "+r);var d=u[e];if(!d||"_"==e.charAt(0))return void s(r+" is not a valid method");var l=d.apply(u,n);o=void 0===o?l:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new r(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(r.prototype.option||(r.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,r=t.console,s="undefined"==typeof r?function(){}:function(t){r.error(t)};return n(e||t.jQuery),i}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],o=0;o<i.length;o++){var r=i[o],s=n&&n[r];s&&(this.off(t,r),delete n[r]),r.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}function o(){if(!d){d=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s=200==Math.round(t(o.width)),r.isBoxSizeOuter=s,i.removeChild(e)}}function r(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var r=n(e);if("none"==r.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var d=a.isBorderBox="border-box"==r.boxSizing,l=0;u>l;l++){var c=h[l],f=r[c],m=parseFloat(f);a[c]=isNaN(m)?0:m}var p=a.paddingLeft+a.paddingRight,g=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,z=a.borderTopWidth+a.borderBottomWidth,E=d&&s,b=t(r.width);b!==!1&&(a.width=b+(E?0:p+_));var x=t(r.height);return x!==!1&&(a.height=x+(E?0:g+z)),a.innerWidth=a.width-(p+_),a.innerHeight=a.height-(g+z),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var s,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,d=!1;return r}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e};var n=Array.prototype.slice;i.makeArray=function(t){if(Array.isArray(t))return t;if(null===t||void 0===t)return[];var e="object"==typeof t&&"number"==typeof t.length;return e?n.call(t):[t]},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),r=0;r<i.length;r++)o.push(i[r])}}),o},i.debounceMethod=function(t,e,i){i=i||100;var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,r=this;this[o]=setTimeout(function(){n.apply(r,e),delete r[o]},i)}},i.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var o=t.console;return i.htmlInit=function(e,n){i.docReady(function(){var r=i.toDashed(n),s="data-"+r,a=document.querySelectorAll("["+s+"]"),h=document.querySelectorAll(".js-"+r),u=i.makeArray(a).concat(i.makeArray(h)),d=s+"-options",l=t.jQuery;u.forEach(function(t){var i,r=t.getAttribute(s)||t.getAttribute(d);try{i=r&&JSON.parse(r)}catch(a){return void(o&&o.error("Error parsing "+s+" on "+t.className+": "+a))}var h=new e(t,i);l&&l.data(t,n,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var r=document.documentElement.style,s="string"==typeof r.transition?"transition":"WebkitTransition",a="string"==typeof r.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[s],u={transform:a,transition:s,transitionDuration:s+"Duration",transitionProperty:s+"Property",transitionDelay:s+"Delay"},d=n.prototype=Object.create(t.prototype);d.constructor=n,d._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},d.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},d.getSize=function(){this.size=e(this.element)},d.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},d.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],r=parseFloat(n),s=parseFloat(o),a=this.layout.size;-1!=n.indexOf("%")&&(r=r/100*a.width),-1!=o.indexOf("%")&&(s=s/100*a.height),r=isNaN(r)?0:r,s=isNaN(s)?0:s,r-=e?a.paddingLeft:a.paddingRight,s-=i?a.paddingTop:a.paddingBottom,this.position.x=r,this.position.y=s},d.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",r=i?"left":"right",s=i?"right":"left",a=this.position.x+t[o];e[r]=this.getXValue(a),e[s]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",d=n?"bottom":"top",l=this.position.y+t[h];e[u]=this.getYValue(l),e[d]="",this.css(e),this.emitEvent("layout",[this])},d.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},d.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},d._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=t==this.position.x&&e==this.position.y;if(this.setPosition(t,e),o&&!this.isTransitioning)return void this.layoutPosition();var r=t-i,s=e-n,a={};a.transform=this.getTranslate(r,s),this.transition({to:a,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},d.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},d.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},d.moveTo=d._transitionTo,d.setPosition=function(t,e){this.position.x=parseFloat(t),this.position.y=parseFloat(e)},d._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},d.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var l="opacity,"+o(a);d.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:l,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},d.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},d.onotransitionend=function(t){this.ontransitionend(t)};var c={"-webkit-transform":"transform"};d.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=c[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},d.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},d._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var f={transitionProperty:"",transitionDuration:"",transitionDelay:""};return d.removeTransitionStyles=function(){this.css(f)},d.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},d.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},d.remove=function(){return s&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},d.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},d.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},d.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},d.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},d.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},d.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,r){return e(t,i,n,o,r)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function r(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++l;this.element.outlayerGUID=o,c[o]=this,this._create();var r=this._getOption("initLayout");r&&this.layout()}function s(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=m[n]||1;return i*o}var h=t.console,u=t.jQuery,d=function(){},l=0,c={};r.namespace="outlayer",r.Item=o,r.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var f=r.prototype;n.extend(f,e.prototype),f.option=function(t){n.extend(this.options,t)},f._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},r.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},f._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},f.reloadItems=function(){this.items=this._itemize(this.element.children)},f._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var r=e[o],s=new i(r,this);n.push(s)}return n},f._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},f.getItemElements=function(){return this.items.map(function(t){return t.element})},f.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},f._init=f.layout,f._resetLayout=function(){this.getSize()},f.getSize=function(){this.size=i(this.element)},f._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},f.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},f._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},f._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},f._getItemLayoutPosition=function(){return{x:0,y:0}},f._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},f.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},f._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},f._postLayout=function(){this.resizeContainer()},f.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},f._getContainerSize=d,f._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},f._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){s++,s==r&&i()}var o=this,r=e.length;if(!e||!r)return void i();var s=0;e.forEach(function(e){e.once(t,n)})},f.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},f.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},f.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},f.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},f.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},f._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},f._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},f._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},f._manageStamp=d,f._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),r={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return r},f.handleEvent=n.handleEvent,f.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},f.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},f.onresize=function(){this.resize()},n.debounceMethod(r,"onresize",100),f.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},f.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},f.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},f.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},f.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},f.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},f.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},f.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},f.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},f.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},f.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},f.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},f.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete c[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},r.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&c[e]},r.create=function(t,e){var i=s(r);return i.defaults=n.extend({},r.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},r.compatOptions),i.namespace=t,i.data=r.data,i.Item=s(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var m={ms:1,s:1e3};return r.Item=o,r}),function(t,e){"function"==typeof define&&define.amd?define(["outlayer/outlayer","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("get-size")):t.Masonry=e(t.Outlayer,t.getSize)}(window,function(t,e){var i=t.create("masonry");i.compatOptions.fitWidth="isFitWidth";var n=i.prototype;return n._resetLayout=function(){this.getSize(),this._getMeasurement("columnWidth","outerWidth"),this._getMeasurement("gutter","outerWidth"),this.measureColumns(),this.colYs=[];for(var t=0;t<this.cols;t++)this.colYs.push(0);this.maxY=0,this.horizontalColIndex=0},n.measureColumns=function(){if(this.getContainerWidth(),!this.columnWidth){var t=this.items[0],i=t&&t.element;this.columnWidth=i&&e(i).outerWidth||this.containerWidth}var n=this.columnWidth+=this.gutter,o=this.containerWidth+this.gutter,r=o/n,s=n-o%n,a=s&&1>s?"round":"floor";r=Math[a](r),this.cols=Math.max(r,1)},n.getContainerWidth=function(){var t=this._getOption("fitWidth"),i=t?this.element.parentNode:this.element,n=e(i);this.containerWidth=n&&n.innerWidth},n._getItemLayoutPosition=function(t){t.getSize();var e=t.size.outerWidth%this.columnWidth,i=e&&1>e?"round":"ceil",n=Math[i](t.size.outerWidth/this.columnWidth);n=Math.min(n,this.cols);for(var o=this.options.horizontalOrder?"_getHorizontalColPosition":"_getTopColPosition",r=this[o](n,t),s={x:this.columnWidth*r.col,y:r.y},a=r.y+t.size.outerHeight,h=n+r.col,u=r.col;h>u;u++)this.colYs[u]=a;return s},n._getTopColPosition=function(t){var e=this._getTopColGroup(t),i=Math.min.apply(Math,e);return{col:e.indexOf(i),y:i}},n._getTopColGroup=function(t){if(2>t)return this.colYs;for(var e=[],i=this.cols+1-t,n=0;i>n;n++)e[n]=this._getColGroupY(n,t);return e},n._getColGroupY=function(t,e){if(2>e)return this.colYs[t];var i=this.colYs.slice(t,t+e);return Math.max.apply(Math,i)},n._getHorizontalColPosition=function(t,e){var i=this.horizontalColIndex%this.cols,n=t>1&&i+t>this.cols;i=n?0:i;var o=e.size.outerWidth&&e.size.outerHeight;return this.horizontalColIndex=o?i+t:this.horizontalColIndex,{col:i,y:this._getColGroupY(i,t)}},n._manageStamp=function(t){var i=e(t),n=this._getElementOffset(t),o=this._getOption("originLeft"),r=o?n.left:n.right,s=r+i.outerWidth,a=Math.floor(r/this.columnWidth);a=Math.max(0,a);var h=Math.floor(s/this.columnWidth);h-=s%this.columnWidth?0:1,h=Math.min(this.cols-1,h);for(var u=this._getOption("originTop"),d=(u?n.top:n.bottom)+i.outerHeight,l=a;h>=l;l++)this.colYs[l]=Math.max(d,this.colYs[l])},n._getContainerSize=function(){this.maxY=Math.max.apply(Math,this.colYs);var t={height:this.maxY};return this._getOption("fitWidth")&&(t.width=this._getContainerFitWidth()),t},n._getContainerFitWidth=function(){for(var t=0,e=this.cols;--e&&0===this.colYs[e];)t++;return(this.cols-t)*this.columnWidth-this.gutter},n.needsResizeLayout=function(){var t=this.containerWidth;return this.getContainerWidth(),t!=this.containerWidth},i});
/*! pace 1.0.0 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=["ajax","document","eventLag","elements"],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace(/pace-done/g,""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d="translate3d("+this.progress+"%, 0, 0)",g=["webkitTransform","msTransform","transform"],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?c="99":(c=this.progress<10?"0":"",c+=0|this.progress),a.children[0].setAttribute("data-progress",""+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&"function"!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("ignore"),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift("track"),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a="GET"),"track"===A[0])return"force";if(!A.length&&D.ajax){if("socket"===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],"string"==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on("request",function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&"force"!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c="socket"===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger("stop"),j.running=!1,r.destroy(),s=!0,null!=p&&("function"==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger("restart"),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger("done"),setTimeout(function(){return r.finish(),j.running=!1,j.trigger("hide")},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector(".pace")?(j.trigger("start"),j.go()):setTimeout(j.start,50)},"function"==typeof define&&define.amd?define(function(){return j}):"object"==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
/*! @license ScrollReveal v4.0.5

	Copyright 2018 Fisssion LLC.

	Licensed under the GNU General Public License 3.0 for
	compatible open source projects and non-commercial use.

	For commercial sites, themes, projects, and applications,
	keep your source code private/proprietary by purchasing
	a commercial license from https://scrollrevealjs.org/
*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ScrollReveal = factory());
}(this, (function () { 'use strict';

var defaults = {
	delay: 0,
	distance: '0',
	duration: 600,
	easing: 'cubic-bezier(0.5, 0, 0, 1)',
	interval: 0,
	opacity: 0,
	origin: 'bottom',
	rotate: {
		x: 0,
		y: 0,
		z: 0
	},
	scale: 1,
	cleanup: false,
	container: document.documentElement,
	desktop: true,
	mobile: true,
	reset: false,
	useDelay: 'always',
	viewFactor: 0.0,
	viewOffset: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	afterReset: function afterReset() {},
	afterReveal: function afterReveal() {},
	beforeReset: function beforeReset() {},
	beforeReveal: function beforeReveal() {}
}

function failure() {
	document.documentElement.classList.remove('sr');

	return {
		clean: function clean() {},
		destroy: function destroy() {},
		reveal: function reveal() {},
		sync: function sync() {},
		get noop() {
			return true
		}
	}
}

function success() {
	document.documentElement.classList.add('sr');

	if (document.body) {
		document.body.style.height = '100%';
	} else {
		document.addEventListener('DOMContentLoaded', function () {
			document.body.style.height = '100%';
		});
	}
}

var mount = { success: success, failure: failure }

/*! @license is-dom-node v1.0.4

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNode(x) {
	return typeof window.Node === 'object'
		? x instanceof window.Node
		: x !== null &&
				typeof x === 'object' &&
				typeof x.nodeType === 'number' &&
				typeof x.nodeName === 'string'
}

/*! @license is-dom-node-list v1.2.1

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function isDomNodeList(x) {
	var prototypeToString = Object.prototype.toString.call(x);
	var regex = /^\[object (HTMLCollection|NodeList|Object)\]$/;

	return typeof window.NodeList === 'object'
		? x instanceof window.NodeList
		: x !== null &&
				typeof x === 'object' &&
				typeof x.length === 'number' &&
				regex.test(prototypeToString) &&
				(x.length === 0 || isDomNode(x[0]))
}

/*! @license Tealight v0.3.6

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
function tealight(target, context) {
  if ( context === void 0 ) { context = document; }

  if (target instanceof Array) { return target.filter(isDomNode); }
  if (isDomNode(target)) { return [target]; }
  if (isDomNodeList(target)) { return Array.prototype.slice.call(target); }
  if (typeof target === "string") {
    try {
      var query = context.querySelectorAll(target);
      return Array.prototype.slice.call(query);
    } catch (err) {
      return [];
    }
  }
  return [];
}

function isObject(x) {
	return (
		x !== null &&
		x instanceof Object &&
		(x.constructor === Object ||
			Object.prototype.toString.call(x) === '[object Object]')
	)
}

function each(collection, callback) {
	if (isObject(collection)) {
		var keys = Object.keys(collection);
		return keys.forEach(function (key) { return callback(collection[key], key, collection); })
	}
	if (collection instanceof Array) {
		return collection.forEach(function (item, i) { return callback(item, i, collection); })
	}
	throw new TypeError('Expected either an array or object literal.')
}

function logger(message) {
	var details = [], len = arguments.length - 1;
	while ( len-- > 0 ) details[ len ] = arguments[ len + 1 ];

	if (this.constructor.debug && console) {
		var report = "%cScrollReveal: " + message;
		details.forEach(function (detail) { return (report += "\n — " + detail); });
		console.log(report, 'color: #ea654b;'); // eslint-disable-line no-console
	}
}

function rinse() {
	var this$1 = this;

	var struct = function () { return ({
		active: [],
		stale: []
	}); };

	var elementIds = struct();
	var sequenceIds = struct();
	var containerIds = struct();

	/**
	 * Take stock of active element IDs.
	 */
	try {
		each(tealight('[data-sr-id]'), function (node) {
			var id = parseInt(node.getAttribute('data-sr-id'));
			elementIds.active.push(id);
		});
	} catch (e) {
		throw e
	}
	/**
	 * Destroy stale elements.
	 */
	each(this.store.elements, function (element) {
		if (elementIds.active.indexOf(element.id) === -1) {
			elementIds.stale.push(element.id);
		}
	});

	each(elementIds.stale, function (staleId) { return delete this$1.store.elements[staleId]; });

	/**
	 * Take stock of active container and sequence IDs.
	 */
	each(this.store.elements, function (element) {
		if (containerIds.active.indexOf(element.containerId) === -1) {
			containerIds.active.push(element.containerId);
		}
		if (element.hasOwnProperty('sequence')) {
			if (sequenceIds.active.indexOf(element.sequence.id) === -1) {
				sequenceIds.active.push(element.sequence.id);
			}
		}
	});

	/**
	 * Destroy stale containers.
	 */
	each(this.store.containers, function (container) {
		if (containerIds.active.indexOf(container.id) === -1) {
			containerIds.stale.push(container.id);
		}
	});

	each(containerIds.stale, function (staleId) {
		var stale = this$1.store.containers[staleId].node;
		stale.removeEventListener('scroll', this$1.delegate);
		stale.removeEventListener('resize', this$1.delegate);
		delete this$1.store.containers[staleId];
	});

	/**
	 * Destroy stale sequences.
	 */
	each(this.store.sequences, function (sequence) {
		if (sequenceIds.active.indexOf(sequence.id) === -1) {
			sequenceIds.stale.push(sequence.id);
		}
	});

	each(sequenceIds.stale, function (staleId) { return delete this$1.store.sequences[staleId]; });
}

function clean(target) {
	var this$1 = this;

	var dirty;
	try {
		each(tealight(target), function (node) {
			var id = node.getAttribute('data-sr-id');
			if (id !== null) {
				dirty = true;
				var element = this$1.store.elements[id];
				if (element.callbackTimer) {
					window.clearTimeout(element.callbackTimer.clock);
				}
				node.setAttribute('style', element.styles.inline.generated);
				node.removeAttribute('data-sr-id');
				delete this$1.store.elements[id];
			}
		});
	} catch (e) {
		return logger.call(this, 'Clean failed.', e.message)
	}

	if (dirty) {
		try {
			rinse.call(this);
		} catch (e) {
			return logger.call(this, 'Clean failed.', e.message)
		}
	}
}

function destroy() {
	var this$1 = this;

	/**
	 * Remove all generated styles and element ids
	 */
	each(this.store.elements, function (element) {
		element.node.setAttribute('style', element.styles.inline.generated);
		element.node.removeAttribute('data-sr-id');
	});

	/**
	 * Remove all event listeners.
	 */
	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.removeEventListener('scroll', this$1.delegate);
		target.removeEventListener('resize', this$1.delegate);
	});

	/**
	 * Clear all data from the store
	 */
	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};
}

/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/
/**
 * @module Rematrix
 */

/**
 * Transformation matrices in the browser come in two flavors:
 *
 *  - `matrix` using 6 values (short)
 *  - `matrix3d` using 16 values (long)
 *
 * This utility follows this [conversion guide](https://goo.gl/EJlUQ1)
 * to expand short form matrices to their equivalent long form.
 *
 * @param  {array} source - Accepts both short and long form matrices.
 * @return {array}
 */
function format(source) {
	if (source.constructor !== Array) {
		throw new TypeError('Expected array.')
	}
	if (source.length === 16) {
		return source
	}
	if (source.length === 6) {
		var matrix = identity();
		matrix[0] = source[0];
		matrix[1] = source[1];
		matrix[4] = source[2];
		matrix[5] = source[3];
		matrix[12] = source[4];
		matrix[13] = source[5];
		return matrix
	}
	throw new RangeError('Expected array with either 6 or 16 values.')
}

/**
 * Returns a matrix representing no transformation. The product of any matrix
 * multiplied by the identity matrix will be the original matrix.
 *
 * > **Tip:** Similar to how `5 * 1 === 5`, where `1` is the identity.
 *
 * @return {array}
 */
function identity() {
	var matrix = [];
	for (var i = 0; i < 16; i++) {
		i % 5 == 0 ? matrix.push(1) : matrix.push(0);
	}
	return matrix
}

/**
 * Returns a 4x4 matrix describing the combined transformations
 * of both arguments.
 *
 * > **Note:** Order is very important. For example, rotating 45°
 * along the Z-axis, followed by translating 500 pixels along the
 * Y-axis... is not the same as translating 500 pixels along the
 * Y-axis, followed by rotating 45° along on the Z-axis.
 *
 * @param  {array} m - Accepts both short and long form matrices.
 * @param  {array} x - Accepts both short and long form matrices.
 * @return {array}
 */
function multiply(m, x) {
	var fm = format(m);
	var fx = format(x);
	var product = [];

	for (var i = 0; i < 4; i++) {
		var row = [fm[i], fm[i + 4], fm[i + 8], fm[i + 12]];
		for (var j = 0; j < 4; j++) {
			var k = j * 4;
			var col = [fx[k], fx[k + 1], fx[k + 2], fx[k + 3]];
			var result =
				row[0] * col[0] + row[1] * col[1] + row[2] * col[2] + row[3] * col[3];

			product[i + k] = result;
		}
	}

	return product
}

/**
 * Attempts to return a 4x4 matrix describing the CSS transform
 * matrix passed in, but will return the identity matrix as a
 * fallback.
 *
 * > **Tip:** This method is used to convert a CSS matrix (retrieved as a
 * `string` from computed styles) to its equivalent array format.
 *
 * @param  {string} source - `matrix` or `matrix3d` CSS Transform value.
 * @return {array}
 */
function parse(source) {
	if (typeof source === 'string') {
		var match = source.match(/matrix(3d)?\(([^)]+)\)/);
		if (match) {
			var raw = match[2].split(', ').map(parseFloat);
			return format(raw)
		}
	}
	return identity()
}

/**
 * Returns a 4x4 matrix describing X-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateX(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[5] = matrix[10] = Math.cos(theta);
	matrix[6] = matrix[9] = Math.sin(theta);
	matrix[9] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateY(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[10] = Math.cos(theta);
	matrix[2] = matrix[8] = Math.sin(theta);
	matrix[2] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing Z-axis rotation.
 *
 * @param  {number} angle - Measured in degrees.
 * @return {array}
 */
function rotateZ(angle) {
	var theta = Math.PI / 180 * angle;
	var matrix = identity();

	matrix[0] = matrix[5] = Math.cos(theta);
	matrix[1] = matrix[4] = Math.sin(theta);
	matrix[4] *= -1;

	return matrix
}

/**
 * Returns a 4x4 matrix describing 2D scaling. The first argument
 * is used for both X and Y-axis scaling, unless an optional
 * second argument is provided to explicitly define Y-axis scaling.
 *
 * @param  {number} scalar    - Decimal multiplier.
 * @param  {number} [scalarY] - Decimal multiplier.
 * @return {array}
 */
function scale(scalar, scalarY) {
	var matrix = identity();

	matrix[0] = scalar;
	matrix[5] = typeof scalarY === 'number' ? scalarY : scalar;

	return matrix
}

/**
 * Returns a 4x4 matrix describing X-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateX(distance) {
	var matrix = identity();
	matrix[12] = distance;
	return matrix
}

/**
 * Returns a 4x4 matrix describing Y-axis translation.
 *
 * @param  {number} distance - Measured in pixels.
 * @return {array}
 */
function translateY(distance) {
	var matrix = identity();
	matrix[13] = distance;
	return matrix
}

var getPrefixedCssProp = (function () {
	var properties = {};
	var style = document.documentElement.style;

	function getPrefixedCssProperty(name, source) {
		if ( source === void 0 ) source = style;

		if (name && typeof name === 'string') {
			if (properties[name]) {
				return properties[name]
			}
			if (typeof source[name] === 'string') {
				return (properties[name] = name)
			}
			if (typeof source[("-webkit-" + name)] === 'string') {
				return (properties[name] = "-webkit-" + name)
			}
			throw new RangeError(("Unable to find \"" + name + "\" style property."))
		}
		throw new TypeError('Expected a string.')
	}

	getPrefixedCssProperty.clearCache = function () { return (properties = {}); };

	return getPrefixedCssProperty
})();

function style(element) {
	var computed = window.getComputedStyle(element.node);
	var position = computed.position;
	var config = element.config;

	/**
	 * Generate inline styles
	 */
	var inline = {};
	var inlineStyle = element.node.getAttribute('style') || '';
	var inlineMatch = inlineStyle.match(/[\w-]+\s*:\s*[^;]+\s*/gi) || [];

	inline.computed = inlineMatch ? inlineMatch.map(function (m) { return m.trim(); }).join('; ') + ';' : '';

	inline.generated = inlineMatch.some(function (m) { return m.match(/visibility\s?:\s?visible/i); })
		? inline.computed
		: inlineMatch.concat( ['visibility: visible']).map(function (m) { return m.trim(); }).join('; ') + ';';

	/**
	 * Generate opacity styles
	 */
	var computedOpacity = parseFloat(computed.opacity);
	var configOpacity = !isNaN(parseFloat(config.opacity))
		? parseFloat(config.opacity)
		: parseFloat(computed.opacity);

	var opacity = {
		computed: computedOpacity !== configOpacity ? ("opacity: " + computedOpacity + ";") : '',
		generated: computedOpacity !== configOpacity ? ("opacity: " + configOpacity + ";") : ''
	};

	/**
	 * Generate transformation styles
	 */
	var transformations = [];

	if (parseFloat(config.distance)) {
		var axis = config.origin === 'top' || config.origin === 'bottom' ? 'Y' : 'X';

		/**
		 * Let’s make sure our our pixel distances are negative for top and left.
		 * e.g. { origin: 'top', distance: '25px' } starts at `top: -25px` in CSS.
		 */
		var distance = config.distance;
		if (config.origin === 'top' || config.origin === 'left') {
			distance = /^-/.test(distance) ? distance.substr(1) : ("-" + distance);
		}

		var ref = distance.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g);
		var value = ref[0];
		var unit = ref[1];

		switch (unit) {
			case 'em':
				distance = parseInt(computed.fontSize) * value;
				break
			case 'px':
				distance = value;
				break
			case '%':
				/**
				 * Here we use `getBoundingClientRect` instead of
				 * the existing data attached to `element.geometry`
				 * because only the former includes any transformations
				 * current applied to the element.
				 *
				 * If that behavior ends up being unintuitive, this
				 * logic could instead utilize `element.geometry.height`
				 * and `element.geoemetry.width` for the distaince calculation
				 */
				distance =
					axis === 'Y'
						? element.node.getBoundingClientRect().height * value / 100
						: element.node.getBoundingClientRect().width * value / 100;
				break
			default:
				throw new RangeError('Unrecognized or missing distance unit.')
		}

		if (axis === 'Y') {
			transformations.push(translateY(distance));
		} else {
			transformations.push(translateX(distance));
		}
	}

	if (config.rotate.x) { transformations.push(rotateX(config.rotate.x)); }
	if (config.rotate.y) { transformations.push(rotateY(config.rotate.y)); }
	if (config.rotate.z) { transformations.push(rotateZ(config.rotate.z)); }
	if (config.scale !== 1) {
		if (config.scale === 0) {
			/**
			 * The CSS Transforms matrix interpolation specification
			 * basically disallows transitions of non-invertible
			 * matrixes, which means browsers won't transition
			 * elements with zero scale.
			 *
			 * That’s inconvenient for the API and developer
			 * experience, so we simply nudge their value
			 * slightly above zero; this allows browsers
			 * to transition our element as expected.
			 *
			 * `0.0002` was the smallest number
			 * that performed across browsers.
			 */
			transformations.push(scale(0.0002));
		} else {
			transformations.push(scale(config.scale));
		}
	}

	var transform = {};
	if (transformations.length) {
		transform.property = getPrefixedCssProp('transform');
		/**
		 * The default computed transform value should be one of:
		 * undefined || 'none' || 'matrix()' || 'matrix3d()'
		 */
		transform.computed = {
			raw: computed[transform.property],
			matrix: parse(computed[transform.property])
		};

		transformations.unshift(transform.computed.matrix);
		var product = transformations.reduce(multiply);

		transform.generated = {
			initial: ((transform.property) + ": matrix3d(" + (product.join(', ')) + ");"),
			final: ((transform.property) + ": matrix3d(" + (transform.computed.matrix.join(
				', '
			)) + ");")
		};
	} else {
		transform.generated = {
			initial: '',
			final: ''
		};
	}

	/**
	 * Generate transition styles
	 */
	var transition = {};
	if (opacity.generated || transform.generated.initial) {
		transition.property = getPrefixedCssProp('transition');
		transition.computed = computed[transition.property];
		transition.fragments = [];

		var delay = config.delay;
		var duration = config.duration;
		var easing = config.easing;

		if (opacity.generated) {
			transition.fragments.push({
				delayed: ("opacity " + (duration / 1000) + "s " + easing + " " + (delay / 1000) + "s"),
				instant: ("opacity " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		if (transform.generated.initial) {
			transition.fragments.push({
				delayed: ((transform.property) + " " + (duration / 1000) + "s " + easing + " " + (delay /
					1000) + "s"),
				instant: ((transform.property) + " " + (duration / 1000) + "s " + easing + " 0s")
			});
		}

		/**
		 * The default computed transition property should be one of:
		 * undefined || '' || 'all 0s ease 0s' || 'all 0s 0s cubic-bezier()'
		 */
		if (transition.computed && !transition.computed.match(/all 0s/)) {
			transition.fragments.unshift({
				delayed: transition.computed,
				instant: transition.computed
			});
		}

		var composed = transition.fragments.reduce(
			function (composition, fragment, i) {
				composition.delayed +=
					i === 0 ? fragment.delayed : (", " + (fragment.delayed));
				composition.instant +=
					i === 0 ? fragment.instant : (", " + (fragment.instant));
				return composition
			},
			{
				delayed: '',
				instant: ''
			}
		);

		transition.generated = {
			delayed: ((transition.property) + ": " + (composed.delayed) + ";"),
			instant: ((transition.property) + ": " + (composed.instant) + ";")
		};
	} else {
		transition.generated = {
			delayed: '',
			instant: ''
		};
	}

	return {
		inline: inline,
		opacity: opacity,
		position: position,
		transform: transform,
		transition: transition
	}
}

function animate(element, force) {
	if ( force === void 0 ) force = {};

	var pristine = force.pristine || this.pristine;
	var delayed =
		element.config.useDelay === 'always' ||
		(element.config.useDelay === 'onload' && pristine) ||
		(element.config.useDelay === 'once' && !element.seen);

	var shouldReveal = element.visible && !element.revealed;
	var shouldReset = !element.visible && element.revealed && element.config.reset;

	if (force.reveal || shouldReveal) {
		return triggerReveal.call(this, element, delayed)
	}

	if (force.reset || shouldReset) {
		return triggerReset.call(this, element)
	}
}

function triggerReveal(element, delayed) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.computed,
		element.styles.transform.generated.final
	];
	if (delayed) {
		styles.push(element.styles.transition.generated.delayed);
	} else {
		styles.push(element.styles.transition.generated.instant);
	}
	element.revealed = element.seen = true;
	element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element, delayed);
}

function triggerReset(element) {
	var styles = [
		element.styles.inline.generated,
		element.styles.opacity.generated,
		element.styles.transform.generated.initial,
		element.styles.transition.generated.instant
	];
	element.revealed = false;
	element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	registerCallbacks.call(this, element);
}

function registerCallbacks(element, isDelayed) {
	var this$1 = this;

	var duration = isDelayed
		? element.config.duration + element.config.delay
		: element.config.duration;

	var beforeCallback = element.revealed
		? element.config.beforeReveal
		: element.config.beforeReset;

	var afterCallback = element.revealed
		? element.config.afterReveal
		: element.config.afterReset;

	var elapsed = 0;
	if (element.callbackTimer) {
		elapsed = Date.now() - element.callbackTimer.start;
		window.clearTimeout(element.callbackTimer.clock);
	}

	beforeCallback(element.node);

	element.callbackTimer = {
		start: Date.now(),
		clock: window.setTimeout(function () {
			afterCallback(element.node);
			element.callbackTimer = null;
			if (element.revealed && !element.config.reset && element.config.cleanup) {
				clean.call(this$1, element.node);
			}
		}, duration - elapsed)
	};
}

var nextUniqueId = (function () {
	var uid = 0;
	return function () { return uid++; }
})();

function sequence(element, pristine) {
	if ( pristine === void 0 ) pristine = this.pristine;

	/**
	 * We first check if the element should reset.
	 */
	if (!element.visible && element.revealed && element.config.reset) {
		return animate.call(this, element, { reset: true })
	}

	var seq = this.store.sequences[element.sequence.id];
	var i = element.sequence.index;

	if (seq) {
		var visible = new SequenceModel(seq, 'visible', this.store);
		var revealed = new SequenceModel(seq, 'revealed', this.store);

		seq.models = { visible: visible, revealed: revealed };

		/**
		 * If the sequence has no revealed members,
		 * then we reveal the first visible element
		 * within that sequence.
		 *
		 * The sequence then cues a recursive call
		 * in both directions.
		 */
		if (!revealed.body.length) {
			var nextId = seq.members[visible.body[0]];
			var nextElement = this.store.elements[nextId];

			if (nextElement) {
				cue.call(this, seq, visible.body[0], -1, pristine);
				cue.call(this, seq, visible.body[0], +1, pristine);
				return animate.call(this, nextElement, { reveal: true, pristine: pristine })
			}
		}

		/**
		 * If our element isn’t resetting, we check the
		 * element sequence index against the head, and
		 * then the foot of the sequence.
		 */
		if (
			!seq.blocked.head &&
			i === [].concat( revealed.head ).pop() &&
			i >= [].concat( visible.body ).shift()
		) {
			cue.call(this, seq, i, -1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}

		if (
			!seq.blocked.foot &&
			i === [].concat( revealed.foot ).shift() &&
			i <= [].concat( visible.body ).pop()
		) {
			cue.call(this, seq, i, +1, pristine);
			return animate.call(this, element, { reveal: true, pristine: pristine })
		}
	}
}

function Sequence(interval) {
	var i = Math.abs(interval);
	if (!isNaN(i)) {
		this.id = nextUniqueId();
		this.interval = Math.max(i, 16);
		this.members = [];
		this.models = {};
		this.blocked = {
			head: false,
			foot: false
		};
	} else {
		throw new RangeError('Invalid sequence interval.')
	}
}

function SequenceModel(seq, prop, store) {
	var this$1 = this;

	this.head = [];
	this.body = [];
	this.foot = [];

	each(seq.members, function (id, index) {
		var element = store.elements[id];
		if (element && element[prop]) {
			this$1.body.push(index);
		}
	});

	if (this.body.length) {
		each(seq.members, function (id, index) {
			var element = store.elements[id];
			if (element && !element[prop]) {
				if (index < this$1.body[0]) {
					this$1.head.push(index);
				} else {
					this$1.foot.push(index);
				}
			}
		});
	}
}

function cue(seq, i, direction, pristine) {
	var this$1 = this;

	var blocked = ['head', null, 'foot'][1 + direction];
	var nextId = seq.members[i + direction];
	var nextElement = this.store.elements[nextId];

	seq.blocked[blocked] = true;

	setTimeout(function () {
		seq.blocked[blocked] = false;
		if (nextElement) {
			sequence.call(this$1, nextElement, pristine);
		}
	}, seq.interval);
}

function initialize() {
	var this$1 = this;

	rinse.call(this);

	each(this.store.elements, function (element) {
		var styles = [element.styles.inline.generated];

		if (element.visible) {
			styles.push(element.styles.opacity.computed);
			styles.push(element.styles.transform.generated.final);
			element.revealed = true;
		} else {
			styles.push(element.styles.opacity.generated);
			styles.push(element.styles.transform.generated.initial);
			element.revealed = false;
		}

		element.node.setAttribute('style', styles.filter(function (s) { return s !== ''; }).join(' '));
	});

	each(this.store.containers, function (container) {
		var target =
			container.node === document.documentElement ? window : container.node;
		target.addEventListener('scroll', this$1.delegate);
		target.addEventListener('resize', this$1.delegate);
	});

	/**
	 * Manually invoke delegate once to capture
	 * element and container dimensions, container
	 * scroll position, and trigger any valid reveals
	 */
	this.delegate();

	/**
	 * Wipe any existing `setTimeout` now
	 * that initialization has completed.
	 */
	this.initTimeout = null;
}

function isMobile(agent) {
	if ( agent === void 0 ) agent = navigator.userAgent;

	return /Android|iPhone|iPad|iPod/i.test(agent)
}

function deepAssign(target) {
	var sources = [], len = arguments.length - 1;
	while ( len-- > 0 ) sources[ len ] = arguments[ len + 1 ];

	if (isObject(target)) {
		each(sources, function (source) {
			each(source, function (data, key) {
				if (isObject(data)) {
					if (!target[key] || !isObject(target[key])) {
						target[key] = {};
					}
					deepAssign(target[key], data);
				} else {
					target[key] = data;
				}
			});
		});
		return target
	} else {
		throw new TypeError('Target must be an object literal.')
	}
}

function reveal(target, options, syncing) {
	var this$1 = this;
	if ( options === void 0 ) options = {};
	if ( syncing === void 0 ) syncing = false;

	var containerBuffer = [];
	var sequence$$1;
	var interval = options.interval || defaults.interval;

	try {
		if (interval) {
			sequence$$1 = new Sequence(interval);
		}

		var nodes = tealight(target);
		if (!nodes.length) {
			throw new Error('Invalid reveal target.')
		}

		var elements = nodes.reduce(function (elementBuffer, elementNode) {
			var element = {};
			var existingId = elementNode.getAttribute('data-sr-id');

			if (existingId) {
				deepAssign(element, this$1.store.elements[existingId]);

				/**
				 * In order to prevent previously generated styles
				 * from throwing off the new styles, the style tag
				 * has to be reverted to its pre-reveal state.
				 */
				element.node.setAttribute('style', element.styles.inline.computed);
			} else {
				element.id = nextUniqueId();
				element.node = elementNode;
				element.seen = false;
				element.revealed = false;
				element.visible = false;
			}

			var config = deepAssign({}, element.config || this$1.defaults, options);

			if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
				if (existingId) {
					clean.call(this$1, element);
				}
				return elementBuffer // skip elements that are disabled
			}

			var containerNode = tealight(config.container)[0];
			if (!containerNode) {
				throw new Error('Invalid container.')
			}
			if (!containerNode.contains(elementNode)) {
				return elementBuffer // skip elements found outside the container
			}

			var containerId;
			{
				containerId = getContainerId(
					containerNode,
					containerBuffer,
					this$1.store.containers
				);
				if (containerId === null) {
					containerId = nextUniqueId();
					containerBuffer.push({ id: containerId, node: containerNode });
				}
			}

			element.config = config;
			element.containerId = containerId;
			element.styles = style(element);

			if (sequence$$1) {
				element.sequence = {
					id: sequence$$1.id,
					index: sequence$$1.members.length
				};
				sequence$$1.members.push(element.id);
			}

			elementBuffer.push(element);
			return elementBuffer
		}, []);

		/**
		 * Modifying the DOM via setAttribute needs to be handled
		 * separately from reading computed styles in the map above
		 * for the browser to batch DOM changes (limiting reflows)
		 */
		each(elements, function (element) {
			this$1.store.elements[element.id] = element;
			element.node.setAttribute('data-sr-id', element.id);
		});
	} catch (e) {
		return logger.call(this, 'Reveal failed.', e.message)
	}

	/**
	 * Now that element set-up is complete...
	 * Let’s commit any container and sequence data we have to the store.
	 */
	each(containerBuffer, function (container) {
		this$1.store.containers[container.id] = {
			id: container.id,
			node: container.node
		};
	});
	if (sequence$$1) {
		this.store.sequences[sequence$$1.id] = sequence$$1;
	}

	/**
	 * If reveal wasn't invoked by sync, we want to
	 * make sure to add this call to the history.
	 */
	if (syncing !== true) {
		this.store.history.push({ target: target, options: options });

		/**
		 * Push initialization to the event queue, giving
		 * multiple reveal calls time to be interpreted.
		 */
		if (this.initTimeout) {
			window.clearTimeout(this.initTimeout);
		}
		this.initTimeout = window.setTimeout(initialize.bind(this), 0);
	}
}

function getContainerId(node) {
	var collections = [], len = arguments.length - 1;
	while ( len-- > 0 ) collections[ len ] = arguments[ len + 1 ];

	var id = null;
	each(collections, function (collection) {
		each(collection, function (container) {
			if (id === null && container.node === node) {
				id = container.id;
			}
		});
	});
	return id
}

/**
 * Re-runs the reveal method for each record stored in history,
 * for capturing new content asynchronously loaded into the DOM.
 */
function sync() {
	var this$1 = this;

	each(this.store.history, function (record) {
		reveal.call(this$1, record.target, record.options, true);
	});

	initialize.call(this);
}

var polyfill = function (x) { return (x > 0) - (x < 0) || +x; };
var mathSign = Math.sign || polyfill

/*! @license miniraf v1.0.0

	Copyright 2018 Fisssion LLC.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.

*/
var polyfill$1 = (function () {
	var clock = Date.now();

	return function (callback) {
		var currentTime = Date.now();
		if (currentTime - clock > 16) {
			clock = currentTime;
			callback(currentTime);
		} else {
			setTimeout(function () { return polyfill$1(callback); }, 0);
		}
	}
})();

var index = window.requestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	polyfill$1;

function getGeometry(target, isContainer) {
	/**
	 * We want to ignore padding and scrollbars for container elements.
	 * More information here: https://goo.gl/vOZpbz
	 */
	var height = isContainer ? target.node.clientHeight : target.node.offsetHeight;
	var width = isContainer ? target.node.clientWidth : target.node.offsetWidth;

	var offsetTop = 0;
	var offsetLeft = 0;
	var node = target.node;

	do {
		if (!isNaN(node.offsetTop)) {
			offsetTop += node.offsetTop;
		}
		if (!isNaN(node.offsetLeft)) {
			offsetLeft += node.offsetLeft;
		}
		node = node.offsetParent;
	} while (node)

	return {
		bounds: {
			top: offsetTop,
			right: offsetLeft + width,
			bottom: offsetTop + height,
			left: offsetLeft
		},
		height: height,
		width: width
	}
}

function getScrolled(container) {
	var top, left;
	if (container.node === document.documentElement) {
		top = window.pageYOffset;
		left = window.pageXOffset;
	} else {
		top = container.node.scrollTop;
		left = container.node.scrollLeft;
	}
	return { top: top, left: left }
}

function isElementVisible(element) {
	if ( element === void 0 ) element = {};

	var container = this.store.containers[element.containerId];
	if (!container) { return }

	var viewFactor = Math.max(0, Math.min(1, element.config.viewFactor));
	var viewOffset = element.config.viewOffset;

	var elementBounds = {
		top: element.geometry.bounds.top + element.geometry.height * viewFactor,
		right: element.geometry.bounds.right - element.geometry.width * viewFactor,
		bottom: element.geometry.bounds.bottom - element.geometry.height * viewFactor,
		left: element.geometry.bounds.left + element.geometry.width * viewFactor
	};

	var containerBounds = {
		top: container.geometry.bounds.top + container.scroll.top + viewOffset.top,
		right: container.geometry.bounds.right + container.scroll.left - viewOffset.right,
		bottom:
			container.geometry.bounds.bottom + container.scroll.top - viewOffset.bottom,
		left: container.geometry.bounds.left + container.scroll.left + viewOffset.left
	};

	return (
		(elementBounds.top < containerBounds.bottom &&
			elementBounds.right > containerBounds.left &&
			elementBounds.bottom > containerBounds.top &&
			elementBounds.left < containerBounds.right) ||
		element.styles.position === 'fixed'
	)
}

function delegate(
	event,
	elements
) {
	var this$1 = this;
	if ( event === void 0 ) event = { type: 'init' };
	if ( elements === void 0 ) elements = this.store.elements;

	index(function () {
		var stale = event.type === 'init' || event.type === 'resize';

		each(this$1.store.containers, function (container) {
			if (stale) {
				container.geometry = getGeometry.call(this$1, container, true);
			}
			var scroll = getScrolled.call(this$1, container);
			if (container.scroll) {
				container.direction = {
					x: mathSign(scroll.left - container.scroll.left),
					y: mathSign(scroll.top - container.scroll.top)
				};
			}
			container.scroll = scroll;
		});

		/**
		 * Due to how the sequencer is implemented, it’s
		 * important that we update the state of all
		 * elements, before any animation logic is
		 * evaluated (in the second loop below).
		 */
		each(elements, function (element) {
			if (stale) {
				element.geometry = getGeometry.call(this$1, element);
			}
			element.visible = isElementVisible.call(this$1, element);
		});

		each(elements, function (element) {
			if (element.sequence) {
				sequence.call(this$1, element);
			} else {
				animate.call(this$1, element);
			}
		});

		this$1.pristine = false;
	});
}

function transformSupported() {
	var style = document.documentElement.style;
	return 'transform' in style || 'WebkitTransform' in style
}

function transitionSupported() {
	var style = document.documentElement.style;
	return 'transition' in style || 'WebkitTransition' in style
}

var version = "4.0.5";

var boundDelegate;
var boundDestroy;
var boundReveal;
var boundClean;
var boundSync;
var config;
var debug;
var instance;

function ScrollReveal(options) {
	if ( options === void 0 ) options = {};

	var invokedWithoutNew =
		typeof this === 'undefined' ||
		Object.getPrototypeOf(this) !== ScrollReveal.prototype;

	if (invokedWithoutNew) {
		return new ScrollReveal(options)
	}

	if (!ScrollReveal.isSupported()) {
		logger.call(this, 'Instantiation failed.', 'This browser is not supported.');
		return mount.failure()
	}

	var buffer;
	try {
		buffer = config
			? deepAssign({}, config, options)
			: deepAssign({}, defaults, options);
	} catch (e) {
		logger.call(this, 'Invalid configuration.', e.message);
		return mount.failure()
	}

	try {
		var container = tealight(buffer.container)[0];
		if (!container) {
			throw new Error('Invalid container.')
		}
	} catch (e) {
		logger.call(this, e.message);
		return mount.failure()
	}

	config = buffer;

	if ((!config.mobile && isMobile()) || (!config.desktop && !isMobile())) {
		logger.call(
			this,
			'This device is disabled.',
			("desktop: " + (config.desktop)),
			("mobile: " + (config.mobile))
		);
		return mount.failure()
	}

	mount.success();

	this.store = {
		containers: {},
		elements: {},
		history: [],
		sequences: {}
	};

	this.pristine = true;

	boundDelegate = boundDelegate || delegate.bind(this);
	boundDestroy = boundDestroy || destroy.bind(this);
	boundReveal = boundReveal || reveal.bind(this);
	boundClean = boundClean || clean.bind(this);
	boundSync = boundSync || sync.bind(this);

	Object.defineProperty(this, 'delegate', { get: function () { return boundDelegate; } });
	Object.defineProperty(this, 'destroy', { get: function () { return boundDestroy; } });
	Object.defineProperty(this, 'reveal', { get: function () { return boundReveal; } });
	Object.defineProperty(this, 'clean', { get: function () { return boundClean; } });
	Object.defineProperty(this, 'sync', { get: function () { return boundSync; } });

	Object.defineProperty(this, 'defaults', { get: function () { return config; } });
	Object.defineProperty(this, 'version', { get: function () { return version; } });
	Object.defineProperty(this, 'noop', { get: function () { return false; } });

	return instance ? instance : (instance = this)
}

ScrollReveal.isSupported = function () { return transformSupported() && transitionSupported(); };

Object.defineProperty(ScrollReveal, 'debug', {
	get: function () { return debug || false; },
	set: function (value) { return (debug = typeof value === 'boolean' ? value : debug); }
});

ScrollReveal();

return ScrollReveal;

})));
/*!
 * VERSION: 0.5.6
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * SplitText is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;!function(a){"use strict";var b=a.GreenSockGlobals||a,c=function(a){var c,d=a.split("."),e=b;for(c=0;c<d.length;c++)e[d[c]]=e=e[d[c]]||{};return e},d=c("com.greensock.utils"),e=function(a){var b=a.nodeType,c="";if(1===b||9===b||11===b){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===b||4===b)return a.nodeValue;return c},f=document,g=f.defaultView?f.defaultView.getComputedStyle:function(){},h=/([A-Z])/g,i=function(a,b,c,d){var e;return(c=c||g(a,null))?(a=c.getPropertyValue(b.replace(h,"-$1").toLowerCase()),e=a||c.length?a:c[b]):a.currentStyle&&(c=a.currentStyle,e=c[b]),d?e:parseInt(e,10)||0},j=function(a){return a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},k=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],j(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else e.push(c);return e},l=/(?:\r|\n|\t\t)/g,m=/(?:\s\s+)/g,n=55296,o=56319,p=56320,q=127462,r=127487,s=127995,t=127999,u=function(a){return(a.charCodeAt(0)-n<<10)+(a.charCodeAt(1)-p)+65536},v=f.all&&!f.addEventListener,w=" style='position:relative;display:inline-block;"+(v?"*display:inline;*zoom:1;'":"'"),x=function(a,b){a=a||"";var c=-1!==a.indexOf("++"),d=1;return c&&(a=a.split("++").join("")),function(){return"<"+b+w+(a?" class='"+a+(c?d++:"")+"'>":">")}},y=d.SplitText=b.SplitText=function(a,b){if("string"==typeof a&&(a=y.selector(a)),!a)throw"cannot split a null element.";this.elements=j(a)?k(a):[a],this.chars=[],this.words=[],this.lines=[],this._originals=[],this.vars=b||{},this.split(b)},z=function(a,b,c){var d=a.nodeType;if(1===d||9===d||11===d)for(a=a.firstChild;a;a=a.nextSibling)z(a,b,c);else(3===d||4===d)&&(a.nodeValue=a.nodeValue.split(b).join(c))},A=function(a,b){for(var c=b.length;--c>-1;)a.push(b[c])},B=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},C=function(a,b,c){for(var d;a&&a!==b;){if(d=a._next||a.nextSibling)return d.textContent.charAt(0)===c;a=a.parentNode||a._parent}return!1},D=function(a){var b,c,d=B(a.childNodes),e=d.length;for(b=0;e>b;b++)c=d[b],c._isSplit?D(c):(b&&3===c.previousSibling.nodeType?c.previousSibling.nodeValue+=3===c.nodeType?c.nodeValue:c.firstChild.nodeValue:3!==c.nodeType&&a.insertBefore(c.firstChild,c),a.removeChild(c))},E=function(a,b,c,d,e,h,j){var k,l,m,n,o,p,q,r,s,t,u,v,w=g(a),x=i(a,"paddingLeft",w),y=-999,B=i(a,"borderBottomWidth",w)+i(a,"borderTopWidth",w),E=i(a,"borderLeftWidth",w)+i(a,"borderRightWidth",w),F=i(a,"paddingTop",w)+i(a,"paddingBottom",w),G=i(a,"paddingLeft",w)+i(a,"paddingRight",w),H=.2*i(a,"fontSize"),I=i(a,"textAlign",w,!0),J=[],K=[],L=[],M=b.wordDelimiter||" ",N=b.span?"span":"div",O=b.type||b.split||"chars,words,lines",P=e&&-1!==O.indexOf("lines")?[]:null,Q=-1!==O.indexOf("words"),R=-1!==O.indexOf("chars"),S="absolute"===b.position||b.absolute===!0,T=b.linesClass,U=-1!==(T||"").indexOf("++"),V=[];for(P&&1===a.children.length&&a.children[0]._isSplit&&(a=a.children[0]),U&&(T=T.split("++").join("")),l=a.getElementsByTagName("*"),m=l.length,o=[],k=0;m>k;k++)o[k]=l[k];if(P||S)for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,(p||S||R&&!Q)&&(v=n.offsetTop,P&&p&&Math.abs(v-y)>H&&"BR"!==n.nodeName&&(q=[],P.push(q),y=v),S&&(n._x=n.offsetLeft,n._y=v,n._w=n.offsetWidth,n._h=n.offsetHeight),P&&((n._isSplit&&p||!R&&p||Q&&p||!Q&&n.parentNode.parentNode===a&&!n.parentNode._isSplit)&&(q.push(n),n._x-=x,C(n,a,M)&&(n._wordEnd=!0)),"BR"===n.nodeName&&n.nextSibling&&"BR"===n.nextSibling.nodeName&&P.push([])));for(k=0;m>k;k++)n=o[k],p=n.parentNode===a,"BR"!==n.nodeName?(S&&(s=n.style,Q||p||(n._x+=n.parentNode._x,n._y+=n.parentNode._y),s.left=n._x+"px",s.top=n._y+"px",s.position="absolute",s.display="block",s.width=n._w+1+"px",s.height=n._h+"px"),!Q&&R?n._isSplit?(n._next=n.nextSibling,n.parentNode.appendChild(n)):n.parentNode._isSplit?(n._parent=n.parentNode,!n.previousSibling&&n.firstChild&&(n.firstChild._isFirst=!0),n.nextSibling&&" "===n.nextSibling.textContent&&!n.nextSibling.nextSibling&&V.push(n.nextSibling),n._next=n.nextSibling&&n.nextSibling._isFirst?null:n.nextSibling,n.parentNode.removeChild(n),o.splice(k--,1),m--):p||(v=!n.nextSibling&&C(n.parentNode,a,M),n.parentNode._parent&&n.parentNode._parent.appendChild(n),v&&n.parentNode.appendChild(f.createTextNode(" ")),b.span&&(n.style.display="inline"),J.push(n)):n.parentNode._isSplit&&!n._isSplit&&""!==n.innerHTML?K.push(n):R&&!n._isSplit&&(b.span&&(n.style.display="inline"),J.push(n))):P||S?(n.parentNode&&n.parentNode.removeChild(n),o.splice(k--,1),m--):Q||a.appendChild(n);for(k=V.length;--k>-1;)V[k].parentNode.removeChild(V[k]);if(P){for(S&&(t=f.createElement(N),a.appendChild(t),u=t.offsetWidth+"px",v=t.offsetParent===a?0:a.offsetLeft,a.removeChild(t)),s=a.style.cssText,a.style.cssText="display:none;";a.firstChild;)a.removeChild(a.firstChild);for(r=" "===M&&(!S||!Q&&!R),k=0;k<P.length;k++){for(q=P[k],t=f.createElement(N),t.style.cssText="display:block;text-align:"+I+";position:"+(S?"absolute;":"relative;"),T&&(t.className=T+(U?k+1:"")),L.push(t),m=q.length,l=0;m>l;l++)"BR"!==q[l].nodeName&&(n=q[l],t.appendChild(n),r&&n._wordEnd&&t.appendChild(f.createTextNode(" ")),S&&(0===l&&(t.style.top=n._y+"px",t.style.left=x+v+"px"),n.style.top="0px",v&&(n.style.left=n._x-v+"px")));0===m?t.innerHTML="&nbsp;":Q||R||(D(t),z(t,String.fromCharCode(160)," ")),S&&(t.style.width=u,t.style.height=n._h+"px"),a.appendChild(t)}a.style.cssText=s}S&&(j>a.clientHeight&&(a.style.height=j-F+"px",a.clientHeight<j&&(a.style.height=j+B+"px")),h>a.clientWidth&&(a.style.width=h-G+"px",a.clientWidth<h&&(a.style.width=h+E+"px"))),A(c,J),A(d,K),A(e,L)},F=function(a,b,c,d){var g,h,i,j,k,p,v,w,x,y=b.span?"span":"div",A=b.type||b.split||"chars,words,lines",B=(-1!==A.indexOf("words"),-1!==A.indexOf("chars")),C="absolute"===b.position||b.absolute===!0,D=b.wordDelimiter||" ",E=" "!==D?"":C?"&#173; ":" ",F=b.span?"</span>":"</div>",G=!0,H=f.createElement("div"),I=a.parentNode;for(I.insertBefore(H,a),H.textContent=a.nodeValue,I.removeChild(a),a=H,g=e(a),v=-1!==g.indexOf("<"),b.reduceWhiteSpace!==!1&&(g=g.replace(m," ").replace(l,"")),v&&(g=g.split("<").join("{{LT}}")),k=g.length,h=(" "===g.charAt(0)?E:"")+c(),i=0;k>i;i++)if(p=g.charAt(i),p===D&&g.charAt(i-1)!==D&&i){for(h+=G?F:"",G=!1;g.charAt(i+1)===D;)h+=E,i++;i===k-1?h+=E:")"!==g.charAt(i+1)&&(h+=E+c(),G=!0)}else"{"===p&&"{{LT}}"===g.substr(i,6)?(h+=B?d()+"{{LT}}</"+y+">":"{{LT}}",i+=5):p.charCodeAt(0)>=n&&p.charCodeAt(0)<=o||g.charCodeAt(i+1)>=65024&&g.charCodeAt(i+1)<=65039?(w=u(g.substr(i,2)),x=u(g.substr(i+2,2)),j=w>=q&&r>=w&&x>=q&&r>=x||x>=s&&t>=x?4:2,h+=B&&" "!==p?d()+g.substr(i,j)+"</"+y+">":g.substr(i,j),i+=j-1):h+=B&&" "!==p?d()+p+"</"+y+">":p;a.outerHTML=h+(G?F:""),v&&z(I,"{{LT}}","<")},G=function(a,b,c,d){var e,f,g=B(a.childNodes),h=g.length,j="absolute"===b.position||b.absolute===!0;if(3!==a.nodeType||h>1){for(b.absolute=!1,e=0;h>e;e++)f=g[e],(3!==f.nodeType||/\S+/.test(f.nodeValue))&&(j&&3!==f.nodeType&&"inline"===i(f,"display",null,!0)&&(f.style.display="inline-block",f.style.position="relative"),f._isSplit=!0,G(f,b,c,d));return b.absolute=j,void(a._isSplit=!0)}F(a,b,c,d)},H=y.prototype;H.split=function(a){this.isSplit&&this.revert(),this.vars=a=a||this.vars,this._originals.length=this.chars.length=this.words.length=this.lines.length=0;for(var b,c,d,e=this.elements.length,f=a.span?"span":"div",g=("absolute"===a.position||a.absolute===!0,x(a.wordsClass,f)),h=x(a.charsClass,f);--e>-1;)d=this.elements[e],this._originals[e]=d.innerHTML,b=d.clientHeight,c=d.clientWidth,G(d,a,g,h),E(d,a,this.chars,this.words,this.lines,c,b);return this.chars.reverse(),this.words.reverse(),this.lines.reverse(),this.isSplit=!0,this},H.revert=function(){if(!this._originals)throw"revert() call wasn't scoped properly.";for(var a=this._originals.length;--a>-1;)this.elements[a].innerHTML=this._originals[a];return this.chars=[],this.words=[],this.lines=[],this.isSplit=!1,this},y.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(y.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)},y.version="0.5.6"}(_gsScope),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define([],b):"undefined"!=typeof module&&module.exports&&(module.exports=b())}("SplitText");
//
// global
var Global = (function() {

    var body = $('body');

    function pageLoad() {

        var globalLoader = $('#global-loader');
        var mods = $('.title');
        var pageDur = 1200;
        var introDur = 700;

        $(window).load(function() {
            TweenMax.to(globalLoader, pageDur * 0.001, {
                opacity: '0',
                delay: .1,
                ease: Power4.easeOut
            });

            TweenMax.staggerFrom(mods, pageDur * 0.001, {
                y: '+= 100',
                ease: Power4.easeOut
            }, .1);

            TweenMax.set(globalLoader, {
                pointerEvents: 'none',
            });

        });

        var width = 100,
            duration,
            perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100;


        // Percentage Increment Animation
        var PercentageID = $('#percent'),
            start = 0,
            end = 100,
            durataion = time;
        animateValue(PercentageID, start, end, durataion);

        function animateValue(id, start, end, duration) {

            var range = end - start,
                current = start,
                increment = end > start ? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);

            var timer = setInterval(function() {
                current += increment;
                $(obj).text(current + "%");
                //obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);


            console.log(duration);
            animateIntroHeadline(duration);
        }
    }

    function animateIntroHeadline(duration) {

        // animating text
        var workTitle = $('section.work');
        var headline = $('.gist h2');
        var percent = $('#percent');
        var introDur = 700;
        var offset = .4;
        var timeOutOffset = parseInt(duration + (offset * 2000) + (introDur * 2));

        // splitting text

        var splitTextOne = new SplitText($('.gist p'), {
            type: 'words'
        });
        var mySplitText = new SplitText(headline, {
            type: 'lines'
        });


        TweenLite.from(workTitle, (introDur / 1000), {
            opacity: 0,
            y: 100,
            rotationX: -40,
            rotationZ: 20,
            delay: (duration / 1000) + (offset * 2) + (introDur / 1000),
            transformOrigin: '0% 100% -60',
            ease: Expo.easeOut
        });

        TweenLite.to(percent, (introDur / 1000), {
            opacity: 0,
            y: -100,
            delay: (duration / 1000) + (offset * 2),
            ease: Expo.easeOut
        });


        TweenMax.staggerFrom(splitTextOne.words, (introDur / 1000), {
            opacity: 0,
            y: 30,
            delay: (duration / 1000) + (offset * 3) + (introDur / 1000),
            ease: Power4.easeOut
        }, 0.02);


        splitTextTimeline = new TimelineLite();

        splitTextTimeline.staggerFrom(mySplitText.lines, (introDur / 1000), {
            opacity: 0,
            y: 300,
            rotationX: -40,
            rotationZ: 20,
            delay: (duration / 1000) + (offset * 2) + (introDur / 1000),
            transformOrigin: '0% 100% -60',
            ease: Expo.easeOut
        }, 0.01, allDone());

        // running after function
        function allDone() {
            setTimeout(function() {
                mySplitText.revert();
                afterIntro();
            }, timeOutOffset);
        }
    }

    function afterIntro() {
        bodyMovin();
        positionProxy();
        emailHover();
        reposition();

        var brands = $('.brands-proxy');
        var skills = $('#skills');
        var brandsArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];
        var skillsArry = ['Visual Design.', 'UX.', 'Motion Design.', 'Prototyping.', 'Front-End Dev.', 'Photography.', 'Illustrations.', '3D Modeling.'];
        var i = 0;
        var j = 0;
        var brandInterval;
        var skillInterval;
        var dur = 220;

        brands.hover(function() {
            brandInterval = setInterval(loopBrandText, dur);
            $('body').addClass('_inverse');

        }, function() {
            clearInterval(brandInterval);
            $('#brands').text('brands');
            $('body').removeClass('_inverse');

        });


        skills.hover(function() {

            skillInterval = setInterval(loopSkillText, dur);
            $('body').addClass('_inverse');

        }, function() {
            clearInterval(skillInterval);
            $(this).text('skillsets.');
            $('body').removeClass('_inverse');

        });

        function loopBrandText(obj) {
            i = i == brandsArry.length ? 0 : i;
            $('#brands').html(brandsArry[i] + '<span class="brands-proxy"></span>');
            i++;
        };

        function loopSkillText(obj) {
            j = j == skillsArry.length ? 0 : j;
            skills.text('skillsets like ' + skillsArry[j]);
            j++;
        };


        function bodyMovin() {
            var anim = lottie.loadAnimation({
                container: document.getElementById('arrow-out'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                speed: .5,
                path: 'assets/lottie/arrow-out.json'
            });


            $('.gist h2 a').hover(function() {

                anim.play();


            }, function() {
                anim.goToAndStop(0, true);

            });
        };

        function positionProxy() {
            var brandProxy = $('.brands-proxy');
            var brands = $('#brands');

            brandProxy.css({
                width: brands.width(),
                height: brands.height(),
                top: brands.offset().top,
                left: brands.offset().left - $('.gist').offset().left
            });
        };

        function emailHover() {
            var $email = $('#email'),
                emailSplitText = new SplitText($email, {
                    type: 'chars'
                }),
                emailTlIn = new TimelineLite();
            emailTlOut = new TimelineLite();


            emailTlIn.staggerTo(emailSplitText.chars, 0.01, {
                    color: 'black',
                    ease: Expo.easeOut
                }, 0)
                .staggerTo(emailSplitText.chars, 0.5, {
                    color: 'red',
                    ease: Expo.easeOut
                }, 0.01)
                .staggerTo(emailSplitText.chars, 0.1, {
                    color: 'white',
                    ease: Expo.easeOut
                }, 0.01, '-=0.3');

            emailTlOut.staggerTo(emailSplitText.chars, 0.5, {
                color: 'black',
                ease: Expo.easeOut
            }, 0.01);

            emailTlIn.stop();
            emailTlOut.stop();

            $('.gist p').on('mouseenter', function() {
                emailTlIn.restart().play();
            });

            $('.gist p').on('mouseleave', function() {
                emailTlOut.play().restart();
            });
        };

        function reposition() {
            var gist = $('.gist');
            var work = $('section.work');
            gist.addClass('_loaded');
            work.css('padding-top', 160 + gist.outerHeight() + 'px');
        }
    }

    function reveal() {
        // Changing the defaults
        window.sr = ScrollReveal({
            reset: false
        });

        // Customizing a reveal set
        sr.reveal('li, section.section-title', {
            duration: 650,
            scale: .8
        });
    }

    return {
        pageLoad: pageLoad,
        reveal: reveal
    }
})();
//
// global
var Global = (function() {
    var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
    // return true or false

    var $body = $('body');
    var $nav = $('nav');
    var $emailWrap = $('.email-me-wrapper');
    var $workList = $('section.work-list');
    var sPath = window.location.pathname;

    // disable zoom on phones
    document.addEventListener('touchmove', function(event) {
        event = event.originalEvent || event;
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, false);

    function pageLoad() {


        // site loading
        var width = 100,
            duration,
            perfData = window.performance.timing, // The PerformanceTiming interface represents timing-related performance information for the given page.
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100;


        // Percentage Increment Animation
        if (sPath.indexOf('projects') <= -1) {
            $body.addClass('_loaded');
            $('.content-container.home').addClass('_loaded');
            animateIntroHeadline(100);
        }
        $body.addClass('_loaded');
        $('.content-container.home').addClass('_loaded');

        function animateValue(id, start, end, duration) {

            var range = end - start,
                current = start,
                increment = end > start ? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);

            var timer = setInterval(function() {
                current += increment;
                $(obj).text(current + "%");
                //obj.innerHTML = current;
                if (current == end) {
                    clearInterval(timer);
                }
            }, stepTime);


            //////////////////
            // loader
            //////////////////

            if (sessionStorage.getItem('beenHere')) {
                animateIntroHeadline(100);
            } else {
                animateIntroHeadline(duration);
            }

        }
    }

    function fastClick() {
        FastClick.attach(document.body);
    }

    function animateIntroHeadline(duration) {

        function removeLoader() {
            var $globalLoader = $('#global-loader');
            var $percent = $('#percent');
            var pageDur = 1200;
            var introDur = 700;

            TweenMax.to($globalLoader, .6, {
                height: 3,
                delay: (duration * 0.001) + 0.4,
                ease: Power4.easeOut
            });

            TweenMax.to($percent, .6, {
                y: 100,
                delay: (duration * 0.001) + 0.4,
                ease: Power4.easeOut
            });
        }



        // sessionStorage.setItem('beenHere', 'yes');


        // animating text
        // var workTitle = $('section.work');
        var headline = $('.intro h2');
        var introDur = 700;
        var offset = .1;
        var timeOutOffset = parseInt(duration + (offset * 2000) + (introDur * 2));


        // splitting text

        var mySplitText = new SplitText(headline, {
            type: 'words'
        });



        splitTextTimeline = new TimelineLite();

        splitTextTimeline.staggerFrom(mySplitText.words, (introDur / 1000), {
            opacity: 0,
            y: 300,
            rotationX: -40,
            rotationZ: 20,
            delay: (duration / 1000) + (offset * 2) + (introDur / 1000),
            transformOrigin: '0% 100% -60',
            ease: Power4.easeOut
        }, 0.01)

        .from($workList, .8, {
            opacity: 0,
            y: 40,
            ease: Power4.easeOut
        })

        .from($emailWrap, .8, {
            opacity: 0,
            y: 40,
            ease: Power4.easeOut
        }, '-=0.8', allDone());

        // running after function
        function allDone() {
            setTimeout(function() {
                mySplitText.revert();
                afterIntro();
            }, timeOutOffset);
        }
    }

    function afterIntro() {
        homeLoaded();
        bodyMovin();
        positionProxy();
        linkReady();

        var brands = $('.brands-proxy');
        var skills = $('.skills-proxy');
        var brandsArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];
        var skillsArry = ['Visual Design.', 'UX.', 'Motion Design.', 'Prototyping.', 'Front-End Dev.', 'Photography.', 'Illustrations.', '3D Modeling.'];
        var i = 0;
        var j = 0;
        var brandInterval;
        var skillInterval;
        var dur = 230;


        if (iOS) {

            // is iOS


            // remove out icon on iOS
            $('#arrow-out').css('display', 'none');

            // brands
            brands.on('touchstart', function() {
                brandInterval = setInterval(loopBrandText, dur);
                $body.addClass('_inverse');
            });

            brands.on('touchend', function() {
                clearInterval(brandInterval);
                $('.brands').text('brands');
                $body.removeClass('_inverse');
            });

            // skills

            skills.on('touchstart', function() {

                skillInterval = setInterval(loopSkillText, dur);
                $body.addClass('_inverse');
            });

            skills.on('touchend', function() {
                clearInterval(skillInterval);
                $('.skills').text('diverse skillset.');
                $body.removeClass('_inverse');
            });

        } else {

            // not iOS //
            // brands
            brands.hover(function() {
                brandInterval = setInterval(loopBrandText, dur);
                $body.addClass('_inverse');

            }, function() {
                clearInterval(brandInterval);
                $('.brands').text('brands');
                $body.removeClass('_inverse');
            });

            // skills
            skills.hover(function() {

                skillInterval = setInterval(loopSkillText, dur);
                $body.addClass('_inverse');

            }, function() {
                clearInterval(skillInterval);
                $('.skills').text('broad skillsets.');
                $body.removeClass('_inverse');

            });
        }


        function loopBrandText(obj) {
            i = i == brandsArry.length ? 0 : i;
            $('.brands').html(brandsArry[i] + '<span class="brands-proxy"></span>');
            i++;
        };

        function loopSkillText(obj) {
            j = j == skillsArry.length ? 0 : j;
            $('.skills').html(skillsArry[j] + '<span class="skills-proxy"></span>');
            j++;
        };

        ////////////////////////////////////////////////////////////////////////////////////
        function bodyMovin() {
            var animOne = lottie.loadAnimation({
                container: document.getElementById('arrow-out'),
                renderer: 'svg',
                loop: false,
                autoplay: false,
                speed: .5,
                path: 'assets/animation/shared/arrow-out.json'
            });




            $('.ele-url').hover(function() {

                animOne.play();

            }, function() {
                animOne.goToAndStop(0, true);

            });

        };
        ////////////////////////////////////////////////////////////////////////////////////
        function positionProxy() {
            var sPath = window.location.pathname;


            var brandProxy;
            var brands;
            var skillProxy;
            var skills;
            var intro;

            intro = $('.intro');

            brandProxy = $('.brands-proxy');
            brands = $('.brands');

            skillProxy = $('.skills-proxy');
            skills = $('.skills');

            posUpdate();

            // $(window).on('resize', $.debounce(150, true, posUpdate));

            $(window).on('resize', posUpdate);

            function posUpdate() {
                brandProxy.css({
                    width: brands.width(),
                    height: brands.height(),
                    top: brands.offset().top,
                    left: brands.offset().left - intro.offset().left
                });

                skillProxy.css({
                    width: skills.width(),
                    height: skills.height(),
                    top: skills.offset().top,
                    left: skills.offset().left - intro.offset().left
                });
            }
        };

        function linkReady() {
            var $eleURL = $('.ele-url')
            $eleURL.addClass('_ready');
            $('.content-container.home').addClass('_fully-loaded');
        };
    }

    function homeLoaded() {
        $('.content-container.home').addClass('_loaded');
    }

    function reveal() {
        // Changing the defaults
        window.sr = ScrollReveal({
            reset: false
        });
        sr.reveal('.masonry-layout__panel__wrap', {
            duration: 650
        });
    }

    function isOnDetail() {
        var $projectSummary = $('.project-summary');
        var $allDots = $('.detail-dot-wrapper a');
        var $dotMarcus = $('.dot-marcus');
        var $dotTeva = $('.dot-teva');
        var $dotFandango = $('.dot-fandango');
        var $dotPast = $('.dot-past');
        var $dotAlmost = $('.dot-almost');

        $body.addClass('_is-on-detail');
        sPath = window.location.pathname;


        //////////////////////////////
        // run globally
        //////////////////////////////

        projectHeader();
        sectionReveal();
        headlineAnimation();
        heroLoaded();
        // heroScroll();

        //////////////////////////////
        // run on specific project
        //////////////////////////////


        // on project one
        if (sPath.indexOf('marcus') > -1) {
            $allDots.removeClass('_active');
            $dotMarcus.addClass('_active');

            // marcusAnimation();

            $('.carousel-container').flickity({
                // options
                watchCSS: true,
                prevNextButtons: false
            });
        }

        // on project teva
        if (sPath.indexOf('teva') > -1) {
            $allDots.removeClass('_active');
            $dotTeva.addClass('_active');

            $('.carousel-container').flickity({
                // options
                watchCSS: true,
                prevNextButtons: false
            });
        }

            // on project fandango
        if (sPath.indexOf('fandango') > -1) {
            $allDots.removeClass('_active');
            $dotFandango.addClass('_active');

            $('.carousel-container').flickity({
                // options
                watchCSS: true,
                prevNextButtons: false
            });

            // fandangoQuotes();
        }

        // on past
        if (sPath.indexOf('past') > -1) {
            $allDots.removeClass('_active');
            $dotPast.addClass('_active');
            imgLoaded();
        }

        //         // on almost
        // if (sPath.indexOf('almost') > -1) {
        //     $allDots.removeClass('_active');
        //     $dotAlmost.addClass('_active');
        //     imgLoaded();
        // }

        function projectHeader() {
            $('header').headroom();
        }

        function imgLoaded() {

            var $container = $('#gallery-wrapper');
            // use ImagesLoaded
            $container.imagesLoaded().progress(onProgress);
            // reset progress counter
            imageCount = $container.find('img').length;

            // triggered after each item is loaded
            function onProgress(imgLoad, image) {
                // change class if the image is loaded or broken
                var $item = $(image.img).parent().parent();
                $item.removeClass('is-loading');
                if (!image.isLoaded) {
                    $item.addClass('is-broken');
                }
            }
        }

        function heroLoaded() {
            // var $hero = $('.hero-content-wrapper');
            var $projectContent = $('.detail-content');

            // var heroHeight = $hero.height();
            // var paddingTop  = $(window).height() - $hero.height();

            $projectContent.addClass('_loaded');
            // TweenMax.set($hero, {
            //     height: '100vh'
            // });

            // TweenMax.to($hero, .6, {
            //     height: heroHeight,
            //     delay: 1,
            //     ease: Power4.easeOut
            // });
        }

        function heroScroll() {
            var current;
            var triggerPoint;
            var stickTop;
            var heroOpacity;
            var ratio = 550;

            var $projectContent = $('.detail-content');
            var $hero = $('.hero-content-wrapper');


            getTriggerPoint();
            getHeroHeight();
            updateHeroHeight();
            // $(window).on('scroll', onScroll);
            $(window).on('resize', $.debounce(150, true, onResize));


            function onResize() {
                getTriggerPoint();
                getHeroHeight();
                updateHeroHeight();
            }

            function getHeroHeight() {
                return $hero.height();
            }

            function getTriggerPoint() {
                return $hero.height() - $(window).height();
            }

            function onScroll() {
                requestAnimationFrame(scrollUpdates);
            }

            function updateHeroHeight() {

                $projectContent.css('padding-top', getHeroHeight() + 'px');
            }

            function getScrollPos() {
                return $(window).scrollTop();
            }

            function scrollUpdates() {
                current = getScrollPos();
                triggerPoint = getTriggerPoint();
                stickTop = $(window).height() - getHeroHeight();
                heroOpacity = (current - triggerPoint) / ratio;

                if (current >= triggerPoint) {
                    $hero.addClass('_is-sticky');
                    $hero.css('top', stickTop + 'px');
                    $hero.find('.hero-col').css('opacity', 1 - heroOpacity);
                } else {
                    $hero.removeClass('_is-sticky');
                    $hero.css('top', 'auto');
                }
            }
        }

        function headlineAnimation() {

            var $projectHeadline = $('.hero-col h1');
            var GSDur = .8;

            // create timeline
            var oneTL = new TimelineLite();

            // split the text
            var projectSplitText = new SplitText($projectHeadline, {
                type: 'words'
            });


            oneTL.staggerFrom(projectSplitText.words, GSDur, {
                opacity: 0,
                y: 300,
                rotationX: -40,
                rotationZ: 20,
                transformOrigin: '0% 100% -60',
                ease: Power4.easeOut
            }, 0.01)

            .to($('.hero-col'), GSDur, {
                y: 0,
                opacity: 1,
                ease: Power4.easeOut
            }, .1);

        }

        function fandangoQuotes() {
            var i = 0;
            var quoteInterval;
            var questionInterval;
            var creditInterval;
            var dur = 500;
            var fandangoQuestionArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];
            var fandangoQuoteArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Unless I know exactly what movie I want to see, this app isn’t too useful'];
            var fandangoCreditArry = ['Apple', 'Teva', 'Chase', 'Comcast', 'Fast Company', 'ExxonMobil', 'NYU Langone', 'Marcus'];

            // questionInterval = setInterval(loopFandangoQuestion, dur);
            quoteInterval = setInterval(loopFandangoQuote, dur);
            // creditInterval = setInterval(loopFandangoCredit, dur);

            function loopFandangoQuote(obj) {

                if ( i == fandangoQuoteArry.length) {
                    i = 0;

                } else {
                    $('h2.quote-title').html(fandangoQuoteArry[i]);
                    i++;

                }
                console.log(fandangoQuoteArry.length);
                console.log(i);
            };
        }

        function sectionReveal() {

            console.log('ran');
            // Changing the defaults
            window.psr = ScrollReveal({
                reset: false
            });

            // Customizing a reveal set
            psr.reveal('.detail-content div.container', {
                duration: 650,
                distance: '200px',
                viewFactor: 0.05,
                opacity: 1,
                easing: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
                scale: 1
            });
        }

        function marcusAnimation() {
            var animOne = lottie.loadAnimation({
                container: document.getElementById('backpack-wire'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                speed: .5,
                path: '/assets/animation/one/backpack-wire.json'
            });

            var animTwo = lottie.loadAnimation({
                container: document.getElementById('input'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                speed: .5,
                path: '/assets/animation/one/input.json'
            });

            var animThree = lottie.loadAnimation({
                container: document.getElementById('input-mobile'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                speed: .5,
                path: '/assets/animation/one/input-mobile.json'
            });
        }

    }

    return {
        pageLoad: pageLoad,
        reveal: reveal,
        isOnDetail: isOnDetail,
        afterIntro: afterIntro,
        fastClick: fastClick
    }
})();
//////////////////////////////////////////////////////////////////////////////////////////
// Init function PushState
//////////////////////////////////////////////////////////////////////////////////////////

var call = {

    firstInit: function() {
        // run everywhere
        // Global.pageLoad();
        Global.reveal();
        // Global.fastClick();

    },
    init: function() {
        // getting location path
        var sPath = window.location.pathname;

        // run on specific page
        if (sPath.indexOf('projects') > -1) {
            Global.isOnDetail();
        }




    }
}

// call this when the page first load when page load
call.firstInit();
call.init();

//////////////////////////////////////////////////////////////////////////////////////////
// History PushState
//////////////////////////////////////////////////////////////////////////////////////////

// // set up barba
// document.addEventListener("DOMContentLoaded", function() {

//     // assign some variables
//     var lastElementClicked;
//     var isAnimating = false;
//     var $body = document.querySelector('body');
//     var $html = document.querySelector('html');
//     var $outerWrap = document.querySelector('.outer-wrapper');
//     var sPath;
//     var qEase = Power3.easeOut;

//     var winWidth = $(window).width();

//     $(window).on('resize', function() {
//         winWidth = $(window).width();
//     });

//     var faster = 0.05;
//     var fast = 0.5;
//     var slow = 0.7;
//     var offsetSlow = '-=0.7';
//     var slower = 1;

//     // options
//     Barba.Pjax.Dom.wrapperId = 'content-wrapper';
//     Barba.Pjax.Dom.containerClass = 'content-container';

//     // ---------------- //
//     // VIEWS
//     // ---------------- //
//     var homeView = Barba.BaseView.extend({
//         namespace: 'home',
//         onLeave: function() {
//             // $body.style.overflow = 'hidden';
//         },
//         onLeaveCompleted: function() {
//             // $body.style.overflow = 'initial';
//             call.onDetail();
//         }
//     });

//     var detailView = Barba.BaseView.extend({
//         namespace: 'detail',
//         onEnterCompleted: function() {
//             // The Transition has just finished
//             // can now use functions/events specifically for this page

//             // -- vars
//             var scrollBtn = document.querySelector('.scrolldown');

//             // -- events

//             // call the start function below when we load this page
//             this.start();
//         },
//         onLeave: function() {
//             // A new Transition toward a new page has just started.
//             $body.classList.remove('loaded');
//             $body.classList.remove('_is-on-detail');
//             // $html.style.overflow = 'hidden';
//         },
//         onLeaveCompleted: function() {
//             // $html.style.overflow = 'initial';

//             // call homepage functions on returning home (hover, bodymoving etc;)

//             // run on specific page

//             // get current location
//             sPath = window.location.pathname;

//             if (sPath.indexOf('projects') > -1) {
//                 call.onDetail();

//             } else {
//                 call.backtoHome();



//                 if (typeof(Storage) !== 'undefined') {
//                     // See if there is a scroll pos and go there.
//                     var lastYPos = +localStorage.getItem('scrollYPos');
//                     if (lastYPos) {

//                         window.scrollTo(0, lastYPos);

//                         // fade container home container back in
//                         // setTimeout(function(){
//                         $('.content-container.home').addClass('_loaded');
//                         // }, 3000);


//                     }
//                 }
//             }


//         },
//         start: function() {
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     $body.classList.add('loaded');
//                     isAnimating = false;
//                 }
//             });
//         }
//     });

//     // Don't forget to init the view!
//     homeView.init();
//     detailView.init();
//     Barba.Pjax.init();
//     Barba.Prefetch.init();

//     // listen to the event on click
//     // can now reference lastElementClicked to scroll to where it's been clicked
//     Barba.Dispatcher.on('linkClicked', function(el) {
//         lastElementClicked = el;
//     });

//     // -------------------- //
//     // TRANSITION FUNCTIONS
//     // -------------------- //
//     var revealProject = Barba.BaseTransition.extend({
//         start: function() {
//             isAnimating = true;

//             // set up functions asynchronously
//             Promise
//                 .all([this.newContainerLoading, this.scrollToProject()])
//                 .then(this.showNewPage.bind(this));
//         },

//         // first transition function
//         scrollToProject: function() {
//             var project = $(lastElementClicked).parents('.project');
//             var deferred = Barba.Utils.deferred();


//             deferred.resolve();
//             if (typeof(Storage) !== 'undefined') {
//                 // See if there is a scroll pos and go there.
//                 var lastYPos = +localStorage.getItem('scrollYPos');

//                 localStorage.setItem('scrollYPos', window.scrollY);
//             }

//             return deferred.promise;
//         },

//         // transition to new page / object
//         showNewPage: function() {

//             // FIX
//             // $outerWrap.classList.add('_work-list-is-active');

//             // assign objects that are transitioning
//             var _this = this;
//             // var newImage = _this.newContainer.querySelector('img');
//             // var scrollArrow = _this.newContainer.querySelector('.scrolldown');
//             var newText = _this.newContainer.querySelector('summary');
//             // var newTextLink = _this.newContainer.querySelector('.link');

//             // reset and create a new timeline
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     _this.newContainer.style.position = 'static';
//                     _this.done();

//                     // once timeline is finished, reset window to top
//                     // to avoid jumping
//                     window.scroll(0, 0);
//                     isAnimating = false;
//                 }
//             });

//             // preset transitional objects
//             TweenLite.set(_this.newContainer, {
//                 position: 'fixed',
//                 visibility: 'visible',
//                 x: $(window).width(),
//                 left: 0,
//                 right: 0,
//                 bottom: 0,
//                 top: 0,
//                 opacity: 1,
//                 zIndex: 20
//             });

//             // start transitions
//             tl.to(_this.oldContainer, slower, {
//                 x: -0.5 * winWidth,
//                 opacity: 0,
//                 ease: qEase
//             })

//             .to(window, faster, {
//                 scrollTo: {
//                     y: 0,
//                     autoKill: false,
//                     ease: qEase
//                 }
//             });

//             tl.to(_this.newContainer, slower, {
//                 x: 0,
//                 ease: qEase
//             }, offsetSlow)

//             .set(_this.newContainer, {
//                 clearProps: 'all'
//             });
//         }
//     });

//     var closeProject = Barba.BaseTransition.extend({
//         start: function() {
//             isAnimating = true;
//             sPath = window.location.pathname;
//             // console.log('close project sPath is ' + sPath);

//             if (sPath.indexOf('projects') > -1) {


//                 Promise
//                 // Promise Async, do this, then this before load --- our animation
//                 // functions in the .all will run first
//                     .all([this.newContainerLoading])
//                     .then(this.hideNewPagetoDetail.bind(this));
//             } else {


//                 Promise
//                 // Promise Async, do this, then this before load --- our animation
//                 // functions in the .all will run first
//                     .all([this.newContainerLoading])
//                     .then(this.hideNewPagetoHome.bind(this));

//             }

//         },
//         scrollTop: function() {
//             var deferred = Barba.Utils.deferred();
//             var obj = {
//                 y: window.pageYOffset
//             };

//             TweenLite.to(obj, slow, {
//                 y: 0,
//                 ease: qEase,
//                 onUpdate: function() {
//                     if (obj.y === 0) {
//                         deferred.resolve();
//                     }
//                     window.scroll(0, obj.y);
//                 },
//                 onComplete: function() {
//                     deferred.resolve();
//                 }
//             });

//             return deferred.promise;
//         },

//         // transition out new page / object
//         hideNewPagetoHome: function() {

//             // assign objects that are transitioning
//             var _this = this;

//             // reset and create a new timeline
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     _this.newContainer.style.position = 'static';
//                     _this.done();
//                     isAnimating = false;
//                 }
//             });


//             // start transitions
//             tl.to(_this.oldContainer, slower, {
//                 x: winWidth,
//                 ease: qEase
//             });

//         },

//         // transition out new page / object
//         hideNewPagetoDetail: function() {


//             // assign objects that are transitioning
//             var _this = this;
//             var oldText = _this.oldContainer.querySelector('summary');


//             // var oldscrollArrow = _this.oldContainer.querySelector('.scrolldown');
//             // var oldImage = _this.oldContainer.querySelector('img');
//             // var oldTextLink = _this.oldContainer.querySelector('.link');

//             // reset and create a new timeline
//             var tl = new TimelineMax({
//                 onComplete: function() {
//                     _this.newContainer.style.position = 'static';
//                     _this.done();
//                     isAnimating = false;
//                 }
//             });


//             // preset transitional objects
//             TweenLite.set(_this.newContainer, {
//                 position: 'fixed',
//                 visibility: 'visible',
//                 top: 0,
//                 x: winWidth,
//                 right: 0,
//                 bottom: 0,
//                 left: 0,
//                 zIndex: 21
//             });

//             // start transitions
//             tl.to(_this.oldContainer, slow, {
//                     x: winWidth * -0.5,
//                     opacity: 0,
//                     ease: qEase
//                 })
//                 .to(window, slow, {
//                     scrollTo: {
//                         y: 0,
//                         autoKill: false,
//                         ease: qEase
//                     }
//                 }, offsetSlow);

//             tl.to(_this.newContainer, slower, {
//                     x: 0,
//                     opacity: 1,
//                     ease: qEase
//                 }, offsetSlow)
//                 .set(_this.newContainer, {
//                     clearProps: 'all'
//                 });


//         }
//     });

//     // -------------------- //
//     // SET TRANSITIONS
//     // -------------------- //
//     Barba.Pjax.getTransition = function() {
//         var transitionPage = revealProject;

//         // if a page has a namespace of 'detail' use the following transition
//         if (Barba.HistoryManager.prevStatus().namespace === 'detail') {
//             transitionPage = closeProject;
//         }

//         // if (Barba.HistoryManager.currentStatus().namespace === 'detail' && Barba.HistoryManager.prevStatus().namespace === 'detail')  {
//         //     alert('works');
//         // }

//         return transitionPage;
//     };
// });