import{u as Be,E as Fe,p as Ie,y as ze,i as Ve,z as Ee,_ as $e}from"./index.0119f130.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{c as E,S as De}from"./sortable.esm.734c0c44.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as Le,r as G,e as c,c as J,w as Te,bP as Ue,B as b,C as w,aH as t,aG as a,aL as v,aM as _,bu as W,aD as K,F as d,aJ as Q,aI as X,u as $,D as Ae,n as Ne,aK as Pe,aF as Re,aS as qe,b2 as Oe,bC as je,bD as He,bE as Me,b5 as Ge,bF as Je,ab as We,aU as Ke,bi as Qe,bj as Xe,bl as Ye,bm as Ze,b4 as et,bG as tt,bI as at,a_ as nt,bJ as ot,g as lt}from"./arco.f6ea4e94.js";import{u as st}from"./loading.b2615842.js";import{q as it}from"./common.4fed7ae4.js";import{q as ct,s as rt}from"./finance.0aeda349.js";import"./chart.6e5bd655.js";import"./vue.945ef37b.js";const ut={class:"container"},dt={class:"action-icon"},mt={class:"action-icon"},_t={id:"tableSetting"},pt={style:{"margin-right":"4px",cursor:"move"}},ft={class:"title"},bt={name:"BillList"},vt=Le({...bt,setup(gt){const Y=G({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),Z=()=>({user_id:c(),stat_date:[]}),{loading:ee,setLoading:h}=st(!0),{t:r}=Be(),D=c([]),u=c(Z()),m=c([]),y=c([]),S=c("medium"),L=c(),B=c([]),te=c(!0),p={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},x=G({...p}),ae=J(()=>[{name:r("searchTable.size.mini"),value:"mini"},{name:r("searchTable.size.small"),value:"small"},{name:r("searchTable.size.medium"),value:"medium"},{name:r("searchTable.size.large"),value:"large"}]),ne=J(()=>[{title:r("finance.columns.user_id"),dataIndex:"user_id",slotName:"user_id",align:"center"},{title:r("finance.columns.total"),dataIndex:"total",slotName:"total",align:"center"},{title:r("finance.columns.models"),dataIndex:"models",slotName:"models",align:"center"},{title:r("finance.columns.tokens"),dataIndex:"tokens",slotName:"tokens",align:"center"},{title:r("finance.columns.stat_date"),dataIndex:"stat_date",slotName:"stat_date",align:"center"}]),C=async(e={...p})=>{h(!0);try{const{data:n}=await ct(e);D.value=n.items,x.current=e.current,x.pageSize=e.pageSize,x.total=n.paging.total}catch{}finally{h(!1)}},T=()=>{C({...p,...u.value})},oe=e=>{C({...p,...u.value,current:e})},le=e=>{p.pageSize=e,C({...p,...u.value})};C();const se=(e,n)=>{S.value=e},ie=(e,n,s)=>{e?m.value.splice(s,0,n):m.value=y.value.filter(i=>i.dataIndex!==n.dataIndex)},U=(e,n,s,i=!1)=>{const l=i?E(e):e;return n>-1&&s>-1&&l.splice(n,1,l.splice(s,1,l[n]).pop()),l},ce=e=>{e&&Ne(()=>{const n=document.getElementById("tableSetting");new De(n,{onEnd(s){const{oldIndex:i,newIndex:l}=s;U(m.value,i,l),U(y.value,i,l)}})})};Te(()=>ne.value,e=>{m.value=E(e),m.value.forEach((n,s)=>{n.checked=!0}),y.value=E(m.value)},{deep:!0,immediate:!0});const{proxy:A}=lt(),re=e=>{B.value=e,te.value=!e.length},N=c(),g=c(!1),k=c({}),ue=async e=>{var s;if(await((s=N.value)==null?void 0:s.validate())){g.value=!0,e(!1);return}e(),P({stat_date:k.value.stat_date})},de=()=>{g.value=!1},P=e=>{if(B.value.length===0&&!e.stat_date){g.value=!0;return}h(!0),e.ids=B.value,rt(e).then(n=>{h(!1),A.$message.success("\u5BFC\u51FA\u6210\u529F"),L.value.selectAll(!1);const s=new Blob([n.data],{type:"application/vnd.ms-excel"}),i=window.URL.createObjectURL(s),l=document.createElement("a");l.href=i,l.setAttribute("download","\u8D26\u5355\u660E\u7EC6.xlsx"),document.body.appendChild(l),l.click(),document.body.removeChild(l),window.URL.revokeObjectURL(i)}).catch(n=>{A.$message.error("\u5BFC\u51FA\u5931\u8D25, \u8BF7\u8054\u7CFB\u7BA1\u7406\u5458",n)})};return(e,n)=>{const s=Fe,i=Pe,l=Re,me=qe,F=Oe,f=je,R=He,I=Me,q=Ge,O=Je,_e=We,j=Ke,H=Qe,pe=Ie,z=Xe,fe=ze,be=Ye,ve=Ze,ge=Ve,he=Ee,ye=et,xe=tt,Ce=at,ke=nt,we=ot,M=Ue("permission");return b(),w("div",ut,[t(l,{class:"container-breadcrumb"},{default:a(()=>[t(i,null,{default:a(()=>[t(s)]),_:1}),t(i,null,{default:a(()=>[v(_(e.$t("menu.finance")),1)]),_:1}),t(i,null,{default:a(()=>[v(_(e.$t("menu.bill.list")),1)]),_:1})]),_:1}),t(we,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:a(()=>[W((b(),K(I,null,{default:a(()=>[t(f,{flex:1},{default:a(()=>[t(q,{model:u.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:a(()=>[t(I,{gutter:16},{default:a(()=>[t(f,{span:8},{default:a(()=>[t(F,{field:"name",label:e.$t("finance.form.user_id")},{default:a(()=>[t(me,{modelValue:u.value.user_id,"onUpdate:modelValue":n[0]||(n[0]=o=>u.value.user_id=o),placeholder:e.$t("finance.form.user_id.placeholder"),min:1,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),t(f,{span:8},{default:a(()=>[t(F,{field:"stat_date",label:e.$t("finance.form.stat_date")},{default:a(()=>[t(R,{modelValue:u.value.stat_date,"onUpdate:modelValue":n[1]||(n[1]=o=>u.value.stat_date=o),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(O,{style:{height:"42px"},direction:"vertical"}),t(f,{flex:"86px",style:{"text-align":"right"}},{default:a(()=>[t(H,{direction:"vertical",size:18},{default:a(()=>[t(j,{type:"primary",onClick:T},{icon:a(()=>[t(_e)]),default:a(()=>[v(" "+_(e.$t("finance.form.search")),1)]),_:1})]),_:1})]),_:1})]),_:1})),[[M,["admin"]]]),W(t(O,{style:{"margin-top":"0","margin-bottom":"16px"}},null,512),[[M,["admin"]]]),t(I,{style:{"margin-bottom":"16px"}},{default:a(()=>[t(f,{span:12},{default:a(()=>[t(H,null,{default:a(()=>[t(j,{type:"primary",onClick:n[2]||(n[2]=o=>P({}))},{default:a(()=>[v(" \u5BFC\u51FA ")]),_:1})]),_:1})]),_:1}),t(f,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:a(()=>[t(z,{content:e.$t("searchTable.actions.refresh")},{default:a(()=>[d("div",{class:"action-icon",onClick:T},[t(pe,{size:"18"})])]),_:1},8,["content"]),t(ve,{onSelect:se},{content:a(()=>[(b(!0),w(Q,null,X($(ae),o=>(b(),K(be,{key:o.value,value:o.value,class:Ae({active:o.value===S.value})},{default:a(()=>[d("span",null,_(o.name),1)]),_:2},1032,["value","class"]))),128))]),default:a(()=>[t(z,{content:e.$t("searchTable.actions.density")},{default:a(()=>[d("div",dt,[t(fe,{size:"18"})])]),_:1},8,["content"])]),_:1}),t(z,{content:e.$t("searchTable.actions.columnSetting")},{default:a(()=>[t(xe,{trigger:"click",position:"bl",onPopupVisibleChange:ce},{content:a(()=>[d("div",_t,[(b(!0),w(Q,null,X(y.value,(o,Se)=>(b(),w("div",{key:o.dataIndex,class:"setting"},[d("div",pt,[t(he)]),d("div",null,[t(ye,{modelValue:o.checked,"onUpdate:modelValue":V=>o.checked=V,onChange:V=>ie(V,o,Se)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),d("div",ft,_(o.title==="#"?"\u5E8F\u5217\u53F7":o.title),1)]))),128))])]),default:a(()=>[d("div",mt,[t(ge,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),t(Ce,{ref_key:"tableRef",ref:L,"row-key":"id",loading:$(ee),pagination:x,columns:m.value,data:D.value,bordered:!1,size:S.value,"row-selection":Y,onPageChange:oe,onPageSizeChange:le,onSelectionChange:re},{total:a(({record:o})=>[v(_(o.total.toLocaleString()),1)]),tokens:a(({record:o})=>[v(_(o.tokens>0?`$${$(it)(o.tokens)}`:"$0.00"),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),t(ke,{visible:g.value,"onUpdate:visible":n[4]||(n[4]=o=>g.value=o),title:e.$t("finance.form.title.bill_export"),onCancel:de,onBeforeOk:ue},{default:a(()=>[t(q,{ref_key:"billExportForm",ref:N,model:k.value},{default:a(()=>[t(F,{field:"stat_date",label:e.$t("finance.form.stat_date"),rules:[{required:!0,message:e.$t("finance.error.stat_date.required")}]},{default:a(()=>[t(R,{modelValue:k.value.stat_date,"onUpdate:modelValue":n[3]||(n[3]=o=>k.value.stat_date=o),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"])]),_:1})])}}});const jt=$e(vt,[["__scopeId","data-v-9808d3a2"]]);export{jt as default};