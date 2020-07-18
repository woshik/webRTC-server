(this["webpackJsonpmultiparty-meeting"]=this["webpackJsonpmultiparty-meeting"]||[]).push([[20],{246:function(e,a,t){"use strict";t.r(a);var o=t(0),n=t.n(o),r=t(13),i=t(104),l=t(410),s=t(49),m=t(11),c=t(106),d=t(272),g=t.n(d),u=t(107),b=t.n(u),p=t(20),y=t(350),h=t(91),E=t(210),f=t(597),w=t(595),v=t(351),I=t.n(v),N=t(223),k=t(66),j=t(603),L=t(624),M=t(625),O=t(314),P=t.n(O),T=t(214),B=t(215),R=t(596);const C=e=>({root:{display:"flex",width:"100%",height:"100%",backgroundColor:"var(--background-color)",backgroundImage:"url(".concat(window.config?window.config.background:null,")"),backgroundAttachment:"fixed",backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat"},dialogTitle:{},dialogPaper:{width:"30vw",padding:e.spacing(2),[e.breakpoints.down("lg")]:{width:"40vw"},[e.breakpoints.down("md")]:{width:"50vw"},[e.breakpoints.down("sm")]:{width:"70vw"},[e.breakpoints.down("xs")]:{width:"90vw"}},logo:{display:"block",paddingBottom:"1vh"},loginButton:{position:"absolute",right:e.spacing(2),top:e.spacing(2),padding:0},largeIcon:{fontSize:"2em"},largeAvatar:{width:50,height:50},green:{color:"rgba(0, 153, 0, 1)"},red:{color:"rgba(153, 0, 0, 1)"}}),A=Object(m.a)(C)(e=>{const a=Object(o.useState)(!1),t=Object(s.a)(a,2),r=t[0],i=t[1],m=Object(y.a)();Object(o.useEffect)(()=>{const e=setTimeout(()=>i(!0),1e3),a=setTimeout(()=>i(!1),4e3);return()=>{clearTimeout(e),clearTimeout(a)}},[]);const c=e.children,d=e.classes,u=e.myPicture,b=e.onLogin,p=e.loggedIn,h=Object(l.a)(e,["children","classes","myPicture","onLogin","loggedIn"]),E=p?m.formatMessage({id:"tooltip.logout",defaultMessage:"Log out"}):m.formatMessage({id:"tooltip.login",defaultMessage:"Log in"});return n.a.createElement(T.a,Object.assign({disableTypography:!0,className:d.dialogTitle},h),window.config.logo&&n.a.createElement("img",{alt:"Logo",className:d.logo,src:window.config.logo}),n.a.createElement(k.a,{variant:"h5"},c),window.config.loginEnabled&&n.a.createElement(M.a,{onClose:()=>{i(!1)},onOpen:()=>{i(!0)},open:r,title:E,placement:"left"},n.a.createElement(w.a,{"aria-label":"Account",className:d.loginButton,color:"inherit",onClick:b},u?n.a.createElement(N.a,{src:u,className:d.largeAvatar}):n.a.createElement(I.a,{className:g()(d.largeIcon,p?d.green:null)}))))}),S=Object(m.a)(e=>({root:{padding:e.spacing(2)}}))(B.a),q=Object(m.a)(e=>({root:{margin:0,padding:e.spacing(1)}}))(R.a);var D=Object(c.b)(Object(i.b)(e=>({room:e.room,displayName:e.settings.displayName,displayNameInProgress:e.me.displayNameInProgress,loginEnabled:e.me.loginEnabled,loggedIn:e.me.loggedIn,myPicture:e.me.picture}),e=>({changeDisplayName:a=>{e(p.b(a))}}),null,{areStatesEqual:(e,a)=>a.room.inLobby===e.room.inLobby&&a.room.signInRequired===e.room.signInRequired&&a.room.overRoomLimit===e.room.overRoomLimit&&a.settings.displayName===e.settings.displayName&&a.me.displayNameInProgress===e.me.displayNameInProgress&&a.me.loginEnabled===e.me.loginEnabled&&a.me.loggedIn===e.me.loggedIn&&a.me.picture===e.me.picture})(Object(m.a)(C)(({roomClient:e,room:a,roomId:t,displayName:o,displayNameInProgress:r,loggedIn:i,myPicture:l,changeDisplayName:s,classes:m})=>{const c=Object(y.a)();return n.a.createElement("div",{className:m.root},n.a.createElement(E.a,{open:!0,classes:{paper:m.dialogPaper}},n.a.createElement(A,{myPicture:l,onLogin:()=>{i?e.logout(t):e.login(t)},loggedIn:i},window.config.title?window.config.title:"Multiparty meeting",n.a.createElement("hr",null)),n.a.createElement(S,null,n.a.createElement(f.a,{gutterBottom:!0},n.a.createElement(h.a,{id:"room.aboutToJoin",defaultMessage:"You are about to join a meeting"})),n.a.createElement(f.a,{variant:"h6",gutterBottom:!0,align:"center"},n.a.createElement(h.a,{id:"room.roomId",defaultMessage:"Room ID: {roomName}",values:{roomName:t}})),n.a.createElement(f.a,{gutterBottom:!0},n.a.createElement(h.a,{id:"room.setYourName",defaultMessage:"Set your name for participation, \n\t\t\t\t\t\t\t\tand choose how you want to join:"})),n.a.createElement(L.a,{id:"displayname",label:c.formatMessage({id:"label.yourName",defaultMessage:"Your name"}),value:o,variant:"outlined",margin:"normal",disabled:r,onChange:e=>{const a=e.target.value;s(a)},onKeyDown:t=>{switch(t.key){case"Enter":case"Escape":""===o&&s("Guest"),a.inLobby&&e.changeDisplayName(o)}},onBlur:()=>{""===o&&s("Guest"),a.inLobby&&e.changeDisplayName(o)},fullWidth:!0}),!a.inLobby&&a.overRoomLimit&&n.a.createElement(f.a,{className:m.red,variant:"h6",gutterBottom:!0},n.a.createElement(h.a,{id:"room.overRoomLimit",defaultMessage:"The room is full, retry after some time."}))),a.inLobby?n.a.createElement(S,null,n.a.createElement(f.a,{className:m.green,gutterBottom:!0,variant:"h6",style:{fontWeight:"600"},align:"center"},n.a.createElement(h.a,{id:"room.youAreReady",defaultMessage:"Ok, you are ready"})),a.signInRequired?n.a.createElement(f.a,{gutterBottom:!0,variant:"h5",style:{fontWeight:"600"}},n.a.createElement(h.a,{id:"room.emptyRequireLogin",defaultMessage:"The room is empty! You can Log In to start \n\t\t\t\t\t\t\t\t\t\tthe meeting or wait until the host joins"})):n.a.createElement(f.a,{gutterBottom:!0,variant:"h5",style:{fontWeight:"600"}},n.a.createElement(h.a,{id:"room.locketWait",defaultMessage:"The room is locked - hang on until somebody lets you in ..."}))):n.a.createElement(q,null,n.a.createElement(j.a,{onClick:()=>{e.join({roomId:t,joinVideo:!1})},variant:"contained",color:"secondary"},n.a.createElement(h.a,{id:"room.audioOnly",defaultMessage:"Audio only"})),n.a.createElement(j.a,{onClick:()=>{e.join({roomId:t,joinVideo:!0})},variant:"contained",color:"secondary"},n.a.createElement(h.a,{id:"room.audioVideo",defaultMessage:"Audio and Video"}))),!b()()&&n.a.createElement(P.a,{buttonText:c.formatMessage({id:"room.consentUnderstand",defaultMessage:"I understand"})},n.a.createElement(h.a,{id:"room.cookieConsent",defaultMessage:"This website uses cookies to enhance the user experience"}))))}))),x=t(92);const W=(e=>{const a=n.a.lazy(e);return a.preload=e,a})(()=>Promise.all([t.e(0),t.e(14),t.e(6)]).then(t.bind(null,621)));a.default=Object(i.b)(e=>({room:e.room}),null,null,{areStatesEqual:(e,a)=>a.room===e.room})(e=>{const a=e.room,t=Object(r.f)().id.toLowerCase();return Object(o.useEffect)(()=>{W.preload()},[]),a.joined?n.a.createElement(o.Suspense,{fallback:n.a.createElement(x.a,null)},n.a.createElement(W,null)):n.a.createElement(D,{roomId:t})})}}]);
//# sourceMappingURL=20.9383db39.chunk.js.map