import{u as We,k as Xe,p as Ye,y as Ze,i as ea,z as aa,_ as ta}from"./index.17e75bc6.js";/* empty css                *//* empty css                *//* empty css              *//* empty css                *//* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css              *//* empty css                *//* empty css               *//* empty css                *//* empty css                *//* empty css               *//* empty css               */import{d as la,r as re,e as r,c as A,w as oa,B as V,C as I,aH as a,aG as l,aL as u,aM as m,u as s,F as $,aJ as G,aI as j,aD as ie,D as sa,bR as i,n as ua,aW as de,aK as na,aF as ra,aS as ia,b2 as da,bC as ca,b1 as ma,bB as pa,bS as _a,bD as fa,b5 as va,bE as ba,ab as ga,aU as ha,bi as ya,bj as qa,bl as $a,bm as wa,b4 as ka,bF as Ca,bV as Va,aT as Da,bG as xa,bH as Ua,aV as za,bT as Sa,bU as Ia,a_ as Fa,bA as Ba,bI as Na,g as Pa}from"./arco.86f0f56d.js";import{u as Qa}from"./loading.0ba7f8b6.js";import{q as N}from"./common.7a0e8d62.js";import{s as La,q as Ra,a as Ea,b as Ma,c as Oa,d as Ha}from"./admin_user.1b33e933.js";import{c as J,S as Ta}from"./sortable.esm.07e6d21c.js";import{q as Aa}from"./model.e997e389.js";import{_ as Ga}from"./index.vue_vue_type_script_setup_true_lang.723a3443.js";import"./chart.dbe284dd.js";import"./vue.e2e8d4fd.js";import"./base.87fcf6e2.js";/* empty css                *//* empty css                */const ja={class:"container"},Ja={class:"action-icon"},Ka={class:"action-icon"},Wa={id:"tableSetting"},Xa={style:{"margin-right":"4px",cursor:"move"}},Ya={class:"title"},Za={name:"UserList"},et=la({...Za,setup(at){const{proxy:P}=Pa(),ce=re({type:"checkbox",showCheckedAll:!0,onlyCurrent:!1}),K=r([]);(async()=>{try{const{data:e}=await Aa();K.value=e.items}catch{}})();const me=async e=>{p(!0);try{await La(e),P.$message.success("\u5220\u9664\u6210\u529F"),U()}catch{}finally{p(!1)}},W=()=>({user_id:r(),name:"",account:"",quota:r(),status:r(),quota_expires_at:[]}),{loading:pe,setLoading:p}=Qa(!0),{t:d}=We(),f=r([]),c=r(W()),w=r([]),F=r([]),Q=r("medium"),D={current:1,pageSize:20,showTotal:!0,showPageSize:!0,pageSizeOptions:[20,50,100,500,1e3]},B=re({...D}),_e=A(()=>[{name:d("size.mini"),value:"mini"},{name:d("size.small"),value:"small"},{name:d("size.medium"),value:"medium"},{name:d("size.large"),value:"large"}]),fe=A(()=>[{title:d("user.columns.userId"),dataIndex:"user_id",slotName:"user_id",align:"center",width:80},{title:d("user.columns.name"),dataIndex:"name",slotName:"name",align:"center",ellipsis:!0,tooltip:!0},{title:d("user.columns.account"),dataIndex:"account",slotName:"account",align:"center",ellipsis:!0,tooltip:!0},{title:d("user.columns.quota"),dataIndex:"quota",slotName:"quota",align:"center",ellipsis:!0,tooltip:!0},{title:d("user.columns.used_quota"),dataIndex:"used_quota",slotName:"used_quota",align:"center",ellipsis:!0,tooltip:!0},{title:d("user.columns.quota_expires_at"),dataIndex:"quota_expires_at",slotName:"quota_expires_at",align:"center",width:170},{title:d("user.columns.remark"),dataIndex:"remark",slotName:"remark",align:"center",ellipsis:!0,tooltip:!0},{title:d("user.columns.status"),dataIndex:"status",slotName:"status",align:"center",width:65},{title:d("user.columns.operations"),dataIndex:"operations",slotName:"operations",align:"center",width:262}]),ve=A(()=>[{label:d("user.dict.status.1"),value:1},{label:d("user.dict.status.2"),value:2}]),x=async(e={...D})=>{p(!0);try{const{data:o}=await Ra(e);f.value=o.items,B.current=e.current,B.pageSize=e.pageSize,B.total=o.paging.total}catch{}finally{p(!1)}},U=()=>{x({...D,...c.value})},be=e=>{x({...D,...c.value,current:e})},ge=e=>{D.pageSize=e,x({...D,...c.value})};x();const he=()=>{c.value=W()},ye=async e=>{p(!0);try{await Ea(e),P.$message.success("\u64CD\u4F5C\u6210\u529F"),U()}catch{}finally{p(!1)}},qe=async e=>{p(!0);try{await Ma(e),P.$message.success("\u64CD\u4F5C\u6210\u529F"),U()}catch{}finally{p(!1)}},$e=(e,o)=>{Q.value=e},we=(e,o,_)=>{e?w.value.splice(_,0,o):w.value=F.value.filter(b=>b.dataIndex!==o.dataIndex)},X=(e,o,_,b=!1)=>{const y=b?J(e):e;return o>-1&&_>-1&&y.splice(o,1,y.splice(_,1,y[o]).pop()),y},ke=e=>{e&&ua(()=>{const o=document.getElementById("tableSetting");new Ta(o,{onEnd(_){const{oldIndex:b,newIndex:y}=_;X(w.value,b,y),X(F.value,b,y)}})})};oa(()=>fe.value,e=>{w.value=J(e),w.value.forEach((o,_)=>{o.checked=!0}),F.value=J(w.value)},{deep:!0,immediate:!0});const L=r(0),z=r(!1),S=r(!1),Y=r(),n=r({}),Z=r(),k=r({}),Ce=async e=>{p(!0);try{L.value=0,n.value.quota=r(),n.value.user_id=e.user_id,n.value.quota_expires_at=e.quota_expires_at,z.value=!0}catch{}finally{p(!1)}},Ve=e=>{n.value.quota=e*5e5},De=async e=>{p(!0);try{k.value.user_id=e.user_id,e.models&&e.models.length>0&&e.models[0]!=="undefined"?k.value.models=e.models:k.value.models=[],S.value=!0}catch{}finally{p(!1)}},xe=async e=>{var _;if(await((_=Y.value)==null?void 0:_.validate())){z.value=!0,e(!1);return}p(!0);try{await Oa(n.value),de.success(d("user.success.grantQuota")),e(),x()}catch{e(!1)}finally{p(!1)}},Ue=()=>{z.value=!1},ze=async e=>{var _;if(await((_=Z.value)==null?void 0:_.validate())){S.value=!0,e(!1);return}p(!0);try{await Ha(k.value),de.success(d("user.success.models")),e(),x()}catch{e(!1)}finally{p(!1)}},Se=()=>{S.value=!1},R=r(!1),ee=r(),Ie=e=>{R.value=!0,ee.value=e},Fe=()=>{R.value=!1};return(e,o)=>{const _=Xe,b=na,y=ra,E=ia,g=da,h=ca,ae=ma,te=pa,Be=_a,M=fa,O=va,le=ba,Ne=ga,q=ha,oe=Ye,se=ya,H=qa,Pe=Ze,Qe=$a,Le=wa,Re=ea,Ee=aa,Me=ka,Oe=Ca,ue=Va,He=Da,Te=xa,Ae=Ua,Ge=za,C=Sa,je=Ia,ne=Fa,Je=Ba,Ke=Na;return V(),I("div",ja,[a(y,{class:"container-breadcrumb"},{default:l(()=>[a(b,null,{default:l(()=>[a(_)]),_:1}),a(b,null,{default:l(()=>[u(m(e.$t("menu.user")),1)]),_:1}),a(b,null,{default:l(()=>[u(m(e.$t("menu.user.list")),1)]),_:1})]),_:1}),a(Ke,{class:"general-card",bordered:!1,"header-style":{padding:"20px"},"body-style":{padding:"25px 20px 20px 20px"}},{default:l(()=>[a(M,null,{default:l(()=>[a(h,{flex:1},{default:l(()=>[a(O,{model:c.value,"label-col-props":{span:5},"wrapper-col-props":{span:18},"label-align":"left"},{default:l(()=>[a(M,{gutter:16},{default:l(()=>[a(h,{span:8},{default:l(()=>[a(g,{field:"user_id",label:e.$t("user.form.userId")},{default:l(()=>[a(E,{modelValue:c.value.user_id,"onUpdate:modelValue":o[0]||(o[0]=t=>c.value.user_id=t),placeholder:e.$t("user.form.userId.placeholder"),min:1,max:9999999999999,"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(h,{span:7},{default:l(()=>[a(g,{field:"account",label:e.$t("user.form.account")},{default:l(()=>[a(ae,{modelValue:c.value.account,"onUpdate:modelValue":o[1]||(o[1]=t=>c.value.account=t),placeholder:e.$t("user.form.account.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(h,{span:9},{default:l(()=>[a(g,{field:"name",label:e.$t("user.form.name")},{default:l(()=>[a(ae,{modelValue:c.value.name,"onUpdate:modelValue":o[2]||(o[2]=t=>c.value.name=t),placeholder:e.$t("user.form.name.placeholder"),"allow-clear":""},null,8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1}),a(h,{span:8},{default:l(()=>[a(g,{field:"quota",label:e.$t("user.form.quota")},{default:l(()=>[a(E,{modelValue:c.value.quota,"onUpdate:modelValue":o[3]||(o[3]=t=>c.value.quota=t),placeholder:e.$t("user.form.quota.placeholder"),min:1e-6,max:9999999999999,"allow-clear":""},null,8,["modelValue","placeholder","min"])]),_:1},8,["label"])]),_:1}),a(h,{span:7},{default:l(()=>[a(g,{field:"status",label:e.$t("user.form.status")},{default:l(()=>[a(te,{modelValue:c.value.status,"onUpdate:modelValue":o[4]||(o[4]=t=>c.value.status=t),options:s(ve),placeholder:e.$t("user.form.selectDefault"),"allow-clear":""},null,8,["modelValue","options","placeholder"])]),_:1},8,["label"])]),_:1}),a(h,{span:9},{default:l(()=>[a(g,{field:"quota_expires_at",label:e.$t("user.form.quota_expires_at")},{default:l(()=>[a(Be,{modelValue:c.value.quota_expires_at,"onUpdate:modelValue":o[5]||(o[5]=t=>c.value.quota_expires_at=t),style:{width:"100%"}},null,8,["modelValue"])]),_:1},8,["label"])]),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),a(le,{style:{height:"84px"},direction:"vertical"}),a(h,{flex:"86px",style:{"text-align":"right"}},{default:l(()=>[a(se,{direction:"vertical",size:18},{default:l(()=>[a(q,{type:"primary",onClick:U},{icon:l(()=>[a(Ne)]),default:l(()=>[u(" "+m(e.$t("user.form.search")),1)]),_:1}),a(q,{onClick:he},{icon:l(()=>[a(oe)]),default:l(()=>[u(" "+m(e.$t("user.form.reset")),1)]),_:1})]),_:1})]),_:1})]),_:1}),a(le,{style:{"margin-top":"0","margin-bottom":"16px"}}),a(M,{style:{"margin-bottom":"16px"}},{default:l(()=>[a(h,{span:12},{default:l(()=>[a(se,null,{default:l(()=>[a(q,{type:"primary",onClick:o[6]||(o[6]=t=>e.$router.push({name:"UserCreate"}))},{default:l(()=>[u(m(e.$t("user.operation.create")),1)]),_:1})]),_:1})]),_:1}),a(h,{span:12,style:{display:"flex",height:"32px","align-items":"center","justify-content":"end"}},{default:l(()=>[a(H,{content:e.$t("actions.refresh")},{default:l(()=>[$("div",{class:"action-icon",onClick:U},[a(oe,{size:"18"})])]),_:1},8,["content"]),a(Le,{onSelect:$e},{content:l(()=>[(V(!0),I(G,null,j(s(_e),t=>(V(),ie(Qe,{key:t.value,value:t.value,class:sa({active:t.value===Q.value})},{default:l(()=>[$("span",null,m(t.name),1)]),_:2},1032,["value","class"]))),128))]),default:l(()=>[a(H,{content:e.$t("actions.density")},{default:l(()=>[$("div",Ja,[a(Pe,{size:"18"})])]),_:1},8,["content"])]),_:1}),a(H,{content:e.$t("actions.column_setting")},{default:l(()=>[a(Oe,{trigger:"click",position:"bl",onPopupVisibleChange:ke},{content:l(()=>[$("div",Wa,[(V(!0),I(G,null,j(F.value,(t,v)=>(V(),I("div",{key:t.dataIndex,class:"setting"},[$("div",Xa,[a(Ee)]),$("div",null,[a(Me,{modelValue:t.checked,"onUpdate:modelValue":T=>t.checked=T,onChange:T=>we(T,t,v)},null,8,["modelValue","onUpdate:modelValue","onChange"])]),$("div",Ya,m(t.title==="#"?"\u5E8F\u5217\u53F7":t.title),1)]))),128))])]),default:l(()=>[$("div",Ka,[a(Re,{size:"18"})])]),_:1})]),_:1},8,["content"])]),_:1})]),_:1}),a(Ae,{"row-key":"id",loading:s(pe),pagination:B,columns:w.value,data:f.value,bordered:!1,size:Q.value,"row-selection":ce,onPageChange:be,onPageSizeChange:ge},{quota:l(({record:t})=>[u(m(t.quota>0?`$${s(N)(t.quota)}`:t.quota<0?`-$${s(N)(-t.quota)}`:"$0.00"),1)]),used_quota:l(({record:t})=>[u(" $"+m(t.used_quota>0?s(N)(t.used_quota):"0.00"),1)]),quota_expires_at:l(({rowIndex:t})=>[a(ue,{modelValue:f.value[t].quota_expires_at,"onUpdate:modelValue":v=>f.value[t].quota_expires_at=v,placeholder:e.$t("user.columns.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":v=>s(i)(v).isBefore(s(i)()),"show-time":"",shortcuts:[{label:"1",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(1,"day")},{label:"7",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(7,"day")},{label:"15",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(15,"day")},{label:"30",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(30,"day")},{label:"90",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(90,"day")},{label:"180",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(180,"day")},{label:"365",value:()=>s(i)(new Date(f.value[t].quota_expires_at||new Date)).add(365,"day")}],onChange:v=>ye({id:`${f.value[t].id}`,quota_expires_at:`${f.value[t].quota_expires_at}`})},{default:l(()=>[a(q,{style:{width:"150px"}},{default:l(()=>[u(m(f.value[t].quota_expires_at||e.$t("user.columns.placeholder.quota_expires_at")),1)]),_:2},1024)]),_:2},1032,["modelValue","onUpdate:modelValue","placeholder","disabled-date","shortcuts","onChange"])]),remark:l(({record:t})=>[u(m(t.remark||"-"),1)]),status:l(({record:t})=>[a(He,{modelValue:t.status,"onUpdate:modelValue":v=>t.status=v,"checked-value":1,"unchecked-value":2,onChange:v=>qe({id:`${t.id}`,status:Number(`${t.status}`)})},null,8,["modelValue","onUpdate:modelValue","onChange"])]),operations:l(({record:t})=>[a(q,{type:"text",size:"small",onClick:v=>Ce({user_id:`${t.user_id}`,quota_expires_at:`${t.quota_expires_at}`})},{default:l(()=>[u(m(e.$t("user.columns.operations.grantQuota")),1)]),_:2},1032,["onClick"]),a(q,{type:"text",size:"small",onClick:v=>De({user_id:`${t.user_id}`,models:`${t.models}`.split(",")})},{default:l(()=>[u(m(e.$t("user.columns.operations.models")),1)]),_:2},1032,["onClick"]),a(q,{type:"text",size:"small",onClick:v=>Ie(t.id)},{default:l(()=>[u(m(e.$t("user.columns.operations.view")),1)]),_:2},1032,["onClick"]),a(q,{type:"text",size:"small",onClick:v=>e.$router.push({name:"UserUpdate",query:{id:`${t.id}`}})},{default:l(()=>[u(m(e.$t("user.columns.operations.update")),1)]),_:2},1032,["onClick"]),a(Te,{content:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u5417?",onOk:v=>me({id:`${t.id}`})},{default:l(()=>[a(q,{type:"text",size:"small"},{default:l(()=>[u(m(e.$t("user.columns.operations.delete")),1)]),_:1})]),_:2},1032,["onOk"])]),_:1},8,["loading","pagination","columns","data","size","row-selection"]),a(Ge,{title:e.$t("menu.user.detail"),"unmount-on-close":"","render-to-body":"",width:700,footer:!1,visible:R.value,onCancel:Fe},{default:l(()=>[a(Ga,{id:ee.value},null,8,["id"])]),_:1},8,["title","visible"]),a(ne,{visible:z.value,"onUpdate:visible":o[10]||(o[10]=t=>z.value=t),title:e.$t("user.form.title.grantQuota"),"ok-text":e.$t("user.button.save"),onCancel:Ue,onBeforeOk:xe},{default:l(()=>[a(O,{ref_key:"formRef",ref:Y,model:n.value},{default:l(()=>[a(g,{field:"quota",label:e.$t("user.label.quota"),rules:[{required:!0,message:e.$t("user.error.quota.required")}]},{default:l(()=>[a(E,{modelValue:n.value.quota,"onUpdate:modelValue":o[7]||(o[7]=t=>n.value.quota=t),placeholder:e.$t("user.placeholder.grant_quota"),precision:0,min:-9999999999999,max:9999999999999,style:{"margin-right":"10px"}},null,8,["modelValue","placeholder"]),$("div",null," $"+m(n.value.quota?s(N)(n.value.quota):"0.00"),1)]),_:1},8,["label","rules"]),a(g,null,{default:l(()=>[a(je,{modelValue:L.value,"onUpdate:modelValue":o[8]||(o[8]=t=>L.value=t),type:"button",onChange:Ve},{default:l(()=>[a(C,{value:1},{default:l(()=>[u(" $1 ")]),_:1}),a(C,{value:5},{default:l(()=>[u(" $5 ")]),_:1}),a(C,{value:10},{default:l(()=>[u(" $10 ")]),_:1}),a(C,{value:20},{default:l(()=>[u(" $20 ")]),_:1}),a(C,{value:100},{default:l(()=>[u(" $100 ")]),_:1}),a(C,{value:500},{default:l(()=>[u(" $500 ")]),_:1}),a(C,{value:1e3},{default:l(()=>[u(" $1000 ")]),_:1})]),_:1},8,["modelValue","onChange"])]),_:1}),a(g,{field:"quota_expires_at",label:e.$t("user.label.quota_expires_at")},{default:l(()=>[a(ue,{modelValue:n.value.quota_expires_at,"onUpdate:modelValue":o[9]||(o[9]=t=>n.value.quota_expires_at=t),placeholder:e.$t("user.placeholder.quota_expires_at"),"time-picker-props":{defaultValue:"23:59:59"},"disabled-date":t=>s(i)(t).isBefore(s(i)()),position:"tl",style:{width:"100%"},"show-time":"",shortcuts:[{label:"1",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(1,"day")},{label:"7",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(7,"day")},{label:"15",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(15,"day")},{label:"30",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(30,"day")},{label:"90",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(90,"day")},{label:"180",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(180,"day")},{label:"365",value:()=>s(i)(new Date(n.value.quota_expires_at||new Date)).add(365,"day")}]},null,8,["modelValue","placeholder","disabled-date","shortcuts"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"]),a(ne,{visible:S.value,"onUpdate:visible":o[12]||(o[12]=t=>S.value=t),title:e.$t("user.form.title.models"),"ok-text":e.$t("user.button.save"),width:700,onCancel:Se,onBeforeOk:ze},{default:l(()=>[a(O,{ref_key:"modelsFormRef",ref:Z,model:k.value},{default:l(()=>[a(g,{field:"models",label:e.$t("user.label.models")},{default:l(()=>[a(te,{modelValue:k.value.models,"onUpdate:modelValue":o[11]||(o[11]=t=>k.value.models=t),placeholder:e.$t("user.placeholder.models"),multiple:"","allow-search":"","allow-clear":"",style:{"max-height":"220px",display:"block",overflow:"auto"}},{default:l(()=>[(V(!0),I(G,null,j(K.value,t=>(V(),ie(Je,{key:t.id,value:t.id,label:t.name},null,8,["value","label"]))),128))]),_:1},8,["modelValue","placeholder"])]),_:1},8,["label"])]),_:1},8,["model"])]),_:1},8,["visible","title","ok-text"])]),_:1})])}}});const Pt=ta(et,[["__scopeId","data-v-de2bdb82"]]);export{Pt as default};
