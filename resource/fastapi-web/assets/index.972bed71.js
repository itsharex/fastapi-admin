import{_ as R,E as Y}from"./index.6fc23535.js";/* empty css               *//* empty css                */import{d as D,e as k,B as i,aD as f,aG as a,aH as l,aL as s,aM as g,bB as K,bC as O,b2 as P,b1 as Q,bK as x,aU as z,b5 as j,aE as y,C,aJ as S,aI as I,bu as ee,bv as le,bX as ae,bi as J,aS as oe,aT as re,a5 as de,a4 as te,bz as ue,F as ne,bs as se,u as me,aK as ie,aF as fe,bL as pe,bM as _e,bJ as ce,bN as ve}from"./arco.aed15247.js";import{u as X}from"./loading.b5911e1d.js";import{q as be,c as ge}from"./model.a03bd543.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css               *//* empty css                */import{e as we}from"./agent.6c0f1ffb.js";/* empty css               */import"./chart.9aa6eafa.js";import"./vue.0cc5b64a.js";import"./base.87fcf6e2.js";const ye=D({__name:"base-info",emits:["changeStep"],setup(L,{emit:V}){const c=k(),d=k({corp:"",name:"",model:"",type:"1",base_url:"",path:"",prompt:"",remark:""}),b=async()=>{var m;await((m=c.value)==null?void 0:m.validate())||V("changeStep","forward",{...d.value})};return(n,m)=>{const u=K,e=O,_=P,v=Q,U=x,q=z,M=j;return i(),f(M,{ref_key:"formRef",ref:c,model:d.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(_,{field:"corp",label:n.$t("model.label.corp"),rules:[{required:!0,message:n.$t("model.error.corp.required")}]},{default:a(()=>[l(e,{modelValue:d.value.corp,"onUpdate:modelValue":m[0]||(m[0]=o=>d.value.corp=o),placeholder:n.$t("model.placeholder.corp")},{default:a(()=>[l(u,{value:"OpenAI"},{default:a(()=>[s("OpenAI")]),_:1}),l(u,{value:"Baidu"},{default:a(()=>[s("\u767E\u5EA6")]),_:1}),l(u,{value:"Xfyun"},{default:a(()=>[s("\u79D1\u5927\u8BAF\u98DE")]),_:1}),l(u,{value:"Aliyun"},{default:a(()=>[s("\u963F\u91CC\u4E91")]),_:1}),l(u,{value:"ZhipuAI"},{default:a(()=>[s("\u667A\u8C31AI")]),_:1}),l(u,{value:"Midjourney"},{default:a(()=>[s("Midjourney")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"name",label:n.$t("model.label.name"),rules:[{required:!0,message:n.$t("model.error.name.required")}]},{default:a(()=>[l(v,{modelValue:d.value.name,"onUpdate:modelValue":m[1]||(m[1]=o=>d.value.name=o),placeholder:n.$t("model.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"model",label:n.$t("model.label.model"),rules:[{required:!0,message:n.$t("model.error.model.required")}]},{default:a(()=>[l(v,{modelValue:d.value.model,"onUpdate:modelValue":m[2]||(m[2]=o=>d.value.model=o),placeholder:n.$t("model.placeholder.model")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"type",label:n.$t("model.label.type"),rules:[{required:!0,message:n.$t("model.error.type.required")}]},{default:a(()=>[l(e,{modelValue:d.value.type,"onUpdate:modelValue":m[3]||(m[3]=o=>d.value.type=o),placeholder:n.$t("model.placeholder.type")},{default:a(()=>[l(u,{value:"1"},{default:a(()=>[s("\u6587\u751F\u6587")]),_:1}),l(u,{value:"2"},{default:a(()=>[s("\u6587\u751F\u56FE")]),_:1}),l(u,{value:"3"},{default:a(()=>[s("\u56FE\u751F\u6587")]),_:1}),l(u,{value:"4"},{default:a(()=>[s("\u56FE\u751F\u56FE")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"base_url",label:n.$t("model.label.base_url")},{default:a(()=>[l(v,{modelValue:d.value.base_url,"onUpdate:modelValue":m[4]||(m[4]=o=>d.value.base_url=o),placeholder:n.$t("model.placeholder.base_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"path",label:n.$t("model.label.path")},{default:a(()=>[l(v,{modelValue:d.value.path,"onUpdate:modelValue":m[5]||(m[5]=o=>d.value.path=o),placeholder:n.$t("model.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"prompt",label:n.$t("model.label.prompt")},{default:a(()=>[l(U,{modelValue:d.value.prompt,"onUpdate:modelValue":m[6]||(m[6]=o=>d.value.prompt=o),placeholder:n.$t("model.placeholder.prompt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"remark",label:n.$t("model.label.remark")},{default:a(()=>[l(U,{modelValue:d.value.remark,"onUpdate:modelValue":m[7]||(m[7]=o=>d.value.remark=o),placeholder:n.$t("model.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,null,{default:a(()=>[l(q,{type:"primary",onClick:b},{default:a(()=>[s(g(n.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const Ve=R(ye,[["__scopeId","data-v-f50e3504"]]),$e=D({__name:"advanced",emits:["changeStep"],setup(L,{emit:V}){const{setLoading:c}=X(!0),d=k([]);(async()=>{c(!0);try{const{data:o}=await be();d.value=o.items}catch{}finally{c(!1)}})();const n=k([]);(async()=>{c(!0);try{const{data:o}=await we();n.value=o.items}catch{}finally{c(!1)}})();const u=k(),e=k({billing_method:"1",prompt_ratio:1,completion_ratio:1,fixed_quota:1,data_format:"1",is_public:!0,is_enable_model_agent:!1,model_agents:[],is_forward:!1,forward_config:{forward_rule:"1",match_rule:"1",target_model:"",decision_model:"",keywords:[],target_models:[]}}),_=()=>{e.value.forward_config.keywords.push(""),e.value.forward_config.target_models.push("")},v=()=>{e.value.is_forward?e.value.forward_config.forward_rule==="2"?(e.value.forward_config.keywords=[""],e.value.forward_config.target_models=[""],e.value.forward_config.target_model=""):e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]):(e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[])},U=o=>{e.value.forward_config.keywords.length>1&&(e.value.forward_config.keywords.splice(o,1),e.value.forward_config.target_models.splice(o,1))},q=async()=>{var t;e.value.is_forward||(e.value.forward_config.forward_rule="",e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),await((t=u.value)==null?void 0:t.validate())||V("changeStep","submit",{...e.value})},M=()=>{V("changeStep","backward")};return(o,t)=>{const $=ae,B=J,p=P,N=oe,T=re,F=K,A=O,G=Q,H=de,E=z,Z=te,W=j;return i(),f(W,{ref_key:"formRef",ref:u,model:e.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(p,{field:"billing_method",label:o.$t("model.label.billingMethod"),rules:[{required:!0,message:o.$t("model.error.billingMethod.required")}]},{default:a(()=>[l(B,{size:"large"},{default:a(()=>[l($,{modelValue:e.value.billing_method,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.billing_method=r),value:"1","default-checked":!0},{default:a(()=>[s("\u500D\u7387")]),_:1},8,["modelValue"]),l($,{modelValue:e.value.billing_method,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.billing_method=r),value:"2"},{default:a(()=>[s("\u56FA\u5B9A\u989D\u5EA6")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),e.value.billing_method==="1"?(i(),f(p,{key:0,field:"prompt_ratio",label:o.$t("model.label.promptRatio"),rules:[{required:!0,message:o.$t("model.error.promptRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.prompt_ratio,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.prompt_ratio=r),min:.001,placeholder:o.$t("model.placeholder.promptRatio")},null,8,["modelValue","min","placeholder"])]),_:1},8,["label","rules"])):y("",!0),e.value.billing_method==="1"?(i(),f(p,{key:1,field:"completion_ratio",label:o.$t("model.label.completionRatio"),rules:[{required:!0,message:o.$t("model.error.completionRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.completion_ratio,"onUpdate:modelValue":t[3]||(t[3]=r=>e.value.completion_ratio=r),min:.001,placeholder:o.$t("model.placeholder.completionRatio")},null,8,["modelValue","min","placeholder"])]),_:1},8,["label","rules"])):y("",!0),e.value.billing_method==="2"?(i(),f(p,{key:2,field:"fixed_quota",label:o.$t("model.label.fixedQuota"),rules:[{required:!0,message:o.$t("model.error.fixedQuota.required")}]},{default:a(()=>[l(N,{modelValue:e.value.fixed_quota,"onUpdate:modelValue":t[4]||(t[4]=r=>e.value.fixed_quota=r),min:0,max:9999999999999,placeholder:o.$t("model.placeholder.fixedQuota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),l(p,{field:"data_format",label:o.$t("model.label.dataFormat"),rules:[{required:!0,message:o.$t("model.error.dataFormat.required")}]},{default:a(()=>[l(B,{size:"large"},{default:a(()=>[l($,{modelValue:e.value.data_format,"onUpdate:modelValue":t[5]||(t[5]=r=>e.value.data_format=r),value:"1","default-checked":!0},{default:a(()=>[s("\u7EDF\u4E00\u683C\u5F0F")]),_:1},8,["modelValue"]),l($,{modelValue:e.value.data_format,"onUpdate:modelValue":t[6]||(t[6]=r=>e.value.data_format=r),value:"2"},{default:a(()=>[s("\u5B98\u65B9\u683C\u5F0F")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),l(p,{field:"is_public",label:o.$t("model.label.isPublic"),rules:[{required:!0}]},{default:a(()=>[l(T,{modelValue:e.value.is_public,"onUpdate:modelValue":t[7]||(t[7]=r=>e.value.is_public=r)},null,8,["modelValue"])]),_:1},8,["label"]),l(p,{field:"is_enable_model_agent",label:o.$t("model.label.isEnableModelAgent")},{default:a(()=>[l(T,{modelValue:e.value.is_enable_model_agent,"onUpdate:modelValue":t[8]||(t[8]=r=>e.value.is_enable_model_agent=r)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_model_agent?(i(),f(p,{key:3,field:"model_agents",label:o.$t("model.label.modelAgents"),rules:[{required:!0,message:o.$t("model.error.modelAgents.required")}]},{default:a(()=>[l(A,{modelValue:e.value.model_agents,"onUpdate:modelValue":t[9]||(t[9]=r=>e.value.model_agents=r),placeholder:o.$t("model.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-clear":""},{default:a(()=>[(i(!0),C(S,null,I(n.value,r=>(i(),f(F,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),l(p,{field:"model_forward",label:o.$t("model.label.modelForward")},{default:a(()=>[l(T,{modelValue:e.value.is_forward,"onUpdate:modelValue":t[10]||(t[10]=r=>e.value.is_forward=r),onChange:v},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_forward?(i(),f(p,{key:4,field:"forward_config.forward_rule",label:o.$t("model.label.forwardRule"),rules:[{required:!0,message:o.$t("model.error.forwardRule.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.forward_rule,"onUpdate:modelValue":t[11]||(t[11]=r=>e.value.forward_config.forward_rule=r),placeholder:o.$t("model.placeholder.forwardRule"),onChange:v},{default:a(()=>[l(F,{value:"1"},{default:a(()=>[s("\u5168\u90E8\u8F6C\u53D1")]),_:1}),l(F,{value:"2"},{default:a(()=>[s("\u6309\u5173\u952E\u5B57")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="1"?(i(),f(p,{key:5,field:"forward_config.target_model",label:o.$t("model.label.targetModel"),rules:[{required:!0,message:o.$t("model.error.targetModel.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.target_model,"onUpdate:modelValue":t[12]||(t[12]=r=>e.value.forward_config.target_model=r),placeholder:o.$t("model.placeholder.targetModel")},{default:a(()=>[(i(!0),C(S,null,I(d.value,r=>(i(),f(F,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="2"?(i(),f(p,{key:6,field:"forward_config.match_rule",label:o.$t("model.label.matchRule"),rules:[{required:!0,message:o.$t("model.error.matchRule.required")}]},{default:a(()=>[l(B,{size:"large"},{default:a(()=>[l($,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":t[13]||(t[13]=r=>e.value.forward_config.match_rule=r),value:"1","default-checked":!0},{default:a(()=>[s("\u667A\u80FD\u5339\u914D")]),_:1},8,["modelValue"]),l($,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":t[14]||(t[14]=r=>e.value.forward_config.match_rule=r),value:"2"},{default:a(()=>[s("\u6B63\u5219\u5339\u914D")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"])):y("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="2"&&e.value.forward_config.match_rule==="1"?(i(),f(p,{key:7,field:"forward_config.decision_model",label:o.$t("model.label.decisionModel"),rules:[{required:!0,message:o.$t("model.error.decisionModel.required")}]},{default:a(()=>[l(A,{modelValue:e.value.forward_config.decision_model,"onUpdate:modelValue":t[15]||(t[15]=r=>e.value.forward_config.decision_model=r),placeholder:o.$t("model.placeholder.decisionModel")},{default:a(()=>[(i(!0),C(S,null,I(d.value,r=>(i(),f(F,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):y("",!0),(i(!0),C(S,null,I(e.value.forward_config.keywords,(r,w)=>ee((i(),f(p,{key:w,field:`forward_config.keywords[${w}]`&&`forward_config.target_models[${w}]`,label:`${w+1}. `+o.$t("model.label.keywords"),rules:[{required:!0,message:o.$t("model.error.keywordsAndtargetModel.required")}]},{default:a(()=>[l(G,{modelValue:e.value.forward_config.keywords[w],"onUpdate:modelValue":h=>e.value.forward_config.keywords[w]=h,placeholder:o.$t("model.placeholder.keywords"),style:{width:"40%","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),l(A,{modelValue:e.value.forward_config.target_models[w],"onUpdate:modelValue":h=>e.value.forward_config.target_models[w]=h,placeholder:o.$t("model.placeholder.targetModel"),style:{width:"40%"}},{default:a(()=>[(i(!0),C(S,null,I(d.value,h=>(i(),f(F,{key:h.id,value:h.id,label:h.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),l(E,{type:"primary",shape:"circle",style:{margin:"0 10px 0 10px"},onClick:_},{default:a(()=>[l(H)]),_:1}),l(E,{type:"secondary",shape:"circle",onClick:h=>U(w)},{default:a(()=>[l(Z)]),_:2},1032,["onClick"])]),_:2},1032,["field","label","rules"])),[[le,e.value.is_forward&&e.value.forward_config.forward_rule==="2"]])),128)),l(p,null,{default:a(()=>[l(B,null,{default:a(()=>[l(E,{type:"secondary",onClick:M},{default:a(()=>[s(g(o.$t("model.button.prev")),1)]),_:1}),l(E,{type:"primary",onClick:q},{default:a(()=>[s(g(o.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const he=R($e,[["__scopeId","data-v-2a31b9a1"]]),ke={class:"success-wrap"},qe=D({__name:"success",emits:["changeStep"],setup(L,{emit:V}){const c=()=>{V("changeStep",1)};return(d,b)=>{const n=ue,m=z,u=J;return i(),C("div",ke,[l(n,{status:"success",title:d.$t("model.success.title"),subtitle:d.$t("model.success.create.subTitle")},null,8,["title","subtitle"]),l(u,{size:16},{default:a(()=>[l(m,{key:"finish",type:"secondary",onClick:b[0]||(b[0]=e=>d.$router.push({name:"ModelList"}))},{default:a(()=>[s(g(d.$t("model.button.finish")),1)]),_:1}),l(m,{key:"again",type:"primary",onClick:c},{default:a(()=>[s(g(d.$t("model.button.again")),1)]),_:1})]),_:1})])}}});const Ce=R(qe,[["__scopeId","data-v-77484237"]]),Ue={class:"container"},Fe={class:"wrapper"},Me={name:"ModelCreate"},Ae=D({...Me,setup(L){const{loading:V,setLoading:c}=X(!1),d=k(1),b=k({}),n=async()=>{c(!0);try{await ge(b.value),d.value=3,b.value={}}catch{}finally{c(!1)}},m=(u,e)=>{if(typeof u=="number"){d.value=u;return}if(u==="forward"||u==="submit"){if(b.value={...b.value,...e},u==="submit"){n();return}d.value+=1}else u==="backward"&&(d.value-=1)};return(u,e)=>{const _=Y,v=ie,U=fe,q=pe,M=_e,o=ce,t=ve;return i(),C("div",Ue,[l(U,{class:"container-breadcrumb"},{default:a(()=>[l(v,null,{default:a(()=>[l(_)]),_:1}),l(v,null,{default:a(()=>[s(g(u.$t("menu.model")),1)]),_:1}),l(v,null,{default:a(()=>[s(g(u.$t("menu.model.create")),1)]),_:1})]),_:1}),l(t,{loading:me(V),style:{width:"100%"}},{default:a(()=>[l(o,{class:"general-card",bordered:!1},{default:a(()=>[ne("div",Fe,[l(M,{current:d.value,"onUpdate:current":e[0]||(e[0]=$=>d.value=$),style:{width:"660px"},"line-less":"",class:"steps"},{default:a(()=>[l(q,{description:u.$t("model.subTitle.baseInfo")},{default:a(()=>[s(g(u.$t("model.title.baseInfo")),1)]),_:1},8,["description"]),l(q,{description:u.$t("model.subTitle.advanced")},{default:a(()=>[s(g(u.$t("model.title.advanced")),1)]),_:1},8,["description"]),l(q,{description:u.$t("model.subTitle.create.finish")},{default:a(()=>[s(g(u.$t("model.title.create.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(i(),f(se,null,[d.value===1?(i(),f(Ve,{key:0,onChangeStep:m})):d.value===2?(i(),f(he,{key:1,onChangeStep:m})):d.value===3?(i(),f(Ce,{key:2,onChangeStep:m})):y("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const Ze=R(Ae,[["__scopeId","data-v-25925057"]]);export{Ze as default};
