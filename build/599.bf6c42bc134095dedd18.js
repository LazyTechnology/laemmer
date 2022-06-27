"use strict";(self.webpackChunkpayload_nextjs_server=self.webpackChunkpayload_nextjs_server||[]).push([[599],{77070:(e,t,a)=>{a.d(t,{Z:()=>o});var l=a(67294),r=a(12049);a(14120);const o=e=>{const{description:t,value:a}=e;if((0,r.isComponent)(t)){const e=t;return l.createElement(e,{value:a})}return t?l.createElement("div",{className:"field-description"},"function"==typeof t?t({value:a}):t):null}},12049:function(e,t,a){var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.isComponent=void 0;const r=l(a(67294));t.isComponent=function(e){return r.default.isValidElement(e)}},28571:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(67294),r=a(90546),o=a.n(r),n=a(48170),s=a(953),i=a(90666),c=a(77070),d=a(35193);a(25786);const u=o()((e=>{const{name:t,path:a,required:r,validate:o=d.email,admin:{readOnly:u,style:m,className:p,width:h,placeholder:E,autoComplete:y,description:w,condition:v}={},label:f}=e,g=a||t,b=(0,l.useCallback)(((e,t)=>o(e,{...t,required:r})),[o,r]),Z=(0,n.Z)({path:g,validate:b,enableDebouncedValue:!0,condition:v}),{value:k,showError:C,setValue:_,errorMessage:N}=Z,P=["field-type","email",p,C&&"error",u&&"read-only"].filter(Boolean).join(" ");return l.createElement("div",{className:P,style:{...m,width:h}},l.createElement(i.Z,{showError:C,message:N}),l.createElement(s.Z,{htmlFor:g,label:f,required:r}),l.createElement("input",{value:k||"",onChange:_,disabled:Boolean(u),placeholder:E,type:"email",id:g,name:g,autoComplete:y}),l.createElement(c.Z,{value:k,description:w}))}))},47599:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(67294),r=a(73727),o=a(39249),n=a(9980),s=a(28630),i=a(39599),c=a(93313),d=a(28571),u=a(46268),m=a(77329),p=a(10448);a(55514);const h="forgot-password",E=()=>{const[e,t]=(0,l.useState)(!1),{user:a}=(0,s.a)(),{admin:{user:E},serverURL:y,routes:{admin:w,api:v}}=(0,n.Z)();return a?l.createElement(i.Z,{className:h},l.createElement(p.Z,{title:"Forgot Password",description:"Forgot password",keywords:"Forgot, Password, Payload, CMS"}),l.createElement("h1",null,"You're already logged in"),l.createElement("p",null,"To change your password, go to your"," ",l.createElement(r.Link,{to:`${w}/account`},"account")," ","and edit your password there."),l.createElement("br",null),l.createElement(m.Z,{el:"link",buttonStyle:"secondary",to:w},"Back to Dashboard")):e?l.createElement(i.Z,{className:h},l.createElement("h1",null,"Email sent"),l.createElement("p",null,"Check your email for a link that will allow you to securely reset your password.")):l.createElement(i.Z,{className:h},l.createElement(c.Z,{handleResponse:e=>{e.json().then((()=>{t(!0)}),(()=>{o.Am.error("The email provided is not valid.")}))},method:"post",action:`${y}${v}/${E}/forgot-password`},l.createElement("h1",null,"Forgot Password"),l.createElement("p",null,"Please enter your email below. You will receive an email message with instructions on how to reset your password."),l.createElement(d.Z,{label:"Email Address",name:"email",admin:{autoComplete:"email"},required:!0}),l.createElement(u.Z,null,"Submit")),l.createElement(r.Link,{to:`${w}/login`},"Back to login"))}}}]);