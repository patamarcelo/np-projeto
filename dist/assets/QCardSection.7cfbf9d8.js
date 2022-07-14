import{g as C,U as I,V as Q,W as z,X as O,v as n,Y as L,B as w,z as o,N as _,Z as H,$ as U,a0 as B,r as T,a1 as x,E as W,a2 as j,i as X,a3 as Y}from"./index.97d4510d.js";const Z={xs:8,sm:10,md:14,lg:20,xl:24};var ie=C({name:"QChip",props:{...I,...Q,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:c,emit:t}){const{proxy:{$q:i}}=w(),r=z(e,i),s=O(e,Z),u=n(()=>e.selected===!0||e.icon!==void 0),q=n(()=>e.selected===!0?e.iconSelected||i.iconSet.chip.selected:e.icon),v=n(()=>e.iconRemove||i.iconSet.chip.remove),f=n(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),h=n(()=>{const l=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(f.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(r.value===!0?" q-chip--dark q-dark":"")}),S=n(()=>e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0});function b(l){l.keyCode===13&&g(l)}function g(l){e.disable||(t("update:selected",!e.selected),t("click",l))}function d(l){(l.keyCode===void 0||l.keyCode===13)&&(B(l),e.disable===!1&&(t("update:modelValue",!1),t("remove")))}function k(){const l=[];f.value===!0&&l.push(o("div",{class:"q-focus-helper"})),u.value===!0&&l.push(o(_,{class:"q-chip__icon q-chip__icon--left",name:q.value}));const y=e.label!==void 0?[o("div",{class:"ellipsis"},[e.label])]:void 0;return l.push(o("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},H(c.default,y))),e.iconRight&&l.push(o(_,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&l.push(o(_,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:v.value,...S.value,onClick:d,onKeyup:d})),l}return()=>{if(e.modelValue===!1)return;const l={class:h.value,style:s.value};return f.value===!0&&Object.assign(l,S.value,{onClick:g,onKeyup:b}),L("div",l,k(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[U,e.ripple]])}}});function G(e,c){const t=T(null),i=n(()=>e.disable!==!0?null:o("span",{ref:t,class:"no-outline",tabindex:-1}));function r(s){const u=c.value;s!==void 0&&s.type.indexOf("key")===0?u!==null&&document.activeElement!==u&&u.contains(document.activeElement)===!0&&u.focus():t.value!==null&&(s===void 0||u!==null&&u.contains(s.target)===!0)&&t.value.focus()}return{refocusTargetEl:i,refocusTarget:r}}var J={xs:30,sm:35,md:40,lg:50,xl:60};const ee={...I,...Q,...X,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>e==="tf"||e==="ft"},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},te=["update:modelValue"];function ae(e,c){const{props:t,slots:i,emit:r,proxy:s}=w(),{$q:u}=s,q=z(t,u),v=T(null),{refocusTargetEl:f,refocusTarget:h}=G(t,v),S=O(t,J),b=n(()=>t.val!==void 0&&Array.isArray(t.modelValue)),g=n(()=>{const a=x(t.val);return b.value===!0?t.modelValue.findIndex(m=>x(m)===a):-1}),d=n(()=>b.value===!0?g.value>-1:x(t.modelValue)===x(t.trueValue)),k=n(()=>b.value===!0?g.value===-1:x(t.modelValue)===x(t.falseValue)),l=n(()=>d.value===!1&&k.value===!1),y=n(()=>t.disable===!0?-1:t.tabindex||0),D=n(()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(t.disable===!0?" disabled":"")+(q.value===!0?` q-${e}--dark`:"")+(t.dense===!0?` q-${e}--dense`:"")+(t.leftLabel===!0?" reverse":"")),E=n(()=>{const a=d.value===!0?"truthy":k.value===!0?"falsy":"indet",m=t.color!==void 0&&(t.keepColor===!0||(e==="toggle"?d.value===!0:k.value!==!0))?` text-${t.color}`:"";return`q-${e}__inner relative-position non-selectable q-${e}__inner--${a}${m}`}),N=n(()=>{const a={type:"checkbox"};return t.name!==void 0&&Object.assign(a,{"^checked":d.value===!0?"checked":void 0,name:t.name,value:b.value===!0?t.val:t.trueValue}),a}),A=Y(N),M=n(()=>{const a={tabindex:y.value,role:"checkbox","aria-label":t.label,"aria-checked":l.value===!0?"mixed":d.value===!0?"true":"false"};return t.disable===!0&&(a["aria-disabled"]="true"),a});function V(a){a!==void 0&&(B(a),h(a)),t.disable!==!0&&r("update:modelValue",P(),a)}function P(){if(b.value===!0){if(d.value===!0){const a=t.modelValue.slice();return a.splice(g.value,1),a}return t.modelValue.concat([t.val])}if(d.value===!0){if(t.toggleOrder!=="ft"||t.toggleIndeterminate===!1)return t.falseValue}else if(k.value===!0){if(t.toggleOrder==="ft"||t.toggleIndeterminate===!1)return t.trueValue}else return t.toggleOrder!=="ft"?t.trueValue:t.falseValue;return t.indeterminateValue}function p(a){(a.keyCode===13||a.keyCode===32)&&B(a)}function F(a){(a.keyCode===13||a.keyCode===32)&&V(a)}const K=c(d,l);return Object.assign(s,{toggle:V}),()=>{const a=K();t.disable!==!0&&A(a,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const m=[o("div",{class:E.value,style:S.value},a)];f.value!==null&&m.push(f.value);const R=t.label!==void 0?W(i.default,[t.label]):j(i.default);return R!==void 0&&m.push(o("div",{class:`q-${e}__label q-anchor--skip`},R)),o("div",{ref:v,class:D.value,...M.value,onClick:V,onKeydown:p,onKeyup:F},m)}}const le=o("div",{key:"svg",class:"q-checkbox__bg absolute"},[o("svg",{class:"q-checkbox__svg fit absolute-full",viewBox:"0 0 24 24","aria-hidden":"true"},[o("path",{class:"q-checkbox__truthy",fill:"none",d:"M1.73,12.91 8.1,19.28 22.79,4.59"}),o("path",{class:"q-checkbox__indet",d:"M4,14H20V10H4"})])]);var ue=C({name:"QCheckbox",props:ee,emits:te,setup(e){function c(t,i){const r=n(()=>(t.value===!0?e.checkedIcon:i.value===!0?e.indeterminateIcon:e.uncheckedIcon)||null);return()=>r.value!==null?[o("div",{key:"icon",class:"q-checkbox__icon-container absolute-full flex flex-center no-wrap"},[o(_,{class:"q-checkbox__icon",name:r.value})])]:[le]}return ae("checkbox",c)}});const ne={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},$={xs:2,sm:4,md:8,lg:16,xl:24};var ce=C({name:"QSeparator",props:{...I,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const c=w(),t=z(e,c.proxy.$q),i=n(()=>e.vertical===!0?"vertical":"horizontal"),r=n(()=>` q-separator--${i.value}`),s=n(()=>e.inset!==!1?`${r.value}-${ne[e.inset]}`:""),u=n(()=>`q-separator${r.value}${s.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(t.value===!0?" q-separator--dark":"")),q=n(()=>{const v={};if(e.size!==void 0&&(v[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const f=e.spaced===!0?`${$.md}px`:e.spaced in $?`${$[e.spaced]}px`:e.spaced,h=e.vertical===!0?["Left","Right"]:["Top","Bottom"];v[`margin${h[0]}`]=v[`margin${h[1]}`]=f}return v});return()=>o("hr",{class:u.value,style:q.value,"aria-orientation":i.value})}}),re=C({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:c}){const t=n(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>o(e.tag,{class:t.value},j(c.default))}});export{ie as Q,ue as a,ce as b,re as c};