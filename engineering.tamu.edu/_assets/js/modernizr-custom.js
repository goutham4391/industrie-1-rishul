!function(window,document,undefined){var tests=[],ModernizrProto={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){tests.push({name:e,fn:t,options:n})},addAsyncTest:function(e){tests.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=ModernizrProto,Modernizr=new Modernizr;var classes=[];function is(e,t){return typeof e===t}function testRunner(){var e,t,n,r,o,i;for(var s in tests)if(tests.hasOwnProperty(s)){if(e=[],(t=tests[s]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=is(t.fn,"function")?t.fn():t.fn,o=0;o<e.length;o++)1===(i=e[o].split(".")).length?Modernizr[i[0]]=r:(!Modernizr[i[0]]||Modernizr[i[0]]instanceof Boolean||(Modernizr[i[0]]=new Boolean(Modernizr[i[0]])),Modernizr[i[0]][i[1]]=r),classes.push((r?"":"no-")+i.join("-"))}}var docElement=document.documentElement,isSVG="svg"===docElement.nodeName.toLowerCase(),hasOwnProp,w,html5;function setClasses(e){var t=docElement.className,n=Modernizr._config.classPrefix||"";if(isSVG&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),isSVG?docElement.className.baseVal=t:docElement.className=t)}function addTest(e,t){if("object"==typeof e)for(var n in e)hasOwnProp(e,n)&&addTest(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),void 0!==o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),setClasses([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function contains(e,t){return!!~(""+e).indexOf(t)}function createElement(){return"function"!=typeof document.createElement?document.createElement(arguments[0]):isSVG?document.createElementNS.call(document,"http://www.w3.org/2000/svg",arguments[0]):document.createElement.apply(document,arguments)}w={}.hasOwnProperty,hasOwnProp=is(w,"undefined")||is(w.call,"undefined")?function(e,t){return t in e&&is(e.constructor.prototype[t],"undefined")}:function(e,t){return w.call(e,t)},ModernizrProto._l={},ModernizrProto.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},ModernizrProto._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){ModernizrProto.addTest=addTest}),isSVG||function(e,t){var n,r,o=e.html5||{},i=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,s=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,a="_html5shiv",l=0,d={};function c(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function u(){var e=h.elements;return"string"==typeof e?e.split(" "):e}function f(e){var t=d[e[a]];return t||(t={},l++,e[a]=l,d[l]=t),t}function m(e,n,o){return n||(n=t),r?n.createElement(e):(o||(o=f(n)),!(a=o.cache[e]?o.cache[e].cloneNode():s.test(e)?(o.cache[e]=o.createElem(e)).cloneNode():o.createElem(e)).canHaveChildren||i.test(e)||a.tagUrn?a:o.frag.appendChild(a));var a}function p(e){e||(e=t);var o,i,s=f(e);return!h.shivCSS||n||s.hasCSS||(s.hasCSS=!!c(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),r||(o=e,(i=s).cache||(i.cache={},i.createElem=o.createElement,i.createFrag=o.createDocumentFragment,i.frag=i.createFrag()),o.createElement=function(e){return h.shivMethods?m(e,o,i):i.createElem(e)},o.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+u().join().replace(/[\w\-:]+/g,function(e){return i.createElem(e),i.frag.createElement(e),'c("'+e+'")'})+");return n}")(h,i.frag)),e}!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",n="hidden"in e,r=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return void 0===e.cloneNode||void 0===e.createDocumentFragment||void 0===e.createElement}()}catch(e){n=!0,r=!0}}();var h={elements:o.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:"3.7.3",shivCSS:!1!==o.shivCSS,supportsUnknownElements:r,shivMethods:!1!==o.shivMethods,type:"default",shivDocument:p,createElement:m,createDocumentFragment:function(e,n){if(e||(e=t),r)return e.createDocumentFragment();for(var o=(n=n||f(e)).frag.cloneNode(),i=0,s=u(),a=s.length;i<a;i++)o.createElement(s[i]);return o},addElements:function(e,t){var n=h.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),h.elements=n+" "+e,p(t)}};e.html5=h,p(t);var v,g=/^$|\b(?:all|print)\b/,y="html5shiv",S=!(r||(v=t.documentElement,void 0===t.namespaces||void 0===t.parentWindow||void 0===v.applyElement||void 0===v.removeNode||void 0===e.attachEvent));function w(e){for(var t,n=e.attributes,r=n.length,o=e.ownerDocument.createElement(y+":"+e.nodeName);r--;)(t=n[r]).specified&&o.setAttribute(t.nodeName,t.nodeValue);return o.style.cssText=e.style.cssText,o}function E(e){var t,n,r=f(e),o=e.namespaces,i=e.parentWindow;if(!S||e.printShived)return e;function s(){clearTimeout(r._removeSheetTimer),t&&t.removeNode(!0),t=null}return void 0===o[y]&&o.add(y),i.attachEvent("onbeforeprint",function(){s();for(var r,o,i,a=e.styleSheets,l=[],d=a.length,f=Array(d);d--;)f[d]=a[d];for(;i=f.pop();)if(!i.disabled&&g.test(i.media)){try{r=i.imports,o=r.length}catch(e){o=0}for(d=0;d<o;d++)f.push(r[d]);try{l.push(i.cssText)}catch(e){}}l=function(e){for(var t,n=e.split("{"),r=n.length,o=RegExp("(^|[\\s,>+~])("+u().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),i="$1"+y+"\\:$2";r--;)(t=n[r]=n[r].split("}"))[t.length-1]=t[t.length-1].replace(o,i),n[r]=t.join("}");return n.join("{")}(l.reverse().join("")),n=function(e){for(var t,n=e.getElementsByTagName("*"),r=n.length,o=RegExp("^(?:"+u().join("|")+")$","i"),i=[];r--;)t=n[r],o.test(t.nodeName)&&i.push(t.applyElement(w(t)));return i}(e),t=c(e,l)}),i.attachEvent("onafterprint",function(){!function(e){for(var t=e.length;t--;)e[t].removeNode()}(n),clearTimeout(r._removeSheetTimer),r._removeSheetTimer=setTimeout(s,500)}),e.printShived=!0,e}h.type+=" print",h.shivPrint=E,E(t),"object"==typeof module&&module.exports&&(module.exports=h)}(void 0!==window?window:this,document);var modElem={elem:createElement("modernizr")};Modernizr._q.push(function(){delete modElem.elem});var mStyle={style:modElem.elem.style};function getBody(){var e=document.body;return e||((e=createElement(isSVG?"svg":"body")).fake=!0),e}function injectElementWithStyles(e,t,n,r){var o,i,s,a,l="modernizr",d=createElement("div"),c=getBody();if(parseInt(n,10))for(;n--;)(s=createElement("div")).id=r?r[n]:l+(n+1),d.appendChild(s);return(o=createElement("style")).type="text/css",o.id="s"+l,(c.fake?c:d).appendChild(o),c.appendChild(d),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e)),d.id=l,c.fake&&(c.style.background="",c.style.overflow="hidden",a=docElement.style.overflow,docElement.style.overflow="hidden",docElement.appendChild(c)),i=t(d,e),c.fake?(c.parentNode.removeChild(c),docElement.style.overflow=a,docElement.offsetHeight):d.parentNode.removeChild(d),!!i}function domToCSS(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function computedStyle(e,t,n){var r;if("getComputedStyle"in window){r=getComputedStyle.call(window,e,t);var o=window.console;if(null!==r)n&&(r=r.getPropertyValue(n));else if(o)o[o.error?"error":"log"].call(o,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}else r=!t&&e.currentStyle&&e.currentStyle[n];return r}function nativeTestProps(e,t){var n=e.length;if("CSS"in window&&"supports"in window.CSS){for(;n--;)if(window.CSS.supports(domToCSS(e[n]),t))return!0;return!1}if("CSSSupportsRule"in window){for(var r=[];n--;)r.push("("+domToCSS(e[n])+":"+t+")");return injectElementWithStyles("@supports ("+(r=r.join(" or "))+") { #modernizr { position: absolute; } }",function(e){return"absolute"==computedStyle(e,null,"position")})}return undefined}function cssToDOM(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function testProps(e,t,n,r){if(r=!is(r,"undefined")&&r,!is(n,"undefined")){var o=nativeTestProps(e,n);if(!is(o,"undefined"))return o}for(var i,s,a,l,d,c=["modernizr","tspan","samp"];!mStyle.style&&c.length;)i=!0,mStyle.modElem=createElement(c.shift()),mStyle.style=mStyle.modElem.style;function u(){i&&(delete mStyle.style,delete mStyle.modElem)}for(a=e.length,s=0;s<a;s++)if(l=e[s],d=mStyle.style[l],contains(l,"-")&&(l=cssToDOM(l)),mStyle.style[l]!==undefined){if(r||is(n,"undefined"))return u(),"pfx"!=t||l;try{mStyle.style[l]=n}catch(e){}if(mStyle.style[l]!=d)return u(),"pfx"!=t||l}return u(),!1}Modernizr._q.unshift(function(){delete mStyle.style});var testProp=ModernizrProto.testProp=function(e,t,n){return testProps([e],undefined,t,n)};function fnBind(e,t){return function(){return e.apply(t,arguments)}}Modernizr.addTest("svg",!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect);var omPrefixes="Moz O ms Webkit",cssomPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.split(" "):[];ModernizrProto._cssomPrefixes=cssomPrefixes;var domPrefixes=ModernizrProto._config.usePrefixes?omPrefixes.toLowerCase().split(" "):[];function testDOMProps(e,t,n){var r;for(var o in e)if(e[o]in t)return!1===n?e[o]:is(r=t[e[o]],"function")?fnBind(r,n||t):r;return!1}function testPropsAll(e,t,n,r,o){var i=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+cssomPrefixes.join(i+" ")+i).split(" ");return is(t,"string")||is(t,"undefined")?testProps(s,t,r,o):testDOMProps(s=(e+" "+domPrefixes.join(i+" ")+i).split(" "),t,n)}function testAllProps(e,t,n){return testPropsAll(e,undefined,undefined,t,n)}ModernizrProto._domPrefixes=domPrefixes,ModernizrProto.testAllProps=testPropsAll,ModernizrProto.testAllProps=testAllProps,Modernizr.addTest("ellipsis",testAllProps("textOverflow","ellipsis")),Modernizr.addTest("arrow",function(){try{eval("()=>{}")}catch(e){return!1}return!0}),Modernizr.addTest("fileinputdirectory",function(){var e=createElement("input"),t="directory";if(e.type="file",t in e)return!0;for(var n=0,r=domPrefixes.length;n<r;n++)if(domPrefixes[n]+t in e)return!0;return!1}),testRunner(),setClasses(classes),delete ModernizrProto.addTest,delete ModernizrProto.addAsyncTest;for(var i=0;i<Modernizr._q.length;i++)Modernizr._q[i]();window.Modernizr=Modernizr}(window,document);