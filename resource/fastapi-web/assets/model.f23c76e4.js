import{u as Be,B as Ee,p as qe,y as Ae,i as xe,z as Le,_ as Ne}from"./index.0dd05fc7.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as K,S as Te}from"./sortable.esm.f8f875e8.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as Ue,r as te,e as d,c as O,w as Me,B as c,C,aH as a,aG as l,aL as s,aM as i,aJ as I,aI as D,aD as A,u as x,F as v,D as Pe,n as Ke,aK as Oe,aF as Re,bA as je,bB as He,b2 as Ge,bC as Je,b1 as Qe,bD as We,bE as Xe,b5 as Ye,bF as Ze,ab as et,aU as tt,bi as at,bj as lt,bl as ot,bm as nt,b4 as st,bG as ut,aT as it,bH as dt,bI as rt,bJ as ct,g as mt}from"./arco.17b1a46f.js";import{h as pt}from"./vue.32c094a4.js";import{u as _t}from"./loading.44762de3.js";import{q as ft}from"./common.ac936b7b.js";import{s as yt,q as gt,a as vt,b as kt}from"./key.054ba0ac.js";import{q as bt}from"./model.2bd9934a.js";import{f as ht}from"./agent.b43e0fa9.js";import{q as Ct}from"./corp.a2c23291.js";import"./chart.d5ce7f1f.js";import"./base.87fcf6e2.js";const $t={class:"container"},wt={class:"action-icon"},Vt={class:"action-icon"},Ft={id:"tableSetting"},It={style:{"margin-right":"4px",cursor:"move"}},Dt={class:"title"},St={name:"KeyList"},zt=Ue({...St,setup(Bt){const{loading:ae,setLoading:m}=_t(!0),{proxy:V}=mt(),S=pt(),le=te({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),R=d([]);(async()=>{m(!0);try{const{data:t}=await Ct();R.value=t.items}catch{}finally{m(!1)}})();const j=d([]);(async()=>{try{const{data:t}=await bt();j.value=t.items}catch{}})();const H=d([]);(async()=>{try{const{data:t}=await ht();H.value=t.items;const o=new Array(0);S.query.agent_id&&(o[0]=S.query.agent_id,n.value.model_agents=o)}catch{}})();const oe=async t=>{m(!0);try{await yt(t),V.$message.success("\u5220\u9664\u6210\u529F"),F()}catch{}finally{m(!1)}},G=()=>({type:2,corp:"",key:"",models:[],model_agents:d(),quota:d(),status:d(),created_at:[]}),{t:u}=Be(),J=d([]),n=d(G()),k=d([]),z=d([]),L=d("medium"),b=d([]),h=d(!0),Q=d(),$={current:1,pageSize:10,showTotal:!0,showPageSize:!0,pageSizeOptions:[10,50,100,500,1e3]},B=te({...$}),ne=O(()=>[{name:u("searchTable.size.mini"),value:"mini"},{name:u("searchTable.size.small"),value:"small"},{name:u("searchTable.size.medium"),value:"medium"},{name:u("searchTable.size.large"),value:"large"}]),se=O(()=>[{title:u("key.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:u("key.columns.key"),dataIndex:"key",slotName:"key",align:"center"},{title:u("key.columns.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:u("key.columns.model_agents"),dataIndex:"model_agent_names",slotName:"model_agent_names",align:"center",ellipsis:!0,tooltip:!0},{title:u("key.columns.used_quota"),dataIndex:"used_quota",slotName:"used_quota",align:"center",ellipsis:!0,tooltip:!0},{title:u("key.columns.remark"),dataIndex:"remark",slotName:"remark",align:"center"},{title:u("key.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:u("key.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:u("key.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),ue=O(()=>[{label:u("key.dict.status.1"),value:1},{label:u("key.dict.status.2"),value:2}]),W=new Array(0);S.query.agent_id&&(W[0]=S.query.agent_id);const E=async(t={...$,type:2,model_agents:W})=>{m(!0);try{const{data:o}=await gt(t);J.value=o.items,B.current=t.current,B.pageSize=t.pageSize,B.total=o.paging.total}catch{}finally{m(!1)}},F=()=>{E({...$,...n.value})},ie=t=>{E({...$,...n.value,current:t})},de=t=>{$.pageSize=t,E({...$,...n.value})};E();const re=()=>{n.value=G()},ce=async t=>{m(!0);try{await vt(t),V.$message.success("\u64CD\u4F5C\u6210\u529F"),F()}catch{}finally{m(!1)}},me=(t,o)=>{L.value=t},pe=(t,o,p)=>{t?k.value.splice(p,0,o):k.value=z.value.filter(_=>_.dataIndex!==o.dataIndex)},X=(t,o,p,_=!1)=>{const y=_?K(t):t;return o>-1&&p>-1&&y.splice(o,1,y.splice(p,1,y[o]).pop()),y},_e=t=>{t&&Ke(()=>{const o=document.getElementById("tableSetting");new Te(o,{onEnd(p){const{oldIndex:_,newIndex:y}=p;X(k.value,_,y),X(z.value,_,y)}})})};Me(()=>se.value,t=>{k.value=K(t),k.value.forEach((o,p)=>{o.checked=!0}),z.value=K(k.value)},{deep:!0,immediate:!0});const fe=t=>{b.value=t,h.value=!t.length},N=t=>{if(b.value.length===0)V.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let o=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`;switch(t.action){case"status":t.value===1?o=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`:o=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`;break;case"delete":o=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${b.value.length}\u6761\u6570\u636E?`;break}V.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:o,hideCancel:!1,onOk:()=>{m(!0),t.ids=b.value,kt(t).then(p=>{m(!1),V.$message.success("\u64CD\u4F5C\u6210\u529F"),F(),Q.value.selectAll(!1)})}})}};return(t,o)=>{const p=Ee,_=Oe,y=Re,T=je,q=He,w=Ge,f=Je,ye=Qe,ge=We,U=Xe,ve=Ye,Y=Ze,ke=et,g=tt,Z=qe,ee=at,M=lt,be=Ae,he=ot,Ce=nt,$e=xe,we=Le,Ve=st,Fe=ut,Ie=it,De=dt,Se=rt,ze=ct;return c(),C("div",$t,[a(y,{class:"container-breadcrumb"},{default:l(()=>[a(_,null,{default:l(()=>[a(p)]),_:1}),a(_,null,{default:l(()=>[s(i(t.$t("menu.key")),1)]),_:1}),a(_,null,{default:l(()=>[s(i(t.$t("menu.key.model.list")),1)]),_:1})]),_:1}),a(ze,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:l(()=>[a(U,null,{default:l(()=>[a(f,{flex:1},{default:l(()=>[a(ve,{model:n.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:l(()=>[a(U,{gutter:16},{default:l(()=>[a(f,{span:8},{default:l(()=>[a(w,{field:"corp",label:t.$t("key.form.corp")},{default:l(()=>[a(q,{modelValue:n.value.corp,"onUpdate:modelValue":o[0]||(o[0]=e=>n.value.corp=e),placeholder:t.$t("key.form.selectDefault"),"allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),C(I,null,D(R.value,e=>(c(),A(T,{key:e.id,value:e.id,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(w,{field:"key",label:t.$t("key.form.key")},{default:l(()=>[a(ye,{modelValue:n.value.key,"onUpdate:modelValue":o[1]||(o[1]=e=>n.value.key=e),placeholder:t.$t("key.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(w,{field:"models",label:t.$t("key.form.models")},{default:l(()=>[a(q,{modelValue:n.value.models,"onUpdate:modelValue":o[2]||(o[2]=e=>n.value.models=e),placeholder:t.$t("key.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),C(I,null,D(j.value,e=>(c(),A(T,{key:e.id,value:e.id,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(w,{field:"model_agents",label:t.$t("key.form.modelAgents")},{default:l(()=>[a(q,{modelValue:n.value.model_agents,"onUpdate:modelValue":o[3]||(o[3]=e=>n.value.model_agents=e),placeholder:t.$t("key.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:l(()=>[(c(!0),C(I,null,D(H.value,e=>(c(),A(T,{key:e.id,value:e.id,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(w,{field:"status",label:t.$t("key.form.status")},{default:l(()=>[a(q,{modelValue:n.value.status,"onUpdate:modelValue":o[4]||(o[4]=e=>n.value.status=e),options:x(ue),placeholder:t.$t("key.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(f,{span:8},{default:l(()=>[a(w,{field:"created_at",label:t.$t("key.form.created_at")},{default:l(()=>[a(ge,{modelValue:n.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=e=>n.value.created_at=e),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(Y,{style:{height:"84px"},direction:"vertical"}),a(f,{flex:"86px",style:{"text-align":"right"}},{default:l(()=>[a(ee,{direction:"vertical",size:18},{default:l(()=>[a(g,{type:"primary",onClick:F},{icon:l(()=>[a(ke)]),default:l(()=>[s(" "+i(t.$t("key.form.search")),1)]),_:1}),a(g,{onClick:re},{icon:l(()=>[a(Z)]),default:l(()=>[s(" "+i(t.$t("key.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(Y,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(U,{style:{"margin-bottom":"16px"}},{default:l(()=>[a(f,{span:12},{default:l(()=>[a(ee,null,{default:l(()=>[a(g,{type:"primary",onClick:o[6]||(o[6]=e=>t.$router.push({name:"KeyCreate"}))},{default:l(()=>[s(i(t.$t("key.operation.create")),1)]),_:1}),a(g,{type:"primary",status:"success",disabled:h.value,title:h.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[7]||(o[7]=e=>N({action:"status",value:1}))},{default:l(()=>[s(" \u542F\u7528 ")]),_:1},8,["disabled","title"]),a(g,{type:"primary",status:"danger",disabled:h.value,title:h.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[8]||(o[8]=e=>N({action:"status",value:2}))},{default:l(()=>[s(" \u7981\u7528 ")]),_:1},8,["disabled","title"]),a(g,{type:"primary",status:"danger",disabled:h.value,title:h.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[9]||(o[9]=e=>N({action:"delete"}))},{default:l(()=>[s(" \u5220\u9664 ")]),_:1},8,["disabled","title"])]),_:1})]),_:1}),a(f,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:l(()=>[a(M,{content:t.$t("searchTable.actions.refresh")},{default:l(()=>[v("div",{class:"action-icon",onClick:F},[a(Z,{size:"18"})])]),_:1},8,["content"]),a(Ce,{onSelect:me},{content:l(()=>[(c(!0),C(I,null,D(x(ne),e=>(c(),A(he,{key:e.value,value:e.value,class:Pe({active:e.value===L.value})},{default:l(()=>[v("span",null,i(e.name),1)]),_:2},1032,["value","class"]))),128))]),default:l(()=>[a(M,{content:t.$t("searchTable.actions.density")},{default:l(()=>[v("div",wt,[a(be,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(M,{content:t.$t("searchTable.actions.columnSetting")},{default:l(()=>[a(Fe,{trigger:"click",position:"bl",onPopupVisibleChange:_e},{content:l(()=>[v("div",Ft,[(c(!0),C(I,null,D(z.value,(e,r)=>(c(),C("div",{key:e.dataIndex,class:"setting"},[v("div",It,[a(we)]),v("div",null,[a(Ve,{modelValue:e.checked,"onUpdate:modelValue":P=>e.checked=P,onChange:P=>pe(P,e,r)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),v("div",Dt,i(e.title==="#"?"\u5E8F\u5217\u53F7":e.title),1)]))),128))])]),default:l(()=>[v("div",Vt,[a($e,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Se,{ref_key:"tableRef",ref:Q,"row-key":"id",loading:x(ae),pagination:B,columns:k.value,data:J.value,bordered:!1,size:L.value,"row-selection":le,onPageChange:ie,onPageSizeChange:de,onSelectionChange:fe},{key:l(({record:e})=>[s(i(e.key.length>11?e.key.substr(0,10)+e.key.substr(-10):e.key),1)]),model_names:l(({record:e})=>{var r;return[s(i(((r=e==null?void 0:e.model_names)==null?void 0:r.join(","))||"-"),1)]}),model_agent_names:l(({record:e})=>{var r;return[s(i(((r=e==null?void 0:e.model_agent_names)==null?void 0:r.join(","))||"-"),1)]}),used_quota:l(({record:e})=>[s(" $"+i(e.used_quota>0?x(ft)(e.used_quota):"0.00"),1)]),remark:l(({record:e})=>[s(i(e.remark||"-"),1)]),status:l(({record:e})=>[a(Ie,{modelValue:e.status,"onUpdate:modelValue":r=>e.status=r,"checked-value":1,"unchecked-value":2,onChange:r=>ce({id:`${e.id}`,status:Number(`${e.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:l(({record:e})=>[a(g,{type:"text",size:"small",onClick:r=>t.$router.push({name:"KeyDetail",query:{id:`${e.id}`}})},{default:l(()=>[s(i(t.$t("key.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:r=>t.$router.push({name:"KeyUpdate",query:{id:`${e.id}`}})},{default:l(()=>[s(i(t.$t("key.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(De,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:r=>oe({id:`${e.id}`})},{default:l(()=>[a(g,{type:"text",size:"small"},{default:l(()=>[s(i(t.$t("key.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1})])}}});const ra=Ne(zt,[["__scopeId","data-v-62dfe509"]]);export{ra as default};
