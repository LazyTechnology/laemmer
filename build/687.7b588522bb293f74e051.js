(self.webpackChunkpayload_nextjs_server=self.webpackChunkpayload_nextjs_server||[]).push([[687],{4983:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});var a=n(67294),o=n(28630),l=n(77329),i=n(40684);n(33427);const r=e=>{const{generatePreviewURL:t,data:n}=e,[r,s]=(0,a.useState)(void 0),c=(0,i.bU)(),{token:u}=(0,o.a)();return(0,a.useEffect)((()=>{if(t&&"function"==typeof t){(async()=>{const e=await t(n,{locale:c,token:u});s(e)})()}}),[t,c,u,n]),r?a.createElement(l.Z,{el:"anchor",className:"preview-btn",buttonStyle:"secondary",url:r,newTab:!0},"Preview"):null}},38398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var a=n(67294),o=n(3902),l=n(39006);const i=e=>{const{useAsTitle:t,title:n,data:i,fallback:r="[untitled]"}=e,s=(0,o.Z)(t);let c=i&&i[t];c||(c=s),c||(c=null==i?void 0:i.id),c||(c=r),c=n||c;return c===(null==i?void 0:i.id)?a.createElement(l.Z,{id:null==i?void 0:i.id}):a.createElement("span",{className:"render-title"},c)}},50854:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var a=n(67294),o=n(82949),l=n.n(o),i=n(28630),r=n(64012),s=n(39599),c=n(77329);n(22300);const u=()=>{const e=(0,r.useFormModified)(),{user:t}=(0,i.a)();return a.createElement(l(),{when:Boolean(e&&t)},(({onConfirm:e,onCancel:t})=>a.createElement("div",{className:"leave-without-saving"},a.createElement(s.Z,null,a.createElement("h1",null,"Leave without saving"),a.createElement("p",null,"Your changes have not been saved. If you leave now, you will lose your changes."),a.createElement(c.Z,{onClick:t,buttonStyle:"secondary"},"Stay on this page"),a.createElement(c.Z,{onClick:e},"Leave anyway")))))}},35687:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>U});var a=n(67294),o=n(5977),l=n(9980),i=n(28630),r=n(75091),s=n(47489),c=n(40684),u=n(73727),d=n(49546),m=n(28584),p=n(93313),f=n(4983),v=n(46268),h=n(61439),y=n(19410),E=n(72570),b=n(38398),_=n(50854),g=n(10448),w=n(73588),C=n(40829),k=n(9684);n(30086);const Z="account",A=e=>{var t,n,o,i;const{collection:r,data:s,permissions:c,hasSavePermission:A,apiURL:N,initialState:S,isLoading:P,action:$}=e,{slug:U,fields:L,admin:{useAsTitle:O,preview:F},timestamps:x,auth:R}=r,{admin:{dateFormat:I},routes:{admin:M}}=(0,l.Z)(),j=[Z].filter(Boolean).join(" ");return a.createElement("div",{className:j},P&&a.createElement(C.Z,null),!P&&a.createElement(k.R.Provider,{value:"update"},a.createElement(p.Z,{className:`${Z}__form`,method:"put",action:$,initialState:S,disabled:!A},a.createElement("div",{className:`${Z}__main`},a.createElement(g.Z,{title:"Account",description:"Account of current user",keywords:"Account, Dashboard, Payload, CMS"}),a.createElement(m.Z,null),!((null===(t=r.versions)||void 0===t?void 0:t.drafts)&&(null===(o=null===(n=r.versions)||void 0===n?void 0:n.drafts)||void 0===o?void 0:o.autosave))&&a.createElement(_.Z,null),a.createElement("div",{className:`${Z}__edit`},a.createElement("header",{className:`${Z}__header`},a.createElement("h1",null,a.createElement(b.Z,{data:s,useAsTitle:O,fallback:"[Untitled]"}))),a.createElement(w.Z,{useAPIKey:R.useAPIKey,collection:r,email:null==s?void 0:s.email,operation:"update"}),a.createElement(h.Z,{permissions:c.fields,readOnly:!A,filter:e=>{var t;return"sidebar"!==(null===(t=null==e?void 0:e.admin)||void 0===t?void 0:t.position)},fieldTypes:E.Z,fieldSchema:L}))),a.createElement("div",{className:`${Z}__sidebar-wrap`},a.createElement("div",{className:`${Z}__sidebar`},a.createElement("div",{className:`${Z}__sidebar-sticky-wrap`},a.createElement("ul",{className:`${Z}__collection-actions`},(null===(i=null==c?void 0:c.create)||void 0===i?void 0:i.permission)&&a.createElement(a.Fragment,null,a.createElement("li",null,a.createElement(u.Link,{to:`${M}/collections/${U}/create`},"Create New")))),a.createElement("div",{className:`${Z}__document-actions${F?` ${Z}__document-actions--with-preview`:""}`},a.createElement(f.Z,{generatePreviewURL:F,data:s}),A&&a.createElement(v.Z,null,"Save")),a.createElement("div",{className:`${Z}__sidebar-fields`},a.createElement(h.Z,{permissions:c.fields,readOnly:!A,filter:e=>{var t;return"sidebar"===(null===(t=null==e?void 0:e.admin)||void 0===t?void 0:t.position)},fieldTypes:E.Z,fieldSchema:L})),a.createElement("ul",{className:`${Z}__meta`},a.createElement("li",{className:`${Z}__api-url`},a.createElement("span",{className:`${Z}__label`},"API URL"," ",a.createElement(y.Z,{value:N})),a.createElement("a",{href:N,target:"_blank",rel:"noopener noreferrer"},N)),a.createElement("li",null,a.createElement("div",{className:`${Z}__label`},"ID"),a.createElement("div",null,null==s?void 0:s.id)),x&&a.createElement(a.Fragment,null,s.updatedAt&&a.createElement("li",null,a.createElement("div",{className:`${Z}__label`},"Last Modified"),a.createElement("div",null,(0,d.default)(new Date(s.updatedAt),I))),s.createdAt&&a.createElement("li",null,a.createElement("div",{className:`${Z}__label`},"Created"),a.createElement("div",null,(0,d.default)(new Date(s.createdAt),I)))))))))))};var N=n(19826),S=n(2143),P=n(60161),$=n(45074);const U=()=>{var e,t;const{state:n}=(0,o.TH)(),u=(0,c.bU)(),{setStepNav:d}=(0,r.FP)(),{user:m,permissions:p}=(0,i.a)(),[f,v]=(0,a.useState)({}),{id:h}=(0,$.x5)(),{serverURL:y,routes:{api:E},collections:b,admin:{user:_,components:{views:{Account:g}={Account:void 0}}={}}={user:"users"}}=(0,l.Z)(),w=b.find((e=>e.slug===m.collection)),{fields:C}=w,k=null===(e=null==p?void 0:p.collections)||void 0===e?void 0:e[_],[{data:Z,isLoading:U}]=(0,s.Z)(`${y}${E}/${null==w?void 0:w.slug}/${null==m?void 0:m.id}?depth=0`,{initialParams:{"fallback-locale":"null"}}),L=null===(t=null==k?void 0:k.update)||void 0===t?void 0:t.permission,O=(null==n?void 0:n.data)||Z,F=`${y}${E}/${m.collection}/${null==Z?void 0:Z.id}`,x=`${y}${E}/${m.collection}/${null==Z?void 0:Z.id}?locale=${u}&depth=0`;return(0,a.useEffect)((()=>{d([{label:"Account"}])}),[d]),(0,a.useEffect)((()=>{(async()=>{const e=await(0,N.Z)({fieldSchema:C,data:O,operation:"update",id:h,user:m,locale:u});v(e)})()}),[O,C,h,m,u]),a.createElement(P.S,{allow:!0},a.createElement(S.Z,{DefaultComponent:A,CustomComponent:g,componentProps:{action:x,data:Z,collection:w,permissions:k,hasSavePermission:L,initialState:f,apiURL:F,isLoading:U}}))}},73588:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var a=n(67294),o=n(39249),l=n(9980),i=n(28571),r=n(76067),s=n(75212),c=n(77329),u=n(74007),d=n(64012),m=n(44586),p=n(48170),f=n(953),v=n(19410),h=n(35193),y=n(71851),E=n(39599);n(25891);const b=e=>{const{setKey:t,highlightField:n}=e,{toggle:l}=(0,y.useModal)(),i="generate-confirmation";return a.createElement(a.Fragment,null,a.createElement(c.Z,{size:"small",buttonStyle:"secondary",onClick:()=>{l(i)}},"Generate new API key"),a.createElement(y.Modal,{slug:i,className:"generate-confirmation"},a.createElement(E.Z,null,a.createElement("h1",null,"Confirm Generation"),a.createElement("p",null,"Generating a new API key will"," ",a.createElement("strong",null,"invalidate")," ","the previous key."," ","Are you sure you wish to continue?"),a.createElement(c.Z,{buttonStyle:"secondary",type:"button",onClick:()=>{l(i)}},"Cancel"),a.createElement(c.Z,{onClick:()=>{t(),l(i),o.Am.success("New API Key Generated.",{autoClose:3e3}),n(!0)}},"Generate"))))},_="apiKey",g=e=>(0,h.text)(e,{minLength:24,maxLength:48,data:{},siblingData:{}}),w=()=>{const[e,t]=(0,a.useState)(null),[n,o]=(0,a.useState)(!1),{getField:l}=(0,d.useWatchForm)(),i=l(_),r=null==i?void 0:i.value,s=(0,a.useMemo)((()=>a.createElement("div",{className:"api-key__label"},a.createElement("span",null,"API Key"),a.createElement(v.Z,{value:r}))),[r]),c=(0,p.Z)({path:"apiKey",validate:g}),{value:u,setValue:h}=c;(0,a.useEffect)((()=>{t((0,m.Z)())}),[]),(0,a.useEffect)((()=>{r||h(e)}),[r,h,e]),(0,a.useEffect)((()=>{n&&setTimeout((()=>{o(!1)}),1e4)}),[n]);const y=["field-type","api-key","read-only"].filter(Boolean).join(" ");return a.createElement(a.Fragment,null,a.createElement("div",{className:y},a.createElement(f.Z,{htmlFor:_,label:s}),a.createElement("input",{value:u||"",className:n?"highlight":void 0,disabled:!0,type:"text",id:"apiKey",name:"apiKey"})),a.createElement(b,{setKey:()=>h((0,m.Z)()),highlightField:()=>{n&&o(!1),setTimeout((()=>{o(!0)}),1)}}))};n(32554);const C="auth-fields",k=e=>{const{useAPIKey:t,requirePassword:n,verify:m,collection:{slug:p},email:f,operation:v}=e,[h,y]=(0,a.useState)(n),{getField:E}=(0,d.useWatchForm)(),b=(0,d.useFormModified)(),_=E("enableAPIKey");(0,a.useEffect)((()=>{b||y(!1)}),[b]);const{serverURL:g,routes:{api:k}}=(0,l.Z)(),Z=(0,a.useCallback)((async()=>{const e=`${g}${k}/${p}/unlock`;200===(await fetch(e,{headers:{"Content-Type":"application/json"},body:JSON.stringify({email:f}),method:"post"})).status?o.Am.success("Successfully unlocked",{autoClose:3e3}):o.Am.error("Successfully unlocked")}),[g,k,p,f]);return a.createElement("div",{className:C},a.createElement(i.Z,{required:!0,name:"email",label:"Email",admin:{autoComplete:"email"}}),(h||n)&&a.createElement("div",{className:"auth-fields__changing-password"},a.createElement(r.Z,{autoComplete:"off",required:!0,name:"password",label:"New Password"}),a.createElement(u.Z,null),!n&&a.createElement(c.Z,{size:"small",buttonStyle:"secondary",onClick:()=>y(!1)},"Cancel")),!h&&!n&&a.createElement(c.Z,{size:"small",buttonStyle:"secondary",onClick:()=>y(!0)},"Change Password"),"update"===v&&a.createElement(c.Z,{size:"small",buttonStyle:"secondary",onClick:()=>Z()},"Force Unlock"),t&&a.createElement("div",{className:"auth-fields__api-key"},a.createElement(s.Z,{label:"Enable API Key",name:"enableAPIKey"}),(null==_?void 0:_.value)&&a.createElement(w,null)),m&&a.createElement(s.Z,{label:"Verified",name:"_verified"}))}},3902:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(64012);const o=e=>{const{getField:t}=(0,a.useWatchForm)(),n=t(e);return null==n?void 0:n.value}},82949:(e,t,n)=>{e.exports=function(e){var t={};function n(a){if(t[a])return t[a].exports;var o=t[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n(1),r=(a=i)&&a.__esModule?a:{default:a},s=n(2);var c={action:null,isActive:!1,nextLocation:null},u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n._prevUserAction="",n._isMounted=!0,n.block=n.block.bind(n),n.onBeforeUnload=n.onBeforeUnload.bind(n),n.onCancel=n.onCancel.bind(n),n.onConfirm=n.onConfirm.bind(n),n.when=n.when.bind(n),n.state=o({},c,{unblock:function(){}}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),l(t,[{key:"componentDidMount",value:function(){this.props.disableNative||window.addEventListener("beforeunload",this.onBeforeUnload),this.setState({unblock:this.props.history.block(this.block)})}},{key:"componentDidUpdate",value:function(e,t){"CANCEL"===this._prevUserAction&&"function"==typeof this.props.afterCancel?this.props.afterCancel():"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&this.props.afterConfirm(),this._prevUserAction=""}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,"CONFIRM"===this._prevUserAction&&"function"==typeof this.props.afterConfirm&&(this._prevUserAction="",this.props.afterConfirm()),this.state.unblock(),this.props.disableNative||window.removeEventListener("beforeunload",this.onBeforeUnload)}},{key:"block",value:function(e,t){var n=this.when(e,t);return n&&this.setState({action:t,nextLocation:e,isActive:!0}),!n}},{key:"navigateToNextLocation",value:function(e){var t=this,n=this.state,a=n.action,l=n.nextLocation;a={POP:this.props.allowGoBack?"goBack":"push",PUSH:"push",REPLACE:"replace"}[a||"PUSH"],l||(l={pathname:"/"});var i=this.props.history;if(this.state.unblock(),this._prevUserAction="CONFIRM","goBack"===a){var r=i.listen((function(){r(),t._isMounted&&t.setState(o({},c,{unblock:i.block(t.block)}))}));i.goBack()}else i[a](l),this._isMounted&&this.setState(o({},c,{unblock:this.props.history.block(this.block)}))}},{key:"onCancel",value:function(){var e=this;(this.props.beforeCancel||function(e){e()})((function(){e._prevUserAction="CANCEL",e.setState(o({},c))}))}},{key:"onConfirm",value:function(){var e=this;(this.props.beforeConfirm||function(e){e()})((function(){e.navigateToNextLocation(e.props.afterConfirm)}))}},{key:"onBeforeUnload",value:function(e){if(this.when()){var t="Do you want to leave this site?\n\nChanges you made may not be saved.";return e.returnValue=t,t}}},{key:"when",value:function(e,t){return"function"==typeof this.props.when?this.props.when(this.props.location,e,t):this.props.when}},{key:"render",value:function(){return this.state.isActive||this.props.renderIfNotActive?r.default.createElement("div",null,this.props.children({isActive:this.state.isActive,onConfirm:this.onConfirm,onCancel:this.onCancel})):null}}]),t}(r.default.Component);t.default=(0,s.withRouter)(u)},function(e,t){e.exports=n(67294)},function(e,t){e.exports=n(73727)}])},44586:(e,t,n)=>{"use strict";var a;n.d(t,{Z:()=>d});var o=new Uint8Array(16);function l(){if(!a&&!(a="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(o)}const i=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;const r=function(e){return"string"==typeof e&&i.test(e)};for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).substr(1));const u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(s[e[t+0]]+s[e[t+1]]+s[e[t+2]]+s[e[t+3]]+"-"+s[e[t+4]]+s[e[t+5]]+"-"+s[e[t+6]]+s[e[t+7]]+"-"+s[e[t+8]]+s[e[t+9]]+"-"+s[e[t+10]]+s[e[t+11]]+s[e[t+12]]+s[e[t+13]]+s[e[t+14]]+s[e[t+15]]).toLowerCase();if(!r(n))throw TypeError("Stringified UUID is invalid");return n};const d=function(e,t,n){var a=(e=e||{}).random||(e.rng||l)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=a[o];return t}return u(a)}}}]);