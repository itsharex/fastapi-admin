import{u as be,E as ve,o as ge,x as he,I as ye,y as we,_ as Ie}from"./index.36ee875b.js";/* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css              */import{c as D,S as $e}from"./sortable.esm.2109e0e3.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Ve,r as M,e as f,c as y,w as ke,B as b,C as h,aH as e,aG as t,aL as u,aM as c,u as w,F as p,aJ as O,aI as j,aD as Ce,D as Se,n as ze,aK as xe,aF as De,bC as Be,b2 as Te,bA as Ae,b1 as Ne,bD as Fe,bE as Ue,b5 as Pe,bF as Ee,ab as Le,aU as Me,bi as Oe,bj as je,bl as Re,bm as Ge,b4 as He,bG as Je,bI as Xe,bJ as Ze}from"./arco.aed15247.js";import{u as qe}from"./loading.b5911e1d.js";import{a as Ke}from"./model.c407852e.js";import"./chart.9aa6eafa.js";import"./vue.0cc5b64a.js";import"./base.87fcf6e2.js";const Qe={class:"container"},We={class:"action-icon"},Ye={class:"action-icon"},et={id:"tableSetting"},tt={style:{"margin-right":"4px",cursor:"move"}},at={class:"title"},lt={key:0,class:"circle red"},ot={key:1,class:"circle"},nt={name:"ModelList"},st=Ve({...nt,setup(ct){const R=M({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),B=()=>({corp:"",name:"",model:"",type:f(),status:f(),created_at:[]}),{loading:G,setLoading:T}=qe(!0),{t:n}=be(),A=f([]),s=f(B()),_=f([]),I=f([]),k=f("medium"),v={current:1,pageSize:10,showTotal:!0,showPageSize:!0},$=M({...v}),H=y(()=>[{name:n("searchTable.size.mini"),value:"mini"},{name:n("searchTable.size.small"),value:"small"},{name:n("searchTable.size.medium"),value:"medium"},{name:n("searchTable.size.large"),value:"large"}]),J=y(()=>[{title:n("model.columns.corp"),dataIndex:"corp",slotName:"corp",align:"center",width:110},{title:n("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:n("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:n("model.columns.type"),dataIndex:"type",slotName:"type",align:"center"},{title:n("model.columns.prompt_price"),dataIndex:"prompt_price",slotName:"prompt_price",align:"center"},{title:n("model.columns.completion_price"),dataIndex:"completion_price",slotName:"completion_price",align:"center"},{title:n("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:80},{title:n("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132}]),X=y(()=>[{label:n("model.dict.corp.OpenAI"),value:"OpenAI"},{label:n("model.dict.corp.Baidu"),value:"Baidu"},{label:n("model.dict.corp.Xfyun"),value:"Xfyun"},{label:n("model.dict.corp.Aliyun"),value:"Aliyun"},{label:n("model.dict.corp.ZhipuAI"),value:"ZhipuAI"},{label:n("model.dict.corp.Midjourney"),value:"Midjourney"}]),Z=y(()=>[{label:n("model.dict.type.1"),value:1},{label:n("model.dict.type.2"),value:2},{label:n("model.dict.type.3"),value:3},{label:n("model.dict.type.4"),value:4}]),q=y(()=>[{label:n("model.dict.status.1"),value:1},{label:n("model.dict.status.2"),value:2}]),V=async(a={...v})=>{T(!0);try{const{data:o}=await Ke(a);A.value=o.items,$.current=a.current,$.pageSize=a.pageSize,$.total=o.paging.total}catch{}finally{T(!1)}},N=()=>{V({...v,...s.value})},K=a=>{V({...v,...s.value,current:a})},Q=a=>{v.pageSize=a,V({...v,...s.value})};V();const W=()=>{s.value=B()},Y=(a,o)=>{k.value=a},ee=(a,o,d)=>{a?_.value.splice(d,0,o):_.value=I.value.filter(i=>i.dataIndex!==o.dataIndex)},F=(a,o,d,i=!1)=>{const r=i?D(a):a;return o>-1&&d>-1&&r.splice(o,1,r.splice(d,1,r[o]).pop()),r},te=a=>{a&&ze(()=>{const o=document.getElementById("tableSetting");new $e(o,{onEnd(d){const{oldIndex:i,newIndex:r}=d;F(_.value,i,r),F(I.value,i,r)}})})};return ke(()=>J.value,a=>{_.value=D(a),_.value.forEach((o,d)=>{o.checked=!0}),I.value=D(_.value)},{deep:!0,immediate:!0}),(a,o)=>{const d=ve,i=xe,r=De,C=Be,g=Te,m=Ae,U=Ne,ae=Fe,S=Ue,le=Pe,P=Ee,oe=Le,E=Me,L=ge,ne=Oe,z=je,se=he,ce=Re,de=Ge,ie=ye,re=we,me=He,ue=Je,pe=Xe,_e=Ze;return b(),h("div",Qe,[e(r,{class:"container-breadcrumb"},{default:t(()=>[e(i,null,{default:t(()=>[e(d)]),_:1}),e(i,null,{default:t(()=>[u(c(a.$t("menu.my.model")),1)]),_:1})]),_:1}),e(_e,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[e(S,null,{default:t(()=>[e(m,{flex:1},{default:t(()=>[e(le,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[e(S,{gutter:16},{default:t(()=>[e(m,{span:8},{default:t(()=>[e(g,{field:"corp",label:a.$t("model.form.corp")},{default:t(()=>[e(C,{modelValue:s.value.corp,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value.corp=l),options:w(X),placeholder:a.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:t(()=>[e(g,{field:"name",label:a.$t("model.form.name")},{default:t(()=>[e(U,{modelValue:s.value.name,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value.name=l),placeholder:a.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:t(()=>[e(g,{field:"model",label:a.$t("model.form.model")},{default:t(()=>[e(U,{modelValue:s.value.model,"onUpdate:modelValue":o[2]||(o[2]=l=>s.value.model=l),placeholder:a.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:t(()=>[e(g,{field:"type",label:a.$t("model.form.type")},{default:t(()=>[e(C,{modelValue:s.value.type,"onUpdate:modelValue":o[3]||(o[3]=l=>s.value.type=l),options:w(Z),placeholder:a.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:t(()=>[e(g,{field:"status",label:a.$t("model.form.status")},{default:t(()=>[e(C,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.status=l),options:w(q),placeholder:a.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:t(()=>[e(g,{field:"created_at",label:a.$t("model.form.created_at")},{default:t(()=>[e(ae,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(P,{style:{height:"84px"},direction:"vertical"}),e(m,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[e(ne,{direction:"vertical",size:18},{default:t(()=>[e(E,{type:"primary",onClick:N},{icon:t(()=>[e(oe)]),default:t(()=>[u(" "+c(a.$t("model.form.search")),1)]),_:1}),e(E,{onClick:W},{icon:t(()=>[e(L)]),default:t(()=>[u(" "+c(a.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{style:{"margin-top":"0"}}),e(S,{style:{"margin-bottom":"16px"}},{default:t(()=>[e(m,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:t(()=>[e(z,{content:a.$t("searchTable.actions.refresh")},{default:t(()=>[p("div",{class:"action-icon",onClick:N},[e(L,{size:"18"})])]),_:1},8,["content"]),e(de,{onSelect:Y},{content:t(()=>[(b(!0),h(O,null,j(w(H),l=>(b(),Ce(ce,{key:l.value,value:l.value,class:Se({active:l.value===k.value})},{default:t(()=>[p("span",null,c(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[e(z,{content:a.$t("searchTable.actions.density")},{default:t(()=>[p("div",We,[e(se,{size:"18"})])]),_:1},8,["content"])]),_:1}),e(z,{content:a.$t("searchTable.actions.columnSetting")},{default:t(()=>[e(ue,{trigger:"click",position:"bl",onPopupVisibleChange:te},{content:t(()=>[p("div",et,[(b(!0),h(O,null,j(I.value,(l,fe)=>(b(),h("div",{key:l.dataIndex,class:"setting"},[p("div",tt,[e(re)]),p("div",null,[e(me,{modelValue:l.checked,"onUpdate:modelValue":x=>l.checked=x,onChange:x=>ee(x,l,fe)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),p("div",at,c(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:t(()=>[p("div",Ye,[e(ie,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),e(pe,{"row-key":"id",loading:w(G),pagination:$,columns:_.value,data:A.value,bordered:!1,size:k.value,"row-selection":R,onPageChange:K,onPageSizeChange:Q},{type:t(({record:l})=>[u(c(a.$t(`model.dict.type.${l.type}`)),1)]),corp:t(({record:l})=>[u(c(a.$t(`model.dict.corp.${l.corp}`)),1)]),prompt_price:t(({record:l})=>[u(c(l.billing_method===1?`$${l.prompt_price}/k`:"-"),1)]),completion_price:t(({record:l})=>[u(c(l.billing_method===1?`$${l.completion_price}/k`:`$${l.fixed_price}/\u6B21`),1)]),status:t(({record:l})=>[l.status===2?(b(),h("span",lt)):(b(),h("span",ot)),u(" "+c(a.$t(`model.dict.status.${l.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1})])}}});const xt=Ie(st,[["__scopeId","data-v-9f068b66"]]);export{xt as default};