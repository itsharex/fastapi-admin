import{u as x,a as b,_ as w}from"./index.155a5d70.js";/* empty css               */import{d as y,e as h,r as R,t as C,B as i,aD as v,aG as r,aH as e,u as n,aL as L,aM as I,b1 as U,b2 as A,b3 as N,aU as P,b5 as T,g as D,b6 as z,C as E,F as a,b8 as G,b9 as H,ba as M}from"./arco.aed15247.js";import{F as Q}from"./index.999719e7.js";/* empty css               *//* empty css               */import{f as W}from"./vue.0cc5b64a.js";import{F as j}from"./forget.6809a701.js";import"./chart.9aa6eafa.js";import"./common.78afed93.js";const J=y({__name:"admin-login",setup(l){const{proxy:m}=D(),{t:o}=x(),_=W(),p=b(),s=h(!1),V=R({form:{username:"",password:"",captcha:"",uuid:""},rules:{username:[{required:!0,message:o("login.admin.account.error.required.username")}],password:[{required:!0,message:o("login.account.error.required.password")}],captcha:[{required:!0,message:o("login.account.error.required.captcha")}]}}),{form:c,rules:k}=C(V),q=({errors:d,values:t})=>{s.value||d||(s.value=!0,p.login({account:t.username,password:t.password,terminal:"web",channel:"admin",method:"account"}).then(()=>{const{redirect:f,...u}=_.currentRoute.value.query;_.push({name:f||"Workplace",query:{...u}}),window.localStorage.setItem("userRole","admin"),m.$message.success(o("login.success"))}).catch(()=>{}).finally(()=>{s.value=!1}))};return(d,t)=>{const f=U,u=A,S=N,$=P,B=T;return i(),v(B,{ref:"formRef",model:n(c),rules:n(k),layout:"vertical",size:"large",class:"login-form",onSubmit:q},{default:r(()=>[e(u,{field:"username","hide-label":""},{default:r(()=>[e(f,{modelValue:n(c).username,"onUpdate:modelValue":t[0]||(t[0]=g=>n(c).username=g),placeholder:d.$t("login.admin.account.placeholder.username"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1}),e(u,{field:"password","hide-label":""},{default:r(()=>[e(S,{modelValue:n(c).password,"onUpdate:modelValue":t[1]||(t[1]=g=>n(c).password=g),placeholder:d.$t("login.account.placeholder.password"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1}),e($,{class:"btn",loading:s.value,type:"primary","html-type":"submit"},{default:r(()=>[L(I(d.$t("login.button")),1)]),_:1},8,["loading"])]),_:1},8,["model","rules"])}}});const K=w(J,[["__scopeId","data-v-419325c2"]]),F=l=>(G("data-v-6a9539d5"),l=l(),H(),l),O={class:"root"},X=F(()=>a("div",{class:"logo"},[a("img",{alt:"logo",src:"https://www.fastapi.ai/logo.png"}),a("div",{class:"logo-text"},"\u667A\u5143 Fast API")],-1)),Y={class:"container"},Z=F(()=>a("div",{class:"left-banner"},null,-1)),ee={class:"login-card"},ae={class:"title"},oe={class:"footer"},te=y({__name:"admin",setup(l){b().logout(),h(!1);const m=h(!1);return(o,_)=>{const p=M,s=z;return i(),E("div",O,[X,a("div",Y,[Z,a("div",ee,[a("div",ae,I(o.$t("login.admin.welcome")),1),m.value?(i(),v(j,{key:0})):(i(),v(s,{key:1,class:"account-tab","default-active-key":"1"},{default:r(()=>[e(p,{key:"1",title:o.$t("login.account")},{default:r(()=>[e(K)]),_:1},8,["title"])]),_:1}))])]),a("div",oe,[e(Q)])])}}});const pe=w(te,[["__scopeId","data-v-6a9539d5"]]);export{pe as default};
