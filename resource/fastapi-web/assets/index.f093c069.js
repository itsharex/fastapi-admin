import{k as N,_ as D}from"./index.2004bff7.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                */import{d as Q,e as s,B as E,C as G,aH as e,aG as a,aL as t,aM as b,F as v,u as p,bP as i,aK as K,aF as P,b1 as T,b2 as j,aS as A,bQ as H,bR as J,bS as M,bK as z,aU as O,bi as W,b5 as X,bJ as Y,bL as Z,g as x}from"./arco.17b1a46f.js";import{u as ee}from"./loading.44762de3.js";import{q as le}from"./common.ac936b7b.js";import{e as ae}from"./admin_user.5473fdbe.js";import{f as oe}from"./vue.32c094a4.js";import"./chart.d5ce7f1f.js";import"./base.87fcf6e2.js";const re={class:"container"},ue={class:"wrapper"},de={style:{"margin-left":"10px"}},te={class:"submit-btn"},se={name:"UserCreate"},pe=Q({...se,setup(ne){const{proxy:q}=x(),y=oe(),_=s(),o=s({name:"",account:"",password:"",terminal:"web",quota:s(),quota_expires_at:"",rps:s(),rpm:s(),rpd:s(),tps:s(),tpm:s(),tpd:s(),ips:s(),ipm:s(),ipd:s(),remark:""}),{loading:g,setLoading:$}=ee(!1),U=async()=>{var r;if(!await((r=_.value)==null?void 0:r.validate())){$(!0);try{await ae(o.value).then(()=>{q.$message.success("\u65B0\u5EFA\u6210\u529F"),y.push({name:"UserList"})})}catch{}finally{$(!1)}}},w=l=>{o.value.quota=l*5e5};return(l,r)=>{const V=N,f=K,k=P,c=T,d=j,n=A,m=H,C=J,B=M,F=z,h=O,I=W,L=X,R=Y,S=Z;return E(),G("div",re,[e(k,{class:"container-breadcrumb"},{default:a(()=>[e(f,null,{default:a(()=>[e(V)]),_:1}),e(f,null,{default:a(()=>[t(b(l.$t("menu.user")),1)]),_:1}),e(f,null,{default:a(()=>[t(b(l.$t("menu.user.create")),1)]),_:1})]),_:1}),e(S,{loading:p(g),style:{width:"100%"}},{default:a(()=>[e(R,{class:"general-card","body-style":{padding:"0 20px 20px 20px"},bordered:!1},{default:a(()=>[v("div",ue,[e(L,{ref_key:"formRef",ref:_,model:o.value,class:"form","label-col-props":{span:5},"wrapper-col-props":{span:18}},{default:a(()=>[e(d,{field:"name",label:l.$t("user.label.name"),rules:[{required:!0,message:l.$t("user.error.name.required")},{match:/^.{1,30}$/,message:l.$t("user.error.name.pattern")}]},{default:a(()=>[e(c,{modelValue:o.value.name,"onUpdate:modelValue":r[0]||(r[0]=u=>o.value.name=u),placeholder:l.$t("user.placeholder.name"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(d,{field:"account",label:l.$t("user.label.account"),rules:[{required:!0,message:l.$t("user.error.account.required")}]},{default:a(()=>[e(c,{modelValue:o.value.account,"onUpdate:modelValue":r[1]||(r[1]=u=>o.value.account=u),placeholder:l.$t("user.placeholder.account"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(d,{field:"password",label:l.$t("user.label.password"),rules:[{required:!0,message:l.$t("user.error.password.required")},{match:/^.{6,}$/,message:l.$t("user.error.password.pattern")}]},{default:a(()=>[e(c,{modelValue:o.value.password,"onUpdate:modelValue":r[2]||(r[2]=u=>o.value.password=u),placeholder:l.$t("user.placeholder.password"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),e(d,{field:"quota",label:l.$t("user.label.quota"),rules:[{required:!0,message:l.$t("user.error.quota.required")}]},{default:a(()=>[e(n,{modelValue:o.value.quota,"onUpdate:modelValue":r[3]||(r[3]=u=>o.value.quota=u),placeholder:l.$t("user.placeholder.quota"),precision:0,min:-9999999999999,max:9999999999999},null,8,["modelValue","placeholder"]),v("div",de," $"+b(o.value.quota?p(le)(o.value.quota):"0"),1)]),_:1},8,["label","rules"]),e(d,null,{default:a(()=>[e(C,{type:"button",onChange:w},{default:a(()=>[e(m,{value:1},{default:a(()=>[t(" $1 ")]),_:1}),e(m,{value:2},{default:a(()=>[t(" $2 ")]),_:1}),e(m,{value:5},{default:a(()=>[t(" $5 ")]),_:1}),e(m,{value:10},{default:a(()=>[t(" $10 ")]),_:1}),e(m,{value:20},{default:a(()=>[t(" $20 ")]),_:1}),e(m,{value:50},{default:a(()=>[t(" $50 ")]),_:1}),e(m,{value:100},{default:a(()=>[t(" $100 ")]),_:1}),e(m,{value:200},{default:a(()=>[t(" $200 ")]),_:1}),e(m,{value:500},{default:a(()=>[t(" $500 ")]),_:1}),e(m,{value:1e3},{default:a(()=>[t(" $1000 ")]),_:1})]),_:1},8,["onChange"])]),_:1}),e(d,{field:"quota_expires_at",label:l.$t("user.label.quota_expires_at")},{default:a(()=>[e(B,{modelValue:o.value.quota_expires_at,"onUpdate:modelValue":r[4]||(r[4]=u=>o.value.quota_expires_at=u),placeholder:l.$t("user.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":u=>p(i)(u).isBefore(p(i)()),style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>p(i)().add(1,"day")},{label:"7",value:()=>p(i)().add(7,"day")},{label:"15",value:()=>p(i)().add(15,"day")},{label:"30",value:()=>p(i)().add(30,"day")},{label:"90",value:()=>p(i)().add(90,"day")},{label:"180",value:()=>p(i)().add(180,"day")},{label:"365",value:()=>p(i)().add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"]),e(d,{field:"rps",label:l.$t("user.label.rps")},{default:a(()=>[e(n,{modelValue:o.value.rps,"onUpdate:modelValue":r[5]||(r[5]=u=>o.value.rps=u),placeholder:l.$t("user.placeholder.rps"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"rpm",label:l.$t("user.label.rpm")},{default:a(()=>[e(n,{modelValue:o.value.rpm,"onUpdate:modelValue":r[6]||(r[6]=u=>o.value.rpm=u),placeholder:l.$t("user.placeholder.rpm"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"rpd",label:l.$t("user.label.rpd")},{default:a(()=>[e(n,{modelValue:o.value.rpd,"onUpdate:modelValue":r[7]||(r[7]=u=>o.value.rpd=u),placeholder:l.$t("user.placeholder.rpd"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"tps",label:l.$t("user.label.tps")},{default:a(()=>[e(n,{modelValue:o.value.tps,"onUpdate:modelValue":r[8]||(r[8]=u=>o.value.tps=u),placeholder:l.$t("user.placeholder.tps"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"tpm",label:l.$t("user.label.tpm")},{default:a(()=>[e(n,{modelValue:o.value.tpm,"onUpdate:modelValue":r[9]||(r[9]=u=>o.value.tpm=u),placeholder:l.$t("user.placeholder.tpm"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"tpd",label:l.$t("user.label.tpd")},{default:a(()=>[e(n,{modelValue:o.value.tpd,"onUpdate:modelValue":r[10]||(r[10]=u=>o.value.tpd=u),placeholder:l.$t("user.placeholder.tpd"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"ips",label:l.$t("user.label.ips")},{default:a(()=>[e(n,{modelValue:o.value.ips,"onUpdate:modelValue":r[11]||(r[11]=u=>o.value.ips=u),placeholder:l.$t("user.placeholder.ips"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"ipm",label:l.$t("user.label.ipm")},{default:a(()=>[e(n,{modelValue:o.value.ipm,"onUpdate:modelValue":r[12]||(r[12]=u=>o.value.ipm=u),placeholder:l.$t("user.placeholder.ipm"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"ipd",label:l.$t("user.label.ipd")},{default:a(()=>[e(n,{modelValue:o.value.ipd,"onUpdate:modelValue":r[13]||(r[13]=u=>o.value.ipd=u),placeholder:l.$t("user.placeholder.ipd"),precision:0,min:0,max:9999999999999},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(d,{field:"remark",label:l.$t("user.label.remark")},{default:a(()=>[e(F,{modelValue:o.value.remark,"onUpdate:modelValue":r[14]||(r[14]=u=>o.value.remark=u),placeholder:l.$t("user.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),e(I,null,{default:a(()=>[v("div",te,[e(h,{type:"secondary",onClick:r[15]||(r[15]=u=>l.$router.push({name:"UserList"}))},{default:a(()=>[t(b(l.$t("form.button.cancel")),1)]),_:1}),e(h,{type:"primary",onClick:U},{default:a(()=>[t(b(l.$t("form.button.submit")),1)]),_:1})])]),_:1})]),_:1},8,["model"])])]),_:1})]),_:1},8,["loading"])])}}});const Be=D(pe,[["__scopeId","data-v-4633c151"]]);export{Be as default};