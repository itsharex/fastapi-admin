import{u as w,_ as h,y as L}from"./index.155a5d70.js";/* empty css               *//* empty css               */import{d as k,c as B,B as n,C as d,aH as t,aG as o,aJ as q,aI as A,u as x,aD as y,aM as v,bO as S,bP as $,bQ as j,bi as I,e as C,aL as g,aK as Q,aF as z,bJ as F}from"./arco.aed15247.js";import{h as J}from"./vue.0cc5b64a.js";import{u as N}from"./loading.b5911e1d.js";import{e as O}from"./app.e0818b7c.js";/* empty css                *//* empty css                */import"./chart.9aa6eafa.js";import"./base.87fcf6e2.js";const P={class:"item-container"},R={key:1},V=k({__name:"profile-item",props:{type:{type:String,default:""},renderData:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(r){const u=r,{t:a}=w(),m=B(()=>{var l,i,s;const{renderData:e}=u,p=[];return p.push({title:a("app.detail.title.baseInfo"),data:[{label:a("app.detail.label.appId"),value:e.app_id},{label:a("app.detail.label.name"),value:e.name},{label:a("app.detail.label.remark"),value:(e==null?void 0:e.remark)||"-"},{label:a("app.detail.label.created_at"),value:e.created_at},{label:a("app.detail.label.updated_at"),value:e.updated_at}]}),p.push({title:a("app.detail.title.advanced"),data:[{label:a("app.detail.label.models"),value:((l=e==null?void 0:e.model_names)==null?void 0:l.join(`
`))||"-"},{label:a("app.detail.label.isLimitQuota"),value:a(`app.dict.isLimitQuota.${(e==null?void 0:e.is_limit_quota)||!1}`)},{label:a("app.detail.label.quota"),value:(e==null?void 0:e.quota)||"-"},{label:a("app.detail.label.ip_whitelist"),value:((i=e==null?void 0:e.ip_whitelist)==null?void 0:i.join(`
`))||"-"},{label:a("app.detail.label.ip_blacklist"),value:((s=e==null?void 0:e.ip_blacklist)==null?void 0:s.join(`
`))||"-"}]}),p});return(e,p)=>{const l=S,i=$,s=j,c=I;return n(),d("div",P,[t(c,{size:16,direction:"vertical",fill:""},{default:o(()=>[(n(!0),d(q,null,A(x(m),(_,b)=>(n(),y(s,{key:b,"label-style":{textAlign:"right",width:"200px",paddingRight:"10px",color:"rgb(var(--gray-8))"},"value-style":{width:"400px"},title:_.title,data:_.data},{value:o(({value:f})=>[r.loading?(n(),y(i,{key:0,animation:!0},{default:o(()=>[t(l,{widths:["200px"],rows:1})]),_:1})):(n(),d("span",R,v(f),1))]),_:2},1032,["label-style","title","data"]))),128))]),_:1})])}}});const E=h(V,[["__scopeId","data-v-ee9b367f"]]),G={class:"container"},H={name:"AppDetail"},K=k({...H,setup(r){const{loading:u,setLoading:a}=N(!0),m=J(),e=C({});return(async(l={id:m.query.id})=>{a(!0);try{const{data:i}=await O(l);e.value=i}catch{}finally{a(!1)}})(),(l,i)=>{const s=L,c=Q,_=z,b=F,f=I;return n(),d("div",G,[t(_,{class:"container-breadcrumb"},{default:o(()=>[t(c,null,{default:o(()=>[t(s)]),_:1}),t(c,null,{default:o(()=>[g(v(l.$t("menu.app")),1)]),_:1}),t(c,null,{default:o(()=>[g(v(l.$t("menu.app.detail")),1)]),_:1})]),_:1}),t(f,{direction:"vertical",size:16,fill:""},{default:o(()=>[t(b,{class:"general-card",bordered:!1},{default:o(()=>[t(E,{loading:x(u),"render-data":e.value},null,8,["loading","render-data"])]),_:1})]),_:1})])}}});const le=h(K,[["__scopeId","data-v-6a8adf7f"]]);export{le as default};
