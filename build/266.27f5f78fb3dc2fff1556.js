"use strict";(self.webpackChunkpayload_nextjs_server=self.webpackChunkpayload_nextjs_server||[]).push([[266],{74007:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(67294),s=t(48170),l=t(953),o=t(90666),n=t(64012);t(89013);const d=()=>{const{getField:e}=(0,n.useWatchForm)(),a=e("password"),t=(0,r.useCallback)((e=>e===(null==a?void 0:a.value)||"Passwords do not match."),[a]),{value:d,showError:c,setValue:m,errorMessage:u}=(0,s.Z)({path:"confirm-password",disableFormData:!0,validate:t,enableDebouncedValue:!0}),i=["field-type","confirm-password",c&&"error"].filter(Boolean).join(" ");return r.createElement("div",{className:i},r.createElement(o.Z,{showError:c,message:u}),r.createElement(l.Z,{htmlFor:"confirm-password",label:"Confirm Password",required:!0}),r.createElement("input",{value:d||"",onChange:m,type:"password",autoComplete:"off",id:"confirm-password",name:"confirm-password"}))}},74020:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(67294),s=t(48170),l=t(90546);const o=t.n(l)()((e=>{const{name:a,path:t,value:l,disableModifyingForm:o=!0}=e,n=t||a,{value:d,setValue:c}=(0,s.Z)({path:n});return(0,r.useEffect)((()=>{void 0!==l&&c(l,o)}),[l,c,o]),r.createElement("input",{type:"hidden",value:d||"",onChange:c,name:n})}))},76067:(e,a,t)=>{t.d(a,{Z:()=>m});var r=t(67294),s=t(48170),l=t(953),o=t(90666),n=t(90546),d=t.n(n),c=t(35193);t(8108);const m=d()((e=>{const{path:a,name:t,required:n,validate:d=c.password,style:m,className:u,width:i,autoComplete:p,label:w}=e,h=a||t,E=(0,r.useCallback)(((e,a)=>d(e,{...a,required:n})),[d,n]),{value:v,showError:f,formProcessing:Z,setValue:b,errorMessage:k}=(0,s.Z)({path:h,validate:E,enableDebouncedValue:!0}),y=["field-type","password",u,f&&"error"].filter(Boolean).join(" ");return r.createElement("div",{className:y,style:{...m,width:i}},r.createElement(o.Z,{showError:f,message:k}),r.createElement(l.Z,{htmlFor:h,label:w,required:n}),r.createElement("input",{value:v||"",onChange:b,disabled:Z,type:"password",autoComplete:p,id:h,name:h}))}))},70266:(e,a,t)=>{t.r(a),t.d(a,{default:()=>v});var r=t(67294),s=t(5977),l=t(73727),o=t(9980),n=t(28630),d=t(39599),c=t(93313),m=t(76067),u=t(74007),i=t(46268),p=t(77329),w=t(10448),h=(t(73096),t(74020));const E="reset-password",v=()=>{const{admin:{user:e},serverURL:a,routes:{admin:t,api:v}}=(0,o.Z)(),{token:f}=(0,s.UO)(),Z=(0,s.k6)(),{user:b,setToken:k}=(0,n.a)();return b?r.createElement(d.Z,{className:E},r.createElement(w.Z,{title:"Reset Password",description:"Reset password",keywords:"Reset Password, Payload, CMS"}),r.createElement("div",{className:`${E}__wrap`},r.createElement("h1",null,"Already logged in"),r.createElement("p",null,"To log in with another user, you should"," ",r.createElement(l.Link,{to:`${t}/logout`},"log out")," ","first."),r.createElement("br",null),r.createElement(p.Z,{el:"link",buttonStyle:"secondary",to:t},"Back to Dashboard"))):r.createElement(d.Z,{className:E},r.createElement("div",{className:`${E}__wrap`},r.createElement("h1",null,"Reset Password"),r.createElement(c.Z,{onSuccess:e=>{e.token&&(k(e.token),Z.push(`${t}`))},method:"post",action:`${a}${v}/${e}/reset-password`,redirect:t},r.createElement(m.Z,{label:"New Password",name:"password",autoComplete:"off",required:!0}),r.createElement(u.Z,null),r.createElement(h.Z,{name:"token",value:f}),r.createElement(i.Z,null,"Reset Password"))))}}}]);