(window["webpackJsonppoint-3-d-form-widget"]=window["webpackJsonppoint-3-d-form-widget"]||[]).push([[0],{137:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Error during server connection"},"common":{"save":"Save","dataSaved":"Point3D successfully saved","dataDeleted":"Point3D successfully deleted","notAuthenticated":"User is not authenticated.","selectFile":"Upload new file","selectImageFile":"Upload new image","download":"Download","cancel":"Cancel","delete":"Delete","yes":"Yes","no":"No"},"validation":{"required":"{{field}} is required"},"entities":{"point3D":{"deleteDialog":{"title":"Delete point3D","description":"Are you sure?"},"notFound":"Point3D not found","deleted":"Point3D deleted","id":"entities.point3D.id","name":"entities.point3D.name","xcoord":"entities.point3D.xcoord","ycoord":"entities.point3D.ycoord","zcoord":"entities.point3D.zcoord"}}}')},138:function(e){e.exports=JSON.parse('{"error":{"dataLoading":"Errore durante la connessione al server"},"common":{"save":"Salva","dataSaved":"Point3D salvato/a con successo","dataDeleted":"Point3D eliminato/a con successo","notAuthenticated":"L\'utente non \xe8 autenticato.","selectFile":"Carica nuovo file","selectImageFile":"Carica nuova immagine","download":"Scarica","cancel":"Annulla","delete":"Elimina","yes":"Si","no":"No"},"validation":{"required":"{{field}} \xe8 obbligatorio"},"entities":{"point3D":{"deleteDialog":{"title":"Elimina point3D","description":"Sei sicuro/a?"},"notFound":"Point3D non trovato/a","deleted":"Point3D eliminato/a","id":"entit\xe0.point3D.id","name":"entit\xe0.point3D.name","xcoord":"entit\xe0.point3D.xcoord","ycoord":"entit\xe0.point3D.ycoord","zcoord":"entit\xe0.point3D.zcoord"}}}')},161:function(e,t,n){e.exports=n(282)},282:function(e,t,n){"use strict";n.r(t);var a=n(7),r=n(8),o=n(12),i=n(6),c=n(11),s=n(79),l=n(41),u=n(0),d=n.n(u),p=n(13),f=n.n(p),h=n(127),m=n.n(h),b=n(331),v=n(335),y=n(329),O=n(149),g=n(18),E=d.a.createContext(null),k=n(37),D=n(92),j=n(40),w={en:n(137),it:n(138)};function C(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var S=Object.keys(w).reduce((function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?C(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,Object(l.a)({},t,Object(l.a)({},"translation",w[t])))}),{}),x=D.a.t,P=function(e){!function(e,t){D.a.use(j.a).init({defaultNs:"translation",interpolation:{escapeValue:!1},resources:S,lng:e||t,fallbackLng:t,react:{useSuspense:!1}})}(e,"en"),function(e){var t={mixed:{required:function(t){var n=t.path;return e("validation.required",{field:e("entities.point3D.".concat(n))})}}};k.c(t)}(x)},T=function(e){return function(t){return function(e,t){var n=new CustomEvent(e,{detail:{payload:t}});window.dispatchEvent(n)}(e,t)}},z={tableAdd:"point3D.table.add",tableSelect:"point3D.table.select"},F={create:"point3D.form.create",update:"point3D.form.update",errorCreate:"point3D.form.errorCreate",errorUpdate:"point3D.form.errorUpdate"},N=n(15),U=n.n(N),A=n(26),R=n(20),M=n(2),L=n.n(M),I=(L.a.shape({initialized:L.a.bool,authenticated:L.a.bool}),n(150));L.a.oneOfType([L.a.func,L.a.shape({current:L.a.elementType}),L.a.shape(null)]);function H(e){var t=function(t){function n(){var t,r;Object(a.a)(this,n);for(var c=arguments.length,s=new Array(c),l=0;l<c;l++)s[l]=arguments[l];return(r=Object(o.a)(this,(t=Object(i.a)(n)).call.apply(t,[this].concat(s)))).renderWrappedComponent=function(t){var n=r.props,a=n.forwardedRef,o=Object(I.a)(n,["forwardedRef"]);return d.a.createElement(e,Object.assign({},o,{ref:a,keycloak:t}))},r}return Object(c.a)(n,t),Object(r.a)(n,[{key:"render",value:function(){return d.a.createElement(E.Consumer,null,this.renderWrappedComponent)}}]),n}(u.Component);return t.defaultProps={forwardedRef:function(){}},Object(u.forwardRef)((function(e,n){return d.a.createElement(t,Object.assign({},e,{forwardedRef:n}))}))}var W=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?t:null},B=function(e){var t=e.children,n=e.keycloak;return n.initialized&&n.authenticated?null:t},J=function(){return{headers:new Headers({Authorization:"Bearer ".concat(window&&window.entando&&window.entando.keycloak&&window.entando.keycloak.authenticated?window.entando.keycloak.token:""),"Content-Type":"application/json"})}},q=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t,n);case 2:if(204!==(a=e.sent).status){e.next=5;break}return e.abrupt("return",{});case 5:return e.abrupt("return",a.status>=200&&a.status<300?a.json():Promise.reject(new Error(a.statusText||a.status)));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function V(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var G="api/point-3-ds",Y=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"GET"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),Q=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G),r=V({},J(),{method:"POST",body:n?JSON.stringify(n):null}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(A.a)(U.a.mark((function e(t,n,a){var r,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(t,"/").concat(G,"/").concat(n),o=V({},J(),{method:"PUT",body:a?JSON.stringify(a):null}),e.abrupt("return",q(r,o));case 3:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(A.a)(U.a.mark((function e(t,n){var a,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat(t,"/").concat(G,"/").concat(n),r=V({},J(),{method:"DELETE"}),e.abrupt("return",q(a,r));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=n(4),_=n(334),ee=n(321),te=n(317),ne=n(5),ae=n(322),re=n(140),oe=n.n(re),ie=n(141),ce=n.n(ie),se=n(139),le=n.n(se),ue=n(142),de=n.n(ue),pe={success:le.a,error:oe.a,info:ce.a},fe={success:3e3,error:null,info:5e3},he=function e(t){var n=t.className,a=t.classes,r=t.status,o=t.message,i=t.onClose,c=!!o,s=r||e.INFO,l=pe[s],u=fe[s],p=d.a.createElement("span",{className:a.message},d.a.createElement(l,{className:Object($.a)(a.icon,a.iconStatus)}),o);return d.a.createElement(_.a,{open:c,onClose:i,autoHideDuration:u},d.a.createElement(ee.a,{className:Object($.a)(a[s],n),message:p,action:[d.a.createElement(ae.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},d.a.createElement(de.a,{className:a.icon}))]}))};he.SUCCESS="success",he.ERROR="error",he.defaultProps={message:null,className:"",status:he.INFO="info",onClose:function(){}};var me=Object(ne.a)((function(e){return{message:{display:"flex",alignItems:"center"},icon:{fontSize:20},iconStatus:{opacity:.9,marginRight:e.spacing(1)},success:{backgroundColor:te.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main}}}),{withTheme:!0})(he),be=(L.a.shape({id:L.a.number,name:L.a.string,xcoord:L.a.number,ycoord:L.a.number,zcoord:L.a.number}),L.a.shape({id:L.a.oneOfType([L.a.string,L.a.number]),name:L.a.string,xcoord:L.a.oneOfType([L.a.string,L.a.number]),ycoord:L.a.oneOfType([L.a.string,L.a.number]),zcoord:L.a.oneOfType([L.a.string,L.a.number])}),L.a.shape({id:L.a.oneOfType([L.a.bool,L.a.shape()]),name:L.a.oneOfType([L.a.bool,L.a.shape()]),xcoord:L.a.oneOfType([L.a.bool,L.a.shape()]),ycoord:L.a.oneOfType([L.a.bool,L.a.shape()]),zcoord:L.a.oneOfType([L.a.bool,L.a.shape()])}),L.a.shape({id:L.a.oneOfType([L.a.string,L.a.shape()]),name:L.a.oneOfType([L.a.string,L.a.shape()]),xcoord:L.a.oneOfType([L.a.string,L.a.shape()]),ycoord:L.a.oneOfType([L.a.string,L.a.shape()]),zcoord:L.a.oneOfType([L.a.string,L.a.shape()])}),n(148)),ve=n(151),ye=n(327),Oe=n(328),ge=n(330),Ee=n(333),ke=n(326),De=n(324),je=n(325),we=n(323),Ce=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={open:!1},n.handleOpen=n.handleOpen.bind(Object(R.a)(n)),n.discard=n.discard.bind(Object(R.a)(n)),n.confirm=n.confirm.bind(Object(R.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleOpen",value:function(){this.setState((function(){return{open:!0}}))}},{key:"handleClose",value:function(e){var t=this.props.onCloseDialog;this.setState((function(){return{open:!1}})),t(e)}},{key:"discard",value:function(){this.handleClose(t.DISCARD)}},{key:"confirm",value:function(){this.handleClose(t.CONFIRM)}},{key:"render",value:function(){var e=this.state.open,t=this.props,n=t.dialog,a=n.title,r=n.description,o=n.confirmLabel,i=n.discardLabel,c=t.Renderer;return d.a.createElement("div",null,d.a.createElement(c,{onClick:this.handleOpen}),d.a.createElement(Ee.a,{open:e,onClose:this.handleClose,"aria-labelledby":"confirmation-dialog-title","aria-describedby":"confirmation-dialog-description"},d.a.createElement(we.a,{id:"confirmation-dialog-title"},a),d.a.createElement(De.a,null,d.a.createElement(je.a,{id:"confirmation-dialog-description"},r)),d.a.createElement(ke.a,null,d.a.createElement(ye.a,{onClick:this.discard,autoFocus:!0},i),d.a.createElement(ye.a,{onClick:this.confirm,color:"primary"},o))))}}]),t}(u.PureComponent);Ce.CONFIRM="CONFIRM",Ce.DISCARD="DISCARD";var Se=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).handleConfirmationDialogAction=n.handleConfirmationDialogAction.bind(Object(R.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"handleConfirmationDialogAction",value:function(e){var t=this.props,n=t.onDelete,a=t.values;switch(e){case Ce.CONFIRM:n(a)}}},{key:"render",value:function(){var e=this.props,t=e.classes,n=e.values,a=e.touched,r=e.errors,o=e.handleChange,i=e.handleBlur,c=e.handleSubmit,s=e.onDelete,l=e.onCancelEditing,u=e.isSubmitting,p=e.t,f=function(e){return r[e]&&a[e]?r[e]:""};return d.a.createElement("form",{onSubmit:function(e){e.stopPropagation(),c(e)},className:t.root,"data-testid":"point3D-form"},d.a.createElement(Oe.a,{container:!0,spacing:2},d.a.createElement("input",{type:"hidden",id:"point3D-id","data-testid":"point3D-id",value:n.id}),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point3D-name",error:r.name&&a.name,helperText:f("name"),className:t.textField,onChange:o,onBlur:i,value:n.name,name:"name",label:p("entities.point3D.name")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point3D-xcoord",error:r.xcoord&&a.xcoord,helperText:f("xcoord"),className:t.textField,type:"number",onChange:o,onBlur:i,value:n.xcoord,name:"xcoord",label:p("entities.point3D.xcoord")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point3D-ycoord",error:r.ycoord&&a.ycoord,helperText:f("ycoord"),className:t.textField,type:"number",onChange:o,onBlur:i,value:n.ycoord,name:"ycoord",label:p("entities.point3D.ycoord")})),d.a.createElement(Oe.a,{item:!0,xs:12,sm:6},d.a.createElement(ge.a,{id:"point3D-zcoord",error:r.zcoord&&a.zcoord,helperText:f("zcoord"),className:t.textField,type:"number",onChange:o,onBlur:i,value:n.zcoord,name:"zcoord",label:p("entities.point3D.zcoord")})),s&&d.a.createElement(Ce,{onCloseDialog:this.handleConfirmationDialogAction,dialog:{title:p("entities.point3D.deleteDialog.title"),description:p("entities.point3D.deleteDialog.description"),confirmLabel:p("common.yes"),discardLabel:p("common.no")},Renderer:function(e){var t=e.onClick;return d.a.createElement(ye.a,{onClick:t,disabled:u},p("common.delete"))}}),d.a.createElement(ye.a,{onClick:l,disabled:u,"data-testid":"cancel-btn"},p("common.cancel")),d.a.createElement(ye.a,{type:"submit",color:"primary",disabled:u,"data-testid":"submit-btn"},p("common.save"))))}}]),t}(u.PureComponent);Se.defaultProps={onCancelEditing:function(){},classes:{},values:{},touched:{},errors:{},onDelete:null};var xe={id:"",name:"",xcoord:"",ycoord:"",zcoord:""},Pe={mapPropsToValues:function(e){return e.point3D||xe},enableReinitialize:!0,validationSchema:k.b().shape({id:k.a(),name:k.d(),xcoord:k.a(),ycoord:k.a(),zcoord:k.a()}),handleSubmit:function(e,t){var n=t.setSubmitting;(0,t.props.onSubmit)(e),n(!1)},displayName:"Point3DForm"},Te=Object(ve.a)(Object(ne.a)((function(e){return{root:{margin:e.spacing(3)},textField:{width:"100%"}}}),{withTheme:!0}),Object(j.b)(),Object(be.a)(Pe))(Se),ze=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(R.a)(n)),n.handleDelete=n.handleDelete.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.keycloak;e.initialized&&e.authenticated&&this.fetchData()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.keycloak,a=t.id,r=n.initialized&&n.authenticated,o=e.keycloak.authenticated!==r,i=a&&a!==e.id;r&&(i||o)&&this.fetchData()}},{key:"fetchData",value:function(){var e=Object(A.a)(U.a.mark((function e(){var t,n,a,r,o;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.keycloak,a=t.id,r=t.serviceUrl,!(n.initialized&&n.authenticated)||!a){e.next=13;break}return e.prev=3,e.next=6,Y(r,a);case 6:o=e.sent,this.setState((function(){return{point3D:o}})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(){return e.apply(this,arguments)}}()},{key:"closeNotification",value:function(){this.setState((function(){return{notificationMessage:null}}))}},{key:"handleSubmit",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var n,a,r,o,i,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onUpdate,o=n.keycloak,i=n.serviceUrl,!(o.initialized&&o.authenticated)){e.next=14;break}return e.prev=3,e.next=6,X(i,t.id,t);case 6:c=e.sent,r(c),this.setState({point3D:c,notificationMessage:a("common.dataSaved"),notificationStatus:me.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleDelete",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var n,a,r,o,i;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onDelete,o=n.keycloak,i=n.serviceUrl,!(o.initialized&&o.authenticated)){e.next=13;break}return e.prev=3,e.next=6,Z(i,t.id);case 6:r(t),this.setState({point3D:null,notificationMessage:a("common.dataDeleted"),notificationStatus:me.SUCCESS}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(3),this.handleError(e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.t;(0,t.onError)(e),this.setState((function(){return{notificationMessage:n("error.dataLoading"),notificationStatus:me.ERROR}}))}},{key:"render",value:function(){var e,t=this.props,n=t.keycloak,a=t.onCancelEditing,r=t.t,o=this.state,i=o.notificationMessage,c=o.notificationStatus,s=o.point3D;return e="undefined"===typeof s?r("entities.point3D.notFound"):null===s?r("entities.point3D.deleted"):d.a.createElement(Te,{point3D:s,onSubmit:this.handleSubmit,onCancelEditing:a,onDelete:this.handleDelete}),d.a.createElement(d.a.Fragment,null,d.a.createElement(B,{keycloak:n},r("common.notAuthenticated")),d.a.createElement(W,{keycloak:n},e),d.a.createElement(me,{status:c,message:i,onClose:this.closeNotification}))}}]),t}(u.PureComponent);ze.defaultProps={onCancelEditing:function(){},onDelete:function(){},onUpdate:function(){},onError:function(){},serviceUrl:""};var Fe=H(Object(j.b)()(ze)),Ne=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(o.a)(this,Object(i.a)(t).call(this,e))).state={notificationMessage:null,notificationStatus:null},n.closeNotification=n.closeNotification.bind(Object(R.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(R.a)(n)),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"closeNotification",value:function(){this.setState({notificationMessage:null})}},{key:"handleSubmit",value:function(){var e=Object(A.a)(U.a.mark((function e(t){var n,a,r,o,i,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.props,a=n.t,r=n.onCreate,o=n.keycloak,i=n.serviceUrl,!(o.initialized&&o.authenticated)){e.next=14;break}return e.prev=3,e.next=6,Q(i,t);case 6:c=e.sent,r(c),this.setState({notificationMessage:a("common.dataSaved"),notificationStatus:me.SUCCESS}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),this.handleError(e.t0);case 14:case"end":return e.stop()}}),e,this,[[3,11]])})));return function(t){return e.apply(this,arguments)}}()},{key:"handleError",value:function(e){var t=this.props,n=t.onError,a=t.t;n(e),this.setState({notificationMessage:a("error.dataLoading"),notificationStatus:me.ERROR})}},{key:"render",value:function(){var e=this.props,t=e.keycloak,n=e.onCancelEditing,a=e.t,r=this.state,o=r.notificationMessage,i=r.notificationStatus;return d.a.createElement(d.a.Fragment,null,d.a.createElement(B,{keycloak:t},a("common.notAuthenticated")),d.a.createElement(W,{keycloak:t},d.a.createElement(Te,{onSubmit:this.handleSubmit,onCancelEditing:n})),d.a.createElement(me,{status:i,message:o,onClose:this.closeNotification}))}}]),t}(u.PureComponent);Ne.defaultProps={onError:function(){},onCancelEditing:function(){},onCreate:function(){},serviceUrl:""};var Ue=H(Object(j.b)()(Ne));function Ae(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ae(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ae(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Me=function(){return window&&window.entando&&window.entando.keycloak&&Re({},window.entando.keycloak,{initialized:!0})||{initialized:!1}},Le={id:"id",hidden:"hidden",locale:"locale",disableDefaultEventHandler:"disable-default-event-handler",serviceUrl:"service-url"},Ie=function(e){function t(){var e,n;Object(a.a)(this,t);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(n=Object(o.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).keycloak=Me(),n.onCreate=T(F.create),n.onCancelEditing=T(F.cancelEditing),n.onDelete=T(F.delete),n.onUpdate=T(F.update),n.onErrorCreate=T(F.errorCreate),n.onErrorUpdate=T(F.errorUpdate),n}return Object(c.a)(t,e),Object(r.a)(t,[{key:"attributeChangedCallback",value:function(e,t,n){if(this.container&&t!==n){if(!Object.values(Le).includes(e))throw new Error("Untracked changed attribute: ".concat(e));e===Le.disableDefaultEventHandler&&this.onToggleDisableDefaultEvent(),this.render()}}},{key:"connectedCallback",value:function(){var e=this;this.container=document.createElement("div"),this.mountPoint=document.createElement("div"),this.container.appendChild(this.mountPoint);var t,n,a=this.attachShadow({mode:"open"});a.appendChild(this.container),this.jss=Object(g.b)(Re({},Object(b.a)(),{insertionPoint:this.container})),this.muiTheme=Object(O.a)({props:{MuiDialog:{container:this.mountPoint},MuiPopover:{container:this.mountPoint}}}),this.keycloak=Re({},Me(),{initialized:!0}),this.unsubscribeFromKeycloakEvent=(t="keycloak",n=function(){e.keycloak=Re({},Me(),{initialized:!0}),e.render()},window.addEventListener(t,n),function(){window.removeEventListener(t,n)}),this.onToggleDisableDefaultEvent(),this.render(),m()(a)}},{key:"disconnectedCallback",value:function(){this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent()}},{key:"defaultWidgetEventHandler",value:function(){var e=this;return function(t){var n=z.tableAdd,a=z.cancelEditing,r=z.create,o=z.edit,i=z.delete,c=z.tableSelect,s=z.update,l=Le.id;switch(t.type){case n:e.setAttribute(l,"");break;case o:e.hidden=!1,e.setAttribute(l,t.detail.payload.id);break;case r:case a:case s:e.hidden=!0;break;case i:e.hidden=!0,e.setAttribute(l,"");break;case c:e.setAttribute(l,t.detail.payload.id);break;default:throw new Error("Unsupported event: ".concat(t.type))}}}},{key:"onToggleDisableDefaultEvent",value:function(){var e,t,n="true"===this.getAttribute(Le.disableDefaultEventHandler);if(n!==this.defaultEventHandlerDisabled){if(n)this.unsubscribeFromWidgetEvents&&this.unsubscribeFromWidgetEvents(),this.unsubscribeFromKeycloakEvent&&this.unsubscribeFromKeycloakEvent();else{var a=this.defaultWidgetEventHandler();this.unsubscribeFromWidgetEvents=(e=Object.values(z),t=a,e.forEach((function(e){return window.addEventListener(e,t)})),function(){e.forEach((function(e){return window.removeEventListener(e,t)}))})}this.defaultEventHandlerDisabled=n}}},{key:"render",value:function(){var e=this.getAttribute(Le.serviceUrl)||"";if("true"===this.getAttribute(Le.hidden))f.a.render(d.a.createElement(d.a.Fragment,null));else{var t=this.getAttribute(Le.locale);P(t);var n=this.getAttribute(Le.id),a=n?d.a.createElement(Fe,{id:n,onUpdate:this.onUpdate,onError:this.onErrorUpdate,serviceUrl:e},null):d.a.createElement(Ue,{onCreate:this.onCreate,onError:this.onErrorCreate,serviceUrl:e},null);f.a.render(d.a.createElement(E.Provider,{value:this.keycloak},d.a.createElement(v.b,{jss:this.jss},d.a.createElement(y.a,{theme:this.muiTheme},a))),this.mountPoint)}}}],[{key:"observedAttributes",get:function(){return Object.values(Le)}}]),t}(Object(s.a)(HTMLElement));customElements.define("point-3-d-form",Ie)}},[[161,1,2]]]);
//# sourceMappingURL=main.7b18792d.chunk.js.map