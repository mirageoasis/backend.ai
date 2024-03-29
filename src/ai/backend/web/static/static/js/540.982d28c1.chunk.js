"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[540],{38540:function(e,n,r){r.r(n),r.d(n,{passwordPattern:function(){return b}});var t=r(29439),a=r(43255),s=r(40406),o=r(50164),i=r(85911),u=r(99277),d=r(69080),c=r(44036),l=r(57054),w=r(65113),m=r(70389),f=r(38818),h=r(38812),p=r(4519),g=r(81748),P=r(2556),b=/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[_\W]).{8,}$/;n.default=function(){var e,n=(0,i.useWebComponentInfo)(),r=n.value,v=n.dispatchEvent;try{e=JSON.parse(r||"")}catch(L){e={open:!1,currentPassword:"",username:"",api_endpoint:""}}var Z=e,k=Z.open,j=Z.currentPassword,C=Z.username,_=Z.api_endpoint,x=c.Z.useToken().token,y=l.Z.useForm(),M=(0,t.Z)(y,1)[0],z=(0,g.$G)().t;(0,p.useEffect)((function(){k&&M.resetFields()}),[k,M]);var S=(0,s.M)({api_endpoint:_}),E=(0,o.Y)({mutationFn:function(e){return(0,a.Lc)({method:"POST",url:"/server/update-password-no-auth",body:e,client:S})}}),F=function(){M.validateFields().then((function(e){E.mutate({username:C,current_password:j,new_password:e.newPassword},{onSuccess:function(e,n,r){v("ok",null)},onError:function(e,n,r){}})}))};return(0,P.jsx)(w.Z,{open:k,centered:!0,mask:!1,onCancel:function(){v("cancel",null)},keyboard:!1,maskClosable:!1,footer:null,width:450,destroyOnClose:!0,forceRender:!0,children:(0,P.jsxs)(u.Z,{direction:"column",justify:"start",align:"stretch",gap:"md",style:{alignSelf:"stretch",paddingTop:x.paddingMD,paddingBottom:x.paddingMD},children:[(0,P.jsxs)(m.Z.Title,{level:3,style:{margin:0},children:[(0,P.jsx)(d.Z,{twoToneColor:x.colorWarning})," ",z("webui.menu.PleaseChangeYourPassword")]}),z("webui.menu.YouMushChangeYourPassword"),(0,P.jsxs)(l.Z,{form:M,layout:"vertical",initialValues:{currentPassword:j},disabled:E.isLoading,children:[(0,P.jsx)(l.Z.Item,{name:"newPassword",label:z("webui.menu.NewPassword"),rules:[{required:!0},{pattern:b,message:z("webui.menu.InvalidPasswordMessage").toString()},function(){return{validator:function(e,n){return j===n?Promise.reject(new Error(z("webui.menu.NewPasswordCannotBeSame").toString())):Promise.resolve()}}}],hasFeedback:!0,children:(0,P.jsx)(f.Z.Password,{})}),(0,P.jsx)(l.Z.Item,{name:"confirm",label:z("webui.menu.NewPasswordAgain"),dependencies:["newPassword"],hasFeedback:!0,rules:[{required:!0},function(e){var n=e.getFieldValue;return{validator:function(e,r){return r&&n("newPassword")!==r?Promise.reject(new Error(z("environment.PasswordsDoNotMatch").toString())):Promise.resolve()}}}],children:(0,P.jsx)(f.Z.Password,{onPressEnter:F})})]}),(0,P.jsx)(h.ZP,{type:"primary",onClick:F,loading:E.isLoading,children:z("webui.menu.Update")})]})})}},69080:function(e,n,r){r.d(n,{Z:function(){return u}});var t=r(87462),a=r(4519),s={icon:function(e,n){return{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M955.7 856l-416-720c-6.2-10.7-16.9-16-27.7-16s-21.6 5.3-27.7 16l-416 720C56 877.4 71.4 904 96 904h832c24.6 0 40-26.6 27.7-48zm-783.5-27.9L512 239.9l339.8 588.2H172.2z",fill:e}},{tag:"path",attrs:{d:"M172.2 828.1h679.6L512 239.9 172.2 828.1zM560 720a48.01 48.01 0 01-96 0 48.01 48.01 0 0196 0zm-16-304v184c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V416c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8z",fill:n}},{tag:"path",attrs:{d:"M464 720a48 48 0 1096 0 48 48 0 10-96 0zm16-304v184c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V416c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8z",fill:e}}]}},name:"warning",theme:"twotone"},o=r(9491),i=function(e,n){return a.createElement(o.Z,(0,t.Z)({},e,{ref:n,icon:s}))};var u=a.forwardRef(i)}}]);
//# sourceMappingURL=540.982d28c1.chunk.js.map