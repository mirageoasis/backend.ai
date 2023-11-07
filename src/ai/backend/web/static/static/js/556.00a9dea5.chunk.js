"use strict";(self.webpackChunkbackend_ai_webui_react=self.webpackChunkbackend_ai_webui_react||[]).push([[556,502],{77758:function(n,e,a){a.d(e,{Z:function(){return o}});var l=a(1413),t=a(36459),i=a(65113),r=(a(4519),a(2556)),o=function(n){var e,a=Object.assign({},((0,t.Z)(n),n));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:".ant-modal.bai-modal .ant-modal-content {\n  padding: var(--general-modal-content-padding, 0);\n}\n.ant-modal.bai-modal .ant-modal-body {\n  padding: var(--general-modal-body-padding, 0 24px);\n}\n\n.ant-modal.bai-modal .ant-modal-footer {\n  padding: var(--general-modal-footer-padding, 0 20px 24px 20px);\n}\n\n.ant-modal.bai-modal .ant-modal-header {\n  border-bottom: 1px solid rgb(221, 221, 221);\n  border-width: 100%;\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n}\n\n.ant-modal.bai-modal .ant-modal-content .ant-modal-header,\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  padding: var(--general-modal-header-padding, 10px 20px);\n  height: var(--general-modal-header-height, 69px);\n}\n\n.ant-modal.bai-modal .ant-modal-content > button.ant-modal-close {\n  /* center */\n  top: 0;\n}\n"}),(0,r.jsx)(i.Z,(0,l.Z)({centered:null===(e=a.centered)||void 0===e||e,className:"bai-modal"},a))]})}},61502:function(n,e,a){a.r(e),a.d(e,{default:function(){return Y},useShadowRoot:function(){return M},useWebComponentInfo:function(){return z}});var l=a(29439),t=a(74165),i=a(15861),r=a(1413);function o(n,e){var a=(0,r.Z)({},e);return function(n){for(var e,a=/(\w+)\s@\s*(\w+)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/g,t=[];null!==(e=a.exec(n));){var i=e,r=(0,l.Z)(i,5),o=r[0],s=r[1],d=r[2],u=r[3],c=r[4];t.push({fieldName:s,directive:d,argumentName:u,argumentValue:c,originFieldStr:o})}return t}(n).forEach((function(l){if("skipOnClient"===l.directive&&"if"===l.argumentName&&(n=!l.argumentValue||!0!==e[l.argumentValue.substring(1)]&&"true"!==l.argumentValue?n.replace(l.originFieldStr,l.originFieldStr.replace(/@\s*(skipOnClient)\s*\(\s*(\w+)\s*:\s*(\$?\w+)\s*\)/,"")):n.replace(l.originFieldStr,""),l.argumentValue.startsWith("$")&&2===n.split(l.argumentValue).length)){var t=l.argumentValue.substring(1),i=new RegExp(".*".concat(t,".*\n"),"g");n=n.replace(i,""),delete a[l.argumentValue.substring(1)]}})),{query:n,variables:a}}var s=a(41011);s.RelayFeatureFlags.ENABLE_RELAY_RESOLVERS=!0;var d=function(){var n=(0,i.Z)((0,t.Z)().mark((function n(e,a){var l,i,r,s,d,u;return(0,t.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=o(e.text||"",a),s={query:r.query,variables:r.variables},d=null===(l=globalThis.backendaiclient)||void 0===l?void 0:l.newSignedRequest("POST","/admin/gql",s),n.next=5,null===(i=globalThis.backendaiclient)||void 0===i?void 0:i._wrapWithPromise(d,!1,null,1e4,0).catch((function(n){}));case 5:if(n.t0=n.sent,n.t0){n.next=8;break}n.t0={};case 8:return u=n.t0,n.abrupt("return",u);case 10:case"end":return n.stop()}}),n)})));return function(e,a){return n.apply(this,arguments)}}();var u,c=new s.Environment({network:s.Network.create(d,void 0),store:new s.Store(new s.RecordSource)}),m=a(80382),g=a(27340),p=a(41239),v=a(47226),f=a(49883),b=a(66670),h=a(99517),x=a.n(h),y=(a(24989),a(79354)),k=a.n(y),S=a(79748),w=a.n(S),j=a(51714),Z=a.n(j),_=a(63540),T=a.n(_),F=a(18272),E=a.n(F),C=a(9666),P=a.n(C),L=a(64447),N=a(13881),I=a(4519),K=a(81748),O=a(87112),V=a(16980),R=a(51843),D=a(12674),Q=a(55144),U=a(73181),$=a(2556);x().extend(P()),x().extend(k()),x().extend(w()),x().extend(Z()),x().extend(E()),x().extend(T());var q=I.createContext(null),A=I.createContext(null),M=function(){return I.useContext(A)},z=function(){return I.useContext(q)},B=new O.QueryClient({defaultOptions:{queries:{suspense:!0,refetchOnWindowFocus:!1,retry:!1}}});L.ZP.use(K.Db).use(N.Z).init({backend:{loadPath:"/resources/i18n/{{lng}}.json"},lng:(null===globalThis||void 0===globalThis||null===(u=globalThis.backendaioptions)||void 0===u?void 0:u.get("current_language"))||"en",fallbackLng:"en",interpolation:{escapeValue:!1},react:{transSupportBasicHtmlNodes:!0,transKeepBasicHtmlNodesFor:["br","strong","span","code","p"]}});var W=function(){var n=(0,D.s0)();return(0,I.useLayoutEffect)((function(){var e=function(e){var a=e.detail;n(a,{replace:!0})};return document.addEventListener("react-navigate",e),function(){document.removeEventListener("react-navigate",e)}}),[n]),null},Y=function(n){var e=n.children,a=n.value,t=n.styles,i=n.shadowRoot,r=n.dispatchEvent,o=(0,I.useMemo)((function(){return(0,g.Df)()}),[]),s=function(){var n,e=(0,I.useState)(null===globalThis||void 0===globalThis||null===(n=globalThis.backendaioptions)||void 0===n?void 0:n.get("current_language")),a=(0,l.Z)(e,2),t=a[0],i=a[1],r=(0,K.$G)().i18n;return(0,I.useEffect)((function(){setTimeout((function(){return null===r||void 0===r?void 0:r.changeLanguage(t)}),0),x().locale(t)}),[]),(0,I.useEffect)((function(){var n=function(n){var e,a;i(null===n||void 0===n||null===(e=n.detail)||void 0===e?void 0:e.lang);var l=(null===n||void 0===n||null===(a=n.detail)||void 0===a?void 0:a.lang)||"en";null===r||void 0===r||r.changeLanguage(l),x().locale(l)};return window.addEventListener("langChanged",n),function(){return window.removeEventListener("langChanged",n)}}),[r]),[t]}(),d=(0,l.Z)(s,1)[0],u=(0,m.x)(),h=(0,I.useMemo)((function(){return{value:a,dispatchEvent:r,moveTo:function(n,e){r("moveTo",{path:n,params:e})}}}),[a,r]);return(0,$.jsx)($.Fragment,{children:c&&(0,$.jsx)(V.RelayEnvironmentProvider,{environment:c,children:(0,$.jsxs)(I.StrictMode,{children:[(0,$.jsxs)("style",{children:[t,".anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n/* fix: fixed column shadow display outside of a table wrapper */\n.ant-table-wrapper {\n  border-radius: 8px 8px 0 0;\n  overflow: hidden;\n}\n\n/* fix: the tooltip does not appear in the `<Form.Item tooltip={'something'}` when the popup container is a parent node of the trigger node. */\n.ant-form-item-label {\n  overflow: unset !important;\n}\n"]}),(0,$.jsx)(O.QueryClientProvider,{client:B,children:(0,$.jsx)(A.Provider,{value:i,children:(0,$.jsx)(q.Provider,{value:h,children:(0,$.jsx)(p.ZP,{getPopupContainer:function(n){return(null===n||void 0===n?void 0:n.parentNode)||i},locale:"ko"===d?b.Z:f.Z,theme:u,children:(0,$.jsx)(v.Z,{children:(0,$.jsx)(g.V9,{container:i,cache:o,children:(0,$.jsx)(I.Suspense,{fallback:"",children:(0,$.jsx)(R.VK,{children:(0,$.jsxs)(Q.QueryParamProvider,{adapter:U.Q,options:{},children:[(0,$.jsx)(W,{}),e]})})})})})})})})})]})})})}},4652:function(n,e,a){a.r(e);var l,t=a(1413),i=a(36459),r=a(87760),o=a(77758),s=a(61502),d=a(92171),u=a(93448),c=a(39883),m=a(82548),g=a(32048),p=a.n(g),v=(a(4519),a(81748)),f=a(87112),b=a(16980),h=a(2556);e.default=function(n){var e,g,x=Object.assign({},((0,i.Z)(n),n)),y=(0,v.$G)().t,k=(0,s.useWebComponentInfo)(),S=k.value,w=k.dispatchEvent;try{g=JSON.parse(S||"")}catch(K){g={open:!1,userEmail:""}}var j,Z=g,_=Z.open,T=Z.userEmail,F=(0,r.Dj)(),E=null===F||void 0===F?void 0:F.supports("sudo-session-enabled"),C=(0,f.useQuery)("isManagerSupportingTOTP",(function(){return F.isManagerSupportingTOTP()}),{suspense:!1}),P=C.data,L=C.isLoading;j=(null===F||void 0===F?void 0:F.supports("2FA"))&&P;var N=(0,b.useLazyLoadQuery)(void 0!==l?l:l=a(21960),{email:T,isNotSupportSudoSessionEnabled:!E,isTOTPSupported:null!==(e=j)&&void 0!==e&&e}).user,I={xxl:1,xl:1,lg:1,md:1,sm:1,xs:1};return(0,h.jsxs)(o.Z,(0,t.Z)((0,t.Z)({open:_,onCancel:function(){w("cancel",null)},centered:!0,title:y("credential.UserDetail"),footer:[(0,h.jsx)(d.ZP,{type:"primary",onClick:function(){w("cancel",null)},children:y("button.OK")},"ok")]},x),{},{children:[(0,h.jsx)("br",{}),(0,h.jsxs)(u.Z,{size:"small",column:I,title:y("credential.Information"),labelStyle:{width:"50%"},children:[(0,h.jsx)(u.Z.Item,{label:y("credential.UserID"),children:null===N||void 0===N?void 0:N.email}),(0,h.jsx)(u.Z.Item,{label:y("credential.UserName"),children:null===N||void 0===N?void 0:N.username}),(0,h.jsx)(u.Z.Item,{label:y("credential.FullName"),children:null===N||void 0===N?void 0:N.full_name}),(0,h.jsx)(u.Z.Item,{label:y("credential.DescActiveUser"),children:"active"===(null===N||void 0===N?void 0:N.status)?y("button.Yes"):y("button.No")}),(0,h.jsx)(u.Z.Item,{label:y("credential.DescRequirePasswordChange"),children:null!==N&&void 0!==N&&N.need_password_change?y("button.Yes"):y("button.No")}),E&&(0,h.jsx)(u.Z.Item,{label:y("credential.EnableSudoSession"),children:null!==N&&void 0!==N&&N.sudo_session_enabled?y("button.Yes"):y("button.No")}),j&&(0,h.jsx)(u.Z.Item,{label:y("webui.menu.TotpActivated"),children:(0,h.jsx)(c.Z,{spinning:L,children:null!==N&&void 0!==N&&N.totp_activated?y("button.Yes"):y("button.No")})})]}),(0,h.jsx)("br",{}),(0,h.jsxs)(u.Z,{size:"small",column:I,title:y("credential.Association"),labelStyle:{width:"50%"},children:[(0,h.jsx)(u.Z.Item,{label:y("credential.Domain"),children:null===N||void 0===N?void 0:N.domain_name}),(0,h.jsx)(u.Z.Item,{label:y("credential.Role"),children:null===N||void 0===N?void 0:N.role})]}),(0,h.jsx)("br",{}),(0,h.jsx)(u.Z,{title:y("credential.ProjectAndGroup"),labelStyle:{width:"50%"},children:(0,h.jsx)(u.Z.Item,{children:p().map(null===N||void 0===N?void 0:N.groups,(function(n){return(0,h.jsx)(m.Z,{children:null===n||void 0===n?void 0:n.name},null===n||void 0===n?void 0:n.id)}))})})]}))}},21960:function(n,e,a){a.r(e);var l=function(){var n=[{defaultValue:null,kind:"LocalArgument",name:"email"},{defaultValue:null,kind:"LocalArgument",name:"isNotSupportSudoSessionEnabled"},{defaultValue:null,kind:"LocalArgument",name:"isTOTPSupported"}],e=[{kind:"Variable",name:"email",variableName:"email"}],a={alias:null,args:null,kind:"ScalarField",name:"email",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"username",storageKey:null},t={alias:null,args:null,kind:"ScalarField",name:"need_password_change",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"full_name",storageKey:null},r={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},o={alias:null,args:null,kind:"ScalarField",name:"status",storageKey:null},s={alias:null,args:null,kind:"ScalarField",name:"domain_name",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"role",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},c={alias:null,args:null,concreteType:"UserGroup",kind:"LinkedField",name:"groups",plural:!0,selections:[u,{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null}],storageKey:null},m={alias:null,args:null,kind:"ScalarField",name:"sudo_session_enabled",storageKey:null},g={condition:"isTOTPSupported",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"totp_activated",storageKey:null}]};return{fragment:{argumentDefinitions:n,kind:"Fragment",metadata:null,name:"UserInfoModalQuery",selections:[{alias:null,args:e,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[a,l,t,i,r,o,s,d,c,m,g],storageKey:null}],type:"Queries",abstractKey:null},kind:"Request",operation:{argumentDefinitions:n,kind:"Operation",name:"UserInfoModalQuery",selections:[{alias:null,args:e,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[a,l,t,i,r,o,s,d,c,m,g,u],storageKey:null}]},params:{cacheID:"fcef32310e02b32233c1b2633e35036b",id:null,metadata:{},name:"UserInfoModalQuery",operationKind:"query",text:"query UserInfoModalQuery(\n  $email: String\n  $isNotSupportSudoSessionEnabled: Boolean!\n  $isTOTPSupported: Boolean!\n) {\n  user(email: $email) {\n    email\n    username\n    need_password_change\n    full_name\n    description\n    status\n    domain_name\n    role\n    groups {\n      id\n      name\n    }\n    sudo_session_enabled @skipOnClient(if: $isNotSupportSudoSessionEnabled)\n    totp_activated @include(if: $isTOTPSupported)\n    id\n  }\n}\n"}}}();l.hash="9cdff59ed81f83461fbbe0da1de55846",e.default=l}}]);
//# sourceMappingURL=556.00a9dea5.chunk.js.map