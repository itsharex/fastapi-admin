import{_ as S,B as D}from"./index.10556afc.js";import{u as M}from"./loading.e3b9231d.js";/* empty css                */import{d as C,e as k,B as p,aD as g,aG as a,aH as e,aL as c,aM as i,bC as q,bD as K,b3 as N,bL as O,aV as L,b6 as R,C as V,aJ as A,aI as B,bj as F,bA as z,F as E,bt as j,aE as G,u as H,aK as J,aF as P,bM as Q,bN as W,bK as X,bO as Y}from"./arco.a6f3e581.js";import{a as Z}from"./key.861193fa.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               *//* empty css               */import{q as x}from"./model.ea01b618.js";import{d as ee}from"./agent.72501bf9.js";/* empty css               */import"./chart.5d3761cb.js";import"./vue.7b8f6a6a.js";const ae=C({__name:"base-info",emits:["changeStep"],setup(I,{emit:y}){const d=k(),t=k({corp:"",key:"",remark:""}),m=async()=>{var s;await((s=d.value)==null?void 0:s.validate())||y("changeStep","forward",{...t.value})};return(o,s)=>{const l=q,r=K,b=N,v=O,n=L,u=R;return p(),g(u,{ref_key:"formRef",ref:d,model:t.value,class:"form","label-col-props":{span:6},"wrapper-col-props":{span:18}},{default:a(()=>[e(b,{field:"corp",label:o.$t("key.label.corp"),rules:[{required:!0,message:o.$t("key.error.corp.required")}]},{default:a(()=>[e(r,{modelValue:t.value.corp,"onUpdate:modelValue":s[0]||(s[0]=f=>t.value.corp=f),placeholder:o.$t("key.placeholder.corp")},{default:a(()=>[e(l,{value:"OpenAI"},{default:a(()=>[c("OpenAI")]),_:1})]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(b,{field:"key",label:o.$t("key.label.key"),rules:[{required:!0,message:o.$t("key.error.key.required")}]},{default:a(()=>[e(v,{modelValue:t.value.key,"onUpdate:modelValue":s[1]||(s[1]=f=>t.value.key=f),placeholder:o.$t("key.placeholder.key"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(b,{field:"remark",label:o.$t("key.label.remark"),rules:[{required:!1}]},{default:a(()=>[e(v,{modelValue:t.value.remark,"onUpdate:modelValue":s[2]||(s[2]=f=>t.value.remark=f),placeholder:o.$t("key.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(b,null,{default:a(()=>[e(n,{type:"primary",onClick:m},{default:a(()=>[c(i(o.$t("key.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const te=S(ae,[["__scopeId","data-v-b340c0e9"]]),le=C({__name:"advanced",emits:["changeStep"],setup(I,{emit:y}){const{setLoading:d}=M(!0),t=k([]);(async()=>{d(!0);try{const{data:n}=await x();t.value=n.items}catch{}finally{d(!1)}})();const o=k([]);(async()=>{d(!0);try{const{data:n}=await ee();o.value=n.items}catch{}finally{d(!1)}})();const l=k(),r=k({models:[],model_agents:[]}),b=async()=>{var u;await((u=l.value)==null?void 0:u.validate())||y("changeStep","submit",{...r.value})},v=()=>{y("changeStep","backward")};return(n,u)=>{const f=q,h=K,$=N,w=L,T=F,U=R;return p(),g(U,{ref_key:"formRef",ref:l,model:r.value,class:"form","label-col-props":{span:6},"wrapper-col-props":{span:18}},{default:a(()=>[e($,{field:"models",label:n.$t("key.label.models"),rules:[{required:!1}]},{default:a(()=>[e(h,{modelValue:r.value.models,"onUpdate:modelValue":u[0]||(u[0]=_=>r.value.models=_),placeholder:n.$t("key.placeholder.models"),"max-tag-count":3,multiple:"","allow-clear":""},{default:a(()=>[(p(!0),V(A,null,B(t.value,_=>(p(),g(f,{key:_.id,value:_.id,label:_.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e($,{field:"model_agents",label:n.$t("key.label.modelAgents")},{default:a(()=>[e(h,{modelValue:r.value.model_agents,"onUpdate:modelValue":u[1]||(u[1]=_=>r.value.model_agents=_),placeholder:n.$t("key.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-clear":""},{default:a(()=>[(p(!0),V(A,null,B(o.value,_=>(p(),g(f,{key:_.id,value:_.id,label:_.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e($,null,{default:a(()=>[e(T,null,{default:a(()=>[e(w,{type:"secondary",onClick:v},{default:a(()=>[c(i(n.$t("key.button.prev")),1)]),_:1}),e(w,{type:"primary",onClick:b},{default:a(()=>[c(i(n.$t("key.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const oe=S(le,[["__scopeId","data-v-fef2bf05"]]),se={class:"success-wrap"},ne=C({__name:"success",emits:["changeStep"],setup(I,{emit:y}){const d=()=>{y("changeStep",1)};return(t,m)=>{const o=z,s=L,l=F;return p(),V("div",se,[e(o,{status:"success",title:t.$t("key.success.title"),subtitle:t.$t("key.success.create.subTitle")},null,8,["title","subtitle"]),e(l,{size:16},{default:a(()=>[e(s,{key:"finish",type:"secondary",onClick:m[0]||(m[0]=r=>t.$router.push({name:"KeyModelList"}))},{default:a(()=>[c(i(t.$t("key.button.finish")),1)]),_:1}),e(s,{key:"again",type:"primary",onClick:d},{default:a(()=>[c(i(t.$t("key.button.again")),1)]),_:1})]),_:1})])}}});const re=S(ne,[["__scopeId","data-v-9a43fb75"]]),ue={class:"container"},de={class:"wrapper"},ce={name:"KeyCreate"},pe=C({...ce,setup(I){const{loading:y,setLoading:d}=M(!1),t=k(1),m=k({}),o=async()=>{d(!0);try{await Z(m.value),t.value=3,m.value={}}catch{}finally{d(!1)}},s=(l,r)=>{if(typeof l=="number"){t.value=l;return}if(l==="forward"||l==="submit"){if(m.value={...m.value,...r},l==="submit"){o();return}t.value+=1}else l==="backward"&&(t.value-=1)};return(l,r)=>{const b=D,v=J,n=P,u=Q,f=W,h=X,$=Y;return p(),V("div",ue,[e(n,{class:"container-breadcrumb"},{default:a(()=>[e(v,null,{default:a(()=>[e(b)]),_:1}),e(v,null,{default:a(()=>[c(i(l.$t("menu.key")),1)]),_:1}),e(v,null,{default:a(()=>[c(i(l.$t("menu.key.create")),1)]),_:1})]),_:1}),e($,{loading:H(y),style:{width:"100%"}},{default:a(()=>[e(h,{class:"general-card",bordered:!1},{title:a(()=>[c(i(l.$t("key.title.create")),1)]),default:a(()=>[E("div",de,[e(f,{current:t.value,"onUpdate:current":r[0]||(r[0]=w=>t.value=w),style:{width:"580px"},"line-less":"",class:"steps"},{default:a(()=>[e(u,{description:l.$t("key.subTitle.baseInfo")},{default:a(()=>[c(i(l.$t("key.title.baseInfo")),1)]),_:1},8,["description"]),e(u,{description:l.$t("key.subTitle.advanced")},{default:a(()=>[c(i(l.$t("key.title.advanced")),1)]),_:1},8,["description"]),e(u,{description:l.$t("key.subTitle.create.finish")},{default:a(()=>[c(i(l.$t("key.title.create.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(p(),g(j,null,[t.value===1?(p(),g(te,{key:0,onChangeStep:s})):t.value===2?(p(),g(oe,{key:1,onChangeStep:s})):t.value===3?(p(),g(re,{key:2,onChangeStep:s})):G("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const Ae=S(pe,[["__scopeId","data-v-f5e95bba"]]);export{Ae as default};