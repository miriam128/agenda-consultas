import{T as m,r as i,b as He,j as v,a as M,u as Ue}from"./app-e488d326.js";import{T as je,I as _e}from"./TextInput-6732b869.js";import{I as We}from"./InputLabel-8e36206b.js";import{a as Y,s as H,e as ne,u as S,b as oe,C as $,$ as T,o as y,y as P,p as Ge,t as le,f as Ee,T as Ye,S as pe,c as qe,d as me,m as Ve,J as X}from"./transition-9d8f5c34.js";var ge;let ze=0;function ve(){return++ze}let I=(ge=m.useId)!=null?ge:function(){let e=Y(),[t,r]=m.useState(e?ve:null);return H(()=>{t===null&&r(ve())},[t]),t!=null?""+t:void 0};function ae(e){return ne?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Q=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var A=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(A||{}),ye=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(ye||{}),Je=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Je||{});function Xe(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Q)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var $e=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))($e||{});function Ke(e,t=0){var r;return e===((r=ae(e))==null?void 0:r.body)?!1:S(t,{[0](){return e.matches(Q)},[1](){let n=e;for(;n!==null;){if(n.matches(Q))return!0;n=n.parentElement}return!1}})}function N(e){e==null||e.focus({preventScroll:!0})}let Qe=["textarea","input"].join(",");function Ze(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,Qe))!=null?r:!1}function et(e,t=r=>r){return e.slice().sort((r,n)=>{let o=t(r),a=t(n);if(o===null||a===null)return 0;let l=o.compareDocumentPosition(a);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function _(e,t,{sorted:r=!0,relativeTo:n=null,skipElements:o=[]}={}){let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,l=Array.isArray(e)?r?et(e):e:Xe(e);o.length>0&&(l=l.filter(p=>!o.includes(p))),n=n??a.activeElement;let s=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,l.indexOf(n))-1;if(t&4)return Math.max(0,l.indexOf(n))+1;if(t&8)return l.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=t&32?{preventScroll:!0}:{},c=0,f=l.length,g;do{if(c>=f||c+f<=0)return 0;let p=u+c;if(t&16)p=(p+f)%f;else{if(p<0)return 3;if(p>=f)return 1}g=l[p],g==null||g.focus(d),c+=s}while(g!==a.activeElement);return t&6&&Ze(g)&&g.select(),g.hasAttribute("tabindex")||g.setAttribute("tabindex","0"),2}function K(e,t,r){let n=oe(t);i.exports.useEffect(()=>{function o(a){n.current(a)}return document.addEventListener(e,o,r),()=>document.removeEventListener(e,o,r)},[e,r])}function tt(e,t,r=!0){let n=i.exports.useRef(!1);i.exports.useEffect(()=>{requestAnimationFrame(()=>{n.current=r})},[r]);function o(l,s){if(!n.current||l.defaultPrevented)return;let u=function c(f){return typeof f=="function"?c(f()):Array.isArray(f)||f instanceof Set?f:[f]}(e),d=s(l);if(d!==null&&d.getRootNode().contains(d)){for(let c of u){if(c===null)continue;let f=c instanceof HTMLElement?c:c.current;if(f!=null&&f.contains(d)||l.composed&&l.composedPath().includes(f))return}return!Ke(d,$e.Loose)&&d.tabIndex!==-1&&l.preventDefault(),t(l,d)}}let a=i.exports.useRef(null);K("mousedown",l=>{var s,u;n.current&&(a.current=((u=(s=l.composedPath)==null?void 0:s.call(l))==null?void 0:u[0])||l.target)},!0),K("click",l=>{!a.current||(o(l,()=>a.current),a.current=null)},!0),K("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}function rt(e){let t=e.parentElement,r=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(r=t),t=t.parentElement;let n=(t==null?void 0:t.getAttribute("disabled"))==="";return n&&nt(r)?!1:n}function nt(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let ot="div";var W=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(W||{});let Z=$(function(e,t){let{features:r=1,...n}=e,o={ref:t,"aria-hidden":(r&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(r&4)===4&&(r&2)!==2&&{display:"none"}}};return T({ourProps:o,theirProps:n,slot:{},defaultTag:ot,name:"Hidden"})});var Te=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(Te||{});function Pe(e,t){let r=i.exports.useRef([]),n=y(e);i.exports.useEffect(()=>{let o=[...r.current];for(let[a,l]of t.entries())if(r.current[a]!==l){let s=n(t,o);return r.current=t,s}},[n,...t])}function lt(e,t,r){let n=oe(t);i.exports.useEffect(()=>{function o(a){n.current(a)}return window.addEventListener(e,o,r),()=>window.removeEventListener(e,o,r)},[e,r])}var B=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(B||{});function at(){let e=i.exports.useRef(0);return lt("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function q(...e){return i.exports.useMemo(()=>ae(...e),[...e])}function ie(e,t,r,n){let o=oe(r);i.exports.useEffect(()=>{e=e??window;function a(l){o.current(l)}return e.addEventListener(t,a,n),()=>e.removeEventListener(t,a,n)},[e,t,n])}let it="div";var Fe=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Fe||{});let O=Object.assign($(function(e,t){let r=i.exports.useRef(null),n=P(r,t),{initialFocus:o,containers:a,features:l=30,...s}=e;Y()||(l=1);let u=q(r);st({ownerDocument:u},Boolean(l&16));let d=ut({ownerDocument:u,container:r,initialFocus:o},Boolean(l&2));ct({ownerDocument:u,container:r,containers:a,previousActiveElement:d},Boolean(l&8));let c=at(),f=y(x=>{let w=r.current;w&&(F=>F())(()=>{S(c.current,{[B.Forwards]:()=>_(w,A.First,{skipElements:[x.relatedTarget]}),[B.Backwards]:()=>_(w,A.Last,{skipElements:[x.relatedTarget]})})})}),g=Ge(),p=i.exports.useRef(!1),V={ref:n,onKeyDown(x){x.key=="Tab"&&(p.current=!0,g.requestAnimationFrame(()=>{p.current=!1}))},onBlur(x){let w=new Set(a==null?void 0:a.current);w.add(r);let F=x.relatedTarget;!F||F.dataset.headlessuiFocusGuard!=="true"&&(De(w,F)||(p.current?_(r.current,S(c.current,{[B.Forwards]:()=>A.Next,[B.Backwards]:()=>A.Previous})|A.WrapAround,{relativeTo:x.target}):x.target instanceof HTMLElement&&N(x.target)))}};return m.createElement(m.Fragment,null,Boolean(l&4)&&m.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:W.Focusable}),T({ourProps:V,theirProps:s,defaultTag:it,name:"FocusTrap"}),Boolean(l&4)&&m.createElement(Z,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:f,features:W.Focusable}))}),{features:Fe});function st({ownerDocument:e},t){let r=i.exports.useRef(null);ie(e==null?void 0:e.defaultView,"focusout",o=>{!t||r.current||(r.current=o.target)},!0),Pe(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&N(r.current),r.current=null)},[t]);let n=i.exports.useRef(!1);i.exports.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{!n.current||(N(r.current),r.current=null)})}),[])}function ut({ownerDocument:e,container:t,initialFocus:r},n){let o=i.exports.useRef(null),a=Ee();return Pe(()=>{if(!n)return;let l=t.current;!l||le(()=>{if(!a.current)return;let s=e==null?void 0:e.activeElement;if(r!=null&&r.current){if((r==null?void 0:r.current)===s){o.current=s;return}}else if(l.contains(s)){o.current=s;return}r!=null&&r.current?N(r.current):_(l,A.First)===ye.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[n]),o}function ct({ownerDocument:e,container:t,containers:r,previousActiveElement:n},o){let a=Ee();ie(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!a.current)return;let s=new Set(r==null?void 0:r.current);s.add(t);let u=n.current;if(!u)return;let d=l.target;d&&d instanceof HTMLElement?De(s,d)?(n.current=d,N(d)):(l.preventDefault(),l.stopPropagation(),N(u)):N(n.current)},!0)}function De(e,t){var r;for(let n of e)if((r=n.current)!=null&&r.contains(t))return!0;return!1}let L=new Set,D=new Map;function he(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function xe(e){let t=D.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function dt(e,t=!0){H(()=>{if(!t||!e.current)return;let r=e.current,n=ae(r);if(n){L.add(r);for(let o of D.keys())o.contains(r)&&(xe(o),D.delete(o));return n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let a of L)if(o.contains(a))return;L.size===1&&(D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o))}}),()=>{if(L.delete(r),L.size>0)n.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!D.has(o)){for(let a of L)if(o.contains(a))return;D.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),he(o)}});else for(let o of D.keys())xe(o),D.delete(o)}}},[t])}let Ae=i.exports.createContext(!1);function ft(){return i.exports.useContext(Ae)}function ee(e){return m.createElement(Ae.Provider,{value:e.force},e.children)}function pt(e){let t=ft(),r=i.exports.useContext(Se),n=q(e),[o,a]=i.exports.useState(()=>{if(!t&&r!==null||ne)return null;let l=n==null?void 0:n.getElementById("headlessui-portal-root");if(l)return l;if(n===null)return null;let s=n.createElement("div");return s.setAttribute("id","headlessui-portal-root"),n.body.appendChild(s)});return i.exports.useEffect(()=>{o!==null&&(n!=null&&n.body.contains(o)||n==null||n.body.appendChild(o))},[o,n]),i.exports.useEffect(()=>{t||r!==null&&a(r.current)},[r,a,t]),o}let mt=i.exports.Fragment,gt=$(function(e,t){let r=e,n=i.exports.useRef(null),o=P(Ye(c=>{n.current=c}),t),a=q(n),l=pt(n),[s]=i.exports.useState(()=>{var c;return ne?null:(c=a==null?void 0:a.createElement("div"))!=null?c:null}),u=Y(),d=i.exports.useRef(!1);return H(()=>{if(d.current=!1,!(!l||!s))return l.contains(s)||(s.setAttribute("data-headlessui-portal",""),l.appendChild(s)),()=>{d.current=!0,le(()=>{var c;!d.current||!l||!s||(l.removeChild(s),l.childNodes.length<=0&&((c=l.parentElement)==null||c.removeChild(l)))})}},[l,s]),u?!l||!s?null:He.exports.createPortal(T({ourProps:{ref:o},theirProps:r,defaultTag:mt,name:"Portal"}),s):null}),vt=i.exports.Fragment,Se=i.exports.createContext(null),ht=$(function(e,t){let{target:r,...n}=e,o={ref:P(t)};return m.createElement(Se.Provider,{value:r},T({ourProps:o,theirProps:n,defaultTag:vt,name:"Popover.Group"}))}),te=Object.assign(gt,{Group:ht}),Ne=i.exports.createContext(null);function Ce(){let e=i.exports.useContext(Ne);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Ce),t}return e}function xt(){let[e,t]=i.exports.useState([]);return[e.length>0?e.join(" "):void 0,i.exports.useMemo(()=>function(r){let n=y(a=>(t(l=>[...l,a]),()=>t(l=>{let s=l.slice(),u=s.indexOf(a);return u!==-1&&s.splice(u,1),s}))),o=i.exports.useMemo(()=>({register:n,slot:r.slot,name:r.name,props:r.props}),[n,r.slot,r.name,r.props]);return m.createElement(Ne.Provider,{value:o},r.children)},[t])]}let wt="p",bt=$(function(e,t){let r=I(),{id:n=`headlessui-description-${r}`,...o}=e,a=Ce(),l=P(t);H(()=>a.register(n),[n,a.register]);let s={ref:l,...a.props,id:n};return T({ourProps:s,theirProps:o,slot:a.slot||{},defaultTag:wt,name:a.name||"Description"})}),se=i.exports.createContext(()=>{});se.displayName="StackContext";var re=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(re||{});function Et(){return i.exports.useContext(se)}function yt({children:e,onUpdate:t,type:r,element:n,enabled:o}){let a=Et(),l=y((...s)=>{t==null||t(...s),a(...s)});return H(()=>{let s=o===void 0||o===!0;return s&&l(0,r,n),()=>{s&&l(1,r,n)}},[l,r,n,o]),m.createElement(se.Provider,{value:l},e)}function $t(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var Tt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Tt||{}),Pt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(Pt||{});let Ft={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},G=i.exports.createContext(null);G.displayName="DialogContext";function U(e){let t=i.exports.useContext(G);if(t===null){let r=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,U),r}return t}function Dt(e,t,r=()=>[document.body]){i.exports.useEffect(()=>{var n;if(!t||!e)return;let o=Ve();function a(u,d,c){let f=u.style.getPropertyValue(d);return Object.assign(u.style,{[d]:c}),o.add(()=>{Object.assign(u.style,{[d]:f})})}let l=e.documentElement,s=((n=e.defaultView)!=null?n:window).innerWidth-l.clientWidth;if(a(l,"overflow","hidden"),s>0){let u=l.clientWidth-l.offsetWidth,d=s-u;a(l,"paddingRight",`${d}px`)}if($t()){let u=window.pageYOffset;a(document.body,"marginTop",`-${u}px`),window.scrollTo(0,0),o.addEventListener(e,"touchmove",d=>{d.target instanceof HTMLElement&&!r().some(c=>c.contains(d.target))&&d.preventDefault()},{passive:!1}),o.add(()=>{window.scrollTo(0,window.pageYOffset+u)})}return o.dispose},[e,t])}function At(e,t){return S(t.type,Ft,e,t)}let St="div",Nt=pe.RenderStrategy|pe.Static,Ct=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-${r}`,open:o,onClose:a,initialFocus:l,__demoMode:s=!1,...u}=e,[d,c]=i.exports.useState(0),f=qe();o===void 0&&f!==null&&(o=S(f,{[me.Open]:!0,[me.Closed]:!1}));let g=i.exports.useRef(new Set),p=i.exports.useRef(null),V=P(p,t),x=i.exports.useRef(null),w=q(p),F=e.hasOwnProperty("open")||f!==null,ue=e.hasOwnProperty("onClose");if(!F&&!ue)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!F)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!ue)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof a!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);let b=o?0:1,[C,Re]=i.exports.useReducer(At,{titleId:null,descriptionId:null,panelRef:i.exports.createRef()}),R=y(()=>a(!1)),ce=y(h=>Re({type:0,id:h})),z=Y()?s?!1:b===0:!1,j=d>1,ke=i.exports.useContext(G)!==null,Le=j?"parent":"leaf";dt(p,j?z:!1);let de=y(()=>{var h,k;return[...Array.from((h=w==null?void 0:w.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?h:[]).filter(E=>!(!(E instanceof HTMLElement)||E.contains(x.current)||C.panelRef.current&&E.contains(C.panelRef.current))),(k=C.panelRef.current)!=null?k:p.current]});tt(()=>de(),R,z&&!j),ie(w==null?void 0:w.defaultView,"keydown",h=>{h.defaultPrevented||h.key===Te.Escape&&b===0&&(j||(h.preventDefault(),h.stopPropagation(),R()))}),Dt(w,b===0&&!ke,de),i.exports.useEffect(()=>{if(b!==0||!p.current)return;let h=new IntersectionObserver(k=>{for(let E of k)E.boundingClientRect.x===0&&E.boundingClientRect.y===0&&E.boundingClientRect.width===0&&E.boundingClientRect.height===0&&R()});return h.observe(p.current),()=>h.disconnect()},[b,p,R]);let[Me,Ie]=xt(),Oe=i.exports.useMemo(()=>[{dialogState:b,close:R,setTitleId:ce},C],[b,C,R,ce]),fe=i.exports.useMemo(()=>({open:b===0}),[b]),Be={ref:V,id:n,role:"dialog","aria-modal":b===0?!0:void 0,"aria-labelledby":C.titleId,"aria-describedby":Me};return m.createElement(yt,{type:"Dialog",enabled:b===0,element:p,onUpdate:y((h,k,E)=>{k==="Dialog"&&S(h,{[re.Add](){g.current.add(E),c(J=>J+1)},[re.Remove](){g.current.add(E),c(J=>J-1)}})})},m.createElement(ee,{force:!0},m.createElement(te,null,m.createElement(G.Provider,{value:Oe},m.createElement(te.Group,{target:p},m.createElement(ee,{force:!1},m.createElement(Ie,{slot:fe,name:"Dialog.Description"},m.createElement(O,{initialFocus:l,containers:g,features:z?S(Le,{parent:O.features.RestoreFocus,leaf:O.features.All&~O.features.FocusLock}):O.features.None},T({ourProps:Be,theirProps:u,slot:fe,defaultTag:St,features:Nt,visible:b===0,name:"Dialog"})))))))),m.createElement(Z,{features:W.Hidden,ref:x}))}),Rt="div",kt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-overlay-${r}`,...o}=e,[{dialogState:a,close:l}]=U("Dialog.Overlay"),s=P(t),u=y(c=>{if(c.target===c.currentTarget){if(rt(c.currentTarget))return c.preventDefault();c.preventDefault(),c.stopPropagation(),l()}}),d=i.exports.useMemo(()=>({open:a===0}),[a]);return T({ourProps:{ref:s,id:n,"aria-hidden":!0,onClick:u},theirProps:o,slot:d,defaultTag:Rt,name:"Dialog.Overlay"})}),Lt="div",Mt=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-backdrop-${r}`,...o}=e,[{dialogState:a},l]=U("Dialog.Backdrop"),s=P(t);i.exports.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let u=i.exports.useMemo(()=>({open:a===0}),[a]);return m.createElement(ee,{force:!0},m.createElement(te,null,T({ourProps:{ref:s,id:n,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:Lt,name:"Dialog.Backdrop"})))}),It="div",Ot=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-panel-${r}`,...o}=e,[{dialogState:a},l]=U("Dialog.Panel"),s=P(t,l.panelRef),u=i.exports.useMemo(()=>({open:a===0}),[a]),d=y(c=>{c.stopPropagation()});return T({ourProps:{ref:s,id:n,onClick:d},theirProps:o,slot:u,defaultTag:It,name:"Dialog.Panel"})}),Bt="h2",Ht=$(function(e,t){let r=I(),{id:n=`headlessui-dialog-title-${r}`,...o}=e,[{dialogState:a,setTitleId:l}]=U("Dialog.Title"),s=P(t);i.exports.useEffect(()=>(l(n),()=>l(null)),[n,l]);let u=i.exports.useMemo(()=>({open:a===0}),[a]);return T({ourProps:{ref:s,id:n},theirProps:o,slot:u,defaultTag:Bt,name:"Dialog.Title"})}),we=Object.assign(Ct,{Backdrop:Mt,Panel:Ot,Overlay:kt,Title:Ht,Description:bt});function be({type:e="submit",className:t="",processing:r,children:n,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-red-500 active:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition ease-in-out duration-150 ${r&&"opacity-25"} `+t,disabled:r,children:n})}function Ut({children:e,show:t=!1,maxWidth:r="2xl",closeable:n=!0,onClose:o=()=>{}}){const a=()=>{n&&o()},l={sm:"sm:max-w-sm",md:"sm:max-w-md",lg:"sm:max-w-lg",xl:"sm:max-w-xl","2xl":"sm:max-w-2xl"}[r];return v(X,{show:t,as:i.exports.Fragment,leave:"duration-200",children:M(we,{as:"div",id:"modal",className:"fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all",onClose:a,children:[v(X.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:v("div",{className:"absolute inset-0 bg-gray-500/75"})}),v(X.Child,{as:i.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:v(we.Panel,{className:`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${l}`,children:e})})]})})}function jt({type:e="button",className:t="",processing:r,children:n,onClick:o}){return v("button",{type:e,onClick:o,className:`inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-25 transition ease-in-out duration-150 ${r&&"opacity-25"} `+t,disabled:r,children:n})}function qt({className:e}){const[t,r]=i.exports.useState(!1),n=i.exports.useRef(),{data:o,setData:a,delete:l,processing:s,reset:u,errors:d}=Ue({password:""}),c=()=>{r(!0)},f=p=>{p.preventDefault(),l(route("profile.destroy"),{preserveScroll:!0,onSuccess:()=>g(),onError:()=>n.current.focus(),onFinish:()=>u()})},g=()=>{r(!1),u()};return M("section",{className:`space-y-6 ${e}`,children:[M("header",{children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Delete Account"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."})]}),v(be,{onClick:c,children:"Delete Account"}),v(Ut,{show:t,onClose:g,children:M("form",{onSubmit:f,className:"p-6",children:[v("h2",{className:"text-lg font-medium text-gray-900",children:"Are you sure you want to delete your account?"}),v("p",{className:"mt-1 text-sm text-gray-600",children:"Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."}),M("div",{className:"mt-6",children:[v(We,{for:"password",value:"Password",className:"sr-only"}),v(je,{id:"password",type:"password",name:"password",ref:n,value:o.password,handleChange:p=>a("password",p.target.value),className:"mt-1 block w-3/4",isFocused:!0,placeholder:"Password"}),v(_e,{message:d.password,className:"mt-2"})]}),M("div",{className:"mt-6 flex justify-end",children:[v(jt,{onClick:g,children:"Cancel"}),v(be,{className:"ml-3",processing:s,children:"Delete Account"})]})]})})]})}export{qt as default};
