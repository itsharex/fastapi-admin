import{_ as B,F as ee}from"./index.ca71b56b.js";/* empty css               *//* empty css                */import{d as D,e as V,B as d,aD as p,aG as a,aH as l,C as U,aJ as A,aI as L,aL as f,aM as g,bA as J,bB as G,b2 as H,b1 as O,bK as le,aU as K,b5 as Z,F as z,aE as h,bu as ae,bv as oe,bZ as re,bi as j,aS as te,aT as de,b4 as ue,a5 as ne,a4 as se,bz as me,bs as ie,u as fe,aK as pe,aF as _e,bL as ce,bM as ve,bJ as be,bN as ge}from"./arco.eaecec6c.js";import{u as P}from"./loading.4b5db008.js";import{q as we,d as ye}from"./model.039d3b23.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css               */import{q as he}from"./corp.0fb6d36e.js";/* empty css                *//* empty css                */import{f as Ve}from"./agent.9f069623.js";/* empty css                */import"./chart.54f38119.js";import"./vue.4ed7ee05.js";import"./base.87fcf6e2.js";const $e=D({__name:"base-info",emits:["changeStep"],setup(E,{emit:$}){const{setLoading:b}=P(!0),s=V(),u=V({corp:"",name:"",model:"",type:"1",base_url:"",path:"",prompt:"",remark:""}),w=V([]);(async()=>{b(!0);try{const{data:e}=await he();w.value=e.items}catch{}finally{b(!1)}})();const m=async()=>{var i;await((i=s.value)==null?void 0:i.validate())||$("changeStep","forward",{...u.value})};return(e,i)=>{const v=J,M=G,_=H,q=O,o=le,t=K,C=Z;return d(),p(C,{ref_key:"formRef",ref:s,model:u.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(_,{field:"corp",label:e.$t("model.label.corp"),rules:[{required:!0,message:e.$t("model.error.corp.required")}]},{default:a(()=>[l(M,{modelValue:u.value.corp,"onUpdate:modelValue":i[0]||(i[0]=n=>u.value.corp=n),placeholder:e.$t("model.placeholder.corp"),"allow-search":""},{default:a(()=>[(d(!0),U(A,null,L(w.value,n=>(d(),p(v,{key:n.id,value:n.id,label:n.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"name",label:e.$t("model.label.name"),rules:[{required:!0,message:e.$t("model.error.name.required")}]},{default:a(()=>[l(q,{modelValue:u.value.name,"onUpdate:modelValue":i[1]||(i[1]=n=>u.value.name=n),placeholder:e.$t("model.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"model",label:e.$t("model.label.model"),rules:[{required:!0,message:e.$t("model.error.model.required")}]},{default:a(()=>[l(q,{modelValue:u.value.model,"onUpdate:modelValue":i[2]||(i[2]=n=>u.value.model=n),placeholder:e.$t("model.placeholder.model")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"type",label:e.$t("model.label.type"),rules:[{required:!0,message:e.$t("model.error.type.required")}]},{default:a(()=>[l(M,{modelValue:u.value.type,"onUpdate:modelValue":i[3]||(i[3]=n=>u.value.type=n),placeholder:e.$t("model.placeholder.type"),"allow-search":""},{default:a(()=>[l(v,{value:"1"},{default:a(()=>[f("\u6587\u751F\u6587")]),_:1}),l(v,{value:"2"},{default:a(()=>[f("\u6587\u751F\u56FE")]),_:1}),l(v,{value:"3"},{default:a(()=>[f("\u56FE\u751F\u6587")]),_:1}),l(v,{value:"4"},{default:a(()=>[f("\u56FE\u751F\u56FE")]),_:1}),l(v,{value:"100"},{default:a(()=>[f("\u591A\u6A21\u6001")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),l(_,{field:"base_url",label:e.$t("model.label.base_url")},{default:a(()=>[l(q,{modelValue:u.value.base_url,"onUpdate:modelValue":i[4]||(i[4]=n=>u.value.base_url=n),placeholder:e.$t("model.placeholder.base_url")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"path",label:e.$t("model.label.path")},{default:a(()=>[l(q,{modelValue:u.value.path,"onUpdate:modelValue":i[5]||(i[5]=n=>u.value.path=n),placeholder:e.$t("model.placeholder.path")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"prompt",label:e.$t("model.label.prompt")},{default:a(()=>[l(o,{modelValue:u.value.prompt,"onUpdate:modelValue":i[6]||(i[6]=n=>u.value.prompt=n),placeholder:e.$t("model.placeholder.prompt")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,{field:"remark",label:e.$t("model.label.remark")},{default:a(()=>[l(o,{modelValue:u.value.remark,"onUpdate:modelValue":i[7]||(i[7]=n=>u.value.remark=n),placeholder:e.$t("model.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),l(_,null,{default:a(()=>[l(t,{type:"primary",onClick:m},{default:a(()=>[f(g(e.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const ke=B($e,[["__scopeId","data-v-c6baf56d"]]),qe=D({__name:"advanced",emits:["changeStep"],setup(E,{emit:$}){const{setLoading:b}=P(!0),s=V([]);(async()=>{b(!0);try{const{data:o}=await we();s.value=o.items}catch{}finally{b(!1)}})();const w=V([]);(async()=>{b(!0);try{const{data:o}=await Ve();w.value=o.items}catch{}finally{b(!1)}})();const m=V(),e=V({billing_method:"1",prompt_ratio:1,completion_ratio:1,fixed_quota:1,data_format:"1",is_public:!0,is_enable_model_agent:!1,model_agents:[],is_forward:!1,forward_config:{forward_rule:"1",match_rule:["2"],target_model:"",decision_model:"",keywords:[],target_models:[]}}),i=()=>{e.value.forward_config.keywords.push(""),e.value.forward_config.target_models.push("")},v=()=>{e.value.is_forward?e.value.forward_config.forward_rule==="2"?(e.value.forward_config.keywords=[""],e.value.forward_config.target_models=[""],e.value.forward_config.target_model=""):e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]):(e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[])},M=o=>{e.value.forward_config.keywords.length>1&&(e.value.forward_config.keywords.splice(o,1),e.value.forward_config.target_models.splice(o,1))},_=async()=>{var t;e.value.is_forward||(e.value.forward_config.forward_rule="",e.value.forward_config.match_rule=[],e.value.forward_config.target_model="",e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),e.value.forward_config.forward_rule==="1"&&(e.value.forward_config.keywords=[],e.value.forward_config.target_models=[]),await((t=m.value)==null?void 0:t.validate())||$("changeStep","submit",{...e.value})},q=()=>{$("changeStep","backward")};return(o,t)=>{const C=re,n=j,c=H,N=te,T=de,S=J,R=G,Q=ue,W=O,X=ne,I=K,Y=se,x=Z;return d(),p(x,{ref_key:"formRef",ref:m,model:e.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[l(c,{field:"billing_method",label:o.$t("model.label.billingMethod"),rules:[{required:!0,message:o.$t("model.error.billingMethod.required")}]},{default:a(()=>[l(n,{size:"large"},{default:a(()=>[l(C,{modelValue:e.value.billing_method,"onUpdate:modelValue":t[0]||(t[0]=r=>e.value.billing_method=r),value:"1","default-checked":!0},{default:a(()=>[f("\u500D\u7387")]),_:1},8,["modelValue"]),l(C,{modelValue:e.value.billing_method,"onUpdate:modelValue":t[1]||(t[1]=r=>e.value.billing_method=r),value:"2"},{default:a(()=>[f("\u56FA\u5B9A\u989D\u5EA6")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),e.value.billing_method==="1"?(d(),p(c,{key:0,field:"prompt_ratio",label:o.$t("model.label.promptRatio"),rules:[{required:!0,message:o.$t("model.error.promptRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.prompt_ratio,"onUpdate:modelValue":t[2]||(t[2]=r=>e.value.prompt_ratio=r),min:.001,placeholder:o.$t("model.placeholder.promptRatio"),style:{width:"80%","margin-right":"5px"}},null,8,["modelValue","min","placeholder"]),z("div",null," $"+g(parseFloat((1e3/(5e5/e.value.prompt_ratio)).toFixed(6)))+"/k ",1)]),_:1},8,["label","rules"])):h("",!0),e.value.billing_method==="1"?(d(),p(c,{key:1,field:"completion_ratio",label:o.$t("model.label.completionRatio"),rules:[{required:!0,message:o.$t("model.error.completionRatio.required")}]},{default:a(()=>[l(N,{modelValue:e.value.completion_ratio,"onUpdate:modelValue":t[3]||(t[3]=r=>e.value.completion_ratio=r),min:.001,placeholder:o.$t("model.placeholder.completionRatio"),style:{width:"80%","margin-right":"5px"}},null,8,["modelValue","min","placeholder"]),z("div",null," $"+g(parseFloat((1e3/(5e5/e.value.completion_ratio)).toFixed(6)))+"/k ",1)]),_:1},8,["label","rules"])):h("",!0),e.value.billing_method==="2"?(d(),p(c,{key:2,field:"fixed_quota",label:o.$t("model.label.fixedQuota"),rules:[{required:!0,message:o.$t("model.error.fixedQuota.required")}]},{default:a(()=>[l(N,{modelValue:e.value.fixed_quota,"onUpdate:modelValue":t[4]||(t[4]=r=>e.value.fixed_quota=r),min:0,max:9999999999999,placeholder:o.$t("model.placeholder.fixedQuota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):h("",!0),l(c,{field:"data_format",label:o.$t("model.label.dataFormat"),rules:[{required:!0,message:o.$t("model.error.dataFormat.required")}]},{default:a(()=>[l(n,{size:"large"},{default:a(()=>[l(C,{modelValue:e.value.data_format,"onUpdate:modelValue":t[5]||(t[5]=r=>e.value.data_format=r),value:"1","default-checked":!0},{default:a(()=>[f("\u7EDF\u4E00\u683C\u5F0F")]),_:1},8,["modelValue"]),l(C,{modelValue:e.value.data_format,"onUpdate:modelValue":t[6]||(t[6]=r=>e.value.data_format=r),value:"2"},{default:a(()=>[f("\u5B98\u65B9\u683C\u5F0F")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"]),l(c,{field:"is_public",label:o.$t("model.label.isPublic"),rules:[{required:!0}]},{default:a(()=>[l(T,{modelValue:e.value.is_public,"onUpdate:modelValue":t[7]||(t[7]=r=>e.value.is_public=r)},null,8,["modelValue"])]),_:1},8,["label"]),l(c,{field:"is_enable_model_agent",label:o.$t("model.label.isEnableModelAgent")},{default:a(()=>[l(T,{modelValue:e.value.is_enable_model_agent,"onUpdate:modelValue":t[8]||(t[8]=r=>e.value.is_enable_model_agent=r)},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_enable_model_agent?(d(),p(c,{key:3,field:"model_agents",label:o.$t("model.label.modelAgents"),rules:[{required:!0,message:o.$t("model.error.modelAgents.required")}]},{default:a(()=>[l(R,{modelValue:e.value.model_agents,"onUpdate:modelValue":t[9]||(t[9]=r=>e.value.model_agents=r),placeholder:o.$t("model.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:a(()=>[(d(!0),U(A,null,L(w.value,r=>(d(),p(S,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):h("",!0),l(c,{field:"model_forward",label:o.$t("model.label.modelForward")},{default:a(()=>[l(T,{modelValue:e.value.is_forward,"onUpdate:modelValue":t[10]||(t[10]=r=>e.value.is_forward=r),onChange:v},null,8,["modelValue"])]),_:1},8,["label"]),e.value.is_forward?(d(),p(c,{key:4,field:"forward_config.forward_rule",label:o.$t("model.label.forwardRule"),rules:[{required:!0,message:o.$t("model.error.forwardRule.required")}]},{default:a(()=>[l(R,{modelValue:e.value.forward_config.forward_rule,"onUpdate:modelValue":t[11]||(t[11]=r=>e.value.forward_config.forward_rule=r),placeholder:o.$t("model.placeholder.forwardRule"),onChange:v},{default:a(()=>[l(S,{value:"1"},{default:a(()=>[f("\u5168\u90E8\u8F6C\u53D1")]),_:1}),l(S,{value:"2"},{default:a(()=>[f("\u6309\u5173\u952E\u5B57")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):h("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="1"?(d(),p(c,{key:5,field:"forward_config.target_model",label:o.$t("model.label.targetModel"),rules:[{required:!0,message:o.$t("model.error.targetModel.required")}]},{default:a(()=>[l(R,{modelValue:e.value.forward_config.target_model,"onUpdate:modelValue":t[12]||(t[12]=r=>e.value.forward_config.target_model=r),placeholder:o.$t("model.placeholder.targetModel"),"allow-search":""},{default:a(()=>[(d(!0),U(A,null,L(s.value,r=>(d(),p(S,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):h("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="2"?(d(),p(c,{key:6,field:"forward_config.match_rule",label:o.$t("model.label.matchRule"),rules:[{required:!0,message:o.$t("model.error.matchRule.required")}]},{default:a(()=>[l(n,{size:"large"},{default:a(()=>[l(Q,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":t[13]||(t[13]=r=>e.value.forward_config.match_rule=r),value:"1","default-checked":!0},{default:a(()=>[f("\u667A\u80FD\u5339\u914D")]),_:1},8,["modelValue"]),l(Q,{modelValue:e.value.forward_config.match_rule,"onUpdate:modelValue":t[14]||(t[14]=r=>e.value.forward_config.match_rule=r),value:"2"},{default:a(()=>[f("\u6B63\u5219\u5339\u914D")]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["label","rules"])):h("",!0),e.value.is_forward&&e.value.forward_config.forward_rule==="2"&&e.value.forward_config.match_rule.includes("1")?(d(),p(c,{key:7,field:"forward_config.decision_model",label:o.$t("model.label.decisionModel"),rules:[{required:!0,message:o.$t("model.error.decisionModel.required")}]},{default:a(()=>[l(R,{modelValue:e.value.forward_config.decision_model,"onUpdate:modelValue":t[15]||(t[15]=r=>e.value.forward_config.decision_model=r),placeholder:o.$t("model.placeholder.decisionModel"),"allow-search":""},{default:a(()=>[(d(!0),U(A,null,L(s.value,r=>(d(),p(S,{key:r.id,value:r.id,label:r.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):h("",!0),(d(!0),U(A,null,L(e.value.forward_config.keywords,(r,y)=>ae((d(),p(c,{key:y,field:`forward_config.keywords[${y}]`&&`forward_config.target_models[${y}]`,label:`${y+1}. `+o.$t("model.label.keywords"),rules:[{required:!0,message:o.$t("model.error.keywordsAndtargetModel.required")}]},{default:a(()=>[l(W,{modelValue:e.value.forward_config.keywords[y],"onUpdate:modelValue":F=>e.value.forward_config.keywords[y]=F,placeholder:o.$t("model.placeholder.keywords"),style:{width:"40%","margin-right":"5px"}},null,8,["modelValue","onUpdate:modelValue","placeholder"]),l(R,{modelValue:e.value.forward_config.target_models[y],"onUpdate:modelValue":F=>e.value.forward_config.target_models[y]=F,placeholder:o.$t("model.placeholder.targetModel"),style:{width:"40%"},"allow-search":""},{default:a(()=>[(d(!0),U(A,null,L(s.value,F=>(d(),p(S,{key:F.id,value:F.id,label:F.name},null,8,["value","label"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder"]),l(I,{type:"primary",shape:"circle",style:{margin:"0 10px 0 10px"},onClick:i},{default:a(()=>[l(X)]),_:1}),l(I,{type:"secondary",shape:"circle",onClick:F=>M(y)},{default:a(()=>[l(Y)]),_:2},1032,["onClick"])]),_:2},1032,["field","label","rules"])),[[oe,e.value.is_forward&&e.value.forward_config.forward_rule==="2"]])),128)),l(c,null,{default:a(()=>[l(n,null,{default:a(()=>[l(I,{type:"secondary",onClick:q},{default:a(()=>[f(g(o.$t("model.button.prev")),1)]),_:1}),l(I,{type:"primary",onClick:_},{default:a(()=>[f(g(o.$t("model.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const Ce=B(qe,[["__scopeId","data-v-2756fd42"]]),Fe={class:"success-wrap"},Ue=D({__name:"success",emits:["changeStep"],setup(E,{emit:$}){const b=()=>{$("changeStep",1)};return(s,u)=>{const w=me,k=K,m=j;return d(),U("div",Fe,[l(w,{status:"success",title:s.$t("model.success.title"),subtitle:s.$t("model.success.create.subTitle")},null,8,["title","subtitle"]),l(m,{size:16},{default:a(()=>[l(k,{key:"finish",type:"secondary",onClick:u[0]||(u[0]=e=>s.$router.push({name:"ModelList"}))},{default:a(()=>[f(g(s.$t("model.button.finish")),1)]),_:1}),l(k,{key:"again",type:"primary",onClick:b},{default:a(()=>[f(g(s.$t("model.button.again")),1)]),_:1})]),_:1})])}}});const Me=B(Ue,[["__scopeId","data-v-77484237"]]),Se={class:"container"},Ae={class:"wrapper"},Le={name:"ModelCreate"},Re=D({...Le,setup(E){const{loading:$,setLoading:b}=P(!1),s=V(1),u=V({}),w=async()=>{b(!0);try{await ye(u.value),s.value=3,u.value={}}catch{}finally{b(!1)}},k=(m,e)=>{if(typeof m=="number"){s.value=m;return}if(m==="forward"||m==="submit"){if(u.value={...u.value,...e},m==="submit"){w();return}s.value+=1}else m==="backward"&&(s.value-=1)};return(m,e)=>{const i=ee,v=pe,M=_e,_=ce,q=ve,o=be,t=ge;return d(),U("div",Se,[l(M,{class:"container-breadcrumb"},{default:a(()=>[l(v,null,{default:a(()=>[l(i)]),_:1}),l(v,null,{default:a(()=>[f(g(m.$t("menu.model")),1)]),_:1}),l(v,null,{default:a(()=>[f(g(m.$t("menu.model.create")),1)]),_:1})]),_:1}),l(t,{loading:fe($),style:{width:"100%"}},{default:a(()=>[l(o,{class:"general-card",bordered:!1},{default:a(()=>[z("div",Ae,[l(q,{current:s.value,"onUpdate:current":e[0]||(e[0]=C=>s.value=C),style:{width:"660px"},"line-less":"",class:"steps"},{default:a(()=>[l(_,{description:m.$t("model.subTitle.baseInfo")},{default:a(()=>[f(g(m.$t("model.title.baseInfo")),1)]),_:1},8,["description"]),l(_,{description:m.$t("model.subTitle.advanced")},{default:a(()=>[f(g(m.$t("model.title.advanced")),1)]),_:1},8,["description"]),l(_,{description:m.$t("model.subTitle.create.finish")},{default:a(()=>[f(g(m.$t("model.title.create.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(d(),p(ie,null,[s.value===1?(d(),p(ke,{key:0,onChangeStep:k})):s.value===2?(d(),p(Ce,{key:1,onChangeStep:k})):s.value===3?(d(),p(Me,{key:2,onChangeStep:k})):h("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const ll=B(Re,[["__scopeId","data-v-9fb2a161"]]);export{ll as default};