!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fd160936-e60c-45e7-a0f7-4f20cb6b36ee",e._sentryDebugIdIdentifier="sentry-dbid-fd160936-e60c-45e7-a0f7-4f20cb6b36ee")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3849],{99008:function(e,t,r){r.d(t,{G:function(){return d}});var l=r(53921),a=r(72243),o=r(88160),n=r(46763),s=r(57437),i=(0,a.Gp)((e,t)=>{var r;let{as:a,className:i,children:d,...u}=e,c=(0,o.gy)(t),{slots:f,classNames:b}=(0,l.R)(),v=(0,n.W)(null==b?void 0:b.body,i);return(0,s.jsx)(a||"div",{ref:c,className:null==(r=f.body)?void 0:r.call(f,{class:v}),...u,children:d})});i.displayName="NextUI.CardBody";var d=i},3932:function(e,t,r){r.d(t,{w:function(){return d}});var l=r(53921),a=r(74101),o=r(72243),n=r(78974),s=r(57437),i=(0,o.Gp)((e,t)=>{let{children:r,context:o,Component:i,isPressable:d,disableAnimation:u,disableRipple:c,getCardProps:f,getRippleProps:b}=(0,a.n)({...e,ref:t});return(0,s.jsxs)(i,{...f(),children:[(0,s.jsx)(l.k,{value:o,children:r}),d&&!u&&!c&&(0,s.jsx)(n.L,{...b()})]})});i.displayName="NextUI.Card";var d=i},74101:function(e,t,r){r.d(t,{n:function(){return y}});var l=r(28708),a=r(18373),o=(0,l.tv)({slots:{base:["flex","flex-col","relative","overflow-hidden","h-auto","outline-none","text-foreground","box-border","bg-content1",...a.Dh],header:["flex","p-3","z-10","w-full","justify-start","items-center","shrink-0","overflow-inherit","color-inherit","subpixel-antialiased"],body:["relative","flex","flex-1","w-full","p-3","flex-auto","flex-col","place-content-inherit","align-items-inherit","h-auto","break-words","text-left","overflow-y-auto","subpixel-antialiased"],footer:["p-3","h-auto","flex","w-full","items-center","overflow-hidden","color-inherit","subpixel-antialiased"]},variants:{shadow:{none:{base:"shadow-none"},sm:{base:"shadow-small"},md:{base:"shadow-medium"},lg:{base:"shadow-large"}},radius:{none:{base:"rounded-none",header:"rounded-none",footer:"rounded-none"},sm:{base:"rounded-small",header:"rounded-t-small",footer:"rounded-b-small"},md:{base:"rounded-medium",header:"rounded-t-medium",footer:"rounded-b-medium"},lg:{base:"rounded-large",header:"rounded-t-large",footer:"rounded-b-large"}},fullWidth:{true:{base:"w-full"}},isHoverable:{true:{base:"data-[hover=true]:bg-content2 dark:data-[hover=true]:bg-content2"}},isPressable:{true:{base:"cursor-pointer"}},isBlurred:{true:{base:["bg-background/80","dark:bg-background/20","backdrop-blur-md","backdrop-saturate-150"]}},isFooterBlurred:{true:{footer:["bg-background/10","backdrop-blur","backdrop-saturate-150"]}},isDisabled:{true:{base:"opacity-disabled cursor-not-allowed"}},disableAnimation:{true:"",false:{base:"transition-transform-background motion-reduce:transition-none"}}},compoundVariants:[{isPressable:!0,class:"data-[pressed=true]:scale-[0.97] tap-highlight-transparent"}],defaultVariants:{radius:"lg",shadow:"md",fullWidth:!1,isHoverable:!1,isPressable:!1,isDisabled:!1,isFooterBlurred:!1}}),n=r(2265),s=r(62319),i=r(5376),d=r(73709),u=r(11323),c=r(6422),f=r(2646),b=r(72243),v=r(46763),p=r(68658),m=r(97765),h=r(27246),g=r(88160),x=r(62577);function y(e){var t,r,l,a;let y=(0,f.w)(),[w,k]=(0,b.oe)(e,o.variantKeys),{ref:P,as:C,children:_,onClick:E,onPress:B,autoFocus:S,className:j,classNames:D,allowTextSelectionOnPress:z=!0,...N}=w,H=(0,g.gy)(P),T=C||(e.isPressable?"button":"div"),M="string"==typeof T,I=null!=(r=null!=(t=e.disableAnimation)?t:null==y?void 0:y.disableAnimation)&&r,R=null!=(a=null!=(l=e.disableRipple)?l:null==y?void 0:y.disableRipple)&&a,A=(0,v.W)(null==D?void 0:D.base,j),{onClick:$,onClear:W,ripples:X}=(0,x.i)(),O=e=>{I||R||!H.current||$(e)},{buttonProps:F,isPressed:L}=(0,c.j)({onPress:B,elementType:C,isDisabled:!e.isPressable,onClick:(0,s.t)(E,O),allowTextSelectionOnPress:z,...N},H),{hoverProps:G,isHovered:K}=(0,u.X)({isDisabled:!e.isHoverable,...N}),{isFocusVisible:V,isFocused:U,focusProps:J}=(0,d.F)({autoFocus:S}),Y=(0,n.useMemo)(()=>o({...k,disableAnimation:I}),[(0,p.Xx)(k),I]),Z=(0,n.useMemo)(()=>({slots:Y,classNames:D,disableAnimation:I,isDisabled:e.isDisabled,isFooterBlurred:e.isFooterBlurred,fullWidth:e.fullWidth}),[Y,D,e.isDisabled,e.isFooterBlurred,I,e.fullWidth]),q=(0,n.useCallback)(function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:H,className:Y.base({class:A}),tabIndex:e.isPressable?0:-1,"data-hover":(0,m.PB)(K),"data-pressed":(0,m.PB)(L),"data-focus":(0,m.PB)(U),"data-focus-visible":(0,m.PB)(V),"data-disabled":(0,m.PB)(e.isDisabled),...(0,i.d)(e.isPressable?{...F,...J,role:"button"}:{},e.isHoverable?G:{},(0,h.z)(N,{enabled:M}),(0,h.z)(t))}},[H,Y,A,M,e.isPressable,e.isHoverable,e.isDisabled,K,L,V,F,J,G,N]),Q=(0,n.useCallback)(()=>({ripples:X,onClear:W}),[X,W]);return{context:Z,domRef:H,Component:T,classNames:D,children:_,isHovered:K,isPressed:L,disableAnimation:I,isPressable:e.isPressable,isHoverable:e.isHoverable,disableRipple:R,handleClick:O,isFocusVisible:V,getCardProps:q,getRippleProps:Q}}},53921:function(e,t,r){r.d(t,{R:function(){return a},k:function(){return l}});var[l,a]=(0,r(40280).k)({name:"CardContext",strict:!0,errorMessage:"useCardContext: `context` is undefined. Seems you forgot to wrap component within <Card />"})},63601:function(e,t,r){r.d(t,{o:function(){return s}});var l=r(85072),a=r(72243),o=r(57437),n=(0,a.Gp)((e,t)=>{let{Component:r,children:a,getBaseProps:n}=(0,l.p)({...e,ref:t});return(0,o.jsx)(r,{...n(),children:a})});n.displayName="NextUI.ScrollShadow";var s=n},85072:function(e,t,r){r.d(t,{p:function(){return i}});var l=r(72243),a=(0,r(28708).tv)({base:[],variants:{orientation:{vertical:["overflow-y-auto","data-[top-scroll=true]:[mask-image:linear-gradient(0deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[bottom-scroll=true]:[mask-image:linear-gradient(180deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[top-bottom-scroll=true]:[mask-image:linear-gradient(#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"],horizontal:["overflow-x-auto","data-[left-scroll=true]:[mask-image:linear-gradient(270deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[right-scroll=true]:[mask-image:linear-gradient(90deg,#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]","data-[left-right-scroll=true]:[mask-image:linear-gradient(to_right,#000,#000,transparent_0,#000_var(--scroll-shadow-size),#000_calc(100%_-_var(--scroll-shadow-size)),transparent)]"]},hideScrollBar:{true:"scrollbar-hide",false:""}},defaultVariants:{orientation:"vertical",hideScrollBar:!1}}),o=r(88160),n=r(68658),s=r(2265);function i(e){var t;let[r,i]=(0,l.oe)(e,a.variantKeys),{ref:d,as:u,children:c,className:f,style:b,size:v=40,offset:p=0,visibility:m="auto",isEnabled:h=!0,onVisibilityChange:g,...x}=r,y=(0,o.gy)(d);!function(e={}){let{domRef:t,isEnabled:r=!0,overflowCheck:l="vertical",visibility:a="auto",offset:o=0,onVisibilityChange:i,updateDeps:d=[]}=e,u=(0,s.useRef)(a);(0,s.useEffect)(()=>{let e=null==t?void 0:t.current;if(!e||!r)return;let s=(t,r,l,o,s)=>{if("auto"===a){let t=`${o}${(0,n.kC)(s)}Scroll`;r&&l?(e.dataset[t]="true",e.removeAttribute(`data-${o}-scroll`),e.removeAttribute(`data-${s}-scroll`)):(e.dataset[`${o}Scroll`]=r.toString(),e.dataset[`${s}Scroll`]=l.toString(),e.removeAttribute(`data-${o}-${s}-scroll`))}else{let e=r&&l?"both":r?o:l?s:"none";e!==u.current&&(null==i||i(e),u.current=e)}},d=()=>{for(let{type:t,prefix:r,suffix:a}of[{type:"vertical",prefix:"top",suffix:"bottom"},{type:"horizontal",prefix:"left",suffix:"right"}])if(l===t||"both"===l){let l="vertical"===t?e.scrollTop>o:e.scrollLeft>o,n="vertical"===t?e.scrollTop+e.clientHeight+o<e.scrollHeight:e.scrollLeft+e.clientWidth+o<e.scrollWidth;s(t,l,n,r,a)}},c=()=>{["top","bottom","top-bottom","left","right","left-right"].forEach(t=>{e.removeAttribute(`data-${t}-scroll`)})};return d(),e.addEventListener("scroll",d),"auto"!==a&&(c(),"both"===a?(e.dataset.topBottomScroll=String("vertical"===l),e.dataset.leftRightScroll=String("horizontal"===l)):(e.dataset.topBottomScroll="false",e.dataset.leftRightScroll="false",["top","bottom","left","right"].forEach(t=>{e.dataset[`${t}Scroll`]=String(a===t)}))),()=>{e.removeEventListener("scroll",d),c()}},[...d,r,a,l,i,t])}({domRef:y,offset:p,visibility:m,isEnabled:h,onVisibilityChange:g,updateDeps:[c],overflowCheck:null!=(t=e.orientation)?t:"vertical"});let w=(0,s.useMemo)(()=>a({...i,className:f}),[(0,n.Xx)(i),f]);return{Component:u||"div",styles:w,domRef:y,children:c,getBaseProps:function(){var t;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{ref:y,className:w,"data-orientation":null!=(t=e.orientation)?t:"vertical",style:{"--scroll-shadow-size":"".concat(v,"px"),...b,...r.style},...x,...r}}}}},40962:function(e,t,r){r.d(t,{e:function(){return h}});var l=r(41385),a=r(72243),o=r(30332),n=r(50278),s=r(54705),i=r(62833),d=r(53458),u=r(1701),c=r(20411),f=r(2265),b=r(455),v=r(5376),p=r(57437),m=(0,a.Gp)((e,t)=>{let r;let{Component:a,children:m,content:h,isOpen:g,portalContainer:x,placement:y,disableAnimation:w,motionProps:k,getTriggerProps:P,getTooltipProps:C,getTooltipContentProps:_}=(0,l.l)({...e,ref:t});try{let e=f.Children.count(m);if(1!==e)throw Error();r=(0,f.isValidElement)(m)?(0,f.cloneElement)(m,P(m.props,m.ref)):(0,p.jsx)("p",{...P(),children:m})}catch(e){r=(0,p.jsx)("span",{}),(0,c.Z)("Tooltip must have only one child node. Please, check your code.")}let{ref:E,id:B,style:S,...j}=C(),D=(0,p.jsx)("div",{ref:E,id:B,style:S,children:(0,p.jsx)(n.X,{features:s.H,children:(0,p.jsx)(i.m.div,{animate:"enter",exit:"exit",initial:"exit",variants:u.y7.scaleSpring,...(0,v.d)(k,j),style:{...(0,b.VS)(y)},children:(0,p.jsx)(a,{..._(),children:h})})})});return(0,p.jsxs)(p.Fragment,{children:[r,w&&g?(0,p.jsx)(o.Xj,{portalContainer:x,children:(0,p.jsx)("div",{ref:E,id:B,style:S,...j,children:(0,p.jsx)(a,{..._(),children:h})})}):(0,p.jsx)(d.M,{children:g?(0,p.jsx)(o.Xj,{portalContainer:x,children:D}):null})]})});m.displayName="NextUI.Tooltip";var h=m},41385:function(e,t,r){r.d(t,{l:function(){return S}});var l=r(2265),a=r(64508);let o={},n=0,s=!1,i=null,d=null;var u=r(5376),c=r(45246),f=r(11323),b=r(40641),v=r(79246),p=r(94508),m=r(8465),h=r(37879),g=r(2646),x=r(72243),y=r(4267),w=r(68658),k=r(97765),P=r(46763),C=r(20427),_=r(88160),E=r(455),B=r(41681);function S(e){var t,r;let S=(0,g.w)(),[j,D]=(0,x.oe)(e,y.v.variantKeys),{ref:z,as:N,isOpen:H,content:T,children:M,defaultOpen:I,onOpenChange:R,isDisabled:A,trigger:$,shouldFlip:W=!0,containerPadding:X=12,placement:O="top",delay:F=0,closeDelay:L=500,showArrow:G=!1,offset:K=7,crossOffset:V=0,isDismissable:U,shouldCloseOnBlur:J=!0,portalContainer:Y,isKeyboardDismissDisabled:Z=!1,updatePositionDeps:q=[],shouldCloseOnInteractOutside:Q,className:ee,onClose:et,motionProps:er,classNames:el,...ea}=j,eo=null!=(r=null!=(t=null==e?void 0:e.disableAnimation)?t:null==S?void 0:S.disableAnimation)&&r,en=function(e={}){let{delay:t=1500,closeDelay:r=500}=e,{isOpen:u,open:c,close:f}=(0,a.d)(e),b=(0,l.useMemo)(()=>`${++n}`,[]),v=(0,l.useRef)(),p=()=>{o[b]=g},m=()=>{for(let e in o)e!==b&&(o[e](!0),delete o[e])},h=()=>{clearTimeout(v.current),v.current=null,m(),p(),s=!0,c(),i&&(clearTimeout(i),i=null),d&&(clearTimeout(d),d=null)},g=e=>{e||r<=0?(clearTimeout(v.current),v.current=null,f()):v.current||(v.current=setTimeout(()=>{v.current=null,f()},r)),i&&(clearTimeout(i),i=null),s&&(d&&clearTimeout(d),d=setTimeout(()=>{delete o[b],d=null,s=!1},Math.max(500,r)))},x=()=>{m(),p(),u||i||s?u||h():i=setTimeout(()=>{i=null,s=!0,h()},t)};return(0,l.useEffect)(()=>()=>{clearTimeout(v.current),o[b]&&delete o[b]},[b]),{isOpen:u,open:e=>{e||!(t>0)||v.current?h():x()},close:g}}({delay:F,closeDelay:L,isDisabled:A,defaultOpen:I,isOpen:H,onOpenChange:e=>{null==R||R(e),e||null==et||et()}}),es=(0,l.useRef)(null),ei=(0,l.useRef)(null),ed=(0,l.useId)(),eu=en.isOpen&&!A;(0,l.useImperativeHandle)(z,()=>(0,_.fg)(ei));let{triggerProps:ec,tooltipProps:ef}=function(e,t,r){let{isDisabled:a,trigger:o}=e,n=(0,b.Me)(),s=(0,l.useRef)(!1),i=(0,l.useRef)(!1),d=()=>{(s.current||i.current)&&t.open(i.current)},p=e=>{s.current||i.current||t.close(e)};(0,l.useEffect)(()=>{let e=e=>{r&&r.current&&"Escape"===e.key&&(e.stopPropagation(),t.close(!0))};if(t.isOpen)return document.addEventListener("keydown",e,!0),()=>{document.removeEventListener("keydown",e,!0)}},[r,t]);let m=()=>{i.current=!1,s.current=!1,p(!0)},{hoverProps:h}=(0,f.X)({isDisabled:a,onHoverStart:()=>{"focus"!==o&&("pointer"===(0,c.Jz)()?s.current=!0:s.current=!1,d())},onHoverEnd:()=>{"focus"!==o&&(i.current=!1,s.current=!1,p())}}),{focusableProps:g}=(0,v.k)({isDisabled:a,onFocus:()=>{(0,c.E)()&&(i.current=!0,d())},onBlur:()=>{i.current=!1,s.current=!1,p(!0)}},r);return{triggerProps:{"aria-describedby":t.isOpen?n:void 0,...(0,u.d)(g,h,{onPointerDown:m,onKeyDown:m})},tooltipProps:{id:n}}}({isDisabled:A,trigger:$},en,es),{tooltipProps:eb}=function(e,t){let r=(0,p.z)(e,{labelable:!0}),{hoverProps:l}=(0,f.X)({onHoverStart:()=>null==t?void 0:t.open(!0),onHoverEnd:()=>null==t?void 0:t.close()});return{tooltipProps:(0,u.d)(r,l,{role:"tooltip"})}}({isOpen:eu,...(0,u.d)(j,ef)},en),{overlayProps:ev,placement:ep,updatePosition:em}=(0,m.t)({isOpen:eu,targetRef:es,placement:(0,E.Yx)(O),overlayRef:ei,offset:G?K+3:K,crossOffset:V,shouldFlip:W,containerPadding:X});(0,B.G)(()=>{q.length&&em()},q);let{overlayProps:eh}=(0,h.I)({isOpen:eu,onClose:en.close,isDismissable:U,shouldCloseOnBlur:J,isKeyboardDismissDisabled:Z,shouldCloseOnInteractOutside:Q},ei),eg=(0,l.useMemo)(()=>{var t,r,l;return(0,y.v)({...D,disableAnimation:eo,radius:null!=(t=null==e?void 0:e.radius)?t:"md",size:null!=(r=null==e?void 0:e.size)?r:"md",shadow:null!=(l=null==e?void 0:e.shadow)?l:"sm"})},[(0,w.Xx)(D),eo,null==e?void 0:e.radius,null==e?void 0:e.size,null==e?void 0:e.shadow]),ex=(0,l.useCallback)(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...(0,u.d)(ec,e),ref:(0,C.l)(t,es),"aria-describedby":eu?ed:void 0}},[ec,eu,ed,en]),ey=(0,l.useCallback)(()=>({ref:ei,"data-slot":"base","data-open":(0,k.PB)(eu),"data-arrow":(0,k.PB)(G),"data-disabled":(0,k.PB)(A),"data-placement":(0,E.sK)(ep,O),...(0,u.d)(eb,eh,ea),style:(0,u.d)(ev.style,ea.style,j.style),className:eg.base({class:null==el?void 0:el.base}),id:ed}),[eg,eu,G,A,ep,O,eb,eh,ea,ev,j,ed]),ew=(0,l.useCallback)(()=>({"data-slot":"content","data-open":(0,k.PB)(eu),"data-arrow":(0,k.PB)(G),"data-disabled":(0,k.PB)(A),"data-placement":(0,E.sK)(ep,O),className:eg.content({class:(0,P.W)(null==el?void 0:el.content,ee)})}),[eg,eu,G,A,ep,O,el]);return{Component:N||"div",content:T,children:M,isOpen:eu,triggerRef:es,showArrow:G,portalContainer:Y,placement:O,disableAnimation:eo,isDisabled:A,motionProps:er,getTooltipContentProps:ew,getTriggerProps:ex,getTooltipProps:ey}}},30332:function(e,t,r){r.d(t,{N3:function(){return d},Xj:function(){return u}});var l=r(2265),a=r(54887),o=r(87365);let n=l.createContext(null);function s(e){let{children:t}=e,r=(0,l.useContext)(n),[a,o]=(0,l.useState)(0),s=(0,l.useMemo)(()=>({parent:r,modalCount:a,addModal(){o(e=>e+1),r&&r.addModal()},removeModal(){o(e=>e-1),r&&r.removeModal()}}),[r,a]);return l.createElement(n.Provider,{value:s},t)}function i(e){let t;let{modalProviderProps:r}={modalProviderProps:{"aria-hidden":!!(t=(0,l.useContext)(n))&&t.modalCount>0||null}};return l.createElement("div",{"data-overlay-container":!0,...e,...r})}function d(e){return l.createElement(s,null,l.createElement(i,e))}function u(e){let t=(0,o.Av)(),{portalContainer:r=t?null:document.body,...n}=e;if(l.useEffect(()=>{if(null==r?void 0:r.closest("[data-overlay-container]"))throw Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.")},[r]),!r)return null;let s=l.createElement(d,n);return a.createPortal(s,r)}}}]);