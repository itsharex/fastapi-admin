import{_ as q,E as G}from"./index.16caf63c.js";/* empty css               *//* empty css                */import{d as B,e as g,B as i,aD as $,aG as a,aH as e,C as L,aJ as K,aI as A,aL as v,aM as b,bA as M,bB as N,b2 as T,b1 as H,bK as P,aU as D,b5 as F,aT as j,bi as R,bz as Q,F as W,bs as X,aE as Y,u as Z,aK as x,aF as ee,bL as ae,bM as te,bJ as le,bN as oe}from"./arco.88eb8c02.js";import{u as U}from"./loading.7dd88939.js";import{d as E,e as se}from"./key.c740ae83.js";/* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css               */import{h as z}from"./vue.f52bac7b.js";import{q as ne}from"./corp.aa4d373a.js";/* empty css               */import{q as re}from"./model.b3ec1c65.js";import{f as ue}from"./agent.d2a28691.js";/* empty css               */import"./chart.3301baad.js";import"./base.87fcf6e2.js";const de=B({__name:"base-info",emits:["changeStep"],setup(y,{emit:f}){const{setLoading:u}=U(!1),d=z(),_=g(),n=g({id:"",corp:"",key:"",remark:"",status:1}),k=g([]);(async()=>{u(!0);try{const{data:l}=await ne();k.value=l.items}catch{}finally{u(!1)}})(),(async(l={id:d.query.id})=>{u(!0);try{const{data:o}=await E(l);n.value.id=o.id,n.value.corp=o.corp,n.value.key=o.key,n.value.remark=o.remark,n.value.status=o.status}catch{}finally{u(!1)}})();const c=async()=>{var o;await((o=_.value)==null?void 0:o.validate())||f("changeStep","forward",{...n.value})};return(l,o)=>{const w=M,s=N,t=T,V=H,C=P,S=D,I=F;return i(),$(I,{ref_key:"formRef",ref:_,model:n.value,class:"form","label-col-props":{span:4},"wrapper-col-props":{span:18}},{default:a(()=>[e(t,{field:"corp",label:l.$t("key.label.corp"),rules:[{required:!0,message:l.$t("key.error.corp.required")}]},{default:a(()=>[e(s,{modelValue:n.value.corp,"onUpdate:modelValue":o[0]||(o[0]=m=>n.value.corp=m),placeholder:l.$t("key.placeholder.corp"),"allow-search":""},{default:a(()=>[(i(!0),L(K,null,A(k.value,m=>(i(),$(w,{key:m.id,value:m.id,label:m.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(t,{field:"key",label:l.$t("key.label.key"),rules:[{required:!0,message:l.$t("key.error.key.required")}]},{default:a(()=>[e(V,{modelValue:n.value.key,"onUpdate:modelValue":o[1]||(o[1]=m=>n.value.key=m),placeholder:l.$t("key.placeholder.update.key")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(t,{field:"remark",label:l.$t("key.label.remark"),rules:[{required:!1}]},{default:a(()=>[e(C,{modelValue:n.value.remark,"onUpdate:modelValue":o[2]||(o[2]=m=>n.value.remark=m),placeholder:l.$t("key.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(t,null,{default:a(()=>[e(S,{type:"primary",onClick:c},{default:a(()=>[v(b(l.$t("key.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const ce=q(de,[["__scopeId","data-v-2ad3ddc0"]]),ie=B({__name:"advanced",emits:["changeStep"],setup(y,{emit:f}){const{setLoading:u}=U(!0),d=z(),_=g([]);(async()=>{u(!0);try{const{data:s}=await re();_.value=s.items}catch{}finally{u(!1)}})();const k=g([]);(async()=>{u(!0);try{const{data:s}=await ue();k.value=s.items}catch{}finally{u(!1)}})();const h=g(),c=g({models:[],model_agents:[],is_agents_only:!1});(async(s={id:d.query.id})=>{u(!0);try{const{data:t}=await E(s);c.value.models=t.models,c.value.model_agents=t.model_agents,c.value.is_agents_only=t.is_agents_only}catch{}finally{u(!1)}})();const o=async()=>{var t;await((t=h.value)==null?void 0:t.validate())||f("changeStep","submit",{...c.value})},w=()=>{f("changeStep","backward")};return(s,t)=>{const V=M,C=N,S=T,I=j,m=D,J=R,O=F;return i(),$(O,{ref_key:"formRef",ref:h,model:c.value,class:"form","label-col-props":{span:4},"wrapper-col-props":{span:18}},{default:a(()=>[e(S,{field:"models",label:s.$t("key.label.models"),rules:[{required:!1}]},{default:a(()=>[e(C,{modelValue:c.value.models,"onUpdate:modelValue":t[0]||(t[0]=p=>c.value.models=p),placeholder:s.$t("key.placeholder.models"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:a(()=>[(i(!0),L(K,null,A(_.value,p=>(i(),$(V,{key:p.id,value:p.id,label:p.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(S,{field:"model_agents",label:s.$t("key.label.modelAgents")},{default:a(()=>[e(C,{modelValue:c.value.model_agents,"onUpdate:modelValue":t[1]||(t[1]=p=>c.value.model_agents=p),placeholder:s.$t("key.placeholder.modelAgents"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:a(()=>[(i(!0),L(K,null,A(k.value,p=>(i(),$(V,{key:p.id,value:p.id,label:p.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(S,{field:"is_agents_only",label:s.$t("key.label.isAgentsOnly")},{default:a(()=>[e(I,{modelValue:c.value.is_agents_only,"onUpdate:modelValue":t[2]||(t[2]=p=>c.value.is_agents_only=p)},null,8,["modelValue"])]),_:1},8,["label"]),e(S,null,{default:a(()=>[e(J,null,{default:a(()=>[e(m,{type:"secondary",onClick:w},{default:a(()=>[v(b(s.$t("key.button.prev")),1)]),_:1}),e(m,{type:"primary",onClick:o},{default:a(()=>[v(b(s.$t("key.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const pe=q(ie,[["__scopeId","data-v-fb87cd23"]]);const _e={},me={class:"success-wrap"};function fe(y,f){const u=Q,d=D,_=R;return i(),L("div",me,[e(u,{status:"success",title:y.$t("key.success.title"),subtitle:y.$t("key.success.update.subTitle")},null,8,["title","subtitle"]),e(_,{size:16},{default:a(()=>[e(d,{key:"finish",type:"secondary",onClick:f[0]||(f[0]=n=>y.$router.push({name:"KeyModelList"}))},{default:a(()=>[v(b(y.$t("key.button.return")),1)]),_:1}),e(d,{key:"again",type:"primary",onClick:f[1]||(f[1]=n=>y.$router.push({name:"KeyDetail",query:{id:`${y.$route.query.id}`}}))},{default:a(()=>[v(b(y.$t("key.button.view")),1)]),_:1})]),_:1})])}const ye=q(_e,[["render",fe],["__scopeId","data-v-016ee704"]]),ve={class:"container"},be={class:"wrapper"},ke={name:"KeyUpdate"},ge=B({...ke,setup(y){const{loading:f,setLoading:u}=U(!1),d=g(1),_=g({}),n=async()=>{u(!0);try{await se(_.value),d.value=3,_.value={}}catch{}finally{u(!1)}},k=(r,h)=>{if(typeof r=="number"){d.value=r;return}if(r==="forward"||r==="submit"){if(_.value={..._.value,...h},r==="submit"){n();return}d.value+=1}else r==="backward"&&(d.value-=1)};return(r,h)=>{const c=G,l=x,o=ee,w=ae,s=te,t=le,V=oe;return i(),L("div",ve,[e(o,{class:"container-breadcrumb"},{default:a(()=>[e(l,null,{default:a(()=>[e(c)]),_:1}),e(l,null,{default:a(()=>[v(b(r.$t("menu.key")),1)]),_:1}),e(l,null,{default:a(()=>[v(b(r.$t("menu.key.update")),1)]),_:1})]),_:1}),e(V,{loading:Z(f),style:{width:"100%"}},{default:a(()=>[e(t,{class:"general-card",bordered:!1},{default:a(()=>[W("div",be,[e(s,{current:d.value,"onUpdate:current":h[0]||(h[0]=C=>d.value=C),style:{width:"660px"},"line-less":"",class:"steps"},{default:a(()=>[e(w,{description:r.$t("key.subTitle.baseInfo")},{default:a(()=>[v(b(r.$t("key.title.baseInfo")),1)]),_:1},8,["description"]),e(w,{description:r.$t("key.subTitle.advanced")},{default:a(()=>[v(b(r.$t("key.title.advanced")),1)]),_:1},8,["description"]),e(w,{description:r.$t("key.subTitle.update.finish")},{default:a(()=>[v(b(r.$t("key.title.update.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(i(),$(X,null,[d.value===1?(i(),$(ce,{key:0,onChangeStep:k})):d.value===2?(i(),$(pe,{key:1,onChangeStep:k})):d.value===3?(i(),$(ye,{key:2,onChangeStep:k})):Y("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const ze=q(ge,[["__scopeId","data-v-42cfec23"]]);export{ze as default};
