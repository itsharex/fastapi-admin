import{x as N,_ as O}from"./index.7ec569d4.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css                */import{d as z,e as m,B as c,C as k,aH as t,aG as r,aL as d,aM as u,F as w,aJ as G,aI as H,aD as J,u as K,aK as P,aF as Q,bE as j,bA as W,bB as X,b2 as Y,b1 as Z,aS as x,bO as ee,bP as ae,bQ as le,bi as te,aT as oe,aU as re,b5 as ne,bI as se,bR as de,g as ue}from"./arco.54c7388d.js";import{u as me}from"./loading.7321a6c2.js";import{h as pe,f as ie}from"./vue.aa90ed69.js";import{e as ce,c as be}from"./agent.d7ff6255.js";import{q as _e}from"./corp.560f9b9e.js";import{a as ge}from"./model.c47bb2c9.js";import"./chart.f14251fc.js";import"./base.87fcf6e2.js";const fe={class:"container"},ve={class:"wrapper"},ye={class:"submit-btn"},he={name:"ModelAgentUpdate"},Ve=z({...he,setup($e){const{loading:U,setLoading:s}=me(!1),{proxy:q}=ue(),B=pe(),C=ie(),b=m([]);(async()=>{s(!0);try{const{data:a}=await _e();b.value=a.items}catch{}finally{s(!1)}})();const _=m([]);(async()=>{s(!0);try{const{data:a}=await ge();_.value=a.items}catch{}finally{s(!1)}})();const g=m(),l=m({id:"",corp:"",name:"",base_url:"",path:"",weight:m(20),remark:"",status:1,models:[],lb_strategy:"",key:"",is_agents_only:!0}),M=async()=>{var e;if(!await((e=g.value)==null?void 0:e.validate())){s(!0);try{await ce(l.value).then(()=>{q.$message.success("\u66F4\u65B0\u6210\u529F"),C.push({name:"ModelAgentList"})})}catch{}finally{s(!1)}}};return(async(a={id:B.query.id})=>{s(!0);try{const{data:e}=await be(a);l.value.id=e.id,l.value.corp=e.corp,l.value.name=e.name,l.value.base_url=e.base_url,l.value.path=e.path,l.value.weight=e.weight,l.value.remark=e.remark,l.value.status=e.status,l.value.models=e.models,l.value.lb_strategy=String(e.lb_strategy),l.value.key=e.key}catch{}finally{s(!1)}})(),(a,e)=>{const f=N,p=P,I=Q,v=j,A=W,D=X,n=Y,i=Z,F=x,y=ee,L=ae,h=le,V=te,R=oe,$=re,S=ne,T=se,E=de;return c(),k("div",fe,[t(I,{class:"container-breadcrumb"},{default:r(()=>[t(p,null,{default:r(()=>[t(f)]),_:1}),t(p,null,{default:r(()=>[d(u(a.$t("menu.agent")),1)]),_:1}),t(p,null,{default:r(()=>[d(u(a.$t("menu.model.agent.update")),1)]),_:1})]),_:1}),t(E,{loading:K(U),style:{width:"100%"}},{default:r(()=>[t(T,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:r(()=>[w("div",ve,[t(S,{ref_key:"formRef",ref:g,model:l.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:r(()=>[t(v,{orientation:"left"},{default:r(()=>[d(u(a.$t("common.title.baseInfo")),1)]),_:1}),t(n,{field:"corp",label:a.$t("model.agent.label.corp"),rules:[{required:!0,message:a.$t("model.agent.error.corp.required")}]},{default:r(()=>[t(D,{modelValue:l.value.corp,"onUpdate:modelValue":e[0]||(e[0]=o=>l.value.corp=o),placeholder:a.$t("model.agent.placeholder.corp"),"allow-search":""},{default:r(()=>[(c(!0),k(G,null,H(b.value,o=>(c(),J(A,{key:o.id,value:o.id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(n,{field:"name",label:a.$t("model.agent.label.name"),rules:[{required:!0,message:a.$t("model.agent.error.name.required")},{match:/^.{1,100}$/,message:a.$t("model.agent.error.name.pattern")}]},{default:r(()=>[t(i,{modelValue:l.value.name,"onUpdate:modelValue":e[1]||(e[1]=o=>l.value.name=o),placeholder:a.$t("model.agent.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(n,{field:"base_url",label:a.$t("model.agent.label.baseUrl"),rules:[{required:!0,message:a.$t("model.agent.error.baseUrl.required")}]},{default:r(()=>[t(i,{modelValue:l.value.base_url,"onUpdate:modelValue":e[2]||(e[2]=o=>l.value.base_url=o),placeholder:a.$t("model.agent.placeholder.baseUrl")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),t(n,{field:"path",label:a.$t("model.agent.label.path")},{default:r(()=>[t(i,{modelValue:l.value.path,"onUpdate:modelValue":e[3]||(e[3]=o=>l.value.path=o),placeholder:a.$t("model.agent.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{field:"weight",label:a.$t("model.agent.label.weight")},{default:r(()=>[t(F,{modelValue:l.value.weight,"onUpdate:modelValue":e[4]||(e[4]=o=>l.value.weight=o),precision:0,min:0,max:999,placeholder:a.$t("model.agent.placeholder.weight")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{field:"remark",label:a.$t("model.agent.label.remark")},{default:r(()=>[t(y,{modelValue:l.value.remark,"onUpdate:modelValue":e[5]||(e[5]=o=>l.value.remark=o),placeholder:a.$t("model.agent.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(v,{orientation:"left"},{default:r(()=>[d(u(a.$t("common.title.advanced")),1)]),_:1}),t(n,{field:"models",label:a.$t("model.agent.label.models"),rules:[{required:!1}]},{default:r(()=>[t(L,{modelValue:l.value.models,"onUpdate:modelValue":e[6]||(e[6]=o=>l.value.models=o),"allow-search":!0,"allow-clear":!0,"tree-checkable":!0,"tree-checked-strategy":"child",data:_.value,placeholder:a.$t("model.agent.placeholder.models"),"max-tag-count":3},null,8,["modelValue","data","placeholder"])]),_:1},8,["label"]),t(n,{field:"lb_strategy",label:a.$t("model.agent.label.lb_strategy")},{default:r(()=>[t(V,{size:"large"},{default:r(()=>[t(h,{modelValue:l.value.lb_strategy,"onUpdate:modelValue":e[7]||(e[7]=o=>l.value.lb_strategy=o),value:"1","default-checked":!0},{default:r(()=>[d(" \u8F6E\u8BE2 ")]),_:1},8,["modelValue"]),t(h,{modelValue:l.value.lb_strategy,"onUpdate:modelValue":e[8]||(e[8]=o=>l.value.lb_strategy=o),value:"2"},{default:r(()=>[d("\u6743\u91CD")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label"]),t(n,{field:"key",label:a.$t("model.agent.label.key")},{default:r(()=>[t(y,{modelValue:l.value.key,"onUpdate:modelValue":e[9]||(e[9]=o=>l.value.key=o),placeholder:a.$t("model.agent.placeholder.key"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),t(n,{field:"is_agents_only",label:a.$t("model.agent.label.isAgentsOnly")},{default:r(()=>[t(R,{modelValue:l.value.is_agents_only,"onUpdate:modelValue":e[10]||(e[10]=o=>l.value.is_agents_only=o)},null,8,["modelValue"])]),_:1},8,["label"]),t(V,null,{default:r(()=>[w("div",ye,[t($,{type:"secondary",onClick:e[11]||(e[11]=o=>a.$router.push({name:"ModelAgentList"}))},{default:r(()=>[d(u(a.$t("button.cancel")),1)]),_:1}),t($,{type:"primary",onClick:M},{default:r(()=>[d(u(a.$t("button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const Xe=O(Ve,[["__scopeId","data-v-b7a0e574"]]);export{Xe as default};
