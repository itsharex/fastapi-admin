import{u as nl,H as sl,p as il,y as dl,i as rl,z as ml,_ as cl}from"./index.27f3b9cb.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as oe,S as pl}from"./sortable.esm.f8f875e8.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as fl,r as $e,e as n,c as W,w as vl,B as o,C,aH as u,aG as t,aL as s,aM as v,aJ as I,aI as S,aD as c,u as h,aE as y,F as D,D as _l,n as gl,aK as bl,aF as yl,bA as kl,bB as Cl,b2 as $l,bC as El,b1 as hl,bD as Fl,bE as wl,b5 as Bl,bF as Dl,ab as Vl,aU as Al,bi as ql,bj as Il,bl as Sl,bm as zl,b4 as Ul,bG as Ml,aT as Ll,bH as Ol,bI as xl,a_ as Tl,bX as Nl,bJ as Hl,g as Pl}from"./arco.17b1a46f.js";import{u as Rl}from"./loading.44762de3.js";import{p as Y,q as Ee}from"./common.ac936b7b.js";import{q as Ql,s as jl,a as Gl,b as Jl,c as Xl,d as Kl}from"./model.21c9c5e5.js";import{f as Wl}from"./agent.9aa10747.js";import{q as Yl}from"./corp.cb15b600.js";import"./chart.d5ce7f1f.js";import"./vue.32c094a4.js";import"./base.87fcf6e2.js";const Zl={class:"container"},ea={class:"action-icon"},la={class:"action-icon"},aa={id:"tableSetting"},ta={style:{"margin-right":"4px",cursor:"move"}},ua={class:"title"},oa={key:0},na={key:1},sa={key:2},ia={key:3},da={name:"ModelList"},ra=fl({...da,setup(ma){const{loading:he,setLoading:g}=Rl(!0),{proxy:z}=Pl(),Fe=$e({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),ne=n([]);(async()=>{g(!0);try{const{data:e}=await Yl();ne.value=e.items}catch{}finally{g(!1)}})();const Z=n([]);(async()=>{try{const{data:e}=await Ql();Z.value=e.items}catch{}})();const se=n([]);(async()=>{try{const{data:e}=await Wl();se.value=e.items}catch{}})();const we=async e=>{g(!0);try{await jl(e),z.$message.success("\u5220\u9664\u6210\u529F"),U()}catch{}finally{g(!1)}},ie=()=>({corp:"",name:"",model:"",type:n(),status:n(),created_at:[]}),{t:m}=nl(),b=n([]),p=n(ie()),V=n([]),H=n([]),ee=n("medium"),f=n([]),i=n(!0),de=n();let re=!1;const A={current:1,pageSize:10,showTotal:!0,showPageSize:!0,pageSizeOptions:[10,50,100,500,1e3]},P=$e({...A}),Be=W(()=>[{name:m("searchTable.size.mini"),value:"mini"},{name:m("searchTable.size.small"),value:"small"},{name:m("searchTable.size.medium"),value:"medium"},{name:m("searchTable.size.large"),value:"large"}]),De=W(()=>[{title:m("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:m("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:m("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:m("model.columns.prompt_price"),dataIndex:"prompt_ratio",slotName:"prompt_ratio",align:"center"},{title:m("model.columns.completion_price"),dataIndex:"completion_ratio",slotName:"completion_ratio",align:"center"},{title:m("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:m("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:m("model.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),Ve=W(()=>[{label:m("model.dict.type.1"),value:1},{label:m("model.dict.type.2"),value:2},{label:m("model.dict.type.3"),value:3},{label:m("model.dict.type.4"),value:4},{label:m("model.dict.type.100"),value:100}]),Ae=W(()=>[{label:m("model.dict.status.1"),value:1},{label:m("model.dict.status.2"),value:2}]),R=async(e={...A})=>{g(!0);try{const{data:a}=await Gl(e);b.value=a.items,P.current=e.current,P.pageSize=e.pageSize,P.total=a.paging.total,re=a.items.length===0}catch{}finally{g(!1)}},U=()=>{R({...A,...p.value})},qe=e=>{R({...A,...p.value,current:e})},Ie=e=>{A.pageSize=e,R({...A,...p.value})};R();const Se=()=>{p.value=ie()},ze=async e=>{g(!0);try{await Jl(e),z.$message.success("\u64CD\u4F5C\u6210\u529F"),U()}catch{}finally{g(!1)}},Ue=(e,a)=>{ee.value=e},Me=(e,a,d)=>{e?V.value.splice(d,0,a):V.value=H.value.filter(E=>E.dataIndex!==a.dataIndex)},me=(e,a,d,E=!1)=>{const w=E?oe(e):e;return a>-1&&d>-1&&w.splice(a,1,w.splice(d,1,w[a]).pop()),w},Le=e=>{e&&gl(()=>{const a=document.getElementById("tableSetting");new pl(a,{onEnd(d){const{oldIndex:E,newIndex:w}=d;me(V.value,E,w),me(H.value,E,w)}})})};vl(()=>De.value,e=>{V.value=oe(e),V.value.forEach((a,d)=>{a.checked=!0}),H.value=oe(V.value)},{deep:!0,immediate:!0});const M=n(!1),ce=n(),$=n({}),pe=n(),L=n(!1),Q=n({}),Oe=async()=>{g(!0);try{$.value.url="",$.value.key="",$.value.is_config_model_agent=!0,M.value=!0}catch{}finally{g(!1)}},xe=async e=>{var d;if(await((d=ce.value)==null?void 0:d.validate())){M.value=!0,e(!1);return}g(!0);try{await Xl($.value),e(),window.location.reload()}catch{}finally{g(!1)}},Te=()=>{M.value=!1},Ne=async e=>{var d;if(await((d=pe.value)==null?void 0:d.validate())){L.value=!0,e(!1);return}e(),_({action:"agent",value:"all",model_agents:Q.value.model_agents})},He=()=>{L.value=!1},fe=n(),O=n(!1),j=n({}),Pe=async e=>{var d;if(await((d=fe.value)==null?void 0:d.validate())){O.value=!0,e(!1);return}e(),_({action:"forward",value:"all",target_model:j.value.target_model})},Re=()=>{O.value=!1},ve=n(),x=n(!1),G=n({}),Qe=async e=>{var d;if(await((d=ve.value)==null?void 0:d.validate())){x.value=!0,e(!1);return}e(),_({action:"fallback",value:"all",fallback_model:G.value.fallback_model})},je=()=>{x.value=!1},Ge=e=>{f.value=e,i.value=!e.length},_=e=>{if(f.value.length===0)z.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let a=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`;switch(e.action){case"agent":e.value===!0?a=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value===!1?a=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value==="all"&&(e.model_agents?a=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406\u542F\u7528\u5E76\u4F7F\u7528\u6240\u9009\u7684\u6A21\u578B\u4EE3\u7406?`:L.value=!0);break;case"forward":e.value===!0?a=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value===!1?a=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value==="all"&&(e.target_model?a=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1\u542F\u7528\u5E76\u5168\u90E8\u8F6C\u53D1\u5230\u6240\u9009\u6A21\u578B?`:O.value=!0);break;case"fallback":e.value===!0?a=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value===!1?a=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value==="all"&&(e.fallback_model?a=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${f.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B\u542F\u7528\u5E76\u5168\u90E8\u540E\u5907\u5230\u6240\u9009\u6A21\u578B?`:x.value=!0);break;case"status":e.value===1?a=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`:a=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`;break;case"delete":a=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${f.value.length}\u6761\u6570\u636E?`;break}if(e.action==="agent"&&e.value==="all"&&!e.model_agents||e.action==="forward"&&e.value==="all"&&!e.target_model||e.action==="fallback"&&e.value==="all"&&!e.fallback_model)return;z.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:a,hideCancel:!1,onOk:()=>{g(!0),e.ids=f.value,Kl(e).then(d=>{g(!1),z.$message.success("\u64CD\u4F5C\u6210\u529F"),U(),de.value.selectAll(!1)})}})}},le=n(!1),_e=n([]),Je=e=>{_e.value=e,le.value=!0};return(e,a)=>{const d=sl,E=bl,w=yl,J=kl,q=Cl,k=$l,F=El,X=hl,Xe=Fl,ae=wl,T=Bl,ge=Dl,Ke=Vl,r=Al,be=il,ye=ql,te=Il,We=dl,Ye=Sl,Ze=zl,el=rl,ll=ml,al=Ul,tl=Ml,ke=Ll,ul=Ol,Ce=xl,N=Tl,K=Nl,ol=Hl;return o(),C("div",Zl,[u(w,{class:"container-breadcrumb"},{default:t(()=>[u(E,null,{default:t(()=>[u(d)]),_:1}),u(E,null,{default:t(()=>[s(v(e.$t("menu.model")),1)]),_:1}),u(E,null,{default:t(()=>[s(v(e.$t("menu.model.list")),1)]),_:1})]),_:1}),u(ol,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[u(ae,null,{default:t(()=>[u(F,{flex:1},{default:t(()=>[u(T,{model:p.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[u(ae,{gutter:16},{default:t(()=>[u(F,{span:8},{default:t(()=>[u(k,{field:"corp",label:e.$t("model.form.corp")},{default:t(()=>[u(q,{modelValue:p.value.corp,"onUpdate:modelValue":a[0]||(a[0]=l=>p.value.corp=l),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:t(()=>[(o(!0),C(I,null,S(ne.value,l=>(o(),c(J,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),u(F,{span:8},{default:t(()=>[u(k,{field:"name",label:e.$t("model.form.name")},{default:t(()=>[u(X,{modelValue:p.value.name,"onUpdate:modelValue":a[1]||(a[1]=l=>p.value.name=l),placeholder:e.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),u(F,{span:8},{default:t(()=>[u(k,{field:"model",label:e.$t("model.form.model")},{default:t(()=>[u(X,{modelValue:p.value.model,"onUpdate:modelValue":a[2]||(a[2]=l=>p.value.model=l),placeholder:e.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),u(F,{span:8},{default:t(()=>[u(k,{field:"type",label:e.$t("model.form.type")},{default:t(()=>[u(q,{modelValue:p.value.type,"onUpdate:modelValue":a[3]||(a[3]=l=>p.value.type=l),options:h(Ve),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),u(F,{span:8},{default:t(()=>[u(k,{field:"status",label:e.$t("model.form.status")},{default:t(()=>[u(q,{modelValue:p.value.status,"onUpdate:modelValue":a[4]||(a[4]=l=>p.value.status=l),options:h(Ae),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),u(F,{span:8},{default:t(()=>[u(k,{field:"created_at",label:e.$t("model.form.created_at")},{default:t(()=>[u(Xe,{modelValue:p.value.created_at,"onUpdate:modelValue":a[5]||(a[5]=l=>p.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),u(ge,{style:{height:"84px"},direction:"vertical"}),u(F,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[u(ye,{direction:"vertical",size:18},{default:t(()=>[u(r,{type:"primary",onClick:U},{icon:t(()=>[u(Ke)]),default:t(()=>[s(" "+v(e.$t("model.form.search")),1)]),_:1}),u(r,{onClick:Se},{icon:t(()=>[u(be)]),default:t(()=>[s(" "+v(e.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),u(ge,{style:{"margin-top":"0","margin-bottom":"16px"}}),u(ae,{style:{"margin-bottom":"16px"}},{default:t(()=>[u(F,{span:12},{default:t(()=>[u(ye,null,{default:t(()=>[u(r,{type:"primary",onClick:a[6]||(a[6]=l=>e.$router.push({name:"ModelCreate"}))},{default:t(()=>[s(v(e.$t("model.operation.create")),1)]),_:1}),h(re)?(o(),c(r,{key:0,type:"primary",status:"success",onClick:a[7]||(a[7]=l=>Oe())},{default:t(()=>[s(" \u521D\u59CB\u5316 ")]),_:1})):y("",!0),b.value.length!==0?(o(),c(r,{key:1,type:"primary",status:"warning",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[8]||(a[8]=l=>_({action:"agent",value:"all"}))},{default:t(()=>[s(" \u5168\u90E8\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:2,type:"primary",status:"success",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[9]||(a[9]=l=>_({action:"agent",value:!0}))},{default:t(()=>[s(" \u542F\u7528\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:3,type:"primary",status:"danger",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[10]||(a[10]=l=>_({action:"agent",value:!1}))},{default:t(()=>[s(" \u5173\u95ED\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:4,type:"primary",status:"warning",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[11]||(a[11]=l=>_({action:"forward",value:"all"}))},{default:t(()=>[s(" \u5168\u90E8\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:5,type:"primary",status:"success",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[12]||(a[12]=l=>_({action:"forward",value:!0}))},{default:t(()=>[s(" \u542F\u7528\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:6,type:"primary",status:"danger",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[13]||(a[13]=l=>_({action:"forward",value:!1}))},{default:t(()=>[s(" \u5173\u95ED\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:7,type:"primary",status:"warning",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[14]||(a[14]=l=>_({action:"fallback",value:"all"}))},{default:t(()=>[s(" \u5168\u90E8\u540E\u5907 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:8,type:"primary",status:"success",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[15]||(a[15]=l=>_({action:"fallback",value:!0}))},{default:t(()=>[s(" \u542F\u7528\u540E\u5907 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:9,type:"primary",status:"danger",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[16]||(a[16]=l=>_({action:"fallback",value:!1}))},{default:t(()=>[s(" \u5173\u95ED\u540E\u5907 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:10,type:"primary",status:"success",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[17]||(a[17]=l=>_({action:"status",value:1}))},{default:t(()=>[s(" \u542F\u7528 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:11,type:"primary",status:"danger",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[18]||(a[18]=l=>_({action:"status",value:2}))},{default:t(()=>[s(" \u7981\u7528 ")]),_:1},8,["disabled","title"])):y("",!0),b.value.length!==0?(o(),c(r,{key:12,type:"primary",status:"danger",disabled:i.value,title:i.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:a[19]||(a[19]=l=>_({action:"delete"}))},{default:t(()=>[s(" \u5220\u9664 ")]),_:1},8,["disabled","title"])):y("",!0)]),_:1})]),_:1}),u(F,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[u(te,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[D("div",{class:"action-icon",onClick:U},[u(be,{size:"18"})])]),_:1},8,["content"]),u(Ze,{onSelect:Ue},{content:t(()=>[(o(!0),C(I,null,S(h(Be),l=>(o(),c(Ye,{key:l.value,value:l.value,class:_l({active:l.value===ee.value})},{default:t(()=>[D("span",null,v(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[u(te,{content:e.$t("searchTable.actions.density")},{default:t(()=>[D("div",ea,[u(We,{size:"18"})])]),_:1},8,["content"])]),_:1}),u(te,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[u(tl,{trigger:"click",position:"bl",onPopupVisibleChange:Le},{content:t(()=>[D("div",aa,[(o(!0),C(I,null,S(H.value,(l,B)=>(o(),C("div",{key:l.dataIndex,class:"setting"},[D("div",ta,[u(ll)]),D("div",null,[u(al,{modelValue:l.checked,"onUpdate:modelValue":ue=>l.checked=ue,onChange:ue=>Me(ue,l,B)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),D("div",ua,v(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:t(()=>[D("div",la,[u(el,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),u(Ce,{ref_key:"tableRef",ref:de,"row-key":"id",loading:h(he),pagination:P,columns:V.value,data:b.value,bordered:!1,size:ee.value,"row-selection":Fe,onPageChange:qe,onPageSizeChange:Ie,onSelectionChange:Ge},{type:t(({record:l})=>[s(v(e.$t(`model.dict.type.${l.type}`)),1)]),prompt_ratio:t(({record:l})=>[s(v(l.type!==100?l.text_quota.billing_method===1?`$${h(Y)(l.text_quota.prompt_ratio)}/k`:"-":l.multimodal_quota.text_quota.billing_method===1?`$${h(Y)(l.multimodal_quota.text_quota.prompt_ratio)}/k`:"-"),1)]),completion_ratio:t(({record:l})=>[l.type===2?(o(),C("span",oa,[u(r,{type:"text",size:"small",onClick:B=>Je(l.image_quotas)},{default:t(()=>[s(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):l.type===5?(o(),C("span",na,"-")):l.type!==100?(o(),C("span",sa,v(l.text_quota.billing_method===1?`$${h(Y)(l.text_quota.completion_ratio)}/k`:`$${h(Ee)(l.text_quota.fixed_quota)}/\u6B21`),1)):(o(),C("span",ia,v(`$${h(Y)(l.multimodal_quota.text_quota.completion_ratio)}/k`),1))]),status:t(({record:l})=>[u(ke,{modelValue:l.status,"onUpdate:modelValue":B=>l.status=B,"checked-value":1,"unchecked-value":2,onChange:B=>ze({id:`${l.id}`,status:Number(`${l.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:t(({record:l})=>[u(r,{type:"text",size:"small",onClick:B=>e.$router.push({name:"ModelDetail",query:{id:`${l.id}`}})},{default:t(()=>[s(v(e.$t("model.columns.operations.view")),1)]),_:2},1032,["onClick"]),u(r,{type:"text",size:"small",onClick:B=>e.$router.push({name:"ModelUpdate",query:{id:`${l.id}`}})},{default:t(()=>[s(v(e.$t("model.columns.operations.update")),1)]),_:2},1032,["onClick"]),u(ul,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:B=>we({id:`${l.id}`})},{default:t(()=>[u(r,{type:"text",size:"small"},{default:t(()=>[s(v(e.$t("model.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),u(N,{visible:M.value,"onUpdate:visible":a[23]||(a[23]=l=>M.value=l),title:e.$t("model.form.title.init_model"),onCancel:Te,onBeforeOk:xe},{default:t(()=>[u(T,{ref_key:"initForm",ref:ce,model:$.value},{default:t(()=>[u(k,{field:"url",label:e.$t("model.label.url"),rules:[{required:!0,message:e.$t("model.error.url.required")}]},{default:t(()=>[u(X,{modelValue:$.value.url,"onUpdate:modelValue":a[20]||(a[20]=l=>$.value.url=l),placeholder:e.$t("model.placeholder.url"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),u(k,{field:"key",label:e.$t("model.label.key"),rules:[{required:!0,message:e.$t("model.error.key.required")}]},{default:t(()=>[u(X,{modelValue:$.value.key,"onUpdate:modelValue":a[21]||(a[21]=l=>$.value.key=l),placeholder:e.$t("model.placeholder.key"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),u(k,{field:"is_config_model_agent",label:e.$t("model.label.is_config_model_agent")},{default:t(()=>[u(ke,{modelValue:$.value.is_config_model_agent,"onUpdate:modelValue":a[22]||(a[22]=l=>$.value.is_config_model_agent=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(N,{visible:L.value,"onUpdate:visible":a[25]||(a[25]=l=>L.value=l),title:e.$t("model.form.title.model_agent"),onCancel:He,onBeforeOk:Ne},{default:t(()=>[u(T,{ref_key:"agentForm",ref:pe,model:Q.value},{default:t(()=>[u(k,{field:"model_agents",label:e.$t("model.label.model_agents"),rules:[{required:!0,message:e.$t("model.error.model_agents.required")}]},{default:t(()=>[u(q,{modelValue:Q.value.model_agents,"onUpdate:modelValue":a[24]||(a[24]=l=>Q.value.model_agents=l),placeholder:e.$t("model.placeholder.model_agents"),"max-tag-count":15,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(o(!0),C(I,null,S(se.value,l=>(o(),c(J,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(N,{visible:O.value,"onUpdate:visible":a[27]||(a[27]=l=>O.value=l),title:e.$t("model.form.title.forward"),onCancel:Re,onBeforeOk:Pe},{default:t(()=>[u(T,{ref_key:"forwardForm",ref:fe,model:j.value},{default:t(()=>[u(k,{field:"target_model",label:e.$t("model.label.target_model"),rules:[{required:!0,message:e.$t("model.error.target_model.required")}]},{default:t(()=>[u(q,{modelValue:j.value.target_model,"onUpdate:modelValue":a[26]||(a[26]=l=>j.value.target_model=l),placeholder:e.$t("model.placeholder.target_model"),"allow-search":""},{default:t(()=>[(o(!0),C(I,null,S(Z.value,l=>(o(),c(J,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(N,{visible:x.value,"onUpdate:visible":a[29]||(a[29]=l=>x.value=l),title:e.$t("model.form.title.fallback"),onCancel:je,onBeforeOk:Qe},{default:t(()=>[u(T,{ref_key:"fallbackForm",ref:ve,model:G.value},{default:t(()=>[u(k,{field:"fallback_model",label:e.$t("model.label.fallback_model"),rules:[{required:!0,message:e.$t("model.error.fallback_model.required")}]},{default:t(()=>[u(q,{modelValue:G.value.fallback_model,"onUpdate:modelValue":a[28]||(a[28]=l=>G.value.fallback_model=l),placeholder:e.$t("model.placeholder.fallback_model"),"allow-search":""},{default:t(()=>[(o(!0),C(I,null,S(Z.value,l=>(o(),c(J,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),u(N,{visible:le.value,"onUpdate:visible":a[30]||(a[30]=l=>le.value=l),title:e.$t("model.columns.completion_price"),width:"500px","hide-cancel":"",simple:""},{default:t(()=>[u(Ce,{data:_e.value,pagination:!1,bordered:!1},{columns:t(()=>[u(K,{title:"\u5BBD\u5EA6","data-index":"width",align:"center"}),u(K,{title:"\u9AD8\u5EA6","data-index":"height",align:"center"}),u(K,{title:"\u4EF7\u683C","data-index":"fixed_quota",align:"center"},{cell:t(({record:l})=>[s(v(`$${h(Ee)(l.fixed_quota)}/\u5F20`),1)]),_:1}),u(K,{title:"\u9ED8\u8BA4","data-index":"is_default",align:"center"},{cell:t(({record:l})=>[s(v(l.is_default?"\u662F":"-"),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","title"])]),_:1})])}}});const Pa=cl(ra,[["__scopeId","data-v-363ac57c"]]);export{Pa as default};
