import{u as Fe,E as Ie,p as Se,y as ze,i as Ve,z as Ee,_ as $e}from"./index.3b5e322e.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{c as E,S as De}from"./sortable.esm.f8f875e8.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as Te,r as G,e as c,c as J,w as Le,bT as Ue,B as f,C as w,aH as t,aG as a,aL as g,aM as b,bu as W,aD as K,F as d,aJ as Q,aI as X,u as $,D as Ae,n as Ne,aK as Re,aF as Pe,aS as qe,b2 as Oe,bC as je,bD as He,bE as Me,b5 as Ge,bF as Je,ab as We,aU as Ke,bi as Qe,bj as Xe,bl as Ye,bm as Ze,b4 as et,bG as tt,bI as at,a_ as nt,bJ as ot,g as lt}from"./arco.17b1a46f.js";import{u as st}from"./loading.44762de3.js";import{q as it}from"./common.ac936b7b.js";import{q as ct,s as rt}from"./finance.2a190797.js";import"./chart.d5ce7f1f.js";import"./vue.32c094a4.js";const ut={class:"container"},dt={class:"action-icon"},mt={class:"action-icon"},_t={id:"tableSetting"},pt={style:{"margin-right":"4px",cursor:"move"}},ft={class:"title"},bt={name:"BillList"},vt=Te({...bt,setup(gt){const Y=G({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),Z=()=>({user_id:c(),stat_date:[]}),{loading:ee,setLoading:h}=st(!0),{t:r}=Fe(),D=c([]),u=c(Z()),m=c([]),y=c([]),B=c("medium"),T=c(),F=c([]),te=c(!0),_={current:1,pageSize:10,showTotal:!0,showPageSize:!0,pageSizeOptions:[10,50,100,500,1e3]},x=G({..._}),ae=J(()=>[{name:r("searchTable.size.mini"),value:"mini"},{name:r("searchTable.size.small"),value:"small"},{name:r("searchTable.size.medium"),value:"medium"},{name:r("searchTable.size.large"),value:"large"}]),ne=J(()=>[{title:r("finance.columns.user_id"),dataIndex:"user_id",slotName:"user_id",align:"center"},{title:r("finance.columns.total"),dataIndex:"total",slotName:"total",align:"center"},{title:r("finance.columns.models"),dataIndex:"models",slotName:"models",align:"center"},{title:r("finance.columns.tokens"),dataIndex:"tokens",slotName:"tokens",align:"center"},{title:r("finance.columns.stat_date"),dataIndex:"stat_date",slotName:"stat_date",align:"center"}]),C=async(e={..._})=>{h(!0);try{const{data:n}=await ct(e);D.value=n.items,x.current=e.current,x.pageSize=e.pageSize,x.total=n.paging.total}catch{}finally{h(!1)}},L=()=>{C({..._,...u.value})},oe=e=>{C({..._,...u.value,current:e})},le=e=>{_.pageSize=e,C({..._,...u.value})};C();const se=(e,n)=>{B.value=e},ie=(e,n,s)=>{e?m.value.splice(s,0,n):m.value=y.value.filter(i=>i.dataIndex!==n.dataIndex)},U=(e,n,s,i=!1)=>{const l=i?E(e):e;return n>-1&&s>-1&&l.splice(n,1,l.splice(s,1,l[n]).pop()),l},ce=e=>{e&&Ne(()=>{const n=document.getElementById("tableSetting");new De(n,{onEnd(s){const{oldIndex:i,newIndex:l}=s;U(m.value,i,l),U(y.value,i,l)}})})};Le(()=>ne.value,e=>{m.value=E(e),m.value.forEach((n,s)=>{n.checked=!0}),y.value=E(m.value)},{deep:!0,immediate:!0});const{proxy:A}=lt(),re=e=>{F.value=e,te.value=!e.length},N=c(),v=c(!1),k=c({}),ue=async e=>{var s;if(await((s=N.value)==null?void 0:s.validate())){v.value=!0,e(!1);return}e(),R({stat_date:k.value.stat_date})},de=()=>{v.value=!1},R=e=>{if(F.value.length===0&&!e.stat_date){v.value=!0;return}h(!0),e.ids=F.value,rt(e).then(n=>{h(!1),A.$message.success("\u5BFC\u51FA\u6210\u529F"),T.value.selectAll(!1);const s=new Blob([n.data],{type:"application/vnd.ms-excel"}),i=window.URL.createObjectURL(s),l=document.createElement("a");l.href=i,l.setAttribute("download","\u8D26\u5355\u660E\u7EC6.xlsx"),document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(i)}).catch(n=>{A.$message.error("\u5BFC\u51FA\u5931\u8D25, \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458",n)})};return(e,n)=>{const s=Ie,i=Re,l=Pe,me=qe,I=Oe,p=je,P=He,S=Me,q=Ge,O=Je,_e=We,j=Ke,H=Qe,pe=Se,z=Xe,fe=ze,be=Ye,ve=Ze,ge=Ve,he=Ee,ye=et,xe=tt,Ce=at,ke=nt,we=ot,M=Ue("permission");return f(),w("div",ut,[t(l,{class:"container-breadcrumb"},{default:a(()=>[t(i,null,{default:a(()=>[t(s)]),_:1}),t(i,null,{default:a(()=>[g(b(e.$t("menu.finance")),1)]),_:1}),t(i,null,{default:a(()=>[g(b(e.$t("menu.bill.list")),1)]),_:1})]),_:1}),t(we,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:a(()=>[W((f(),K(S,null,{default:a(()=>[t(p,{flex:1},{default:a(()=>[t(q,{model:u.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[t(S,{gutter:16},{default:a(()=>[t(p,{span:8},{default:a(()=>[t(I,{field:"name",label:e.$t("finance.form.user_id")},{default:a(()=>[t(me,{modelValue:u.value.user_id,"onUpdate:modelValue":n[0]||(n[0]=o=>u.value.user_id=o),placeholder:e.$t("finance.form.user_id.placeholder"),min:1,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(p,{span:8},{default:a(()=>[t(I,{field:"stat_date",label:e.$t("finance.form.stat_date")},{default:a(()=>[t(P,{modelValue:u.value.stat_date,"onUpdate:modelValue":n[1]||(n[1]=o=>u.value.stat_date=o),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(O,{style:{height:"42px"},direction:"vertical"}),t(p,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[t(H,{direction:"vertical",size:18},{default:a(()=>[t(j,{type:"primary",onClick:L},{icon:a(()=>[t(_e)]),default:a(()=>[g(" "+b(e.$t("finance.form.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})),[[M,["admin"]]]),W(t(O,{style:{"margin-top":"0","margin-bottom":"16px"}},null,512),[[M,["admin"]]]),t(S,{style:{"margin-bottom":"16px"}},{default:a(()=>[t(p,{span:12},{default:a(()=>[t(H,null,{default:a(()=>[t(j,{type:"primary",onClick:n[2]||(n[2]=o=>R({}))},{default:a(()=>[g(" \u5BFC\u51FA ")]),_:1})]),_:1})]),_:1}),t(p,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:a(()=>[t(z,{content:e.$t("searchTable.actions.refresh")},{default:a(()=>[d("div",{class:"action-icon",onClick:L},[t(pe,{size:"18"})])]),_:1},8,["content"]),t(ve,{onSelect:se},{content:a(()=>[(f(!0),w(Q,null,X($(ae),o=>(f(),K(be,{key:o.value,value:o.value,class:Ae({active:o.value===B.value})},{default:a(()=>[d("span",null,b(o.name),1)]),_:2},1032,["value","class"]))),128))]),default:a(()=>[t(z,{content:e.$t("searchTable.actions.density")},{default:a(()=>[d("div",dt,[t(fe,{size:"18"})])]),_:1},8,["content"])]),_:1}),t(z,{content:e.$t("searchTable.actions.columnSetting")},{default:a(()=>[t(xe,{trigger:"click",position:"bl",onPopupVisibleChange:ce},{content:a(()=>[d("div",_t,[(f(!0),w(Q,null,X(y.value,(o,Be)=>(f(),w("div",{key:o.dataIndex,class:"setting"},[d("div",pt,[t(he)]),d("div",null,[t(ye,{modelValue:o.checked,"onUpdate:modelValue":V=>o.checked=V,onChange:V=>ie(V,o,Be)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),d("div",ft,b(o.title==="#"?"\u5E8F\u5217\u53F7":o.title),1)]))),128))])]),default:a(()=>[d("div",mt,[t(ge,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),t(Ce,{ref_key:"tableRef",ref:T,"row-key":"id",loading:$(ee),pagination:x,columns:m.value,data:D.value,bordered:!1,size:B.value,"row-selection":Y,onPageChange:oe,onPageSizeChange:le,onSelectionChange:re},{tokens:a(({record:o})=>[g(b(o.tokens>0?`$${$(it)(o.tokens)}`:"$0.00"),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),t(ke,{visible:v.value,"onUpdate:visible":n[4]||(n[4]=o=>v.value=o),title:e.$t("finance.form.title.bill_export"),onCancel:de,onBeforeOk:ue},{default:a(()=>[t(q,{ref_key:"billExportForm",ref:N,model:k.value},{default:a(()=>[t(I,{field:"stat_date",label:e.$t("finance.form.stat_date"),rules:[{required:!0,message:e.$t("finance.error.stat_date.required")}]},{default:a(()=>[t(P,{modelValue:k.value.stat_date,"onUpdate:modelValue":n[3]||(n[3]=o=>k.value.stat_date=o),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})])}}});const jt=$e(vt,[["__scopeId","data-v-9cbe338e"]]);export{jt as default};
