import{u as ml,H as cl,p as pl,y as fl,i as vl,z as _l,_ as gl}from"./index.0119f130.js";/* empty css               *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as ne,S as bl}from"./sortable.esm.734c0c44.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as yl,r as Fe,e as n,c as Y,w as kl,B as o,C as p,aH as a,aG as u,aL as i,aM as c,aJ as I,aI as S,aD as f,u as k,aE as C,F as V,D as Cl,n as hl,aK as $l,aF as El,bA as Fl,bB as wl,b2 as Bl,bC as Vl,b1 as Dl,bD as Al,bE as ql,b5 as Il,bF as Sl,ab as zl,aU as Ul,bi as Ml,bj as Ll,bl as Ol,bm as xl,b4 as Hl,bG as Tl,aT as Nl,bH as Pl,bI as Rl,aV as Ql,a_ as jl,bX as Gl,bJ as Jl,g as Xl}from"./arco.f6ea4e94.js";import{u as Kl}from"./loading.b2615842.js";import{p as z,q as se}from"./common.4fed7ae4.js";import{q as Wl,s as Yl,a as Zl,b as et,c as lt,d as tt}from"./model.92106001.js";import{f as at}from"./agent.d5680dfa.js";import{q as ut}from"./corp.569016f1.js";import ot from"./index.3e7b2ba2.js";import"./chart.6e5bd655.js";import"./vue.945ef37b.js";import"./base.87fcf6e2.js";/* empty css                *//* empty css                */const nt={class:"container"},st={class:"action-icon"},it={class:"action-icon"},dt={id:"tableSetting"},rt={style:{"margin-right":"4px",cursor:"move"}},mt={class:"title"},ct={key:0},pt={key:1},ft={key:2},vt={key:3},_t={key:4},gt={key:0},bt={key:1},yt={key:2},kt={key:3},Ct={key:4},ht={name:"ModelList"},$t=yl({...ht,setup(Et){const{loading:we,setLoading:b}=Kl(!0),{proxy:U}=Xl(),Be=Fe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),ie=n([]);(async()=>{b(!0);try{const{data:e}=await ut();ie.value=e.items}catch{}finally{b(!1)}})();const Z=n([]);(async()=>{try{const{data:e}=await Wl();Z.value=e.items}catch{}})();const de=n([]);(async()=>{try{const{data:e}=await at();de.value=e.items}catch{}})();const Ve=async e=>{b(!0);try{await Yl(e),U.$message.success("\u5220\u9664\u6210\u529F"),M()}catch{}finally{b(!1)}},re=()=>({corp:"",name:"",model:"",type:n(),status:n(),created_at:[]}),{t:m}=ml(),y=n([]),v=n(re()),D=n([]),P=n([]),ee=n("medium"),_=n([]),s=n(!0),me=n();let ce=!1;const A={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},R=Fe({...A}),De=Y(()=>[{name:m("searchTable.size.mini"),value:"mini"},{name:m("searchTable.size.small"),value:"small"},{name:m("searchTable.size.medium"),value:"medium"},{name:m("searchTable.size.large"),value:"large"}]),Ae=Y(()=>[{title:m("model.columns.corp"),dataIndex:"corp_name",slotName:"corp_name",align:"center",width:110},{title:m("model.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:m("model.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:m("model.columns.prompt_price"),dataIndex:"prompt_ratio",slotName:"prompt_ratio",align:"center"},{title:m("model.columns.completion_price"),dataIndex:"completion_ratio",slotName:"completion_ratio",align:"center"},{title:m("model.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:m("model.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:132},{title:m("model.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:170}]),qe=Y(()=>[{label:m("model.dict.type.1"),value:1},{label:m("model.dict.type.2"),value:2},{label:m("model.dict.type.3"),value:3},{label:m("model.dict.type.4"),value:4},{label:m("model.dict.type.100"),value:100}]),Ie=Y(()=>[{label:m("model.dict.status.1"),value:1},{label:m("model.dict.status.2"),value:2}]),Q=async(e={...A})=>{b(!0);try{const{data:t}=await Zl(e);y.value=t.items,R.current=e.current,R.pageSize=e.pageSize,R.total=t.paging.total,ce=t.items.length===0}catch{}finally{b(!1)}},M=()=>{Q({...A,...v.value})},Se=e=>{Q({...A,...v.value,current:e})},ze=e=>{A.pageSize=e,Q({...A,...v.value})};Q();const Ue=()=>{v.value=re()},Me=async e=>{b(!0);try{await et(e),U.$message.success("\u64CD\u4F5C\u6210\u529F"),M()}catch{}finally{b(!1)}},Le=(e,t)=>{ee.value=e},Oe=(e,t,d)=>{e?D.value.splice(d,0,t):D.value=P.value.filter(E=>E.dataIndex!==t.dataIndex)},pe=(e,t,d,E=!1)=>{const w=E?ne(e):e;return t>-1&&d>-1&&w.splice(t,1,w.splice(d,1,w[t]).pop()),w},xe=e=>{e&&hl(()=>{const t=document.getElementById("tableSetting");new bl(t,{onEnd(d){const{oldIndex:E,newIndex:w}=d;pe(D.value,E,w),pe(P.value,E,w)}})})};kl(()=>Ae.value,e=>{D.value=ne(e),D.value.forEach((t,d)=>{t.checked=!0}),P.value=ne(D.value)},{deep:!0,immediate:!0});const L=n(!1),fe=n(),$=n({}),ve=n(),O=n(!1),j=n({}),He=async()=>{b(!0);try{$.value.url="",$.value.key="",$.value.is_config_model_agent=!0,L.value=!0}catch{}finally{b(!1)}},Te=async e=>{var d;if(await((d=fe.value)==null?void 0:d.validate())){L.value=!0,e(!1);return}b(!0);try{await lt($.value),e(),window.location.reload()}catch{}finally{b(!1)}},Ne=()=>{L.value=!1},Pe=async e=>{var d;if(await((d=ve.value)==null?void 0:d.validate())){O.value=!0,e(!1);return}e(),g({action:"agent",value:"all",model_agents:j.value.model_agents})},Re=()=>{O.value=!1},_e=n(),x=n(!1),G=n({}),Qe=async e=>{var d;if(await((d=_e.value)==null?void 0:d.validate())){x.value=!0,e(!1);return}e(),g({action:"forward",value:"all",target_model:G.value.target_model})},je=()=>{x.value=!1},ge=n(),H=n(!1),J=n({}),Ge=async e=>{var d;if(await((d=ge.value)==null?void 0:d.validate())){H.value=!0,e(!1);return}e(),g({action:"fallback",value:"all",fallback_model:J.value.fallback_model})},Je=()=>{H.value=!1},Xe=e=>{_.value=e,s.value=!e.length},g=e=>{if(_.value.length===0)U.$message.info("\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E");else{let t=`\u662F\u5426\u786E\u5B9A\u64CD\u4F5C\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`;switch(e.action){case"agent":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406?`:e.value==="all"&&(e.model_agents?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u4EE3\u7406\u542F\u7528\u5E76\u4F7F\u7528\u6240\u9009\u7684\u6A21\u578B\u4EE3\u7406?`:O.value=!0);break;case"forward":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1?`:e.value==="all"&&(e.target_model?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u6A21\u578B\u8F6C\u53D1\u542F\u7528\u5E76\u5168\u90E8\u8F6C\u53D1\u5230\u6240\u9009\u6A21\u578B?`:x.value=!0);break;case"fallback":e.value===!0?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value===!1?t=`\u662F\u5426\u786E\u5B9A\u5173\u95ED\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B?`:e.value==="all"&&(e.fallback_model?t=`\u662F\u5426\u786E\u5B9A\u5C06\u6240\u9009${_.value.length}\u6761\u6570\u636E\u7684\u540E\u5907\u6A21\u578B\u542F\u7528\u5E76\u5168\u90E8\u540E\u5907\u5230\u6240\u9009\u6A21\u578B?`:H.value=!0);break;case"status":e.value===1?t=`\u662F\u5426\u786E\u5B9A\u542F\u7528\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`:t=`\u662F\u5426\u786E\u5B9A\u7981\u7528\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`;break;case"delete":t=`\u662F\u5426\u786E\u5B9A\u5220\u9664\u6240\u9009\u7684${_.value.length}\u6761\u6570\u636E?`;break}if(e.action==="agent"&&e.value==="all"&&!e.model_agents||e.action==="forward"&&e.value==="all"&&!e.target_model||e.action==="fallback"&&e.value==="all"&&!e.fallback_model)return;U.$modal.warning({title:"\u8B66\u544A",titleAlign:"start",content:t,hideCancel:!1,onOk:()=>{b(!0),e.ids=_.value,tt(e).then(d=>{b(!1),U.$message.success("\u64CD\u4F5C\u6210\u529F"),M(),me.value.selectAll(!1)})}})}},le=n(!1),be=n([]),Ke=e=>{be.value=e,le.value=!0},te=n(!1),ye=n(),We=e=>{te.value=!0,ye.value=e},Ye=()=>{te.value=!1};return(e,t)=>{const d=cl,E=$l,w=El,X=Fl,q=wl,h=Bl,F=Vl,K=Dl,Ze=Al,ae=ql,T=Il,ke=Sl,el=zl,r=Ul,Ce=pl,he=Ml,ue=Ll,ll=fl,tl=Ol,al=xl,ul=vl,ol=_l,nl=Hl,sl=Tl,$e=Nl,il=Pl,Ee=Rl,dl=Ql,N=jl,W=Gl,rl=Jl;return o(),p("div",nt,[a(w,{class:"container-breadcrumb"},{default:u(()=>[a(E,null,{default:u(()=>[a(d)]),_:1}),a(E,null,{default:u(()=>[i(c(e.$t("menu.model")),1)]),_:1}),a(E,null,{default:u(()=>[i(c(e.$t("menu.model.list")),1)]),_:1})]),_:1}),a(rl,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:u(()=>[a(ae,null,{default:u(()=>[a(F,{flex:1},{default:u(()=>[a(T,{model:v.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:u(()=>[a(ae,{gutter:16},{default:u(()=>[a(F,{span:8},{default:u(()=>[a(h,{field:"corp",label:e.$t("model.form.corp")},{default:u(()=>[a(q,{modelValue:v.value.corp,"onUpdate:modelValue":t[0]||(t[0]=l=>v.value.corp=l),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},{default:u(()=>[(o(!0),p(I,null,S(ie.value,l=>(o(),f(X,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a(h,{field:"name",label:e.$t("model.form.name")},{default:u(()=>[a(K,{modelValue:v.value.name,"onUpdate:modelValue":t[1]||(t[1]=l=>v.value.name=l),placeholder:e.$t("model.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a(h,{field:"model",label:e.$t("model.form.model")},{default:u(()=>[a(K,{modelValue:v.value.model,"onUpdate:modelValue":t[2]||(t[2]=l=>v.value.model=l),placeholder:e.$t("model.form.model.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a(h,{field:"type",label:e.$t("model.form.type")},{default:u(()=>[a(q,{modelValue:v.value.type,"onUpdate:modelValue":t[3]||(t[3]=l=>v.value.type=l),options:k(qe),placeholder:e.$t("model.form.selectDefault"),"allow-search":"","allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a(h,{field:"status",label:e.$t("model.form.status")},{default:u(()=>[a(q,{modelValue:v.value.status,"onUpdate:modelValue":t[4]||(t[4]=l=>v.value.status=l),options:k(Ie),placeholder:e.$t("model.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(F,{span:8},{default:u(()=>[a(h,{field:"created_at",label:e.$t("model.form.created_at")},{default:u(()=>[a(Ze,{modelValue:v.value.created_at,"onUpdate:modelValue":t[5]||(t[5]=l=>v.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(ke,{style:{height:"84px"},direction:"vertical"}),a(F,{flex:"86px",style:{"text-align":"right"}},{default:u(()=>[a(he,{direction:"vertical",size:18},{default:u(()=>[a(r,{type:"primary",onClick:M},{icon:u(()=>[a(el)]),default:u(()=>[i(" "+c(e.$t("model.form.search")),1)]),_:1}),a(r,{onClick:Ue},{icon:u(()=>[a(Ce)]),default:u(()=>[i(" "+c(e.$t("model.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(ke,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(ae,{style:{"margin-bottom":"16px"}},{default:u(()=>[a(F,{span:12},{default:u(()=>[a(he,null,{default:u(()=>[a(r,{type:"primary",onClick:t[6]||(t[6]=l=>e.$router.push({name:"ModelCreate"}))},{default:u(()=>[i(c(e.$t("model.operation.create")),1)]),_:1}),k(ce)?(o(),f(r,{key:0,type:"primary",status:"success",onClick:t[7]||(t[7]=l=>He())},{default:u(()=>[i(" \u521D\u59CB\u5316 ")]),_:1})):C("",!0),y.value.length!==0?(o(),f(r,{key:1,type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[8]||(t[8]=l=>g({action:"agent",value:"all"}))},{default:u(()=>[i(" \u5168\u90E8\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:2,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[9]||(t[9]=l=>g({action:"agent",value:!0}))},{default:u(()=>[i(" \u542F\u7528\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:3,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[10]||(t[10]=l=>g({action:"agent",value:!1}))},{default:u(()=>[i(" \u5173\u95ED\u4EE3\u7406 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:4,type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[11]||(t[11]=l=>g({action:"forward",value:"all"}))},{default:u(()=>[i(" \u5168\u90E8\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:5,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[12]||(t[12]=l=>g({action:"forward",value:!0}))},{default:u(()=>[i(" \u542F\u7528\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:6,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[13]||(t[13]=l=>g({action:"forward",value:!1}))},{default:u(()=>[i(" \u5173\u95ED\u8F6C\u53D1 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:7,type:"primary",status:"warning",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[14]||(t[14]=l=>g({action:"fallback",value:"all"}))},{default:u(()=>[i(" \u5168\u90E8\u540E\u5907 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:8,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[15]||(t[15]=l=>g({action:"fallback",value:!0}))},{default:u(()=>[i(" \u542F\u7528\u540E\u5907 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:9,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[16]||(t[16]=l=>g({action:"fallback",value:!1}))},{default:u(()=>[i(" \u5173\u95ED\u540E\u5907 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:10,type:"primary",status:"success",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[17]||(t[17]=l=>g({action:"status",value:1}))},{default:u(()=>[i(" \u542F\u7528 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:11,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[18]||(t[18]=l=>g({action:"status",value:2}))},{default:u(()=>[i(" \u7981\u7528 ")]),_:1},8,["disabled","title"])):C("",!0),y.value.length!==0?(o(),f(r,{key:12,type:"primary",status:"danger",disabled:s.value,title:s.value?"\u8BF7\u9009\u62E9\u8981\u64CD\u4F5C\u7684\u6570\u636E":"",onClick:t[19]||(t[19]=l=>g({action:"delete"}))},{default:u(()=>[i(" \u5220\u9664 ")]),_:1},8,["disabled","title"])):C("",!0)]),_:1})]),_:1}),a(F,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:u(()=>[a(ue,{content:e.$t("searchTable.actions.refresh")},{default:u(()=>[V("div",{class:"action-icon",onClick:M},[a(Ce,{size:"18"})])]),_:1},8,["content"]),a(al,{onSelect:Le},{content:u(()=>[(o(!0),p(I,null,S(k(De),l=>(o(),f(tl,{key:l.value,value:l.value,class:Cl({active:l.value===ee.value})},{default:u(()=>[V("span",null,c(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:u(()=>[a(ue,{content:e.$t("searchTable.actions.density")},{default:u(()=>[V("div",st,[a(ll,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(ue,{content:e.$t("searchTable.actions.columnSetting")},{default:u(()=>[a(sl,{trigger:"click",position:"bl",onPopupVisibleChange:xe},{content:u(()=>[V("div",dt,[(o(!0),p(I,null,S(P.value,(l,B)=>(o(),p("div",{key:l.dataIndex,class:"setting"},[V("div",rt,[a(ol)]),V("div",null,[a(nl,{modelValue:l.checked,"onUpdate:modelValue":oe=>l.checked=oe,onChange:oe=>Oe(oe,l,B)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),V("div",mt,c(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:u(()=>[V("div",it,[a(ul,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ee,{ref_key:"tableRef",ref:me,"row-key":"id",loading:k(we),pagination:R,columns:D.value,data:y.value,bordered:!1,size:ee.value,"row-selection":Be,onPageChange:Se,onPageSizeChange:ze,onSelectionChange:Xe},{type:u(({record:l})=>[i(c(e.$t(`model.dict.type.${l.type}`)),1)]),prompt_ratio:u(({record:l})=>[l.type===5?(o(),p("span",ct,c(l.audio_quota.billing_method===1?`$${k(z)(l.audio_quota.prompt_ratio)}/k`:"-"),1)):l.type===6?(o(),p("span",pt,"-")):l.type!==100?(o(),p("span",ft,c(l.text_quota.billing_method===1?`$${k(z)(l.text_quota.prompt_ratio)}/k`:"-"),1)):l.type===100?(o(),p("span",vt,c(l.multimodal_quota.text_quota.billing_method===1?`$${k(z)(l.multimodal_quota.text_quota.prompt_ratio)}/k`:"-"),1)):(o(),p("span",_t," - "))]),completion_ratio:u(({record:l})=>[l.type===2?(o(),p("span",gt,[a(r,{type:"text",size:"small",onClick:B=>Ke(l.image_quotas)},{default:u(()=>[i(" \u67E5\u770B ")]),_:2},1032,["onClick"])])):l.type===5?(o(),p("span",bt,"-")):l.type===6?(o(),p("span",yt,c(l.audio_quota.billing_method===1?`$${k(z)(l.audio_quota.completion_ratio)}/min`:`$${k(se)(l.audio_quota.fixed_quota)}/\u6B21`),1)):l.type!==100?(o(),p("span",kt,c(l.text_quota.billing_method===1?`$${k(z)(l.text_quota.completion_ratio)}/k`:`$${k(se)(l.text_quota.fixed_quota)}/\u6B21`),1)):(o(),p("span",Ct,c(`$${k(z)(l.multimodal_quota.text_quota.completion_ratio)}/k`),1))]),status:u(({record:l})=>[a($e,{modelValue:l.status,"onUpdate:modelValue":B=>l.status=B,"checked-value":1,"unchecked-value":2,onChange:B=>Me({id:`${l.id}`,status:Number(`${l.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:u(({record:l})=>[a(r,{type:"text",size:"small",onClick:B=>We(l.id)},{default:u(()=>[i(c(e.$t("model.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(r,{type:"text",size:"small",onClick:B=>e.$router.push({name:"ModelUpdate",query:{id:`${l.id}`}})},{default:u(()=>[i(c(e.$t("model.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(il,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:B=>Ve({id:`${l.id}`})},{default:u(()=>[a(r,{type:"text",size:"small"},{default:u(()=>[i(c(e.$t("model.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(dl,{title:e.$t("menu.model.detail"),"unmount-on-close":"","render-to-body":"",width:700,footer:!1,visible:te.value,onCancel:Ye},{default:u(()=>[a(ot,{id:ye.value},null,8,["id"])]),_:1},8,["title","visible"]),a(N,{visible:L.value,"onUpdate:visible":t[23]||(t[23]=l=>L.value=l),title:e.$t("model.form.title.init_model"),onCancel:Ne,onBeforeOk:Te},{default:u(()=>[a(T,{ref_key:"initForm",ref:fe,model:$.value},{default:u(()=>[a(h,{field:"url",label:e.$t("model.label.url"),rules:[{required:!0,message:e.$t("model.error.url.required")}]},{default:u(()=>[a(K,{modelValue:$.value.url,"onUpdate:modelValue":t[20]||(t[20]=l=>$.value.url=l),placeholder:e.$t("model.placeholder.url"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(h,{field:"key",label:e.$t("model.label.key"),rules:[{required:!0,message:e.$t("model.error.key.required")}]},{default:u(()=>[a(K,{modelValue:$.value.key,"onUpdate:modelValue":t[21]||(t[21]=l=>$.value.key=l),placeholder:e.$t("model.placeholder.key"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"]),a(h,{field:"is_config_model_agent",label:e.$t("model.label.is_config_model_agent")},{default:u(()=>[a($e,{modelValue:$.value.is_config_model_agent,"onUpdate:modelValue":t[22]||(t[22]=l=>$.value.is_config_model_agent=l)},null,8,["modelValue"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(N,{visible:O.value,"onUpdate:visible":t[25]||(t[25]=l=>O.value=l),title:e.$t("model.form.title.model_agent"),onCancel:Re,onBeforeOk:Pe},{default:u(()=>[a(T,{ref_key:"agentForm",ref:ve,model:j.value},{default:u(()=>[a(h,{field:"model_agents",label:e.$t("model.label.model_agents"),rules:[{required:!0,message:e.$t("model.error.model_agents.required")}]},{default:u(()=>[a(q,{modelValue:j.value.model_agents,"onUpdate:modelValue":t[24]||(t[24]=l=>j.value.model_agents=l),placeholder:e.$t("model.placeholder.model_agents"),"max-tag-count":15,multiple:"","allow-search":"","allow-clear":""},{default:u(()=>[(o(!0),p(I,null,S(de.value,l=>(o(),f(X,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(N,{visible:x.value,"onUpdate:visible":t[27]||(t[27]=l=>x.value=l),title:e.$t("model.form.title.forward"),onCancel:je,onBeforeOk:Qe},{default:u(()=>[a(T,{ref_key:"forwardForm",ref:_e,model:G.value},{default:u(()=>[a(h,{field:"target_model",label:e.$t("model.label.target_model"),rules:[{required:!0,message:e.$t("model.error.target_model.required")}]},{default:u(()=>[a(q,{modelValue:G.value.target_model,"onUpdate:modelValue":t[26]||(t[26]=l=>G.value.target_model=l),placeholder:e.$t("model.placeholder.target_model"),"allow-search":""},{default:u(()=>[(o(!0),p(I,null,S(Z.value,l=>(o(),f(X,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(N,{visible:H.value,"onUpdate:visible":t[29]||(t[29]=l=>H.value=l),title:e.$t("model.form.title.fallback"),onCancel:Je,onBeforeOk:Ge},{default:u(()=>[a(T,{ref_key:"fallbackForm",ref:ge,model:J.value},{default:u(()=>[a(h,{field:"fallback_model",label:e.$t("model.label.fallback_model"),rules:[{required:!0,message:e.$t("model.error.fallback_model.required")}]},{default:u(()=>[a(q,{modelValue:J.value.fallback_model,"onUpdate:modelValue":t[28]||(t[28]=l=>J.value.fallback_model=l),placeholder:e.$t("model.placeholder.fallback_model"),"allow-search":""},{default:u(()=>[(o(!0),p(I,null,S(Z.value,l=>(o(),f(X,{key:l.id,value:l.id,label:l.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title"]),a(N,{visible:le.value,"onUpdate:visible":t[30]||(t[30]=l=>le.value=l),title:e.$t("model.columns.completion_price"),width:"500px","hide-cancel":"",simple:""},{default:u(()=>[a(Ee,{data:be.value,pagination:!1,bordered:!1},{columns:u(()=>[a(W,{title:"\u5BBD\u5EA6","data-index":"width",align:"center"}),a(W,{title:"\u9AD8\u5EA6","data-index":"height",align:"center"}),a(W,{title:"\u4EF7\u683C","data-index":"fixed_quota",align:"center"},{cell:u(({record:l})=>[i(c(`$${k(se)(l.fixed_quota)}/\u5F20`),1)]),_:1}),a(W,{title:"\u9ED8\u8BA4","data-index":"is_default",align:"center"},{cell:u(({record:l})=>[i(c(l.is_default?"\u662F":"-"),1)]),_:1})]),_:1},8,["data"])]),_:1},8,["visible","title"])]),_:1})])}}});const oa=gl($t,[["__scopeId","data-v-2be9b079"]]);export{oa as default};