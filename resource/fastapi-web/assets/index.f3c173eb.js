import{A as z,_ as G}from"./index.caf84b09.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css              *//* empty css               *//* empty css               *//* empty css                */import{d as J,e as c,B as i,C as g,aH as e,aG as a,aL as s,aM as m,F as $,aJ as K,aI as P,aD as b,u as r,aE as y,bP as n,aK as j,aF as H,b1 as O,b2 as W,bK as X,bA as Y,bB as Z,aT as ee,aS as ae,bQ as le,bR as te,bS as oe,aU as ue,bi as se,b5 as re,bJ as de,bL as pe,g as ne}from"./arco.06d431a4.js";import{u as ie}from"./loading.403a6ba1.js";import{f as me}from"./vue.4e689e11.js";import{q as _e}from"./common.4956e59d.js";import{d as ce}from"./app.b642de30.js";import{q as be}from"./model.d76d5ca7.js";import"./chart.ac3cbee9.js";import"./base.87fcf6e2.js";const fe={class:"container"},ve={class:"wrapper"},$e={class:"submit-btn"},ye={name:"AppCreate"},he=J({...ye,setup(qe){const{loading:w,setLoading:_}=ie(!1),{proxy:C}=ne(),B=me(),h=c([]);(async()=>{_(!0);try{const{data:l}=await be();h.value=l.items}catch{}finally{_(!1)}})();const q=c(),t=c({name:"",remark:"",models:[],is_limit_quota:!1,quota:c(),quota_expires_at:"",ip_whitelist:"",ip_blacklist:""}),L=async()=>{var u;if(!await((u=q.value)==null?void 0:u.validate())){_(!0);try{await ce(t.value).then(()=>{C.$message.success("\u65B0\u5EFA\u6210\u529F"),B.push({name:"AppList"})})}catch{}finally{_(!1)}}},R=l=>{t.value.quota=l*5e5};return(l,u)=>{const V=z,f=j,U=H,A=O,d=W,v=X,F=Y,I=Z,S=ee,N=ae,p=le,D=te,M=oe,k=ue,Q=se,E=re,T=de,x=pe;return i(),g("div",fe,[e(U,{class:"container-breadcrumb"},{default:a(()=>[e(f,null,{default:a(()=>[e(V)]),_:1}),e(f,null,{default:a(()=>[s(m(l.$t("menu.app")),1)]),_:1}),e(f,null,{default:a(()=>[s(m(l.$t("menu.app.create")),1)]),_:1})]),_:1}),e(x,{loading:r(w),style:{width:"100%"}},{default:a(()=>[e(T,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:a(()=>[$("div",ve,[e(E,{ref_key:"formRef",ref:q,model:t.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[e(d,{field:"name",label:l.$t("app.label.name"),rules:[{required:!0,message:l.$t("app.error.name.required")},{match:/^.{1,100}$/,message:l.$t("app.error.name.pattern")}]},{default:a(()=>[e(A,{modelValue:t.value.name,"onUpdate:modelValue":u[0]||(u[0]=o=>t.value.name=o),placeholder:l.$t("app.placeholder.name")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(d,{field:"remark",label:l.$t("app.label.remark"),rules:[{required:!1}]},{default:a(()=>[e(v,{modelValue:t.value.remark,"onUpdate:modelValue":u[1]||(u[1]=o=>t.value.remark=o),placeholder:l.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"models",label:l.$t("app.label.models")},{default:a(()=>[e(I,{modelValue:t.value.models,"onUpdate:modelValue":u[2]||(u[2]=o=>t.value.models=o),placeholder:l.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:a(()=>[(i(!0),g(K,null,P(h.value,o=>(i(),b(F,{key:o.id,value:o.id,label:o.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"is_limit_quota",label:l.$t("app.label.isLimitQuota")},{default:a(()=>[e(S,{modelValue:t.value.is_limit_quota,"onUpdate:modelValue":u[3]||(u[3]=o=>t.value.is_limit_quota=o)},null,8,["modelValue"])]),_:1},8,["label"]),t.value.is_limit_quota?(i(),b(d,{key:0,field:"quota",label:l.$t("app.label.quota"),rules:[{required:!0,message:l.$t("app.error.quota.required")}]},{default:a(()=>[e(N,{modelValue:t.value.quota,"onUpdate:modelValue":u[4]||(u[4]=o=>t.value.quota=o),placeholder:l.$t("app.placeholder.quota"),precision:0,min:0,max:9999999999999,style:{"margin-right":"10px"}},null,8,["modelValue","placeholder"]),$("div",null," $"+m(t.value.quota?r(_e)(t.value.quota):"0"),1)]),_:1},8,["label","rules"])):y("",!0),t.value.is_limit_quota?(i(),b(d,{key:1},{default:a(()=>[e(D,{type:"button",onChange:R},{default:a(()=>[e(p,{value:1},{default:a(()=>[s(" $1 ")]),_:1}),e(p,{value:5},{default:a(()=>[s(" $5 ")]),_:1}),e(p,{value:10},{default:a(()=>[s(" $10 ")]),_:1}),e(p,{value:20},{default:a(()=>[s(" $20 ")]),_:1}),e(p,{value:50},{default:a(()=>[s(" $50 ")]),_:1}),e(p,{value:100},{default:a(()=>[s(" $100 ")]),_:1}),e(p,{value:200},{default:a(()=>[s(" $200 ")]),_:1}),e(p,{value:500},{default:a(()=>[s(" $500 ")]),_:1}),e(p,{value:1e3},{default:a(()=>[s(" $1000 ")]),_:1})]),_:1},8,["onChange"])]),_:1})):y("",!0),t.value.is_limit_quota?(i(),b(d,{key:2,field:"quota_expires_at",label:l.$t("app.label.quota_expires_at")},{default:a(()=>[e(M,{modelValue:t.value.quota_expires_at,"onUpdate:modelValue":u[5]||(u[5]=o=>t.value.quota_expires_at=o),placeholder:l.$t("app.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":o=>r(n)(o).isBefore(r(n)()),style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>r(n)().add(1,"day")},{label:"7",value:()=>r(n)().add(7,"day")},{label:"15",value:()=>r(n)().add(15,"day")},{label:"30",value:()=>r(n)().add(30,"day")},{label:"90",value:()=>r(n)().add(90,"day")},{label:"180",value:()=>r(n)().add(180,"day")},{label:"365",value:()=>r(n)().add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"])):y("",!0),e(d,{field:"ip_whitelist",label:l.$t("app.label.ip_whitelist")},{default:a(()=>[e(v,{modelValue:t.value.ip_whitelist,"onUpdate:modelValue":u[6]||(u[6]=o=>t.value.ip_whitelist=o),placeholder:l.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"ip_blacklist",label:l.$t("app.label.ip_blacklist")},{default:a(()=>[e(v,{modelValue:t.value.ip_blacklist,"onUpdate:modelValue":u[7]||(u[7]=o=>t.value.ip_blacklist=o),placeholder:l.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(Q,null,{default:a(()=>[$("div",$e,[e(k,{type:"secondary",onClick:u[8]||(u[8]=o=>l.$router.push({name:"AppList"}))},{default:a(()=>[s(m(l.$t("form.button.cancel")),1)]),_:1}),e(k,{type:"primary",onClick:L},{default:a(()=>[s(m(l.$t("form.button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const Je=G(he,[["__scopeId","data-v-7bc28e7f"]]);export{Je as default};