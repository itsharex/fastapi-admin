import{u as Oe,E as je,p as Je,y as Ge,i as He,z as Ke,_ as Qe}from"./index.e734d5f0.js";/* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css              *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{c as Q,S as We}from"./sortable.esm.f8f875e8.js";/* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css              *//* empty css              */import{d as Xe,r as pe,e as g,c as W,w as fe,bT as Ze,B as t,C as d,aH as a,aG as e,aL as s,aM as n,bu as v,aD as l,aJ as P,aI as L,u as r,F,D as et,aE as tt,bP as ye,n as at,g as lt,aK as ot,aF as ut,bA as nt,bB as st,b2 as it,bC as _t,b1 as dt,aS as rt,bD as mt,bE as ct,b5 as pt,bF as ft,ab as yt,aU as kt,bi as vt,bj as ht,bl as bt,bm as gt,b4 as wt,bG as Dt,b$ as Et,bI as $t,bM as Ft,bN as Ct,ad as Bt,c0 as It,bO as xt,ba as Vt,b6 as At,aV as qt,bJ as St}from"./arco.17b1a46f.js";import{u as zt}from"./loading.44762de3.js";import{q as Nt}from"./common.4956e59d.js";import{V as ke,q as Tt,a as Pt}from"./styles.e4a8e658.js";import{g as Lt}from"./app.8bb6a864.js";import{e as Mt}from"./dashboard.4bafbf3b.js";import{q as Ut}from"./model.a4912b31.js";import{u as Yt}from"./vue.32c094a4.js";import"./chart.d5ce7f1f.js";import"./base.87fcf6e2.js";const Rt={class:"container"},Ot={class:"action-icon"},jt={class:"action-icon"},Jt={id:"tableSetting"},Gt={style:{"margin-right":"4px",cursor:"move"}},Ht={class:"title"},Kt={style:{margin:"10px 0 0 10px"}},Qt={key:1},Wt={key:1},Xt={key:1},Zt={key:1},ea={key:1},ta={key:1},aa={key:1},la={key:1},oa={key:1},ua={key:1},na={key:1},sa={key:1},ia={key:1},_a={key:1},da={key:1},ra={key:1},ma={key:1},ca={key:1},pa={key:1},fa={key:1},ya={key:1},ka={key:1},va={key:1},ha={key:1},ba={key:1},ga={key:1},wa={key:1},Da={key:1},Ea={key:1},$a={key:1},Fa={key:1},Ca={key:1},Ba={key:1},Ia={key:1},xa={key:1},Va={key:1},Aa={key:1},qa={key:1},Sa={key:1},za={key:1},Na={key:1},Ta={key:1},Pa={key:1},La={key:1},Ma={key:1},Ua={key:1},Ya={key:1},Ra={key:1},Oa={key:1},ja={key:1},Ja={key:1},Ga={key:1},Ha={key:1},Ka={key:1},Qa={key:1},Wa={key:1},Xa={key:1},Za={key:1},el={key:1},tl={key:1},al={key:1},ll={name:"ChatList"},ol=Xe({...ll,setup(ul){const ve=pe({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),X=g([]);(async()=>{try{const{data:i}=await Lt();X.value=i.items}catch{}})();const Z=g([]);(async()=>{try{const{data:i}=await Ut();Z.value=i.items}catch{}})();const ee=()=>({app_id:g(),trace_id:g(),user_id:g(),key:"",models:[],total_time:g(),status:g(),req_time:[ye().format("YYYY-MM-DD 00:00:00"),ye().format("YYYY-MM-DD 23:59:59")]}),{loading:m,setLoading:M}=zt(!0),{t:h}=Oe(),te=g([]),b=g(ee()),I=g([]),S=g([]),U=g("medium"),x={current:1,pageSize:10,showTotal:!0,showPageSize:!0,pageSizeOptions:[10,50,100,500,1e3]},z=pe({...x}),he=W(()=>[{name:h("searchTable.size.mini"),value:"mini"},{name:h("searchTable.size.small"),value:"small"},{name:h("searchTable.size.medium"),value:"medium"},{name:h("searchTable.size.large"),value:"large"}]),V=localStorage.getItem("userRole"),ae=W(()=>[{title:h(V==="admin"?"chat.columns.user_id":"chat.columns.app_id"),dataIndex:V==="admin"?"user_id":"app_id",slotName:V==="admin"?"user_id":"app_id",align:"center",width:75},{title:h("chat.columns.model"),dataIndex:"model",slotName:"model",align:"center"},{title:h("chat.columns.prompt_tokens"),dataIndex:"prompt_tokens",slotName:"prompt_tokens",align:"center"},{title:h("chat.columns.completion_tokens"),dataIndex:"completion_tokens",slotName:"completion_tokens",align:"center"},{title:h("chat.columns.total_price"),dataIndex:"total_tokens",slotName:"total_tokens",align:"center"},{title:h("chat.columns.stream"),dataIndex:"stream",slotName:"stream",align:"center"},{title:h("chat.columns.conn_time"),dataIndex:"conn_time",slotName:"conn_time",align:"center"},{title:h("chat.columns.duration"),dataIndex:"duration",slotName:"duration",align:"center"},{title:h("chat.columns.total_time"),dataIndex:"total_time",slotName:"total_time",align:"center"},{title:h("chat.columns.internal_time"),dataIndex:"internal_time",slotName:"internal_time",align:"center"},{title:h("chat.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:h("chat.columns.req_time"),dataIndex:"req_time",slotName:"req_time",align:"center",width:132},{title:h("chat.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:75}]);V==="user"&&ae.value.splice(9,1);const le=W(()=>[{label:h("chat.dict.status.1"),value:1},{label:h("chat.dict.status.2"),value:2},{label:h("chat.dict.status.-1"),value:-1}]);V==="admin"&&le.value.push({label:h("chat.dict.status.3"),value:3},{label:h("chat.dict.status.-100"),value:-100});const oe=g(0),ue=g(0),N=async(i={...x,...b.value})=>{M(!0);try{const{data:y}=await Tt(i);te.value=y.items,z.current=i.current,z.pageSize=i.pageSize,z.total=y.paging.total}catch{}finally{M(!1)}try{const{data:y}=await Mt();oe.value=y.rpm,ue.value=y.tpm}catch{}finally{M(!1)}},ne=()=>{N({...x,...b.value})},be=i=>{N({...x,...b.value,current:i})},ge=i=>{x.pageSize=i,N({...x,...b.value})};N();const we=()=>{b.value=ee()},De=(i,y)=>{U.value=i},Ee=(i,y,E)=>{i?I.value.splice(E,0,y):I.value=S.value.filter(D=>D.dataIndex!==y.dataIndex)},se=(i,y,E,D=!1)=>{const $=D?Q(i):i;return y>-1&&E>-1&&$.splice(y,1,$.splice(E,1,$[y]).pop()),$},$e=i=>{i&&at(()=>{const y=document.getElementById("tableSetting");new We(y,{onEnd(E){const{oldIndex:D,newIndex:$}=E;se(I.value,D,$),se(S.value,D,$)}})})};fe(()=>ae.value,i=>{I.value=Q(i),I.value.forEach((y,E)=>{y.checked=!0}),S.value=Q(I.value)},{deep:!0,immediate:!0});const Y=g(!1),{copy:Fe,copied:ie}=Yt(),{proxy:Ce}=lt(),o=g({}),Be=async i=>{Y.value=!0,m.value=!0;try{const{data:y}=await Pt({id:i});o.value=y}catch{}finally{m.value=!1}},Ie=()=>{Y.value=!1},A=i=>{Fe(i)};return fe(ie,()=>{ie.value&&Ce.$message.success("\u590D\u5236\u6210\u529F")}),(i,y)=>{const E=je,D=ot,$=ut,_e=nt,R=st,C=it,w=_t,O=dt,xe=rt,Ve=mt,j=ct,Ae=pt,de=ft,qe=yt,J=kt,re=Je,G=vt,H=ht,Se=Ge,ze=bt,Ne=gt,Te=He,Pe=Ke,Le=wt,Me=Dt,_=Et,Ue=$t,c=Ft,p=Ct,q=Bt,f=It,T=xt,me=Vt,ce=At,Ye=qt,Re=St,k=Ze("permission");return t(),d("div",Rt,[a($,{class:"container-breadcrumb"},{default:e(()=>[a(D,null,{default:e(()=>[a(E)]),_:1}),a(D,null,{default:e(()=>[s(n(i.$t("menu.chat")),1)]),_:1}),a(D,null,{default:e(()=>[s(n(i.$t("menu.chat.list")),1)]),_:1})]),_:1}),a(Re,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:e(()=>[a(j,null,{default:e(()=>[a(w,{flex:1},{default:e(()=>[a(Ae,{model:b.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:e(()=>[a(j,{gutter:16},{default:e(()=>[v((t(),l(w,{span:8},{default:e(()=>[a(C,{field:"app_id",label:i.$t("chat.form.app_id")},{default:e(()=>[a(R,{modelValue:b.value.app_id,"onUpdate:modelValue":y[0]||(y[0]=u=>b.value.app_id=u),placeholder:i.$t("chat.form.selectDefault"),"allow-search":"","allow-clear":""},{default:e(()=>[(t(!0),d(P,null,L(X.value,u=>(t(),l(_e,{key:u.app_id,value:u.app_id,label:u.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[k,["user"]]]),v((t(),l(w,{span:8},{default:e(()=>[a(C,{field:"trace_id",label:i.$t("chat.form.trace_id")},{default:e(()=>[a(O,{modelValue:b.value.trace_id,"onUpdate:modelValue":y[1]||(y[1]=u=>b.value.trace_id=u),placeholder:i.$t("chat.form.trace_id.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[k,["admin"]]]),v((t(),l(w,{span:8},{default:e(()=>[a(C,{field:"user_id",label:i.$t("chat.form.user_id")},{default:e(()=>[a(O,{modelValue:b.value.user_id,"onUpdate:modelValue":y[2]||(y[2]=u=>b.value.user_id=u),placeholder:i.$t("chat.form.user_id.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[k,["admin"]]]),v((t(),l(w,{span:8},{default:e(()=>[a(C,{field:"key",label:i.$t("chat.form.key")},{default:e(()=>[a(O,{modelValue:b.value.key,"onUpdate:modelValue":y[3]||(y[3]=u=>b.value.key=u),placeholder:i.$t("chat.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1})),[[k,["user"]]]),a(w,{span:8},{default:e(()=>[a(C,{field:"models",label:i.$t("chat.form.models")},{default:e(()=>[a(R,{modelValue:b.value.models,"onUpdate:modelValue":y[4]||(y[4]=u=>b.value.models=u),placeholder:i.$t("chat.form.selectDefault"),"max-tag-count":2,multiple:"","allow-search":"","allow-clear":""},{default:e(()=>[(t(!0),d(P,null,L(Z.value,u=>(t(),l(_e,{key:u.id,value:u.id,label:u.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(w,{span:8},{default:e(()=>[a(C,{field:"total_time",label:i.$t("chat.form.total_time")},{default:e(()=>[a(xe,{modelValue:b.value.total_time,"onUpdate:modelValue":y[5]||(y[5]=u=>b.value.total_time=u),precision:0,min:1,placeholder:i.$t("chat.form.total_time.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(w,{span:8},{default:e(()=>[a(C,{field:"status",label:i.$t("chat.form.status")},{default:e(()=>[a(R,{modelValue:b.value.status,"onUpdate:modelValue":y[6]||(y[6]=u=>b.value.status=u),options:r(le),placeholder:i.$t("chat.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(w,{span:8},{default:e(()=>[a(C,{field:"req_time",label:i.$t("chat.form.req_time")},{default:e(()=>[a(Ve,{modelValue:b.value.req_time,"onUpdate:modelValue":y[7]||(y[7]=u=>b.value.req_time=u),placeholder:["\u5F00\u59CB\u65F6\u95F4","\u7ED3\u675F\u65F6\u95F4"],"time-picker-props":{defaultValue:["00:00:00","23:59:59"]},"show-time":""},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(de,{style:{height:"84px"},direction:"vertical"}),a(w,{flex:"86px",style:{"text-align":"right"}},{default:e(()=>[a(G,{direction:"vertical",size:18},{default:e(()=>[a(J,{type:"primary",onClick:ne},{icon:e(()=>[a(qe)]),default:e(()=>[s(" "+n(i.$t("chat.form.search")),1)]),_:1}),a(J,{onClick:we},{icon:e(()=>[a(re)]),default:e(()=>[s(" "+n(i.$t("chat.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(de,{style:{"margin-top":"0"}}),a(j,{style:{"margin-bottom":"16px"}},{default:e(()=>[a(w,{span:10},{default:e(()=>[s(" \u82B1\u8D39 = ( \u63D0\u95EE \xD7 \u63D0\u95EE\u500D\u7387 + \u56DE\u7B54 \xD7 \u56DE\u7B54\u500D\u7387 ) \xF7 500000 \xA0\xA0\u6216\xA0\xA0 \u56DE\u7B54 \xF7 500000 ")]),_:1}),a(w,{span:6},{default:e(()=>[s(" \u5F53\u524D\u6BCF\u5206\u949F\u8BF7\u6C42\u6570(RPM): \xA0"+n(oe.value.toLocaleString()),1)]),_:1}),a(w,{span:6},{default:e(()=>[s(" \u5F53\u524D\u6BCF\u5206\u949F\u4EE4\u724C\u6570(TPM): \xA0"+n(ue.value.toLocaleString()),1)]),_:1}),a(w,{span:2,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:e(()=>[a(H,{content:i.$t("searchTable.actions.refresh")},{default:e(()=>[F("div",{class:"action-icon",onClick:ne},[a(re,{size:"18"})])]),_:1},8,["content"]),a(Ne,{onSelect:De},{content:e(()=>[(t(!0),d(P,null,L(r(he),u=>(t(),l(ze,{key:u.value,value:u.value,class:et({active:u.value===U.value})},{default:e(()=>[F("span",null,n(u.name),1)]),_:2},1032,["value","class"]))),128))]),default:e(()=>[a(H,{content:i.$t("searchTable.actions.density")},{default:e(()=>[F("div",Ot,[a(Se,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(H,{content:i.$t("searchTable.actions.columnSetting")},{default:e(()=>[a(Me,{trigger:"click",position:"bl",onPopupVisibleChange:$e},{content:e(()=>[F("div",Jt,[(t(!0),d(P,null,L(S.value,(u,B)=>(t(),d("div",{key:u.dataIndex,class:"setting"},[F("div",Gt,[a(Pe)]),F("div",null,[a(Le,{modelValue:u.checked,"onUpdate:modelValue":K=>u.checked=K,onChange:K=>Ee(K,u,B)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),F("div",Ht,n(u.title==="#"?"\u5E8F\u5217\u53F7":u.title),1)]))),128))])]),default:e(()=>[F("div",jt,[a(Te,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ue,{"row-key":"id",loading:r(m),pagination:z,columns:I.value,data:te.value,bordered:!1,size:U.value,"row-selection":ve,onPageChange:be,onPageSizeChange:ge},{user_id:e(({record:u})=>[s(n(u.is_smart_match?"-":u.user_id),1)]),prompt_tokens:e(({record:u})=>[s(n(u.prompt_tokens?u.prompt_tokens:u.status===1&&u.billing_method===2?0:"-"),1)]),completion_tokens:e(({record:u})=>[s(n(u.completion_tokens?u.completion_tokens:u.status===1&&u.billing_method===2?0:"-"),1)]),total_tokens:e(({record:u})=>[s(n(u.total_tokens?`$${r(Nt)(u.total_tokens)}`:u.status===1&&u.billing_method===2?0:"-"),1)]),stream:e(({record:u})=>[s(n(i.$t(`chat.dict.stream.${u.stream||!1}`)),1)]),conn_time:e(({record:u})=>[u.conn_time>3e4?v((t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(u.conn_time),1)]),_:2},1024)),[[k,["user"]]]):u.conn_time>15e3?v((t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(u.conn_time),1)]),_:2},1024)),[[k,["user"]]]):u.conn_time>5e3?v((t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(u.conn_time),1)]),_:2},1024)),[[k,["user"]]]):v((t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(u.conn_time||"-"),1)]),_:2},1024)),[[k,["user"]]]),u.conn_time>1e4?v((t(),l(_,{key:4,color:"red"},{default:e(()=>[s(n(u.conn_time),1)]),_:2},1024)),[[k,["admin"]]]):u.conn_time>5e3?v((t(),l(_,{key:5,color:"orange"},{default:e(()=>[s(n(u.conn_time),1)]),_:2},1024)),[[k,["admin"]]]):u.conn_time>3e3?v((t(),l(_,{key:6,color:"gold"},{default:e(()=>[s(n(u.conn_time),1)]),_:2},1024)),[[k,["admin"]]]):v((t(),l(_,{key:7,color:"green"},{default:e(()=>[s(n(u.conn_time||"-"),1)]),_:2},1024)),[[k,["admin"]]])]),duration:e(({record:u})=>[u.duration>18e4?v((t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(u.duration),1)]),_:2},1024)),[[k,["user"]]]):u.duration>12e4?v((t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(u.duration),1)]),_:2},1024)),[[k,["user"]]]):u.duration>9e4?v((t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(u.duration),1)]),_:2},1024)),[[k,["user"]]]):v((t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(u.duration||"-"),1)]),_:2},1024)),[[k,["user"]]]),u.duration>12e4?v((t(),l(_,{key:4,color:"red"},{default:e(()=>[s(n(u.duration),1)]),_:2},1024)),[[k,["admin"]]]):u.duration>9e4?v((t(),l(_,{key:5,color:"orange"},{default:e(()=>[s(n(u.duration),1)]),_:2},1024)),[[k,["admin"]]]):u.duration>6e4?v((t(),l(_,{key:6,color:"gold"},{default:e(()=>[s(n(u.duration),1)]),_:2},1024)),[[k,["admin"]]]):v((t(),l(_,{key:7,color:"green"},{default:e(()=>[s(n(u.duration||"-"),1)]),_:2},1024)),[[k,["admin"]]])]),total_time:e(({record:u})=>[u.total_time>18e4?v((t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(u.total_time),1)]),_:2},1024)),[[k,["user"]]]):u.total_time>12e4?v((t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(u.total_time),1)]),_:2},1024)),[[k,["user"]]]):u.total_time>9e4?v((t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(u.total_time),1)]),_:2},1024)),[[k,["user"]]]):v((t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(u.total_time||"-"),1)]),_:2},1024)),[[k,["user"]]]),u.total_time>12e4?v((t(),l(_,{key:4,color:"red"},{default:e(()=>[s(n(u.total_time),1)]),_:2},1024)),[[k,["admin"]]]):u.total_time>9e4?v((t(),l(_,{key:5,color:"orange"},{default:e(()=>[s(n(u.total_time),1)]),_:2},1024)),[[k,["admin"]]]):u.total_time>6e4?v((t(),l(_,{key:6,color:"gold"},{default:e(()=>[s(n(u.total_time),1)]),_:2},1024)),[[k,["admin"]]]):v((t(),l(_,{key:7,color:"green"},{default:e(()=>[s(n(u.total_time||"-"),1)]),_:2},1024)),[[k,["admin"]]])]),internal_time:e(({record:u})=>[u.internal_time>1e3?v((t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(u.internal_time),1)]),_:2},1024)),[[k,["user"]]]):u.internal_time>500?v((t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(u.internal_time),1)]),_:2},1024)),[[k,["user"]]]):u.internal_time>300?v((t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(u.internal_time),1)]),_:2},1024)),[[k,["user"]]]):v((t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(u.internal_time||"-"),1)]),_:2},1024)),[[k,["user"]]]),u.internal_time>500?v((t(),l(_,{key:4,color:"red"},{default:e(()=>[s(n(u.internal_time),1)]),_:2},1024)),[[k,["admin"]]]):u.internal_time>300?v((t(),l(_,{key:5,color:"orange"},{default:e(()=>[s(n(u.internal_time),1)]),_:2},1024)),[[k,["admin"]]]):u.internal_time>100?v((t(),l(_,{key:6,color:"gold"},{default:e(()=>[s(n(u.internal_time),1)]),_:2},1024)),[[k,["admin"]]]):v((t(),l(_,{key:7,color:"green"},{default:e(()=>[s(n(u.internal_time||"-"),1)]),_:2},1024)),[[k,["admin"]]])]),status:e(({record:u})=>[u.status===-1?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${u.status}`)),1)]),_:2},1024)):u.status===2?(t(),l(_,{key:1,color:"gold"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${u.status}`)),1)]),_:2},1024)):u.status===3?(t(),l(_,{key:2,color:"orange"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${u.status}`)),1)]),_:2},1024)):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${u.status}`)),1)]),_:2},1024))]),operations:e(({record:u})=>[a(J,{type:"text",size:"small",onClick:B=>Be(u.id)},{default:e(()=>[s(n(i.$t("chat.columns.operations.view")),1)]),_:2},1032,["onClick"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(Ye,{title:"\u65E5\u5FD7\u8BE6\u60C5",visible:Y.value,width:700,footer:!1,"unmount-on-close":"","render-to-body":"",onCancel:Ie},{default:e(()=>[F("div",Kt,[v((t(),l(T,{column:2,bordered:""},{default:e(()=>[a(f,{label:"Trace ID",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Qt,[s(n(o.value.trace_id)+" ",1),a(q,{class:"copy-btn",onClick:y[8]||(y[8]=u=>A(o.value.trace_id))})]))]),_:1}),a(f,{label:"\u8C03\u7528\u5BC6\u94A5",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Wt,[s(n(o.value.creator)+" ",1),a(q,{class:"copy-btn",onClick:y[9]||(y[9]=u=>A(o.value.creator))})]))]),_:1}),a(f,{label:"\u7528\u6237ID"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Xt,n(o.value.user_id||"-"),1))]),_:1}),a(f,{label:"\u5E94\u7528ID"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Zt,n(o.value.app_id||"-"),1))]),_:1}),a(f,{label:"\u516C\u53F8"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ea,n(o.value.corp_name),1))]),_:1}),a(f,{label:"\u6A21\u578B"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ta,n(o.value.model||"-"),1))]),_:1}),a(f,{label:"\u6A21\u578B\u7C7B\u578B"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",aa,n(i.$t(`chat.dict.type.${o.value.type}`)),1))]),_:1}),a(f,{label:"\u6D41\u5F0F"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",la,n(i.$t(`chat.dict.stream.${o.value.stream||!1}`)),1))]),_:1}),a(f,{label:"\u63D0\u95EE",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",oa,n(o.value.prompt||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ua,n(o.value.completion||"-"),1))]),_:1}),a(f,{label:"\u8BA1\u8D39\u65B9\u5F0F"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",na,n(i.$t(`chat.dict.billing_method.${o.value.text_quota.billing_method}`)),1))]),_:1}),a(f,{label:"\u603B\u6D88\u8017\u4EE4\u724C\u6570"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",sa,n(o.value.total_tokens?o.value.total_tokens:o.value.status===1&&o.value.text_quota.billing_method===2?0:"-"),1))]),_:1}),a(f,{label:"\u63D0\u95EE\u500D\u7387"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ia,n(o.value.type!==100?o.value.text_quota.prompt_ratio||"-":o.value.multimodal_quota.text_quota.prompt_ratio||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54\u500D\u7387"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",_a,n(o.value.type!==100?o.value.text_quota.completion_ratio||"-":o.value.multimodal_quota.text_quota.completion_ratio||"-"),1))]),_:1}),a(f,{label:"\u63D0\u95EE\u4EE4\u724C\u6570"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",da,n(o.value.prompt_tokens||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54\u4EE4\u724C\u6570"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ra,n(o.value.completion_tokens||"-"),1))]),_:1}),a(f,{label:"\u8FDE\u63A5\u8017\u65F6"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ma,[o.value.conn_time>3e4?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.conn_time)+" ms ",1)]),_:1})):o.value.conn_time>15e3?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.conn_time)+" ms ",1)]),_:1})):o.value.conn_time>5e3?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.conn_time)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.conn_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u6301\u7EED\u65F6\u957F"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ca,[o.value.duration>18e4?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.duration)+" ms ",1)]),_:1})):o.value.duration>12e4?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.duration)+" ms ",1)]),_:1})):o.value.duration>9e4?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.duration)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.duration||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u603B\u8017\u65F6"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",pa,[o.value.total_time>18e4?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.total_time)+" ms ",1)]),_:1})):o.value.total_time>12e4?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.total_time)+" ms ",1)]),_:1})):o.value.total_time>9e4?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.total_time)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.total_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u7ED3\u679C"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",fa,[o.value.status===1?(t(),l(_,{key:0,color:"green"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1})):o.value.status===2?(t(),l(_,{key:1,color:"gold"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1})):o.value.status===3?(t(),l(_,{key:2,color:"orange"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1})):(t(),l(_,{key:3,color:"red"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1}))]))]),_:1}),a(f,{label:"\u5BA2\u6237\u7AEFIP"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ya,n(o.value.client_ip||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u65F6\u95F4"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ka,n(o.value.req_time||"-"),1))]),_:1}),a(f,{label:"\u9519\u8BEF\u4FE1\u606F",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",va,n(o.value.err_msg||"-"),1))]),_:1})]),_:1})),[[k,["user"]]]),v((t(),l(T,{column:2,bordered:""},{default:e(()=>[a(f,{label:"Trace ID",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ha,[s(n(o.value.trace_id)+" ",1),a(q,{class:"copy-btn",onClick:y[10]||(y[10]=u=>A(o.value.trace_id))})]))]),_:1}),a(f,{label:"\u8C03\u7528\u5BC6\u94A5",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ba,[s(n(o.value.is_smart_match?"-":o.value.creator)+" ",1),o.value.is_smart_match?tt("",!0):(t(),l(q,{key:0,class:"copy-btn",onClick:y[11]||(y[11]=u=>A(o.value.creator))}))]))]),_:1}),a(f,{label:"\u7528\u6237ID"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",ga,n(o.value.is_smart_match?"-":o.value.user_id||"-"),1))]),_:1}),a(f,{label:"\u5E94\u7528ID"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",wa,n(o.value.is_smart_match?"-":o.value.app_id||"-"),1))]),_:1}),a(f,{label:"\u516C\u53F8"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Da,n(o.value.corp_name),1))]),_:1}),a(f,{label:"\u6A21\u578B\u7C7B\u578B"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ea,n(i.$t(`chat.dict.type.${o.value.type}`)),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u6A21\u578B\u540D\u79F0"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",$a,n(o.value.name||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u6A21\u578B"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Fa,n(o.value.model||"-"),1))]),_:1}),a(f,{label:"\u771F\u5B9E\u6A21\u578B\u540D\u79F0"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ca,n(o.value.real_model_name),1))]),_:1}),a(f,{label:"\u771F\u5B9E\u6A21\u578B"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ba,n(o.value.real_model),1))]),_:1}),a(f,{label:"\u542F\u7528\u540E\u5907"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ia,n(i.$t(`chat.dict.is_enable_fallback.${o.value.is_enable_fallback||!1}`)),1))]),_:1}),a(f,{label:"\u540E\u5907\u6A21\u578B"},{default:e(()=>{var u,B;return[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",xa,n(((B=(u=o.value)==null?void 0:u.fallback_config)==null?void 0:B.fallback_model)||"-"),1))]}),_:1}),a(f,{label:"\u542F\u7528\u8F6C\u53D1"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Va,n(i.$t(`chat.dict.is_enable_forward.${o.value.is_enable_forward||!1}`)),1))]),_:1}),a(f,{label:"\u8F6C\u53D1\u89C4\u5219"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Aa,n(o.value.is_enable_forward?i.$t(`chat.dict.forward_rule.${o.value.forward_config.forward_rule||"1"}`):"-"),1))]),_:1}),a(f,{label:"\u542F\u7528\u4EE3\u7406"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",qa,n(i.$t(`chat.dict.is_enable_model_agent.${o.value.is_enable_model_agent||!1}`)),1))]),_:1}),a(f,{label:"\u4EE3\u7406\u540D\u79F0"},{default:e(()=>{var u,B;return[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Sa,n(((B=(u=o.value)==null?void 0:u.model_agent)==null?void 0:B.name)||"-"),1))]}),_:1}),a(f,{label:"\u5BC6\u94A5",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",za,[s(n(o.value.key||"-")+" ",1),a(q,{class:"copy-btn",onClick:y[12]||(y[12]=u=>A(o.value.key))})]))]),_:1}),a(f,{label:"\u63D0\u95EE",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Na,n(o.value.prompt||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ta,n(o.value.completion||"-"),1))]),_:1}),a(f,{label:"\u8BA1\u8D39\u65B9\u5F0F"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Pa,n(i.$t(`chat.dict.billing_method.${o.value.text_quota.billing_method}`)),1))]),_:1}),a(f,{label:"\u603B\u6D88\u8017\u4EE4\u724C\u6570"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",La,n(o.value.total_tokens?o.value.total_tokens:o.value.status===1&&o.value.text_quota.billing_method===2?0:"-"),1))]),_:1}),a(f,{label:"\u63D0\u95EE\u500D\u7387"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ma,n(o.value.type!==100?o.value.text_quota.prompt_ratio||"-":o.value.multimodal_quota.text_quota.prompt_ratio||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54\u500D\u7387"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ua,n(o.value.type!==100?o.value.text_quota.completion_ratio||"-":o.value.multimodal_quota.text_quota.completion_ratio||"-"),1))]),_:1}),a(f,{label:"\u63D0\u95EE\u4EE4\u724C\u6570"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ya,n(o.value.prompt_tokens||"-"),1))]),_:1}),a(f,{label:"\u56DE\u7B54\u4EE4\u724C\u6570"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ra,n(o.value.completion_tokens||"-"),1))]),_:1}),a(f,{label:"\u8FDE\u63A5\u8017\u65F6"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Oa,[o.value.conn_time>1e4?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.conn_time)+" ms ",1)]),_:1})):o.value.conn_time>5e3?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.conn_time)+" ms ",1)]),_:1})):o.value.conn_time>3e3?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.conn_time)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.conn_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u6301\u7EED\u65F6\u957F"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",ja,[o.value.duration>12e4?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.duration)+" ms ",1)]),_:1})):o.value.duration>9e4?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.duration)+" ms ",1)]),_:1})):o.value.duration>6e4?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.duration)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.duration||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u603B\u8017\u65F6"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ja,[o.value.total_time>12e4?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.total_time)+" ms ",1)]),_:1})):o.value.total_time>9e4?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.total_time)+" ms ",1)]),_:1})):o.value.total_time>6e4?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.total_time)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.total_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u5185\u8017"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ga,[o.value.internal_time>500?(t(),l(_,{key:0,color:"red"},{default:e(()=>[s(n(o.value.internal_time)+" ms ",1)]),_:1})):o.value.internal_time>300?(t(),l(_,{key:1,color:"orange"},{default:e(()=>[s(n(o.value.internal_time)+" ms ",1)]),_:1})):o.value.internal_time>100?(t(),l(_,{key:2,color:"gold"},{default:e(()=>[s(n(o.value.internal_time)+" ms ",1)]),_:1})):(t(),l(_,{key:3,color:"green"},{default:e(()=>[s(n(o.value.internal_time||"-")+" ms",1)]),_:1}))]))]),_:1}),a(f,{label:"\u7ED3\u679C"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",Ha,[o.value.status===1?(t(),l(_,{key:0,color:"green"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1})):o.value.status===2?(t(),l(_,{key:1,color:"gold"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1})):o.value.status===3?(t(),l(_,{key:2,color:"orange"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1})):(t(),l(_,{key:3,color:"red"},{default:e(()=>[s(n(i.$t(`chat.dict.status.${o.value.status}`)),1)]),_:1}))]))]),_:1}),a(f,{label:"\u672C\u5730IP"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Ka,n(o.value.local_ip||"-"),1))]),_:1}),a(f,{label:"\u5BA2\u6237\u7AEFIP"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Qa,n(o.value.client_ip||"-"),1))]),_:1}),a(f,{label:"\u8FDC\u7A0BIP"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Wa,n(o.value.remote_ip||"-"),1))]),_:1}),a(f,{label:"\u8BF7\u6C42\u65F6\u95F4"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Xa,n(o.value.req_time||"-"),1))]),_:1}),a(f,{label:"\u521B\u5EFA\u65F6\u95F4"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{widths:["200px"],rows:1})]),_:1})):(t(),d("span",Za,n(o.value.created_at||"-"),1))]),_:1}),a(f,{label:"\u9519\u8BEF\u4FE1\u606F",span:2},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:1})]),_:1})):(t(),d("span",el,n(o.value.err_msg||"-"),1))]),_:1})]),_:1})),[[k,["admin"]]]),a(T,{layout:"inline-vertical",column:2,style:{"margin-top":"10px",position:"relative"}},{default:e(()=>[a(f,{span:2},{default:e(()=>[a(ce,{type:"card"},{default:e(()=>[a(me,{key:"1",title:"\u63D0\u95EE\u4E0A\u4E0B\u6587"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:3})]),_:1})):(t(),l(G,{key:1},{default:e(()=>[o.value.messages?(t(),l(r(ke),{key:0,path:"res",data:o.value.messages,"show-length":!0},null,8,["data"])):(t(),d("span",tl,"-"))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1}),v((t(),l(T,{layout:"inline-vertical",column:2,style:{"margin-top":"10px",position:"relative"}},{default:e(()=>[a(f,{span:2},{default:e(()=>[a(ce,{type:"card"},{default:e(()=>[a(me,{key:"1",title:"\u6A21\u578B\u4EE3\u7406"},{default:e(()=>[r(m)?(t(),l(p,{key:0,animation:!0},{default:e(()=>[a(c,{rows:3})]),_:1})):(t(),l(G,{key:1},{default:e(()=>[o.value.model_agent?(t(),l(r(ke),{key:0,data:o.value.model_agent,"show-length":!0},null,8,["data"])):(t(),d("span",al,"-"))]),_:1}))]),_:1})]),_:1})]),_:1})]),_:1})),[[k,["admin"]]])])]),_:1},8,["visible"])]),_:1})])}}});const Ll=Qe(ol,[["__scopeId","data-v-bda4e18c"]]);export{Ll as default};
