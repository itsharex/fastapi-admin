import{u as ve,E as be,o as ge,x as he,I as ye,y as we,_ as Ie}from"./index.3e0040d4.js";/* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css              */import{c as D,S as $e}from"./sortable.esm.8b1710c2.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css              */import{d as Ve,r as M,e as f,c as y,w as ke,B as v,C as h,aH as e,aG as l,aL as u,aM as c,u as w,F as p,aJ as O,aI as j,aD as Ce,D as Se,n as ze,aK as xe,aF as De,bA as Be,b2 as Te,bB as Ae,b1 as Ne,bD as Fe,bE as Ue,b5 as Pe,bF as Ee,ab as Le,aU as Me,bi as Oe,bj as je,bl as Ge,bm as Re,b4 as He,bG as Je,bI as Xe,bJ as Ze}from"./arco.47b3c23b.js";import{u as qe}from"./loading.b238ab8e.js";import{a as Ke}from"./model.0498f73b.js";import"./chart.49ffccb2.js";import"./vue.94924b34.js";import"./base.87fcf6e2.js";const Qe={class:"container"},We={class:"action-icon"},Ye={class:"action-icon"},el={id:"tableSetting"},ll={style:{"margin-right":"4px",cursor:"move"}},al={class:"title"},tl={key:0,class:"circle red"},ol={key:1,class:"circle"},nl={name:"ModelList"},sl=Ve({...nl,setup(cl){const G=M({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),B=()=>({corp:"",name:"",model:"",type:f(),status:f(),created_at:[]}),{loading:R,setLoading:T}=qe(!0),{t:n}=ve(),A=f([]),s=f(B()),_=f([]),I=f([]),k=f("medium"),b={current:1,pageSize:10,showTotal:!0,showPageSize:!0},$=M({...b}),H=y(()=>[{name:n("searchTable.size.mini"),value:"mini"},{name:n("searchTable.size.small"),value:"small"},{name:n("searchTable.size.medium"),value:"medium"},{name:n("searchTable.size.large"),value:"large"}]),J=y(()=>[{title:n("model.columns.corp"),dataIndex:"corp",slotName:"corp",align:"center",width:110},{title:n("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:n("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:n("model.columns.type"),dataIndex:"type",slotName:"type",align:"center"},{title:n("model.columns.prompt_price"),dataIndex:"prompt_price",slotName:"prompt_price",align:"center"},{title:n("model.columns.completion_price"),dataIndex:"completion_price",slotName:"completion_price",align:"center"},{title:n("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:75},{title:n("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132}]),X=y(()=>[{label:n("model.dict.corp.OpenAI"),value:"OpenAI"},{label:n("model.dict.corp.Baidu"),value:"Baidu"},{label:n("model.dict.corp.Xfyun"),value:"Xfyun"},{label:n("model.dict.corp.Aliyun"),value:"Aliyun"},{label:n("model.dict.corp.ZhipuAI"),value:"ZhipuAI"},{label:n("model.dict.corp.Google"),value:"Google"},{label:n("model.dict.corp.DeepSeek"),value:"DeepSeek"},{label:n("model.dict.corp.Midjourney"),value:"Midjourney"}]),Z=y(()=>[{label:n("model.dict.type.1"),value:1},{label:n("model.dict.type.2"),value:2},{label:n("model.dict.type.3"),value:3},{label:n("model.dict.type.4"),value:4},{label:n("model.dict.type.100"),value:100}]),q=y(()=>[{label:n("model.dict.status.1"),value:1},{label:n("model.dict.status.2"),value:2}]),V=async(a={...b})=>{T(!0);try{const{data:o}=await Ke(a);A.value=o.items,$.current=a.current,$.pageSize=a.pageSize,$.total=o.paging.total}catch{}finally{T(!1)}},N=()=>{V({...b,...s.value})},K=a=>{V({...b,...s.value,current:a})},Q=a=>{b.pageSize=a,V({...b,...s.value})};V();const W=()=>{s.value=B()},Y=(a,o)=>{k.value=a},ee=(a,o,d)=>{a?_.value.splice(d,0,o):_.value=I.value.filter(i=>i.dataIndex!==o.dataIndex)},F=(a,o,d,i=!1)=>{const r=i?D(a):a;return o>-1&&d>-1&&r.splice(o,1,r.splice(d,1,r[o]).pop()),r},le=a=>{a&&ze(()=>{const o=document.getElementById("tableSetting");new $e(o,{onEnd(d){const{oldIndex:i,newIndex:r}=d;F(_.value,i,r),F(I.value,i,r)}})})};return ke(()=>J.value,a=>{_.value=D(a),_.value.forEach((o,d)=>{o.checked=!0}),I.value=D(_.value)},{deep:!0,immediate:!0}),(a,o)=>{const d=be,i=xe,r=De,C=Be,g=Te,m=Ae,U=Ne,ae=Fe,S=Ue,te=Pe,P=Ee,oe=Le,E=Me,L=ge,ne=Oe,z=je,se=he,ce=Ge,de=Re,ie=ye,re=we,me=He,ue=Je,pe=Xe,_e=Ze;return v(),h("div",Qe,[e(r,{class:"container-breadcrumb"},{default:l(()=>[e(i,null,{default:l(()=>[e(d)]),_:1}),e(i,null,{default:l(()=>[u(c(a.$t("menu.my.model")),1)]),_:1})]),_:1}),e(_e,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:l(()=>[e(S,null,{default:l(()=>[e(m,{flex:1},{default:l(()=>[e(te,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:l(()=>[e(S,{gutter:16},{default:l(()=>[e(m,{span:8},{default:l(()=>[e(g,{field:"corp",label:a.$t("model.form.corp")},{default:l(()=>[e(C,{modelValue:s.value.corp,"onUpdate:modelValue":o[0]||(o[0]=t=>s.value.corp=t),options:w(X),placeholder:a.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:l(()=>[e(g,{field:"name",label:a.$t("model.form.name")},{default:l(()=>[e(U,{modelValue:s.value.name,"onUpdate:modelValue":o[1]||(o[1]=t=>s.value.name=t),placeholder:a.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:l(()=>[e(g,{field:"model",label:a.$t("model.form.model")},{default:l(()=>[e(U,{modelValue:s.value.model,"onUpdate:modelValue":o[2]||(o[2]=t=>s.value.model=t),placeholder:a.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:l(()=>[e(g,{field:"type",label:a.$t("model.form.type")},{default:l(()=>[e(C,{modelValue:s.value.type,"onUpdate:modelValue":o[3]||(o[3]=t=>s.value.type=t),options:w(Z),placeholder:a.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:l(()=>[e(g,{field:"status",label:a.$t("model.form.status")},{default:l(()=>[e(C,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=t=>s.value.status=t),options:w(q),placeholder:a.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),e(m,{span:8},{default:l(()=>[e(g,{field:"created_at",label:a.$t("model.form.created_at")},{default:l(()=>[e(ae,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=t=>s.value.created_at=t),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),e(P,{style:{height:"84px"},direction:"vertical"}),e(m,{flex:"86px",style:{"text-align":"right"}},{default:l(()=>[e(ne,{direction:"vertical",size:18},{default:l(()=>[e(E,{type:"primary",onClick:N},{icon:l(()=>[e(oe)]),default:l(()=>[u(" "+c(a.$t("model.form.search")),1)]),_:1}),e(E,{onClick:W},{icon:l(()=>[e(L)]),default:l(()=>[u(" "+c(a.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),e(P,{style:{"margin-top":"0"}}),e(S,{style:{"margin-bottom":"16px"}},{default:l(()=>[e(m,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:l(()=>[e(z,{content:a.$t("searchTable.actions.refresh")},{default:l(()=>[p("div",{class:"action-icon",onClick:N},[e(L,{size:"18"})])]),_:1},8,["content"]),e(de,{onSelect:Y},{content:l(()=>[(v(!0),h(O,null,j(w(H),t=>(v(),Ce(ce,{key:t.value,value:t.value,class:Se({active:t.value===k.value})},{default:l(()=>[p("span",null,c(t.name),1)]),_:2},1032,["value","class"]))),128))]),default:l(()=>[e(z,{content:a.$t("searchTable.actions.density")},{default:l(()=>[p("div",We,[e(se,{size:"18"})])]),_:1},8,["content"])]),_:1}),e(z,{content:a.$t("searchTable.actions.columnSetting")},{default:l(()=>[e(ue,{trigger:"click",position:"bl",onPopupVisibleChange:le},{content:l(()=>[p("div",el,[(v(!0),h(O,null,j(I.value,(t,fe)=>(v(),h("div",{key:t.dataIndex,class:"setting"},[p("div",ll,[e(re)]),p("div",null,[e(me,{modelValue:t.checked,"onUpdate:modelValue":x=>t.checked=x,onChange:x=>ee(x,t,fe)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),p("div",al,c(t.title==="#"?"\u5E8F\u5217\u53F7":t.title),1)]))),128))])]),default:l(()=>[p("div",Ye,[e(ie,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),e(pe,{"row-key":"id",loading:w(R),pagination:$,columns:_.value,data:A.value,bordered:!1,size:k.value,"row-selection":G,onPageChange:K,onPageSizeChange:Q},{type:l(({record:t})=>[u(c(a.$t(`model.dict.type.${t.type}`)),1)]),corp:l(({record:t})=>[u(c(a.$t(`model.dict.corp.${t.corp}`)),1)]),prompt_price:l(({record:t})=>[u(c(t.billing_method===1?`$${t.prompt_price}/k`:"-"),1)]),completion_price:l(({record:t})=>[u(c(t.billing_method===1?`$${t.completion_price}/k`:`$${t.fixed_price}/\u6B21`),1)]),status:l(({record:t})=>[t.status===2?(v(),h("span",tl)):(v(),h("span",ol)),u(" "+c(a.$t(`model.dict.status.${t.status}`)),1)]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1})])}}});const xl=Ie(sl,[["__scopeId","data-v-e38f5719"]]);export{xl as default};
