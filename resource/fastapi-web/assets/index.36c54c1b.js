import{u as Ie,G as ze,H as Se,J as Ue,K as De,L as qe,m as Be,v as Te,I as Ne,w as Fe,_ as Pe}from"./index.2884bedb.js";import{u as Le}from"./loading.f132a353.js";/* empty css               *//* empty css              *//* empty css              *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                */import{c as N,S as Ee}from"./sortable.esm.1b2eaf52.js";/* empty css               *//* empty css               *//* empty css                *//* empty css               *//* empty css               *//* empty css              */import{d as xe,r as H,e as p,c as F,w as Ae,B as h,C as $,aH as a,aG as t,aL as c,aM as u,u as P,F as f,aJ as J,aI as K,aD as Me,D as Oe,n as Qe,aX as Re,aK as Ge,aF as He,aT as Je,b3 as Ke,bB as je,b2 as Xe,bD as We,bE as Ye,bF as Ze,b6 as ea,bG as aa,ab as ta,aV as la,bj as oa,a5 as na,bk as sa,bm as ua,bn as ra,b5 as ia,bH as ca,bI as da,bJ as ma,a$ as pa,bK as _a}from"./arco.25045eac.js";import"./chart.871a9cd2.js";import"./vue.8f4cc2df.js";const fa={class:"container"},va={class:"action-icon"},ba={class:"action-icon"},ga={id:"tableSetting"},ha={style:{"margin-right":"4px",cursor:"move"}},ya={class:"title"},$a={key:0,class:"circle red"},ka={key:1,class:"circle"},wa={name:"UserList"},Ca=xe({...wa,setup(Va){const j=H({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),X=async e=>{d(!0);try{await ze(e),S()}catch{}finally{d(!1)}},L=()=>({user_id:p(),name:"",email:"",key:"",status:p(),created_at:[]}),{loading:W,setLoading:d}=Le(!0),{t:s}=Ie(),E=p([]),n=p(L()),v=p([]),I=p([]),U=p("medium"),y={current:1,pageSize:10,showTotal:!0,showPageSize:!0},z=H({...y}),Y=F(()=>[{name:s("searchTable.size.mini"),value:"mini"},{name:s("searchTable.size.small"),value:"small"},{name:s("searchTable.size.medium"),value:"medium"},{name:s("searchTable.size.large"),value:"large"}]),Z=F(()=>[{title:s("user.columns.userId"),dataIndex:"user_id",slotName:"user_id",align:"center"},{title:s("user.columns.name"),dataIndex:"name",slotName:"name",align:"center"},{title:s("user.columns.email"),dataIndex:"email",slotName:"email",align:"center"},{title:s("user.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center"},{title:s("user.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:80},{title:s("user.columns.updated_at"),dataIndex:"updated_at",slotName:"updated_at",align:"center",width:170},{title:s("user.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:250}]),ee=F(()=>[{label:s("user.dict.status.1"),value:1},{label:s("user.dict.status.2"),value:2}]),k=async(e={...y})=>{d(!0);try{const{data:o}=await Se(e);E.value=o.items,z.current=e.current,z.pageSize=e.pageSize,z.total=o.paging.total}catch{}finally{d(!1)}},S=()=>{k({...y,...n.value})},ae=e=>{k({...y,...n.value,current:e})},te=e=>{y.pageSize=e,k({...y,...n.value})};k();const le=()=>{n.value=L()},oe=async e=>{d(!0);try{e.status=e.status===1?2:1,await Ue(e),S()}catch{}finally{d(!1)}},ne=(e,o)=>{U.value=e},se=(e,o,r)=>{e?v.value.splice(r,0,o):v.value=I.value.filter(i=>i.dataIndex!==o.dataIndex)},x=(e,o,r,i=!1)=>{const _=i?N(e):e;return o>-1&&r>-1&&_.splice(o,1,_.splice(r,1,_[o]).pop()),_},ue=e=>{e&&Qe(()=>{const o=document.getElementById("tableSetting");new Ee(o,{onEnd(r){const{oldIndex:i,newIndex:_}=r;x(v.value,i,_),x(I.value,i,_)}})})};Ae(()=>Z.value,e=>{v.value=N(e),v.value.forEach((o,r)=>{o.checked=!0}),I.value=N(v.value)},{deep:!0,immediate:!0});const w=p(!1),A=p(),C=p({}),re=async e=>{d(!0);try{C.value.user_id=e.user_id,w.value=!0}catch{}finally{d(!1)}},ie=async e=>{var r;if(await((r=A.value)==null?void 0:r.validate())){w.value=!0,e(!1);return}d(!0);try{await De(C.value),Re.success(s("user.success.grantQuota")),e(),k()}catch{}finally{d(!1)}},ce=()=>{w.value=!1};return(e,o)=>{const r=qe,i=Ge,_=He,M=Je,b=Ke,m=je,D=Xe,de=We,me=Ye,q=Ze,O=ea,Q=aa,pe=ta,g=la,R=Be,G=oa,_e=na,B=sa,fe=Te,ve=ua,be=ra,ge=Ne,he=Fe,ye=ia,$e=ca,ke=da,we=ma,Ce=pa,Ve=_a;return h(),$("div",fa,[a(_,{class:"container-breadcrumb"},{default:t(()=>[a(i,null,{default:t(()=>[a(r)]),_:1}),a(i,null,{default:t(()=>[c(u(e.$t("menu.user")),1)]),_:1}),a(i,null,{default:t(()=>[c(u(e.$t("menu.user.list")),1)]),_:1})]),_:1}),a(Ve,{class:"general-card",title:e.$t("menu.user.list"),bordered:!1},{extra:t(()=>[a(Ce,{visible:w.value,"onUpdate:visible":o[8]||(o[8]=l=>w.value=l),title:e.$t("user.form.title.grantQuota"),"ok-text":e.$t("user.button.save"),onCancel:ce,onBeforeOk:ie},{default:t(()=>[a(O,{ref_key:"formRef",ref:A,model:C.value},{default:t(()=>[a(b,{field:"quota",label:e.$t("user.label.quota"),rules:[{required:!0,message:e.$t("user.error.quota.required")}]},{default:t(()=>[a(M,{modelValue:C.value.quota,"onUpdate:modelValue":o[7]||(o[7]=l=>C.value.quota=l),precision:0,placeholder:e.$t("user.placeholder.quota")},null,8,["modelValue","placeholder"])]),_:1},8,["label","rules"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),default:t(()=>[a(q,null,{default:t(()=>[a(m,{flex:1},{default:t(()=>[a(O,{model:n.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:t(()=>[a(q,{gutter:16},{default:t(()=>[a(m,{span:8},{default:t(()=>[a(b,{field:"user_id",label:e.$t("user.form.userId")},{default:t(()=>[a(M,{modelValue:n.value.user_id,"onUpdate:modelValue":o[0]||(o[0]=l=>n.value.user_id=l),placeholder:e.$t("user.form.userId.placeholder"),min:1,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:8},{default:t(()=>[a(b,{field:"name",label:e.$t("user.form.name")},{default:t(()=>[a(D,{modelValue:n.value.name,"onUpdate:modelValue":o[1]||(o[1]=l=>n.value.name=l),placeholder:e.$t("user.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:8},{default:t(()=>[a(b,{field:"email",label:e.$t("user.form.email")},{default:t(()=>[a(D,{modelValue:n.value.email,"onUpdate:modelValue":o[2]||(o[2]=l=>n.value.email=l),placeholder:e.$t("user.form.email.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:8},{default:t(()=>[a(b,{field:"key",label:e.$t("user.form.key")},{default:t(()=>[a(D,{modelValue:n.value.key,"onUpdate:modelValue":o[3]||(o[3]=l=>n.value.key=l),placeholder:e.$t("user.form.key.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:8},{default:t(()=>[a(b,{field:"status",label:e.$t("user.form.status")},{default:t(()=>[a(de,{modelValue:n.value.status,"onUpdate:modelValue":o[4]||(o[4]=l=>n.value.status=l),options:P(ee),placeholder:e.$t("user.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(m,{span:8},{default:t(()=>[a(b,{field:"created_at",label:e.$t("user.form.created_at")},{default:t(()=>[a(me,{modelValue:n.value.created_at,"onUpdate:modelValue":o[5]||(o[5]=l=>n.value.created_at=l),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(Q,{style:{height:"84px"},direction:"vertical"}),a(m,{flex:"86px",style:{"text-align":"right"}},{default:t(()=>[a(G,{direction:"vertical",size:18},{default:t(()=>[a(g,{type:"primary",onClick:S},{icon:t(()=>[a(pe)]),default:t(()=>[c(" "+u(e.$t("user.form.search")),1)]),_:1}),a(g,{onClick:le},{icon:t(()=>[a(R)]),default:t(()=>[c(" "+u(e.$t("user.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(Q,{style:{"margin-top":"0"}}),a(q,{style:{"margin-bottom":"16px"}},{default:t(()=>[a(m,{span:12},{default:t(()=>[a(G,null,{default:t(()=>[a(g,{type:"primary",onClick:o[6]||(o[6]=l=>e.$router.push({name:"UserCreate"}))},{icon:t(()=>[a(_e)]),default:t(()=>[c(" "+u(e.$t("user.operation.create")),1)]),_:1})]),_:1})]),_:1}),a(m,{span:12,style:{display:"flex","align-items":"center","justify-content":"end"}},{default:t(()=>[a(B,{content:e.$t("searchTable.actions.refresh")},{default:t(()=>[f("div",{class:"action-icon",onClick:S},[a(R,{size:"18"})])]),_:1},8,["content"]),a(be,{onSelect:ne},{content:t(()=>[(h(!0),$(J,null,K(P(Y),l=>(h(),Me(ve,{key:l.value,value:l.value,class:Oe({active:l.value===U.value})},{default:t(()=>[f("span",null,u(l.name),1)]),_:2},1032,["value","class"]))),128))]),default:t(()=>[a(B,{content:e.$t("searchTable.actions.density")},{default:t(()=>[f("div",va,[a(fe,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(B,{content:e.$t("searchTable.actions.columnSetting")},{default:t(()=>[a($e,{trigger:"click",position:"bl",onPopupVisibleChange:ue},{content:t(()=>[f("div",ga,[(h(!0),$(J,null,K(I.value,(l,V)=>(h(),$("div",{key:l.dataIndex,class:"setting"},[f("div",ha,[a(he)]),f("div",null,[a(ye,{modelValue:l.checked,"onUpdate:modelValue":T=>l.checked=T,onChange:T=>se(T,l,V)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),f("div",ya,u(l.title==="#"?"\u5E8F\u5217\u53F7":l.title),1)]))),128))])]),default:t(()=>[f("div",ba,[a(ge,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(we,{"row-key":"id",loading:P(W),pagination:z,columns:v.value,data:E.value,bordered:!1,size:U.value,"row-selection":j,onPageChange:ae,onPageSizeChange:te},{status:t(({record:l})=>[l.status===2?(h(),$("span",$a)):(h(),$("span",ka)),c(" "+u(e.$t(`user.dict.status.${l.status}`)),1)]),quota:t(({record:l})=>[c(u(l.quota.toLocaleString()),1)]),operations:t(({record:l})=>[a(g,{type:"text",size:"small",onClick:V=>re({user_id:`${l.user_id}`})},{default:t(()=>[c(u(e.$t("user.columns.operations.grantQuota")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:V=>e.$router.push({name:"UserDetail",query:{id:`${l.id}`}})},{default:t(()=>[c(u(e.$t("user.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(g,{type:"text",size:"small",onClick:V=>oe({id:`${l.id}`,status:Number(`${l.status}`)})},{default:t(()=>[c(u(e.$t(`user.columns.operations.status.${l.status}`)),1)]),_:2},1032,["onClick"]),a(ke,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:V=>X({id:`${l.id}`})},{default:t(()=>[a(g,{type:"text",size:"small"},{default:t(()=>[c(u(e.$t("user.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"])]),_:1},8,["title"])])}}});const Ha=Pe(Ca,[["__scopeId","data-v-0ba49f6a"]]);export{Ha as default};