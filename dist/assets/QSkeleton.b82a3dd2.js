import{g as c,T as q,V as k,v as l,z as s,a1 as b,B as f,aN as I,aO as R,r as y,ag as T,$ as z,a3 as E}from"./index.5b001665.js";const D=["horizontal","vertical","cell","none"];var P=c({name:"QMarkupTable",props:{...q,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,wrapCells:Boolean,separator:{type:String,default:"horizontal",validator:e=>D.includes(e)}},setup(e,{slots:n}){const a=f(),i=k(e,a.proxy.$q),u=l(()=>`q-markup-table q-table__container q-table__card q-table--${e.separator}-separator`+(i.value===!0?" q-table--dark q-table__card--dark q-dark":"")+(e.dense===!0?" q-table--dense":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")+(e.square===!0?" q-table--square":"")+(e.wrapCells===!1?" q-table--no-wrap":""));return()=>s("div",{class:u.value},[s("table",{class:"q-table"},b(n.default))])}}),j=c({name:"QItem",props:{...q,...I,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:a}){const{proxy:{$q:i}}=f(),u=k(e,i),{hasRouterLink:m,hasLink:r,linkProps:_,linkClass:B,linkTag:Q,navigateToRouterLink:S}=R(),d=y(null),v=y(null),g=l(()=>e.clickable===!0||r.value===!0||e.tag==="label"),o=l(()=>e.disable!==!0&&g.value===!0),w=l(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(r.value===!0&&e.active===null?B.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(o.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),x=l(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function C(t){o.value===!0&&(v.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===d.value?v.value.focus():document.activeElement===v.value&&d.value.focus()),m.value===!0&&S(t),a("click",t))}function L(t){if(o.value===!0&&T(t,13)===!0){z(t),t.qKeyEvent=!0;const h=new MouseEvent("click",t);h.qKeyEvent=!0,d.value.dispatchEvent(h)}a("keyup",t)}function $(){const t=E(n.default,[]);return o.value===!0&&t.unshift(s("div",{class:"q-focus-helper",tabindex:-1,ref:v})),t}return()=>{const t={ref:d,class:w.value,style:x.value,onClick:C,onKeyup:L};return o.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,_.value)):g.value===!0&&(t["aria-disabled"]="true"),s(Q.value,t,$())}}}),M=c({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const a=l(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>s("div",{class:a.value},b(n.default))}}),F=c({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:n}){const a=l(()=>parseInt(e.lines,10)),i=l(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(a.value===1?" ellipsis":"")),u=l(()=>e.lines!==void 0&&a.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":a.value}:null);return()=>s("div",{style:u.value,class:i.value},b(n.default))}});const K=["text","rect","circle","QBtn","QBadge","QChip","QToolbar","QCheckbox","QRadio","QToggle","QSlider","QRange","QInput","QAvatar"],N=["wave","pulse","pulse-x","pulse-y","fade","blink","none"];var O=c({name:"QSkeleton",props:{...q,tag:{type:String,default:"div"},type:{type:String,validator:e=>K.includes(e),default:"rect"},animation:{type:String,validator:e=>N.includes(e),default:"wave"},animationSpeed:{type:[String,Number],default:1500},square:Boolean,bordered:Boolean,size:String,width:String,height:String},setup(e,{slots:n}){const a=f(),i=k(e,a.proxy.$q),u=l(()=>{const r=e.size!==void 0?[e.size,e.size]:[e.width,e.height];return{"--q-skeleton-speed":`${e.animationSpeed}ms`,width:r[0],height:r[1]}}),m=l(()=>`q-skeleton q-skeleton--${i.value===!0?"dark":"light"} q-skeleton--type-${e.type}`+(e.animation!=="none"?` q-skeleton--anim q-skeleton--anim-${e.animation}`:"")+(e.square===!0?" q-skeleton--square":"")+(e.bordered===!0?" q-skeleton--bordered":""));return()=>s(e.tag,{class:m.value,style:u.value},b(n.default))}});export{P as Q,M as a,F as b,j as c,O as d};
