import{u as Ve,H as Ie,p as ze,y as Ee,i as De,z as Be,_ as Se}from"./index.fbb544b8.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               */import{d as Fe,r as ee,e as p,c as z,w as Ne,B as n,C as u,aH as t,aG as a,aL as c,aM as s,aJ as P,aI as M,aD as te,u as m,F as y,D as Ue,n as Le,aK as Ae,aF as Pe,bA as Me,bB as Qe,b2 as Te,bC as He,b1 as Oe,bD as Re,b5 as je,bE as Ge,ab as Je,aU as Ke,bi as Ze,bj as We,bl as Xe,bm as Ye,b4 as et,bF as tt,bH as at,bZ as ot,a_ as lt,bI as nt}from"./arco.3652aec2.js";import{u as st}from"./loading.83b7fc7f.js";import{a as it}from"./model.77a76091.js";import{c as Q,S as ut}from"./sortable.esm.31555a8f.js";import{p as r,q as T}from"./common.4fed7ae4.js";import{q as dt}from"./corp.8a987da0.js";import"./chart.f81658ef.js";import"./vue.4b1b521c.js";import"./base.87fcf6e2.js";const mt={class:"container"},ct={class:"action-icon"},pt={class:"action-icon"},rt={id:"tableSetting"},_t={style:{"margin-right":"4px",cursor:"move"}},ft={class:"title"},vt={key:0},gt={key:1},bt={key:2},yt={key:3},ht={key:4},kt={key:5},$t={key:0},xt={key:1},Ct={key:2},wt={key:3},qt={key:4},Vt={key:5},It={key:0,class:"circle red"},zt={key:1,class:"circle"},Et={name:"ModelList"},Dt=Fe({...Et,setup(Bt){const{loading:ae,setLoading:C}=st(!0),oe=ee({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),H=()=>({corp:"",name:"",model:"",type:p(),remark:"",status:p()}),O=p([]);(async()=>{C(!0);try{const{data:o}=await dt();O.value=o.items}catch{}finally{C(!1)}})();const{t:i}=Ve(),R=p([]),d=p(H()),h=p([]),w=p([]),E=p("medium"),k={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},q=ee({...k}),le=z(()=>[{name:i("size.mini"),value:"mini"},{name:i("size.small"),value:"small"},{name:i("size.medium"),value:"medium"},{name:i("size.large"),value:"large"}]),ne=z(()=>[{title:i("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:i("model.columns.name"),dataIndex:"name",slotName:"name",align:"center",ellipsis:!0,tooltip:!0},{title:i("model.columns.model"),dataIndex:"model",slotName:"model",align:"center",ellipsis:!0,tooltip:!0},{title:i("model.columns.type"),dataIndex:"type",slotName:"type",align:"center"},{title:i("model.columns.prompt_price"),dataIndex:"prompt_ratio",slotName:"prompt_ratio",align:"center"},{title:i("model.columns.completion_price"),dataIndex:"completion_ratio",slotName:"completion_ratio",align:"center"},{title:i("model.columns.remark"),dataIndex:"remark",slotName:"remark",align:"center",ellipsis:!0,tooltip:!0},{title:i("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:75}]),se=z(()=>[{label:i("model.dict.type.1"),value:1},{label:i("model.dict.type.2"),value:2},{label:i("model.dict.type.3"),value:3},{label:i("model.dict.type.4"),value:4},{label:i("model.dict.type.100"),value:100}]),ie=z(()=>[{label:i("model.dict.status.1"),value:1},{label:i("model.dict.status.2"),value:2}]),V=async(o={...k})=>{C(!0);try{const{data:l}=await it(o);R.value=l.items,q.current=o.current,q.pageSize=o.pageSize,q.total=l.paging.total}catch{}finally{C(!1)}},j=()=>{V({...k,...d.value})},ue=o=>{V({...k,...d.value,current:o})},de=o=>{k.pageSize=o,V({...k,...d.value})};V();const me=()=>{d.value=H()},ce=(o,l)=>{E.value=o},pe=(o,l,_)=>{o?h.value.splice(_,0,l):h.value=w.value.filter(f=>f.dataIndex!==l.dataIndex)},G=(o,l,_,f=!1)=>{const v=f?Q(o):o;return l>-1&&_>-1&&v.splice(l,1,v.splice(_,1,v[l]).pop()),v},re=o=>{o&&Le(()=>{const l=document.getElementById("tableSetting");new ut(l,{onEnd(_){const{oldIndex:f,newIndex:v}=_;G(h.value,f,v),G(w.value,f,v)}})})};Ne(()=>ne.value,o=>{h.value=Q(o),h.value.forEach((l,_)=>{l.checked=!0}),w.value=Q(h.value)},{deep:!0,immediate:!0});const D=p(!1),J=p([]),_e=o=>{J.value=o,D.value=!0},B=p(!1),K=p([]),Z=o=>{K.value[0]=o,B.value=!0};return(o,l)=>{const _=Ie,f=Ae,v=Pe,fe=Me,S=Qe,$=Te,g=He,F=Oe,N=Re,ve=je,W=Ge,ge=Je,x=Ke,X=ze,be=Ze,U=We,ye=Ee,he=Xe,ke=Ye,$e=De,xe=Be,Ce=et,we=tt,L=at,b=ot,Y=lt,qe=nt;return n(),u("div",mt,[t(v,{class:"container-breadcrumb"},{default:a(()=>[t(f,null,{default:a(()=>[t(_)]),_:1}),t(f,null,{default:a(()=>[c(s(o.$t("menu.my.model")),1)]),_:1})]),_:1}),t(qe,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:a(()=>[t(N,null,{default:a(()=>[t(g,{flex:1},{default:a(()=>[t(ve,{model:d.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[t(N,{gutter:16},{default:a(()=>[t(g,{span:8},{default:a(()=>[t($,{field:"corp",label:o.$t("model.form.corp")},{default:a(()=>[t(S,{modelValue:d.value.corp,"onUpdate:modelValue":l[0]||(l[0]=e=>d.value.corp=e),placeholder:o.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:a(()=>[(n(!0),u(P,null,M(O.value,e=>(n(),te(fe,{key:e.id,value:e.id,label:e.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(g,{span:8},{default:a(()=>[t($,{field:"name",label:o.$t("model.form.name")},{default:a(()=>[t(F,{modelValue:d.value.name,"onUpdate:modelValue":l[1]||(l[1]=e=>d.value.name=e),placeholder:o.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(g,{span:8},{default:a(()=>[t($,{field:"model",label:o.$t("model.form.model")},{default:a(()=>[t(F,{modelValue:d.value.model,"onUpdate:modelValue":l[2]||(l[2]=e=>d.value.model=e),placeholder:o.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(g,{span:8},{default:a(()=>[t($,{field:"type",label:o.$t("model.form.type")},{default:a(()=>[t(S,{modelValue:d.value.type,"onUpdate:modelValue":l[3]||(l[3]=e=>d.value.type=e),options:m(se),placeholder:o.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(g,{span:8},{default:a(()=>[t($,{field:"status",label:o.$t("model.form.status")},{default:a(()=>[t(S,{modelValue:d.value.status,"onUpdate:modelValue":l[4]||(l[4]=e=>d.value.status=e),options:m(ie),placeholder:o.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),t(g,{span:8},{default:a(()=>[t($,{field:"remark",label:o.$t("model.form.remark")},{default:a(()=>[t(F,{modelValue:d.value.remark,"onUpdate:modelValue":l[5]||(l[5]=e=>d.value.remark=e),placeholder:o.$t("model.form.remark.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(W,{style:{height:"84px"},direction:"vertical"}),t(g,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[t(be,{direction:"vertical",size:18},{default:a(()=>[t(x,{type:"primary",onClick:j},{icon:a(()=>[t(ge)]),default:a(()=>[c(" "+s(o.$t("model.form.search")),1)]),_:1}),t(x,{onClick:me},{icon:a(()=>[t(X)]),default:a(()=>[c(" "+s(o.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),t(W,{style:{"margin-top":"0"}}),t(N,{style:{"margin-bottom":"16px"}},{default:a(()=>[t(g,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:a(()=>[t(U,{content:o.$t("actions.refresh")},{default:a(()=>[y("div",{class:"action-icon",onClick:j},[t(X,{size:"18"})])]),_:1},8,["content"]),t(ke,{onSelect:ce},{content:a(()=>[(n(!0),u(P,null,M(m(le),e=>(n(),te(he,{key:e.value,value:e.value,class:Ue({active:e.value===E.value})},{default:a(()=>[y("span",null,s(e.name),1)]),_:2},1032,["value","class"]))),128))]),default:a(()=>[t(U,{content:o.$t("actions.density")},{default:a(()=>[y("div",ct,[t(ye,{size:"18"})])]),_:1},8,["content"])]),_:1}),t(U,{content:o.$t("actions.column_setting")},{default:a(()=>[t(we,{trigger:"click",position:"bl",onPopupVisibleChange:re},{content:a(()=>[y("div",rt,[(n(!0),u(P,null,M(w.value,(e,I)=>(n(),u("div",{key:e.dataIndex,class:"setting"},[y("div",_t,[t(xe)]),y("div",null,[t(Ce,{modelValue:e.checked,"onUpdate:modelValue":A=>e.checked=A,onChange:A=>pe(A,e,I)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),y("div",ft,s(e.title==="#"?"\u5E8F\u5217\u53F7":e.title),1)]))),128))])]),default:a(()=>[y("div",pt,[t($e,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),t(L,{"row-key":"id",loading:m(ae),pagination:q,columns:h.value,data:R.value,bordered:!1,size:E.value,"row-selection":oe,onPageChange:ue,onPageSizeChange:de},{type:a(({record:e})=>[c(s(o.$t(`model.dict.type.${e.type}`)),1)]),prompt_ratio:a(({record:e})=>[e.type===5?(n(),u("span",vt,s(e.audio_quota.billing_method===1?`$${m(r)(e.audio_quota.prompt_ratio)}/k`:"-"),1)):e.type===6?(n(),u("span",gt,"-")):e.type===101?(n(),u("span",bt,[t(x,{type:"text",size:"small",onClick:I=>Z(e.realtime_quota)},{default:a(()=>[c(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):e.type!==100?(n(),u("span",yt,s(e.text_quota.billing_method===1?`$${m(r)(e.text_quota.prompt_ratio)}/k`:"-"),1)):e.type===100?(n(),u("span",ht,s(e.multimodal_quota.text_quota.billing_method===1?`$${m(r)(e.multimodal_quota.text_quota.prompt_ratio)}/k`:"-"),1)):(n(),u("span",kt," - "))]),completion_ratio:a(({record:e})=>[e.type===2?(n(),u("span",$t,[t(x,{type:"text",size:"small",onClick:I=>_e(e.image_quotas)},{default:a(()=>[c(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):e.type===5?(n(),u("span",xt,"-")):e.type===6?(n(),u("span",Ct,s(e.audio_quota.billing_method===1?`$${m(r)(e.audio_quota.completion_ratio)}/min`:`$${m(T)(e.audio_quota.fixed_quota)}/\u6B21`),1)):e.type===101?(n(),u("span",wt,[t(x,{type:"text",size:"small",onClick:I=>Z(e.realtime_quota)},{default:a(()=>[c(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):e.type!==100?(n(),u("span",qt,s(e.text_quota.billing_method===1?`$${m(r)(e.text_quota.completion_ratio)}/k`:`$${m(T)(e.text_quota.fixed_quota)}/\u6B21`),1)):(n(),u("span",Vt,s(`$${m(r)(e.multimodal_quota.text_quota.completion_ratio)}/k`),1))]),remark:a(({record:e})=>[c(s(e.remark||"-"),1)]),status:a(({record:e})=>[e.status===2?(n(),u("span",It)):(n(),u("span",zt)),c(" "+s(o.$t(`model.dict.status.${e.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),t(Y,{visible:D.value,"onUpdate:visible":l[6]||(l[6]=e=>D.value=e),title:o.$t("model.columns.completion_price"),width:"500px","hide-cancel":"",simple:""},{default:a(()=>[t(L,{data:J.value,pagination:!1,bordered:!1},{columns:a(()=>[t(b,{title:"\u5BBD\u5EA6","data-index":"width",align:"center"}),t(b,{title:"\u9AD8\u5EA6","data-index":"height",align:"center"}),t(b,{title:"\u4EF7\u683C","data-index":"fixed_quota",align:"center"},{cell:a(({record:e})=>[c(s(`$${m(T)(e.fixed_quota)}/\u5F20`),1)]),_:1}),t(b,{title:"\u9ED8\u8BA4","data-index":"is_default",align:"center"},{cell:a(({record:e})=>[c(s(e.is_default?"\u662F":"-"),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","title"]),t(Y,{visible:B.value,"onUpdate:visible":l[7]||(l[7]=e=>B.value=e),title:o.$t("model.columns.realtime_price"),width:"550px","hide-cancel":"",simple:""},{default:a(()=>[t(L,{data:K.value,pagination:!1,bordered:!1},{columns:a(()=>[t(b,{title:"\u6587\u672C\u63D0\u95EE\u4EF7\u683C","data-index":"text_quota.prompt_ratio",align:"center"},{cell:a(({record:e})=>[c(s(`$${m(r)(e.text_quota.prompt_ratio)}/k`),1)]),_:1}),t(b,{title:"\u6587\u672C\u56DE\u7B54\u4EF7\u683C","data-index":"text_quota.completion_ratio",align:"center"},{cell:a(({record:e})=>[c(s(`$${m(r)(e.text_quota.completion_ratio)}/k`),1)]),_:1}),t(b,{title:"\u97F3\u9891\u63D0\u95EE\u4EF7\u683C","data-index":"audio_quota.prompt_ratio",align:"center"},{cell:a(({record:e})=>[c(s(`$${m(r)(e.audio_quota.prompt_ratio)}/k`),1)]),_:1}),t(b,{title:"\u97F3\u9891\u56DE\u7B54\u4EF7\u683C","data-index":"audio_quota.completion_ratio",align:"center"},{cell:a(({record:e})=>[c(s(`$${m(r)(e.audio_quota.completion_ratio)}/k`),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","title"])]),_:1})])}}});const la=Se(Dt,[["__scopeId","data-v-1690adba"]]);export{la as default};
