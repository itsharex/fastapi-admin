import{_ as w,A as E}from"./index.97aaf2d0.js";/* empty css               *//* empty css                */import{d as V,e as k,B as u,aD as h,aG as t,aH as e,aL as c,aM as f,b1 as J,b2 as N,bK as T,aU as L,b5 as F,C as R,aJ as P,aI as j,aE as B,u as m,bR as y,bA as G,bB as H,aT as O,aS as Q,bS as W,bi as M,bz as X,F as Y,bs as Z,aK as x,aF as ee,bL as ae,bM as te,bJ as le,bN as oe}from"./arco.eaecec6c.js";import{u as D}from"./loading.4b5db008.js";import{d as se}from"./app.44080d72.js";/* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              *//* empty css               *//* empty css               */import{q as ne}from"./model.60e2bcd5.js";/* empty css                */import"./chart.54f38119.js";import"./vue.4ed7ee05.js";import"./base.87fcf6e2.js";const pe=V({__name:"base-info",emits:["changeStep"],setup(q,{emit:$}){const i=k(),l=k({name:"",remark:""}),_=async()=>{var a;await((a=i.value)==null?void 0:a.validate())||$("changeStep","forward",{...l.value})};return(r,a)=>{const o=J,d=N,s=T,n=L,g=F;return u(),h(g,{ref_key:"formRef",ref:i,model:l.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:t(()=>[e(d,{field:"name",label:r.$t("app.label.name"),rules:[{required:!0,message:r.$t("app.error.name.required")},{match:/^.{1,100}$/,message:r.$t("app.error.name.pattern")}]},{default:t(()=>[e(o,{modelValue:l.value.name,"onUpdate:modelValue":a[0]||(a[0]=b=>l.value.name=b),placeholder:r.$t("app.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(d,{field:"remark",label:r.$t("app.label.remark"),rules:[{required:!1}]},{default:t(()=>[e(s,{modelValue:l.value.remark,"onUpdate:modelValue":a[1]||(a[1]=b=>l.value.remark=b),placeholder:r.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,null,{default:t(()=>[e(n,{type:"primary",onClick:_},{default:t(()=>[c(f(r.$t("app.button.next")),1)]),_:1})]),_:1})]),_:1},8,["model"])}}});const re=w(pe,[["__scopeId","data-v-e5d3d922"]]),ue=V({__name:"advanced",emits:["changeStep"],setup(q,{emit:$}){const{setLoading:i}=D(!0),l=k([]);(async()=>{i(!0);try{const{data:s}=await ne();l.value=s.items}catch{}finally{i(!1)}})();const r=k(),a=k({models:[],is_limit_quota:!1,quota:k(),quota_expires_at:"",ip_whitelist:"",ip_blacklist:""}),o=async()=>{var n;await((n=r.value)==null?void 0:n.validate())||$("changeStep","submit",{...a.value})},d=()=>{$("changeStep","backward")};return(s,n)=>{const g=G,b=H,v=N,S=O,C=Q,I=W,U=T,A=L,z=M,K=F;return u(),h(K,{ref_key:"formRef",ref:r,model:a.value,class:"form","label-col-props":{span:4},"wrapper-col-props":{span:18}},{default:t(()=>[e(v,{field:"models",label:s.$t("app.label.models")},{default:t(()=>[e(b,{modelValue:a.value.models,"onUpdate:modelValue":n[0]||(n[0]=p=>a.value.models=p),placeholder:s.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(u(!0),R(P,null,j(l.value,p=>(u(),h(g,{key:p.id,value:p.id,label:p.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(v,{field:"is_limit_quota",label:s.$t("app.label.isLimitQuota")},{default:t(()=>[e(S,{modelValue:a.value.is_limit_quota,"onUpdate:modelValue":n[1]||(n[1]=p=>a.value.is_limit_quota=p)},null,8,["modelValue"])]),_:1},8,["label"]),a.value.is_limit_quota?(u(),h(v,{key:0,field:"quota",label:s.$t("app.label.quota"),rules:[{required:!0,message:s.$t("app.error.quota.required")}]},{default:t(()=>[e(C,{modelValue:a.value.quota,"onUpdate:modelValue":n[2]||(n[2]=p=>a.value.quota=p),placeholder:s.$t("app.placeholder.quota"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])):B("",!0),a.value.is_limit_quota?(u(),h(v,{key:1,field:"quota_expires_at",label:s.$t("app.label.quota_expires_at")},{default:t(()=>[e(I,{modelValue:a.value.quota_expires_at,"onUpdate:modelValue":n[3]||(n[3]=p=>a.value.quota_expires_at=p),placeholder:s.$t("app.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":p=>m(y)(p).isBefore(m(y)()),style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>m(y)().add(1,"day")},{label:"7",value:()=>m(y)().add(7,"day")},{label:"15",value:()=>m(y)().add(15,"day")},{label:"30",value:()=>m(y)().add(30,"day")},{label:"90",value:()=>m(y)().add(90,"day")},{label:"180",value:()=>m(y)().add(180,"day")},{label:"365",value:()=>m(y)().add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"])):B("",!0),e(v,{field:"ip_whitelist",label:s.$t("app.label.ip_whitelist")},{default:t(()=>[e(U,{modelValue:a.value.ip_whitelist,"onUpdate:modelValue":n[4]||(n[4]=p=>a.value.ip_whitelist=p),placeholder:s.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(v,{field:"ip_blacklist",label:s.$t("app.label.ip_blacklist")},{default:t(()=>[e(U,{modelValue:a.value.ip_blacklist,"onUpdate:modelValue":n[5]||(n[5]=p=>a.value.ip_blacklist=p),placeholder:s.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(v,null,{default:t(()=>[e(z,null,{default:t(()=>[e(A,{type:"secondary",onClick:d},{default:t(()=>[c(f(s.$t("app.button.prev")),1)]),_:1}),e(A,{type:"primary",onClick:o},{default:t(()=>[c(f(s.$t("app.button.next")),1)]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])}}});const de=w(ue,[["__scopeId","data-v-2d509559"]]),ie={class:"success-wrap"},_e=V({__name:"success",emits:["changeStep"],setup(q,{emit:$}){const i=()=>{$("changeStep",1)};return(l,_)=>{const r=X,a=L,o=M;return u(),R("div",ie,[e(r,{status:"success",title:l.$t("app.success.title"),subtitle:l.$t("app.success.create.subTitle")},null,8,["title","subtitle"]),e(o,{size:16},{default:t(()=>[e(a,{key:"finish",type:"secondary",onClick:_[0]||(_[0]=d=>l.$router.push({name:"AppList"}))},{default:t(()=>[c(f(l.$t("app.button.finish")),1)]),_:1}),e(a,{key:"again",type:"primary",onClick:i},{default:t(()=>[c(f(l.$t("app.button.again")),1)]),_:1})]),_:1})])}}});const me=w(_e,[["__scopeId","data-v-9ee08270"]]),ce={class:"container"},fe={class:"wrapper"},be={name:"AppCreate"},ve=V({...be,setup(q){const{loading:$,setLoading:i}=D(!1),l=k(1),_=k({}),r=async()=>{i(!0);try{await se(_.value),l.value=3,_.value={}}catch{}finally{i(!1)}},a=(o,d)=>{if(typeof o=="number"){l.value=o;return}if(o==="forward"||o==="submit"){if(_.value={..._.value,...d},o==="submit"){r();return}l.value+=1}else o==="backward"&&(l.value-=1)};return(o,d)=>{const s=E,n=x,g=ee,b=ae,v=te,S=le,C=oe;return u(),R("div",ce,[e(g,{class:"container-breadcrumb"},{default:t(()=>[e(n,null,{default:t(()=>[e(s)]),_:1}),e(n,null,{default:t(()=>[c(f(o.$t("menu.app")),1)]),_:1}),e(n,null,{default:t(()=>[c(f(o.$t("menu.app.create")),1)]),_:1})]),_:1}),e(C,{loading:m($),style:{width:"100%"}},{default:t(()=>[e(S,{class:"general-card",bordered:!1},{default:t(()=>[Y("div",fe,[e(v,{current:l.value,"onUpdate:current":d[0]||(d[0]=I=>l.value=I),style:{width:"660px"},"line-less":"",class:"steps"},{default:t(()=>[e(b,{description:o.$t("app.subTitle.baseInfo")},{default:t(()=>[c(f(o.$t("app.title.baseInfo")),1)]),_:1},8,["description"]),e(b,{description:o.$t("app.subTitle.advanced")},{default:t(()=>[c(f(o.$t("app.title.advanced")),1)]),_:1},8,["description"]),e(b,{description:o.$t("app.subTitle.create.finish")},{default:t(()=>[c(f(o.$t("app.title.create.finish")),1)]),_:1},8,["description"])]),_:1},8,["current"]),(u(),h(Z,null,[l.value===1?(u(),h(re,{key:0,onChangeStep:a})):l.value===2?(u(),h(de,{key:1,onChangeStep:a})):l.value===3?(u(),h(me,{key:2,onChangeStep:a})):B("",!0)],1024))])]),_:1})]),_:1},8,["loading"])])}}});const ze=w(ve,[["__scopeId","data-v-2488c8dd"]]);export{ze as default};