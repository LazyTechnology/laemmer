"use strict";(self.webpackChunkpayload_nextjs_server=self.webpackChunkpayload_nextjs_server||[]).push([[18],{26018:(e,r,t)=>{t.r(r),t.d(r,{default:()=>p});var a=t(67294),s=t(9980),l=t(28630),n=t(39599),i=t(10448),o=t(93313),d=t(61439),c=t(72570),u=t(46268),m=t(60161);t(26325);const p=e=>{const{setInitialized:r}=e,{setToken:t}=(0,l.a)(),{admin:{user:p},collections:f,serverURL:w,routes:{admin:v,api:y}}=(0,s.Z)(),E=f.find((e=>e.slug===p));return a.createElement(n.Z,{className:"create-first-user"},a.createElement("h1",null,"Welcome"),a.createElement("p",null,"To begin, create your first user."),a.createElement(i.Z,{title:"Create First User",description:"Create first user",keywords:"Create, Payload, CMS"}),a.createElement(o.Z,{onSuccess:e=>{var a;(null===(a=null==e?void 0:e.user)||void 0===a?void 0:a.token)&&t(e.user.token),r(!0)},method:"post",redirect:v,action:`${w}${y}/${p}/first-register`,validationOperation:"create"},a.createElement(m.S,{allow:!0},a.createElement(d.Z,{fieldSchema:[{name:"email",label:"Email Address",type:"email",required:!0},{name:"password",label:"Password",type:"password",required:!0},{name:"confirm-password",label:"Confirm Password",type:"confirmPassword",required:!0},...E.fields],fieldTypes:c.Z})),a.createElement(u.Z,null,"Create")))}}}]);