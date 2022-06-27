"use strict";(self.webpackChunkpayload_nextjs_server=self.webpackChunkpayload_nextjs_server||[]).push([[892],{46892:(e,a,l)=>{l.r(a),l.d(a,{default:()=>x});var r=l(67294),t=l(38439),n=l(28630),o=l(90546),s=l.n(o),i=l(77329),d=l(78285),c=l(87578),u=l(64012),p=l(19826),m=l(48170),h=l(40684),v=l(90666),E=l(35193),b=l(54945),y=l(77070),w=l(45074),f=l(9684);l(35396);const g="field-type array",x=s()((e=>{var a,l;const{name:o,path:s,fields:x,fieldTypes:R,validate:_=E.array,required:k,maxRows:I,minRows:Z,permissions:C,admin:{readOnly:O,description:T,condition:D,className:S}}=e,$=(null==(F=e)?void 0:F.labels)?F.labels:(null==F?void 0:F.label)?{singular:F.label,plural:void 0}:{singular:"Row",plural:"Rows"};var F;const M=null!==(a=null==e?void 0:e.label)&&void 0!==a?a:null===(l=null==e?void 0:e.labels)||void 0===l?void 0:l.singular,[N,V]=(0,r.useReducer)(c.Z,[]),A=(0,u.useForm)(),{user:P}=(0,n.a)(),{id:j}=(0,w.x5)(),q=(0,h.bU)(),W=(0,f.T)(),{dispatchFields:B}=A,L=s||o,K=(0,r.useCallback)(((e,a)=>_(e,{...a,minRows:Z,maxRows:I,required:k})),[I,Z,k,_]),[U,z]=(0,r.useState)(!1),{showError:G,errorMessage:H,value:J,setValue:Q}=(0,m.Z)({path:L,validate:K,disableFormData:U,condition:D}),X=(0,r.useCallback)((async e=>{const a=await(0,p.Z)({fieldSchema:x,operation:W,id:j,user:P,locale:q});B({type:"ADD_ROW",rowIndex:e,subFieldState:a,path:L}),V({type:"ADD",rowIndex:e}),Q(J+1)}),[V,B,x,L,Q,J,W,j,P,q]),Y=(0,r.useCallback)((e=>{V({type:"REMOVE",rowIndex:e}),B({type:"REMOVE_ROW",rowIndex:e,path:L}),Q(J-1)}),[V,B,L,J,Q]),ee=(0,r.useCallback)(((e,a)=>{V({type:"MOVE",moveFromIndex:e,moveToIndex:a}),B({type:"MOVE_ROW",moveFromIndex:e,moveToIndex:a,path:L})}),[V,B,L]),ae=(0,r.useCallback)((e=>{if(!e.destination)return;const a=e.source.index,l=e.destination.index;ee(a,l)}),[ee]);(0,r.useEffect)((()=>{const e=A.getDataByPath(L);V({type:"SET_ALL",data:e||[]})}),[A,L]),(0,r.useEffect)((()=>{Q((null==N?void 0:N.length)||0,!0),0===(null==N?void 0:N.length)?z(!1):z(!0)}),[N,Q]);const le=I&&N.length>=I,re=[g,S].filter(Boolean).join(" ");return r.createElement(t.Z5,{onDragEnd:ae},r.createElement("div",{className:re},r.createElement("div",{className:`${g}__error-wrap`},r.createElement(v.Z,{showError:G,message:H})),r.createElement("header",{className:`${g}__header`},r.createElement("h3",null,M),r.createElement(y.Z,{value:J,description:T})),r.createElement(t.bK,{droppableId:"array-drop"},(e=>r.createElement("div",{ref:e.innerRef,...e.droppableProps},N.length>0&&N.map(((e,a)=>r.createElement(d.Z,{readOnly:O,key:e.id,id:e.id,blockType:"array",label:$.singular,rowCount:N.length,rowIndex:a,addRow:X,removeRow:Y,moveRow:ee,parentPath:L,fieldTypes:R,fieldSchema:x,permissions:C,hasMaxRows:le}))),(N.length<Z||k&&0===N.length)&&r.createElement(b.Z,{type:"error"},"This field requires at least"," ",Z?`${Z} ${$.plural}`:`1 ${$.singular}`),0===N.length&&O&&r.createElement(b.Z,null,"This field has no"," ",$.plural,"."),e.placeholder))),!O&&!le&&r.createElement("div",{className:`${g}__add-button-wrap`},r.createElement(i.Z,{onClick:()=>X(J),buttonStyle:"icon-label",icon:"plus",iconStyle:"with-border",iconPosition:"left"},`Add ${$.singular}`))))}))}}]);