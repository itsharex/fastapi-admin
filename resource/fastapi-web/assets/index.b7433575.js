import{u as w,_ as g,C as B}from"./index.1e5fc0c8.js";/* empty css               *//* empty css               */import{d as h,c as j,B as _,C as r,aH as t,aG as o,aJ as L,aI as S,u as x,aD as k,aM as f,bO as $,bP as q,bQ as C,bi as I,e as K,aL as v,aK as A,aF as N,bJ as O}from"./arco.aed15247.js";import{h as z}from"./vue.0cc5b64a.js";import{u as F}from"./loading.b5911e1d.js";import{d as J}from"./key.bb35379f.js";/* empty css                *//* empty css                */import"./chart.9aa6eafa.js";import"./base.87fcf6e2.js";const P={class:"item-container"},R={key:1},V=h({__name:"profile-item",props:{type:{type:String,default:""},renderData:{type:Object,required:!0},loading:{type:Boolean,default:!1}},setup(u){const p=u,{t:a}=w(),m=j(()=>{var l,n,c,i,s;const{renderData:e}=p,d=[];return d.push({title:a("key.detail.title.baseInfo"),data:[{label:e.type===1?a("key.detail.label.app_id"):a("key.detail.label.corp"),value:e.type===1?e.app_id:a(`key.dict.corp.${e.corp}`)},{label:a("key.detail.label.key"),value:e.key},{label:a("key.detail.label.quota"),value:(e==null?void 0:e.quota)||"-"},{label:a("key.detail.label.remark"),value:(e==null?void 0:e.remark)||"-"},{label:a("key.detail.label.created_at"),value:e.created_at},{label:a("key.detail.label.updated_at"),value:e.updated_at}]}),e.type===1&&d.push({title:a("key.detail.title.advanced"),data:[{label:a("key.detail.label.models"),value:((l=e==null?void 0:e.model_names)==null?void 0:l.join(`
`))||"-"},{label:a("key.detail.label.ip_whitelist"),value:((n=e.ip_whitelist)==null?void 0:n.join(`
`))||"-"},{label:e.type===1?a("key.detail.label.ip_blacklist"):"",value:e.type===1?((c=e.ip_blacklist)==null?void 0:c.join(`
`))||"-":""}]}),e.type===2&&d.push({title:a("key.detail.title.advanced"),data:[{label:a("key.detail.label.models"),value:((i=e==null?void 0:e.model_names)==null?void 0:i.join(`
`))||"-"},{label:a("key.detail.label.modelAgentNames"),value:((s=e==null?void 0:e.model_agent_names)==null?void 0:s.join(`
`))||"-"},{label:a("key.detail.label.isAgentsOnly"),value:a(`key.dict.is_agents_only.${e.is_agents_only}`)}]}),d});return(e,d)=>{const l=$,n=q,c=C,i=I;return _(),r("div",P,[t(i,{size:16,direction:"vertical",fill:""},{default:o(()=>[(_(!0),r(L,null,S(x(m),(s,y)=>(_(),k(c,{key:y,"label-style":{textAlign:"right",width:"200px",paddingRight:"10px",color:"rgb(var(--gray-8))"},"value-style":{width:"400px"},title:s.title,data:s.data},{value:o(({value:b})=>[u.loading?(_(),k(n,{key:0,animation:!0},{default:o(()=>[t(l,{widths:["200px"],rows:1})]),_:1})):(_(),r("span",R,f(b),1))]),_:2},1032,["label-style","title","data"]))),128))]),_:1})])}}});const D=g(V,[["__scopeId","data-v-b29e2b58"]]),E={class:"container"},G={name:"KeyDetail"},H=h({...G,setup(u){const{loading:p,setLoading:a}=F(!0),m=z(),e=K({});return(async(l={id:m.query.id})=>{a(!0);try{const{data:n}=await J(l);e.value=n}catch{}finally{a(!1)}})(),(l,n)=>{const c=B,i=A,s=N,y=O,b=I;return _(),r("div",E,[t(s,{class:"container-breadcrumb"},{default:o(()=>[t(i,null,{default:o(()=>[t(c)]),_:1}),t(i,null,{default:o(()=>[v(f(l.$t("menu.key")),1)]),_:1}),t(i,null,{default:o(()=>[v(f(l.$t("menu.key.detail")),1)]),_:1})]),_:1}),t(b,{direction:"vertical",size:16,fill:""},{default:o(()=>[t(y,{class:"general-card",bordered:!1},{default:o(()=>[t(D,{loading:x(p),"render-data":e.value},null,8,["loading","render-data"])]),_:1})]),_:1})])}}});const le=g(H,[["__scopeId","data-v-96619ab4"]]);export{le as default};
