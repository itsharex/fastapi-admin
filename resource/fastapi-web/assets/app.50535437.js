import{u as je,B as Qe,p as Ge,y as He,i as Je,z as We,_ as Xe}from"./index.69428aac.js";/* empty css               *//* empty css                *//* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as H,S as Ye}from"./sortable.esm.f8f875e8.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{d as Ze,r as pe,e as r,c as J,w as ea,B as i,C as y,aH as a,aG as t,aL as n,aM as p,aJ as x,aI as U,aD as S,u as _,F as h,D as aa,aE as W,bP as g,n as la,aW as ta,aK as oa,aF as ua,bA as na,bB as sa,b2 as ia,bC as da,b1 as ra,aS as pa,bD as ca,bE as ma,b5 as _a,bF as fa,ab as va,aU as ya,bi as ba,bj as ka,bl as ha,bm as ga,b4 as $a,bG as qa,aT as Ca,bH as wa,bI as Va,bQ as Fa,bR as Sa,bS as Da,bK as Ba,a_ as Ia,bJ as za,g as Ea}from"./arco.17b1a46f.js";import{h as xa}from"./vue.32c094a4.js";import{u as Ua}from"./loading.44762de3.js";import{q as X}from"./common.4956e59d.js";import{s as Aa,q as Na,a as Ra,b as Ta}from"./key.32dc3797.js";import{g as La,c as Pa}from"./app.a4cebeab.js";import{q as Ka}from"./model.6a43f9ab.js";import"./chart.d5ce7f1f.js";import"./base.87fcf6e2.js";const Oa={class:"container"},Ma={class:"action-icon"},ja={class:"action-icon"},Qa={id:"tableSetting"},Ga={style:{"margin-right":"4px",cursor:"move"}},Ha={class:"title"},Ja={key:0},Wa={key:1},Xa={key:0},Ya={key:1},Za={name:"AppKeyList"},el=Ze({...Za,setup(al){const{proxy:B}=Ea(),T=xa(),ce=pe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),Y=r([]);(async()=>{try{const{data:e}=await La();Y.value=e.items,T.query.app_id&&(s.value.app_id=Number(T.query.app_id))}catch{}})();const L=r([]);(async()=>{try{const{data:e}=await Ka();L.value=e.items}catch{}})();const me=async e=>{v(!0);try{await Aa(e),B.$message.success("\u5220\u9664\u6210\u529F"),z()}catch{}finally{v(!1)}},Z=()=>({type:1,app_id:r(),key:"",models:[],quota:r(),status:r(),created_at:[]}),{loading:_e,setLoading:v}=Ua(!0),{t:c}=je(),ee=r([]),s=r(Z()),q=r([]),A=r([]),P=r("medium"),C=r([]),w=r(!0),ae=r(),D={current:1,pageSize:10,showTotal:!0,showPageSize:!0,pageSizeOptions:[10,50,100,500,1e3]},N=pe({...D}),fe=J(()=>[{name:c("searchTable.size.mini"),value:"mini"},{name:c("searchTable.size.small"),value:"small"},{name:c("searchTable.size.medium"),value:"medium"},{name:c("searchTable.size.large"),value:"large"}]),ve=J(()=>[{title:c("key.columns.app_id"),dataIndex:"app_id",slotName:"app_id",align:"center",width:80},{title:c("key.columns.key"),dataIndex:"key",slotName:"key",align:"center",ellipsis:!0,tooltip:!0},{title:c("key.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center",ellipsis:!0,tooltip:!0},{title:c("key.columns.used_quota"),dataIndex:"used_quota",slotName:"used_quota",align:"center",ellipsis:!0,tooltip:!0},{title:c("key.columns.quota_expires_at"),dataIndex:"quota_expires_at",slotName:"quota_expires_at",align:"center",ellipsis:!0,tooltip:!0},{title:c("key.columns.app.models"),dataIndex:"model_names",slotName:"model_names",align:"center",ellipsis:!0,tooltip:!0},{title:c("key.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:c("key.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),ye=J(()=>[{label:c("key.dict.status.1"),value:1},{label:c("key.dict.status.2"),value:2}]),I=async(e={...D,type:1,app_id:T.query.app_id})=>{v(!0);try{const{data:o}=await Na(e);ee.value=o.items,N.current=e.current,N.pageSize=e.pageSize,N.total=o.paging.total}catch{}finally{v(!1)}},z=()=>{I({...D,...s.value})},be=e=>{I({...D,...s.value,current:e})},ke=e=>{D.pageSize=e,I({...D,...s.value})};I();const he=()=>{s.value=Z()},ge=async e=>{v(!0);try{await Ra(e),B.$message.success("\u64CD\u4F5C\u6210\u529F"),z()}catch{}finally{v(!1)}},$e=(e,o)=>{P.value=e},qe=(e,o,d)=>{e?q.value.splice(d,0,o):q.value=A.value.filter(f=>f.dataIndex!==o.dataIndex)},le=(e,o,d,f=!1)=>{const k=f?H(e):e;return o>-1&&d>-1&&k.splice(o,1,k.splice(d,1,k[o]).pop()),k},Ce=e=>{e&&la(()=>{const o=document.getElementById("tableSetting");new Ye(o,{onEnd(d){const{oldIndex:f,newIndex:k}=d;le(q.value,f,k),le(A.value,f,k)}})})};ea(()=>ve.value,e=>{q.value=H(e),q.value.forEach((o,d)=>{o.checked=!0}),A.value=H(q.value)},{deep:!0,immediate:!0});const E=r(!1),te=r(),u=r({}),we=e=>{u.value.quota=e*5e5},Ve=async e=>{var o,d;v(!0);try{u.value.id=e.id,u.value.key=e.key,u.value.is_limit_quota=e.is_limit_quota,u.value.quota=e.quota,u.value.quota_expires_at=e.quota_expires_at,u.value.models=e.models,u.value.ip_whitelist=((o=e.ip_whitelist)==null?void 0:o.join(`
`))||"",u.value.ip_blacklist=((d=e.ip_blacklist)==null?void 0:d.join(`
`))||"",u.value.remark=e.remark,E.value=!0}catch{}finally{v(!1)}},Fe=async e=>{var d;if(await((d=te.value)==null?void 0:d.validate())){E.value=!0,e(!1);return}v(!0);try{const{data:f}=await Pa(u.value);navigator.clipboard.writeText(f.key),ta.success(c("app.success.key_config")),e(),I()}catch{}finally{v(!1)}},Se=()=>{E.value=!1},De=e=>{C.value=e,w.value=!e.length},K=e=>{if(C.value.length===0)B.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let o=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${C.value.length}\u6761\u6570\u636E?`;switch(e.action){case"status":e.value===1?o=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${C.value.length}\u6761\u6570\u636E?`:o=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${C.value.length}\u6761\u6570\u636E?`;break;case"delete":o=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${C.value.length}\u6761\u6570\u636E?`;break}B.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:o,hideCancel:!1,onOk:()=>{v(!0),e.ids=C.value,Ta(e).then(d=>{v(!1),B.$message.success("\u64CD\u4F5C\u6210\u529F"),z(),ae.value.selectAll(!1)})}})}};return(e,o)=>{const d=Qe,f=oa,k=ua,O=na,R=sa,m=ia,b=da,oe=ra,ue=pa,Be=ca,M=ma,ne=_a,se=fa,Ie=va,$=ya,ie=Ge,de=ba,j=ka,ze=He,Ee=ha,xe=ga,Ue=Je,Ae=We,Ne=$a,Re=qa,re=Ca,Te=wa,Le=Va,V=Fa,Pe=Sa,Ke=Da,Q=Ba,Oe=Ia,Me=za;return i(),y("div",Oa,[a(k,{class:"container-breadcrumb"},{default:t(()=>[a(f,null,{default:t(()=>[a(d)]),_:1}),a(f,null,{default:t(()=>[n(p(e.$t("menu.key")),1)]),_:1}),a(f,null,{default:t(()=>[n(p(e.$t("menu.key.app.list")),1)]),_:1})]),_:1}),a(Me,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:t(()=>[a(M,null,{default:t(()=>[a(b,{flex:1},{default:t(()=>[a(ne,{model:s.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[a(M,{gutter:16},{default:t(()=>[a(b,{span:8},{default:t(()=>[a(m,{field:"app_id",label:e.$t("key.form.app")},{default:t(()=>[a(R,{modelValue:s.value.app_id,"onUpdate:modelValue":o[0]||(o[0]=l=>s.value.app_id=l),placeholder:e.$t("key.form.selectDefault"),"allow-search":"","allow-clear":""},{default:t(()=>[(i(!0),y(x,null,U(Y.value,l=>(i(),S(O,{key:l.app_id,value:l.app_id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(b,{span:8},{default:t(()=>[a(m,{field:"key",label:e.$t("key.form.key")},{default:t(()=>[a(oe,{modelValue:s.value.key,"onUpdate:modelValue":o[1]||(o[1]=l=>s.value.key=l),placeholder:e.$t("key.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(b,{span:8},{default:t(()=>[a(m,{field:"models",label:e.$t("key.form.models")},{default:t(()=>[a(R,{modelValue:s.value.models,"onUpdate:modelValue":o[2]||(o[2]=l=>s.value.models=l),placeholder:e.$t("key.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(i(!0),y(x,null,U(L.value,l=>(i(),S(O,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(b,{span:8},{default:t(()=>[a(m,{field:"quota",label:e.$t("key.form.quota")},{default:t(()=>[a(ue,{modelValue:s.value.quota,"onUpdate:modelValue":o[3]||(o[3]=l=>s.value.quota=l),precision:0,placeholder:e.$t("key.form.quota.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(b,{span:8},{default:t(()=>[a(m,{field:"status",label:e.$t("key.form.status")},{default:t(()=>[a(R,{modelValue:s.value.status,"onUpdate:modelValue":o[4]||(o[4]=l=>s.value.status=l),options:_(ye),placeholder:e.$t("key.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(b,{span:8},{default:t(()=>[a(m,{field:"created_at",label:e.$t("key.form.created_at")},{default:t(()=>[a(Be,{modelValue:s.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=l=>s.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(se,{style:{height:"84px"},direction:"vertical"}),a(b,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[a(de,{direction:"vertical",size:18},{default:t(()=>[a($,{type:"primary",onClick:z},{icon:t(()=>[a(Ie)]),default:t(()=>[n(" "+p(e.$t("key.form.search")),1)]),_:1}),a($,{onClick:he},{icon:t(()=>[a(ie)]),default:t(()=>[n(" "+p(e.$t("key.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(se,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(M,{style:{"margin-bottom":"16px"}},{default:t(()=>[a(b,{span:12},{default:t(()=>[a(de,null,{default:t(()=>[a($,{type:"primary",status:"success",disabled:w.value,title:w.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[6]||(o[6]=l=>K({action:"status",value:1}))},{default:t(()=>[n(" \u542F\u7528 ")]),_:1},8,["disabled","title"]),a($,{type:"primary",status:"danger",disabled:w.value,title:w.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[7]||(o[7]=l=>K({action:"status",value:2}))},{default:t(()=>[n(" \u7981\u7528 ")]),_:1},8,["disabled","title"]),a($,{type:"primary",status:"danger",disabled:w.value,title:w.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:o[8]||(o[8]=l=>K({action:"delete"}))},{default:t(()=>[n(" \u5220\u9664 ")]),_:1},8,["disabled","title"])]),_:1})]),_:1}),a(b,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:t(()=>[a(j,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[h("div",{class:"action-icon",onClick:z},[a(ie,{size:"18"})])]),_:1},8,["content"]),a(xe,{onSelect:$e},{content:t(()=>[(i(!0),y(x,null,U(_(fe),l=>(i(),S(Ee,{key:l.value,value:l.value,class:aa({active:l.value===P.value})},{default:t(()=>[h("span",null,p(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[a(j,{content:e.$t("searchTable.actions.density")},{default:t(()=>[h("div",Ma,[a(ze,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(j,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[a(Re,{trigger:"click",position:"bl",onPopupVisibleChange:Ce},{content:t(()=>[h("div",Qa,[(i(!0),y(x,null,U(A.value,(l,F)=>(i(),y("div",{key:l.dataIndex,class:"setting"},[h("div",Ga,[a(Ae)]),h("div",null,[a(Ne,{modelValue:l.checked,"onUpdate:modelValue":G=>l.checked=G,onChange:G=>qe(G,l,F)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),h("div",Ha,p(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:t(()=>[h("div",ja,[a(Ue,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Le,{ref_key:"tableRef",ref:ae,"row-key":"id",loading:_(_e),pagination:N,columns:q.value,data:ee.value,bordered:!1,size:P.value,"row-selection":ce,onPageChange:be,onPageSizeChange:ke,onSelectionChange:De},{quota:t(({record:l})=>[l.is_limit_quota?(i(),y("span",Ja," $"+p(l.quota!==0?_(X)(l.quota):"0.00"),1)):(i(),y("span",Wa,p(e.$t("key.columns.quota.no_limit")),1))]),used_quota:t(({record:l})=>[n(" $"+p(l.used_quota>0?_(X)(l.used_quota):"0.00"),1)]),quota_expires_at:t(({record:l})=>[n(p(l.is_limit_quota&&l.quota_expires_at||"-"),1)]),model_names:t(({record:l})=>[l.model_names?(i(),y("span",Xa,p(l.model_names.join(",")),1)):(i(),y("span",Ya,p(e.$t("key.columns.app.models.no_limit")),1))]),status:t(({record:l})=>[a(re,{modelValue:l.status,"onUpdate:modelValue":F=>l.status=F,"checked-value":1,"unchecked-value":2,onChange:F=>ge({id:`${l.id}`,status:Number(`${l.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:t(({record:l})=>[a($,{type:"text",size:"small",onClick:F=>e.$router.push({name:"KeyDetail",query:{id:`${l.id}`}})},{default:t(()=>[n(p(e.$t("key.columns.operations.view")),1)]),_:2},1032,["onClick"]),a($,{type:"text",size:"small",onClick:F=>Ve(l)},{default:t(()=>[n(p(e.$t("key.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(Te,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:F=>me({id:`${l.id}`})},{default:t(()=>[a($,{type:"text",size:"small"},{default:t(()=>[n(p(e.$t("key.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(Oe,{visible:E.value,"onUpdate:visible":o[17]||(o[17]=l=>E.value=l),title:e.$t("app.form.title.keyConfig"),"ok-text":e.$t("app.button.save"),onCancel:Se,onBeforeOk:Fe},{default:t(()=>[a(ne,{ref_key:"formRef",ref:te,model:u.value},{default:t(()=>[a(m,{field:"key",label:e.$t("app.label.key")},{default:t(()=>[a(oe,{modelValue:u.value.key,"onUpdate:modelValue":o[9]||(o[9]=l=>u.value.key=l),placeholder:e.$t("app.placeholder.key"),readonly:""},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(m,{field:"is_limit_quota",label:e.$t("app.label.isLimitQuota")},{default:t(()=>[a(re,{modelValue:u.value.is_limit_quota,"onUpdate:modelValue":o[10]||(o[10]=l=>u.value.is_limit_quota=l)},null,8,["modelValue"])]),_:1},8,["label"]),u.value.is_limit_quota?(i(),S(m,{key:0,field:"quota",label:e.$t("app.label.quota"),rules:[{required:!0,message:e.$t("app.error.quota.required")}]},{default:t(()=>[a(ue,{modelValue:u.value.quota,"onUpdate:modelValue":o[11]||(o[11]=l=>u.value.quota=l),placeholder:e.$t("app.placeholder.quota"),precision:0,min:0,max:9999999999999,style:{"margin-right":"10px"}},null,8,["modelValue","placeholder"]),h("div",null," $"+p(u.value.quota?_(X)(u.value.quota):"0.00"),1)]),_:1},8,["label","rules"])):W("",!0),u.value.is_limit_quota?(i(),S(m,{key:1},{default:t(()=>[a(Pe,{type:"button",onChange:we},{default:t(()=>[a(V,{value:1},{default:t(()=>[n(" $1 ")]),_:1}),a(V,{value:5},{default:t(()=>[n(" $5 ")]),_:1}),a(V,{value:10},{default:t(()=>[n(" $10 ")]),_:1}),a(V,{value:20},{default:t(()=>[n(" $20 ")]),_:1}),a(V,{value:100},{default:t(()=>[n(" $100 ")]),_:1}),a(V,{value:500},{default:t(()=>[n(" $500 ")]),_:1}),a(V,{value:1e3},{default:t(()=>[n(" $1000 ")]),_:1})]),_:1},8,["onChange"])]),_:1})):W("",!0),u.value.is_limit_quota?(i(),S(m,{key:2,field:"quota_expires_at",label:e.$t("app.label.quota_expires_at")},{default:t(()=>[a(Ke,{modelValue:u.value.quota_expires_at,"onUpdate:modelValue":o[12]||(o[12]=l=>u.value.quota_expires_at=l),placeholder:e.$t("app.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":l=>_(g)(l).isBefore(_(g)()),style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>_(g)().add(1,"day")},{label:"7",value:()=>_(g)().add(7,"day")},{label:"15",value:()=>_(g)().add(15,"day")},{label:"30",value:()=>_(g)().add(30,"day")},{label:"90",value:()=>_(g)().add(90,"day")},{label:"180",value:()=>_(g)().add(180,"day")},{label:"365",value:()=>_(g)().add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"])):W("",!0),a(m,{field:"models",label:e.$t("app.label.models")},{default:t(()=>[a(R,{modelValue:u.value.models,"onUpdate:modelValue":o[13]||(o[13]=l=>u.value.models=l),placeholder:e.$t("app.placeholder.models"),"max-tag-count":3,multiple:"","allow-search":"","allow-clear":""},{default:t(()=>[(i(!0),y(x,null,U(L.value,l=>(i(),S(O,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"]),a(m,{field:"ip_whitelist",label:e.$t("app.label.ip_whitelist")},{default:t(()=>[a(Q,{modelValue:u.value.ip_whitelist,"onUpdate:modelValue":o[14]||(o[14]=l=>u.value.ip_whitelist=l),placeholder:e.$t("app.placeholder.ip_whitelist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(m,{field:"ip_blacklist",label:e.$t("app.label.ip_blacklist")},{default:t(()=>[a(Q,{modelValue:u.value.ip_blacklist,"onUpdate:modelValue":o[15]||(o[15]=l=>u.value.ip_blacklist=l),placeholder:e.$t("app.placeholder.ip_blacklist"),"auto-size":{minRows:5,maxRows:10}},null,8,["modelValue","placeholder"])]),_:1},8,["label"]),a(m,{field:"remark",label:e.$t("app.placeholder.remark")},{default:t(()=>[a(Q,{modelValue:u.value.remark,"onUpdate:modelValue":o[16]||(o[16]=l=>u.value.remark=l),placeholder:e.$t("app.placeholder.remark")},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),_:1})])}}});const El=Xe(el,[["__scopeId","data-v-2687e08e"]]);export{El as default};