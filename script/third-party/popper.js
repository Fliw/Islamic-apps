/*
 Copyright (C) Federico Zivolo 2019
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */for(var e='undefined'!=typeof window&&'undefined'!=typeof document,t=['Edge','Trident','Firefox'],o=0,n=0;n<t.length;n+=1)if(e&&0<=navigator.userAgent.indexOf(t[n])){o=1;break}function i(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}function r(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},o))}}var p=e&&window.Promise,s=p?i:r;function d(e){return e&&'[object Function]'==={}.toString.call(e)}function a(e,t){if(1!==e.nodeType)return[];var o=e.ownerDocument.defaultView,n=o.getComputedStyle(e,null);return t?n[t]:n}function l(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function f(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var t=a(e),o=t.overflow,n=t.overflowX,i=t.overflowY;return /(auto|scroll|overlay)/.test(o+i+n)?e:f(l(e))}var m=e&&!!(window.MSInputMethodContext&&document.documentMode),h=e&&/MSIE 10/.test(navigator.userAgent);function c(e){return 11===e?m:10===e?h:m||h}function g(e){if(!e)return document.documentElement;for(var t=c(10)?document.body:null,o=e.offsetParent||null;o===t&&e.nextElementSibling;)o=(e=e.nextElementSibling).offsetParent;var n=o&&o.nodeName;return n&&'BODY'!==n&&'HTML'!==n?-1!==['TH','TD','TABLE'].indexOf(o.nodeName)&&'static'===a(o,'position')?g(o):o:e?e.ownerDocument.documentElement:document.documentElement}function u(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||g(e.firstElementChild)===e)}function b(e){return null===e.parentNode?e:b(e.parentNode)}function w(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,n=o?e:t,i=o?t:e,r=document.createRange();r.setStart(n,0),r.setEnd(i,0);var p=r.commonAncestorContainer;if(e!==p&&t!==p||n.contains(i))return u(p)?p:g(p);var s=b(e);return s.host?w(s.host,t):w(e,b(t).host)}function y(e){var t=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',n=e.nodeName;if('BODY'===n||'HTML'===n){var i=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||i;return r[o]}return e[o]}function E(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],n=y(t,'top'),i=y(t,'left'),r=o?-1:1;return e.top+=n*r,e.bottom+=n*r,e.left+=i*r,e.right+=i*r,e}function x(e,t){var o='x'===t?'Left':'Top',n='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+n+'Width'],10)}function v(e,t,o,n){return Math.max(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],c(10)?parseInt(o['offset'+e])+parseInt(n['margin'+('Height'===e?'Top':'Left')])+parseInt(n['margin'+('Height'===e?'Bottom':'Right')]):0)}function O(e){var t=e.body,o=e.documentElement,n=c(10)&&getComputedStyle(o);return{height:v('Height',t,o,n),width:v('Width',t,o,n)}}var L=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},S=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),T=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},D=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var n in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e};function C(e){return D({},e,{right:e.left+e.width,bottom:e.top+e.height})}function N(e){var t={};try{if(c(10)){t=e.getBoundingClientRect();var o=y(e,'top'),n=y(e,'left');t.top+=o,t.left+=n,t.bottom+=o,t.right+=n}else t=e.getBoundingClientRect()}catch(t){}var i={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},r='HTML'===e.nodeName?O(e.ownerDocument):{},p=r.width||e.clientWidth||i.right-i.left,s=r.height||e.clientHeight||i.bottom-i.top,d=e.offsetWidth-p,l=e.offsetHeight-s;if(d||l){var f=a(e);d-=x(f,'x'),l-=x(f,'y'),i.width-=d,i.height-=l}return C(i)}function P(e,t){var o=Math.max,n=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=c(10),r='HTML'===t.nodeName,p=N(e),s=N(t),d=f(e),l=a(t),m=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&r&&(s.top=o(s.top,0),s.left=o(s.left,0));var g=C({top:p.top-s.top-m,left:p.left-s.left-h,width:p.width,height:p.height});if(g.marginTop=0,g.marginLeft=0,!i&&r){var u=parseFloat(l.marginTop,10),b=parseFloat(l.marginLeft,10);g.top-=m-u,g.bottom-=m-u,g.left-=h-b,g.right-=h-b,g.marginTop=u,g.marginLeft=b}return(i&&!n?t.contains(d):t===d&&'BODY'!==d.nodeName)&&(g=E(g,t)),g}function k(e){var t=Math.max,o=1<arguments.length&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,i=P(e,n),r=t(n.clientWidth,window.innerWidth||0),p=t(n.clientHeight,window.innerHeight||0),s=o?0:y(n),d=o?0:y(n,'left'),a={top:s-i.top+i.marginTop,left:d-i.left+i.marginLeft,width:r,height:p};return C(a)}function W(e){var t=e.nodeName;if('BODY'===t||'HTML'===t)return!1;if('fixed'===a(e,'position'))return!0;var o=l(e);return!!o&&W(o)}function H(e){if(!e||!e.parentElement||c())return document.documentElement;for(var t=e.parentElement;t&&'none'===a(t,'transform');)t=t.parentElement;return t||document.documentElement}function B(e,t,o,n){var i=4<arguments.length&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},p=i?H(e):w(e,t);if('viewport'===n)r=k(p,i);else{var s;'scrollParent'===n?(s=f(l(t)),'BODY'===s.nodeName&&(s=e.ownerDocument.documentElement)):'window'===n?s=e.ownerDocument.documentElement:s=n;var d=P(s,p,i);if('HTML'===s.nodeName&&!W(p)){var a=O(e.ownerDocument),m=a.height,h=a.width;r.top+=d.top-d.marginTop,r.bottom=m+d.top,r.left+=d.left-d.marginLeft,r.right=h+d.left}else r=d}o=o||0;var c='number'==typeof o;return r.left+=c?o:o.left||0,r.top+=c?o:o.top||0,r.right-=c?o:o.right||0,r.bottom-=c?o:o.bottom||0,r}function A(e){var t=e.width,o=e.height;return t*o}function M(e,t,o,n,i){var r=5<arguments.length&&arguments[5]!==void 0?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=B(o,n,r,i),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return D({key:e},s[e],{area:A(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,n=e.height;return t>=o.clientWidth&&n>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function F(e,t,o){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null,i=n?H(t):w(t,o);return P(o,i,n)}function I(e){var t=e.ownerDocument.defaultView,o=t.getComputedStyle(e),n=parseFloat(o.marginTop||0)+parseFloat(o.marginBottom||0),i=parseFloat(o.marginLeft||0)+parseFloat(o.marginRight||0),r={width:e.offsetWidth+i,height:e.offsetHeight+n};return r}function R(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function U(e,t,o){o=o.split('-')[0];var n=I(e),i={width:n.width,height:n.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return i[p]=t[p]+t[d]/2-n[d]/2,i[s]=o===s?t[s]-n[a]:t[R(s)],i}function Y(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function V(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var n=Y(e,function(e){return e[t]===o});return e.indexOf(n)}function j(e,t,o){var n=void 0===o?e:e.slice(0,V(e,'name',o));return n.forEach(function(e){e['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var o=e['function']||e.fn;e.enabled&&d(o)&&(t.offsets.popper=C(t.offsets.popper),t.offsets.reference=C(t.offsets.reference),t=o(t,e))}),t}function q(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=F(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=M(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=U(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?'fixed':'absolute',e=j(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function K(e,t){return e.some(function(e){var o=e.name,n=e.enabled;return n&&o===t})}function z(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function G(){return this.state.isDestroyed=!0,K(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.position='',this.popper.style.top='',this.popper.style.left='',this.popper.style.right='',this.popper.style.bottom='',this.popper.style.willChange='',this.popper.style[z('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function _(e){var t=e.ownerDocument;return t?t.defaultView:window}function X(e,t,o,n){var i='BODY'===e.nodeName,r=i?e.ownerDocument.defaultView:e;r.addEventListener(t,o,{passive:!0}),i||X(f(r.parentNode),t,o,n),n.push(r)}function J(e,t,o,n){o.updateBound=n,_(e).addEventListener('resize',o.updateBound,{passive:!0});var i=f(e);return X(i,'scroll',o.updateBound,o.scrollParents),o.scrollElement=i,o.eventsEnabled=!0,o}function Q(){this.state.eventsEnabled||(this.state=J(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(e,t){return _(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function $(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function ee(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function te(e,t){Object.keys(t).forEach(function(o){var n='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&ee(t[o])&&(n='px'),e.style[o]=t[o]+n})}function oe(e,t){Object.keys(t).forEach(function(o){var n=t[o];!1===n?e.removeAttribute(o):e.setAttribute(o,t[o])})}function ne(e){return te(e.instance.popper,e.styles),oe(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&te(e.arrowElement,e.arrowStyles),e}function ie(e,t,o,n,i){var r=F(i,t,e,o.positionFixed),p=M(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),te(t,{position:o.positionFixed?'fixed':'absolute'}),o}function re(e,t){var o=e.offsets,n=o.popper,i=o.reference,r=Math.round,p=Math.floor,s=function(e){return e},d=r(i.width),a=r(n.width),l=-1!==['left','right'].indexOf(e.placement),f=-1!==e.placement.indexOf('-'),m=t?l||f||d%2==a%2?r:p:s,h=t?r:s;return{left:m(1==d%2&&1==a%2&&!f&&t?n.left-1:n.left),top:h(n.top),bottom:h(n.bottom),right:m(n.right)}}var pe=e&&/Firefox/i.test(navigator.userAgent);function se(e,t){var o=t.x,n=t.y,i=e.offsets.popper,r=Y(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==r&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var p,s,d=void 0===r?t.gpuAcceleration:r,a=g(e.instance.popper),l=N(a),f={position:i.position},m=re(e,2>window.devicePixelRatio||!pe),h='bottom'===o?'top':'bottom',c='right'===n?'left':'right',u=z('transform');if(s='bottom'==h?'HTML'===a.nodeName?-a.clientHeight+m.bottom:-l.height+m.bottom:m.top,p='right'==c?'HTML'===a.nodeName?-a.clientWidth+m.right:-l.width+m.right:m.left,d&&u)f[u]='translate3d('+p+'px, '+s+'px, 0)',f[h]=0,f[c]=0,f.willChange='transform';else{var b='bottom'==h?-1:1,w='right'==c?-1:1;f[h]=s*b,f[c]=p*w,f.willChange=h+', '+c}var y={"x-placement":e.placement};return e.attributes=D({},y,e.attributes),e.styles=D({},f,e.styles),e.arrowStyles=D({},e.offsets.arrow,e.arrowStyles),e}function de(e,t,o){var n=Y(e,function(e){var o=e.name;return o===t}),i=!!n&&e.some(function(e){return e.name===o&&e.enabled&&e.order<n.order});if(!i){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return i}function ae(e,t){var o;if(!de(e.instance.modifiers,'arrow','keepTogether'))return e;var n=t.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var i=e.placement.split('-')[0],r=e.offsets,p=r.popper,s=r.reference,d=-1!==['left','right'].indexOf(i),l=d?'height':'width',f=d?'Top':'Left',m=f.toLowerCase(),h=d?'left':'top',c=d?'bottom':'right',g=I(n)[l];s[c]-g<p[m]&&(e.offsets.popper[m]-=p[m]-(s[c]-g)),s[m]+g>p[c]&&(e.offsets.popper[m]+=s[m]+g-p[c]),e.offsets.popper=C(e.offsets.popper);var u=s[m]+s[l]/2-g/2,b=a(e.instance.popper),w=parseFloat(b['margin'+f],10),y=parseFloat(b['border'+f+'Width'],10),E=u-e.offsets.popper[m]-w-y;return E=Math.max(Math.min(p[l]-g,E),0),e.arrowElement=n,e.offsets.arrow=(o={},T(o,m,Math.round(E)),T(o,h,''),o),e}function le(e){if('end'===e)return'start';return'start'===e?'end':e}var fe=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],me=fe.slice(3);function he(e){var t=1<arguments.length&&arguments[1]!==void 0&&arguments[1],o=me.indexOf(e),n=me.slice(o+1).concat(me.slice(0,o));return t?n.reverse():n}var ce={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'};function ge(e,t){if(K(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=B(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),n=e.placement.split('-')[0],i=R(n),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case ce.FLIP:p=[n,i];break;case ce.CLOCKWISE:p=he(n);break;case ce.COUNTERCLOCKWISE:p=he(n,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(n!==s||p.length===d+1)return e;n=e.placement.split('-')[0],i=R(n);var a=e.offsets.popper,l=e.offsets.reference,f=Math.floor,m='left'===n&&f(a.right)>f(l.left)||'right'===n&&f(a.left)<f(l.right)||'top'===n&&f(a.bottom)>f(l.top)||'bottom'===n&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===n&&h||'right'===n&&c||'top'===n&&g||'bottom'===n&&u,w=-1!==['top','bottom'].indexOf(n),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(n=p[d+1]),y&&(r=le(r)),e.placement=n+(r?'-'+r:''),e.offsets.popper=D({},e.offsets.popper,U(e.instance.popper,e.offsets.reference,e.placement)),e=j(e.instance.modifiers,e,'flip'))}),e}function ue(e){var t=e.offsets,o=t.popper,n=t.reference,i=e.placement.split('-')[0],r=Math.floor,p=-1!==['top','bottom'].indexOf(i),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(n[d])&&(e.offsets.popper[d]=r(n[d])-o[a]),o[d]>r(n[s])&&(e.offsets.popper[d]=r(n[s])),e}function be(e,t,o,n){var i=Math.max,r=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),p=+r[1],s=r[2];if(!p)return e;if(0===s.indexOf('%')){var d;switch(s){case'%p':d=o;break;case'%':case'%r':default:d=n;}var a=C(d);return a[t]/100*p}if('vh'===s||'vw'===s){var l;return l='vh'===s?i(document.documentElement.clientHeight,window.innerHeight||0):i(document.documentElement.clientWidth,window.innerWidth||0),l/100*p}return p}function we(e,t,o,n){var i=[0,0],r=-1!==['right','left'].indexOf(n),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(Y(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,n){var i=(1===n?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return be(e,i,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,n){ee(o)&&(i[t]+=o*('-'===e[n-1]?-1:1))})}),i}function ye(e,t){var o,n=t.offset,i=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=i.split('-')[0];return o=ee(+n)?[+n,0]:we(n,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}function Ee(e,t){var o=t.boundariesElement||g(e.instance.popper);e.instance.reference===o&&(o=g(o));var n=z('transform'),i=e.instance.popper.style,r=i.top,p=i.left,s=i[n];i.top='',i.left='',i[n]='';var d=B(e.instance.popper,e.instance.reference,t.padding,o,e.positionFixed);i.top=r,i.left=p,i[n]=s,t.boundaries=d;var a=t.priority,l=e.offsets.popper,f={primary:function(e){var o=l[e];return l[e]<d[e]&&!t.escapeWithReference&&(o=Math.max(l[e],d[e])),T({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=l[o];return l[e]>d[e]&&!t.escapeWithReference&&(n=Math.min(l[o],d[e]-('right'===e?l.width:l.height))),T({},o,n)}};return a.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';l=D({},l,f[t](e))}),e.offsets.popper=l,e}function xe(e){var t=e.placement,o=t.split('-')[0],n=t.split('-')[1];if(n){var i=e.offsets,r=i.reference,p=i.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:T({},d,r[d]),end:T({},d,r[d]+r[a]-p[a])};e.offsets.popper=D({},p,l[n])}return e}function ve(e){if(!de(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=Y(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}function Oe(e){var t=e.placement,o=t.split('-')[0],n=e.offsets,i=n.popper,r=n.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return i[p?'left':'top']=r[o]-(s?i[p?'width':'height']:0),e.placement=R(t),e.offsets.popper=C(i),e}var Le={shift:{order:100,enabled:!0,fn:xe},offset:{order:200,enabled:!0,fn:ye,offset:0},preventOverflow:{order:300,enabled:!0,fn:Ee,priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:ue},arrow:{order:500,enabled:!0,fn:ae,element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:ge,behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:Oe},hide:{order:800,enabled:!0,fn:ve},computeStyle:{order:850,enabled:!0,fn:se,gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:ne,onLoad:ie,gpuAcceleration:void 0}},Se={placement:'bottom',positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:Le},Te=function(){function e(t,o){var n=this,i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};L(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=s(this.update.bind(this)),this.options=D({},e.Defaults,i),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=o&&o.jquery?o[0]:o,this.options.modifiers={},Object.keys(D({},e.Defaults.modifiers,i.modifiers)).forEach(function(t){n.options.modifiers[t]=D({},e.Defaults.modifiers[t]||{},i.modifiers?i.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return D({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&d(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return S(e,[{key:'update',value:function(){return q.call(this)}},{key:'destroy',value:function(){return G.call(this)}},{key:'enableEventListeners',value:function(){return Q.call(this)}},{key:'disableEventListeners',value:function(){return $.call(this)}}]),e}();Te.Utils=('undefined'==typeof window?global:window).PopperUtils,Te.placements=fe,Te.Defaults=Se;export default Te;
//# sourceMappingURL=popper.min.js.map