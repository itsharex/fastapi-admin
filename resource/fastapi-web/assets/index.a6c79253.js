import{u as Oe,F as He,p as Ke,y as Qe,i as We,z as Xe,_ as Ze}from"./index.0119f130.js";/* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{c as K,S as et}from"./sortable.esm.734c0c44.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as tt,r as pe,e as g,c as Q,w as fe,bP as at,B as t,C as d,aH as a,aG as e,aL as i,aM as s,bu as k,aD as o,aJ as P,aI as L,u as _,F as B,D as lt,aE as ve,bQ as ye,n as ot,g as nt,aK as st,aF as ut,bA as it,bB as dt,b2 as _t,bC as rt,b1 as ct,aS as mt,bD as pt,bE as ft,b5 as vt,bF as yt,ab as kt,aU as ht,bi as bt,bj as gt,bl as wt,bm as $t,b4 as Ct,bG as Ft,c1 as Dt,b$ as Bt,bI as It,bK as Vt,bL as Et,ad as At,c0 as St,bM as xt,ba as zt,b6 as qt,aV as Tt,bJ as Pt}from"./arco.f6ea4e94.js";import{u as Lt}from"./loading.b2615842.js";import{q as Nt}from"./common.4fed7ae4.js";import{V as Mt,d as Ut,e as Yt,i as Rt}from"./styles.6063ade3.js";import{g as jt}from"./app.a06cf325.js";import{q as Gt}from"./model.92106001.js";import{u as Jt}from"./vue.945ef37b.js";import"./chart.6e5bd655.js";import"./base.87fcf6e2.js";const Ot={class:"container"},Ht={class:"action-icon"},Kt={class:"action-icon"},Qt={id:"tableSetting"},Wt={style:{"margin-right":"4px",cursor:"move"}},Xt={class:"title"},Zt={style:{margin:"10px 0 0 10px"}},ea={key:1},ta={key:1},aa={key:1},la={key:1},oa={key:1},na={key:1},sa={key:1},ua={key:1},ia={key:1},da={key:1},_a={key:1},ra={key:1},ca={key:1},ma={key:1},pa={key:1},fa={key:1},va={key:1},ya={key:1},ka={key:1},ha={key:1},ba={key:1},ga={key:1},wa={key:1},$a={key:1},Ca={key:1},Fa={key:1},Da={key:1},Ba={key:1},Ia={key:1},Va={key:1},Ea={key:1},Aa={key:1},Sa={key:1},xa={key:1},za={key:1},qa={key:1},Ta={key:1},Pa={key:1},La={key:1},Na={key:1},Ma={key:1},Ua={key:1},Ya={key:1},Ra={key:1},ja={key:1},Ga={name:"ChatList"},Ja=tt({...Ga,setup(Oa){const ke=pe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),W=g([]);(async()=>{try{const{data:u}=await jt();W.value=u.items}catch{}})();const X=g([]);(async()=>{try{const{data:u}=await Gt();X.value=u.items}catch{}})();const Z=()=>({app_id:g(),trace_id:g(),user_id:g(),key:"",models:[],total_time:g(),status:g(),req_time:[ye().format("YYYY-MM-DD 00:00:00"),ye().format("YYYY-MM-DD 23:59:59")]}),{loading:c,setLoading:ee}=Lt(!0),{t:b}=Oe(),te=g([]),h=g(Z()),V=g([]),x=g([]),N=g("medium"),E={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},z=pe({...E}),he=Q(()=>[{name:b("searchTable.size.mini"),value:"mini"},{name:b("searchTable.size.small"),value:"small"},{name:b("searchTable.size.medium"),value:"medium"},{name:b("searchTable.size.large"),value:"large"}]),A=localStorage.getItem("userRole"),ae=Q(()=>[{title:b(A==="admin"?"chat.columns.user_id":"chat.columns.app_id"),dataIndex:A==="admin"?"user_id":"app_id",slotName:A==="admin"?"user_id":"app_id",align:"center",width:75},{title:b("chat.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:b("chat.columns.prompt"),dataIndex:"prompt",slotName:"prompt",align:"center",ellipsis:!0,tooltip:!0},{title:b("chat.columns.images"),dataIndex:"images",slotName:"images",align:"center"},{title:b("chat.columns.total_price"),dataIndex:"total_tokens",slotName:"total_tokens",align:"center"},{title:b("chat.columns.total_time"),dataIndex:"total_time",slotName:"total_time",align:"center"},{title:b("chat.columns.internal_time"),dataIndex:"internal_time",slotName:"internal_time",align:"center"},{title:b("chat.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:b("chat.columns.req_time"),dataIndex:"req_time",slotName:"req_time",align:"center",width:132},{title:b("chat.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:75}]);A==="user"&&ae.value.splice(6,1);const le=Q(()=>[{label:b("chat.dict.status.1"),value:1},{label:b("chat.dict.status.2"),value:2},{label:b("chat.dict.status.-1"),value:-1}]);A==="admin"&&le.value.push({label:b("chat.dict.status.3"),value:3},{label:b("chat.dict.status.-100"),value:-100});const q=async(u={...E,...h.value})=>{ee(!0);try{const{data:r}=await Ut(u);te.value=r.items,z.current=u.current,z.pageSize=u.pageSize,z.total=r.paging.total}catch{}finally{ee(!1)}},oe=()=>{q({...E,...h.value})},be=u=>{q({...E,...h.value,current:u})},ge=u=>{E.pageSize=u,q({...E,...h.value})};q();const we=()=>{h.value=Z()},$e=(u,r)=>{N.value=u},Ce=(u,r,w)=>{u?V.value.splice(w,0,r):V.value=x.value.filter(F=>F.dataIndex!==r.dataIndex)},ne=(u,r,w,F=!1)=>{const D=F?K(u):u;return r>-1&&w>-1&&D.splice(r,1,D.splice(w,1,D[r]).pop()),D},Fe=u=>{u&&ot(()=>{const r=document.getElementById("tableSetting");new et(r,{onEnd(w){const{oldIndex:F,newIndex:D}=w;ne(V.value,F,D),ne(x.value,F,D)}})})};fe(()=>ae.value,u=>{V.value=K(u),V.value.forEach((r,w)=>{r.checked=!0}),x.value=K(V.value)},{deep:!0,immediate:!0});const M=g(!1),{copy:se,copied:ue}=Jt(),{proxy:De}=nt(),l=g({}),Be=async u=>{M.value=!0,c.value=!0;try{const{data:r}=await Yt({id:u});l.value=r}catch{}finally{c.value=!1}},Ie=()=>{M.value=!1},ie=u=>{se(u)};fe(ue,()=>{ue.value&&De.$message.success("\u590D\u5236\u6210\u529F")});const U=async(u,r)=>{const{data:w}=await Rt({id:u,field:r});se(w.value)},de=g(),Y=g(!1),Ve=u=>{de.value=u,Y.value=!0};return(u,r)=>{const w=He,F=st,D=ut,_e=it,R=dt,I=_t,$=rt,j=ct,Ee=mt,Ae=pt,G=ft,Se=vt,re=yt,xe=kt,T=ht,ce=Ke,me=bt,J=gt,ze=Qe,qe=wt,Te=$t,Pe=We,Le=Xe,Ne=Ct,Me=Ft,Ue=Dt,v=Bt,Ye=It,m=Vt,p=Et,S=At,f=St,O=xt,Re=zt,je=qt,Ge=Tt,Je=Pt,y=at("permission");return t(),d("div",Ot,[a(D,{class:"container-breadcrumb"},{default:e(()=>[a(F,null,{default:e(()=>[a(w)]),_:1}),a(F,null,{default:e(()=>[i(s(u.$t("menu.image")),1)]),_:1}),a(F,null,{default:e(()=>[i(s(u.$t("menu.image.list")),1)]),_:1})]),_:1}),a(Je,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:e(()=>[a(G,null,{default:e(()=>[a($,{flex:1},{default:e(()=>[a(Se,{model:h.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:e(()=>[a(G,{gutter:16},{default:e(()=>[k((t(),o($,{span:8},{default:e(()=>[a(I,{field:"app_id",label:u.$t("chat.form.app_id")},{default:e(()=>[a(R,{modelValue:h.value.app_id,"onUpdate:modelValue":r[0]||(r[0]=n=>h.value.app_id=n),placeholder:u.$t("chat.form.selectDefault"),"allow-search":"","allow-clear":""},{default:e(()=>[(t(!0),d(P,null,L(W.value,n=>(t(),o(_e,{key:n.app_id,value:n.app_id,label:n.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[y,["user"]]]),k((t(),o($,{span:8},{default:e(()=>[a(I,{field:"trace_id",label:u.$t("chat.form.trace_id")},{default:e(()=>[a(j,{modelValue:h.value.trace_id,"onUpdate:modelValue":r[1]||(r[1]=n=>h.value.trace_id=n),placeholder:u.$t("chat.form.trace_id.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[y,["admin"]]]),k((t(),o($,{span:8},{default:e(()=>[a(I,{field:"user_id",label:u.$t("chat.form.user_id")},{default:e(()=>[a(j,{modelValue:h.value.user_id,"onUpdate:modelValue":r[2]||(r[2]=n=>h.value.user_id=n),placeholder:u.$t("chat.form.user_id.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[y,["admin"]]]),k((t(),o($,{span:8},{default:e(()=>[a(I,{field:"key",label:u.$t("chat.form.key")},{default:e(()=>[a(j,{modelValue:h.value.key,"onUpdate:modelValue":r[3]||(r[3]=n=>h.value.key=n),placeholder:u.$t("chat.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[y,["user"]]]),a($,{span:8},{default:e(()=>[a(I,{field:"models",label:u.$t("chat.form.models")},{default:e(()=>[a(R,{modelValue:h.value.models,"onUpdate:modelValue":r[4]||(r[4]=n=>h.value.models=n),placeholder:u.$t("chat.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:e(()=>[(t(!0),d(P,null,L(X.value,n=>(t(),o(_e,{key:n.id,value:n.id,label:n.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a($,{span:8},{default:e(()=>[a(I,{field:"total_time",label:u.$t("chat.form.total_time")},{default:e(()=>[a(Ee,{modelValue:h.value.total_time,"onUpdate:modelValue":r[5]||(r[5]=n=>h.value.total_time=n),precision:0,min:1,placeholder:u.$t("chat.form.total_time.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a($,{span:8},{default:e(()=>[a(I,{field:"status",label:u.$t("chat.form.status")},{default:e(()=>[a(R,{modelValue:h.value.status,"onUpdate:modelValue":r[6]||(r[6]=n=>h.value.status=n),options:_(le),placeholder:u.$t("chat.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a($,{span:8},{default:e(()=>[a(I,{field:"req_time",label:u.$t("chat.form.req_time")},{default:e(()=>[a(Ae,{modelValue:h.value.req_time,"onUpdate:modelValue":r[7]||(r[7]=n=>h.value.req_time=n),placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],"time-picker-props":{defaultValue:["00:00:00","23:59:59"]},"show-time":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(re,{style:{height:"84px"},direction:"vertical"}),a($,{flex:"86px",style:{"text-align":"right"}},{default:e(()=>[a(me,{direction:"vertical",size:18},{default:e(()=>[a(T,{type:"primary",onClick:oe},{icon:e(()=>[a(xe)]),default:e(()=>[i(" "+s(u.$t("chat.form.search")),1)]),_:1}),a(T,{onClick:we},{icon:e(()=>[a(ce)]),default:e(()=>[i(" "+s(u.$t("chat.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(re,{style:{"margin-top":"0"}}),a(G,{style:{"margin-bottom":"16px"}},{default:e(()=>[a($,{span:24,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:e(()=>[a(J,{content:u.$t("searchTable.actions.refresh")},{default:e(()=>[B("div",{class:"action-icon",onClick:oe},[a(ce,{size:"18"})])]),_:1},8,["content"]),a(Te,{onSelect:$e},{content:e(()=>[(t(!0),d(P,null,L(_(he),n=>(t(),o(qe,{key:n.value,value:n.value,class:lt({active:n.value===N.value})},{default:e(()=>[B("span",null,s(n.name),1)]),_:2},1032,["value","class"]))),128))]),default:e(()=>[a(J,{content:u.$t("searchTable.actions.density")},{default:e(()=>[B("div",Ht,[a(ze,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(J,{content:u.$t("searchTable.actions.columnSetting")},{default:e(()=>[a(Me,{trigger:"click",position:"bl",onPopupVisibleChange:Fe},{content:e(()=>[B("div",Qt,[(t(!0),d(P,null,L(x.value,(n,C)=>(t(),d("div",{key:n.dataIndex,class:"setting"},[B("div",Wt,[a(Le)]),B("div",null,[a(Ne,{modelValue:n.checked,"onUpdate:modelValue":H=>n.checked=H,onChange:H=>Ce(H,n,C)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),B("div",Xt,s(n.title==="#"?"\u5E8F\u5217\u53F7":n.title),1)]))),128))])]),default:e(()=>[B("div",Kt,[a(Pe,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ye,{"row-key":"id",loading:_(c),pagination:z,columns:V.value,data:te.value,bordered:!1,size:N.value,"row-selection":ke,onPageChange:be,onPageSizeChange:ge},{user_id:e(({record:n})=>[i(s(n.is_smart_match?"-":n.user_id),1)]),images:e(({record:n})=>[a(T,{type:"text",size:"small",onClick:C=>Ve(n.id)},{default:e(()=>[i("\u67E5\u770B")]),_:2},1032,["onClick"]),de.value===n.id?(t(),o(Ue,{key:0,visible:Y.value,"onUpdate:visible":r[8]||(r[8]=C=>Y.value=C),"src-list":n.images},null,8,["visible","src-list"])):ve("",!0)]),total_tokens:e(({record:n})=>[i(s(n.total_tokens?`$${_(Nt)(n.total_tokens)}`:n.status===1&&n.billing_method===2?0:"-"),1)]),total_time:e(({record:n})=>[n.total_time>18e4?k((t(),o(v,{key:0,color:"red"},{default:e(()=>[i(s(n.total_time),1)]),_:2},1024)),[[y,["user"]]]):n.total_time>12e4?k((t(),o(v,{key:1,color:"orange"},{default:e(()=>[i(s(n.total_time),1)]),_:2},1024)),[[y,["user"]]]):n.total_time>9e4?k((t(),o(v,{key:2,color:"gold"},{default:e(()=>[i(s(n.total_time),1)]),_:2},1024)),[[y,["user"]]]):k((t(),o(v,{key:3,color:"green"},{default:e(()=>[i(s(n.total_time||"-"),1)]),_:2},1024)),[[y,["user"]]]),n.total_time>12e4?k((t(),o(v,{key:4,color:"red"},{default:e(()=>[i(s(n.total_time),1)]),_:2},1024)),[[y,["admin"]]]):n.total_time>9e4?k((t(),o(v,{key:5,color:"orange"},{default:e(()=>[i(s(n.total_time),1)]),_:2},1024)),[[y,["admin"]]]):n.total_time>6e4?k((t(),o(v,{key:6,color:"gold"},{default:e(()=>[i(s(n.total_time),1)]),_:2},1024)),[[y,["admin"]]]):k((t(),o(v,{key:7,color:"green"},{default:e(()=>[i(s(n.total_time||"-"),1)]),_:2},1024)),[[y,["admin"]]])]),internal_time:e(({record:n})=>[n.internal_time>1e3?k((t(),o(v,{key:0,color:"red"},{default:e(()=>[i(s(n.internal_time),1)]),_:2},1024)),[[y,["user"]]]):n.internal_time>500?k((t(),o(v,{key:1,color:"orange"},{default:e(()=>[i(s(n.internal_time),1)]),_:2},1024)),[[y,["user"]]]):n.internal_time>300?k((t(),o(v,{key:2,color:"gold"},{default:e(()=>[i(s(n.internal_time),1)]),_:2},1024)),[[y,["user"]]]):k((t(),o(v,{key:3,color:"green"},{default:e(()=>[i(s(n.internal_time||"-"),1)]),_:2},1024)),[[y,["user"]]]),n.internal_time>500?k((t(),o(v,{key:4,color:"red"},{default:e(()=>[i(s(n.internal_time),1)]),_:2},1024)),[[y,["admin"]]]):n.internal_time>300?k((t(),o(v,{key:5,color:"orange"},{default:e(()=>[i(s(n.internal_time),1)]),_:2},1024)),[[y,["admin"]]]):n.internal_time>100?k((t(),o(v,{key:6,color:"gold"},{default:e(()=>[i(s(n.internal_time),1)]),_:2},1024)),[[y,["admin"]]]):k((t(),o(v,{key:7,color:"green"},{default:e(()=>[i(s(n.internal_time||"-"),1)]),_:2},1024)),[[y,["admin"]]])]),status:e(({record:n})=>[n.status===-1?(t(),o(v,{key:0,color:"red"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${n.status}`)),1)]),_:2},1024)):n.status===2?(t(),o(v,{key:1,color:"gold"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${n.status}`)),1)]),_:2},1024)):n.status===3?(t(),o(v,{key:2,color:"orange"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${n.status}`)),1)]),_:2},1024)):(t(),o(v,{key:3,color:"green"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${n.status}`)),1)]),_:2},1024))]),operations:e(({record:n})=>[a(T,{type:"text",size:"small",onClick:C=>Be(n.id)},{default:e(()=>[i(s(u.$t("chat.columns.operations.view")),1)]),_:2},1032,["onClick"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(Ge,{title:"\u65E5\u5FD7\u8BE6\u60C5",visible:M.value,width:700,footer:!1,"unmount-on-close":"","render-to-body":"",onCancel:Ie},{default:e(()=>[B("div",Zt,[k((t(),o(O,{column:2,bordered:""},{default:e(()=>[a(f,{label:"Trace ID",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ea,[i(s(l.value.trace_id)+" ",1),a(S,{class:"copy-btn",onClick:r[9]||(r[9]=n=>ie(l.value.trace_id))})]))]),_:1}),a(f,{label:"\u8C03\u7528\u5BC6\u94A5",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ta,[i(s(l.value.creator)+" ",1),a(S,{class:"copy-btn",onClick:r[10]||(r[10]=n=>U(l.value.id,"creator"))})]))]),_:1}),a(f,{label:"\u7528\u6237ID"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",aa,s(l.value.user_id||"-"),1))]),_:1}),a(f,{label:"\u5E94\u7528ID"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",la,s(l.value.app_id||"-"),1))]),_:1}),a(f,{label:"\u516C\u53F8"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",oa,s(l.value.corp_name),1))]),_:1}),a(f,{label:"\u6A21\u578B"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",na,s(l.value.model||"-"),1))]),_:1}),a(f,{label:"\u6A21\u578B\u7C7B\u578B"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",sa,s(u.$t(`chat.dict.type.${l.value.type}`)),1))]),_:1}),a(f,{label:"\u63D0\u793A\u8BCD",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ua,s(l.value.prompt||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ia,s(l.value.image_data||"-"),1))]),_:1}),a(f,{label:"\u82B1\u8D39\u4EE4\u724C\u6570"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",da,s(l.value.total_tokens?l.value.total_tokens:l.value.status===1&&l.value.text_quota.billing_method===2?0:"-"),1))]),_:1}),a(f,{label:"\u603B\u8017\u65F6"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",_a,[l.value.total_time>18e4?(t(),o(v,{key:0,color:"red"},{default:e(()=>[i(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>12e4?(t(),o(v,{key:1,color:"orange"},{default:e(()=>[i(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>9e4?(t(),o(v,{key:2,color:"gold"},{default:e(()=>[i(s(l.value.total_time)+" ms ",1)]),_:1})):(t(),o(v,{key:3,color:"green"},{default:e(()=>[i(s(l.value.total_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u7ED3\u679C"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ra,[l.value.status===1?(t(),o(v,{key:0,color:"green"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===2?(t(),o(v,{key:1,color:"gold"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===3?(t(),o(v,{key:2,color:"orange"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):(t(),o(v,{key:3,color:"red"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1}))]))]),_:1}),a(f,{label:"\u5BA2\u6237\u7AEFIP"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ca,s(l.value.client_ip||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u65F6\u95F4"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ma,s(l.value.req_time||"-"),1))]),_:1}),a(f,{label:"\u9519\u8BEF\u4FE1\u606F",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",pa,s(l.value.err_msg||"-"),1))]),_:1})]),_:1})),[[y,["user"]]]),k((t(),o(O,{column:2,bordered:""},{default:e(()=>[a(f,{label:"Trace ID",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",fa,[i(s(l.value.trace_id)+" ",1),a(S,{class:"copy-btn",onClick:r[11]||(r[11]=n=>ie(l.value.trace_id))})]))]),_:1}),a(f,{label:"\u8C03\u7528\u5BC6\u94A5",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",va,[i(s(l.value.is_smart_match?"-":l.value.creator)+" ",1),l.value.is_smart_match?ve("",!0):(t(),o(S,{key:0,class:"copy-btn",onClick:r[12]||(r[12]=n=>U(l.value.id,"creator"))}))]))]),_:1}),a(f,{label:"\u7528\u6237ID"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ya,s(l.value.is_smart_match?"-":l.value.user_id||"-"),1))]),_:1}),a(f,{label:"\u5E94\u7528ID"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ka,s(l.value.is_smart_match?"-":l.value.app_id||"-"),1))]),_:1}),a(f,{label:"\u516C\u53F8"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ha,s(l.value.corp_name),1))]),_:1}),a(f,{label:"\u6A21\u578B\u7C7B\u578B"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",ba,s(u.$t(`chat.dict.type.${l.value.type}`)),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u6A21\u578B\u540D\u79F0"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ga,s(l.value.name||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u6A21\u578B"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",wa,s(l.value.model||"-"),1))]),_:1}),a(f,{label:"\u771F\u5B9E\u6A21\u578B\u540D\u79F0"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",$a,s(l.value.real_model_name),1))]),_:1}),a(f,{label:"\u771F\u5B9E\u6A21\u578B"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Ca,s(l.value.real_model),1))]),_:1}),a(f,{label:"\u542F\u7528\u540E\u5907"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Fa,s(u.$t(`chat.dict.is_enable_fallback.${l.value.is_enable_fallback||!1}`)),1))]),_:1}),a(f,{label:"\u540E\u5907\u6A21\u578B"},{default:e(()=>{var n,C;return[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Da,s(((C=(n=l.value)==null?void 0:n.fallback_config)==null?void 0:C.fallback_model)||"-"),1))]}),_:1}),a(f,{label:"\u542F\u7528\u8F6C\u53D1"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Ba,s(u.$t(`chat.dict.is_enable_forward.${l.value.is_enable_forward||!1}`)),1))]),_:1}),a(f,{label:"\u8F6C\u53D1\u89C4\u5219"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Ia,s(l.value.is_enable_forward?u.$t(`chat.dict.forward_rule.${l.value.forward_config.forward_rule||"1"}`):"-"),1))]),_:1}),a(f,{label:"\u542F\u7528\u4EE3\u7406"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Va,s(u.$t(`chat.dict.is_enable_model_agent.${l.value.is_enable_model_agent||!1}`)),1))]),_:1}),a(f,{label:"\u4EE3\u7406\u540D\u79F0"},{default:e(()=>{var n,C;return[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Ea,s(((C=(n=l.value)==null?void 0:n.model_agent)==null?void 0:C.name)||"-"),1))]}),_:1}),a(f,{label:"\u5BC6\u94A5",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Aa,[i(s(l.value.key?l.value.key.length>0?l.value.key.substr(0,l.value.key.length/2>10?10:l.value.key.length/2)+"************************************"+l.value.key.substr(-(l.value.key.length/2>5?5:l.value.key.length/2)):l.value.key:"-")+" ",1),a(S,{class:"copy-btn",onClick:r[13]||(r[13]=n=>U(l.value.id,"key"))})]))]),_:1}),a(f,{label:"\u63D0\u793A\u8BCD",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Sa,s(l.value.prompt||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",xa,s(l.value.image_data||"-"),1))]),_:1}),a(f,{label:"\u82B1\u8D39\u4EE4\u724C\u6570"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",za,s(l.value.total_tokens?l.value.total_tokens:l.value.status===1&&l.value.text_quota.billing_method===2?0:"-"),1))]),_:1}),a(f,{label:"\u603B\u8017\u65F6"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",qa,[l.value.total_time>12e4?(t(),o(v,{key:0,color:"red"},{default:e(()=>[i(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>9e4?(t(),o(v,{key:1,color:"orange"},{default:e(()=>[i(s(l.value.total_time)+" ms ",1)]),_:1})):l.value.total_time>6e4?(t(),o(v,{key:2,color:"gold"},{default:e(()=>[i(s(l.value.total_time)+" ms ",1)]),_:1})):(t(),o(v,{key:3,color:"green"},{default:e(()=>[i(s(l.value.total_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u5185\u8017"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Ta,[l.value.internal_time>500?(t(),o(v,{key:0,color:"red"},{default:e(()=>[i(s(l.value.internal_time)+" ms ",1)]),_:1})):l.value.internal_time>300?(t(),o(v,{key:1,color:"orange"},{default:e(()=>[i(s(l.value.internal_time)+" ms ",1)]),_:1})):l.value.internal_time>100?(t(),o(v,{key:2,color:"gold"},{default:e(()=>[i(s(l.value.internal_time)+" ms ",1)]),_:1})):(t(),o(v,{key:3,color:"green"},{default:e(()=>[i(s(l.value.internal_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u7ED3\u679C"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Pa,[l.value.status===1?(t(),o(v,{key:0,color:"green"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===2?(t(),o(v,{key:1,color:"gold"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):l.value.status===3?(t(),o(v,{key:2,color:"orange"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1})):(t(),o(v,{key:3,color:"red"},{default:e(()=>[i(s(u.$t(`chat.dict.status.${l.value.status}`)),1)]),_:1}))]))]),_:1}),a(f,{label:"\u672C\u5730IP"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",La,s(l.value.local_ip||"-"),1))]),_:1}),a(f,{label:"\u5BA2\u6237\u7AEFIP"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Na,s(l.value.client_ip||"-"),1))]),_:1}),a(f,{label:"\u8FDC\u7A0BIP"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Ma,s(l.value.remote_ip||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u65F6\u95F4"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Ua,s(l.value.req_time||"-"),1))]),_:1}),a(f,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Ya,s(l.value.created_at||"-"),1))]),_:1}),a(f,{label:"\u9519\u8BEF\u4FE1\u606F",span:2},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:1})]),_:1})):(t(),d("span",Ra,s(l.value.err_msg||"-"),1))]),_:1})]),_:1})),[[y,["admin"]]]),k((t(),o(O,{layout:"inline-vertical",column:2,style:{"margin-top":"10px",position:"relative"}},{default:e(()=>[a(f,{span:2},{default:e(()=>[a(je,{type:"card"},{default:e(()=>[a(Re,{key:"1",title:"\u6A21\u578B\u4EE3\u7406"},{default:e(()=>[_(c)?(t(),o(p,{key:0,animation:!0},{default:e(()=>[a(m,{rows:3})]),_:1})):(t(),o(me,{key:1},{default:e(()=>[l.value.model_agent?(t(),o(_(Mt),{key:0,data:l.value.model_agent,"show-length":!0},null,8,["data"])):(t(),d("span",ja,"-"))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})),[[y,["admin"]]])])]),_:1},8,["visible"])]),_:1})])}}});const Dl=Ze(Ja,[["__scopeId","data-v-f1462916"]]);export{Dl as default};