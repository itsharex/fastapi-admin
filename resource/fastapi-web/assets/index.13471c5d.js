import{u as Oe,F as Pe,o as He,x as Re,I as je,y as Ge,_ as Je}from"./index.16caf63c.js";/* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css                */import{c as J,S as Ke}from"./sortable.esm.bb8fac92.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Qe,r as de,e as d,c as T,w as We,B as v,C as F,aH as l,aG as u,aL as o,aM as p,aJ as A,aI as I,aD as q,u as x,F as h,D as Xe,n as Ye,aK as Ze,aF as el,bA as ll,bB as tl,b2 as al,bC as ul,b1 as ol,bD as nl,bE as sl,b5 as dl,bF as il,ab as rl,aU as cl,bi as ml,bj as pl,bl as fl,bm as vl,b4 as _l,bG as gl,aT as bl,bH as yl,bI as Cl,a_ as hl,bJ as $l,g as El}from"./arco.88eb8c02.js";import{u as Fl}from"./loading.7dd88939.js";import{q as wl,s as kl,a as Bl,b as Dl,c as Vl}from"./model.b3ec1c65.js";import{f as Al}from"./agent.d2a28691.js";import{q as Il}from"./corp.aa4d373a.js";import"./chart.3301baad.js";import"./vue.f52bac7b.js";import"./base.87fcf6e2.js";const Sl={class:"container"},zl={class:"action-icon"},Ml={class:"action-icon"},Ll={id:"tableSetting"},Ul={style:{"margin-right":"4px",cursor:"move"}},Tl={class:"title"},ql={name:"ModelList"},xl=Qe({...ql,setup(Nl){const{loading:ie,setLoading:_}=Fl(!0),{proxy:N}=El(),re=de({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),K=d([]);(async()=>{_(!0);try{const{data:e}=await Il();K.value=e.items}catch{}finally{_(!1)}})();const Q=d([]);(async()=>{try{const{data:e}=await wl();Q.value=e.items}catch{}})();const W=d([]);(async()=>{try{const{data:e}=await Al();W.value=e.items}catch{}})();const ce=async e=>{_(!0);try{await kl(e),k()}catch{}finally{_(!1)}},X=()=>({corp:"",name:"",model:"",type:d(),status:d(),created_at:[]}),{t:n}=Oe(),Y=d([]),i=d(X()),$=d([]),S=d([]),O=d("medium"),m=d([]),s=d(!0),Z=d(),w={current:1,pageSize:10,showTotal:!0,showPageSize:!0},z=de({...w}),me=T(()=>[{name:n("searchTable.size.mini"),value:"mini"},{name:n("searchTable.size.small"),value:"small"},{name:n("searchTable.size.medium"),value:"medium"},{name:n("searchTable.size.large"),value:"large"}]),pe=T(()=>[{title:n("model.columns.corp"),dataIndex:"corp",slotName:"corp",align:"center",width:110},{title:n("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:n("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:n("model.columns.prompt_price"),dataIndex:"prompt_price",slotName:"prompt_price",align:"center"},{title:n("model.columns.completion_price"),dataIndex:"completion_price",slotName:"completion_price",align:"center"},{title:n("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:n("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:n("model.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),fe=T(()=>[{label:n("model.dict.type.1"),value:1},{label:n("model.dict.type.2"),value:2},{label:n("model.dict.type.3"),value:3},{label:n("model.dict.type.4"),value:4},{label:n("model.dict.type.100"),value:100}]),ve=T(()=>[{label:n("model.dict.status.1"),value:1},{label:n("model.dict.status.2"),value:2}]),M=async(e={...w})=>{_(!0);try{const{data:t}=await Bl(e);Y.value=t.items,z.current=e.current,z.pageSize=e.pageSize,z.total=t.paging.total}catch{}finally{_(!1)}},k=()=>{M({...w,...i.value})},_e=e=>{M({...w,...i.value,current:e})},ge=e=>{w.pageSize=e,M({...w,...i.value})};M();const be=()=>{i.value=X()},ye=async e=>{_(!0);try{await Dl(e),k()}catch{}finally{_(!1)}},Ce=(e,t)=>{O.value=e},he=(e,t,r)=>{e?$.value.splice(r,0,t):$.value=S.value.filter(g=>g.dataIndex!==t.dataIndex)},ee=(e,t,r,g=!1)=>{const y=g?J(e):e;return t>-1&&r>-1&&y.splice(t,1,y.splice(r,1,y[t]).pop()),y},$e=e=>{e&&Ye(()=>{const t=document.getElementById("tableSetting");new Ke(t,{onEnd(r){const{oldIndex:g,newIndex:y}=r;ee($.value,g,y),ee(S.value,g,y)}})})};We(()=>pe.value,e=>{$.value=J(e),$.value.forEach((t,r)=>{t.checked=!0}),S.value=J($.value)},{deep:!0,immediate:!0});const le=d(),B=d(!1),L=d({}),Ee=async e=>{var r;if(await((r=le.value)==null?void 0:r.validate())){B.value=!0,e(!1);return}e(),f({action:"forward",value:"all",target_model:L.value.target_model})},Fe=()=>{B.value=!1},te=d(),D=d(!1),U=d({}),we=async e=>{var r;if(await((r=te.value)==null?void 0:r.validate())){D.value=!0,e(!1);return}e(),f({action:"agent",value:"all",model_agents:U.value.model_agents})},ke=()=>{D.value=!1},Be=e=>{m.value=e,s.value=!e.length},f=e=>{if(m.value.length===0)N.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let t=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${m.value.length}\u6761\u6570\u636E?`;switch(e.action){case"agent":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${m.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${m.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value==="all"&&(e.model_agents?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${m.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406\u542F\u7528\u5E76\u4F7F\u7528\u6240\u9009\u7684\u6A21\u578B\u4EE3\u7406?`:D.value=!0);break;case"forward":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${m.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${m.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value==="all"&&(e.target_model?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${m.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1\u542F\u7528\u5E76\u5168\u90E8\u8F6C\u53D1\u5230\u6240\u9009\u6A21\u578B?`:B.value=!0);break;case"status":e.value===1?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${m.value.length}\u6761\u6570\u636E?`:t=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${m.value.length}\u6761\u6570\u636E?`;break;case"delete":t=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${m.value.length}\u6761\u6570\u636E?`;break}if(e.action==="agent"&&e.value==="all"&&!e.model_agents||e.action==="forward"&&e.value==="all"&&!e.target_model)return;N.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:t,hideCancel:!1,onOk:()=>{_(!0),e.ids=m.value,Vl(e).then(r=>{_(!1),N.$message.success("\u64CD\u4F5C\u6210\u529F"),k(),Z.value.selectAll(!1)})}})}};return(e,t)=>{const r=Pe,g=Ze,y=el,P=ll,V=tl,C=al,b=ul,ae=ol,De=nl,H=sl,R=dl,ue=il,Ve=rl,c=cl,oe=He,ne=ml,j=pl,Ae=Re,Ie=fl,Se=vl,ze=je,Me=Ge,Le=_l,Ue=gl,Te=bl,qe=yl,xe=Cl,se=hl,Ne=$l;return v(),F("div",Sl,[l(y,{class:"container-breadcrumb"},{default:u(()=>[l(g,null,{default:u(()=>[l(r)]),_:1}),l(g,null,{default:u(()=>[o(p(e.$t("menu.model")),1)]),_:1}),l(g,null,{default:u(()=>[o(p(e.$t("menu.model.list")),1)]),_:1})]),_:1}),l(Ne,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:u(()=>[l(H,null,{default:u(()=>[l(b,{flex:1},{default:u(()=>[l(R,{model:i.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:u(()=>[l(H,{gutter:16},{default:u(()=>[l(b,{span:8},{default:u(()=>[l(C,{field:"corp",label:e.$t("model.form.corp")},{default:u(()=>[l(V,{modelValue:i.value.corp,"onUpdate:modelValue":t[0]||(t[0]=a=>i.value.corp=a),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:u(()=>[(v(!0),F(A,null,I(K.value,a=>(v(),q(P,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(b,{span:8},{default:u(()=>[l(C,{field:"name",label:e.$t("model.form.name")},{default:u(()=>[l(ae,{modelValue:i.value.name,"onUpdate:modelValue":t[1]||(t[1]=a=>i.value.name=a),placeholder:e.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(b,{span:8},{default:u(()=>[l(C,{field:"model",label:e.$t("model.form.model")},{default:u(()=>[l(ae,{modelValue:i.value.model,"onUpdate:modelValue":t[2]||(t[2]=a=>i.value.model=a),placeholder:e.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),l(b,{span:8},{default:u(()=>[l(C,{field:"type",label:e.$t("model.form.type")},{default:u(()=>[l(V,{modelValue:i.value.type,"onUpdate:modelValue":t[3]||(t[3]=a=>i.value.type=a),options:x(fe),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),l(b,{span:8},{default:u(()=>[l(C,{field:"status",label:e.$t("model.form.status")},{default:u(()=>[l(V,{modelValue:i.value.status,"onUpdate:modelValue":t[4]||(t[4]=a=>i.value.status=a),options:x(ve),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),l(b,{span:8},{default:u(()=>[l(C,{field:"created_at",label:e.$t("model.form.created_at")},{default:u(()=>[l(De,{modelValue:i.value.created_at,"onUpdate:modelValue":t[5]||(t[5]=a=>i.value.created_at=a),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),l(ue,{style:{height:"84px"},direction:"vertical"}),l(b,{flex:"86px",style:{"text-align":"right"}},{default:u(()=>[l(ne,{direction:"vertical",size:18},{default:u(()=>[l(c,{type:"primary",onClick:k},{icon:u(()=>[l(Ve)]),default:u(()=>[o(" "+p(e.$t("model.form.search")),1)]),_:1}),l(c,{onClick:be},{icon:u(()=>[l(oe)]),default:u(()=>[o(" "+p(e.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),l(ue,{style:{"margin-top":"0","margin-bottom":"16px"}}),l(H,{style:{"margin-bottom":"16px"}},{default:u(()=>[l(b,{span:12},{default:u(()=>[l(ne,null,{default:u(()=>[l(c,{type:"primary",onClick:t[6]||(t[6]=a=>e.$router.push({name:"ModelCreate"}))},{default:u(()=>[o(p(e.$t("model.operation.create")),1)]),_:1}),l(c,{type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[7]||(t[7]=a=>f({action:"agent",value:"all"}))},{default:u(()=>[o(" \u5168\u90E8\u4EE3\u7406 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[8]||(t[8]=a=>f({action:"agent",value:!0}))},{default:u(()=>[o(" \u542F\u7528\u4EE3\u7406 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[9]||(t[9]=a=>f({action:"agent",value:!1}))},{default:u(()=>[o(" \u5173\u95ED\u4EE3\u7406 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[10]||(t[10]=a=>f({action:"forward",value:"all"}))},{default:u(()=>[o(" \u5168\u90E8\u8F6C\u53D1 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[11]||(t[11]=a=>f({action:"forward",value:!0}))},{default:u(()=>[o(" \u542F\u7528\u8F6C\u53D1 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[12]||(t[12]=a=>f({action:"forward",value:!1}))},{default:u(()=>[o(" \u5173\u95ED\u8F6C\u53D1 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[13]||(t[13]=a=>f({action:"status",value:1}))},{default:u(()=>[o(" \u542F\u7528 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[14]||(t[14]=a=>f({action:"status",value:2}))},{default:u(()=>[o(" \u7981\u7528 ")]),_:1},8,["disabled","title"]),l(c,{type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[15]||(t[15]=a=>f({action:"delete"}))},{default:u(()=>[o(" \u5220\u9664 ")]),_:1},8,["disabled","title"])]),_:1})]),_:1}),l(b,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:u(()=>[l(j,{content:e.$t("searchTable.actions.refresh")},{default:u(()=>[h("div",{class:"action-icon",onClick:k},[l(oe,{size:"18"})])]),_:1},8,["content"]),l(Se,{onSelect:Ce},{content:u(()=>[(v(!0),F(A,null,I(x(me),a=>(v(),q(Ie,{key:a.value,value:a.value,class:Xe({active:a.value===O.value})},{default:u(()=>[h("span",null,p(a.name),1)]),_:2},1032,["value","class"]))),128))]),default:u(()=>[l(j,{content:e.$t("searchTable.actions.density")},{default:u(()=>[h("div",zl,[l(Ae,{size:"18"})])]),_:1},8,["content"])]),_:1}),l(j,{content:e.$t("searchTable.actions.columnSetting")},{default:u(()=>[l(Ue,{trigger:"click",position:"bl",onPopupVisibleChange:$e},{content:u(()=>[h("div",Ll,[(v(!0),F(A,null,I(S.value,(a,E)=>(v(),F("div",{key:a.dataIndex,class:"setting"},[h("div",Ul,[l(Me)]),h("div",null,[l(Le,{modelValue:a.checked,"onUpdate:modelValue":G=>a.checked=G,onChange:G=>he(G,a,E)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),h("div",Tl,p(a.title==="#"?"\u5E8F\u5217\u53F7":a.title),1)]))),128))])]),default:u(()=>[h("div",Ml,[l(ze,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),l(xe,{ref_key:"tableRef",ref:Z,"row-key":"id",loading:x(ie),pagination:z,columns:$.value,data:Y.value,bordered:!1,size:O.value,"row-selection":re,onPageChange:_e,onPageSizeChange:ge,onSelectionChange:Be},{type:u(({record:a})=>[o(p(e.$t(`model.dict.type.${a.type}`)),1)]),prompt_price:u(({record:a})=>[o(p(a.billing_method===1?`$${a.prompt_price}/k`:"-"),1)]),completion_price:u(({record:a})=>[o(p(a.billing_method===1?`$${a.completion_price}/k`:`$${a.fixed_price}/\u6B21`),1)]),status:u(({record:a})=>[l(Te,{modelValue:a.status,"onUpdate:modelValue":E=>a.status=E,"checked-value":1,"unchecked-value":2,onChange:E=>ye({id:`${a.id}`,status:Number(`${a.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:u(({record:a})=>[l(c,{type:"text",size:"small",onClick:E=>e.$router.push({name:"ModelDetail",query:{id:`${a.id}`}})},{default:u(()=>[o(p(e.$t("model.columns.operations.view")),1)]),_:2},1032,["onClick"]),l(c,{type:"text",size:"small",onClick:E=>e.$router.push({name:"ModelUpdate",query:{id:`${a.id}`}})},{default:u(()=>[o(p(e.$t("model.columns.operations.update")),1)]),_:2},1032,["onClick"]),l(qe,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:E=>ce({id:`${a.id}`})},{default:u(()=>[l(c,{type:"text",size:"small"},{default:u(()=>[o(p(e.$t("model.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),l(se,{visible:D.value,"onUpdate:visible":t[17]||(t[17]=a=>D.value=a),title:e.$t("model.form.title.model_agent"),onCancel:ke,onBeforeOk:we},{default:u(()=>[l(R,{ref_key:"agentForm",ref:te,model:U.value},{default:u(()=>[l(C,{field:"model_agents",label:e.$t("model.label.model_agents"),rules:[{required:!0,message:e.$t("model.error.model_agents.required")}]},{default:u(()=>[l(V,{modelValue:U.value.model_agents,"onUpdate:modelValue":t[16]||(t[16]=a=>U.value.model_agents=a),placeholder:e.$t("model.placeholder.model_agents"),"max-tag-count":15,multiple:"","allow-search":"","allow-clear":""},{default:u(()=>[(v(!0),F(A,null,I(W.value,a=>(v(),q(P,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),l(se,{visible:B.value,"onUpdate:visible":t[19]||(t[19]=a=>B.value=a),title:e.$t("model.form.title.forward"),onCancel:Fe,onBeforeOk:Ee},{default:u(()=>[l(R,{ref_key:"forwardForm",ref:le,model:L.value},{default:u(()=>[l(C,{field:"target_model",label:e.$t("model.label.target_model"),rules:[{required:!0,message:e.$t("model.error.target_model.required")}]},{default:u(()=>[l(V,{modelValue:L.value.target_model,"onUpdate:modelValue":t[18]||(t[18]=a=>L.value.target_model=a),placeholder:e.$t("model.placeholder.target_model"),"allow-search":""},{default:u(()=>[(v(!0),F(A,null,I(Q.value,a=>(v(),q(P,{key:a.id,value:a.id,label:a.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})])}}});const ft=Je(xl,[["__scopeId","data-v-8d1b345e"]]);export{ft as default};
